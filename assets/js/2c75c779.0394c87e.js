"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8875],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={id:"OnlineManager",title:"OnlineManager"},l=void 0,o={unversionedId:"reference/OnlineManager",id:"reference/OnlineManager",title:"OnlineManager",description:"The OnlineManager manages the online state within React Query.",source:"@site/react/reference/onlineManager.md",sourceDirName:"reference",slug:"/reference/OnlineManager",permalink:"/react-query-web-i18n/react/reference/OnlineManager",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/react/reference/onlineManager.md",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"OnlineManager",title:"OnlineManager"}},c={},s=[{value:"<code>onlineManager.setEventListener</code>",id:"onlinemanagerseteventlistener",level:2},{value:"<code>onlineManager.setOnline</code>",id:"onlinemanagersetonline",level:2},{value:"<code>onlineManager.isOnline</code>",id:"onlinemanagerisonline",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OnlineManager")," manages the online state within React Query."),(0,r.kt)("p",null,"It can be used to change the default event listeners or to manually change the online state."),(0,r.kt)("p",null,"Its available methods are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlinemanagerseteventlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"setEventListener"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlinemanagersetonline"},(0,r.kt)("inlineCode",{parentName:"a"},"setOnline"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlinemanagerisonline"},(0,r.kt)("inlineCode",{parentName:"a"},"isOnline")))),(0,r.kt)("h2",{id:"onlinemanagerseteventlistener"},(0,r.kt)("inlineCode",{parentName:"h2"},"onlineManager.setEventListener")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setEventListener")," can be used to set a custom event listener:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import NetInfo from '@react-native-community/netinfo'\nimport { onlineManager } from '@tanstack/react-query'\n\nonlineManager.setEventListener(setOnline => {\n  return NetInfo.addEventListener(state => {\n    setOnline(!!state.isConnected)\n  })\n})\n")),(0,r.kt)("h2",{id:"onlinemanagersetonline"},(0,r.kt)("inlineCode",{parentName:"h2"},"onlineManager.setOnline")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setOnline")," can be used to manually set the online state. Set ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," to fallback to the default online check."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { onlineManager } from '@tanstack/react-query'\n\n// Set to online\nonlineManager.setOnline(true)\n\n// Set to offline\nonlineManager.setOnline(false)\n\n// Fallback to the default online check\nonlineManager.setOnline(undefined)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"online: boolean | undefined"))),(0,r.kt)("h2",{id:"onlinemanagerisonline"},(0,r.kt)("inlineCode",{parentName:"h2"},"onlineManager.isOnline")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isOnline")," can be used to get the current online state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const isOnline = onlineManager.isOnline()\n")))}u.isMDXComponent=!0}}]);