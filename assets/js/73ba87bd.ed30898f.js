(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),a=(r(0),r(143)),u={id:"parallel-queries",title:"\u5e76\u884c\u67e5\u8be2"},o={unversionedId:"guides&concepts/parallel-queries",id:"guides&concepts/parallel-queries",isDocsHomePage:!1,title:"\u5e76\u884c\u67e5\u8be2",description:"\u201c\u5e76\u884c\u201d\u67e5\u8be2\u662f\u5e76\u884c\u6267\u884c\u7684\u67e5\u8be2\uff0c\u6216\u8005\u662f\u540c\u65f6\u6267\u884c\u7684\u67e5\u8be2\u3002\u7528\u4ee5\u6700\u5927\u5316\u67e5\u8be2\u5e76\u53d1\u6027\u3002",source:"@site/docs/guides&concepts/parallel-queries.md",slug:"/guides&concepts/parallel-queries",permalink:"/react-query-web-i18n/guides&concepts/parallel-queries",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/parallel-queries.md",version:"current",lastUpdatedAt:1620455099,formattedLastUpdatedAt:"5/8/2021",sidebar:"zhCN",previous:{title:"\u67e5\u8be2\u51fd\u6570",permalink:"/react-query-web-i18n/guides&concepts/query-functions"},next:{title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2",permalink:"/react-query-web-i18n/guides&concepts/dependent-queries"}},i=[{value:"\u624b\u52a8\u5e76\u884c\u67e5\u8be2",id:"\u624b\u52a8\u5e76\u884c\u67e5\u8be2",children:[]},{value:"\u4f7f\u7528<code>useQueries</code>\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2",id:"\u4f7f\u7528usequeries\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2",children:[]}],s={toc:i};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u201c\u5e76\u884c\u201d\u67e5\u8be2\u662f\u5e76\u884c\u6267\u884c\u7684\u67e5\u8be2\uff0c\u6216\u8005\u662f\u540c\u65f6\u6267\u884c\u7684\u67e5\u8be2\u3002\u7528\u4ee5\u6700\u5927\u5316\u67e5\u8be2\u5e76\u53d1\u6027\u3002"),Object(a.b)("h2",{id:"\u624b\u52a8\u5e76\u884c\u67e5\u8be2"},"\u624b\u52a8\u5e76\u884c\u67e5\u8be2"),Object(a.b)("p",null,"\u5982\u679c\u5e76\u884c\u67e5\u8be2\u7684\u6570\u91cf\u6ca1\u6709\u53d8\u5316\uff0c\u5219",Object(a.b)("strong",{parentName:"p"},"\u65e0\u9700\u4ed8\u51fa\u989d\u5916\u7684\u52aa\u529b"),"\u5373\u53ef\u4f7f\u7528\u5e76\u884c\u67e5\u8be2\u3002\n\u53ea\u9700\u5e76\u6392\u4f7f\u7528\u4efb\u610f\u6570\u91cf\u7684 React Query \u7684",Object(a.b)("inlineCode",{parentName:"p"},"useQuery"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"useInfiniteQuery"),"Hooks \u5373\u53ef\uff01"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function App () {\n  // \u4e0b\u9762\u7684\u67e5\u8be2\u5c06\u81ea\u52a8\u5730\u5e76\u884c\u6267\u884c\n  const usersQuery = useQuery('users', fetchUsers)\n  const teamsQuery = useQuery('teams', fetchTeams)\n  const projectsQuery = useQuery('projects', fetchProjects)\n  ...\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5728 React \u7684 suspense \u6a21\u5f0f\u4e0b\u4f7f\u7528 React Query \u65f6\uff0c\u8fd9\u79cd\u5e76\u884c\u6a21\u5f0f\u4e0d\u8d77\u4f5c\u7528\u3002\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u67e5\u8be2\u5c06\u5728\u5185\u90e8\u629b\u51fa Promise\uff0c\u5e76\u4e14\u5c06\u5728\u5176\u4ed6\u67e5\u8be2\u8fd0\u884c\u4e4b\u524d\u6302\u8d77\u7ec4\u4ef6\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u8981\u4e48\u9700\u8981\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"useQueries"),"Hook(\u8fd9\u662f\u5efa\u8bae\u7684)\uff0c\u8981\u4e48\u4e3a\u6bcf\u4e2a",Object(a.b)("inlineCode",{parentName:"p"},"useQuery"),"\u5b9e\u4f8b\u7528\u5355\u72ec\u7684\u7ec4\u4ef6\u7f16\u6392\u4f60\u81ea\u5df1\u7684\u5e76\u884c\u5ea6(\u8fd9\u5f88\u7cdf\u7cd5)\u3002")),Object(a.b)("h2",{id:"\u4f7f\u7528usequeries\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2"},"\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"h2"},"useQueries"),"\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2"),Object(a.b)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u6267\u884c\u7684\u67e5\u8be2\u6570\u91cf\u5728\u6bcf\u6b21\u6e32\u67d3\u4e4b\u95f4\u4f1a\u53d8\u5316\uff0c\u5219\u4e0d\u80fd\u4f7f\u7528\u624b\u52a8\u67e5\u8be2\uff0c\u56e0\u4e3a\u8fd9\u5c06\u8fdd\u53cd hook \u7684\u89c4\u5219\u3002\u76f8\u53cd\uff0cReact Query \u63d0\u4f9b\u4e86",Object(a.b)("inlineCode",{parentName:"p"},"useQueries"),"\u7684 Hook\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u52a8\u6001\u5730\u5e76\u884c\u6267\u884c\u5c3d\u53ef\u80fd\u591a\u7684\u67e5\u8be2\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useQueries"),"\u63a5\u53d7\u4e00\u7ec4",Object(a.b)("a",{parentName:"p",href:"./query-functions#%E4%BD%BF%E7%94%A8%E6%9F%A5%E8%AF%A2%E5%AF%B9%E8%B1%A1%E4%BB%A3%E6%9B%BF%E5%8F%82%E6%95%B0"},Object(a.b)("strong",{parentName:"a"},"\u4f5c\u4e3a\u67e5\u8be2\u914d\u7f6e\u7684\u5bf9\u8c61")),"\uff0c\u5e76\u4ee5",Object(a.b)("strong",{parentName:"p"},"\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u67e5\u8be2\u7684\u7ed3\u679c"),"\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function App({ users }) {\n  const userQueries = useQueries(\n    users.map((user) => {\n      return {\n        queryKey: ['user', user.id],\n        queryFn: () => fetchUserById(user.id),\n      }\n    }),\n  )\n}\n")))}p.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,f=l["".concat(u,".").concat(d)]||l[d]||b[d]||a;return r?c.a.createElement(f,o(o({ref:t},s),{},{components:r})):c.a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var s=2;s<a;s++)u[s]=r[s];return c.a.createElement.apply(null,u)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);