"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3616],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var n=t(7294);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,u=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),y=u,m=f["".concat(c,".").concat(y)]||f[y]||l[y]||o;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function y(e,r){var t=arguments,u=r&&r.mdxType;if("string"==typeof e||u){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:u,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1840:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=t(7462),u=t(3366),o=(t(7294),t(3905)),a=["components"],i={id:"useQueries",title:"useQueries"},c=void 0,s={unversionedId:"reference/useQueries",id:"reference/useQueries",title:"useQueries",description:"The useQueries hook can be used to fetch a variable number of queries:",source:"@site/docs/reference/useQueries.md",sourceDirName:"reference",slug:"/reference/useQueries",permalink:"/react-query-web-i18n/reference/useQueries",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/useQueries.md",tags:[],version:"current",lastUpdatedAt:1643295702,formattedLastUpdatedAt:"1/27/2022",frontMatter:{id:"useQueries",title:"useQueries"}},p=[],l={toc:p};function f(e){var r=e.components,t=(0,u.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useQueries")," hook can be used to fetch a variable number of queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const results = useQueries([\n  { queryKey: ['post', 1], queryFn: fetchPost },\n  { queryKey: ['post', 2], queryFn: fetchPost },\n])\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useQueries")," hook accepts an array with query option objects identical to the ",(0,o.kt)("a",{parentName:"p",href:"/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"useQuery")," hook"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useQueries")," hook returns an array with all the query results."))}f.isMDXComponent=!0}}]);