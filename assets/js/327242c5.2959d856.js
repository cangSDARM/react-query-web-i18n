"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[6001],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(t),y=i,b=f["".concat(s,".").concat(y)]||f[y]||p[y]||a;return t?n.createElement(b,o(o({ref:r},l),{},{components:t})):n.createElement(b,o({ref:r},l))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[f]="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5885:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={id:"InfiniteQueryObserver",title:"InfiniteQueryObserver"},o=void 0,u={unversionedId:"reference/InfiniteQueryObserver",id:"reference/InfiniteQueryObserver",title:"InfiniteQueryObserver",description:"InfiniteQueryObserver",source:"@site/vue/reference/InfiniteQueryObserver.md",sourceDirName:"reference",slug:"/reference/InfiniteQueryObserver",permalink:"/react-query-web-i18n/vue/reference/InfiniteQueryObserver",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/reference/InfiniteQueryObserver.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"InfiniteQueryObserver",title:"InfiniteQueryObserver"}},s={},c=[{value:"<code>InfiniteQueryObserver</code>",id:"infinitequeryobserver",level:2}],l={toc:c};function f(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"infinitequeryobserver"},(0,i.kt)("inlineCode",{parentName:"h2"},"InfiniteQueryObserver")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQueryObserver")," can be used to observe and switch between infinite queries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const observer = new InfiniteQueryObserver(queryClient, {\n  queryKey: ["posts"],\n  queryFn: fetchPosts,\n  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,\n  getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,\n});\n\nconst unsubscribe = observer.subscribe((result) => {\n  console.log(result);\n  unsubscribe();\n});\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("p",null,"The options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQueryObserver")," are exactly the same as those of ",(0,i.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/reference/useInfiniteQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"useInfiniteQuery")),"."))}f.isMDXComponent=!0}}]);