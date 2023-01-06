---
id: typescript
title: TypeScript
---

Vue Query 现在是用**TypeScript**写的，以确保库和项目里有关的代码是类型安全的！

需要记住的是：

- 目前需要使用 TypeScript v4.1 或更高版本
- 对该库中的类型所做的更改被认为是**非破坏性(non-breaking)**的，并且通常以**补丁(小版本号)**的形式发布（每次类型的增强都是主要版本号改动!）。
- 强烈建议您**将`vue-query`包版本锁定在一个特定的小版本号上，并做好在任何版本之间类型都会固定或升级的打算**。
- 与类型无关的公共 API 仍然非常严格地遵循 semver 版本守则。

## 类型推导

Vue Query 中的类型通常可以很好地被 ts 自动推导，因此你不需要自己来提供类型注释

```ts
const { data } = useQuery(["test"], () => Promise.resolve(5));
//      ^? const data: number | undefined
```

[typescript playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAOQACMAhgHaoMDGA1gPQBuOAtAEcc+KgFgAUBNYRm8JABN6DInAC8KDNlx4AFAG0qjZCABGuKgF0ANHB0BKNQD44ABXIhgGAHRR0qCAA23Og6AKx2dhKcnHCxcQB6APwSQA)

```ts
const { data } = useQuery(["test"], () => Promise.resolve(5), {
  select: (data) => data.toString(),
});
//      ^? const data: string | undefined
```

[typescript playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAOQACMAhgHaoMDGA1gPQBuOAtAEcc+KgFgAUBNYRm8JABN6DInAC8KDNlx4AFAG0qMdCyoBdADRwdASjUA+OAAVyIYBgB0UYxAA23dDoArNaWSBg+6KwwAFxwisqqDvH07jAQAMowUMCMAOY2hNYSnJxwZeUAegD8EkA)

如果 `queryFn` 有一个定义良好的返回类型，那么这种方法最有效。
请记住，大多数的数据获取库都会默认返回一个`any`类型来填充，所以请确保将其提取到一个拥有正确类型的函数：

```ts
const fetchGroups = (): Promise<Group[]> =>
  axios.get("/groups").then((response) => response.data);

const { data } = useQuery(["groups"], fetchGroups);
//      ^? const data: Group[] | undefined
```

[typescript playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAOQACMAhgHaoMDGA1gPQBuOAtAEcc+KgFgAUKEiw49AB7AIqUuUpV5i1GPESYeMOjgBxcsjBwAvIjjAAJgC44jZCABGuIhImsIzeCXQYVgALEwgzZSsACgBKRwAFVWAMAB4wswBtAF0APks8jSUAOgBzQKiqThLTMC0Yophg9EYoqHRUSGZDCzy2jt8MItt6BhivcR8-a2GGIksUDGxcPCiMqmrw2qosgBpSQJD02rHxTk44C8uAPQB+CSA)

## 类型窄化

Vue Query 对查询结果使用[可辨识的联合类型(discriminated union type)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions)，其由`status`字段和派生的布尔状态字段区分。例如下面的示例，用`success`的相关状态来确保`data`是已被定义和赋值:

```ts
const { data, isSuccess } = useQuery(["test"], () => Promise.resolve(5));

if (isSuccess) {
  data;
  //  ^? const data: number
}
```

[typescript playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAOQACMAhgHaoMDGA1gPQBuOAtAEcc+KgFgAUKEixEcKOnqsYwbuiKlylKr3RUA3BImsIzeEgAm9BgBo4wVAGVkrVulSp1AXjkKlK9AAUaFjCeAEA2lQwbjBUALq2AQCUcJ4AfHAACpr26AB08qgQADaqAQCsSVWGkiRwAfZOLm6oKQgScJ1wlgwSnJydAHoA-BKEEkA)

## 错误字段的类型

error 的类型默认是`unknown`。
这和 TypeScript 在 catch 语句中给出的默认值一致(请看[useUnknownInCatchVariables](https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/#use-unknown-catch-variables))。
处理`error`最安全的方法是在运行时进行检查；或者是显式地定义`data`和`error`的类型:

```ts
const { error } = useQuery(["groups"], fetchGroups);
//      ^? const error: unknown

if (error instanceof Error) {
  error;
  // ^? const error: Error
}
```

[typescript playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAOQACMAhgHaoMDGA1gPQBuOAtAEcc+KgFgAUKEiw49AB7AIqUuUpV5i1GPESYeMOjgBxcsjBwAvIjjAAJgC44jZCABGuIhImsIzeCXQYVgALEwgzZSsACgBKRwAFVWAMAB4wswBtAF0APks8jSUAOgBzQKiqThLTMC0Yophg9EYoqHRUSGZDCzy2jt8MItt6BhivcR8-a1xyKCJLFAxsXDwojKpq8NqqLIAaUkCQ9Nqx8U5OOEurgD0AfnHgEjgomegbPyZWdAgngFEoWYxRASS6vKASc5wO4SQhAA)

```ts
const { error } = useQuery<Group[], Error>(["groups"], fetchGroups);
//      ^? const error: Error | null
```

[typescript playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAOQACMAhgHaoMDGA1gPQBuOAtAEcc+KgFgAUKEiw49AB7AIqUuUpV5i1GPESYeMOjgBxcsjBwAvIjjAAJgC44jZCABGuIhImsIzeCXQYVgALEwgzZSsACgBKRwAFVWAMAB4wswBtAF0APks8jSUAOgBzQKiqThLTMC0Yophg9EYoqHRUSGZDCzy2jt8MItt6BhivcR8-a1xyKCJLFAxsXDw0muyAGjgAUShZnKiMqmrw2qosrYCg0JrUMfFOTjhnl4A9AH4JIA)

## 延伸阅读

关于在 Typescript 中类型推断的技巧和建议，请参阅[此社区资源](https://tanstack.com/query/v4/docs/community/tkdodos-blog#6-react-query-and-typescript)
