---
id: updates-from-mutation-responses
title: 响应更新的数据
---

When dealing with mutations that **update** objects on the server, 新对象通常会在更新的响应中自动返回。
我们可以利用更新函数返回的对象，并使用 [Query Client 的 `setQueryData` 方法](../reference/QueryClient#queryclientsetquerydata)立即用新数据更新现有的查询——而不是重新获取该项的任何查询，浪费对已有数据的网络调用：

```js
const queryClient = useQueryClient()

const mutation = useMutation(editTodo, {
  onSuccess: (data) => {
    queryClient.setQueryData(['todo', { id: 5 }], data)
  }
})

mutation.mutate({
  id: 5,
  name: 'Do the laundry',
})

// 下面的查询将使用成功的更新响应来进行更新
const { status, data, error } = useQuery(['todo', { id: 5 }], fetchTodoByID)
```

您可能希望将 `onSuccess` 逻辑绑定到可重用的更新中。
为此，您可以创建一个自定义 hook，如下所示：

```js
const useMutateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation(editTodo, {
    // 注意第二个参数是`mutate`函数接收的变量对象
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['todo', { id: variables.id }], data)
    },
  })
}
```
