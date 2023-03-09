/*! For license information please see component---src-pages-index-tsx-57c05c004eb7206879bd.js.LICENSE.txt */
(self.webpackChunkbugs_nyu_github_io=self.webpackChunkbugs_nyu_github_io||[]).push([[691],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},5815:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294);const l={base:"",disabled:"opacity-50 cursor-not-allowed",size:{small:"px-2 py-1 text-sm",normal:"px-4 py-2",large:"px-8 py-3 text-lg"},radius:{small:"rounded-sm",normal:"rounded",large:"rounded-lg"},variant:{default:"bg-white border-gray-300 border hover:bg-gray-100 text-black",primary:"bg-neutral-900 hover:bg-neutral-800 text-white",secondary:"bg-gray-200 hover:bg-gray-800 text-gray-900 hover:text-white"}},s=o.forwardRef(((e,t)=>{let{children:r,type:n,className:s,variant:i="default",size:c="normal",radius:m="normal",disabled:u,...d}=e;return o.createElement("button",Object.assign({ref:t,disabled:u,type:n,className:a()(l.base,l.size[c],l.radius[m],l.variant[i],u&&l.disabled,s)},d),r)}));t.Z=s},4223:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294);const l={base:"bg-white border-gray-300 border",size:{small:"p-4 text-sm",normal:"p-8",large:"p-16 text-lg"},radius:{small:"rounded-sm",normal:"rounded-lg",large:"rounded-2xl"},shadow:{none:"",normal:"drop-shadow-[0_8px_16px_rgba(151,151,151,0.25)]"}},s=o.forwardRef(((e,t)=>{let{children:r,className:n,size:s="normal",radius:i="normal",shadow:c="none",...m}=e;return o.createElement("div",Object.assign({className:a()(l.base,l.size[s],l.radius[i],l.shadow[c],n)},m,{ref:t}),r)}));t.Z=s},5482:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(1292),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};var l=n.forwardRef((function(e,t){var r=n.useContext(a.s),l=o(o({},r),e);return n.createElement("svg",o({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},l),n.createElement("path",{d:"M12 6v6h6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};var i=n.forwardRef((function(e,t){var r=n.useContext(a.s),o=s(s({},r),e);return n.createElement("svg",s({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},o),n.createElement("path",{d:"M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z",stroke:"currentColor"}),n.createElement("path",{d:"M12 11a1 1 0 100-2 1 1 0 000 2z",fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),c=r(4223);const m=["January","February","March","April","May","June","July","August","September","October","November","December"];var u=e=>{let{events:t,count:r}=e;return t=t.slice(0,r),t=t.sort(((e,t)=>e.date.getTime()-t.date.getTime())),0===t.length?null:n.createElement(n.Fragment,null,n.createElement("div",{className:"grid gap-12 grid-cols-1 sm:grid-cols-2"},t.map((e=>n.createElement(c.Z,{shadow:"none",key:e.title},n.createElement("div",{className:"-m-8 mb-0"},n.createElement("img",{className:"w-full h-48 rounded-t-lg object-cover",src:e.cover,alt:""})),n.createElement("h3",{className:"mt-6 text-xl font-bold"},e.title),n.createElement("ul",{className:"text-zinc-600"},n.createElement("li",{className:"my-2 flex gap-x-2"},n.createElement(l,{className:"flex-shrink-0 inline-block"}),(e=>m[e.date.getMonth()]+" "+e.date.getDate()+", "+e.date.getFullYear()+" at "+e.startTime+" - "+e.endTime)(e)),n.createElement("li",{className:"my-2 flex gap-x-2"},n.createElement(i,{className:"flex-shrink-0 inline-block"}),e.location)),n.createElement("p",{className:"mt-4"},e.description))))))}},8721:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(7294),a=r(1883),o=r(1292),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};var s=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=l(l({},r),e);return n.createElement("svg",l({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};var c=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=i(i({},r),e);return n.createElement("svg",i({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M3 5h18M3 12h18M3 19h18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),m=r(5815);const u=[{to:"/about",value:"About us"},{to:"/projects",value:"Projects"},{to:"/events",value:"Events"}];var d=n.forwardRef((e=>{let{...t}=e;const{0:r,1:o}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>o(!1);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);return n.createElement("header",t,n.createElement("nav",{className:"flex max-w-5xl mx-auto items-center justify-between flex-wrap p-8"},n.createElement("div",{className:"flex items-center flex-shrink-0"},n.createElement(a.Link,{to:"/",className:"text-xl font-bold"},"BUGS")),n.createElement("div",{className:"block md:hidden"},n.createElement("button",{className:"flex w-10 h-10 items-center justify-center",onClick:()=>o((e=>!e))},r?n.createElement(s,null):n.createElement(c,null))),n.createElement("div",{className:(r?"h-44":"h-0")+" w-full block truncate flex-grow mt-2 transition-height duration-100 md:mt-0 md:flex md:items-center md:w-auto md:h-auto"},n.createElement("div",{className:"md:flex md:flex-row md:flex-grow md:space-x-12 md:justify-center"},u.map((e=>{let{to:t,value:r}=e;return n.createElement(a.Link,{key:r,to:t,className:"text-zinc-800 block mb-4 md:mb-0 md:inline-block"},r)}))),n.createElement("div",null,n.createElement("a",{href:"https://discord.gg/75jgtXy7rz"},n.createElement(m.Z,{variant:"primary",className:"px-6"},"Join"))))))})),p=r(762),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};var C=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=f(f({},r),e);return n.createElement("svg",f({width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",strokeWidth:1.5,fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},h.apply(this,arguments)};var g=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=h(h({},r),e);return n.createElement("svg",h({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M7 9l5 3.5L17 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z",stroke:"currentColor"}))}));const v=[{to:"https://github.com/BUGS-NYU",getMark:()=>n.createElement(p.Z,null)},{to:"https://discord.com/invite/75jgtXy7rz",getMark:()=>n.createElement(C,null)},{to:"mailto:bugsnyu@gmail.com",getMark:()=>n.createElement(g,null)}];var w=n.forwardRef((e=>{let{className:t,...r}=e;return n.createElement("footer",Object.assign({className:"w-full bg-[#3D1E5B] text-white"},r),n.createElement("div",{className:"mx-auto max-w-5xl px-8 py-24 flex flex-col gap-12 items-start justify-between md:flex-row md:items-center md:gap-0"},n.createElement("div",{className:"flex flex-col gap-y-4"},n.createElement("p",{className:"text-xl font-bold"},"BUGS @ NYU"),n.createElement("p",null,"NYU’s premier open source club"),n.createElement("div",{className:"flex flex-row gap-x-4"},v.map((e=>{let{to:t,getMark:r}=e;return n.createElement("a",{key:t,href:t,target:"_blank",rel:"noopener noreferrer"},r())})))),n.createElement("p",null,n.createElement("a",{href:"https://discord.com/invite/75jgtXy7rz",className:"text-purple-400 font-bold",target:"_blank",rel:"noopener noreferrer"},"Join us")," ","now and contribute to this website!")))}));var x=e=>{let{children:t}=e;return n.createElement("div",{className:"min-h-screen antialiased"},n.createElement(d,null),n.createElement("main",{className:"w-full min-h-[calc(100vh-12rem)]"},t),n.createElement(w,null))}},1304:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});const n=[{title:"Meet and Greet",description:"Join us and learn about what BUGS@NYU is and meet the e-board!",date:new Date("February 17, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/meet-and-greet.gif"},{title:"Git Workshop",description:"Customize your GitHub profile while learning about the Git version control system.",date:new Date("February 24, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/git-workshop.gif"},{title:"Web Scraping Workshop",description:"Learn about web scraping with Playwright.",date:new Date("March 24, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/scraping.jpeg"},{title:"Web Development Workshop",description:"Build your own website in React in our hands-on workshop.",date:new Date("March 31, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/web-dev.jpeg"},{title:"Club Project: Part 1",description:"TBD",date:new Date("April 14, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/tbd.png"},{title:"Club Project: Part 2",description:"TBD",date:new Date("April 28, 2023"),startTime:"5 PM",endTime:"6 PM",location:"WWH Room 101",cover:"/images/events/tbd.png"},{title:"End of semester party!",description:"Join us for an end of semester get-together!",date:new Date("May 5, 2023"),startTime:"6 PM",endTime:"8 PM",location:"WWH Room 101",cover:"/images/events/tbd.png"}]},236:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return g},default:function(){return h}});var n=r(7294),a=r(1883),o=r(5815),l=r(8721),s=r(3e3),i=r.n(s),c=r(5482),m=r(1304),u=r(1292),d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)};var p=n.forwardRef((function(e,t){var r=n.useContext(u.s),a=d(d({},r),e);return n.createElement("svg",d({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M6 12h12.5m0 0l-6-6m6 6l-6 6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))}));const f=(new Date).setHours(0,0,0,0),C=m.U.filter((e=>{let{date:t}=e;return t.getTime()>=f}));var h=()=>n.createElement(l.Z,null,n.createElement("div",{className:"max-w-5xl mx-auto px-8 flex space-x-32 items-center py-24 lg:py-28"},n.createElement("div",null,n.createElement("h1",{className:"text-5xl lg:text-8xl font-bold"},"BUGS @ NYU"),n.createElement("p",{className:"mt-6"},"NYU’s premier ",n.createElement("span",{className:"text-violet-600"},"open source")," club connecting students to create an inclusive environment to work on projects together."),n.createElement("div",{className:"mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0"},n.createElement("a",{href:"https://discord.gg/75jgtXy7rz"},n.createElement(o.Z,{variant:"primary"},"Join the Club")),n.createElement(a.Link,{to:"/about"},n.createElement(o.Z,null,"Learn More")))),n.createElement("div",{className:"hidden md:block"},n.createElement(i(),null))),n.createElement("div",{className:"bg-[#F9F9FF]"},n.createElement("div",{className:"max-w-5xl mx-auto px-8 flex flex-col items-center py-24 lg:py-28 text-center"},n.createElement("p",{className:"text-violet-600 font-bold"},"The Mission"),n.createElement("h2",{className:"mt-2 text-4xl font-bold"},"Create, Contribute, Open Source"),n.createElement("p",{className:"mt-6 text-zinc-800"},"We aim to bring students together to create impactful projects and develop skills that matter. Learn from guest speakers, interactive workshops, and more."))),n.createElement("div",{className:"max-w-5xl mx-auto px-8 flex flex-col py-24 lg:py-28"},n.createElement("p",{className:"text-violet-600 font-bold"},"Join Us"),n.createElement("h2",{className:"mt-2 text-4xl font-bold"},"Upcoming Events"),n.createElement("p",{className:"mt-4 mb-12"},"Take part in any of our upcoming events and workshops!"),n.createElement(c.Z,{events:C,count:2}),n.createElement("div",{className:"mt-8 flex justify-center"},n.createElement(a.Link,{to:"/events"},n.createElement(o.Z,{variant:"primary",className:"flex gap-2"},"View All ",n.createElement(p,{className:"inline-block"}))))));const g=()=>n.createElement("title",null,"Home Page")},3e3:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,n.createElement("path",{d:"M56.9672 173.984C54.2121 173.711 51.4903 173.746 48.9382 173.118C44.7936 172.097 42.0441 168.184 41.8062 163.555C41.5142 157.875 41.3236 152.19 41.0176 146.51C40.9453 145.175 40.7089 143.818 40.325 142.536C39.4085 139.466 37.2667 137.65 34.022 137.104C33.5686 137.029 33.1152 136.954 32.5923 136.868V130.287C33.2876 130.158 34.0192 130.046 34.7382 129.884C37.5546 129.247 39.5462 127.55 40.2249 124.871C40.8424 122.435 41.0622 119.876 41.2054 117.357C41.4293 113.435 41.3695 109.5 41.567 105.577C41.688 103.17 42.1039 100.797 43.3097 98.6109C45.1066 95.35 47.9855 93.7972 51.6377 93.5224C53.3776 93.3918 55.1355 93.5004 56.9644 93.5004V99.7597C55.8129 99.8532 54.6585 99.9191 53.5097 100.044C50.411 100.381 49.0856 101.455 48.7685 104.455C48.4375 107.581 48.4653 110.742 48.304 113.888C48.1454 116.989 48.1288 120.111 47.7226 123.182C47.1329 127.647 44.7311 131.008 40.5281 133.038C40.3042 133.145 40.0969 133.287 39.8925 133.427C39.8327 133.468 39.8104 133.559 39.8285 133.527C41.2193 134.518 42.6991 135.391 43.9536 136.504C46.7978 139.031 47.7574 142.451 47.9869 146.013C48.3082 150.991 48.361 155.987 48.5293 160.975C48.5446 161.424 48.5307 161.879 48.5961 162.323C49.1107 165.812 50.5028 167.029 54.1592 167.216C55.073 167.263 55.9867 167.311 56.9686 167.361C56.9672 169.491 56.9672 171.523 56.9672 173.984ZM157.827 99.7611V93.635C165.603 92.6841 172.329 94.6712 173.01 104.134C173.421 109.843 173.456 115.578 173.857 121.287C173.98 123.031 174.511 124.849 175.297 126.423C176.433 128.698 178.597 129.816 181.176 130.088C181.733 130.147 182.28 130.116 182.272 130.916C182.249 132.874 182.265 134.834 182.265 136.766C182.045 136.851 181.934 136.925 181.818 136.934C176.757 137.332 174.099 140.614 173.821 145.826C173.551 150.891 173.503 155.966 173.268 161.033C173.151 163.565 172.794 166.073 171.564 168.384C169.773 171.754 166.812 173.346 163.075 173.654C161.375 173.794 159.652 173.678 157.849 173.678V167.41C159.21 167.286 160.587 167.255 161.925 167.018C164.692 166.529 165.796 165.452 166.037 162.701C166.304 159.65 166.303 156.577 166.463 153.516C166.628 150.335 166.639 147.126 167.091 143.982C167.748 139.414 170.17 135.92 174.592 133.942C174.741 133.875 174.871 133.769 175.159 133.586C174.752 133.335 174.433 133.111 174.09 132.932C169.45 130.523 167.187 126.603 166.834 121.631C166.527 117.309 166.489 112.97 166.312 108.64C166.251 107.129 166.221 105.608 166.019 104.113C165.68 101.596 164.315 100.351 161.74 100.073C160.461 99.9356 159.174 99.8669 157.827 99.7611ZM67.2048 116.313C67.2048 114.565 67.17 113.058 67.2326 111.554C67.2465 111.224 67.5344 110.809 67.8223 110.599C77.3339 103.621 87.7356 98.5257 99.6102 96.7956C109.488 95.3555 119.147 96.3971 128.505 99.8697C135.526 102.475 141.925 106.166 147.942 110.515C148.266 110.75 148.623 111.182 148.642 111.538C148.72 113.04 148.676 114.549 148.676 116.265C147.904 115.853 147.286 115.538 146.684 115.198C141.533 112.299 136.369 109.427 130.699 107.558C120.581 104.226 110.24 103.092 99.6227 104.409C89.3295 105.684 79.8582 109.217 70.8974 114.198C69.7347 114.841 68.5914 115.516 67.2048 116.313ZM67.2048 181.908C94.4281 198.186 121.446 198.829 148.662 181.814C148.662 183.709 148.688 185.314 148.634 186.916C148.626 187.16 148.288 187.443 148.037 187.621C140.6 192.959 132.676 197.389 123.729 199.861C116.35 201.9 108.842 202.493 101.219 201.59C88.6828 200.106 77.8179 194.811 67.8098 187.582C67.5233 187.374 67.2452 186.953 67.2312 186.622C67.1701 185.122 67.2048 183.617 67.2048 181.908ZM148.677 173.495C121.448 156.436 94.4379 157.135 67.2271 173.374C67.2271 171.589 67.2062 169.947 67.2521 168.306C67.2577 168.094 67.5845 167.855 67.8098 167.692C78.3019 160.068 89.7537 154.641 102.965 153.516C113.62 152.609 123.8 154.493 133.458 159.023C138.533 161.404 143.292 164.28 147.841 167.509C148.449 167.94 148.725 168.377 148.693 169.118C148.636 170.459 148.677 171.805 148.677 173.495ZM67.2034 87.7275C67.2034 86.0304 67.1617 84.5559 67.2326 83.0883C67.2507 82.7173 67.5372 82.2473 67.8515 82.0178C77.2644 75.1291 87.5451 70.0584 99.275 68.2926C109.229 66.7934 118.978 67.7869 128.426 71.2842C135.447 73.8827 141.858 77.5504 147.857 81.9244C148.273 82.2281 148.601 82.8794 148.641 83.3947C148.75 84.7607 148.677 86.1403 148.677 87.8305C121.473 70.7606 94.4184 71.4601 67.2034 87.7275ZM148.677 144.937C121.434 127.877 94.3781 128.565 67.2062 144.835C67.2062 143.1 67.177 141.558 67.2326 140.019C67.2438 139.725 67.5303 139.362 67.7959 139.168C77.4535 132.094 88.0055 126.937 100.082 125.288C109.927 123.944 119.532 125.035 128.833 128.551C135.719 131.155 142.008 134.779 147.912 139.068C148.3 139.35 148.61 139.958 148.644 140.436C148.74 141.818 148.677 143.211 148.677 144.937ZM154.727 0.0252688C153.224 5.3543 151.787 10.469 150.338 15.5795C145.928 31.1213 141.502 46.6604 137.12 62.2105C136.867 63.1065 136.541 63.4954 135.537 63.4363C134.004 63.347 132.461 63.4129 130.726 63.4129C131.212 61.6787 131.644 60.1163 132.088 58.5566C137.513 39.4749 142.95 20.3973 148.339 1.30737C148.634 0.263 149.1 -0.0489363 150.143 0.00603042C151.597 0.0843581 153.06 0.0252688 154.727 0.0252688ZM82.2323 63.3621H76.2547C70.2729 42.3153 64.2925 21.2795 58.2551 0.0417588C60.2328 0.0417588 62.0241 -0.00496293 63.8071 0.0898547C64.095 0.104971 64.4817 0.713727 64.5957 1.10949C66.3537 7.20118 68.0768 13.3011 69.8042 19.4011C73.8736 33.7639 77.9417 48.1281 82.0098 62.4922C82.0751 62.7217 82.1294 62.9567 82.2323 63.3621ZM6.43429 102.94C7.0226 103.206 7.41897 103.403 7.82786 103.57C15.1545 106.57 22.4784 109.578 29.8204 112.545C30.6229 112.869 31.004 113.227 30.9456 114.129C30.8565 115.513 30.9219 116.907 30.9219 118.502C30.4532 118.314 30.093 118.174 29.7384 118.025C20.2156 114.013 10.6998 109.989 1.16459 106.005C0.350981 105.666 -0.0120136 105.274 0.0616982 104.388C0.172961 103.055 -0.292953 101.428 0.341247 100.456C0.940677 99.5371 2.63049 99.2788 3.85716 98.7662C12.4717 95.1727 21.089 91.5889 29.7078 88.0037C30.0457 87.8635 30.3906 87.7371 30.9191 87.531C30.9191 89.2734 30.972 90.8881 30.8746 92.4931C30.8552 92.816 30.3141 93.2324 29.9219 93.3932C23.057 96.202 16.1782 98.9778 9.30349 101.763C8.41756 102.123 7.5358 102.489 6.43429 102.94ZM207.592 102.942C204.658 101.75 201.965 100.654 199.273 99.5618C194.288 97.5391 189.317 95.4833 184.308 93.5237C183.344 93.1472 183.056 92.6745 183.113 91.7236C183.192 90.3851 183.133 89.0398 183.133 87.5145C184.468 88.0683 185.651 88.5561 186.832 89.0481C195.493 92.6525 204.149 96.2707 212.823 99.8435C213.652 100.184 214.001 100.599 213.939 101.472C213.841 102.812 214.285 104.436 213.652 105.419C213.058 106.342 211.377 106.617 210.154 107.132C201.666 110.717 193.174 114.292 184.682 117.867C184.229 118.058 183.765 118.227 183.138 118.473C183.138 116.721 183.085 115.1 183.184 113.488C183.204 113.172 183.758 112.774 184.152 112.611C191.473 109.584 198.807 106.587 206.136 103.58C206.548 103.412 206.953 103.224 207.592 102.942Z",fill:"black"}))}a.defaultProps={width:"214",height:"202",viewBox:"0 0 214 202",fill:"none"},e.exports=a,a.default=a},762:function(e,t,r){"use strict";var n=r(7294),a=r(1292),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};var l=n.forwardRef((function(e,t){var r=n.useContext(a.s),l=o(o({},r),e);return n.createElement("svg",o({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},l),n.createElement("path",{d:"M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))}));t.Z=l},1292:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var n=r(7294).createContext({})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-57c05c004eb7206879bd.js.map