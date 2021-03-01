(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(142)),c={id:"disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2"},o={unversionedId:"guides&concepts/disabling-queries",id:"guides&concepts/disabling-queries",isDocsHomePage:!1,title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2",description:"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528enabled = false\u9009\u9879\u3002",source:"@site/docs/guides&concepts/disabling-queries.md",slug:"/guides&concepts/disabling-queries",permalink:"/react-query-web-i18n/guides&concepts/disabling-queries",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/disabling-queries.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"\u7a97\u53e3\u7126\u70b9\u7684\u91cd\u65b0\u83b7\u53d6\u6570\u636e",permalink:"/react-query-web-i18n/guides&concepts/window-focus-refetching"},next:{title:"\u67e5\u8be2\u91cd\u8bd5",permalink:"/react-query-web-i18n/guides&concepts/query-retries"}},l=[],s={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"enabled = false"),"\u9009\u9879\u3002"),Object(a.b)("p",null,"\u5f53 ",Object(a.b)("inlineCode",{parentName:"p"},"enabled")," \u662f ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u5df2\u7f13\u5b58\u4e86\u6570\u636e",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",Object(a.b)("inlineCode",{parentName:"li"},"status === 'success'"),"\u6216",Object(a.b)("inlineCode",{parentName:"li"},"isSuccess"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u6ca1\u6709\u7f13\u5b58\u7684\u6570\u636e",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",Object(a.b)("inlineCode",{parentName:"li"},"status === 'idle'"),"\u6216",Object(a.b)("inlineCode",{parentName:"li"},"isIdle"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),Object(a.b)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u5c06\u4e0d\u4f1a\u5728\u6302\u8f7d\u65f6\u81ea\u52a8\u83b7\u53d6\u6570\u636e"),Object(a.b)("li",{parentName:"ul"},"\u5f53\u6302\u8f7d\u65b0\u5b9e\u4f8b\u6216\u51fa\u73b0\u65b0\u5b9e\u4f8b\u65f6\uff0c\u67e5\u8be2\u4e0d\u4f1a\u81ea\u52a8\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),Object(a.b)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u5c06\u5ffd\u7565\u67e5\u8be2\u5ba2\u6237\u7aef\u7684",Object(a.b)("inlineCode",{parentName:"li"},"invalidateQueries"),"\u548c",Object(a.b)("inlineCode",{parentName:"li"},"refetchQueries"),"\u8c03\u7528\uff0c\u8fd9\u4e9b\u8c03\u7528\u901a\u5e38\u4f1a\u5bfc\u81f4\u67e5\u8be2\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"refetch"),"\u53ef\u7528\u4e8e\u624b\u52a8\u89e6\u53d1\u67e5\u8be2\u4ee5\u8fdb\u884c\u6570\u636e\u83b7\u53d6\u3002")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  const {\n    isIdle,\n    isLoading,\n    isError,\n    data,\n    error,\n    refetch,\n    isFetching,\n  } = useQuery('todos', fetchTodoList, {\n    enabled: false,\n  })\n\n  return (\n    <>\n      <button onClick={() => refetch()}>Fetch Todos</button>\n\n      {isIdle ? (\n        'Not ready...'\n      ) : isLoading ? (\n        <span>Loading...</span>\n      ) : isError ? (\n        <span>Error: {error.message}</span>\n      ) : (\n        <>\n          <ul>\n            {data.map((todo) => (\n              <li key={todo.id}>{todo.title}</li>\n            ))}\n          </ul>\n          <div>{isFetching ? 'Fetching...' : null}</div>\n        </>\n      )}\n    </>\n  )\n}\n")))}u.isMDXComponent=!0},142:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return t?i.a.createElement(f,o(o({ref:n},s),{},{components:t})):i.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);