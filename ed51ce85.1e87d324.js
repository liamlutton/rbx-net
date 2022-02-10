(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return f}));var i=t(3),r=t(7),a=(t(0),t(154)),o=t(160),s=t(156),l=t(157),c={id:"starting",title:"Creating a definition",sidebar_label:"Creating definitions",slug:"/definitions/starting"},u={unversionedId:"definitions/starting",id:"definitions/starting",isDocsHomePage:!1,title:"Creating a definition",description:"In RbxNet, there are three categories of remote objects:",source:"@site/docs/definitions/01-starting.md",slug:"/definitions/starting",permalink:"/docs/3.0/definitions/starting",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/docs/definitions/01-starting.md",version:"current",sidebar_label:"Creating definitions",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/3.0/definitions"},next:{title:"Using your definitions",permalink:"/docs/3.0/definitions/using"}},b=[{value:"Defining Events &amp; Functions",id:"defining-events--functions",children:[{value:"The different types of definitions",id:"the-different-types-of-definitions",children:[]},{value:"Defining remotes",id:"defining-remotes",children:[]}]}],d={toc:b};function f(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In RbxNet, there are three categories of remote objects:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Event")," - This is analogous to a ",Object(a.b)("inlineCode",{parentName:"li"},"RemoteEvent"),". This is what is used if you want to send an event (like an action) to the server or a player."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AsyncFunction")," - This is ",Object(a.b)("em",{parentName:"li"},"like")," a ",Object(a.b)("inlineCode",{parentName:"li"},"RemoteFunction"),", but uses ",Object(a.b)("inlineCode",{parentName:"li"},"RemoteEvent")," internally. The difference with this and ",Object(a.b)("inlineCode",{parentName:"li"},"Function")," is that ",Object(a.b)("inlineCode",{parentName:"li"},"AsyncFunction")," ",Object(a.b)("em",{parentName:"li"},"will")," handle time outs and runs completely asynchronously. (meaning it wont yield code) If there is no response from the reciever, it will reject."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Function")," - This is analogous to a ",Object(a.b)("inlineCode",{parentName:"li"},"RemoteFunction"),". However unlike a regular ",Object(a.b)("inlineCode",{parentName:"li"},"RemoteFunction")," this does not allow you to call a client. This is for security reasons discussed ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/roblox-aurora/rbx-net/issues/13"}),"here"))),Object(a.b)("h2",{id:"defining-events--functions"},"Defining Events & Functions"),Object(a.b)("p",null,"Given the above knowledge, we can then apply that to our remote definition script. There are the following functions under ",Object(a.b)("inlineCode",{parentName:"p"},"Net.Definitions")," for creating definitions for the three categories we have above. The API for each type of definition is explicit so it is easy to understand what each defined remote does."),Object(a.b)("h3",{id:"the-different-types-of-definitions"},"The different types of definitions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Event"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Net.Definitions.ServerToClientEvent"))," - Defines an event in which the server sends an event to one or many clients"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Net.Definitions.ClientToServerEvent"))," - Defines an event in which the client send events to the server"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Net.Definitions.BidirectionalEvent"))," - Defines an event in which both the server can send an event to one or many clients, and also the clients can send events to the server. ",Object(a.b)("em",{parentName:"li"},"This should only be used in cases where it's required"),"."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"AsyncFunction"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Net.Definitions.ServerAsyncFunction"))," - Defines an async function which exists on the server, and can be called by clients. The returned result will be recieved on the client as a promise."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Net.Definitions.ClientAsyncFunction"))," - Defines an async function which exists on the client, and can be called by the server. The returned result will be recieved on the server as a promise. "))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Function"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Net.Definitions.ServerFunction"))," - Defines a synchronous function which exists on the server, and can be called by clients"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Broadcast"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Net.Definitions.ExperienceBroadcastEvent"))," - Defines an event that the server can use to communicate with other servers in the same experience")))),Object(a.b)("h3",{id:"defining-remotes"},"Defining remotes"),Object(a.b)("p",null,"With the above knowledge, we can create a few example definitions. Say I would like a use case like the following"),Object(a.b)("p",null,Object(a.b)("img",{src:t(180).default})),Object(a.b)(s.a,{defaultValue:o.a,groupId:o.b,values:o.c,mdxType:"Tabs"},Object(a.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="shared/remotes.ts"',title:'"shared/remotes.ts"'}),'import Net, { Definitions } from "@rbxts/net";\n\nconst Remotes = Net.CreateDefinitions({\n    GetPlayerInventory: Definitions.ServerAsyncFunction<() => SerializedPlayerInventory>(),\n    GetPlayerEquipped: Definitions.ServerAsyncFunction<() => SerializedPlayerEquipped>(),\n\n    PlayerInventoryUpdated: Definitions.ServerToClientEvent<[event: InventoryUpdatedEvent]>(),\n    PlayerEquippedUpdated: Definitions.ServerToClientEvent<[event: EquippedUpdatedEvent]>(),\n\n    PlayerUnequipItem: Definitions.ClientToServerEvent<[itemId: number]>(),\n    PlayerEquipItem: Definitions.ClientToServerEvent<[itemId: number]>(),\n});\n\nexport = Remotes;\n'))),Object(a.b)(l.a,{value:"luau",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua",metastring:'title="src/shared/remotes.lua"',title:'"src/shared/remotes.lua"'}),"local Net = require(ReplicatedStorage.Net)\n\nlocal Remotes = Net.CreateDefinitions({\n    GetPlayerInventory = Net.Definitions.ServerFunction(),\n    GetPlayerEquipped = Net.Definitions.ServerFunction(),\n\n    PlayerInventoryUpdated = Net.Definitions.ServerToClientEvent(),\n    PlayerEquippedUpdated = Net.Definitions.ServerToClientEvent(),\n\n    PlayerUnequipItem = Net.Definitions.ClientToServerEvent(),\n    PlayerEquipItem = Net.Definitions.ClientToServerEvent(),\n})\n\nreturn Remotes\n")))),Object(a.b)("p",null,"Straight away you can see it's quite easy to know what remote does what."))}f.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return p}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(t),f=i,p=b["".concat(o,".").concat(f)]||b[f]||d[f]||a;return t?r.a.createElement(p,s(s({ref:n},c),{},{components:t})):r.a.createElement(p,s({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},155:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},156:function(e,n,t){"use strict";var i=t(0),r=t.n(i),a=t(158),o=t(155),s=t(56),l=t.n(s),c=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,b=e.values,d=e.groupId,f=e.className,p=Object(a.a)(),m=p.tabGroupChoices,v=p.setTabGroupChoices,y=Object(i.useState)(s),j=y[0],O=y[1],h=i.Children.toArray(e.children);if(null!=d){var g=m[d];null!=g&&g!==j&&b.some((function(e){return e.value===g}))&&O(g)}var N=function(e){O(e),null!=d&&v(d,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},f)},b.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(i.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(i.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},157:function(e,n,t){"use strict";var i=t(3),r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:t,className:r}),n)}},158:function(e,n,t){"use strict";var i=t(0),r=t(159);n.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},159:function(e,n,t){"use strict";var i=t(0),r=Object(i.createContext)(void 0);n.a=r},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return c}));var i=t(0),r=t.n(i),a=t(156),o=t(157),s="ts",l="code",c=[{label:"roblox-ts",value:"ts"},{label:"luau",value:"luau"}];n.d=function(e){var n=e.children,t=n[0],i=n[1];return console.log(t,i),r.a.createElement(a.a,{defaultValue:s,groupId:l,values:c},r.a.createElement(o.a,{value:"ts"},t),r.a.createElement(o.a,{value:"luau"},i))}},180:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"}}]);