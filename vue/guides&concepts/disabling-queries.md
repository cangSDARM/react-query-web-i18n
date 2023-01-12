---
id: disabling-queries
title: 禁用/暂停查询 Disabling/Pausing Queries
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

```html
<script setup>
import { useQuery } from '@tanstack/vue-query'

const { isInitialLoading, isError, data, error, refetch, isFetching } =
  useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
    enabled: false,
  })
</script>

<template>
  <button @click="refetch">Fetch Todos</button>
  <span v-if="isIdle">Not ready...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <div v-else-if="data">
    <span v-if="isFetching">Fetching...</span>
    <ul>
      <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>
```

永久性地禁用一个查询会使你失去 Vue Query 所提供的许多优秀的功能（如后台的重新请求），而且这也不是一种自然的方式。
它把你从声明性的方法（定义查询应该何时运行的依赖关系）带入了命令性的模式（每当我点击这里时就会获取）。
它也不可能传递参数给`refetch`。
很多时候，你想要的可能只是一个惰性查询：

## [惰性](https://gist.github.com/39eff87048d54dbdb8ea)查询

`enabled`选项不仅可以用来永久禁用一个查询，还可以让你在稍晚的时候启用或者禁用它。
一个很好的例子是一个带过滤器的表单，你只想在用户输入了一个用于过滤的关键词后才发起第一次请求：

```html
<script setup>
import { useQuery } from '@tanstack/vue-query'

const filter = ref('')
const isEnabled = computed(() => !!filter.value)
const { data } = useQuery({
  queryKey: ['todos', filter],
  queryFn: () => fetchTodos(filter),
  // ⬇️ 只要filter是空的，就禁用
  enabled: isEnabled,
})
</script>

<template>
  <span v-if="data">Filter was set and data is here!</span>
</template>
```

### isInitialLoading

惰性查询一开始就会处于`status: 'loading'`的状态，因为它的真实加载时机不确定且它的确暂时没有数据。
由于我们目前没有获取任何数据（因为*enabled*已被禁用），这意味着你很有可能没法使用这个字段来显示一个“正在加载”的样式。

如果你禁用了自动运行的查询或者使用了惰性查询，你可以选择使用`isInitialLoading`字段。
这是一个派生的标志，是由部分内容计算出来的：`isLoading && isFetching`

所以只有当查询正在进行第一次获取时，它才会为真。
