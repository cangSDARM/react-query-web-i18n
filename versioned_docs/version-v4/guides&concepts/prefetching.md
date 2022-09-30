---
id: prefetching
title: 预取数据 Prefetching
---

如果你足够幸运，那么你可能对用户将做的事情有足够的了解，以便能够在需要之前预取他们所需的数据！
在这种情况下，可以使用`prefetchQuery`方法预取要放入缓存的查询结果：

```ts
const prefetchTodos = async () => {
  // 该查询的结果将像普通查询一样被缓存
  await queryClient.prefetchQuery(["todos"], fetchTodos);
};
```

- 如果此查询的数据已经在缓存中并且**没有失效**，则将不会获取该数据
- 如果一个`staleTime`被传递，例如：`prefetchQuery(['todos'], fn, {staleTime：5000})`，当数据早于指定的 staleTime 时，则查询将去尝试获取新值
- 如果一个预取的查询没有出现`useQuery`实例，则将在`cacheTime`指定的时间之后被删除并被垃圾回收

## 手动启动一个查询

或者，如果你已经有同步可用的查询数据，则无需预取。
你可以只使用[Query Client 的`setQueryData`方法](../reference/QueryClient.md#queryclientsetquerydata)直接按键值添加或更新查询的缓存结果。

```ts
queryClient.setQueryData(["todos"], todos);
```
