"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"queries",title:"\u67e5\u8be2 queries"},o=void 0,l={unversionedId:"guides&concepts/queries",id:"guides&concepts/queries",title:"\u67e5\u8be2 queries",description:"\u67e5\u8be2\u57fa\u7840",source:"@site/v3-react/guides&concepts/queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/queries",permalink:"/react-query-web-i18n/v3-react/guides&concepts/queries",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/v3-react/guides&concepts/queries.md",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"queries",title:"\u67e5\u8be2 queries"},sidebar:"default",previous:{title:"\u91cd\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e important-defaults",permalink:"/react-query-web-i18n/v3-react/guides&concepts/important-defaults"},next:{title:"\u67e5\u8be2\u7684\u952e\u503c query-keys",permalink:"/react-query-web-i18n/v3-react/guides&concepts/query-keys"}},s={},u=[{value:"\u67e5\u8be2\u57fa\u7840",id:"\u67e5\u8be2\u57fa\u7840",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u67e5\u8be2\u57fa\u7840"},"\u67e5\u8be2\u57fa\u7840"),(0,a.kt)("p",null,"\u67e5\u8be2\u662f\u4e00\u79cd\u5bf9\u4e8e\u4e0e",(0,a.kt)("strong",{parentName:"p"},"\u552f\u4e00\u952e\u503c"),"\u76f8\u5173\u8054\u7684\u5f02\u6b65\u6570\u636e\u6e90\u7684\u58f0\u660e\u6027\u4f9d\u8d56\u3002\n\u67e5\u8be2\u53ef\u4ee5\u4e0e\u4efb\u4f55\u57fa\u4e8e Promise \u7684\u65b9\u6cd5\uff08\u5305\u62ec GET \u548c POST \u65b9\u6cd5\uff09\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u6570\u636e\u3002\n\u5982\u679c\u60a8\u7684\u65b9\u6cd5\u4fee\u6539\u4e86\u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\uff0c\u5efa\u8bae\u60a8\u6539\u7528",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/docs/guides/mutations"},"Mutations"),"\u3002"),(0,a.kt)("p",null,"\u8981\u5728\u4f60\u7684\u7ec4\u4ef6\u6216\u81ea\u5b9a\u4e49 Hook \u4e2d\u8ba2\u9605\u4e00\u4e2a\u67e5\u8be2\uff0c\u81f3\u5c11\u9700\u8981\u4ee5\u4e0b\u7684\u53c2\u6570\u6765\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"Hook\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u7684\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u552f\u4e00\u7684\u952e\u503c")),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8fd4\u56de Promise \u7684\u51fd\u6570\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89e3\u6790\u6570\u636e\u6216"),(0,a.kt)("li",{parentName:"ul"},"\u629b\u51fa\u9519\u8bef")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { useQuery } from "react-query";\n\nfunction App() {\n  const info = useQuery("todos", fetchTodoList);\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u552f\u4e00\u952e\u503c\u5c06\u5728\u5185\u90e8\u7528\u4e8e\u5728\u6574\u4e2a\u7a0b\u5e8f\u4e2d\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u3001\u7f13\u5b58\u548c\u5171\u4eab\u67e5\u8be2\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u8fd4\u56de\u7684\u67e5\u8be2\u7ed3\u679c\u5c06\u5305\u542b\u6709\u6240\u6709\u5173\u4e8e\u6392\u7248(templating)\u548c\u6570\u636e\u6240\u9700\u8981\u7684\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const result = useQuery("todos", fetchTodoList);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"result"),"\u5bf9\u8c61\u5305\u542b\u4e00\u4e9b\u975e\u5e38\u91cd\u8981\u7684\u72b6\u6001\uff0c\u60a8\u9700\u8981\u6ce8\u610f\u8fd9\u4e9b\u72b6\u6001\u624d\u80fd\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002\n\u5728\u4efb\u4f55\u7ed9\u5b9a\u65f6\u523b\uff0c\u67e5\u8be2\u53ea\u80fd\u5904\u4e8e\u4ee5\u4e0b\u72b6\u6001\u4e4b\u4e00\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isLoading")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"status === 'loading'")," - \u67e5\u8be2\u6ca1\u6709\u6570\u636e\uff0c\u6b63\u5728\u83b7\u53d6\u7ed3\u679c\u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isError")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"status === 'error'")," - \u67e5\u8be2\u9047\u5230\u4e00\u4e2a\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isSuccess")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"status === 'success'")," - \u67e5\u8be2\u6210\u529f\uff0c\u5e76\u4e14\u6570\u636e\u53ef\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isIdle")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"status === 'idle'")," - \u67e5\u8be2\u5904\u4e8e\u7981\u7528\u72b6\u6001\uff08\u7a0d\u540e\u5c06\u8fdb\u4e00\u6b65\u8bb2\u89e3\u6709\u5173\u5185\u5bb9\uff09")),(0,a.kt)("p",null,"\u9664\u4e86\u8fd9\u4e9b\u4e3b\u8981\u72b6\u6001\u4e4b\u5916\uff0c\u53d6\u51b3\u4e8e\u5177\u4f53\u67e5\u8be2\u7684\u72b6\u6001\uff0c\u8fd8\u6709\u66f4\u591a\u4fe1\u606f\u53ef\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error")," - \u5982\u679c\u67e5\u8be2\u5904\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"isError"),"\u72b6\u6001\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"error"),"\u5c5e\u6027\u83b7\u53d6\u8be5\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," - \u5982\u679c\u67e5\u8be2\u5904\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"success"),"\u72b6\u6001\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"data"),"\u5c5e\u6027\u83b7\u5f97\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isFetching")," - \u5728\u5176\u4ed6\u4efb\u4f55\u72b6\u6001\u4e0b\uff0c\u5982\u679c\u67e5\u8be2\u5728\u83b7\u53d6\u4e2d\uff08\u5305\u62ec\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e\uff09\uff0c\u5219",(0,a.kt)("inlineCode",{parentName:"li"},"isFetching"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u5bf9\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u5927\u591a\u6570"),"\u67e5\u8be2\uff0c\u901a\u5e38\u5148\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"isLoading"),"\u72b6\u6001\uff0c\u7136\u540e\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"isError"),"\u72b6\u6001\uff0c\u6700\u540e\u5047\u8bbe\u6570\u636e\u53ef\u7528\u5e76\u5448\u73b0\u6210\u529f\u72b6\u6001\u5c31\u8db3\u591f\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Todos() {\n  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList);\n\n  if (isLoading) {\n    return <span>Loading...</span>;\n  }\n\n  if (isError) {\n    return <span>Error: {error.message}</span>;\n  }\n\n  // \u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5047\u8bbe `isSuccess === true`\n  return (\n    <ul>\n      {data.map((todo) => (\n        <li key={todo.id}>{todo.title}</li>\n      ))}\n    </ul>\n  );\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u559c\u6b22\u5e03\u5c14\u503c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\u67e5\u8be2\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Todos() {\n  const { status, data, error } = useQuery("todos", fetchTodoList);\n\n  if (status === "loading") {\n    return <span>Loading...</span>;\n  }\n\n  if (status === "error") {\n    return <span>Error: {error.message}</span>;\n  }\n\n  // \u4e5f\u662f `status ===\'success\'`\uff0c\u4f46\u662f \u201celse\u201d \u903b\u8f91\u4e5f\u8d77\u4f5c\u7528\n  return (\n    <ul>\n      {data.map((todo) => (\n        <li key={todo.id}>{todo.title}</li>\n      ))}\n    </ul>\n  );\n}\n')),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6267\u884c\u72b6\u6001\u68c0\u67e5\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u611f\u5174\u8da3\u7684\u8bdd\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/community/tkdodos-blog#4-status-checks-in-react-query"},"\u6b64\u793e\u533a\u8d44\u6e90")))}c.isMDXComponent=!0}}]);