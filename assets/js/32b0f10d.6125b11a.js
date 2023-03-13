"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(r),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||c;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const c={id:"installation",title:"\u5b89\u88c5"},o=void 0,l={unversionedId:"getstarted/installation",id:"getstarted/installation",title:"\u5b89\u88c5",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528NPM\uff0cYarn\u5b89\u88c5 React Query\u3002",source:"@site/react/getstarted/installation.md",sourceDirName:"getstarted",slug:"/getstarted/installation",permalink:"/react-query-web-i18n/react/getstarted/installation",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/getstarted/installation.md",tags:[],version:"current",lastUpdatedAt:1678687079,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"zhCN",previous:{title:"\u6982\u89c8",permalink:"/react-query-web-i18n/react/"},next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/react-query-web-i18n/react/getstarted/quick-start"}},p={},i=[{value:"NPM/YARN",id:"npmyarn",level:3},{value:"CDN",id:"cdn",level:3},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:3}],u={toc:i},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com"},"NPM"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"Yarn"),"\u5b89\u88c5 React Query\u3002\n\u6216\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com"},"unpkg"),"\u6765\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"<script>"),"\u4e2d\u52a0\u8f7d\u3002"),(0,a.kt)("h3",{id:"npmyarn"},"NPM/YARN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @tanstack/react-query\n# or\n$ pnpm add @tanstack/react-query\n# or\n$ yarn add @tanstack/react-query\n")),(0,a.kt)("p",null,"React Query \u517c\u5bb9 React v16.8+\uff0c\u652f\u6301 React DOM \u548c React Native\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u60f3\u5728\u4e0b\u8f7d\u4e4b\u524d\u8bd5\u4e00\u4e0b\u5417\uff1f \u5c1d\u8bd5",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/docs/examples/simple"},"\u5165\u95e8"),"\u6216",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/docs/examples/basic"},"\u57fa\u672c"),"\u7684\u793a\u4f8b\uff01\uff08\u82f1\u6587\uff09")),(0,a.kt)("h3",{id:"cdn"},"CDN"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u4f7f\u7528\u6a21\u5757\u6253\u5305\u5668\u6216\u7a0b\u5e8f\u5305\u7ba1\u7406\u5668\uff0c\u6211\u4eec\u8fd8\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com"},"unpkg.com")," \u4e0a\u6258\u7ba1\u4e86\u4e00\u4e2a\u5168\u5c40(\u201cUMD\u201d)\u6784\u5efa\u3002\n\u53ea\u9700\u5c06\u4ee5\u4e0b<script",">","\u6807\u8bb0\u6dfb\u52a0\u5230 HTML \u6587\u4ef6\u7684\u5e95\u90e8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@tanstack/react-query@4/build/umd/index.production.js"><\/script>\n')),(0,a.kt)("p",null,"\u6dfb\u52a0\u540e\uff0c\u60a8\u5c06\u53ef\u4ee5\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"window.ReactQuery"),"\u5bf9\u8c61\u53ca\u5176\u5bfc\u51fa\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b64\u5b89\u88c5/\u4f7f\u7528\u4e5f\u9700\u8981\u5728\u9875\u9762\u4e0a\u5305\u542b ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/cdn-links.html"},"React CDN")," \u811a\u672c\u5305\u3002")),(0,a.kt)("h3",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,a.kt)("p",null,"React Query \u9488\u5bf9\u73b0\u4ee3\u6d4f\u89c8\u5668\u8fdb\u884c\u4e86\u4f18\u5316\u3002\n\u5b83\u4ec5\u4e0e\u4ee5\u4e0b\u6d4f\u89c8\u5668\u7248\u672c\u914d\u7f6e\u517c\u5bb9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Chrome >= 73\nFirefox >= 78\nEdge >= 79\nSafari >= 12.0\niOS >= 12.0\nopera >= 53\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6839\u636e\u4f60\u7684\u73af\u5883\uff0c\u53ef\u80fd\u9700\u8981\u6dfb\u52a0 polyfill\u3002\u5982\u679c\u4f60\u60f3\u652f\u6301\u65e7\u7684\u6d4f\u89c8\u5668\uff0c\u8fd8\u9700\u8981\u81ea\u5df1\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u4e2d\u7f16\u8bd1\u6216\u8f6c\u6362 React Query(\u4f8b\u5982 webpack \u7684 transpile \u76f8\u5173)\u3002")))}m.isMDXComponent=!0}}]);