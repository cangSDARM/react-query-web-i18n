(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(142)),i={id:"does-this-replace-client-state",title:"Does React Query replace Redux, MobX or other global state managers?"},s={unversionedId:"guides&concepts/does-this-replace-client-state",id:"guides&concepts/does-this-replace-client-state",isDocsHomePage:!1,title:"Does React Query replace Redux, MobX or other global state managers?",description:"Well, let's start with a few important items:",source:"@site/docs/guides&concepts/does-this-replace-client-state.md",slug:"/guides&concepts/does-this-replace-client-state",permalink:"/react-query-web-i18n/guides&concepts/does-this-replace-client-state",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/does-this-replace-client-state.md",version:"current",lastUpdatedAt:1614595344,sidebar:"zhCN",previous:{title:"Testing",permalink:"/react-query-web-i18n/guides&concepts/testing"},next:{title:"Migrating to React Query 3",permalink:"/react-query-web-i18n/guides&concepts/migrating-to-react-query-3"}},l=[{value:"A Contrived Example",id:"a-contrived-example",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Well, let's start with a few important items:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"React Query is a ",Object(o.b)("strong",{parentName:"li"},"server-state")," library, responsible for managing asynchronous operations between your server and client"),Object(o.b)("li",{parentName:"ul"},"Redux, MobX, Zustand, etc. are ",Object(o.b)("strong",{parentName:"li"},"client-state")," libraries that ",Object(o.b)("em",{parentName:"li"},"can be used to store asynchronous data, albeit inefficiently when compared to a tool like React Query"))),Object(o.b)("p",null,"With those points in mind, the short answer is that React Query ",Object(o.b)("strong",{parentName:"p"},"replaces the boilerplate code and related wiring used to manage cache data in your client-state and replaces it with just a few lines of code.")),Object(o.b)("p",null,"For a vast majority of applications, the truly ",Object(o.b)("strong",{parentName:"p"},"globally accessible client state")," that is left over after migrating all of your async code to React Query is usually very tiny."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"There are still some circumstances where an application might indeed have a massive amount of synchronous client-only state (like a visual designer or music production application), in which case, you will probably still want a client state manager. In this situation it's important to note that ",Object(o.b)("strong",{parentName:"p"},"React Query is not a replacement for local/client state management"),". However, you can use React Query along side most client state managers with zero issues.")),Object(o.b)("h2",{id:"a-contrived-example"},"A Contrived Example"),Object(o.b)("p",null,'Here we have some "global" state being managed by a global state library:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const globalState = {\n  projects,\n  teams,\n  tasks,\n  users,\n  themeMode,\n  sidebarStatus,\n}\n")),Object(o.b)("p",null,"Currently, the global state manager is caching 4 types of server-state: ",Object(o.b)("inlineCode",{parentName:"p"},"projects"),", ",Object(o.b)("inlineCode",{parentName:"p"},"teams"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tasks"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"users"),". If we were to move these server-state assets to React Query, our remaining global state would look more like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const globalState = {\n  themeMode,\n  sidebarStatus,\n}\n")),Object(o.b)("p",null,"This also means that with a few hook calls to ",Object(o.b)("inlineCode",{parentName:"p"},"useQuery")," and ",Object(o.b)("inlineCode",{parentName:"p"},"useMutation"),", we also get to remove any boilerplate code that use to manage our server state eg."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Connectors"),Object(o.b)("li",{parentName:"ul"},"Action Creators"),Object(o.b)("li",{parentName:"ul"},"Middlewares"),Object(o.b)("li",{parentName:"ul"},"Reducers"),Object(o.b)("li",{parentName:"ul"},"Loading/Error/Result states"),Object(o.b)("li",{parentName:"ul"},"Contexts")),Object(o.b)("p",null,"With all of those things removed, you may ask yourself, ",Object(o.b)("strong",{parentName:"p"},'"Is it worth it to keep using our client state manager for this tiny global state?"')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"And that's up to you!")),Object(o.b)("p",null,"But React Query's role is clear. It removes asynchronous wiring and boilerplate from your application and replaces it with just a few lines of code."),Object(o.b)("p",null,"What are you waiting for, give it a go already!"))}u.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return a?r.a.createElement(d,s(s({ref:t},c),{},{components:a})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);