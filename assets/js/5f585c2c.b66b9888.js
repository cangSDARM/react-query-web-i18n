(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[4939],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3141:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),c=["components"],o={id:"prefetching",title:"\u9884\u53d6\u6570\u636e"},u=void 0,p={unversionedId:"guides&concepts/prefetching",id:"guides&concepts/prefetching",isDocsHomePage:!1,title:"\u9884\u53d6\u6570\u636e",description:"\u5982\u679c\u60a8\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u60a8\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01  \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528prefetchQuery\u65b9\u6cd5\u9884\u53d6\u8981\u653e\u5165\u7f13\u5b58\u7684\u67e5\u8be2\u7ed3\u679c\uff1a",source:"@site/docs/guides&concepts/prefetching.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/prefetching",permalink:"/react-query-web-i18n/guides&concepts/prefetching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/prefetching.md",version:"current",lastUpdatedAt:1632389524,formattedLastUpdatedAt:"9/23/2021",frontMatter:{id:"prefetching",title:"\u9884\u53d6\u6570\u636e"},sidebar:"zhCN",previous:{title:"\u521d\u59cb\u5316\u7684\u67e5\u8be2\u6570\u636e",permalink:"/react-query-web-i18n/guides&concepts/initial-query-data"},next:{title:"\u4fee\u6539",permalink:"/react-query-web-i18n/guides&concepts/mutations"}},l=[{value:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",children:[]}],s={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u60a8\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01  \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"prefetchQuery"),"\u65b9\u6cd5\u9884\u53d6\u8981\u653e\u5165\u7f13\u5b58\u7684\u67e5\u8be2\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const prefetchTodos = async () => {\n  // \u8be5\u67e5\u8be2\u7684\u7ed3\u679c\u5c06\u50cf\u666e\u901a\u67e5\u8be2\u4e00\u6837\u88ab\u7f13\u5b58\n  await queryClient.prefetchQuery('todos', fetchTodos)\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u67e5\u8be2\u7684\u6570\u636e\u5df2\u7ecf\u5728\u7f13\u5b58\u4e2d\u5e76\u4e14",(0,a.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u5931\u6548"),"\uff0c\u5219\u5c06\u4e0d\u4f1a\u83b7\u53d6\u8be5\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime"),"\u88ab\u4f20\u9012\uff0c\u4f8b\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"prefetchQuery('todos', fn, {staleTime\uff1a5000})"),"\u5e76\u4e14\u6570\u636e\u65e9\u4e8e\u6307\u5b9a\u7684staleTime\uff0c\u5219\u67e5\u8be2\u5c06\u53bb\u5c1d\u8bd5\u83b7\u53d6\u65b0\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u9884\u53d6\u7684\u67e5\u8be2\u6ca1\u6709\u51fa\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery"),"\u5b9e\u4f8b\uff0c\u5219\u5c06\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"cacheTime"),"\u6307\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e\u88ab\u5220\u9664\u5e76\u88ab\u5783\u573e\u56de\u6536")),(0,a.kt)("h2",{id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"},"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u540c\u6b65\u53ef\u7528\u7684\u67e5\u8be2\u6570\u636e\uff0c\u5219\u65e0\u9700\u9884\u53d6\u3002\n\u60a8\u53ef\u4ee5\u53ea\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydata"},"Query Client\u7684",(0,a.kt)("inlineCode",{parentName:"a"},"setQueryData"),"\u65b9\u6cd5"),"\u76f4\u63a5\u6309\u952e\u503c\u6dfb\u52a0\u6216\u66f4\u65b0\u67e5\u8be2\u7684\u7f13\u5b58\u7ed3\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"queryClient.setQueryData('todos', todos)\n")))}f.isMDXComponent=!0}}]);