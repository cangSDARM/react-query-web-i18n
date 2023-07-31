"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={id:"graphql",title:"GraphQL"},o=void 0,p={unversionedId:"getstarted/graphql",id:"getstarted/graphql",title:"GraphQL",description:"\u7531\u4e8e React Query \u7684\u83b7\u53d6\u673a\u5236\u4e0d\u53ef\u77e5\u5730(agnostically)\u5efa\u7acb\u5728 Promises \u4e0a\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06 React Query \u4e0e\u5b57\u9762\u4e0a\u7684\u4efb\u4f55\u5f02\u6b65\u6570\u636e\u83b7\u53d6\u5ba2\u6237\u7aef\uff08\u5305\u62ec GraphQL\uff09\u4e00\u8d77\u4f7f\u7528\uff01",source:"@site/react/getstarted/graphql.md",sourceDirName:"getstarted",slug:"/getstarted/graphql",permalink:"/react-query-web-i18n/react/getstarted/graphql",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/getstarted/graphql.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"graphql",title:"GraphQL"},sidebar:"zhCN",previous:{title:"TypeScript",permalink:"/react-query-web-i18n/react/getstarted/typescript"},next:{title:"React Native",permalink:"/react-query-web-i18n/react/getstarted/react-native"}},i={},c=[{value:"\u7c7b\u578b\u5b89\u5168\u7684\u4ee3\u7801\u751f\u6210",id:"\u7c7b\u578b\u5b89\u5168\u7684\u4ee3\u7801\u751f\u6210",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7531\u4e8e React Query \u7684\u83b7\u53d6\u673a\u5236\u4e0d\u53ef\u77e5\u5730(agnostically)\u5efa\u7acb\u5728 Promises \u4e0a\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06 React Query \u4e0e\u5b57\u9762\u4e0a\u7684\u4efb\u4f55\u5f02\u6b65\u6570\u636e\u83b7\u53d6\u5ba2\u6237\u7aef\uff08\u5305\u62ec GraphQL\uff09\u4e00\u8d77\u4f7f\u7528\uff01"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u8bb0\u4f4f\uff0cReact Query \u4e0d\u652f\u6301\u5f52\u4e00\u5316\u7f13\u5b58\u3002 \u5c3d\u7ba1\u7edd\u5927\u591a\u6570\u7528\u6237\u5b9e\u9645\u4e0a\u5e76\u4e0d\u9700\u8981\u5f52\u4e00\u5316\u7f13\u5b58\uff0c\u751a\u81f3\u6ca1\u6709\u50cf\u4ed6\u4eec\u8ba4\u4e3a\u7684\u90a3\u6837\u53d7\u76ca\uff0c\u4f46\u662f\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\u53ef\u80fd\u9700\u8981\u8fd9\u6837\u505a\uff0c\u56e0\u6b64\u8bf7\u52a1\u5fc5\u5148\u4e0e\u6211\u4eec\u8054\u7cfb\u3002 \u4ee5\u786e\u4fdd\u5b83\u662f\u4f60\u6240\u9700\u8981\u7684\u771f\u6b63\u7684\u4e1c\u897f\uff01")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u5b89\u5168\u7684\u4ee3\u7801\u751f\u6210"},"\u7c7b\u578b\u5b89\u5168\u7684\u4ee3\u7801\u751f\u6210"),(0,a.kt)("p",null,"React Query \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-request^5"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://graphql-code-generator.com/"},"GraphQL Code Generator")," \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u63d0\u4f9b\u5168\u91cf\u7684\u7c7b\u578b\u5b89\u5168\u7684 GraphQL \u64cd\u4f5c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import request from "graphql-request";\nimport { useQuery } from "@tanstack/react-query";\n\nimport { graphql } from "./gql/gql";\n\nconst allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `\n  query allFilmsWithVariablesQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n  }\n`);\n\nfunction App() {\n  // `data` is fully typed!\n  const { data } = useQuery({\n    queryKey: ["films"],\n    queryFn: async () =>\n      request(\n        "https://swapi-graphql.netlify.app/.netlify/functions/index",\n        allFilmsWithVariablesQueryDocument,\n        // variables are type-checked too!\n        { first: 10 }\n      ),\n  });\n  // ...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4f8b\u5b50\u7684",(0,a.kt)("a",{parentName:"em",href:"https://github.com/dotansimha/graphql-code-generator/tree/7c25c4eeb77f88677fd79da557b7b5326e3f3950/examples/front-end/react/tanstack-react-query"},"\u5168\u91cf\u4ee3\u7801(\u4ed3\u5e93)"))),(0,a.kt)("p",null,"\u6709\u5173 GraphQL \u7c7b\u578b\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://www.the-guild.dev/graphql/codegen/docs/guides/react-vue"},"\u5173\u4e8e GraphQL \u4ee3\u7801\u751f\u6210\u5668\u6587\u6863\u7684\u4e13\u7528\u6307\u5357")))}d.isMDXComponent=!0}}]);