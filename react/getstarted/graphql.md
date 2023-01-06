---
id: graphql
title: GraphQL
---

由于 React Query 的获取机制不可知地(agnostically)建立在 Promises 上，因此您可以将 React Query 与字面上的任何异步数据获取客户端（包括 GraphQL）一起使用！

> 请记住，React Query 不支持归一化缓存。 尽管绝大多数用户实际上并不需要归一化缓存，甚至没有像他们认为的那样受益，但是在极少数情况下可能需要这样做，因此请务必先与我们联系。 以确保它是你所需要的真正的东西！

## 类型安全的代码生成

React Query 和 `graphql-request^5`、[GraphQL Code Generator](https://graphql-code-generator.com/) 一起使用时，可以提供全量的类型安全的 GraphQL 操作:

```tsx
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

import { graphql } from "./gql/gql";

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`);

function App() {
  // `data` is fully typed!
  const { data } = useQuery({
    queryKey: ["films"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilmsWithVariablesQueryDocument,
        // variables are type-checked too!
        { first: 10 }
      ),
  });
  // ...
}
```

_例子的[全量代码(仓库)](https://github.com/dotansimha/graphql-code-generator/tree/7c25c4eeb77f88677fd79da557b7b5326e3f3950/examples/front-end/react/tanstack-react-query)_

有关 GraphQL 类型，请参阅[关于 GraphQL 代码生成器文档的专用指南](https://www.the-guild.dev/graphql/codegen/docs/guides/react-vue)
