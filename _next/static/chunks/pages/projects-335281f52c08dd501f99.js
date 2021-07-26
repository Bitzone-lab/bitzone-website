(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8526:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var l=n(5893);n(7294);function s(e){var t=e.children,n=e.onClick,s=void 0===n?function(){return null}:n,i=e.className,r=void 0===i?"":i,c=e.type,o=void 0===c?"button":c;return(0,l.jsx)("button",{onClick:s,className:"btn btn-accent font-sofia-bold rounded-none normal-case text-lg text-subtle ".concat(r),type:o,children:t})}},4835:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var l=n(7294);function s(e,t){var n=(0,l.useState)(0),s=n[0],i=n[1],r=(0,l.useState)(null),c=r[0],o=r[1];return(0,l.useEffect)((function(){c&&clearInterval(c);var n=setInterval((function(){i(s===e?0:s+1)}),t);return o(n),function(){c&&clearInterval(c)}}),[s]),{index:s,toLeft:function(){i(0===s?e:s-1)},toRight:function(){i(s===e?0:s+1)},setIndex:i}}},7026:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var l=n(5893),s=n(7916),i=n(3747),r=n(6156),c=n(8134),o=n(4835),a=n(7294),x=n(4184),u=n.n(x),d=n(2807);function m(e){var t=e.children,n=e.className,s=void 0===n?"":n,i=e.index,r=void 0===i?0:i,c=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=(0,d.D)()/2,t=c.current;null===t||void 0===t||t.scrollTo(e*r,0)}),[r]),(0,l.jsx)("div",{ref:c,className:u()(s,"w-full carousel xl:h-auto",{"text-black":1===r}),style:{scrollBehavior:"smooth"},children:t})}var f=n(4088);function g(e){var t=e.className,n=void 0===t?"":t,s=e.right,i=void 0!==s&&s,r=e.onClick;return(0,l.jsx)("div",{style:i?{right:"5%"}:{left:"5%"},className:u()("w-10 rounded-full bg-white h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex",n),onClick:r,children:(0,l.jsx)(f.Z,{name:i?"right":"left",color:"#7F52DD",size:15,className:i?"ml-1":"mr-1"})})}function h(e){var t=e.image,n=e.title,s=e.subtitle,i=e.back,r=e.onLeft,c=e.textColor,o=e.onRight;return(0,l.jsx)("div",{className:"w-full pt-28 pb-28 carousel-item h-full relative items-center bg-".concat(i," text-").concat(c),children:(0,l.jsxs)("div",{className:"max-w-lg",children:[(0,l.jsx)("img",{className:"bg-cover xl:w-full",src:t}),(0,l.jsxs)("div",{className:"text-right",children:[(0,l.jsx)("p",{className:"font-sofia-bold text-4xl mt-8",children:n}),(0,l.jsx)("p",{className:"font-sofia font-light text-base mt-9 mb-12",children:s})]}),(0,l.jsxs)("div",{className:"flex justify-end",children:[(0,l.jsx)(g,{className:"mr-5",right:!1,onClick:r}),(0,l.jsx)(g,{right:!0,onClick:o})]})]})})}var p=JSON.parse('[{"title":"Advance ERP","subtitle":"Soluciones grandes requieren manejos grandes","image":"/img/erp.png","back":"erp-background","textColor":"white"},{"title":"Callejeros","subtitle":"Soluciones grandes requieren manejos grandes","image":"/img/callejeros.png","back":"callejeros-background","textColor":"black"},{"title":"Visor","subtitle":"Soluciones grandes requieren manejos grandes","image":"/img/visor.png","back":"visor-background","textColor":"white"}]');function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(){var e=(0,c.$)().t,t=(0,o.Z)(2,1e4),n=t.index,s=t.toLeft,i=t.toRight;return(0,l.jsx)("header",{className:"px-4 bg-linear-primary text-white xl:px-0 xl:bg-header-projects-mobile",children:(0,l.jsxs)("div",{className:"text-neutral-content  xl:w-full xl:mx-auto xl:flex ",children:[(0,l.jsx)("div",{className:"w-11/12 pt-28 pb-10 xl:w-1/2 xl:pt-40 flex justify-end xl:pb-28",children:(0,l.jsxs)("div",{className:"flex flex-col xl:max-w-lg justify-center h-full",children:[(0,l.jsx)("p",{className:"mb-8 font-sans font-bold text-sm uppercase xl:mb-12",children:e("Our projects")}),(0,l.jsx)("div",{className:"mb-5 xl:mb-24",children:(0,l.jsx)("h1",{className:"text-2xl font-sofia-bold xl:text-4xl",children:e("We improve the world with technology...")})}),(0,l.jsx)("p",{className:"mb-7 font-sans font-light text-base xl:text-2xl",children:e("Check out the projects we've done...")})]})}),(0,l.jsx)("div",{className:"hidden xl:block xl:w-1/2",children:(0,l.jsx)(m,{index:n,className:"full-screen--36",children:p.map((function(e,t){return(0,l.jsx)(h,j(j({},e),{},{onLeft:s,onRight:i}),t)}))})})]})})}var N=[{name:"Inokuos",image:"img/inokuos.png",description:"Una app de limpieza global hecha con limpieza global",icons:["img/kotlin-logo.svg","img/android-logo.svg","img/firebase-logo.svg","img/react-logo.svg"]},{name:"Advance MTR",image:"img/mtr.png",description:"Mediciones en tiempo reales conllevan estrategias en tiempo reales y, de vez en cuando, complejas",icons:["img/react-logo.svg","img/hasura-logo.svg","img/graphQL-logo.svg","img/expressJs-logo.svg","img/d3Js-logo.svg","img/postgresql-logo.svg"]},{name:"Aliados",image:"img/aliados.png",description:"Aplicaci\xf3n web realizada para Inversiones La Cruz",icons:["img/react-logo.svg","img/csharp-logo.svg","img/sqlServer-logo.svg"]}];function w(){return(0,l.jsx)("section",{children:N.map((function(e,t){return(0,l.jsx)("div",{className:"pt-8 pb-8 xl:max-w-5xl xl:w-full xl:mx-auto xl:pt-14 xl:pb-14",children:(0,l.jsxs)("div",{className:"xl:flex",children:[(0,l.jsx)("div",{className:"xl:w-1/2 ".concat(t%2===0?"xl:order-2":"xl:order-1"),children:(0,l.jsx)("img",{className:"bg-cover xl:w-full",src:e.image})}),(0,l.jsx)("div",{className:"px-4 text-center xl:w-1/2 xl:px-0 ".concat(t%2===0?"xl:pr-20 xl:order-1":"xl:pl-20 xl:order-2"),children:(0,l.jsxs)("div",{className:"xl:flex xl:justify-center xl:flex-col xl:items-center xl:h-full",children:[(0,l.jsx)("p",{className:"font-sofia font-bold text-3xl text-subtle mt-8",children:e.name}),(0,l.jsx)("p",{className:"font-sans font-light text-base text-normal mt-5",children:e.description}),(0,l.jsx)("div",{className:"mt-12 flex justify-center ",children:(0,l.jsx)("div",{className:"flex flex-wrap justify-between gap-10 ".concat(e.icons.length>4?"grid grid-cols-3 xl:flex":""),children:e.icons.map((function(e,t){return(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("img",{className:"h-8",src:e})},t)}))})})]})})]})},t)}))})}var y=n(8526),k=n(1163);function O(){var e=(0,c.$)().t,t=(0,k.useRouter)();return(0,l.jsx)("section",{className:"p-4 bg-call-to-contact-project bg-center bg-cover xl:p-0",children:(0,l.jsx)("div",{className:"xl:max-w-5xl xl:w-full xl:mx-auto",children:(0,l.jsx)("div",{className:"xl:flex xl:justify-end",children:(0,l.jsxs)("div",{className:"xl:flex-end xl:max-w-md xl:pt-24 xl:pb-12",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{className:"text-white font-bold font-sofia text-3xl mb-5 mt-12",children:[e("Did you find it cool?")," "]}),(0,l.jsx)("p",{className:"text-white font-light text-base mb-10 font-sans",children:e("Let's establish contact and...")})]}),(0,l.jsx)(y.Z,{className:"mb-14",onClick:function(){return t.push("/contacts")},children:e("Contact")})]})})})})}function C(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{}),(0,l.jsx)(b,{}),(0,l.jsx)(w,{}),(0,l.jsx)(O,{}),(0,l.jsx)(i.Z,{})]})}},2807:function(e,t,n){"use strict";function l(){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)}function s(){return Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}n.d(t,{D:function(){return l},s:function(){return s}})},4478:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(7026)}])}},function(e){e.O(0,[946,666,774,888,179],(function(){return t=4478,e(e.s=t);var t}));var t=e.O();_N_E=t}]);