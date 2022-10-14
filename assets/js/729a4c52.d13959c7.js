"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[4661],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>g});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function u(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=n.createContext({}),m=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},k=function(t){var a=m(t.components);return n.createElement(i.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),N=m(e),g=l,o=N["".concat(i,".").concat(g)]||N[g]||d[g]||r;return e?n.createElement(o,p(p({ref:a},k),{},{components:e})):n.createElement(o,p({ref:a},k))}));function g(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,p=new Array(r);p[0]=N;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,p[1]=u;for(var m=2;m<r;m++)p[m]=e[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},9979:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>m});var n=e(7462),l=(e(7294),e(3905));const r={id:"comparison",title:"\u6bd4\u8f83 | React Query vs SWR vs Apollo vs RTK Query vs React Router"},p=void 0,u={unversionedId:"getstarted/comparison",id:"version-v3/getstarted/comparison",title:"\u6bd4\u8f83 | React Query vs SWR vs Apollo vs RTK Query vs React Router",description:"\u8be5\u6bd4\u8f83\u8868\u529b\u6c42\u5c3d\u53ef\u80fd\u51c6\u786e\u548c\u516c\u6b63\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u8fd9\u4e9b\u5e93\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff0c\u5e76\u4e14\u8ba4\u4e3a\u4fe1\u606f\u53ef\u4ee5\u5f97\u5230\u6539\u5584\uff0c\u8bf7\u968f\u65f6\u4f7f\u7528\u6b64\u94fe\u63a5\u6765\u63d0\u4ea4\u66f4\u6539\uff08\u5e26\u6709\u6ce8\u91ca\u6216\u58f0\u660e\u7684\u8bc1\u636e\uff09",source:"@site/versioned_docs/version-v3/getstarted/comparison.md",sourceDirName:"getstarted",slug:"/getstarted/comparison",permalink:"/react-query-web-i18n/v3/getstarted/comparison",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/getstarted/comparison.md",tags:[],version:"v3",lastUpdatedAt:1665718507,formattedLastUpdatedAt:"10/14/2022",frontMatter:{id:"comparison",title:"\u6bd4\u8f83 | React Query vs SWR vs Apollo vs RTK Query vs React Router"},sidebar:"zhCN",previous:{title:"\u89c6\u9891\u6559\u7a0b",permalink:"/react-query-web-i18n/v3/getstarted/videos"},next:{title:"TypeScript",permalink:"/react-query-web-i18n/v3/getstarted/typescript"}},i={},m=[{value:"Notes",id:"notes",level:3}],k={toc:m};function d(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8be5\u6bd4\u8f83\u8868\u529b\u6c42\u5c3d\u53ef\u80fd\u51c6\u786e\u548c\u516c\u6b63\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u8fd9\u4e9b\u5e93\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff0c\u5e76\u4e14\u8ba4\u4e3a\u4fe1\u606f\u53ef\u4ee5\u5f97\u5230\u6539\u5584\uff0c\u8bf7\u968f\u65f6\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query/edit/master/docs/src/pages/comparison.md"},"\u6b64\u94fe\u63a5"),"\u6765\u63d0\u4ea4\u66f4\u6539\uff08\u5e26\u6709\u6ce8\u91ca\u6216\u58f0\u660e\u7684\u8bc1\u636e\uff09")),(0,l.kt)("p",null,"\u7279\u6027/\u529f\u80fd\u7684\u7b49\u7ea7:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \u4e00\u7ea7(1st-class)\uff0c\u5185\u7f6e\uff0c\u65e0\u9700\u6dfb\u52a0\u4efb\u4f55\u914d\u7f6e\u6216\u4ee3\u7801\u5373\u53ef\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udfe1 \u53d7\u652f\u6301\uff0c\u4f46\u4f5c\u4e3a\u975e\u5b98\u65b9\u7684\u7b2c\u4e09\u65b9\u6216\u793e\u533a\u7ec4\u4ef6/\u8d21\u732e"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udd36 \u53d7\u652f\u6301\u548c\u8bb0\u5f55\uff0c\u4f46\u9700\u8981\u989d\u5916\u7684\u7528\u6237\u4ee3\u7801\u624d\u80fd\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\uded1 \u6ca1\u6709\u5b98\u65b9\u652f\u6301\u6216\u6587\u6863\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"React Query"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://github.com/vercel/swr"},"SWR")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://github.com/apollographql/apollo-client"},"Apollo Client")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://redux-toolkit.js.org/rtk-query/overview"},"RTK-Query")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://github.com/remix-run/react-router"},"React Router")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Github Repo / Stars"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tannerlinsley/react-query"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/tannerlinsley/react-query?label=%F0%9F%8C%9F",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/swr"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/vercel/swr?label=%F0%9F%8C%9F",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apollographql/apollo-client"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/apollographql/apollo-client?label=%F0%9F%8C%9F",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/reduxjs/redux-toolkit"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/reduxjs/redux-toolkit?label=%F0%9F%8C%9F",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/remix-run/react-router"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/remix-run/react-router?label=%F0%9F%8C%9F",alt:null})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u8981\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},"React"),(0,l.kt)("td",{parentName:"tr",align:null},"React"),(0,l.kt)("td",{parentName:"tr",align:null},"React, GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Redux"),(0,l.kt)("td",{parentName:"tr",align:null},"React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed6\u4eec\u7684\u6bd4\u8f83"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://redux-toolkit.js.org/rtk-query/comparison"},"Comparison")),(0,l.kt)("td",{parentName:"tr",align:null},"(none)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u7684\u67e5\u8be2\u8bed\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise, REST, GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise, REST, GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise, REST, GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise, REST, GraphQL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u7684\u6846\u67b6"),(0,l.kt)("td",{parentName:"tr",align:null},"React"),(0,l.kt)("td",{parentName:"tr",align:null},"React"),(0,l.kt)("td",{parentName:"tr",align:null},"React + Others"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u7b56\u7565"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u5c42\u7684 Key -> Value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u7684 Key -> Value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f52\u4e00\u5316\u7684\u7ed3\u6784"),(0,l.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u7684 Key -> Value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5d4c\u5957\u7684\u8def\u7531 -> value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key \u7684\u7b56\u7565"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL Query"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"Route Path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u53d8\u66f4\u68c0\u6d4b\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6df1\u5ea6\u6bd4\u8f83 (\u7a33\u5b9a\u7684\u5e8f\u5217\u5316)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d45\u6bd4\u8f83"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6df1\u5ea6\u6bd4\u8f83 (\u4e0d\u7a33\u5b9a\u7684\u5e8f\u5217\u5316)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u76f8\u7b49 (===)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u53d8\u66f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u53d8\u66f4\u68c0\u6d4b\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6df1\u5ea6\u6bd4\u8f83 + \u7ed3\u6784\u5316\u5171\u4eab"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6df1\u6bd4\u8f83(\u5373",(0,l.kt)("inlineCode",{parentName:"td"},"dequal"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6df1\u5ea6\u6bd4\u8f83 (\u4e0d\u7a33\u5b9a\u7684\u5e8f\u5217\u5316)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u76f8\u7b49 (===)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a0b\u5e8f\u52a0\u8f7d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7f13\u5b58(memo)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u91cf\u7684\u7ed3\u6784\u5316\u5171\u4eab"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u81f4\u6027(===)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f52\u4e00\u5316\u7684\u4e00\u81f4\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u81f4\u6027(===)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u81f4\u6027(===)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6253\u5305\u540e\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=react-query"},(0,l.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/react-query?label=%F0%9F%92%BE",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=swr"},(0,l.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/swr?label=%F0%9F%92%BE",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=@apollo/client"},(0,l.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/@apollo/client?label=%F0%9F%92%BE",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://bundlephobia.com/package/@reduxjs/toolkit"},(0,l.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/@reduxjs/toolkit?label=%F0%9F%92%BE",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=react-router-dom"},(0,l.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/react-router-dom?label=%F0%9F%92%BE",alt:null}))," + ",(0,l.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=history"},(0,l.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/history?label=%F0%9F%92%BE",alt:null})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API \u5b9a\u4e49\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u4e2d, \u989d\u5916 config"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL \u8bed\u6cd5(\u6587\u4ef6)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u989d\u5916 config"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u6811\u7684 config")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1 \u4ec5\u5df2\u6fc0\u6d3b\u7684\u8def\u7531 ",(0,l.kt)("sup",null,"8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u5de5\u5177"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6e\u8be2/\u957f\u8f6e\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5e76\u884c\u67e5\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u9875\u67e5\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u9650\u67e5\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53cc\u5411\u65e0\u9650\u67e5\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u9650\u67e5\u8be2\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6ede\u540e\u67e5\u8be2\u6570\u636e",(0,l.kt)("sup",null,"1")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5668"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6eda\u52a8\u6062\u590d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u64cd\u4f5c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8fc7\u65f6\u6570\u636e\u7684\u5904\u7406"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u6e32\u67d3\u53ca\u4f18\u5316",(0,l.kt)("sup",null,"2")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5783\u573e\u6536\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539 Hook"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u4fee\u6539\u7684\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9884\u53d6 api"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u53d6\u6d88"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206\u67e5\u8be2\u5339\u914d",(0,l.kt)("sup",null,"3")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u91cd\u65b0\u9a8c\u8bc1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1",(0,l.kt)("sup",null,"7")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u524d\u67e5\u8be2/\u4fee\u6539\u914d\u7f6e",(0,l.kt)("sup",null,"4")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7a97\u53e3\u7126\u70b9\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u72b6\u6001\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u7f13\u5b58\u7684 Dehydration/Rehydration"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u7f13\u5b58"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 (\u5b9e\u9a8c\u4e2d)"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"React Suspense (\u5b9e\u9a8c\u4e2d)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u62bd\u8c61\u7684\u5185\u6838"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u540e\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6\u6570\u636e",(0,l.kt)("sup",null,"5")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5f52\u4e00\u5316\u7f13\u5b58",(0,l.kt)("sup",null,"6")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")))),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"1")," \u6ede\u540e\u67e5\u8be2\u6570\u636e")," - React Query \u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u4e0b\u4e00\u4e2a\u67e5\u8be2\u52a0\u8f7d\u65f6\u7ee7\u7eed\u67e5\u770b\u73b0\u6709\u7684\u6570\u636e\u7684\u65b9\u6cd5(\u7c7b\u4f3c\u4e8e\u539f\u751f\u7684 UX \u66f4\u65b0\u65b9\u5f0f). \u5728\u7f16\u5199\u5206\u9875 ui \u6216\u65e0\u9650\u52a0\u8f7d ui \u65f6\uff0c\u8fd9\u4e00\u70b9\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u5728\u8fd9\u4e9b ui \u4e2d\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u5728\u8bf7\u6c42\u65b0\u67e5\u8be2\u65f6\u663e\u793a\u786c\u52a0\u8f7d\u72b6\u6001\u3002\u5176\u4ed6\u5e93\u6ca1\u6709\u8fd9\u79cd\u529f\u80fd\uff0c\u5b83\u4eec\u4f1a\u5728\u65b0\u67e5\u8be2\u52a0\u8f7d\u65f6\u4e3a\u65b0\u67e5\u8be2\u5448\u73b0\u786c\u52a0\u8f7d\u72b6\u6001(\u9664\u975e\u5df2\u9884\u53d6)\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"2")," \u6e32\u67d3\u4f18\u5316")," - React Query \u5177\u6709\u51fa\u8272\u7684\u6e32\u67d3\u6027\u80fd\u3002\u5b83\u53ea\u4f1a\u5728\u67e5\u8be2\u66f4\u65b0\u65f6\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002\u4f8b\u5982\uff0c\u56e0\u4e3a\u5b83\u5177\u6709\u65b0\u6570\u636e\uff0c\u6216\u8868\u660e\u5b83\u6b63\u5728\u83b7\u53d6\u3002React Query \u8fd8\u5c06\u66f4\u65b0\u6279\u91cf\u5316\uff0c\u4ee5\u786e\u4fdd\u5f53\u591a\u4e2a\u7ec4\u4ef6\u4f7f\u7528\u540c\u4e00\u4e2a\u67e5\u8be2\u65f6\uff0c\u5e94\u7528\u53ea\u91cd\u65b0\u5448\u73b0\u4e00\u6b21\u3002\u5982\u679c\u4f60\u53ea\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"data"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"error"),"\u611f\u5174\u8da3\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"notifyOnChangeProps"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"['data'\uff0c 'error']"),"\u6765\u51cf\u5c11\u66f4\u591a\u7684\u6e32\u67d3\u6b21\u6570\u3002\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"notifyOnChangeProps\uff1a'tracked'"),"\u4ee5\u81ea\u52a8\u8ddf\u8e2a\u8bbf\u95ee\u5b57\u6bb5\uff0c\u5e76\u4e14\u4ec5\u5728\u5176\u4e2d\u4e00\u4e2a\u5b57\u6bb5\u53d1\u751f\u66f4\u6539\u65f6\u624d\u91cd\u65b0\u5448\u73b0\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"3")," \u90e8\u5206\u67e5\u8be2\u5339\u914d")," - \u7531\u4e8e React Query \u4f7f\u7528\u786e\u5b9a\u6027\u67e5\u8be2\u952e(deterministic query key)\u6765\u505a\u5e8f\u5217\u5316\uff0c\u56e0\u6b64\uff0c\u60a8\u65e0\u9700\u77e5\u9053\u8981\u5339\u914d\u7684\u6bcf\u4e2a\u5355\u72ec\u7684\u67e5\u8be2\u952e\u5373\u53ef\u64cd\u4f5c\u53d8\u91cf\u67e5\u8be2\u7ec4\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u6bcf\u4e2a\u952e\u4e2d\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"todos"),"\u5f00\u5934\u7684\u67e5\u8be2\uff0c\u800c\u4e0d\u7ba1\u53d8\u91cf\u5982\u4f55\uff0c\u4e5f\u53ef\u4ee5\u5b9a\u4f4d\u5177\u6709\uff08\u6216\u4e0d\u5177\u6709\uff09\u53d8\u91cf\u6216\u5d4c\u5957\u5c5e\u6027\u7684\u7279\u5b9a\u67e5\u8be2\uff0c\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528\u8fc7\u6ee4\u5668\u529f\u80fd\u4ec5\u5339\u914d\u901a\u8fc7\u7279\u5b9a\u6761\u4ef6\u7684\u67e5\u8be2\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"4")," \u4f7f\u7528\u524d\u67e5\u8be2/\u4fee\u6539\u914d\u7f6e")," - \u8fd9\u53ea\u662f\u4e00\u4e2a\u82b1\u54e8\u7684\u540d\u79f0\uff0c\u7528\u6765\u914d\u7f6e\u67e5\u8be2\u548c\u4fee\u6539\u5728\u88ab\u4f7f\u7528\u4e4b\u524d\u7684\u884c\u4e3a\u65b9\u5f0f\u3002\u4f8b\u5982\uff0c\u67e5\u8be2\u53ef\u4ee5\u4e8b\u5148\u7528\u9ed8\u8ba4\u503c\u5b8c\u5168\u914d\u7f6e\uff0c\u5f53\u9700\u8981\u4f7f\u7528\u5b83\u65f6\uff0c\u53ea\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"useQuery(key)"),"\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u4f7f\u7528\u65f6\u90fd\u9700\u8981\u4f20\u9012 fetcher \u548c\u53ef\u9009\u9879\u3002SWR \u786e\u5b9e\u5177\u6709\u6b64\u529f\u80fd\u7684\u90e8\u5206\u5f62\u5f0f\uff0c\u5b83\u5141\u8bb8\u60a8\u9884\u914d\u7f6e\u9ed8\u8ba4\u7684\u8bbf\u5b58\u7a0b\u5e8f\uff0c\u4f46\u53ea\u80fd\u5c06\u5176\u9884\u914d\u7f6e\u4e3a\u5168\u5c40\u8bbf\u5b58\u7a0b\u5e8f\uff0c\u800c\u4e0d\u662f\u5728\u6bcf\u4e2a\u67e5\u8be2\u7684\u57fa\u7840\u4e0a\uff0c\u800c\u4e14\u7edd\u5bf9\u4e0d\u7528\u4e8e\u4fee\u6539\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"5")," \u4fee\u6539\u540e\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6\u6570\u636e")," - \u4e3a\u4e86\u5728\u4fee\u6539\u53d1\u751f\u540e\u5b9e\u73b0\u771f\u6b63\u7684\u81ea\u52a8\u91cd\u53d6\uff0c\u9700\u8981\u6709\u4e00\u4e2a schema (\u5982 graphQL \u63d0\u4f9b\u7684) \u4ee5\u5e2e\u52a9\u7ec4\u4ef6\u77e5\u9053\u5982\u4f55\u8bc6\u522b\u8be5 schema \u4e2d\u7684\u5355\u4e2a\u5b9e\u4f53(entity)\u548c\u5b9e\u4f53\u7c7b\u578b(types)\u7684\u542f\u53d1\u5f0f\u65b9\u6cd5(heuristics)\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"6")," \u5f52\u4e00\u5316\u7f13\u5b58")," - React Query \u548c SWR \u5f53\u524d\u4e0d\u652f\u6301\u81ea\u52a8\u5f52\u4e00\u5316\u7684\u7f13\u5b58\uff0c\u8be5\u7f13\u5b58\u63cf\u8ff0\u4e86\u5728\u5e73\u9762\u67b6\u6784\u4e2d\u5982\u4f55\u5b58\u50a8\u5b9e\u4f53\u4ee5\u907f\u514d\u67d0\u4e9b\u9ad8\u7ea7\u6570\u636e\u7684\u91cd\u590d\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"7")," SWR \u7684\u4e0d\u53ef\u53d8\u6a21\u5f0f"),' - SWR \u63d0\u4f9b\u4e86\u4e00\u79cd"\u4e0d\u53ef\u53d8"\u6a21\u5f0f\uff0c\u5141\u8bb8\u60a8\u5728\u7f13\u5b58\u7684\u751f\u547d\u5468\u671f\u91cc\u53ea\u83b7\u53d6\u4e00\u6b21\u67e5\u8be2\u3002\u7136\u800c\u5b83\u4efb\u7136\u6ca1\u6709\u5173\u4e8e\u8fc7\u671f\u65f6\u95f4\u6216\u6709\u6761\u4ef6\u7684\u81ea\u52a8\u91cd\u65b0\u9a8c\u8bc1\u76f8\u5173\u7684\u6982\u5ff5\u3002')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",null,"8")," React Router \u7684\u6301\u4e45\u5316\u7f13\u5b58")," - React Router \u4e0d\u7f13\u5b58\u9664\u5f53\u524d\u5339\u914d\u7684\u8def\u7531\u4e4b\u5916\u7684\u6570\u636e\u3002\u5982\u679c\u4e00\u6761\u4ece\u8def\u7531\u5207\u6362\u5230\u53e6\u5916\u7684\u8def\u7531\uff0c\u5219\u8be5\u8def\u7531\u7684\u6570\u636e\u5c06\u4e22\u5931.")))}d.isMDXComponent=!0}}]);