---
id: infinite-queries
title: 无限查询 infinite-queries
---

可以将附加数据"加载"更多数据到现有数据集，或者是"无限滚动"上的呈现列表也是一种非常常见的 UI 模式。React Query 支持一个有用的`useQuery`版本，称为`useInfiniteQuery`，用于查询这些类型的列表。

使用`useInfiniteQuery`时，需要注意一些不同之处：

- `data`现在是一个包含无限查询数据的对象
  - `data.pages`数组包含已获取的分页页面
  - `data.pageParams`数组包含用于获取分页页面的参数
- 现在可以使用`fetchNextPage`和`fetchPreviousPage`函数
- `getNextPageParam`和`getPreviousPageParam`选项可用于确定是否有更多数据要加载和获取它所需的信息。 此信息作为查询函数中的附加参数提供（在调用`fetchNextPage`或`fetchPreviousPage`函数时可以有选择地覆盖此信息）
- `hasNextPage`布尔值现在可用。如果`getNextPageParam`返回的值不是`undefined`的，则为`true`
- `hasPreviousPage`布尔值现在可用。如果`getPreviousPageParam`返回的值不是`undefined`的，则为`true`
- `isFetchingNextPage`和`isFetchingPreviousPage`布尔值来区分后台刷新状态和加载更多状态

> 注意：在使用`initialData`之类的选项或在查询中选择`select`时，请确保在重组(restructure)数据时仍包含`data.pages`和`data.pageParams`属性，否则查询返回时将覆盖您的更改！

## 例子

假设我们有一个基于游标索引的，且每次返回`projects`第三页的 API，以及一个可用于获取下一组项目的游标：

```js
fetch("/api/projects?cursor=0");
// { data: [...], nextCursor: 3}
fetch("/api/projects?cursor=3");
// { data: [...], nextCursor: 6}
fetch("/api/projects?cursor=6");
// { data: [...], nextCursor: 9}
fetch("/api/projects?cursor=9");
// { data: [...] }
```

有了这些信息，我们可以通过以下方式创建"加载更多"的 UI：

- 默认情况下，等待`useInfiniteQuery`请求第一组数据
- 返回`getNextPageParam`中下一个查询的信息
- 调用`fetchNextPage`函数

> 注意：请勿使用参数调用`fetchNextPage`，这很重要。除非您希望它们覆盖从`getNextPageParam`函数返回的`pageParam`数据。
> 例如，不要这样做：`<button onClick={fetchNextPage} />`，因为这会将`onClick`事件发送到`fetchNextPage`函数。

```js
import { useInfiniteQuery } from "react-query";

function Projects() {
  const fetchProjects = ({ pageParam = 0 }) =>
    fetch("/api/projects?cursor=" + pageParam);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("projects", fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}
```

## 当无限查询需要重新获取时会发生什么？

当无限查询变得陈旧(`stale`)且需要重新获取时，将从第一个查询开始，按照对应顺序获取每个组。
这样可以确保即使基础数据发生了修改，我们也不会使用过时的游标，也不会得到重复的记录或跳过记录。如果从 queryCache 中删除了无限查询的结果，则分页将在初始状态下重新启动，仅请求初始组(initial group)。

### 重新获取页面

如果你只想主动重新获取某一部分页面，可以通过传递给`refetch`(从`useInfiniteQuery`返回的)一个`refetchPage`函数来做到

```js
const { refetch } = useInfiniteQuery("projects", fetchProjects, {
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
});

// 只重新获取 index===0 的页面
refetch({ refetchPage: (page, index) => index === 0 });
```

你也可以将该方法作为第二个参数(`queryFilters`)传递给[queryClient.refetchQueries](../reference/QueryClient#queryclientrefetchqueries), [queryClient.invalidateQueries](../reference/QueryClient#queryclientinvalidatequeries) 或者 [queryClient.resetQueries](../reference/QueryClient#queryclientresetqueries) 来做到同样的效果

**函数签名**

- `refetchPage: (page: TData, index: number, allPages: TData[]) => boolean`

该函数对每个页面执行一次，只有返回`true`的页面才会被重新获取。

## 如果我需要将自定义信息传递给查询功能怎么办？

默认情况下，从`getNextPageParam`返回的变量将提供给查询函数，但是在某些情况下，您可能希望重写它。
您可以将自定义变量传递给`fetchNextPage`函数，该函数将覆盖默认变量，如下所示：

```js
function Projects() {
  const fetchProjects = ({ pageParam = 0 }) =>
    fetch("/api/projects?cursor=" + pageParam);

  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("projects", fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  // 传递您自己的页面参数
  const skipToCursor50 = () => fetchNextPage({ pageParam: 50 });
}
```

## 如果我想实现双向无限列表怎么办？

双向列表可以通过使用`getPreviousPageParam`，`fetchPreviousPage`，`hasPreviousPage`和`isFetchingPreviousPage`属性和函数来实现。

```js
useInfiniteQuery("projects", fetchProjects, {
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
});
```

## 如果我想以相反的顺序显示页面呢？

有时您可能想以相反的顺序显示页面。 在这种情况下，可以使用`select`选项：

```js
useInfiniteQuery("projects", fetchProjects, {
  select: (data) => ({
    pages: [...data.pages].reverse(),
    pageParams: [...data.pageParams].reverse(),
  }),
});
```

## 如果要手动更新无限查询该怎么办

手动删除第一页：

```js
queryClient.setQueryData("projects", (data) => ({
  pages: data.pages.slice(1),
  pageParams: data.pageParams.slice(1),
}));
```

从单独页面中手动删除单个值：

```js
const newPagesArray =
  oldPagesArray?.pages.map((page) =>
    page.filter((val) => val.id !== updatedId),
  ) ?? [];

queryClient.setQueryData("projects", (data) => ({
  pages: newPagesArray,
  pageParams: data.pageParams,
}));
```

确保分页页面和`pageParams`保持相同的数据结构！
