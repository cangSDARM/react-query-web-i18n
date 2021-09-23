---
id: typescript
title: TypeScript
---

React Query 现在是用**TypeScript**写的，以确保库和项目里有关的代码是类型安全的！

需要记住的是：

- 目前需要使用 TypeScript v3.8 或更高版本
- 对该库中的类型所做的更改被认为是**非破坏性(non-breaking)**的，并且通常以**补丁(小版本号)**的形式发布（每次类型的增强都是主要版本号改动!）。
- 强烈建议您**将`react-query`包版本锁定在一个特定的小版本号上，并做好在任何版本之间类型都会固定或升级的打算**。
- 与类型无关的公共 API 仍然非常严格地遵循 semver 版本守则。

## 自定义 Hooks

定义自定义钩子时，需要指定返回值和错误的类型，例如：

```ts
function useGroups() {
  return useQuery<Group[], Error>("groups", fetchGroups);
}
```

## 延伸阅读

关于在 Typescript 中类型推断的技巧和建议，请参阅[此社区资源](https://react-query.tanstack.com/community/tkdodos-blog#6-react-query-and-typescript)
