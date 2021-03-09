const started = [
  'overview',
  'installation',
  'devtools',
  'quick-start',
  'videos',
  'comparison',
  'typescript',
  'graphql',
  'react-native',
].map((item) => 'getstarted/' + item)

const guide = [
  'important-defaults',
  'queries',
  'query-keys',
  'query-functions',
  'parallel-queries',
  'dependent-queries',
  'background-fetching-indicators',
  'window-focus-refetching',
  'disabling-queries',
  'query-retries',
  'paginated-queries',
  'infinite-queries',
  'placeholder-query-data',
  'initial-query-data',
  'prefetching',
  'mutations',
  'query-invalidation',
  'invalidation-from-mutations',
  'updates-from-mutation-responses',
  'optimistic-updates',
  'query-cancellation',
  'scroll-restoration',
  'query-filters',
  'ssr',
  'caching',
  'default-query-function',
  'suspense',
  'testing',
  'does-this-replace-client-state',
  'migrating-to-react-query-3',
].map((item) => 'guides&concepts/' + item)

const plugins = [
  'broadcast-query-client',
  'create-localStorage-persistor',
  'persist-query-client',
].map((item) => 'plugins/' + item)

const reference = ['useQuery', 'useQueries'].map((item) => 'reference/' + item)

module.exports = {
  zhCN: {
    准备开始: started,
    '指南&概念': guide,
    范例: [
      {
        type: 'link',
        label: '官方示例',
        href: 'https://react-query.tanstack.com/examples/simple',
      },
    ],
    插件: plugins,
    API参考: [
      {
        type: 'link',
        label: '等待翻译...',
        href: 'https://react-query.tanstack.com/reference/useQuery',
      },
      'doc_template',
    ],
  },
}
