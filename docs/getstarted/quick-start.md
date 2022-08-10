---
id: quick-start
title: 快速入门
---

该示例非常简要地说明了 React Query 的 3 个核心概念：

- [查询 Queries](../guides&concepts/queries.md)
- [修改 Mutations](../guides&concepts/mutations.md)
- [查询错误处理 Query Invalidation](../guides&concepts/query-invalidation.md)

```tsx
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getTodos, postTodo } from "../my-api";

// 创建一个 client
const queryClient = new QueryClient();

function App() {
  return (
    // 提供 client 至 App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

function Todos() {
  // 访问 client
  const queryClient = useQueryClient();

  // 查询
  const query = useQuery(["todos"], getTodos);

  // 修改
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // 错误处理和刷新
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
```

这三个概念构成了 React Query 的大部分核心功能。
本文档的下一部分将详细介绍这些核心概念。
