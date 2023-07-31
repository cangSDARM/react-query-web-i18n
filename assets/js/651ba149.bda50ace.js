"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"MutationCache",title:"MutationCache"},i=void 0,o={unversionedId:"reference/MutationCache",id:"reference/MutationCache",title:"MutationCache",description:"The MutationCache is the storage for mutations.",source:"@site/react/reference/MutationCache.md",sourceDirName:"reference",slug:"/reference/MutationCache",permalink:"/react-query-web-i18n/react/reference/MutationCache",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/reference/MutationCache.md",tags:[],version:"current",lastUpdatedAt:1690779970,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"MutationCache",title:"MutationCache"}},c={},u=[{value:"Global callbacks",id:"global-callbacks",level:2},{value:"<code>mutationCache.getAll</code>",id:"mutationcachegetall",level:2},{value:"<code>mutationCache.subscribe</code>",id:"mutationcachesubscribe",level:2},{value:"<code>mutationCache.clear</code>",id:"mutationcacheclear",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MutationCache")," is the storage for mutations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Normally, you will not interact with the MutationCache directly and instead use the ",(0,r.kt)("inlineCode",{parentName:"strong"},"QueryClient"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MutationCache } from '@tanstack/react-query'\n\nconst mutationCache = new MutationCache({\n  onError: error => {\n    console.log(error)\n  },\n  onSuccess: data => {\n    console.log(data)\n  },\n})\n")),(0,r.kt)("p",null,"Its available methods are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mutationcachegetall"},(0,r.kt)("inlineCode",{parentName:"a"},"getAll"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mutationcachesubscribe"},(0,r.kt)("inlineCode",{parentName:"a"},"subscribe"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mutationcacheclear"},(0,r.kt)("inlineCode",{parentName:"a"},"clear")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onError?: (error: unknown, variables: unknown, context: unknown, mutation: Mutation) => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"This function will be called if some mutation encounters an error."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onSuccess?: (data: unknown, variables: unknown, context: unknown, mutation: Mutation) => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"This function will be called if some mutation is successful."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onMutate?: (variables: unknown, mutation: Mutation) => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"This function will be called before some mutation executes.")))),(0,r.kt)("h2",{id:"global-callbacks"},"Global callbacks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onError"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onMutate")," callbacks on the MutationCache can be used to handle these events on a global level. They are different to ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultOptions")," provided to the QueryClient because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOptions")," can be overridden by each Mutation - the global callbacks will ",(0,r.kt)("strong",{parentName:"li"},"always")," be called."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onMutate")," does not allow returning a context value.")),(0,r.kt)("h2",{id:"mutationcachegetall"},(0,r.kt)("inlineCode",{parentName:"h2"},"mutationCache.getAll")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getAll")," returns all mutations within the cache."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This is not typically needed for most applications, but can come in handy when needing more information about a mutation in rare scenarios")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const mutations = mutationCache.getAll()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Mutation[]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mutation instances from the cache")))),(0,r.kt)("h2",{id:"mutationcachesubscribe"},(0,r.kt)("inlineCode",{parentName:"h2"},"mutationCache.subscribe")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method can be used to subscribe to the mutation cache as a whole and be informed of safe/known updates to the cache like mutation states changing or mutations being updated, added or removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const callback = event => {\n  console.log(event.type, event.mutation)\n}\n\nconst unsubscribe = mutationCache.subscribe(callback)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callback: (mutation?: MutationCacheNotifyEvent) => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This function will be called with the mutation cache any time it is updated.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsubscribe: Function => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This function will unsubscribe the callback from the mutation cache.")))),(0,r.kt)("h2",{id:"mutationcacheclear"},(0,r.kt)("inlineCode",{parentName:"h2"},"mutationCache.clear")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"clear")," method can be used to clear the cache entirely and start fresh."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"mutationCache.clear()\n")))}m.isMDXComponent=!0}}]);