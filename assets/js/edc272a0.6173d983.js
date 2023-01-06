"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5378],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(t),b=o,f=p["".concat(s,".").concat(b)]||p[b]||y[b]||a;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[p]="string"==typeof e?e:o,c[1]=u;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3703:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const a={id:"QueryObserver",title:"QueryObserver"},c=void 0,u={unversionedId:"reference/QueryObserver",id:"reference/QueryObserver",title:"QueryObserver",description:"QueryObserver",source:"@site/react/reference/QueryObserver.md",sourceDirName:"reference",slug:"/reference/QueryObserver",permalink:"/react-query-web-i18n/react/reference/QueryObserver",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/react/reference/QueryObserver.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"QueryObserver",title:"QueryObserver"}},s={},i=[{value:"<code>QueryObserver</code>",id:"queryobserver",level:2}],l={toc:i};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"queryobserver"},(0,o.kt)("inlineCode",{parentName:"h2"},"QueryObserver")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryObserver")," can be used to observe and switch between queries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const observer = new QueryObserver(queryClient, { queryKey: ["posts"] });\n\nconst unsubscribe = observer.subscribe((result) => {\n  console.log(result);\n  unsubscribe();\n});\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options")),(0,o.kt)("p",null,"The options for the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryObserver")," are exactly the same as those of ",(0,o.kt)("a",{parentName:"p",href:"/react-query-web-i18n/react/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"useQuery")),"."))}p.isMDXComponent=!0}}]);