---
id: dependent-queries
title: 有依赖的查询 Dependent Queries
---

依赖查询（或串行查询）取决于先前的查询结果。要实现这一点，只需使用`enabled`选项就可以告诉查询何时可以运行：

```ts
// Get the user
const { data: user } = useQuery({
  queryKey: ["user", email],
  queryFn: getUserByEmail,
});

const userId = user?.id;

// Then get the user's projects
const {
  status,
  fetchStatus,
  data: projects,
} = useQuery({
  queryKey: ["projects", userId],
  queryFn: getProjectsByUser,
  // 直到`userId`存在，查询才会被执行
  enabled: !!userId,
});
```

`projects`的查询开始状态如下：

```ts
status: "loading";
fetchStatus: "idle";
```

一旦`userId`可用，`projects`的查询将被“启用”（enabled），然后状态转换为：

```ts
status: "loading";
fetchStatus: "fetching";
```

查询完成时，状态变成：

```ts
status: "success";
fetchStatus: "idle";
```
