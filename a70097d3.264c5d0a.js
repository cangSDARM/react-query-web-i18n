(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),r=(n(0),n(142)),o={id:"query-invalidation",title:"Query Invalidation"},l={unversionedId:"guides&concepts/query-invalidation",id:"guides&concepts/query-invalidation",isDocsHomePage:!1,title:"Query Invalidation",description:"Waiting for queries to become stale before they are fetched again doesn't always work, especially when you know for a fact that a query's data is out of date because of something the user has done. For that purpose, the QueryClient has an invalidateQueries method that lets you intelligently mark queries as stale and potentially refetch them too!",source:"@site/docs/guides&concepts/query-invalidation.md",slug:"/guides&concepts/query-invalidation",permalink:"/react-query-web-i18n/guides&concepts/query-invalidation",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/query-invalidation.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"\u4fee\u6539",permalink:"/react-query-web-i18n/guides&concepts/mutations"},next:{title:"Invalidation from Mutations",permalink:"/react-query-web-i18n/guides&concepts/invalidation-from-mutations"}},u=[{value:"Query Matching with <code>invalidateQueries</code>",id:"query-matching-with-invalidatequeries",children:[]}],s={toc:u};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Waiting for queries to become stale before they are fetched again doesn't always work, especially when you know for a fact that a query's data is out of date because of something the user has done. For that purpose, the ",Object(r.b)("inlineCode",{parentName:"p"},"QueryClient")," has an ",Object(r.b)("inlineCode",{parentName:"p"},"invalidateQueries")," method that lets you intelligently mark queries as stale and potentially refetch them too!"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// Invalidate every query in the cache\nqueryClient.invalidateQueries()\n// Invalidate every query with a key that starts with `todos`\nqueryClient.invalidateQueries('todos')\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Where other libraries that use normalized caches would attempt to update local queries with the new data either imperatively or via schema inference, React Query gives you the tools to avoid the manual labor that comes with maintaining normalized caches and instead prescribes ",Object(r.b)("strong",{parentName:"p"},"targeted invalidation, background-refetching and ultimately atomic updates"),".")),Object(r.b)("p",null,"When a query is invalidated with ",Object(r.b)("inlineCode",{parentName:"p"},"invalidateQueries"),", two things happen:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is marked as stale. This stale state overrides any ",Object(r.b)("inlineCode",{parentName:"li"},"staleTime")," configurations being used in ",Object(r.b)("inlineCode",{parentName:"li"},"useQuery")," or related hooks"),Object(r.b)("li",{parentName:"ul"},"If the query is currently being rendered via ",Object(r.b)("inlineCode",{parentName:"li"},"useQuery")," or related hooks, it will also be refetched in the background")),Object(r.b)("h2",{id:"query-matching-with-invalidatequeries"},"Query Matching with ",Object(r.b)("inlineCode",{parentName:"h2"},"invalidateQueries")),Object(r.b)("p",null,"When using APIs like ",Object(r.b)("inlineCode",{parentName:"p"},"invalidateQueries")," and ",Object(r.b)("inlineCode",{parentName:"p"},"removeQueries")," (and others that support partial query matching), you can match multiple queries by their prefix, or get really specific and match an exact query. For information on the types of filters you can use, please see ",Object(r.b)("a",{parentName:"p",href:"./query-filters"},"Query Filters"),"."),Object(r.b)("p",null,"In this example, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"todos")," prefix to invalidate any queries that start with ",Object(r.b)("inlineCode",{parentName:"p"},"todos")," in their query key:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { useQuery, useQueryClient } from 'react-query'\n\n// Get QueryClient from the context\nconst queryClient = useQueryClient()\n\nqueryClient.invalidateQueries('todos')\n\n// Both queries below will be invalidated\nconst todoListQuery = useQuery('todos', fetchTodoList)\nconst todoListQuery = useQuery(['todos', { page: 1 }], fetchTodoList)\n")),Object(r.b)("p",null,"You can even invalidate queries with specific variables by passing a more specific query key to the ",Object(r.b)("inlineCode",{parentName:"p"},"invalidateQueries")," method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"queryClient.invalidateQueries(['todos', { type: 'done' }])\n\n// The query below will be invalidated\nconst todoListQuery = useQuery(['todos', { type: 'done' }], fetchTodoList)\n\n// However, the following query below will NOT be invalidated\nconst todoListQuery = useQuery('todos', fetchTodoList)\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"invalidateQueries")," API is very flexible, so even if you want to ",Object(r.b)("strong",{parentName:"p"},"only")," invalidate ",Object(r.b)("inlineCode",{parentName:"p"},"todos")," queries that don't have any more variables or subkeys, you can pass an ",Object(r.b)("inlineCode",{parentName:"p"},"exact: true")," option to the ",Object(r.b)("inlineCode",{parentName:"p"},"invalidateQueries")," method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"queryClient.invalidateQueries('todos', { exact: true })\n\n// The query below will be invalidated\nconst todoListQuery = useQuery(['todos'], fetchTodoList)\n\n// However, the following query below will NOT be invalidated\nconst todoListQuery = useQuery(['todos', { type: 'done' }], fetchTodoList)\n")),Object(r.b)("p",null,"If you find yourself wanting ",Object(r.b)("strong",{parentName:"p"},"even more")," granularity, you can pass a predicate function to the ",Object(r.b)("inlineCode",{parentName:"p"},"invalidateQueries")," method. This function will receive each ",Object(r.b)("inlineCode",{parentName:"p"},"Query")," instance from the query cache and allow you to return ",Object(r.b)("inlineCode",{parentName:"p"},"true")," or ",Object(r.b)("inlineCode",{parentName:"p"},"false")," for whether you want to invalidate that query:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"queryClient.invalidateQueries({\n  predicate: query =>\n    query.queryKey[0] === 'todos' && query.queryKey[1]?.version >= 10,\n})\n\n// The query below will be invalidated\nconst todoListQuery = useQuery(['todos', { version: 20 }], fetchTodoList)\n\n// The query below will be invalidated\nconst todoListQuery = useQuery(['todos', { version: 10 }], fetchTodoList)\n\n// However, the following query below will NOT be invalidated\nconst todoListQuery = useQuery(['todos', { version: 5 }], fetchTodoList)\n")))}c.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,y=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?i.a.createElement(y,l(l({ref:t},s),{},{components:n})):i.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);