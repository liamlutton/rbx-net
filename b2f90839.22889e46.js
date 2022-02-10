(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),o=(n(0),n(154)),a=n(169),c=n(163),u={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"<ThemedImage",source:"@site/docs/doc1.md",slug:"/",permalink:"/docs/3.0/",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/docs/doc1.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Install for TypeScript",permalink:"/docs/3.0/install"}},l=[{value:"Features",id:"features",children:[]}],b={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{align:"center"},Object(o.b)(a.a,{alt:"Net Logo",sources:{light:Object(c.a)("img/net2.svg"),dark:Object(c.a)("img/net2-light.svg")},mdxType:"ThemedImage"})),Object(o.b)("div",{align:"center"},Object(o.b)("h1",null,"Roblox Networking (RbxNet) v2.2"),Object(o.b)("a",{href:"https://www.npmjs.com/package/@rbxts/net"})),Object(o.b)("p",null,"RbxNet is a ",Object(o.b)("em",{parentName:"p"},"networking library")," for Roblox, built in TypeScript. It simplifies the creation and management of networking in Roblox."),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Creation and usage of remotes through "identifiers". Management of the remotes themselves are done by Net itself.'),Object(o.b)("li",{parentName:"ul"},"More explicit, contextual APIs. ",Object(o.b)("inlineCode",{parentName:"li"},"Net.Server")," for server-based API, and ",Object(o.b)("inlineCode",{parentName:"li"},"Net.Client")," for client-based API."),Object(o.b)("li",{parentName:"ul"},"Ability for remote definitions through ",Object(o.b)("inlineCode",{parentName:"li"},"Net.Definitions"),". Remotes done through this API are auto-generated."),Object(o.b)("li",{parentName:"ul"},"Asynchronous functions - ",Object(o.b)("inlineCode",{parentName:"li"},"Net.*.AsyncFunction"),". No more pitfalls of regular remote functions."),Object(o.b)("li",{parentName:"ul"},"Asynchronous callbacks and methods: because it's a roblox-ts library, it supports promises."),Object(o.b)("li",{parentName:"ul"},"Middleware - Ability to add your own custom behaviours to remotes. Net comes with a runtime type checker, and a rate limiter middleware."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Net.*.GameMessagingEvent")," - interact with ",Object(o.b)("inlineCode",{parentName:"li"},"MessagingService")," like you would with regular remote events. Cross-server communication with the simple API. All the limitations are handled by Net.")))}d.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,m=b["".concat(a,".").concat(f)]||b[f]||d[f]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},155:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(21),i=n(165);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},164:function(e,t,n){"use strict";var r=n(0),i=n(168);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},165:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},168:function(e,t,n){"use strict";var r=n(0),i=n.n(r).a.createContext(void 0);t.a=i},169:function(e,t,n){"use strict";var r=n(3),i=n(7),o=n(0),a=n.n(o),c=n(155),u=n(21),s=n(164),l=n(57),b=n.n(l);t.a=function(e){var t=Object(u.default)().isClient,n=Object(s.a)().isDarkTheme,o=e.sources,l=e.className,d=e.alt,f=void 0===d?"":d,m=Object(i.a)(e,["sources","className","alt"]),p=t?n?["dark"]:["light"]:["light","dark"];return a.a.createElement(a.a.Fragment,null,p.map((function(e){return a.a.createElement("img",Object(r.a)({key:e,src:o[e],alt:f,className:Object(c.a)(b.a.themedImage,b.a["themedImage--"+e],l)},m))})))}}}]);