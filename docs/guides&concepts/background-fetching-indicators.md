---
id: background-fetching-indicators
title: 加载状态指示器
---

查询的`status === 'loading'`状态足以显示查询的初始硬加载状态，但是有时您可能想显示一个额外的指示符，表明该查询正在后台重新获取数据。 为此，还为您提供了一个`isFetching`的布尔值，无论`status`变量的状态如何，您都可以使用它来表示数据正在获取中：

```js
function Todos() {
  const { status, data: todos, error, isFetching } = useQuery(
    'todos',
    fetchTodos,
  )

  return status === 'loading' ? (
    <span>Loading...</span>
  ) : status === 'error' ? (
    <span>Error: {error.message}</span>
  ) : (
    <>
      {isFetching ? <div>Refreshing...</div> : null}

      <div>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </>
  )
}
```

## 显示全局后台加载的状态

除了单个查询的加载状态外，如果要在任何查询正在获取数据时（包括在后台）显示一个全局的加载指示器，你可以使用`useIsFetching`Hook：

```js
import { useIsFetching } from 'react-query'

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching()

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null
}
```
