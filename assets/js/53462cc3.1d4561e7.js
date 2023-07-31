"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[4941],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),i=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=i(n),y=a,m=c["".concat(p,".").concat(y)]||c[y]||d[y]||o;return n?t.createElement(m,s(s({ref:r},l),{},{components:n})):t.createElement(m,s({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u[c]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8500:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var t=n(7462),a=(n(7294),n(3905));const o={id:"suspense",title:"Suspense"},s=void 0,u={unversionedId:"guides&concepts/suspense",id:"guides&concepts/suspense",title:"Suspense",description:"\u6ce8\u610f\uff1aReact Query \u7684 Suspense \u6a21\u5f0f\u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u4e0e\u6570\u636e\u83b7\u53d6\u672c\u8eab\u7684 Suspense \u6a21\u5f0f\u76f8\u540c\u3002",source:"@site/v3-react/guides&concepts/suspense.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/suspense",permalink:"/react-query-web-i18n/v3-react/guides&concepts/suspense",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/guides&concepts/suspense.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"suspense",title:"Suspense"},sidebar:"default",previous:{title:"\u9ed8\u8ba4\u7684\u67e5\u8be2\u51fd\u6570 default-query-function",permalink:"/react-query-web-i18n/v3-react/guides&concepts/default-query-function"},next:{title:"\u6d4b\u8bd5 testing",permalink:"/react-query-web-i18n/v3-react/guides&concepts/testing"}},p={},i=[{value:"\u91cd\u7f6e\u9519\u8bef\u8fb9\u754c",id:"\u91cd\u7f6e\u9519\u8bef\u8fb9\u754c",level:2},{value:"\u6e32\u67d3\u65f6\u83b7\u53d6 vs \u6309\u9700\u6e32\u67d3",id:"\u6e32\u67d3\u65f6\u83b7\u53d6-vs-\u6309\u9700\u6e32\u67d3",level:2}],l={toc:i},c="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(c,(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aReact Query \u7684 Suspense \u6a21\u5f0f\u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u4e0e\u6570\u636e\u83b7\u53d6\u672c\u8eab\u7684 Suspense \u6a21\u5f0f\u76f8\u540c\u3002\n\u9664\u975e\u60a8\u5c06 React \u548c React Query \u7248\u672c\u90fd",(0,a.kt)("strong",{parentName:"p"},"\u9501\u5b9a\u4e3a\u5f7c\u6b64\u517c\u5bb9\u7684\u8865\u4e01\u7ea7\u522b"),"\uff0c\u5426\u5219\u8fd9\u4e9b API \u5c06\u4f1a",(0,a.kt)("strong",{parentName:"p"},"\u66f4\u6539"),"\uff0c\u4e14",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5e94\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528"),"\u3002")),(0,a.kt)("p",null,"React Query \u4e5f\u53ef\u4ee5\u4e0e React \u7684\u65b0 Suspense for Data Fetching API \u4e00\u8d77\u4f7f\u7528\u3002\n\u8981\u542f\u7528\u6b64\u6a21\u5f0f\uff0c\u53ef\u4ee5\u5c06\u5168\u5c40\u6216\u67e5\u8be2\u7ea7\u522b\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"suspense")," \u9009\u9879\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("p",null,"\u5168\u5c40\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { QueryClient, QueryClientProvider } from "react-query";\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      suspense: true,\n    },\n  },\n});\n\nfunction Root() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <App />\n    </QueryClientProvider>\n  );\n}\n')),(0,a.kt)("p",null,"\u5355\u72ec\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { useQuery } from "react-query";\n\nuseQuery(queryKey, queryFn, { suspense: true });\n')),(0,a.kt)("p",null,"\u4f7f\u7528 Suspense \u6a21\u5f0f\u65f6\uff0c\u4e0d\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," \u72b6\u6001\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u5bf9\u8c61\u3002\n\u800c\u662f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Suspense")," \u7ec4\u4ef6\uff08\u5305\u62ec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback")," prop \u548c React \u9519\u8bef\u8fb9\u754c\u6765\u6355\u83b7\u9519\u8bef\uff09\u66ff\u6362\u3002\n\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"#%E9%87%8D%E7%BD%AE%E9%94%99%E8%AF%AF%E8%BE%B9%E7%95%8C"},"\u201c\u91cd\u7f6e\u9519\u8bef\u8fb9\u754c\u201d"),"\u5e76\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/suspense"},"\u201c Suspense \u793a\u4f8b\u201d"),"\uff0c\u4ee5\u83b7\u53d6\u6709\u5173\u5982\u4f55\u8bbe\u7f6e Suspense \u6a21\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u5728 Suspense \u6a21\u5f0f\u4e0b\u67e5\u8be2\u884c\u4e3a\u7684\u4e0d\u540c\u5916\uff0c\u4fee\u6539\u7684\u884c\u4e3a\u4e5f\u6709\u6240\u4e0d\u540c\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u4fee\u6539\u5931\u8d25\u65f6\uff0c\u4e0d\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u53d8\u91cf\uff0c\u800c\u662f\u5728\u4e0b\u4e00\u6b21\u6e32\u67d3\u6240\u4f7f\u7528\u7684\u7ec4\u4ef6\u65f6\u5c06\u5176\u629b\u51fa\uff0c\u5e76\u4f20\u64ad\u5230\u6700\u8fd1\u7684\u9519\u8bef\u8fb9\u754c\uff0c\u7c7b\u4f3c\u4e8e\u67e5\u8be2\u9519\u8bef\u3002\n\u5982\u679c\u8981\u7981\u7528\u6b64\u529f\u80fd\uff0c\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"useErrorBoundary")," \u9009\u9879\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\n\u5982\u679c\u60a8\u5e0c\u671b\u6839\u672c\u4e0d\u5f15\u53d1\u5f02\u5e38\uff0c\u5219\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"throwOnError")," \u9009\u9879\u4e5f\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff01"),(0,a.kt)("h2",{id:"\u91cd\u7f6e\u9519\u8bef\u8fb9\u754c"},"\u91cd\u7f6e\u9519\u8bef\u8fb9\u754c"),(0,a.kt)("p",null,"\u65e0\u8bba\u60a8\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528 suspense \u8fd8\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"useErrorBoundaries"),"\uff0c\u60a8\u90fd\u9700\u8981\u4e00\u79cd\u8ba9\u67e5\u8be2\u77e5\u9053\uff0c\u5728\u53d1\u751f\u67d0\u4e9b\u9519\u8bef\u540e\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u201c\u60f3\u8981\u201d\u91cd\u8bd5\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u67e5\u8be2\u9519\u8bef\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryErrorResetBoundary")," \u7ec4\u4ef6\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"useQueryErrorResetBoundary")," hook \u6765\u91cd\u7f6e\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u65f6\uff0c\u5b83\u5c06\u91cd\u7f6e\u7ec4\u4ef6\u8303\u56f4\u5185\u7684\u6240\u6709\u67e5\u8be2\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { QueryErrorResetBoundary } from "react-query";\nimport { ErrorBoundary } from "react-error-boundary";\n\nconst App: React.FC = () => (\n  <QueryErrorResetBoundary>\n    {({ reset }) => (\n      <ErrorBoundary\n        onReset={reset}\n        fallbackRender={({ resetErrorBoundary }) => (\n          <div>\n            There was an error!\n            <Button onClick={() => resetErrorBoundary()}>Try again</Button>\n          </div>\n        )}\n      >\n        <Page />\n      </ErrorBoundary>\n    )}\n  </QueryErrorResetBoundary>\n);\n')),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528\u8be5 hook \u65f6\uff0c\u5b83\u5c06\u91cd\u7f6e\u6700\u8fd1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryErrorResetBoundary")," \u5185\u7684\u4efb\u4f55\u67e5\u8be2\u9519\u8bef\u3002\n\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u8fb9\u754c\uff0c\u5b83\u5c06\u5168\u5c40\u91cd\u7f6e\u5b83\u4eec\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useQueryErrorResetBoundary } from "react-query";\nimport { ErrorBoundary } from "react-error-boundary";\n\nconst App: React.FC = () => {\n  const { reset } = useQueryErrorResetBoundary();\n  return (\n    <ErrorBoundary\n      onReset={reset}\n      fallbackRender={({ resetErrorBoundary }) => (\n        <div>\n          There was an error!\n          <Button onClick={() => resetErrorBoundary()}>Try again</Button>\n        </div>\n      )}\n    >\n      <Page />\n    </ErrorBoundary>\n  );\n};\n')),(0,a.kt)("h2",{id:"\u6e32\u67d3\u65f6\u83b7\u53d6-vs-\u6309\u9700\u6e32\u67d3"},"\u6e32\u67d3\u65f6\u83b7\u53d6 vs \u6309\u9700\u6e32\u67d3"),(0,a.kt)("p",null,"Suspense \u6a21\u5f0f\u4e0b\u7684 React Query \u4f5c\u4e3a\u4e00\u79cd\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u7684\u3001\u6e32\u67d3\u65f6\u83b7\u53d6\u73b0\u7684\u89e3\u51b3\u65b9\u6848\u5de5\u4f5c\u5f97\u975e\u5e38\u597d\u3002\n\u8fd9\u610f\u5473\u7740\uff0c\u5f53\u60a8\u7684\u7ec4\u4ef6\u5c1d\u8bd5\u6302\u8f7d\u65f6\uff0c\u5b83\u4eec\u5c06\u89e6\u53d1\u67e5\u8be2\u83b7\u53d6\u548c suspend\uff0c\u4f46\u4ec5\u5728\u60a8\u5bfc\u5165\u5e76\u6302\u8f7d\u5b83\u4eec\u4e4b\u540e\u3002\n\u5982\u679c\u4f60\u60f3\u66f4\u8fdb\u4e00\u6b65\uff0c\u5b9e\u73b0\u201c\u6309\u9700\u6e32\u67d3\u201d\u6a21\u578b\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u8def\u7531\u56de\u8c03\u548c/\u6216\u7528\u6237\u4ea4\u4e92\u4e8b\u4ef6\u4e0a\u5b9e\u73b0",(0,a.kt)("a",{parentName:"p",href:"./prefetching"},"\u9884\u53d6\u6570\u636e"),"\uff0c\u4ee5\u5728\u88c5\u5165\u67e5\u8be2\u4e4b\u524d\u5f00\u59cb\u52a0\u8f7d\u67e5\u8be2\u3002\n\u4f60\u751a\u81f3\u53ef\u4ee5\u671f\u671b\u5728\u5f00\u59cb\u5bfc\u5165\u4e4b\u524d\u5c31\u5f00\u59cb\u52a0\u8f7d\u67e5\u8be2\u3002\u751a\u81f3\u662f\u5176\u7236\u7ec4\u4ef6\u6302\u8f7d\u4e4b\u524d\u3002"))}d.isMDXComponent=!0}}]);