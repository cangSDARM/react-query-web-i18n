---
id: suspense
title: Suspense
---

> 注意：React Query 的 Suspense 模式是实验性的，与数据获取本身的 Suspense 模式相同。
> 除非你将 React 和 React Query 版本都**锁定为彼此兼容的补丁级别**，否则这些 API 将会**更改**，且**不应在生产中使用**。

React Query 也可以与 React 的新 Suspense for Data Fetching API 一起使用。
要启用此模式，可以将全局或查询级别配置的 `suspense` 选项设置为 `true`。

全局配置：

```jsx
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
```

单独配置

```js
import { useQuery } from "react-query";

useQuery(queryKey, queryFn, { suspense: true });
```

使用 Suspense 模式时，不需要 `status` 状态和 `error` 对象。
而是用 `React.Suspense` 组件（包括使用 `fallback` prop 和 React 错误边界来捕获错误）替换。
请阅读[“重置错误边界”](#重置错误边界)并查看[“ Suspense 示例”](https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/suspense)，以获取有关如何设置 Suspense 模式的更多信息。

除了在 Suspense 模式下查询行为的不同外，修改的行为也有所不同。
默认情况下，当修改失败时，不提供 `error` 变量，而是在下一次渲染所使用的组件时将其抛出，并传播到最近的错误边界，类似于查询错误。
如果要禁用此功能，可以将 `useErrorBoundary` 选项设置为 `false`。
如果你希望根本不引发异常，则可以将 `throwOnError` 选项也设置为 `false`！

## 重置错误边界

无论你在查询中使用 suspense 还是 `useErrorBoundaries`，你都需要一种让查询知道，在发生某些错误后重新渲染时，“想要”重试的方法。

查询错误可以使用 `QueryErrorResetBoundary` 组件或 `useQueryErrorResetBoundary` hook 来重置。

使用组件时，它将重置组件范围内的所有查询错误：

```jsx
import { QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

const App: React.FC = () => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </div>
        )}
      >
        <Page />
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
```

当使用该 hook 时，它将重置最近的 `QueryErrorResetBoundary` 内的任何查询错误。
如果没有定义边界，它将全局重置它们：

```jsx
import { useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

const App: React.FC = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <Button onClick={() => resetErrorBoundary()}>Try again</Button>
        </div>
      )}
    >
      <Page />
    </ErrorBoundary>
  );
};
```

## 渲染时获取 vs 按需渲染

Suspense 模式下的 React Query 作为一种不需要额外配置的、渲染时获取现的解决方案工作得非常好。
这意味着，当你的组件尝试挂载时，它们将触发查询获取和 suspend，但仅在你导入并挂载它们之后。
如果你想更进一步，实现“按需渲染”模型，我们建议在路由回调和/或用户交互事件上实现[预取数据](./prefetching)，以在装入查询之前开始加载查询。
你甚至可以期望在开始导入之前就开始加载查询。甚至是其父组件挂载之前。
