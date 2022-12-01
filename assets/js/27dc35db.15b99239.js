"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),y=o,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={id:"query-keys",title:"\u67e5\u8be2\u7684\u952e\u503c query-keys"},u=void 0,s={unversionedId:"guides&concepts/query-keys",id:"version-v3/guides&concepts/query-keys",title:"\u67e5\u8be2\u7684\u952e\u503c query-keys",description:"\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0cReact Query \u57fa\u4e8e\u67e5\u8be2\u952e\u503c\u4e3a\u60a8\u7ba1\u7406\u67e5\u8be2\u7f13\u5b58\u3002",source:"@site/versioned_docs/version-v3/guides&concepts/query-keys.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-keys",permalink:"/react-query-web-i18n/v3/guides&concepts/query-keys",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/guides&concepts/query-keys.md",tags:[],version:"v3",lastUpdatedAt:1669863756,formattedLastUpdatedAt:"12/1/2022",frontMatter:{id:"query-keys",title:"\u67e5\u8be2\u7684\u952e\u503c query-keys"},sidebar:"zhCN",previous:{title:"\u67e5\u8be2 queries",permalink:"/react-query-web-i18n/v3/guides&concepts/queries"},next:{title:"\u67e5\u8be2\u51fd\u6570 query-functions",permalink:"/react-query-web-i18n/v3/guides&concepts/query-functions"}},l={},i=[{value:"\u53ea\u6709\u5b57\u7b26\u4e32\u7684\u952e\u503c",id:"\u53ea\u6709\u5b57\u7b26\u4e32\u7684\u952e\u503c",level:3},{value:"\u6570\u7ec4\u4f5c\u4e3a\u952e\u503c",id:"\u6570\u7ec4\u4f5c\u4e3a\u952e\u503c",level:3},{value:"\u67e5\u8be2\u952e\u503c\u88ab\u786e\u5b9a\u5730\u6563\u5217\uff01",id:"\u67e5\u8be2\u952e\u503c\u88ab\u786e\u5b9a\u5730\u6563\u5217",level:3},{value:"\u5982\u679c\u60a8\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\uff0c\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d",id:"\u5982\u679c\u60a8\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0cReact Query \u57fa\u4e8e\u67e5\u8be2\u952e\u503c\u4e3a\u60a8\u7ba1\u7406\u67e5\u8be2\u7f13\u5b58\u3002\n\u952e\u503c\u53ef\u4ee5\u50cf\u5b57\u7b26\u4e32\u4e00\u6837\u7b80\u5355\uff0c\u4e5f\u53ef\u4ee5\u50cf\u7531\u8bb8\u591a\u5b57\u7b26\u4e32\u548c\u5d4c\u5957\u5bf9\u8c61\u7ec4\u6210\u7684\u6570\u7ec4\u4e00\u6837\u590d\u6742\u3002\u53ea\u8981\u952e\u503c\u662f",(0,o.kt)("strong",{parentName:"p"},"\u53ef\u5e8f\u5217\u5316\u7684"),"\uff0c\u5e76\u4e14",(0,o.kt)("strong",{parentName:"p"},"\u5bf9\u67e5\u8be2\u7684\u6570\u636e\u6765\u8bf4\u5b83\u662f\u552f\u4e00\u7684"),"\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u5b83\uff01"),(0,o.kt)("h3",{id:"\u53ea\u6709\u5b57\u7b26\u4e32\u7684\u952e\u503c"},"\u53ea\u6709\u5b57\u7b26\u4e32\u7684\u952e\u503c"),(0,o.kt)("p",null,"\u952e\u503c\u6700\u7b80\u5355\u5f62\u5f0f\u5b9e\u9645\u4e0a\u4e0d\u662f\u6570\u7ec4\uff0c\u800c\u662f\u5355\u4e2a\u5b57\u7b26\u4e32\u3002\u5f53\u4f20\u9012\u4e00\u4e2a\u5b57\u7b26\u4e32\u67e5\u8be2\u65f6\uff0c\u5b83\u5c06\u5728\u5185\u90e8\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u5b57\u7b26\u4e32\u4f5c\u4e3a\u952e\u503c\u4e2d\u7684\u552f\u4e00\u9879\u3002\u6b64\u683c\u5f0f\u53ef\u7528\u4e8e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u7528\u7684",(0,o.kt)("em",{parentName:"li"},"List/Index"),"\u8d44\u6e90"),(0,o.kt)("li",{parentName:"ul"},"\u975e\u5206\u5c42\u7684(Non-hierarchical)\u8d44\u6e90")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// A list of todos\nuseQuery('todos', ...) // queryKey === ['todos']\n\n// Something else, whatever!\nuseQuery('somethingSpecial', ...) // queryKey === ['somethingSpecial']\n")),(0,o.kt)("h3",{id:"\u6570\u7ec4\u4f5c\u4e3a\u952e\u503c"},"\u6570\u7ec4\u4f5c\u4e3a\u952e\u503c"),(0,o.kt)("p",null,"\u5f53\u67e5\u8be2\u9700\u8981\u66f4\u591a\u4fe1\u606f\u6765\u552f\u4e00\u5730\u63cf\u8ff0\u5176\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e26\u6709\u5b57\u7b26\u4e32\u7684\u6570\u7ec4\u548c\u4efb\u610f\u6570\u91cf\u7684\u53ef\u5e8f\u5217\u5316\u5bf9\u8c61\u6765\u63cf\u8ff0\u5b83\u3002\u8fd9\u5bf9\u4e8e\u4ee5\u4e0b\u7528\u9014\u5f88\u6709\u7528\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5206\u5c42\u6216\u5d4c\u5957\u7684\u8d44\u6e90",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f20\u9012 ID\u3001\u7d22\u5f15\u6216\u5176\u4ed6\u539f\u8bed\u6765\u552f\u4e00\u5730\u6807\u8bc6\u8d44\u6e90\u7684\u6bcf\u4e00\u9879\u662f\u5f88\u5e38\u89c1\u7684"))),(0,o.kt)("li",{parentName:"ul"},"\u5e26\u6709\u9644\u52a0\u53c2\u6570\u7684\u67e5\u8be2",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f20\u9012\u4f5c\u4e3a\u9644\u52a0\u9009\u9879\u7684\u5bf9\u8c61\u4e5f\u5f88\u5e38\u89c1")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// An individual todo\nuseQuery(['todo', 5], ...)\n// queryKey === ['todo', 5]\n\n// And individual todo in a \"preview\" format\nuseQuery(['todo', 5, { preview: true }], ...)\n// queryKey === ['todo', 5, { preview: true }]\n\n// A list of todos that are \"done\"\nuseQuery(['todos', { type: 'done' }], ...)\n// queryKey === ['todos', { type: 'done' }]\n")),(0,o.kt)("h3",{id:"\u67e5\u8be2\u952e\u503c\u88ab\u786e\u5b9a\u5730\u6563\u5217"},"\u67e5\u8be2\u952e\u503c\u88ab\u786e\u5b9a\u5730\u6563\u5217\uff01"),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\uff0c\u4e0d\u7ba1\u5bf9\u8c61\u4e2d\u952e\u503c\u7684\u987a\u5e8f\u5982\u4f55\uff0c\u4ee5\u4e0b\u6240\u6709\u67e5\u8be2\u90fd\u88ab\u8ba4\u4e3a\u662f\u76f8\u7b49\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useQuery(['todos', { status, page }], ...)\nuseQuery(['todos', { page, status }], ...)\nuseQuery(['todos', { page, status, other: undefined }], ...)\n")),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u4ee5\u4e0b\u67e5\u8be2\u952e\u503c\u4e0d\u76f8\u7b49\u3002\u6570\u7ec4\u9879\u7684\u987a\u5e8f\u5f88\u91cd\u8981\uff01"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useQuery(['todos', status, page], ...)\nuseQuery(['todos', page, status], ...)\nuseQuery(['todos', undefined, page, status], ...)\n")),(0,o.kt)("h2",{id:"\u5982\u679c\u60a8\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d"},"\u5982\u679c\u60a8\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\uff0c\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d"),(0,o.kt)("p",null,"\u7531\u4e8e\u67e5\u8be2\u952e\u503c\u552f\u4e00\u5730\u63cf\u8ff0\u4e86\u5b83\u4eec\u8981\u83b7\u53d6\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5b83\u4eec\u5e94\u5305\u62ec\u60a8\u5728\u67e5\u8be2\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u4efb\u4f55",(0,o.kt)("strong",{parentName:"p"},"\u9700\u8981\u66f4\u6539\u7684\u53d8\u91cf"),"\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function Todos({ todoId }) {\n  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));\n}\n')),(0,o.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,o.kt)("p",null,"\u5728\u5927\u578b\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5982\u4f55\u7ec4\u7ec7\u4f60\u7684\u67e5\u8be2\u952e\u503c\uff1f\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/community/tkdodos-blog#8-effective-react-query-keys"},"\u6b64\u793e\u533a\u8d44\u6e90")))}p.isMDXComponent=!0}}]);