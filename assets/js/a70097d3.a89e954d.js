"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5242],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),y=i,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={id:"query-invalidation",title:"\u67e5\u8be2\u5931\u6548 query-invalidation"},l=void 0,s={unversionedId:"guides&concepts/query-invalidation",id:"guides&concepts/query-invalidation",title:"\u67e5\u8be2\u5931\u6548 query-invalidation",description:"\u5728\u518d\u6b21\u83b7\u53d6\u6570\u636e\u67e5\u8be2\u4e4b\u524d\uff0c\u7b49\u5f85\u67e5\u8be2\u53d8\u5f97\u8fc7\u65f6\u5e76\u4e0d\u603b\u662f\u53ef\u884c\u7684\u3002",source:"@site/docs/guides&concepts/query-invalidation.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-invalidation",permalink:"/react-query-web-i18n/guides&concepts/query-invalidation",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/query-invalidation.md",tags:[],version:"current",lastUpdatedAt:1643295702,formattedLastUpdatedAt:"1/27/2022",frontMatter:{id:"query-invalidation",title:"\u67e5\u8be2\u5931\u6548 query-invalidation"},sidebar:"zhCN",previous:{title:"\u4fee\u6539 mutations",permalink:"/react-query-web-i18n/guides&concepts/mutations"},next:{title:"\u4fee\u6539\u5bfc\u81f4\u7684\u5931\u6548 invalidation-from-mutations",permalink:"/react-query-web-i18n/guides&concepts/invalidation-from-mutations"}},p=[{value:"\u67e5\u8be2\u7684\u5339\u914d",id:"\u67e5\u8be2\u7684\u5339\u914d",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u518d\u6b21\u83b7\u53d6\u6570\u636e\u67e5\u8be2\u4e4b\u524d\uff0c\u7b49\u5f85\u67e5\u8be2\u53d8\u5f97\u8fc7\u65f6\u5e76\u4e0d\u603b\u662f\u53ef\u884c\u7684\u3002\n\u7279\u522b\u662f\u5f53\u60a8\u77e5\u9053\u7531\u4e8e\u7528\u6237\u6240\u505a\u7684\u67d0\u4e9b\u4e8b\u60c5\uff0c\u67e5\u8be2\u7684\u6570\u636e\u5df2\u7ecf\u8fc7\u671f\u65f6\u3002\n\u4e3a\u6b64\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient")," \u5305\u542b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u667a\u80fd\u5730\u5c06\u67e5\u8be2\u6807\u8bb0\u4e3a\u8fc7\u65f6\u7684\uff0c\u5e76\u4f7f\u4e4b\u53ef\u7528\u91cd\u65b0\u83b7\u53d6\u6570\u636e\uff01"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u4f7f\u7f13\u5b58\u4e2d\u7684\u6bcf\u4e2a\u67e5\u8be2\u90fd\u65e0\u6548\nqueryClient.invalidateQueries();\n// \u65e0\u6548\u6bcf\u4e2a\u67e5\u8be2\u952e\u503c\u4ee5 `todos` \u5f00\u5934\u7684\u67e5\u8be2\nqueryClient.invalidateQueries("todos");\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u5176\u4ed6\u4f7f\u7528\u5f52\u4e00\u5316\u7f13\u5b58\u7684\u5e93\u8bd5\u56fe\u5f3a\u5236\u6027\u5730\uff0c\u6216\u901a\u8fc7\u6a21\u5f0f\u63a8\u65ad\u6765\u4f7f\u7528\u65b0\u6570\u636e\u66f4\u65b0\u672c\u5730\u67e5\u8be2\u7684\u60c5\u51b5\u4e0b\uff0c\nReact Query \u4e3a\u60a8\u63d0\u4f9b\u4e86\u907f\u514d\u7ef4\u62a4\u5f52\u4e00\u5316\u7f13\u5b58\u6240\u9700\u8981\u7684\u4eba\u5de5\u64cd\u4f5c\u7684\u5de5\u5177\uff0c\u4f7f\u5f97",(0,o.kt)("strong",{parentName:"p"},"\u5931\u6548\u5177\u6709\u9488\u5bf9\u6027"),"\uff0c\u53ef\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6"),"\u5e76\u6700\u7ec8\u8fdb\u884c",(0,o.kt)("strong",{parentName:"p"},"\u539f\u5b50\u7ea7\u66f4\u65b0"),"\u3002")),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u4f7f\u67e5\u8be2\u65e0\u6548\u65f6\uff0c\u4f1a\u53d1\u751f\u4e24\u4ef6\u4e8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u88ab\u6807\u8bb0\u4e3a\u8fc7\u65f6\u7684\u3002\u6b64\u8fc7\u65f6\u72b6\u6001\u5c06\u8986\u76d6 ",(0,o.kt)("inlineCode",{parentName:"li"},"useQuery")," \u6216\u76f8\u5173 hook \u4e2d\u4f7f\u7528\u7684\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"staleTime")," \u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u6b63\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"useQuery")," \u6216\u76f8\u5173 hook \u6e32\u67d3\uff0c\u5219\u8be5\u67e5\u8be2\u4e5f\u4f1a\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e")),(0,o.kt)("h2",{id:"\u67e5\u8be2\u7684\u5339\u914d"},"\u67e5\u8be2\u7684\u5339\u914d"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528\u50cf ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"removeQueries")," \u4e4b\u7c7b\u7684 API\uff08\u4ee5\u53ca\u5176\u4ed6\u652f\u6301\u90e8\u5206\u67e5\u8be2\u5339\u914d\u7684 API\uff09\u65f6\uff0c\u60a8\u53ef\u4ee5\u6309\u5176\u524d\u7f00\u5339\u914d\u591a\u4e2a\u67e5\u8be2\uff0c\u6216\u8005\u901a\u8fc7\u914d\u7f6e\u83b7\u5f97\u7279\u5b9a\u7684\u67e5\u8be2\u3002\n\u6709\u5173\u53ef\u4ee5\u4f7f\u7528\u7684\u7528\u4e8e\u8fc7\u6ee4\u5339\u914d\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"./filters#%E6%9F%A5%E8%AF%A2%E8%BF%87%E6%BB%A4%E5%99%A8"},"\u67e5\u8be2\u8fc7\u6ee4\u5668"),"\u3002"),(0,o.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," \u524d\u7f00\u4f7f\u5728\u5176\u67e5\u8be2\u952e\u503c\u4e2d\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," \u5f00\u5934\u7684\u6240\u6709\u67e5\u8be2\u65e0\u6548\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { useQuery, useQueryClient } from "react-query";\n\n// \u4ece\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6 QueryClient\nconst queryClient = useQueryClient();\n\nqueryClient.invalidateQueries("todos");\n\n// \u4e0b\u9762\u7684\u4e24\u4e2a\u67e5\u8be2\u90fd\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery("todos", fetchTodoList);\nconst todoListQuery = useQuery(["todos", { page: 1 }], fetchTodoList);\n')),(0,o.kt)("p",null,"\u60a8\u751a\u81f3\u53ef\u4ee5\u901a\u8fc7\u5c06\u66f4\u7279\u5b9a\u7684\u952e\u503c\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\u6765\u4f7f\u5177\u6709\u7279\u5b9a\u53d8\u91cf\u7684\u67e5\u8be2\u65e0\u6548\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'queryClient.invalidateQueries(["todos", { type: "done" }]);\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery(["todos", { type: "done" }], fetchTodoList);\n\n// \u8be5\u67e5\u8be2\u4e0d\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery("todos", fetchTodoList);\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," API \u975e\u5e38\u7075\u6d3b\uff0c\u56e0\u6b64\uff0c\u5373\u4f7f\u60a8",(0,o.kt)("em",{parentName:"p"},"\u53ea\u60f3"),"\u4f7f\u4e0d\u518d\u5177\u6709\u4efb\u4f55\u53d8\u91cf\u6216\u5b50\u952e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," \u67e5\u8be2\u65e0\u6548\uff0c\n\u4e5f\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"exact: true")," \u9009\u9879\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'queryClient.invalidateQueries("todos", { exact: true });\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery(["todos"], fetchTodoList);\n\n// \u8be5\u67e5\u8be2\u4e0d\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery(["todos", { type: "done" }], fetchTodoList);\n')),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u53d1\u73b0\u81ea\u5df1\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u7ec6\u7684\u7c92\u5ea6"),"\uff0c\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate")," \u51fd\u6570\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," \u65b9\u6cd5\u3002\n\u6b64\u51fd\u6570\u5c06\u4ece\u67e5\u8be2\u7f13\u5b58\u4e2d\u63a5\u6536\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," \u5b9e\u4f8b\uff0c\u5e76\u5141\u8bb8\u60a8\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," \u6765\u786e\u5b9a\u662f\u5426\u8981\u4f7f\u8be5\u67e5\u8be2\u65e0\u6548\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'queryClient.invalidateQueries({\n  predicate: (query) =>\n    query.queryKey[0] === "todos" && query.queryKey[1]?.version >= 10,\n});\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery(["todos", { version: 20 }], fetchTodoList);\n\n// \u8be5\u67e5\u8be2\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery(["todos", { version: 10 }], fetchTodoList);\n\n// \u8be5\u67e5\u8be2\u4e0d\u4f1a\u88ab\u65e0\u6548\nconst todoListQuery = useQuery(["todos", { version: 5 }], fetchTodoList);\n')))}d.isMDXComponent=!0}}]);