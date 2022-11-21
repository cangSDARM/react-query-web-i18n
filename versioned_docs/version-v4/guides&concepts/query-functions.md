---
id: query-functions
title: 查询函数 Query Functions
---

查询函数实际上可以是**任何一个返回 Promise 的函数**。返回的 Promise 应该**解决数据**或**抛出错误**。

以下所有都是有效的查询函数配置：

```ts
useQuery(["todos"], fetchAllTodos);
useQuery(["todos", todoId], () => fetchTodoById(todoId));
useQuery(["todos", todoId], async () => {
  const data = await fetchTodoById(todoId);
  return data;
});
useQuery(["todos", todoId], ({ queryKey }) => fetchTodoById(queryKey[1]));
```

## 抛出和处理错误

为了使 React Query 确定查询错误，查询函数的**错误必须抛出**。查询函数中引发的任何错误都将被持久化在查询的`error`状态中。

```ts
const { error } = useQuery(["todos", todoId], async () => {
  if (somethingGoesWrong) {
    throw new Error("Oh no!");
  }

  return data;
});
```

## 与`fetch`和其他默认不抛出错误的客户端库一起使用

虽然大多数库（例如`axios`或`graphql-request`）会针对不成功的 HTTP 请求自动抛出错误，但某些库（如`fetch`）默认不会抛出错误。
在这种情况下，你需要自己`throw`它们。这是使用流行的`fetch` API 的一种简单方法：

```ts
useQuery(["todos", todoId], async () => {
  const response = await fetch("/todos/" + todoId);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});
```

## 查询函数的参数

查询键值不仅用于唯一地标识要获取的数据，而且还可以方便地传递到查询函数中，虽然并非总是必需的，但这使得在需要时提取查询函数成为可能：

```ts
function Todos({ status, page }) {
  const result = useQuery(["todos", { status, page }], fetchTodoList);
}

// 在查询函数中访问键值，状态和页面变量！
function fetchTodoList({ queryKey }) {
  const [_key, { status, page }] = queryKey;
  return new Promise();
}
```

### `QueryFunctionContext`及其类型定义

`QueryFunctionContext` 会当作参数传给每一个查询函数，其包含：

- `queryKey: QueryKey`: [查看查询键值](./query-keys.md)
- `pageParam: unknown | undefined`
  - 只会在[无限查询](./infinite-queries.md)场景传递
  - 为查询当前页所使用的参数
- signal?: AbortSignal
  - React Query 提供的[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)实例
  - 可以用来做[查询取消](./query-cancellation.md)
- `meta?: Record<string, unknown>`
  - 一个可选字段，可以填写任意关于该查询的额外信息

## 使用查询对象代替参数

在 React Query 的 API 中只要支持`[queryKey，queryFn，config]`签名的任何函数，你也可以使用一个对象来表达相同的配置：

```ts
import { useQuery } from "@tanstack/react-query";

useQuery({
  queryKey: ["todo", 7],
  queryFn: fetchTodo,
  ...config,
});
```
