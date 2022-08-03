"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3818],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7497:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={id:"setLogger",title:"setLogger"},i=void 0,l={unversionedId:"reference/setLogger",id:"version-v3/reference/setLogger",title:"setLogger",description:"setLogger",source:"@site/versioned_docs/version-v3/reference/setLogger.md",sourceDirName:"reference",slug:"/reference/setLogger",permalink:"/react-query-web-i18n/reference/setLogger",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/reference/setLogger.md",tags:[],version:"v3",lastUpdatedAt:1659541573,formattedLastUpdatedAt:"8/3/2022",frontMatter:{id:"setLogger",title:"setLogger"}},s={},c=[{value:"<code>setLogger</code>",id:"setlogger",level:2}],p={toc:c};function g(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setlogger"},(0,o.kt)("inlineCode",{parentName:"h2"},"setLogger")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setLogger")," is an optional function that allows you to replace the default ",(0,o.kt)("inlineCode",{parentName:"p"},"logger")," used by React Query to log errors. By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.console")," object is used. If no global ",(0,o.kt)("inlineCode",{parentName:"p"},"console")," object is found in the environment, nothing will be logged."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { setLogger } from 'react-query'\nimport { printLog, printWarn, printError } from 'custom-logger'\n\n// Custom logger\nsetLogger({\n  log: printLog,\n  warn: printWarn,\n  error: printError,\n})\n\n// Sentry logger\nsetLogger({\n  log: message => {\n    Sentry.captureMessage(message)\n  },\n  warn: message => {\n    Sentry.captureMessage(message)\n  },\n  error: error => {\n    Sentry.captureException(error)\n  },\n})\n\n// Winston logger\nsetLogger(winston.createLogger())\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logger: Logger"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Must implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"log"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"warn"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," methods.")))))}g.isMDXComponent=!0}}]);