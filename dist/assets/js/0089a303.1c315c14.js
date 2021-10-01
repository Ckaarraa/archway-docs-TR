"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[7031],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},p="Setup",s={unversionedId:"create/getting-started/setup",id:"create/getting-started/setup",isDocsHomePage:!1,title:"Setup",description:"A new Archway project is a Rust project that will compile to wasm using the wasmd binary, which is an implementation of a cosmos zone with wasm smart contracts enabled.",source:"@site/docs/create/getting-started/setup.md",sourceDirName:"create/getting-started",slug:"/create/getting-started/setup",permalink:"/docs/create/getting-started/setup",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/getting-started/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/create/getting-started/install"},next:{title:"Basics",permalink:"/docs/create/getting-started/basics"}},l=[{value:"Creating a project",id:"creating-a-project",children:[]},{value:"Configuring a project",id:"configuring-a-project",children:[]},{value:"Network settings and migrating between networks",id:"network-settings-and-migrating-between-networks",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"A new Archway project is a Rust project that will compile to ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," binary, which is an implementation of a cosmos zone with ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm")," smart contracts enabled."),(0,a.kt)("p",null,"Let's setup a new project, using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway-cli"},"Archway developer CLI")),(0,a.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"archway new")," command starts a new project. You can press ",(0,a.kt)("inlineCode",{parentName:"p"},"enter")," to accept the default options for any of the project configuration questions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"archway new\n\n# Outputs: \n# > Creating new Archway dApp...\n# > Configure environment (Y/N default: N)?:\n# > Use starter template (Y/N default: N)?:\n")),(0,a.kt)("h2",{id:"configuring-a-project"},"Configuring a project"),(0,a.kt)("p",null,"When you've created a new project, navigate to the folder where the project was installed and print your config using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"archway configure"),". "),(0,a.kt)("p",null,"If this configuration isn't to your liking, you can modify it by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file in the root folder of the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd my-project\narchway configure\n\n# Outputs:\n# > Printing environment settings...\n# > {\n# >   title: 'My Project',\n# >   version: '0.0.1',\n# >   network: {...},\n# >   developer: {...},\n# >   path: '/home/my-system-path/my-project',\n# >   type: 'Increment'\n# > } \n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),' parameter simply keeps track of which "starter template" you used during project creation.'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"network")," parameter refers to environment specific settings for the network you're working. Supported network types are ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"developer")," object contains a history of your deployments. It also holds default and custom scripts for Archway commands for building, testing, optimizing and deploying your project. While the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),' parameter gives you granular control over how your project is compiled and executed, at the same time it already "just works" and doesn\'t require tinkering.'),(0,a.kt)("h2",{id:"network-settings-and-migrating-between-networks"},"Network settings and migrating between networks"),(0,a.kt)("p",null,"During a project's development cycle you'll likely want to migrate or change your network settings. For example, switching from ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet")," deployment."),(0,a.kt)("p",null,"To which network you're currently working on use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"archway network"),". This will print your network settings and give you the option to migrate to another network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"archway network\n\n# Outputs:\n# > Printing network settings...\n# > 1. Testnet*\n# > 2. Localhost\n# > 3. Mainnet\n# > Migrate to another network (Y/N default: N)?:\n# > Ok!\n")),(0,a.kt)("p",null,"If you migrate between networks by answering ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yes")," to the migration question and following the additional questions, your previous deployments history and script customisations will remain in tact."))}d.isMDXComponent=!0}}]);