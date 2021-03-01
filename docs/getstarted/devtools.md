---
id: devtools
title: 开发调试工具
---

欢呼吧，因为React Query自带了专用的开发工具! 🥳

当您开始React Query旅程时，你会希望身边有这些开发工具。
它们有助于可视化React Query的所有内部工作原理，并且如果您发现自己处于紧要关头，可能会节省您调试的时间!

> 请注意，目前**devtools还不支持React Native**。如果你想帮助我们使devtools变得平台无关，请让我们知道!

## 导入工具

devtools包被拆分为`react-query/devtools`包。不需要安装任何额外的东西:

```js
import { ReactQueryDevtools } from 'react-query/devtools'
```

默认情况下，当`process.env.NODE_ENV ==='production'`时，React Query Devtools 不包含在生产包中，因此您不需要手动在生产构建期间将其排除。

## 浮动模式

浮动模式将devtools作为一个固定的浮动元素挂载在应用程序中，并在屏幕一角提供一个切换按钮以显示和隐藏devtools。此切换状态将在重新加载时存储并记忆在localStorage中。

将以下代码尽可能地放在React应用程序的顶部。它离页面的根元素越近，它工作得越好!

```js
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

### 可选项

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
  - React Query徽标的位置，用于打开和关闭devtools面板

## 嵌入模式

嵌入式模式会将devtools作为常规组件嵌入到您的应用程序中。 您可以根据需要设置样式！

```js
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtoolsPanel style={styles} className={className} />
    </QueryClientProvider>
  )
}
```

### 可选项

使用这些选项来设置开发工具的样式

- `style: StyleObject`
  - 使用内联样式对组件进行样式设置的标准React Style对象
- `className: string`
  - 使用class对组件进行样式设置的标准React className属性
