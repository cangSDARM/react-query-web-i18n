(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(142)),o={id:"initial-query-data",title:"\u521d\u59cb\u5316\u7684\u67e5\u8be2\u6570\u636e"},l={unversionedId:"guides&concepts/initial-query-data",id:"guides&concepts/initial-query-data",isDocsHomePage:!1,title:"\u521d\u59cb\u5316\u7684\u67e5\u8be2\u6570\u636e",description:"\u5728\u9700\u8981\u67e5\u8be2\u4e4b\u524d\uff0c\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u5411\u7f13\u5b58\u63d0\u4f9b\u521d\u59cb\u6570\u636e\uff1a",source:"@site/docs/guides&concepts/initial-query-data.md",slug:"/guides&concepts/initial-query-data",permalink:"/react-query-web-i18n/guides&concepts/initial-query-data",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/initial-query-data.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"\u67e5\u8be2\u6570\u636e\u5360\u4f4d\u7b26",permalink:"/react-query-web-i18n/guides&concepts/placeholder-query-data"},next:{title:"\u9884\u53d6\u6570\u636e",permalink:"/react-query-web-i18n/guides&concepts/prefetching"}},c=[{value:"\u4f7f\u7528<code>initialData</code>\u9884\u5148\u586b\u5145\u67e5\u8be2",id:"\u4f7f\u7528initialdata\u9884\u5148\u586b\u5145\u67e5\u8be2",children:[{value:"<code>staleTime</code> \u548c <code>initialDataUpdatedAt</code>",id:"staletime-\u548c-initialdataupdatedat",children:[]},{value:"\u6765\u81ea\u51fd\u6570\u7684\u521d\u59cb\u6570\u636e",id:"\u6765\u81ea\u51fd\u6570\u7684\u521d\u59cb\u6570\u636e",children:[]},{value:"\u6765\u81ea\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e",id:"\u6765\u81ea\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e",children:[]},{value:"\u6765\u81ea\u5e26\u6709<code>InitialDataUpdatedAt</code>\u7684\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e",id:"\u6765\u81ea\u5e26\u6709initialdataupdatedat\u7684\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e",children:[]},{value:"\u6765\u81ea\u7f13\u5b58\u7684\u6709\u6761\u4ef6\u7684\u521d\u59cb\u6570\u636e",id:"\u6765\u81ea\u7f13\u5b58\u7684\u6709\u6761\u4ef6\u7684\u521d\u59cb\u6570\u636e",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5728\u9700\u8981\u67e5\u8be2\u4e4b\u524d\uff0c\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u5411\u7f13\u5b58\u63d0\u4f9b\u521d\u59cb\u6570\u636e\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u7684:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5411\u67e5\u8be2\u63d0\u4f9b",Object(r.b)("inlineCode",{parentName:"li"},"initialData"),"\u4ee5\u9884\u586b\u5145\u5176\u7f13\u5b58\uff08\u5982\u679c\u4e3a\u7a7a\uff09"))),Object(r.b)("li",{parentName:"ul"},"\u547d\u4ee4\u5f0f\u7684:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"./prefetching"},"\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"a"},"queryClient.prefetchQuery"),"\u9884\u53d6\u6570\u636e")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"./prefetching"},"\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"a"},"queryClient.setQueryData"),"\u624b\u52a8\u5c06\u6570\u636e\u653e\u5165\u7f13\u5b58"))))),Object(r.b)("h2",{id:"\u4f7f\u7528initialdata\u9884\u5148\u586b\u5145\u67e5\u8be2"},"\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"h2"},"initialData"),"\u9884\u5148\u586b\u5145\u67e5\u8be2"),Object(r.b)("p",null,"\u6709\u65f6\u5019\uff0c\u60a8\u53ef\u80fd\u5df2\u7ecf\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u83b7\u5f97\u4e86\u67e5\u8be2\u7684\u521d\u59cb\u6570\u636e\uff0c\u5e76\u4e14\u53ef\u4ee5\u76f4\u63a5\u5c06\u5176\u63d0\u4f9b\u7ed9\u60a8\u7684\u67e5\u8be2\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"config.initialData"),"\u9009\u9879\u8bbe\u7f6e\u67e5\u8be2\u7684\u521d\u59cb\u6570\u636e\uff0c\u5e76\u8df3\u8fc7\u521d\u59cb\u52a0\u8f7d\u72b6\u6001\uff01"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u91cd\u8981\u8bf4\u660e\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u4fdd\u7559\u5728\u7f13\u5b58\u4e2d\uff0c\u56e0\u6b64",Object(r.b)("strong",{parentName:"p"},"\u4e0d\u5efa\u8bae\u4e3a\u6b64\u9009\u9879\u63d0\u4f9b\u5360\u4f4d\u7b26\uff0c\u90e8\u5206\u6216\u4e0d\u5b8c\u6574\u7684\u6570\u636e"),"\uff0c\u5982\u6709\u5fc5\u8981\uff0c\u5e94\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"placeholderData"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  const result = useQuery('todos', () => fetch('/todos'), {\n    initialData: initialTodos,\n  })\n}\n")),Object(r.b)("h3",{id:"staletime-\u548c-initialdataupdatedat"},Object(r.b)("inlineCode",{parentName:"h3"},"staleTime")," \u548c ",Object(r.b)("inlineCode",{parentName:"h3"},"initialDataUpdatedAt")),Object(r.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u88ab\u89c6\u4e3a\u5b8c\u5168\u65b0\u9c9c\u7684\u6570\u636e\uff0c\u5c31\u50cf\u5b83\u521a\u521a\u88ab\u83b7\u53d6\u4e00\u6837\u3002\u8fd9\u4e5f\u610f\u5473\u7740\u5b83\u5c06\u5f71\u54cd",Object(r.b)("inlineCode",{parentName:"p"},"staleTime"),"\u5bf9\u5b83\u7684\u89e3\u91ca\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5982\u679c\u4e3a\u67e5\u8be2\u89c2\u5bdf\u8005(query observer)\u914d\u7f6e\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u4e14\u6ca1\u6709",Object(r.b)("inlineCode",{parentName:"p"},"staleTime"),"\uff08\u9ed8\u8ba4\u7684",Object(r.b)("inlineCode",{parentName:"p"},"staleTime: 0"),"\uff09\uff0c\u5219\u8be5\u67e5\u8be2\u5728\u6302\u8f7d\u65f6\u5c06\u7acb\u5373\u91cd\u65b0\u83b7\u53d6\uff1a"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  // \u5c06\u7acb\u5373\u663e\u793a initialTodos\uff0c\u4f46\u5728\u6302\u8f7d\u540e\u4e5f\u5c06\u7acb\u5373\u91cd\u65b0\u663e\u793aTODOS\n  const result = useQuery('todos', () => fetch('/todos'), {\n    initialData: initialTodos,\n  })\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5982\u679c\u4e3a\u67e5\u8be2\u89c2\u5bdf\u8005(query observer)\u914d\u7f6e\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u4e14",Object(r.b)("inlineCode",{parentName:"p"},"staleTime"),"\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"1000"),"ms\uff0c\u5219\u5728\u76f8\u540c\u7684\u65f6\u95f4\u91cf\u5185\u6570\u636e\u5c06\u88ab\u89c6\u4e3a\u6700\u65b0\u6570\u636e\uff0c\u5c31\u597d\u50cf\u5b83\u662f\u521a\u4ece\u67e5\u8be2\u4e2d\u83b7\u53d6\u7684\u4e00\u6837"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  // \u7acb\u5373\u663e\u793a initialTodos\uff0c\u4f46\u662f\u76f4\u5230 1000 ms \u4e4b\u540e\u9047\u5230\u53e6\u4e00\u4e2a\u4ea4\u4e92\u4e8b\u4ef6\u65f6\u624d\u91cd\u65b0\u83b7\u53d6\u6570\u636e\n  const result = useQuery('todos', () => fetch('/todos'), {\n    initialData: initialTodos,\n    staleTime: 1000,\n  })\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u90a3\u4e48\uff0c\u5982\u679c\u60a8\u7684",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u5e76\u4e0d\u5b8c\u5168\u65b0\u9c9c\u600e\u4e48\u529e\uff1f\u8fd9\u5c31\u7ed9\u6211\u4eec\u7559\u4e0b\u4e86\u6700\u540e\u4e00\u4e2a\u914d\u7f6e\uff0c\u5b83\u5b9e\u9645\u4e0a\u662f\u6700\u51c6\u786e\u7684\uff0c\u4f7f\u7528\u4e86\u4e00\u4e2a\u540d\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"initialDataUpdatedAt"),"\u7684\u9009\u9879\u3002\u8fd9\u4e2a\u9009\u9879\u5141\u8bb8\u4f60\u4f20\u9012\u4e00\u4e2a\u6570\u503c\u578b\u7684 JS \u65f6\u95f4\u6233(\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff0c\u5982",Object(r.b)("inlineCode",{parentName:"p"},"Date.now()"),")\uff0c\u4ee5\u786e\u5b9a",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u4e0a\u6b21\u66f4\u65b0\u7684\u65f6\u95f4\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f unix \u65f6\u95f4\u6233\uff0c\u5219\u9700\u8981\u5c06\u5176\u4e58\u4ee5 1000\uff0c\u4ee5\u5c06\u5176\u8f6c\u6362\u4e3a JS \u65f6\u95f4\u6233\u3002"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  // \u7acb\u5373\u663e\u793a initialTodos\uff0c\u4f46\u662f\u76f4\u5230 1000 ms \u4e4b\u540e\u9047\u5230\u53e6\u4e00\u4e2a\u4ea4\u4e92\u4e8b\u4ef6\u65f6\u624d\u91cd\u65b0\u83b7\u53d6\u6570\u636e\n  const result = useQuery('todos', () => fetch('/todos'), {\n    initialData: initialTodos,\n    staleTime: 60 * 1000 // 1 minute\n    // \u8fd9\u53ef\u80fd\u662f10\u79d2\u524d\u621610\u5206\u949f\u524d\n    initialDataUpdatedAt: initialTodosUpdatedTimestamp // eg. 1608412420052\n  })\n}\n")),Object(r.b)("p",{parentName:"li"},"\u6b64\u9009\u9879\u5141\u8bb8\u5c06 staleTime \u7528\u4e8e\u5176\u201c\u539f\u59cb\u201d\u7528\u9014\uff0c\u4ee5\u786e\u5b9a\u6570\u636e\u9700\u8981\u6709\u591a\u65b0\u9c9c\uff0c\u540c\u65f6\u8fd8\u5141\u8bb8\uff1a\u5982\u679c ",Object(r.b)("inlineCode",{parentName:"p"},"initialData")," \u65e9\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"staleTime"),"\uff0c\u5219\u5728\u6302\u8f7d\u65f6\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u3002\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u7684\u6570\u636e\u9700\u8981\u5728 1 \u5206\u949f\u5185\u5237\u65b0\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u6700\u540e\u4e00\u6b21\u66f4\u65b0\u65f6\u63d0\u793a\u67e5\u8be2\uff0c\u4ee5\u4fbf\u67e5\u8be2\u81ea\u5df1\u51b3\u5b9a\u662f\u5426\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u3002"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u6570\u636e\u89c6\u4e3a",Object(r.b)("strong",{parentName:"p"},"\u9884\u53d6\u6570\u636e"),"\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"prefetchQuery"),"\u6216",Object(r.b)("inlineCode",{parentName:"p"},"fetchQuery")," API \u6765\u9884\u5148\u586b\u5145\u7f13\u5b58\uff0c\u4ece\u800c\u72ec\u7acb\u4e8e",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u914d\u7f6e",Object(r.b)("inlineCode",{parentName:"p"},"staleTime"),"\u3002")),Object(r.b)("h3",{id:"\u6765\u81ea\u51fd\u6570\u7684\u521d\u59cb\u6570\u636e"},"\u6765\u81ea\u51fd\u6570\u7684\u521d\u59cb\u6570\u636e"),Object(r.b)("p",null,"\u5982\u679c\u8bbf\u95ee\u67e5\u8be2\u7684\u521d\u59cb\u6570\u636e\u7684\u8fc7\u7a0b\u5f88\u7e41\u7410\uff0c\u6216\u8005\u53ea\u662f\u4e0d\u60f3\u5728\u6bcf\u4e2a\u6e32\u67d3\u4e0a\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\uff0c\u5219\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u503c\u3002\u8fd9\u4e2a\u51fd\u6570\u53ea\u5728\u521d\u59cb\u5316\u67e5\u8be2\u65f6\u6267\u884c\u4e00\u6b21\uff0c\u4ece\u800c\u8282\u7701\u5b9d\u8d35\u7684\u5185\u5b58\u548c/\u6216 CPU\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  const result = useQuery('todos', () => fetch('/todos'), {\n    initialData: () => {\n      return getExpensiveTodos()\n    },\n  })\n}\n")),Object(r.b)("h3",{id:"\u6765\u81ea\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e"},"\u6765\u81ea\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e"),Object(r.b)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u80fd\u591f\u4ece\u53e6\u4e00\u4e2a\u67e5\u8be2\u7684\u7f13\u5b58\u7ed3\u679c\u4e2d\u4e3a\u67e5\u8be2\u63d0\u4f9b\u521d\u59cb\u6570\u636e\u3002\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u662f\uff0c\u4ece\u4e00\u4e2a todos list \u67e5\u8be2\u4e2d\u641c\u7d22\u4e00\u4e2a\u5355\u72ec\u7684 todo \u9879\u7684\u7f13\u5b58\u6570\u636e\uff0c\u7136\u540e\u4f7f\u7528\u8be5\u6570\u636e\u4f5c\u4e3a\u5355\u72ec\u7684 todo \u67e5\u8be2\u7684\u521d\u59cb\u6570\u636e\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todo({ todoId }) {\n  const result = useQuery(['todo', todoId], () => fetch('/todos'), {\n    initialData: () => {\n      // \u5c06 `todos` \u67e5\u8be2\u4e2d\u7684 TODOs \u7528\u4f5c\u6b64 TODOs \u67e5\u8be2\u7684\u521d\u59cb\u6570\u636e\n      return queryClient.getQueryData('todos')?.find((d) => d.id === todoId)\n    },\n  })\n}\n")),Object(r.b)("h3",{id:"\u6765\u81ea\u5e26\u6709initialdataupdatedat\u7684\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e"},"\u6765\u81ea\u5e26\u6709",Object(r.b)("inlineCode",{parentName:"h3"},"InitialDataUpdatedAt"),"\u7684\u7f13\u5b58\u7684\u521d\u59cb\u6570\u636e"),Object(r.b)("p",null,"\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u521d\u59cb\u6570\u636e\u610f\u5473\u7740\uff0c\u60a8\u7528\u6765\u4ece\u4e2d\u67e5\u8be2\u521d\u59cb\u6570\u636e\u7684\u6e90\u67e5\u8be2\u53ef\u80fd\u5f88\u65e7\uff0c\u4f46\u662f",Object(r.b)("inlineCode",{parentName:"p"},"initialData"),"\u800c\u4e0d\u662f\u4f7f\u7528\u624b\u52a8\u7684",Object(r.b)("inlineCode",{parentName:"p"},"staleTime"),"\u6765\u963b\u6b62\u67e5\u8be2\u88ab\u7acb\u5373\u91cd\u65b0\u8fd4\u56de\uff0c\u56e0\u6b64\u5efa\u8bae\u4f20\u9012\u6e90\u67e5\u8be2\u7684",Object(r.b)("inlineCode",{parentName:"p"},"dataUpdatedAt"),"\u7ed9",Object(r.b)("inlineCode",{parentName:"p"},"initialDataUpdatedAt"),"\u3002\n\u8fd9\u4e3a\u67e5\u8be2\u5b9e\u4f8b\u63d0\u4f9b\u4e86\u6240\u9700\u7684\u6240\u6709\u4fe1\u606f\uff0c\u4ee5\u786e\u5b9a\u662f\u5426\u4ee5\u53ca\u4f55\u65f6\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u67e5\u8be2\uff0c\u800c\u4e0d\u7ba1\u662f\u5426\u63d0\u4f9b\u4e86\u521d\u59cb\u6570\u636e\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todo({ todoId }) {\n  const result = useQuery(['todo', todoId], () => fetch('/todos'), {\n    initialData: () =>\n      queryClient.getQueryData('todos')?.find((d) => d.id === todoId),\n    initialDataUpdatedAt: () =>\n      queryClient.getQueryState('todos')?.dataUpdatedAt,\n  })\n}\n")),Object(r.b)("h3",{id:"\u6765\u81ea\u7f13\u5b58\u7684\u6709\u6761\u4ef6\u7684\u521d\u59cb\u6570\u636e"},"\u6765\u81ea\u7f13\u5b58\u7684\u6709\u6761\u4ef6\u7684\u521d\u59cb\u6570\u636e"),Object(r.b)("p",null,"\u5982\u679c\u60a8\u8981\u7528\u6765\u67e5\u627e\u521d\u59cb\u6570\u636e\u7684\u6e90\u67e5\u8be2\u8fc7\u65e7\uff0c\u5219\u53ef\u80fd\u6839\u672c\u4e0d\u60f3\u4f7f\u7528\u7f13\u5b58\u7684\u6570\u636e\uff0c\u800c\u53ea\u662f\u4ece\u670d\u52a1\u5668\u4e2d\u83b7\u53d6\u6570\u636e\u3002\n\u4e3a\u4e86\u4f7f\u6b64\u51b3\u5b9a\u66f4\u5bb9\u6613\uff0c\u60a8\u53ef\u4ee5\u6539\u7528",Object(r.b)("inlineCode",{parentName:"p"},"queryClient.getQueryState"),"\u65b9\u6cd5\u6765\u83b7\u53d6\u5173\u4e8e\u6e90\u67e5\u8be2\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5305\u62ec",Object(r.b)("inlineCode",{parentName:"p"},"state.dataUpdatedAt"),"\u65f6\u95f4\u6233\u3002\u60a8\u53ef\u4ee5\u4ee5\u6b64\u786e\u5b9a\u67e5\u8be2\u662f\u5426\u8db3\u591f\u201c\u65b0\u9c9c\u201d\u4ee5\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function Todo({ todoId }) {\n  const result = useQuery(['todo', todoId], () => fetch('/todos'), {\n    initialData: () => {\n      // \u83b7\u53d6\u67e5\u8be2\u72b6\u6001\n      const state = queryClient.getQueryState('todos')\n\n      // \u5982\u679c\u67e5\u8be2\u5b58\u5728\u5e76\u4e14\u6570\u636e\u201c\u8001\u5f97\u201d\u4e0d\u8d85\u8fc710\u79d2...\n      if (state && Date.now() - state.dataUpdatedAt <= 10 * 1000) {\n        // \u8fd4\u56de\u5355\u4e2atodo\n        return state.data.find((d) => d.id === todoId)\n      }\n\n      // \u5426\u5219\uff0c\u8fd4\u56deundefined\u5e76\u8ba9\u5b83\u4ece\u786c\u52a0\u8f7d\u72b6\u6001\u83b7\u53d6!\n    },\n  })\n}\n")))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),p=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=a,m=b["".concat(o,".").concat(s)]||b[s]||u[s]||r;return n?i.a.createElement(m,l(l({ref:t},d),{},{components:n})):i.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);