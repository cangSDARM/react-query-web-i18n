---
id: react-native
title: React Native
---

React Query 设计为可以与 React Native 一起使用，但 devtools 除外，而 devtools 目前仅受 React DOM 支持。
如果您想帮助我们使 devtools 跨平台，请告诉我们！

现在有一个使用第三方插件 [Flipper](https://fbflipper.com/docs/getting-started/react-native/) 的方案：https://github.com/bgaleotti/react-query-native-devtools

如果您想帮助我们使第一方的 devtools 跨平台，请告诉我们！

## 重新连接时的自动重新获取

React Query 已支持在浏览器中的重新连网时的自动重新获取。

如果想在 React Native 中使用这一特性，你需要像下面的例子一样，使用 `onlineManager`：

```ts
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "react-query";

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(state.isConnected);
  });
});
```

## 在 App 中基于焦点的重新获取

在 React Native 中，你需要使用 `focusManager` 来使得此特性生效。

你也可以使用一个叫 'react-native-appstate-hook' 的包来通知 React Query。

```ts
import { focusManager } from "react-query";
import useAppState from "react-native-appstate-hook";

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

useAppState({
  onChange: onAppStateChange,
});
```

## 屏幕的基于焦点的重新获取

在某些情况下，你可能想要在 React Native 的屏幕被重新聚焦时再次获取新的数据。

这个自定义的 Hook 会在屏幕被重新聚焦时调用传入的 `refetch` 函数。

```ts
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const enabledRef = React.useRef(false);

  useFocusEffect(
    React.useCallback(() => {
      if (enabledRef.current) {
        refetch();
      } else {
        enabledRef.current = true;
      }
    }, [refetch]),
  );
}
```
