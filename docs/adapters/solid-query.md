---
id: solid-query
title: Solid Query
---

`@tanstack/solid-query` 包提供了一级 API，用于在 SolidJS 中使用 Tanstack Query。

## 例子

```tsx
import {
  QueryClient,
  QueryClientProvider,
  createQuery,
} from "@tanstack/solid-query";
import { Switch, Match, For } from "solid-js";

const queryClient = new QueryClient();

function Example() {
  const query = createQuery(() => ["todos"], fetchTodos);

  return (
    <div>
      <Switch>
        <Match when={query.isLoading}>
          <p>Loading...</p>
        </Match>
        <Match when={query.isError}>
          <p>Error: {query.error.message}</p>
        </Match>
        <Match when={query.isSuccess}>
          <For each={query.data}>{(todo) => <p>{todo.title}</p>}</For>
        </Match>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
```

## 可用的函数

Solid Query 提供了一些有用的原语及函数，使得在 SolidJS 中操作并管理服务器状态变得非常容易。

- `createQuery`
- `createQueries`
- `createInfiniteQueries`
- `createMutation`
- `useIsFetching`
- `useIsMutating`
- `useQueryClient`
- `QueryClient`
- `QueryClientProvider`

## Solid Query & React Query 之间的主要差异

Solid Query 提供了一个与 React Query 类似的 API，但有一些关键的区别需要注意。

- 为了保持状态的可响应性，在使用 `createQuery`、`createQueries`、`createInfiniteQuery` 及 `useIsFetching` 时，查询键值必须包裹在一个函数内：

```tsx
// ❌ react version
useQuery(["todos", todo], fetchTodos);

// ✅ solid version
createQuery(() => ["todos", todo()], fetchTodos);
```

- 如果你在`<Suspense>`组件内访问和查询数据，Suspense 就能开箱即用：

```tsx
import { For, Suspense } from "solid-js";

function Example() {
  const query = createQuery(() => ["todos"], fetchTodos);
  return (
    <div>
      {/* ✅ 将触发正确的 loading，因为是在 suspense 中访问数据 */}
      <Suspense fallback={"Loading..."}>
        <For each={query.data}>{(todo) => <div>{todo.title}</div>}</For>
      </Suspense>
      {/* ❌ 不会触发 loading，因为是在 suspense 外访问数据. */}
      <For each={query.data}>{(todo) => <div>{todo.title}</div>}</For>
    </div>
  );
}
```

- Solid Query 的原语(如`createX`)不支持解构操作。这些函数的返回值是一个 store（译注：不清楚 Solid 中 store 的正式名称），它们的属性在内部被追踪，以支持 SolidJS 的响应式写法：

```tsx
import {
  QueryClient,
  QueryClientProvider,
  createQuery,
} from "@tanstack/solid-query";
import { Match, Switch } from "solid-js";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  // ❌ react version -- 支持解构，因为 react 内部未处理响应式的属性
  // const { isLoading, error, data } = useQuery(['repoData'], () =>
  //   fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //     res.json()
  //   )
  // )

  // ✅ solid version -- 不支持解构，因为 solid 以此完成响应式编程
  const query = createQuery(
    () => ["repoData"],
    () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json()
      )
  );

  // ✅ 在响应式UI的上下文中访问数据
  return (
    <Switch>
      <Match when={query.isLoading}>Loading...</Match>
      <Match when={query.isError}>Error: {query.error.message}</Match>
      <Match when={query.isSuccess}>
        <div>
          <h1>{query.data.name}</h1>
          <p>{query.data.description}</p>
          <strong>👀 {query.data.subscribers_count}</strong>{" "}
          <strong>✨ {query.data.stargazers_count}</strong>{" "}
          <strong>🍴 {query.data.forks_count}</strong>
        </div>
      </Match>
    </Switch>
  );
}
```

- 如果你希望查询的配置项内容是响应式的，你需要使用[对象访问器(getter/setter)](https://www.w3school.com.cn/js/js_object_accessors.asp)的语法来传递它们。可能在一开始会看着比较奇怪，但它确实是更加符合 Solid 习惯的(idiomatic) Solid 代码：

```tsx
import {
  QueryClient,
  QueryClientProvider,
  createQuery,
} from "@tanstack/solid-query";
import { createSignal, For } from "solid-js";

const queryClient = new QueryClient();

function Example() {
  const [enabled, setEnabled] = createSignal(false);
  const query = createQuery(() => ["todos"], fetchTodos, {
    // ❌ 直接单独传递选项不是响应式的
    // enabled: enabled(),

    // ✅ 传递一个对象访问器的是响应式的
    get enabled() {
      return enabled();
    },
  });

  return (
    <div>
      <Switch>
        <Match when={query.isLoading}>
          <p>Loading...</p>
        </Match>
        <Match when={query.isError}>
          <p>Error: {query.error.message}</p>
        </Match>
        <Match when={query.isSuccess}>
          <For each={query.data}>{(todo) => <p>{todo.title}</p>}</For>
        </Match>
      </Switch>
      <button onClick={() => setEnabled(!enabled())}>Toggle enabled</button>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
```

- 错误可以用 SolidJS 本身的 `ErrorBoundary` 组件来捕获和重置。在 Solid Query 中不需要 `QueryErrorResetBoundary`。

- 由于属性的跟踪是由 Solid 的 [fine grained reactivity](https://www.solidjs.com/tutorial/stores_nested_reactivity) 处理，因此不需要如 `notifyOnChangeProps` 之类的配置项
