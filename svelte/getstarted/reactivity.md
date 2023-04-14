---
id: reactivity
title: Svelte 中的响应式
---

为了优化渲染，Svelte 使用了一个编译器来构建源代码。
在 Svelte 中，默认情况下，除非变量(variables)在源码中被其他地方所引用，否则变量仅被赋值一次。
如要让不同的变量或函数具有响应性，你需要使用[特殊的声明形式](https://svelte.dev/tutorial/reactive-declarations)。
Svelte Query 也同样遵从这一点。

在下面的例子中，`refetchInterval`选项是从变量`intervalMs`赋值而来的，而该变量是从一个 input 框中编辑而来。
你可能觉得 input 的值变化将导致`refetchInterval`变化，然而因为没有任何东西被声明为响应式的，因此变量及查询都不会被改变:

```markdown
<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query'

  let intervalMs = 1000

  const endpoint = 'http://localhost:5173/api/data'

  const query = createQuery({
    queryKey: ['refetch'],
    queryFn: async () => await fetch(endpoint).then((r) => r.json()),
    refetchInterval: intervalMs,
  })
</script>

<input bind:value={intervalMs} type="number" />
```

解决方法很简单，遵从规则添加一个`$: `前缀给 query，则编译器将自动触发响应式逻辑

```markdown
<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query'

  let intervalMs = 1000

  const endpoint = 'http://localhost:5173/api/data'

  $: query = createQuery({
    queryKey: ['refetch'],
    queryFn: async () => await fetch(endpoint).then((r) => r.json()),
    refetchInterval: intervalMs,
  })
</script>

<input bind:value={intervalMs} type="number" />
```
