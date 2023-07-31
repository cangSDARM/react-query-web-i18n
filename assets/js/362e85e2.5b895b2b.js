"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3299],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={id:"OnlineManager",title:"OnlineManager"},l=void 0,o={unversionedId:"reference/OnlineManager",id:"reference/OnlineManager",title:"OnlineManager",description:"The OnlineManager manages the online state within React Query.",source:"@site/vue/reference/onlineManager.md",sourceDirName:"reference",slug:"/reference/OnlineManager",permalink:"/react-query-web-i18n/vue/reference/OnlineManager",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/vue/reference/onlineManager.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"OnlineManager",title:"OnlineManager"}},s={},c=[{value:"<code>onlineManager.setEventListener</code>",id:"onlinemanagerseteventlistener",level:2},{value:"<code>onlineManager.setOnline</code>",id:"onlinemanagersetonline",level:2},{value:"<code>onlineManager.isOnline</code>",id:"onlinemanagerisonline",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"OnlineManager")," manages the online state within React Query."),(0,a.kt)("p",null,"It can be used to change the default event listeners or to manually change the online state."),(0,a.kt)("p",null,"Its available methods are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlinemanagerseteventlistener"},(0,a.kt)("inlineCode",{parentName:"a"},"setEventListener"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlinemanagersetonline"},(0,a.kt)("inlineCode",{parentName:"a"},"setOnline"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlinemanagerisonline"},(0,a.kt)("inlineCode",{parentName:"a"},"isOnline")))),(0,a.kt)("h2",{id:"onlinemanagerseteventlistener"},(0,a.kt)("inlineCode",{parentName:"h2"},"onlineManager.setEventListener")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setEventListener")," can be used to set a custom event listener:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import NetInfo from '@react-native-community/netinfo'\nimport { onlineManager } from '@tanstack/react-query'\n\nonlineManager.setEventListener(setOnline => {\n  return NetInfo.addEventListener(state => {\n    setOnline(!!state.isConnected)\n  })\n})\n")),(0,a.kt)("h2",{id:"onlinemanagersetonline"},(0,a.kt)("inlineCode",{parentName:"h2"},"onlineManager.setOnline")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setOnline")," can be used to manually set the online state. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," to fallback to the default online check."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { onlineManager } from '@tanstack/react-query'\n\n// Set to online\nonlineManager.setOnline(true)\n\n// Set to offline\nonlineManager.setOnline(false)\n\n// Fallback to the default online check\nonlineManager.setOnline(undefined)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Options")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"online: boolean | undefined"))),(0,a.kt)("h2",{id:"onlinemanagerisonline"},(0,a.kt)("inlineCode",{parentName:"h2"},"onlineManager.isOnline")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isOnline")," can be used to get the current online state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const isOnline = onlineManager.isOnline()\n")))}m.isMDXComponent=!0}}]);