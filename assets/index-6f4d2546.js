(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var X={},tr={get exports(){return X},set exports(e){X=e}},re={};const Ke=React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Ke,nr=Symbol.for("react.element"),or=Symbol.for("react.fragment"),sr=Object.prototype.hasOwnProperty,ar=rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ir={key:!0,ref:!0,__self:!0,__source:!0};function Nt(e,t,r){var n,o={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)sr.call(t,n)&&!ir.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:nr,type:e,key:s,ref:a,props:o,_owner:ar.current}}re.Fragment=or;re.jsx=Nt;re.jsxs=Nt;(function(e){e.exports=re})(tr);const j=X.jsx,_o=X.jsxs;var Ae={};const cr=ReactDOM;var lt=cr;Ae.createRoot=lt.createRoot,Ae.hydrateRoot=lt.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},J.apply(this,arguments)}var U;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(U||(U={}));const ft="popstate";function ur(e){e===void 0&&(e={});function t(o,s){let{pathname:a="/",search:i="",hash:c=""}=B(o.location.hash.substr(1));return ke("",{pathname:a,search:i,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){let a=o.document.querySelector("base"),i="";if(a&&a.getAttribute("href")){let c=o.location.href,u=c.indexOf("#");i=u===-1?c:c.slice(0,u)}return i+"#"+(typeof s=="string"?s:Lt(s))}function n(o,s){ne(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return fr(t,r,n,e)}function x(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ne(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lr(){return Math.random().toString(36).substr(2,8)}function dt(e,t){return{usr:e.state,key:e.key,idx:t}}function ke(e,t,r,n){return r===void 0&&(r=null),J({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?B(t):t,{state:r,key:t&&t.key||n||lr()})}function Lt(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function B(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function fr(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:s=!1}=n,a=o.history,i=U.Pop,c=null,u=l();u==null&&(u=0,a.replaceState(J({},a.state,{idx:u}),""));function l(){return(a.state||{idx:null}).idx}function f(){i=U.Pop;let d=l(),R=d==null?null:d-u;u=d,c&&c({action:i,location:p.location,delta:R})}function h(d,R){i=U.Push;let m=ke(p.location,d,R);r&&r(m,d),u=l()+1;let b=dt(m,u),E=p.createHref(m);try{a.pushState(b,"",E)}catch{o.location.assign(E)}s&&c&&c({action:i,location:p.location,delta:1})}function S(d,R){i=U.Replace;let m=ke(p.location,d,R);r&&r(m,d),u=l();let b=dt(m,u),E=p.createHref(m);a.replaceState(b,"",E),s&&c&&c({action:i,location:p.location,delta:0})}function g(d){let R=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof d=="string"?d:Lt(d);return x(R,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,R)}let p={get action(){return i},get location(){return e(o,a)},listen(d){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(ft,f),c=d,()=>{o.removeEventListener(ft,f),c=null}},createHref(d){return t(o,d)},createURL:g,encodeLocation(d){let R=g(d);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:h,replace:S,go(d){return a.go(d)}};return p}var pt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pt||(pt={}));function dr(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?B(t):t,o=Tt(n.pathname||"/",r);if(o==null)return null;let s=jt(e);pr(s);let a=null;for(let i=0;a==null&&i<s.length;++i)a=xr(s[i],wr(o));return a}function jt(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(s,a,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(x(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=F([n,c.relativePath]),l=r.concat(c);s.children&&s.children.length>0&&(x(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jt(s.children,t,l,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Sr(u,s.index),routesMeta:l})};return e.forEach((s,a)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))o(s,a);else for(let c of It(s.path))o(s,a,c)}),t}function It(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return o?[s,""]:[s];let a=It(n.join("/")),i=[];return i.push(...a.map(c=>c===""?s:[s,c].join("/"))),o&&i.push(...a),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function pr(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:br(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const hr=/^:\w+$/,mr=3,yr=2,vr=1,gr=10,Rr=-2,ht=e=>e==="*";function Sr(e,t){let r=e.split("/"),n=r.length;return r.some(ht)&&(n+=Rr),t&&(n+=yr),r.filter(o=>!ht(o)).reduce((o,s)=>o+(hr.test(s)?mr:s===""?vr:gr),n)}function br(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function xr(e,t){let{routesMeta:r}=e,n={},o="/",s=[];for(let a=0;a<r.length;++a){let i=r[a],c=a===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",l=Pr({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u);if(!l)return null;Object.assign(n,l.params);let f=i.route;s.push({params:n,pathname:F([o,l.pathname]),pathnameBase:Nr(F([o,l.pathnameBase])),route:f}),l.pathnameBase!=="/"&&(o=F([o,l.pathnameBase]))}return s}function Pr(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Er(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let s=o[0],a=s.replace(/(.)\/+$/,"$1"),i=o.slice(1);return{params:n.reduce((u,l,f)=>{if(l==="*"){let h=i[f]||"";a=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[l]=Cr(i[f]||"",l),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Er(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ne(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,i)=>(n.push(i),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function wr(e){try{return decodeURI(e)}catch(t){return ne(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cr(e,t){try{return decodeURIComponent(e)}catch(r){return ne(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Tt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function $r(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?B(e):e;return{pathname:r?r.startsWith("/")?r:Or(r,t):t,search:Lr(n),hash:jr(o)}}function Or(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function je(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _r(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Mr(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=B(e):(o=J({},e),x(!o.pathname||!o.pathname.includes("?"),je("?","pathname","search",o)),x(!o.pathname||!o.pathname.includes("#"),je("#","pathname","hash",o)),x(!o.search||!o.search.includes("#"),je("#","search","hash",o)));let s=e===""||o.pathname==="",a=s?"/":o.pathname,i;if(n||a==null)i=r;else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}i=f>=0?t[f]:"/"}let c=$r(o,i),u=a&&a!=="/"&&a.endsWith("/"),l=(s||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||l)&&(c.pathname+="/"),c}const F=e=>e.join("/").replace(/\/\/+/g,"/"),Nr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ir extends Error{}function Tr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Fr=typeof Object.is=="function"?Object.is:Ur,{useState:Br,useEffect:Ar,useLayoutEffect:kr,useDebugValue:Wr}=React;function Dr(e,t,r){const n=t(),[{inst:o},s]=Br({inst:{value:n,getSnapshot:t}});return kr(()=>{o.value=n,o.getSnapshot=t,Ie(o)&&s({inst:o})},[e,n,t]),Ar(()=>(Ie(o)&&s({inst:o}),e(()=>{Ie(o)&&s({inst:o})})),[e]),Wr(n),n}function Ie(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!Fr(r,n)}catch{return!0}}function Vr(e,t,r){return t()}const zr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qr=!zr,Jr=qr?Vr:Dr;"useSyncExternalStore"in React&&(e=>e.useSyncExternalStore)(React);const Ut=React.createContext(null),He=React.createContext(null),mt=React.createContext(null),Ye=React.createContext(null),oe=React.createContext(null),K=React.createContext({outlet:null,matches:[]}),Ft=React.createContext(null);function We(){return We=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},We.apply(this,arguments)}function H(){return React.useContext(oe)!=null}function Ge(){return H()||x(!1),React.useContext(oe).location}function Bt(){H()||x(!1);let{basename:e,navigator:t}=React.useContext(Ye),{matches:r}=React.useContext(K),{pathname:n}=Ge(),o=JSON.stringify(_r(r).map(i=>i.pathnameBase)),s=React.useRef(!1);return React.useEffect(()=>{s.current=!0}),React.useCallback(function(i,c){if(c===void 0&&(c={}),!s.current)return;if(typeof i=="number"){t.go(i);return}let u=Mr(i,JSON.parse(o),n,c.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:F([e,u.pathname])),(c.replace?t.replace:t.push)(u,c.state,c)},[e,t,o,n])}function Kr(e,t){H()||x(!1);let{navigator:r}=React.useContext(Ye),n=React.useContext(He),{matches:o}=React.useContext(K),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let i=s?s.pathnameBase:"/";s&&s.route;let c=Ge(),u;if(t){var l;let p=typeof t=="string"?B(t):t;i==="/"||(l=p.pathname)!=null&&l.startsWith(i)||x(!1),u=p}else u=c;let f=u.pathname||"/",h=i==="/"?f:f.slice(i.length)||"/",S=dr(e,{pathname:h}),g=Qr(S&&S.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:F([i,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?i:F([i,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n||void 0);return t&&g?React.createElement(oe.Provider,{value:{location:We({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:U.Pop}},g):g}function Hr(){let e=tn(),t=Tr(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return React.createElement(React.Fragment,null,React.createElement("h2",null,"Unexpected Application Error!"),React.createElement("h3",{style:{fontStyle:"italic"}},t),r?React.createElement("pre",{style:o},r):null,s)}class Yr extends React.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?React.createElement(K.Provider,{value:this.props.routeContext},React.createElement(Ft.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gr(e){let{routeContext:t,match:r,children:n}=e,o=React.useContext(Ut);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),React.createElement(K.Provider,{value:t},n)}function Qr(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let n=e,o=r==null?void 0:r.errors;if(o!=null){let s=n.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));s>=0||x(!1),n=n.slice(0,Math.min(n.length,s+1))}return n.reduceRight((s,a,i)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,u=null;r&&(a.route.ErrorBoundary?u=React.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=React.createElement(Hr,null));let l=t.concat(n.slice(0,i+1)),f=()=>{let h=s;return c?h=u:a.route.Component?h=React.createElement(a.route.Component,null):a.route.element&&(h=a.route.element),React.createElement(Gr,{match:a,routeContext:{outlet:s,matches:l},children:h})};return r&&(a.route.ErrorBoundary||a.route.errorElement||i===0)?React.createElement(Yr,{location:r.location,component:u,error:c,children:f(),routeContext:{outlet:null,matches:l}}):f()},null)}var yt;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(yt||(yt={}));var Z;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Z||(Z={}));function Xr(e){let t=React.useContext(He);return t||x(!1),t}function Zr(e){let t=React.useContext(K);return t||x(!1),t}function en(e){let t=Zr(),r=t.matches[t.matches.length-1];return r.route.id||x(!1),r.route.id}function tn(){var e;let t=React.useContext(Ft),r=Xr(Z.UseRouteError),n=en(Z.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function rn(e){let{to:t,replace:r,state:n,relative:o}=e;H()||x(!1);let s=React.useContext(He),a=Bt();return React.useEffect(()=>{s&&s.navigation.state!=="idle"||a(t,{replace:r,state:n,relative:o})}),null}function At(e){x(!1)}function nn(e){let{basename:t="/",children:r=null,location:n,navigationType:o=U.Pop,navigator:s,static:a=!1}=e;H()&&x(!1);let i=t.replace(/^\/*/,"/"),c=React.useMemo(()=>({basename:i,navigator:s,static:a}),[i,s,a]);typeof n=="string"&&(n=B(n));let{pathname:u="/",search:l="",hash:f="",state:h=null,key:S="default"}=n,g=React.useMemo(()=>{let p=Tt(u,i);return p==null?null:{location:{pathname:p,search:l,hash:f,state:h,key:S},navigationType:o}},[i,u,l,f,h,S,o]);return g==null?null:React.createElement(Ye.Provider,{value:c},React.createElement(oe.Provider,{children:r,value:g}))}function on(e){let{children:t,location:r}=e,n=React.useContext(Ut),o=n&&!t?n.router.routes:De(t);return Kr(o,r)}var w;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(w||(w={}));const sn=new Promise(()=>{});class Mo extends React.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("<Await> caught the following error during render",t,r)}render(){let{children:t,errorElement:r,resolve:n}=this.props,o=null,s=w.pending;if(!(n instanceof Promise))s=w.success,o=Promise.resolve(),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_data",{get:()=>n});else if(this.state.error){s=w.error;let a=this.state.error;o=Promise.reject().catch(()=>{}),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_error",{get:()=>a})}else n._tracked?(o=n,s=o._error!==void 0?w.error:o._data!==void 0?w.success:w.pending):(s=w.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),o=n.then(a=>Object.defineProperty(n,"_data",{get:()=>a}),a=>Object.defineProperty(n,"_error",{get:()=>a})));if(s===w.error&&o._error instanceof Ir)throw sn;if(s===w.error&&!r)throw o._error;if(s===w.error)return React.createElement(mt.Provider,{value:o,children:r});if(s===w.success)return React.createElement(mt.Provider,{value:o,children:t});throw o}}function De(e,t){t===void 0&&(t=[]);let r=[];return React.Children.forEach(e,(n,o)=>{if(!React.isValidElement(n))return;let s=[...t,o];if(n.type===React.Fragment){r.push.apply(r,De(n.props.children,s));return}n.type!==At&&x(!1),!n.props.index||!n.props.children||x(!1);let a={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=De(n.props.children,s)),r.push(a)}),r}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ve(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function an(e,t){let r=Ve(e);if(t)for(let n of t.keys())r.has(n)||t.getAll(n).forEach(o=>{r.append(n,o)});return r}function cn(e){let{basename:t,children:r,window:n}=e,o=React.useRef();o.current==null&&(o.current=ur({window:n,v5Compat:!0}));let s=o.current,[a,i]=React.useState({action:s.action,location:s.location});return React.useLayoutEffect(()=>s.listen(i),[s]),React.createElement(nn,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:s})}var vt;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(vt||(vt={}));var gt;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gt||(gt={}));function No(e){let t=React.useRef(Ve(e)),r=React.useRef(!1),n=Ge(),o=React.useMemo(()=>an(n.search,r.current?null:t.current),[n.search]),s=Bt(),a=React.useCallback((i,c)=>{const u=Ve(typeof i=="function"?i(o):i);r.current=!0,s("?"+u,c)},[s,o]);return[o,a]}var ee={},un={get exports(){return ee},set exports(e){ee=e}},kt={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=Ke;function ln(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:ln,dn=k.useState,pn=k.useEffect,hn=k.useLayoutEffect,mn=k.useDebugValue;function yn(e,t){var r=t(),n=dn({inst:{value:r,getSnapshot:t}}),o=n[0].inst,s=n[1];return hn(function(){o.value=r,o.getSnapshot=t,Te(o)&&s({inst:o})},[e,r,t]),pn(function(){return Te(o)&&s({inst:o}),e(function(){Te(o)&&s({inst:o})})},[e]),mn(r),r}function Te(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!fn(e,r)}catch{return!0}}function vn(e,t){return t()}var gn=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vn:yn;kt.useSyncExternalStore=k.useSyncExternalStore!==void 0?k.useSyncExternalStore:gn;(function(e){e.exports=kt})(un);var Rt={},Rn={get exports(){return Rt},set exports(e){Rt=e}},Wt={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=Ke,Sn=ee;function bn(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:bn,Pn=Sn.useSyncExternalStore,En=se.useRef,wn=se.useEffect,Cn=se.useMemo,$n=se.useDebugValue;Wt.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var s=En(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Cn(function(){function c(S){if(!u){if(u=!0,l=S,S=n(S),o!==void 0&&a.hasValue){var g=a.value;if(o(g,S))return f=g}return f=S}if(g=f,xn(l,S))return g;var p=n(S);return o!==void 0&&o(g,p)?g:(l=S,f=p)}var u=!1,l,f,h=r===void 0?null:r;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,r,n,o]);var i=Pn(e,s[0],s[1]);return wn(function(){a.hasValue=!0,a.value=i},[i]),$n(i),i};(function(e){e.exports=Wt})(Rn);const On=ReactDOM.unstable_batchedUpdates;function _n(e){e()}let Dt=_n;const Mn=e=>Dt=e,Nn=()=>Dt,Vt=React.createContext(null),Ln=()=>{throw new Error("uSES not initialized!")};function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}function zt(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var ze={},jn={get exports(){return ze},set exports(e){ze=e}},y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=typeof Symbol=="function"&&Symbol.for,Qe=P?Symbol.for("react.element"):60103,Xe=P?Symbol.for("react.portal"):60106,ae=P?Symbol.for("react.fragment"):60107,ie=P?Symbol.for("react.strict_mode"):60108,ce=P?Symbol.for("react.profiler"):60114,ue=P?Symbol.for("react.provider"):60109,le=P?Symbol.for("react.context"):60110,Ze=P?Symbol.for("react.async_mode"):60111,fe=P?Symbol.for("react.concurrent_mode"):60111,de=P?Symbol.for("react.forward_ref"):60112,pe=P?Symbol.for("react.suspense"):60113,In=P?Symbol.for("react.suspense_list"):60120,he=P?Symbol.for("react.memo"):60115,me=P?Symbol.for("react.lazy"):60116,Tn=P?Symbol.for("react.block"):60121,Un=P?Symbol.for("react.fundamental"):60117,Fn=P?Symbol.for("react.responder"):60118,Bn=P?Symbol.for("react.scope"):60119;function C(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qe:switch(e=e.type,e){case Ze:case fe:case ae:case ce:case ie:case pe:return e;default:switch(e=e&&e.$$typeof,e){case le:case de:case me:case he:case ue:return e;default:return t}}case Xe:return t}}}function qt(e){return C(e)===fe}y.AsyncMode=Ze;y.ConcurrentMode=fe;y.ContextConsumer=le;y.ContextProvider=ue;y.Element=Qe;y.ForwardRef=de;y.Fragment=ae;y.Lazy=me;y.Memo=he;y.Portal=Xe;y.Profiler=ce;y.StrictMode=ie;y.Suspense=pe;y.isAsyncMode=function(e){return qt(e)||C(e)===Ze};y.isConcurrentMode=qt;y.isContextConsumer=function(e){return C(e)===le};y.isContextProvider=function(e){return C(e)===ue};y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qe};y.isForwardRef=function(e){return C(e)===de};y.isFragment=function(e){return C(e)===ae};y.isLazy=function(e){return C(e)===me};y.isMemo=function(e){return C(e)===he};y.isPortal=function(e){return C(e)===Xe};y.isProfiler=function(e){return C(e)===ce};y.isStrictMode=function(e){return C(e)===ie};y.isSuspense=function(e){return C(e)===pe};y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ae||e===fe||e===ce||e===ie||e===pe||e===In||typeof e=="object"&&e!==null&&(e.$$typeof===me||e.$$typeof===he||e.$$typeof===ue||e.$$typeof===le||e.$$typeof===de||e.$$typeof===Un||e.$$typeof===Fn||e.$$typeof===Bn||e.$$typeof===Tn)};y.typeOf=C;(function(e){e.exports=y})(jn);var et=ze,An={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tt={};tt[et.ForwardRef]=Wn;tt[et.Memo]=Jt;function St(e){return et.isMemo(e)?Jt:tt[e.$$typeof]||An}var Dn=Object.defineProperty,Vn=Object.getOwnPropertyNames,bt=Object.getOwnPropertySymbols,zn=Object.getOwnPropertyDescriptor,qn=Object.getPrototypeOf,xt=Object.prototype;function Kt(e,t,r){if(typeof t!="string"){if(xt){var n=qn(t);n&&n!==xt&&Kt(e,n,r)}var o=Vn(t);bt&&(o=o.concat(bt(t)));for(var s=St(e),a=St(t),i=0;i<o.length;++i){var c=o[i];if(!kn[c]&&!(r&&r[c])&&!(a&&a[c])&&!(s&&s[c])){var u=zn(t,c);try{Dn(e,c,u)}catch{}}}}return e}var Pt=Kt,qe={},Jn={get exports(){return qe},set exports(e){qe=e}},v={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=Symbol.for("react.element"),nt=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Re=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Kn=Symbol.for("react.server_context"),be=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Ee=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Hn=Symbol.for("react.offscreen"),Ht;Ht=Symbol.for("react.module.reference");function O(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rt:switch(e=e.type,e){case ye:case ge:case ve:case xe:case Pe:return e;default:switch(e=e&&e.$$typeof,e){case Kn:case Se:case be:case we:case Ee:case Re:return e;default:return t}}case nt:return t}}}v.ContextConsumer=Se;v.ContextProvider=Re;v.Element=rt;v.ForwardRef=be;v.Fragment=ye;v.Lazy=we;v.Memo=Ee;v.Portal=nt;v.Profiler=ge;v.StrictMode=ve;v.Suspense=xe;v.SuspenseList=Pe;v.isAsyncMode=function(){return!1};v.isConcurrentMode=function(){return!1};v.isContextConsumer=function(e){return O(e)===Se};v.isContextProvider=function(e){return O(e)===Re};v.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rt};v.isForwardRef=function(e){return O(e)===be};v.isFragment=function(e){return O(e)===ye};v.isLazy=function(e){return O(e)===we};v.isMemo=function(e){return O(e)===Ee};v.isPortal=function(e){return O(e)===nt};v.isProfiler=function(e){return O(e)===ge};v.isStrictMode=function(e){return O(e)===ve};v.isSuspense=function(e){return O(e)===xe};v.isSuspenseList=function(e){return O(e)===Pe};v.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ye||e===ge||e===ve||e===xe||e===Pe||e===Hn||typeof e=="object"&&e!==null&&(e.$$typeof===we||e.$$typeof===Ee||e.$$typeof===Re||e.$$typeof===Se||e.$$typeof===be||e.$$typeof===Ht||e.getModuleId!==void 0)};v.typeOf=O;(function(e){e.exports=v})(Jn);const Yn=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Gn(e,t,r,n,{areStatesEqual:o,areOwnPropsEqual:s,areStatePropsEqual:a}){let i=!1,c,u,l,f,h;function S(m,b){return c=m,u=b,l=e(c,u),f=t(n,u),h=r(l,f,u),i=!0,h}function g(){return l=e(c,u),t.dependsOnOwnProps&&(f=t(n,u)),h=r(l,f,u),h}function p(){return e.dependsOnOwnProps&&(l=e(c,u)),t.dependsOnOwnProps&&(f=t(n,u)),h=r(l,f,u),h}function d(){const m=e(c,u),b=!a(m,l);return l=m,b&&(h=r(l,f,u)),h}function R(m,b){const E=!s(b,u),Y=!o(m,c,b,u);return c=m,u=b,E&&Y?g():E?p():Y?d():h}return function(b,E){return i?R(b,E):S(b,E)}}function Qn(e,t){let{initMapStateToProps:r,initMapDispatchToProps:n,initMergeProps:o}=t,s=zt(t,Yn);const a=r(e,s),i=n(e,s),c=o(e,s);return Gn(a,i,c,e,s)}function Xn(e,t){const r={};for(const n in e){const o=e[n];typeof o=="function"&&(r[n]=(...s)=>t(o(...s)))}return r}function Je(e){return function(r){const n=e(r);function o(){return n}return o.dependsOnOwnProps=!1,o}}function Et(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:e.length!==1}function Yt(e,t){return function(n,{displayName:o}){const s=function(i,c){return s.dependsOnOwnProps?s.mapToProps(i,c):s.mapToProps(i,void 0)};return s.dependsOnOwnProps=!0,s.mapToProps=function(i,c){s.mapToProps=e,s.dependsOnOwnProps=Et(e);let u=s(i,c);return typeof u=="function"&&(s.mapToProps=u,s.dependsOnOwnProps=Et(u),u=s(i,c)),u},s}}function ot(e,t){return(r,n)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function Zn(e){return e&&typeof e=="object"?Je(t=>Xn(e,t)):e?typeof e=="function"?Yt(e):ot(e,"mapDispatchToProps"):Je(t=>({dispatch:t}))}function eo(e){return e?typeof e=="function"?Yt(e):ot(e,"mapStateToProps"):Je(()=>({}))}function to(e,t,r){return A({},r,e,t)}function ro(e){return function(r,{displayName:n,areMergedPropsEqual:o}){let s=!1,a;return function(c,u,l){const f=e(c,u,l);return s?o(f,a)||(a=f):(s=!0,a=f),a}}}function no(e){return e?typeof e=="function"?ro(e):ot(e,"mergeProps"):()=>to}function oo(){const e=Nn();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,s=r={callback:n,next:null,prev:r};return s.prev?s.prev.next=s:t=s,function(){!o||t===null||(o=!1,s.next?s.next.prev=s.prev:r=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const wt={notify(){},get:()=>[]};function Gt(e,t){let r,n=wt;function o(f){return c(),n.subscribe(f)}function s(){n.notify()}function a(){l.onStateChange&&l.onStateChange()}function i(){return!!r}function c(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=oo())}function u(){r&&(r(),r=void 0,n.clear(),n=wt)}const l={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:a,isSubscribed:i,trySubscribe:c,tryUnsubscribe:u,getListeners:()=>n};return l}const so=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",te=so?React.useLayoutEffect:React.useEffect;function Ct(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Ue(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Ct(e[r[o]],t[r[o]]))return!1;return!0}const ao=["reactReduxForwardedRef"];let Qt=Ln;const io=e=>{Qt=e},co=[null,null];function uo(e,t,r){te(()=>e(...t),r)}function lo(e,t,r,n,o,s){e.current=n,r.current=!1,o.current&&(o.current=null,s())}function fo(e,t,r,n,o,s,a,i,c,u,l){if(!e)return()=>{};let f=!1,h=null;const S=()=>{if(f||!i.current)return;const p=t.getState();let d,R;try{d=n(p,o.current)}catch(m){R=m,h=m}R||(h=null),d===s.current?a.current||u():(s.current=d,c.current=d,a.current=!0,l())};return r.onStateChange=S,r.trySubscribe(),S(),()=>{if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,h)throw h}}function po(e,t){return e===t}function ho(e,t,r,{pure:n,areStatesEqual:o=po,areOwnPropsEqual:s=Ue,areStatePropsEqual:a=Ue,areMergedPropsEqual:i=Ue,forwardRef:c=!1,context:u=Vt}={}){const l=u,f=eo(e),h=Zn(t),S=no(r),g=!!e;return d=>{const R=d.displayName||d.name||"Component",m=`Connect(${R})`,b={shouldHandleStateChanges:g,displayName:m,wrappedComponentName:R,WrappedComponent:d,initMapStateToProps:f,initMapDispatchToProps:h,initMergeProps:S,areStatesEqual:o,areStatePropsEqual:a,areOwnPropsEqual:s,areMergedPropsEqual:i};function E(M){const[N,Ce,I]=React.useMemo(()=>{const{reactReduxForwardedRef:_}=M,q=zt(M,ao);return[M.context,_,q]},[M]),W=React.useMemo(()=>N&&N.Consumer&&qe.isContextConsumer(React.createElement(N.Consumer,null))?N:l,[N,l]),L=React.useContext(W),D=!!M.store&&!!M.store.getState&&!!M.store.dispatch,Zt=!!L&&!!L.store,T=D?M.store:L.store,st=Zt?L.getServerState:T.getState,$e=React.useMemo(()=>Qn(T.dispatch,b),[T]),[V,at]=React.useMemo(()=>{if(!g)return co;const _=Gt(T,D?void 0:L.subscription),q=_.notifyNestedSubs.bind(_);return[_,q]},[T,D,L]),it=React.useMemo(()=>D?L:A({},L,{subscription:V}),[D,L,V]),Oe=React.useRef(),_e=React.useRef(I),z=React.useRef(),ct=React.useRef(!1);React.useRef(!1);const Me=React.useRef(!1),Ne=React.useRef();te(()=>(Me.current=!0,()=>{Me.current=!1}),[]);const ut=React.useMemo(()=>()=>z.current&&I===_e.current?z.current:$e(T.getState(),I),[T,I]),er=React.useMemo(()=>q=>V?fo(g,T,V,$e,_e,Oe,ct,Me,z,at,q):()=>{},[V]);uo(lo,[_e,Oe,ct,I,z,at]);let Q;try{Q=Qt(er,ut,st?()=>$e(st(),I):ut)}catch(_){throw Ne.current&&(_.message+=`
The error may be correlated with this previous error:
${Ne.current.stack}

`),_}te(()=>{Ne.current=void 0,z.current=void 0,Oe.current=Q});const Le=React.useMemo(()=>React.createElement(d,A({},Q,{ref:Ce})),[Ce,d,Q]);return React.useMemo(()=>g?React.createElement(W.Provider,{value:it},Le):Le,[W,Le,it])}const G=React.memo(E);if(G.WrappedComponent=d,G.displayName=E.displayName=m,c){const N=React.forwardRef(function(I,W){return React.createElement(G,A({},I,{reactReduxForwardedRef:W}))});return N.displayName=m,N.WrappedComponent=d,Pt(N,d)}return Pt(G,d)}}function mo({store:e,context:t,children:r,serverState:n}){const o=React.useMemo(()=>{const i=Gt(e);return{store:e,subscription:i,getServerState:n?()=>n:void 0}},[e,n]),s=React.useMemo(()=>e.getState(),[e]);te(()=>{const{subscription:i}=o;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),s!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[o,s]);const a=t||Vt;return React.createElement(a.Provider,{value:o},r)}io(ee.useSyncExternalStore);Mn(On);function $(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var $t=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Fe=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ot={INIT:"@@redux/INIT"+Fe(),REPLACE:"@@redux/REPLACE"+Fe(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Fe()}};function yo(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Xt(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error($(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error($(1));return r(Xt)(e,t)}if(typeof e!="function")throw new Error($(2));var o=e,s=t,a=[],i=a,c=!1;function u(){i===a&&(i=a.slice())}function l(){if(c)throw new Error($(3));return s}function f(p){if(typeof p!="function")throw new Error($(4));if(c)throw new Error($(5));var d=!0;return u(),i.push(p),function(){if(d){if(c)throw new Error($(6));d=!1,u();var m=i.indexOf(p);i.splice(m,1),a=null}}}function h(p){if(!yo(p))throw new Error($(7));if(typeof p.type>"u")throw new Error($(8));if(c)throw new Error($(9));try{c=!0,s=o(s,p)}finally{c=!1}for(var d=a=i,R=0;R<d.length;R++){var m=d[R];m()}return p}function S(p){if(typeof p!="function")throw new Error($(10));o=p,h({type:Ot.REPLACE})}function g(){var p,d=f;return p={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error($(11));function b(){m.next&&m.next(l())}b();var E=d(b);return{unsubscribe:E}}},p[$t]=function(){return this},p}return h({type:Ot.INIT}),n={dispatch:h,subscribe:f,getState:l,replaceReducer:S},n[$t]=g,n}var vo=Xt;const _t={add:(e,t)=>{const r={...e};return r.num+=t.value,r},setToken:(e,t)=>{const r={...e};return r.token=t.value,r},setJoinTime:(e,t)=>{const r={...e};return r.joinTime=t.value,r}},go=(e,t)=>_t[t.type]?_t[t.type](e,t):e;let Ro={token:sessionStorage.getItem("token")},So=vo(go,Ro);const bo="modulepreload",xo=function(e,t){return new URL(e,t).href},Mt={},Be=function(t,r,n){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(s=>{if(s=xo(s,n),s in Mt)return;Mt[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!n)for(let l=o.length-1;l>=0;l--){const f=o[l];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":bo,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((l,f)=>{u.addEventListener("load",l),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Po=[{path:"/",auth:!1,element:React.lazy(()=>Be(()=>import("./expenses-93750dd4.js"),[],import.meta.url))},{path:"/invoices",auth:!0,element:React.lazy(()=>Be(()=>import("./invoices-28089e2b.js"),[],import.meta.url))},{path:"/login",auth:!1,element:React.lazy(()=>Be(()=>import("./login-439d6329.js"),[],import.meta.url))}];function Eo({token:e}){const t=React.useMemo(()=>!!e,[e]);return j("div",{className:"App",children:j(on,{children:Po.map(r=>j(At,{path:r.path,element:!r.auth||r.auth&&t?j(r.element,{}):j(rn,{to:`/login?url=${r.path}`})},r.path))})})}const wo=(e,t)=>({token:e.token}),Co=(e,t)=>({add:()=>{e({type:"add",value:1})}}),$o=ho(wo,Co)(Eo);Ae.createRoot(document.getElementById("root")).render(j(React.StrictMode,{children:j(cn,{children:j(mo,{store:So,children:j($o,{})})})}));export{No as a,_o as b,ho as c,j,Bt as u};
