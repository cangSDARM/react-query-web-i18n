---
id: queries
title: 查询 queries
---

## 查询基础

查询是一种对于与**唯一键值**相关联的异步数据源的声明性依赖。
查询可以与任何基于 Promise 的方法（包括 GET 和 POST 方法）一起使用，以从服务器获取数据。
如果你的方法修改了服务器上的数据，建议你改用[Mutations](https://react-query.tanstack.com/docs/guides/mutations)。

要在你的组件或自定义 Hook 中订阅一个查询，至少需要以下的参数来调用`useQuery`Hook：

- 该查询的一个**唯一的键值**
- 一个返回 Promise 的函数：
  - 解析数据或
  - 抛出错误

```js
import { useQuery } from "react-query";

function App() {
  const info = useQuery("todos", fetchTodoList);
}
```

这个唯一键值将在内部用于在整个程序中重新获取数据、缓存和共享查询。

`useQuery`返回的查询结果将包含有所有关于排版(templating)和数据所需要的信息：

```js
const result = useQuery("todos", fetchTodoList);
```

`result`对象包含一些非常重要的状态，你需要注意这些状态才能提高工作效率。
在任何给定时刻，查询只能处于以下状态之一：

- `isLoading` 或者 `status === 'loading'` - 查询没有数据，正在获取结果中
- `isError` 或者 `status === 'error'` - 查询遇到一个错误
- `isSuccess` 或者 `status === 'success'` - 查询成功，并且数据可用
- `isIdle` 或者 `status === 'idle'` - 查询处于禁用状态（稍后将进一步讲解有关内容）

除了这些主要状态之外，取决于具体查询的状态，还有更多信息可用：

- `error` - 如果查询处于`isError`状态，则可以通过`error`属性获取该错误
- `data` - 如果查询处于`success`状态，则可以通过`data`属性获得数据
- `isFetching` - 在其他任何状态下，如果查询在获取中（包括后台重新获取数据），则`isFetching`为`true`

对于**大多数**查询，通常先检查`isLoading`状态，然后检查`isError`状态，最后假设数据可用并呈现成功状态就足够了：

```js
function Todos() {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // 现在我们可以假设 `isSuccess === true`
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

如果你不喜欢布尔值，你也可以使用`status`查询状态：

```js
function Todos() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  // 也是 `status ==='success'`，但是 “else” 逻辑也起作用
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## 延伸阅读

对于执行状态检查的另一种方法感兴趣的话，请参阅[此社区资源](https://react-query.tanstack.com/community/tkdodos-blog#4-status-checks-in-react-query)
