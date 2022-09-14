"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"caching",title:"\u7f13\u5b58\u793a\u4f8b caching"},l=void 0,o={unversionedId:"guides&concepts/caching",id:"version-v3/guides&concepts/caching",title:"\u7f13\u5b58\u793a\u4f8b caching",description:"\u5728\u9605\u8bfb\u672c\u7bc7\u6587\u6863\u4e4b\u524d\uff0c\u8bf7\u8ba4\u771f\u9605\u8bfb\u91cd\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e",source:"@site/versioned_docs/version-v3/guides&concepts/caching.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/caching",permalink:"/react-query-web-i18n/guides&concepts/caching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/guides&concepts/caching.md",tags:[],version:"v3",lastUpdatedAt:1663164611,formattedLastUpdatedAt:"9/14/2022",frontMatter:{id:"caching",title:"\u7f13\u5b58\u793a\u4f8b caching"},sidebar:"zhCN",previous:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",permalink:"/react-query-web-i18n/guides&concepts/ssr"},next:{title:"\u9ed8\u8ba4\u7684\u67e5\u8be2\u51fd\u6570 default-query-function",permalink:"/react-query-web-i18n/guides&concepts/default-query-function"}},c={},p=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u7bc7\u6587\u6863\u4e4b\u524d\uff0c\u8bf7\u8ba4\u771f\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"./important-defaults"},"\u91cd\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e"))),(0,a.kt)("h2",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("p",null,"\u6b64\u7f13\u5b58\u793a\u4f8b\u8bf4\u660e\u4e86\u4ee5\u4e0b\u5185\u5bb9\u548c\u5176\u751f\u547d\u5468\u671f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6709\u548c\u6ca1\u6709\u7f13\u5b58\u6570\u636e\u7684\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u53f0\u91cd\u65b0\u62c9\u53d6"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6d3b\u8dc3\u7684\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u5783\u573e\u56de\u6536")),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u4f7f\u7528\u7684\u9ed8\u8ba4",(0,a.kt)("inlineCode",{parentName:"p"},"cacheTime"),"\u4e3a",(0,a.kt)("strong",{parentName:"p"},"5 \u5206\u949f"),"\uff0c\u9ed8\u8ba4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"staleTime"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)"),"\u7684\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u88ab\u6302\u8f7d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u6ca1\u6709\u4f7f\u7528\u8be5\u67e5\u8be2 + \u53d8\u91cf\u7ec4\u5408\u7684\u65b9\u5f0f\u8fdb\u884c\u5176\u4ed6\u67e5\u8be2\uff0c\u8be5\u67e5\u8be2\u5c06\u663e\u793a\u786c\u52a0\u8f7d\u72b6\u6001\uff0c\u5e76\u53d1\u51fa\u7f51\u7edc\u8bf7\u6c42\u4ee5\u83b7\u53d6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5b83\u5c06\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"todos"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"fetchTodos"),"\u4f5c\u4e3a\u7f13\u5b58\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u7f13\u5b58\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u914d\u7f6e\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime"),"\uff08\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\u6216\u7acb\u5373\uff09\u4e4b\u540e\uff0c\u8be5 Hook \u4f1a\u5c06\u81ea\u5df1\u6807\u8bb0\u4e3a\u8fc7\u65f6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)"),"\u7684\u7b2c\u4e8c\u4e2a\u5b9e\u4f8b\u6302\u8f7d\u5728\u5176\u4ed6\u4f4d\u7f6e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u8be5\u67e5\u8be2\u7684\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\u7684\u6570\u636e\u5df2\u5b58\u5728\u4e8e\u7f13\u5b58\u4e2d\uff0c\u56e0\u6b64\u8be5\u6570\u636e\u5c06\u7acb\u5373\u4ece\u7f13\u5b58\u8fd4\u56de"))),(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\u89e6\u53d1\u4e86\u5176\u4e2d\u4e00\u4e2a\uff0c\u4e24\u4e2a\u67e5\u8be2\u90fd\u4f1a\u5728\u540e\u53f0\u91cd\u65b0\u62c9\u53d6\uff08\u4f46\u53ea\u6709\u4e00\u4e2a\u8bf7\u6c42\uff09",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u636e\u83b7\u53d6\u6210\u529f\uff0c\u4e24\u4e2a\u5b9e\u4f8b\u90fd\u5c06\u4f7f\u7528\u65b0\u7684\u6570\u636e\u6765\u8fdb\u884c\u66f4\u65b0"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)"),"\u67e5\u8be2\u7684\u4e24\u4e2a\u5b9e\u4f8b\u90fd\u5df2\u5378\u8f7d\uff0c\u5e76\u4e14\u4e0d\u518d\u4f7f\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u6b64\u67e5\u8be2\u6ca1\u6709\u66f4\u591a\u6d3b\u52a8\u5b9e\u4f8b\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"cacheTime"),"\u8bbe\u7f6e\u7f13\u5b58\u8d85\u65f6\uff0c\u4ee5\u5220\u9664\u67e5\u8be2\u5e76\u5bf9\u5176\u8fdb\u884c\u5783\u573e\u56de\u6536\uff08\u9ed8\u8ba4\u4e3a",(0,a.kt)("strong",{parentName:"li"},"5 \u5206\u949f"),"\uff09"))),(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f13\u5b58\u8d85\u65f6\u5b8c\u6210\u4e4b\u524d\uff0c\u6302\u8f7d\u53e6\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)"),"\u5b9e\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53",(0,a.kt)("inlineCode",{parentName:"li"},"fetchTodos"),"\u51fd\u6570\u5728\u540e\u53f0\u8fd0\u884c\u65f6\uff0c\u8be5\u67e5\u8be2\u7acb\u5373\u8fd4\u56de\u53ef\u7528\u7684\u7f13\u5b58\u503c\uff0c\u4ee5\u7528\u4e00\u4e2a\u65b0\u503c\u586b\u5145"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)"),"\u7684\u6700\u540e\u4e00\u4e2a\u5b9e\u4f8b\u5378\u8f7d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"5 \u5206\u949f"),"\u5185\u6ca1\u6709\u518d\u51fa\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)"),"\u7684\u5b9e\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u53ca\u5176\uff08\u7f13\u5b58\uff09\u6570\u636e\u5c06\u88ab\u5220\u9664\u5e76\u8fdb\u884c\u5783\u573e\u56de\u6536\u3002")))))}s.isMDXComponent=!0}}]);