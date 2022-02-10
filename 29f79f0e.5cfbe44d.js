(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(154)),i={id:"install",title:"Install for TypeScript"},l={unversionedId:"install",id:"version-2.1.x/install",isDocsHomePage:!1,title:"Install for TypeScript",description:"The TypeScript version of RbxNet requires knowledge and usage of roblox-ts.",source:"@site/versioned_docs/version-2.1.x/install.md",slug:"/install",permalink:"/docs/2.1/install",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/versioned_docs/version-2.1.x/install.md",version:"2.1.x",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/2.1/"},next:{title:"Install for Luau",permalink:"/docs/2.1/install-luau"}},c=[{value:"Install via Node Package Manager (NPM)",id:"install-via-node-package-manager-npm",children:[]},{value:"Install from GitHub",id:"install-from-github",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The TypeScript version of RbxNet requires knowledge and usage of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://roblox-ts.com"}),"roblox-ts"),"."),Object(o.b)("h2",{id:"install-via-node-package-manager-npm"},"Install via Node Package Manager (NPM)"),Object(o.b)("p",null,"RbxNet is available on NPM. To install it to your roblox-ts project, type the following in command line/terminal"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @rbxts/net\n")),Object(o.b)("p",null,"Once you have the module installed, you can then use it in code by importing it as such:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import Net from "@rbxts/net";\n')),Object(o.b)("h2",{id:"install-from-github"},"Install from GitHub"),Object(o.b)("p",null,"This is the option to use if you're wanting to use the latest master build of rbx-net. It's recommended though you use the above NPM option."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install github:roblox-aurora/rbx-net\n")),Object(o.b)("p",null,"Once you have the module installed, you can then use it in code by importing it as such:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import Net from "@rbxts/net";\n')))}u.isMDXComponent=!0}}]);