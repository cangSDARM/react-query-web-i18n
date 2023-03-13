"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"createSyncStoragePersister",title:"createSyncStoragePersister"},s=void 0,o={unversionedId:"plugins/createSyncStoragePersister",id:"plugins/createSyncStoragePersister",title:"createSyncStoragePersister",description:"Installation",source:"@site/react/plugins/createSyncStoragePersister.md",sourceDirName:"plugins",slug:"/plugins/createSyncStoragePersister",permalink:"/react-query-web-i18n/react/plugins/createSyncStoragePersister",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/plugins/createSyncStoragePersister.md",tags:[],version:"current",lastUpdatedAt:1678686678,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"createSyncStoragePersister",title:"createSyncStoragePersister"},sidebar:"zhCN",previous:{title:"createAsyncStoragePersister",permalink:"/react-query-web-i18n/react/plugins/createAsyncStoragePersister"},next:{title:"persistQueryClient",permalink:"/react-query-web-i18n/react/plugins/persistQueryClient"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Retries",id:"retries",level:2},{value:"Predefined strategies",id:"predefined-strategies",level:3},{value:"API",id:"api",level:2},{value:"<code>createSyncStoragePersister</code>",id:"createsyncstoragepersister",level:3},{value:"<code>Options</code>",id:"options",level:3},{value:"<code>serialize</code> and <code>deserialize</code> options",id:"serialize-and-deserialize-options",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This utility comes as a separate package and is available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"'@tanstack/query-sync-storage-persister'")," import."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Import the ",(0,a.kt)("inlineCode",{parentName:"li"},"createSyncStoragePersister")," function"),(0,a.kt)("li",{parentName:"ul"},"Create a new syncStoragePersister"),(0,a.kt)("li",{parentName:"ul"},"Pass it to the ",(0,a.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/plugins/persistQueryClient"},(0,a.kt)("inlineCode",{parentName:"a"},"persistQueryClient"))," function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { persistQueryClient } from "@tanstack/react-query-persist-client";\nimport { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n});\n\nconst localStoragePersister = createSyncStoragePersister({\n  storage: window.localStorage,\n});\n// const sessionStoragePersister = createSyncStoragePersister({ storage: window.sessionStorage })\n\npersistQueryClient({\n  queryClient,\n  persister: localStoragePersister,\n});\n')),(0,a.kt)("h2",{id:"retries"},"Retries"),(0,a.kt)("p",null,"Persistence can fail, e.g. if the size exceeds the available space on the storage. Errors can be handled gracefully by providing a ",(0,a.kt)("inlineCode",{parentName:"p"},"retry")," function to the persister."),(0,a.kt)("p",null,"The retry function receives the ",(0,a.kt)("inlineCode",{parentName:"p"},"persistedClient")," it tried to save, as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorCount")," as input. It is expected to return a ",(0,a.kt)("em",{parentName:"p"},"new")," ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistedClient"),", with which it tries to persist again. If ",(0,a.kt)("em",{parentName:"p"},"undefined")," is returned, there will be no further attempt to persist."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type PersistRetryer = (props: {\n  persistedClient: PersistedClient;\n  error: Error;\n  errorCount: number;\n}) => PersistedClient | undefined;\n")),(0,a.kt)("h3",{id:"predefined-strategies"},"Predefined strategies"),(0,a.kt)("p",null,"Per default, no retry will occur. You can use one of the predefined strategies to handle retries. They can be imported ",(0,a.kt)("inlineCode",{parentName:"p"},"from '@tanstack/react-query-persist-client'"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeOldestQuery"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"will return a new ",(0,a.kt)("inlineCode",{parentName:"li"},"PersistedClient")," with the oldest query removed.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const localStoragePersister = createSyncStoragePersister({\n  storage: window.localStorage,\n  retry: removeOldestQuery,\n});\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"createsyncstoragepersister"},(0,a.kt)("inlineCode",{parentName:"h3"},"createSyncStoragePersister")),(0,a.kt)("p",null,"Call this function to create a syncStoragePersister that you can use later with ",(0,a.kt)("inlineCode",{parentName:"p"},"persistQueryClient"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"createSyncStoragePersister(options: CreateSyncStoragePersisterOptions)\n")),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"Options")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface CreateSyncStoragePersisterOptions {\n  /** The storage client used for setting an retrieving items from cache (window.localStorage or window.sessionStorage) */\n  storage: Storage;\n  /** The key to use when storing the cache */\n  key?: string;\n  /** To avoid spamming,\n   * pass a time in ms to throttle saving the cache to disk */\n  throttleTime?: number;\n  /** How to serialize the data to storage */\n  serialize?: (client: PersistedClient) => string;\n  /** How to deserialize the data from storage */\n  deserialize?: (cachedString: string) => PersistedClient;\n  /** How to retry persistence on error **/\n  retry?: PersistRetryer;\n}\n")),(0,a.kt)("p",null,"The default options are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  key = `REACT_QUERY_OFFLINE_CACHE`,\n  throttleTime = 1000,\n  serialize = JSON.stringify,\n  deserialize = JSON.parse,\n}\n")),(0,a.kt)("h4",{id:"serialize-and-deserialize-options"},(0,a.kt)("inlineCode",{parentName:"h4"},"serialize")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"deserialize")," options"),(0,a.kt)("p",null,"There is a limit to the amount of data which can be stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"localStorage"),".\nIf you need to store more data in ",(0,a.kt)("inlineCode",{parentName:"p"},"localStorage"),", you can override the ",(0,a.kt)("inlineCode",{parentName:"p"},"serialize")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deserialize")," functions to compress and decrompress the data using a library like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pieroxy/lz-string/"},"lz-string"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { QueryClient } from "@tanstack/react-query";\nimport { persistQueryClient } from "@tanstack/react-query-persist-client";\nimport { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";\n\nimport { compress, decompress } from "lz-string";\n\nconst queryClient = new QueryClient({\n  defaultOptions: { queries: { staleTime: Infinity } },\n});\n\npersistQueryClient({\n  queryClient: connectionsQueryClient,\n  persistor: createSyncStoragePersister({\n    storage: window.localStorage,\n    serialize: (data) => compress(JSON.stringify(data)),\n    deserialize: (data) => JSON.parse(decompress(data)),\n  }),\n  maxAge: Infinity,\n});\n')))}d.isMDXComponent=!0}}]);