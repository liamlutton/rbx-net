(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,p=f["".concat(o,".").concat(b)]||f[b]||d[b]||i;return n?a.a.createElement(p,c(c({ref:t},s),{},{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},155:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},156:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(158),o=n(155),c=n(56),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,d=e.groupId,b=e.className,p=Object(i.a)(),m=p.tabGroupChoices,v=p.setTabGroupChoices,g=Object(r.useState)(c),h=g[0],y=g[1],O=r.Children.toArray(e.children);if(null!=d){var j=m[d];null!=j&&j!==h&&f.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=d&&v(d,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},157:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},158:function(e,t,n){"use strict";var r=n(0),a=n(159);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},159:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n(0),a=n.n(r),i=n(156),o=n(157),c="ts",l="code",s=[{label:"roblox-ts",value:"ts"},{label:"luau",value:"luau"}];t.d=function(e){var t=e.children,n=t[0],r=t[1];return console.log(n,r),a.a.createElement(i.a,{defaultValue:c,groupId:l,values:s},a.a.createElement(o.a,{value:"ts"},n),a.a.createElement(o.a,{value:"luau"},r))}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return f})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(154)),o=n(160),c=n(156),l=n(157),s={id:"overview",title:"Getting started",sidebar_label:"Getting started",slug:"/definitions"},u={unversionedId:"definitions/overview",id:"version-2.1.x/definitions/overview",isDocsHomePage:!1,title:"Getting started",description:"\x3c!-- Below is an example of a traditional sort of structure a roblox game might have with remotes",source:"@site/versioned_docs/version-2.1.x/definitions/00-overview.md",slug:"/definitions",permalink:"/docs/2.1/definitions",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/versioned_docs/version-2.1.x/definitions/00-overview.md",version:"2.1.x",sidebar_label:"Getting started",sidebar:"docs",previous:{title:"Install for Luau",permalink:"/docs/2.1/install-luau"},next:{title:"Creating a definition",permalink:"/docs/2.1/definitions/starting"}},f=[{value:"What are definitions?",id:"what-are-definitions",children:[]},{value:"Creating a definition script",id:"creating-a-definition-script",children:[]}],d={toc:f};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-are-definitions"},"What are definitions?"),Object(i.b)("p",null,'Definitions are a sort of "blueprint" for all the networking related objects in your game or library.'),Object(i.b)("p",null,"It's a single source of truth in which all the code in your game can access remotes through, to handle your game or library's networking."),Object(i.b)("h2",{id:"creating-a-definition-script"},"Creating a definition script"),Object(i.b)("p",null,"To use definitions, you will need to create a script that is somewhere in ",Object(i.b)("inlineCode",{parentName:"p"},"ReplicatedStorage")," (or inside the library itself if you're doing it for a library). It needs to be accessible by both server scripts and client scripts."),Object(i.b)("p",null,"The basic declaration of a definition script, is the following:"),Object(i.b)(c.a,{defaultValue:o.a,groupId:o.b,values:o.c,mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="shared/remotes.ts"',title:'"shared/remotes.ts"'}),'import Net from "@rbxts/net";\n\nconst Remotes = Net.Definitions.Create({\n    // Definitions for the actual remotes will go here\n});\n\nexport = Remotes;\n'))),Object(i.b)(l.a,{value:"luau",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua",metastring:'title="src/shared/remotes.lua"',title:'"src/shared/remotes.lua"'}),"local Net = require(ReplicatedStorage.Net)\n\nlocal Remotes = Net.Definitions.Create({\n    -- Definitions for the actual remotes will go here\n})\n\nreturn Remotes\n")))),Object(i.b)("p",null,"Then simply, you can import the module from your code, and use the definitions API to get the remotes"))}b.isMDXComponent=!0}}]);