---
id: dependent-queries
title: 有依赖的查询 dependent-queries
---

依赖查询（或串行查询）取决于先前的查询结果。要实现这一点，只需使用`enabled`选项就可以告诉查询何时可以运行：

```js
// Get the user
const { data: user } = useQuery(["user", email], getUserByEmail);

const userId = user?.id;

// Then get the user's projects
const { isIdle, data: projects } = useQuery(
  ["projects", userId],
  getProjectsByUser,
  {
    // 直到`userId`存在，查询才会被执行
    enabled: !!userId,
  },
);

// isIdle将一直为`true`，直到`enabled`为`true`且查询开始获取为止。
// 然后它将进入`isLoading` 阶段，并希望进入 `isSuccess` 阶段 :)
```
