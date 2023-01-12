"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[244],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=i,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||s;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const s={id:"persistQueryClient",title:"persistQueryClient"},a=void 0,l={unversionedId:"plugins/persistQueryClient",id:"plugins/persistQueryClient",title:"persistQueryClient",description:'This is set of utilities for interacting with "persisters" which save your queryClient for later use. Different persisters can be used to store your client and cache to many different storage layers.',source:"@site/react/plugins/persistQueryClient.md",sourceDirName:"plugins",slug:"/plugins/persistQueryClient",permalink:"/react-query-web-i18n/react/plugins/persistQueryClient",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/react/plugins/persistQueryClient.md",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"persistQueryClient",title:"persistQueryClient"},sidebar:"zhCN",previous:{title:"createSyncStoragePersister",permalink:"/react-query-web-i18n/react/plugins/createSyncStoragePersister"},next:{title:"\u5bf9\u8d21\u732e\u8005\u5199\u7684\u6587\u6863\u89c4\u8303",permalink:"/react-query-web-i18n/react/doc_template"}},o={},u=[{value:"Build Persisters",id:"build-persisters",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Cache Busting",id:"cache-busting",level:3},{value:"Removal",id:"removal",level:3},{value:"API",id:"api",level:2},{value:"<code>persistQueryClientSave</code>",id:"persistqueryclientsave",level:3},{value:"<code>persistQueryClientSubscribe</code>",id:"persistqueryclientsubscribe",level:3},{value:"<code>persistQueryClientRestore</code>",id:"persistqueryclientrestore",level:3},{value:"<code>persistQueryClient</code>",id:"persistqueryclient",level:3},{value:"<code>Options</code>",id:"options",level:3},{value:"Usage with React",id:"usage-with-react",level:2},{value:"PersistQueryClientProvider",id:"persistqueryclientprovider",level:3},{value:"Props",id:"props",level:4},{value:"useIsRestoring",id:"useisrestoring",level:3},{value:"Persisters",id:"persisters",level:2},{value:"Persisters Interface",id:"persisters-interface",level:3},{value:"Building A Persister",id:"building-a-persister",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'This is set of utilities for interacting with "persisters" which save your queryClient for later use. Different ',(0,i.kt)("strong",{parentName:"p"},"persisters")," can be used to store your client and cache to many different storage layers."),(0,i.kt)("h2",{id:"build-persisters"},"Build Persisters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/plugins/createSyncStoragePersister"},"createSyncStoragePersister")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/plugins/createAsyncStoragePersister"},"createAsyncStoragePersister")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#persisters"},"create a custom persister"))),(0,i.kt)("h2",{id:"how-it-works"},"How It Works"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT")," - for persist to work properly, you probably want to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"cacheTime")," value to override the default during hydration (as shown above)."),(0,i.kt)("p",null,"If it is not set when creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance, it will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"300000")," (5 minutes) for hydration, and the stored cache will be discarded after 5 minutes of inactivity. This is the default garbage collection behavior."),(0,i.kt)("p",null,"It should be set as the same value or higher than persistQueryClient's ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAge")," option. E.g. if ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAge")," is 24 hours (the default) then ",(0,i.kt)("inlineCode",{parentName:"p"},"cacheTime")," should be 24 hours or higher. If lower than ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAge"),", garbage collection will kick in and discard the stored cache earlier than expected."),(0,i.kt)("p",null,"You can also pass it ",(0,i.kt)("inlineCode",{parentName:"p"},"Infinity")," to disable garbage collection behavior entirely."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n});\n")),(0,i.kt)("h3",{id:"cache-busting"},"Cache Busting"),(0,i.kt)("p",null,"Sometimes you may make changes to your application or data that immediately invalidate any and all cached data. If and when this happens, you can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"buster")," string option. If the cache that is found does not also have that buster string, it will be discarded. The following several functions accept this option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"persistQueryClient({ queryClient, persister, buster: buildHash });\npersistQueryClientSave({ queryClient, persister, buster: buildHash });\npersistQueryClientRestore({ queryClient, persister, buster: buildHash });\n")),(0,i.kt)("h3",{id:"removal"},"Removal"),(0,i.kt)("p",null,"If data is found to be any of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"expired (see ",(0,i.kt)("inlineCode",{parentName:"li"},"maxAge"),")"),(0,i.kt)("li",{parentName:"ol"},"busted (see ",(0,i.kt)("inlineCode",{parentName:"li"},"buster"),")"),(0,i.kt)("li",{parentName:"ol"},"error (ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"throws ..."),")"),(0,i.kt)("li",{parentName:"ol"},"empty (ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),")")),(0,i.kt)("p",null,"the persister ",(0,i.kt)("inlineCode",{parentName:"p"},"removeClient()")," is called and the cache is immediately discarded."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"persistqueryclientsave"},(0,i.kt)("inlineCode",{parentName:"h3"},"persistQueryClientSave")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your query/mutation are ",(0,i.kt)("a",{parentName:"li",href:"../reference/hydration#dehydrate"},(0,i.kt)("inlineCode",{parentName:"a"},"dehydrated"))," and stored by the persister you provided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createSyncStoragePersister")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"createAsyncStoragePersister")," throttle this action to happen at most every 1 second to save on potentially expensive writes. Review their documentation to see how to customize their throttle timing.")),(0,i.kt)("p",null,"You can use this to explicitly persist the cache at the moment(s) you choose."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'persistQueryClientSave({\n  queryClient,\n  persister,\n  buster = "",\n  dehydrateOptions = undefined,\n});\n')),(0,i.kt)("h3",{id:"persistqueryclientsubscribe"},(0,i.kt)("inlineCode",{parentName:"h3"},"persistQueryClientSubscribe")),(0,i.kt)("p",null,"Runs ",(0,i.kt)("inlineCode",{parentName:"p"},"persistQueryClientSave")," whenever the cache changes for your ",(0,i.kt)("inlineCode",{parentName:"p"},"queryClient"),". For example: you might initiate the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe"),' when a user logs-in and checks "Remember me".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"unsubscribe")," function which you can use to discontinue the monitor; ending the updates to the persisted cache."),(0,i.kt)("li",{parentName:"ul"},"If you want to erase the persisted cache after the ",(0,i.kt)("inlineCode",{parentName:"li"},"unsubscribe"),", you can send a new ",(0,i.kt)("inlineCode",{parentName:"li"},"buster")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"persistQueryClientRestore")," which will trigger the persister's ",(0,i.kt)("inlineCode",{parentName:"li"},"removeClient")," function and discard the persisted cache.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'persistQueryClientSubscribe({\n  queryClient,\n  persister,\n  buster = "",\n  dehydrateOptions = undefined,\n});\n')),(0,i.kt)("h3",{id:"persistqueryclientrestore"},(0,i.kt)("inlineCode",{parentName:"h3"},"persistQueryClientRestore")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attempts to ",(0,i.kt)("a",{parentName:"li",href:"../reference/hydration#hydrate"},(0,i.kt)("inlineCode",{parentName:"a"},"hydrate"))," a previously persisted dehydrated query/mutation cache from the persister back into the query cache of the passed query client."),(0,i.kt)("li",{parentName:"ul"},"If a cache is found that is older than the ",(0,i.kt)("inlineCode",{parentName:"li"},"maxAge")," (which by default is 24 hours), it will be discarded. This timing can be customized as you see fit.")),(0,i.kt)("p",null,"You can use this to restore the cache at moment(s) you choose."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'persistQueryClientRestore({\n  queryClient,\n  persister,\n  maxAge = 1000 * 60 * 60 * 24, // 24 hours\n  buster = "",\n  hydrateOptions = undefined,\n});\n')),(0,i.kt)("h3",{id:"persistqueryclient"},(0,i.kt)("inlineCode",{parentName:"h3"},"persistQueryClient")),(0,i.kt)("p",null,"Takes the following actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Immediately restores any persisted cache (",(0,i.kt)("a",{parentName:"li",href:"#persistqueryclientrestore"},"see ",(0,i.kt)("inlineCode",{parentName:"a"},"persistQueryClientRestore")),")"),(0,i.kt)("li",{parentName:"ol"},"Subscribes to the query cache and returns the ",(0,i.kt)("inlineCode",{parentName:"li"},"unsubscribe")," function (",(0,i.kt)("a",{parentName:"li",href:"#persistqueryclientsubscribe"},"see ",(0,i.kt)("inlineCode",{parentName:"a"},"persistQueryClientSubscribe")),").")),(0,i.kt)("p",null,"This functionality is preserved from version 3.x."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'persistQueryClient({\n  queryClient,\n  persister,\n  maxAge = 1000 * 60 * 60 * 24, // 24 hours\n  buster = "",\n  hydrateOptions = undefined,\n  dehydrateOptions = undefined,\n});\n')),(0,i.kt)("h3",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h3"},"Options")),(0,i.kt)("p",null,"All options available are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface PersistQueryClientOptions {\n  /** The QueryClient to persist */\n  queryClient: QueryClient;\n  /** The Persister interface for storing and restoring the cache\n   * to/from a persisted location */\n  persister: Persister;\n  /** The max-allowed age of the cache in milliseconds.\n   * If a persisted cache is found that is older than this\n   * time, it will be **silently** discarded\n   * (defaults to 24 hours) */\n  maxAge?: number;\n  /** A unique string that can be used to forcefully\n   * invalidate existing caches if they do not share the same buster string */\n  buster?: string;\n  /** The options passed to the hydrate function\n   * Not used on `persistQueryClientSave` or `persistQueryClientSubscribe` */\n  hydrateOptions?: HydrateOptions;\n  /** The options passed to the dehydrate function\n   * Not used on `persistQueryClientRestore` */\n  dehydrateOptions?: DehydrateOptions;\n}\n")),(0,i.kt)("p",null,"There are actually three interfaces available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PersistedQueryClientSaveOptions")," is used for ",(0,i.kt)("inlineCode",{parentName:"li"},"persistQueryClientSave")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"persistQueryClientSubscribe")," (doesn't use ",(0,i.kt)("inlineCode",{parentName:"li"},"hydrateOptions"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PersistedQueryClientRestoreOptions")," is used for ",(0,i.kt)("inlineCode",{parentName:"li"},"persistQueryClientRestore")," (doesn't use ",(0,i.kt)("inlineCode",{parentName:"li"},"dehydrateOptions"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PersistQueryClientOptions")," is used for ",(0,i.kt)("inlineCode",{parentName:"li"},"persistQueryClient"))),(0,i.kt)("h2",{id:"usage-with-react"},"Usage with React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#persistQueryClient"},"persistQueryClient")," will try to restore the cache and automatically subscribes to further changes, thus syncing your client to the provided storage."),(0,i.kt)("p",null,"However, restoring is asynchronous, because all persisters are async by nature, which means that if you render your App while you are restoring, you might get into race conditions if a query mounts and fetches at the same time."),(0,i.kt)("p",null,"Further, if you subscribe to changes outside of the React component lifecycle, you have no way of unsubscribing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// \ud83d\udea8 never unsubscribes from syncing\npersistQueryClient({\n  queryClient,\n  persister: localStoragePersister,\n});\n\n// \ud83d\udea8 happens at the same time as restoring\nReactDOM.createRoot(rootElement).render(<App />);\n")),(0,i.kt)("h3",{id:"persistqueryclientprovider"},"PersistQueryClientProvider"),(0,i.kt)("p",null,"For this use-case, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistQueryClientProvider"),". It will make sure to subscribe / unsubscribe correctly according to the React component lifecycle, and it will also make sure that queries will not start fetching while we are still restoring. Queries will still render though, they will just be put into ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchingState: 'idle'")," until data has been restored. Then, they will refetch unless the restored data is ",(0,i.kt)("em",{parentName:"p"},"fresh")," enough, and ",(0,i.kt)("em",{parentName:"p"},"initialData")," will also be respected. It can be used ",(0,i.kt)("em",{parentName:"p"},"instead of")," the normal ",(0,i.kt)("a",{parentName:"p",href:"../reference/QueryClientProvider"},"QueryClientProvider"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";\nimport { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n});\n\nconst persister = createSyncStoragePersister({\n  storage: window.localStorage,\n});\n\nReactDOM.createRoot(rootElement).render(\n  <PersistQueryClientProvider\n    client={queryClient}\n    persistOptions={{ persister }}\n  >\n    <App />\n  </PersistQueryClientProvider>,\n);\n')),(0,i.kt)("h4",{id:"props"},"Props"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PersistQueryClientProvider")," takes the same props as ",(0,i.kt)("a",{parentName:"p",href:"../reference/QueryClientProvider"},"QueryClientProvider"),", and additionally:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistOptions: PersistQueryClientOptions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"all ",(0,i.kt)("a",{parentName:"li",href:"#options"},"options")," you cann pass to ",(0,i.kt)("a",{parentName:"li",href:"#persistqueryclient"},"persistQueryClient")," minus the QueryClient itself"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSuccess?: () => void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"optional"),(0,i.kt)("li",{parentName:"ul"},"will be called when the initial restore is finished"),(0,i.kt)("li",{parentName:"ul"},"can be used to ",(0,i.kt)("a",{parentName:"li",href:"../reference/QueryClient#queryclientresumepausedmutations"},"resumePausedMutations"))))),(0,i.kt)("h3",{id:"useisrestoring"},"useIsRestoring"),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistQueryClientProvider"),", you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useIsRestoring")," hook alongside it to check if a restore is currently in progress. ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," and friends also check this internally to avoid race conditions between the restore and mounting queries."),(0,i.kt)("h2",{id:"persisters"},"Persisters"),(0,i.kt)("h3",{id:"persisters-interface"},"Persisters Interface"),(0,i.kt)("p",null,"Persisters have the following interfaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Persister {\n  persistClient(persistClient: PersistedClient): Promisable<void>;\n  restoreClient(): Promisable<PersistedClient | undefined>;\n  removeClient(): Promisable<void>;\n}\n")),(0,i.kt)("p",null,"Persisted Client entries have the following interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface PersistedClient {\n  timestamp: number;\n  buster: string;\n  cacheState: any;\n}\n")),(0,i.kt)("p",null,"You can import these (to build a persister):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  PersistedClient,\n  Persister,\n} from "@tanstack/react-query-persist-client";\n')),(0,i.kt)("h3",{id:"building-a-persister"},"Building A Persister"),(0,i.kt)("p",null,"You can persist however you like. Here is an example of how to build an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"Indexed DB")," persister. Compared to ",(0,i.kt)("inlineCode",{parentName:"p"},"Web Storage API"),", Indexed DB is faster, stores more than 5MB, and doesn't require serialization. That means it can readily store Javascript native types, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { get, set, del } from "idb-keyval";\nimport {\n  PersistedClient,\n  Persister,\n} from "@tanstack/react-query-persist-client";\n\n/**\n * Creates an Indexed DB persister\n * @see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API\n */\nexport function createIDBPersister(idbValidKey: IDBValidKey = "reactQuery") {\n  return {\n    persistClient: async (client: PersistedClient) => {\n      set(idbValidKey, client);\n    },\n    restoreClient: async () => {\n      return await get<PersistedClient>(idbValidKey);\n    },\n    removeClient: async () => {\n      await del(idbValidKey);\n    },\n  } as Persister;\n}\n')))}c.isMDXComponent=!0}}]);