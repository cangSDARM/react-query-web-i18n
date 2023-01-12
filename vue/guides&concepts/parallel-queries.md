---
id: parallel-queries
title: 并行查询 Parallel Queries
---

“并行”查询是指并行执行的查询，或者是同时执行的查询。用以最大化查询并发性。

## 手动并行查询

如果并行查询的数量没有变化，则**无需付出额外的努力**即可使用并行查询。
只需并排使用任意数量的 Vue Query 的`useQuery`和`useInfiniteQuery`Hooks 即可！

```html
<script setup lang="ts">
  // 下面的查询将自动地并行执行
  const usersQuery = useQuery({ queryKey: ["users"], queryFn: fetchUsers });
  const teamsQuery = useQuery({ queryKey: ["teams"], queryFn: fetchTeams });
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
</script>
```

## 使用`useQueries`的动态并行查询

如果你需要执行的查询数量在每次渲染之间会变化，则不能使用手动查询，因为这将违反 hook 的规则。
相反，Vue Query 提供了`useQueries`的 Hook，你可以使用它来动态地并行执行尽可能多的查询。

`useQueries`接受一组[**作为查询配置的对象**](./query-functions#使用查询对象代替参数)，并以**数组形式返回查询的结果**：

```ts
const users = computed(...)
const queries = computed(() => users.value.map(user => {
    return {
      queryKey: ['user', user.id],
      queryFn: () => fetchUserById(user.id),
    }
  })
);
const userQueries = useQueries({queries: queries})
```
