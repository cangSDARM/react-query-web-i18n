---
id: ssr
title: SSR 和 SvelteKit
---

## 设置

SvelteKit 默认将在 SSR 编译阶段渲染路由。
出于这一点考虑，你需要在服务器端禁用查询，否则你的查询将在服务器端没有 HTML 内容的情况下异步运行(HTML 已被送至客户端)。

推荐的解决办法是在`QueryClient`实例中导入 SvelteKit 的`browser`模块。
这并不会禁用`queryClient.prefetchQuery()`，因为它涉及到如何预取数据：

**src/routes/+layout.svelte**

```markdown
<script lang="ts">
  import { browser } from '$app/environment'
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  })
</script>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
```

## 预取数据

Svelte Query 支持两种将服务器端预取的数据传输到客户端的方法。

如果你希望有更为详尽的解释，希望有点代码可用，请查看 [SSR 的入门例子](https://tanstack.com/query/v4/docs/svelte/examples/svelte/ssr).

### 使用 `initialData`

组合 SvelteKit 的 [`load`](https://kit.svelte.dev/docs/load)特性，你可以将预取的数据在服务器端传输给`createQuery`的`initialData`选项：

**src/routes/+page.ts**

```ts
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const posts = await getPosts();
  return { posts };
};
```

**src/routes/+page.svelte**

```markdown
<script>
  import { createQuery } from '@tanstack/svelte-query'
  import type { PageData } from './$types'

  export let data: PageData

  const query = createQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: data.posts
  })
</script>
```

优点:

- 这种方式是最小化的，且这是对于常用场景的最快的方法
- 和`+page.ts`/`+layout.ts`以及`+page.server.ts`/`+layout.server.ts`的 load 函数无任何冲突

缺点:

- 如果你在组件树的某个组件调用`createQuery`函数，你必须将`initialData`透传过去
- 如果你通过`createQuery`创建的查询在多个地方被调用，你必须将`initialData`透传给每一个查询
- 查询在服务器端预取的准确时间是无法获知的，所以`dataUpdatedAt`和其他关于重新获取的逻辑都依赖于页面何时被加载

### 使用 `prefetchQuery`

Svelte Query 支持在服务器端通过查询预取数据。
使用下面的设置，你可以早在数据送到客户端之前提前查询。
因此，这些数据已被标记为缓存对象，不能从客户端初始化：

**src/routes/+layout.ts**

```ts
import { browser } from "$app/environment";
import { QueryClient } from "@tanstack/svelte-query";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });

  return { queryClient };
};
```

**src/routes/+layout.svelte**

```markdown
<script lang="ts">
  import { QueryClientProvider } from '@tanstack/svelte-query'
  import type { LayoutData } from './$types'

  export let data: LayoutData
</script>

<QueryClientProvider client={data.queryClient}>
  <slot />
</QueryClientProvider>
```

**src/routes/+page.ts**

```ts
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const { queryClient } = await parent();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
```

**src/routes/+page.svelte**

```markdown
<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query'

  // 这个数据被 prefetchQuery 缓存在 +page.ts 里，所以(客户端)没有任何真实的查询被触发
  const query = createQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })
</script>
```

优点:

- 服务器端的数据不需要任何形式的透传，可以被任何地方随意访问
- 在客户端页面渲染时没有初始化请求负载，因为缓存已经知悉了所有有关查询的信息，包括`dataUpdatedAt`

缺点:

- 需要更为复杂的设置
- 无法和 `+page.server.ts`/`+layout.server.ts` 的 load 函数一起使用 (并且，无论如何，与 Svelte Query 一起使用的 API 都需要完全暴露给浏览器)
