"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[2228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 disabling-queries"},l=void 0,o={unversionedId:"guides&concepts/disabling-queries",id:"guides&concepts/disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 disabling-queries",description:"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528enabled = false\u9009\u9879\u3002",source:"@site/v3-react/guides&concepts/disabling-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/disabling-queries",permalink:"/react-query-web-i18n/v3-react/guides&concepts/disabling-queries",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/guides&concepts/disabling-queries.md",tags:[],version:"current",lastUpdatedAt:1678687079,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 disabling-queries"},sidebar:"default",previous:{title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0 window-focus-refetching",permalink:"/react-query-web-i18n/v3-react/guides&concepts/window-focus-refetching"},next:{title:"\u67e5\u8be2\u91cd\u8bd5 query-retries",permalink:"/react-query-web-i18n/v3-react/guides&concepts/query-retries"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"enabled = false"),"\u9009\u9879\u3002"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u5df2\u7f13\u5b58\u4e86\u6570\u636e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"status === 'success'"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"isSuccess"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u6ca1\u6709\u7f13\u5b58\u7684\u6570\u636e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"status === 'idle'"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"isIdle"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u5c06\u4e0d\u4f1a\u5728\u6302\u8f7d\u65f6\u81ea\u52a8\u83b7\u53d6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u6302\u8f7d\u65b0\u5b9e\u4f8b\u6216\u51fa\u73b0\u65b0\u5b9e\u4f8b\u65f6\uff0c\u67e5\u8be2\u4e0d\u4f1a\u81ea\u52a8\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u5c06\u5ffd\u7565\u67e5\u8be2\u5ba2\u6237\u7aef\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"invalidateQueries"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"refetchQueries"),"\u8c03\u7528\uff0c\u8fd9\u4e9b\u8c03\u7528\u901a\u5e38\u4f1a\u5bfc\u81f4\u67e5\u8be2\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refetch"),"\u53ef\u7528\u4e8e\u624b\u52a8\u89e6\u53d1\u67e5\u8be2\u4ee5\u8fdb\u884c\u6570\u636e\u83b7\u53d6\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function Todos() {\n  const { isIdle, isLoading, isError, data, error, refetch, isFetching } =\n    useQuery("todos", fetchTodoList, {\n      enabled: false,\n    });\n\n  return (\n    <>\n      <button onClick={() => refetch()}>Fetch Todos</button>\n\n      {isIdle ? (\n        "Not ready..."\n      ) : isLoading ? (\n        <span>Loading...</span>\n      ) : isError ? (\n        <span>Error: {error.message}</span>\n      ) : (\n        <>\n          <ul>\n            {data.map((todo) => (\n              <li key={todo.id}>{todo.title}</li>\n            ))}\n          </ul>\n          <div>{isFetching ? "Fetching..." : null}</div>\n        </>\n      )}\n    </>\n  );\n}\n')))}d.isMDXComponent=!0}}]);