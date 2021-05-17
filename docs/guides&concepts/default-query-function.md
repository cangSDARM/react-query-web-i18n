---
id: default-query-function
title: 默认的查询函数
---

如果出于某种原因，您希望在整个应用中共享相同的查询功能，并且可以仅靠查询键值来标识应获取的内容。则可以通过重写 React Query 提供的**默认查询函数**来做到这一点：

```js
// 定义一个参数为查询键值的默认查询函数
// 假设这里的 queryKey 是一个数组
const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com${queryKey[0]}`,
  )
  return data
}

// 使用 defaultOptions 向您的应用提供默认查询函数
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  )
}

// 现在，只需要传入一个键值就行了!
function Posts() {
  const { status, data, error, isFetching } = useQuery('/posts')

  // ...
}

// 你也可以传入一些参数
function Post({ postId }) {
  const { status, data, error, isFetching } = useQuery(`/posts/${postId}`, {
    enabled: !!postId,
  })

  // ...
}
```

如果您想覆盖默认的 queryFn，像平常一样提供一个函数即可。
