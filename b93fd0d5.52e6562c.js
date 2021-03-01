(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(142)),c={id:"caching",title:"Caching Examples"},o={unversionedId:"guides&concepts/caching",id:"guides&concepts/caching",isDocsHomePage:!1,title:"Caching Examples",description:"Please thoroughly read the Important Defaults before reading this guide",source:"@site/docs/guides&concepts/caching.md",slug:"/guides&concepts/caching",permalink:"/react-query-web-i18n/guides&concepts/caching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/caching.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"SSR",permalink:"/react-query-web-i18n/guides&concepts/ssr"},next:{title:"Default Query Function",permalink:"/react-query-web-i18n/guides&concepts/default-query-function"}},l=[{value:"Basic Example",id:"basic-example",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please thoroughly read the ",Object(i.b)("a",{parentName:"p",href:"./important-defaults"},"Important Defaults")," before reading this guide")),Object(i.b)("h2",{id:"basic-example"},"Basic Example"),Object(i.b)("p",null,"This caching example illustrates the story and lifecycle of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Query Instances with and without cache data"),Object(i.b)("li",{parentName:"ul"},"Background Refetching"),Object(i.b)("li",{parentName:"ul"},"Inactive Queries"),Object(i.b)("li",{parentName:"ul"},"Garbage Collection")),Object(i.b)("p",null,"Let's assume we are using the default ",Object(i.b)("inlineCode",{parentName:"p"},"cacheTime")," of ",Object(i.b)("strong",{parentName:"p"},"5 minutes")," and the default ",Object(i.b)("inlineCode",{parentName:"p"},"staleTime")," of ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A new instance of ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)")," mounts.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Since no other queries have been made with this query + variable combination, this query will show a hard loading state and make a network request to fetch the data."),Object(i.b)("li",{parentName:"ul"},"It will then cache the data using ",Object(i.b)("inlineCode",{parentName:"li"},"'todos'")," and ",Object(i.b)("inlineCode",{parentName:"li"},"fetchTodos")," as the unique identifiers for that cache."),Object(i.b)("li",{parentName:"ul"},"The hook will mark itself as stale after the configured ",Object(i.b)("inlineCode",{parentName:"li"},"staleTime")," (defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"0"),", or immediately)."))),Object(i.b)("li",{parentName:"ul"},"A second instance of ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)")," mounts elsewhere.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Because this exact data exist in the cache from the first instance of this query, that data is immediately returned from the cache."))),Object(i.b)("li",{parentName:"ul"},"A background refetch is triggered for both queries (but only one request), since a new instance appeared on screen.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Both instances are updated with the new data if the fetch is successful"))),Object(i.b)("li",{parentName:"ul"},"Both instances of the ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)")," query are unmounted and no longer in use.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Since there are no more active instances to this query, a cache timeout is set using ",Object(i.b)("inlineCode",{parentName:"li"},"cacheTime")," to delete and garbage collect the query (defaults to ",Object(i.b)("strong",{parentName:"li"},"5 minutes"),")."))),Object(i.b)("li",{parentName:"ul"},"Before the cache timeout has completed another instance of ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)")," mounts. The query immediately returns the available cached value while the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchTodos")," function is being run in the background to populate the query with a fresh value."),Object(i.b)("li",{parentName:"ul"},"The final instance of ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)")," unmounts."),Object(i.b)("li",{parentName:"ul"},"No more instances of ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery('todos', fetchTodos)")," appear within ",Object(i.b)("strong",{parentName:"li"},"5 minutes"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This query and its data are deleted and garbage collected.")))))}s.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);