---
id: custom-client
title: 自定义客户端 Custom Client
---

### 自定义客户端

Vue Query 允许配置一个自定义的`QueryClient`给 Vue 上下文。

当你需要事先创建一个`QueryClient`来与其他不能访问 Vue 上下文的库集成时，这可能会很方便。

处于这一点考虑，`VueQueryPlugin` 接受一个`QueryClientConfig`或者`QueryClient`。

如果你提供了`QueryClientConfig`，`QueryClient`实例将在内部被创建，并提供给 Vue 上下文。

```ts
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: { queries: { staleTime: 3600 } },
  },
};
app.use(VueQueryPlugin, vueQueryPluginOptions);
```

```ts
const myClient = new QueryClient(queryClientConfig);
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClient: myClient,
};
app.use(VueQueryPlugin, vueQueryPluginOptions);
```

### 自定义上下文键值

如果你想避免 Vue2 在同一页面上的多个应用程序之间发生名称冲突，可以自定义`QueryClient`在 Vue 上下文中的键值。

该功能支持默认或自定义的`QueryClient`：

```ts
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientKey: "Foo",
};
app.use(VueQueryPlugin, vueQueryPluginOptions);
```

```ts
const myClient = new QueryClient(queryClientConfig);
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClient: myClient,
  queryClientKey: "Foo",
};
app.use(VueQueryPlugin, vueQueryPluginOptions);
```

要自定义键值，必须作为参数传递给对应查询

```ts
useQuery({
  queryKey: ["query1"],
  queryFn: fetcher,
  queryClientKey: "foo",
});
```

在 Vue Query 内部，自定义键值将作为后缀(suffix)与默认查询键值相组合。作为开发者，你不必担心这个问题。

```ts
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientKey: "Foo",
};
app.use(VueQueryPlugin, vueQueryPluginOptions); // -> VUE_QUERY_CLIENT:Foo
```
