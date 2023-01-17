---
id: suspense
title: Suspense
---

> 注意：Vue Query 的 Suspense 模式是实验性的，与数据获取本身的 Suspense 模式相同。
> 除非你将 Vue 和 Vue Query 版本都**锁定为彼此兼容的补丁级别**，否则这些 API **有可能被更改**，因此**不推荐在生产中使用**。

Vue Query 也可以与 Vue 的新 [Suspense](https://vuejs.org/guide/built-ins/suspense.html) API 一起使用。
要启用此模式，将需要启动 suspense 模式的组件包裹在 Vue 提供的`Suspense`组件中。

```html
<script setup>
import SuspendableComponent from "./SuspendableComponent.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <SuspendableComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
```

如果将`SuspendableComponent`组件中的`setup`函数改为`async`，
则可以使用`vue-query`提供的异步`suspense`函数：

```html
<script>
import { defineComponent } from 'vue'
import { useQuery } from '@tanstack/vue-query'

const todoFetcher = async () =>
  await fetch('https://jsonplaceholder.cypress.io/todos').then((response) =>
    response.json(),
  )
export default defineComponent({
  name: 'SuspendableComponent',
  async setup() {
    const { data, suspense } = useQuery(['todos'], todoFetcher)
    await suspense()

    return { data }
  },
})
</script>
```

## 渲染时获取 vs 按需渲染

Suspense 模式下的 Vue Query 作为一种不需要额外配置的、渲染时获取的解决方案工作得非常好。
这意味着，当你的组件尝试挂载时，它们将触发查询获取和 suspend，但仅在你导入并挂载它们之后。
如果你想更进一步，实现“按需渲染”模型，我们建议在路由回调和/或用户交互事件上实现[预取数据](./prefetching)，以便在挂载之前即开始加载查询。
甚至可以是在开始导入或挂载它们的父组件之前。
