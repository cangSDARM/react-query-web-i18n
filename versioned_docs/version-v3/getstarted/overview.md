---
id: overview
title: 概览
slug: /
---

React Query 通常被描述为 React 缺少的数据获取(data-fetching)库，但是从更广泛的角度来看，它使 React 程序中的**获取，缓存，同步和更新服务器状态**变得轻而易举。

## 动机

开箱即用，React 没有内置的从组件中获取或更新数据的方式，因此开发人员最终会构建自己的获取数据的方式。
这通常意味着使用 React Hooks 将基于组件的状态 state 和 effects 整合在一起，或者使用更通用的状态管理库来存储和提供整个程序中的异步数据。

尽管大多数传统状态管理库非常适合用于处理客户端状态，但是它们**并不适合处理异步或服务器状态**。
这是因为**服务器状态完全不同**。对于初学者，服务器状态：

- 远程保留在您无法控制或拥有的位置
- 需要异步 API 进行获取和更新
- 意味着共享所有权，可以在你不知情的情况下被其他人改变
- 如果不小心，可能会在应用中变得"过时"

一旦你掌握了应用中服务器状态的本质，你会遇到更多的挑战，例如:

- 缓存...（这可能是编程中最难的事情）
- 将对同一数据的多个请求重复数据集合到单个请求中
- 在后台更新"过时"的数据
- 知道数据何时"过时"
- 尽可能快地反映数据更新
- 分页和延迟加载数据等性能优化
- 管理服务器状态的内存和 GC
- 结构化共享并存储查询结果

如果您没有被这个列表压垮，那么这一定意味着您可能已经解决了所有的服务器状态问题，值得获奖。
然而，如果你和大多数人一样，你要么还没有解决所有这些挑战，要么还没有解决大部分挑战，我们只是触及了表面!

React Query 无疑是管理服务器状态的最佳库之一。它非常好用，**开箱即用，无需配置**，并且可以随着应用的增长而根据自己的喜好**进行定制**。

React Query 使您可以击败并征服棘手的服务器状态挑战和障碍，并在开始控制您的应用数据之前对其进行控制。

从更专业的角度来说，React Query 可能会:

- 帮助您从应用中删除许多复杂和容易引起误解的代码行，用少量的 React 查询逻辑代替
- 使您的应用更易于维护，更易于构建新功能，而不必担心如何连接新的服务器状态数据源
- 通过应用的 GUI 及执行层面的更快的数据响应，直接影响您的最终用户
- 潜在地帮助您节省带宽和提高内存性能

## 直接上代码!

在下面的例子中，你可以看到 React Query 以其最基本和简单的形式被用来获取 GitHub 项目本身的 React Query 的统计信息:

[Open in CodeSandbox](https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/simple)

```jsx
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json(),
    ),
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
```

## 你说服了我，那现在怎么办？

- 考虑参加[React Query Course](https://ui.dev/react-query?from=tanstack)课程（或为整个团队购买！）（英文）
- 立即开始阅读文档
