"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7196],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={id:"overview",title:"Solid Query",slug:"/"},o=void 0,l={unversionedId:"getstarted/overview",id:"getstarted/overview",title:"Solid Query",description:"@tanstack/solid-query \u5305\u63d0\u4f9b\u4e86\u4e00\u7ea7 API\uff0c\u7528\u4e8e\u5728 SolidJS \u4e2d\u4f7f\u7528 TanStack Query\u3002",source:"@site/solid/getstarted/overview.md",sourceDirName:"getstarted",slug:"/",permalink:"/react-query-web-i18n/solid/",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/solid/getstarted/overview.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"overview",title:"Solid Query",slug:"/"},sidebar:"zhCN"},u={},s=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u53ef\u7528\u7684\u51fd\u6570",id:"\u53ef\u7528\u7684\u51fd\u6570",level:2},{value:"Solid Query &amp; React Query \u4e4b\u95f4\u7684\u4e3b\u8981\u5dee\u5f02",id:"solid-query--react-query-\u4e4b\u95f4\u7684\u4e3b\u8981\u5dee\u5f02",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@tanstack/solid-query")," \u5305\u63d0\u4f9b\u4e86\u4e00\u7ea7 API\uff0c\u7528\u4e8e\u5728 SolidJS \u4e2d\u4f7f\u7528 TanStack Query\u3002"),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  QueryClient,\n  QueryClientProvider,\n  createQuery,\n} from "@tanstack/solid-query";\nimport { Switch, Match, For } from "solid-js";\n\nconst queryClient = new QueryClient();\n\nfunction Example() {\n  const query = createQuery(() => ["todos"], fetchTodos);\n\n  return (\n    <div>\n      <Switch>\n        <Match when={query.isLoading}>\n          <p>Loading...</p>\n        </Match>\n        <Match when={query.isError}>\n          <p>Error: {query.error.message}</p>\n        </Match>\n        <Match when={query.isSuccess}>\n          <For each={query.data}>{(todo) => <p>{todo.title}</p>}</For>\n        </Match>\n      </Switch>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Example />\n    </QueryClientProvider>\n  );\n}\n')),(0,a.kt)("h2",{id:"\u53ef\u7528\u7684\u51fd\u6570"},"\u53ef\u7528\u7684\u51fd\u6570"),(0,a.kt)("p",null,"Solid Query \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u539f\u8bed\u53ca\u51fd\u6570\uff0c\u4f7f\u5f97\u5728 SolidJS \u4e2d\u64cd\u4f5c\u5e76\u7ba1\u7406\u670d\u52a1\u5668\u72b6\u6001\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createQuery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createQueries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createInfiniteQueries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createMutation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useIsFetching")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useIsMutating")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useQueryClient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"QueryClient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"QueryClientProvider"))),(0,a.kt)("h2",{id:"solid-query--react-query-\u4e4b\u95f4\u7684\u4e3b\u8981\u5dee\u5f02"},"Solid Query & React Query \u4e4b\u95f4\u7684\u4e3b\u8981\u5dee\u5f02"),(0,a.kt)("p",null,"Solid Query \u63d0\u4f9b\u4e86\u4e00\u4e2a\u4e0e React Query \u7c7b\u4f3c\u7684 API\uff0c\u4f46\u6709\u4e00\u4e9b\u5173\u952e\u7684\u533a\u522b\u9700\u8981\u6ce8\u610f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4fdd\u6301\u72b6\u6001\u7684\u53ef\u54cd\u5e94\u6027\uff0c\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"createQuery"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"createQueries"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"createInfiniteQuery")," \u53ca ",(0,a.kt)("inlineCode",{parentName:"li"},"useIsFetching")," \u65f6\uff0c\u67e5\u8be2\u952e\u503c\u5fc5\u987b\u5305\u88f9\u5728\u4e00\u4e2a\u51fd\u6570\u5185\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// \u274c react version\nuseQuery(["todos", todo], fetchTodos);\n\n// \u2705 solid version\ncreateQuery(() => ["todos", todo()], fetchTodos);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"<Suspense>"),"\u7ec4\u4ef6\u5185\u8bbf\u95ee\u548c\u67e5\u8be2\u6570\u636e\uff0cSuspense \u5c31\u80fd\u5f00\u7bb1\u5373\u7528\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { For, Suspense } from "solid-js";\n\nfunction Example() {\n  const query = createQuery(() => ["todos"], fetchTodos);\n  return (\n    <div>\n      {/* \u2705 \u5c06\u89e6\u53d1\u6b63\u786e\u7684 loading\uff0c\u56e0\u4e3a\u662f\u5728 suspense \u4e2d\u8bbf\u95ee\u6570\u636e */}\n      <Suspense fallback={"Loading..."}>\n        <For each={query.data}>{(todo) => <div>{todo.title}</div>}</For>\n      </Suspense>\n      {/* \u274c \u4e0d\u4f1a\u89e6\u53d1 loading\uff0c\u56e0\u4e3a\u662f\u5728 suspense \u5916\u8bbf\u95ee\u6570\u636e. */}\n      <For each={query.data}>{(todo) => <div>{todo.title}</div>}</For>\n    </div>\n  );\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solid Query \u7684\u539f\u8bed(\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"createX"),")\u4e0d\u652f\u6301\u89e3\u6784\u64cd\u4f5c\u3002\u8fd9\u4e9b\u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a store\uff08\u8bd1\u6ce8\uff1a\u4e0d\u6e05\u695a Solid \u4e2d store \u7684\u6b63\u5f0f\u540d\u79f0\uff09\uff0c\u5b83\u4eec\u7684\u5c5e\u6027\u5728\u5185\u90e8\u88ab\u8ffd\u8e2a\uff0c\u4ee5\u652f\u6301 SolidJS \u7684\u54cd\u5e94\u5f0f\u5199\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  QueryClient,\n  QueryClientProvider,\n  createQuery,\n} from "@tanstack/solid-query";\nimport { Match, Switch } from "solid-js";\n\nconst queryClient = new QueryClient();\n\nexport default function App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Example />\n    </QueryClientProvider>\n  );\n}\n\nfunction Example() {\n  // \u274c react version -- \u652f\u6301\u89e3\u6784\uff0c\u56e0\u4e3a react \u5185\u90e8\u672a\u5904\u7406\u54cd\u5e94\u5f0f\u7684\u5c5e\u6027\n  // const { isLoading, error, data } = useQuery([\'repoData\'], () =>\n  //   fetch(\'https://api.github.com/repos/tannerlinsley/react-query\').then(res =>\n  //     res.json()\n  //   )\n  // )\n\n  // \u2705 solid version -- \u4e0d\u652f\u6301\u89e3\u6784\uff0c\u56e0\u4e3a solid \u4ee5\u6b64\u5b8c\u6210\u54cd\u5e94\u5f0f\u7f16\u7a0b\n  const query = createQuery(\n    () => ["repoData"],\n    () =>\n      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(\n        (res) => res.json()\n      )\n  );\n\n  // \u2705 \u5728\u54cd\u5e94\u5f0fUI\u7684\u4e0a\u4e0b\u6587\u4e2d\u8bbf\u95ee\u6570\u636e\n  return (\n    <Switch>\n      <Match when={query.isLoading}>Loading...</Match>\n      <Match when={query.isError}>Error: {query.error.message}</Match>\n      <Match when={query.isSuccess}>\n        <div>\n          <h1>{query.data.name}</h1>\n          <p>{query.data.description}</p>\n          <strong>\ud83d\udc40 {query.data.subscribers_count}</strong>{" "}\n          <strong>\u2728 {query.data.stargazers_count}</strong>{" "}\n          <strong>\ud83c\udf74 {query.data.forks_count}</strong>\n        </div>\n      </Match>\n    </Switch>\n  );\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5e0c\u671b\u67e5\u8be2\u7684\u914d\u7f6e\u9879\u5185\u5bb9\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u4f60\u9700\u8981\u4f7f\u7528",(0,a.kt)("a",{parentName:"li",href:"https://www.w3school.com.cn/js/js_object_accessors.asp"},"\u5bf9\u8c61\u8bbf\u95ee\u5668(getter/setter)"),"\u7684\u8bed\u6cd5\u6765\u4f20\u9012\u5b83\u4eec\u3002\u53ef\u80fd\u5728\u4e00\u5f00\u59cb\u4f1a\u770b\u7740\u6bd4\u8f83\u5947\u602a\uff0c\u4f46\u5b83\u786e\u5b9e\u662f\u66f4\u52a0\u7b26\u5408 Solid \u4e60\u60ef\u7684(idiomatic) Solid \u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  QueryClient,\n  QueryClientProvider,\n  createQuery,\n} from "@tanstack/solid-query";\nimport { createSignal, For } from "solid-js";\n\nconst queryClient = new QueryClient();\n\nfunction Example() {\n  const [enabled, setEnabled] = createSignal(false);\n  const query = createQuery(() => ["todos"], fetchTodos, {\n    // \u274c \u76f4\u63a5\u5355\u72ec\u4f20\u9012\u9009\u9879\u4e0d\u662f\u54cd\u5e94\u5f0f\u7684\n    // enabled: enabled(),\n\n    // \u2705 \u4f20\u9012\u4e00\u4e2a\u5bf9\u8c61\u8bbf\u95ee\u5668\u7684\u662f\u54cd\u5e94\u5f0f\u7684\n    get enabled() {\n      return enabled();\n    },\n  });\n\n  return (\n    <div>\n      <Switch>\n        <Match when={query.isLoading}>\n          <p>Loading...</p>\n        </Match>\n        <Match when={query.isError}>\n          <p>Error: {query.error.message}</p>\n        </Match>\n        <Match when={query.isSuccess}>\n          <For each={query.data}>{(todo) => <p>{todo.title}</p>}</For>\n        </Match>\n      </Switch>\n      <button onClick={() => setEnabled(!enabled())}>Toggle enabled</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Example />\n    </QueryClientProvider>\n  );\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9519\u8bef\u53ef\u4ee5\u7528 SolidJS \u672c\u8eab\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," \u7ec4\u4ef6\u6765\u6355\u83b7\u548c\u91cd\u7f6e\u3002\u5728 Solid Query \u4e2d\u4e0d\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryErrorResetBoundary"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7531\u4e8e\u5c5e\u6027\u7684\u8ddf\u8e2a\u662f\u7531 Solid \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://www.solidjs.com/tutorial/stores_nested_reactivity"},"fine grained reactivity")," \u5904\u7406\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"notifyOnChangeProps")," \u4e4b\u7c7b\u7684\u914d\u7f6e\u9879"))))}d.isMDXComponent=!0}}]);