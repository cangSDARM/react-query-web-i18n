---
id: vue-query
title: Vue Query
---

`@tanstack/react-query` 包提供了一级 API，用于在 Vue 中使用 Tanstack Query。
然而，这些导出的钩子中的所有[原语(primitives)](https://baike.baidu.com/item/%E5%8E%9F%E8%AF%AD/3794081)都是核心 API。
这些核心 API，包括查询客户端(Query-Clint)、查询结果(query results)、查询订阅(query subscriptions)等，也被其他的适配器所共享。

## 例子

该例子非常简要地说明了 Vue Query 的 3 个核心概念：

- [查询](../guides%26concepts/queries.md)
- [修改](../guides%26concepts/mutations.md)
- [主动查询失效](../guides%26concepts/query-invalidation.md)

```vue
<script setup>
import { useQueryClient, useQuery, useMutation } from "@tanstack/vue-query";

// QueryClient 实例
const queryClient = useQueryClient();

// 查询 Query
const { isLoading, isError, data, error } = useQuery(["todos"], getTodos);

// 修改 Mutation
const mutation = useMutation(postTodo, {
  onSuccess: () => {
    // 失效查询并重新获取
    queryClient.invalidateQueries(["todos"]);
  },
});

function onButtonClick() {
  mutation.mutate({
    id: Date.now(),
    title: "Do Laundry",
  });
}
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- 可以推断 `isSuccess === true` 为真 -->
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <button @click="onButtonClick">Add Todo</button>
</template>
```

这三个概念构成了 Vue Query 的大部分核心功能。文档的下一节将一一详细介绍。

(TODO, 文档没写)
