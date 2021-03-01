(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),a=(n(0),n(142)),i={id:"prefetching",title:"\u9884\u53d6\u6570\u636e"},o={unversionedId:"guides&concepts/prefetching",id:"guides&concepts/prefetching",isDocsHomePage:!1,title:"\u9884\u53d6\u6570\u636e",description:"\u5982\u679c\u60a8\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u60a8\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01  \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528prefetchQuery\u65b9\u6cd5\u9884\u53d6\u8981\u653e\u5165\u7f13\u5b58\u7684\u67e5\u8be2\u7ed3\u679c\uff1a",source:"@site/docs/guides&concepts/prefetching.md",slug:"/guides&concepts/prefetching",permalink:"/react-query-web-i18n/guides&concepts/prefetching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/prefetching.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"\u521d\u59cb\u5316\u7684\u67e5\u8be2\u6570\u636e",permalink:"/react-query-web-i18n/guides&concepts/initial-query-data"},next:{title:"\u4fee\u6539",permalink:"/react-query-web-i18n/guides&concepts/mutations"}},u=[{value:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",children:[]}],p={toc:u};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5982\u679c\u60a8\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u60a8\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01  \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"prefetchQuery"),"\u65b9\u6cd5\u9884\u53d6\u8981\u653e\u5165\u7f13\u5b58\u7684\u67e5\u8be2\u7ed3\u679c\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const prefetchTodos = async () => {\n  // \u8be5\u67e5\u8be2\u7684\u7ed3\u679c\u5c06\u50cf\u666e\u901a\u67e5\u8be2\u4e00\u6837\u88ab\u7f13\u5b58\n  await queryClient.prefetchQuery('todos', fetchTodos)\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u67e5\u8be2\u7684\u6570\u636e\u5df2\u7ecf\u5728\u7f13\u5b58\u4e2d\u5e76\u4e14",Object(a.b)("strong",{parentName:"li"},"\u6ca1\u6709\u5931\u6548"),"\uff0c\u5219\u5c06\u4e0d\u4f1a\u83b7\u53d6\u8be5\u6570\u636e"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a",Object(a.b)("inlineCode",{parentName:"li"},"staleTime"),"\u88ab\u4f20\u9012\uff0c\u4f8b\u5982\uff1a ",Object(a.b)("inlineCode",{parentName:"li"},"prefetchQuery('todos', fn, {staleTime\uff1a5000})"),"\u5e76\u4e14\u6570\u636e\u65e9\u4e8e\u6307\u5b9a\u7684staleTime\uff0c\u5219\u67e5\u8be2\u5c06\u53bb\u5c1d\u8bd5\u83b7\u53d6\u65b0\u503c"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u9884\u53d6\u7684\u67e5\u8be2\u6ca1\u6709\u51fa\u73b0",Object(a.b)("inlineCode",{parentName:"li"},"useQuery"),"\u5b9e\u4f8b\uff0c\u5219\u5c06\u5728",Object(a.b)("inlineCode",{parentName:"li"},"cacheTime"),"\u6307\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e\u88ab\u5220\u9664\u5e76\u88ab\u5783\u573e\u56de\u6536")),Object(a.b)("h2",{id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"},"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"),Object(a.b)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u540c\u6b65\u53ef\u7528\u7684\u67e5\u8be2\u6570\u636e\uff0c\u5219\u65e0\u9700\u9884\u53d6\u3002\n\u60a8\u53ef\u4ee5\u53ea\u4f7f\u7528",Object(a.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydata"},"Query Client\u7684",Object(a.b)("inlineCode",{parentName:"a"},"setQueryData"),"\u65b9\u6cd5"),"\u76f4\u63a5\u6309\u952e\u503c\u6dfb\u52a0\u6216\u66f4\u65b0\u67e5\u8be2\u7684\u7f13\u5b58\u7ed3\u679c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"queryClient.setQueryData('todos', todos)\n")))}l.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?c.a.createElement(f,o(o({ref:t},p),{},{components:n})):c.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);