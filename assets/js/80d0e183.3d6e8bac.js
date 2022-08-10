"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(r),y=a,m=g["".concat(l,".").concat(y)]||g[y]||u[y]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"createAsyncStoragePersistor",title:"createAsyncStoragePersistor (Experimental)"},s=void 0,o={unversionedId:"plugins/createAsyncStoragePersistor",id:"plugins/createAsyncStoragePersistor",title:"createAsyncStoragePersistor (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/docs/plugins/createAsyncStoragePersistor.md",sourceDirName:"plugins",slug:"/plugins/createAsyncStoragePersistor",permalink:"/react-query-web-i18n/next/plugins/createAsyncStoragePersistor",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/plugins/createAsyncStoragePersistor.md",tags:[],version:"current",lastUpdatedAt:1660144558,formattedLastUpdatedAt:"8/10/2022",frontMatter:{id:"createAsyncStoragePersistor",title:"createAsyncStoragePersistor (Experimental)"},sidebar:"zhCN",previous:{title:"broadcastQueryClient (Experimental)",permalink:"/react-query-web-i18n/next/plugins/broadcast-query-client"},next:{title:"createWebStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/next/plugins/createWebStoragePersistor"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"<code>createAsyncStoragePersistor</code>",id:"createasyncstoragepersistor",level:3},{value:"<code>Options</code>",id:"options",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This utility comes packaged with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query/createAsyncStoragePersistor-experimental")," import."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Import the ",(0,a.kt)("inlineCode",{parentName:"li"},"createAsyncStoragePersistor")," function"),(0,a.kt)("li",{parentName:"ul"},"Create a new asyncStoragePersistor",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"you can pass any ",(0,a.kt)("inlineCode",{parentName:"li"},"storage")," to it that adheres to the ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncStorage")," interface - the example below uses the async-storage from React Native"))),(0,a.kt)("li",{parentName:"ul"},"Pass it to the ",(0,a.kt)("a",{parentName:"li",href:"/react-query-web-i18n/next/plugins/persist-query-client"},(0,a.kt)("inlineCode",{parentName:"a"},"persistQueryClient"))," function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import AsyncStorage from "@react-native-async-storage/async-storage";\nimport { persistQueryClient } from "react-query/persistQueryClient-experimental";\nimport { createAsyncStoragePersistor } from "react-query/createAsyncStoragePersistor-experimental";\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n});\n\nconst asyncStoragePersistor = createAsyncStoragePersistor({\n  storage: AsyncStorage,\n});\n\npersistQueryClient({\n  queryClient,\n  persistor: asyncStoragePersistor,\n});\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"createasyncstoragepersistor"},(0,a.kt)("inlineCode",{parentName:"h3"},"createAsyncStoragePersistor")),(0,a.kt)("p",null,"Call this function to create an asyncStoragePersistor that you can use later with ",(0,a.kt)("inlineCode",{parentName:"p"},"persistQueryClient"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"createAsyncStoragePersistor(options: CreateAsyncStoragePersistorOptions)\n")),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"Options")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface CreateAsyncStoragePersistorOptions {\n  /** The storage client used for setting an retrieving items from cache */\n  storage: AsyncStorage;\n  /** The key to use when storing the cache to localStorage */\n  key?: string;\n  /** To avoid localStorage spamming,\n   * pass a time in ms to throttle saving the cache to disk */\n  throttleTime?: number;\n  /** How to serialize the data to storage */\n  serialize?: (client: PersistedClient) => string;\n  /** How to deserialize the data from storage */\n  deserialize?: (cachedString: string) => PersistedClient;\n}\n\ninterface AsyncStorage {\n  getItem: (key: string) => Promise<string>;\n  setItem: (key: string, value: string) => Promise<unknown>;\n  removeItem: (key: string) => Promise<unknown>;\n}\n")),(0,a.kt)("p",null,"The default options are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  key = `REACT_QUERY_OFFLINE_CACHE`,\n  throttleTime = 1000,\n  serialize = JSON.stringify,\n  deserialize = JSON.parse,\n}\n")))}u.isMDXComponent=!0}}]);