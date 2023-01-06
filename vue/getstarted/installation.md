---
id: installation
title: 安装
---

你可以使用[NPM](https://www.npmjs.com)，[Yarn](https://yarnpkg.com)安装。

### NPM/YARN

```bash
$ npm i @tanstack/vue-query
# or
$ pnpm add @tanstack/vue-query
# or
$ yarn add @tanstack/vue-query
```

> 想在下载之前试一下吗？ 尝试[基本](https://tanstack.com/query/v4/docs/vue/examples/vue/basic)的示例！

Vue Query 与 Vue 2.x 和 3.x 兼容。

> 如果你的 Vue 版本是 2.6，请保证提前设置[@vue/composition-api](https://github.com/vuejs/composition-api)

### Vue Query 初始化

在使用 Vue Query 前，你需要通过`VueQueryPlugin`初始化

```ts
import { VueQueryPlugin } from "@tanstack/vue-query";

app.use(VueQueryPlugin);
```

### `<script setup>`中使用 Composition API

文档中所有例子都使用了[`<script setup>`](https://staging.vuejs.org/api/sfc-script-setup.html)语法。

Vue 2 用户也可以使用[此插件](https://github.com/antfu/unplugin-vue2-script-setup)设置该语法。
请查看对应链接，安装并正确初始化它。

如果你喜欢`<script setup>`语法，你也可以简单的把代码挪到`setup()`函数中并返回模板中需要的值，将例子翻译为通常的 Composition API 语法。

```html
<script setup>
import { useQuery } from "@tanstack/vue-query";

const { isLoading, isFetching, isError, data, error } = useQuery({
  queryKey: ["todos"],
  queryFn: getTodos,
});
</script>

<template>...</template>
```
