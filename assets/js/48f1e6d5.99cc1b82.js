"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"useIsMutating",title:"useIsMutating"},o=void 0,u={unversionedId:"reference/useIsMutating",id:"reference/useIsMutating",title:"useIsMutating",description:"useIsMutating is an optional hook that returns the number of mutations that your application is fetching (useful for app-wide loading indicators).",source:"@site/v3-react/reference/useIsMutating.md",sourceDirName:"reference",slug:"/reference/useIsMutating",permalink:"/react-query-web-i18n/v3-react/reference/useIsMutating",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/v3-react/reference/useIsMutating.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"useIsMutating",title:"useIsMutating"}},s={},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useIsMutating")," is an optional hook that returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," of mutations that your application is fetching (useful for app-wide loading indicators)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { useIsMutating } from "react-query";\n// How many mutations are fetching?\nconst isMutating = useIsMutating();\n// How many mutations matching the posts prefix are fetching?\nconst isMutatingPosts = useIsMutating(["posts"]);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Options")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mutationKey?: string | unknown[]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filters?: MutationFilters"),": ",(0,a.kt)("a",{parentName:"li",href:"../guides&concepts/filters#mutation-filters"},"Mutation Filters"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isMutating: number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Will be the ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," of the mutations that your application is currently fetching.")))))}p.isMDXComponent=!0}}]);