---
id: query-keys
title: 查询的键值 Query Keys
---

React Query 在内部基于查询键值来管理查询缓存。
传递给 React Query 的查询键值必须是一个数组。
该数组可以是简单的仅有单个常量字符串的数组，也可以是包含许多嵌套对象及变量字符串的数组。
只要数组的内容是**可序列化的**，并且**对查询的数据来说它是唯一的**，那它就是合法的！

### 最简形式

键值最简单形式是一个带有单个常量字符串的数组。在以下情况，我们推荐你使用这种格式：

- 通用的*List/Index*资源
- 非分层的(Non-hierarchical)资源

```ts
// A list of todos
useQuery(['todos'], ...); // queryKey === ['todos']

// Something else, whatever!
useQuery(['somethingSpecial'], ...); // queryKey === ['somethingSpecial']
```

### 包含复杂对象的数组

当查询需要更多信息来唯一地描述其数据时，数组可以为带有任意数量字符串及可序列化对象的形式。这种形式对于以下情况很有用：

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

但是，以下查询键值不相等。这些数组项的顺序很重要，因为它们的散列信息并不相同！

```ts
useQuery(['todos', status, page], ...);
useQuery(['todos', page, status], ...);
useQuery(['todos', undefined, page, status], ...);
```

## 如果你的查询功能依赖于变量，则将其包含在查询键值中

由于查询键值唯一地描述了需要获取的数据，因此它们应该包括所有那些在查询函数中使用到的**需要更改的变量**。例如：

```ts
function Todos({ todoId }) {
  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
}
```

## 延伸阅读

如何在大型应用中正确的组织查询键值？请参阅[此社区资源(英文)](https://tanstack.com/query/v4/docs/community/tkdodos-blog?#8-effective-react-query-keys)
