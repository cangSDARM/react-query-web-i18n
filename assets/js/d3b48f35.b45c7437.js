"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||i;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"useInfiniteQuery",title:"useInfiniteQuery"},l=void 0,o={unversionedId:"reference/useInfiniteQuery",id:"reference/useInfiniteQuery",title:"useInfiniteQuery",description:"Options",source:"@site/vue/reference/useInfiniteQuery.md",sourceDirName:"reference",slug:"/reference/useInfiniteQuery",permalink:"/react-query-web-i18n/vue/reference/useInfiniteQuery",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/vue/reference/useInfiniteQuery.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"useInfiniteQuery",title:"useInfiniteQuery"}},u={},p=[],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const {\n  fetchNextPage,\n  fetchPreviousPage,\n  hasNextPage,\n  hasPreviousPage,\n  isFetchingNextPage,\n  isFetchingPreviousPage,\n  ...result\n} = useInfiniteQuery(queryKey, ({ pageParam = 1 }) => fetchPage(pageParam), {\n  ...options,\n  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,\n  getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("p",null,"The options for ",(0,r.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery")," are identical to the ",(0,r.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," hook")," with the addition of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryFn: (context: QueryFunctionContext) => Promise<TData>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required, but only if no default query function has been defined")," ",(0,r.kt)("a",{parentName:"li",href:"/react-query-web-i18n/vue/guides&concepts/default-query-function"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultQueryFn"))),(0,r.kt)("li",{parentName:"ul"},"The function that the query will use to request data."),(0,r.kt)("li",{parentName:"ul"},"Receives a ",(0,r.kt)("a",{parentName:"li",href:"/react-query-web-i18n/vue/guides&concepts/query-functions#queryfunctioncontext"},"QueryFunctionContext")),(0,r.kt)("li",{parentName:"ul"},"Must return a promise that will either resolve data or throw an error."),(0,r.kt)("li",{parentName:"ul"},"Make sure you return the data ",(0,r.kt)("em",{parentName:"li"},"and")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"pageParam")," if needed for use in the props below."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getNextPageParam: (lastPage, allPages) => unknown | undefined"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When new data is received for this query, this function receives both the last page of the infinite list of data and the full array of all pages."),(0,r.kt)("li",{parentName:"ul"},"It should return a ",(0,r.kt)("strong",{parentName:"li"},"single variable")," that will be passed as the last optional parameter to your query function."),(0,r.kt)("li",{parentName:"ul"},"Return ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," to indicate there is no next page available."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam: (firstPage, allPages) => unknown | undefined"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When new data is received for this query, this function receives both the first page of the infinite list of data and the full array of all pages."),(0,r.kt)("li",{parentName:"ul"},"It should return a ",(0,r.kt)("strong",{parentName:"li"},"single variable")," that will be passed as the last optional parameter to your query function."),(0,r.kt)("li",{parentName:"ul"},"Return ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," to indicate there is no previous page available.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,"The returned properties for ",(0,r.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery")," are identical to the ",(0,r.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," hook"),", with the addition of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.pages: TData[]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Array containing all pages."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.pageParams: unknown[]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Array containing all page params."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFetchingNextPage: boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," while fetching the next page with ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFetchingPreviousPage: boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," while fetching the previous page with ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'This function allows you to fetch the next "page" of results.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.pageParam: unknown")," allows you to manually specify a page param instead of using ",(0,r.kt)("inlineCode",{parentName:"li"},"getNextPageParam"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.cancelRefetch: boolean")," if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", calling ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage")," repeatedly will invoke ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchPage")," every time, whether the previous\ninvocation has resolved or not. Also, the result from previous invocations will be ignored. If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", calling ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"\nrepeatedly won't have any effect until the first invocation has resolved. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage: (options?: FetchPreviousPageOptions) => Promise<UseInfiniteQueryResult>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'This function allows you to fetch the previous "page" of results.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.pageParam: unknown")," allows you to manually specify a page param instead of using ",(0,r.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.cancelRefetch: boolean")," same as for ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasNextPage: boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if there is a next page to be fetched (known via the ",(0,r.kt)("inlineCode",{parentName:"li"},"getNextPageParam")," option)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasPreviousPage: boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if there is a previous page to be fetched (known via the ",(0,r.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam")," option).")))))}c.isMDXComponent=!0}}]);