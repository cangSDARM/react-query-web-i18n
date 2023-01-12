---
id: network-mode
title: 网络模式 Network Mode
---

Vue Query 提供了三种不同的网络模式，以确定在没有网络连接的情况下，[查询](./queries.md)和[修改](./mutations.md)应如何表现。
这几种模式可以为每个查询/修改单独设置，也可以全局设置查询/修改的默认值做到。

由于 Vue Query 通常与数据获取库(axios/fetch)结合使用，所以默认的网络模式是[online](#模式-online)。

## 模式: online

在这种模式下，除非你有网络连接，否则查询和修改不会进行。这是默认模式。
一个查询被启动时，如果因为没有网络连接而无法获取，它将始终保持在同样的`state`（`loading`, `error`, `success`）中。如果你有其他需求，[fetchStatus](./queries.md#fetchstatus)API 被额外暴露。这可以是：

- `fetching`: `queryFn` 准备获取，请求已就绪
- `paused`: 查询没有执行，它`paused`直到网络恢复
- `idle`: 请求没有`fetching`也不是`paused`

`isFetching`和`isPaused`是从这个状态派生出来的，为方便起见，也公开了。

> 请记住，为了显示一个加载 UI，仅仅检查`loading`状态可能还不够。查询可以处于`state: 'loading'`，但`fetchStatus: 'paused'`--如果组件是第一次被挂载，而且碰巧你还没有网络连接。

如果一个查询因为你在线而运行了，但在获取未结束时离线了，Vue Query 会暂停重试机制。一旦你重新链接上网络，暂停的查询将继续运行。
这与`refetchOnReconnect`（在这种模式下也默认为`true`）无关，因为这不是一个`refetch`，而是一个`continue`。如果在此期间查询被[取消](./query-cancellation.md)，它将不会继续。

## 模式: always

在这种模式下，Vue Query 会一直尝试获取并忽略在线/离线状态。如果你在一个不需要网络连接的环境中使用 Vue Query，这可能是你想要选择的模式--例如，如果你只是想从`AsyncStorage`中读取一些数据，或者你只是想从`queryFn`中返回`Promise.resolve(5)`。

- 查询永远不会处于`paused`，因为你"没有网络连接"
- 重试也永远不会被调用，查询失败时就会抛`error`回来
- `refetchOnReconnect`默认为`false`，因为"重新连接网络"不再是一个可能出现的情形，过时的查询应该被立即重试。当然你可以设置为`true`，如果有需要的话

## 模式: offlineFirst

这种模式是前两个选项之间的中间地带，Vue Query 将运行一次`queryFn`，但随后暂停重试。
如果你有一个用于拦截请求进行缓存的 ServiceWorker，比如在[离线优先的 PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers)，或者你通过[Cache-Control header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#the_cache-control_header)使用 HTTP 缓存，这就非常方便。

在这些情况下，第一次获取可能会成功，因为它来自一个离线存储/缓存。
然而，如果有一个缓存缺失，网络请求将执行并失败。在这种情况下，这种模式的行为就像一个`online`的查询--暂停重试。

## 开发者工具

[Vue Devtools](../getstarted/devtools.md)将显示那些正在获取，但没有网络连接的`paused`状态的查询。同时，其中也有一个切换按钮来*模拟离线行为*。
但请注意，这个按钮实际上不会扰乱你的网络连接（像你在浏览器的 devtools 中做的那样），但它会将[OnlineManager](../reference/onlineManager.md)设置为离线状态。

## 字段类型签名

- `networkMode: 'online' | 'always' | 'offlineFirst'`
  - 可选的
  - 默认为 `'online'`
