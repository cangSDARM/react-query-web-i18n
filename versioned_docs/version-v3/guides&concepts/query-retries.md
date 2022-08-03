---
id: query-retries
title: 查询重试 query-retries
---

当`useQuery`查询失败（查询函数引发错误）时，如果该查询的请求未达到最大连续重试次数（默认为 3），或者提供了一个函数来确定是否允许重试，则 React Query 将自动重试该查询。

您可以在全局级别和单个查询级别上配置重试逻辑。

- 设置`retry = false`将禁用重试
- 设置`retry = 6`将重试失败的次数设置为 6 次，然后显示该函数引发的最终错误
- 设置`retry = true`将无限次重试失败的请求
- 设置`retry =（failureCount，error）=> ...`允许基于请求失败的原因进行自定义逻辑

```js
import { useQuery } from "react-query";

// 对特定的一个查询设置固定的重试次数
const result = useQuery(["todos", 1], fetchTodoListPage, {
  retry: 10, // 在显示错误之前，将重试10次
});
```

## 重试延迟

默认情况下，请求失败后，React Query 中的重试不会立即发生。按照标准，后退延迟将逐渐应用于每次重试尝试。

默认的`retryDelay`设置为以二的倍数递增（从`1000ms`开始），但不超过 30 秒：

```js
// 为所有查询配置
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
```

尽管不建议这样做，但是显然可以在 Provider 和单个查询选项中覆盖`retryDelay`函数/整数。
如果设置为整数而不是函数，则延迟将始终是相同的时间量：

```js
const result = useQuery("todos", fetchTodoList, {
  retryDelay: 1000, // 无论重试多少次，都会始终等待1000毫秒重试
});
```
