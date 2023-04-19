"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[6801],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_label:"Introduction",sidebar_position:1,title:"Introduction"},a=void 0,l={unversionedId:"guides/guides-intro",id:"guides/guides-intro",title:"Introduction",description:"Following guides will showcase how to bring multiple platform features to React Native application, from querying basic application information, through simple UI elements and interactions with the device, ending with complex layouts.",source:"@site/docs/guides/guides-intro.mdx",sourceDirName:"guides",slug:"/guides/guides-intro",permalink:"/rnbridgingtutorial/docs/guides/guides-intro",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/docs/docs/guides/guides-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/rnbridgingtutorial/docs/getting-started"},next:{title:"Intro",permalink:"/rnbridgingtutorial/docs/guides/app-info-module/intro"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Following guides will showcase how to bring multiple platform features to React Native application, from querying basic application information, through simple UI elements and interactions with the device, ending with complex layouts."),(0,i.kt)("p",null,"Each guide is written in a way, that lets you consume them separately, without knowledge from the previous one, so you can just jump to any that you're interested in."),(0,i.kt)("p",null,"However, if you're total beginner in that topic, it's recommended to go in an order these are listed."),(0,i.kt)("p",null,'For more reference on how to "translate" features like methods, events, view props, etc. defined in JS code to the platform-specific code, visit ',(0,i.kt)("a",{parentName:"p",href:"../module-reference/module-intro"},"module's reference")," and ",(0,i.kt)("a",{parentName:"p",href:"../view-reference/view-intro"},"view's reference")," sections."),(0,i.kt)("p",null,"Available guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"./app-info-module/intro"},"app info module")," - a simple module with synchronous methods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"./conic-gradient-view/intro"},"conic gradient view")," - extended ",(0,i.kt)("inlineCode",{parentName:"p"},"<View />")," with custom gradient background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"./save-file-picker-module/intro"},"save file picker module")," - a module that calls platform APIs and returns response via callback or promise method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"./range-slider-view/intro"},"range slider view")," - a custom native component that wraps 3rd party native library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"./screen-orientation-module/intro"},"screen orientation module")," - a simple module that emits events based on data from platform APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[AVAILABLE SOON]"," native list view - Android's Fragment & iOS UIViewController integration"))),(0,i.kt)("p",null,"If you have any idea on additional guides, share it on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mateusz1913/rnbridgingtutorial/discussions"},"Bridging Tutorial's Github"),"."))}d.isMDXComponent=!0}}]);