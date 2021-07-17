(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8526:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(5893);s(7294);function i(e){var t=e.children,s=e.onClick,i=void 0===s?function(){return null}:s,r=e.className,a=void 0===r?"":r,o=e.type,l=void 0===o?"button":o;return(0,n.jsx)("button",{onClick:i,className:"btn btn-accent font-sofia-bold rounded-none normal-case text-lg text-subtle ".concat(a),type:l,children:t})}},7655:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return R}});var n=s(5893),i=s(3747),r=s(8134),a=s(4088),o=s(4184),l=s.n(o),c=s(1163);function x(e){var t=e.className,s=void 0===t?"":t,i=e.t,r=(0,c.useRouter)().push;return(0,n.jsxs)("div",{onClick:function(e){e.preventDefault(),r("/services")},className:l()("flex items-center text-accent",s),children:[(0,n.jsx)("a",{className:"text-xl font-overpass-bold",href:"#",children:i("Find out how")}),(0,n.jsx)(a.Z,{className:"ml-2",name:"arrow-right",size:15,color:"#EDE04B"})]})}function d(){var e=(0,r.$)().t;return(0,n.jsx)("header",{className:"hero min-h-screen bg-linear-primary text-white",children:(0,n.jsx)("div",{className:"hero-content text-neutral-content pb-24 xl:pt-32 xl:pb-48",children:(0,n.jsxs)("div",{className:"max-w-md xl:max-w-screen-lg xl:flex xl:justify-between",children:[(0,n.jsxs)("div",{className:"xl:max-w-md",children:[(0,n.jsx)("h1",{className:"text-5xl font-sofia-semibold leading-tight",children:e("Build your future with Bitzone")}),(0,n.jsx)("p",{className:"text-2xl hidden xl:block xl:max-w-sm xl:mt-7",children:e("Take your business to the next level with...")}),(0,n.jsx)("p",{className:"text-2xl xl:hidden mt-7",children:e("At Bitzone we have the professionals to build your future")}),(0,n.jsx)(x,{t:e,className:"mt-8"})]}),(0,n.jsx)("div",{className:"px-12",children:(0,n.jsx)("img",{src:"img/bits.png",alt:"",className:"hidden transform xl:block"})})]})})})}var m=s(6156);function u(e){var t=e.className,s=void 0===t?"":t,i=e.right,r=void 0!==i&&i,o=e.onClick;return(0,n.jsx)("div",{style:r?{right:"5%"}:{left:"5%"},className:l()("w-10 rounded-full bg-white absolute h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex",s),onClick:o,children:(0,n.jsx)(a.Z,{name:r?"right":"left",color:"#00007A",size:15,className:r?"ml-1":"mr-1"})})}function h(e){var t=e.children,s=e.onLeft,i=void 0===s?function(){return null}:s,r=e.onRight,a=void 0===r?function(){return null}:r;return(0,n.jsxs)(n.Fragment,{children:[t,(0,n.jsx)(u,{onClick:i,className:""}),(0,n.jsx)(u,{onClick:a,right:!0})]})}function f(e){var t=e.size,s=e.onClickAnchor,i=void 0===s?function(){return null}:s,r=e.index,a=void 0===r?0:r;return(0,n.jsx)("div",{className:"absolute px-5 pb-10 bottom-0 z-10 w-full",children:(0,n.jsx)("div",{className:"flex items-center xl:w-full xl:max-w-5xl xl:mx-auto xl:justify-center",children:Array.from(Array(t).keys()).map((function(e,t){return(0,n.jsx)("div",{className:l()("rounded-full h-3 w-3 border-2 border-white mr-3 cursor-pointer duration-150",{"bg-white":t===a}),onClick:function(){return i(t)}},t)}))})})}var v=s(7294);function p(e){var t=e.children,s=e.className,i=void 0===s?"":s,r=e.index,o=void 0===r?0:r,c=e.title,x=void 0===c?"":c,d=(0,v.useRef)(null);return(0,v.useEffect)((function(){var e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),t=d.current;null===t||void 0===t||t.scrollTo(e*o,0)}),[o]),(0,n.jsxs)("div",{ref:d,className:l()(i,"w-full carousel xl:h-auto"),style:{scrollBehavior:"smooth"},children:[t,(0,n.jsx)("div",{className:"absolute w-full px-5 text-white top-0",children:(0,n.jsxs)("div",{className:"max-w-5xl w-full mx-auto mt-8 xl:mt-14 xl:flex justify-between",children:[(0,n.jsx)("h3",{className:"text-2xl px-4",children:x}),(0,n.jsx)(a.Z,{name:"arrow-down",size:18,onClick:function(){var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);document.documentElement.scrollTo(0,e-64)},className:"mt-2 cursor-pointer hidden xl:inline"})]})})]})}var j=s(8526);function g(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-full carousel-item h-full relative items-center",children:[(0,n.jsx)("img",{src:e.image,className:"w-full h-full object-cover"}),(0,n.jsx)("div",{className:"absolute w-full px-5 text-white",children:(0,n.jsx)("div",{className:"max-w-5xl w-full mx-auto",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"mb-4 uppercase",children:e.subtitle}),(0,n.jsx)("h1",{className:"text-4xl font-sofia-bold mb-8 xl:w-3/4",children:e.title}),(0,n.jsx)("p",{className:"mb-5 text-md xl:w-2/4",children:e.textarea}),(0,n.jsx)(j.Z,{className:"btn-sm",children:"Desc\xfabrelo"})]})})})]})})}function w(e,t){var s=(0,v.useState)(0),n=s[0],i=s[1],r=(0,v.useState)(null),a=r[0],o=r[1];return(0,v.useEffect)((function(){a&&clearInterval(a);var s=setInterval((function(){i(n===e?0:n+1)}),t);return o(s),function(){a&&clearInterval(a)}}),[n]),{index:n,toLeft:function(){i(0===n?e:n-1)},toRight:function(){i(n===e?0:n+1)},setIndex:i}}var b=JSON.parse('[{"title":"Construimos soluciones a la medida de tus necesidades","subtitle":"Somos Efectivos","image":"img/slider_1.png","textarea":"Donde otras empresas de software ven c\xf3digo y requerimientos, en Bitzone vemos personas y necesidades. Es por ello que nuestro equipo estar\xe1 100% comprometido en el \xe9xito de las soluciones que hagan que tu negocio crezca.","link":""},{"title":"Construimos soluciones escalables, modernas y de calidad","subtitle":"Somos expertos","image":"img/slider_2.png","textarea":"Nos preocupamos en que nuestros proyectos sean elaborados pensando en el futuro de estos, asegur\xe1ndonos de que sean completamente mantenibles y escalables al eventual crecimiento de su negocio. Asimismo, seguimos los m\xe1s altos est\xe1ndares de calidad para garantizar que nuestro software satisfaga las necesidades de su negocio.","link":""},{"title":"Construimos con valores","subtitle":"Somos humanos","image":"img/slider_3.png","textarea":"La cultura de Bitzone est\xe1 enfocada en las personas y su desarrollo. Por ello, priorizamos mantener a nuestros equipos motivados, capacitados en habilidades blandas, comunicados y comprometidos con nuestros proyectos y clientes. No solo somos compa\xf1eros de trabajo, somos amigos y somos comunidad.","link":""},{"title":"Construimos en distintas plataformas","subtitle":"Somos vers\xe1tiles","image":"img/slider_4.png","textarea":"La cultura de Bitzone est\xe1 enfocada en las personas y su desarrollo. Por ello, priorizamos mantener a nuestros equipos motivados, capacitados en habilidades blandas, comunicados y comprometidos con nuestros proyectos y clientes. No solo somos compa\xf1eros de trabajo, somos amigos y somos comunidad.","link":""}]');function N(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function y(){var e=(0,r.$)().t,t=w(3,1e4),s=t.index,i=t.setIndex,a=t.toLeft,o=t.toRight;return(0,n.jsx)("section",{className:"relative cut-top -mt-36",children:(0,n.jsxs)(h,{onLeft:a,onRight:o,children:[(0,n.jsx)(p,{index:s,className:"full-screen--36",title:e("We are team, we are Bitzone"),children:b.map((function(e,t){return(0,n.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?N(Object(s),!0).forEach((function(t){(0,m.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},e),t)}))}),(0,n.jsx)(f,{size:4,onClickAnchor:function(e){return i(e)},index:s})]})})}var _=s(7916);function k(){var e=(0,r.$)().t;return(0,n.jsx)("section",{className:"px-4 pb-16",children:(0,n.jsxs)("div",{className:"grid grid-rows-2 xl:max-w-5xl xl:w-full xl:mx-auto xl:flex xl:gap-36",children:[(0,n.jsxs)("div",{className:"grid grid-cols-3 gap-x-5 gap-y-5 mb-5 mt-6 xl:max-w-lg xl:w-full xl:gap-x-8",children:[(0,n.jsx)("div",{className:"wrapper-contact",children:(0,n.jsx)("img",{className:"object-cover",width:"80px",height:"29px",src:"img/advance-logo.png"})}),(0,n.jsx)("div",{className:"wrapper-contact mt-6",children:(0,n.jsx)("img",{className:"object-cover",width:"80px",height:"29px",src:"img/advance-logo.png"})}),(0,n.jsx)("div",{className:"wrapper-contact",children:(0,n.jsx)("img",{className:"object-cover",width:"80px",height:"29px",src:"img/inokuos-logo.png"})}),(0,n.jsx)("div",{className:"wrapper-contact",children:(0,n.jsx)("img",{className:"object-cover",width:"80px",height:"29px",src:"img/inversiones-laCruz-logo.png"})}),(0,n.jsx)("div",{className:"wrapper-contact mt-5",children:(0,n.jsx)("img",{className:"object-cover",width:"80px",height:"29px",src:"img/mtr-advance-logo.png"})}),(0,n.jsx)("div",{className:"wrapper-contact",children:(0,n.jsx)("img",{className:"object-cover",width:"80px",height:"29px",src:"img/mtr-advance-logo.png"})})]}),(0,n.jsxs)("div",{className:"mb-14 pt-4 xl:w-1/2 xl:pt-20",children:[(0,n.jsx)("p",{className:"text-tagline font-sofia-bold text-sm mb-5",children:e("TRUST US")}),(0,n.jsx)("h2",{className:"text-subtle font-sofia-bold text-4xl mb-10",children:e("We build the future of Peru and the world")}),(0,n.jsx)("p",{className:"text-normal text-base",children:e("We have experience carrying out projects...")})]})]})})}function C(){var e=(0,c.useRouter)();return(0,n.jsx)("section",{className:"p-4 bg-call-to-contact bg-cover",children:(0,n.jsxs)("div",{className:"max-w-5xl mx-auto xl:flex xl:justify-center xl:items-center",children:[(0,n.jsxs)("div",{className:"xl:mr-40",children:[(0,n.jsxs)("h3",{className:"text-white font-sofia-bold text-2xl mb-4 mt-4",children:["\xbfQuieres hacer tu proyecto realidad?"," "]}),(0,n.jsx)("p",{className:"text-white text-base mb-16",children:"Cont\xe1ctanos para ponernos manos a la obra."})]}),(0,n.jsx)(j.Z,{className:"w-full mb-8 xl:w-auto xl:py-2 xl:px-5",onClick:function(){return e.push("/contacts")},children:"Cont\xe1ctanos"})]})})}function z(e){var t=e.src,s=e.active,i=void 0!==s&&s,r=e.onClick;return(0,n.jsxs)("div",{onClick:r,className:l()("wrapper-image-why-whe rounded-sm relative",{"border-dashed":!i,"cursor-pointer":!i,"border-solid":i}),children:[(0,n.jsx)("div",{className:l()("absolute w-full h-full active-wrapper-image-why-whe z-0 opacity-0 transition duration-300",{"opacity-100":i})}),(0,n.jsx)("img",{src:t,className:"w-40 relative z-10"})]})}function O(e){var t=e.show,s=e.title,i=e.textarea;return(0,n.jsxs)("div",{className:l()("transition duration-700 opacity-0",{invisible:!t,"h-0":!t,visible:t,"opacity-100":t}),children:[(0,n.jsx)("h1",{className:"text-2xl font-sofia-bold mb-3 text-subtle xl:mb-6",children:s}),(0,n.jsx)("p",{className:"text-normal text-subtle",children:i})]})}function E(e){var t=e.t,s=e.index;return(0,n.jsxs)("div",{style:{height:"270px"},children:[(0,n.jsx)(O,{show:0===s,title:t("We are constantly growing"),textarea:t("We work in an environment where the creativity...")}),(0,n.jsx)(O,{show:1===s,title:t("We believe in communication"),textarea:t("A successful project is one that...")}),(0,n.jsx)(O,{show:2===s,title:t("Continuous improvement"),textarea:t("We care that our team is...")}),(0,n.jsx)(O,{show:3===s,title:t("We are a motivated team"),textarea:t("We seek to be a positive reinforcement agent...")}),(0,n.jsx)(O,{show:4===s,title:t("We are looking to train new talents"),textarea:t("The constant market demand means...")}),(0,n.jsx)(O,{show:5===s,title:t("Flexibility is our motto"),textarea:t("We offer our members the possibility of...")})]})}function W(e){var t=e.children,s=e.className,i=void 0===s?"":s,r=e.onClick;return(0,n.jsx)("div",{className:"bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md ".concat(i),onClick:r,children:t})}function P(e){var t=e.src,s=e.active,i=void 0!==s&&s;return(0,n.jsx)("div",{className:l()("bg-linear-primary carousel-item p-10 opacity-50",{"opacity-100":i}),children:(0,n.jsx)("img",{src:t,className:"w-40"})})}function S(e){var t=e.index,s=e.onClickLeft,i=e.onClickRight,r=e.onScroll,o=void 0===r?function(){return null}:r,l=(0,v.useRef)(null);return(0,v.useEffect)((function(){var e=l.current;if(e){var s,n=Array.from(e.children).map((function(e){return e.clientHeight})).reduce((function(e,t){return e+t}),0)/5;null===(s=l.current)||void 0===s||s.scrollTo(n*t,0)}}),[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{ref:l,className:"carousel mt-4 mb-4 xl:hidden",style:{scrollBehavior:"smooth"},onScroll:o,children:[(0,n.jsx)(P,{src:"img/section_why_we_1.svg",active:0===t}),(0,n.jsx)(P,{src:"img/section_why_we_2.svg",active:1===t}),(0,n.jsx)(P,{src:"img/section_why_we_3.svg",active:2===t}),(0,n.jsx)(P,{src:"img/section_why_we_4.svg",active:3===t}),(0,n.jsx)(P,{src:"img/section_why_we_5.svg",active:4===t}),(0,n.jsx)(P,{src:"img/section_why_we_6.svg",active:5===t})]}),(0,n.jsxs)("div",{className:"flex justify-center xl:hidden",children:[(0,n.jsx)(W,{onClick:s,className:"mr-5",children:(0,n.jsx)(a.Z,{name:"left",color:"#7F52DD",size:18})}),(0,n.jsx)(W,{onClick:i,className:"ml-5",children:(0,n.jsx)(a.Z,{name:"right",color:"#7F52DD",size:18})})]})]})}function D(){var e=(0,r.$)().t,t=w(5,1e4),s=t.index,i=t.toLeft,a=t.toRight,o=t.setIndex;return(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:"px-4 py-16 xl:max-w-5xl xl:w-full xl:mx-auto xl:flex xl:gap-36 xl:px-0",children:[(0,n.jsxs)("div",{className:"hidden bg-why-whe xl:flex xl:items-center xl:justify-center flex-col xl:max-w-lg xl:w-full h-auto",style:{height:"450px"},children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)(z,{src:"img/section_why_we_1.svg",active:0===s,onClick:function(){return o(0)}}),(0,n.jsx)(z,{src:"img/section_why_we_2.svg",active:1===s,onClick:function(){return o(1)}}),(0,n.jsx)(z,{src:"img/section_why_we_3.svg",active:2===s,onClick:function(){return o(2)}})]}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)(z,{src:"img/section_why_we_4.svg",active:3===s,onClick:function(){return o(3)}}),(0,n.jsx)(z,{src:"img/section_why_we_5.svg",active:4===s,onClick:function(){return o(4)}}),(0,n.jsx)(z,{src:"img/section_why_we_6.svg",active:5===s,onClick:function(){return o(5)}})]})]}),(0,n.jsxs)("article",{className:"xl:w-1/2",children:[(0,n.jsx)("h2",{className:"text-tagline font-sofia text-md mb-6 xl:mb-11 xl:mt-24",children:e("WHY WE?")}),(0,n.jsx)(E,{t:e,index:s})]}),(0,n.jsx)(S,{index:s,onClickLeft:i,onClickRight:a})]})})}function R(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.Z,{}),(0,n.jsx)(d,{}),(0,n.jsx)(y,{}),(0,n.jsx)(D,{}),(0,n.jsx)(k,{}),(0,n.jsx)(C,{}),(0,n.jsx)(i.Z,{})]})}},5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7655)}])}},function(e){e.O(0,[946,666,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);