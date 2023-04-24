---
id: devtools
title: 开发调试工具
---

欢呼吧，因为 React Query 有专用的开发工具! 🥳

当开始 React Query 旅程时，你会希望身边有这些开发工具。
它们有助于可视化 React Query 的所有内部工作原理，并且可以在你发现自己处于紧要关头时，节省你调试的时间!

> 请注意，目前**devtools 还不支持 React Native**。如果你想帮助我们使 devtools 变得平台无关，请让我们知晓!
>
> 还有一点需要注意，你可以使用开发工具来检查**查询**，但不能检查**修改**(修改并没有被追踪，因为那个太过于麻烦和庞大)

## 安装和导入工具

devtools 包现在被拆分开来，因此需要额外安装:

```bash
$ npm i @tanstack/react-query-devtools
# or
$ pnpm add @tanstack/react-query-devtools
# or
$ yarn add @tanstack/react-query-devtools
```

然后你可以像这样导入它:

```ts
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
```

默认情况下，当`process.env.NODE_ENV ==='production'`时，React Query Devtools 不包含在打包结果中，因此不需要手动在生产构建期间将其排除。

## 浮动模式

浮动模式将 devtools 作为一个固定的浮动元素挂载在应用中，并在屏幕一角提供一个切换按钮以显示和隐藏 devtools。此切换状态将存储在 localStorage 中。

将以下代码尽可能地放在 React 应用的顶部。它离页面的根元素越近，它工作得越好!

```tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

### 配置项

- `initialIsOpen: Boolean`
  - 如果要使开发工具默认为打开，则将其设置为`true`
- `panelProps: PropsObject`
  - 用这个给面板添加 props。例如，你可以添加`className`, `style`(合并和覆盖默认样式)，等等
- `closeButtonProps: PropsObject`
  - 用这个往调试页面的关闭按钮添加 props。例如，你可以添加`className`, `style`(合并和覆盖默认样式), `onClick`(扩展默认处理程序)，等等
- `toggleButtonProps: PropsObject`
  - 用这个往调试页面的切换按钮添加 props。例如，你可以添加`className`, `style`(合并和覆盖默认样式), `onClick`(扩展默认处理程序)，等等
- `position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"`
  - 默认值为 `bottom-left`
  - React Query 徽标的位置，用于打开和关闭 devtools 面板
- `panelPosition?: "top" | "bottom" | "left" | "right"`
  - 默认值为 `bottom`
  - React Query devtools 面板的位置
- `context?: React.Context<QueryClient | undefined>`
  - 使用这个来使用自定义的 React Query 上下文。否则，将默认使用`defaultContext`
- `errorTypes?: { name: string; initializer: (query: Query) => { toString(): string }}`
  - 使用这个来预定义那些你的查询可能碰到的错误。这样的话在 devtools 中对特定的查询(specific query)你才可以看到 UI 变化(否则它会将错误交给 react 或者是 window)。它必须返回一个可以被转化为字符串的东西，以便我们在查询中可以检查它是否存在。

## 嵌入模式

嵌入式模式会将 devtools 作为常规组件嵌入到应用中。
你可以根据需要设置其样式！

```tsx
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtoolsPanel style={styles} className={className} />
    </QueryClientProvider>
  );
}
```

### 配置项

使用这些选项来设置开发工具的样式

- `style: StyleObject`
  - 对组件进行样式设置
- `className: string`
  - 对组件进行样式配置的 className 属性
- `showCloseButton?: boolean`
  - 是否在 devtools 里显示关闭按钮
- `closeButtonProps: PropsObject`
  - 给关闭按钮添加 props. 例如，你想改动 `className`, `style` 来覆盖默认的样式, `onClick` 更改默认的点击逻辑, 等.

## 生产模式中使用 devtools

Devtools 会在生产编译阶段被排除。
但是，可以通过懒加载来在生产模式中启用 devtools：

```tsx
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Example } from "./Example";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}

export default App;
```

如上所示，调用 `window.toggleDevtools()` 将下载 devtools 的构建包，然后展示它们。

### 现代的打包器

如果你的打包器支持包导出(package exports)，你可以使用如下的代码：

```tsx
const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);
```

对应 TypeScript，你或许需要在 tsconfig 中设置 `moduleResolution: 'nodenext'`，该设置仅在 TypeScript v4.7 及以上版本可用。
