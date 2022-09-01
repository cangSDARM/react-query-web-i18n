---
id: query-cancellation
title: 查询取消 query-cancellation
---

[以前的方法需要一个`cancel`函数](#旧的-cancel-函数)

React Query 为每个查询函数都提供了一个[`AbortSignal`的实例](https://developer.mozilla.org/docs/Web/API/AbortSignal)，**当且仅当你的运行环境支持该对象**。
当一个查询变得过时或者不活跃，那么该“信号”将被中止。
这意味着，所有的查询都是可取消的，而且如果需要，你可以在查询函数中响应取消动作。
最好的是，你可以继续使用普通的 `async/await` 语法，同时获得自动取消的所有好处。
此外，这个解决方案比旧的解决方案更适合 TypeScript。

[AbortController API 在大多数运行时环境中都是可用的](https://developer.mozilla.org/docs/Web/API/AbortController#browser_compatibility)。但是如果运行时环境不支持它，那么查询函数将在对应的地方接收到 `undefined`。
当然，你可以选择手动实现 `AbortController` API，[在 npm 上有几个可用的](https://www.npmjs.com/search?q=abortcontroller%20polyfill)。

**注意**：该特性在 `3.30.0` 版本中引入。
如果你仍在使用旧版本的，请尽快升级或者使用[旧版本的 `cancel` 函数](#旧的-cancel-函数)

## 默认行为

默认情况下，未挂载(unmount)的或者在其返回的 Promise 被执行之前的查询是*不会*取消的。
这意味着，在执行之后的数据是在缓存中可用。
因此，在已经开始接收一个查询时且在其完成之前，卸载其组件的情形是被允许的。并且若再次挂载组件，而查询还没有被 GC，那么数据是可用的。

但是，如果你使用了 `AbortSignal` 或者是附加了一个 `cancel` 函数，那么这个 Promise 是可以被取消的(例如，下面的取消 `fetch` 操作)，因此查询也必须被取消。
取消查询将导致其状态*恢复到*以前的状态。

## 使用 `fetch`

```js
const query = useQuery('todos', async ({ signal }) => {
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
})
```

## 使用 `axios`

### 使用 `axios` [v0.22.0+](https://github.com/axios/axios/releases/tag/v0.22.0)

```js
import axios from "axios";

const query = useQuery("todos", ({ signal }) =>
  axios.get("/todos", {
    // 传递可撤销的信号到 `axios`
    signal,
  }),
);
```

### 使用 `axios` (版本低于 `v0.22.0`)

```js
import axios from "axios";

const query = useQuery("todos", ({ signal }) => {
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
});
```

## 使用 `XMLHttpRequest`

```js
const query = useQuery("todos", ({ signal }) => {
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
});
```

## 使用 `graphql-request`

### 使用 `graphql-request` v4.0.0+

可以传递给 `request` 函数一个 `AbortSignal`。

```js
const client = new GraphQLClient(endpoint);

const query = useQuery("todos", ({ signal }) => {
  client.request({ document: query, signal });
});
```

### 使用 `graphql-request` (版本低于 `v4.0.0`)

可以传递给 `GraphQLClient` 的构造函数一个 `AbortSignal`.

```js
const query = useQuery("todos", ({ signal }) => {
  const client = new GraphQLClient(endpoint, {
    signal,
  });
  return client.request(query, variables);
});
```

## 手动取消

有时，你可能会想手动取消。
例如，如果请求需要很长时间才能完成，此时允许用户单击“取消”按钮来停止请求。
为此，你只需要调用 `queryClient.cancelQueries(key)`，取消此次查询并将数据还原到上一次的状态。
如果 `promise.cancel` 可用或者你在查询函数内处理了 `signal`，React Query 将取消该 Promise 的同时取消请求。

```jsx
const [queryKey] = useState("todos");

const query = useQuery(queryKey, async ({ signal }) => {
  const resp = await fetch("/todos", { signal });
  return resp.json();
});

const queryClient = useQueryClient();

return (
  <button
    onClick={(e) => {
      e.preventDefault();
      queryClient.cancelQueries(queryKey);
    }}
  >
    Cancel
  </button>
);
```

## 旧的 `cancel` 函数

不用担心！旧的取消功能设计将继续工作。
但是我们建议你从[可取消的 Promise](https://github.com/tc39/proposal-cancelable-promises)转移到新的 `AbortSignal` 接口，因为它已经被[标准化为一个通用的构造](https://dom.spec.whatwg.org/#interface-abortcontroller)，用于在[大多数浏览器](https://caniuse.com/abortcontroller)和 [Node 中](https://nodejs.org/api/globals.html#globals_class_abortsignal)中止正在进行的活动。旧的取消函数可能会在未来的主版本中被删除。

要与此特性集成，请在(需要实现取消的查询)返回的 Promise 上附加一个 `cancel` 函数。
当查询变得过时或不活跃时，将调用 `promise.cancel` 函数(如果可用)。

### 使用 `axios`

```js
import axios from "axios";

const query = useQuery("todos", () => {
  // 为此请求创建一个新的 CancelToken 源
  const source = axios.CancelToken.source();

  const promise = axios.get("/todos", {
    // 传入该源到 cancelToken
    cancelToken: source.token,
  });

  // 如果 React Query 调用 `promise.cancel` 方法，则取消请求
  promise.cancel = () => {
    source.cancel("Query was cancelled by React Query");
  };

  return promise;
});
```

### 使用 `fetch`

```js
const query = useQuery("todos", () => {
  // 创建一个新的 AbortController 实例
  const controller = new AbortController();
  // 获取 abortController 的信号(signal)
  const signal = controller.signal;

  const promise = fetch("/todos", {
    method: "get",
    // 传入信号
    signal,
  });

  // 如果 React Query 调用 `promise.cancel` 方法，则取消请求
  promise.cancel = () => controller.abort();

  return promise;
});
```
