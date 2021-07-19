(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5787],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),y=o,f=d["".concat(s,".").concat(y)]||d[y]||l[y]||a;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3724:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),u={id:"query-functions",title:"\u67e5\u8be2\u51fd\u6570"},c={unversionedId:"guides&concepts/query-functions",id:"guides&concepts/query-functions",isDocsHomePage:!1,title:"\u67e5\u8be2\u51fd\u6570",description:"\u67e5\u8be2\u51fd\u6570\u5b9e\u9645\u4e0a\u53ef\u4ee5\u662f\u4efb\u4f55\u4e00\u4e2a\u8fd4\u56de Promise \u7684\u51fd\u6570\u3002\u8fd4\u56de\u7684 Promise \u5e94\u8be5\u89e3\u51b3\u6570\u636e\u6216\u5f15\u53d1\u9519\u8bef\u3002",source:"@site/docs/guides&concepts/query-functions.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-functions",permalink:"/react-query-web-i18n/guides&concepts/query-functions",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/query-functions.md",version:"current",lastUpdatedAt:1626685648,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"query-functions",title:"\u67e5\u8be2\u51fd\u6570"},sidebar:"zhCN",previous:{title:"\u67e5\u8be2\u7684\u952e\u503c",permalink:"/react-query-web-i18n/guides&concepts/query-keys"},next:{title:"\u5e76\u884c\u67e5\u8be2",permalink:"/react-query-web-i18n/guides&concepts/parallel-queries"}},s=[{value:"\u5904\u7406\u548c\u629b\u51fa\u9519\u8bef",id:"\u5904\u7406\u548c\u629b\u51fa\u9519\u8bef",children:[]},{value:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4e0e<code>fetch</code>\u548c\u5176\u4ed6\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528",id:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4e0efetch\u548c\u5176\u4ed6\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528",children:[]},{value:"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570",id:"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570",children:[]},{value:"\u4f7f\u7528\u67e5\u8be2\u5bf9\u8c61\u4ee3\u66ff\u53c2\u6570",id:"\u4f7f\u7528\u67e5\u8be2\u5bf9\u8c61\u4ee3\u66ff\u53c2\u6570",children:[]}],i={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u67e5\u8be2\u51fd\u6570\u5b9e\u9645\u4e0a\u53ef\u4ee5\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4e00\u4e2a\u8fd4\u56de Promise \u7684\u51fd\u6570"),"\u3002\u8fd4\u56de\u7684 Promise \u5e94\u8be5",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u6570\u636e"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"\u5f15\u53d1\u9519\u8bef"),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6240\u6709\u90fd\u662f\u6709\u6548\u7684\u67e5\u8be2\u51fd\u6570\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"useQuery(['todos'], fetchAllTodos)\nuseQuery(['todos', todoId], () => fetchTodoById(todoId))\nuseQuery(['todos', todoId], async () => {\n  const data = await fetchTodoById(todoId)\n  return data\n})\nuseQuery(['todos', todoId], ({ queryKey }) => fetchTodoById(queryKey[1]))\n")),(0,a.kt)("h2",{id:"\u5904\u7406\u548c\u629b\u51fa\u9519\u8bef"},"\u5904\u7406\u548c\u629b\u51fa\u9519\u8bef"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f React Query \u786e\u5b9a\u67e5\u8be2\u9519\u8bef\uff0c\u67e5\u8be2\u51fd\u6570\u7684",(0,a.kt)("strong",{parentName:"p"},"\u9519\u8bef\u5fc5\u987b\u629b\u51fa"),"\u3002\u67e5\u8be2\u51fd\u6570\u4e2d\u5f15\u53d1\u7684\u4efb\u4f55\u9519\u8bef\u90fd\u5c06\u4fdd\u7559\u5728\u67e5\u8be2\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\u72b6\u6001\u4e0a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { error } = useQuery(['todos', todoId], async () => {\n  if (somethingGoesWrong) {\n    throw new Error('Oh no!')\n  }\n\n  return data\n})\n")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4e0efetch\u548c\u5176\u4ed6\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4e0e",(0,a.kt)("inlineCode",{parentName:"h2"},"fetch"),"\u548c\u5176\u4ed6\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528"),(0,a.kt)("p",null,"\u867d\u7136\u5927\u591a\u6570\u5e93\uff08\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"axios"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-request"),"\uff09\u4f1a\u9488\u5bf9\u4e0d\u6210\u529f\u7684 HTTP \u8c03\u7528\u81ea\u52a8\u5f15\u53d1\u9519\u8bef\uff0c\u4f46\u67d0\u4e9b\u5e93\uff08\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),"\uff09\u9ed8\u8ba4\u4e0d\u4f1a\u5f15\u53d1\u9519\u8bef\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u81ea\u5df1 throw \u5b83\u4eec\u3002\u8fd9\u662f\u4f7f\u7528\u6d41\u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),"\u7684 API \u7684\u4e00\u79cd\u7b80\u5355\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"useQuery(['todos', todoId], async () => {\n  const response = await fetch('/todos/' + todoId)\n  if (!response.ok) {\n    throw new Error('Network response was not ok')\n  }\n  return response.json()\n})\n")),(0,a.kt)("h2",{id:"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570"},"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570"),(0,a.kt)("p",null,"\u67e5\u8be2\u952e\u503c\u4e0d\u4ec5\u7528\u4e8e\u552f\u4e00\u5730\u6807\u8bc6\u8981\u83b7\u53d6\u7684\u6570\u636e\uff0c\u800c\u4e14\u8fd8\u53ef\u4ee5\u65b9\u4fbf\u5730\u4f20\u9012\u5230\u67e5\u8be2\u51fd\u6570\u4e2d\uff0c\u867d\u7136\u5e76\u975e\u603b\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u8fd9\u4f7f\u5f97\u5728\u9700\u8981\u65f6\u63d0\u53d6\u67e5\u8be2\u51fd\u6570\u6210\u4e3a\u53ef\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Todos({ status, page }) {\n  const result = useQuery(['todos', { status, page }], fetchTodoList)\n}\n\n// \u5728\u67e5\u8be2\u51fd\u6570\u4e2d\u8bbf\u95ee\u952e\u503c\uff0c\u72b6\u6001\u548c\u9875\u9762\u53d8\u91cf\uff01\nfunction fetchTodoList({ queryKey }) {\n  const [_key, { status, page }] = queryKey\n  return new Promise()\n}\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u67e5\u8be2\u5bf9\u8c61\u4ee3\u66ff\u53c2\u6570"},"\u4f7f\u7528\u67e5\u8be2\u5bf9\u8c61\u4ee3\u66ff\u53c2\u6570"),(0,a.kt)("p",null,"\u5728 React Query \u7684 API \u4e2d\u53ea\u8981\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"[queryKey\uff0cqueryFn\uff0cconfig]"),"\u7b7e\u540d\u7684\u4efb\u4f55\u51fd\u6570\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u5bf9\u8c61\u6765\u8868\u8fbe\u76f8\u540c\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useQuery } from 'react-query'\n\nuseQuery({\n  queryKey: ['todo', 7],\n  queryFn: fetchTodo,\n  ...config,\n})\n")))}p.isMDXComponent=!0}}]);