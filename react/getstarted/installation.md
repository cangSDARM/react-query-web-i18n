---
id: installation
title: 安装
---

你可以使用[NPM](https://www.npmjs.com)，[Yarn](https://yarnpkg.com)安装 React Query。
或通过[unpkg](https://unpkg.com)来在`<script>`中加载。

### NPM/YARN

```bash
$ npm i @tanstack/react-query
# or
$ pnpm add @tanstack/react-query
# or
$ yarn add @tanstack/react-query
```

React Query 兼容 React v16.8+，支持 React DOM 和 React Native。

> 想在下载之前试一下吗？ 尝试[入门](https://react-query.tanstack.com/docs/examples/simple)或[基本](https://react-query.tanstack.com/docs/examples/basic)的示例！（英文）

### CDN

如果您没有使用模块打包器或程序包管理器，我们还在 [unpkg.com](https://unpkg.com) 上托管了一个全局(“UMD”)构建。
只需将以下<script\>标记添加到 HTML 文件的底部：

```html
<script src="https://unpkg.com/@tanstack/react-query@4/build/umd/index.production.js"></script>
```

添加后，您将可以访问`window.ReactQuery`对象及其导出。

> 此安装/使用也需要在页面上包含 [React CDN](https://reactjs.org/docs/cdn-links.html) 脚本包。

### 兼容性

React Query 针对现代浏览器进行了优化。
它仅与以下浏览器版本配置兼容:

```
Chrome >= 73
Firefox >= 78
Edge >= 79
Safari >= 12.0
iOS >= 12.0
opera >= 53
```

> 根据你的环境，可能需要添加 polyfill。如果你想支持旧的浏览器，还需要自己从`node_modules`中编译或转换 React Query(例如 webpack 的 transpile 相关)。
