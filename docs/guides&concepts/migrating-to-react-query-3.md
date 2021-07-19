---
id: migrating-to-react-query-3
title: 迁移到React Query 3
---

以前版本的 React Query 很棒，并为库带来了一些惊人的新特性、更多的魔力以及更好的整体体验。
社区还为 React Query 带来了许多建议，同样也带来了对 React Query 的大量改进（issues/contributions）。
v3 版本 merge 了许多性能优化和 API 调优的内容。

## 概览

- 更具可扩展性和可测试性的缓存配置
- 更好的 SSR 支持
- 可以在任何地方的数据延迟(Data-lag，以前的 usePaginatedQuery)
- 双向(Bi-directional)无限查询
- 查询数据选择器！
- 在使用前为查询和/或修改配置完整的默认值
- 更加细粒度的可选渲染优化
- 新用途 `useQueries` Hook！（可变长度的并行查询）
- 查询过滤器对 `useIsFetching()` Hook 的支持！
- 修改对于重试/离线/重放的支持
- 修改/查询可以在 React 之外实现观察者模式
- 随时随地使用 React Query 核心逻辑！
- 通过使用`react-query/devtools`，随时享受 Devtools
- 持久化缓存到 web的存储 中 (_实验性_， `react-query/persistQueryClient-experimental` 和 `react-query/createWebStoragePersistor-experimental`)

## 破坏性修改

### QueryCache 已被分解进 `QueryClient` 和较低级别的 `QueryCache` 和 `MutationCache` 实例。

`QueryCache` 包含所有查询，`MutationCache` 包含所有修改，而 `QueryClient` 可用于设置配置并与其进行交互。

这带来了一些好处：

- 允许使用不同类型的缓存
- 具有不同配置的多个 clinet 可以使用相同的缓存
- Clinets 可以跟踪查询，这些查询可用在 SSR 上共享缓存
- 客户端 API 更侧重于一般用法
- 更容易进行独立于各个组件的测试

当 `new QueryClient()` 时，如果不提供 `QueryCache` 和 `MutationCache` 对象，则会自动为您创建

```js
import { QueryClient } from 'react-query'

const queryClient = new QueryClient()
```

### `ReactQueryConfigProvider` 和 `ReactQueryCacheProvider` 已被 `QueryClientProvider` 替代

现在可以在 `QueryClient` 中指定查询和修改的默认参数：

**注意，现在这是一个默认选项(defaultOptions)，而不是一个默认配置(defaultConfig)**

```js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // query options
    },
    mutations: {
      // mutation options
    },
  },
})
```

`QueryClientProvider` 组件现在用于将 `QueryClient` 连接到应用：

```js
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}
```

### 默认的 `QueryCache` 已被移除，彻底

如先前所提到的，不再有从主包创建或导出的默认 `QueryCache`。
你必须通过 `new QueryClient()` 或 `new QueryCache()` 自己创建一个（后一个可以稍后通过 `new QueryClient({ queryCache })` 传入）

### 不推荐使用的 `makeQueryCache` 已被删除

已经有很长时间了，但是终于消失了 :)

### `QueryCache.prefetchQuery()` 被 `QueryClient.prefetchQuery()` 替代

新的 `QueryClient.prefetchQuery()` 函数是异步的，但**不会从查询中返回数据**。如果你需要数据，使用新的 `QueryClient.fetchQuery()` 函数

```js
// Prefetch a query:
await queryClient.prefetchQuery('posts', fetchPosts)

// Fetch a query:
try {
  const data = await queryClient.fetchQuery('posts', fetchPosts)
} catch (error) {
  // 错误处理
}
```

### `ReactQueryErrorResetBoundary` 和 `QueryCache.resetErrorBoundaries()` 被 `QueryErrorResetBoundary` 和 `useQueryErrorResetBoundary()` 替代

它们一起提供了与以前相同的体验，但增加了对手动选择要重置的组件树的控制。
有关更多信息，请参见：

- [QueryErrorResetBoundary](../reference/QueryErrorResetBoundary)
- [useQueryErrorResetBoundary](../reference/useQueryErrorResetBoundary)

### `QueryCache.getQuery()` 被 `QueryCache.find()` 替代

`QueryCache.find()` 现在用于从一个缓存中查找单个查询

### `QueryCache.getQueries()` 合并进 `QueryCache.findAll()`

`QueryCache.findAll()` 现在用于从一个缓存中查找多个查询

### `QueryCache.isFetching` 合并进 `QueryClient.isFetching()`

**请注意，它现在是作为函数而不是属性存在**

### `useQueryCache` hook 被 `useQueryClient` hook 替代

它返回为组件树中提供的 `queryClient`，除了重命名外无需进行太多调整。

### 查询的键值部分不再作为参数自动传递到查询函数

现在建议使用闭包将参数传递给查询函数：

```js
// Old
useQuery(['post', id], (_key, id) => fetchPost(id))

// New
useQuery(['post', id], () => fetchPost(id))
```

如果仍然坚持不使用闭包，则可以使用新的 `QueryFunctionContext`：

```js
useQuery(['post', id], (context) => fetchPost(context.queryKey[1]))
```

### 无限查询的分页参数现在使用 `QueryFunctionContext.pageParam` 传递

它们以前是作为查询函数中的最后一个参数添加的，但事实证明，这对于实现某些模式很是困难

```js
// Old
useInfiniteQuery(['posts'], (_key, pageParam = 0) => fetchPosts(pageParam))

// New
useInfiniteQuery(['posts'], ({ pageParam = 0 }) => fetchPosts(pageParam))
```

### 不推荐使用 `usePaginatedQuery()`，而是应该选择 `keepPreviousData` 参数

新的 `keepPreviousData` 选项可用于 `useQuery` 和 `useInfiniteQuery`，它们对于数据具有相同的“滞后”效果：

```js
import { useQuery } from 'react-query'

function Page({ page }) {
  const { data } = useQuery(['page', page], fetchPage, {
    keepPreviousData: true,
  })
}
```

### `useInfiniteQuery()` 现在是双向的

`useInfiniteQuery()` 的相关接口已更改为完全支持双向无限列表。

- `options.getFetchMore` 重命名为 `options.getNextPageParam`
- `queryResult.canFetchMore` 重命名为 `queryResult.hasNextPage`
- `queryResult.fetchMore` 重命名为 `queryResult.fetchNextPage`
- `queryResult.isFetchingMore` 重命名为 `queryResult.isFetchingNextPage`
- 添加新的 `options.getPreviousPageParam` 选项
- 添加新的 `queryResult.hasPreviousPage` 属性
- 添加新的 `queryResult.fetchPreviousPage` 属性
- 添加新的 `queryResult.isFetchingPreviousPage`
- 无尽查询的 `data` 现在是一个包裹了 `pages` 和 `pageParams` 的**对象**，用于获取分页数据： `{ pages: [data, data, data], pageParams: [...]}`

一个方向：

```js
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery(
  'projects',
  ({ pageParam = 0 }) => fetchProjects(pageParam),
  {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  },
)
```

双向：

```js
const {
  data,
  fetchNextPage,
  fetchPreviousPage,
  hasNextPage,
  hasPreviousPage,
  isFetchingNextPage,
  isFetchingPreviousPage,
} = useInfiniteQuery(
  'projects',
  ({ pageParam = 0 }) => fetchProjects(pageParam),
  {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
  },
)
```

反向：

```js
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery(
  'projects',
  ({ pageParam = 0 }) => fetchProjects(pageParam),
  {
    select: (data) => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse(),
    }),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  },
)
```

### 现在，无限查询数据包含页面数组和用于获取这些页面的 pageParams

这样可以更轻松地操作数据和页面参数，例如，删除数据的第一页及其相关的参数：

```js
queryClient.setQueryData('projects', (data) => ({
  pages: data.pages.slice(1),
  pageParams: data.pageParams.slice(1),
}))
```

### `useMutation` 现在返回一个对象而不是一个数组

尽管旧的接口给我们带来了类似于初次发现 `useState` 时产生的那种温暖但模糊的感觉，但是这种感觉并没有持续多久。
现在，它返回是单个对象。

```js
// Old:
const [mutate, { status, reset }] = useMutation()

// New:
const { mutate, status, reset } = useMutation()
```

### `mutation.mutate` 不再返回一个 Promise

- `[mutate]` 变量已替换为 `mutation.mutate` 函数
- 添加新的 `mutation.mutateAsync` 函数

我们收到了许多问题反馈，因为用户希望这个 Promise 的行为表现得像一个正常的 Promise

现在这个 `mutate` 函数被分解为 `mutate` 和 `mutateAsync` 函数

因而，现在 `mutate` 函数的接口为回调函数式：

```js
const { mutate } = useMutation(addTodo)

mutate('todo', {
  onSuccess: (data) => {
    console.log(data)
  },
  onError: (error) => {
    console.error(error)
  },
  onSettled: () => {
    console.log('settled')
  },
})
```

异步时，考虑使用 `mutateAsync` 函数：

```js
const { mutateAsync } = useMutation(addTodo)

try {
  const data = await mutateAsync('todo')
  console.log(data)
} catch (error) {
  console.error(error)
} finally {
  console.log('settled')
}
```

### `useQuery` 配置方式改变

```js
// Old:
useQuery({
  queryKey: 'posts',
  queryFn: fetchPosts,
  config: { staleTime: Infinity },
})

// New:
useQuery({
  queryKey: 'posts',
  queryFn: fetchPosts,
  staleTime: Infinity,
})
```

### 如果设置，则 `QueryOptions.enabled` 选项必须为布尔值 (`true`/`false`)

现在，`enabled` 的查询选项将仅在值为 `false` 时禁用。
如果需要，可以使用 `!!userId` 或 `Boolean(userId)` 强制转换值，如果传递了非布尔值，则会抛出一个明显的语法的错误。

### `QueryOptions.initialStale` 选项已被移除

`initialStale` 选项已被移除，初始的数据现在被视为常规数据。
这意味着，如果提供 `initialData`，则默认查询将在挂载时重新获取。
如果您不想该动作被立即执行，则可以定义一个 `staleTime`。

### `QueryOptions.forceFetchOnMount` 选项被 `refetchOnMount: 'always'` 替代

说实话，我们增加了太多的 `refetchOn____` 选项，所以这应该能解决问题。

### `QueryOptions.refetchOnMount` 选项现在仅适用于其父组件，而不是所有查询观察者

当 `refetchOnMount` 设置为 `false` 时，任何其他组件都不能在挂载时重新获取数据。
在 v3 中，只有设置了该选项的组件不会在挂载时重新获取。

### `QueryOptions.queryFnParamsFilter` 已被删除，以支持新的 `QueryFunctionContext` 对象

`queryFnParamsFilter` 选项已删除，因为查询函数现在通过获取 `QueryFunctionContext` 对象而不是通过查询键值。

由于 `QueryFunctionContext` 还包含查询键值，因此仍可以在查询函数本身中过滤参数。

### `QueryOptions.notifyOnStatusChange` 选项已被 `notifyOnChangeProps` 和 `notifyOnChangePropsExclusions` 选项替代

有了这些新选项，可以在更细腻的程度上来配置组件重新渲染的逻辑。

只有当 `data` 或 `error` 被改变时重新渲染：

```js
import { useQuery } from 'react-query'

function User() {
  const { data } = useQuery('user', fetchUser, {
    notifyOnChangeProps: ['data', 'error'],
  })
  return <div>Username: {data.username}</div>
}
```

在 `isStale` 改变时忽略，不进行重新渲染：

```js
import { useQuery } from 'react-query'

function User() {
  const { data } = useQuery('user', fetchUser, {
    notifyOnChangePropsExclusions: ['isStale'],
  })
  return <div>Username: {data.username}</div>
}
```

### `QueryResult.clear()` 方法重命名为 `QueryResult.remove()`

尽管它被称为"clear"，但实际上只是从高速缓存中删除了单个查询。
现在，该名称与其功能匹配。

### `QueryResult.updatedAt` 拆分为 `QueryResult.dataUpdatedAt` 和 `QueryResult.errorUpdatedAt` 属性

由于可以同时显示数据和错误，因此 `updatedAt` 属性已拆分为 `dataUpdatedAt` 和 `errorUpdatedAt`。

### `setConsole()` 被新函数 `setLogger()` 替代

```js
import { setLogger } from 'react-query'

// 使用 Sentry
setLogger({
  error: (error) => {
    Sentry.captureException(error)
  },
})

// 使用 Winston
setLogger(winston.createLogger())
```

### React Native 不再需要重写 Logger

为了防止查询失败时在 React Native 中显示错误的界面，必须手动更改控制台：

```js
import { setConsole } from 'react-query'

setConsole({
  log: console.log,
  warn: console.warn,
  error: console.warn,
})
```

在 v3 中，**React Query 在 React Native 中使用时，会自动做到上面这点**


### Typescript 的类型
#### `QueryStatus` 的类型已经从 [enum](https://www.typescriptlang.org/docs/handbook/enums.html#string-enums) 切换为 [union type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

因此，如果您要根据`QueryStatus`枚举属性检查查询或修改的状态，你现在必须检查其字符串字面量，而不是以前的枚举值。

因此，您必须将枚举属性更改为其等效的字符串文字，如下所示：

- `QueryStatus.Idle` -> `'idle'`
- `QueryStatus.Loading` -> `'loading'`
- `QueryStatus.Error` -> `'error'`
- `QueryStatus.Success` -> `'success'`

```diff
- import { useQuery, QueryStatus } from 'react-query';
+ import { useQuery } from 'react-query';

const { data, status } = useQuery(['post', id], () => fetchPost(id));

- if (status === QueryStatus.Loading) {
+ if (status === 'loading') {
  ...
}

- if (status === QueryStatus.Error) {
+ if (status === 'error') {
  ...
}
```

## 新特性

### 查询数据选择器

现在，`useQuery` 和 `useInfiniteQuery` Hook 分别带有一个 `select` 选项，用于选择或转换部分查询结果。

```js
import { useQuery } from 'react-query'

function User() {
  const { data } = useQuery('user', fetchUser, {
    select: (user) => user.username,
  })
  return <div>Username: {data}</div>
}
```

将 `notifyOnChangeProps` 选项设置为 `['data'，'error']` ，使得仅在所选数据更改时重新渲染。

### `useQueries()` hook，用于可变长度的并行查询

想在循环内运行 `useQuery` 吗？
Hook 规则说不，但是有了新的 `useQueries()` hook，可以了！

```js
import { useQueries } from 'react-query'

function Overview() {
  const results = useQueries([
    { queryKey: ['post', 1], queryFn: fetchPost },
    { queryKey: ['post', 2], queryFn: fetchPost },
  ])
  return (
    <ul>
      {results.map(({ data }) => data && <li key={data.id}>{data.title})</li>)}
    </ul>
  )
}
```

### 修改对重试/离线的支持

默认情况下，React Query 不会自动重试错误的修改，但是可以使用 `retry` 选项：

```js
const mutation = useMutation(addTodo, {
  retry: 3,
})
```

**如果由于设备离线而导致修改失败，那么当设备重新连接时，它们将以相同的顺序重新尝试。**

### 持久化修改

现在可以将修改持久化到数据库或其他什么存储方式中，并在以后恢复。更多信息可以在[修改](./mutations)中找到。

### Observer

#### QueryObserver

QueryObserver 可以用来创建和/或监视一个查询：

```js
const observer = new QueryObserver(queryClient, { queryKey: 'posts' })

const unsubscribe = observer.subscribe((result) => {
  console.log(result)
  unsubscribe()
})
```

#### InfiniteQueryObserver

InfiniteQueryObserver 可以用来创建和/或监视一个无限查询：

```js
const observer = new InfiniteQueryObserver(queryClient, {
  queryKey: 'posts',
  queryFn: fetchPosts,
  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
})

const unsubscribe = observer.subscribe((result) => {
  console.log(result)
  unsubscribe()
})
```

#### QueriesObserver

QueriesObserver 可以用来创建和/或监视多个查询：

```js
const observer = new QueriesObserver(queryClient, [
  { queryKey: ['post', 1], queryFn: fetchPost },
  { queryKey: ['post', 2], queryFn: fetchPost },
])

const unsubscribe = observer.subscribe((result) => {
  console.log(result)
  unsubscribe()
})
```

### 为特定查询/修改设置默认选项

#### 查询

`QueryClient.setQueryDefaults()` 方法可用于为特定查询设置默认选项：

```js
queryClient.setQueryDefaults('posts', { queryFn: fetchPosts })

function Component() {
  const { data } = useQuery('posts')
}
```

#### 修改

`QueryClient.setMutationDefaults()` 方法可用于为特定修改设置默认选项：

```js
queryClient.setMutationDefaults('addPost', { mutationFn: addPost })

function Component() {
  const { mutate } = useMutation('addPost')
}
```

### useIsFetching()

现在，`useIsFetching()` Hook 可以接收一些过滤器，这些过滤器可用于例如仅显示某些查询类型的微调：

```js
const fetches = useIsFetching(['posts'])
```

## 分离

现在，React Query 的核心与 React 完全分离，这意味着它也可以**独立使用或在其他框架中使用**。
使用 `react-query/core` 入口点仅导入核心功能：

```js
import { QueryClient } from 'react-query/core'
```

## Devtools 现在是主仓库和 npm 软件包的一部分

devtools现在包含在 `react-query` 下的 `react-query/devtools` 中。
只需将 `react-query-devtools` 导入替换为 `react-query/devtools` 即可
