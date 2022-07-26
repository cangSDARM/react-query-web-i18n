"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[4291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={id:"MutationCache",title:"MutationCache"},o=void 0,i={unversionedId:"reference/MutationCache",id:"reference/MutationCache",title:"MutationCache",description:"The MutationCache is the storage for mutations.",source:"@site/docs/reference/MutationCache.md",sourceDirName:"reference",slug:"/reference/MutationCache",permalink:"/react-query-web-i18n/next/reference/MutationCache",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/MutationCache.md",tags:[],version:"current",lastUpdatedAt:1658847505,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"MutationCache",title:"MutationCache"}},c={},u=[{value:"Global callbacks",id:"global-callbacks",level:2},{value:"<code>mutationCache.getAll</code>",id:"mutationcachegetall",level:2},{value:"<code>mutationCache.subscribe</code>",id:"mutationcachesubscribe",level:2},{value:"<code>mutationCache.clear</code>",id:"mutationcacheclear",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MutationCache")," is the storage for mutations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Normally, you will not interact with the MutationCache directly and instead use the ",(0,l.kt)("inlineCode",{parentName:"strong"},"QueryClient"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { MutationCache } from "react-query";\n\nconst mutationCache = new MutationCache({\n  onError: (error) => {\n    console.log(error);\n  },\n  onSuccess: (data) => {\n    console.log(data);\n  },\n});\n')),(0,l.kt)("p",null,"Its available methods are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#global-callbacks"},"Global callbacks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mutationcachegetall"},(0,l.kt)("inlineCode",{parentName:"a"},"mutationCache.getAll"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mutationcachesubscribe"},(0,l.kt)("inlineCode",{parentName:"a"},"mutationCache.subscribe"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mutationcacheclear"},(0,l.kt)("inlineCode",{parentName:"a"},"mutationCache.clear")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onError?: (error: unknown, variables: unknown, context: unknown, mutation: Mutation) => void"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Optional"),(0,l.kt)("li",{parentName:"ul"},"This function will be called if some mutation encounters an error."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onSuccess?: (data: unknown, variables: unknown, context: unknown, mutation: Mutation) => void"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Optional"),(0,l.kt)("li",{parentName:"ul"},"This function will be called if some mutation is successful."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onMutate?: (variables: unknown, mutation: Mutation) => void"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Optional"),(0,l.kt)("li",{parentName:"ul"},"This function will be called before some mutation executes.")))),(0,l.kt)("h2",{id:"global-callbacks"},"Global callbacks"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onError"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onMutate")," callbacks on the MutationCache can be used to handle these events on a global level. They are different to ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultOptions")," provided to the QueryClient because:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"defaultOptions")," can be overridden by each Mutation - the global callbacks will ",(0,l.kt)("strong",{parentName:"li"},"always")," be called."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onMutate")," does not allow returning a context value.")),(0,l.kt)("h2",{id:"mutationcachegetall"},(0,l.kt)("inlineCode",{parentName:"h2"},"mutationCache.getAll")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getAll")," returns all mutations within the cache."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: This is not typically needed for most applications, but can come in handy when needing more information about a mutation in rare scenarios")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const mutations = mutationCache.getAll();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Mutation[]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mutation instances from the cache")))),(0,l.kt)("h2",{id:"mutationcachesubscribe"},(0,l.kt)("inlineCode",{parentName:"h2"},"mutationCache.subscribe")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"subscribe")," method can be used to subscribe to the mutation cache as a whole and be informed of safe/known updates to the cache like mutation states changing or mutations being updated, added or removed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const callback = (mutation) => {\n  console.log(mutation);\n};\n\nconst unsubscribe = mutationCache.subscribe(callback);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"callback: (mutation?: Mutation) => void"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This function will be called with the mutation cache any time it is updated.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unsubscribe: Function => void"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This function will unsubscribe the callback from the mutation cache.")))),(0,l.kt)("h2",{id:"mutationcacheclear"},(0,l.kt)("inlineCode",{parentName:"h2"},"mutationCache.clear")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"clear")," method can be used to clear the cache entirely and start fresh."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"mutationCache.clear();\n")))}p.isMDXComponent=!0}}]);