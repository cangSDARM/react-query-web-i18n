(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[2697],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4489:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],l={id:"disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2"},c=void 0,u={unversionedId:"guides&concepts/disabling-queries",id:"guides&concepts/disabling-queries",isDocsHomePage:!1,title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2",description:"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528enabled = false\u9009\u9879\u3002",source:"@site/docs/guides&concepts/disabling-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/disabling-queries",permalink:"/react-query-web-i18n/guides&concepts/disabling-queries",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/disabling-queries.md",version:"current",lastUpdatedAt:1632389524,formattedLastUpdatedAt:"9/23/2021",frontMatter:{id:"disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2"},sidebar:"zhCN",previous:{title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0",permalink:"/react-query-web-i18n/guides&concepts/window-focus-refetching"},next:{title:"\u67e5\u8be2\u91cd\u8bd5",permalink:"/react-query-web-i18n/guides&concepts/query-retries"}},s=[],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"enabled = false"),"\u9009\u9879\u3002"),(0,a.kt)("p",null,"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u5df2\u7f13\u5b58\u4e86\u6570\u636e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"status === 'success'"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"isSuccess"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u6ca1\u6709\u7f13\u5b58\u7684\u6570\u636e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"status === 'idle'"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"isIdle"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u5c06\u4e0d\u4f1a\u5728\u6302\u8f7d\u65f6\u81ea\u52a8\u83b7\u53d6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6302\u8f7d\u65b0\u5b9e\u4f8b\u6216\u51fa\u73b0\u65b0\u5b9e\u4f8b\u65f6\uff0c\u67e5\u8be2\u4e0d\u4f1a\u81ea\u52a8\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u5c06\u5ffd\u7565\u67e5\u8be2\u5ba2\u6237\u7aef\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"invalidateQueries"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"refetchQueries"),"\u8c03\u7528\uff0c\u8fd9\u4e9b\u8c03\u7528\u901a\u5e38\u4f1a\u5bfc\u81f4\u67e5\u8be2\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refetch"),"\u53ef\u7528\u4e8e\u624b\u52a8\u89e6\u53d1\u67e5\u8be2\u4ee5\u8fdb\u884c\u6570\u636e\u83b7\u53d6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  const {\n    isIdle,\n    isLoading,\n    isError,\n    data,\n    error,\n    refetch,\n    isFetching,\n  } = useQuery('todos', fetchTodoList, {\n    enabled: false,\n  })\n\n  return (\n    <>\n      <button onClick={() => refetch()}>Fetch Todos</button>\n\n      {isIdle ? (\n        'Not ready...'\n      ) : isLoading ? (\n        <span>Loading...</span>\n      ) : isError ? (\n        <span>Error: {error.message}</span>\n      ) : (\n        <>\n          <ul>\n            {data.map((todo) => (\n              <li key={todo.id}>{todo.title}</li>\n            ))}\n          </ul>\n          <div>{isFetching ? 'Fetching...' : null}</div>\n        </>\n      )}\n    </>\n  )\n}\n")))}d.isMDXComponent=!0}}]);