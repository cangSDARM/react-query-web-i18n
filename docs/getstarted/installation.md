---
id: installation
title: 安装
---

你可以使用[NPM](https://npmjs.com/)，[Yarn](https://yarnpkg.com/)。或通过[unpkg](https://unpkg.com/)来在`<script>`中加载。

### NPM

```bash
$ npm i react-query
# or
$ yarn add react-query
```

React Query兼容React v16.8+，并与React dom和React Native兼容。

> 想在下载之前试一下吗？ 尝试[入门](/docs/examples/simple)或[基本](/docs/examples/basic)的示例！

### CDN

If you're not using a module bundler or package manager we also have a global ("UMD") build hosted on the [unpkg.com](https://unpkg.com) CDN. Simply add the following `<script>` tag to the bottom of your HTML file:

```html
<script src="https://unpkg.com/react-query/dist/react-query.production.min.js"></script>
```

Once you've added this you will have access to the `window.ReactQuery` object and its exports.

> This installation/usage requires the [React CDN script bundles](https://reactjs.org/docs/cdn-links.html) to be on the page as well.
