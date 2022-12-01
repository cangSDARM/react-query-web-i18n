"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8744],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=i(t),p=r,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return t?a.createElement(m,s(s({ref:n},l),{},{components:t})):a.createElement(m,s({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const o={id:"FocusManager",title:"FocusManager"},s=void 0,c={unversionedId:"reference/FocusManager",id:"version-v3/reference/FocusManager",title:"FocusManager",description:"The FocusManager manages the focus state within React Query.",source:"@site/versioned_docs/version-v3/reference/focusManager.md",sourceDirName:"reference",slug:"/reference/FocusManager",permalink:"/react-query-web-i18n/v3/reference/FocusManager",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/reference/focusManager.md",tags:[],version:"v3",lastUpdatedAt:1669863756,formattedLastUpdatedAt:"12/1/2022",frontMatter:{id:"FocusManager",title:"FocusManager"}},u={},i=[{value:"<code>focusManager.setEventListener</code>",id:"focusmanagerseteventlistener",level:2},{value:"<code>focusManager.setFocused</code>",id:"focusmanagersetfocused",level:2},{value:"<code>focusManager.isFocused</code>",id:"focusmanagerisfocused",level:2}],l={toc:i};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FocusManager")," manages the focus state within React Query."),(0,r.kt)("p",null,"It can be used to change the default event listeners or to manually change the focus state."),(0,r.kt)("p",null,"Its available methods are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focusmanagerseteventlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"focusManager.setEventListener"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focusmanagersetfocused"},(0,r.kt)("inlineCode",{parentName:"a"},"focusManager.setFocused"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focusmanagerisfocused"},(0,r.kt)("inlineCode",{parentName:"a"},"focusManager.isFocused")))),(0,r.kt)("h2",{id:"focusmanagerseteventlistener"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusManager.setEventListener")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setEventListener")," can be used to set a custom event listener:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { focusManager } from "react-query";\n\nfocusManager.setEventListener((handleFocus) => {\n  // Listen to visibilitychange and focus\n  if (typeof window !== "undefined" && window.addEventListener) {\n    window.addEventListener("visibilitychange", handleFocus, false);\n    window.addEventListener("focus", handleFocus, false);\n  }\n\n  return () => {\n    // Be sure to unsubscribe if a new handler is set\n    window.removeEventListener("visibilitychange", handleFocus);\n    window.removeEventListener("focus", handleFocus);\n  };\n});\n')),(0,r.kt)("h2",{id:"focusmanagersetfocused"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusManager.setFocused")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setFocused")," can be used to manually set the focus state. Set ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," to fallback to the default focus check."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { focusManager } from "react-query";\n\n// Set focused\nfocusManager.setFocused(true);\n\n// Set unfocused\nfocusManager.setFocused(false);\n\n// Fallback to the default focus check\nfocusManager.setFocused(undefined);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"focused: boolean | undefined"))),(0,r.kt)("h2",{id:"focusmanagerisfocused"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusManager.isFocused")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isFocused")," can be used to get the current focus state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const isFocused = focusManager.isFocused();\n")))}d.isMDXComponent=!0}}]);