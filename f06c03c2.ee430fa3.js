(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(142)),l={id:"QueryClient",title:"QueryClient"},c={unversionedId:"reference/QueryClient",id:"reference/QueryClient",isDocsHomePage:!1,title:"QueryClient",description:"QueryClient",source:"@site/docs/reference/QueryClient.md",slug:"/reference/QueryClient",permalink:"/react-query-web-i18n/reference/QueryClient",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/QueryClient.md",version:"current",lastUpdatedAt:1614595344},u=[{value:"<code>QueryClient</code>",id:"queryclient",children:[]},{value:"<code>queryClient.fetchQuery</code>",id:"queryclientfetchquery",children:[]},{value:"<code>queryClient.fetchInfiniteQuery</code>",id:"queryclientfetchinfinitequery",children:[]},{value:"<code>queryClient.prefetchQuery</code>",id:"queryclientprefetchquery",children:[]},{value:"<code>queryClient.prefetchInfiniteQuery</code>",id:"queryclientprefetchinfinitequery",children:[]},{value:"<code>queryClient.getQueryData</code>",id:"queryclientgetquerydata",children:[]},{value:"<code>queryClient.setQueryData</code>",id:"queryclientsetquerydata",children:[]},{value:"<code>queryClient.getQueryState</code>",id:"queryclientgetquerystate",children:[]},{value:"<code>queryClient.invalidateQueries</code>",id:"queryclientinvalidatequeries",children:[]},{value:"<code>queryClient.refetchQueries</code>",id:"queryclientrefetchqueries",children:[]},{value:"<code>queryClient.cancelQueries</code>",id:"queryclientcancelqueries",children:[]},{value:"<code>queryClient.removeQueries</code>",id:"queryclientremovequeries",children:[]},{value:"<code>queryClient.resetQueries</code>",id:"queryclientresetqueries",children:[]},{value:"<code>queryClient.isFetching</code>",id:"queryclientisfetching",children:[]},{value:"<code>queryClient.getDefaultOptions</code>",id:"queryclientgetdefaultoptions",children:[]},{value:"<code>queryClient.setDefaultOptions</code>",id:"queryclientsetdefaultoptions",children:[]},{value:"<code>queryClient.getQueryDefaults</code>",id:"queryclientgetquerydefaults",children:[]},{value:"<code>queryClient.setQueryDefaults</code>",id:"queryclientsetquerydefaults",children:[]},{value:"<code>queryClient.getMutationDefaults</code>",id:"queryclientgetmutationdefaults",children:[]},{value:"<code>queryClient.setMutationDefaults</code>",id:"queryclientsetmutationdefaults",children:[]},{value:"<code>queryClient.getQueryCache</code>",id:"queryclientgetquerycache",children:[]},{value:"<code>queryClient.getMutationCache</code>",id:"queryclientgetmutationcache",children:[]},{value:"<code>queryClient.clear</code>",id:"queryclientclear",children:[]}],b={toc:u};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"queryclient"},Object(i.b)("inlineCode",{parentName:"h2"},"QueryClient")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"QueryClient")," can be used to interact with a cache:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { QueryClient } from 'react-query'\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      staleTime: Infinity,\n    },\n  },\n})\n\nawait queryClient.prefetchQuery('posts', fetchPosts)\n")),Object(i.b)("p",null,"Its available methods are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclient"},Object(i.b)("inlineCode",{parentName:"a"},"QueryClient"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientfetchquery"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.fetchQuery"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientfetchinfinitequery"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.fetchInfiniteQuery"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientprefetchquery"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.prefetchQuery"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientprefetchinfinitequery"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.prefetchInfiniteQuery"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientgetquerydata"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.getQueryData"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientsetquerydata"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.setQueryData"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientgetquerystate"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.getQueryState"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientinvalidatequeries"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.invalidateQueries"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientrefetchqueries"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.refetchQueries"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientcancelqueries"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.cancelQueries"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientremovequeries"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.removeQueries"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientresetqueries"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.resetQueries"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientisfetching"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.isFetching"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientgetdefaultoptions"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.getDefaultOptions"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientsetdefaultoptions"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.setDefaultOptions"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientgetquerydefaults"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.getQueryDefaults"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientsetquerydefaults"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.setQueryDefaults"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientgetmutationdefaults"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.getMutationDefaults"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientsetmutationdefaults"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.setMutationDefaults"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientgetquerycache"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.getQueryCache"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientgetmutationcache"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.getMutationCache"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#queryclientclear"},Object(i.b)("inlineCode",{parentName:"a"},"queryClient.clear")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryCache?: QueryCache"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Optional"),Object(i.b)("li",{parentName:"ul"},"The query cache this client is connected to."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mutationCache?: MutationCache"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Optional"),Object(i.b)("li",{parentName:"ul"},"The mutation cache this client is connected to."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaultOptions?: DefaultOptions"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Optional"),Object(i.b)("li",{parentName:"ul"},"Define defaults for all queries and mutations using this queryClient.")))),Object(i.b)("h2",{id:"queryclientfetchquery"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.fetchQuery")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," is an asynchronous method that can be used to fetch and cache a query. It will either resolve with the data or throw with the error. Use the ",Object(i.b)("inlineCode",{parentName:"p"},"prefetchQuery")," method if you just want to fetch a query without needing the result."),Object(i.b)("p",null,"If the query exists and the data is not invalidated or older than the given ",Object(i.b)("inlineCode",{parentName:"p"},"staleTime"),", then the data from the cache will be returned. Otherwise it will try to fetch the latest data."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The difference between using ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," and ",Object(i.b)("inlineCode",{parentName:"p"},"setQueryData")," is that ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," is async and will ensure that duplicate requests for this query are not created with ",Object(i.b)("inlineCode",{parentName:"p"},"useQuery")," instances for the same query are rendered while the data is fetching.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"try {\n  const data = await queryClient.fetchQuery(queryKey, queryFn)\n} catch (error) {\n  console.log(error)\n}\n")),Object(i.b)("p",null,"Specify a ",Object(i.b)("inlineCode",{parentName:"p"},"staleTime")," to only fetch when the data is older than a certain amount of time:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"try {\n  const data = await queryClient.fetchQuery(queryKey, queryFn, {\n    staleTime: 10000,\n  })\n} catch (error) {\n  console.log(error)\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("p",null,"The options for ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," are exactly the same as those of ",Object(i.b)("a",{parentName:"p",href:"./useQuery"},Object(i.b)("inlineCode",{parentName:"a"},"useQuery")),", except the following: ",Object(i.b)("inlineCode",{parentName:"p"},"enabled, refetchInterval, refetchIntervalInBackground, refetchOnWindowFocus, refetchOnReconnect, notifyOnChangeProps, notifyOnChangePropsExclusions, onSuccess, onError, onSettled, useErrorBoundary, select, suspense, keepPreviousData, placeholderData"),"; which are stictly for useQuery and useInfiniteQuery. You can check the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query/blob/361935a12cec6f36d0bd6ba12e84136c405047c5/src/core/types.ts#L83"},"source code")," for more clarity."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Promise<TData>"))),Object(i.b)("h2",{id:"queryclientfetchinfinitequery"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.fetchInfiniteQuery")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fetchInfiniteQuery")," is similar to ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," but can be used to fetch and cache an infinite query."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"try {\n  const data = await queryClient.fetchInfiniteQuery(queryKey, queryFn)\n  console.log(data.pages)\n} catch (error) {\n  console.log(error)\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("p",null,"The options for ",Object(i.b)("inlineCode",{parentName:"p"},"fetchInfiniteQuery")," are exactly the same as those of ",Object(i.b)("a",{parentName:"p",href:"#queryclientfetchquery"},Object(i.b)("inlineCode",{parentName:"a"},"fetchQuery")),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Promise<InfiniteData<TData>>"))),Object(i.b)("h2",{id:"queryclientprefetchquery"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.prefetchQuery")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"prefetchQuery")," is an asynchronous method that can be used to prefetch a query before it is needed or rendered with ",Object(i.b)("inlineCode",{parentName:"p"},"useQuery")," and friends. The method works the same as ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," except that it will not throw or return any data."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await queryClient.prefetchQuery(queryKey, queryFn)\n")),Object(i.b)("p",null,"You can even use it with a default queryFn in your config!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await queryClient.prefetchQuery(queryKey)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("p",null,"The options for ",Object(i.b)("inlineCode",{parentName:"p"},"prefetchQuery")," are exactly the same as those of ",Object(i.b)("a",{parentName:"p",href:"#queryclientfetchquery"},Object(i.b)("inlineCode",{parentName:"a"},"fetchQuery")),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Promise<void>"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A promise is returned that will either immediately resolve if no fetch is needed or after the query has been executed. It will not return any data or throw any errors.")))),Object(i.b)("h2",{id:"queryclientprefetchinfinitequery"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.prefetchInfiniteQuery")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"prefetchInfiniteQuery")," is similar to ",Object(i.b)("inlineCode",{parentName:"p"},"prefetchQuery")," but can be used to prefetch and cache an infinite query."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await queryClient.prefetchInfiniteQuery(queryKey, queryFn)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("p",null,"The options for ",Object(i.b)("inlineCode",{parentName:"p"},"prefetchInfiniteQuery")," are exactly the same as those of ",Object(i.b)("a",{parentName:"p",href:"#queryclientfetchquery"},Object(i.b)("inlineCode",{parentName:"a"},"fetchQuery")),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Promise<void>"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A promise is returned that will either immediately resolve if no fetch is needed or after the query has been executed. It will not return any data or throw any errors.")))),Object(i.b)("h2",{id:"queryclientgetquerydata"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.getQueryData")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"getQueryData")," is a synchronous function that can be used to get an existing query's cached data. If the query does not exist, ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," will be returned."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const data = queryClient.getQueryData(queryKey)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data: TData | undefined"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The data for the cached query, or ",Object(i.b)("inlineCode",{parentName:"li"},"undefined")," if the query does not exist.")))),Object(i.b)("h2",{id:"queryclientsetquerydata"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.setQueryData")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"setQueryData")," is a synchronous function that can be used to immediately update a query's cached data. If the query does not exist, it will be created. ",Object(i.b)("strong",{parentName:"p"},"If the query is not utilized by a query hook in the default ",Object(i.b)("inlineCode",{parentName:"strong"},"cacheTime")," of 5 minutes, the query will be garbage collected"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The difference between using ",Object(i.b)("inlineCode",{parentName:"p"},"setQueryData")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," is that ",Object(i.b)("inlineCode",{parentName:"p"},"setQueryData")," is sync and assumes that you already synchronously have the data available. If you need to fetch the data asynchronously, it's suggested that you either refetch the query key or use ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," to handle the asynchronous fetch.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"queryClient.setQueryData(queryKey, updater)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updater: unknown | (oldData: TData | undefined) => TData"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If non-function is passed, the data will be updated to this value"),Object(i.b)("li",{parentName:"ul"},"If a function is passed, it will receive the old data value and be expected to return a new one.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Using an updater value")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"setQueryData(queryKey, newData)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Using an updater function")),Object(i.b)("p",null,"For convenience in syntax, you can also pass an updater function which receives the current data value and returns the new one:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"setQueryData(queryKey, oldData => newData)\n")),Object(i.b)("h2",{id:"queryclientgetquerystate"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.getQueryState")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"getQueryState")," is a synchronous function that can be used to get an existing query's state. If the query does not exist, ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," will be returned."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const state = queryClient.getQueryState(queryKey)\nconsole.log(state.dataUpdatedAt)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters"))),Object(i.b)("h2",{id:"queryclientinvalidatequeries"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.invalidateQueries")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"invalidateQueries")," method can be used to invalidate and refetch single or multiple queries in the cache based on their query keys or any other functionally accessible property/state of the query. By default, all matching queries are immediately marked as invalid and active queries are refetched in the background."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you ",Object(i.b)("strong",{parentName:"li"},"do not want active queries to refetch"),", and simply be marked as invalid, you can use the ",Object(i.b)("inlineCode",{parentName:"li"},"refetchActive: false")," option."),Object(i.b)("li",{parentName:"ul"},"If you ",Object(i.b)("strong",{parentName:"li"},"want inactive queries to refetch")," as well, use the ",Object(i.b)("inlineCode",{parentName:"li"},"refetchInactive: true")," option")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await queryClient.invalidateQueries('posts', {\n  exact,\n  refetchActive: true,\n  refetchInactive: false\n}, { throwOnError })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refetchActive: Boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"When set to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", queries that match the refetch predicate and are actively being rendered via ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery")," and friends will NOT be refetched in the background, and only marked as invalid."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refetchInactive: Boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"When set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", queries that match the refetch predicate and are not being rendered via ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery")," and friends will be both marked as invalid and also refetched in the background"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refetchOptions?: RefetchOptions"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"throwOnError?: boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", this method will throw if any of the query refetch tasks fail.")))))),Object(i.b)("h2",{id:"queryclientrefetchqueries"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.refetchQueries")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"refetchQueries")," method can be used to refetch queries based on certain conditions."),Object(i.b)("p",null,"Examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// refetch all queries:\nawait queryClient.refetchQueries()\n\n// refetch all stale queries:\nawait queryClient.refetchQueries({ stale: true })\n\n// refetch all active queries partially matching a query key:\nawait queryClient.refetchQueries(['posts'], { active: true })\n\n// refetch all active queries exactly matching a query key:\nawait queryClient.refetchQueries(['posts', 1], { active: true, exact: true })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refetchOptions?: RefetchOptions"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"throwOnError?: boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", this method will throw if any of the query refetch tasks fail.")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("p",null,"This function returns a promise that will resolve when all of the queries are done being refetched. By default, it ",Object(i.b)("strong",{parentName:"p"},"will not")," throw an error if any of those queries refetches fail, but this can be configured by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"throwOnError")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("h2",{id:"queryclientcancelqueries"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.cancelQueries")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cancelQueries")," method can be used to cancel outgoing queries based on their query keys or any other functionally accessible property/state of the query."),Object(i.b)("p",null,"This is most useful when performing optimistic updates since you will likely need to cancel any outgoing query refetches so they don't clobber your optimistic update when they resolve."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await queryClient.cancelQueries('posts', { exact: true })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("p",null,"This method does not return anything"),Object(i.b)("h2",{id:"queryclientremovequeries"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.removeQueries")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"removeQueries")," method can be used to remove queries from the cache based on their query keys or any other functionally accessible property/state of the query."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"queryClient.removeQueries(queryKey, { exact: true })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("p",null,"This method does not return anything"),Object(i.b)("h2",{id:"queryclientresetqueries"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.resetQueries")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"resetQueries")," method can be used to reset queries in the cache to their\ninitial state based on their query keys or any other functionally accessible\nproperty/state of the query."),Object(i.b)("p",null,"This will notify subscribers ","\u2014"," unlike ",Object(i.b)("inlineCode",{parentName:"p"},"clear"),", which removes all\nsubscribers ","\u2014"," and reset the query to its pre-loaded state ","\u2014"," unlike\n",Object(i.b)("inlineCode",{parentName:"p"},"invalidateQueries"),". If a query has ",Object(i.b)("inlineCode",{parentName:"p"},"initialData"),", the query's data will be\nreset to that. If a query is active, it will be refetched."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"queryClient.resetQueries(queryKey, { exact: true })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resetOptions?: ResetOptions"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"throwOnError?: boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", this method will throw if any of the query refetch tasks fail.")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("p",null,"This method returns a promise that resolves when all active queries have been refetched."),Object(i.b)("h2",{id:"queryclientisfetching"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.isFetching")),Object(i.b)("p",null,"This ",Object(i.b)("inlineCode",{parentName:"p"},"isFetching")," method returns an ",Object(i.b)("inlineCode",{parentName:"p"},"integer")," representing how many queries, if any, in the cache are currently fetching (including background-fetching, loading new pages, or loading more infinite query results)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"if (queryClient.isFetching()) {\n  console.log('At least one query is fetching!')\n}\n")),Object(i.b)("p",null,"React Query also exports a handy ",Object(i.b)("a",{parentName:"p",href:"#useisfetching"},Object(i.b)("inlineCode",{parentName:"a"},"useIsFetching"))," hook that will let you subscribe to this state in your components without creating a manual subscription to the query cache."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-filters"},"Query Filters"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("p",null,"This method returns the number of fetching queries."),Object(i.b)("h2",{id:"queryclientgetdefaultoptions"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.getDefaultOptions")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getDefaultOptions")," method returns the default options which have been set when creating the client or with ",Object(i.b)("inlineCode",{parentName:"p"},"setDefaultOptions"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const defaultOptions = queryClient.getDefaultOptions()\n")),Object(i.b)("h2",{id:"queryclientsetdefaultoptions"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.setDefaultOptions")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"setDefaultOptions")," method can be used to dynamically set the default options for this queryClient."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"queryClient.setDefaultOptions({\n  queries: {\n    staleTime: Infinity,\n  },\n})\n")),Object(i.b)("h2",{id:"queryclientgetquerydefaults"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.getQueryDefaults")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getQueryDefaults")," method returns the default options which have been set for specific queries:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const defaultOptions = queryClient.getQueryDefaults('posts')\n")),Object(i.b)("h2",{id:"queryclientsetquerydefaults"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.setQueryDefaults")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"setQueryDefaults")," can be used to set default options for specific queries:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"queryClient.setQueryDefaults('posts', { queryFn: fetchPosts })\n\nfunction Component() {\n  const { data } = useQuery('posts')\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryKey: QueryKey"),": ",Object(i.b)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options: QueryOptions"))),Object(i.b)("h2",{id:"queryclientgetmutationdefaults"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.getMutationDefaults")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getMutationDefaults")," method returns the default options which have been set for specific mutations:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const defaultOptions = queryClient.getMutationDefaults('addPost')\n")),Object(i.b)("h2",{id:"queryclientsetmutationdefaults"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.setMutationDefaults")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"setMutationDefaults")," can be used to set default options for specific mutations:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"queryClient.setMutationDefaults('addPost', { mutationFn: addPost })\n\nfunction Component() {\n  const { data } = useMutation('addPost')\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mutationKey: string | unknown[]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options: MutationOptions"))),Object(i.b)("h2",{id:"queryclientgetquerycache"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.getQueryCache")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getQueryCache")," method returns the query cache this client is connected to."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const queryCache = queryClient.getQueryCache()\n")),Object(i.b)("h2",{id:"queryclientgetmutationcache"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.getMutationCache")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getMutationCache")," method returns the mutation cache this client is connected to."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const mutationCache = queryClient.getMutationCache()\n")),Object(i.b)("h2",{id:"queryclientclear"},Object(i.b)("inlineCode",{parentName:"h2"},"queryClient.clear")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"clear")," method clears all connected caches."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"queryClient.clear()\n")))}o.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),s=o(n),d=a,y=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?r.a.createElement(y,c(c({ref:t},b),{},{components:n})):r.a.createElement(y,c({ref:t},b))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);