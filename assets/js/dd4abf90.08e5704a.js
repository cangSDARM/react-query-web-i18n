"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"broadcastQueryClient",title:"broadcastQueryClient (Experimental)"},o=void 0,l={unversionedId:"plugins/broadcastQueryClient",id:"plugins/broadcastQueryClient",title:"broadcastQueryClient (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/vue/plugins/broadcastQueryClient.md",sourceDirName:"plugins",slug:"/plugins/broadcastQueryClient",permalink:"/react-query-web-i18n/vue/plugins/broadcastQueryClient",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/plugins/broadcastQueryClient.md",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"broadcastQueryClient",title:"broadcastQueryClient (Experimental)"},sidebar:"zhCN",previous:{title:"Query Key Factory",permalink:"/react-query-web-i18n/vue/community/lukemorales-query-key-factory"},next:{title:"createAsyncStoragePersister",permalink:"/react-query-web-i18n/vue/plugins/createAsyncStoragePersister"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"<code>broadcastQueryClient</code>",id:"broadcastqueryclient",level:3},{value:"<code>Options</code>",id:"options",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"broadcastQueryClient")," is a utility for broadcasting and syncing the state of your queryClient between browser tabs/windows with the same origin."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"This utility comes as a separate package and is available under the ",(0,r.kt)("inlineCode",{parentName:"p"},"'@tanstack/query-broadcast-client-experimental'")," import."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastQueryClient")," function, and pass it your ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance, and optionally, set a ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { broadcastQueryClient } from '@tanstack/query-broadcast-client-experimental'\n\nconst queryClient = new QueryClient()\n\nbroadcastQueryClient({\n  queryClient,\n  broadcastChannel: 'my-app',\n})\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"broadcastqueryclient"},(0,r.kt)("inlineCode",{parentName:"h3"},"broadcastQueryClient")),(0,r.kt)("p",null,"Pass this function a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance and optionally, a ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"broadcastQueryClient({ queryClient, broadcastChannel })\n")),(0,r.kt)("h3",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h3"},"Options")),(0,r.kt)("p",null,"An object of options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface broadcastQueryClient {\n  /** The QueryClient to sync */\n  queryClient: QueryClient\n  /** This is the unique channel name that will be used\n   * to communicate between tabs and windows */\n  broadcastChannel?: string\n}\n")),(0,r.kt)("p",null,"The default options are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  broadcastChannel = 'react-query',\n}\n")))}p.isMDXComponent=!0}}]);