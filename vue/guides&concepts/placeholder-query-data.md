---
id: placeholder-query-data
title: 查询数据占位符 Placeholder Query Data
---

## 什么是占位数据？

占位数据使查询的行为就像已具有数据一样，类似于`initialData`选项，但是**数据没有被持久化到缓存中**。
如果一边有足够多的部分数据(或者完整的 mock 数据)来呈现数据应该呈现的样式，一边同时在后台获取实际数据，那么这就很方便了。

> 示例：单个博客帖子的查询可以看作是：从博客帖子的父列表中提取"预览"数据，该列表仅包括标题和帖子正文的一小段。
> 此时，你可能不希望将此部分数据持久化到单个查询的查询结果中，但是它对于在实际查询还在获取整个对象时尽可能快地显示内容布局非常有用。

有几种在需要之前将查询的占位数据提供给缓存的方法：

- 声明式的：
  - 为查询提供`placeholderData`，以便在查询为空时预填充其缓存
- 命令式地：
  - [使用`queryClient`和`placeholderData`选项预取或取数据](./prefetching)

## 来自值的占位数据

```ts
const result = useQuery({
  queryKey: ["todos"],
  queryFn: () => fetch("/todos"),
  placeholderData: placeholderTodos,
});
```

### 来自缓存的占位数据

在某些情况下，你可能需要从另一个查询的缓存结果中来为查询提供占位数据。
这方面的一个比较好的例子是，从博客帖子列表相关的查询中搜索缓存的数据以获取帖子的预览版本，然后将其用作单个文章查询的占位数据：

```ts
const result = useQuery({
  queryKey: ["blogPost", blogPostId],
  queryFn: () => fetch(`/blogPosts/${blogPostId}`),
  placeholderData: () => {
    // 使用 `blogPosts` 查询中的预览版(较小的)作为这个blogPost查询的占位数据
    return queryClient
      .getQueryData(["blogPosts"])
      ?.find((d) => d.id === blogPostId);
  },
});
```
