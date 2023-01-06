"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[960],{3905:(e,r,t)=>{t.d(r,{Zo:()=>y,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},y=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),l=i(t),d=o,f=l["".concat(c,".").concat(d)]||l[d]||p[d]||a;return t?n.createElement(f,u(u({ref:r},y),{},{components:t})):n.createElement(f,u({ref:r},y))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6058:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const a={id:"useQueryErrorResetBoundary",title:"useQueryErrorResetBoundary"},u=void 0,s={unversionedId:"reference/useQueryErrorResetBoundary",id:"reference/useQueryErrorResetBoundary",title:"useQueryErrorResetBoundary",description:"This hook will reset any query errors within the closest QueryErrorResetBoundary. If there is no boundary defined it will reset them globally:",source:"@site/react/reference/useQueryErrorResetBoundary.md",sourceDirName:"reference",slug:"/reference/useQueryErrorResetBoundary",permalink:"/react-query-web-i18n/react/reference/useQueryErrorResetBoundary",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/react/reference/useQueryErrorResetBoundary.md",tags:[],version:"current",lastUpdatedAt:1673005442,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"useQueryErrorResetBoundary",title:"useQueryErrorResetBoundary"}},c={},i=[],y={toc:i};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This hook will reset any query errors within the closest ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryErrorResetBoundary"),". If there is no boundary defined it will reset them globally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useQueryErrorResetBoundary } from '@tanstack/react-query'\nimport { ErrorBoundary } from 'react-error-boundary'\n\nconst App: React.FC = () => {\n  const { reset } = useQueryErrorResetBoundary()\n  return (\n    <ErrorBoundary\n      onReset={reset}\n      fallbackRender={({ resetErrorBoundary }) => (\n        <div>\n          There was an error!\n          <Button onClick={() => resetErrorBoundary()}>Try again</Button>\n        </div>\n      )}\n    >\n      <Page />\n    </ErrorBoundary>\n  )\n}\n")))}l.isMDXComponent=!0}}]);