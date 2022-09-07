---
id: important-defaults
title: 重要的默认配置 Important Defaults
tags:
  - 翻译完成
---

在开箱即用的情况下，React Query 配置了**激进但还算理智**的默认值。
有时，这些默认值有时会让新用户措手不及，或者说如果用户不知道它们，则会**使学习/调试变得困难**。
在继续学习和使用 React Query 时，请记住以下几点：

- 默认情况下，通过`useQuery`或`useInfiniteQuery`生成的查询实例会*将缓存的数据视为过时(stale)的*。

> 要更改此行为，可以在全局或者在单个查询中配置`staleTime`选项。指定更长的`staleTime`意味着查询将不会像以前那样频繁地重新获取其数据

- 当出现以下情况时，过时的查询会在后台自动重新获取数据:
  - 挂载新的查询实例
  - 窗口重新聚焦
  - 网络重新连接
  - 该查询可选地配置有重新获取数据的间隔(refetch interval)

如果某些重新获取的数据不是你所期望的，那么很大可能是你重新获取了窗口焦点(此时 React Query 正在处理`refetchOnWindowFocus`)。_在开发模式下，这可能会更频繁地触发_，特别是在浏览器的 Devtools 和你的应用之间互相切换也会导致获取，所以请额外注意。

> 要更改此功能，可以配置`refetchOnMount`, `refetchOnWindowFocus`, `refetchOnReconnect`和`refetchInterval`之类的选项。

- 当查询结果不再具有`useQuery`, `useInfiniteQuery`或查询观察者(query observers)的活动实例(active instances)时，该查询结果将被标记为"非活动"，并保留在缓存中，以防以后再次使用。

- 默认情况下，"非活动"查询会在**5 分钟**后被垃圾收集。

> 要更改此设置，可以将查询的默认`cacheTime`更改为`1000 * 60 * 5`毫秒以外的其他值。

- 失败的查询将**静默重试 3 次**，在捕获并向 UI 显示错误之前，会有**指数级的后退延迟(exponential backoff delay)**。

> 要更改这一点，你可以将查询的默认`retry`和`retryDelay`选项更改为`3`之外的其他值或指数后退函数。

- 默认情况下，查询结果**在结构上是共享的，以检测数据是否确实发生了更改**。如果没有，则**数据的引用保持不变**，以更好地帮助`useMemo`和`useCallback`进行值稳定化(value stabilization)。如果这个概念听起来很陌生，那么不要担心！99.9％的时间你不需要禁用此功能，它会让你的应用在零成本的情况下获得更好的性能。

> 结构共享仅适用于**与 JSON 兼容的值**，任何其他值类型将始终被视为已更改的。例如，如果由于响应过大而导致性能问题，则可以通过配置`config.structuralSharing`来禁用此功能。 如果要在查询响应中处理非 JSON 兼容值，并且仍想检测数据是否已更改，则可以使用`config.isDataEqual`来自定义一个数据比较函数。

## 延伸阅读

社区中有关于默认值的进一步解释或说明（英文）

- [React Query 实践](https://tanstack.com/query/v4/docs/community/tkdodos-blog#1-practical-react-query)
- [React Query "作为一个状态管理器"](https://tanstack.com/query/v4/docs/community/tkdodos-blog#10-react-query-as-a-state-manager)
