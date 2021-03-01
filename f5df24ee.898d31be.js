(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(142)),l={id:"query-filters",title:"Query Filters"},c={unversionedId:"guides&concepts/query-filters",id:"guides&concepts/query-filters",isDocsHomePage:!1,title:"Query Filters",description:"Some methods within React Query accept a QueryFilters object. A query filter is an object with certain conditions to match a query with:",source:"@site/docs/guides&concepts/query-filters.md",slug:"/guides&concepts/query-filters",permalink:"/react-query-web-i18n/guides&concepts/query-filters",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/query-filters.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"Scroll Restoration",permalink:"/react-query-web-i18n/guides&concepts/scroll-restoration"},next:{title:"SSR",permalink:"/react-query-web-i18n/guides&concepts/ssr"}},o=[],u={toc:o};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Some methods within React Query accept a ",Object(a.b)("inlineCode",{parentName:"p"},"QueryFilters")," object. A query filter is an object with certain conditions to match a query with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// Cancel all queries\nawait queryClient.cancelQueries()\n\n// Remove all inactive queries\nqueryClient.removeQueries('posts', { inactive: true })\n\n// Refetch all active queries\nawait queryClient.refetchQueries({ active: true })\n\n// Refetch all active queries that begin with `post` in the key\nawait queryClient.refetchQueries('posts', { active: true })\n")),Object(a.b)("p",null,"A query filter object supports the following properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"exact?: boolean"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If you don't want to search queries inclusively by query key, you can pass the ",Object(a.b)("inlineCode",{parentName:"li"},"exact: true")," option to return only the query with the exact query key you have passed."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"active?: boolean"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," it will match active queries."),Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"false")," it will match inactive queries."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"inactive?: boolean"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," it will match inactive queries."),Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"false")," it will match active queries."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"stale?: boolean"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," it will match stale queries."),Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"false")," it will match fresh queries."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fetching?: boolean"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," it will match queries that are currently fetching."),Object(a.b)("li",{parentName:"ul"},"When set to ",Object(a.b)("inlineCode",{parentName:"li"},"false")," it will match queries that are not fetching."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"predicate?: (query: Query) => boolean"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This predicate function will be called for every single query in the cache and be expected to return truthy for queries that are ",Object(a.b)("inlineCode",{parentName:"li"},"found"),"."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Set this property to define a query key to match on.")))))}b.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,y=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return n?i.a.createElement(y,c(c({ref:t},u),{},{components:n})):i.a.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);