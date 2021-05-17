---
id: initial-query-data
title: 初始化的查询数据
---

在需要查询之前，有很多方法可以向缓存提供初始数据：

- 声明式的:
  - 向查询提供`initialData`以预填充其缓存（如果为空）
- 命令式的:
  - [使用`queryClient.prefetchQuery`预取数据](./prefetching)
  - [使用`queryClient.setQueryData`手动将数据放入缓存](./prefetching)

## 使用`initialData`预先填充查询

有时候，您可能已经在应用中获得了查询的初始数据，并且可以直接将其提供给您的查询。
在这种情况下，则可以使用`config.initialData`选项设置查询的初始数据，并跳过初始加载状态！

> 重要说明：`initialData`保留在缓存中，因此**不建议为此选项提供占位符，部分或不完整的数据**，如有必要，应使用`placeholderData`

```js
function Todos() {
  const result = useQuery('todos', () => fetch('/todos'), {
    initialData: initialTodos,
  })
}
```

### `staleTime` 和 `initialDataUpdatedAt`

默认情况下，`initialData`被视为完全新鲜的数据，就像它刚刚被获取一样。这也意味着它将影响`staleTime`对它的解释。

- 如果为查询观察者(query observer)配置了`initialData`且没有`staleTime`（默认的`staleTime: 0`），则该查询在挂载时将立即重新获取：

  ```js
  function Todos() {
    // 将立即显示 initialTodos，但在挂载后也将立即重新显示TODOS
    const result = useQuery('todos', () => fetch('/todos'), {
      initialData: initialTodos,
    })
  }
  ```

- 如果为查询观察者(query observer)配置了`initialData`且`staleTime`为`1000`ms，则在相同的时间量内数据将被视为最新数据，就好像它是刚从查询中获取的一样

  ```js
  function Todos() {
    // 立即显示 initialTodos，但是直到 1000 ms 之后遇到另一个交互事件时才重新获取数据
    const result = useQuery('todos', () => fetch('/todos'), {
      initialData: initialTodos,
      staleTime: 1000,
    })
  }
  ```

- 那么，如果您的`initialData`并不完全新鲜怎么办？这就引出了最后一个配置项，它实际上是最准确的，使用了一个名为`initialDataUpdatedAt`的选项。该选项允许你传递一个`Number`类型的 JS 时间戳(以毫秒为单位，如`Date.now()`)，以确定`initialData`上次更新的时间。(请注意，如果您使用的是 unix 时间戳，则需要将其乘以 1000，以将其转换为 JS 时间戳。)

  ```js
  function Todos() {
    // 立即显示 initialTodos，但是直到 1000 ms 之后遇到另一个交互事件时才重新获取数据
    const result = useQuery('todos', () => fetch('/todos'), {
      initialData: initialTodos,
      staleTime: 60 * 1000, // 1 minute
      // 这可能是10秒前或10分钟前
      initialDataUpdatedAt: initialTodosUpdatedTimestamp // eg. 1608412420052
    })
  }
  ```

  此选项允许将 staleTime 用于其"原始"用途，以确定数据需要有多新鲜，同时还允许：如果 `initialData` 早于 `staleTime`，则在挂载时重新获取数据。在上面的示例中，我们的数据需要在 1 分钟内刷新，我们可以在`initialData`最后一次更新时提示查询，以便查询自己决定是否需要重新获取数据。

> 如果您希望将数据视为**预取数据**，建议您使用`prefetchQuery`或`fetchQuery` API 来预先填充缓存，从而独立于`initialData`配置`staleTime`。

### 来自函数的初始数据

如果访问查询的初始数据的过程很繁琐，或者只是不想在每个渲染上执行某些操作，则可以传递一个函数作为`initialData`值。这个函数只在初始化查询时执行一次，从而节省宝贵的内存和/或 CPU。

```js
function Todos() {
  const result = useQuery('todos', () => fetch('/todos'), {
    initialData: () => {
      return getExpensiveTodos()
    },
  })
}
```

### 来自缓存的初始数据

在某些情况下，您可能希望能够从另一个查询的缓存结果中为查询提供初始数据。一个很好的例子是，从一个 todos list 查询中搜索一个单独的 todo 项的缓存数据，然后使用该数据作为单独的 todo 查询的初始数据：

```js
function Todo({ todoId }) {
  const result = useQuery(['todo', todoId], () => fetch('/todos'), {
    initialData: () => {
      // 将 `todos` 查询中的 TODOs 用作此 TODOs 查询的初始数据
      return queryClient.getQueryData('todos')?.find((d) => d.id === todoId)
    },
  })
}
```

### 来自带有`InitialDataUpdatedAt`的缓存的初始数据

从缓存中获取初始数据意味着，哪怕使用了`initialData`，用来查询初始数据的源查询还是有可能很旧。建议不要手动设置`staleTime`来阻止查询被立即重新获取，而应该将源查询的`dataUpdatedAt`传给`initialDataUpdatedAt`参数。
这为查询实例提供了所需的所有信息，以确定是否以及何时需要重新获取查询，而不管是否提供了初始数据。

```js
function Todo({ todoId }) {
  const result = useQuery(['todo', todoId], () => fetch(`/todos/${todoId}`), {
    initialData: () =>
      queryClient.getQueryData('todos')?.find((d) => d.id === todoId),
    initialDataUpdatedAt: () =>
      queryClient.getQueryState('todos')?.dataUpdatedAt,
  })
}
```

### 来自缓存的有条件的初始数据

如果您要用来查找初始数据的源查询过旧，则可能根本不想使用缓存的数据，而只是从服务器中获取数据。
为了使此决定更容易，您可以改用`queryClient.getQueryState`方法来获取关于源查询的更多信息，包括`state.dataUpdatedAt`时间戳。您可以以此确定查询是否足够"新鲜"以满足您的需求：

```js
function Todo({ todoId }) {
  const result = useQuery(['todo', todoId], () => fetch('/todos'), {
    initialData: () => {
      // 获取查询状态
      const state = queryClient.getQueryState('todos')

      // 如果查询存在并且数据"老得"不超过10秒...
      if (state && Date.now() - state.dataUpdatedAt <= 10 * 1000) {
        // 返回单个todo
        return state.data.find((d) => d.id === todoId)
      }

      // 否则，返回undefined并让它从硬加载状态获取!
    },
  })
}
```
