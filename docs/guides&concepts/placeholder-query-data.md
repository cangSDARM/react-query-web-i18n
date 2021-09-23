---
id: placeholder-query-data
title: 查询数据占位符
---

## 什么是占位数据？

占位数据使查询的行为就像已具有数据一样，类似于`initialData`选项，但是**数据不会持久保存到缓存中**。
如果有足够多的部分(或虚假)数据来成功地呈现查询，而实际数据是在后台获取的，那么这就很方便了。

> 示例：单个博客帖子查询可以看作是：从博客帖子的父列表中提取"预览"数据，该列表仅包括标题和帖子正文的一小段。
> 此时，您可能不希望将此部分数据持久化到单个查询的查询结果中，但是它对于在实际查询中完成获取整个对象时尽可能快地显示内容布局非常有用。

有几种在需要之前将查询的占位数据提供给缓存的方法：

- 声明式的：
  - 为查询提供`placeholderData`，以便在查询为空时预填充其缓存
- 命令式地：
  - [使用`queryClient`和`placeholderData`选项预取或取数据](./prefetching)

## 来自值的占位数据

```js
function Todos() {
  const result = useQuery("todos", () => fetch("/todos"), {
    placeholderData: placeholderTodos,
  });
}
```

### 来自函数的占位数据

如果访问查询的占位数据的过程很繁琐，或者只是不想在每次渲染时都执行这种操作，则可以将该值 memoized 或将 memoized 的函数作为作为`placeholderData`值传递：

```js
function Todos() {
  const placeholderData = useMemo(() => generateFakeTodos(), []);
  const result = useQuery("todos", () => fetch("/todos"), { placeholderData });
}
```

### 来自缓存的占位数据

在某些情况下，您可以为另一个查询的缓存结果提供占位数据。一个很好的例子是，从博客帖子列表相关的查询中搜索缓存的数据以获取帖子的预览版本，然后将其用作单个查询的占位数据：

```js
function Todo({ blogPostId }) {
  const result = useQuery(
    ["blogPost", blogPostId],
    () => fetch(`/blogPosts/${blogPostId}`),
    {
      placeholderData: () => {
        // 使用 `blogPosts` 查询中的预览版(较小的)作为这个blogPost查询的占位数据
        return queryClient
          .getQueryData("blogPosts")
          ?.find((d) => d.id === blogPostId);
      },
    }
  );
}
```

## 延伸阅读

如果对于`Initial Data`和`Placeholder Data`有困惑的话，请参考[此社区内容(英文)](https://react-query.tanstack.com/community/tkdodos-blog#9-placeholder-and-initial-data-in-react-query)
