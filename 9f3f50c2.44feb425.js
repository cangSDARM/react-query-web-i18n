(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return u})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(142)),u={id:"useQueryErrorResetBoundary",title:"useQueryErrorResetBoundary"},c={unversionedId:"reference/useQueryErrorResetBoundary",id:"reference/useQueryErrorResetBoundary",isDocsHomePage:!1,title:"useQueryErrorResetBoundary",description:"This hook will reset any query errors within the closest QueryErrorResetBoundary. If there is no boundary defined it will reset them globally:",source:"@site/docs/reference/useQueryErrorResetBoundary.md",slug:"/reference/useQueryErrorResetBoundary",permalink:"/react-query-web-i18n/reference/useQueryErrorResetBoundary",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/useQueryErrorResetBoundary.md",version:"current",lastUpdatedAt:1614595344},i=[],s={toc:i};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This hook will reset any query errors within the closest ",Object(a.b)("inlineCode",{parentName:"p"},"QueryErrorResetBoundary"),". If there is no boundary defined it will reset them globally:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { useQueryErrorResetBoundary } from 'react-query'\nimport { ErrorBoundary } from 'react-error-boundary'\n\nconst App: React.FC = () => {\n  const { reset } = useQueryErrorResetBoundary()\n  return (\n    <ErrorBoundary\n      onReset={reset}\n      fallbackRender={({ resetErrorBoundary }) => (\n        <div>\n          There was an error!\n          <Button onClick={() => resetErrorBoundary()}>Try again</Button>\n        </div>\n      )}\n    >\n      <Page />\n    </ErrorBoundary>\n  )\n}\n")))}l.isMDXComponent=!0},142:function(e,r,n){"use strict";n.d(r,"a",(function(){return y})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},y=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=l(n),d=t,f=y["".concat(u,".").concat(d)]||y[d]||p[d]||a;return n?o.a.createElement(f,c(c({ref:r},s),{},{components:n})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,u=new Array(a);u[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);