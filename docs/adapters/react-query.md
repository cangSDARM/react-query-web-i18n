---
id: react-query
title: React Query
---

`@tanstack/react-query` 包提供了一级 API，用于在 React 使用 Tanstack Query。
然而，这些导出的钩子中的所有[原语(primitives)](https://baike.baidu.com/item/%E5%8E%9F%E8%AF%AD/3794081)都是核心 API。
这些核心 API，包括查询客户端(Query-Clint)、查询结果(query results)、查询订阅(query subscriptions)等，也被其他的适配器所共享。

## Example

```tsx
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function Example() {
  const query = useQuery("todos", fetchTodos);

  return (
    <div>
      {query.isLoading
        ? "Loading..."
        : query.isError
        ? "Error!"
        : query.data
        ? query.data.map((todo) => <div key={todo.id}>{todo.title}</div>)
        : null}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
```
