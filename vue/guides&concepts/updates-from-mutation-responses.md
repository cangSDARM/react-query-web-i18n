---
id: updates-from-mutation-responses
title: 通过修改的数据更新查询内容 Updates From Mutation Responses
---

当在处理**更新**了服务器上的对象的修改时，新的对象通常会在更新的响应中自动返回。
我们可以利用修改函数返回的对象，并使用 [Query Client 的 `setQueryData` 方法](../reference/QueryClient#queryclientsetquerydata)立即用新数据更新现有的查询，而不是去触发新的数据获取，浪费对已有数据的网络调用：

```ts
const queryClient = useQueryClient();

const mutation = useMutation(editTodo, {
  onSuccess: (data) => {
    queryClient.setQueryData(["todo", { id: 5 }], data);
  },
});

mutation.mutate({
  id: 5,
  name: "Do the laundry",
});

// 下面的查询将被更新为成功的修改响应
const { status, data, error } = useQuery(["todo", { id: 5 }], fetchTodoById);
```

你可能想将 `onSuccess` 的逻辑绑定到一个可重用的修改中。
为此，你可以创建一个自定义 hook，如下所示：

```ts
const useMutateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(editTodo, {
    // 注意第二个参数是`mutate`函数需要的变量
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["todo", { id: variables.id }], data);
    },
  });
};
```
