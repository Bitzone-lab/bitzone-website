(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171],{8526:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var l=s(5893);s(7294);function n(e){var t=e.children,s=e.onClick,n=void 0===s?function(){return null}:s,i=e.className,r=void 0===i?"":i,c=e.type,a=void 0===c?"button":c;return(0,l.jsx)("button",{onClick:n,className:"btn btn-accent font-sofia-bold rounded-none normal-case text-lg text-subtle ".concat(r),type:a,children:t})}},5123:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var l=s(5893),n=s(7294),i=s(4088),r=s(1664),c=s(8134),a=s(1163);function o(){var e=(0,n.useState)(!1),t=e[0],s=e[1],o=(0,n.useState)(!1),x=o[0],d=o[1],u=(0,a.useRouter)(),m=(0,c.$)().t;return(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{className:"h-10 fixed flex top-20 px-4 backdrop-blur-lg backdrop-filter z-40 transition bg-navbar cursor-pointer",onClick:function(){return s(!0)},children:(0,l.jsx)("div",{className:"flex items-center justify-between w-full xl:max-w-5xl xl:mx-auto xl:flex",children:(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{size:20,pointer:!0,name:"shapes"})})})}),(0,l.jsxs)("div",{className:"".concat(t?"w-full xl:w-80 xl:h-auto":"w-0"," h-full fixed z-50 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden xl:top-16"),children:[(0,l.jsxs)("div",{className:"flex px-4 items-center justify-between h-16 relative xl:hidden",children:[(0,l.jsx)("div",{className:"xl:hidden",onClick:function(){return d(!0)},children:(0,l.jsx)(i.Z,{size:20,pointer:!0,name:"hamburger"})}),(0,l.jsx)("div",{className:"hidden xl:block"}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"text-white font-sofia font-normal text-lg",children:m("Universes")})}),(0,l.jsx)("div",{onClick:function(){return s(!1)},children:(0,l.jsx)(i.Z,{size:28,pointer:!0,name:"arrow-left"})})]}),(0,l.jsx)("div",{className:"hidden xl:block absolute right-0 px-2 py-2",onClick:function(){return s(!1)},children:(0,l.jsx)(i.Z,{size:28,pointer:!0,name:"close"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"bg-ux service-bg-drawer h-bg-drawer",onClick:function(){return u.push("/services/ux")},children:"UX"}),(0,l.jsx)("div",{className:"bg-dev service-bg-drawer h-bg-drawer",onClick:function(){return u.push("/services/dev")},children:"DEV"}),(0,l.jsx)("div",{className:"bg-cloud service-bg-drawer h-bg-drawer",onClick:function(){return u.push("/services/cloud")},children:"CLOUD"})]})]}),(0,l.jsxs)("div",{className:"".concat(x?"px-4 w-full xl:max-w-xs":"w-0"," h-full fixed z-50 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden"),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between h-20 relative",children:[(0,l.jsx)("div",{className:"flex justify-center w-full",children:(0,l.jsx)("img",{height:"21px",width:"97px",alt:"logo",src:"/img/bitzone.svg"})}),(0,l.jsx)("div",{className:"absolute right-2",onClick:function(){return d(!1)},children:(0,l.jsx)(i.Z,{size:28,pointer:!0,name:"arrow-left"})})]}),(0,l.jsxs)("div",{className:"flex flex-col text-white items-center justify-center p-14 text-2xl",children:[(0,l.jsx)(r.default,{href:"/",children:(0,l.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("We")})}),(0,l.jsx)(r.default,{href:"/services",children:(0,l.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Services")})}),(0,l.jsx)(r.default,{href:"/projects",children:(0,l.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Projects")})}),(0,l.jsx)(r.default,{href:"/contacts",children:(0,l.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Contact")})}),(0,l.jsx)("hr",{className:"w-full border-2 border-white opacity-60 my-8"}),(0,l.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Accessibility")})]})]})]})}},4835:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var l=s(7294);function n(e,t){var s=(0,l.useState)(0),n=s[0],i=s[1],r=(0,l.useState)(null),c=r[0],a=r[1];return(0,l.useEffect)((function(){c&&clearInterval(c);var s=setInterval((function(){i(n===e?0:n+1)}),t);return a(s),function(){c&&clearInterval(c)}}),[n]),{index:n,toLeft:function(){i(0===n?e:n-1)},toRight:function(){i(n===e?0:n+1)},setIndex:i}}},1882:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var l=s(5893),n=s(7916),i=s(5123),r=s(3747),c=s(8134);function a(){var e=(0,c.$)().t;return(0,l.jsx)("header",{className:"bg-cloud bg-cover bg-center",children:(0,l.jsxs)("div",{className:"p-4 text-white text-center xl:max-w-5xl xl:w-full xl:mx-auto xl:text-left xl:pl-0",children:[(0,l.jsx)("h1",{className:"font-sofia-bold text-6xl xl:text-9xl mb-4 mt-32",children:"CLOUD"}),(0,l.jsx)("p",{className:"font-light font-sofia text-base mb-6 xl:mb-12 xl:font-normal xl:text-xl",children:"Cloud computing"}),(0,l.jsx)("p",{className:"font-normal text-lg mb-16 xl:max-w-xl xl:mb-24",children:e("For us it represetnts and opportunity...")})]})})}function o(){var e=(0,c.$)().t;return(0,l.jsx)("section",{className:"bg-wireframes bg-cover bg-center",children:(0,l.jsx)("div",{className:"p-4 text-white xl:max-w-5xl xl:w-full xl:mx-auto xl:pt-28 xl:pl-0 xl:pb-14",children:(0,l.jsxs)("div",{className:"xl:max-w-2xl",children:[(0,l.jsx)("h3",{className:"font-bold font-sofia-bold text-2xl mt-3 mb-8 pr-5 xl:pr-0",children:e("Source is a wireframe kit designed...")}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-y-10 mb-20 xl:gap-y-14",children:[(0,l.jsxs)("div",{className:"w-1/2 pr-5 xl:pr-10",children:[(0,l.jsx)("p",{className:"font-sofia-bold text-lg mb-2",children:e("Feature one")}),(0,l.jsx)("p",{className:"text-base",children:e("Web design partially...")})]}),(0,l.jsxs)("div",{className:"w-1/2 pr-5 xl:pr-0",children:[(0,l.jsx)("p",{className:"font-sofia-bold text-lg mb-2",children:e("Feature two")}),(0,l.jsx)("p",{className:"text-base",children:e("The rules for displaying...")})]}),(0,l.jsxs)("div",{className:"w-1/2 pr-5 xl:pr-10",children:[(0,l.jsx)("p",{className:"font-bold font-sofia-bold text-lg mb-2",children:e("Feature three")}),(0,l.jsx)("p",{className:"text-base",children:e("Paper prototypes should...")})]}),(0,l.jsxs)("div",{className:"w-1/2 pr-5 xl:pr-0",children:[(0,l.jsx)("p",{className:"font-sofia-bold text-lg mb-2",children:e("Feature four")}),(0,l.jsx)("p",{className:"text-base",children:e("The relative priorities of...")})]})]})]})})})}function x(){var e=(0,c.$)().t;return(0,l.jsx)("section",{className:"bg-white",children:(0,l.jsxs)("div",{className:"xl:max-w-5xl xl:w-full xl:mx-auto",children:[(0,l.jsxs)("div",{className:"p-4 xl:flex xl:pt-32 xl:justify-between xl:pl-0 xl:pr-0",children:[(0,l.jsx)("div",{className:"flex justify-center mb-6 mt-4 px-4 xl:order-2",children:(0,l.jsx)("img",{src:"/img/infraestructure.svg",className:"xl:w-96"})}),(0,l.jsxs)("div",{className:"xl:max-w-md xl:order-1",children:[(0,l.jsx)("h2",{className:"font-sofia-bold font-bold text-3xl text-subtle mb-6",children:"Infraestructura"}),(0,l.jsx)("p",{className:"text-base font-light text-normal mb-7",children:e("A device that enables collaboration...")}),(0,l.jsxs)("ul",{className:"pl-4 text-subtle font-sans font-light text-base",children:[(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The range of functions...")}),(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The skeleton plan of a website...")}),(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The relative priorities...")}),(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The effect of different...")})]})]})]}),(0,l.jsxs)("div",{className:"p-4 xl:flex xl:pt-32 xl:pb-32 xl:justify-between xl:pl-0 xl:pr-0",children:[(0,l.jsx)("div",{className:"flex justify-center mb-6 mt-4 px-42",children:(0,l.jsx)("img",{src:"/img/automation.svg",className:"xl:w-96"})}),(0,l.jsxs)("div",{className:"xl:max-w-md xl:w-full",children:[(0,l.jsx)("h2",{className:"font-sofia-bold font-bold text-3xl text-subtle mb-6",children:"Automatizaci\xf3n"}),(0,l.jsx)("p",{className:"text-base font-light text-normal mb-7",children:e("By creating")}),(0,l.jsxs)("ul",{className:"pl-4 text-subtle font-sans font-light text-base",children:[(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The range of functions...")}),(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The skeleton plan of a website...")}),(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The relative priorities...")}),(0,l.jsx)("li",{className:"list-disc mb-4",children:e("The effect of different...")})]})]})]})]})})}var d=s(793),u=s(3);function m(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{}),(0,l.jsx)(i.Z,{}),(0,l.jsx)(a,{}),(0,l.jsx)(x,{}),(0,l.jsx)(o,{}),(0,l.jsx)(d.Z,{}),(0,l.jsx)(u.Z,{}),(0,l.jsx)(r.Z,{})]})}},3:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var l=s(5893),n=s(1163),i=s(8134),r=s(8526);function c(){var e=(0,n.useRouter)(),t=(0,i.$)().t;return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{className:"p-10 xl:px-0 max-w-5xl mx-auto xl:flex xl:justify-center xl:items-center",children:[(0,l.jsxs)("div",{className:"xl:mr-40",children:[(0,l.jsx)("h3",{className:"text-subtle font-sofia-bold text-2xl xl:text-3xl mb-4 mt-4",children:"\xbfTe interesa una grata experiencia?"}),(0,l.jsx)("p",{className:"text-normal mb-16",children:t("Let's establish contact...")})]}),(0,l.jsx)(r.Z,{className:"w-full xl:w-auto",onClick:function(){return e.push("/contacts")},children:"Cont\xe1ctanos"})]})})}},793:function(e,t,s){"use strict";s.d(t,{Z:function(){return v}});var l=s(5893),n=s(6156),i=s(8134),r=s(4088),c=s(4184),a=s.n(c);function o(e){var t=e.className,s=void 0===t?"":t,n=e.right,i=void 0!==n&&n,c=e.onClick;return(0,l.jsx)("div",{className:a()("w-10 rounded-full bg-white h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex",i?"ml-14":"mr-14",s),onClick:c,children:(0,l.jsx)(r.Z,{name:i?"right":"left",color:"#00007A",size:15})})}function x(e){var t=e.children,s=e.onLeft,n=void 0===s?function(){return null}:s,i=e.onRight,r=void 0===i?function(){return null}:i;return(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)(o,{onClick:n,className:""}),t,(0,l.jsx)(o,{onClick:r,right:!0})]})}function d(e){var t=e.size,s=e.onClickAnchor,n=void 0===s?function(){return null}:s,i=e.index,r=void 0===i?0:i;return(0,l.jsx)("div",{className:"px-10 pt-10 bottom-0 z-10 w-full hidden xl:block",children:(0,l.jsx)("div",{className:"flex items-center xl:w-full xl:max-w-5xl xl:mx-auto xl:justify-center",children:Array.from(Array(Math.ceil(t/3)).keys()).map((function(e,t){return(0,l.jsx)("div",{className:a()("rounded-full h-3 w-3 border-2 border-primary mr-3 cursor-pointer duration-150",{"bg-primary":t===r}),onClick:function(){return n(t)}},t)}))})})}var u=s(7294),m=s(2807);function f(e){var t=e.children,s=e.className,n=void 0===s?"":s,i=e.index,r=void 0===i?0:i,c=(0,u.useRef)(null);return(0,u.useEffect)((function(){var e=(0,m.D)(),t=c.current;null===t||void 0===t||t.scrollTo(e*r,0)}),[r]),(0,l.jsx)("div",{className:"xl:max-w-5xl xl:w-full overflow-hidden",children:(0,l.jsx)("div",{ref:c,className:a()(n,"carousel xl:h-auto -mx-2"),style:{scrollBehavior:"smooth"},children:t})})}function h(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"w-4/5 xl:w-1/3 carousel-item h-full",children:(0,l.jsxs)("div",{className:"flex-col items-center px-2",children:[(0,l.jsx)("img",{src:e.image,className:"w-full d-block"}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"max-w-5xl w-full mx-auto text-center",children:[(0,l.jsx)("h3",{className:"mb-4 mt-4 font-sofia-bold text-subtle",children:e.title}),(0,l.jsx)("p",{className:"mb-5 text-md text-subtle",children:e.description}),(0,l.jsx)("span",{className:"text-normal",children:e.caption})]})})]})})})}var p=s(4835),j=JSON.parse('[{"title":"Proyecto 1","description":"Una descripci\xf3n as\xed de corta como para que pueda llenar 2 l\xedneas a lo mucho","image":"../img/services_project1.png","caption":"Caption"},{"title":"Proyecto 2","description":"Una descripci\xf3n as\xed de corta como para que pueda llenar 2 l\xedneas a lo mucho","image":"../img/services_project2.png","caption":"Caption"},{"title":"Proyecto 3","description":"Una descripci\xf3n as\xed de corta como para que pueda llenar 2 l\xedneas a lo mucho","image":"../img/services_project3.png","caption":"Caption"},{"title":"Proyecto 4","description":"Una descripci\xf3n as\xed de corta como para que pueda llenar 2 l\xedneas a lo mucho","image":"../img/services_project1.png","caption":"Caption"}]');function b(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function v(){var e=(0,i.$)().t,t=(0,p.Z)(1,1e4),s=t.index,r=t.setIndex,c=t.toLeft,a=t.toRight;return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{className:"py-10 pl-4 xl:pl-0",children:[(0,l.jsx)("h2",{className:"px-4 text-subtle font-sofia-bold text-2xl mb-6 xl:text-3xl text-center",children:e("Our projects...")}),(0,l.jsx)(x,{onLeft:c,onRight:a,children:(0,l.jsx)(f,{index:s,title:e("Our projects"),children:j.map((function(e,t){return(0,l.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?b(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},e),t)}))})}),(0,l.jsx)(d,{size:4,onClickAnchor:function(e){return r(e)},index:s})]})})}},2807:function(e,t,s){"use strict";function l(){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)}function n(){return Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}s.d(t,{D:function(){return l},s:function(){return n}})},4749:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/cloud",function(){return s(1882)}])}},function(e){e.O(0,[946,666,774,888,179],(function(){return t=4749,e(e.s=t);var t}));var t=e.O();_N_E=t}]);