(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),a=(r(0),r(277)),i={id:"first-week",title:"First Week",sidebar_label:"First Week"},l={id:"finalproject/first-week",title:"First Week",description:"First week",source:"@site/docs/finalproject/firstweek.md",permalink:"/Syllabus-V2/finalproject/first-week",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/finalproject/firstweek.md",sidebar_label:"First Week",sidebar:"FinalProject",previous:{title:"Final Project - Roles",permalink:"/Syllabus-V2/finalproject/roles"},next:{title:"Final Project - Final Week",permalink:"/Syllabus-V2/finalproject/final-week"}},s=[{value:"First week",id:"first-week",children:[]}],c={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"first-week"},"First week"),Object(a.b)("p",null,"Once you have your team and your assignment, start by sorting out the basic administrative requirements:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Team name! This will be your identity, use it in all communications/presentations"),Object(a.b)("li",{parentName:"ul"},"Public Slack channel (name should start with #ldn5-)"),Object(a.b)("li",{parentName:"ul"},"GitHub repository (pick one member to own the repo, everyone else is a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository"}),"collaborator"),")",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"You can fork ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/textbook/starter-kit-cyf"}),"this starter kit")," for a basic React/Express/MongoDB app"),Object(a.b)("li",{parentName:"ul"},"Create a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/articles/about-project-boards"}),"project board")," in the repo (or e.g. Trello board) for your tasks and stories")))),Object(a.b)("p",null,"Then we can do some high-level design, think about:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What\u2019s the minimal viable product (MVP), i.e. the simplest possible thing we could build that lets us make some progress towards the business goals?"),Object(a.b)("li",{parentName:"ul"},"What tasks will users be carrying out? What information will they need to have and/or provide to do that? This will allow you to figure what pages you could have and which endpoints they\u2019ll need to use."),Object(a.b)("li",{parentName:"ul"},"What entities/resources are we going to have in the system? What information do we need to store to achieve the goals? This will allow you to figure out what collections you\u2019ll likely have in the database."),Object(a.b)("li",{parentName:"ul"},"What are we going to need to expose to the React app? Where is that the same as the above (i.e. you\u2019re just going to have an endpoint for a resource) and where might it be different (i.e. there will be some kind of calculation or aggregation between the database and the frontend)? This will allow you to figure out what the REST API is going to look like."),Object(a.b)("li",{parentName:"ul"},"What might these pages look like (sketch them out with a marker pen - we ",Object(a.b)("strong",{parentName:"li"},"don\u2019t")," want to spend too much time doing very detailed layout)? How could we decompose them into separate ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://codeyourfuture.github.io/syllabus-master/react/week-19/lesson.html#what-is-a-component"}),"components")," to work on?")),Object(a.b)("p",null,"This will give you an idea of what work needs to get done during the week, which you can then assign to members of your team. Make sure you identify the \u201cseams\u201d between different tasks (e.g. you have to agree on an API so that the backend and frontend match up, or on the props passed between a parent component and a child component) so that you know who has to collaborate with whom to make sure it all fits together, and will be able to identify the impacts of one part getting blocked."))}u.isMDXComponent=!0},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,m=p["".concat(i,".").concat(h)]||p[h]||b[h]||a;return r?o.a.createElement(m,l(l({ref:t},c),{},{components:r})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);