---
id: ssr
title: 服务端渲染 SSR
---

Vue Query 支持在服务器上预取多个查询，然后将这些查询 dehydrating 到 queryClient 上。这意味着服务器可以预取页面加载时立即可用的标记。
一旦 JS 可用，Vue Query 就可以用它的全部功能升级或 hydrate 这些查询。
这包括在客户端重新获取那些服务端渲染后变得过时的查询。

## 在 Nuxt.js 中

### Nuxt 3

首先在你的`plugins`文件夹中创建一个`vue-query.ts`文件，并添加如下代码：

```ts
import type {
  DehydratedState,
  VueQueryPluginOptions,
} from "@tanstack/vue-query";
import {
  VueQueryPlugin,
  QueryClient,
  hydrate,
  dehydrate,
} from "@tanstack/vue-query";
// Nuxt 3 app aliases
import { useState } from "#app";

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>("vue-query");

  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });
  const options: VueQueryPluginOptions = { queryClient };

  nuxt.vueApp.use(VueQueryPlugin, options);

  if (process.server) {
    nuxt.hooks.hook("app:rendered", () => {
      vueQueryState.value = dehydrate(queryClient);
    });
  }

  if (process.client) {
    nuxt.hooks.hook("app:created", () => {
      hydrate(queryClient, vueQueryState.value);
    });
  }
});
```

现在你可以使用`onServerPrefetch`API 在页面中预取数据了。

- 所有你需要的查询都需要使用`queryClient.prefetchQuery`或`suspense`预取。

```ts
export default defineComponent({
  setup() {
    const { data, suspense } = useQuery("test", fetcher);

    onServerPrefetch(async () => {
      await suspense();
    });

    return { data };
  },
});
```

### Nuxt 2

首先在你的`plugins`文件夹中创建一个`vue-query.ts`文件，并添加如下代码：

```js
import Vue from "vue";
import { VueQueryPlugin, QueryClient, hydrate } from "@tanstack/vue-query";

export default (context) => {
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });
  const options = { queryClient };

  Vue.use(VueQueryPlugin, options);

  if (process.client) {
    if (context.nuxtState && context.nuxtState["vue-query"]) {
      hydrate(queryClient, context.nuxtState["vue-query"]);
    }
  }
};
```

将这个文件添加到`nuxt.config.js`中

```js
module.exports = {
  ...
  plugins: ['~/plugins/vue-query.js'],
};
```

现在你可以使用`onServerPrefetch`API 在页面中预取数据了。

- 使用 `useContext` 获取 Nust 上下文
- 使用 `useQueryClient` 获取`queryClient`的服务端实例
- 使用`queryClient.prefetchQuery`或`suspense`预取所有你需要的查询
- Dehydrate `queryClient` 到 `nuxtContext`

```html
// pages/todos.vue
<template>
  <div>
    <button @click="refetch">Refetch</button>
    <p>{{ data }}</p>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    onServerPrefetch,
    useContext,
  } from "@nuxtjs/composition-api";
  import { useQuery, useQueryClient, dehydrate } from "@tanstack/vue-query";

  export default defineComponent({
    setup() {
      // 这将被预取服务器发送的数据
      const { refetch, data, suspense } = useQuery("todos", getTodos);
      // 这不会被预取，它将在客户端js执行后开始获取
      const { data2 } = useQuery("todos2", getTodos);

      onServerPrefetch(async () => {
        const { ssrContext } = useContext();
        const queryClient = useQueryClient();
        await suspense();

        ssrContext.nuxt.vueQueryState = dehydrate(queryClient);
      });

      return {
        refetch,
        data,
      };
    },
  });
</script>
```

如前所述，可以预取一些查询，也可以在 `queryClient` 上获取别的查询。 这就意味着你可以通过为特定查询添加或删除 `prefetchQuery` 或 `suspense` 来控制服务器需要渲染的内容。

## 使用 Vite 的 SSR

将 VueQuery 客户端状态与[vite-ssr](https://github.com/frandiox/vite-ssr)同步，以便在 DOM 中进行序列化：

```js
// main.js (entry point)
import App from "./App.vue";
import viteSSR from "vite-ssr/vue";
import {
  QueryClient,
  VueQueryPlugin,
  hydrate,
  dehydrate,
} from "@tanstack/vue-query";

export default viteSSR(App, { routes: [] }, ({ app, initialState }) => {
  // 这是Vite SSR的主钩子，每次请求都会被调用一次

  // 创建一个全新的VueQuery客户端
  const queryClient = new QueryClient();

  // 将initialState与客户端状态同步
  if (import.meta.env.SSR) {
    // 说明如何在SSR期间访问和序列化VueQuery状态
    initialState.vueQueryState = { toJSON: () => dehydrate(queryClient) };
  } else {
    // 重用浏览器中现有的状态
    hydrate(queryClient, initialState.vueQueryState);
  }

  // 挂载并提供给客户端的应用程序组件
  app.use(VueQueryPlugin, { queryClient });
});
```

然后，使用 Vue 的`onServerPrefetch`从任何组件调用 VueQuery：

```html
<!-- MyComponent.vue -->
<template>
  <div>
    <button @click="refetch">Refetch</button>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
  import { useQuery } from "@tanstack/vue-query";
  import { onServerPrefetch } from "vue";

  // This will be prefetched and sent from the server
  const { refetch, data, suspense } = useQuery("todos", getTodos);
  onServerPrefetch(suspense);
</script>
```

## 提示、技巧及部分可能的陷阱

### 只有成功的查询才会 dehydration

任何有错误的查询都会自动从 dehydration 中排除。
这意味着在默认情况下，Vue Query 会假装这些查询从未在服务器上加载过，(你通常需要)在 UI 上显示一个加载状态，并在 queryClient 上重新尝试这些查询。
这种情况会发生，不管是否有错误。

有时这种行为是不可取的，也许你想在某些错误或查询中呈现一个具有对应状态码的错误页面。
在这些情况下，使用 `fetchQuery` 捕捉错误并手动处理这些错误。

### 在服务端上获取查询数据后就开始度量“数据何时过时”

查询被标记为 `dataUpdatedAt` 时，就代表它已经是过时的查询了。
这里需要注意的是，服务器需要有正确的时间才能正常工作。
Vue Query **使用的是 UTC 时间**，所以时区不需要考虑在内。

由于 `staleTime` 默认为 `0`，因此默认情况下，在页面加载时，查询就将在后台重新获取。
你可能想使用一个较久的 `staleTime` 来避免这种多次没必要的获取，特别是你不缓存你的标记(don't cache your markup)的情况下。

在 CDN 中缓存标记时，这种对过时查询的重新获取是完美的选择！
你可以将页面本身的缓存时间设置得相当高，以避免在服务器上重新渲染页面，但是可以将查询的 `staleTime` 配置得较低，以确保用户访问该页面后立即在后台重新获取数据。
当然，或许你可以设置得将页面缓存一周，但如果数据大于一天，则在页面加载时自动重新获取数据？

### 服务端的内存占用过高

如果你为每个请求都创建一个 `QueryClient`, Vue Query 就会为每个 QueryClient 都创建一个隔离的缓存，每个都会在内存中保存一段时间(通过 `cacheTime` 设定<sup>*</sup>)。
如果在此期间有大量的请求，这可能会导致服务器上的内存使用过高。

> <sup>*</sup> 在服务器上，`cacheTime` 默认为 `Infinity`。它禁用了手动垃圾收集，一旦请求结束就会自动清除内存。
> 如果你明确设置了一个非 `Infinity` 的 `cacheTime`，那么你需要手动负责提前清除缓存。

为了在不需要缓存后立即清除缓存并降低内存消耗，可以在服务器处理请求并将 dehydrated 的状态发送给客户端后，添加一句对[`queryClient.clear()`](../reference/QueryClient#queryclientclear)的调用。

另外，你可以设置一个较小的 `cacheTime`。
