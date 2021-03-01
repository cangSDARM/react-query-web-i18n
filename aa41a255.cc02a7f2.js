(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(87)),l={id:"overview",title:"\u6982\u89c8",sidebar_label:"\u6982\u89c8",slug:"/"},i={unversionedId:"getstarted/overview",id:"getstarted/overview",isDocsHomePage:!1,title:"\u6982\u89c8",description:"React Query \u901a\u5e38\u88ab\u63cf\u8ff0\u4e3a React \u7f3a\u5c11\u7684\u6570\u636e\u83b7\u53d6(data-fetching)\u5e93\uff0c\u4f46\u662f\u4ece\u66f4\u591a\u7684\u6280\u672f\u672f\u8bed\u6765\u770b\uff0c\u5b83\u4f7f React \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u83b7\u53d6\uff0c\u7f13\u5b58\uff0c\u540c\u6b65\u548c\u66f4\u65b0\u670d\u52a1\u5668\u72b6\u6001\u53d8\u5f97\u8f7b\u800c\u6613\u4e3e\u3002",source:"@site/docs/getstarted/overview.md",slug:"/",permalink:"/react-query-web-i18n/",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/getstarted/overview.md",version:"current",lastUpdatedAt:1614570017,sidebar_label:"\u6982\u89c8",sidebar:"zhCN",next:{title:"\u5b89\u88c5",permalink:"/react-query-web-i18n/getstarted/installation"}},o=[{value:"\u52a8\u673a",id:"\u52a8\u673a",children:[]},{value:"\u76f4\u63a5\u4e0a\u4ee3\u7801!",id:"\u76f4\u63a5\u4e0a\u4ee3\u7801",children:[]},{value:"\u4f60\u8bf4\u670d\u4e86\u6211\uff0c\u90a3\u73b0\u5728\u600e\u4e48\u529e\uff1f",id:"\u4f60\u8bf4\u670d\u4e86\u6211\uff0c\u90a3\u73b0\u5728\u600e\u4e48\u529e\uff1f",children:[]}],u={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"React Query \u901a\u5e38\u88ab\u63cf\u8ff0\u4e3a React \u7f3a\u5c11\u7684\u6570\u636e\u83b7\u53d6(data-fetching)\u5e93\uff0c\u4f46\u662f\u4ece\u66f4\u591a\u7684\u6280\u672f\u672f\u8bed\u6765\u770b\uff0c\u5b83\u4f7f React \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684",Object(c.b)("strong",{parentName:"p"},"\u83b7\u53d6\uff0c\u7f13\u5b58\uff0c\u540c\u6b65\u548c\u66f4\u65b0\u670d\u52a1\u5668\u72b6\u6001"),"\u53d8\u5f97\u8f7b\u800c\u6613\u4e3e\u3002"),Object(c.b)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),Object(c.b)("p",null,"\u5f00\u7bb1\u5373\u7528\uff0cReact \u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u5185\u7f6e\u7684\u4ece\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u6216\u66f4\u65b0\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u56e0\u6b64\u5f00\u53d1\u4eba\u5458\u6700\u7ec8\u4f1a\u6784\u5efa\u81ea\u5df1\u7684\u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u3002\n\u8fd9\u901a\u5e38\u610f\u5473\u7740\u4f7f\u7528 React Hooks \u5c06\u57fa\u4e8e\u7ec4\u4ef6\u7684\u72b6\u6001 state \u548c effects \u6574\u5408\u5728\u4e00\u8d77\uff0c\u6216\u8005\u4f7f\u7528\u66f4\u901a\u7528\u7684\u72b6\u6001\u7ba1\u7406\u5e93\u6765\u5b58\u50a8\u548c\u63d0\u4f9b\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5f02\u6b65\u6570\u636e\u3002"),Object(c.b)("p",null,"\u5c3d\u7ba1\u5927\u591a\u6570\u4f20\u7edf\u72b6\u6001\u7ba1\u7406\u5e93\u975e\u5e38\u9002\u5408\u7528\u4e8e\u5904\u7406\u5ba2\u6237\u7aef\u72b6\u6001\uff0c\u4f46\u662f\u5b83\u4eec",Object(c.b)("strong",{parentName:"p"},"\u5e76\u4e0d\u9002\u5408\u5904\u7406\u5f02\u6b65\u6216\u670d\u52a1\u5668\u72b6\u6001"),"\u3002\n\u8fd9\u662f\u56e0\u4e3a",Object(c.b)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u72b6\u6001\u5b8c\u5168\u4e0d\u540c"),"\u3002\u5bf9\u4e8e\u521d\u5b66\u8005\uff0c\u670d\u52a1\u5668\u72b6\u6001\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8fdc\u7a0b\u4fdd\u7559\u5728\u60a8\u65e0\u6cd5\u63a7\u5236\u6216\u62e5\u6709\u7684\u4f4d\u7f6e"),Object(c.b)("li",{parentName:"ul"},"\u9700\u8981\u5f02\u6b65 API \u8fdb\u884c\u83b7\u53d6\u548c\u66f4\u65b0"),Object(c.b)("li",{parentName:"ul"},"\u610f\u5473\u7740\u5171\u4eab\u6240\u6709\u6743\uff0c\u53ef\u4ee5\u5728\u4f60\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\u88ab\u5176\u4ed6\u4eba\u6539\u53d8"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5c0f\u5fc3\uff0c\u53ef\u80fd\u4f1a\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u53d8\u5f97\u201c\u8fc7\u65f6\u201d")),Object(c.b)("p",null,"\u4e00\u65e6\u4f60\u638c\u63e1\u4e86\u5e94\u7528\u7a0b\u5e8f\u4e2d\u670d\u52a1\u5668\u72b6\u6001\u7684\u672c\u8d28\uff0c\u4f60\u4f1a\u9047\u5230\u66f4\u591a\u7684\u6311\u6218\uff0c\u4f8b\u5982:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7f13\u5b58...\uff08\u8fd9\u53ef\u80fd\u662f\u7f16\u7a0b\u4e2d\u6700\u96be\u7684\u4e8b\u60c5\uff09"),Object(c.b)("li",{parentName:"ul"},"\u5c06\u5bf9\u540c\u4e00\u6570\u636e\u7684\u591a\u4e2a\u8bf7\u6c42\u91cd\u590d\u6570\u636e\u96c6\u5408\u5230\u5355\u4e2a\u8bf7\u6c42\u4e2d"),Object(c.b)("li",{parentName:"ul"},"\u5728\u540e\u53f0\u66f4\u65b0\u8fc7\u671f\u7684\u6570\u636e"),Object(c.b)("li",{parentName:"ul"},"\u77e5\u9053\u6570\u636e\u4f55\u65f6\u201c\u8fc7\u65f6\u201d"),Object(c.b)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u5feb\u5730\u53cd\u6620\u6570\u636e\u66f4\u65b0"),Object(c.b)("li",{parentName:"ul"},"\u5206\u9875\u548c\u5ef6\u8fdf\u52a0\u8f7d\u6570\u636e\u7b49\u6027\u80fd\u4f18\u5316"),Object(c.b)("li",{parentName:"ul"},"\u7ba1\u7406\u670d\u52a1\u5668\u72b6\u6001\u7684\u5185\u5b58\u548c GC"),Object(c.b)("li",{parentName:"ul"},"\u7ed3\u6784\u5316\u5171\u4eab\u5e76\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c")),Object(c.b)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u88ab\u8fd9\u4e2a\u5217\u8868\u538b\u57ae\uff0c\u90a3\u4e48\u8fd9\u4e00\u5b9a\u610f\u5473\u7740\u60a8\u53ef\u80fd\u5df2\u7ecf\u89e3\u51b3\u4e86\u6240\u6709\u7684\u670d\u52a1\u5668\u72b6\u6001\u95ee\u9898\uff0c\u503c\u5f97\u83b7\u5956\u3002\n\u7136\u800c\uff0c\u5982\u679c\u4f60\u548c\u5927\u591a\u6570\u4eba\u4e00\u6837\uff0c\u4f60\u8981\u4e48\u8fd8\u6ca1\u6709\u89e3\u51b3\u6240\u6709\u8fd9\u4e9b\u6311\u6218\uff0c\u8981\u4e48\u8fd8\u6ca1\u6709\u89e3\u51b3\u5927\u90e8\u5206\u6311\u6218\uff0c\u6211\u4eec\u53ea\u662f\u89e6\u53ca\u4e86\u8868\u9762!"),Object(c.b)("p",null,"React Query \u65e0\u7591\u662f\u7ba1\u7406\u670d\u52a1\u5668\u72b6\u6001\u7684\u6700\u4f73\u5e93\u4e4b\u4e00\u3002\u5b83\u975e\u5e38\u597d\u7528\uff0c",Object(c.b)("strong",{parentName:"p"},"\u5f00\u7bb1\u5373\u7528\uff0c\u65e0\u9700\u914d\u7f6e"),"\uff0c\u5e76\u4e14\u53ef\u4ee5\u968f\u7740\u5e94\u7528\u7a0b\u5e8f\u7684\u589e\u957f\u800c\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d",Object(c.b)("strong",{parentName:"p"},"\u8fdb\u884c\u5b9a\u5236"),"\u3002"),Object(c.b)("p",null,"React Query \u4f7f\u60a8\u53ef\u4ee5\u51fb\u8d25\u5e76\u5f81\u670d\u68d8\u624b\u7684\u670d\u52a1\u5668\u72b6\u6001\u6311\u6218\u548c\u969c\u788d\uff0c\u5e76\u5728\u5f00\u59cb\u63a7\u5236\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u4e4b\u524d\u5bf9\u5176\u8fdb\u884c\u63a7\u5236\u3002"),Object(c.b)("p",null,"\u4ece\u66f4\u4e13\u4e1a\u7684\u89d2\u5ea6\u6765\u8bf4\uff0cReact Query \u53ef\u80fd\u4f1a:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5e2e\u52a9\u60a8\u4ece\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5220\u9664\u8bb8\u591a\u590d\u6742\u548c\u5bb9\u6613\u5f15\u8d77\u8bef\u89e3\u7684\u4ee3\u7801\u884c\uff0c\u7528\u5c11\u91cf\u7684 React \u67e5\u8be2\u903b\u8f91\u4ee3\u66ff"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u66f4\u6613\u4e8e\u7ef4\u62a4\uff0c\u66f4\u6613\u4e8e\u6784\u5efa\u65b0\u529f\u80fd\uff0c\u800c\u4e0d\u5fc5\u62c5\u5fc3\u5982\u4f55\u8fde\u63a5\u65b0\u7684\u670d\u52a1\u5668\u72b6\u6001\u6570\u636e\u6e90"),Object(c.b)("li",{parentName:"ul"},"\u901a\u8fc7\u4f7f\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u611f\u89c9\u6bd4\u4ee5\u524d\u66f4\u5feb\u3001\u6570\u636e\u54cd\u5e94\u66f4\u5feb\uff0c\u76f4\u63a5\u5f71\u54cd\u60a8\u7684\u6700\u7ec8\u7528\u6237"),Object(c.b)("li",{parentName:"ul"},"\u6f5c\u5728\u5730\u5e2e\u52a9\u60a8\u8282\u7701\u5e26\u5bbd\u548c\u63d0\u9ad8\u5185\u5b58\u6027\u80fd")),Object(c.b)("h2",{id:"\u76f4\u63a5\u4e0a\u4ee3\u7801"},"\u76f4\u63a5\u4e0a\u4ee3\u7801!"),Object(c.b)("p",null,"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u4f60\u53ef\u4ee5\u770b\u5230 React Query \u4ee5\u5176\u6700\u57fa\u672c\u548c\u7b80\u5355\u7684\u5f62\u5f0f\u88ab\u7528\u6765\u83b7\u53d6 GitHub \u9879\u76ee\u672c\u8eab\u7684 React Query \u7684\u7edf\u8ba1\u4fe1\u606f:"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/simple"},"Open in CodeSandbox")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import { QueryClient, QueryClientProvider, useQuery } from 'react-query'\n\nconst queryClient = new QueryClient()\n\nexport default function App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Example />\n    </QueryClientProvider>\n  )\n}\n\nfunction Example() {\n  const { isLoading, error, data } = useQuery('repoData', () =>\n    fetch(\n      'https://api.github.com/repos/tannerlinsley/react-query',\n    ).then((res) => res.json()),\n  )\n\n  if (isLoading) return 'Loading...'\n\n  if (error) return 'An error has occurred: ' + error.message\n\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <p>{data.description}</p>\n      <strong>\ud83d\udc40 {data.subscribers_count}</strong>{' '}\n      <strong>\u2728 {data.stargazers_count}</strong>{' '}\n      <strong>\ud83c\udf74 {data.forks_count}</strong>\n    </div>\n  )\n}\n")),Object(c.b)("h2",{id:"\u4f60\u8bf4\u670d\u4e86\u6211\uff0c\u90a3\u73b0\u5728\u600e\u4e48\u529e\uff1f"},"\u4f60\u8bf4\u670d\u4e86\u6211\uff0c\u90a3\u73b0\u5728\u600e\u4e48\u529e\uff1f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8003\u8651\u53c2\u52a0",Object(c.b)("a",{parentName:"li",href:"https://learn.tanstack.com/"},"React Query Essentials"),"\u8bfe\u7a0b\uff08\u6216\u4e3a\u6574\u4e2a\u56e2\u961f\u8d2d\u4e70\uff01\uff09\uff08\u82f1\u6587\uff09"),Object(c.b)("li",{parentName:"ul"},"\u7acb\u5373\u5f00\u59cb\u9605\u8bfb\u6587\u6863")))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||c;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<c;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);