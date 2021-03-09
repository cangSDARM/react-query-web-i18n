(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(142)),i={id:"hydration.HydrateComp",title:"hydration/Hydrate"},c={unversionedId:"reference/hydration/hydration.HydrateComp",id:"reference/hydration/hydration.HydrateComp",isDocsHomePage:!1,title:"hydration/Hydrate",description:"hydration/Hydrate adds a previously dehydrated state into the queryClient that would returned by running useQueryCache. If the client already contains data, the new queries will be intelligently merged based on update timestamp.",source:"@site/docs/reference/hydration/HydrateComp.md",slug:"/reference/hydration/hydration.HydrateComp",permalink:"/react-query-web-i18n/reference/hydration/hydration.HydrateComp",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/hydration/HydrateComp.md",version:"current",lastUpdatedAt:1615261358},l=[],d={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hydration/Hydrate")," adds a previously dehydrated state into the ",Object(o.b)("inlineCode",{parentName:"p"},"queryClient")," that would returned by running ",Object(o.b)("inlineCode",{parentName:"p"},"useQueryCache"),". If the client already contains data, the new queries will be intelligently merged based on update timestamp."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Hydrate } from 'react-query/hydration'\n\nfunction App() {\n  return <Hydrate state={dehydratedState}>...</Hydrate>\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Options")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state: DehydratedState"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The state to hydrate"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options: HydrateOptions"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Optional"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultOptions: QueryOptions"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The default query options to use for the hydrated queries.")))))))}u.isMDXComponent=!0},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,s=p["".concat(i,".").concat(b)]||p[b]||y[b]||o;return r?a.a.createElement(s,c(c({ref:t},d),{},{components:r})):a.a.createElement(s,c({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);