---
id: ssr
title: SSR
---

React Query 支持两种在服务器上预取数据并将其传递给 queryClient 的方式。

- 自己预取数据并将其作为 `initialData` 传递
  - 对于简单情况可以快速设置
  - 但有一些注意事项
- 在服务器上预取查询，对缓存进行 dehydrate，然后在客户端上对其进行 rehydrate
  - 需要预先进行更多设置

## 在 Next.js 中

这些机制的具体实现可能因平台而异，但我们建议从支持[两种形式的预渲染](https://nextjs.org/docs/basic-features/data-fetching)的 _Next.js_ 开始

- 静态生成 (SSG)
- 服务端渲染 (SSR)

无论您使用什么平台，React Query 都支持这两种形式的预渲染

### 使用 `initialData`

与 Next.js 的 [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) 或 [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) 一起，您可以将通过两种方法获取的数据传递给 `useQuery` 的 `initialData` 选项。
从 React Query 的角度来看，这些可以以相同的方式集成。
`getStaticProps` 如下所示：

```js
export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}

function Posts(props) {
  const { data } = useQuery('posts', getPosts, { initialData: props.posts })

  // ...
}
```

这种设置是最少的，在某些情况下这可以是一种快速的解决方案，但是与完整方法相比，需要**权衡一些注意事项**：

- 如果要在组件树中更深的组件中调用 `useQuery`，则需要将 `initialData` 向下透传到该处
- 如果要在多个位置使用相同的查询调用 `useQuery`，则需要将 `initialData` 广播到所有位置
- 由于无法知道什么时候需要在服务器上获取查询数据，因此 `dataUpdatedAt` 以及确定查询是否需要重新获取的时间取决于加载页面的时间

### 使用 Hydration

React Query 支持在 Next.js 中预取服务器上的多个查询，然后将这些查询 _dehydrating_ 到 queryClient。
这意味着服务器可以预渲染那些在页面加载时立即可用的标记，并且一旦 JS 可用，React Query 就可以使用库的全部功能来升级或合并这些查询。
这包括在客户端重新获取某些查询，如果它们在服务器渲染后变得过时的话。

要支持在服务器上缓存查询并设置 hydration，请执行以下操作：

- **在您的应用内部以及实例 ref 上创建一个新的 `QueryClient` 实例**。 这样可以确保**不同的用户和请求之间不会共享数据**
- 用 `<QueryClientProvider>` 包装您的应用组件，并将其传递给客户端实例
- 用 `<Hydrate>` 包装您的应用组件，并将 `pageProps` 的 `dehydratedState` 传递给它

```jsx
// _app.jsx
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'

export default function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
```

现在，您可以使用 [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)（用于 SSG）或 [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)（用于 SSR）在页面中预取一些数据了。
从 React Query 的角度来看，这些可以以相同的方式集成。

下面展示了 `getStaticProps` 的例子。

- 为**每个页面请求**创建一个新的 `QueryClient` 实例。 这确保了**数据不会在不同的用户和请求之间共享**
- 使用客户端的 `prefetchQuery` 方法预取数据，并等待其完成
- 使用 `dehydrate` 使查询缓存 dehydrate，并通过 `dehydratedState` 属性将其传递到页面。 这与从 `_app.js` 中提取缓存的方式相同

```js
// pages/posts.jsx
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('posts', getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function Posts() {
  // 这种useQuery也可能发生在 `Posts` 页面的更深层子目录中，无论哪种方式，数据都将立即可用
  const { data } = useQuery('posts', getPosts)

  // 这个查询不是在服务器上预取的，而是直到在客户端上才开始取，这两种模式可以混合使用
  const { data: otherData } = useQuery('posts-2', getPosts)

  // ...
}
```

如前所述，可以预取一些查询，然后让其他查询在 queryClient 上获取。
这意味着您可以通过为特定查询添加或删除 `prefetchQuery` 来控制内容服务器需要渲染的内容。

## 使用其他或自定义的 SSR 框架

本指南充其量是对带有 React Query 的 SSR 应该如何工作的高级概述。
由于有许多不同的可能的 SSR 的设置，您的需求和实现方法可能有所不同。

> 如果可以的话，请把您的发现贡献到此页面，以获取有关任意框架的特定的指南！

### 在服务器上

- **在您的请求处理程序中创建一个新的 `QueryClient` 实例**。 这样可以**确保不同的用户和请求之间不会共享数据**。
- 在客户端代码中，预取您需要的任何数据
- Dehydrate 客户端
- **与客户端的 Provider 一起使用 dehydrated 状态渲染您的应用**。这是**非常重要**的！您必须使用**相同的 dehydrated 状态渲染服务器和客户端**，以确保**客户端上的 hydration 产生与服务器完全相同的标记**。
- 序列化并嵌入 dehydrated 缓存，以使用 HTML 发送给客户端

> 安全说明：使用 `JSON.stringify` 序列化数据可能使您面临 XSS 攻击的风险，[此博客文章](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0)解释了为什么以及如何解决它

```jsx
import { QueryClient, QueryClientProvider } from 'react-query'
import { dehydrate, Hydrate } from 'react-query/hydration'

function handleRequest (req, res) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('key', fn)
  const dehydratedState = dehydrate(queryClient)

  const html = ReactDOM.renderToString(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <App />
      </Hydrate>
    </QueryClientProvider>
  )

  res.send(`
    <html>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};
        </script>
      </body>
    </html>
  `)
}
```

### 客户端

- 解析使用 HTML 发送给客户端缓存的 dehydrated 状态
- 创建一个新的 `QueryClient` 实例
- 和服务端类似，**与客户端的 Provider 一起使用 dehydrated 状态渲染您的应用**。这是**非常重要**的！您必须使用**相同的 dehydrated 状态渲染服务器和客户端**，以确保**客户端上的 hydration 产生与服务器完全相同的标记**。

```jsx
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'

const dehydratedState = window.__REACT_QUERY_STATE__

const queryClient = new QueryClient()

ReactDOM.hydrate(
  <QueryClientProvider client={queryClient}>
    <Hydrate state={dehydratedState}>
      <App />
    </Hydrate>
  </QueryClientProvider>,
  document.getElementById('root'),
)
```

## 提示、技巧和注意事项

### 只有成功的查询才包括在 dehydration 中

任何有错误的查询都会**自动**从 dehydration 中排除。
这意味着默认行为是假装这些查询从未在服务器上加载过，通常显示加载状态，然后在 queryClient 上重新查询。
**无论发生什么错误**，都会发生这种情况。

有时，这种行为是不可取的。
也许您希望在某些错误或查询上呈现一个带有正确状态代码的错误页面。
在这些情况下，使用 `fetchQuery` 捕获任何错误并**手动处理这些错误**。

### 数据何时过时，在服务端上获取了查询数据时就开始度量

一个查询被认为是过时的，这取决于它是何时被标记为 `dataUpdatedAt` 的。
这里需要注意的是，服务器需要有正确的时间才能正常工作。
React Query **使用的是UTC时间**，所以时区不需要考虑在内。

由于 `staleTime` 默认为 `0`，因此默认情况下，在页面加载时，查询就将在后台重新获取。
您可能希望使用较高的过期时间来避免这种双重获取，特别是在不缓存标记的情况下。

在CDN中缓存标记时，这种对陈旧查询的重新获取是完美的选择！
您可以将页面本身的缓存时间设置得相当高，以避免不得不在服务器上重新渲染页面，但是可以将查询的 `staleTime` 配置得较低，以确保用户访问该页面后立即在后台重新获取数据。
当然，或许您可以设置得将页面缓存一周，但如果数据大于一天，则在页面加载时自动重新获取数据？
