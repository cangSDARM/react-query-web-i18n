---
id: invalidation-from-mutations
title: 修改导致的重新数据检验
---

（为了使查询重新检验）使查询失效只是挑战的一半。知道**何时**使它们无效是另一半。
通常，当应用中的一个对数据的修改成功时，很有可能在你的应用中有相关的查询需要作废，并需要重新获取数据来解释修改所产生的新变化。

例如，假设我们有一个修改用于 POST 一个新的 todo：

```js
const mutation = useMutation(postTodo)
```

当对`postTodo`的修改成功时，我们可能希望对所有的`todos`查询都暂时失效，并重新获取以显示新的 todo 项。
为此，可以使用`useMutation`的`onSuccess`参数和`client`（QueryClient）的`invalidateQueries`函数：

```js
import { useMutation, useQueryClient } from 'react-query'

const queryClient = useQueryClient()

// 当此修改成功时，将所有带有`todos`和`reminders`查询键值的查询都无效
const mutation = useMutation(addTodo, {
  onSuccess: () => {
    queryClient.invalidateQueries('todos')
    queryClient.invalidateQueries('reminders')
  },
})
```

您可以使用[`useMutation` hook](./mutations)中的回调来响应下一步干什么
