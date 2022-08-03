"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const c={id:"scroll-restoration",title:"\u6eda\u52a8\u6062\u590d scroll-restoration"},i=void 0,a={unversionedId:"guides&concepts/scroll-restoration",id:"version-v3/guides&concepts/scroll-restoration",title:"\u6eda\u52a8\u6062\u590d scroll-restoration",description:"\u4f20\u7edf\u4e0a\uff0c\u5f53\u60a8\u5728 Web \u6d4f\u89c8\u5668\u4e2d\u5bfc\u822a\u5230\u5148\u524d\u8bbf\u95ee\u7684\u9875\u9762\u65f6\uff0c\u60a8\u4f1a\u53d1\u73b0\u8be5\u9875\u9762\u5c06\u6eda\u52a8\u5230\u79bb\u5f00\u8be5\u9875\u9762\u65f6\u7684\u786e\u5207\u4f4d\u7f6e\u3002",source:"@site/versioned_docs/version-v3/guides&concepts/scroll-restoration.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/scroll-restoration",permalink:"/react-query-web-i18n/guides&concepts/scroll-restoration",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/guides&concepts/scroll-restoration.md",tags:[],version:"v3",lastUpdatedAt:1659541573,formattedLastUpdatedAt:"8/3/2022",frontMatter:{id:"scroll-restoration",title:"\u6eda\u52a8\u6062\u590d scroll-restoration"},sidebar:"zhCN",previous:{title:"\u67e5\u8be2\u53d6\u6d88 query-cancellation",permalink:"/react-query-web-i18n/guides&concepts/query-cancellation"},next:{title:"\u8fc7\u6ee4\u5668 filters",permalink:"/react-query-web-i18n/guides&concepts/filters"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f20\u7edf\u4e0a\uff0c\u5f53\u60a8\u5728 Web \u6d4f\u89c8\u5668\u4e2d\u5bfc\u822a\u5230\u5148\u524d\u8bbf\u95ee\u7684\u9875\u9762\u65f6\uff0c\u60a8\u4f1a\u53d1\u73b0\u8be5\u9875\u9762\u5c06\u6eda\u52a8\u5230\u79bb\u5f00\u8be5\u9875\u9762\u65f6\u7684\u786e\u5207\u4f4d\u7f6e\u3002\n\u8fd9\u88ab\u79f0\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u6eda\u52a8\u6062\u590d"),"\u3002\n\u7531\u4e8e Web \u5e94\u7528\u5df2\u5f00\u59cb\u5411\u5ba2\u6237\u7aef\u6570\u636e\u83b7\u53d6\u8f6c\u79fb\uff0c\u56e0\u6b64\u5df2\u7ecf\u6709\u70b9\u9000\u6b65\u4e86\u3002\n\u4f46\u662f\uff0c\u4f7f\u7528 React Query \u4e0d\u518d\u662f\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u5f00\u7bb1\u5373\u7528\uff0c\u5bf9\u6240\u6709\u67e5\u8be2\uff08\u5305\u62ec\u5206\u9875\u67e5\u8be2\u548c\u65e0\u9650\u67e5\u8be2\uff09\u8fdb\u884c\u201c\u6eda\u52a8\u6062\u590d\u201d\uff0c\u8fd9\u662f React Query \u4e2d\u7684 Just Works\u2122\ufe0f\u3002\n\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\u67e5\u8be2\u7ed3\u679c\u88ab\u6b63\u786e\u7f13\u5b58\uff0c\u5e76\u4e14\u80fd\u591f\u5728\u5448\u73b0\u67e5\u8be2\u65f6\u540c\u6b65\u68c0\u7d22\u3002\n\u53ea\u8981\u60a8\u7684\u67e5\u8be2\u88ab\u7f13\u5b58\u4e86\u8db3\u591f\u957f\u7684\u65f6\u95f4\uff08\u9ed8\u8ba4\u65f6\u95f4\u662f 5 \u5206\u949f\uff09\u5e76\u4e14\u8fd8\u6ca1\u6709\u88ab\u5783\u573e\u56de\u6536\uff0c\u6eda\u52a8\u6062\u590d\u5c06\u4e00\u76f4\u6709\u6548\u3002"))}p.isMDXComponent=!0}}]);