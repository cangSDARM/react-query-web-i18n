"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5821],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,p=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=i(t),d=s,f=l["".concat(u,".").concat(d)]||l[d]||m[d]||p;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var p=t.length,a=new Array(p);a[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[l]="string"==typeof e?e:s,a[1]=o;for(var i=2;i<p;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=t(7462),s=(t(7294),t(3905));const p={id:"suspense",title:"Suspense"},a=void 0,o={unversionedId:"guides&concepts/suspense",id:"guides&concepts/suspense",title:"Suspense",description:"\u6ce8\u610f\uff1aVue Query \u7684 Suspense \u6a21\u5f0f\u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u4e0e\u6570\u636e\u83b7\u53d6\u672c\u8eab\u7684 Suspense \u6a21\u5f0f\u76f8\u540c\u3002",source:"@site/vue/guides&concepts/suspense.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/suspense",permalink:"/react-query-web-i18n/vue/guides&concepts/suspense",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/vue/guides&concepts/suspense.md",tags:[],version:"current",lastUpdatedAt:1678686678,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"suspense",title:"Suspense"},sidebar:"zhCN",previous:{title:"\u9ed8\u8ba4\u7684\u67e5\u8be2\u51fd\u6570 Default Query Fn",permalink:"/react-query-web-i18n/vue/guides&concepts/default-query-function"},next:{title:"\u81ea\u5b9a\u4e49\u5ba2\u6237\u7aef Custom Client",permalink:"/react-query-web-i18n/vue/guides&concepts/custom-client"}},u={},i=[{value:"\u6e32\u67d3\u65f6\u83b7\u53d6 vs \u6309\u9700\u6e32\u67d3",id:"\u6e32\u67d3\u65f6\u83b7\u53d6-vs-\u6309\u9700\u6e32\u67d3",level:2}],c={toc:i},l="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(l,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aVue Query \u7684 Suspense \u6a21\u5f0f\u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u4e0e\u6570\u636e\u83b7\u53d6\u672c\u8eab\u7684 Suspense \u6a21\u5f0f\u76f8\u540c\u3002\n\u9664\u975e\u4f60\u5c06 Vue \u548c Vue Query \u7248\u672c\u90fd",(0,s.kt)("strong",{parentName:"p"},"\u9501\u5b9a\u4e3a\u5f7c\u6b64\u517c\u5bb9\u7684\u8865\u4e01\u7ea7\u522b"),"\uff0c\u5426\u5219\u8fd9\u4e9b API ",(0,s.kt)("strong",{parentName:"p"},"\u6709\u53ef\u80fd\u88ab\u66f4\u6539"),"\uff0c\u56e0\u6b64",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528"),"\u3002")),(0,s.kt)("p",null,"Vue Query \u4e5f\u53ef\u4ee5\u4e0e Vue \u7684\u65b0 ",(0,s.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/built-ins/suspense.html"},"Suspense")," API \u4e00\u8d77\u4f7f\u7528\u3002\n\u8981\u542f\u7528\u6b64\u6a21\u5f0f\uff0c\u5c06\u9700\u8981\u542f\u52a8 suspense \u6a21\u5f0f\u7684\u7ec4\u4ef6\u5305\u88f9\u5728 Vue \u63d0\u4f9b\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"Suspense"),"\u7ec4\u4ef6\u4e2d\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nimport SuspendableComponent from "./SuspendableComponent.vue";\n<\/script>\n\n<template>\n  <Suspense>\n    <template #default>\n      <SuspendableComponent />\n    </template>\n    <template #fallback>\n      <div>Loading...</div>\n    </template>\n  </Suspense>\n</template>\n')),(0,s.kt)("p",null,"\u5982\u679c\u5c06",(0,s.kt)("inlineCode",{parentName:"p"},"SuspendableComponent"),"\u7ec4\u4ef6\u4e2d\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"setup"),"\u51fd\u6570\u6539\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"async"),"\uff0c\n\u5219\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"vue-query"),"\u63d0\u4f9b\u7684\u5f02\u6b65",(0,s.kt)("inlineCode",{parentName:"p"},"suspense"),"\u51fd\u6570\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nimport { defineComponent } from 'vue'\nimport { useQuery } from '@tanstack/vue-query'\n\nconst todoFetcher = async () =>\n  await fetch('https://jsonplaceholder.cypress.io/todos').then((response) =>\n    response.json(),\n  )\nexport default defineComponent({\n  name: 'SuspendableComponent',\n  async setup() {\n    const { data, suspense } = useQuery(['todos'], todoFetcher)\n    await suspense()\n\n    return { data }\n  },\n})\n<\/script>\n")),(0,s.kt)("h2",{id:"\u6e32\u67d3\u65f6\u83b7\u53d6-vs-\u6309\u9700\u6e32\u67d3"},"\u6e32\u67d3\u65f6\u83b7\u53d6 vs \u6309\u9700\u6e32\u67d3"),(0,s.kt)("p",null,"Suspense \u6a21\u5f0f\u4e0b\u7684 Vue Query \u4f5c\u4e3a\u4e00\u79cd\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u7684\u3001\u6e32\u67d3\u65f6\u83b7\u53d6\u7684\u89e3\u51b3\u65b9\u6848\u5de5\u4f5c\u5f97\u975e\u5e38\u597d\u3002\n\u8fd9\u610f\u5473\u7740\uff0c\u5f53\u4f60\u7684\u7ec4\u4ef6\u5c1d\u8bd5\u6302\u8f7d\u65f6\uff0c\u5b83\u4eec\u5c06\u89e6\u53d1\u67e5\u8be2\u83b7\u53d6\u548c suspend\uff0c\u4f46\u4ec5\u5728\u4f60\u5bfc\u5165\u5e76\u6302\u8f7d\u5b83\u4eec\u4e4b\u540e\u3002\n\u5982\u679c\u4f60\u60f3\u66f4\u8fdb\u4e00\u6b65\uff0c\u5b9e\u73b0\u201c\u6309\u9700\u6e32\u67d3\u201d\u6a21\u578b\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u8def\u7531\u56de\u8c03\u548c/\u6216\u7528\u6237\u4ea4\u4e92\u4e8b\u4ef6\u4e0a\u5b9e\u73b0",(0,s.kt)("a",{parentName:"p",href:"./prefetching"},"\u9884\u53d6\u6570\u636e"),"\uff0c\u4ee5\u4fbf\u5728\u6302\u8f7d\u4e4b\u524d\u5373\u5f00\u59cb\u52a0\u8f7d\u67e5\u8be2\u3002\n\u751a\u81f3\u53ef\u4ee5\u662f\u5728\u5f00\u59cb\u5bfc\u5165\u6216\u6302\u8f7d\u5b83\u4eec\u7684\u7236\u7ec4\u4ef6\u4e4b\u524d\u3002"))}m.isMDXComponent=!0}}]);