---
id: custom-logger
title: 自定义日志记录器 Custom Logger (Deprecated)
---

如果你想自定义 React Query 记录信息的方式，你可以在创建`QueryClient`时自定义一个日志记录器

```tsx
const queryClient = new QueryClient({
  logger: {
    log: (...args) => {
      // Log debugging information
    },
    warn: (...args) => {
      // Log warning
    },
    error: (...args) => {
      // Log error
    },
  },
});
```

**已废弃**

自定义日志记录器已被弃用，并将在下一个主要版本中被删除。
日志只在开发模式下有影响，在开发模式下传递自定义日志器是没有必要的。
