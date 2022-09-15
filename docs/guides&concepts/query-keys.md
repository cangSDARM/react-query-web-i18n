---
id: query-keys
title: 查询的键值 Query Keys
tags:
  - 翻译完成
---

在内部里，React Query 基于查询键值来管理查询缓存。
查询键值必须是一个数组的形式传递给 React Query。
数组可以是简单的仅有单个字符串的数组，也可以是包含许多嵌套对象及字符串的数组。
只要键值数组的内容是**可序列化的**，并且**对查询的数据来说它是唯一的**，那它就是合法的！

### 最简形式

键值最简单形式是一个带有单个常量值的数组。在以下情况，我们推荐你使用这种格式：

- 通用的*List/Index*资源
- 非分层的(Non-hierarchical)资源

```ts
// A list of todos
useQuery(['todos'], ...); // queryKey === ['todos']

// Something else, whatever!
useQuery(['somethingSpecial'], ...); // queryKey === ['somethingSpecial']
```

### 包含复杂对象的数组

当查询需要更多信息来唯一地描述其数据时，可以使用一个带有字符串及任意数量的可序列化对象的数组来描述它。这对于以下情况很有用：

- 分层或嵌套的资源
  - 通常需要传递 ID、索引或其他原语来唯一地标识该资源
- 带有附加参数的查询
  - 通常需要传递一个作为附加信息的对象

```ts
// An individual todo
useQuery(['todo', 5], ...);

// An individual todo in a "preview" format
useQuery(['todo', 5, { preview: true }], ...);

// A list of todos that are "done"
useQuery(['todos', { type: 'done' }], ...);
```

### 查询键值的散列是确定的(hashed deterministically)！

这意味着，不管对象中键值的顺序如何，以下所有查询都被认为是相等的：

```ts
useQuery(['todos', { status, page }], ...);
useQuery(['todos', { page, status }], ...);
useQuery(['todos', { page, status, other: undefined }], ...);
```

但是，以下查询键值不相等。数组项的顺序很重要！

```ts
useQuery(['todos', status, page], ...);
useQuery(['todos', page, status], ...);
useQuery(['todos', undefined, page, status], ...);
```

## 如果你的查询功能依赖于变量，则将其包含在查询键值中

由于查询键值唯一地描述了需要获取的数据，因此它们应该包括那些在查询函数中使用到的任何的**需要更改的变量**。例如：

```ts
function Todos({ todoId }) {
  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
}
```

## 延伸阅读

如何在大型应用中正确的组织查询键值？请参阅[此社区资源](https://tanstack.com/query/v4/docs/community/tkdodos-blog?#8-effective-react-query-keys)
