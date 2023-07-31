"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1479],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,m=s["".concat(i,".").concat(d)]||s[d]||y[d]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"typescript",title:"TypeScript"},p=void 0,c={unversionedId:"getstarted/typescript",id:"getstarted/typescript",title:"TypeScript",description:"React Query \u73b0\u5728\u662f\u7528TypeScript\u5199\u7684\uff0c\u4ee5\u786e\u4fdd\u5e93\u548c\u9879\u76ee\u91cc\u6709\u5173\u7684\u4ee3\u7801\u662f\u7c7b\u578b\u5b89\u5168\u7684\uff01",source:"@site/v3-react/getstarted/typescript.md",sourceDirName:"getstarted",slug:"/getstarted/typescript",permalink:"/react-query-web-i18n/v3-react/getstarted/typescript",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/getstarted/typescript.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"typescript",title:"TypeScript"},sidebar:"default",previous:{title:"\u6bd4\u8f83 | React Query vs SWR vs Apollo vs RTK Query vs React Router",permalink:"/react-query-web-i18n/v3-react/getstarted/comparison"},next:{title:"GraphQL",permalink:"/react-query-web-i18n/v3-react/getstarted/graphql"}},i={},l=[{value:"\u81ea\u5b9a\u4e49 Hooks",id:"\u81ea\u5b9a\u4e49-hooks",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],u={toc:l},s="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u73b0\u5728\u662f\u7528",(0,a.kt)("strong",{parentName:"p"},"TypeScript"),"\u5199\u7684\uff0c\u4ee5\u786e\u4fdd\u5e93\u548c\u9879\u76ee\u91cc\u6709\u5173\u7684\u4ee3\u7801\u662f\u7c7b\u578b\u5b89\u5168\u7684\uff01"),(0,a.kt)("p",null,"\u9700\u8981\u8bb0\u4f4f\u7684\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u9700\u8981\u4f7f\u7528 TypeScript v3.8 \u6216\u66f4\u9ad8\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8be5\u5e93\u4e2d\u7684\u7c7b\u578b\u6240\u505a\u7684\u66f4\u6539\u88ab\u8ba4\u4e3a\u662f",(0,a.kt)("strong",{parentName:"li"},"\u975e\u7834\u574f\u6027(non-breaking)"),"\u7684\uff0c\u5e76\u4e14\u901a\u5e38\u4ee5",(0,a.kt)("strong",{parentName:"li"},"\u8865\u4e01(\u5c0f\u7248\u672c\u53f7)"),"\u7684\u5f62\u5f0f\u53d1\u5e03\uff08\u6bcf\u6b21\u7c7b\u578b\u7684\u589e\u5f3a\u90fd\u662f\u4e3b\u8981\u7248\u672c\u53f7\u6539\u52a8!\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u70c8\u5efa\u8bae\u60a8",(0,a.kt)("strong",{parentName:"li"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"strong"},"react-query"),"\u5305\u7248\u672c\u9501\u5b9a\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u5c0f\u7248\u672c\u53f7\u4e0a\uff0c\u5e76\u505a\u597d\u5728\u4efb\u4f55\u7248\u672c\u4e4b\u95f4\u7c7b\u578b\u90fd\u4f1a\u56fa\u5b9a\u6216\u5347\u7ea7\u7684\u6253\u7b97"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u7c7b\u578b\u65e0\u5173\u7684\u516c\u5171 API \u4ecd\u7136\u975e\u5e38\u4e25\u683c\u5730\u9075\u5faa semver \u7248\u672c\u5b88\u5219\u3002")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49-hooks"},"\u81ea\u5b9a\u4e49 Hooks"),(0,a.kt)("p",null,"\u5b9a\u4e49\u81ea\u5b9a\u4e49\u94a9\u5b50\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u8fd4\u56de\u503c\u548c\u9519\u8bef\u7684\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function useGroups() {\n  return useQuery<Group[], Error>("groups", fetchGroups);\n}\n')),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("p",null,"\u5173\u4e8e\u5728 Typescript \u4e2d\u7c7b\u578b\u63a8\u65ad\u7684\u6280\u5de7\u548c\u5efa\u8bae\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/community/tkdodos-blog#6-react-query-and-typescript"},"\u6b64\u793e\u533a\u8d44\u6e90")))}y.isMDXComponent=!0}}]);