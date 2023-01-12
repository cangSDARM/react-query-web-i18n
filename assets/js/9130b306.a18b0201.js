"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||u;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,s=new Array(u);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var o=2;o<u;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const u={id:"dependent-queries",title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2 Dependent Queries"},s=void 0,c={unversionedId:"guides&concepts/dependent-queries",id:"guides&concepts/dependent-queries",title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2 Dependent Queries",description:"\u4f9d\u8d56\u67e5\u8be2\uff08\u6216\u4e32\u884c\u67e5\u8be2\uff09\u53d6\u51b3\u4e8e\u5148\u524d\u7684\u67e5\u8be2\u7ed3\u679c\u3002\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u53ea\u9700\u4f7f\u7528enabled\u9009\u9879\u5c31\u53ef\u4ee5\u544a\u8bc9\u67e5\u8be2\u4f55\u65f6\u53ef\u4ee5\u8fd0\u884c\uff1a",source:"@site/vue/guides&concepts/dependent-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/dependent-queries",permalink:"/react-query-web-i18n/vue/guides&concepts/dependent-queries",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/guides&concepts/dependent-queries.md",tags:[],version:"current",lastUpdatedAt:1673522244,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"dependent-queries",title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2 Dependent Queries"},sidebar:"zhCN",previous:{title:"\u5e76\u884c\u67e5\u8be2 Parallel Queries",permalink:"/react-query-web-i18n/vue/guides&concepts/parallel-queries"},next:{title:"\u52a0\u8f7d\u72b6\u6001\u6307\u793a\u5668 Background Fetching Indicators",permalink:"/react-query-web-i18n/vue/guides&concepts/background-fetching-indicators"}},i={},o=[],l={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f9d\u8d56\u67e5\u8be2\uff08\u6216\u4e32\u884c\u67e5\u8be2\uff09\u53d6\u51b3\u4e8e\u5148\u524d\u7684\u67e5\u8be2\u7ed3\u679c\u3002\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u53ea\u9700\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"enabled"),"\u9009\u9879\u5c31\u53ef\u4ee5\u544a\u8bc9\u67e5\u8be2\u4f55\u65f6\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Get the user\nconst { data: user } = useQuery({\n  queryKey: ['user', email],\n  queryFn: () => getUserByEmail(email.value),\n})\n\nconst userId = computed(() => user.value?.id)\nconst enabled = computed(() => !!user.value?.id)\n\n// Then get the user's projects\nconst { isIdle, data: projects } = useQuery({\n  queryKey: ['projects', userId],\n  queryFn: () => getProjectsByUser(userId.value),\n  enabled, // \u76f4\u5230 `enabled == true`\uff0cquery\u624d\u4f1a\u6267\u884c\n})\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"projects"),"\u7684\u67e5\u8be2\u5f00\u59cb\u72b6\u6001\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'status: "loading";\nfetchStatus: "idle";\n')),(0,a.kt)("p",null,"\u4e00\u65e6",(0,a.kt)("inlineCode",{parentName:"p"},"userId"),"\u53ef\u7528\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"projects"),"\u7684\u67e5\u8be2\u5c06\u88ab\u201c\u542f\u7528\u201d\uff08enabled\uff09\uff0c\u7136\u540e\u72b6\u6001\u8f6c\u6362\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'status: "loading";\nfetchStatus: "fetching";\n')),(0,a.kt)("p",null,"\u67e5\u8be2\u5b8c\u6210\u65f6\uff0c\u72b6\u6001\u53d8\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'status: "success";\nfetchStatus: "idle";\n')))}p.isMDXComponent=!0}}]);