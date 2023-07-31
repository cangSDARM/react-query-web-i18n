"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"prefetching",title:"\u9884\u53d6\u6570\u636e Prefetching"},c=void 0,o={unversionedId:"guides&concepts/prefetching",id:"guides&concepts/prefetching",title:"\u9884\u53d6\u6570\u636e Prefetching",description:"\u5982\u679c\u4f60\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01",source:"@site/react/guides&concepts/prefetching.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/prefetching",permalink:"/react-query-web-i18n/react/guides&concepts/prefetching",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/guides&concepts/prefetching.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"prefetching",title:"\u9884\u53d6\u6570\u636e Prefetching"},sidebar:"zhCN",previous:{title:"\u521d\u59cb\u5316\u7684\u67e5\u8be2\u6570\u636e Initial Query Data",permalink:"/react-query-web-i18n/react/guides&concepts/initial-query-data"},next:{title:"\u4fee\u6539 Mutations",permalink:"/react-query-web-i18n/react/guides&concepts/mutations"}},l={},p=[{value:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"prefetchQuery"),"\u65b9\u6cd5\u9884\u53d6\u8981\u653e\u5165\u7f13\u5b58\u7684\u67e5\u8be2\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const prefetchTodos = async () => {\n  // \u8be5\u67e5\u8be2\u7684\u7ed3\u679c\u5c06\u50cf\u666e\u901a\u67e5\u8be2\u4e00\u6837\u88ab\u7f13\u5b58\n  await queryClient.prefetchQuery({\n    queryKey: ["todos"],\n    queryFn: fetchTodos,\n  });\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u67e5\u8be2\u7684\u6570\u636e\u5df2\u7ecf\u5728\u7f13\u5b58\u4e2d\u5e76\u4e14",(0,a.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u5931\u6548"),"\uff0c\u5219\u5c06\u4e0d\u4f1a\u83b7\u53d6\u8be5\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime"),"\u88ab\u4f20\u9012\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"prefetchQuery(['todos'], fn, {staleTime\uff1a5000})"),"\uff0c\u5f53\u6570\u636e\u65e9\u4e8e\u6307\u5b9a\u7684 staleTime \u65f6\uff0c\u5219\u67e5\u8be2\u5c06\u53bb\u5c1d\u8bd5\u83b7\u53d6\u65b0\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u9884\u53d6\u7684\u67e5\u8be2\u6ca1\u6709\u51fa\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery"),"\u5b9e\u4f8b\uff0c\u5219\u5c06\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"cacheTime"),"\u6307\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e\u88ab\u5220\u9664\u5e76\u88ab\u5783\u573e\u56de\u6536")),(0,a.kt)("h2",{id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"},"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u540c\u6b65\u53ef\u7528\u7684\u67e5\u8be2\u6570\u636e\uff0c\u5219\u65e0\u9700\u9884\u53d6\u3002\n\u4f60\u53ef\u4ee5\u53ea\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/react/reference/QueryClient#queryclientsetquerydata"},"Query Client \u7684",(0,a.kt)("inlineCode",{parentName:"a"},"setQueryData"),"\u65b9\u6cd5"),"\u76f4\u63a5\u6309\u952e\u503c\u6dfb\u52a0\u6216\u66f4\u65b0\u67e5\u8be2\u7684\u7f13\u5b58\u7ed3\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'queryClient.setQueryData(["todos"], todos);\n')),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u6df1\u5165\u4e86\u89e3\u5982\u4f55\u5728\u83b7\u53d6\u6570\u636e\u4e4b\u524d\u5c06\u5176\u653e\u5165\u67e5\u8be2\u7f13\u5b58\uff0c\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/community/tkdodos-blog#17-seeding-the-query-cache"},"\u6b64\u793e\u533a\u8d44\u6e90")))}d.isMDXComponent=!0}}]);