"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(n),p=r,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||o;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={id:"FocusManager",title:"FocusManager"},s=void 0,c={unversionedId:"reference/FocusManager",id:"reference/FocusManager",title:"FocusManager",description:"The FocusManager manages the focus state within React Query.",source:"@site/vue/reference/focusManager.md",sourceDirName:"reference",slug:"/reference/FocusManager",permalink:"/react-query-web-i18n/vue/reference/FocusManager",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/reference/focusManager.md",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"FocusManager",title:"FocusManager"}},u={},i=[{value:"<code>focusManager.setEventListener</code>",id:"focusmanagerseteventlistener",level:2},{value:"<code>focusManager.setFocused</code>",id:"focusmanagersetfocused",level:2},{value:"<code>focusManager.isFocused</code>",id:"focusmanagerisfocused",level:2}],l={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FocusManager")," manages the focus state within React Query."),(0,r.kt)("p",null,"It can be used to change the default event listeners or to manually change the focus state."),(0,r.kt)("p",null,"Its available methods are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focusmanagerseteventlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"setEventListener"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focusmanagersetfocused"},(0,r.kt)("inlineCode",{parentName:"a"},"setFocused"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focusmanagerisfocused"},(0,r.kt)("inlineCode",{parentName:"a"},"isFocused")))),(0,r.kt)("h2",{id:"focusmanagerseteventlistener"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusManager.setEventListener")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setEventListener")," can be used to set a custom event listener:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { focusManager } from '@tanstack/react-query'\n\nfocusManager.setEventListener(handleFocus => {\n  // Listen to visibilitychange and focus\n  if (typeof window !== 'undefined' && window.addEventListener) {\n    window.addEventListener('visibilitychange', handleFocus, false)\n    window.addEventListener('focus', handleFocus, false)\n  }\n\n  return () => {\n    // Be sure to unsubscribe if a new handler is set\n    window.removeEventListener('visibilitychange', handleFocus)\n    window.removeEventListener('focus', handleFocus)\n  }\n})\n")),(0,r.kt)("h2",{id:"focusmanagersetfocused"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusManager.setFocused")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setFocused")," can be used to manually set the focus state. Set ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," to fallback to the default focus check."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { focusManager } from '@tanstack/react-query'\n\n// Set focused\nfocusManager.setFocused(true)\n\n// Set unfocused\nfocusManager.setFocused(false)\n\n// Fallback to the default focus check\nfocusManager.setFocused(undefined)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"focused: boolean | undefined"))),(0,r.kt)("h2",{id:"focusmanagerisfocused"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusManager.isFocused")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isFocused")," can be used to get the current focus state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const isFocused = focusManager.isFocused()\n")))}d.isMDXComponent=!0}}]);