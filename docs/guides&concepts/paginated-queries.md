---
id: paginated-queries
title: 分页/滞后查询 paginated-queries
---

呈现分页数据是一种非常常见的 UI 模式，在 React Query 中，它通过在查询键中包含页面信息来"正常工作"：

```js
const result = useQuery(["projects", page], fetchProjects);
```

但是，如果运行该示例，您可能会注意到一些奇怪的事情：

**UI 在`success`和`loading`状态之间来回跳转，因为每个新页面都被视为一个全新的查询。**

这种体验并不是最佳的，不幸的是，今天有不少工具在坚持使用。
但不是 React Query！
您可能已经猜到了，React Query 带有一个称为`keepPreviousData`的强大功能，从而使得这个问题可以被轻易的解决。

## 使用`keepPreviousData`的更好的分页查询

考虑下面的例子，在理想情况下，我们希望为查询增加 pageIndex（或游标）。
如果使用`useQuery`，**从技术上讲它仍然可以正常工作**，但是 UI 会随着每个页面或游标创建和销毁不同的查询而跳出 `success` 和 `loading` 状态。
通过将`keepPreviousData`设置为`true`，我们可以得到一些新的东西：

- **请求新数据时，即使查询键值已更改，上次成功获取的数据仍可用**
- 当新数据到达时，先前的数据将被无缝交换以显示新数据
- 可以使用`isPreviousData`来了解当前为您提供的是什么数据

```js
function Todos() {
  const [page, setPage] = React.useState(0);

  const fetchProjects = (page = 0) =>
    fetch("/api/projects?page=" + page).then((res) => res.json());

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["projects", page], () => fetchProjects(page), {
      keepPreviousData: true,
    });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData && data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}
```

## 使用`keepPreviousData`滞后无限查询的结果

尽管不那么常见，但是`keepPreviousData`选项也可以与`useInfiniteQuery`Hook 完美配合，所以您可以无缝地允许您的用户继续查看缓存的数据，而无限查询的键值将随着时间变化而自动变化。
