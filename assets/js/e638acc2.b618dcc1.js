"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9239],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(t),y=i,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=y;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[d]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={id:"query-invalidation",title:"\u4e3b\u52a8\u67e5\u8be2\u5931\u6548 Query Invalidation"},a=void 0,u={unversionedId:"guides&concepts/query-invalidation",id:"guides&concepts/query-invalidation",title:"\u4e3b\u52a8\u67e5\u8be2\u5931\u6548 Query Invalidation",description:"\u5728\u518d\u6b21\u83b7\u53d6\u6570\u636e\u67e5\u8be2\u4e4b\u524d\uff0c\u88ab\u52a8\u7684\u53bb\u7b49\u5f85\u67e5\u8be2\u53d8\u5f97\u8fc7\u65f6\u5e76\u4e0d\u603b\u662f\u53ef\u884c\u7684\u3002",source:"@site/vue/guides&concepts/query-invalidation.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-invalidation",permalink:"/react-query-web-i18n/vue/guides&concepts/query-invalidation",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/guides&concepts/query-invalidation.md",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"query-invalidation",title:"\u4e3b\u52a8\u67e5\u8be2\u5931\u6548 Query Invalidation"},sidebar:"zhCN",previous:{title:"\u4fee\u6539 Mutations",permalink:"/react-query-web-i18n/vue/guides&concepts/mutations"},next:{title:"\u4fee\u6539\u5bfc\u81f4\u7684\u5931\u6548 Invalidation From Mutations",permalink:"/react-query-web-i18n/vue/guides&concepts/invalidation-from-mutations"}},l={},s=[{value:"\u67e5\u8be2\u7684\u5339\u914d",id:"\u67e5\u8be2\u7684\u5339\u914d",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u518d\u6b21\u83b7\u53d6\u6570\u636e\u67e5\u8be2\u4e4b\u524d\uff0c\u88ab\u52a8\u7684\u53bb\u7b49\u5f85\u67e5\u8be2\u53d8\u5f97\u8fc7\u65f6\u5e76\u4e0d\u603b\u662f\u53ef\u884c\u7684\u3002\n\u5c24\u5176\u662f\u5728\u67e5\u8be2\u7684\u6570\u636e\u5df2\u7ecf\u56e0\u4e3a\u7528\u6237\u6240\u505a\u7684\u67d0\u4e9b\u4e8b\u60c5\u800c\u8fc7\u65f6\u7684\u60c5\u51b5\u4e0b\u3002\n\u4e3a\u6b64\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," \u5305\u542b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u667a\u80fd\u5730\u5c06\u67e5\u8be2\u6807\u8bb0\u4e3a\u8fc7\u65f6\u7684\uff0c\u5e76\u4f7f\u4e4b\u53ef\u7528\u91cd\u65b0\u83b7\u53d6\u6570\u636e\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// \u4f7f\u7f13\u5b58\u4e2d\u7684\u6bcf\u4e2a\u67e5\u8be2\u90fd\u65e0\u6548\nqueryClient.invalidateQueries();\n// \u65e0\u6548\u4ee5 `todos` \u5f00\u5934\u7684\u952e\u503c\u7684\u67e5\u8be2\nqueryClient.invalidateQueries({ queryKey: ["todos"] });\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u5176\u4ed6\u4f7f\u7528\u5f52\u4e00\u5316\u7f13\u5b58\u7684\u5e93\u8bd5\u56fe\u901a\u8fc7\u5f3a\u5236\u624b\u6bb5\u6216\u6a21\u5f0f\u63a8\u65ad\u6765\u66f4\u65b0\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\nVue Query \u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e00\u5957\u5de5\u5177\uff0c\u6765\u907f\u514d\u7ef4\u62a4\u5f52\u4e00\u5316\u7f13\u5b58\u6240\u9700\u8981\u7684\u624b\u5de5\u64cd\u4f5c\u3002\n\u8fd9\u5957\u5de5\u5177\u4f7f\u5f97",(0,i.kt)("strong",{parentName:"p"},"\u5931\u6548\u5177\u6709\u9488\u5bf9\u6027"),"\uff0c\u53ef\u4ee5",(0,i.kt)("strong",{parentName:"p"},"\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6"),"\u5e76\u6700\u7ec8\u8fdb\u884c",(0,i.kt)("strong",{parentName:"p"},"\u539f\u5b50\u7ea7\u66f4\u65b0"),"\u3002")),(0,i.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u4f7f\u67e5\u8be2\u65e0\u6548\u65f6\uff0c\u4f1a\u53d1\u751f\u4e24\u4ef6\u4e8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u88ab\u6807\u8bb0\u4e3a\u8fc7\u65f6\u7684\u3002\u6b64\u8fc7\u65f6\u72b6\u6001\u5c06\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"li"},"useQuery")," \u6216\u76f8\u5173 hook \u4e2d\u4f7f\u7528\u7684\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"staleTime")," \u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u6b63\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"useQuery")," \u6216\u76f8\u5173 hook \u6e32\u67d3\uff0c\u5219\u8be5\u67e5\u8be2\u4e5f\u4f1a\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e")),(0,i.kt)("h2",{id:"\u67e5\u8be2\u7684\u5339\u914d"},"\u67e5\u8be2\u7684\u5339\u914d"),(0,i.kt)("p",null,"\u5f53\u4f7f\u7528\u50cf ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"removeQueries")," \u4e4b\u7c7b\u7684 API\uff08\u4ee5\u53ca\u5176\u4ed6\u652f\u6301\u90e8\u5206\u67e5\u8be2\u5339\u914d\u7684 API\uff09\u65f6\uff0c\u4f60\u53ef\u4ee5\u6309\u5176\u524d\u7f00\u5339\u914d\u591a\u4e2a\u67e5\u8be2\uff0c\u6216\u8005\u901a\u8fc7\u914d\u7f6e\u83b7\u5f97\u7279\u5b9a\u7684\u67e5\u8be2\u3002\n\u6709\u5173\u53ef\u4ee5\u4f7f\u7528\u7684\u7528\u4e8e\u8fc7\u6ee4\u5339\u914d\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"./filters#%E6%9F%A5%E8%AF%A2%E8%BF%87%E6%BB%A4%E5%99%A8"},"\u67e5\u8be2\u8fc7\u6ee4\u5668"),"\u3002"),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"todos")," \u524d\u7f00\u8ba9\u6240\u6709\u67e5\u8be2\u952e\u503c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"todos")," \u5f00\u5934\u7684\u67e5\u8be2\u65e0\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useQuery, useQueryClient } from "@tanstack/vue-query";\n\n// \u4ece\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6 QueryClient\nconst queryClient = useQueryClient();\n\nqueryClient.invalidateQueries({ queryKey: ["todos"] });\n\n// \u4e0b\u9762\u7684\u4e24\u4e2a\u67e5\u8be2\u90fd\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos"],\n  queryFn: fetchTodoList,\n});\nconst todoListQuery = useQuery({\n  queryKey: ["todos", { page: 1 }],\n  queryFn: fetchTodoList,\n});\n')),(0,i.kt)("p",null,"\u4f60\u751a\u81f3\u53ef\u4ee5\u901a\u8fc7\u5c06\u66f4\u7279\u5b9a\u7684\u952e\u503c\u4f20\u9012\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\u6765\u4f7f\u5177\u6709\u7279\u5b9a\u53d8\u91cf\u7684\u67e5\u8be2\u65e0\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'queryClient.invalidateQueries({\n  queryKey: ["todos", { type: "done" }],\n});\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos", { type: "done" }],\n  queryFn: fetchTodoList,\n});\n\n// \u8be5\u67e5\u8be2\u4e0d\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos"],\n  queryFn: fetchTodoList,\n});\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," API \u975e\u5e38\u7075\u6d3b\uff0c\u6240\u4ee5\u5373\u4f7f\u4f60",(0,i.kt)("em",{parentName:"p"},"\u53ea\u60f3"),"\u65e0\u6548\u90a3\u4e9b\u4e0d\u518d\u5177\u6709\u4efb\u4f55\u53d8\u91cf\u6216\u5b50\u952e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"todos")," \u67e5\u8be2\uff0c\n\u4e5f\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"exact: true")," \u9009\u9879\u4f20\u9012\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'queryClient.invalidateQueries({\n  queryKey: ["todos"],\n  exact: true,\n});\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos"],\n  queryFn: fetchTodoList,\n});\n\n// \u8be5\u67e5\u8be2\u4e0d\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos", { type: "done" }],\n  queryFn: fetchTodoList,\n});\n')),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u53d1\u73b0\u81ea\u5df1\u9700\u8981",(0,i.kt)("strong",{parentName:"p"},"\u66f4\u7ec6\u7684\u7c92\u5ea6"),"\uff0c\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate")," \u51fd\u6570\u4f20\u9012\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\u3002\n\u6b64\u51fd\u6570\u5c06\u4ece\u67e5\u8be2\u7f13\u5b58\u4e2d\u63a5\u6536\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," \u5b9e\u4f8b\uff0c\u5e76\u5141\u8bb8\u4f60\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," \u6765\u786e\u5b9a\u662f\u5426\u4f7f\u8be5\u67e5\u8be2\u65e0\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'queryClient.invalidateQueries({\n  predicate: (query) =>\n    query.queryKey[0] === "todos" && query.queryKey[1]?.version >= 10,\n});\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos", { version: 20 }],\n  queryFn: fetchTodoList,\n});\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos", { version: 10 }],\n  queryFn: fetchTodoList,\n});\n\n// \u5f53\u7136\uff0c\u8be5\u67e5\u8be2\u4e0d\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery({\n  queryKey: ["todos", { version: 5 }],\n  queryFn: fetchTodoList,\n});\n')))}d.isMDXComponent=!0}}]);