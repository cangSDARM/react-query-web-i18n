"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||y[g]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={id:"createAsyncStoragePersister",title:"createAsyncStoragePersister"},i=void 0,o={unversionedId:"plugins/createAsyncStoragePersister",id:"plugins/createAsyncStoragePersister",title:"createAsyncStoragePersister",description:"Installation",source:"@site/vue/plugins/createAsyncStoragePersister.md",sourceDirName:"plugins",slug:"/plugins/createAsyncStoragePersister",permalink:"/react-query-web-i18n/vue/plugins/createAsyncStoragePersister",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/plugins/createAsyncStoragePersister.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"createAsyncStoragePersister",title:"createAsyncStoragePersister"},sidebar:"zhCN",previous:{title:"broadcastQueryClient (Experimental)",permalink:"/react-query-web-i18n/vue/plugins/broadcastQueryClient"},next:{title:"createSyncStoragePersister",permalink:"/react-query-web-i18n/vue/plugins/createSyncStoragePersister"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Retries",id:"retries",level:2},{value:"API",id:"api",level:2},{value:"<code>createAsyncStoragePersister</code>",id:"createasyncstoragepersister",level:3},{value:"<code>Options</code>",id:"options",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This utility comes as a separate package and is available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"'@tanstack/query-async-storage-persister'")," import."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tanstack/query-async-storage-persister @tanstack/react-query-persist-client\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @tanstack/query-async-storage-persister @tanstack/react-query-persist-client\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tanstack/query-async-storage-persister @tanstack/react-query-persist-client\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Import the ",(0,a.kt)("inlineCode",{parentName:"li"},"createAsyncStoragePersister")," function"),(0,a.kt)("li",{parentName:"ul"},"Create a new asyncStoragePersister",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"you can pass any ",(0,a.kt)("inlineCode",{parentName:"li"},"storage")," to it that adheres to the ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncStorage")," interface - the example below uses the async-storage from React Native"))),(0,a.kt)("li",{parentName:"ul"},"Wrap your app by using ",(0,a.kt)("a",{parentName:"li",href:"/react-query-web-i18n/vue/plugins/persistQueryClient#persistqueryclientprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"PersistQueryClientProvider"))," component.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import AsyncStorage from "@react-native-async-storage/async-storage";\nimport { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";\nimport { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n});\n\nconst asyncStoragePersister = createAsyncStoragePersister({\n  storage: AsyncStorage,\n});\n\nconst Root = () => (\n  <PersistQueryClientProvider\n    client={queryClient}\n    persistOptions={{ persister: asyncStoragePersister }}\n  >\n    <App />\n  </PersistQueryClientProvider>\n);\n\nexport default Root;\n')),(0,a.kt)("h2",{id:"retries"},"Retries"),(0,a.kt)("p",null,"Retries work the same as for a ",(0,a.kt)("a",{parentName:"p",href:"/react-query-web-i18n/vue/plugins/createSyncStoragePersister"},"SyncStoragePersister"),", except that they can also be asynchronous. You can also use all the predefined retry handlers."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"createasyncstoragepersister"},(0,a.kt)("inlineCode",{parentName:"h3"},"createAsyncStoragePersister")),(0,a.kt)("p",null,"Call this function to create an asyncStoragePersister that you can use later with ",(0,a.kt)("inlineCode",{parentName:"p"},"persistQueryClient"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"createAsyncStoragePersister(options: CreateAsyncStoragePersisterOptions)\n")),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"Options")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface CreateAsyncStoragePersisterOptions {\n  /** The storage client used for setting an retrieving items from cache */\n  storage: AsyncStorage;\n  /** The key to use when storing the cache to localStorage */\n  key?: string;\n  /** To avoid localStorage spamming,\n   * pass a time in ms to throttle saving the cache to disk */\n  throttleTime?: number;\n  /** How to serialize the data to storage */\n  serialize?: (client: PersistedClient) => string;\n  /** How to deserialize the data from storage */\n  deserialize?: (cachedString: string) => PersistedClient;\n  /** How to retry persistence on error **/\n  retry?: AsyncPersistRetryer;\n}\n\ninterface AsyncStorage {\n  getItem: (key: string) => Promise<string>;\n  setItem: (key: string, value: string) => Promise<unknown>;\n  removeItem: (key: string) => Promise<unknown>;\n}\n")),(0,a.kt)("p",null,"The default options are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  key = `REACT_QUERY_OFFLINE_CACHE`,\n  throttleTime = 1000,\n  serialize = JSON.stringify,\n  deserialize = JSON.parse,\n}\n")))}u.isMDXComponent=!0}}]);