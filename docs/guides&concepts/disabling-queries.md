---
id: disabling-queries
title: 禁用/暂停查询 disabling-queries
---

如果要禁用自动运行的查询，则可以使用`enabled = false`选项。

当 `enabled` 是 `false`时：

- 如果查询已缓存了数据
  - 查询将以`status === 'success'`或`isSuccess`的状态进行初始化。
- 如果查询没有缓存的数据
  - 查询将以`status === 'idle'`或`isIdle`的状态进行初始化。
- 该查询将不会在挂载时自动获取数据
- 当挂载新实例或出现新实例时，查询不会自动在后台重新获取数据
- 该查询将忽略查询客户端的`invalidateQueries`和`refetchQueries`调用，这些调用通常会导致查询重新获取数据
- `refetch`可用于手动触发查询以进行数据获取。

```js
function Todos() {
  const { isIdle, isLoading, isError, data, error, refetch, isFetching } =
    useQuery("todos", fetchTodoList, {
      enabled: false,
    });

  return (
    <>
      <button onClick={() => refetch()}>Fetch Todos</button>

      {isIdle ? (
        "Not ready..."
      ) : isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
          <div>{isFetching ? "Fetching..." : null}</div>
        </>
      )}
    </>
  );
}
```
