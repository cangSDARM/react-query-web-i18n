---
id: query-invalidation
title: 主动查询失效 Query Invalidation
tags:
  - 翻译完成
---

在再次获取数据查询之前，被动的去等待查询变得过时并不总是可行的。
尤其是在查询的数据已经因为用户所做的某些事情而过时的情况下。
为此，`QueryClient` 包含一个 `invalidateQueries` 方法，可以智能地将查询标记为过时的，并使之可用重新获取数据！

```ts
// 使缓存中的每个查询都无效
queryClient.invalidateQueries();
// 无效以 `todos` 开头的键值的查询
queryClient.invalidateQueries(["todos"]);
```

> 注意：在其他使用归一化缓存的库试图通过强制手段或模式推断来更新数据的情况下，
> React Query 为你提供了一套工具，来避免维护归一化缓存所需要的手工操作。
> 这套工具使得**失效具有针对性**，可以**在后台重新获取**并最终进行**原子级更新**。

当使用 `invalidateQueries` 使查询无效时，会发生两件事：

- 该查询被标记为过时的。此过时状态将覆盖 `useQuery` 或相关 hook 中使用的所有 `staleTime` 配置
- 如果查询正通过 `useQuery` 或相关 hook 渲染，则该查询也会在后台重新获取数据

## 查询的匹配

当使用像 `invalidateQueries` 和 `removeQueries` 之类的 API（以及其他支持部分查询匹配的 API）时，你可以按其前缀匹配多个查询，或者通过配置获得特定的查询。
有关可以使用的用于过滤匹配的内容，请参阅[查询过滤器](./filters#查询过滤器)。

在此示例中，我们可以使用 `todos` 前缀让所有查询键值以 `todos` 开头的查询无效：

```ts
import { useQuery, useQueryClient } from "@tanstack/react-query";

// 从上下文中获取 QueryClient
const queryClient = useQueryClient();

queryClient.invalidateQueries(["todos"]);

// 下面的两个查询都会被无效
const todoListQuery = useQuery(["todos"], fetchTodoList);
const todoListQuery = useQuery(["todos", { page: 1 }], fetchTodoList);
```

你甚至可以通过将更特定的键值传递给 `invalidateQueries` 方法来使具有特定变量的查询无效：

```ts
queryClient.invalidateQueries(["todos", { type: "done" }]);

// 该查询会被无效
const todoListQuery = useQuery(["todos", { type: "done" }], fetchTodoList);

// 该查询不会被无效
const todoListQuery = useQuery(["todos"], fetchTodoList);
```

`invalidateQueries` API 非常灵活，所以即使你*只想*无效那些不再具有任何变量或子键的 `todos` 查询，
也可以将 `exact: true` 选项传递给 `invalidateQueries` 方法：

```ts
queryClient.invalidateQueries(["todos"], { exact: true });

// 该查询会被无效
const todoListQuery = useQuery(["todos"], fetchTodoList);

// 该查询不会被无效
const todoListQuery = useQuery(["todos", { type: "done" }], fetchTodoList);
```

如果你发现自己需要**更细的粒度**，可以将 `predicate` 函数传递给 `invalidateQueries` 方法。
此函数将从查询缓存中接收每个 `Query` 实例，并允许你返回 `true` 或 `false` 来确定是否使该查询无效：

```ts
queryClient.invalidateQueries({
  predicate: (query) =>
    query.queryKey[0] === "todos" && query.queryKey[1]?.version >= 10,
});

// 该查询会被无效
const todoListQuery = useQuery(["todos", { version: 20 }], fetchTodoList);

// 该查询会被无效
const todoListQuery = useQuery(["todos", { version: 10 }], fetchTodoList);

// 当然，该查询不会被无效
const todoListQuery = useQuery(["todos", { version: 5 }], fetchTodoList);
```
