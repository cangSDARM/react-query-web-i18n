---
id: filters
title: 过滤器 filters
---

React Query 中的某些方法可以接受 `QueryFilters` 或者 `MutationFilters` 对象。

## 查询过滤器

一个查询的过滤器是具有特定条件的对象，可将查询与以下各项进行匹配：

```js
// 取消所有查询
await queryClient.cancelQueries();

// 删除所有以`posts`开头的键值的非活动查询
queryClient.removeQueries("posts", { inactive: true });

// 重新获取所有活动查询
await queryClient.refetchQueries({ active: true });

// 重新获取键中以`posts`开头的所有活动查询
await queryClient.refetchQueries("posts", { active: true });
```

查询过滤器对象支持以下属性：

- `exact?: boolean`
  - 如果您不想对键值做模糊查询（search queries inclusively），则可以传递 `exact: true` 选项，选项来返回且只返回完整匹配的
- `active?: boolean`
  - 当设置为 `true` 时，它将匹配活动查询
  - 当设置为 `false` 时，它将匹配非活动查询
- `inactive?: boolean`
  - 当设置为 `true` 时，它将匹配非活动查询
  - 当设置为 `false` 时，它将匹配活动查询
- `stale?: boolean`
  - 设置为 `true` 时，它将匹配过时（staled）的
  - 设置为 `false` 时，它将匹配没过时（fresh）的
- `fetching?: boolean`
  - 设置为 `true` 时，它将匹配当前正在获取的
  - 设置为 `false` 时，它将匹配当前未在获取的
- `predicate?: (query: Query) => boolean`
  - 对于缓存中的每个查询，都会调用此函数，并且对于匹配（found）的查询，该函数返回 `true`
- `queryKey?: QueryKey`
  - 设置此属性以定义要匹配的查询键值

## 修改过滤器

修改的过滤器是具有特定条件的对象，可将修改与以下条件进行匹配：

```js
// 获取所有正在获取的修改的数量
await queryClient.isMutating();
// 通过 mutationKey 过滤
await queryClient.isMutating({ mutationKey: "post" });
// 使用谓词函数过滤
await queryClient.isMutating({
  predicate: (mutation) => mutation.options.variables?.id === 1,
});
```

修改过滤器对象支持以下属性：

- `exact?: boolean`
  - 如果您不想对键值做模糊查询，你可以设置 `exact: true` 选项来返回且只返回完整匹配的
- `fetching?: boolean`
  - 设置为 `true` 时，它将匹配当前正在获取的
  - 设置为 `false` 时，它将匹配当前未在获取的
- `predicate?: (mutation: Mutation) => boolean`
  - 对于缓存中的每个修改，都会调用此函数，并且对于匹配（found）的修改，该函数返回 `true`
- `mutationKey?: MutationKey`
  - 设置此属性以定义要匹配的修改键值
