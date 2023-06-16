"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[6791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(v,o(o({ref:t},u),{},{components:n})):i.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9384:(e,t,n)=>{n.d(t,{ZP:()=>p});var i=n(7462),r=(n(7294),n(3905));const a=n.p+"assets/medias/native-list-android-result-77376a26df2eea2d90a01546cd7fcfa8.mp4",o=n.p+"assets/medias/native-list-ios-result-d7d7cf7ee4ff6f42d7c8cd2a24686d2c.mp4",l={toc:[]},s="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{display:"flex",flexDirection:"column",alignSelf:"stretch",margin:20}},(0,r.kt)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}},(0,r.kt)("video",{width:"40%",style:{display:"flex"},controls:!0},(0,r.kt)("source",{src:o,type:"video/mp4"})),(0,r.kt)("video",{width:"40%",style:{display:"flex"},controls:!0},(0,r.kt)("source",{src:a,type:"video/mp4"})))))}p.isMDXComponent=!0},4741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905)),a=n(9384);const o={sidebar_label:"Intro",sidebar_position:1,title:"Intro"},l=void 0,s={unversionedId:"guides/native-list-view/intro",id:"guides/native-list-view/intro",title:"Intro",description:"TLDRsmile:",source:"@site/docs/guides/native-list-view/intro.mdx",sourceDirName:"guides/native-list-view",slug:"/guides/native-list-view/intro",permalink:"/rnbridgingtutorial/docs/guides/native-list-view/intro",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/docs/docs/guides/native-list-view/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Intro",sidebar_position:1,title:"Intro"},sidebar:"tutorialSidebar",previous:{title:"Usage in practice",permalink:"/rnbridgingtutorial/docs/guides/screen-orientation-module/usage"},next:{title:"View boilerplate",permalink:"/rnbridgingtutorial/docs/guides/native-list-view/setup"}},p={},u=[{value:"Difficulty",id:"difficulty",level:3},{value:"Task",id:"task",level:3},{value:"Developer notes",id:"developer-notes",level:4},{value:"What&#39;s the plan?",id:"whats-the-plan",level:3},{value:"Result?",id:"result",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"TLDR"),": This guide illustrates very rare case (probably less than 1% chance) so treat as a fun fact and skip it, if you want \ud83d\ude04")),(0,r.kt)("p",null,"You might encounter a situation where your RN app needs to display some native component or layout that is hard to be embedded inside a simple view container.\nThis can happen when the component/layout is complex or has some lifecycle logic, that is hard to be handled in a native view.\nNative Android & iOS developers use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/fragments"},"Fragments")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/view_controllers"},"View Controllers")," respectively, to encapsulate those complex parts of UI and share them in the codebase if needed."),(0,r.kt)("p",null,"Instead of going with very simple layout (e.g. single label and button), we will focus on real use case, which actually is hard to be embedded in a view - native list layouts (",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/develop/ui/views/layout/recyclerview"},"RecyclerView")," & ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uicollectionview/"},"UICollectionView"),").\nThus, the steps in this guide will mostly focus on the native side of things. ",(0,r.kt)("strong",{parentName:"p"},"If you feel that you have to little knowledge about native development, it's fine, you can treat this guide as a fun fact and skip it"),".\nThe integration of such layouts in a RN app is a very rare case, which you'll probably never experience (unless you do some brownfield development)."),(0,r.kt)("h3",{id:"difficulty"},"Difficulty"),(0,r.kt)("p",null,"Probably the most complex here \ud83e\udd2f"),(0,r.kt)("h3",{id:"task"},"Task"),(0,r.kt)("p",null,"As a user, I want to see a list of elements."),(0,r.kt)("h4",{id:"developer-notes"},"Developer notes"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Let's make an assumption, that the RN app you develop is a successor to old native apps.\nHowever the complex list layouts from old apps were quite well encapsulated and you need to make them pixel perfect the same in the new app as in the old apps.\nSo instead of reimplementing everything, you have an idea to reuse the code from the old native apps.")),(0,r.kt)("h3",{id:"whats-the-plan"},"What's the plan?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create view's boilerplate"),(0,r.kt)("li",{parentName:"ul"},"creating JS spec"),(0,r.kt)("li",{parentName:"ul"},"iOS implementation "),(0,r.kt)("li",{parentName:"ul"},"Android implementation"),(0,r.kt)("li",{parentName:"ul"},"using the view in action")),(0,r.kt)("h3",{id:"result"},"Result?"),(0,r.kt)(a.ZP,{mdxType:"Result"}),(0,r.kt)("p",null,"Can't wait? Let's set up ",(0,r.kt)("a",{parentName:"p",href:"./setup"},"view boilerplate"),"."))}m.isMDXComponent=!0}}]);