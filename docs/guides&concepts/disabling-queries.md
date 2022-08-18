---
id: disabling-queries
title: 禁用/暂停查询 Disabling/Pausing Queries
tags:
  - 翻译完成
---

如果要禁用自动运行的查询，则可以使用`enabled = false`选项。

当 `enabled` 是 `false`时：

- 如果查询已缓存了数据
  - 查询将以`status === 'success'`或`isSuccess`的状态进行初始化
- 如果查询没有缓存的数据
  - 查询将以`status === 'loading'`和`fetchStatus === 'idle'`的状态进行初始化
- 该查询不会在挂载时自动获取数据
- 该查询不会自动在后台重新获取数据
- 该查询将忽略查询客户端的`invalidateQueries`和`refetchQueries`调用，这些调用通常会导致查询重新获取数据
- 从`useQuery`返回的`refetch`可用于手动触发查询以进行数据获取

```tsx
function Todos() {
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery(
    ["todos"],
    fetchTodoList,
    {
      enabled: false,
    },
  );

  return (
    <div>
      <button onClick={() => refetch()}>Fetch Todos</button>

      {data ? (
        <>
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : isLoading && !isFetching ? (
        <span>Not ready ...</span>
      ) : (
        <span>Loading...</span>
      )}

      <div>{isFetching ? "Fetching..." : null}</div>
    </div>
  );
}
```

永久性地禁用一个查询会使你失去 React Query 所提供的许多优秀的功能（如后台的重新请求），而且这也不是一种自然的方式。
它把你从声明性的方法（定义查询应该何时运行的依赖关系）带入了命令性的模式（每当我点击这里时就会获取）。
它也不可能传递参数给`refetch`。
很多时候，你想要的可能只是一个惰性查询：

## [惰性](https://gist.github.com/39eff87048d54dbdb8ea)查询

`enabled`选项不仅可以用来永久禁用一个查询，还可以让你在以后启用或者禁用它。
一个很好的例子是一个带过滤器的表单，你只想在用户输入了一个用于过滤的关键词后才发起第一次请求：

```tsx
function Todos() {
  const [filter, setFilter] = React.useState('')

  const { data } = useQuery(
    ['todos', filter],
    () => fetchTodos(filter),
    {
      // ⬇️ 只要filter为空则禁用
      enabled: !!filter
    }
  )

  return (
      <div>
        {/* 🚀 过滤的关键词设置后将启用并执行查询 */}
        <FiltersForm onApply={setFilter} />
        {data && <TodosTable data={data}} />
      </div>
  )
}
```
