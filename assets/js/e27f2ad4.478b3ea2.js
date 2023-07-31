"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,d=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"important-defaults",title:"\u91cd\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e Important Defaults"},i=void 0,o={unversionedId:"guides&concepts/important-defaults",id:"guides&concepts/important-defaults",title:"\u91cd\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e Important Defaults",description:"\u5728\u5f00\u7bb1\u5373\u7528\u7684\u60c5\u51b5\u4e0b\uff0cVue Query \u914d\u7f6e\u4e86\u6fc0\u8fdb\u4f46\u8fd8\u7b97\u7406\u667a\u7684\u9ed8\u8ba4\u503c\u3002",source:"@site/vue/guides&concepts/important-defaults.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/important-defaults",permalink:"/react-query-web-i18n/vue/guides&concepts/important-defaults",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/vue/guides&concepts/important-defaults.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"important-defaults",title:"\u91cd\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e Important Defaults"},sidebar:"zhCN",previous:{title:"GraphQL",permalink:"/react-query-web-i18n/vue/getstarted/graphql"},next:{title:"\u67e5\u8be2 Queries",permalink:"/react-query-web-i18n/vue/guides&concepts/queries"}},p={},u=[],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5f00\u7bb1\u5373\u7528\u7684\u60c5\u51b5\u4e0b\uff0cVue Query \u914d\u7f6e\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u6fc0\u8fdb\u4f46\u8fd8\u7b97\u7406\u667a"),"\u7684\u9ed8\u8ba4\u503c\u3002\n\u6709\u65f6\uff0c\u8fd9\u4e9b\u9ed8\u8ba4\u503c\u6709\u65f6\u4f1a\u8ba9\u65b0\u7528\u6237\u63aa\u624b\u4e0d\u53ca\uff0c\u6216\u8005\u8bf4\u5982\u679c\u7528\u6237\u4e0d\u77e5\u9053\u5b83\u4eec\uff0c\u5219\u4f1a",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u5b66\u4e60/\u8c03\u8bd5\u53d8\u5f97\u56f0\u96be"),"\u3002\n\u5728\u7ee7\u7eed\u5b66\u4e60\u548c\u4f7f\u7528 Vue Query \u65f6\uff0c\u8bf7\u8bb0\u4f4f\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"useInfiniteQuery"),"\u751f\u6210\u7684\u67e5\u8be2\u5b9e\u4f8b\u4f1a",(0,a.kt)("em",{parentName:"li"},"\u5c06\u7f13\u5b58\u7684\u6570\u636e\u89c6\u4e3a\u8fc7\u65f6(stale)\u7684"),"\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8981\u66f4\u6539\u6b64\u884c\u4e3a\uff0c\u53ef\u4ee5\u5728\u5168\u5c40\u6216\u8005\u5728\u5355\u4e2a\u67e5\u8be2\u4e2d\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"staleTime"),"\u9009\u9879\u3002\u6307\u5b9a\u66f4\u957f\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"staleTime"),"\u610f\u5473\u7740\u67e5\u8be2\u5c06\u4e0d\u4f1a\u50cf\u4ee5\u524d\u90a3\u6837\u9891\u7e41\u5730\u91cd\u65b0\u83b7\u53d6\u5176\u6570\u636e")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u51fa\u73b0\u4ee5\u4e0b\u60c5\u51b5\u65f6\uff0c\u8fc7\u65f6\u7684\u67e5\u8be2\u4f1a\u5728\u540e\u53f0\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6\u6570\u636e:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u65b0\u7684\u67e5\u8be2\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u91cd\u65b0\u805a\u7126"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u91cd\u65b0\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u53ef\u9009\u5730\u914d\u7f6e\u6709\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u7684\u95f4\u9694(refetch interval)")))),(0,a.kt)("p",null,"\u5982\u679c\u67d0\u4e9b\u91cd\u65b0\u83b7\u53d6\u7684\u6570\u636e\u4e0d\u662f\u4f60\u6240\u671f\u671b\u7684\uff0c\u90a3\u4e48\u5f88\u5927\u53ef\u80fd\u662f\u4f60\u91cd\u65b0\u83b7\u53d6\u4e86\u7a97\u53e3\u7126\u70b9(\u6b64\u65f6 Vue Query \u6b63\u5728\u5904\u7406",(0,a.kt)("inlineCode",{parentName:"p"},"refetchOnWindowFocus"),")\u3002",(0,a.kt)("em",{parentName:"p"},"\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0c\u8fd9\u53ef\u80fd\u4f1a\u66f4\u9891\u7e41\u5730\u89e6\u53d1"),"\uff0c\u7279\u522b\u662f\u5728\u6d4f\u89c8\u5668\u7684 Devtools \u548c\u4f60\u7684\u5e94\u7528\u4e4b\u95f4\u4e92\u76f8\u5207\u6362\u4e5f\u4f1a\u5bfc\u81f4\u83b7\u53d6\uff0c\u6240\u4ee5\u8bf7\u989d\u5916\u6ce8\u610f\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8981\u66f4\u6539\u6b64\u529f\u80fd\uff0c\u53ef\u4ee5\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"refetchOnMount"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"refetchOnWindowFocus"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"refetchOnReconnect"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"refetchInterval"),"\u4e4b\u7c7b\u7684\u9009\u9879\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u67e5\u8be2\u7ed3\u679c\u4e0d\u518d\u5177\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),'\u6216\u67e5\u8be2\u89c2\u5bdf\u8005(query observers)\u7684\u6d3b\u52a8\u5b9e\u4f8b(active instances)\u65f6\uff0c\u8be5\u67e5\u8be2\u7ed3\u679c\u5c06\u88ab\u6807\u8bb0\u4e3a"\u975e\u6d3b\u52a8"\uff0c\u5e76\u4fdd\u7559\u5728\u7f13\u5b58\u4e2d\uff0c\u4ee5\u9632\u4ee5\u540e\u518d\u6b21\u4f7f\u7528\u3002')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c"\u975e\u6d3b\u52a8"\u67e5\u8be2\u4f1a\u5728',(0,a.kt)("strong",{parentName:"p"},"5 \u5206\u949f"),"\u540e\u88ab\u5783\u573e\u6536\u96c6\u3002"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8981\u66f4\u6539\u6b64\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u5c06\u67e5\u8be2\u7684\u9ed8\u8ba4",(0,a.kt)("inlineCode",{parentName:"p"},"cacheTime"),"\u66f4\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"1000 * 60 * 5"),"\u6beb\u79d2\u4ee5\u5916\u7684\u5176\u4ed6\u503c\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5931\u8d25\u7684\u67e5\u8be2\u5c06",(0,a.kt)("strong",{parentName:"li"},"\u9759\u9ed8\u91cd\u8bd5 3 \u6b21"),"\uff0c\u5728\u6355\u83b7\u5e76\u5411 UI \u663e\u793a\u9519\u8bef\u4e4b\u524d\uff0c\u4f1a\u6709",(0,a.kt)("strong",{parentName:"li"},"\u6307\u6570\u7ea7\u7684\u540e\u9000\u5ef6\u8fdf(exponential backoff delay)"),"\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8981\u66f4\u6539\u8fd9\u4e00\u70b9\uff0c\u4f60\u53ef\u4ee5\u5c06\u67e5\u8be2\u7684\u9ed8\u8ba4",(0,a.kt)("inlineCode",{parentName:"p"},"retry"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"retryDelay"),"\u9009\u9879\u66f4\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"3"),"\u4e4b\u5916\u7684\u5176\u4ed6\u503c\u6216\u6307\u6570\u540e\u9000\u51fd\u6570\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u7ed3\u679c",(0,a.kt)("strong",{parentName:"li"},"\u5728\u7ed3\u6784\u4e0a\u662f\u5171\u4eab\u7684\uff0c\u4ee5\u68c0\u6d4b\u6570\u636e\u662f\u5426\u786e\u5b9e\u53d1\u751f\u4e86\u66f4\u6539"),"\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219",(0,a.kt)("strong",{parentName:"li"},"\u6570\u636e\u7684\u5f15\u7528\u4fdd\u6301\u4e0d\u53d8"),"\uff0c\u4ee5\u66f4\u597d\u5730\u5e2e\u52a9",(0,a.kt)("inlineCode",{parentName:"li"},"useMemo"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"useCallback"),"\u8fdb\u884c\u503c\u7a33\u5b9a\u5316(value stabilization)\u3002\u5982\u679c\u8fd9\u4e2a\u6982\u5ff5\u542c\u8d77\u6765\u5f88\u964c\u751f\uff0c\u90a3\u4e48\u4e0d\u8981\u62c5\u5fc3\uff0199.9\uff05\u7684\u65f6\u95f4\u4f60\u4e0d\u9700\u8981\u7981\u7528\u6b64\u529f\u80fd\uff0c\u5b83\u4f1a\u8ba9\u4f60\u7684\u5e94\u7528\u5728\u96f6\u6210\u672c\u7684\u60c5\u51b5\u4e0b\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7ed3\u6784\u5171\u4eab\u4ec5\u9002\u7528\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u4e0e JSON \u517c\u5bb9\u7684\u503c"),"\uff0c\u4efb\u4f55\u5176\u4ed6\u503c\u7c7b\u578b\u5c06\u59cb\u7ec8\u88ab\u89c6\u4e3a\u5df2\u66f4\u6539\u7684\u3002\u4f8b\u5982\uff0c\u5982\u679c\u7531\u4e8e\u54cd\u5e94\u8fc7\u5927\u800c\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"config.structuralSharing"),"\u6765\u7981\u7528\u6b64\u529f\u80fd\u3002 \u5982\u679c\u8981\u5728\u67e5\u8be2\u54cd\u5e94\u4e2d\u5904\u7406\u975e JSON \u517c\u5bb9\u503c\uff0c\u5e76\u4e14\u4ecd\u60f3\u68c0\u6d4b\u6570\u636e\u662f\u5426\u5df2\u66f4\u6539\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"config.isDataEqual"),"\u6765\u81ea\u5b9a\u4e49\u4e00\u4e2a\u6570\u636e\u6bd4\u8f83\u51fd\u6570\u3002")))}m.isMDXComponent=!0}}]);