---
id: react-native
title: React Native
---

React Query 设计为可以与 React Native 一起使用，但 devtools 除外，而 devtools 目前仅受 React DOM 支持。

有一个使用第三方插件 [Flipper](https://fbflipper.com/docs/getting-started/react-native/) 的方案：https://github.com/bgaleotti/react-query-native-devtools

另一个第三方插件 [Reactotron](https://github.com/infinitered/reactotron/) 的方案：https://github.com/hsndmr/reactotron-react-query

如果您想帮助我们使第一方的 devtools 跨平台，请告诉我们！

## 在线状态的管理

React Query 已经支持在网络断线重连时的数据自动重新获取。

如果想在 React Native 中使用这一特性，你需要像下面的例子一样，使用 `onlineManager`：

```tsx
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});
```

## 基于 App 焦点的重新获取

React Native 通过[`AppState`模块](https://reactnative.dev/docs/appstate#app-states)提供焦点信息，而不是`window`上的事件监听器。
你可以使用`AppState`的"change"事件，在应用状态变为"active"时触发更新。

```tsx
import { useEffect } from "react";
import { AppState, Platform } from "react-native";
import type { AppStateStatus } from "react-native";
import { focusManager } from "@tanstack/react-query";

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

useEffect(() => {
  const subscription = AppState.addEventListener("change", onAppStateChange);

  return () => subscription.remove();
}, []);
```

## 基于屏幕焦点的重新获取

在某些情况下，你可能想要在屏幕被重新聚焦时再次获取新的数据。

这个自定义的 Hook 会在屏幕被重新聚焦时调用传入的 `refetch` 函数。

```tsx
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch])
  );
}
```

在上面的代码中，跳过了`refetch`方法一次，因为除了屏幕焦点外，`useFocusEffect`在挂载时也会调用我们的回调。
