---
id: query-cancellation
title: 查询取消 Query Cancellation
---

React Query 为每个查询函数都提供了一个[`AbortSignal`的实例](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal)，**当且仅当你的运行环境支持该对象**。
当一个查询变得过时或者不活跃，那么该“信号”将被中止。
这意味着，所有的查询都是可取消的，而且如果需要，你可以在查询函数中响应取消动作。
这最为方便的一点是，你可以继续使用普通的 `async/await` 语法，同时获得自动取消的所有好处。
此外，这个解决方案比旧的解决方案更适合 TypeScript。

[AbortController API 在大多数运行时环境中都是可用的](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9)。但是如果你的运行时环境不支持它，那么查询函数将在对应的地方接收到 `undefined`。
当然，你可以选择手动实现 `AbortController` API，[在 npm 上有几个可用的](https://www.npmjs.com/search?q=abortcontroller%20polyfill)。

## 默认行为

正常情况下，未挂载的或在其返回的 Promise 被 resolve/reject 之前的查询是*不会*被自动取消的。
顺利的话，在 resolve 之后的数据将在缓存中可用，reject 后的 error 可用。
不顺利的话，如果在已经开始接收一个查询且在其结束之前卸载组件，不会产生任何不利影响。并且若再次挂载此组件，且查询还被自动垃圾回收，那么数据可用。

但是，如果你使用了 `AbortSignal` 或者是给 Promise 附加了一个 `cancel` 函数，那么这个 Promise 是可以被取消的(例如，下面的使用 `fetch` 示例)。
此时查询也必须被取消。
取消查询将会导致其*恢复到以前*的状态。

## 使用 `fetch`

```ts
const query = useQuery({
  queryKey: ['todos'],
  queryFn: async ({ signal }) => {
    const todosResponse = await fetch('/todos', {
      // 传递可撤销的信号到fetch里去
      signal,
    })
    const todos = await todosResponse.json()

    const todoDetails = todos.map(async ({ details } => {
      const response = await fetch(details, {
        // 或这将他传递给好几个实例
        signal,
      })
      return response.json()
    })

    return Promise.all(todoDetails)
  }
})
```

## 使用 `axios`

### 使用 `axios` [^0.22.0](https://github.com/axios/axios/releases/tag/v0.22.0)

```ts
import axios from "axios";

const query = useQuery({
  queryKey: ["todos"],
  queryFn: ({ signal }) =>
    axios.get("/todos", {
      // 传递可撤销的信号到 `axios`
      signal,
    }),
});
```

### 使用 `axios` (版本低于 `0.22.0`)

```ts
import axios from "axios";

const query = useQuery({
  queryKey: ["todos"],
  queryFn: ({ signal }) => {
    // 给这个 request 创建一个 CancelToken
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const promise = axios.get("/todos", {
      // 传递这个 token 到该请求
      cancelToken: source.token,
    });

    // 如果 React Query 信号是 abort，那么撤销该请求
    signal?.addEventListener("abort", () => {
      source.cancel("Query was cancelled by React Query");
    });

    return promise;
  },
});
```

## 使用 `XMLHttpRequest`

```ts
const query = useQuery({
  queryKey: ["todos"],
  queryFn: ({ signal }) => {
    return new Promise((resolve, reject) => {
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", () => {
        resolve(JSON.parse(oReq.responseText));
      });
      signal?.addEventListener("abort", () => {
        oReq.abort();
        reject();
      });
      oReq.open("GET", "/todos");
      oReq.send();
    });
  },
});
```

## 使用 `graphql-request`

### 使用 `graphql-request` ^4.0.0

可以传递一个 `AbortSignal` 给客户端的 `request` 函数。

```ts
const client = new GraphQLClient(endpoint);

const query = useQuery({
  queryKey: ["todos"],
  queryFn: ({ signal }) => {
    client.request({ document: query, signal });
  },
});
```

### 使用 `graphql-request` (版本低于 `4.0.0`)

可以传递一个 `AbortSignal` 给 `GraphQLClient` 的构造函数.

```ts
const query = useQuery({
  queryKey: ["todos"],
  queryFn: ({ signal }) => {
    const client = new GraphQLClient(endpoint, {
      signal,
    });
    return client.request(query, variables);
  },
});
```

## 手动取消

有时，你可能会想手动取消。
例如：请求需要很长时间才能完成，因此用户可以单击“取消”按钮来停止请求。
为此，你只需要调用 `queryClient.cancelQueries(key)`，取消此次查询并将数据还原到上一次的状态。
如果 `promise.cancel` 可用或者你在查询函数内已经处理了 `signal`，React Query 就会取消该 Promise 同时取消对应请求。

```tsx
const query = useQuery({
  queryKey: ["todos"],
  queryFn: async ({ signal }) => {
    const resp = await fetch("/todos", { signal });
    return resp.json();
  },
});

const queryClient = useQueryClient();

return (
  <button
    onClick={(e) => {
      e.preventDefault();
      queryClient.cancelQueries(["todos"]);
    }}
  >
    Cancel
  </button>
);
```
