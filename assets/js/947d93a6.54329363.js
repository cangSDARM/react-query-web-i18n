"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"testing",title:"\u6d4b\u8bd5 testing"},o=void 0,l={unversionedId:"guides&concepts/testing",id:"guides&concepts/testing",title:"\u6d4b\u8bd5 testing",description:"React Query \u662f\u901a\u8fc7 hook \u5de5\u4f5c\u7684\u2014\u2014\u8981\u4e48\u662f\u6211\u4eec\u63d0\u4f9b\u7684 hook\uff0c\u8981\u4e48\u662f\u56f4\u7ed5\u5b83\u4eec\u5b9a\u5236\u7684 hook\u3002",source:"@site/v3-react/guides&concepts/testing.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/testing",permalink:"/react-query-web-i18n/v3-react/guides&concepts/testing",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/guides&concepts/testing.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"testing",title:"\u6d4b\u8bd5 testing"},sidebar:"default",previous:{title:"Suspense",permalink:"/react-query-web-i18n/v3-react/guides&concepts/suspense"},next:{title:"React Query\u662f\u5426\u4f1a/\u53ef\u4ee5\u53d6\u4ee3Redux\uff0cMobX\u6216\u5176\u4ed6\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5668\uff1f",permalink:"/react-query-web-i18n/v3-react/guides&concepts/does-this-replace-client-state"}},c={},p=[{value:"\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u6d4b\u8bd5",id:"\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u6d4b\u8bd5",level:2},{value:"\u5173\u95ed\u91cd\u8bd5\u673a\u5236",id:"\u5173\u95ed\u91cd\u8bd5\u673a\u5236",level:2},{value:"\u5173\u95ed\u5173\u4e8e\u7f51\u7edc\u7684\u9519\u8bef\u65e5\u5fd7",id:"\u5173\u95ed\u5173\u4e8e\u7f51\u7edc\u7684\u9519\u8bef\u65e5\u5fd7",level:2},{value:"\u5728 Jest \u4e2d\u5c06 <code>cacheTime</code> \u8bbe\u7f6e\u4e3a Infinity",id:"\u5728-jest-\u4e2d\u5c06-cachetime-\u8bbe\u7f6e\u4e3a-infinity",level:2},{value:"\u6d4b\u8bd5\u7f51\u7edc\u8c03\u7528",id:"\u6d4b\u8bd5\u7f51\u7edc\u8c03\u7528",level:2},{value:"\u6d4b\u8bd5 \u52a0\u8f7d\u66f4\u591a/\u65e0\u9650\u6eda\u52a8",id:"\u6d4b\u8bd5-\u52a0\u8f7d\u66f4\u591a\u65e0\u9650\u6eda\u52a8",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u662f\u901a\u8fc7 hook \u5de5\u4f5c\u7684\u2014\u2014\u8981\u4e48\u662f\u6211\u4eec\u63d0\u4f9b\u7684 hook\uff0c\u8981\u4e48\u662f\u56f4\u7ed5\u5b83\u4eec\u5b9a\u5236\u7684 hook\u3002"),(0,a.kt)("p",null,"\u5982\u6709\u9700\u8981\u4e3a\u8fd9\u4e9b\u81ea\u5b9a\u4e49 hook \u7f16\u5199\u5355\u5143\u6d4b\u8bd5\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/"},"React Hooks Testing Library"),"\u5e93\u6765\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @testing-library/react-hooks react-test-renderer --save-dev\n")),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"react-test-renderer")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"@testing-library/react-hooks")," \u7684\u5bf9\u7b49\u4f9d\u8d56\u9879\uff0c\u5b83\u9700\u8981\u4e0e\u60a8\u4f7f\u7528\u7684 React \u7248\u672c\u76f8\u5bf9\u5e94\u3002)"),(0,a.kt)("h2",{id:"\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u6d4b\u8bd5"},"\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4e00\u65e6\u5b89\u88c5\uff0c\u5c31\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u3002\u7ed9\u5b9a\u4e0b\u9762\u7684\u81ea\u5b9a\u4e49\u94a9\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export function useCustomHook() {\n  return useQuery("customHook", () => "Hello");\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4e3a\u6b64\u7f16\u5199\u4e00\u4e2a\u6d4b\u8bd5\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const queryClient = new QueryClient();\nconst wrapper = ({ children }) => (\n  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>\n);\n\nconst { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });\n\nawait waitFor(() => result.current.isSuccess);\n\nexpect(result.current.data).toEqual("Hello");\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u6784\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryClient")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryClientProvider"),"\u3002\u8fd9\u6709\u52a9\u4e8e\u786e\u4fdd\u6211\u4eec\u7684\u6d4b\u8bd5\u4e0e\u4efb\u4f55\u5176\u4ed6\u6d4b\u8bd5\u5b8c\u5168\u9694\u79bb\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u53ea\u7f16\u5199\u4e00\u6b21\u8be5\u5305\u88c5\u5668\uff0c\u4f46\u662f\u5982\u679c\u662f\u8fd9\u6837\uff0c\u5728\u6bcf\u6b21\u6d4b\u8bd5\u4e4b\u524d\uff0c\u6211\u4eec\u90fd\u9700\u8981\u6e05\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryClient")," \uff0c\u5e76\u4e14\u6d4b\u8bd5\u4e0d\u80fd\u5e76\u884c\u8fd0\u884c\uff0c\u5426\u5219\u4e00\u4e2a\u6d4b\u8bd5\u4f1a\u5f71\u54cd\u5176\u4ed6\u6d4b\u8bd5\u7684\u7ed3\u679c\u3002"),(0,a.kt)("h2",{id:"\u5173\u95ed\u91cd\u8bd5\u673a\u5236"},"\u5173\u95ed\u91cd\u8bd5\u673a\u5236"),(0,a.kt)("p",null,"React Query \u5e95\u5c42\u9ed8\u8ba4\u4ee5\u6307\u6570\u56de\u9000\u7684\u5f62\u5f0f\u91cd\u8bd5\u4e09\u6b21\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\u8981\u5904\u7406",(0,a.kt)("em",{parentName:"p"},"\u5e94\u8be5\u9519\u8bef\u7684\u6d4b\u8bd5"),"\u65f6\u6709\u53ef\u80fd\u4f1a\u9047\u5230\u8d85\u65f6\u7b49\u60c5\u51b5\u3002\u5173\u95ed\u91cd\u8bd5\u673a\u5236\u7684\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"QueryClientProvider"),"\u3002\u8ba9\u6211\u4eec\u5bf9\u4e0a\u9762\u7684\u793a\u4f8b\u8fdb\u884c\u7b80\u5355\u7684\u6269\u5c55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      // \u2705 turns retries off\n      retry: false,\n    },\n  },\n});\nconst wrapper = ({ children }) => (\n  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>\n);\n")),(0,a.kt)("p",null,'\u8fd9\u5c06\u5168\u5c40\u7684\u8bbe\u7f6e\u6240\u6709\u67e5\u8be2\u90fd\u662f"\u65e0\u91cd\u8bd5"\u7684\u3002\u5728',(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u663e\u793a\u7684\u542f\u7528\u4e86\u91cd\u8bd5\u65f6\uff0c\u8fd9\u4e0d\u4f1a\u751f\u6548\u3002\u5982\u4f60\u5728\u4e00\u6b21\u67e5\u8be2\u4e2d\u8bbe\u7f6e\u4e86\u9700\u8981 5 \u6b21\u91cd\u8bd5\u65f6\uff0c\u8fd9\u4e0d\u4f1a\u751f\u6548\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u7684\u5168\u5c40\u914d\u7f6e\u53ea\u662f\u4f5c\u4e3a fallback \u5b58\u5728\u3002"),(0,a.kt)("h2",{id:"\u5173\u95ed\u5173\u4e8e\u7f51\u7edc\u7684\u9519\u8bef\u65e5\u5fd7"},"\u5173\u95ed\u5173\u4e8e\u7f51\u7edc\u7684\u9519\u8bef\u65e5\u5fd7"),(0,a.kt)("p",null,"\u5728\u6d4b\u8bd5\u65f6\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u5173\u95ed\u5173\u4e8e\u7f51\u7edc\u9519\u8bef\u7684\u65e5\u5fd7(\u6587\u4ef6/Console)\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"setLogger()"),"\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5728\u4f60\u6d4b\u8bd5\u4e4b\u524d\uff0c\u8bbe\u7f6e\u5b83\nimport { setLogger } from "react-query";\n\nsetLogger({\n  log: console.log,\n  warn: console.warn,\n  // \u2705 console \u91cc\u6ca1\u6709\u9519\u8bef\u8bb0\u5f55\u4e86\n  error: () => {},\n});\n')),(0,a.kt)("h2",{id:"\u5728-jest-\u4e2d\u5c06-cachetime-\u8bbe\u7f6e\u4e3a-infinity"},"\u5728 Jest \u4e2d\u5c06 ",(0,a.kt)("inlineCode",{parentName:"h2"},"cacheTime")," \u8bbe\u7f6e\u4e3a Infinity"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"cacheTime")," \u8bbe\u7f6e\u4e3a 5 \u5206\u949f\u3002\u8fd9\u610f\u5473\u7740\u7f13\u5b58\u7684 GC \u8ba1\u65f6\u5668\u4f1a\u6bcf 5 \u5206\u949f\u89e6\u53d1\u4e00\u6b21\u3002\n\u5982\u679c\u4f7f\u7528 Jest\uff0c\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"cacheTime")," \u8bbe\u7f6e\u4e3a Infinity\uff0c\u4ee5\u9632\u6b62\u51fa\u73b0\u201cJest did not exit one second after the test run completed\u201d\u7684\u9519\u8bef\u6d88\u606f\u3002"),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u7f51\u7edc\u8c03\u7528"},"\u6d4b\u8bd5\u7f51\u7edc\u8c03\u7528"),(0,a.kt)("p",null,"React Query \u7684\u4e3b\u8981\u7528\u9014\u662f\u7f13\u5b58\u7f51\u7edc\u8bf7\u6c42\uff0c\u56e0\u6b64\uff0c\u9996\u5148\u6d4b\u8bd5\u6211\u4eec\u7684\u4ee3\u7801\u662f\u5426\u53d1\u51fa\u4e86\u6b63\u786e\u7684\u7f51\u7edc\u8bf7\u6c42\u662f\u5f88\u91cd\u8981\u7684\u3002"),(0,a.kt)("p",null,"\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\uff0c\u4f46\u662f\u5bf9\u4e8e\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nock"},"nock"),"\u3002"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e0b\u9762\u7684\u81ea\u5b9a\u4e49\u94a9\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function useFetchData() {\n  return useQuery("fetchData", () => request("/api/data"));\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4e3a\u6b64\u7f16\u5199\u4e00\u4e2a\u6d4b\u8bd5\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const queryClient = new QueryClient();\nconst wrapper = ({ children }) => (\n  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>\n);\n\nconst expectation = nock("http://example.com").get("/api/data").reply(200, {\n  answer: 42,\n});\n\nconst { result, waitFor } = renderHook(() => useFetchData(), { wrapper });\n\nawait waitFor(() => {\n  return result.current.isSuccess;\n});\n\nexpect(result.current.data).toEqual({ answer: 42 });\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"waitFor")," \u5e76\u7b49\u5f85\uff0c\u76f4\u5230\u67e5\u8be2\u72b6\u6001\u8868\u660e\u8bf7\u6c42\u5df2\u6210\u529f\u3002\n\u8fd9\u6837\u6211\u4eec\u5c31\u77e5\u9053 hook \u5df2\u7ecf\u5b8c\u6210\u5e76\u4e14\u5e94\u8be5\u5177\u6709\u6b63\u786e\u7684\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u6d4b\u8bd5-\u52a0\u8f7d\u66f4\u591a\u65e0\u9650\u6eda\u52a8"},"\u6d4b\u8bd5 \u52a0\u8f7d\u66f4\u591a/\u65e0\u9650\u6eda\u52a8"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u6a21\u62df\u6211\u4eec\u7684 API \u54cd\u5e94"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function generateMockedResponse(page) {\n  return {\n    page: page,\n    items: [...]\n  }\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"nock")," \u914d\u7f6e\u9700\u8981\u6839\u636e\u9875\u9762\u533a\u5206\u54cd\u5e94\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," \u6765\u505a\u5230\u8fd9\u4e00\u70b9\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," \u7684\u503c\u5728\u8fd9\u91cc\u5c06\u662f\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},'"/?page=1')," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"/?page=2")," \u8fd9\u79cd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const expectation = nock("http://example.com")\n  .persist()\n  .query(true)\n  .get("/api/data")\n  .reply(200, (uri) => {\n    const url = new URL(`http://example.com${uri}`);\n    const { page } = Object.fromEntries(url.searchParams);\n    return generateMockedResponse(page);\n  });\n')),(0,a.kt)("p",null,"(\u8bf7\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},".persist()"),"\uff0c\u56e0\u4e3a\u6211\u4eec\u5c06\u4ece\u8fd9\u4e2a\u63a5\u53e3\u591a\u6b21\u8c03\u7528\u5b83)"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5b89\u5168\u5730\u8fd0\u884c\u6211\u4eec\u7684\u6d4b\u8bd5\u4e86\uff0c\u8fd9\u91cc\u7684\u6280\u5de7\u662f\u5728\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchNextPage()")," \u4e4b\u540e\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"isFetching")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"!isFetching")," \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { result, waitFor } = renderHook(() => useInfiniteQueryCustomHook(), {\n  wrapper,\n});\n\nawait waitFor(() => result.current.isSuccess);\n\nexpect(result.current.data.pages).toStrictEqual(generateMockedResponse(1));\n\nresult.current.fetchNextPage();\n\nawait waitFor(() => result.current.isFetching);\nawait waitFor(() => !result.current.isFetching);\n\nexpect(result.current.data.pages).toStrictEqual([\n  ...generateMockedResponse(1),\n  ...generateMockedResponse(2),\n]);\n\nexpectation.done();\n")),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("p",null,"\u6709\u5173\u5982\u4f55\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"mock-service-worker"),"\u7684\u76f8\u5173\u8bbe\u7f6e\u6765\u8fdb\u884c\u6d4b\u8bd5\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/community/tkdodos-blog#5-testing-react-query"},"\u6b64\u793e\u533a\u8d44\u6e90")))}d.isMDXComponent=!0}}]);