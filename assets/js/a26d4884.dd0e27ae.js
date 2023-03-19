"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[8551],{5162:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},a)}},4866:(e,a,n)=>{n.d(a,{Z:()=>C});var t=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),c=n(1980),s=n(7392),d=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:o}}=e;return{value:a,label:n,attributes:t,default:o}}))}function u(e){const{values:a,children:n}=e;return(0,o.useMemo)((()=>{const e=a??p(n);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:n}=e;const t=(0,l.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,s]=k({queryString:n,groupId:t}),[p,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,d.Nk)(n);return[t,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),f=(()=>{const e=c??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,r]),tabValues:r}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),u=e=>{const a=e.currentTarget,n=d.indexOf(a),t=s[n].value;t!==l&&(p(a),c(t))},m=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a)},s.map((e=>{let{value:a,label:n,attributes:i}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===a})}),n??a)})))}function h(e){let{lazy:a,children:n,selectedValue:t}=e;if(n=Array.isArray(n)?n:[n],a){const e=n.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function N(e){const a=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(v,(0,t.Z)({},e,a)),o.createElement(h,(0,t.Z)({},e,a)))}function C(e){const a=(0,f.Z)();return o.createElement(N,(0,t.Z)({key:String(a)},e))}},6892:(e,a,n)=>{n.d(a,{ZP:()=>c});var t=n(7462),o=(n(7294),n(3905)),r=n(814);const i={toc:[]},l="wrapper";function c(e){let{components:a,...n}=e;return(0,o.kt)(l,(0,t.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To make the codegen working on Android, the instance of ",(0,o.kt)("code",null,"TurboReactPackage")," needs to be found by the React Native CLI. So let's fill the minimal boilerplate to make it possible to link the package."),(0,o.kt)(r.Z,{language:n.language,title:`android/src/main/java/com/${n.namespace}/${n.packageClass}.${"java"===n.language?"java":"kt"}`,mdxType:"CodeBlock"},"java"===n.language?`package com.${n.namespace};\n\nimport androidx.annotation.Nullable;\n\nimport com.facebook.react.TurboReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.annotations.ReactModule;\nimport com.facebook.react.module.model.ReactModuleInfo;\nimport com.facebook.react.module.model.ReactModuleInfoProvider;\nimport com.facebook.react.turbomodule.core.interfaces.TurboModule;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class ${n.packageClass} extends TurboReactPackage {\n    /**\n     * Initialize and export modules based on the name of the required module\n     */\n    @Override\n    @Nullable\n    public NativeModule getModule(String name, ReactApplicationContext reactContext) {\n        return null;\n    }\n\n    /**\n     * Declare info about exported modules\n     */\n    @Override\n    public ReactModuleInfoProvider getReactModuleInfoProvider() {\n        /**\n         * Here declare the array of exported modules\n         */\n        Class<? extends NativeModule>[] moduleList = new Class[] {\n        };\n        final Map<String, ReactModuleInfo> reactModuleInfoMap = new HashMap<>();\n        /**\n         * And here just iterate on that array and produce the info provider instance\n         */\n        for (Class<? extends NativeModule> moduleClass : moduleList) {\n            ReactModule reactModule = moduleClass.getAnnotation(ReactModule.class);\n\n            reactModuleInfoMap.put(\n                reactModule.name(),\n                new ReactModuleInfo(\n                    reactModule.name(),\n                    moduleClass.getName(),\n                    true,\n                    reactModule.needsEagerInit(),\n                    reactModule.hasConstants(),\n                    reactModule.isCxxModule(),\n                    TurboModule.class.isAssignableFrom(moduleClass)\n                )\n            );\n        }\n\n        return new ReactModuleInfoProvider() {\n            @Override\n            public Map<String, ReactModuleInfo> getReactModuleInfos() {\n                return reactModuleInfoMap;\n            }\n        };\n    }\n}`:`package com.${n.namespace}\n\nimport com.facebook.react.TurboReactPackage\nimport com.facebook.react.bridge.NativeModule\nimport com.facebook.react.bridge.ReactApplicationContext\nimport com.facebook.react.module.annotations.ReactModule\nimport com.facebook.react.module.model.ReactModuleInfo\nimport com.facebook.react.module.model.ReactModuleInfoProvider\nimport com.facebook.react.turbomodule.core.interfaces.TurboModule\n\nclass ${n.packageClass} : TurboReactPackage() {\n    /**\n     * Initialize and export modules based on the name of the required module\n     */\n    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {\n        return null\n    }\n\n    /**\n     * Declare info about exported modules\n     */\n    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {\n        /**\n         * Here declare the array of exported modules\n         */\n        val moduleList: Array<Class<out NativeModule?>> = arrayOf(\n        )\n        val reactModuleInfoMap: MutableMap<String, ReactModuleInfo> = HashMap()\n        /**\n         * And here just iterate on that array and produce the info provider instance\n         */\n        for (moduleClass in moduleList) {\n            val reactModule = moduleClass.getAnnotation(ReactModule::class.java) ?: continue\n            reactModuleInfoMap[reactModule.name] =\n                ReactModuleInfo(\n                    reactModule.name,\n                    moduleClass.name,\n                    true,\n                    reactModule.needsEagerInit,\n                    reactModule.hasConstants,\n                    reactModule.isCxxModule,\n                    TurboModule::class.java.isAssignableFrom(moduleClass)\n                )\n        }\n        return ReactModuleInfoProvider { reactModuleInfoMap }\n    }\n}`))}c.isMDXComponent=!0},359:(e,a,n)=>{n.d(a,{ZP:()=>c});var t=n(7462),o=(n(7294),n(3905)),r=n(814);const i={toc:[{value:"<code>react-native.config.js</code>",id:"react-nativeconfigjs",level:4},{value:"<code>babel.config.js</code>",id:"babelconfigjs",level:4},{value:"<code>tsconfig.json</code>",id:"tsconfigjson",level:4},{value:"iOS Pods installation",id:"ios-pods-installation",level:4}]},l="wrapper";function c(e){let{components:a,...n}=e;return(0,o.kt)(l,(0,t.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To link the package without adding it to node_modules, we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native.config.js")),(0,o.kt)("h4",{id:"react-nativeconfigjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"react-native.config.js")),(0,o.kt)("span",null,"Go to ",(0,o.kt)("code",null,"react-native.config.js")," (create it, if needed) inside root directory of your app and add ",(0,o.kt)("code",null,n.package)," under ",(0,o.kt)("code",null,"dependencies")," property: ",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)(r.Z,{language:"js",title:"react-native.config.js",mdxType:"CodeBlock"},`const path = require('path');\n\nmodule.exports = {\n  dependencies: {\n    '${n.package}': { // <--------- Add entry for "${n.package}"\n      root: path.resolve(__dirname, './${n.package}'),\n    },\n  },\n};`),(0,o.kt)("h4",{id:"babelconfigjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"babel.config.js")),(0,o.kt)("span",null,"Go to ",(0,o.kt)("code",null,"babel.config.js")," and add ",(0,o.kt)("code",null,n.package)," under ",(0,o.kt)("code",null,"alias")," property of ",(0,o.kt)("code",null,"babel-plugin-module-resolver"),": ",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)(r.Z,{language:"diff",title:"babel.config.js",mdxType:"CodeBlock"},`module.exports = {\n  presets: [ 'module:metro-react-native-babel-preset' ],\n  plugins: [\n    [\n      'module-resolver',\n      {\n        root: [ './' ],\n        extensions: [\n          '.ios.js',\n          '.ios.ts',\n          '.ios.tsx',\n          '.android.js',\n          '.android.ts',\n          '.android.tsx',\n          '.js',\n          '.ts',\n          '.tsx',\n          '.json',\n        ],\n+       alias: {\n+         '${n.package}': './${n.package}'\n+       }\n      },\n    ],\n  ],\n};`),(0,o.kt)("h4",{id:"tsconfigjson"},(0,o.kt)("inlineCode",{parentName:"h4"},"tsconfig.json")),(0,o.kt)("span",null,"Go to ",(0,o.kt)("code",null,"tsconfig.json")," and add ",(0,o.kt)("code",null,"app-info-package")," under ",(0,o.kt)("code",null,"compilerOptions.paths")," field:",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)(r.Z,{language:"diff",title:"tsconfig.json",mdxType:"CodeBlock"},`{\n  "extends": "@tsconfig/react-native/tsconfig.json",     /* Recommended React Native TSConfig base */\n  "compilerOptions": {\n    /* Visit https://aka.ms/tsconfig.json to read more about this file */\n\n    /* Completeness */\n    "skipLibCheck": true,                                /* Skip type checking all .d.ts files. */\n+   "paths": {\n+     "${n.package}": ["./${n.package}"],\n+   }\n  }\n}`),(0,o.kt)("h4",{id:"ios-pods-installation"},"[iOS]"," Pods installation"),(0,o.kt)("p",null,"Install Pods to link them to iOS project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx pod-install\n")))}c.isMDXComponent=!0},1060:(e,a,n)=>{n.d(a,{ZP:()=>d});var t=n(7462),o=(n(7294),n(3905)),r=n(814),i=n(4866),l=n(5162);const c={toc:[{value:"<code>package.json</code>",id:"packagejson",level:5},{value:"<code>build.gradle</code>",id:"buildgradle",level:5}]},s="wrapper";function d(e){let{components:a,...n}=e;return(0,o.kt)(s,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h5",{id:"packagejson"},(0,o.kt)("inlineCode",{parentName:"h5"},"package.json")),(0,o.kt)("p",null,"Let's start with creating ",(0,o.kt)("code",null,n.packageName)," directory containing package's code."),(0,o.kt)("p",null,"Inside that directory, let's create ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," with the following content:"),(0,o.kt)(r.Z,{language:"json",title:"package.json",mdxType:"CodeBlock"},`{\n  "private": true,\n  "name": "${n.packageName}",\n  "version": "0.0.1",\n  "description": "My awesome package",\n  "react-native": "src",\n  "source": "src",\n  "main": "src",\n  "module": "src",\n  "files": [\n    "src",\n    "android",\n    "ios",\n    "${n.packageNameUpperCamelCase}.podspec",\n    "!android/build",\n    "!ios/build",\n    "!**/__tests__",\n    "!**/__fixtures__",\n    "!**/__mocks__"\n  ],\n  "repository": "<repository-url>",\n  "author": "<author>",\n  "license": "MIT",\n  "homepage": "<homepage-url>",\n  "peerDependencies": {\n    "react": "*",\n    "react-native": "*"\n  },\n  "codegenConfig": {\n    "name": "${n.packageNameUpperCamelCase}",\n    "type": "all",\n    "jsSrcsDir": "src",\n    "android": {\n      "javaPackageName": "com.${n.packageNameLowercase}"\n    }\n  }\n}`),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"codegenConfig"),", you can check out RN's ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/new-architecture-library-intro#configure-codegen"},"Configure Codegen")," docs section."),(0,o.kt)("p",null,"In this case, we want to code-generate the package with name ",(0,o.kt)("code",null,n.packageNameUpperCamelCase)," with JS specs in ",(0,o.kt)("code",null,"src")," directory and ",(0,o.kt)("code",null,"com.",n.packageNameLowercase)," Android package name."),(0,o.kt)("h5",null,(0,o.kt)("code",null,n.packageNameUpperCamelCase,".podspec")),(0,o.kt)("p",null,"Next, let's create ",(0,o.kt)("code",null,n.packageNameUpperCamelCase,".podspec"),', the "equivalent" of ',(0,o.kt)("code",null,"package.json"),", but for CocoaPods packages:"),(0,o.kt)(r.Z,{language:"ruby",title:`${n.packageNameUpperCamelCase}.podspec`,mdxType:"CodeBlock"},`# \`.podspec\` file is like "\`package.json\`" for iOS CocoaPods packages\n\nrequire "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\n# Detect if new arch is enabled\nnew_arch_enabled = ENV['RCT_NEW_ARCH_ENABLED'] == '1'\n\nPod::Spec.new do |s|\n  s.name            = "${n.packageNameUpperCamelCase}"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "13.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  # This is crucial - declare which files will be included in the package (similar to "files" field in \`package.json\`)\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n\n  if new_arch_enabled\n    s.pod_target_xcconfig = {\n      "DEFINES_MODULE" => "YES",\n      "SWIFT_OBJC_INTERFACE_HEADER_NAME" => "${n.packageNameUpperCamelCase}-Swift.h",\n      # This is handy when we want to detect if new arch is enabled in Swift code\n      # and can be used like:\n      # #if ${n.packageNameUpperCase}_NEW_ARCH_ENABLED\n      # // do sth when new arch is enabled\n      # #else\n      # // do sth when old arch is enabled\n      # #endif\n      "OTHER_SWIFT_FLAGS" => "-D${n.packageNameUpperCase}_NEW_ARCH_ENABLED"\n    }\n  else\n    s.pod_target_xcconfig = {\n      "DEFINES_MODULE" => "YES",\n      "SWIFT_OBJC_INTERFACE_HEADER_NAME" => "${n.packageNameUpperCamelCase}-Swift.h"\n    }\n  end\n\n  # Install all React Native dependencies (RN >= 0.71 must be used)\n  #\n  # check source code for more context\n  # https://github.com/facebook/react-native/blob/0.71-stable/scripts/react_native_pods.rb#L172#L180\n  install_modules_dependencies(s)\nend`),(0,o.kt)("p",null,"This will link Objective-C, Objective-C++ & Swift files from ",(0,o.kt)("inlineCode",{parentName:"p"},"ios")," directory and link iOS RN dependencies."),(0,o.kt)("h5",{id:"buildgradle"},(0,o.kt)("inlineCode",{parentName:"h5"},"build.gradle")),(0,o.kt)("p",null,"We also need similar configuration for Android - let's create ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," directory"),(0,o.kt)(i.Z,{groupId:"gradle",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"groovy",label:"Groovy script (build.gradle)",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"groovy",title:"android/build.gradle",mdxType:"CodeBlock"},`buildscript {\n    ext.safeExtGet = {prop, fallback ->\n        rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback\n    }\n\n    def kotlin_version = safeExtGet('kotlinVersion', '1.6.10') // Mandatory, if you will use Kotlin\n\n    repositories {\n        google()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("com.android.tools.build:gradle:7.2.1")\n        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version") // Mandatory, if you will use Kotlin\n    }\n}\n\ndef isNewArchitectureEnabled() {\n    return project.hasProperty("newArchEnabled") && project.newArchEnabled == "true"\n}\n\napply plugin: 'com.android.library'\napply plugin: 'kotlin-android' // Mandatory, if you will use Kotlin\nif (isNewArchitectureEnabled()) {\n    apply plugin: "com.facebook.react"\n}\n\nandroid {\n    compileSdkVersion safeExtGet('compileSdkVersion', 33)\n\n    namespace "com.${n.packageNameLowercase}"\n\n    defaultConfig {\n        minSdkVersion safeExtGet('minSdkVersion', 21)\n        targetSdkVersion safeExtGet('targetSdkVersion', 33)\n        buildConfigField "boolean", "IS_NEW_ARCHITECTURE_ENABLED", isNewArchitectureEnabled().toString()\n    }\n\n    sourceSets {\n        main {\n            if (isNewArchitectureEnabled()) {\n                java.srcDirs += ['src/newarch/java', "\${project.buildDir}/generated/source/codegen/java"]\n            } else {\n                java.srcDirs += ['src/oldarch/java']\n            }\n        }\n    }\n}\n\nrepositories {\n    maven {\n        url "$projectDir/../node_modules/react-native/android"\n    }\n    mavenCentral()\n    google()\n}\n\napply from: "$projectDir/react-native-helpers.gradle"\n\ndependencies {\n    if (project.ext.shouldConsumeReactNativeFromMavenCentral()) {\n        implementation "com.facebook.react:react-android" // Set by the React Native Gradle Plugin\n    } else {\n        implementation 'com.facebook.react:react-native:+' // From node_modules\n    }\n}`)),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin script (build.gradle.kts)",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"kotlin",title:"android/build.gradle.kts",mdxType:"CodeBlock"},`buildscript {\n    val safeExtGet by extra {\n        fun(prop: String, fallback: Any): Any? {\n            return when (rootProject.extra.has(prop)) {\n                true -> rootProject.extra.get(prop)\n                else -> fallback\n            }\n        }\n    }\n\n    val kotlin_version = safeExtGet("kotlinVersion", "1.6.10")\n\n    repositories {\n        google()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("com.android.tools.build:gradle:7.2.1")\n        classpath(kotlin("gradle-plugin", version = "$kotlin_version"))\n    }\n}\n\nfun isNewArchitectureEnabled(): Boolean {\n    if (!project.hasProperty("newArchEnabled")) {\n        return false\n    }\n    val newArchEnabled: String by project\n    return newArchEnabled == "true"\n}\n\nplugins {\n    id("com.android.library")\n    id("kotlin-android")\n}\nif (isNewArchitectureEnabled()) {\n    apply(plugin = "com.facebook.react")\n}\n\nandroid {\n    val safeExtGet: (prop: String, fallback: Any) -> Any? by project.extra\n\n    compileSdk = safeExtGet("compileSdkVersion", 33) as Int?\n\n    namespace = "com.${n.packageNameLowercase}"\n\n    defaultConfig {\n        minSdk = safeExtGet("minSdkVersion", 21) as Int?\n        targetSdk = safeExtGet("targetSdkVersion", 33) as Int?\n        buildConfigField("boolean", "IS_NEW_ARCHITECTURE_ENABLED", isNewArchitectureEnabled().toString())\n    }\n\n    sourceSets {\n        named("main") {\n            if (isNewArchitectureEnabled()) {\n                java.srcDirs(listOf("src/newarch/java", "\${project.buildDir}/generated/source/codegen/java"))\n            } else {\n                java.srcDirs(listOf("src/oldarch/java"))\n            }\n        }\n    }\n}\n\nrepositories {\n    maven(\n        "$projectDir/../node_modules/react-native/android"\n    )\n    mavenCentral()\n    google()\n}\n\napply(from = "$projectDir/react-native-helpers.gradle.kts")\n\nval shouldConsumeReactNativeFromMavenCentral: () -> Boolean by project.extra\n\ndependencies {\n    if (shouldConsumeReactNativeFromMavenCentral()) {\n        implementation("com.facebook.react:react-android") // Set by the React Native Gradle Plugin\n    } else {\n        implementation("com.facebook.react:react-native:+") // From node_modules\n    }\n}`))),(0,o.kt)("p",null,"This will link Java & Kotlin files under ",(0,o.kt)("inlineCode",{parentName:"p"},"android/src/{main|newarch|oldarch}/java/com/<packagename>")," as well as code-generated files under ",(0,o.kt)("inlineCode",{parentName:"p"},"android/build/generated/source/codegen/java/com/<packagename>")," (combined values declared under ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceSets"),")."),(0,o.kt)("p",null,"You may noticed, that the configuration loads sth from ",(0,o.kt)("inlineCode",{parentName:"p"},"$projectDir/react-native-helpers.gradle"),". In fact that file includes implementation for ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldConsumeReactNativeFromMavenCentral")," helper. Let's create it:"),(0,o.kt)(i.Z,{groupId:"gradle",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"groovy",label:"Groovy script (build.gradle)",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"groovy",title:"android/react-native-helpers.gradle",mdxType:"CodeBlock"},`def safeAppExtGet(prop, fallback) {\n    def appProject = rootProject.allprojects.find { it.plugins.hasPlugin('com.android.application') }\n    appProject?.ext?.has(prop) ? appProject.ext.get(prop) : fallback\n}\n\n// Let's detect react-native's directory, it will be used to determine RN's version\n// https://github.com/software-mansion/react-native-reanimated/blob/cda4627c3337c33674f05f755b7485165c6caca9/android/build.gradle#L88\ndef resolveReactNativeDirectory() {\n    def reactNativeLocation = safeAppExtGet("REACT_NATIVE_NODE_MODULES_DIR", null)\n    if (reactNativeLocation != null) {\n        return file(reactNativeLocation)\n    }\n\n    // monorepo workaround\n    // react-native can be hoisted or in project's own node_modules\n    def reactNativeFromProjectNodeModules = file("\${rootProject.projectDir}/../node_modules/react-native")\n    if (reactNativeFromProjectNodeModules.exists()) {\n        return reactNativeFromProjectNodeModules\n    }\n\n    def reactNativeFromNodeModules = file("\${projectDir}/../../react-native")\n    if (reactNativeFromNodeModules.exists()) {\n        return reactNativeFromNodeModules\n    }\n\n    throw new GradleException(\n        "[${n.packageName}] Unable to resolve react-native location in " +\n        "node_modules. You should project extension property (in app/build.gradle) " +\n        "\`REACT_NATIVE_NODE_MODULES_DIR\` with path to react-native."\n    )\n}\n\n// https://github.com/software-mansion/react-native-reanimated/blob/cda4627c3337c33674f05f755b7485165c6caca9/android/build.gradle#L199#L205\ndef reactNativeRootDir = resolveReactNativeDirectory()\n\ndef reactProperties = new Properties()\nfile("$reactNativeRootDir/ReactAndroid/gradle.properties").withInputStream { reactProperties.load(it) }\n\ndef REACT_NATIVE_VERSION = reactProperties.getProperty("VERSION_NAME")\ndef REACT_NATIVE_MINOR_VERSION = REACT_NATIVE_VERSION.startsWith("0.0.0-") ? 1000 : REACT_NATIVE_VERSION.split("\\\\.")[1].toInteger()\n\nproject.ext.shouldConsumeReactNativeFromMavenCentral = { ->\n    return REACT_NATIVE_MINOR_VERSION >= 71\n}`)),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin script (build.gradle.kts)",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"kotlin",title:"android/react-native-helpers.gradle.kts",mdxType:"CodeBlock"},`fun safeAppExtGet(prop: String, fallback: Any?): Any? {\n    val appProject = rootProject.allprojects.find { it.plugins.hasPlugin("com.android.application") }\n    return when (appProject?.extra?.has(prop)) {\n        true -> appProject.extra.get(prop)\n        else -> fallback\n    }\n}\n\n// Let"s detect react-native"s directory, it will be used to determine RN"s version\n// https://github.com/software-mansion/react-native-reanimated/blob/cda4627c3337c33674f05f755b7485165c6caca9/android/build.gradle#L88\nfun resolveReactNativeDirectory(): File {\n    val reactNativeLocation = safeAppExtGet("REACT_NATIVE_NODE_MODULES_DIR", null)\n    if (reactNativeLocation != null) {\n        return File(reactNativeLocation as String)\n    }\n\n    // monorepo workaround\n    // react-native can be hoisted or in project"s own node_modules\n    val reactNativeFromProjectNodeModules = File("\${rootProject.projectDir}/../node_modules/react-native")\n    if (reactNativeFromProjectNodeModules.exists() == true) {\n        return reactNativeFromProjectNodeModules\n    }\n\n    val reactNativeFromNodeModules = File("\${projectDir}/../../react-native")\n    if (reactNativeFromNodeModules.exists() == true) {\n        return reactNativeFromNodeModules\n    }\n\n    throw GradleException(\n        "[${n.packageName}] Unable to resolve react-native location in " +\n        "node_modules. You should project extension property (in app/build.gradle) " +\n        "\`REACT_NATIVE_NODE_MODULES_DIR\` with path to react-native."\n    )\n}\n\n// https://github.com/software-mansion/react-native-reanimated/blob/cda4627c3337c33674f05f755b7485165c6caca9/android/build.gradle#L199#L205\nval reactNativeRootDir = resolveReactNativeDirectory()\n\nval reactProperties = java.util.Properties()\njava.io.InputStreamReader(\n    java.io.FileInputStream(File("$reactNativeRootDir/ReactAndroid/gradle.properties")),\n    Charsets.UTF_8\n).use { reactProperties.load(it) }\n\nval REACT_NATIVE_VERSION: String = reactProperties.getProperty("VERSION_NAME")\nval REACT_NATIVE_MINOR_VERSION = if (REACT_NATIVE_VERSION.startsWith("0.0.0-")) {\n    1000\n} else {\n    REACT_NATIVE_VERSION.split(Regex("\\\\."))[1].toInt()\n}\n\nval shouldConsumeReactNativeFromMavenCentral by extra {\n    fun(): Boolean {\n        return REACT_NATIVE_MINOR_VERSION >= 71\n    }\n}`))),(0,o.kt)("p",null,"Wow, lots of code just to detect used RN version. Fortunately, you will have to write it only once."),(0,o.kt)("p",null,"If you are curious, this code tries to locate ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native/ReactAndroid/gradle.properties")," file, where ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION_NAME")," property is saved. Then it tries to retrieve minor part and use it in ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldConsumeReactNativeFromMavenCentral"),".\nThat function checks if minor version is greater or equal than 71 (the first version with RN's Android code published to MavenCentral - sth like npm, but for Android packages). The function is declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"project.ext"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"by extra"),",\nwhich makes it possible, to use that in other Gradle script file."))}d.isMDXComponent=!0},979:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var t=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162),l=n(6892),c=n(359),s=n(1060);const d={sidebar_label:"Module boilerplate",sidebar_position:2,title:"Module boilerplate"},p=void 0,u={unversionedId:"guides/app-info-module/setup",id:"guides/app-info-module/setup",title:"Module boilerplate",description:"Create package structure",source:"@site/docs/guides/app-info-module/setup.mdx",sourceDirName:"guides/app-info-module",slug:"/guides/app-info-module/setup",permalink:"/rnbridgingtutorial/docs/guides/app-info-module/setup",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/docs/docs/guides/app-info-module/setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Module boilerplate",sidebar_position:2,title:"Module boilerplate"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/rnbridgingtutorial/docs/guides/app-info-module/intro"},next:{title:"JS specification",permalink:"/rnbridgingtutorial/docs/guides/app-info-module/js-spec"}},m={},k=[{value:"Create package structure",id:"create-package-structure",level:3},{value:"Package boilerplate",id:"package-boilerplate",level:4},{value:"Source files stubs",id:"source-files-stubs",level:4},{value:"Link the package with the app",id:"link-the-package-with-the-app",level:3}],g={toc:k},f="wrapper";function b(e){let{components:a,...n}=e;return(0,o.kt)(f,(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"create-package-structure"},"Create package structure"),(0,o.kt)("h4",{id:"package-boilerplate"},"Package boilerplate"),(0,o.kt)(s.ZP,{isFabricComponent:!1,packageName:"app-info-package",packageNameUpperCamelCase:"AppInfoPackage",packageNameLowercase:"appinfopackage",packageNameUpperCase:"APP_INFO_PACKAGE",mdxType:"PackageStructureBoilerplate"}),(0,o.kt)("h4",{id:"source-files-stubs"},"Source files stubs"),(0,o.kt)("p",null,"Finally, let's create stubs for source files. For JS, create following empty files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/index.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/NativeAppInfoModule.ts"))),(0,o.kt)("p",null,"For iOS implementation, create:"),(0,o.kt)(r.Z,{groupId:"ios_lang",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"swift",label:"ObjC++ & Swift",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoModule.h")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoModule.mm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoModuleImpl.swift")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoPackage-Bridging-Header.h")))),(0,o.kt)(i.Z,{value:"objc",label:"ObjC++ only",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoModule.h")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoModule.mm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoModuleImpl.h")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ios/AppInfoModuleImpl.mm"))))),(0,o.kt)("p",null,"For Android implementation, create:"),(0,o.kt)(r.Z,{groupId:"android_lang",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/main/java/com/appinfopackage/AppInfoModuleImpl.kt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/main/java/com/appinfopackage/AppInfoTurboPackage.kt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/newarch/java/com/appinfopackage/AppInfoModule.kt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/oldarch/java/com/appinfopackage/AppInfoModule.kt"))),(0,o.kt)(l.ZP,{language:"kotlin",namespace:"appinfopackage",packageClass:"AppInfoTurboPackage",mdxType:"AndroidTurboPackageBoilerplate"})),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/main/java/com/appinfopackage/AppInfoModuleImpl.java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/main/java/com/appinfopackage/AppInfoTurboPackage.java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/newarch/java/com/appinfopackage/AppInfoModule.java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/src/oldarch/java/com/appinfopackage/AppInfoModule.java"))),(0,o.kt)(l.ZP,{language:"java",namespace:"appinfopackage",packageClass:"AppInfoTurboPackage",mdxType:"AndroidTurboPackageBoilerplate"}))),(0,o.kt)("h3",{id:"link-the-package-with-the-app"},"Link the package with the app"),(0,o.kt)(c.ZP,{package:"app-info-package",mdxType:"LinkPackage"}),(0,o.kt)("p",null,"Setup completed. Now, let's start coding with the ",(0,o.kt)("a",{parentName:"p",href:"./js-spec"},"JS spec"),"."))}b.isMDXComponent=!0}}]);