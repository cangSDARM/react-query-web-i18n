---
id: comparison
title: 比较 | React Query vs SWR vs Apollo vs RTK Query vs React Router
---

> 该比较表力求尽可能准确和公正。 如果您使用这些库中的任何一个，并且认为信息可以得到改善，请随时使用[此链接](https://github.com/tannerlinsley/react-query/edit/master/docs/src/pages/comparison.md)来提交更改（带有注释或声明的证据）

特性/功能的等级:

- ✅ 一级(1st-class)，内置，无需添加任何配置或代码即可使用
- 🟡 受支持，但作为非官方的第三方或社区组件/贡献
- 🔶 受支持和记录，但需要额外的用户代码才能实现
- 🛑 没有官方支持或文档。

|                                    | React Query                              | [SWR][swr]               | [Apollo Client][apollo]        | [RTK-Query][rtk-query]               | [React Router][react-router]                                              |
| ---------------------------------- | ---------------------------------------- | ------------------------ | ------------------------------ | ------------------------------------ | ------------------------------------------------------------------------- |
| Github Repo / Stars                | [![][stars-react-query]][gh-react-query] | [![][stars-swr]][gh-swr] | [![][stars-apollo]][gh-apollo] | [![][stars-rtk-query]][gh-rtk-query] | [![][stars-react-router]][gh-react-router]                                |
| 平台要求                           | React                                    | React                    | React, GraphQL                 | Redux                                | React                                                                     |
| 他们的比较                         |                                          | (none)                   | (none)                         | [Comparison][rtk-query-comparison]   | (none)                                                                    |
| 支持的查询语法                     | Promise, REST, GraphQL                   | Promise, REST, GraphQL   | GraphQL                        | Promise, REST, GraphQL               | Promise, REST, GraphQL                                                    |
| 支持的框架                         | React                                    | React                    | React + Others                 | Any                                  | React                                                                     |
| 缓存策略                           | 分层的 Key -> Value                      | 唯一的 Key -> Value      | 归一化的结构                   | 唯一的 Key -> Value                  | 嵌套的路由 -> value                                                       |
| 缓存 key 的策略                    | JSON                                     | JSON                     | GraphQL Query                  | JSON                                 | Route Path                                                                |
| 缓存变更检测方法                   | 深度比较 (稳定的序列化)                  | 浅比较                   | 深度比较 (不稳定的序列化)      | 引用相等 (===)                       | 路由变更                                                                  |
| 数据变更检测方法                   | 深度比较 + 结构化共享                    | 深比较(即`dequal`)       | 深度比较 (不稳定的序列化)      | 引用相等 (===)                       | 程序加载                                                                  |
| 数据缓存(memo)                     | 全量的结构化共享                         | 一致性(===)              | 归一化的一致性                 | 一致性(===)                          | 一致性(===)                                                               |
| 打包后大小                         | [![][bp-react-query]][bpl-react-query]   | [![][bp-swr]][bpl-swr]   | [![][bp-apollo]][bpl-apollo]   | [![][bp-rtk-query]][bpl-rtk-query]   | [![][bp-react-router]][bpl-react-router] + [![][bp-history]][bpl-history] |
| API 定义位置                       | 组件中, 额外 config                      | 组件中                   | GraphQL 语法(文件)             | 额外 config                          | 路由树的 config                                                           |
| 查询                               | ✅                                       | ✅                       | ✅                             | ✅                                   | ✅                                                                        |
| 缓存                               | ✅                                       | ✅                       | ✅                             | ✅                                   | 🛑 仅已激活的路由 <sup>8</sup>                                            |
| 开发者工具                         | ✅                                       | 🟡                       | ✅                             | ✅                                   | 🛑                                                                        |
| 轮询/长轮询                        | ✅                                       | ✅                       | ✅                             | ✅                                   | 🛑                                                                        |
| 并行查询                           | ✅                                       | ✅                       | ✅                             | ✅                                   | ✅                                                                        |
| 有依赖的查询                       | ✅                                       | ✅                       | ✅                             | ✅                                   | ✅                                                                        |
| 分页查询                           | ✅                                       | ✅                       | ✅                             | ✅                                   | ✅                                                                        |
| 无限查询                           | ✅                                       | ✅                       | ✅                             | 🛑                                   | 🛑                                                                        |
| 双向无限查询                       | ✅                                       | 🔶                       | 🔶                             | 🛑                                   | 🛑                                                                        |
| 无限查询重新获取数据               | ✅                                       | ✅                       | 🛑                             | 🛑                                   | 🛑                                                                        |
| 滞后查询数据<sup>1</sup>           | ✅                                       | 🔶                       | 🛑                             | ✅                                   | ✅                                                                        |
| 选择器                             | ✅                                       | 🛑                       | ✅                             | ✅                                   | N/A                                                                       |
| 初始化数据                         | ✅                                       | ✅                       | ✅                             | ✅                                   | ✅                                                                        |
| 滚动恢复                           | ✅                                       | ✅                       | ✅                             | ✅                                   | ✅                                                                        |
| 缓存操作                           | ✅                                       | ✅                       | ✅                             | ✅                                   | 🛑                                                                        |
| 过时数据的处理                     | ✅                                       | ✅                       | ✅                             | ✅                                   | ✅                                                                        |
| 批量渲染及优化<sup>2</sup>         | ✅                                       | 🛑                       | 🛑                             | ✅                                   | ✅                                                                        |
| 自动垃圾收集                       | ✅                                       | 🛑                       | 🛑                             | ✅                                   | N/A                                                                       |
| 修改 Hook                          | ✅                                       | 🟡                       | ✅                             | ✅                                   | ✅                                                                        |
| 离线修改的支持                     | ✅                                       | 🛑                       | 🟡                             | 🛑                                   | 🛑                                                                        |
| 预取 api                           | ✅                                       | 🔶                       | ✅                             | ✅                                   | ✅                                                                        |
| 查询取消                           | ✅                                       | 🛑                       | 🛑                             | 🛑                                   | ✅                                                                        |
| 部分查询匹配<sup>3</sup>           | ✅                                       | 🛑                       | 🛑                             | ✅                                   | N/A                                                                       |
| 超时重新验证                       | ✅                                       | ✅                       | ✅                             | ✅                                   | 🛑                                                                        |
| 超时时间设置                       | ✅                                       | 🛑<sup>7</sup>           | 🛑                             | ✅                                   | 🛑                                                                        |
| 使用前查询/修改配置<sup>4</sup>    | ✅                                       | 🛑                       | 🛑                             | ✅                                   | ✅                                                                        |
| 窗口焦点重新获取数据               | ✅                                       | ✅                       | 🛑                             | 🔶                                   | 🛑                                                                        |
| 网络状态重新获取数据               | ✅                                       | ✅                       | ✅                             | 🔶                                   | 🛑                                                                        |
| 通用缓存的 Dehydration/Rehydration | ✅                                       | 🛑                       | ✅                             | ✅                                   | ✅                                                                        |
| 离线缓存                           | ✅ (实验中)                              | 🛑                       | ✅                             | 🔶                                   | 🛑                                                                        |
| React Suspense (实验中)            | ✅                                       | ✅                       | 🛑                             | 🛑                                   | ✅                                                                        |
| 抽象的内核                         | ✅                                       | 🛑                       | ✅                             | ✅                                   | 🛑                                                                        |
| 修改后自动重新获取数据<sup>5</sup> | 🔶                                       | 🔶                       | ✅                             | ✅                                   | ✅                                                                        |
| 归一化缓存<sup>6</sup>             | 🛑                                       | 🛑                       | ✅                             | 🛑                                   | 🛑                                                                        |

### Notes

> **<sup>1</sup> 滞后查询数据** - React Query 提供了一种在下一个查询加载时继续查看现有的数据的方法(类似于原生的 UX 更新方式). 在编写分页 ui 或无限加载 ui 时，这一点非常重要，因为在这些 ui 中，我们不希望在请求新查询时显示硬加载状态。其他库没有这种功能，它们会在新查询加载时为新查询呈现硬加载状态(除非已预取)。

> **<sup>2</sup> 渲染优化** - React Query 具有出色的渲染性能。它只会在查询更新时重新渲染组件。例如，因为它具有新数据，或表明它正在获取。React Query 还将更新批量化，以确保当多个组件使用同一个查询时，应用只重新呈现一次。如果你只对`data`或`error`感兴趣，你可以通过设置`notifyOnChangeProps`为`['data'， 'error']`来减少更多的渲染次数。设置`notifyOnChangeProps：'tracked'`以自动跟踪访问字段，并且仅在其中一个字段发生更改时才重新呈现。

> **<sup>3</sup> 部分查询匹配** - 由于 React Query 使用确定性查询键(deterministic query key)来做序列化，因此，您无需知道要匹配的每个单独的查询键即可操作变量查询组。例如，您可以重新获取数据每个键中以`todos`开头的查询，而不管变量如何，也可以定位具有（或不具有）变量或嵌套属性的特定查询，甚至可以使用过滤器功能仅匹配通过特定条件的查询。

> **<sup>4</sup> 使用前查询/修改配置** - 这只是一个花哨的名称，用来配置查询和修改在被使用之前的行为方式。例如，查询可以事先用默认值完全配置，当需要使用它时，只需要`useQuery(key)`，而不是每次使用时都需要传递 fetcher 和可选项。SWR 确实具有此功能的部分形式，它允许您预配置默认的访存程序，但只能将其预配置为全局访存程序，而不是在每个查询的基础上，而且绝对不用于修改。

> **<sup>5</sup> 修改后自动重新获取数据** - 为了在修改发生后实现真正的自动重取，需要有一个 schema (如 graphQL 提供的) 以帮助组件知道如何识别该 schema 中的单个实体(entity)和实体类型(types)的启发式方法(heuristics)。

> **<sup>6</sup> 归一化缓存** - React Query 和 SWR 当前不支持自动归一化的缓存，该缓存描述了在平面架构中如何存储实体以避免某些高级数据的重复。

> **<sup>7</sup> SWR 的不可变模式** - SWR 提供了一种"不可变"模式，允许您在缓存的生命周期里只获取一次查询。然而它任然没有关于过期时间或有条件的自动重新验证相关的概念。

> **<sup>8</sup> React Router 的持久化缓存** - React Router 不缓存除当前匹配的路由之外的数据。如果一条从路由切换到另外的路由，则该路由的数据将丢失.

<!-- -->

[bpl-react-query]: https://bundlephobia.com/result?p=react-query
[bp-react-query]: https://badgen.net/bundlephobia/minzip/react-query?label=💾
[gh-react-query]: https://github.com/tannerlinsley/react-query
[stars-react-query]: https://img.shields.io/github/stars/tannerlinsley/react-query?label=%F0%9F%8C%9F

<!-- -->

[swr]: https://github.com/vercel/swr
[bp-swr]: https://badgen.net/bundlephobia/minzip/swr?label=💾
[gh-swr]: https://github.com/vercel/swr
[stars-swr]: https://img.shields.io/github/stars/vercel/swr?label=%F0%9F%8C%9F
[bpl-swr]: https://bundlephobia.com/result?p=swr

<!-- -->

[apollo]: https://github.com/apollographql/apollo-client
[bp-apollo]: https://badgen.net/bundlephobia/minzip/@apollo/client?label=💾
[gh-apollo]: https://github.com/apollographql/apollo-client
[stars-apollo]: https://img.shields.io/github/stars/apollographql/apollo-client?label=%F0%9F%8C%9F
[bpl-apollo]: https://bundlephobia.com/result?p=@apollo/client

<!-- -->

[rtk-query]: https://redux-toolkit.js.org/rtk-query/overview
[rtk-query-comparison]: https://redux-toolkit.js.org/rtk-query/comparison
[rtk-query-bundle-size]: https://redux-toolkit.js.org/rtk-query/comparison#bundle-size
[bp-rtk]: https://badgen.net/bundlephobia/minzip/@reduxjs/toolkit?label=💾
[bp-rtk-query]: https://badgen.net/bundlephobia/minzip/@reduxjs/toolkit?label=💾
[gh-rtk-query]: https://github.com/reduxjs/redux-toolkit
[stars-rtk-query]: https://img.shields.io/github/stars/reduxjs/redux-toolkit?label=🌟
[bpl-rtk]: https://bundlephobia.com/result?p=@reduxjs/toolkit
[bpl-rtk-query]: https://bundlephobia.com/package/@reduxjs/toolkit

<!--  -->

[react-router]: https://github.com/remix-run/react-router
[bp-react-router]: https://badgen.net/bundlephobia/minzip/react-router-dom?label=💾
[gh-react-router]: https://github.com/remix-run/react-router
[stars-react-router]: https://img.shields.io/github/stars/remix-run/react-router?label=%F0%9F%8C%9F
[bpl-react-router]: https://bundlephobia.com/result?p=react-router-dom
[bp-history]: https://badgen.net/bundlephobia/minzip/history?label=💾
[bpl-history]: https://bundlephobia.com/result?p=history
