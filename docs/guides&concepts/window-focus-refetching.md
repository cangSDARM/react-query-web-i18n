---
id: window-focus-refetching
title: 窗口焦点影响的数据刷新 window-focus-refetching
---

如果用户离开您的应用时数据是标记为过时的，**React Query 会自动在后台为您请求新的数据**。
您可以使用`refetchOnWindowFocus`选项在全局或每个查询中禁用此选项。

#### 全局禁用

```js
//
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
```

#### 单独禁用

```js
useQuery("todos", fetchTodos, { refetchOnWindowFocus: false });
```

## 自定义窗口 Focus 事件

在极少数情况下，您可能需要自己管理窗口的 Focus 事件，这些事件会触发 React Query 的重新验证。
为此，React Query 提供了一个`focusManager.setEventListener`函数，该函数提供了当窗口聚焦时应触发的回调，并允许您设置自己的事件。
当调用`focusManager.setEventListener`时，先前设置的处理函数将被删除（在大多数情况下将是默认处理函数），而将使用新的处理函数。 例如，这是默认处理程序：

```js
focusManager.setEventListener((handleFocus) => {
  // 监听可见的变化和焦点
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("visibilitychange", handleFocus, false);
    window.addEventListener("focus", handleFocus, false);
  }

  return () => {
    // 如果设置了新的处理程序，确保取消订阅
    window.removeEventListener("visibilitychange", handleFocus);
    window.removeEventListener("focus", handleFocus);
  };
});
```

## 忽略 Iframe 的 Focus 事件

替换焦点处理函数的一个很好的用例是 iframe 的事件。
当在应用中聚焦或使用 iframe 时，iframe 会通过两次触发事件(both double-firing events)以及触发假阳性事件(false-positive events)来检测窗口焦点，从而带来某些潜在的问题。
如果遇到这种情况，你应该使用一个尽可能忽略这些事件的事件处理函数。例如使用[这个 Gist](https://gist.github.com/tannerlinsley/1d3a2122332107fcd8c9cc379be10d88)：

```js
import { focusManager } from "react-query";
import onWindowFocus from "./onWindowFocus"; // The gist

focusManager.setEventListener(onWindowFocus); // Boom!
```

## 在 React Native 中管理焦点

React Native 通过[`AppState`模块](https://reactnative.dev/docs/appstate#app-states)提供焦点信息，而不是窗口上的事件侦听器。当应用状态更改为“active”时，可以使用`AppState`的“change”事件来触发更新：

```js
import { AppState } from "react-native";
import { focusManager } from "react-query";

focusManager.setEventListener((handleFocus) => {
  AppState.addEventListener("change", handleFocus);

  return () => {
    AppState.removeEventListener("change", handleFocus);
  };
});
```

## 管理焦点状态

```js
import { focusManager } from "react-query";

// 覆盖默认的焦点状态
focusManager.setFocused(true);

// 回退到默认的焦点检查
focusManager.setFocused(undefined);
```

## 陷阱和警告

一些浏览器内部的对话窗口——如 `alert()` 或文件上传(`<input type="file" />`) 之类的产生的，也可能在它们关闭后触发窗口焦点的数据获取动作。
这可能会导致不必要的副作用，因为数据的重新获取可能会触发组件卸载或重新挂载，甚至远在执行文件上传处理的步骤之前。
请查看[此 Issue](https://github.com/tannerlinsley/react-query/issues/2960) 以了解背景及相关的解决办法
