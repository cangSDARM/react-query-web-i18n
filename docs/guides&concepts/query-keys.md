---
id: query-keys
title: 查询的键值 query-keys
---

从本质上讲，React Query 基于查询键值为你管理查询缓存。
键值可以像字符串一样简单，也可以像由许多字符串和嵌套对象组成的数组一样复杂。只要键值是**可序列化的**，并且**对查询的数据来说它是唯一的**，就可以使用它！

### 只有字符串的键值

键值最简单形式实际上不是数组，而是单个字符串。当传递一个字符串查询时，它将在内部转换为一个数组，其中字符串作为键值中的唯一项。此格式可用于：

- 通用的*List/Index*资源
- 非分层的(Non-hierarchical)资源

```js
// A list of todos
useQuery('todos', ...) // queryKey === ['todos']

// Something else, whatever!
useQuery('somethingSpecial', ...) // queryKey === ['somethingSpecial']
```

### 数组作为键值

当查询需要更多信息来唯一地描述其数据时，可以使用带有字符串的数组和任意数量的可序列化对象来描述它。这对于以下用途很有用：

- 分层或嵌套的资源
  - 传递 ID、索引或其他原语来唯一地标识资源的每一项是很常见的
- 带有附加参数的查询
  - 传递作为附加选项的对象也很常见

```js
// An individual todo
useQuery(['todo', 5], ...)
// queryKey === ['todo', 5]

// And individual todo in a "preview" format
useQuery(['todo', 5, { preview: true }], ...)
// queryKey === ['todo', 5, { preview: true }]

// A list of todos that are "done"
useQuery(['todos', { type: 'done' }], ...)
// queryKey === ['todos', { type: 'done' }]
```

### 查询键值被确定地散列！

这意味着，不管对象中键值的顺序如何，以下所有查询都被认为是相等的：

```js
useQuery(['todos', { status, page }], ...)
useQuery(['todos', { page, status }], ...)
useQuery(['todos', { page, status, other: undefined }], ...)
```

但是，以下查询键值不相等。数组项的顺序很重要！

```js
useQuery(['todos', status, page], ...)
useQuery(['todos', page, status], ...)
useQuery(['todos', undefined, page, status], ...)
```

## 如果你的查询功能依赖于变量，则将其包含在查询键值中

由于查询键值唯一地描述了它们要获取的数据，因此它们应包括你在查询函数中使用的任何**需要更改的变量**。例如：

```js
function Todos({ todoId }) {
  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
}
```

## 延伸阅读

在大型应用程序中如何组织你的查询键值？请参阅[此社区资源](https://react-query.tanstack.com/community/tkdodos-blog#8-effective-react-query-keys)
