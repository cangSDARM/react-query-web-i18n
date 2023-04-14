---
id: overview
title: 概览
slug: /
---

`@tanstack/svelte-query` 包提供了一级 API，用于在 Svelte 中使用 TanStack Query。

## 例子

在项目的根文件中(如: `src/index.svelte`)导入`QueryClientProvider`:

```markdown
<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
  import Example from './lib/Example.svelte'

  const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
  <Example />
</QueryClientProvider>
```

然后便可以从任意组件中导入你需要的函数(如: `createQuery`):

```markdown
<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query'

  const query = createQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
  })
</script>

<div>
  {#if $query.isLoading}
    <p>加载中...</p>
  {:else if $query.isError}
    <p>错误: {$query.error.message}</p>
  {:else if $query.isSuccess}
    {#each $query.data as todo}
      <p>{todo.title}</p>
    {/each}
  {/if}
</div>
```

## SvelteKit

如果你使用了 SvelteKit，请参阅 [SSR & SvelteKit](./ssr).

## 可用的函数

Svelte Query 提供了一些有用的原语及函数，使得在 Svelte 中操作并管理服务器状态变得非常容易。

- `createQuery`
- `createQueries`
- `createInfiniteQuery`
- `createMutation`
- `useQueryClient`
- `useIsFetching`
- `useIsMutating`
- `useHydrate`
- `<QueryClientProvider>`
- `<Hydrate>`

## Svelte Query & React Query 之间的主要差异

Svelte Query 提供了一个与 React Query 类似的 API，但有一些关键的区别需要注意。

- Svelte Query 有部分函数的返回值会返回 Svelte Store 形式。为了使这些返回值具有响应式的特点，你可能需要为返回的 store 加上`$`前缀。原因情看 [Svelte 的官方文章](https://svelte.dev/tutorial/writable-stores)。
- 如果你的查询或修改依赖了变量，你必须保证这个变量是响应式的。原因请看 [Svelte 的响应式](./reactivity)部分
