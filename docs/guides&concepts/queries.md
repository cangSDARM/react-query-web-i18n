---
id: queries
title: 查询 Queries
tags:
  - 翻译完成
---

## 查询基础

查询是一种对于与**唯一键值**相关联的异步数据源的声明性依赖。
查询可以与任何基于 Promise 的方法（包括 GET 和 POST 方法）一起使用，以从服务器获取数据。
如果你的方法修改了服务器上的数据，建议你改用[修改](./mutations.md)

要在你的组件或自定义 Hook 中订阅一个查询，至少需要以下的参数来调用`useQuery`Hook：

- 该查询的一个**唯一的键值**
- 一个返回 Promise 的函数：
  - 解析数据，或
  - 抛出错误

```ts
import { useQuery } from "react-query";

function App() {
  const info = useQuery(["todos"], fetchTodoList);
}
```

这个*唯一键值*将在内部用于重新获取数据、缓存和在整个程序中共享该查询信息。

`useQuery`返回的查询结果将包含所有关于该查询的信息，你可以用这些信息来进行排版和或数据驱动的任何动作：

```ts
const result = useQuery(["todos"], fetchTodoList);
```

`result`对象包含一些非常重要的状态，你需要注意这些状态才能提高工作效率。
在任何给定时刻，查询只能处于以下状态之一：

- `isLoading` 或者 `status === 'loading'` - 查询暂时还没有数据
- `isError` 或者 `status === 'error'` - 查询遇到一个错误
- `isSuccess` 或者 `status === 'success'` - 查询成功，并且数据可用

除了这些主要状态之外，取决于具体查询的状态，还有更多信息可用：

- `error` - 如果查询处于`isError`状态，则可以通过`error`属性获取该错误
- `data` - 如果查询处于`success`状态，则可以通过`data`属性获得数据

对于**大多数**查询，通常先检查`isLoading`状态，然后检查`isError`状态，最后假设数据可用并呈现成功状态就足够了：

```ts
function Todos() {
  const { isLoading, isError, data, error } = useQuery(
    ["todos"],
    fetchTodoList,
  );

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

```ts
function Todos() {
  const { status, data, error } = useQuery(["todos"], fetchTodoList);

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

如果你在访问`data`之前检查了`loading`和`error`，TypeScript 也会正确缩窄`data`的类型。

### FetchStatus

除了`status`字段，`result`对象，还会有一个额外的`fetchStatus`属性，它有以下选项：

- `fetchStatus === 'fetching'` - 正在查询中
- `fetchStatus === 'paused'` - 查询想要获取，但它被暂停了。在[网络模式](./network-mode.md)中阅读更多相关信息
- `fetchStatus === 'idle'` - 该查询处于闲置状态

### 为什么有两种表示状态的东西(`status`/`fetchStatus`)？

后台刷新和数据过期重试(stale-while-revalidate)的逻辑使`status`和`fetchStatus`的所有组合成为了可能。比如说：

- 一个`state='success'`的查询通常处于`fetchStatus='idle'`状态。但如果同时有后台重新获取动作，它也可能为`fetchStatus='fetching'`状态。
- 一个没有数据的查询通常处于`status='loading'`状态和`fetchStatus='loading`状态。如果同时无网络连接，它也可能为`fetchStatus='paused'`状态。

所以请记住，一个查询可以处于`fetchStatus='loading'`状态，但没有实际的在获取数据。
如何理清两者关系？这里有一个简单的经验法则：

- `status`告诉我们有关`data`的状态：有或者没有？
- `fetchStatus`告诉我们有关`queryFn`的状态：在执行还是没在执行？

## 延伸阅读

如果你对于执行状态检查的另一种方法感兴趣的话，请参阅[此社区资源](https://tanstack.com/query/v4/docs/community/tkdodos-blog#4-status-checks-in-react-query)
