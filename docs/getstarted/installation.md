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

如果您没有使用模块打包器或程序包管理器，我们还在 [unpkg.com](https://unpkg.com) 上托管了一个全局（“ UMD”）构建。 只需将以下<script\>标记添加到HTML文件的底部：

```html
<script src="https://unpkg.com/react-query/dist/react-query.production.min.js"></script>
```

添加后，您将可以访问`window.ReactQuery`对象及其导出。

> 此安装/使用也需要在页面上包含 [React CDN](https://reactjs.org/docs/cdn-links.html) 脚本包。
