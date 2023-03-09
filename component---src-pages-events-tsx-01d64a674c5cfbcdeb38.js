/*! For license information please see component---src-pages-events-tsx-01d64a674c5cfbcdeb38.js.LICENSE.txt */
(self.webpackChunkbugs_nyu_github_io=self.webpackChunkbugs_nyu_github_io||[]).push([[512],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},5815:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294);const l={base:"",disabled:"opacity-50 cursor-not-allowed",size:{small:"px-2 py-1 text-sm",normal:"px-4 py-2",large:"px-8 py-3 text-lg"},radius:{small:"rounded-sm",normal:"rounded",large:"rounded-lg"},variant:{default:"bg-white border-gray-300 border hover:bg-gray-100 text-black",primary:"bg-neutral-900 hover:bg-neutral-800 text-white",secondary:"bg-gray-200 hover:bg-gray-800 text-gray-900 hover:text-white"}},s=o.forwardRef(((e,t)=>{let{children:r,type:n,className:s,variant:i="default",size:c="normal",radius:m="normal",disabled:u,...d}=e;return o.createElement("button",Object.assign({ref:t,disabled:u,type:n,className:a()(l.base,l.size[c],l.radius[m],l.variant[i],u&&l.disabled,s)},d),r)}));t.Z=s},4223:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294);const l={base:"bg-white border-gray-300 border",size:{small:"p-4 text-sm",normal:"p-8",large:"p-16 text-lg"},radius:{small:"rounded-sm",normal:"rounded-lg",large:"rounded-2xl"},shadow:{none:"",normal:"drop-shadow-[0_8px_16px_rgba(151,151,151,0.25)]"}},s=o.forwardRef(((e,t)=>{let{children:r,className:n,size:s="normal",radius:i="normal",shadow:c="none",...m}=e;return o.createElement("div",Object.assign({className:a()(l.base,l.size[s],l.radius[i],l.shadow[c],n)},m,{ref:t}),r)}));t.Z=s},5482:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(1292),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};var l=n.forwardRef((function(e,t){var r=n.useContext(a.s),l=o(o({},r),e);return n.createElement("svg",o({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},l),n.createElement("path",{d:"M12 6v6h6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};var i=n.forwardRef((function(e,t){var r=n.useContext(a.s),o=s(s({},r),e);return n.createElement("svg",s({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},o),n.createElement("path",{d:"M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z",stroke:"currentColor"}),n.createElement("path",{d:"M12 11a1 1 0 100-2 1 1 0 000 2z",fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),c=r(4223);const m=["January","February","March","April","May","June","July","August","September","October","November","December"];var u=e=>{let{events:t,count:r}=e;return t=t.slice(0,r),t=t.sort(((e,t)=>e.date.getTime()-t.date.getTime())),0===t.length?null:n.createElement(n.Fragment,null,n.createElement("div",{className:"grid gap-12 grid-cols-1 sm:grid-cols-2"},t.map((e=>n.createElement(c.Z,{shadow:"none",key:e.title},n.createElement("div",{className:"-m-8 mb-0"},n.createElement("img",{className:"w-full h-48 rounded-t-lg object-cover",src:e.cover,alt:""})),n.createElement("h3",{className:"mt-6 text-xl font-bold"},e.title),n.createElement("ul",{className:"text-zinc-600"},n.createElement("li",{className:"my-2 flex gap-x-2"},n.createElement(l,{className:"flex-shrink-0 inline-block"}),(e=>m[e.date.getMonth()]+" "+e.date.getDate()+", "+e.date.getFullYear()+" at "+e.startTime+" - "+e.endTime)(e)),n.createElement("li",{className:"my-2 flex gap-x-2"},n.createElement(i,{className:"flex-shrink-0 inline-block"}),e.location)),n.createElement("p",{className:"mt-4"},e.description))))))}},8721:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(7294),a=r(1883),o=r(1292),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};var s=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=l(l({},r),e);return n.createElement("svg",l({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};var c=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=i(i({},r),e);return n.createElement("svg",i({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M3 5h18M3 12h18M3 19h18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),m=r(5815);const u=[{to:"/about",value:"About us"},{to:"/projects",value:"Projects"},{to:"/events",value:"Events"}];var d=n.forwardRef((e=>{let{...t}=e;const{0:r,1:o}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>o(!1);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);return n.createElement("header",t,n.createElement("nav",{className:"flex max-w-5xl mx-auto items-center justify-between flex-wrap p-8"},n.createElement("div",{className:"flex items-center flex-shrink-0"},n.createElement(a.Link,{to:"/",className:"text-xl font-bold"},"BUGS")),n.createElement("div",{className:"block md:hidden"},n.createElement("button",{className:"flex w-10 h-10 items-center justify-center",onClick:()=>o((e=>!e))},r?n.createElement(s,null):n.createElement(c,null))),n.createElement("div",{className:(r?"h-44":"h-0")+" w-full block truncate flex-grow mt-2 transition-height duration-100 md:mt-0 md:flex md:items-center md:w-auto md:h-auto"},n.createElement("div",{className:"md:flex md:flex-row md:flex-grow md:space-x-12 md:justify-center"},u.map((e=>{let{to:t,value:r}=e;return n.createElement(a.Link,{key:r,to:t,className:"text-zinc-800 block mb-4 md:mb-0 md:inline-block"},r)}))),n.createElement("div",null,n.createElement("a",{href:"https://discord.gg/75jgtXy7rz"},n.createElement(m.Z,{variant:"primary",className:"px-6"},"Join"))))))})),p=r(762),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};var h=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=f(f({},r),e);return n.createElement("svg",f({width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",strokeWidth:1.5,fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g.apply(this,arguments)};var v=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=g(g({},r),e);return n.createElement("svg",g({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M7 9l5 3.5L17 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z",stroke:"currentColor"}))}));const w=[{to:"https://github.com/BUGS-NYU",getMark:()=>n.createElement(p.Z,null)},{to:"https://discord.com/invite/75jgtXy7rz",getMark:()=>n.createElement(h,null)},{to:"mailto:bugsnyu@gmail.com",getMark:()=>n.createElement(v,null)}];var b=n.forwardRef((e=>{let{className:t,...r}=e;return n.createElement("footer",Object.assign({className:"w-full bg-[#3D1E5B] text-white"},r),n.createElement("div",{className:"mx-auto max-w-5xl px-8 py-24 flex flex-col gap-12 items-start justify-between md:flex-row md:items-center md:gap-0"},n.createElement("div",{className:"flex flex-col gap-y-4"},n.createElement("p",{className:"text-xl font-bold"},"BUGS @ NYU"),n.createElement("p",null,"NYU’s premier open source club"),n.createElement("div",{className:"flex flex-row gap-x-4"},w.map((e=>{let{to:t,getMark:r}=e;return n.createElement("a",{key:t,href:t,target:"_blank",rel:"noopener noreferrer"},r())})))),n.createElement("p",null,n.createElement("a",{href:"https://discord.com/invite/75jgtXy7rz",className:"text-purple-400 font-bold",target:"_blank",rel:"noopener noreferrer"},"Join us")," ","now and contribute to this website!")))}));var x=e=>{let{children:t}=e;return n.createElement("div",{className:"min-h-screen antialiased"},n.createElement(d,null),n.createElement("main",{className:"w-full min-h-[calc(100vh-12rem)]"},t),n.createElement(b,null))}},1304:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});const n=[{title:"Meet and Greet",description:"Join us and learn about what BUGS@NYU is and meet the e-board!",date:new Date("February 17, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/meet-and-greet.gif"},{title:"Git Workshop",description:"Customize your GitHub profile while learning about the Git version control system.",date:new Date("February 24, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/git-workshop.gif"},{title:"Web Scraping Workshop",description:"Learn about web scraping with Playwright.",date:new Date("March 24, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/scraping.jpeg"},{title:"Web Development Workshop",description:"Build your own website in React in our hands-on workshop.",date:new Date("March 31, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/web-dev.jpeg"},{title:"Club Project: Part 1",description:"TBD",date:new Date("April 14, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/tbd.png"},{title:"Club Project: Part 2",description:"TBD",date:new Date("April 28, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/tbd.png"},{title:"End of semester party!",description:"Join us for an end of semester get-together!",date:new Date("May 5, 2023"),startTime:"6 PM",endTime:"8 PM",location:"WWH Room 101",cover:"/images/events/tbd.png"}]},2571:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return s}});var n=r(7294),a=r(1304),o=r(8721),l=r(5482);t.default=()=>{const e=(new Date).setHours(0,0,0,0),t=a.U.filter((t=>{let{date:r}=t;return r.getTime()>=e})),r=a.U.filter((t=>{let{date:r}=t;return r.getTime()<e}));return n.createElement(o.Z,null,n.createElement("div",{className:"max-w-5xl mx-auto px-8 flex flex-col py-8"},n.createElement(n.Fragment,null,t.length>0?n.createElement(n.Fragment,null,n.createElement("h2",{className:"mb-4 text-2xl font-bold"},"Upcoming Events"),n.createElement(l.Z,{events:t})):null),n.createElement(n.Fragment,null,r.length>0?n.createElement(n.Fragment,null,n.createElement("h2",{className:"mt-8 mb-4 text-2xl font-bold"},"Past Events"),n.createElement(l.Z,{events:r})):null)))};const s=()=>n.createElement("title",null,"Events")},762:function(e,t,r){"use strict";var n=r(7294),a=r(1292),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};var l=n.forwardRef((function(e,t){var r=n.useContext(a.s),l=o(o({},r),e);return n.createElement("svg",o({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},l),n.createElement("path",{d:"M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))}));t.Z=l},1292:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var n=r(7294).createContext({})}}]);
//# sourceMappingURL=component---src-pages-events-tsx-01d64a674c5cfbcdeb38.js.map