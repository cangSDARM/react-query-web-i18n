(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5627],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(t),p=a,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9568:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return f}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),c=["components"],s={id:"FocusManager",title:"FocusManager"},u=void 0,i={unversionedId:"reference/FocusManager",id:"reference/FocusManager",isDocsHomePage:!1,title:"FocusManager",description:"The FocusManager manages the focus state within React Query.",source:"@site/docs/reference/focusManager.md",sourceDirName:"reference",slug:"/reference/FocusManager",permalink:"/react-query-web-i18n/reference/FocusManager",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/focusManager.md",version:"current",lastUpdatedAt:1632389524,formattedLastUpdatedAt:"9/23/2021",frontMatter:{id:"FocusManager",title:"FocusManager"}},l=[{value:"<code>focusManager.setEventListener</code>",id:"focusmanagerseteventlistener",children:[]},{value:"<code>focusManager.setFocused</code>",id:"focusmanagersetfocused",children:[]},{value:"<code>focusManager.isFocused</code>",id:"focusmanagerisfocused",children:[]}],d={toc:l};function f(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusManager")," manages the focus state within React Query."),(0,o.kt)("p",null,"It can be used to change the default event listeners or to manually change the focus state."),(0,o.kt)("p",null,"Its available methods are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#focusmanagerseteventlistener"},(0,o.kt)("inlineCode",{parentName:"a"},"setEventListener"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#focusmanagersetfocused"},(0,o.kt)("inlineCode",{parentName:"a"},"setFocused"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#focusmanagerisfocused"},(0,o.kt)("inlineCode",{parentName:"a"},"isFocused")))),(0,o.kt)("h2",{id:"focusmanagerseteventlistener"},(0,o.kt)("inlineCode",{parentName:"h2"},"focusManager.setEventListener")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setEventListener")," can be used to set a custom event listener:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { focusManager } from 'react-query'\n\nfocusManager.setEventListener(handleFocus => {\n  // Listen to visibillitychange and focus\n  if (typeof window !== 'undefined' && window.addEventListener) {\n    window.addEventListener('visibilitychange', handleFocus, false)\n    window.addEventListener('focus', handleFocus, false)\n  }\n\n  return () => {\n    // Be sure to unsubscribe if a new handler is set\n    window.removeEventListener('visibilitychange', handleFocus)\n    window.removeEventListener('focus', handleFocus)\n  }\n})\n")),(0,o.kt)("h2",{id:"focusmanagersetfocused"},(0,o.kt)("inlineCode",{parentName:"h2"},"focusManager.setFocused")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setFocused")," can be used to manually set the focus state. Set ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," to fallback to the default focus check."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { focusManager } from 'react-query'\n\n// Set focused\nfocusManager.setFocused(true)\n\n// Set unfocused\nfocusManager.setFocused(false)\n\n// Fallback to the default focus check\nfocusManager.setFocused(undefined)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"focused: boolean | undefined"))),(0,o.kt)("h2",{id:"focusmanagerisfocused"},(0,o.kt)("inlineCode",{parentName:"h2"},"focusManager.isFocused")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"isFocused")," can be used to get the current focus state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isFocused = focusManager.isFocused()\n")))}f.isMDXComponent=!0}}]);