---
id: query-filters
title: 查询过滤
---

React Query 中的某些方法可以接受 `QueryFilters` 对象。
一个查询过滤器是具有特定条件的对象，可将查询与以下各项进行匹配：

```js
// 取消所有查询
await queryClient.cancelQueries()

// 删除所有非活动查询
queryClient.removeQueries('posts', { inactive: true })

// 重新获取所有活动查询
await queryClient.refetchQueries({ active: true })

// 重新获取键中以`post`开头的所有活动查询
await queryClient.refetchQueries('posts', { active: true })
```

查询过滤器对象支持以下属性：

- `exact?: boolean`
  - 如果您不想按查询键值来模糊搜索所有查询（search queries inclusively），则可以传递 `exact: true` 选项，以仅返回具有您已传递的精确查询键的查询
- `active?: boolean`
  - 当设置为 `true` 时，它将匹配活动查询
  - 当设置为 `false` 时，它将匹配非活动查询
- `inactive?: boolean`
  - 当设置为 `true` 时，它将匹配非活动查询
  - 当设置为 `false` 时，它将匹配活动查询
- `stale?: boolean`
  - 设置为 `true` 时，它将匹配过时（staled）的查询
  - 设置为 `false` 时，它将匹配没过时（fresh）的查询
- `fetching?: boolean`
  - 设置为 `true` 时，它将匹配当前正在获取的查询
  - 设置为 `false` 时，它将匹配当前没有正在获取的查询
- `predicate?: (query: Query) => boolean`
  - 对于缓存中的每个查询，都会调用此函数，并且对于匹配（found）的查询，该函数返回 `true`
- `queryKey?: QueryKey`
  - 设置此属性以定义要匹配的查询键值
