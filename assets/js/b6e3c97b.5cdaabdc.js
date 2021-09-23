(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[447],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=d(r),s=a,m=y["".concat(u,".").concat(s)]||y[s]||c[s]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4970:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return y}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={id:"hydration.HydrateComp",title:"hydration/Hydrate"},u=void 0,d={unversionedId:"reference/hydration/hydration.HydrateComp",id:"reference/hydration/hydration.HydrateComp",isDocsHomePage:!1,title:"hydration/Hydrate",description:"hydration/Hydrate adds a previously dehydrated state into the queryClient that would be returned by useQueryClient(). If the client already contains data, the new queries will be intelligently merged based on update timestamp.",source:"@site/docs/reference/hydration/HydrateComp.md",sourceDirName:"reference/hydration",slug:"/reference/hydration/hydration.HydrateComp",permalink:"/react-query-web-i18n/reference/hydration/hydration.HydrateComp",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/hydration/HydrateComp.md",version:"current",lastUpdatedAt:1632389524,formattedLastUpdatedAt:"9/23/2021",frontMatter:{id:"hydration.HydrateComp",title:"hydration/Hydrate"}},p=[],c={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hydration/Hydrate")," adds a previously dehydrated state into the ",(0,o.kt)("inlineCode",{parentName:"p"},"queryClient")," that would be returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"useQueryClient()"),". If the client already contains data, the new queries will be intelligently merged based on update timestamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Hydrate } from 'react-query/hydration'\n\nfunction App() {\n  return <Hydrate state={dehydratedState}>...</Hydrate>\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state: DehydratedState"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The state to hydrate"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options: HydrateOptions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Optional"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultOptions: QueryOptions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The default query options to use for the hydrated queries.")))))))}y.isMDXComponent=!0}}]);