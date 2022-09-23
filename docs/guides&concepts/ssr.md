---
id: ssr
title: 服务端渲染 SSR
tags:
  - 翻译完成
---

React Query 支持两种在服务器上预取数据并将其传递给 queryClient 的方式。

- 你自己手动预取数据并将其作为 `initialData` 传递给 React Query
  - 对于简单情况可以以此来快速设置
  - 但有一些需要注意的地方
- 在服务器上预取查询，对缓存进行 dehydrate，然后在客户端上对其进行 rehydrate
  - 需要进行更多的前期设置

## 在 Next.js 中

这些机制的具体实现可能因平台而异，但我们建议从支持[两种形式的预渲染](https://nextjs.org/docs/basic-features/data-fetching/overview)的 _Next.js_ 开始

- 静态生成 (SSG)
- 服务端渲染 (SSR)

无论你使用什么平台，React Query 都支持这两种形式的预渲染

### 使用 `initialData`

与 Next.js 的 [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) 或 [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) 一起，你可以将你在任一方法中获取的数据传递给 `useQuery` 的 `initialData` 选项。
从 React Query 的角度来看，这些集成方式都是相同的。
`getStaticProps` 的形式如下所示：

```ts
export async function getStaticProps() {
  const posts = await getPosts();
  return { props: { posts } };
}

function Posts(props) {
  const { data } = useQuery(["posts"], getPosts, { initialData: props.posts });

  // ...
}
```

这种设置是最少的，在某些情况下这也是一种快速的解决方案。但是与完整方法相比，需要**权衡一些注意事项**：

- 如果要在组件树中更深的组件中调用 `useQuery`，则需要将 `initialData` 向下透传到该处
- 如果要在多个位置使用相同查询的 `useQuery`，则需要将 `initialData` 广播到所有位置
- 由于无法知道什么时候需要在服务器上获取查询数据，因此 `dataUpdatedAt` 以及确定查询是否需要重新获取，都取决于页面的加载时间

### 使用 Hydration

React Query 支持在 Next.js 中预取服务器上的多个查询，然后将这些查询 _dehydrating_ 到 queryClient。
这意味着服务器可以预渲染那些在页面加载时立即可用的标记。并且一旦 JS 可用，React Query 就可以使用库的全部功能来升级或 hydrate 这些查询。
这包括在客户端重新获取某些在服务器渲染后已经过时的查询。

要支持在服务器上缓存查询并设置 hydration，请执行以下操作：

- **在应用内部创建一个新的 ref/state 用来保存`QueryClient` 实例**。 这样可以确保**数据不会在不同的用户和请求之间共享，并且只在每个组件的生命周期中创建一次`QueryClient`**
- 用 `<QueryClientProvider>` 包装你的组件，并将 `QueryClient` 实例传递给它
- 用 `<Hydrate>` 包装你的组件，并将 `pageProps` 的 `dehydratedState` 传递给它

```tsx
// 以下是state的例子，ref类似
// _app.jsx
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
```

现在，你已经准备号用 [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)（针对 SSG）或 [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)（针对 SSR）在页面中预取一些数据了。
从 React Query 的角度来看，这些集成方式都是相同的。

`getStaticProps` 的形式如下所示：

- 为**每个页面请求**创建一个新的 `QueryClient` 实例。 这确保了**数据不会在不同的用户和请求之间共享**
- 使用客户端的 `prefetchQuery` 方法预取数据，并等待其完成
- 使用 `dehydrate` 使查询缓存 dehydrate，并通过 `dehydratedState` 属性将其传递到页面。 这与从 `_app.js` 中提取缓存的方式相同

```js
// pages/posts.jsx
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts"], getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Posts() {
  // 这种useQuery也可能发生在 `Posts` 页面的更深层子目录中，无论哪种方式，数据都将立即可用
  const { data } = useQuery(["posts"], getPosts);

  // 这个查询不是在服务器上预取的，而是直到在客户端上才开始取，这两种模式可以混合使用
  const { data: otherData } = useQuery(["posts-2"], getPosts);

  // ...
}
```

如前所述，可以预取一些查询，也可以在 queryClient 上获取别的查询。
这就意味着你可以通过为特定查询添加或删除 `prefetchQuery` 来控制服务器需要渲染的内容。

### 关于 Next.js rewrite 特性的警告

如果你使用了 [Next.js 的重写功能](https://nextjs.org/docs/api-reference/next.config.js/rewrites) 和[自动静态优化](https://nextjs.org/docs/advanced-features/automatic-static-optimization)特性或 `getStaticProps` 属性的组合，会有一个问题：这会造成 React Query 第二次 hydration。
这是因为 [Next.js 需要确保重写的内容在客户端上被正确的处理过](https://nextjs.org/docs/api-reference/next.config.js/rewrites#rewrite-parameters) 并正确收集在 hydration 后任何可能改动到的参数，这样它才能提供 `router.query`.

其结果是，所有 hydration 数据都丢失了引用相等性(referential equality)，会导致意料之外的结果。比如像是 React 组件中的 props, `useEffect`, `useMemo` 依赖数组中用到的内容会被触发.

## 使用其他或自定义的 SSR 框架

本指南充其量是对带有 React Query 的 SSR 应该如何工作的高度概述。
由于有许多种不同的 SSR 的设置，你的需求和实现方法可能有所不同。

> 如果可以的话，请把你的发现贡献到此页面，以获取有关框架的特定的指南！

### 服务器端

- **在你的请求处理程序中创建一个新的 `QueryClient` 实例**。 这样可以确保**数据不会在不同的用户和请求之间共享**。
- 在客户端代码中，预取你需要的任何数据
- Dehydrate 客户端
- **使用客户端的 Provider 和 dehydrated 状态渲染你的应用**。**这一点极其重要**！你必须使用**相同的 dehydrated 状态渲染服务器和客户端**，以确保**客户端上 hydration 产生的标记与服务器完全相同**。
- 序列化并嵌入 dehydrated 缓存，将其与 HTML 内容一起发送给客户端
- 在 dehydrated 状态已发往客户端时，调用 [`queryClient.clear()`](../reference/QueryClient#queryclientclear) 清除 React Query 缓存

> 安全说明：使用 `JSON.stringify` 序列化数据可能使你面临 XSS 攻击的风险，[此博客文章](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0)解释了为什么以及如何解决它

```tsx
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

async function handleRequest(req, res) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["key"], fn);
  const dehydratedState = dehydrate(queryClient);

  const html = ReactDOM.renderToString(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <App />
      </Hydrate>
    </QueryClientProvider>
  );

  res.send(`
    <html>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};
        </script>
      </body>
    </html>
  `);

  queryClient.clear();
}
```

### 客户端

- 解析与 HTML 一起发送给客户端缓存的 dehydrated 状态
- 创建一个新的 `QueryClient` 实例
- 和服务端类似，**使用客户端的 Provider 和 dehydrated 状态渲染你的应用**。**这一点极其重要**！你必须使用**相同的 dehydrated 状态渲染服务器和客户端**，以确保**客户端上 hydration 产生的标记与服务器完全相同**。

```tsx
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const dehydratedState = window.__REACT_QUERY_STATE__;

const queryClient = new QueryClient();

ReactDOM.hydrate(
  <QueryClientProvider client={queryClient}>
    <Hydrate state={dehydratedState}>
      <App />
    </Hydrate>
  </QueryClientProvider>,
  document.getElementById("root")
);
```

## 带有 Suspense 的自定义 SSR

如果你不想为 SSR 中的所有查询都提供 `prefetchQuery()`，你可以使用 Suspense。

### 服务器端

```tsx
import {
  dehydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ssrPrepass from "react-ssr-prepass";

async function handleRequest(req, res) {
  const queryClient = new QueryClient();

  // React SSR 不支持 ErrorBoundary
  try {
    // 遍历树并获取所有 Suspense 的数据（抛出Promise）
    await ssrPrepass(<App />);
  } catch (e) {
    console.error(e);
    // 出错时发送没有 SSR 的 index.html，这样用户可以重试并看到一些东西
    return res.sendFile("path/to/dist/index.html");
  }

  const html = ReactDOM.renderToString(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  const dehydratedState = dehydrate(queryClient);

  res.send(`
    <html>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};
        </script>
      </body>
    </html>
  `);

  queryClient.clear();
}
```

### 客户端

确保在查询中使用 Suspense (译注：官方资源丢失，暂时不清楚内容)

## 提示、技巧和注意事项

### 只有成功的查询才包括在 dehydration 中

任何有错误的查询都会**自动**从 dehydration 中排除。
这意味着默认行为是假装这些查询从未在服务器上加载过，通常你可以显示一个加载状态，然后在 queryClient 上重新查询。
**无论发生什么错误**，都会发生这种情况。

有时，这种行为是不可取的。
也许你希望在某些错误或查询上呈现一个带有正确状态代码的错误页面。
在这些情况下，使用 `fetchQuery` 捕获任何错误并**手动处理这些错误**。

### 在服务端上获取查询数据后就开始度量“数据何时过时”

查询被标记为 `dataUpdatedAt` 时，就代表它已经是过时的查询了。
这里需要注意的是，服务器需要有正确的时间才能正常工作。
React Query **使用的是 UTC 时间**，所以时区不需要考虑在内。

由于 `staleTime` 默认为 `0`，因此默认情况下，在页面加载时，查询就将在后台重新获取。
你可能想使用一个较久的 `staleTime` 来避免这种多次没必要的获取，特别是你不缓存你的标记(don't cache your markup)的情况下。

在 CDN 中缓存标记时，这种对过时查询的重新获取是完美的选择！
你可以将页面本身的缓存时间设置得相当高，以避免在服务器上重新渲染页面，但是可以将查询的 `staleTime` 配置得较低，以确保用户访问该页面后立即在后台重新获取数据。
当然，或许你可以设置得将页面缓存一周，但如果数据大于一天，则在页面加载时自动重新获取数据？

### 服务端的内存占用过高

如果你为每个请求都创建一个 `QueryClient`, React Query 就会为每个 QueryClient 都创建一个隔离的缓存，每个都会在内存中保存一段时间(通过 `cacheTime` 设定<sup>*</sup>)。
如果在此期间有大量的请求，这可能会导致服务器上的内存使用过高。

> <sup>*</sup> 在服务器上，`cacheTime` 默认为 `Infinity`。它禁用了手动垃圾收集，一旦请求结束就会自动清除内存。
> 如果你明确设置了一个非 `Infinity` 的 `cacheTime`，那么你需要手动负责提前清除缓存。

为了在不需要缓存后立即清除缓存并降低内存消耗，可以在服务器处理请求并将 dehydrated 的状态发送给客户端后，添加一句对[`queryClient.clear()`](../reference/QueryClient#queryclientclear)的调用。

另外，你可以设置一个较小的 `cacheTime`。
