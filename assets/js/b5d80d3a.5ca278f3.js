"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[4406],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={id:"query-cancellation",title:"\u67e5\u8be2\u53d6\u6d88 Query Cancellation"},l=void 0,i={unversionedId:"guides&concepts/query-cancellation",id:"guides&concepts/query-cancellation",title:"\u67e5\u8be2\u53d6\u6d88 Query Cancellation",description:"React Query \u4e3a\u6bcf\u4e2a\u67e5\u8be2\u51fd\u6570\u90fd\u63d0\u4f9b\u4e86\u4e00\u4e2aAbortSignal\u7684\u5b9e\u4f8b\uff0c\u5f53\u4e14\u4ec5\u5f53\u4f60\u7684\u8fd0\u884c\u73af\u5883\u652f\u6301\u8be5\u5bf9\u8c61\u3002",source:"@site/vue/guides&concepts/query-cancellation.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-cancellation",permalink:"/react-query-web-i18n/vue/guides&concepts/query-cancellation",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/guides&concepts/query-cancellation.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"query-cancellation",title:"\u67e5\u8be2\u53d6\u6d88 Query Cancellation"},sidebar:"zhCN",previous:{title:"\u4e50\u89c2\u66f4\u65b0 Optimistic Updates",permalink:"/react-query-web-i18n/vue/guides&concepts/optimistic-updates"},next:{title:"\u6eda\u52a8\u6062\u590d Scroll Restoration",permalink:"/react-query-web-i18n/vue/guides&concepts/scroll-restoration"}},s={},c=[{value:"\u9ed8\u8ba4\u884c\u4e3a",id:"\u9ed8\u8ba4\u884c\u4e3a",level:2},{value:"\u4f7f\u7528 <code>fetch</code>",id:"\u4f7f\u7528-fetch",level:2},{value:"\u4f7f\u7528 <code>axios</code>",id:"\u4f7f\u7528-axios",level:2},{value:"\u4f7f\u7528 <code>axios</code> ^0.22.0",id:"\u4f7f\u7528-axios-0220",level:3},{value:"\u4f7f\u7528 <code>axios</code> (\u7248\u672c\u4f4e\u4e8e <code>0.22.0</code>)",id:"\u4f7f\u7528-axios-\u7248\u672c\u4f4e\u4e8e-0220",level:3},{value:"\u4f7f\u7528 <code>XMLHttpRequest</code>",id:"\u4f7f\u7528-xmlhttprequest",level:2},{value:"\u4f7f\u7528 <code>graphql-request</code>",id:"\u4f7f\u7528-graphql-request",level:2},{value:"\u4f7f\u7528 <code>graphql-request</code> ^4.0.0",id:"\u4f7f\u7528-graphql-request-400",level:3},{value:"\u4f7f\u7528 <code>graphql-request</code> (\u7248\u672c\u4f4e\u4e8e <code>4.0.0</code>)",id:"\u4f7f\u7528-graphql-request-\u7248\u672c\u4f4e\u4e8e-400",level:3},{value:"\u624b\u52a8\u53d6\u6d88",id:"\u624b\u52a8\u53d6\u6d88",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u4e3a\u6bcf\u4e2a\u67e5\u8be2\u51fd\u6570\u90fd\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal"},(0,a.kt)("inlineCode",{parentName:"a"},"AbortSignal"),"\u7684\u5b9e\u4f8b"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5f53\u4e14\u4ec5\u5f53\u4f60\u7684\u8fd0\u884c\u73af\u5883\u652f\u6301\u8be5\u5bf9\u8c61"),"\u3002\n\u5f53\u4e00\u4e2a\u67e5\u8be2\u53d8\u5f97\u8fc7\u65f6\u6216\u8005\u4e0d\u6d3b\u8dc3\uff0c\u90a3\u4e48\u8be5\u201c\u4fe1\u53f7\u201d\u5c06\u88ab\u4e2d\u6b62\u3002\n\u8fd9\u610f\u5473\u7740\uff0c\u6240\u6709\u7684\u67e5\u8be2\u90fd\u662f\u53ef\u53d6\u6d88\u7684\uff0c\u800c\u4e14\u5982\u679c\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u5728\u67e5\u8be2\u51fd\u6570\u4e2d\u54cd\u5e94\u53d6\u6d88\u52a8\u4f5c\u3002\n\u8fd9\u6700\u4e3a\u65b9\u4fbf\u7684\u4e00\u70b9\u662f\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u666e\u901a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," \u8bed\u6cd5\uff0c\u540c\u65f6\u83b7\u5f97\u81ea\u52a8\u53d6\u6d88\u7684\u6240\u6709\u597d\u5904\u3002\n\u6b64\u5916\uff0c\u8fd9\u4e2a\u89e3\u51b3\u65b9\u6848\u6bd4\u65e7\u7684\u89e3\u51b3\u65b9\u6848\u66f4\u9002\u5408 TypeScript\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9"},"AbortController API \u5728\u5927\u591a\u6570\u8fd0\u884c\u65f6\u73af\u5883\u4e2d\u90fd\u662f\u53ef\u7528\u7684"),"\u3002\u4f46\u662f\u5982\u679c\u4f60\u7684\u8fd0\u884c\u65f6\u73af\u5883\u4e0d\u652f\u6301\u5b83\uff0c\u90a3\u4e48\u67e5\u8be2\u51fd\u6570\u5c06\u5728\u5bf9\u5e94\u7684\u5730\u65b9\u63a5\u6536\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\n\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u624b\u52a8\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortController")," API\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=abortcontroller%20polyfill"},"\u5728 npm \u4e0a\u6709\u51e0\u4e2a\u53ef\u7528\u7684"),"\u3002"),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u884c\u4e3a"},"\u9ed8\u8ba4\u884c\u4e3a"),(0,a.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u672a\u6302\u8f7d\u7684\u6216\u5728\u5176\u8fd4\u56de\u7684 Promise \u88ab resolve/reject \u4e4b\u524d\u7684\u67e5\u8be2\u662f",(0,a.kt)("em",{parentName:"p"},"\u4e0d\u4f1a"),"\u88ab\u81ea\u52a8\u53d6\u6d88\u7684\u3002\n\u987a\u5229\u7684\u8bdd\uff0c\u5728 resolve \u4e4b\u540e\u7684\u6570\u636e\u5c06\u5728\u7f13\u5b58\u4e2d\u53ef\u7528\uff0creject \u540e\u7684 error \u53ef\u7528\u3002\n\u4e0d\u987a\u5229\u7684\u8bdd\uff0c\u5982\u679c\u5728\u5df2\u7ecf\u5f00\u59cb\u63a5\u6536\u4e00\u4e2a\u67e5\u8be2\u4e14\u5728\u5176\u7ed3\u675f\u4e4b\u524d\u5378\u8f7d\u7ec4\u4ef6\uff0c\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u4e0d\u5229\u5f71\u54cd\u3002\u5e76\u4e14\u82e5\u518d\u6b21\u6302\u8f7d\u6b64\u7ec4\u4ef6\uff0c\u4e14\u67e5\u8be2\u8fd8\u88ab\u81ea\u52a8\u5783\u573e\u56de\u6536\uff0c\u90a3\u4e48\u6570\u636e\u53ef\u7528\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortSignal")," \u6216\u8005\u662f\u7ed9 Promise \u9644\u52a0\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," \u51fd\u6570\uff0c\u90a3\u4e48\u8fd9\u4e2a Promise \u662f\u53ef\u4ee5\u88ab\u53d6\u6d88\u7684(\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u793a\u4f8b)\u3002\n\u6b64\u65f6\u67e5\u8be2\u4e5f\u5fc5\u987b\u88ab\u53d6\u6d88\u3002\n\u53d6\u6d88\u67e5\u8be2\u5c06\u4f1a\u5bfc\u81f4\u5176",(0,a.kt)("em",{parentName:"p"},"\u6062\u590d\u5230\u4ee5\u524d"),"\u7684\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-fetch"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"fetch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const query = useQuery(['todos'], async ({ signal }) => {\n  const todosResponse = await fetch('/todos', {\n    // \u4f20\u9012\u53ef\u64a4\u9500\u7684\u4fe1\u53f7\u5230fetch\u91cc\u53bb\n    signal,\n  })\n  const todos = await todosResponse.json()\n\n  const todoDetails = todos.map(async ({ details } => {\n    const response = await fetch(details, {\n      // \u6216\u8fd9\u5c06\u4ed6\u4f20\u9012\u7ed9\u597d\u51e0\u4e2a\u5b9e\u4f8b\n      signal,\n    })\n    return response.json()\n  })\n\n  return Promise.all(todoDetails)\n})\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-axios"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"axios")),(0,a.kt)("h3",{id:"\u4f7f\u7528-axios-0220"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"axios")," ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/axios/axios/releases/tag/v0.22.0"},"^0.22.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import axios from "axios";\n\nconst query = useQuery(["todos"], ({ signal }) =>\n  axios.get("/todos", {\n    // \u4f20\u9012\u53ef\u64a4\u9500\u7684\u4fe1\u53f7\u5230 `axios`\n    signal,\n  }),\n);\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528-axios-\u7248\u672c\u4f4e\u4e8e-0220"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"axios")," (\u7248\u672c\u4f4e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"h3"},"0.22.0"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import axios from "axios";\n\nconst query = useQuery(["todos"], ({ signal }) => {\n  // \u7ed9\u8fd9\u4e2a request \u521b\u5efa\u4e00\u4e2a CancelToken\n  const CancelToken = axios.CancelToken;\n  const source = CancelToken.source();\n\n  const promise = axios.get("/todos", {\n    // \u4f20\u9012\u8fd9\u4e2a token \u5230\u8be5\u8bf7\u6c42\n    cancelToken: source.token,\n  });\n\n  // \u5982\u679c React Query \u4fe1\u53f7\u662f abort\uff0c\u90a3\u4e48\u64a4\u9500\u8be5\u8bf7\u6c42\n  signal?.addEventListener("abort", () => {\n    source.cancel("Query was cancelled by React Query");\n  });\n\n  return promise;\n});\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528-xmlhttprequest"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"XMLHttpRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const query = useQuery(["todos"], ({ signal }) => {\n  return new Promise((resolve, reject) => {\n    var oReq = new XMLHttpRequest();\n    oReq.addEventListener("load", () => {\n      resolve(JSON.parse(oReq.responseText));\n    });\n    signal?.addEventListener("abort", () => {\n      oReq.abort();\n      reject();\n    });\n    oReq.open("GET", "/todos");\n    oReq.send();\n  });\n});\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528-graphql-request"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"graphql-request")),(0,a.kt)("h3",{id:"\u4f7f\u7528-graphql-request-400"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"graphql-request")," ^4.0.0"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortSignal")," \u7ed9\u5ba2\u6237\u7aef\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const client = new GraphQLClient(endpoint);\n\nconst query = useQuery(["todos"], ({ signal }) => {\n  client.request({ document: query, signal });\n});\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528-graphql-request-\u7248\u672c\u4f4e\u4e8e-400"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"graphql-request")," (\u7248\u672c\u4f4e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"h3"},"4.0.0"),")"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortSignal")," \u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," \u7684\u6784\u9020\u51fd\u6570."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const query = useQuery(["todos"], ({ signal }) => {\n  const client = new GraphQLClient(endpoint, {\n    signal,\n  });\n  return client.request(query, variables);\n});\n')),(0,a.kt)("h2",{id:"\u624b\u52a8\u53d6\u6d88"},"\u624b\u52a8\u53d6\u6d88"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u60f3\u624b\u52a8\u53d6\u6d88\u3002\n\u4f8b\u5982\uff1a\u8bf7\u6c42\u9700\u8981\u5f88\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\uff0c\u56e0\u6b64\u7528\u6237\u53ef\u4ee5\u5355\u51fb\u201c\u53d6\u6d88\u201d\u6309\u94ae\u6765\u505c\u6b62\u8bf7\u6c42\u3002\n\u4e3a\u6b64\uff0c\u4f60\u53ea\u9700\u8981\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"queryClient.cancelQueries(key)"),"\uff0c\u53d6\u6d88\u6b64\u6b21\u67e5\u8be2\u5e76\u5c06\u6570\u636e\u8fd8\u539f\u5230\u4e0a\u4e00\u6b21\u7684\u72b6\u6001\u3002\n\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"promise.cancel")," \u53ef\u7528\u6216\u8005\u4f60\u5728\u67e5\u8be2\u51fd\u6570\u5185\u5df2\u7ecf\u5904\u7406\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"signal"),"\uff0cReact Query \u5c31\u4f1a\u53d6\u6d88\u8be5 Promise \u540c\u65f6\u53d6\u6d88\u5bf9\u5e94\u8bf7\u6c42\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const query = useQuery(["todos"], async ({ signal }) => {\n  const resp = await fetch("/todos", { signal });\n  return resp.json();\n});\n\nconst queryClient = useQueryClient();\n\nreturn (\n  <button\n    onClick={(e) => {\n      e.preventDefault();\n      queryClient.cancelQueries(["todos"]);\n    }}\n  >\n    Cancel\n  </button>\n);\n')))}u.isMDXComponent=!0}}]);