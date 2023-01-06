---
id: quick-start
title: 快速入门
---

该示例非常简要地说明了 Vue Query 的 3 个核心概念：

- [查询 Queries](../guides&concepts/queries.md)
- [修改 Mutations](../guides&concepts/mutations.md)
- [查询错误处理 Query Invalidation](../guides&concepts/query-invalidation.md)

```html
<script setup>
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'

// Access QueryClient instance
const queryClient = useQueryClient()

// Query
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: getTodos,
})

// Mutation
const mutation = useMutation({
  mutationFn: postTodo,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})

function onButtonClick() {
  mutation.mutate({
    id: Date.now(),
    title: 'Do Laundry',
  })
}
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <button @click="onButtonClick">Add Todo</button>
</template>
```

这三个概念构成了 Vue Query 的大部分核心功能。
本文档的下一部分将详细介绍这些核心概念。
