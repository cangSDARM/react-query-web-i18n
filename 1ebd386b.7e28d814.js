(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,b=p["".concat(i,".").concat(y)]||p[y]||d[y]||a;return n?o.a.createElement(b,u(u({ref:t},l),{},{components:n})):o.a.createElement(b,u({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(142)),i={id:"quick-start",title:"\u5feb\u901f\u5165\u95e8"},u={unversionedId:"getstarted/quick-start",id:"getstarted/quick-start",isDocsHomePage:!1,title:"\u5feb\u901f\u5165\u95e8",description:"\u8be5\u793a\u4f8b\u975e\u5e38\u7b80\u8981\u5730\u8bf4\u660e\u4e86 React Query \u7684 3 \u4e2a\u6838\u5fc3\u6982\u5ff5\uff1a",source:"@site/docs/getstarted/quick-start.md",slug:"/getstarted/quick-start",permalink:"/react-query-web-i18n/getstarted/quick-start",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/getstarted/quick-start.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177",permalink:"/react-query-web-i18n/getstarted/devtools"},next:{title:"\u89c6\u9891\u6559\u7a0b",permalink:"/react-query-web-i18n/getstarted/videos"}},c=[],l={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u8be5\u793a\u4f8b\u975e\u5e38\u7b80\u8981\u5730\u8bf4\u660e\u4e86 React Query \u7684 3 \u4e2a\u6838\u5fc3\u6982\u5ff5\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u67e5\u8be2 Queries"),Object(a.b)("li",{parentName:"ul"},"\u4fee\u6539 Mutations"),Object(a.b)("li",{parentName:"ul"},"\u67e5\u8be2\u9519\u8bef\u5904\u7406 Query Invalidation")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import {\n  useQuery,\n  useMutation,\n  useQueryClient,\n  QueryClient,\n  QueryClientProvider,\n} from 'react-query'\nimport { getTodos, postTodo } from '../my-api'\n\n// \u521b\u5efa\u4e00\u4e2a client\nconst queryClient = new QueryClient()\n\nfunction App() {\n  return (\n    // \u63d0\u4f9b client \u81f3 App\n    <QueryClientProvider client={queryClient}>\n      <Todos />\n    </QueryClientProvider>\n  )\n}\n\nfunction Todos() {\n  // \u8bbf\u95ee client\n  const queryClient = useQueryClient()\n\n  // \u67e5\u8be2\n  const query = useQuery('todos', getTodos)\n\n  // \u4fee\u6539\n  const mutation = useMutation(postTodo, {\n    onSuccess: () => {\n      // \u9519\u8bef\u5904\u7406\u548c\u5237\u65b0\n      queryClient.invalidateQueries('todos')\n    },\n  })\n\n  return (\n    <div>\n      <ul>\n        {query.data.map((todo) => (\n          <li key={todo.id}>{todo.title}</li>\n        ))}\n      </ul>\n\n      <button\n        onClick={() => {\n          mutation.mutate({\n            id: Date.now(),\n            title: 'Do Laundry',\n          })\n        }}\n      >\n        Add Todo\n      </button>\n    </div>\n  )\n}\n\nrender(<App />, document.getElementById('root'))\n")),Object(a.b)("p",null,"\u8fd9\u4e09\u4e2a\u6982\u5ff5\u6784\u6210\u4e86 React Query \u7684\u5927\u90e8\u5206\u6838\u5fc3\u529f\u80fd\u3002\n\u672c\u6587\u6863\u7684\u4e0b\u4e00\u90e8\u5206\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8fd9\u4e9b\u6838\u5fc3\u6982\u5ff5\u3002"))}s.isMDXComponent=!0}}]);