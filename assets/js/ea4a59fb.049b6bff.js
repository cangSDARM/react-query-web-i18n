"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[6778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"optimistic-updates",title:"\u4e50\u89c2\u66f4\u65b0 optimistic-updates"},i=void 0,s={unversionedId:"guides&concepts/optimistic-updates",id:"guides&concepts/optimistic-updates",title:"\u4e50\u89c2\u66f4\u65b0 optimistic-updates",description:"\u5728\u6267\u884c\u4fee\u6539\u4e4b\u524d\u6253\u7b97\u8fdb\u884c\u4e50\u89c2\u66f4\u65b0\u65f6\uff0c\u4fee\u6539\u6709\u53ef\u80fd\u5931\u8d25\uff08\u53ef\u80fd\u6027\u975e\u96f6\uff09\u3002",source:"@site/v3-react/guides&concepts/optimistic-updates.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/optimistic-updates",permalink:"/react-query-web-i18n/v3-react/guides&concepts/optimistic-updates",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/v3-react/guides&concepts/optimistic-updates.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"optimistic-updates",title:"\u4e50\u89c2\u66f4\u65b0 optimistic-updates"},sidebar:"default",previous:{title:"\u54cd\u5e94\u66f4\u65b0\u7684\u6570\u636e updates-from-mutation-responses",permalink:"/react-query-web-i18n/v3-react/guides&concepts/updates-from-mutation-responses"},next:{title:"\u67e5\u8be2\u53d6\u6d88 query-cancellation",permalink:"/react-query-web-i18n/v3-react/guides&concepts/query-cancellation"}},u={},c=[{value:"\u6dfb\u52a0\u65b0\u7684 todo \u65f6\u66f4\u65b0 todos \u5217\u8868",id:"\u6dfb\u52a0\u65b0\u7684-todo-\u65f6\u66f4\u65b0-todos-\u5217\u8868",level:2},{value:"\u66f4\u65b0\u5355\u4e2a\u7684 todo",id:"\u66f4\u65b0\u5355\u4e2a\u7684-todo",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u6267\u884c\u4fee\u6539\u4e4b\u524d\u6253\u7b97\u8fdb\u884c\u4e50\u89c2\u66f4\u65b0\u65f6\uff0c\u4fee\u6539\u6709\u53ef\u80fd\u5931\u8d25\uff08\u53ef\u80fd\u6027\u975e\u96f6\uff09\u3002\n\u5728\u5927\u591a\u6570\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u4e3a\u4e50\u89c2\u67e5\u8be2\u89e6\u53d1\u91cd\u65b0\u83b7\u53d6\uff0c\u4f7f\u5176\u6062\u590d\u5230\u771f\u6b63\u7684\u670d\u52a1\u5668\u72b6\u6001\u3002\n\u4f46\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u91cd\u65b0\u83b7\u53d6\u53ef\u80fd\u4e0d\u80fd\u6b63\u786e\u5de5\u4f5c\uff0c\u4fee\u6539\u53ef\u80fd\u4f1a\u5bfc\u81f4\u67d0\u79cd\u670d\u52a1\u5668\u7aef\u7684\u95ee\u9898\uff0c\u4f7f\u5176\u65e0\u6cd5\u8fdb\u884c\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u56de\u6eda\u60a8\u7684\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u4e3a\u6b64\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onMutate")," \u56de\u8c03\u5141\u8bb8\u60a8\u8fd4\u56de\u4e00\u4e2a\u503c\uff0c\u8be5\u503c\u7a0d\u540e\u5c06\u4f5c\u4e3a\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"onSettled")," \u5904\u7406\u3002\n\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u6765\u4f20\u9012\u56de\u6eda\u51fd\u6570\u662f\u6700\u6709\u7528\u7684\u3002"),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u65b0\u7684-todo-\u65f6\u66f4\u65b0-todos-\u5217\u8868"},"\u6dfb\u52a0\u65b0\u7684 todo \u65f6\u66f4\u65b0 todos \u5217\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const queryClient = useQueryClient();\n\nuseMutation(updateTodo, {\n  // \u5f53 mutate \u8c03\u7528\u65f6\n  onMutate: async (newTodo) => {\n    // \u64a4\u9500\u76f8\u5173\u7684\u67e5\u8be2\uff08\u8fd9\u6837\u5b83\u4eec\u5c31\u4e0d\u4f1a\u8986\u76d6\u6211\u4eec\u7684\u4e50\u89c2\u66f4\u65b0\uff09\n    await queryClient.cancelQueries("todos");\n\n    // \u4fdd\u5b58\u524d\u4e00\u6b21\u72b6\u6001\u7684\u5feb\u7167\n    const previousTodos = queryClient.getQueryData("todos");\n\n    // \u6267\u884c\u4e50\u89c2\u66f4\u65b0\n    queryClient.setQueryData("todos", (old) => [...old, newTodo]);\n\n    // \u8fd4\u56de\u5177\u6709\u5feb\u7167\u503c\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\n    return { previousTodos };\n  },\n  // \u5982\u679c\u4fee\u6539\u5931\u8d25\uff0c\u5219\u4f7f\u7528 onMutate \u8fd4\u56de\u7684\u4e0a\u4e0b\u6587\u8fdb\u884c\u56de\u6eda\n  onError: (err, newTodo, context) => {\n    queryClient.setQueryData("todos", context.previousTodos);\n  },\n  // \u603b\u662f\u5728\u9519\u8bef\u6216\u6210\u529f\u4e4b\u540e\u91cd\u65b0\u83b7\u53d6\uff1a\n  onSettled: () => {\n    queryClient.invalidateQueries("todos");\n  },\n});\n')),(0,r.kt)("h2",{id:"\u66f4\u65b0\u5355\u4e2a\u7684-todo"},"\u66f4\u65b0\u5355\u4e2a\u7684 todo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'useMutation(updateTodo, {\n  // \u5f53 mutate \u8c03\u7528\u65f6\n  onMutate: async (newTodo) => {\n    // \u53d6\u6d88\u76f8\u5173\u7684\u83b7\u53d6\u6570\u636e\u903b\u8f91\uff08\u8fd9\u6837\u5b83\u4eec\u5c31\u4e0d\u4f1a\u8986\u76d6\u6211\u4eec\u7684\u4e50\u89c2\u66f4\u65b0\uff09\n    await queryClient.cancelQueries(["todos", newTodo.id]);\n\n    // \u4fdd\u5b58\u524d\u4e00\u6b21\u72b6\u6001\u7684\u5feb\u7167\n    const previousTodo = queryClient.getQueryData(["todos", newTodo.id]);\n\n    // \u6267\u884c\u4e50\u89c2\u66f4\u65b0\n    queryClient.setQueryData(["todos", newTodo.id], newTodo);\n\n    // \u8fd4\u56de\u5177\u6709\u5feb\u7167\u503c\u548c\u4fee\u6539\u503c\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\n    return { previousTodo, newTodo };\n  },\n  // \u5982\u679c\u4fee\u6539\u5931\u8d25\uff0c\u5219\u4f7f\u7528 onMutate \u8fd4\u56de\u7684\u4e0a\u4e0b\u6587\n  onError: (err, newTodo, context) => {\n    queryClient.setQueryData(\n      ["todos", context.newTodo.id],\n      context.previousTodo,\n    );\n  },\n  // \u603b\u662f\u5728\u9519\u8bef\u6216\u6210\u529f\u4e4b\u540e\u91cd\u65b0\u83b7\u53d6\uff1a\n  onSettled: (newTodo) => {\n    queryClient.invalidateQueries(["todos", newTodo.id]);\n  },\n});\n')),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u613f\u610f\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"onsettled")," \u51fd\u6570\u6765\u4ee3\u66ff ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," \u5904\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useMutation(updateTodo, {\n  // ...\n  onSettled: (newTodo, error, variables, context) => {\n    if (error) {\n      // do something\n    }\n  },\n});\n")))}p.isMDXComponent=!0}}]);