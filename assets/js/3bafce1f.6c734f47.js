"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3408],{3905:(e,r,n)=>{n.d(r,{Zo:()=>y,kt:()=>l});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},y=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),d=c(n),l=o,f=d["".concat(s,".").concat(l)]||d[l]||p[l]||a;return n?t.createElement(f,u(u({ref:r},y),{},{components:n})):t.createElement(f,u({ref:r},y))}));function l(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=n[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4327:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const a={id:"QueryErrorResetBoundary",title:"QueryErrorResetBoundary"},u=void 0,i={unversionedId:"reference/QueryErrorResetBoundary",id:"version-v3.0/reference/QueryErrorResetBoundary",title:"QueryErrorResetBoundary",description:"When using suspense or useErrorBoundaries in your queries, you need a way to let queries know that you want to try again when re-rendering after some error occured. With the QueryErrorResetBoundary component you can reset any query errors within the boundaries of the component.",source:"@site/versioned_docs/version-v3.0/reference/QueryErrorResetBoundary.md",sourceDirName:"reference",slug:"/reference/QueryErrorResetBoundary",permalink:"/react-query-web-i18n/reference/QueryErrorResetBoundary",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3.0/reference/QueryErrorResetBoundary.md",tags:[],version:"v3.0",lastUpdatedAt:1658847505,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"QueryErrorResetBoundary",title:"QueryErrorResetBoundary"}},s={},c=[],y={toc:c};function p(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},y,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When using ",(0,o.kt)("strong",{parentName:"p"},"suspense")," or ",(0,o.kt)("strong",{parentName:"p"},"useErrorBoundaries")," in your queries, you need a way to let queries know that you want to try again when re-rendering after some error occured. With the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryErrorResetBoundary")," component you can reset any query errors within the boundaries of the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { QueryErrorResetBoundary } from 'react-query'\nimport { ErrorBoundary } from 'react-error-boundary'\n\nconst App: React.FC = () => (\n  <QueryErrorResetBoundary>\n    {({ reset }) => (\n      <ErrorBoundary\n        onReset={reset}\n        fallbackRender={({ resetErrorBoundary }) => (\n          <div>\n            There was an error!\n            <Button onClick={() => resetErrorBoundary()}>Try again</Button>\n          </div>\n        )}\n      >\n        <Page />\n      </ErrorBoundary>\n    )}\n  </QueryErrorResetBoundary>\n)\n")))}p.isMDXComponent=!0}}]);