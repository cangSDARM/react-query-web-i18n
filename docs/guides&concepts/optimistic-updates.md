---
id: optimistic-updates
title: 乐观更新
---

在执行修改之前打算进行乐观更新时，修改有可能失败（可能性非零）。
在大多数失败的情况下，您可以轻松地为乐观查询触发重新获取，使其恢复到真正的服务器状态。
但是在某些情况下，重新获取可能不能正确工作，修改可能会导致某种服务器端的问题，使其无法进行。
在这种情况下，您可以选择回滚您的更新。

为此，`useMutation` 的 `onMutate` 回调允许您返回一个值，该值稍后将作为最后一个参数传递给 `onError` 和 `onSettled` 处理。
在大多数情况下，以这种方式来传递回滚函数是最有用的。

## 添加新的 todo 时更新 todos 列表

```js
const queryClient = useQueryClient()

useMutation(updateTodo, {
  // 当 mutate 调用时
  onMutate: async (newTodo) => {
    // 撤销相关的查询（这样它们就不会覆盖我们的乐观更新）
    await queryClient.cancelQueries('todos')

    // 保存前一次状态的快照
    const previousTodos = queryClient.getQueryData('todos')

    // 执行乐观更新
    queryClient.setQueryData('todos', (old) => [...old, newTodo])

    // 返回具有快照值的上下文对象
    return { previousTodos }
  },
  // 如果修改失败，则使用 onMutate 返回的上下文进行回滚
  onError: (err, newTodo, context) => {
    queryClient.setQueryData('todos', context.previousTodos)
  },
  // 总是在错误或成功之后重新获取：
  onSettled: () => {
    queryClient.invalidateQueries('todos')
  },
})
```

## 更新单个的 todo

```js
useMutation(updateTodo, {
  // 当 mutate 调用时
  onMutate: async (newTodo) => {
    // 取消相关的获取数据逻辑（这样它们就不会覆盖我们的乐观更新）
    await queryClient.cancelQueries(['todos', newTodo.id])

    // 保存前一次状态的快照
    const previousTodo = queryClient.getQueryData(['todos', newTodo.id])

    // 执行乐观更新
    queryClient.setQueryData(['todos', newTodo.id], newTodo)

    // 返回具有快照值和修改值的上下文对象
    return { previousTodo, newTodo }
  },
  // 如果修改失败，则使用 onMutate 返回的上下文
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(
      ['todos', context.newTodo.id],
      context.previousTodo,
    )
  },
  // 总是在错误或成功之后重新获取：
  onSettled: (newTodo) => {
    queryClient.invalidateQueries(['todos', newTodo.id])
  },
})
```

如果你愿意，你也可以使用 `onsettled` 函数来代替 `onError` 和 `onSuccess` 处理：

```js
useMutation(updateTodo, {
  // ...
  onSettled: (newTodo, error, variables, context) => {
    if (error) {
      // do something
    }
  },
})
```
