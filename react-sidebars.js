const started = [
  "overview",
  "installation",
  "quick-start",
  "devtools",
  "videos&talks",
  "comparison",
  "typescript",
  "graphql",
  "react-native",
].map((item) => "getstarted/" + item);

const guide = [
  "important-defaults",
  "queries",
  "query-keys",
  "query-functions",
  "network-mode",
  "parallel-queries",
  "dependent-queries",
  "background-fetching-indicators",
  "window-focus-refetching",
  "disabling-queries",
  "query-retries",
  "paginated-queries",
  "infinite-queries",
  "placeholder-query-data",
  "initial-query-data",
  "prefetching",
  "mutations",
  "query-invalidation",
  "invalidation-from-mutations",
  "updates-from-mutation-responses",
  "optimistic-updates",
  "query-cancellation",
  "scroll-restoration",
  "filters",
  "ssr",
  "caching",
  "default-query-function",
  "suspense",
  "custom-logger",
  "testing",
  "does-this-replace-client-state",
  "migrating-to-react-query-3",
  "migrating-to-react-query-4",
].map((item) => "guides&concepts/" + item);

const plugins = [
  "broadcastQueryClient",
  "createAsyncStoragePersister",
  "createSyncStoragePersister",
  "persistQueryClient",
].map((item) => "plugins/" + item);

const communities = [
  "liaoliao666-react-query-kit",
  "lukemorales-query-key-factory",
  "angular-query",
].map((item) => "community/" + item);

const reference = ["useQuery", "useQueries"].map((item) => "reference/" + item);

module.exports = {
  zhCN: {
    准备开始: started,
    "指南&概念": guide,
    范例: [
      {
        type: "link",
        label: "官方示例",
        href: "https://react-query.tanstack.com/examples/simple",
      },
      {
        type: "link",
        label: "国内内容(Bilibili)",
        href: "https://search.bilibili.com/all?keyword=react-query",
      },
    ],
    "社区教程/博客": [
      {
        type: "link",
        label: "TkDodo's Blog",
        href: "https://react-query.tanstack.com/community/tkdodos-blog",
      },
      {
        type: "link",
        label: "入门教程(掘金)",
        href: "https://juejin.cn/post/6937833844837974053",
      },
      ...communities,
    ],
    插件: plugins,
    API参考: [
      {
        type: "link",
        label: "等待翻译...",
        href: "https://react-query.tanstack.com/reference/useQuery",
      },
      "doc_template",
    ],
  },
};
