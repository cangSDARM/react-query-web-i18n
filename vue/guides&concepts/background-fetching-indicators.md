---
id: background-fetching-indicators
title: 加载状态指示器 Background Fetching Indicators
---

查询的`status === 'loading'`状态足以显示查询的初始硬加载状态，但是有时你可能想显示一个额外的指示符，表明该查询正在后台重新获取数据。
为此，Query 提供了一个`isFetching`的布尔值，无论`status`变量的状态如何，你都可以使用它来表示数据正在获取中：

```html
<script setup>
import { useQuery } from '@tanstack/vue-query'

const { isLoading, isFetching, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: getTodos,
})
</script>

<template>
  <div v-if="isFetching">Refreshing...</div>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else-if="data">
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
```

## 显示全局后台加载的状态

除了单个查询的加载状态外，如果要在任何查询正在获取数据时（包括在后台）都显示一个全局的加载指示器，你可以使用`useIsFetching`Hook：

```html
<script setup>
import { useIsFetching } from '@tanstack/vue-query'

const isFetching = useIsFetching()
</script>

<template>
  <div v-if="isFetching">Queries are fetching in the background...</div>
</template>
```
