---
id: mutations
title: 修改 Mutations
---

与查询不同，修改通常意味着用于创建/更新/删除数据或执行服务器命令等副作用。
为此，React Query 导出了`useMutation` hook。

## 简单示例

下面是一个向服务器添加新 todo 的示例：

```html
<script setup>
  import { useMutation } from "@tanstack/vue-query";

  const { isLoading, isError, error, isSuccess, mutate } = useMutation({
    mutationFn: (newTodo) => axios.post("/todos", newTodo),
  });

  function addTodo() {
    mutate({ id: new Date(), title: "Do Laundry" });
  }
</script>

<template>
  <span v-if="isLoading">Adding todo...</span>
  <span v-else-if="isError">An error occurred: {{ error.message }}</span>
  <span v-else-if="isSuccess">Todo added!</span>
  <button @click="addTodo">Create Todo</button>
</template>
```

在任何给定时刻，修改只能处于以下状态之一：

- `isIdle` 或 `status === 'idle'` - 修改目前处于闲置状态或处于全新/重置状态
- `isLoading` 或 `status === 'loading'` - 修改目前正在进行操作
- `isError` 或 `status === 'error'` - 修改遇到了错误
- `isSuccess` 或 `status === 'success'` - 修改是成功的，且数据可用

除了这些主要状态之外，还有更多的信息可用，具体取决于修改的状态：

- `error` - `isError` 时，则可以通过 `error` 属性获取错误
- `data` - `isSuccess` 时，则可以通过 `data` 属性获取数据

在上面的示例中，你还看到可以通过使用单个变量或对象调用 `mutate` 函数来将变量传递给你的修改函数

即使只有变量，修改也没有那么特别，但是当与 `onSuccess` 回调，[Query Client 的 `invalidateQueries` 方法](../reference/QueryClient#queryclientinvalidatequeries)和 [Query Client 的 `setQueryData` 方法](../reference/QueryClient#queryclientsetquerydata)一起使用时，修改就成为了一个非常强大的工具。

## 重置修改的状态

在某些情况下，你需要清除 `error` 或修改请求的数据。
为此，你可以使用 `reset` 函数来处理：

```html
<script>
  import { useMutation } from "@tanstack/vue-query";

  const { error, mutate, reset } = useMutation({
    mutationFn: (newTodo) => axios.post("/todos", newTodo),
  });

  function addTodo() {
    mutate({ id: new Date(), title: "Do Laundry" });
  }
</script>

<template>
  <span v-else-if="error">
    <span>An error occurred: {{ error.message }}</span>
    <button @click="reset">Reset error</button>
  </span>
  <button @click="addTodo">Create Todo</button>
</template>
```

## 副作用

`useMutation` 附带一些有帮助的选项。
允许在其生命周期的任何阶段快速而简单地产生副作用。
这些对于在[乐观更新](./optimistic-updates)甚至是[修改后使查询无效并重新获取](./invalidation-from-mutations)都非常有用

```tsx
useMutation(addTodo, {
  onMutate: (variables) => {
    // 修改即将发生！

    // （可选）返回包含回滚时使用的数据的上下文
    return { id: 1 };
  },
  onError: (error, variables, context) => {
    // 错误触发！
    console.log(`rolling back optimistic update with id ${context.id}`);
  },
  onSuccess: (data, variables, context) => {
    // Boom baby!
  },
  onSettled: (data, error, variables, context) => {
    // 错误或成功……这并不重要
  },
});
```

当在任何回调函数中返回 promise 时，它将首先被等待，然后再调用下一个回调函数：

```js
useMutation(addTodo, {
  onSuccess: async () => {
    console.log("I'm first!");
  },
  onSettled: async () => {
    console.log("I'm second!");
  },
});
```

你可能会发现，在调用 `mutate` 时，**有额外的回调被触发**，而不仅仅是 `useMutation` 上定义的回调。
这可用于触发组件特定的副作用。
为此，可以在修改变量产生之后向修改函数提供任何被定义的回调选项。
支持的选项包括: `onSuccess`, `onError` 和 `onSettled`。
(请记住，如果组件在*修改完成之前被卸载*，则这些额外的回调不会被运行)

```ts
useMutation(addTodo, {
  onSuccess: (data, variables, context) => {
    // I will fire first
  },
  onError: (error, variables, context) => {
    // I will fire first
  },
  onSettled: (data, error, variables, context) => {
    // I will fire first
  },
});

mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
});
```

### 持续修改

当持续修改时，`onSuccess`, `onError` and `onSettled` 这几个回调会有一些细微的差别。
当组件是挂载状态，且将它们传递给 `mutate` 函数时，它们只会被 _触发一次_。
这是因为在每次调用 `mutate` 函数时，相关的观察者都会被先移除再重新监听。
与之相反，`useMutation` 的处理函数会在每一次的 `mutate` 调用时被调用。

> 请注意，传递给 `useMutation` 的 `mutationFn` 是**同步**的。在这种情况下，`mutationFn` 的触发顺序和调用 `mutate` 时的顺序是有所不同的。

```ts
useMutation(addTodo, {
  onSuccess: (data, error, variables, context) => {
    // 将被调用3次
  },
});

[("Todo 1", "Todo 2", "Todo 3")].forEach((todo) => {
  mutate(todo, {
    onSuccess: (data, error, variables, context) => {
      // 只会被TODO3触发，而被调用一次
      // 无论之前被resolve的有多少
    },
  });
});
```

## Promises

使用 `mutateAsync` 而不是 `mutate` 来返回一个 Promise，它将在成功时解析或抛出一个错误。
例如，这可以用来组合副作用。

```ts
const mutation = useMutation(addTodo);

try {
  const todo = await mutation.mutateAsync(todo);
  console.log(todo);
} catch (error) {
  console.error(error);
} finally {
  console.log("done");
}
```

## 重试

默认情况下，React Query 不会在出错时重试修改，但可以使用 `retry` 选项：

```ts
const mutation = useMutation(addTodo, {
  retry: 3,
});
```

**如果由于设备离线而导致修改失败，那么当设备重新连接时，它们将以相同的顺序重试。**

## 持久化

现在可以将修改持久化到数据库或其他什么存储方式中，并在以后恢复。这可以通过以下高阶函数实现：

```ts
const queryClient = new QueryClient();

// 定义 "addTodo" 修改
queryClient.setMutationDefaults(["addTodo"], {
  mutationFn: addTodo,
  onMutate: async (variables) => {
    // 取消 todos list 当前的查询
    await queryClient.cancelQueries(["todos"]);

    // 创建一个对于 todo 的乐观修改
    const optimisticTodo = { id: uuid(), title: variables.title };

    // 添加到 todos list
    queryClient.setQueryData(["todos"], (old) => [...old, optimisticTodo]);

    // 返回包含乐观修改的上下文
    return { optimisticTodo };
  },
  onSuccess: (result, variables, context) => {
    // 成功，用正确内容替换掉
    queryClient.setQueryData(["todos"], (old) =>
      old.map((todo) => (todo.id === context.optimisticTodo.id ? result : todo))
    );
  },
  onError: (error, variables, context) => {
    // 清除掉添加失败的 todo
    queryClient.setQueryData(["todos"], (old) =>
      old.filter((todo) => todo.id !== context.optimisticTodo.id)
    );
  },
  retry: 3,
});

// 在同一个组件内启动修改
const mutation = useMutation(["addTodo"]);
mutation.mutate({ title: "title" });

// 如果因为设备离线而暂停了修改，
// 然后，当程序退出时，可以使暂停的修改变为 dehydrated 的
const state = dehydrate(queryClient);

// 当程序启动时，修改再次启动
hydrate(queryClient, state);

// 重启修改
queryClient.resumePausedMutations();
```

### 持久化的离线修改

如果你使用 [persistQueryClient 插件](../plugins/persistQueryClient.md)持久化一个离线的修改，除非提供一个默认修改函数，否则在页面重新加载时，修改没法恢复。

这是一个技术限制。
当持久化到外部存储时，只有修改的状态被持久化，因为函数不能被序列化。
（SSR 中）hydration 后，触发修改的组件可能没有被正确挂载，所以调用`resumePausedMutations`可能会产生一个错误：`No mutationFn found`。

```ts
const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// 我们需要一个默认的修改函数，以便暂停的修改可以在页面重新加载后继续进行
queryClient.setMutationDefaults({
  mutationKey: ["todos"],
  mutationFn: ({ id, data }) => {
    return api.updateTodo(id, data);
  },
});

const vueQueryOptions: VueQueryPluginOptions = {
  queryClient: client,
  clientPersister: (queryClient) => {
    return persistQueryClient({
      queryClient,
      persister: createSyncStoragePersister({ storage: localStorage }),
    });
  },
  clientPersisterOnSuccess: (queryClient) => {
    queryClient.resumePausedMutations();
  },
};

createApp(App).use(VueQueryPlugin, vueQueryOptions).mount("#app");
```

这里还有一个覆盖面更泛化的[离线修改+查询的例子(codesandbox)](https://codesandbox.io/s/github/tanstack/query/tree/main/examples/react/offline?from-embed)

## 衍生阅读

要了解更多关于修改的信息，请查看[此社区内容(英文)](https://tanstack.com/query/v4/docs/community/tkdodos-blog#12-mastering-mutations-in-react-query)
