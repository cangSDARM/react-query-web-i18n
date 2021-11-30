---
id: testing
title: 测试
---

React Query 是通过 hook 工作的——要么是我们提供的 hook，要么是围绕它们定制的 hook。

如有需要为这些自定义 hook 编写单元测试，你可以通过[React Hooks Testing Library](https://react-hooks-testing-library.com/)库来完成。

通过运行以下命令进行安装：

```sh
npm install @testing-library/react-hooks react-test-renderer --save-dev
```

(`react-test-renderer` 是 `@testing-library/react-hooks` 的对等依赖项，它需要与您使用的 React 版本相对应。)

## 我们的第一个测试

一旦安装，就可以编写一个简单的测试。给定下面的自定义钩子：

```js
export function useCustomHook() {
  return useQuery("customHook", () => "Hello");
}
```

我们可以为此编写一个测试，如下所示：

```jsx
const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });

await waitFor(() => result.current.isSuccess);

expect(result.current.data).toEqual("Hello");
```

注意，我们提供了一个自定义包装器，用于构建 `QueryClient` 和 `QueryClientProvider`。这有助于确保我们的测试与任何其他测试完全隔离。

可以只编写一次该包装器，但是如果是这样，在每次测试之前，我们都需要清除 `QueryClient` ，并且测试不能并行运行，否则一个测试会影响其他测试的结果。

## 关闭重试机制

React Query 底层默认以指数回退的形式重试三次，这也意味着要处理*应该错误的测试*时有可能会遇到超时等情况。关闭重试机制的最简单的方法是通过`QueryClientProvider`。让我们对上面的示例进行简单的扩展：

```jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
```

这将全局的设置所有查询都是"无重试"的。在`useQuery`显示的启用了重试时，这不会生效。如你在一次查询中设置了需要 5 次重试时，这不会生效，因为默认的全局配置只是作为 fallback 存在。

## 关闭关于网络的错误日志

在测试时，通常我们会关闭关于网络错误的日志(文件/Console)。为此，我们可以使用`react-query`的`setLogger()`函数

```js
// 在你测试之前，设置它
import { setLogger } from "react-query";

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ console 里没有错误记录了
  error: () => {},
});
```

## 在 Jest 中将 `cacheTime` 设置为 Infinity

默认情况下，`cacheTime` 设置为 5 分钟。这意味着缓存的 GC 计时器会每 5 分钟触发一次。
如果使用 Jest，可以将 `cacheTime` 设置为 Infinity，以防止出现“Jest did not exit one second after the test run completed”的错误消息。

## 测试网络调用

React Query 的主要用途是缓存网络请求，因此，首先测试我们的代码是否发出了正确的网络请求是很重要的。

有很多方法可以用来测试，但是对于这个例子，我们将使用 [nock](https://www.npmjs.com/package/nock)。

给定下面的自定义钩子：

```js
function useFetchData() {
  return useQuery("fetchData", () => request("/api/data"));
}
```

我们可以为此编写一个测试，如下所示：

```jsx
const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const expectation = nock("http://example.com").get("/api/data").reply(200, {
  answer: 42,
});

const { result, waitFor } = renderHook(() => useFetchData(), { wrapper });

await waitFor(() => {
  return result.current.isSuccess;
});

expect(result.current.data).toEqual({ answer: 42 });
```

在这里，我们使用 `waitFor` 并等待，直到查询状态表明请求已成功。
这样我们就知道 hook 已经完成并且应该具有正确的数据。

## 测试 加载更多/无限滚动

首先，我们需要模拟我们的 API 响应

```js
function generateMockedResponse(page) {
  return {
    page: page,
    items: [...]
  }
}
```

然后，我们的 `nock` 配置需要根据页面区分响应，我们将使用 `uri` 来做到这一点。
`uri` 的值在这里将是类似 `"/?page=1` 或 `/?page=2` 这种。

```js
const expectation = nock("http://example.com")
  .persist()
  .query(true)
  .get("/api/data")
  .reply(200, (uri) => {
    const url = new URL(`http://example.com${uri}`);
    const { page } = Object.fromEntries(url.searchParams);
    return generateMockedResponse(page);
  });
```

(请注意 `.persist()`，因为我们将从这个接口多次调用它)

现在我们可以安全地运行我们的测试了，这里的技巧是在调用 `fetchNextPage()` 之后等待 `isFetching` 和 `!isFetching` ：

```js
const { result, waitFor } = renderHook(() => useInfiniteQueryCustomHook(), {
  wrapper,
});

await waitFor(() => result.current.isSuccess);

expect(result.current.data.pages).toStrictEqual(generateMockedResponse(1));

result.current.fetchNextPage();

await waitFor(() => result.current.isFetching);
await waitFor(() => !result.current.isFetching);

expect(result.current.data.pages).toStrictEqual([
  ...generateMockedResponse(1),
  ...generateMockedResponse(2),
]);

expectation.done();
```

## 延伸阅读

有关如何通过`mock-service-worker`的相关设置来进行测试，请参阅[此社区资源](https://react-query.tanstack.com/community/tkdodos-blog#5-testing-react-query)
