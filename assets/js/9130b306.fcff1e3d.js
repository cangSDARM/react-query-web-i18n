"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=o(n),f=a,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||s;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[l]="string"==typeof e?e:a,c[1]=u;for(var o=2;o<s;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const s={id:"dependent-queries",title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2 Dependent Queries"},c=void 0,u={unversionedId:"guides&concepts/dependent-queries",id:"guides&concepts/dependent-queries",title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2 Dependent Queries",description:"\u4f9d\u8d56\u67e5\u8be2\uff08\u6216\u4e32\u884c\u67e5\u8be2\uff09\u53d6\u51b3\u4e8e\u5148\u524d\u7684\u67e5\u8be2\u7ed3\u679c\u3002\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u53ea\u9700\u4f7f\u7528enabled\u9009\u9879\u5c31\u53ef\u4ee5\u544a\u8bc9\u67e5\u8be2\u4f55\u65f6\u53ef\u4ee5\u8fd0\u884c\uff1a",source:"@site/vue/guides&concepts/dependent-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/dependent-queries",permalink:"/react-query-web-i18n/vue/guides&concepts/dependent-queries",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/vue/guides&concepts/dependent-queries.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"dependent-queries",title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2 Dependent Queries"},sidebar:"zhCN",previous:{title:"\u5e76\u884c\u67e5\u8be2 Parallel Queries",permalink:"/react-query-web-i18n/vue/guides&concepts/parallel-queries"},next:{title:"\u52a0\u8f7d\u72b6\u6001\u6307\u793a\u5668 Background Fetching Indicators",permalink:"/react-query-web-i18n/vue/guides&concepts/background-fetching-indicators"}},i={},o=[],p={toc:o};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f9d\u8d56\u67e5\u8be2\uff08\u6216\u4e32\u884c\u67e5\u8be2\uff09\u53d6\u51b3\u4e8e\u5148\u524d\u7684\u67e5\u8be2\u7ed3\u679c\u3002\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u53ea\u9700\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"enabled"),"\u9009\u9879\u5c31\u53ef\u4ee5\u544a\u8bc9\u67e5\u8be2\u4f55\u65f6\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Get the user\nconst { data: user } = useQuery(["user", email], getUserByEmail);\n\nconst userId = user?.id;\n\n// Then get the user\'s projects\nconst {\n  status,\n  fetchStatus,\n  data: projects,\n} = useQuery(["projects", userId], getProjectsByUser, {\n  // \u76f4\u5230`userId`\u5b58\u5728\uff0c\u67e5\u8be2\u624d\u4f1a\u88ab\u6267\u884c\n  enabled: !!userId,\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"projects"),"\u7684\u67e5\u8be2\u5f00\u59cb\u72b6\u6001\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'status: "loading";\nfetchStatus: "idle";\n')),(0,a.kt)("p",null,"\u4e00\u65e6",(0,a.kt)("inlineCode",{parentName:"p"},"userId"),"\u53ef\u7528\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"projects"),"\u7684\u67e5\u8be2\u5c06\u88ab\u201c\u542f\u7528\u201d\uff08enabled\uff09\uff0c\u7136\u540e\u72b6\u6001\u8f6c\u6362\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'status: "loading";\nfetchStatus: "fetching";\n')),(0,a.kt)("p",null,"\u67e5\u8be2\u5b8c\u6210\u65f6\uff0c\u72b6\u6001\u53d8\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'status: "success";\nfetchStatus: "idle";\n')))}l.isMDXComponent=!0}}]);