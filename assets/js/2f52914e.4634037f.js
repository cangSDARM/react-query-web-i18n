"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"network-mode",title:"\u7f51\u7edc\u6a21\u5f0f Network Mode"},l=void 0,o={unversionedId:"guides&concepts/network-mode",id:"guides&concepts/network-mode",title:"\u7f51\u7edc\u6a21\u5f0f Network Mode",description:"React Query \u63d0\u4f9b\u4e86\u4e09\u79cd\u4e0d\u540c\u7684\u7f51\u7edc\u6a21\u5f0f\uff0c\u4ee5\u786e\u5b9a\u5728\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u548c\u4fee\u6539\u5e94\u5982\u4f55\u8868\u73b0\u3002",source:"@site/vue/guides&concepts/network-mode.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/network-mode",permalink:"/react-query-web-i18n/vue/guides&concepts/network-mode",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/guides&concepts/network-mode.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"network-mode",title:"\u7f51\u7edc\u6a21\u5f0f Network Mode"},sidebar:"zhCN",previous:{title:"\u67e5\u8be2\u51fd\u6570 Query Functions",permalink:"/react-query-web-i18n/vue/guides&concepts/query-functions"},next:{title:"\u5e76\u884c\u67e5\u8be2 Parallel Queries",permalink:"/react-query-web-i18n/vue/guides&concepts/parallel-queries"}},p={},u=[{value:"\u6a21\u5f0f: online",id:"\u6a21\u5f0f-online",level:2},{value:"\u6a21\u5f0f: always",id:"\u6a21\u5f0f-always",level:2},{value:"\u6a21\u5f0f: offlineFirst",id:"\u6a21\u5f0f-offlinefirst",level:2},{value:"\u5f00\u53d1\u8005\u5de5\u5177",id:"\u5f00\u53d1\u8005\u5de5\u5177",level:2},{value:"\u5b57\u6bb5\u7c7b\u578b\u7b7e\u540d",id:"\u5b57\u6bb5\u7c7b\u578b\u7b7e\u540d",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u63d0\u4f9b\u4e86\u4e09\u79cd\u4e0d\u540c\u7684\u7f51\u7edc\u6a21\u5f0f\uff0c\u4ee5\u786e\u5b9a\u5728\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/guides&concepts/queries"},"\u67e5\u8be2"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/guides&concepts/mutations"},"\u4fee\u6539"),"\u5e94\u5982\u4f55\u8868\u73b0\u3002\n\u8fd9\u51e0\u79cd\u6a21\u5f0f\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u67e5\u8be2/\u4fee\u6539\u5355\u72ec\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5168\u5c40\u8bbe\u7f6e\u67e5\u8be2/\u4fee\u6539\u7684\u9ed8\u8ba4\u503c\u505a\u5230\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e React Query \u901a\u5e38\u4e0e\u6570\u636e\u83b7\u53d6\u5e93(axios/fetch)\u7ed3\u5408\u4f7f\u7528\uff0c\u6240\u4ee5\u9ed8\u8ba4\u7684\u7f51\u7edc\u6a21\u5f0f\u662f",(0,a.kt)("a",{parentName:"p",href:"#%E6%A8%A1%E5%BC%8F-online"},"online"),"\u3002"),(0,a.kt)("h2",{id:"\u6a21\u5f0f-online"},"\u6a21\u5f0f: online"),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u9664\u975e\u4f60\u6709\u7f51\u7edc\u8fde\u63a5\uff0c\u5426\u5219\u67e5\u8be2\u548c\u4fee\u6539\u4e0d\u4f1a\u8fdb\u884c\u3002\u8fd9\u662f\u9ed8\u8ba4\u6a21\u5f0f\u3002\n\u4e00\u4e2a\u67e5\u8be2\u88ab\u542f\u52a8\u65f6\uff0c\u5982\u679c\u56e0\u4e3a\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5\u800c\u65e0\u6cd5\u83b7\u53d6\uff0c\u5b83\u5c06\u59cb\u7ec8\u4fdd\u6301\u5728\u540c\u6837\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),"\uff09\u4e2d\u3002\u5982\u679c\u4f60\u6709\u5176\u4ed6\u9700\u6c42\uff0c",(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/guides&concepts/queries#fetchstatus"},"fetchStatus"),"API \u88ab\u989d\u5916\u66b4\u9732\u3002\u8fd9\u53ef\u4ee5\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetching"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"queryFn")," \u51c6\u5907\u83b7\u53d6\uff0c\u8bf7\u6c42\u5df2\u5c31\u7eea"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"paused"),": \u67e5\u8be2\u6ca1\u6709\u6267\u884c\uff0c\u5b83",(0,a.kt)("inlineCode",{parentName:"li"},"paused"),"\u76f4\u5230\u7f51\u7edc\u6062\u590d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idle"),": \u8bf7\u6c42\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"fetching"),"\u4e5f\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"paused"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isFetching"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"isPaused"),"\u662f\u4ece\u8fd9\u4e2a\u72b6\u6001\u6d3e\u751f\u51fa\u6765\u7684\uff0c\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u4e5f\u516c\u5f00\u4e86\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u8bb0\u4f4f\uff0c\u4e3a\u4e86\u663e\u793a\u4e00\u4e2a\u52a0\u8f7d UI\uff0c\u4ec5\u4ec5\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),"\u72b6\u6001\u53ef\u80fd\u8fd8\u4e0d\u591f\u3002\u67e5\u8be2\u53ef\u4ee5\u5904\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"state: 'loading'"),"\uff0c\u4f46",(0,a.kt)("inlineCode",{parentName:"p"},"fetchStatus: 'paused'"),"--\u5982\u679c\u7ec4\u4ef6\u662f\u7b2c\u4e00\u6b21\u88ab\u6302\u8f7d\uff0c\u800c\u4e14\u78b0\u5de7\u4f60\u8fd8\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u56e0\u4e3a\u4f60\u5728\u7ebf\u800c\u8fd0\u884c\u4e86\uff0c\u4f46\u5728\u83b7\u53d6\u672a\u7ed3\u675f\u65f6\u79bb\u7ebf\u4e86\uff0cReact Query \u4f1a\u6682\u505c\u91cd\u8bd5\u673a\u5236\u3002\u4e00\u65e6\u4f60\u91cd\u65b0\u94fe\u63a5\u4e0a\u7f51\u7edc\uff0c\u6682\u505c\u7684\u67e5\u8be2\u5c06\u7ee7\u7eed\u8fd0\u884c\u3002\n\u8fd9\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"refetchOnReconnect"),"\uff08\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u4e5f\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff09\u65e0\u5173\uff0c\u56e0\u4e3a\u8fd9\u4e0d\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"refetch"),"\uff0c\u800c\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"continue"),"\u3002\u5982\u679c\u5728\u6b64\u671f\u95f4\u67e5\u8be2\u88ab",(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/guides&concepts/query-cancellation"},"\u53d6\u6d88"),"\uff0c\u5b83\u5c06\u4e0d\u4f1a\u7ee7\u7eed\u3002"),(0,a.kt)("h2",{id:"\u6a21\u5f0f-always"},"\u6a21\u5f0f: always"),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0cReact Query \u4f1a\u4e00\u76f4\u5c1d\u8bd5\u83b7\u53d6\u5e76\u5ffd\u7565\u5728\u7ebf/\u79bb\u7ebf\u72b6\u6001\u3002\u5982\u679c\u4f60\u5728\u4e00\u4e2a\u4e0d\u9700\u8981\u7f51\u7edc\u8fde\u63a5\u7684\u73af\u5883\u4e2d\u4f7f\u7528 React Query\uff0c\u8fd9\u53ef\u80fd\u662f\u4f60\u60f3\u8981\u9009\u62e9\u7684\u6a21\u5f0f--\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u53ea\u662f\u60f3\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage"),"\u4e2d\u8bfb\u53d6\u4e00\u4e9b\u6570\u636e\uff0c\u6216\u8005\u4f60\u53ea\u662f\u60f3\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"queryFn"),"\u4e2d\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.resolve(5)"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6c38\u8fdc\u4e0d\u4f1a\u5904\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"paused"),'\uff0c\u56e0\u4e3a\u4f60"\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5"'),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u8bd5\u4e5f\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u8c03\u7528\uff0c\u67e5\u8be2\u5931\u8d25\u65f6\u5c31\u4f1a\u629b",(0,a.kt)("inlineCode",{parentName:"li"},"error"),"\u56de\u6765"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refetchOnReconnect"),"\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"false"),'\uff0c\u56e0\u4e3a"\u91cd\u65b0\u8fde\u63a5\u7f51\u7edc"\u4e0d\u518d\u662f\u4e00\u4e2a\u53ef\u80fd\u51fa\u73b0\u7684\u60c5\u5f62\uff0c\u8fc7\u65f6\u7684\u67e5\u8be2\u5e94\u8be5\u88ab\u7acb\u5373\u91cd\u8bd5\u3002\u5f53\u7136\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e3a',(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5982\u679c\u6709\u9700\u8981\u7684\u8bdd")),(0,a.kt)("h2",{id:"\u6a21\u5f0f-offlinefirst"},"\u6a21\u5f0f: offlineFirst"),(0,a.kt)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u662f\u524d\u4e24\u4e2a\u9009\u9879\u4e4b\u95f4\u7684\u4e2d\u95f4\u5730\u5e26\uff0cReact Query \u5c06\u8fd0\u884c\u4e00\u6b21",(0,a.kt)("inlineCode",{parentName:"p"},"queryFn"),"\uff0c\u4f46\u968f\u540e\u6682\u505c\u91cd\u8bd5\u3002\n\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u7528\u4e8e\u62e6\u622a\u8bf7\u6c42\u8fdb\u884c\u7f13\u5b58\u7684 ServiceWorker\uff0c\u6bd4\u5982\u5728",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers"},"\u79bb\u7ebf\u4f18\u5148\u7684 PWA"),"\uff0c\u6216\u8005\u4f60\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#the_cache-control_header"},"Cache-Control header"),"\u4f7f\u7528 HTTP \u7f13\u5b58\uff0c\u8fd9\u5c31\u975e\u5e38\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u6b21\u83b7\u53d6\u53ef\u80fd\u4f1a\u6210\u529f\uff0c\u56e0\u4e3a\u5b83\u6765\u81ea\u4e00\u4e2a\u79bb\u7ebf\u5b58\u50a8/\u7f13\u5b58\u3002\n\u7136\u800c\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u7f13\u5b58\u7f3a\u5931\uff0c\u7f51\u7edc\u8bf7\u6c42\u5c06\u6267\u884c\u5e76\u5931\u8d25\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u884c\u4e3a\u5c31\u50cf\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"online"),"\u7684\u67e5\u8be2--\u6682\u505c\u91cd\u8bd5\u3002"),(0,a.kt)("h2",{id:"\u5f00\u53d1\u8005\u5de5\u5177"},"\u5f00\u53d1\u8005\u5de5\u5177"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/getstarted/devtools"},"React Query Devtools"),"\u5c06\u663e\u793a\u90a3\u4e9b\u6b63\u5728\u83b7\u53d6\uff0c\u4f46\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"paused"),"\u72b6\u6001\u7684\u67e5\u8be2\u3002\u540c\u65f6\uff0c\u5176\u4e2d\u4e5f\u6709\u4e00\u4e2a\u5207\u6362\u6309\u94ae\u6765",(0,a.kt)("em",{parentName:"p"},"\u6a21\u62df\u79bb\u7ebf\u884c\u4e3a"),"\u3002\n\u4f46\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e2a\u6309\u94ae\u5b9e\u9645\u4e0a\u4e0d\u4f1a\u6270\u4e71\u4f60\u7684\u7f51\u7edc\u8fde\u63a5\uff08\u50cf\u4f60\u5728\u6d4f\u89c8\u5668\u7684 devtools \u4e2d\u505a\u7684\u90a3\u6837\uff09\uff0c\u4f46\u5b83\u4f1a\u5c06",(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/reference/OnlineManager"},"OnlineManager"),"\u8bbe\u7f6e\u4e3a\u79bb\u7ebf\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u5b57\u6bb5\u7c7b\u578b\u7b7e\u540d"},"\u5b57\u6bb5\u7c7b\u578b\u7b7e\u540d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"networkMode: 'online' | 'always' | 'offlineFirst'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u9009\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"'online'"))))))}s.isMDXComponent=!0}}]);