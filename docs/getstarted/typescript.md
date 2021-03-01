---
id: typescript
title: TypeScript
---

React Query 现在是用**TypeScript**写的，以确保库和你的项目是类型安全的！

需要记住的是：

- 目前需要使用TypeScript v3.8或更高版本
- 对该存储库中的类型所做的更改被认为是**非破坏性（non-breaking）**的，并且通常以**补丁程序**的形式发布（否则，每种类型的增强都是主要版本！）。
- 强烈建议您**将`react-query`包版本锁定在一个特定的补丁版本上，并做好在任何版本之间类型都会固定或升级的打算**。
- 与类型无关的公共API仍然非常严格地遵循 semver 版本守则。

## 自定义Hooks

定义自定义挂钩时，您需要指定返回值和错误的类型，例如：

```ts
function useGroups() {
  return useQuery<Group[], Error>('groups', fetchGroups);
}
```
