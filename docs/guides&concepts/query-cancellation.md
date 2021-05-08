---
id: query-cancellation
title: 查询取消
---

默认情况下，在返回的 Promise 解析之前，卸载或不再使用的查询将被忽略而不是取消。这是为什么？

- 对于大多数程序而言，过时的查询可以简单的忽略掉
- 取消相关的 API 可能不是对每个查询函数都可用
- 如果有取消相关的 API，则它们在程序/库之间的实现方式通常会有所不同（例如，Fetch，Axios 和 XMLHttpRequest）

但是不用担心！
如果您的查询需要高带宽（high-bandwidth）或者下载成本非常之高，那么 React Query 提供了一个通过令牌（或与之相关的东西的 API）来取消查询的请求（**cancel** query requests）的通用方法。
要使用该特性，请将一个 `cancel` 函数附加到相关请求返回的 Promise 上。
当查询过期或不活动时，`promise.cancel` 函数将被调用（如果可用）。

## 使用 `axios`

```js
import { CancelToken } from 'axios'

const query = useQuery('todos', () => {
  // 为此请求创建一个新的 CancelToken 源
  const source = CancelToken.source()

  const promise = axios.get('/todos', {
    // 传入该源到 cancelToken
    cancelToken: source.token,
  })

  // 如果 React Query 调用 `promise.cancel` 方法，则取消请求
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query')
  }

  return promise
})
```

## 使用 `fetch`

```js
const query = useQuery('todos', () => {
  // 创建一个新的 AbortController 实例
  const controller = new AbortController()
  // 获取 abortController 的信号(signal)
  const signal = controller.signal

  const promise = fetch('/todos', {
    method: 'get',
    // 传入信号
    signal,
  })

  // 如果 React Query 调用 `promise.cancel` 方法，则取消请求
  promise.cancel = () => controller.abort()

  return promise
})
```

## 手动取消

有时，您想要手动取消。
例如，如果请求需要很长时间才能完成，则可以允许用户单击“取消”按钮来停止请求。
为此，您只需要使用 `queryClient.cancelQueries(key)`。
如果 `promise.cancel` 可用，React Query 将取消请求。

```jsx
const [queryKey] = useState('todos')

const query = useQuery(queryKey, () => {
  const controller = new AbortController()
  const signal = controller.signal

  const promise = fetch('/todos', {
    method: 'get',
    signal,
  })

  // 如果 React Query 调用 `promise.cancel` 方法，则取消请求
  promise.cancel = () => controller.abort()

  return promise
})

const queryClient = useQueryClient()

return (
  <button
    onClick={(e) => {
      e.preventDefault()
      //取消请求
      queryClient.cancelQueries(queryKey)
    }}
  >
    Cancel
  </button>
)
```
