"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=u,d=p["".concat(i,".").concat(f)]||p[f]||y[f]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:u,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),u=(n(7294),n(3905));const o={id:"default-query-function",title:"\u9ed8\u8ba4\u7684\u67e5\u8be2\u51fd\u6570 Default Query Fn"},a=void 0,c={unversionedId:"guides&concepts/default-query-function",id:"guides&concepts/default-query-function",title:"\u9ed8\u8ba4\u7684\u67e5\u8be2\u51fd\u6570 Default Query Fn",description:"\u5982\u679c\u51fa\u4e8e\u67d0\u79cd\u539f\u56e0\uff0c\u4f60\u5e0c\u671b\u5728\u6574\u4e2a\u5e94\u7528\u4e2d\u5171\u4eab\u76f8\u540c\u7684\u67e5\u8be2\u529f\u80fd\uff0c\u5e76\u4e14\u53ef\u4ee5\u4ec5\u9760\u67e5\u8be2\u952e\u503c\u6765\u6807\u8bc6\u5e94\u83b7\u53d6\u7684\u5185\u5bb9\u3002",source:"@site/react/guides&concepts/default-query-function.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/default-query-function",permalink:"/react-query-web-i18n/react/guides&concepts/default-query-function",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/react/guides&concepts/default-query-function.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"default-query-function",title:"\u9ed8\u8ba4\u7684\u67e5\u8be2\u51fd\u6570 Default Query Fn"},sidebar:"zhCN",previous:{title:"\u7f13\u5b58 Caching",permalink:"/react-query-web-i18n/react/guides&concepts/caching"},next:{title:"Suspense",permalink:"/react-query-web-i18n/react/guides&concepts/suspense"}},i={},s=[],l={toc:s};function p(e){let{components:t,...n}=e;return(0,u.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u5982\u679c\u51fa\u4e8e\u67d0\u79cd\u539f\u56e0\uff0c\u4f60\u5e0c\u671b\u5728\u6574\u4e2a\u5e94\u7528\u4e2d\u5171\u4eab\u76f8\u540c\u7684\u67e5\u8be2\u529f\u80fd\uff0c\u5e76\u4e14\u53ef\u4ee5\u4ec5\u9760\u67e5\u8be2\u952e\u503c\u6765\u6807\u8bc6\u5e94\u83b7\u53d6\u7684\u5185\u5bb9\u3002\n\u5219\u53ef\u4ee5\u901a\u8fc7\u91cd\u5199 TanStack Query \u63d0\u4f9b\u7684",(0,u.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u67e5\u8be2\u51fd\u6570"),"\u6765\u505a\u5230\u8fd9\u4e00\u70b9\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},'// \u5b9a\u4e49\u4e00\u4e2a\u53c2\u6570\u4e3a\u67e5\u8be2\u952e\u503c\u7684\u9ed8\u8ba4\u67e5\u8be2\u51fd\u6570\nconst defaultQueryFn = async ({ queryKey }) => {\n  const { data } = await axios.get(\n    `https://jsonplaceholder.typicode.com${queryKey[0]}`\n  );\n  return data;\n};\n\n// \u4f7f\u7528 defaultOptions \u5411\u4f60\u7684\u5e94\u7528\u63d0\u4f9b\u9ed8\u8ba4\u67e5\u8be2\u51fd\u6570\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      queryFn: defaultQueryFn,\n    },\n  },\n});\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <YourApp />\n    </QueryClientProvider>\n  );\n}\n\n// \u73b0\u5728\uff0c\u53ea\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u952e\u503c\u5c31\u884c\u4e86!\nfunction Posts() {\n  const { status, data, error, isFetching } = useQuery({\n    queryKey: ["/posts"],\n  });\n\n  // ...\n}\n\n// \u4f60\u4e5f\u53ef\u4ee5\u4f20\u5165\u4e00\u4e9b\u53c2\u6570\nfunction Post({ postId }) {\n  const { status, data, error, isFetching } = useQuery({\n    queryKey: [`/posts/${postId}`],\n    enabled: !!postId,\n  });\n\n  // ...\n}\n')),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8986\u76d6\u9ed8\u8ba4\u7684 queryFn\uff0c\u50cf\u5e73\u5e38\u4e00\u6837\u63d0\u4f9b\u4e00\u4e2a\u51fd\u6570\u5373\u53ef\u3002"))}p.isMDXComponent=!0}}]);