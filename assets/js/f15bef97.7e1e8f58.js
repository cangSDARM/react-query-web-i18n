"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9488],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={id:"window-focus-refetching",title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0 Window Focus Refetching"},a=void 0,c={unversionedId:"guides&concepts/window-focus-refetching",id:"guides&concepts/window-focus-refetching",title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0 Window Focus Refetching",description:"\u5982\u679c\u7528\u6237\u5728\u77ed\u6682\u79bb\u5f00\u540e\u56de\u6765\u65f6\uff0c\u6570\u636e\u5df2\u88ab\u6807\u8bb0\u4e3a\u8fc7\u65f6\uff0c\u90a3\u4e48 React Query \u4f1a\u5728\u540e\u53f0\u81ea\u52a8\u4e3a\u4f60\u8bf7\u6c42\u65b0\u7684\u6570\u636e\u3002",source:"@site/vue/guides&concepts/window-focus-refetching.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/window-focus-refetching",permalink:"/react-query-web-i18n/vue/guides&concepts/window-focus-refetching",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/vue/guides&concepts/window-focus-refetching.md",tags:[],version:"current",lastUpdatedAt:1678686678,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"window-focus-refetching",title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0 Window Focus Refetching"},sidebar:"zhCN",previous:{title:"\u52a0\u8f7d\u72b6\u6001\u6307\u793a\u5668 Background Fetching Indicators",permalink:"/react-query-web-i18n/vue/guides&concepts/background-fetching-indicators"},next:{title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 Disabling/Pausing Queries",permalink:"/react-query-web-i18n/vue/guides&concepts/disabling-queries"}},s={},u=[{value:"\u5168\u5c40\u7981\u7528",id:"\u5168\u5c40\u7981\u7528",level:4},{value:"\u5355\u72ec\u7981\u7528",id:"\u5355\u72ec\u7981\u7528",level:4},{value:"\u81ea\u5b9a\u4e49\u7a97\u53e3\u7684 Focus \u4e8b\u4ef6",id:"\u81ea\u5b9a\u4e49\u7a97\u53e3\u7684-focus-\u4e8b\u4ef6",level:2},{value:"\u5ffd\u7565 iframe \u7684 Focus \u4e8b\u4ef6",id:"\u5ffd\u7565-iframe-\u7684-focus-\u4e8b\u4ef6",level:2},{value:"\u7ba1\u7406\u7126\u70b9\u72b6\u6001",id:"\u7ba1\u7406\u7126\u70b9\u72b6\u6001",level:2},{value:"\u9677\u9631\u548c\u8b66\u544a",id:"\u9677\u9631\u548c\u8b66\u544a",level:2}],l={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u7528\u6237\u5728\u77ed\u6682\u79bb\u5f00\u540e\u56de\u6765\u65f6\uff0c\u6570\u636e\u5df2\u88ab\u6807\u8bb0\u4e3a\u8fc7\u65f6\uff0c\u90a3\u4e48 ",(0,i.kt)("strong",{parentName:"p"},"React Query \u4f1a\u5728\u540e\u53f0\u81ea\u52a8\u4e3a\u4f60\u8bf7\u6c42\u65b0\u7684\u6570\u636e"),"\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"refetchOnWindowFocus"),"\u9009\u9879\u5728\u5168\u5c40\u6216\u5355\u4e2a\u67e5\u8be2\u4e2d\u7981\u7528\u6b64\u9009\u9879\u3002"),(0,i.kt)("h4",{id:"\u5168\u5c40\u7981\u7528"},"\u5168\u5c40\u7981\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const vueQueryPluginOptions: VueQueryPluginOptions = {\n  queryClientConfig: {\n    defaultOptions: {\n      queries: {\n        refetchOnWindowFocus: false,\n      },\n    },\n  },\n};\napp.use(VueQueryPlugin, vueQueryPluginOptions);\n")),(0,i.kt)("h4",{id:"\u5355\u72ec\u7981\u7528"},"\u5355\u72ec\u7981\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'useQuery(["todos"], fetchTodos, { refetchOnWindowFocus: false });\n')),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7a97\u53e3\u7684-focus-\u4e8b\u4ef6"},"\u81ea\u5b9a\u4e49\u7a97\u53e3\u7684 Focus \u4e8b\u4ef6"),(0,i.kt)("p",null,"\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u81ea\u5df1\u7ba1\u7406\u7a97\u53e3\u7684 Focus \u4e8b\u4ef6\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u4f1a\u89e6\u53d1 React Query \u7684\u91cd\u65b0\u9a8c\u8bc1\u3002\n\u4e3a\u6b64\uff0cReact Query \u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"focusManager.setEventListener"),"\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63d0\u4f9b\u4e86\u5f53\u7a97\u53e3\u805a\u7126\u65f6\u5e94\u89e6\u53d1\u7684\u56de\u8c03\uff0c\u5e76\u5141\u8bb8\u4f60\u8bbe\u7f6e\u81ea\u5df1\u7684\u4e8b\u4ef6\u3002\n\u5f53\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"focusManager.setEventListener"),"\u65f6\uff0c\u5148\u524d\u8bbe\u7f6e\u7684\u5904\u7406\u51fd\u6570\u5c06\u88ab\u5220\u9664\uff08\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5c06\u662f\u9ed8\u8ba4\u7684\u5904\u7406\u51fd\u6570\uff09\uff0c\u800c\u5c06\u4f7f\u7528\u65b0\u7684\u5904\u7406\u51fd\u6570\u3002\n\u4f8b\u5982\uff0c\u8fd9\u662f\u9ed8\u8ba4\u5904\u7406\u7a0b\u5e8f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'focusManager.setEventListener((handleFocus) => {\n  // \u76d1\u542c visibilitychange \u548c focus \u4e8b\u4ef6\n  if (typeof window !== "undefined" && window.addEventListener) {\n    window.addEventListener("visibilitychange", handleFocus, false);\n    window.addEventListener("focus", handleFocus, false);\n  }\n\n  return () => {\n    // \u5982\u679c\u8bbe\u7f6e\u4e86\u65b0\u7684\u5904\u7406\u7a0b\u5e8f\uff0c\u786e\u4fdd\u53d6\u6d88\u8ba2\u9605\n    window.removeEventListener("visibilitychange", handleFocus);\n    window.removeEventListener("focus", handleFocus);\n  };\n});\n')),(0,i.kt)("h2",{id:"\u5ffd\u7565-iframe-\u7684-focus-\u4e8b\u4ef6"},"\u5ffd\u7565 iframe \u7684 Focus \u4e8b\u4ef6"),(0,i.kt)("p",null,"\u66ff\u6362\u7126\u70b9\u5904\u7406\u51fd\u6570\u7684\u4e00\u4e2a\u5f88\u597d\u7684\u7528\u4f8b\u662f iframe \u7684\u4e8b\u4ef6\u3002\niframe \u5728\u68c0\u6d4b\u7a97\u53e3\u7126\u70b9\u65b9\u9762\u5b58\u5728\u95ee\u9898\u3002\u5f53\u4f60\u5728\u5e94\u7528\u4e2d\u805a\u7126\u6216\u4f7f\u7528 iframe \u65f6\uff0ciframe \u4f1a\u591a\u6b21\u89e6\u53d1\u4e8b\u4ef6(double-firing events)\u548c\u5047\u9633\u6027\u4e8b\u4ef6(false-positive events)\u3002\n\u5982\u679c\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u6765\u5c3d\u53ef\u80fd\u5730\u5ffd\u7565\u5b83\u4eec\u3002\u4f8b\u5982\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/tannerlinsley/1d3a2122332107fcd8c9cc379be10d88"},"\u8fd9\u4e2a Gist"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { focusManager } from "@tanstack/vue-query";\nimport onWindowFocus from "./onWindowFocus"; // The gist\n\nfocusManager.setEventListener(onWindowFocus); // Boom!\n')),(0,i.kt)("h2",{id:"\u7ba1\u7406\u7126\u70b9\u72b6\u6001"},"\u7ba1\u7406\u7126\u70b9\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { focusManager } from "@tanstack/vue-query";\n\n// \u8986\u76d6\u9ed8\u8ba4\u7684\u7126\u70b9\u72b6\u6001\nfocusManager.setFocused(true);\n\n// \u56de\u9000\u5230\u9ed8\u8ba4\u7684\u7126\u70b9\u68c0\u67e5\nfocusManager.setFocused(undefined);\n')),(0,i.kt)("h2",{id:"\u9677\u9631\u548c\u8b66\u544a"},"\u9677\u9631\u548c\u8b66\u544a"),(0,i.kt)("p",null,"\u4e00\u4e9b\u6d4f\u89c8\u5668 API \u4ea7\u751f\u7684\u5bf9\u8bdd\u7a97\u53e3\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"alert()")," \u6216\u6587\u4ef6\u4e0a\u4f20\u5bf9\u8bdd\u6846(",(0,i.kt)("inlineCode",{parentName:"p"},'<input type="file" />'),")\uff0c\u4e5f\u53ef\u80fd\u5728\u5173\u95ed\u4e4b\u540e\u89e6\u53d1\u57fa\u4e8e\u7a97\u53e3\u7126\u70b9\u7684\u6570\u636e\u83b7\u53d6\u52a8\u4f5c\u3002\n\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u67d0\u4e9b\u4e0d\u5fc5\u8981\u7684\u526f\u4f5c\u7528\u3002\n\u56e0\u4e3a\u6570\u636e\u7684\u91cd\u65b0\u83b7\u53d6\u53ef\u80fd\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u5378\u8f7d\u6216\u91cd\u65b0\u6302\u8f7d\uff0c\u751a\u81f3\u8fdc\u5728\u6267\u884c\u6587\u4ef6\u4e0a\u4f20\u5904\u7406\u7684\u6b65\u9aa4\u4e4b\u524d\u3002\n\u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query/issues/2960"},"\u6b64 Issue")," \u4ee5\u4e86\u89e3\u95ee\u9898\u80cc\u666f\u53ca\u76f8\u5173\u7684\u89e3\u51b3\u529e\u6cd5\u3002"))}d.isMDXComponent=!0}}]);