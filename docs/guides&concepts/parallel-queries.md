---
id: parallel-queries
title: 并行查询
---

“并行”查询是并行执行的查询，或者是同时执行的查询。用以最大化查询并发性。

## 手动并行查询

如果并行查询的数量没有变化，则**无需付出额外的努力**即可使用并行查询。
只需并排使用任意数量的 React Query 的`useQuery`和`useInfiniteQuery`Hooks 即可！

```js
function App () {
  // 下面的查询将自动地并行执行
  const usersQuery = useQuery('users', fetchUsers)
  const teamsQuery = useQuery('teams', fetchTeams)
  const projectsQuery = useQuery('projects', fetchProjects)
  ...
}
```

> 在 React 的 suspense 模式下使用 React Query 时，这种并行模式不起作用。因为第一个查询将在内部抛出 Promise，并且将在其他查询运行之前挂起组件。为了解决这个问题，你要么需要使用`useQueries`Hook(这是建议的)，要么为每个`useQuery`实例用单独的组件编排你自己的并行度(这很糟糕)。

## 使用`useQueries`的动态并行查询

如果您需要执行的查询数量在每次渲染之间会变化，则不能使用手动查询，因为这将违反 hook 的规则。相反，React Query 提供了`useQueries`的 Hook，您可以使用它来动态地并行执行尽可能多的查询。

`useQueries`接受一组[**作为查询配置的对象**](./query-functions#使用查询对象代替参数)，并以**数组形式返回查询的结果**：

```js
function App({ users }) {
  const userQueries = useQueries(
    users.map((user) => {
      return {
        queryKey: ['user', user.id],
        queryFn: () => fetchUserById(user.id),
      }
    }),
  )
}
```
