"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||c;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const c={id:"graphql",title:"GraphQL"},o=void 0,i={unversionedId:"getstarted/graphql",id:"getstarted/graphql",title:"GraphQL",description:"\u7531\u4e8e React Query \u7684\u83b7\u53d6\u673a\u5236\u4e0d\u53ef\u77e5\u5730\u5efa\u7acb\u5728 Promises \u4e0a\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06 React Query \u4e0e\u5b57\u9762\u4e0a\u7684\u4efb\u4f55\u5f02\u6b65\u6570\u636e\u83b7\u53d6\u5ba2\u6237\u7aef\uff08\u5305\u62ec GraphQL\uff09\u4e00\u8d77\u4f7f\u7528\uff01",source:"@site/v3-react/getstarted/graphql.md",sourceDirName:"getstarted",slug:"/getstarted/graphql",permalink:"/react-query-web-i18n/v3-react/getstarted/graphql",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/v3-react/getstarted/graphql.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"graphql",title:"GraphQL"},sidebar:"default",previous:{title:"TypeScript",permalink:"/react-query-web-i18n/v3-react/getstarted/typescript"},next:{title:"React Native",permalink:"/react-query-web-i18n/v3-react/getstarted/react-native"}},l={},p=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u7531\u4e8e React Query \u7684\u83b7\u53d6\u673a\u5236\u4e0d\u53ef\u77e5\u5730\u5efa\u7acb\u5728 Promises \u4e0a\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06 React Query \u4e0e\u5b57\u9762\u4e0a\u7684\u4efb\u4f55\u5f02\u6b65\u6570\u636e\u83b7\u53d6\u5ba2\u6237\u7aef\uff08\u5305\u62ec GraphQL\uff09\u4e00\u8d77\u4f7f\u7528\uff01"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8bf7\u8bb0\u4f4f\uff0cReact Query \u4e0d\u652f\u6301\u5f52\u4e00\u5316\u7f13\u5b58\u3002 \u5c3d\u7ba1\u7edd\u5927\u591a\u6570\u7528\u6237\u5b9e\u9645\u4e0a\u5e76\u4e0d\u9700\u8981\u5f52\u4e00\u5316\u7f13\u5b58\uff0c\u751a\u81f3\u6ca1\u6709\u50cf\u4ed6\u4eec\u8ba4\u4e3a\u7684\u90a3\u6837\u53d7\u76ca\uff0c\u4f46\u662f\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\u53ef\u80fd\u9700\u8981\u8fd9\u6837\u505a\uff0c\u56e0\u6b64\u8bf7\u52a1\u5fc5\u5148\u4e0e\u6211\u4eec\u8054\u7cfb\u3002 \u4ee5\u786e\u4fdd\u5b83\u662f\u4f60\u6240\u9700\u8981\u7684\u771f\u6b63\u7684\u4e1c\u897f\uff01")),(0,n.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/docs/examples/basic-graphql-request"},"basic-graphql-request")," (\u201c\u57fa\u672c\u201d\u793a\u4f8b\uff0c\u4f46\u4f7f\u7528\u4e86 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-request"},(0,n.kt)("inlineCode",{parentName:"a"},"graphql-request")),")")))}s.isMDXComponent=!0}}]);