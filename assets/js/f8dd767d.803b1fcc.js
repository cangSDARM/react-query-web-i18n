"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,v=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"react-native",title:"React Native"},i=void 0,c={unversionedId:"getstarted/react-native",id:"version-v4/getstarted/react-native",title:"React Native",description:"React Query \u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u4e0e React Native \u4e00\u8d77\u4f7f\u7528\uff0c\u4f46 devtools \u9664\u5916\uff0c\u800c devtools \u76ee\u524d\u4ec5\u53d7 React DOM \u652f\u6301\u3002",source:"@site/versioned_docs/version-v4/getstarted/react-native.md",sourceDirName:"getstarted",slug:"/getstarted/react-native",permalink:"/react-query-web-i18n/getstarted/react-native",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v4/getstarted/react-native.md",tags:[],version:"v4",lastUpdatedAt:1666953633,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"react-native",title:"React Native"},sidebar:"zhCN",previous:{title:"GraphQL",permalink:"/react-query-web-i18n/getstarted/graphql"},next:{title:"React Query",permalink:"/react-query-web-i18n/adapters/react-query"}},p={},s=[{value:"\u91cd\u65b0\u8fde\u63a5\u65f6\u7684\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6",id:"\u91cd\u65b0\u8fde\u63a5\u65f6\u7684\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6",level:2},{value:"\u5728 App \u4e2d\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6",id:"\u5728-app-\u4e2d\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6",level:2},{value:"\u5c4f\u5e55\u7684\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6",id:"\u5c4f\u5e55\u7684\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u4e0e React Native \u4e00\u8d77\u4f7f\u7528\uff0c\u4f46 devtools \u9664\u5916\uff0c\u800c devtools \u76ee\u524d\u4ec5\u53d7 React DOM \u652f\u6301\u3002\n\u5982\u679c\u60a8\u60f3\u5e2e\u52a9\u6211\u4eec\u4f7f devtools \u8de8\u5e73\u53f0\uff0c\u8bf7\u544a\u8bc9\u6211\u4eec\uff01"),(0,a.kt)("p",null,"\u73b0\u5728\u6709\u4e00\u4e2a\u4f7f\u7528\u7b2c\u4e09\u65b9\u63d2\u4ef6 ",(0,a.kt)("a",{parentName:"p",href:"https://fbflipper.com/docs/getting-started/react-native/"},"Flipper")," \u7684\u65b9\u6848\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bgaleotti/react-query-native-devtools"},"https://github.com/bgaleotti/react-query-native-devtools")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5e2e\u52a9\u6211\u4eec\u4f7f\u7b2c\u4e00\u65b9\u7684 devtools \u8de8\u5e73\u53f0\uff0c\u8bf7\u544a\u8bc9\u6211\u4eec\uff01"),(0,a.kt)("h2",{id:"\u91cd\u65b0\u8fde\u63a5\u65f6\u7684\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6"},"\u91cd\u65b0\u8fde\u63a5\u65f6\u7684\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6"),(0,a.kt)("p",null,"React Query \u5df2\u652f\u6301\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u91cd\u65b0\u8fde\u7f51\u65f6\u7684\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u5728 React Native \u4e2d\u4f7f\u7528\u8fd9\u4e00\u7279\u6027\uff0c\u4f60\u9700\u8981\u50cf\u4e0b\u9762\u7684\u4f8b\u5b50\u4e00\u6837\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"onlineManager"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import NetInfo from "@react-native-community/netinfo";\nimport { onlineManager } from "@tanstack/react-query";\n\nonlineManager.setEventListener((setOnline) => {\n  return NetInfo.addEventListener((state) => {\n    setOnline(!!state.isConnected);\n  });\n});\n')),(0,a.kt)("h2",{id:"\u5728-app-\u4e2d\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6"},"\u5728 App \u4e2d\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6"),(0,a.kt)("p",null,"\u5728 React Native \u4e2d\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"focusManager")," \u6765\u4f7f\u5f97\u6b64\u7279\u6027\u751f\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { focusManager } from "@tanstack/react-query";\nimport useAppState from "react-native-appstate-hook";\n\nfunction onAppStateChange(status: AppStateStatus) {\n  if (Platform.OS !== "web") {\n    focusManager.setFocused(status === "active");\n  }\n}\n\nuseEffect(() => {\n  const subscription = AppState.addEventListener("change", onAppStateChange);\n\n  return () => subscription.remove();\n}, []);\n')),(0,a.kt)("h2",{id:"\u5c4f\u5e55\u7684\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6"},"\u5c4f\u5e55\u7684\u57fa\u4e8e\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6"),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u5728 React Native \u7684\u5c4f\u5e55\u88ab\u91cd\u65b0\u805a\u7126\u65f6\u518d\u6b21\u83b7\u53d6\u65b0\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7684 Hook \u4f1a\u5728\u5c4f\u5e55\u88ab\u91cd\u65b0\u805a\u7126\u65f6\u8c03\u7528\u4f20\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"refetch")," \u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport { useFocusEffect } from "@react-navigation/native";\n\nexport function useRefreshOnFocus<T>(refetch: () => Promise<T>) {\n  const firstTimeRef = React.useRef(true);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      if (firstTimeRef.current) {\n        firstTimeRef.current = false;\n        return;\n      }\n\n      refetch();\n    }, [refetch]),\n  );\n}\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u8df3\u8fc7\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"refetch"),"\u65b9\u6cd5\u4e00\u6b21\uff0c\u56e0\u4e3a\u9664\u4e86\u5c4f\u5e55\u7126\u70b9\u5916\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"useFocusEffect"),"\u5728\u6302\u8f7d\u65f6\u4e5f\u4f1a\u8c03\u7528\u6211\u4eec\u7684\u56de\u8c03\u3002"))}u.isMDXComponent=!0}}]);