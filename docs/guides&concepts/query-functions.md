---
id: query-functions
title: 查询函数
---

查询函数实际上可以是**任何一个返回 Promise 的函数**。返回的 Promise 应该**解决数据**或**引发错误**。

以下所有都是有效的查询函数配置：

```js
useQuery(['todos'], fetchAllTodos)
useQuery(['todos', todoId], () => fetchTodoById(todoId))
useQuery(['todos', todoId], async () => {
  const data = await fetchTodoById(todoId)
  return data
})
useQuery(['todos', todoId], ({ queryKey }) => fetchTodoById(queryKey[1]))
```

## 处理和抛出错误

为了使 React Query 确定查询错误，查询函数的**错误必须抛出**。查询函数中引发的任何错误都将保留在查询的`error`状态上。

```js
const { error } = useQuery(['todos', todoId], async () => {
  if (somethingGoesWrong) {
    throw new Error('Oh no!')
  }

  return data
})
```

## 默认情况下不与`fetch`和其他客户端库一起使用

虽然大多数库（例如`axios`或`graphql-request`）会针对不成功的 HTTP 调用自动引发错误，但某些库（如`fetch`）默认不会引发错误。
在这种情况下，您需要自己 throw 它们。这是使用流行的`fetch`的 API 的一种简单方法：

```js
useQuery(['todos', todoId], async () => {
  const response = await fetch('/todos/' + todoId)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
})
```

## 查询函数的参数

查询键值不仅用于唯一地标识要获取的数据，而且还可以方便地传递到查询函数中，虽然并非总是必需的，但这使得在需要时提取查询函数成为可能：

```js
function Todos({ status, page }) {
  const result = useQuery(['todos', { status, page }], fetchTodoList)
}

// 在查询函数中访问键值，状态和页面变量！
function fetchTodoList({ queryKey }) {
  const [_key, { status, page }] = queryKey
  return new Promise()
}
```

## 使用查询对象代替参数

在 React Query 的 API 中只要支持`[queryKey，queryFn，config]`签名的任何函数，你也可以使用一个对象来表达相同的配置：

```js
import { useQuery } from 'react-query'

useQuery({
  queryKey: ['todo', 7],
  queryFn: fetchTodo,
  ...config,
})
```
