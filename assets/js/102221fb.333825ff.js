"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[4712],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(a),y=r,d=c["".concat(o,".").concat(y)]||c[y]||m[y]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"liaoliao666-react-query-kit",title:"React Query Kit"},l=void 0,u={unversionedId:"community/liaoliao666-react-query-kit",id:"community/liaoliao666-react-query-kit",title:"React Query Kit",description:"\u6587\u672c\u5185\u5bb9\u6765\u81eaReact Query Kit: README-CN.md",source:"@site/react/community/liaoliao666-react-query-kit.mdx",sourceDirName:"community",slug:"/community/liaoliao666-react-query-kit",permalink:"/react-query-web-i18n/react/community/liaoliao666-react-query-kit",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/react/community/liaoliao666-react-query-kit.mdx",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"liaoliao666-react-query-kit",title:"React Query Kit"},sidebar:"zhCN",previous:{title:"\u8fc1\u79fb\u5230React Query 4",permalink:"/react-query-web-i18n/react/guides&concepts/migrating-to-react-query-4"},next:{title:"Query Key Factory",permalink:"/react-query-web-i18n/react/community/lukemorales-query-key-factory"}},o={},s=[{value:"Motivation",id:"motivation",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Installation",id:"installation",level:2},{value:"createQuery",id:"createquery",level:2},{value:"Usage",id:"usage",level:3},{value:"\u989d\u5916\u7684 API \u6587\u6863",id:"\u989d\u5916\u7684-api-\u6587\u6863",level:3},{value:"createInfiniteQuery",id:"createinfinitequery",level:2},{value:"Usage",id:"usage-1",level:3},{value:"\u989d\u5916\u7684 API \u6587\u6863",id:"\u989d\u5916\u7684-api-\u6587\u6863-1",level:3},{value:"createMutation",id:"createmutation",level:2},{value:"Usage",id:"usage-2",level:3},{value:"\u989d\u5916\u7684 API \u6587\u6863",id:"\u989d\u5916\u7684-api-\u6587\u6863-2",level:3},{value:"Issues",id:"issues",level:2},{value:"\ud83d\udc1b Bugs",id:"-bugs",level:3},{value:"\ud83d\udca1 Feature Requests",id:"-feature-requests",level:3},{value:"LICENSE",id:"license",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6587\u672c\u5185\u5bb9\u6765\u81ea",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/liaoliao666/react-query-kit/main/README-zh_CN.md"},"React Query Kit: README-CN.md"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("h1",null,"react-query-kit"),(0,r.kt)("p",null,"\ud83d\udd4a\ufe0f \u4e00\u4e2a\u7528\u4e8e ReactQuery \u7684\u5de5\u5177\u5305\uff0c\u5b83\u80fd\u4f7f ReactQuery \u66f4\u6613\u590d\u7528\u548c\u7c7b\u578b\u5b89\u5168"),(0,r.kt)("p",{align:"center"},(0,r.kt)("a",{href:"https://github.com/liaoliao666/react-query-kit/actions/workflows/tests.yml"},(0,r.kt)("img",{src:"https://github.com/liaoliao666/react-query-kit/actions/workflows/tests.yml/badge.svg?branch=main",alt:"Latest build",target:"\\_parent"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/react-query-kit"},(0,r.kt)("img",{src:"https://badgen.net/npm/v/react-query-kit",alt:"Latest published version",target:"\\_parent"})),(0,r.kt)("a",{href:"https://bundlephobia.com/package/react-query-kit@latest"},(0,r.kt)("img",{src:"https://badgen.net/bundlephobia/minzip/react-query-kit",alt:"Bundlephobia",target:"\\_parent"})),(0,r.kt)("a",{href:"https://bundlephobia.com/package/react-query-kit@latest"},(0,r.kt)("img",{src:"https://badgen.net/bundlephobia/dependency-count/react-query-kit",alt:"Dependency count 0",target:"\\_parent"})),(0,r.kt)("a",{href:"https://github.com/liaoliao666/react-query-kit"},(0,r.kt)("img",{src:"https://badgen.net/npm/types/react-query-kit",alt:"Types included",target:"\\_parent"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/react-query-kit"},(0,r.kt)("img",{src:"https://badgen.net/npm/license/react-query-kit",alt:"License",target:"\\_parent"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/react-query-kit"},(0,r.kt)("img",{src:"https://badgen.net/npm/dt/react-query-kit",alt:"Number of downloads",target:"\\_parent"})),(0,r.kt)("a",{href:"https://github.com/liaoliao666/react-query-kit"},(0,r.kt)("img",{src:"https://img.shields.io/github/stars/liaoliao666/react-query-kit.svg?style=social&label=Star",alt:"GitHub Stars",target:"\\_parent"})))),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f ",(0,r.kt)("inlineCode",{parentName:"li"},"queryKey")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"queryFn")," \u5f3a\u76f8\u5173"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u7c7b\u578b\u5b89\u5168\u7684\u65b9\u5f0f\u7ba1\u7406 ",(0,r.kt)("inlineCode",{parentName:"li"},"queryKey")),(0,r.kt)("li",{parentName:"ul"},"\u5feb\u901f\u751f\u6210\u81ea\u5b9a\u4e49 ReactQuery \u94a9\u5b50"),(0,r.kt)("li",{parentName:"ul"},"\u8ba9 ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient")," \u7684\u64cd\u4f5c\u66f4\u6e05\u695a\u5730\u5173\u8054\u5230\u54ea\u4e2a\u81ea\u5b9a\u4e49 ReactQuery \u94a9\u5b50"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u81ea\u5b9a\u4e49 ReactQuery \u94a9\u5b50\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u9879\u66f4\u5bb9\u6613\u548c\u66f4\u6e05\u6670")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.catbox.moe/9na7tp.gif",alt:"react-query-kit.gif"})),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#createquery"},"createQuery"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%A2%9D%E5%A4%96%E7%9A%84api%E6%96%87%E6%A1%A3"},"\u989d\u5916\u7684 API \u6587\u6863")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#createinfinitequery"},"createInfiniteQuery"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage-1"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%A2%9D%E5%A4%96%E7%9A%84api%E6%96%87%E6%A1%A3-1"},"\u989d\u5916\u7684 API \u6587\u6863")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#createmutation"},"createMutation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage-2"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%A2%9D%E5%A4%96%E7%9A%84api%E6%96%87%E6%A1%A3-2"},"\u989d\u5916\u7684 API \u6587\u6863")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#issues"},"Issues"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#-bugs"},"\ud83d\udc1b Bugs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#-feature-requests"},"\ud83d\udca1 Feature Requests")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#license"},"LICENSE"))))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i react-query-kit\n# or\n$ yarn add react-query-kit\n")),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/example-react-query-kit-basic-1ny2j8"},"Basic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/example-react-query-kit-optimistic-updates-eefg0v"},"Optimistic Updates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/example-react-query-kit-nextjs-uldl88"},"Next.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/example-react-query-kit-load-more-infinite-scroll-vg494v"},"Load-More & Infinite Scroll"))),(0,r.kt)("h2",{id:"createquery"},"createQuery"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryClient, dehydrate } from '@tanstack/react-query'\nimport { createQuery } from 'react-query-kit'\n\ntype Response = { title: string; content: string }\ntype Variables = { id: number }\n\nconst usePost = createQuery<Response, Variables, Error>({\n  primaryKey: '/posts',\n  queryFn: ({ queryKey: [primaryKey, variables] }) => {\n    // primaryKey \u76f8\u7b49\u4e8e '/posts'\n    return fetch(`${primaryKey}/${variables.id}`).then(res => res.json())\n  },\n  // \u5982\u679c\u4f60\u53ea\u60f3\u5728\u6ca1\u6709\u6570\u636e\u65f6\u8bf7\u6c42\uff0c\u53ef\u4ee5\u8fd9\u4e48\u8bbe\u7f6e\n  enabled: (data) => !data,\n  suspense: true\n})\n\n// \u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684\u8bed\u6cd5\u6765\u521b\u5efa\u81ea\u5b9a\u4e49hook\n// const usePost = createQuery<Response, Variables, Error>(\n//   '/posts',\n//   ({ queryKey: [primaryKey, variables] }) => {\n//     // primaryKey \u76f8\u7b49\u4e8e '/posts'\n//     return fetch(`${primaryKey}/${variables.id}`).then(res => res.json())\n//   },\n//   {\n//     // if u only wanna fetch once\n//     enabled: (data) => !data,\n//     suspense: true\n//   }\n// )\n\n\nconst variables = { id: 1 }\n\n// example\nexport default function Page() {\n  // queryKey \u76f8\u7b49\u4e8e ['/posts', { id: 1 }]\n  const { data } = usePost({ variables, suspense: true })\n\n  return (\n    <div>\n      <div>{data?.title}</div>\n      <div>{data?.content}</div>\n    </div>\n  )\n}\n\nconsole.log(usePost.getKey()) //  ['/posts']\nconsole.log(usePost.getKey(variables)) //  ['/posts', { id: 1 }]\n\n// nextjs \u4f8b\u5b50\nexport async function getStaticProps() {\n  const queryClient = new QueryClient()\n\n  await queryClient.prefetchQuery(usePost.getKey(variables), usePost.queryFn)\n\n  return {\n    props: {\n      dehydratedState: dehydrate(queryClient),\n    },\n  }\n}\n\n// \u5728 react \u7ec4\u4ef6\u5916\u4f7f\u7528\nconst data = await queryClient.fetchQuery(\n  usePost.getKey(variables),\n  usePost.queryFn\n)\n\n// useQueries \u4f8b\u5b50\nconst queries = useQueries({\n  queries: [\n    { queryKey: usePost.getKey(variables), queryFn: usePost.queryFn },\n    { queryKey: useProjects.getKey(), queryFn: useProjects.queryFn },\n  ],\n})\n\n// setQueryData\nqueryClient.setQueryData(usePost.getKey(variables), {...})\n")),(0,r.kt)("h3",{id:"\u989d\u5916\u7684-api-\u6587\u6863"},"\u989d\u5916\u7684 API \u6587\u6863"),(0,r.kt)("p",null,"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primaryKey: string"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u586b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primaryKey")," \u5c06\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"queryKey")," \u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled: boolean | ((data: TData) => boolean)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6b64\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," \u4ee5\u7981\u7528\u6b64\u67e5\u8be2\u81ea\u52a8\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e3a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u4f7f\u7528\u6700\u65b0\u6570\u636e\u6267\u884c\u4ee5\u8ba1\u7b97\u5e03\u5c14\u503c")))),(0,r.kt)("p",null,"Expose Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPrimaryKey: () => primaryKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getKey: (variables: TVariables) => [primaryKey, variables]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryFn: QueryFunction<TFnData, [primaryKey, TVariables]>"))),(0,r.kt)("p",null,"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setData: (updater: Updater<TData>, options?: SetDataOptions) => TData | undefined"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b83\u7684\u53c2\u6570\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient.setQueryData")," \u7c7b\u4f3c\uff0c\u4f46\u4e0d\u9700\u8981\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"queryKey"))))),(0,r.kt)("h2",{id:"createinfinitequery"},"createInfiniteQuery"),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { QueryClient, dehydrate } from "@tanstack/react-query";\nimport { createInfiniteQuery } from "react-query-kit";\n\ntype Data = { projects: { id: string; name: string }[]; nextCursor: number };\ntype Variables = { active: boolean };\n\nconst useProjects = createInfiniteQuery<Data, Variables, Error>({\n  primaryKey: "projects",\n  queryFn: ({ queryKey: [_primaryKey, variables], pageParam = 1 }) => {\n    return fetch(\n      `/projects?cursor=${pageParam}?active=${variables.active}`\n    ).then((res) => res.json());\n  },\n  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,\n});\n\nconst variables = { active: true };\n\n// example\nexport default function Page() {\n  // queryKey equals to [\'projects\', { active: true }]\n  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =\n    useProjects({ variables, suspense: true });\n\n  return (\n    <div>\n      {data.pages.map((group, i) => (\n        <React.Fragment key={i}>\n          {group.projects.map((project) => (\n            <p key={project.id}>{project.name}</p>\n          ))}\n        </React.Fragment>\n      ))}\n      <div>\n        <button\n          onClick={() => fetchNextPage()}\n          disabled={!hasNextPage || isFetchingNextPage}\n        >\n          {isFetchingNextPage\n            ? "Loading more..."\n            : hasNextPage\n            ? "Load More"\n            : "Nothing more to load"}\n        </button>\n      </div>\n      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>\n    </div>\n  );\n}\n\n// nextjs example\nexport async function getStaticProps() {\n  const queryClient = new QueryClient();\n\n  await queryClient.prefetchInfiniteQuery(\n    useProjects.getKey(variables),\n    useProjects.queryFn\n  );\n\n  return {\n    props: {\n      dehydratedState: dehydrate(queryClient),\n    },\n  };\n}\n\n// \u5728 react \u7ec4\u4ef6\u5916\u4f7f\u7528\nconst data = await queryClient.fetchInfiniteQuery(\n  useProjects.getKey(variables),\n  useProjects.queryFn\n);\n')),(0,r.kt)("h3",{id:"\u989d\u5916\u7684-api-\u6587\u6863-1"},"\u989d\u5916\u7684 API \u6587\u6863"),(0,r.kt)("p",null,"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primaryKey: string"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u586b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primaryKey")," \u5c06\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"queryKey")," \u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled: boolean | ((data: TData) => boolean)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6b64\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," \u4ee5\u7981\u7528\u6b64\u67e5\u8be2\u81ea\u52a8\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e3a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u4f7f\u7528\u6700\u65b0\u6570\u636e\u6267\u884c\u4ee5\u8ba1\u7b97\u5e03\u5c14\u503c")))),(0,r.kt)("p",null,"Expose Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPrimaryKey: () => primaryKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getKey: (variables: TVariables) => [primaryKey, variables]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryFn: QueryFunction<TFnData, [primaryKey, TVariables]>"))),(0,r.kt)("p",null,"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setData: (updater: Updater<TData>, options?: SetDataOptions) => TData | undefined"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b83\u7684\u53c2\u6570\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient.setQueryData")," \u7c7b\u4f3c\uff0c\u4f46\u4e0d\u9700\u8981\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"queryKey"))))),(0,r.kt)("h2",{id:"createmutation"},"createMutation"),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { createMutation } from "react-query-kit";\n\nconst useAddTodo = createMutation(\n  async (data: { title: string; content: string }) =>\n    fetch("/post", {\n      method: "POST",\n      headers: {\n        Accept: "application/json",\n        "Content-Type": "application/json",\n      },\n      body: JSON.stringify(data),\n    }).then((res) => res.json()),\n  {\n    onSuccess(data, variables, context) {\n      // do somethings\n    },\n  }\n);\n\nfunction App() {\n  const mutation = useAddTodo({\n    onSettled: (data, error, variables, context) => {\n      // Error or success... doesn\'t matter!\n    },\n  });\n\n  return (\n    <div>\n      {mutation.isLoading ? (\n        "Adding todo..."\n      ) : (\n        <>\n          {mutation.isError ? (\n            <div>An error occurred: {mutation.error.message}</div>\n          ) : null}\n\n          {mutation.isSuccess ? <div>Todo added!</div> : null}\n\n          <button\n            onClick={() => {\n              mutation.mutate({ title: "Do Laundry", content: "content..." });\n            }}\n          >\n            Create Todo\n          </button>\n        </>\n      )}\n    </div>\n  );\n}\n\n// usage outside of react component\nuseAddTodo.mutationFn({ title: "Do Laundry", content: "content..." });\n')),(0,r.kt)("h3",{id:"\u989d\u5916\u7684-api-\u6587\u6863-2"},"\u989d\u5916\u7684 API \u6587\u6863"),(0,r.kt)("p",null,"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getKey: () => MutationKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mutationFn: MutationFunction<TData, TVariables>"))),(0,r.kt)("h2",{id:"issues"},"Issues"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Looking to contribute? Look for the ","[Good First Issue][good-first-issue]","\nlabel.")),(0,r.kt)("h3",{id:"-bugs"},"\ud83d\udc1b Bugs"),(0,r.kt)("p",null,"\u8bf7\u9488\u5bf9\u9519\u8bef\u3001\u7f3a\u5c11\u6587\u6863\u6216\u610f\u5916\u884c\u4e3a\u63d0\u51fa\u95ee\u9898\u3002"),(0,r.kt)("p",null,"[",(0,r.kt)("strong",{parentName:"p"},"See Bugs"),"][bugs]"),(0,r.kt)("h3",{id:"-feature-requests"},"\ud83d\udca1 Feature Requests"),(0,r.kt)("p",null,"\u8bf7\u63d0\u4ea4\u95ee\u9898\u4ee5\u5efa\u8bae\u65b0\u529f\u80fd\u3002 \u901a\u8fc7\u6dfb\u52a0\u5bf9\u529f\u80fd\u8bf7\u6c42\u8fdb\u884c\u6295\u7968\n\u4e00\u4e2a \ud83d\udc4d\u3002 \u8fd9\u6709\u52a9\u4e8e\u7ef4\u62a4\u4eba\u5458\u4f18\u5148\u5904\u7406\u8981\u5904\u7406\u7684\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"[",(0,r.kt)("strong",{parentName:"p"},"See Feature Requests"),"][requests]"),(0,r.kt)("h2",{id:"license"},"LICENSE"),(0,r.kt)("p",null,"MIT"))}c.isMDXComponent=!0}}]);