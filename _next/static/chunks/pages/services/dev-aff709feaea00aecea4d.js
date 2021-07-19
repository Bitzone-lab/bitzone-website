(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{8526:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var s=l(5893);l(7294);function n(e){var t=e.children,l=e.onClick,n=void 0===l?function(){return null}:l,r=e.className,i=void 0===r?"":r,c=e.type,a=void 0===c?"button":c;return(0,s.jsx)("button",{onClick:n,className:"btn btn-accent font-sofia-bold rounded-none normal-case text-lg text-subtle ".concat(i),type:a,children:t})}},5123:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var s=l(5893),n=l(7294),r=l(4088),i=l(1664),c=l(8134),a=l(1163);function o(){var e=(0,n.useState)(!1),t=e[0],l=e[1],o=(0,n.useState)(!1),x=o[0],d=o[1],u=(0,a.useRouter)(),m=(0,c.$)().t;return(0,s.jsxs)("nav",{children:[(0,s.jsx)("div",{className:"h-10 fixed flex top-20 px-4 backdrop-blur-lg backdrop-filter z-40 transition bg-navbar cursor-pointer",onClick:function(){return l(!0)},children:(0,s.jsx)("div",{className:"flex items-center justify-between w-full xl:max-w-5xl xl:mx-auto xl:flex",children:(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{size:20,pointer:!0,name:"shapes"})})})}),(0,s.jsxs)("div",{className:"".concat(t?"w-full":"w-0"," h-full fixed z-50 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden"),children:[(0,s.jsxs)("div",{className:"flex px-4 items-center justify-between h-16 relative",children:[(0,s.jsx)("div",{onClick:function(){return d(!0)},children:(0,s.jsx)(r.Z,{size:20,pointer:!0,name:"hamburger"})}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-white font-sofia font-normal text-lg",children:m("Universes")})}),(0,s.jsx)("div",{onClick:function(){return l(!1)},children:(0,s.jsx)(r.Z,{size:28,pointer:!0,name:"arrow-left"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"bg-ux service-bg-drawer h-bg-drawer",onClick:function(){return u.push("/services/ux")},children:"UX"}),(0,s.jsx)("div",{className:"bg-dev service-bg-drawer h-bg-drawer",onClick:function(){return u.push("/services/dev")},children:"DEV"}),(0,s.jsx)("div",{className:"bg-cloud service-bg-drawer h-bg-drawer",onClick:function(){return u.push("/services/cloud")},children:"CLOUD"})]})]}),(0,s.jsxs)("div",{className:"".concat(x?"px-4 w-full":"w-0"," h-full fixed z-50 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden"),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between h-20 relative",children:[(0,s.jsx)("div",{className:"flex justify-center w-full",children:(0,s.jsx)("img",{height:"21px",width:"97px",alt:"logo",src:"/img/bitzone.svg"})}),(0,s.jsx)("div",{className:"absolute right-2",onClick:function(){return d(!1)},children:(0,s.jsx)(r.Z,{size:28,pointer:!0,name:"arrow-left"})})]}),(0,s.jsxs)("div",{className:"flex flex-col text-white items-center justify-center p-14 text-2xl",children:[(0,s.jsx)(i.default,{href:"/",children:(0,s.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("We")})}),(0,s.jsx)(i.default,{href:"/services",children:(0,s.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Services")})}),(0,s.jsx)(i.default,{href:"/projects",children:(0,s.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Projects")})}),(0,s.jsx)(i.default,{href:"/contacts",children:(0,s.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Contact")})}),(0,s.jsx)("hr",{className:"w-full border-2 border-white opacity-60 my-8"}),(0,s.jsx)("a",{className:"font-sofia py-4 text-3xl",children:m("Accessibility")})]})]})]})}},4835:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var s=l(7294);function n(e,t){var l=(0,s.useState)(0),n=l[0],r=l[1],i=(0,s.useState)(null),c=i[0],a=i[1];return(0,s.useEffect)((function(){c&&clearInterval(c);var l=setInterval((function(){r(n===e?0:n+1)}),t);return a(l),function(){c&&clearInterval(c)}}),[n]),{index:n,toLeft:function(){r(0===n?e:n-1)},toRight:function(){r(n===e?0:n+1)},setIndex:r}}},9873:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Z}});var s=l(5893),n=l(7916),r=l(5123),i=l(8134);function c(){var e=(0,i.$)().t;return(0,s.jsx)("header",{className:"bg-dev bg-cover bg-center",children:(0,s.jsxs)("div",{className:"p-4 text-white text-center xl:max-w-5xl xl:w-full xl:mx-auto xl:text-left xl:pl-0",children:[(0,s.jsx)("h1",{className:"font-sofia-bold text-6xl xl:text-9xl mb-4 mt-32",children:"DEV"}),(0,s.jsx)("p",{className:"font-light font-sofia text-base mb-6 xl:mb-12 xl:font-normal xl:text-xl",children:e("Software development")}),(0,s.jsx)("p",{className:"font-normal text-lg mb-16 xl:max-w-xl xl:mb-24",children:e("To talk about UX/UI")})]})})}function a(){var e=(0,i.$)().t;return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"py-10 pl-4 xl:pl-0 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2  ",children:[(0,s.jsx)("div",{className:"w-full flex justify-end items-center xl:order-2 overflow-hidden",children:(0,s.jsx)("img",{className:"object-cover max-w-full max-h-64 -mr-24 xl:max-h-full xl:mr-0",src:"../img/services-web-dev.png"})}),(0,s.jsxs)("div",{className:"mt-8 pr-4",children:[(0,s.jsx)("h2",{className:"text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl",children:e("Web development")}),(0,s.jsx)("p",{className:"text-normal text-base",children:e("By creating")}),(0,s.jsx)("p",{className:"text-normal text-base mt-4",children:e("The visual guide")})]})]})})}function o(){var e=(0,i.$)().t;return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"py-10 px-4 xl:px-0 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2  ",children:[(0,s.jsxs)("div",{className:"xl:order-2 ",children:[(0,s.jsx)("h2",{className:"text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl",children:e("Mobile development")}),(0,s.jsx)("p",{className:"text-normal text-base mb-6",children:e("By creating")}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-subtle font-sofia-bold text-2xl mb-4",children:e("One")}),(0,s.jsx)("p",{className:"text-normal text-base mb-6",children:e("The effect of")})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-subtle font-sofia-bold text-2xl mb-4",children:e("Two")}),(0,s.jsx)("p",{className:"text-normal text-base mb-6",children:e("The range of")})]})]})]}),(0,s.jsx)("div",{className:"w-full mt-8 xl:mt-0 min-w-full",children:(0,s.jsx)("img",{className:"object-cover  h-full w-full xl:max-h-full xl:mr-0",src:"../img/services-mobile-dev.png"})})]})})}function x(){var e=(0,i.$)().t;return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"py-10 px-4 xl:px-0 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2 ",children:[(0,s.jsx)("div",{className:"xl:order-2 flex justify-left items-center w-full xl:justify-center",children:(0,s.jsx)("img",{className:"object-cover w-3/4 xl:max-w-full xl:max-h-full xl:w-full xl:mr-0",src:"../img/chart.png"})}),(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsx)("h2",{className:"text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl",children:e("API development")}),(0,s.jsx)("p",{className:"text-normal text-base mb-6",children:e("A device that")}),(0,s.jsxs)("ul",{className:"pl-4 text-subtle",children:[(0,s.jsx)("li",{className:"list-disc",children:e("The range of")}),(0,s.jsx)("li",{className:"list-disc",children:e("The skeleton plan of")}),(0,s.jsx)("li",{className:"list-disc",children:e("The relative")}),(0,s.jsx)("li",{className:"list-disc",children:e("The effect of")})]})]})]})})}var d=l(6156),u=l(4088),m=l(4184),f=l.n(m);function h(e){var t=e.className,l=void 0===t?"":t,n=e.right,r=void 0!==n&&n,i=e.onClick;return(0,s.jsx)("div",{style:r?{right:"5%"}:{left:"5%"},className:f()("w-10 rounded-full bg-white h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex",l),onClick:i,children:(0,s.jsx)(u.Z,{name:r?"right":"left",color:"#00007A",size:15,className:r?"ml-1":"mr-1"})})}function j(e){var t=e.children,l=e.onLeft,n=void 0===l?function(){return null}:l,r=e.onRight,i=void 0===r?function(){return null}:r;return(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(h,{onClick:n,className:""}),t,(0,s.jsx)(h,{onClick:i,right:!0})]})}function v(e){var t=e.size,l=e.onClickAnchor,n=void 0===l?function(){return null}:l,r=e.index,i=void 0===r?0:r;return(0,s.jsx)("div",{className:"px-10 pt-10 bottom-0 z-10 w-full hidden xl:block",children:(0,s.jsx)("div",{className:"flex items-center xl:w-full xl:max-w-5xl xl:mx-auto xl:justify-center",children:Array.from(Array(Math.ceil(t/3)).keys()).map((function(e,t){return(0,s.jsx)("div",{className:f()("rounded-full h-3 w-3 border-2 border-primary mr-3 cursor-pointer duration-150",{"bg-primary":t===i}),onClick:function(){return n(t)}},t)}))})})}var p=l(7294),b=l(2807);function g(e){var t=e.children,l=e.className,n=void 0===l?"":l,r=e.index,i=void 0===r?0:r,c=(0,p.useRef)(null);return(0,p.useEffect)((function(){var e=(0,b.D)(),t=c.current;null===t||void 0===t||t.scrollTo(e*i,0)}),[i]),(0,s.jsx)("div",{className:"xl:px-10 overflow-hidden",children:(0,s.jsx)("div",{ref:c,className:f()(n,"carousel xl:h-auto"),style:{scrollBehavior:"smooth"},children:t})})}function N(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"w-4/5 xl:w-1/3 carousel-item h-full",children:(0,s.jsxs)("div",{className:"flex-col items-center px-4",children:[(0,s.jsx)("img",{src:e.image,className:"w-full d-block"}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("div",{className:"max-w-5xl w-full mx-auto text-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"mb-4 mt-4 font-sofia-bold text-subtle",children:e.title}),(0,s.jsx)("p",{className:"mb-5 text-md text-subtle",children:e.description}),(0,s.jsx)("span",{className:"text-normal",children:e.caption})]})})})]})})})}var w=l(4835),y=JSON.parse('[{"title":"Proyecto1","description":"Una descripci\xf3n as\xed de corta como para que pueda llenar 2 l\xedneas a lo mucho","image":"../img/services_project1.png","caption":"Caption"},{"title":"Proyecto2","description":"Una descripci\xf3n as\xed de corta como para que pueda llenar 2 l\xedneas a lo mucho","image":"../img/services_project2.png","caption":"Caption"},{"title":"Proyecto3","description":"Una descripci\xf3n as\xed de corta como para que pueda llenar 2 l\xedneas a lo mucho","image":"../img/services_project3.png","caption":"Caption"}]');function k(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,s)}return l}function C(){var e=(0,i.$)().t,t=(0,w.Z)(0,1e4),l=t.index,n=t.setIndex,r=t.toLeft,c=t.toRight;return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"py-10 xl:max-w-5xl xl:w-full xl:mx-auto",children:[(0,s.jsx)("h2",{className:"p-4 text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl text-center",children:e("Our projects")}),(0,s.jsx)(j,{onLeft:r,onRight:c,children:(0,s.jsx)(g,{index:l,title:e("Our projects"),children:y.map((function(e,t){return(0,s.jsx)(N,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?k(Object(l),!0).forEach((function(t){(0,d.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):k(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},e),t)}))})}),(0,s.jsx)(v,{size:3,onClickAnchor:function(e){return n(e)},index:l})]})})}var O=l(1163),P=l(8526);function _(){var e=(0,O.useRouter)();return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"p-4 max-w-5xl mx-auto xl:flex xl:justify-center xl:items-center",children:[(0,s.jsxs)("div",{className:"xl:mr-40",children:[(0,s.jsx)("h3",{className:"text-subtle font-sofia-bold text-2xl mb-4 mt-4",children:"\xbfTe interesa una grata experiencia?"}),(0,s.jsx)("p",{className:"text-normal mb-16",children:"Establezcamos contacto y de esa manera le podremos dar una soluci\xf3n igual o mejor que las mostradas anteriormente."})]}),(0,s.jsx)(P.Z,{className:"w-full xl:w-auto",onClick:function(){return e.push("/contacts")},children:"Cont\xe1ctanos"})]})})}var E=l(3747);function Z(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Z,{}),(0,s.jsx)(r.Z,{}),(0,s.jsx)(c,{}),(0,s.jsx)(a,{}),(0,s.jsx)(o,{}),(0,s.jsx)(x,{}),(0,s.jsx)(C,{}),(0,s.jsx)(_,{}),(0,s.jsx)(E.Z,{})]})}},2807:function(e,t,l){"use strict";function s(){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)}function n(){return Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}l.d(t,{D:function(){return s},s:function(){return n}})},9133:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/dev",function(){return l(9873)}])}},function(e){e.O(0,[946,666,774,888,179],(function(){return t=9133,e(e.s=t);var t}));var t=e.O();_N_E=t}]);