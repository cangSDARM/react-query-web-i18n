---
id: custom-logger
title: 自定义日志记录器 Custom Logger
tags:
  - 翻译完成
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
