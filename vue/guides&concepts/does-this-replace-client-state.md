---
id: does-this-replace-client-state
title: Vue Query是否会/可以取代Vuex, Pinia或其他全局状态管理器？
---

好吧，让我们从几个重要的东西开始：

- Vue Query 是一个**服务器状态**库，负责*管理服务器和客户端之间的异步操作*
- Vuex，Pinia 等是**客户端状态**库，可用于*存储异步数据*，尽管与 Vue Query 之类的工具相比效率较低

考虑到这些，简短的答案是**Vue Query 用少数几行代码替代了用于管理客户端状态中的缓存数据的样板代码和相关联的代码**。

对于绝大多数应用而言，在迁移所有异步代码到 Vue Query 之后，遗留下来的（可能会污染环境的）、**全局可访问的**客户端状态通常非常小。

> 在某些情况下，应用可能确实具有大量的、仅同步客户端的状态（例如视觉设计或音乐制作相关应用），在这种情况下，你可能仍将需要一个客户端状态管理库。
> 此时，请务必注意，Vue Query 不能代替本地/客户端状态管理。
> 但是，请放心，Vue Query 依旧可以与大多数客户端状态管理器一起使用，没有任何问题。

## 一个“做作”（Contrived）的例子

在这里，我们有一些由全局状态库管理的“全局”状态：

```ts
const globalState = {
  projects,
  teams,
  tasks,
  users,
  themeMode,
  sidebarStatus,
};
```

此时，全局状态管理库正在缓存 4 种类型的服务器状态：`projects`, `teams`, `tasks`, 和 `users`。
如果我们要将这些服务器状态移至 Vue Query，则剩余的全局状态将更像这样：

```ts
const globalState = {
  themeMode,
  sidebarStatus,
};
```

这也意味着，通过对`useQuery`和`useMutation`等一些 Hook 调用，我们还可以删除用于管理服务器状态的所有样板代码。

如：

- Connectors
- Action Creators
- Middlewares
- Reducers
- Loading/Error/Result states
- Contexts

删除所有这些内容后，你可能会问自己：“对于这个微小的全局状态，继续使用一个客户端状态管理器**值得**吗？”

**一切取决于你！**

Vue Query 的作用很明显。它从你的应用中删除了用于异步连接的样板代码，并仅用几行代码替换了它。

你还等什么呢，快去试试吧！
