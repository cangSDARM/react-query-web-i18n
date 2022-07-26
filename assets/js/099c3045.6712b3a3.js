"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={id:"OnlineManager",title:"OnlineManager"},l=void 0,o={unversionedId:"reference/OnlineManager",id:"version-v3.0/reference/OnlineManager",title:"OnlineManager",description:"The OnlineManager manages the online state within React Query.",source:"@site/versioned_docs/version-v3.0/reference/onlineManager.md",sourceDirName:"reference",slug:"/reference/OnlineManager",permalink:"/react-query-web-i18n/reference/OnlineManager",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3.0/reference/onlineManager.md",tags:[],version:"v3.0",lastUpdatedAt:1658847505,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"OnlineManager",title:"OnlineManager"}},s={},c=[{value:"<code>onlineManager.setEventListener</code>",id:"onlinemanagerseteventlistener",level:2},{value:"<code>onlineManager.setOnline</code>",id:"onlinemanagersetonline",level:2},{value:"<code>onlineManager.isOnline</code>",id:"onlinemanagerisonline",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"OnlineManager")," manages the online state within React Query."),(0,a.kt)("p",null,"It can be used to change the default event listeners or to manually change the online state."),(0,a.kt)("p",null,"Its available methods are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlinemanagerseteventlistener"},(0,a.kt)("inlineCode",{parentName:"a"},"setEventListener"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlinemanagersetonline"},(0,a.kt)("inlineCode",{parentName:"a"},"setOnline"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlinemanagerisonline"},(0,a.kt)("inlineCode",{parentName:"a"},"isOnline")))),(0,a.kt)("h2",{id:"onlinemanagerseteventlistener"},(0,a.kt)("inlineCode",{parentName:"h2"},"onlineManager.setEventListener")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setEventListener")," can be used to set a custom event listener:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import NetInfo from '@react-native-community/netinfo'\nimport { onlineManager } from 'react-query'\n\nonlineManager.setEventListener(setOnline => {\n  return NetInfo.addEventListener(state => {\n    setOnline(state.isConnected)\n  })\n})\n")),(0,a.kt)("h2",{id:"onlinemanagersetonline"},(0,a.kt)("inlineCode",{parentName:"h2"},"onlineManager.setOnline")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setOnline")," can be used to manually set the online state. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," to fallback to the default online check."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { onlineManager } from 'react-query'\n\n// Set to online\nonlineManager.setOnline(true)\n\n// Set to offline\nonlineManager.setOnline(false)\n\n// Fallback to the default online check\nonlineManager.setOnline(undefined)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Options")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"online: boolean | undefined"))),(0,a.kt)("h2",{id:"onlinemanagerisonline"},(0,a.kt)("inlineCode",{parentName:"h2"},"onlineManager.isOnline")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isOnline")," can be used to get the current online state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const isOnline = onlineManager.isOnline()\n")))}u.isMDXComponent=!0}}]);