---
id: migrating-to-react-query-4
title: 迁移到React Query 4
---

## 破坏性更改

版本 4 是一次大版本更新，因此(肯定)有一些破坏性的更改存在：

### react-query 包现在重命名为 @tanstack/react-query

```diff
- import { useQuery } from 'react-query'
- import { ReactQueryDevtools } from 'react-query/devtools'

+ import { useQuery } from '@tanstack/react-query'
+ import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
```

#### Codemod

为了使迁移更轻松，v4 顺带了一个 codemod

> codemod 是一个非常好的工具，用以帮助你在含波坏性更改的更新之间进行迁移。不过还是需要请你彻底审查一下所生成的代码！
> 此外，有些较为罕见情况是 codemod 无法发现的，所以请留心日志输出。

你可以通过使用以下命令来轻松应用 codemod

如果你想针对`.js`或者`.jsx`文件迁移：

```sh
npx jscodeshift ./path/to/src/
  --extensions=js,jsx
  --transform=./node_modules/@tanstack/react-query/codemods/v4/replace-import-specifier.js

```

如果你想针对`.ts`或者`.tsx`文件迁移：

```sh
npx jscodeshift ./path/to/src/
  --extensions=ts,tsx
  --parser=tsx
  --transform=./node_modules/@tanstack/react-query/codemods/v4/replace-import-specifier.js
```

请注意在使用`Typescript`的情况下，你需要使用`tsx`作为解析器；否则，codemod 将不能被正确应用！

**注意:** 应用 codemod 可能会破坏你代码已有的格式，所以请不要忘记在应用 codemod 后运行`prettier`和/或`eslint`！

**注意:** codemod _只会改变 import 的内容_——你仍然需要手动安装独立的 devtools 软件包。

### 查询键值（和修改键值）现在默认是一个数组

在 v3 中，查询和突变键值可以是一个字符串或一个数组。但在内部，React Query 一直都将其转为数组使用，而且我们有时会将这种数组暴露给消费者。
例如，在`queryFn`中，你总是以数组的形式获得键值。这样使得与[默认查询函数](./default-query-function.md)组合使用的工作更容易。

然而，这个概念没有被贯穿到所有的 APIs 中。例如，当在[查询过滤器](./filters.md)上使用`predicate`函数时，你会得到原始查询键值（字符串或数组，而不是只有数组）。如果你使用混合了数组和字符串组成的查询键值，这种函数就变得难以使用——在使用全局回调时情况也是如此。

为了使得 APIs 风格统一，我们决定键值统一为数组：

```diff
- useQuery('todos', fetchTodos)
+ useQuery(['todos'], fetchTodos)
```

#### Codemod

同样，为了减少迁移代价，这也有对应的 codemod

> codemod 是一个非常好的工具，用以帮助你在含波坏性更改的更新之间进行迁移。不过还是需要请你彻底审查一下所生成的代码！
> 此外，有些较为罕见情况是 codemod 无法发现的，所以请留心日志输出。

你可以通过使用以下命令来轻松应用 codemod

如果你想针对`.js`或者`.jsx`文件迁移：

```
npx jscodeshift ./path/to/src/
  --extensions=js,jsx
  --transform=./node_modules/@tanstack/react-query/codemods/v4/key-transformation.js
```

如果你想针对`.ts`或者`.tsx`文件迁移：

```
npx jscodeshift ./path/to/src/
  --extensions=ts,tsx
  --parser=tsx
  --transform=./node_modules/@tanstack/react-query/codemods/v4/key-transformation.js
```

请注意在使用`Typescript`的情况下，你需要使用`tsx`作为解析器；否则，codemod 将不能被正确应用！

**注意:** 应用 codemod 可能会破坏你代码已有的格式，所以请不要忘记在应用 codemod 后运行`prettier`和/或`eslint`！

### 空闲(idle)状态被移除

随着新的[fetchStatus](./queries#fetchstatus)的引入，为了更好的离线支持，空闲状态变得不重要了，因为`fetchStatus: 'idle'`已经很好地捕捉了相同的状态。
更多信息，请阅读 [为什么有两个不同状态](./queries#why-two-different-states)。

这将主要影响那些还没有任何数据的禁用状态(disabled)的查询，因为这些查询之前是处于空闲(idle)状态的：

```diff
- status: 'idle'
+ status: 'loading'
+ fetchStatus: 'idle'
```

同时，请花点时间阅读[有依赖的查询](./dependent-queries.md)

#### 禁用的查询

由于一些改动（见下参考），禁用的查询（甚至是暂时禁用的）开始的状态及是`state=loading`。
为了使迁移更容易，特别是为了有一个好的字段来标识何时显示加载时占位的内容，你可以检查`isInitialLoading`而不是`isLoading`

```diff
- isLoading
+ isInitialLoading
```

请参考对应改动：[禁用/暂停查询](../guides/../guides&concepts/disabling-queries.md#isInitialLoading)

### `useQueries`的新的 API

`useQueries`钩子现在接受一个带有`queries`参数(prop)的对象作为其输入。`queries`的值是一个查询的数组（这个数组与 v3 中传递到`useQueries`的内容相同

```diff
- useQueries([{ queryKey1, queryFn1, options1 }, { queryKey2, queryFn2, options2 }])
+ useQueries({ queries: [{ queryKey1, queryFn1, options1 }, { queryKey2, queryFn2, options2 }] })
```

### 对于成功的查询来说， Undefined 现在是一个非法的缓存数据

为了使通过返回`undefined`来跳出更新(bailing out of updates)成为可能，我们必须使`undefined`成为一个非法的缓存值。
这与 React Query 的其他概念是一致的：例如，[来自函数的初始化的数据](./initial-query-data.md#initial-data-function)如果是`undefined`，也将*不会设置初始的数据*。

此外，在`queryFn`中，如果返回的是`Promise<void>`，但仍然尝试打印是一个很常见的错误：

```tsx
useQuery(["key"], () =>
  axios.get(url).then((result) => console.log(result.data)),
);
```

现在在*静态的类型检查级别上*就不允许这样做。在运行时，`undefined`将被转化为一个*被拒绝的 Promise*，这也意味着你将得到一个`error`。（便于提示）在开发模式下将会被打印到控制台。

### 默认情况下，查询和修改需要网络连接才能运行。

请阅读关于[在线/离线支持的新功能公告](#在线离线支持的新功能公告)，以及关于[网络模式](./network-mode.md)的专门页面

尽管 React Query 是一个异步状态管理器，可以用于任何产生 Promise 的东西，但它最常被用于与数据获取库相结合的数据获取。
这就是为什么，默认情况下，如果没有网络连接，查询和修改将被"暂停"。如果你想选择回到以前的行为，你可以为查询和修改全局设置`networkMode: offlineFirst`：

```tsx
new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "offlineFirst",
    },
    mutations: {
      networkmode: "offlineFirst",
    },
  },
});
```

### `notifyOnChangeProps`选项不再接受`tracked`

`notifyOnChangeProps`选项不再接受`tracked`。相反，`useQuery`默认跟踪属性来优化渲染次数。
所有使用`notifyOnChangeProps: "tracked"`的查询应该通过删除这个选项来更新。

如果你想在任何查询中绕过这一点，模仿 v3 的默认行为，即每当查询发生变化时重新渲染，`notifyOnChangeProps`现在接受一个`"all"`值，以选择不使用默认的智能跟踪优化。

### `notifyOnChangePropsExclusion` 已被移除

在 v4 中，`notifyOnChangeProps`默认为 v3 的`"tracked"`行为，而不是`undefined`。现在，`"tracked"`是 v4 的默认行为，这个配置选项不再有意义。

### 为`cancelRefetch`提供一致的行为

`cancelRefetch`选项可以被传递给所有可以获取查询数据的函数，即：

- `queryClient.refetchQueries`
- `queryClient.invalidateQueries`
- `queryClient.resetQueries`
- `useQuery`返回的`refetch`
- `useInfiniteQuery`返回的`fetchNextPage`和`fetchPreviousPage`

（之前）除了`fetchNextPage`和`fetchPreviousPage`，这个标志默认都为`false`。但这是不一致的，而且有一定的潜在问题：在修改后调用`refetchQueries`或`invalidateQueries`可能不会得到最新的结果，如果之前的慢速获取已经在进行，但因为这个，重新获取会被跳过。

我们认为，如果一个查询被你写的一些代码主动重新获取了，那么默认情况下，它应该重新获取数据。

这就是为什么对上面提到的所有方法，`cancelRefetch`现在默认都为`true`。这也意味着，如果你连续地不加等待地两次调用`refetchQueries`，它现在会取消第一次获取，并重新启动第二次：

```ts
queryClient.refetchQueries({ queryKey: ["todos"] });
// this will abort the previous refetch and start a new fetch
queryClient.refetchQueries({ queryKey: ["todos"] });
```

你可以通过明确传递`cancelRefetch:false`来取消这一默认行为：

```ts
queryClient.refetchQueries({ queryKey: ["todos"] });
// this will not abort the previous refetch - it will just be ignored
queryClient.refetchQueries({ queryKey: ["todos"] }, { cancelRefetch: false });
```

> 注意：自动触发的获取行为没有变化。例如，由于查询加载或基于窗口焦点的重新获取。

### 查询过滤器

一个[查询过滤器](./filters.md)是一个具有某些条件的对象，以匹配查询。历史上，过滤器选项大多是布尔标志的组合。然而，结合这些标志可能会导致一些不可能的状态。具体来说：

```
active?: boolean
  - When set to true it will match active queries.
  - When set to false it will match inactive queries.
inactive?: boolean
  - When set to true it will match inactive queries.
  - When set to false it will match active queries.
```

这些标志在一起使用时效果并不好，因为它们是相互排斥的。从描述来看，为这两个标志设置`false`可以理解为匹配所有的查询，或者不匹配任何查询——这没有什么意义。

在 v4 中，这些选项被合并为一个过滤器选项，以更好地显示其意图：

```diff
- active?: boolean
- inactive?: boolean
+ type?: 'active' | 'inactive' | 'all'
```

该选项默认为`all`，你可以选择只匹配`active`或`inactive`的查询。

#### refetchActive / refetchInactive

[queryClient.invalidateQueries](../reference/QueryClient#queryclientinvalidatequeries) 还有两个类似的选项：

```
refetchActive: Boolean
  - Defaults to true
  - When set to false, queries that match the refetch predicate and are actively being rendered
    via useQuery and friends will NOT be refetched in the background, and only marked as invalid.
refetchInactive: Boolean
  - Defaults to false
  - When set to true, queries that match the refetch predicate and are not being rendered
    via useQuery and friends will be both marked as invalid and also refetched in the background
```

基于同样的理由，它们被改为：

```diff
- active?: boolean
- inactive?: boolean
+ refetchType?: 'active' | 'inactive' | 'all' | 'none'
```

这个选项默认为`active`，因为`refetchActive`默认为`true`。这意味着我们还需要一种方法来告诉`invalidateQueries`，你根本不想要重新获取，这就是为什么有第四个选项（`none`）。

### `onSuccess`不再被`setQueryData`调用

这曾经让很多人感到困惑。如果在`onSuccess`中调用`setQueryData`，还会产生无限循环。当与`staleTime`结合时，它也是一个常见的错误来源，因为如果只从缓存中读取数据，_`onSuccess`不会被调用_。

与`onError`和`onSettled`类似，`onSuccess`的回调现在与请求的提出相联系。没有请求 -> 没有回调。

如果你想监听`data`字段的变化，你最好用`React.useEffect`来实现，其中`data`是依赖数组的一部分。由于 React Query 通过结构共享确保了数据的稳定，所以不会在每次后台重新获取都去执行，而只有在数据中的某些内容发生变化时才执行：

```tsx
const { data } = useQuery({ queryKey, queryFn });
React.useEffect(() => mySideEffectHere(data), [data]);
```

### `persistQueryClient`和相应的持久化插件不再是试验性的，已被重新命名

插件 `createWebStoragePersistor` 和 `createAsyncStoragePersistor` 分别更名为 [`createSyncStoragePersister`](../plugins/createSyncStoragePersister.md) 和 [`createAsyncStoragePersister`](../plugins/createAsyncStoragePersister.md) 。`persistQueryClient`中的接口`Persistor`也被重新命名为`Persister`。请查看[stackexchange 上的问题](https://english.stackexchange.com/questions/206893/persister-or-persistor) 以了解这一变化的动机。

由于这些插件不再是实验性的，它们的导入路径也已经更新：

```diff
- import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
- import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
- import { createAsyncStoragePersistor } from 'react-query/createAsyncStoragePersistor-experimental'

+ import { persistQueryClient } from '@tanstack/react-query-persist-client'
+ import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
+ import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
```

### 不再支持 Promise 中的`cancel`方法

旧的[`cancel`方法](./query-cancellation.md#old-cancel-function)允许你在 Promise 上定义一个`cancel`函数，然后被库用来支持查询取消。该行为已经被删除。我们建议使用[较新的 API](./query-cancellation.md)（从 ^3.30.0 引入）进行查询取消，它在内部使用[`AbortController`API](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)并为你的查询函数提供一个[`AbortSignal`实例](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)以支持查询取消。

### TypeScript

类型定义现依赖于 TypeScript v4.1 或更高

### 支持的浏览器

从 v4 开始，React Query 针对现代浏览器进行了优化。我们已经更新了我们的浏览器列表，以组合为一个更现代、更高性能和更小的打包文件。你可以阅读[有关要求](../getstarted/installation.md#requirements)。

### `setLogger` 被移除

之前可以通过调用`setLogger`来改变全局的记录器。在 v4 中，当创建`QueryClient`时，该函数被替换为一个可选字段：

```diff
- import { QueryClient, setLogger } from 'react-query';
+ import { QueryClient } from '@tanstack/react-query';

- setLogger(customLogger)
- const queryClient = new QueryClient();
+ const queryClient = new QueryClient({ logger: customLogger })
```

### 服务器端不再具有*默认的*手动垃圾回收(manual Garbage Collection)功能

在 v3 版本中，React Query 将默认缓存 5 分钟的查询结果，然后手动垃圾回收这些数据。这个默认值也适用于服务器端的 React Query。

这导致了高内存消耗和挂起进程以等待手动垃圾收集的完成。在 v4 中，默认情况下，服务器端的`cacheTime`现在被设置为`Infinity`，其有效地禁用了手动垃圾收集（一旦请求完成，NodeJS 进程将清除一切）。

这一变化只影响服务器端 React Query 的用户，例如使用 Next.js。如果你正在手动设置`cacheTime`，这将不会影响你（尽管你可能想要镜像行为(mirror behavior)）。

### 生产环境的日志

从 v4 开始，React Query 将不再在生产模式下向控制台记录错误（例如失败的获取），因为这让很多人感到困惑。当然，开发模式下错误仍然会显示。

### ESM 支持

React Query 现在支持 [package.json `"exports"`](https://nodejs.org/api/packages.html#exports)，并且完全兼容 Node 对 CommonJS 和 ESM 的本地解析。我们不希望这对你来说是一个破坏性的变化，但这确实限制了你可以导入你的项目的文件——有且只有我们正式支持的入口。

### 精简的 NotifyEvents

之前手动订阅`QueryCache`总是给你一个`QueryCacheNotifyEvent`，但对`MutationCache`来说应该不是这样的。我们已经简化了行为，也相应地调整了事件名称。

#### QueryCacheNotifyEvent

```diff
- type: 'queryAdded'
+ type: 'added'
- type: 'queryRemoved'
+ type: 'removed'
- type: 'queryUpdated'
+ type: 'updated'
```

#### MutationCacheNotifyEvent

`MutationCacheNotifyEvent`与`QueryCacheNotifyEvent`的类型相同。

> 注意：只有当你通过`queryCache.subscribe`或`mutationCache.subscribe`手动订阅缓存时，这才有意义。

### 取消了单独导出的 hydration

在[3.22.0](https://github.com/tannerlinsley/react-query/releases/tag/v3.22.0)版本中，hydration 被移入 React Query 的核心。在 v3 版本中，你仍然可以使用`react-query/hydration`的旧导出，但这些已经在 v4 版本中被移除。

```diff
- import { dehydrate, hydrate, useHydrate, Hydrate } from 'react-query/hydration'
+ import { dehydrate, hydrate, useHydrate, Hydrate } from '@tanstack/react-query'
```

### 从`queryClient`、`query`和`mutation`中删除了无文档记载的方法。

在`QueryClient`上的`cancelMutatations`和`executeMutation`方法是没有文档的，而且在内部没有使用，所以我们删除了它们。由于它只是对`mutationCache`上的一个方法的封装，你仍然可以使用`executeMutation`的功能。

```diff
- executeMutation<
-   TData = unknown,
-   TError = unknown,
-   TVariables = void,
-   TContext = unknown
- >(
-   options: MutationOptions<TData, TError, TVariables, TContext>
- ): Promise<TData> {
-   return this.mutationCache.build(this, options).execute()
- }
```

此外，`query.setDefaultOptions`被删除，因为它也没有被使用。`mutation.cancel`被删除，因为它实际上并没有取消发出的请求。

### `src/react`目录被重新命名为`src/reactjs`

以前，React Query 有一个名为从`react`模块导入的`react`的目录。这可能会给一些 Jest 配置带来问题，导致在运行测试时出现错误，比如。

```sh
TypeError: Cannot read property 'createContext' of undefined
```

随着目录的重新命名，这不再是一个问题。

如果你在你的项目中直接从`'react-query/react'`导入了任何东西（而不是只有`react-query`），那么你需要更新你的导入。

```diff
- import { QueryClientProvider } from 'react-query/react';
+ import { QueryClientProvider } from 'react-query/reactjs';
```

## 新功能 🚀

v4 带有一套令人赞叹的新功能。

### 支持 React 18

React 18 在今年早些时候发布，v4 现在对它和它带来的新并发功能有着一流的支持。

### 在线/离线支持的新功能公告

在 V3 中，React Query 总是执行查询和修改，但随后采用的假设是：如果你想重试，你需要连接到互联网。这导致了一些令人困惑的情况：

- 你在离线状态下加载一个查询--它进入了加载状态，请求失败了，而且它一直处于加载状态，直到你再次上网，尽管它并没有被真正的获取。
- 同样地，如果你是离线状态，并且关闭了重试，你的查询将只会执行并失败，并且查询会进入错误状态。
- 你在离线状态下，想启动一个不一定需要网络连接的查询（因为你*可以*使用 React Query 做数据获取以外的事情），但由于其他原因而失败。该查询现在将被暂停，直到你再次上线。
- 如果你是离线的，基于窗口焦点的重新获取根本就没有任何作用。

在 v4 中，React Query 引入了一个新的`networkMode`来解决所有这些问题。请阅读关于新的[网络模式](./network-mode.md)的专门页面了解更多信息。

### 默认情况下的跟踪查询

React Query 默认为"跟踪"查询属性，这应该会给你的渲染性能带来很大的提升。该功能从[v3.6.0](https://github.com/tannerlinsley/react-query/releases/tag/v3.6.0)开始存在，现在已经成为 v4 的默认行为。

### 用 setQueryData 跳出更新(bail out of the update)

当使用[setQueryData 功能的更新形式](../reference/QueryClient.md#queryclientsetquerydata)时，你现在可以通过返回`undefined`来跳出更新。如果`undefined`是作为`previousValue`提供给你的，这意味着目前没有缓存条目存在，你不想/不能创建一个，就像在切换 todo 的例子中一样，这很有帮助：

```tsx
queryClient.setQueryData(["todo", id], (previousTodo) =>
  previousTodo ? { ...previousTodo, done: true } : undefined,
);
```

### 修改的缓存及其垃圾回收

修改现在也可以像查询一样，自动进行垃圾回收。默认的`cacheTime`也被设置为 5 分钟。

### 多个 Providers 的自定义上下文

现在可以指定自定义上下文，将钩子与它们匹配的`Provider`配对。当组件树中可能有多个 React Query `Provider`实例，而你需要确保你的钩子使用正确的`Provider`实例时，这一点至关重要。

例子:

1. 一个数据展示页面

```tsx
// Our first data package: @my-scope/container-data

const context = React.createContext<QueryClient | undefined>(undefined);
const queryClient = new QueryClient();

export const useUser = () => {
  return useQuery(USER_KEY, USER_FETCHER, {
    context,
  });
};

export const ContainerDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient} context={context}>
      {children}
    </QueryClientProvider>
  );
};
```

2. 创建另一个数据展示页面

```tsx
// Our second data package: @my-scope/my-component-data

const context = React.createContext<QueryClient | undefined>(undefined);
const queryClient = new QueryClient();

export const useItems = () => {
  return useQuery(ITEMS_KEY, ITEMS_FETCHER, {
    context,
  });
};

export const MyComponentDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient} context={context}>
      {children}
    </QueryClientProvider>
  );
};
```

3. 使用这两个页面

```tsx
// Our application

import { ContainerDataProvider, useUser } from "@my-scope/container-data";
import { AppDataProvider } from "@my-scope/app-data";
import { MyComponentDataProvider, useItems } from "@my-scope/my-component-data";

<ContainerDataProvider> // <-- Provides container data (like "user") using its own React Query provider
  ...
  <AppDataProvider> // <-- Provides app data using its own React Query provider (unused in this example)
    ...
      <MyComponentDataProvider> // <-- Provides component data (like "items") using its own React Query provider
        <MyComponent />
      </MyComponentDataProvider>
    ...
  </AppDataProvider>
  ...
</ContainerDataProvider>

// Example of hooks provided by the "DataProvider" components above:
const MyComponent = () => {
  const user = useUser() // <-- Uses the context specified in ContainerDataProvider.
  const items = useItems() // <-- Uses the context specified in MyComponentDataProvider
  ...
}
```
