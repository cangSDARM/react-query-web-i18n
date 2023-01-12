---
id: default-query-function
title: 默认的查询函数 Default Query Fn
---

如果出于某种原因，你希望在整个应用中共享相同的查询功能，并且可以仅靠查询键值来标识应获取的内容。
则可以通过重写 Vue Query 提供的**默认查询函数**来做到这一点：

```tsx
// 定义一个参数为查询键值的默认查询函数
const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com${queryKey[0]}`,
  )
  return data
}

// 使用 defaultOptions 向你的应用提供默认查询函数
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: { queries: { queryFn: defaultQueryFn } },
  },
}
app.use(VueQueryPlugin, vueQueryPluginOptions)

// 现在，只需要传入一个键值就行了!
const { status, data, error, isFetching } = useQuery({
  queryKey: [`/posts/${postId}`],
})
```

如果你想覆盖默认的 queryFn，像平常一样提供一个函数即可。
