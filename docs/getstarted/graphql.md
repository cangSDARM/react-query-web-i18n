---
id: graphql
title: GraphQL
---

由于 React Query 的获取机制不可知地建立在 Promises 上，因此您可以将 React Query 与字面上的任何异步数据获取客户端（包括 GraphQL）一起使用！

> 请记住，React Query 不支持归一化缓存。 尽管绝大多数用户实际上并不需要归一化缓存，甚至没有像他们认为的那样受益，但是在极少数情况下可能需要这样做，因此请务必先与我们联系。 以确保它是你所需要的真正的东西！

## 例子

- [basic-graphql-request](https://tanstack.com/query/v4/docs/examples/react/basic-graphql-request) (“基本”示例，但使用了 [`graphql-request`](https://github.com/prisma-labs/graphql-request))
