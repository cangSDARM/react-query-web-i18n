"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={id:"tkdodos-blog",title:"TkDodo's Blog"},i=void 0,s={unversionedId:"community/tkdodos-blog",id:"community/tkdodos-blog",title:"TkDodo's Blog",description:"React Query maintainer TkDodo has a series of blog posts about using and working with the library. Some articles show general best practices, but most have an opinionated point of view.",source:"@site/vue/community/tkdodos-blog.md",sourceDirName:"community",slug:"/community/tkdodos-blog",permalink:"/react-query-web-i18n/vue/community/tkdodos-blog",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/vue/community/tkdodos-blog.md",tags:[],version:"current",lastUpdatedAt:1678687079,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"tkdodos-blog",title:"TkDodo's Blog"}},l={},c=[{value:"#1: Practical React Query",id:"1-practical-react-query",level:2},{value:"#2: React Query Data Transformations",id:"2-react-query-data-transformations",level:2},{value:"#3: React Query Render Optimizations",id:"3-react-query-render-optimizations",level:2},{value:"#4: Status Checks in React Query",id:"4-status-checks-in-react-query",level:2},{value:"#5: Testing React Query",id:"5-testing-react-query",level:2},{value:"#6: React Query and TypeScript",id:"6-react-query-and-typescript",level:2},{value:"#7: Using WebSockets with React Query",id:"7-using-websockets-with-react-query",level:2},{value:"#8: Effective React Query Keys",id:"8-effective-react-query-keys",level:2},{value:"#9: Placeholder and Initial Data in React Query",id:"9-placeholder-and-initial-data-in-react-query",level:2},{value:"#10: React Query as a State Manager",id:"10-react-query-as-a-state-manager",level:2},{value:"#11: React Query Error Handling",id:"11-react-query-error-handling",level:2},{value:"#12: Mastering Mutations in React Query",id:"12-mastering-mutations-in-react-query",level:2},{value:"#13: Offline React Query",id:"13-offline-react-query",level:2},{value:"#14: React Query and Forms",id:"14-react-query-and-forms",level:2},{value:"#15: React Query FAQs",id:"15-react-query-faqs",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Query maintainer ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/tkdodo"},"TkDodo")," has a series of blog posts about using and working with the library. Some articles show general best practices, but most have an ",(0,o.kt)("em",{parentName:"p"},"opinionated")," point of view."),(0,o.kt)("h2",{id:"1-practical-react-query"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/practical-react-query"},"#1: Practical React Query")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An advanced introduction to React Query, showing practical tips that go beyond the docs. It covers explaining the defaults (",(0,o.kt)("inlineCode",{parentName:"p"},"staleTime")," vs. ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheTime"),"), concepts like keeping server and client state separate, handling dependencies and creating custom hooks, as well as outlining why the ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," option is very powerful. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/practical-react-query"},"Read more..."))),(0,o.kt)("h2",{id:"2-react-query-data-transformations"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/react-query-data-transformations"},"#2: React Query Data Transformations")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Learn the possibilities to perform the quite common and important task of transforming your data with React Query. From transforming in the ",(0,o.kt)("inlineCode",{parentName:"p"},"queryFn")," to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," option, this article outlines the pros and cons of all the different approaches. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/react-query-data-transformations"},"Read more..."))),(0,o.kt)("h2",{id:"3-react-query-render-optimizations"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/react-query-render-optimizations"},"#3: React Query Render Optimizations")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Let's take a look at what you can do when your component re-renders too often when using React Query. The library is already pretty optimized, but there are still some opt-in features (like ",(0,o.kt)("inlineCode",{parentName:"p"},"tracked queries"),") that you can use to avoid the ",(0,o.kt)("inlineCode",{parentName:"p"},"isFetching")," transition. We're also looking into what ",(0,o.kt)("inlineCode",{parentName:"p"},"structural sharing")," refers to. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/react-query-render-optimizations"},"Read more..."))),(0,o.kt)("h2",{id:"4-status-checks-in-react-query"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/status-checks-in-react-query"},"#4: Status Checks in React Query")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We usually check for ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," first before checking for ",(0,o.kt)("inlineCode",{parentName:"p"},"isError")," , but sometimes, checking if ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," is available should be the first thing to do. This article shows how the wrong status check order can negatively impact user experience. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/status-checks-in-react-query"},"Read more..."))),(0,o.kt)("h2",{id:"5-testing-react-query"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/testing-react-query"},"#5: Testing React Query")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The docs already cover pretty well what you need to do to get started when testing React Query. This article shows some additional tips (like turning off ",(0,o.kt)("inlineCode",{parentName:"p"},"retries")," or silencing the ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),") you might want to follow when testing custom hooks or components using them. It also links to an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TkDodo/testing-react-query"},"example repository")," with tests for success and error states, powered by ",(0,o.kt)("inlineCode",{parentName:"p"},"mock-service-worker"),". ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/testing-react-query"},"Read more..."))),(0,o.kt)("h2",{id:"6-react-query-and-typescript"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/react-query-and-type-script"},"#6: React Query and TypeScript")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since React Query is written in TypeScript, it has great support for it. This blog post explains the various Generics, how you can leverage type inference to avoid having to explicitly type ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," and friends, what to do with ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown")," errors, how type narrowing works and more! ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/react-query-and-type-script"},"Read more..."))),(0,o.kt)("h2",{id:"7-using-websockets-with-react-query"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/using-web-sockets-with-react-query"},"#7: Using WebSockets with React Query")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A step-by-step guide on how to make real-time notifications work with React Query, with either event-based subscriptions or pushing full data directly to the client. Applicable to anything from the browser native WebSocket API over Firebase and even GraphQL subscriptions. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/using-web-sockets-with-react-query"},"Read more..."))),(0,o.kt)("h2",{id:"8-effective-react-query-keys"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/effective-react-query-keys"},"#8: Effective React Query Keys")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Most examples just use a simple String or Array Query Key, but how do you organize your keys effectively once your app grows past a todo list? This article shows how co-location and Query Key Factories can make life easier. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/effective-react-query-keys"},"Read more..."))),(0,o.kt)("h2",{id:"9-placeholder-and-initial-data-in-react-query"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/placeholder-and-initial-data-in-react-query"},"#9: Placeholder and Initial Data in React Query")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Placeholder and Initial Data are two similar yet different concepts for synchronously showing data instead of a loading spinner to improve an application's UX. This blog post compares the two and outlines the scenarios where each one shines. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/placeholder-and-initial-data-in-react-query"},"Read more..."))),(0,o.kt)("h2",{id:"10-react-query-as-a-state-manager"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/react-query-as-a-state-manager"},"#10: React Query as a State Manager")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"React Query doesn't fetch any data for you - it's a data synchronization tool that excels when used for server state. This article has everything you need to know to make React Query your single source of truth state manager for your async state. You'll learn how to let React Query do it's magic and why customizing ",(0,o.kt)("inlineCode",{parentName:"p"},"staleTime")," might be all you need. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/react-query-as-a-state-manager"},"Read more..."))),(0,o.kt)("h2",{id:"11-react-query-error-handling"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/react-query-error-handling"},"#11: React Query Error Handling")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Handling errors is an integral part of working with asynchronous data, especially data fetching. We have to face it: Not all requests will be successful, and not all Promises will be fulfilled. This blog post describes various ways of coping with errors in React Query, such as the error property, using Error Boundaries or onError callbacks, so that you can prepare your application for the cases when "Something went wrong". ',(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/react-query-error-handling"},"Read more..."))),(0,o.kt)("h2",{id:"12-mastering-mutations-in-react-query"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/mastering-mutations-in-react-query"},"#12: Mastering Mutations in React Query")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Mutations are the important, second part necessary to work with server data - for situations where you need to update it. This blog post covers what mutations are and how they are different from queries. You'll learn the difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mutateAsync")," as well as how you can tie queries and mutations together. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/mastering-mutations-in-react-query"},"Read more..."))),(0,o.kt)("h2",{id:"13-offline-react-query"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/offline-react-query"},"#13: Offline React Query")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There are many ways to produce promises - which is everything React Query needs - but by far the biggest use-case is data fetching. Very often, that requires an active network connection. But sometimes, especially on mobile devices where, the network connection can be unreliable, you need your app to also work without it. In this article, you'll learn about the different offline strategies React Query offers. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/offline-react-query"},"Read more..."))),(0,o.kt)("h2",{id:"14-react-query-and-forms"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/react-query-and-forms"},"#14: React Query and Forms")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Forms tend to blur the line between what is server state and what is client state. In most applications, we would not only like to display state, but also let the user interact with it. This article shows two different approaches as well as some tips and tricks about using React Query with Forms. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/react-query-and-forms"},"Read more..."))),(0,o.kt)("h2",{id:"15-react-query-faqs"},(0,o.kt)("a",{parentName:"h2",href:"https://tkdodo.eu/blog/react-query-fa-qs"},"#15: React Query FAQs")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article tries to answer the most frequently asked questions about React Query. ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/react-query-fa-qs"},"Read more..."))))}d.isMDXComponent=!0}}]);