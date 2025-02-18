/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fancyapps/ui/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Q),
/* harmony export */   Fancybox: () => (/* binding */ Oe),
/* harmony export */   Panzoom: () => (/* binding */ I)
/* harmony export */ });
const t=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),e=function(t){if(!(t&&t instanceof Element&&t.offsetParent))return!1;const e=t.scrollHeight>t.clientHeight,i=window.getComputedStyle(t).overflowY,n=-1!==i.indexOf("hidden"),s=-1!==i.indexOf("visible");return e&&!n&&!s},i=function(t,n=void 0){return!(!t||t===document.body||n&&t===n)&&(e(t)?t:i(t.parentElement,n))},n=function(t){var e=(new DOMParser).parseFromString(t,"text/html").body;if(e.childElementCount>1){for(var i=document.createElement("div");e.firstChild;)i.appendChild(e.firstChild);return i}return e.firstChild},s=t=>`${t||""}`.split(" ").filter((t=>!!t)),o=(t,e,i)=>{t&&s(e).forEach((e=>{t.classList.toggle(e,i||!1)}))};class a{constructor(t){Object.defineProperty(this,"pageX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pageY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nativePointer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,this.id=self.Touch&&t instanceof Touch?t.identifier:-1,this.time=Date.now()}}const r={passive:!1};class l{constructor(t,{start:e=(()=>!0),move:i=(()=>{}),end:n=(()=>{})}){Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"moveCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"endCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"startPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.element=t,this.startCallback=e,this.moveCallback=i,this.endCallback=n;for(const t of["onPointerStart","onTouchStart","onMove","onTouchEnd","onPointerEnd","onWindowBlur"])this[t]=this[t].bind(this);this.element.addEventListener("mousedown",this.onPointerStart,r),this.element.addEventListener("touchstart",this.onTouchStart,r),this.element.addEventListener("touchmove",this.onMove,r),this.element.addEventListener("touchend",this.onTouchEnd),this.element.addEventListener("touchcancel",this.onTouchEnd)}onPointerStart(t){if(!t.buttons||0!==t.button)return;const e=new a(t);this.currentPointers.some((t=>t.id===e.id))||this.triggerPointerStart(e,t)&&(window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseup",this.onPointerEnd),window.addEventListener("blur",this.onWindowBlur))}onTouchStart(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerStart(new a(e),t);window.addEventListener("blur",this.onWindowBlur)}onMove(t){const e=this.currentPointers.slice(),i="changedTouches"in t?Array.from(t.changedTouches||[]).map((t=>new a(t))):[new a(t)],n=[];for(const t of i){const e=this.currentPointers.findIndex((e=>e.id===t.id));e<0||(n.push(t),this.currentPointers[e]=t)}n.length&&this.moveCallback(t,this.currentPointers.slice(),e)}onPointerEnd(t){t.buttons>0&&0!==t.button||(this.triggerPointerEnd(t,new a(t)),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur))}onTouchEnd(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerEnd(t,new a(e))}triggerPointerStart(t,e){return!!this.startCallback(e,t,this.currentPointers.slice())&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}triggerPointerEnd(t,e){const i=this.currentPointers.findIndex((t=>t.id===e.id));i<0||(this.currentPointers.splice(i,1),this.startPointers.splice(i,1),this.endCallback(t,e,this.currentPointers.slice()))}onWindowBlur(){this.clear()}clear(){for(;this.currentPointers.length;){const t=this.currentPointers[this.currentPointers.length-1];this.currentPointers.splice(this.currentPointers.length-1,1),this.startPointers.splice(this.currentPointers.length-1,1),this.endCallback(new Event("touchend",{bubbles:!0,cancelable:!0,clientX:t.clientX,clientY:t.clientY}),t,this.currentPointers.slice())}}stop(){this.element.removeEventListener("mousedown",this.onPointerStart,r),this.element.removeEventListener("touchstart",this.onTouchStart,r),this.element.removeEventListener("touchmove",this.onMove,r),this.element.removeEventListener("touchend",this.onTouchEnd),this.element.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur)}}function c(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0}function h(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}const d=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t),u=(t,...e)=>{const i=e.length;for(let n=0;n<i;n++){const i=e[n]||{};Object.entries(i).forEach((([e,i])=>{const n=Array.isArray(i)?[]:{};t[e]||Object.assign(t,{[e]:n}),d(i)?Object.assign(t[e],u(n,i)):Array.isArray(i)?Object.assign(t,{[e]:[...i]}):Object.assign(t,{[e]:i})}))}return t},p=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class f{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?u({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let i=p(t,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...e)),i}optionFor(t,e,i,...n){let s=p(e,t);var o;"string"!=typeof(o=s)||isNaN(o)||isNaN(parseFloat(o))||(s=parseFloat(s)),"true"===s&&(s=!0),"false"===s&&(s=!1),s&&"function"==typeof s&&(s=s.call(this,this,t,...n));let a=p(e,this.options);return a&&"function"==typeof a?s=a.call(this,this,t,...n,s):void 0===s&&(s=a),void 0===s?i:s}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let n="";return i?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(f,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.36"}),Object.defineProperty(f,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class g extends f{constructor(t={}){super(t),Object.defineProperty(this,"plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}})}attachPlugins(t={}){const e=new Map;for(const[i,n]of Object.entries(t)){const t=this.option(i),s=this.plugins[i];s||!1===t?s&&!1===t&&(s.detach(),delete this.plugins[i]):e.set(i,new n(this,t||{}))}for(const[t,i]of e)this.plugins[t]=i,i.attach()}detachPlugins(t){t=t||Object.keys(this.plugins);for(const e of t){const t=this.plugins[e];t&&t.detach(),delete this.plugins[e]}return this.emit("detachPlugins"),this}}var m;!function(t){t[t.Init=0]="Init",t[t.Error=1]="Error",t[t.Ready=2]="Ready",t[t.Panning=3]="Panning",t[t.Mousemove=4]="Mousemove",t[t.Destroy=5]="Destroy"}(m||(m={}));const v=["a","b","c","d","e","f"],b={PANUP:"Move up",PANDOWN:"Move down",PANLEFT:"Move left",PANRIGHT:"Move right",ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out",TOGGLEZOOM:"Toggle zoom level",TOGGLE1TO1:"Toggle zoom level",ITERATEZOOM:"Toggle zoom level",ROTATECCW:"Rotate counterclockwise",ROTATECW:"Rotate clockwise",FLIPX:"Flip horizontally",FLIPY:"Flip vertically",FITX:"Fit horizontally",FITY:"Fit vertically",RESET:"Reset",TOGGLEFS:"Toggle fullscreen"},y={content:null,width:"auto",height:"auto",panMode:"drag",touch:!0,dragMinThreshold:3,lockAxis:!1,mouseMoveFactor:1,mouseMoveFriction:.12,zoom:!0,pinchToZoom:!0,panOnlyZoomed:"auto",minScale:1,maxScale:2,friction:.25,dragFriction:.35,decelFriction:.05,click:"toggleZoom",dblClick:!1,wheel:"zoom",wheelLimit:7,spinner:!0,bounds:"auto",infinite:!1,rubberband:!0,bounce:!0,maxVelocity:75,transformParent:!1,classes:{content:"f-panzoom__content",isLoading:"is-loading",canZoomIn:"can-zoom_in",canZoomOut:"can-zoom_out",isDraggable:"is-draggable",isDragging:"is-dragging",inFullscreen:"in-fullscreen",htmlHasFullscreen:"with-panzoom-in-fullscreen"},l10n:b},w='<circle cx="25" cy="25" r="20"></circle>',x='<div class="f-spinner"><svg viewBox="0 0 50 50">'+w+w+"</svg></div>",E=t=>t&&null!==t&&t instanceof Element&&"nodeType"in t,S=(t,e)=>{t&&s(e).forEach((e=>{t.classList.remove(e)}))},P=(t,e)=>{t&&s(e).forEach((e=>{t.classList.add(e)}))},C={a:1,b:0,c:0,d:1,e:0,f:0},T=1e5,M=1e4,O="mousemove",A="drag",L="content",z="auto";let R=null,k=null;class I extends g{get fits(){return this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1}get isTouchDevice(){return null===k&&(k=window.matchMedia("(hover: none)").matches),k}get isMobile(){return null===R&&(R=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),R}get panMode(){return this.options.panMode!==O||this.isTouchDevice?A:O}get panOnlyZoomed(){const t=this.options.panOnlyZoomed;return t===z?this.isTouchDevice:t}get isInfinite(){return this.option("infinite")}get angle(){return 180*Math.atan2(this.current.b,this.current.a)/Math.PI||0}get targetAngle(){return 180*Math.atan2(this.target.b,this.target.a)/Math.PI||0}get scale(){const{a:t,b:e}=this.current;return Math.sqrt(t*t+e*e)||1}get targetScale(){const{a:t,b:e}=this.target;return Math.sqrt(t*t+e*e)||1}get minScale(){return this.option("minScale")||1}get fullScale(){const{contentRect:t}=this;return t.fullWidth/t.fitWidth||1}get maxScale(){return this.fullScale*(this.option("maxScale")||1)||1}get coverScale(){const{containerRect:t,contentRect:e}=this,i=Math.max(t.height/e.fitHeight,t.width/e.fitWidth)||1;return Math.min(this.fullScale,i)}get isScaling(){return Math.abs(this.targetScale-this.scale)>1e-5&&!this.isResting}get isContentLoading(){const t=this.content;return!!(t&&t instanceof HTMLImageElement)&&!t.complete}get isResting(){if(this.isBouncingX||this.isBouncingY)return!1;for(const t of v){const e="e"==t||"f"===t?1e-4:1e-5;if(Math.abs(this.target[t]-this.current[t])>e)return!1}return!(!this.ignoreBounds&&!this.checkBounds().inBounds)}constructor(t,e={},i={}){var s;if(super(e),Object.defineProperty(this,"pointerTracker",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"updateTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"rAF",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isTicking",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"ignoreBounds",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingX",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingY",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"clicks",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"trackingPoints",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"cwd",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"pmme",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"friction",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:m.Init}),Object.defineProperty(this,"isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"spinner",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"containerRect",{enumerable:!0,configurable:!0,writable:!0,value:{width:0,height:0,innerWidth:0,innerHeight:0}}),Object.defineProperty(this,"contentRect",{enumerable:!0,configurable:!0,writable:!0,value:{top:0,right:0,bottom:0,left:0,fullWidth:0,fullHeight:0,fitWidth:0,fitHeight:0,width:0,height:0}}),Object.defineProperty(this,"dragStart",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,top:0,left:0,time:0}}),Object.defineProperty(this,"dragOffset",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,time:0}}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},C)}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},C)}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:{a:0,b:0,c:0,d:0,e:0,f:0}}),Object.defineProperty(this,"lockedAxis",{enumerable:!0,configurable:!0,writable:!0,value:!1}),!t)throw new Error("Container Element Not Found");this.container=t,this.initContent(),this.attachPlugins(Object.assign(Object.assign({},I.Plugins),i)),this.emit("attachPlugins"),this.emit("init");const o=this.content;if(o.addEventListener("load",this.onLoad),o.addEventListener("error",this.onError),this.isContentLoading){if(this.option("spinner")){t.classList.add(this.cn("isLoading"));const e=n(x);!t.contains(o)||o.parentElement instanceof HTMLPictureElement?this.spinner=t.appendChild(e):this.spinner=(null===(s=o.parentElement)||void 0===s?void 0:s.insertBefore(e,o))||null}this.emit("beforeLoad")}else queueMicrotask((()=>{this.enable()}))}initContent(){const{container:t}=this,e=this.cn(L);let i=this.option(L)||t.querySelector(`.${e}`);if(i||(i=t.querySelector("img,picture")||t.firstElementChild,i&&P(i,e)),i instanceof HTMLPictureElement&&(i=i.querySelector("img")),!i)throw new Error("No content found");this.content=i}onLoad(){const{spinner:t,container:e,state:i}=this;t&&(t.remove(),this.spinner=null),this.option("spinner")&&e.classList.remove(this.cn("isLoading")),this.emit("afterLoad"),i===m.Init?this.enable():this.updateMetrics()}onError(){this.state!==m.Destroy&&(this.spinner&&(this.spinner.remove(),this.spinner=null),this.stop(),this.detachEvents(),this.state=m.Error,this.emit("error"))}getNextScale(t){const{fullScale:e,targetScale:i,coverScale:n,maxScale:s,minScale:o}=this;let a=o;switch(t){case"toggleMax":a=i-o<.5*(s-o)?s:o;break;case"toggleCover":a=i-o<.5*(n-o)?n:o;break;case"toggleZoom":a=i-o<.5*(e-o)?e:o;break;case"iterateZoom":let t=[1,e,s].sort(((t,e)=>t-e)),r=t.findIndex((t=>t>i+1e-5));a=t[r]||1}return a}attachObserver(){var t;const e=()=>{const{container:t,containerRect:e}=this;return Math.abs(e.width-t.getBoundingClientRect().width)>.1||Math.abs(e.height-t.getBoundingClientRect().height)>.1};this.resizeObserver||void 0===window.ResizeObserver||(this.resizeObserver=new ResizeObserver((()=>{this.updateTimer||(e()?(this.onResize(),this.isMobile&&(this.updateTimer=setTimeout((()=>{e()&&this.onResize(),this.updateTimer=null}),500))):this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null))}))),null===(t=this.resizeObserver)||void 0===t||t.observe(this.container)}detachObserver(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}attachEvents(){const{container:t}=this;t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("wheel",this.onWheel,{passive:!1}),this.pointerTracker=new l(t,{start:this.onPointerDown,move:this.onPointerMove,end:this.onPointerUp}),document.addEventListener(O,this.onMouseMove)}detachEvents(){var t;const{container:e}=this;e.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),e.removeEventListener("wheel",this.onWheel,{passive:!1}),null===(t=this.pointerTracker)||void 0===t||t.stop(),this.pointerTracker=null,document.removeEventListener(O,this.onMouseMove),document.removeEventListener("keydown",this.onKeydown,!0),this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null)}animate(){this.setTargetForce();const t=this.friction,e=this.option("maxVelocity");for(const i of v)t?(this.velocity[i]*=1-t,e&&!this.isScaling&&(this.velocity[i]=Math.max(Math.min(this.velocity[i],e),-1*e)),this.current[i]+=this.velocity[i]):this.current[i]=this.target[i];this.setTransform(),this.setEdgeForce(),!this.isResting||this.isDragging?this.rAF=requestAnimationFrame((()=>this.animate())):this.stop("current")}setTargetForce(){for(const t of v)"e"===t&&this.isBouncingX||"f"===t&&this.isBouncingY||(this.velocity[t]=(1/(1-this.friction)-1)*(this.target[t]-this.current[t]))}checkBounds(t=0,e=0){const{current:i}=this,n=i.e+t,s=i.f+e,o=this.getBounds(),{x:a,y:r}=o,l=a.min,c=a.max,h=r.min,d=r.max;let u=0,p=0;return l!==1/0&&n<l?u=l-n:c!==1/0&&n>c&&(u=c-n),h!==1/0&&s<h?p=h-s:d!==1/0&&s>d&&(p=d-s),Math.abs(u)<1e-4&&(u=0),Math.abs(p)<1e-4&&(p=0),Object.assign(Object.assign({},o),{xDiff:u,yDiff:p,inBounds:!u&&!p})}clampTargetBounds(){const{target:t}=this,{x:e,y:i}=this.getBounds();e.min!==1/0&&(t.e=Math.max(t.e,e.min)),e.max!==1/0&&(t.e=Math.min(t.e,e.max)),i.min!==1/0&&(t.f=Math.max(t.f,i.min)),i.max!==1/0&&(t.f=Math.min(t.f,i.max))}calculateContentDim(t=this.current){const{content:e,contentRect:i}=this,{fitWidth:n,fitHeight:s,fullWidth:o,fullHeight:a}=i;let r=o,l=a;if(this.option("zoom")||0!==this.angle){const i=!(e instanceof HTMLImageElement)&&("none"===window.getComputedStyle(e).maxWidth||"none"===window.getComputedStyle(e).maxHeight),c=i?o:n,h=i?a:s,d=this.getMatrix(t),u=new DOMPoint(0,0).matrixTransform(d),p=new DOMPoint(0+c,0).matrixTransform(d),f=new DOMPoint(0+c,0+h).matrixTransform(d),g=new DOMPoint(0,0+h).matrixTransform(d),m=Math.abs(f.x-u.x),v=Math.abs(f.y-u.y),b=Math.abs(g.x-p.x),y=Math.abs(g.y-p.y);r=Math.max(m,b),l=Math.max(v,y)}return{contentWidth:r,contentHeight:l}}setEdgeForce(){if(this.ignoreBounds||this.isDragging||this.panMode===O||this.targetScale<this.scale)return this.isBouncingX=!1,void(this.isBouncingY=!1);const{target:t}=this,{x:e,y:i,xDiff:n,yDiff:s}=this.checkBounds();const o=this.option("maxVelocity");let a=this.velocity.e,r=this.velocity.f;0!==n?(this.isBouncingX=!0,n*a<=0?a+=.14*n:(a=.14*n,e.min!==1/0&&(this.target.e=Math.max(t.e,e.min)),e.max!==1/0&&(this.target.e=Math.min(t.e,e.max))),o&&(a=Math.max(Math.min(a,o),-1*o))):this.isBouncingX=!1,0!==s?(this.isBouncingY=!0,s*r<=0?r+=.14*s:(r=.14*s,i.min!==1/0&&(this.target.f=Math.max(t.f,i.min)),i.max!==1/0&&(this.target.f=Math.min(t.f,i.max))),o&&(r=Math.max(Math.min(r,o),-1*o))):this.isBouncingY=!1,this.isBouncingX&&(this.velocity.e=a),this.isBouncingY&&(this.velocity.f=r)}enable(){const{content:t}=this,e=new DOMMatrixReadOnly(window.getComputedStyle(t).transform);for(const t of v)this.current[t]=this.target[t]=e[t];this.updateMetrics(),this.attachObserver(),this.attachEvents(),this.state=m.Ready,this.emit("ready")}onClick(t){var e;"click"===t.type&&0===t.detail&&(this.dragOffset.x=0,this.dragOffset.y=0),this.isDragging&&(null===(e=this.pointerTracker)||void 0===e||e.clear(),this.trackingPoints=[],this.startDecelAnim());const i=t.target;if(!i||t.defaultPrevented)return;if(i.hasAttribute("disabled"))return t.preventDefault(),void t.stopPropagation();if((()=>{const t=window.getSelection();return t&&"Range"===t.type})()&&!i.closest("button"))return;const n=i.closest("[data-panzoom-action]"),s=i.closest("[data-panzoom-change]"),o=n||s,a=o&&E(o)?o.dataset:null;if(a){const e=a.panzoomChange,i=a.panzoomAction;if((e||i)&&t.preventDefault(),e){let t={};try{t=JSON.parse(e)}catch(t){console&&console.warn("The given data was not valid JSON")}return void this.applyChange(t)}if(i)return void(this[i]&&this[i]())}if(Math.abs(this.dragOffset.x)>3||Math.abs(this.dragOffset.y)>3)return t.preventDefault(),void t.stopPropagation();if(i.closest("[data-fancybox]"))return;const r=this.content.getBoundingClientRect(),l=this.dragStart;if(l.time&&!this.canZoomOut()&&(Math.abs(r.x-l.x)>2||Math.abs(r.y-l.y)>2))return;this.dragStart.time=0;const c=e=>{this.option("zoom",t)&&e&&"string"==typeof e&&/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e)&&"function"==typeof this[e]&&(t.preventDefault(),this[e]({event:t}))},h=this.option("click",t),d=this.option("dblClick",t);d?(this.clicks++,1==this.clicks&&(this.clickTimer=setTimeout((()=>{1===this.clicks?(this.emit("click",t),!t.defaultPrevented&&h&&c(h)):(this.emit("dblClick",t),t.defaultPrevented||c(d)),this.clicks=0,this.clickTimer=null}),350))):(this.emit("click",t),!t.defaultPrevented&&h&&c(h))}addTrackingPoint(t){const e=this.trackingPoints.filter((t=>t.time>Date.now()-100));e.push(t),this.trackingPoints=e}onPointerDown(t,e,i){var n;if(!1===this.option("touch",t))return!1;this.pwt=0,this.dragOffset={x:0,y:0,time:0},this.trackingPoints=[];const s=this.content.getBoundingClientRect();if(this.dragStart={x:s.x,y:s.y,top:s.top,left:s.left,time:Date.now()},this.clickTimer)return!1;if(this.panMode===O&&this.targetScale>1)return t.preventDefault(),t.stopPropagation(),!1;const o=t.composedPath()[0];if(!i.length){if(["TEXTAREA","OPTION","INPUT","SELECT","VIDEO","IFRAME"].includes(o.nodeName)||o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"))return!1;null===(n=window.getSelection())||void 0===n||n.removeAllRanges()}if("mousedown"===t.type)["A","BUTTON"].includes(o.nodeName)||t.preventDefault();else if(Math.abs(this.velocity.a)>.3)return!1;return this.target.e=this.current.e,this.target.f=this.current.f,this.stop(),this.isDragging||(this.isDragging=!0,this.addTrackingPoint(e),this.emit("touchStart",t)),!0}onPointerMove(e,n,s){if(!1===this.option("touch",e))return;if(!this.isDragging)return;if(n.length<2&&this.panOnlyZoomed&&t(this.targetScale)<=t(this.minScale))return;if(this.emit("touchMove",e),e.defaultPrevented)return;this.addTrackingPoint(n[0]);const{content:o}=this,a=h(s[0],s[1]),r=h(n[0],n[1]);let l=0,d=0;if(n.length>1){const t=o.getBoundingClientRect();l=a.clientX-t.left-.5*t.width,d=a.clientY-t.top-.5*t.height}const u=c(s[0],s[1]),p=c(n[0],n[1]);let f=u?p/u:1,g=r.clientX-a.clientX,m=r.clientY-a.clientY;this.dragOffset.x+=g,this.dragOffset.y+=m,this.dragOffset.time=Date.now()-this.dragStart.time;let v=t(this.targetScale)===t(this.minScale)&&this.option("lockAxis");if(v&&!this.lockedAxis)if("xy"===v||"y"===v||"touchmove"===e.type){if(Math.abs(this.dragOffset.x)<6&&Math.abs(this.dragOffset.y)<6)return void e.preventDefault();const t=Math.abs(180*Math.atan2(this.dragOffset.y,this.dragOffset.x)/Math.PI);this.lockedAxis=t>45&&t<135?"y":"x",this.dragOffset.x=0,this.dragOffset.y=0,g=0,m=0}else this.lockedAxis=v;if(i(e.target,this.content)&&(v="x",this.dragOffset.y=0),v&&"xy"!==v&&this.lockedAxis!==v&&t(this.targetScale)===t(this.minScale))return;e.cancelable&&e.preventDefault(),this.container.classList.add(this.cn("isDragging"));const b=this.checkBounds(g,m);this.option("rubberband")?("x"!==this.isInfinite&&(b.xDiff>0&&g<0||b.xDiff<0&&g>0)&&(g*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitWidth*b.xDiff))),"y"!==this.isInfinite&&(b.yDiff>0&&m<0||b.yDiff<0&&m>0)&&(m*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitHeight*b.yDiff)))):(b.xDiff&&(g=0),b.yDiff&&(m=0));const y=this.targetScale,w=this.minScale,x=this.maxScale;y<.5*w&&(f=Math.max(f,w)),y>1.5*x&&(f=Math.min(f,x)),"y"===this.lockedAxis&&t(y)===t(w)&&(g=0),"x"===this.lockedAxis&&t(y)===t(w)&&(m=0),this.applyChange({originX:l,originY:d,panX:g,panY:m,scale:f,friction:this.option("dragFriction"),ignoreBounds:!0})}onPointerUp(t,e,n){if(n.length)return this.dragOffset.x=0,this.dragOffset.y=0,void(this.trackingPoints=[]);this.container.classList.remove(this.cn("isDragging")),this.isDragging&&(this.addTrackingPoint(e),this.panOnlyZoomed&&this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1&&(this.trackingPoints=[]),i(t.target,this.content)&&"y"===this.lockedAxis&&(this.trackingPoints=[]),this.emit("touchEnd",t),this.isDragging=!1,this.lockedAxis=!1,this.state!==m.Destroy&&(t.defaultPrevented||this.startDecelAnim()))}startDecelAnim(){var e;const i=this.isScaling;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const t of v)this.velocity[t]=0;this.target.e=this.current.e,this.target.f=this.current.f,S(this.container,"is-scaling"),S(this.container,"is-animating"),this.isTicking=!1;const{trackingPoints:n}=this,s=n[0],o=n[n.length-1];let a=0,r=0,l=0;o&&s&&(a=o.clientX-s.clientX,r=o.clientY-s.clientY,l=o.time-s.time);const c=(null===(e=window.visualViewport)||void 0===e?void 0:e.scale)||1;1!==c&&(a*=c,r*=c);let h=0,d=0,u=0,p=0,f=this.option("decelFriction");const g=this.targetScale;if(l>0){u=Math.abs(a)>3?a/(l/30):0,p=Math.abs(r)>3?r/(l/30):0;const t=this.option("maxVelocity");t&&(u=Math.max(Math.min(u,t),-1*t),p=Math.max(Math.min(p,t),-1*t))}u&&(h=u/(1/(1-f)-1)),p&&(d=p/(1/(1-f)-1)),("y"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"y"===this.lockedAxis&&t(g)===this.minScale)&&(h=u=0),("x"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"x"===this.lockedAxis&&t(g)===this.minScale)&&(d=p=0);const m=this.dragOffset.x,b=this.dragOffset.y,y=this.option("dragMinThreshold")||0;Math.abs(m)<y&&Math.abs(b)<y&&(h=d=0,u=p=0),(this.option("zoom")&&(g<this.minScale-1e-5||g>this.maxScale+1e-5)||i&&!h&&!d)&&(f=.35),this.applyChange({panX:h,panY:d,friction:f}),this.emit("decel",u,p,m,b)}onWheel(t){var e=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const i=Math.max(-1,Math.min(1,e));if(this.emit("wheel",t,i),this.panMode===O)return;if(t.defaultPrevented)return;const n=this.option("wheel");"pan"===n?(t.preventDefault(),this.panOnlyZoomed&&!this.canZoomOut()||this.applyChange({panX:2*-t.deltaX,panY:2*-t.deltaY,bounce:!1})):"zoom"===n&&!1!==this.option("zoom")&&this.zoomWithWheel(t)}onMouseMove(t){this.panWithMouse(t)}onKeydown(t){"Escape"===t.key&&this.toggleFS()}onResize(){this.updateMetrics(),this.checkBounds().inBounds||this.requestTick()}setTransform(){this.emit("beforeTransform");const{current:e,target:i,content:n,contentRect:s}=this,o=Object.assign({},C);for(const n of v){const s="e"==n||"f"===n?M:T;o[n]=t(e[n],s),Math.abs(i[n]-e[n])<("e"==n||"f"===n?.51:.001)&&(e[n]=i[n])}let{a:a,b:r,c:l,d:c,e:h,f:d}=o,u=`matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,p=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;if(this.option("transformParent")&&(p=p.parentElement||p),p.style.transform===u)return;p.style.transform=u;const{contentWidth:f,contentHeight:g}=this.calculateContentDim();s.width=f,s.height=g,this.emit("afterTransform")}updateMetrics(e=!1){var i;if(!this||this.state===m.Destroy)return;if(this.isContentLoading)return;const n=Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1),{container:s,content:o}=this,a=o instanceof HTMLImageElement,r=s.getBoundingClientRect(),l=getComputedStyle(this.container);let c=r.width*n,h=r.height*n;const d=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),u=c-(parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)),p=h-d;this.containerRect={width:c,height:h,innerWidth:u,innerHeight:p};const f=parseFloat(o.dataset.width||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalWidth:t instanceof SVGElement?t.width.baseVal.value:Math.max(t.offsetWidth,t.scrollWidth),e||0})(o),g=parseFloat(o.dataset.height||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalHeight:t instanceof SVGElement?t.height.baseVal.value:Math.max(t.offsetHeight,t.scrollHeight),e||0})(o);let v=this.option("width",f)||z,b=this.option("height",g)||z;const y=v===z,w=b===z;"number"!=typeof v&&(v=f),"number"!=typeof b&&(b=g),y&&(v=f*(b/g)),w&&(b=g/(f/v));let x=o.parentElement instanceof HTMLPictureElement?o.parentElement:o;this.option("transformParent")&&(x=x.parentElement||x);const E=x.getAttribute("style")||"";x.style.setProperty("transform","none","important"),a&&(x.style.width="",x.style.height=""),x.offsetHeight;const S=o.getBoundingClientRect();let P=S.width*n,C=S.height*n,T=P,M=C;P=Math.min(P,v),C=Math.min(C,b),a?({width:P,height:C}=((t,e,i,n)=>{const s=i/t,o=n/e,a=Math.min(s,o);return{width:t*=a,height:e*=a}})(v,b,P,C)):(P=Math.min(P,v),C=Math.min(C,b));let O=.5*(M-C),A=.5*(T-P);this.contentRect=Object.assign(Object.assign({},this.contentRect),{top:S.top-r.top+O,bottom:r.bottom-S.bottom+O,left:S.left-r.left+A,right:r.right-S.right+A,fitWidth:P,fitHeight:C,width:P,height:C,fullWidth:v,fullHeight:b}),x.style.cssText=E,a&&(x.style.width=`${P}px`,x.style.height=`${C}px`),this.setTransform(),!0!==e&&this.emit("refresh"),this.ignoreBounds||(t(this.targetScale)<t(this.minScale)?this.zoomTo(this.minScale,{friction:0}):this.targetScale>this.maxScale?this.zoomTo(this.maxScale,{friction:0}):this.state===m.Init||this.checkBounds().inBounds||this.requestTick()),this.updateControls()}calculateBounds(){const{contentWidth:e,contentHeight:i}=this.calculateContentDim(this.target),{targetScale:n,lockedAxis:s}=this,{fitWidth:o,fitHeight:a}=this.contentRect;let r=0,l=0,c=0,h=0;const d=this.option("infinite");if(!0===d||s&&d===s)r=-1/0,c=1/0,l=-1/0,h=1/0;else{let{containerRect:s,contentRect:d}=this,u=t(o*n,M),p=t(a*n,M),{innerWidth:f,innerHeight:g}=s;if(s.width===u&&(f=s.width),s.width===p&&(g=s.height),e>f){c=.5*(e-f),r=-1*c;let t=.5*(d.right-d.left);r+=t,c+=t}if(o>f&&e<f&&(r-=.5*(o-f),c-=.5*(o-f)),i>g){h=.5*(i-g),l=-1*h;let t=.5*(d.bottom-d.top);l+=t,h+=t}a>g&&i<g&&(r-=.5*(a-g),c-=.5*(a-g))}return{x:{min:r,max:c},y:{min:l,max:h}}}getBounds(){const t=this.option("bounds");return t!==z?t:this.calculateBounds()}updateControls(){const e=this,i=e.container,{panMode:n,contentRect:s,targetScale:a,minScale:r}=e;let l=r,c=e.option("click")||!1;c&&(l=e.getNextScale(c));let h=e.canZoomIn(),d=e.canZoomOut(),u=n===A&&!!this.option("touch"),p=d&&u;if(u&&(t(a)<t(r)&&!this.panOnlyZoomed&&(p=!0),(t(s.width,1)>t(s.fitWidth,1)||t(s.height,1)>t(s.fitHeight,1))&&(p=!0)),t(s.width*a,1)<t(s.fitWidth,1)&&(p=!1),n===O&&(p=!1),o(i,this.cn("isDraggable"),p),!this.option("zoom"))return;let f=h&&t(l)>t(a),g=!f&&!p&&d&&t(l)<t(a);o(i,this.cn("canZoomIn"),f),o(i,this.cn("canZoomOut"),g);for(const t of i.querySelectorAll("[data-panzoom-action]")){let e=!1,i=!1;switch(t.dataset.panzoomAction){case"zoomIn":h?e=!0:i=!0;break;case"zoomOut":d?e=!0:i=!0;break;case"toggleZoom":case"iterateZoom":h||d?e=!0:i=!0;const n=t.querySelector("g");n&&(n.style.display=h?"":"none")}e?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):i&&(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"))}}panTo({x:t=this.target.e,y:e=this.target.f,scale:i=this.targetScale,friction:n=this.option("friction"),angle:s=0,originX:o=0,originY:a=0,flipX:r=!1,flipY:l=!1,ignoreBounds:c=!1}){this.state!==m.Destroy&&this.applyChange({panX:t-this.target.e,panY:e-this.target.f,scale:i/this.targetScale,angle:s,originX:o,originY:a,friction:n,flipX:r,flipY:l,ignoreBounds:c})}applyChange({panX:e=0,panY:i=0,scale:n=1,angle:s=0,originX:o=-this.current.e,originY:a=-this.current.f,friction:r=this.option("friction"),flipX:l=!1,flipY:c=!1,ignoreBounds:h=!1,bounce:d=this.option("bounce")}){const u=this.state;if(u===m.Destroy)return;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.friction=r||0,this.ignoreBounds=h;const{current:p}=this,f=p.e,g=p.f,b=this.getMatrix(this.target);let y=(new DOMMatrix).translate(f,g).translate(o,a).translate(e,i);if(this.option("zoom")){if(!h){const t=this.targetScale,e=this.minScale,i=this.maxScale;t*n<e&&(n=e/t),t*n>i&&(n=i/t)}y=y.scale(n)}y=y.translate(-o,-a).translate(-f,-g).multiply(b),s&&(y=y.rotate(s)),l&&(y=y.scale(-1,1)),c&&(y=y.scale(1,-1));for(const e of v)"e"!==e&&"f"!==e&&(y[e]>this.minScale+1e-5||y[e]<this.minScale-1e-5)?this.target[e]=y[e]:this.target[e]=t(y[e],M);(this.targetScale<this.scale||Math.abs(n-1)>.1||this.panMode===O||!1===d)&&!h&&this.clampTargetBounds(),u===m.Init?this.animate():this.isResting||(this.state=m.Panning,this.requestTick())}stop(t=!1){if(this.state===m.Init||this.state===m.Destroy)return;const e=this.isTicking;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const e of v)this.velocity[e]=0,"current"===t?this.current[e]=this.target[e]:"target"===t&&(this.target[e]=this.current[e]);this.setTransform(),S(this.container,"is-scaling"),S(this.container,"is-animating"),this.isTicking=!1,this.state=m.Ready,e&&(this.emit("endAnimation"),this.updateControls())}requestTick(){this.isTicking||(this.emit("startAnimation"),this.updateControls(),P(this.container,"is-animating"),this.isScaling&&P(this.container,"is-scaling")),this.isTicking=!0,this.rAF||(this.rAF=requestAnimationFrame((()=>this.animate())))}panWithMouse(e,i=this.option("mouseMoveFriction")){if(this.pmme=e,this.panMode!==O||!e)return;if(t(this.targetScale)<=t(this.minScale))return;this.emit("mouseMove",e);const{container:n,containerRect:s,contentRect:o}=this,a=s.width,r=s.height,l=n.getBoundingClientRect(),c=(e.clientX||0)-l.left,h=(e.clientY||0)-l.top;let{contentWidth:d,contentHeight:u}=this.calculateContentDim(this.target);const p=this.option("mouseMoveFactor");p>1&&(d!==a&&(d*=p),u!==r&&(u*=p));let f=.5*(d-a)-c/a*100/100*(d-a);f+=.5*(o.right-o.left);let g=.5*(u-r)-h/r*100/100*(u-r);g+=.5*(o.bottom-o.top),this.applyChange({panX:f-this.target.e,panY:g-this.target.f,friction:i})}zoomWithWheel(e){if(this.state===m.Destroy||this.state===m.Init)return;const i=Date.now();if(i-this.pwt<45)return void e.preventDefault();this.pwt=i;var n=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const s=Math.max(-1,Math.min(1,n)),{targetScale:o,maxScale:a,minScale:r}=this;let l=o*(100+45*s)/100;t(l)<t(r)&&t(o)<=t(r)?(this.cwd+=Math.abs(s),l=r):t(l)>t(a)&&t(o)>=t(a)?(this.cwd+=Math.abs(s),l=a):(this.cwd=0,l=Math.max(Math.min(l,a),r)),this.cwd>this.option("wheelLimit")||(e.preventDefault(),t(l)!==t(o)&&this.zoomTo(l,{event:e}))}canZoomIn(){return this.option("zoom")&&(t(this.contentRect.width,1)<t(this.contentRect.fitWidth,1)||t(this.targetScale)<t(this.maxScale))}canZoomOut(){return this.option("zoom")&&t(this.targetScale)>t(this.minScale)}zoomIn(t=1.25,e){this.zoomTo(this.targetScale*t,e)}zoomOut(t=.8,e){this.zoomTo(this.targetScale*t,e)}zoomToFit(t){this.zoomTo("fit",t)}zoomToCover(t){this.zoomTo("cover",t)}zoomToFull(t){this.zoomTo("full",t)}zoomToMax(t){this.zoomTo("max",t)}toggleZoom(t){this.zoomTo(this.getNextScale("toggleZoom"),t)}toggleMax(t){this.zoomTo(this.getNextScale("toggleMax"),t)}toggleCover(t){this.zoomTo(this.getNextScale("toggleCover"),t)}iterateZoom(t){this.zoomTo("next",t)}zoomTo(t=1,{friction:e=z,originX:i=z,originY:n=z,event:s}={}){if(this.isContentLoading||this.state===m.Destroy)return;const{targetScale:o,fullScale:a,maxScale:r,coverScale:l}=this;if(this.stop(),this.panMode===O&&(s=this.pmme||s),s||i===z||n===z){const t=this.content.getBoundingClientRect(),e=this.container.getBoundingClientRect(),o=s?s.clientX:e.left+.5*e.width,a=s?s.clientY:e.top+.5*e.height;i=o-t.left-.5*t.width,n=a-t.top-.5*t.height}let c=1;"number"==typeof t?c=t:"full"===t?c=a:"cover"===t?c=l:"max"===t?c=r:"fit"===t?c=1:"next"===t&&(c=this.getNextScale("iterateZoom")),c=c/o||1,e=e===z?c>1?.15:.25:e,this.applyChange({scale:c,originX:i,originY:n,friction:e}),s&&this.panMode===O&&this.panWithMouse(s,e)}rotateCCW(){this.applyChange({angle:-90})}rotateCW(){this.applyChange({angle:90})}flipX(){this.applyChange({flipX:!0})}flipY(){this.applyChange({flipY:!0})}fitX(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.height-(e.top+.5*e.fitHeight)-i.f,scale:t.width/e.fitWidth/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}fitY(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.innerHeight-(e.top+.5*e.fitHeight)-i.f,scale:t.height/e.fitHeight/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}toggleFS(){const{container:t}=this,e=this.cn("inFullscreen"),i=this.cn("htmlHasFullscreen");t.classList.toggle(e);const n=t.classList.contains(e);n?(document.documentElement.classList.add(i),document.addEventListener("keydown",this.onKeydown,!0)):(document.documentElement.classList.remove(i),document.removeEventListener("keydown",this.onKeydown,!0)),this.updateMetrics(),this.emit(n?"enterFS":"exitFS")}getMatrix(t=this.current){const{a:e,b:i,c:n,d:s,e:o,f:a}=t;return new DOMMatrix([e,i,n,s,o,a])}reset(t){if(this.state!==m.Init&&this.state!==m.Destroy){this.stop("current");for(const t of v)this.target[t]=C[t];this.target.a=this.minScale,this.target.d=this.minScale,this.clampTargetBounds(),this.isResting||(this.friction=void 0===t?this.option("friction"):t,this.state=m.Panning,this.requestTick())}}destroy(){this.stop(),this.state=m.Destroy,this.detachEvents(),this.detachObserver();const{container:t,content:e}=this,i=this.option("classes")||{};for(const e of Object.values(i))t.classList.remove(e+"");e&&(e.removeEventListener("load",this.onLoad),e.removeEventListener("error",this.onError)),this.detachPlugins()}}Object.defineProperty(I,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:y}),Object.defineProperty(I,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}});const D=function(t,e){let i=!0;return(...n)=>{i&&(i=!1,t(...n),setTimeout((()=>{i=!0}),e))}},F=(t,e)=>{let i=[];return t.childNodes.forEach((t=>{t.nodeType!==Node.ELEMENT_NODE||e&&!t.matches(e)||i.push(t)})),i},j={viewport:null,track:null,enabled:!0,slides:[],axis:"x",transition:"fade",preload:1,slidesPerPage:"auto",initialPage:0,friction:.12,Panzoom:{decelFriction:.12},center:!0,infinite:!0,fill:!0,dragFree:!1,adaptiveHeight:!1,direction:"ltr",classes:{container:"f-carousel",viewport:"f-carousel__viewport",track:"f-carousel__track",slide:"f-carousel__slide",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",inTransition:"in-transition",isSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}};var B;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroy=2]="Destroy"}(B||(B={}));const H=t=>{if("string"==typeof t||t instanceof HTMLElement)t={html:t};else{const e=t.thumb;void 0!==e&&("string"==typeof e&&(t.thumbSrc=e),e instanceof HTMLImageElement&&(t.thumbEl=e,t.thumbElSrc=e.src,t.thumbSrc=e.src),delete t.thumb)}return Object.assign({html:"",el:null,isDom:!1,class:"",customClass:"",index:-1,dim:0,gap:0,pos:0,transition:!1},t)},N=(t={})=>Object.assign({index:-1,slides:[],dim:0,pos:-1},t);class _ extends f{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}const $={classes:{list:"f-carousel__dots",isDynamic:"is-dynamic",hasDots:"has-dots",dot:"f-carousel__dot",isBeforePrev:"is-before-prev",isPrev:"is-prev",isCurrent:"is-current",isNext:"is-next",isAfterNext:"is-after-next"},dotTpl:'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',dynamicFrom:11,maxCount:1/0,minCount:2};class W extends _{constructor(){super(...arguments),Object.defineProperty(this,"isDynamic",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"list",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){this.refresh()}build(){let t=this.list;if(!t){t=document.createElement("ul"),P(t,this.cn("list")),t.setAttribute("role","tablist");const e=this.instance.container;e.appendChild(t),P(e,this.cn("hasDots")),this.list=t}return t}refresh(){var t;const e=this.instance.pages.length,i=Math.min(2,this.option("minCount")),n=Math.max(2e3,this.option("maxCount")),s=this.option("dynamicFrom");if(e<i||e>n)return void this.cleanup();const a="number"==typeof s&&e>5&&e>=s,r=!this.list||this.isDynamic!==a||this.list.children.length!==e;r&&this.cleanup();const l=this.build();if(o(l,this.cn("isDynamic"),!!a),r)for(let t=0;t<e;t++)l.append(this.createItem(t));let c,h=0;for(const e of[...l.children]){const i=h===this.instance.page;i&&(c=e),o(e,this.cn("isCurrent"),i),null===(t=e.children[0])||void 0===t||t.setAttribute("aria-selected",i?"true":"false");for(const t of["isBeforePrev","isPrev","isNext","isAfterNext"])S(e,this.cn(t));h++}if(c=c||l.firstChild,a&&c){const t=c.previousElementSibling,e=t&&t.previousElementSibling;P(t,this.cn("isPrev")),P(e,this.cn("isBeforePrev"));const i=c.nextElementSibling,n=i&&i.nextElementSibling;P(i,this.cn("isNext")),P(n,this.cn("isAfterNext"))}this.isDynamic=a}createItem(t=0){var e;const i=document.createElement("li");i.setAttribute("role","presentation");const s=n(this.instance.localize(this.option("dotTpl"),[["%d",t+1]]).replace(/\%i/g,t+""));return i.appendChild(s),null===(e=i.children[0])||void 0===e||e.setAttribute("role","tab"),i}cleanup(){this.list&&(this.list.remove(),this.list=null),this.isDynamic=!1,S(this.instance.container,this.cn("hasDots"))}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(W,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:$});const X="disabled",q="next",Y="prev";class V extends _{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prev",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"next",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isDom",{enumerable:!0,configurable:!0,writable:!0,value:!1})}onRefresh(){const t=this.instance,e=t.pages.length,i=t.page;if(e<2)return void this.cleanup();this.build();let n=this.prev,s=this.next;n&&s&&(n.removeAttribute(X),s.removeAttribute(X),t.isInfinite||(i<=0&&n.setAttribute(X,""),i>=e-1&&s.setAttribute(X,"")))}addBtn(t){var e;const i=this.instance,n=document.createElement("button");n.setAttribute("tabindex","0"),n.setAttribute("title",i.localize(`{{${t.toUpperCase()}}}`)),P(n,this.cn("button")+" "+this.cn(t===q?"isNext":"isPrev"));const s=i.isRTL?t===q?Y:q:t;var o;return n.innerHTML=i.localize(this.option(`${s}Tpl`)),n.dataset[`carousel${o=t,o?o.match("^[a-z]")?o.charAt(0).toUpperCase()+o.substring(1):o:""}`]="true",null===(e=this.container)||void 0===e||e.appendChild(n),n}build(){const t=this.instance.container,e=this.cn("container");let{container:i,prev:n,next:s}=this;i||(i=t.querySelector("."+e),this.isDom=!!i),i||(i=document.createElement("div"),P(i,e),t.appendChild(i)),this.container=i,s||(s=i.querySelector("[data-carousel-next]")),s||(s=this.addBtn(q)),this.next=s,n||(n=i.querySelector("[data-carousel-prev]")),n||(n=this.addBtn(Y)),this.prev=n}cleanup(){this.isDom||(this.prev&&this.prev.remove(),this.next&&this.next.remove(),this.container&&this.container.remove()),this.prev=null,this.next=null,this.container=null,this.isDom=!1}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(V,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{classes:{container:"f-carousel__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"},nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'}});class Z extends _{constructor(){super(...arguments),Object.defineProperty(this,"selectedIndex",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nav",{enumerable:!0,configurable:!0,writable:!0,value:null})}addAsTargetFor(t){this.target=this.instance,this.nav=t,this.attachEvents()}addAsNavFor(t){this.nav=this.instance,this.target=t,this.attachEvents()}attachEvents(){const{nav:t,target:e}=this;t&&e&&(t.options.initialSlide=e.options.initialPage,t.state===B.Ready?this.onNavReady(t):t.on("ready",this.onNavReady),e.state===B.Ready?this.onTargetReady(e):e.on("ready",this.onTargetReady))}onNavReady(t){t.on("createSlide",this.onNavCreateSlide),t.on("Panzoom.click",this.onNavClick),t.on("Panzoom.touchEnd",this.onNavTouch),this.onTargetChange()}onTargetReady(t){t.on("change",this.onTargetChange),t.on("Panzoom.refresh",this.onTargetChange),this.onTargetChange()}onNavClick(t,e,i){this.onNavTouch(t,t.panzoom,i)}onNavTouch(t,e,i){var n,s;if(Math.abs(e.dragOffset.x)>3||Math.abs(e.dragOffset.y)>3)return;const o=i.target,{nav:a,target:r}=this;if(!a||!r||!o)return;const l=o.closest("[data-index]");if(i.stopPropagation(),i.preventDefault(),!l)return;const c=parseInt(l.dataset.index||"",10)||0,h=r.getPageForSlide(c),d=a.getPageForSlide(c);a.slideTo(d),r.slideTo(h,{friction:(null===(s=null===(n=this.nav)||void 0===n?void 0:n.plugins)||void 0===s?void 0:s.Sync.option("friction"))||0}),this.markSelectedSlide(c)}onNavCreateSlide(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}onTargetChange(){var t,e;const{target:i,nav:n}=this;if(!i||!n)return;if(n.state!==B.Ready||i.state!==B.Ready)return;const s=null===(e=null===(t=i.pages[i.page])||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.index,o=n.getPageForSlide(s);this.markSelectedSlide(s),n.slideTo(o,null===n.prevPage&&null===i.prevPage?{friction:0}:void 0)}markSelectedSlide(t){const e=this.nav;e&&e.state===B.Ready&&(this.selectedIndex=t,[...e.slides].map((e=>{e.el&&e.el.classList[e.index===t?"add":"remove"]("is-nav-selected")})))}attach(){const t=this;let e=t.options.target,i=t.options.nav;e?t.addAsNavFor(e):i&&t.addAsTargetFor(i)}detach(){const t=this,e=t.nav,i=t.target;e&&(e.off("ready",t.onNavReady),e.off("createSlide",t.onNavCreateSlide),e.off("Panzoom.click",t.onNavClick),e.off("Panzoom.touchEnd",t.onNavTouch)),t.nav=null,i&&(i.off("ready",t.onTargetReady),i.off("refresh",t.onTargetChange),i.off("change",t.onTargetChange)),t.target=null}}Object.defineProperty(Z,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{friction:.35}});const U={Navigation:V,Dots:W,Sync:Z},G="animationend",K="isSelected",J="slide";class Q extends g{get axis(){return this.isHorizontal?"e":"f"}get isEnabled(){return this.state===B.Ready}get isInfinite(){let t=!1;const{contentDim:e,viewportDim:i,pages:n,slides:s}=this,o=s[0];return n.length>=2&&o&&e+o.dim>=i&&(t=this.option("infinite")),t}get isRTL(){return"rtl"===this.option("direction")}get isHorizontal(){return"x"===this.option("axis")}constructor(t,e={},i={}){if(super(),Object.defineProperty(this,"bp",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"lp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"userOptions",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:B.Init}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"prevPage",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"viewport",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"slides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inTransition",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"contentDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"viewportDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),"string"==typeof t&&(t=document.querySelector(t)),!t||!E(t))throw new Error("No Element found");this.container=t,this.slideNext=D(this.slideNext.bind(this),150),this.slidePrev=D(this.slidePrev.bind(this),150),this.userOptions=e,this.userPlugins=i,queueMicrotask((()=>{this.processOptions()}))}processOptions(){var t,e;const i=u({},Q.defaults,this.userOptions);let n="";const s=i.breakpoints;if(s&&d(s))for(const[t,e]of Object.entries(s))window.matchMedia(t).matches&&d(e)&&(n+=t,u(i,e));n===this.bp&&this.state!==B.Init||(this.bp=n,this.state===B.Ready&&(i.initialSlide=(null===(e=null===(t=this.pages[this.page])||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.index)||0),this.state!==B.Init&&this.destroy(),super.setOptions(i),!1===this.option("enabled")?this.attachEvents():setTimeout((()=>{this.init()}),0))}init(){this.state=B.Init,this.emit("init"),this.attachPlugins(Object.assign(Object.assign({},Q.Plugins),this.userPlugins)),this.emit("attachPlugins"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.setInitialPosition(),this.initPanzoom(),this.attachEvents(),this.state=B.Ready,this.emit("ready")}initLayout(){const{container:t}=this,e=this.option("classes");P(t,this.cn("container")),o(t,e.isLTR,!this.isRTL),o(t,e.isRTL,this.isRTL),o(t,e.isVertical,!this.isHorizontal),o(t,e.isHorizontal,this.isHorizontal);let i=this.option("viewport")||t.querySelector(`.${e.viewport}`);i||(i=document.createElement("div"),P(i,e.viewport),i.append(...F(t,`.${e.slide}`)),t.prepend(i)),i.addEventListener("scroll",this.onScroll);let n=this.option("track")||t.querySelector(`.${e.track}`);n||(n=document.createElement("div"),P(n,e.track),n.append(...Array.from(i.childNodes))),n.setAttribute("aria-live","polite"),i.contains(n)||i.prepend(n),this.viewport=i,this.track=n,this.emit("initLayout")}initSlides(){const{track:t}=this;if(!t)return;const e=[...this.slides],i=[];[...F(t,`.${this.cn(J)}`)].forEach((t=>{if(E(t)){const e=H({el:t,isDom:!0,index:this.slides.length});i.push(e)}}));for(let t of[...this.option("slides",[])||[],...e])i.push(H(t));this.slides=i;for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;for(const t of i)this.emit("beforeInitSlide",t,t.index),this.emit("initSlide",t,t.index);this.emit("initSlides")}setInitialPage(){const t=this.option("initialSlide");this.page="number"==typeof t?this.getPageForSlide(t):parseInt(this.option("initialPage",0)+"",10)||0}setInitialPosition(){const{track:t,pages:e,isHorizontal:i}=this;if(!t||!e.length)return;let n=this.page;e[n]||(this.page=n=0);const s=(e[n].pos||0)*(this.isRTL&&i?1:-1),o=i?`${s}px`:"0",a=i?"0":`${s}px`;t.style.transform=`translate3d(${o}, ${a}, 0) scale(1)`,this.option("adaptiveHeight")&&this.setViewportHeight()}initPanzoom(){this.panzoom&&(this.panzoom.destroy(),this.panzoom=null);const t=this.option("Panzoom")||{};this.panzoom=new I(this.viewport,u({},{content:this.track,zoom:!1,panOnlyZoomed:!1,lockAxis:this.isHorizontal?"x":"y",infinite:this.isInfinite,click:!1,dblClick:!1,touch:t=>!(this.pages.length<2&&!t.options.infinite),bounds:()=>this.getBounds(),maxVelocity:t=>Math.abs(t.target[this.axis]-t.current[this.axis])<2*this.viewportDim?100:0},t)),this.panzoom.on("*",((t,e,...i)=>{this.emit(`Panzoom.${e}`,t,...i)})),this.panzoom.on("decel",this.onDecel),this.panzoom.on("refresh",this.onRefresh),this.panzoom.on("beforeTransform",this.onBeforeTransform),this.panzoom.on("endAnimation",this.onEndAnimation)}attachEvents(){const t=this.container;t&&(t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("slideTo",this.onSlideTo)),window.addEventListener("resize",this.onResize)}createPages(){let t=[];const{contentDim:e,viewportDim:i}=this;let n=this.option("slidesPerPage");n=("auto"===n||e<=i)&&!1!==this.option("fill")?1/0:parseFloat(n+"");let s=0,o=0,a=0;for(const e of this.slides)(!t.length||o+e.dim-i>.05||a>=n)&&(t.push(N()),s=t.length-1,o=0,a=0),t[s].slides.push(e),o+=e.dim+e.gap,a++;return t}processPages(){const e=this.pages,{contentDim:i,viewportDim:n,isInfinite:s}=this,o=this.option("center"),a=this.option("fill"),r=a&&o&&i>n&&!s;if(e.forEach(((t,e)=>{var s;t.index=e,t.pos=(null===(s=t.slides[0])||void 0===s?void 0:s.pos)||0,t.dim=0;for(const[e,i]of t.slides.entries())t.dim+=i.dim,e<t.slides.length-1&&(t.dim+=i.gap);r&&t.pos+.5*t.dim<.5*n?t.pos=0:r&&t.pos+.5*t.dim>=i-.5*n?t.pos=i-n:o&&(t.pos+=-.5*(n-t.dim))})),e.forEach((e=>{a&&!s&&i>n&&(e.pos=Math.max(e.pos,0),e.pos=Math.min(e.pos,i-n)),e.pos=t(e.pos,1e3),e.dim=t(e.dim,1e3),Math.abs(e.pos)<=.1&&(e.pos=0)})),s)return e;const l=[];let c;return e.forEach((t=>{const e=Object.assign({},t);c&&e.pos===c.pos?(c.dim+=e.dim,c.slides=[...c.slides,...e.slides]):(e.index=l.length,c=e,l.push(e))})),l}getPageFromIndex(t=0){const e=this.pages.length;let i;return t=parseInt((t||0).toString())||0,i=this.isInfinite?(t%e+e)%e:Math.max(Math.min(t,e-1),0),i}getSlideMetrics(e){var i,n;const s=this.isHorizontal?"width":"height";let o=0,a=0,r=e.el;const l=!(!r||r.parentNode);if(r?o=parseFloat(r.dataset[s]||"")||0:(r=document.createElement("div"),r.style.visibility="hidden",(this.track||document.body).prepend(r)),P(r,this.cn(J)+" "+e.class+" "+e.customClass),o)r.style[s]=`${o}px`,r.style["width"===s?"height":"width"]="";else{l&&(this.track||document.body).prepend(r),o=r.getBoundingClientRect()[s]*Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1);let t=r[this.isHorizontal?"offsetWidth":"offsetHeight"];t-1>o&&(o=t)}const c=getComputedStyle(r);return"content-box"===c.boxSizing&&(this.isHorizontal?(o+=parseFloat(c.paddingLeft)||0,o+=parseFloat(c.paddingRight)||0):(o+=parseFloat(c.paddingTop)||0,o+=parseFloat(c.paddingBottom)||0)),a=parseFloat(c[this.isHorizontal?"marginRight":"marginBottom"])||0,l?null===(n=r.parentElement)||void 0===n||n.removeChild(r):e.el||r.remove(),{dim:t(o,1e3),gap:t(a,1e3)}}getBounds(){const{isInfinite:t,isRTL:e,isHorizontal:i,pages:n}=this;let s={min:0,max:0};if(t)s={min:-1/0,max:1/0};else if(n.length){const t=n[0].pos,o=n[n.length-1].pos;s=e&&i?{min:t,max:o}:{min:-1*o,max:-1*t}}return{x:i?s:{min:0,max:0},y:i?{min:0,max:0}:s}}repositionSlides(){let e,{isHorizontal:i,isRTL:n,isInfinite:s,viewport:o,viewportDim:a,contentDim:r,page:l,pages:c,slides:h,panzoom:d}=this,u=0,p=0,f=0,g=0;d?g=-1*d.current[this.axis]:c[l]&&(g=c[l].pos||0),e=i?n?"right":"left":"top",n&&i&&(g*=-1);for(const i of h){const n=i.el;n?("top"===e?(n.style.right="",n.style.left=""):n.style.top="",i.index!==u?n.style[e]=0===p?"":`${t(p,1e3)}px`:n.style[e]="",f+=i.dim+i.gap,u++):p+=i.dim+i.gap}if(s&&f&&o){let n=getComputedStyle(o),s="padding",l=i?"Right":"Bottom",c=parseFloat(n[s+(i?"Left":"Top")]);g-=c,a+=c,a+=parseFloat(n[s+l]);for(const i of h)i.el&&(t(i.pos)<t(a)&&t(i.pos+i.dim+i.gap)<t(g)&&t(g)>t(r-a)&&(i.el.style[e]=`${t(p+f,1e3)}px`),t(i.pos+i.gap)>=t(r-a)&&t(i.pos)>t(g+a)&&t(g)<t(a)&&(i.el.style[e]=`-${t(f,1e3)}px`))}let m,v,b=[...this.inTransition];if(b.length>1&&(m=c[b[0]],v=c[b[1]]),m&&v){let i=0;for(const n of h)n.el?this.inTransition.has(n.index)&&m.slides.indexOf(n)<0&&(n.el.style[e]=`${t(i+(m.pos-v.pos),1e3)}px`):i+=n.dim+n.gap}}createSlideEl(t){const{track:e,slides:i}=this;if(!e||!t)return;if(t.el&&t.el.parentNode)return;const n=t.el||document.createElement("div");P(n,this.cn(J)),P(n,t.class),P(n,t.customClass);const s=t.html;s&&(s instanceof HTMLElement?n.appendChild(s):n.innerHTML=t.html+"");const o=[];i.forEach(((t,e)=>{t.el&&o.push(e)}));const a=t.index;let r=null;if(o.length){r=i[o.reduce(((t,e)=>Math.abs(e-a)<Math.abs(t-a)?e:t))]}const l=r&&r.el&&r.el.parentNode?r.index<t.index?r.el.nextSibling:r.el:null;e.insertBefore(n,e.contains(l)?l:null),t.el=n,this.emit("createSlide",t)}removeSlideEl(t,e=!1){const i=null==t?void 0:t.el;if(!i||!i.parentNode)return;const n=this.cn(K);if(i.classList.contains(n)&&(S(i,n),this.emit("unselectSlide",t)),t.isDom&&!e)return i.removeAttribute("aria-hidden"),i.removeAttribute("data-index"),void(i.style.left="");this.emit("removeSlide",t);const s=new CustomEvent(G);i.dispatchEvent(s),t.el&&(t.el.remove(),t.el=null)}transitionTo(t=0,e=this.option("transition")){var i,n,s,o;if(!e)return!1;const a=this.page,{pages:r,panzoom:l}=this;t=parseInt((t||0).toString())||0;const c=this.getPageFromIndex(t);if(!l||!r[c]||r.length<2||Math.abs(((null===(n=null===(i=r[a])||void 0===i?void 0:i.slides[0])||void 0===n?void 0:n.dim)||0)-this.viewportDim)>1)return!1;let h=t>a?1:-1;this.isInfinite&&(0===a&&t===r.length-1&&(h=-1),a===r.length-1&&0===t&&(h=1));const d=r[c].pos*(this.isRTL?1:-1);if(a===c&&Math.abs(d-l.target[this.axis])<1)return!1;this.clearTransitions();const u=l.isResting;P(this.container,this.cn("inTransition"));const p=(null===(s=r[a])||void 0===s?void 0:s.slides[0])||null,f=(null===(o=r[c])||void 0===o?void 0:o.slides[0])||null;this.inTransition.add(f.index),this.createSlideEl(f);let g=p.el,m=f.el;u||e===J||(e="fadeFast",g=null);const v=this.isRTL?"next":"prev",b=this.isRTL?"prev":"next";return g&&(this.inTransition.add(p.index),p.transition=e,g.addEventListener(G,this.onAnimationEnd),g.classList.add(`f-${e}Out`,`to-${h>0?b:v}`)),m&&(f.transition=e,m.addEventListener(G,this.onAnimationEnd),m.classList.add(`f-${e}In`,`from-${h>0?v:b}`)),l.current[this.axis]=d,l.target[this.axis]=d,l.requestTick(),this.onChange(c),!0}manageSlideVisiblity(){const t=new Set,e=new Set,i=this.getVisibleSlides(parseFloat(this.option("preload",0)+"")||0);for(const n of this.slides)i.has(n)?t.add(n):e.add(n);for(const e of this.inTransition)t.add(this.slides[e]);for(const e of t)this.createSlideEl(e),this.lazyLoadSlide(e);for(const i of e)t.has(i)||this.removeSlideEl(i);this.markSelectedSlides(),this.repositionSlides()}markSelectedSlides(){if(!this.pages[this.page]||!this.pages[this.page].slides)return;const t="aria-hidden";let e=this.cn(K);if(e)for(const i of this.slides){const n=i.el;n&&(n.dataset.index=`${i.index}`,n.classList.contains("f-thumbs__slide")?this.getVisibleSlides(0).has(i)?n.removeAttribute(t):n.setAttribute(t,"true"):this.pages[this.page].slides.includes(i)?(n.classList.contains(e)||(P(n,e),this.emit("selectSlide",i)),n.removeAttribute(t)):(n.classList.contains(e)&&(S(n,e),this.emit("unselectSlide",i)),n.setAttribute(t,"true")))}}flipInfiniteTrack(){const{axis:t,isHorizontal:e,isInfinite:i,isRTL:n,viewportDim:s,contentDim:o}=this,a=this.panzoom;if(!a||!i)return;let r=a.current[t],l=a.target[t]-r,c=0,h=.5*s;n&&e?(r<-h&&(c=-1,r+=o),r>o-h&&(c=1,r-=o)):(r>h&&(c=1,r-=o),r<-o+h&&(c=-1,r+=o)),c&&(a.current[t]=r,a.target[t]=r+l)}lazyLoadImg(t,e){const i=this,s="f-fadeIn",o="is-preloading";let a=!1,r=null;const l=()=>{a||(a=!0,r&&(r.remove(),r=null),S(e,o),e.complete&&(P(e,s),setTimeout((()=>{S(e,s)}),350)),this.option("adaptiveHeight")&&t.el&&this.pages[this.page].slides.indexOf(t)>-1&&(i.updateMetrics(),i.setViewportHeight()),this.emit("load",t))};P(e,o),e.src=e.dataset.lazySrcset||e.dataset.lazySrc||"",delete e.dataset.lazySrc,delete e.dataset.lazySrcset,e.addEventListener("error",(()=>{l()})),e.addEventListener("load",(()=>{l()})),setTimeout((()=>{const i=e.parentNode;i&&t.el&&(e.complete?l():a||(r=n(x),i.insertBefore(r,e)))}),300)}lazyLoadSlide(t){const e=t&&t.el;if(!e)return;const i=new Set;let n=Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));e.dataset.lazySrc&&n.push(e),n.map((t=>{t instanceof HTMLImageElement?i.add(t):t instanceof HTMLElement&&t.dataset.lazySrc&&(t.style.backgroundImage=`url('${t.dataset.lazySrc}')`,delete t.dataset.lazySrc)}));for(const e of i)this.lazyLoadImg(t,e)}onAnimationEnd(t){var e;const i=t.target,n=i?parseInt(i.dataset.index||"",10)||0:-1,s=this.slides[n],o=t.animationName;if(!i||!s||!o)return;const a=!!this.inTransition.has(n)&&s.transition;a&&o.substring(0,a.length+2)===`f-${a}`&&this.inTransition.delete(n),this.inTransition.size||this.clearTransitions(),n===this.page&&(null===(e=this.panzoom)||void 0===e?void 0:e.isResting)&&this.emit("settle")}onDecel(t,e=0,i=0,n=0,s=0){if(this.option("dragFree"))return void this.setPageFromPosition();const{isRTL:o,isHorizontal:a,axis:r,pages:l}=this,c=l.length,h=Math.abs(Math.atan2(i,e)/(Math.PI/180));let d=0;if(d=h>45&&h<135?a?0:i:a?e:0,!c)return;let u=this.page,p=o&&a?1:-1;const f=t.current[r]*p;let{pageIndex:g}=this.getPageFromPosition(f);Math.abs(d)>5?(l[u].dim<document.documentElement["client"+(this.isHorizontal?"Width":"Height")]-1&&(u=g),u=o&&a?d<0?u-1:u+1:d<0?u+1:u-1):u=0===n&&0===s?u:g,this.slideTo(u,{transition:!1,friction:t.option("decelFriction")})}onClick(t){const e=t.target,i=e&&E(e)?e.dataset:null;let n,s;i&&(void 0!==i.carouselPage?(s="slideTo",n=i.carouselPage):void 0!==i.carouselNext?s="slideNext":void 0!==i.carouselPrev&&(s="slidePrev")),s?(t.preventDefault(),t.stopPropagation(),e&&!e.hasAttribute("disabled")&&this[s](n)):this.emit("click",t)}onSlideTo(t){const e=t.detail||0;this.slideTo(this.getPageForSlide(e),{friction:0})}onChange(t,e=0){const i=this.page;this.prevPage=i,this.page=t,this.option("adaptiveHeight")&&this.setViewportHeight(),t!==i&&(this.markSelectedSlides(),this.emit("change",t,i,e))}onRefresh(){let t=this.contentDim,e=this.viewportDim;this.updateMetrics(),this.contentDim===t&&this.viewportDim===e||this.slideTo(this.page,{friction:0,transition:!1})}onScroll(){var t;null===(t=this.viewport)||void 0===t||t.scroll(0,0)}onResize(){this.option("breakpoints")&&this.processOptions()}onBeforeTransform(t){this.lp!==t.current[this.axis]&&(this.flipInfiniteTrack(),this.manageSlideVisiblity()),this.lp=t.current.e}onEndAnimation(){this.inTransition.size||this.emit("settle")}reInit(t=null,e=null){this.destroy(),this.state=B.Init,this.prevPage=null,this.userOptions=t||this.userOptions,this.userPlugins=e||this.userPlugins,this.processOptions()}slideTo(t=0,{friction:e=this.option("friction"),transition:i=this.option("transition")}={}){if(this.state===B.Destroy)return;t=parseInt((t||0).toString())||0;const n=this.getPageFromIndex(t),{axis:s,isHorizontal:o,isRTL:a,pages:r,panzoom:l}=this,c=r.length,h=a&&o?1:-1;if(!l||!c)return;if(this.page!==n){const e=new Event("beforeChange",{bubbles:!0,cancelable:!0});if(this.emit("beforeChange",e,t),e.defaultPrevented)return}if(this.transitionTo(t,i))return;let d=r[n].pos;if(this.isInfinite){const e=this.contentDim,i=l.target[s]*h;if(2===c)d+=e*Math.floor(parseFloat(t+"")/2);else{d=[d,d-e,d+e].reduce((function(t,e){return Math.abs(e-i)<Math.abs(t-i)?e:t}))}}d*=h,Math.abs(l.target[s]-d)<1||(l.panTo({x:o?d:0,y:o?0:d,friction:e}),this.onChange(n))}slideToClosest(t){if(this.panzoom){const{pageIndex:e}=this.getPageFromPosition();this.slideTo(e,t)}}slideNext(){this.slideTo(this.page+1)}slidePrev(){this.slideTo(this.page-1)}clearTransitions(){this.inTransition.clear(),S(this.container,this.cn("inTransition"));const t=["to-prev","to-next","from-prev","from-next"];for(const e of this.slides){const i=e.el;if(i){i.removeEventListener(G,this.onAnimationEnd),i.classList.remove(...t);const n=e.transition;n&&i.classList.remove(`f-${n}Out`,`f-${n}In`)}}this.manageSlideVisiblity()}addSlide(t,e){var i,n,s,o;const a=this.panzoom,r=(null===(i=this.pages[this.page])||void 0===i?void 0:i.pos)||0,l=(null===(n=this.pages[this.page])||void 0===n?void 0:n.dim)||0,c=this.contentDim<this.viewportDim;let h=Array.isArray(e)?e:[e];const d=[];for(const t of h)d.push(H(t));this.slides.splice(t,0,...d);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;for(const t of d)this.emit("beforeInitSlide",t,t.index);if(this.page>=t&&(this.page+=d.length),this.updateMetrics(),a){const e=(null===(s=this.pages[this.page])||void 0===s?void 0:s.pos)||0,i=(null===(o=this.pages[this.page])||void 0===o?void 0:o.dim)||0,n=this.pages.length||1,h=this.isRTL?l-i:i-l,d=this.isRTL?r-e:e-r;c&&1===n?(t<=this.page&&(a.current[this.axis]-=h,a.target[this.axis]-=h),a.panTo({[this.isHorizontal?"x":"y"]:-1*e})):d&&t<=this.page&&(a.target[this.axis]-=d,a.current[this.axis]-=d,a.requestTick())}for(const t of d)this.emit("initSlide",t,t.index)}prependSlide(t){this.addSlide(0,t)}appendSlide(t){this.addSlide(this.slides.length,t)}removeSlide(t){const e=this.slides.length;t=(t%e+e)%e;const i=this.slides[t];if(i){this.removeSlideEl(i,!0),this.slides.splice(t,1);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;this.updateMetrics(),this.slideTo(this.page,{friction:0,transition:!1}),this.emit("destroySlide",i)}}updateMetrics(){const{panzoom:e,viewport:i,track:n,slides:s,isHorizontal:o,isInfinite:a}=this;if(!n)return;const r=o?"width":"height",l=o?"offsetWidth":"offsetHeight";if(i){let e=Math.max(i[l],t(i.getBoundingClientRect()[r],1e3)),n=getComputedStyle(i),s="padding",a=o?"Right":"Bottom";e-=parseFloat(n[s+(o?"Left":"Top")])+parseFloat(n[s+a]),this.viewportDim=e}let c,h=0;for(const[e,i]of s.entries()){let n=0,o=0;!i.el&&c?(n=c.dim,o=c.gap):(({dim:n,gap:o}=this.getSlideMetrics(i)),c=i),n=t(n,1e3),o=t(o,1e3),i.dim=n,i.gap=o,i.pos=h,h+=n,(a||e<s.length-1)&&(h+=o)}h=t(h,1e3),this.contentDim=h,e&&(e.contentRect[r]=h,e.contentRect[o?"fullWidth":"fullHeight"]=h),this.pages=this.createPages(),this.pages=this.processPages(),this.state===B.Init&&this.setInitialPage(),this.page=Math.max(0,Math.min(this.page,this.pages.length-1)),this.manageSlideVisiblity(),this.emit("refresh")}getProgress(e,i=!1,n=!1){void 0===e&&(e=this.page);const s=this,o=s.panzoom,a=s.contentDim,r=s.pages[e]||0;if(!r||!o)return e>this.page?-1:1;let l=-1*o.current.e,c=t((l-r.pos)/(1*r.dim),1e3),h=c,d=c;this.isInfinite&&!0!==n&&(h=t((l-r.pos+a)/(1*r.dim),1e3),d=t((l-r.pos-a)/(1*r.dim),1e3));let u=[c,h,d].reduce((function(t,e){return Math.abs(e)<Math.abs(t)?e:t}));return i?u:u>1?1:u<-1?-1:u}setViewportHeight(){const{page:t,pages:e,viewport:i,isHorizontal:n}=this;if(!i||!e[t])return;let s=0;n&&this.track&&(this.track.style.height="auto",e[t].slides.forEach((t=>{t.el&&(s=Math.max(s,t.el.offsetHeight))}))),i.style.height=s?`${s}px`:""}getPageForSlide(t){for(const e of this.pages)for(const i of e.slides)if(i.index===t)return e.index;return-1}getVisibleSlides(t=0){var e;const i=new Set;let{panzoom:n,contentDim:s,viewportDim:o,pages:a,page:r}=this;if(o){s=s+(null===(e=this.slides[this.slides.length-1])||void 0===e?void 0:e.gap)||0;let l=0;l=n&&n.state!==m.Init&&n.state!==m.Destroy?-1*n.current[this.axis]:a[r]&&a[r].pos||0,this.isInfinite&&(l-=Math.floor(l/s)*s),this.isRTL&&this.isHorizontal&&(l*=-1);const c=l-o*t,h=l+o*(t+1),d=this.isInfinite?[-1,0,1]:[0];for(const t of this.slides)for(const e of d){const n=t.pos+e*s,o=n+t.dim+t.gap;n<h&&o>c&&i.add(t)}}return i}getPageFromPosition(t){const{viewportDim:e,contentDim:i,slides:n,pages:s,panzoom:o}=this,a=s.length,r=n.length,l=n[0],c=n[r-1],h=this.option("center");let d=0,u=0,p=0,f=void 0===t?-1*((null==o?void 0:o.target[this.axis])||0):t;h&&(f+=.5*e),this.isInfinite?(f<l.pos-.5*c.gap&&(f-=i,p=-1),f>c.pos+c.dim+.5*c.gap&&(f-=i,p=1)):f=Math.max(l.pos||0,Math.min(f,c.pos));let g=c,m=n.find((t=>{const e=t.pos-.5*g.gap,i=t.pos+t.dim+.5*t.gap;return g=t,f>=e&&f<i}));return m||(m=c),u=this.getPageForSlide(m.index),d=u+p*a,{page:d,pageIndex:u}}setPageFromPosition(){const{pageIndex:t}=this.getPageFromPosition();this.onChange(t)}destroy(){if([B.Destroy].includes(this.state))return;this.state=B.Destroy;const{container:t,viewport:e,track:i,slides:n,panzoom:s}=this,o=this.option("classes");t.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),t.removeEventListener("slideTo",this.onSlideTo),window.removeEventListener("resize",this.onResize),s&&(s.destroy(),this.panzoom=null),n&&n.forEach((t=>{this.removeSlideEl(t)})),this.detachPlugins(),e&&(e.removeEventListener("scroll",this.onScroll),e.offsetParent&&i&&i.offsetParent&&e.replaceWith(...i.childNodes));for(const[e,i]of Object.entries(o))"container"!==e&&i&&t.classList.remove(i);this.track=null,this.viewport=null,this.page=0,this.slides=[];const a=this.events.get("ready");this.events=new Map,a&&this.events.set("ready",a)}}Object.defineProperty(Q,"Panzoom",{enumerable:!0,configurable:!0,writable:!0,value:I}),Object.defineProperty(Q,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:j}),Object.defineProperty(Q,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:U});const tt=function(t){if(!E(t))return 0;const e=window.scrollY,i=window.innerHeight,n=e+i,s=t.getBoundingClientRect(),o=s.y+e,a=s.height,r=o+a;if(e>r||n<o)return 0;if(e<o&&n>r)return 100;if(o<e&&r>n)return 100;let l=a;o<e&&(l-=e-o),r>n&&(l-=r-n);const c=l/i*100;return Math.round(c)},et=!("undefined"==typeof window||!window.document||!window.document.createElement);let it;const nt=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),st=t=>{if(t&&et){void 0===it&&document.createElement("div").focus({get preventScroll(){return it=!0,!1}});try{if(it)t.focus({preventScroll:!0});else{const e=window.scrollY||document.body.scrollTop,i=window.scrollX||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},ot=()=>{const t=document;let e,i="",n="",s="";return t.fullscreenEnabled?(i="requestFullscreen",n="exitFullscreen",s="fullscreenElement"):t.webkitFullscreenEnabled&&(i="webkitRequestFullscreen",n="webkitExitFullscreen",s="webkitFullscreenElement"),i&&(e={request:function(e=t.documentElement){return"webkitRequestFullscreen"===i?e[i](Element.ALLOW_KEYBOARD_INPUT):e[i]()},exit:function(){return t[s]&&t[n]()},isFullscreen:function(){return t[s]}}),e},at={animated:!0,autoFocus:!0,backdropClick:"close",Carousel:{classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"}},closeButton:"auto",closeExisting:!1,commonCaption:!1,compact:()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,contentClick:"toggleZoom",contentDblClick:!1,defaultType:"image",defaultDisplay:"flex",dragToClose:!0,Fullscreen:{autoStart:!1},groupAll:!1,groupAttr:"data-fancybox",hideClass:"f-fadeOut",hideScrollbar:!0,idle:3500,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},l10n:Object.assign(Object.assign({},b),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}),parentEl:null,placeFocusBack:!0,showClass:"f-zoomInUp",startIndex:0,tpl:{closeButton:'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',main:'<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'},trapFocus:!0,wheel:"zoom"};var rt,lt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Closing=2]="Closing",t[t.CustomClosing=3]="CustomClosing",t[t.Destroy=4]="Destroy"}(rt||(rt={})),function(t){t[t.Loading=0]="Loading",t[t.Opening=1]="Opening",t[t.Ready=2]="Ready",t[t.Closing=3]="Closing"}(lt||(lt={}));let ct="",ht=!1,dt=!1,ut=null;const pt=()=>{let t="",e="";const i=Oe.getInstance();if(i){const n=i.carousel,s=i.getSlide();if(n&&s){let o=s.slug||void 0,a=s.triggerEl||void 0;e=o||(i.option("slug")||""),!e&&a&&a.dataset&&(e=a.dataset.fancybox||""),e&&"true"!==e&&(t="#"+e+(!o&&n.slides.length>1?"-"+(s.index+1):""))}}return{hash:t,slug:e,index:1}},ft=()=>{const t=new URL(document.URL).hash,e=t.slice(1).split("-"),i=e[e.length-1],n=i&&/^\+?\d+$/.test(i)&&parseInt(e.pop()||"1",10)||1;return{hash:t,slug:e.join("-"),index:n}},gt=()=>{const{slug:t,index:e}=ft();if(!t)return;let i=document.querySelector(`[data-slug="${t}"]`);if(i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),Oe.getInstance())return;const n=document.querySelectorAll(`[data-fancybox="${t}"]`);n.length&&(i=n[e-1],i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))},mt=()=>{if(!1===Oe.defaults.Hash)return;const t=Oe.getInstance();if(!1===(null==t?void 0:t.options.Hash))return;const{slug:e,index:i}=ft(),{slug:n}=pt();t&&(e===n?t.jumpTo(i-1):(ht=!0,t.close())),gt()},vt=()=>{ut&&clearTimeout(ut),queueMicrotask((()=>{mt()}))},bt=()=>{window.addEventListener("hashchange",vt,!1),setTimeout((()=>{mt()}),500)};et&&(/complete|interactive|loaded/.test(document.readyState)?bt():document.addEventListener("DOMContentLoaded",bt));const yt="is-zooming-in";class wt extends _{onCreateSlide(t,e,i){const n=this.instance.optionFor(i,"src")||"";i.el&&"image"===i.type&&"string"==typeof n&&this.setImage(i,n)}onRemoveSlide(t,e,i){i.panzoom&&i.panzoom.destroy(),i.panzoom=void 0,i.imageEl=void 0}onChange(t,e,i,n){S(this.instance.container,yt);for(const t of e.slides){const e=t.panzoom;e&&t.index!==i&&e.reset(.35)}}onClose(){var t;const e=this.instance,i=e.container,n=e.getSlide();if(!i||!i.parentElement||!n)return;const{el:s,contentEl:o,panzoom:a,thumbElSrc:r}=n;if(!s||!r||!o||!a||a.isContentLoading||a.state===m.Init||a.state===m.Destroy)return;a.updateMetrics();let l=this.getZoomInfo(n);if(!l)return;this.instance.state=rt.CustomClosing,i.classList.remove(yt),i.classList.add("is-zooming-out"),o.style.backgroundImage=`url('${r}')`;const c=i.getBoundingClientRect();1===((null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1)&&Object.assign(i.style,{position:"absolute",top:`${i.offsetTop+window.scrollY}px`,left:`${i.offsetLeft+window.scrollX}px`,bottom:"auto",right:"auto",width:`${c.width}px`,height:`${c.height}px`,overflow:"hidden"});const{x:h,y:d,scale:u,opacity:p}=l;if(p){const t=((t,e,i,n)=>{const s=e-t,o=n-i;return e=>i+((e-t)/s*o||0)})(a.scale,u,1,0);a.on("afterTransform",(()=>{o.style.opacity=t(a.scale)+""}))}a.on("endAnimation",(()=>{e.destroy()})),a.target.a=u,a.target.b=0,a.target.c=0,a.target.d=u,a.panTo({x:h,y:d,scale:u,friction:p?.2:.33,ignoreBounds:!0}),a.isResting&&e.destroy()}setImage(t,e){const i=this.instance;t.src=e,this.process(t,e).then((e=>{const{contentEl:n,imageEl:s,thumbElSrc:o,el:a}=t;if(i.isClosing()||!n||!s)return;n.offsetHeight;const r=!!i.isOpeningSlide(t)&&this.getZoomInfo(t);if(this.option("protected")&&a){a.addEventListener("contextmenu",(t=>{t.preventDefault()}));const t=document.createElement("div");P(t,"fancybox-protected"),n.appendChild(t)}if(o&&r){const s=e.contentRect,a=Math.max(s.fullWidth,s.fullHeight);let c=null;!r.opacity&&a>1200&&(c=document.createElement("img"),P(c,"fancybox-ghost"),c.src=o,n.appendChild(c));const h=()=>{c&&(P(c,"f-fadeFastOut"),setTimeout((()=>{c&&(c.remove(),c=null)}),200))};(l=o,new Promise(((t,e)=>{const i=new Image;i.onload=t,i.onerror=e,i.src=l}))).then((()=>{i.hideLoading(t),t.state=lt.Opening,this.instance.emit("reveal",t),this.zoomIn(t).then((()=>{h(),this.instance.done(t)}),(()=>{})),c&&setTimeout((()=>{h()}),a>2500?800:200)}),(()=>{i.hideLoading(t),i.revealContent(t)}))}else{const n=this.optionFor(t,"initialSize"),s=this.optionFor(t,"zoom"),o={event:i.prevMouseMoveEvent||i.options.event,friction:s?.12:0};let a=i.optionFor(t,"showClass")||void 0,r=!0;i.isOpeningSlide(t)&&("full"===n?e.zoomToFull(o):"cover"===n?e.zoomToCover(o):"max"===n?e.zoomToMax(o):r=!1,e.stop("current")),r&&a&&(a=e.isDragging?"f-fadeIn":""),i.hideLoading(t),i.revealContent(t,a)}var l}),(()=>{i.setError(t,"{{IMAGE_ERROR}}")}))}process(t,e){return new Promise(((i,s)=>{var o;const a=this.instance,r=t.el;a.clearContent(t),a.showLoading(t);let l=this.optionFor(t,"content");if("string"==typeof l&&(l=n(l)),!l||!E(l)){if(l=document.createElement("img"),l instanceof HTMLImageElement){let i="",n=t.caption;i="string"==typeof n&&n?n.replace(/<[^>]+>/gi,"").substring(0,1e3):`Image ${t.index+1} of ${(null===(o=a.carousel)||void 0===o?void 0:o.pages.length)||1}`,l.src=e||"",l.alt=i,l.draggable=!1,t.srcset&&l.setAttribute("srcset",t.srcset),this.instance.isOpeningSlide(t)&&(l.fetchPriority="high")}t.sizes&&l.setAttribute("sizes",t.sizes)}P(l,"fancybox-image"),t.imageEl=l,a.setContent(t,l,!1);t.panzoom=new I(r,u({transformParent:!0},this.option("Panzoom")||{},{content:l,width:(e,i)=>a.optionFor(t,"width","auto",i)||"auto",height:(e,i)=>a.optionFor(t,"height","auto",i)||"auto",wheel:()=>{const t=a.option("wheel");return("zoom"===t||"pan"==t)&&t},click:(e,i)=>{var n,s;if(a.isCompact||a.isClosing())return!1;if(t.index!==(null===(n=a.getSlide())||void 0===n?void 0:n.index))return!1;if(i){const t=i.composedPath()[0];if(["A","BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].includes(t.nodeName))return!1}let o=!i||i.target&&(null===(s=t.contentEl)||void 0===s?void 0:s.contains(i.target));return a.option(o?"contentClick":"backdropClick")||!1},dblClick:()=>a.isCompact?"toggleZoom":a.option("contentDblClick")||!1,spinner:!1,panOnlyZoomed:!0,wheelLimit:1/0,on:{ready:t=>{i(t)},error:()=>{s()},destroy:()=>{s()}}}))}))}zoomIn(t){return new Promise(((e,i)=>{const n=this.instance,s=n.container,{panzoom:o,contentEl:a,el:r}=t;o&&o.updateMetrics();const l=this.getZoomInfo(t);if(!(l&&r&&a&&o&&s))return void i();const{x:c,y:h,scale:d,opacity:u}=l,p=()=>{t.state!==lt.Closing&&(u&&(a.style.opacity=Math.max(Math.min(1,1-(1-o.scale)/(1-d)),0)+""),o.scale>=1&&o.scale>o.targetScale-.1&&e(o))},f=t=>{(t.scale<.99||t.scale>1.01)&&!t.isDragging||(S(s,yt),a.style.opacity="",t.off("endAnimation",f),t.off("touchStart",f),t.off("afterTransform",p),e(t))};o.on("endAnimation",f),o.on("touchStart",f),o.on("afterTransform",p),o.on(["error","destroy"],(()=>{i()})),o.panTo({x:c,y:h,scale:d,friction:0,ignoreBounds:!0}),o.stop("current");const g={event:"mousemove"===o.panMode?n.prevMouseMoveEvent||n.options.event:void 0},m=this.optionFor(t,"initialSize");P(s,yt),n.hideLoading(t),"full"===m?o.zoomToFull(g):"cover"===m?o.zoomToCover(g):"max"===m?o.zoomToMax(g):o.reset(.172)}))}getZoomInfo(t){const{el:e,imageEl:i,thumbEl:n,panzoom:s}=t,o=this.instance,a=o.container;if(!e||!i||!n||!s||tt(n)<3||!this.optionFor(t,"zoom")||!a||o.state===rt.Destroy)return!1;if("0"===getComputedStyle(a).getPropertyValue("--f-images-zoom"))return!1;const r=window.visualViewport||null;if(1!==(r?r.scale:1))return!1;let{top:l,left:c,width:h,height:d}=n.getBoundingClientRect(),{top:u,left:p,fitWidth:f,fitHeight:g}=s.contentRect;if(!(h&&d&&f&&g))return!1;const m=s.container.getBoundingClientRect();p+=m.left,u+=m.top;const v=-1*(p+.5*f-(c+.5*h)),b=-1*(u+.5*g-(l+.5*d)),y=h/f;let w=this.option("zoomOpacity")||!1;return"auto"===w&&(w=Math.abs(h/d-f/g)>.1),{x:v,y:b,scale:y,opacity:w}}attach(){const t=this,e=t.instance;e.on("Carousel.change",t.onChange),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.removeSlide",t.onRemoveSlide),e.on("close",t.onClose)}detach(){const t=this,e=t.instance;e.off("Carousel.change",t.onChange),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.removeSlide",t.onRemoveSlide),e.off("close",t.onClose)}}Object.defineProperty(wt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{initialSize:"fit",Panzoom:{maxScale:1},protected:!1,zoom:!0,zoomOpacity:"auto"}}),"function"==typeof SuppressedError&&SuppressedError;const xt="html",Et="image",St="map",Pt="youtube",Ct="vimeo",Tt="html5video",Mt=(t,e={})=>{const i=new URL(t),n=new URLSearchParams(i.search),s=new URLSearchParams;for(const[t,i]of[...n,...Object.entries(e)]){let e=i+"";if("t"===t){let t=e.match(/((\d*)m)?(\d*)s?/);t&&s.set("start",60*parseInt(t[2]||"0")+parseInt(t[3]||"0")+"")}else s.set(t,e)}let o=s+"",a=t.match(/#t=((.*)?\d+s)/);return a&&(o+=`#t=${a[1]}`),o},Ot={ajax:null,autoSize:!0,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},preload:!0,videoAutoplay:!0,videoRatio:16/9,videoTpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',videoFormat:"",vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},At=["image","html","ajax","inline","clone","iframe","map","pdf","html5video","youtube","vimeo"];class Lt extends _{onBeforeInitSlide(t,e,i){this.processType(i)}onCreateSlide(t,e,i){this.setContent(i)}onClearContent(t,e){e.xhr&&(e.xhr.abort(),e.xhr=null);const i=e.iframeEl;i&&(i.onload=i.onerror=null,i.src="//about:blank",e.iframeEl=null);const n=e.contentEl,s=e.placeholderEl;if("inline"===e.type&&n&&s)n.classList.remove("fancybox__content"),"none"!==getComputedStyle(n).getPropertyValue("display")&&(n.style.display="none"),setTimeout((()=>{s&&(n&&s.parentNode&&s.parentNode.insertBefore(n,s),s.remove())}),0),e.contentEl=void 0,e.placeholderEl=void 0;else for(;e.el&&e.el.firstChild;)e.el.removeChild(e.el.firstChild)}onSelectSlide(t,e,i){i.state===lt.Ready&&this.playVideo()}onUnselectSlide(t,e,i){var n,s;if(i.type===Tt){try{null===(s=null===(n=i.el)||void 0===n?void 0:n.querySelector("video"))||void 0===s||s.pause()}catch(t){}return}let o;i.type===Ct?o={method:"pause",value:"true"}:i.type===Pt&&(o={event:"command",func:"pauseVideo"}),o&&i.iframeEl&&i.iframeEl.contentWindow&&i.iframeEl.contentWindow.postMessage(JSON.stringify(o),"*"),i.poller&&clearTimeout(i.poller)}onDone(t,e){t.isCurrentSlide(e)&&!t.isClosing()&&this.playVideo()}onRefresh(t,e){e.slides.forEach((t=>{t.el&&(this.resizeIframe(t),this.setAspectRatio(t))}))}onMessage(t){try{let e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event)for(let e of Array.from(document.getElementsByClassName("fancybox__iframe")))e instanceof HTMLIFrameElement&&e.contentWindow===t.source&&(e.dataset.ready="true")}else if(t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===e.event){const t=document.getElementById(e.id);t&&(t.dataset.ready="true")}}catch(t){}}loadAjaxContent(t){const e=this.instance.optionFor(t,"src")||"";this.instance.showLoading(t);const i=this.instance,n=new XMLHttpRequest;i.showLoading(t),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&i.state===rt.Ready&&(i.hideLoading(t),200===n.status?i.setContent(t,n.responseText):i.setError(t,404===n.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};const s=t.ajax||null;n.open(s?"POST":"GET",e+""),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(s),t.xhr=n}setInlineContent(t){let e=null;if(E(t.src))e=t.src;else if("string"==typeof t.src){const i=t.src.split("#",2).pop();e=i?document.getElementById(i):null}if(e){if("clone"===t.type||e.closest(".fancybox__slide")){e=e.cloneNode(!0);const i=e.dataset.animationName;i&&(e.classList.remove(i),delete e.dataset.animationName);let n=e.getAttribute("id");n=n?`${n}--clone`:`clone-${this.instance.id}-${t.index}`,e.setAttribute("id",n)}else if(e.parentNode){const i=document.createElement("div");i.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(i,e),t.placeholderEl=i}this.instance.setContent(t,e)}else this.instance.setError(t,"{{ELEMENT_NOT_FOUND}}")}setIframeContent(t){const{src:e,el:i}=t;if(!e||"string"!=typeof e||!i)return;i.classList.add("is-loading");const n=this.instance,s=document.createElement("iframe");s.className="fancybox__iframe",s.setAttribute("id",`fancybox__iframe_${n.id}_${t.index}`);for(const[e,i]of Object.entries(this.optionFor(t,"iframeAttr")||{}))s.setAttribute(e,i);s.onerror=()=>{n.setError(t,"{{IFRAME_ERROR}}")},t.iframeEl=s;const o=this.optionFor(t,"preload");if("iframe"!==t.type||!1===o)return s.setAttribute("src",t.src+""),n.setContent(t,s,!1),this.resizeIframe(t),void n.revealContent(t);n.showLoading(t),s.onload=()=>{if(!s.src.length)return;const e="true"!==s.dataset.ready;s.dataset.ready="true",this.resizeIframe(t),e?n.revealContent(t):n.hideLoading(t)},s.setAttribute("src",e),n.setContent(t,s,!1)}resizeIframe(t){const{type:e,iframeEl:i}=t;if(e===Pt||e===Ct)return;const n=null==i?void 0:i.parentElement;if(!i||!n)return;let s=t.autoSize;void 0===s&&(s=this.optionFor(t,"autoSize"));let o=t.width||0,a=t.height||0;o&&a&&(s=!1);const r=n&&n.style;if(!1!==t.preload&&!1!==s&&r)try{const t=window.getComputedStyle(n),e=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),l=i.contentWindow;if(l){const t=l.document,i=t.getElementsByTagName(xt)[0],n=t.body;r.width="",n.style.overflow="hidden",o=o||i.scrollWidth+e,r.width=`${o}px`,n.style.overflow="",r.flex="0 0 auto",r.height=`${n.scrollHeight}px`,a=i.scrollHeight+s}}catch(t){}if(o||a){const t={flex:"0 1 auto",width:"",height:""};o&&"auto"!==o&&(t.width=`${o}px`),a&&"auto"!==a&&(t.height=`${a}px`),Object.assign(r,t)}}playVideo(){const t=this.instance.getSlide();if(!t)return;const{el:e}=t;if(!e||!e.offsetParent)return;if(!this.optionFor(t,"videoAutoplay"))return;if(t.type===Tt)try{const t=e.querySelector("video");if(t){const e=t.play();void 0!==e&&e.then((()=>{})).catch((e=>{t.muted=!0,t.play()}))}}catch(t){}if(t.type!==Pt&&t.type!==Ct)return;const i=()=>{if(t.iframeEl&&t.iframeEl.contentWindow){let e;if("true"===t.iframeEl.dataset.ready)return e=t.type===Pt?{event:"command",func:"playVideo"}:{method:"play",value:"true"},e&&t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"),void(t.poller=void 0);t.type===Pt&&(e={event:"listening",id:t.iframeEl.getAttribute("id")},t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(i,250)};i()}processType(t){if(t.html)return t.type=xt,t.src=t.html,void(t.html="");const e=this.instance.optionFor(t,"src","");if(!e||"string"!=typeof e)return;let i=t.type,n=null;if(n=e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){const s=this.optionFor(t,Pt),{nocookie:o}=s,a=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}(s,["nocookie"]),r=`www.youtube${o?"-nocookie":""}.com`,l=Mt(e,a),c=encodeURIComponent(n[2]);t.videoId=c,t.src=`https://${r}/embed/${c}?${l}`,t.thumbSrc=t.thumbSrc||`https://i.ytimg.com/vi/${c}/mqdefault.jpg`,i=Pt}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)){const s=Mt(e,this.optionFor(t,Ct)),o=encodeURIComponent(n[1]),a=n[4]||"";t.videoId=o,t.src=`https://player.vimeo.com/video/${o}?${a?`h=${a}${s?"&":""}`:""}${s}`,i=Ct}if(!i&&t.triggerEl){const e=t.triggerEl.dataset.type;At.includes(e)&&(i=e)}i||"string"==typeof e&&("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i=Tt,t.videoFormat=t.videoFormat||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i=Et:e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src=`https://maps.google.${n[1]}/?ll=${(n[2]?n[2]+"&z="+Math.floor(parseFloat(n[3]))+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&")}&output=${n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"}`,i=St):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src=`https://maps.google.${n[1]}/maps?q=${n[2].replace("query=","q=").replace("api=1","")}&output=embed`,i=St),i=i||this.instance.option("defaultType"),t.type=i,i===Et&&(t.thumbSrc=t.thumbSrc||t.src)}setContent(t){const e=this.instance.optionFor(t,"src")||"";if(t&&t.type&&e){switch(t.type){case xt:this.instance.setContent(t,e);break;case Tt:const i=this.option("videoTpl");i&&this.instance.setContent(t,i.replace(/\{\{src\}\}/gi,e+"").replace(/\{\{format\}\}/gi,this.optionFor(t,"videoFormat")||"").replace(/\{\{poster\}\}/gi,t.poster||t.thumbSrc||""));break;case"inline":case"clone":this.setInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case St:case Pt:case Ct:t.preload=!1;case"iframe":this.setIframeContent(t)}this.setAspectRatio(t)}}setAspectRatio(t){const e=t.contentEl;if(!(t.el&&e&&t.type&&[Pt,Ct,Tt].includes(t.type)))return;let i,n=t.width||"auto",s=t.height||"auto";if("auto"===n||"auto"===s){i=this.optionFor(t,"videoRatio");const e=(i+"").match(/(\d+)\s*\/\s?(\d+)/);i=e&&e.length>2?parseFloat(e[1])/parseFloat(e[2]):parseFloat(i+"")}else n&&s&&(i=n/s);if(!i)return;e.style.aspectRatio="",e.style.width="",e.style.height="",e.offsetHeight;const o=e.getBoundingClientRect(),a=o.width||1,r=o.height||1;e.style.aspectRatio=i+"",i<a/r?(s="auto"===s?r:Math.min(r,s),e.style.width="auto",e.style.height=`${s}px`):(n="auto"===n?a:Math.min(a,n),e.style.width=`${n}px`,e.style.height="auto")}attach(){const t=this,e=t.instance;e.on("Carousel.beforeInitSlide",t.onBeforeInitSlide),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.selectSlide",t.onSelectSlide),e.on("Carousel.unselectSlide",t.onUnselectSlide),e.on("Carousel.Panzoom.refresh",t.onRefresh),e.on("done",t.onDone),e.on("clearContent",t.onClearContent),window.addEventListener("message",t.onMessage)}detach(){const t=this,e=t.instance;e.off("Carousel.beforeInitSlide",t.onBeforeInitSlide),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.selectSlide",t.onSelectSlide),e.off("Carousel.unselectSlide",t.onUnselectSlide),e.off("Carousel.Panzoom.refresh",t.onRefresh),e.off("done",t.onDone),e.off("clearContent",t.onClearContent),window.removeEventListener("message",t.onMessage)}}Object.defineProperty(Lt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Ot});const zt="play",Rt="pause",kt="ready";class It extends _{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:kt}),Object.defineProperty(this,"inHover",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"progressBar",{enumerable:!0,configurable:!0,writable:!0,value:null})}get isActive(){return this.state!==kt}onReady(t){this.option("autoStart")&&(t.isInfinite||t.page<t.pages.length-1)&&this.start()}onChange(){this.removeProgressBar(),this.pause()}onSettle(){this.resume()}onVisibilityChange(){"visible"===document.visibilityState?this.resume():this.pause()}onMouseEnter(){this.inHover=!0,this.pause()}onMouseLeave(){var t;this.inHover=!1,(null===(t=this.instance.panzoom)||void 0===t?void 0:t.isResting)&&this.resume()}onTimerEnd(){const t=this.instance;"play"===this.state&&(t.isInfinite||t.page!==t.pages.length-1?t.slideNext():t.slideTo(0))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}createProgressBar(){var t;if(!this.option("showProgress"))return null;this.removeProgressBar();const e=this.instance,i=(null===(t=e.pages[e.page])||void 0===t?void 0:t.slides)||[];let n=this.option("progressParentEl");if(n||(n=(1===i.length?i[0].el:null)||e.viewport),!n)return null;const s=document.createElement("div");return P(s,"f-progress"),n.prepend(s),this.progressBar=s,s.offsetHeight,s}set(){const t=this,e=t.instance;if(e.pages.length<2)return;if(t.timer)return;const i=t.option("timeout");t.state=zt,P(e.container,"has-autoplay");let n=t.createProgressBar();n&&(n.style.transitionDuration=`${i}ms`,n.style.transform="scaleX(1)"),t.timer=setTimeout((()=>{t.timer=null,t.inHover||t.onTimerEnd()}),i),t.emit("set")}clear(){const t=this;t.timer&&(clearTimeout(t.timer),t.timer=null),t.removeProgressBar()}start(){const t=this;if(t.set(),t.state!==kt){if(t.option("pauseOnHover")){const e=t.instance.container;e.addEventListener("mouseenter",t.onMouseEnter,!1),e.addEventListener("mouseleave",t.onMouseLeave,!1)}document.addEventListener("visibilitychange",t.onVisibilityChange,!1),t.emit("start")}}stop(){const t=this,e=t.state,i=t.instance.container;t.clear(),t.state=kt,i.removeEventListener("mouseenter",t.onMouseEnter,!1),i.removeEventListener("mouseleave",t.onMouseLeave,!1),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),S(i,"has-autoplay"),e!==kt&&t.emit("stop")}pause(){const t=this;t.state===zt&&(t.state=Rt,t.clear(),t.emit(Rt))}resume(){const t=this,e=t.instance;if(e.isInfinite||e.page!==e.pages.length-1)if(t.state!==zt){if(t.state===Rt&&!t.inHover){const e=new Event("resume",{bubbles:!0,cancelable:!0});t.emit("resume",e),e.defaultPrevented||t.set()}}else t.set();else t.stop()}toggle(){this.state===zt||this.state===Rt?this.stop():this.start()}attach(){const t=this,e=t.instance;e.on("ready",t.onReady),e.on("Panzoom.startAnimation",t.onChange),e.on("Panzoom.endAnimation",t.onSettle),e.on("Panzoom.touchMove",t.onChange)}detach(){const t=this,e=t.instance;e.off("ready",t.onReady),e.off("Panzoom.startAnimation",t.onChange),e.off("Panzoom.endAnimation",t.onSettle),e.off("Panzoom.touchMove",t.onChange),t.stop()}}Object.defineProperty(It,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{autoStart:!0,pauseOnHover:!0,progressParentEl:null,showProgress:!0,timeout:3e3}});class Dt extends _{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null})}onPrepare(t){const e=t.carousel;if(!e)return;const i=t.container;i&&(e.options.Autoplay=u({autoStart:!1},this.option("Autoplay")||{},{pauseOnHover:!1,timeout:this.option("timeout"),progressParentEl:()=>this.option("progressParentEl")||null,on:{start:()=>{t.emit("startSlideshow")},set:e=>{var n;i.classList.add("has-slideshow"),(null===(n=t.getSlide())||void 0===n?void 0:n.state)!==lt.Ready&&e.pause()},stop:()=>{i.classList.remove("has-slideshow"),t.isCompact||t.endIdle(),t.emit("endSlideshow")},resume:(e,i)=>{var n,s,o;!i||!i.cancelable||(null===(n=t.getSlide())||void 0===n?void 0:n.state)===lt.Ready&&(null===(o=null===(s=t.carousel)||void 0===s?void 0:s.panzoom)||void 0===o?void 0:o.isResting)||i.preventDefault()}}}),e.attachPlugins({Autoplay:It}),this.ref=e.plugins.Autoplay)}onReady(t){const e=t.carousel,i=this.ref;i&&e&&this.option("playOnStart")&&(e.isInfinite||e.page<e.pages.length-1)&&i.start()}onDone(t,e){const i=this.ref,n=t.carousel;if(!i||!n)return;const s=e.panzoom;s&&s.on("startAnimation",(()=>{t.isCurrentSlide(e)&&i.stop()})),t.isCurrentSlide(e)&&i.resume()}onKeydown(t,e){var i;const n=this.ref;n&&e===this.option("key")&&"BUTTON"!==(null===(i=document.activeElement)||void 0===i?void 0:i.nodeName)&&n.toggle()}attach(){const t=this,e=t.instance;e.on("Carousel.init",t.onPrepare),e.on("Carousel.ready",t.onReady),e.on("done",t.onDone),e.on("keydown",t.onKeydown)}detach(){const t=this,e=t.instance;e.off("Carousel.init",t.onPrepare),e.off("Carousel.ready",t.onReady),e.off("done",t.onDone),e.off("keydown",t.onKeydown)}}Object.defineProperty(Dt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{key:" ",playOnStart:!1,progressParentEl:t=>{var e;return(null===(e=t.instance.container)||void 0===e?void 0:e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]"))||t.instance.container},timeout:3e3}});const Ft={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};var jt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Hidden=2]="Hidden"}(jt||(jt={}));const Bt="isResting",Ht="thumbWidth",Nt="thumbHeight",_t="thumbClipWidth";let $t=class extends _{constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:jt.Init})}get isModern(){return"modern"===this.type}onInitSlide(t,e){const i=e.el?e.el.dataset:void 0;i&&(e.thumbSrc=i.thumbSrc||e.thumbSrc||"",e[_t]=parseFloat(i[_t]||"")||e[_t]||0,e[Nt]=parseFloat(i.thumbHeight||"")||e[Nt]||0),this.addSlide(e)}onInitSlides(){this.build()}onChange(){var t;if(!this.isModern)return;const e=this.container,i=this.instance,n=i.panzoom,s=this.carousel,a=s?s.panzoom:null,r=i.page;if(n&&s&&a){if(n.isDragging){S(e,this.cn(Bt));let n=(null===(t=s.pages[r])||void 0===t?void 0:t.pos)||0;n+=i.getProgress(r)*(this[_t]+this.thumbGap);let o=a.getBounds();-1*n>o.x.min&&-1*n<o.x.max&&a.panTo({x:-1*n,friction:.12})}else o(e,this.cn(Bt),n.isResting);this.shiftModern()}}onRefresh(){this.updateProps();for(const t of this.instance.slides||[])this.resizeModernSlide(t);this.shiftModern()}isDisabled(){const t=this.option("minCount")||0;if(t){const e=this.instance;let i=0;for(const t of e.slides||[])t.thumbSrc&&i++;if(i<t)return!0}const e=this.option("type");return["modern","classic"].indexOf(e)<0}getThumb(t){const e=this.option("thumbTpl")||"";return{html:this.instance.localize(e,[["%i",t.index],["%d",t.index+1],["%s",t.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}}addSlide(t){const e=this.carousel;e&&e.addSlide(t.index,this.getThumb(t))}getSlides(){const t=[];for(const e of this.instance.slides||[])t.push(this.getThumb(e));return t}resizeModernSlide(t){this.isModern&&(t[Ht]=t[_t]&&t[Nt]?Math.round(this[Nt]*(t[_t]/t[Nt])):this[Ht])}updateProps(){const t=this.container;if(!t)return;const e=e=>parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-"+e))||0;this.thumbGap=e("gap"),this.thumbExtraGap=e("extra-gap"),this[Ht]=e("width")||40,this[_t]=e("clip-width")||40,this[Nt]=e("height")||40}build(){const t=this;if(t.state!==jt.Init)return;if(t.isDisabled())return void t.emit("disabled");const e=t.instance,i=e.container,n=t.getSlides(),s=t.option("type");t.type=s;const o=t.option("parentEl"),a=t.cn("container"),r=t.cn("track");let l=null==o?void 0:o.querySelector("."+a);l||(l=document.createElement("div"),P(l,a),o?o.appendChild(l):i.after(l)),P(l,`is-${s}`),P(i,t.cn("hasThumbs")),t.container=l,t.updateProps();let c=l.querySelector("."+r);c||(c=document.createElement("div"),P(c,t.cn("track")),l.appendChild(c)),t.track=c;const h=u({},{track:c,infinite:!1,center:!0,fill:"classic"===s,dragFree:!0,slidesPerPage:1,transition:!1,preload:.25,friction:.12,Panzoom:{maxVelocity:0},Dots:!1,Navigation:!1,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},t.option("Carousel")||{},{Sync:{target:e},slides:n}),d=new e.constructor(l,h);d.on("createSlide",((e,i)=>{t.setProps(i.index),t.emit("createSlide",i,i.el)})),d.on("ready",(()=>{t.shiftModern(),t.emit("ready")})),d.on("refresh",(()=>{t.shiftModern()})),d.on("Panzoom.click",((e,i,n)=>{t.onClick(n)})),t.carousel=d,t.state=jt.Ready}onClick(t){t.preventDefault(),t.stopPropagation();const e=this.instance,{pages:i,page:n}=e,s=t=>{if(t){const e=t.closest("[data-carousel-index]");if(e)return[parseInt(e.dataset.carouselIndex||"",10)||0,e]}return[-1,void 0]},o=(t,e)=>{const i=document.elementFromPoint(t,e);return i?s(i):[-1,void 0]};let[a,r]=s(t.target);if(a>-1)return;const l=this[_t],c=t.clientX,h=t.clientY;let[d,u]=o(c-l,h),[p,f]=o(c+l,h);u&&f?(a=Math.abs(c-u.getBoundingClientRect().right)<Math.abs(c-f.getBoundingClientRect().left)?d:p,a===n&&(a=a===d?p:d)):u?a=d:f&&(a=p),a>-1&&i[a]&&e.slideTo(a)}getShift(t){var e;const i=this,{instance:n}=i,s=i.carousel;if(!n||!s)return 0;const o=i[Ht],a=i[_t],r=i.thumbGap,l=i.thumbExtraGap;if(!(null===(e=s.slides[t])||void 0===e?void 0:e.el))return 0;const c=.5*(o-a),h=n.pages.length-1;let d=n.getProgress(0),u=n.getProgress(h),p=n.getProgress(t,!1,!0),f=0,g=c+l+r;const m=d<0&&d>-1,v=u>0&&u<1;return 0===t?(f=g*Math.abs(d),v&&1===d&&(f-=g*Math.abs(u))):t===h?(f=g*Math.abs(u)*-1,m&&-1===u&&(f+=g*Math.abs(d))):m||v?(f=-1*g,f+=g*Math.abs(d),f+=g*(1-Math.abs(u))):f=g*p,f}setProps(e){var i;const n=this;if(!n.isModern)return;const{instance:s}=n,o=n.carousel;if(s&&o){const a=null===(i=o.slides[e])||void 0===i?void 0:i.el;if(a&&a.childNodes.length){let i=t(1-Math.abs(s.getProgress(e))),o=t(n.getShift(e));a.style.setProperty("--progress",i?i+"":""),a.style.setProperty("--shift",o+"")}}}shiftModern(){const t=this;if(!t.isModern)return;const{instance:e,track:i}=t,n=e.panzoom,s=t.carousel;if(!(e&&i&&n&&s))return;if(n.state===m.Init||n.state===m.Destroy)return;for(const i of e.slides)t.setProps(i.index);let o=(t[_t]+t.thumbGap)*(s.slides.length||0);i.style.setProperty("--width",o+"")}cleanup(){const t=this;t.carousel&&t.carousel.destroy(),t.carousel=null,t.container&&t.container.remove(),t.container=null,t.track&&t.track.remove(),t.track=null,t.state=jt.Init,S(t.instance.container,t.cn("hasThumbs"))}attach(){const t=this,e=t.instance;e.on("initSlide",t.onInitSlide),e.state===B.Init?e.on("initSlides",t.onInitSlides):t.onInitSlides(),e.on(["change","Panzoom.afterTransform"],t.onChange),e.on("Panzoom.refresh",t.onRefresh)}detach(){const t=this,e=t.instance;e.off("initSlide",t.onInitSlide),e.off("initSlides",t.onInitSlides),e.off(["change","Panzoom.afterTransform"],t.onChange),e.off("Panzoom.refresh",t.onRefresh),t.cleanup()}};Object.defineProperty($t,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Ft});const Wt=Object.assign(Object.assign({},Ft),{key:"t",showOnStart:!0,parentEl:null}),Xt="is-masked",qt="aria-hidden";class Yt extends _{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hidden",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get isEnabled(){const t=this.ref;return t&&!t.isDisabled()}get isHidden(){return this.hidden}onClick(t,e){e.stopPropagation()}onCreateSlide(t,e){var i,n,s;const o=(null===(s=null===(n=null===(i=this.instance)||void 0===i?void 0:i.carousel)||void 0===n?void 0:n.slides[e.index])||void 0===s?void 0:s.type)||"",a=e.el;if(a&&o){let t=`for-${o}`;["video","youtube","vimeo","html5video"].includes(o)&&(t+=" for-video"),P(a,t)}}onInit(){var t;const e=this,i=e.instance,n=i.carousel;if(e.ref||!n)return;const s=e.option("parentEl")||i.footer||i.container;if(!s)return;const o=u({},e.options,{parentEl:s,classes:{container:"f-thumbs fancybox__thumbs"},Carousel:{Sync:{friction:i.option("Carousel.friction")||0}},on:{ready:t=>{const i=t.container;i&&this.hidden&&(e.refresh(),i.style.transition="none",e.hide(),i.offsetHeight,queueMicrotask((()=>{i.style.transition="",e.show()})))}}});o.Carousel=o.Carousel||{},o.Carousel.on=u((null===(t=e.options.Carousel)||void 0===t?void 0:t.on)||{},{click:this.onClick,createSlide:this.onCreateSlide}),n.options.Thumbs=o,n.attachPlugins({Thumbs:$t}),e.ref=n.plugins.Thumbs,e.option("showOnStart")||(e.ref.state=jt.Hidden,e.hidden=!0)}onResize(){var t;const e=null===(t=this.ref)||void 0===t?void 0:t.container;e&&(e.style.maxHeight="")}onKeydown(t,e){const i=this.option("key");i&&i===e&&this.toggle()}toggle(){const t=this.ref;if(t&&!t.isDisabled())return t.state===jt.Hidden?(t.state=jt.Init,void t.build()):void(this.hidden?this.show():this.hide())}show(){const t=this.ref;if(!t||t.isDisabled())return;const e=t.container;e&&(this.refresh(),e.offsetHeight,e.removeAttribute(qt),e.classList.remove(Xt),this.hidden=!1)}hide(){const t=this.ref,e=t&&t.container;e&&(this.refresh(),e.offsetHeight,e.classList.add(Xt),e.setAttribute(qt,"true")),this.hidden=!0}refresh(){const t=this.ref;if(!t||!t.state)return;const e=t.container,i=(null==e?void 0:e.firstChild)||null;e&&i&&i.childNodes.length&&(e.style.maxHeight=`${i.getBoundingClientRect().height}px`)}attach(){const t=this,e=t.instance;e.state===rt.Init?e.on("Carousel.init",t.onInit):t.onInit(),e.on("resize",t.onResize),e.on("keydown",t.onKeydown)}detach(){var t;const e=this,i=e.instance;i.off("Carousel.init",e.onInit),i.off("resize",e.onResize),i.off("keydown",e.onKeydown),null===(t=i.carousel)||void 0===t||t.detachPlugins(["Thumbs"]),e.ref=null}}Object.defineProperty(Yt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Wt});const Vt={panLeft:{icon:'<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',change:{panX:-100}},panRight:{icon:'<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',change:{panX:100}},panUp:{icon:'<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',change:{panY:-100}},panDown:{icon:'<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',change:{panY:100}},zoomIn:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',action:"zoomIn"},zoomOut:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"zoomOut"},toggle1to1:{icon:'<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',action:"toggleZoom"},toggleZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"toggleZoom"},iterateZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"iterateZoom"},rotateCCW:{icon:'<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',action:"rotateCCW"},rotateCW:{icon:'<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',action:"rotateCW"},flipX:{icon:'<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',action:"flipX"},flipY:{icon:'<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',action:"flipY"},fitX:{icon:'<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',action:"fitX"},fitY:{icon:'<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',action:"fitY"},reset:{icon:'<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',action:"reset"},toggleFS:{icon:'<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',action:"toggleFS"}};var Zt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Disabled=2]="Disabled"}(Zt||(Zt={}));const Ut={absolute:"auto",display:{left:["infobar"],middle:[],right:["iterateZoom","slideshow","fullscreen","thumbs","close"]},enabled:"auto",items:{infobar:{tpl:'<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'},download:{tpl:'<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'},prev:{tpl:'<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'},next:{tpl:'<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'},slideshow:{tpl:'<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},fullscreen:{tpl:'<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},thumbs:{tpl:'<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'},close:{tpl:'<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'}},parentEl:null},Gt={tabindex:"-1",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Kt="has-toolbar",Jt="fancybox__toolbar";class Qt extends _{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:Zt.Init}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null})}onReady(t){var e;if(!t.carousel)return;let i=this.option("display"),n=this.option("absolute"),s=this.option("enabled");if("auto"===s){const t=this.instance.carousel;let e=0;if(t)for(const i of t.slides)(i.panzoom||"image"===i.type)&&e++;e||(s=!1)}s||(i=void 0);let o=0;const a={left:[],middle:[],right:[]};if(i)for(const t of["left","middle","right"])for(const n of i[t]){const i=this.createEl(n);i&&(null===(e=a[t])||void 0===e||e.push(i),o++)}let r=null;if(o&&(r=this.createContainer()),r){for(const[t,e]of Object.entries(a)){const i=document.createElement("div");P(i,Jt+"__column is-"+t);for(const t of e)i.appendChild(t);"auto"!==n||"middle"!==t||e.length||(n=!0),r.appendChild(i)}!0===n&&P(r,"is-absolute"),this.state=Zt.Ready,this.onRefresh()}else this.state=Zt.Disabled}onClick(t){var e,i;const n=this.instance,s=n.getSlide(),o=null==s?void 0:s.panzoom,a=t.target,r=a&&E(a)?a.dataset:null;if(!r)return;if(void 0!==r.fancyboxToggleThumbs)return t.preventDefault(),t.stopPropagation(),void(null===(e=n.plugins.Thumbs)||void 0===e||e.toggle());if(void 0!==r.fancyboxToggleFullscreen)return t.preventDefault(),t.stopPropagation(),void this.instance.toggleFullscreen();if(void 0!==r.fancyboxToggleSlideshow){t.preventDefault(),t.stopPropagation();const e=null===(i=n.carousel)||void 0===i?void 0:i.plugins.Autoplay;let s=e.isActive;return o&&"mousemove"===o.panMode&&!s&&o.reset(),void(s?e.stop():e.start())}const l=r.panzoomAction,c=r.panzoomChange;if((c||l)&&(t.preventDefault(),t.stopPropagation()),c){let t={};try{t=JSON.parse(c)}catch(t){}o&&o.applyChange(t)}else l&&o&&o[l]&&o[l]()}onChange(){this.onRefresh()}onRefresh(){if(this.instance.isClosing())return;const t=this.container;if(!t)return;const e=this.instance.getSlide();if(!e||e.state!==lt.Ready)return;const i=e&&!e.error&&e.panzoom;for(const e of t.querySelectorAll("[data-panzoom-action]"))i?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));let n=i&&i.canZoomIn(),s=i&&i.canZoomOut();for(const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))s?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){s||n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));const t=e.querySelector("g");t&&(t.style.display=n?"":"none")}}onDone(t,e){var i;null===(i=e.panzoom)||void 0===i||i.on("afterTransform",(()=>{this.instance.isCurrentSlide(e)&&this.onRefresh()})),this.instance.isCurrentSlide(e)&&this.onRefresh()}createContainer(){const t=this.instance.container;if(!t)return null;const e=this.option("parentEl")||t;let i=e.querySelector("."+Jt);return i||(i=document.createElement("div"),P(i,Jt),e.prepend(i)),i.addEventListener("click",this.onClick,{passive:!1,capture:!0}),t&&P(t,Kt),this.container=i,i}createEl(t){const e=this.instance,i=e.carousel;if(!i)return null;if("toggleFS"===t)return null;if("fullscreen"===t&&!ot())return null;let s=null;const o=i.slides.length||0;let a=0,r=0;for(const t of i.slides)(t.panzoom||"image"===t.type)&&a++,("image"===t.type||t.downloadSrc)&&r++;if(o<2&&["infobar","prev","next"].includes(t))return s;if(void 0!==Vt[t]&&!a)return null;if("download"===t&&!r)return null;if("thumbs"===t){const t=e.plugins.Thumbs;if(!t||!t.isEnabled)return null}if("slideshow"===t){if(!i.plugins.Autoplay||o<2)return null}if(void 0!==Vt[t]){const e=Vt[t];s=document.createElement("button"),s.setAttribute("title",this.instance.localize(`{{${t.toUpperCase()}}}`)),P(s,"f-button"),e.action&&(s.dataset.panzoomAction=e.action),e.change&&(s.dataset.panzoomChange=JSON.stringify(e.change)),s.appendChild(n(this.instance.localize(e.icon)))}else{const e=(this.option("items")||[])[t];e&&(s=n(this.instance.localize(e.tpl)),"function"==typeof e.click&&s.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),"function"==typeof e.click&&e.click.call(this,this,t)})))}const l=null==s?void 0:s.querySelector("svg");if(l)for(const[t,e]of Object.entries(Gt))l.getAttribute(t)||l.setAttribute(t,String(e));return s}removeContainer(){const t=this.container;t&&t.remove(),this.container=null,this.state=Zt.Disabled;const e=this.instance.container;e&&S(e,Kt)}attach(){const t=this,e=t.instance;e.on("Carousel.initSlides",t.onReady),e.on("done",t.onDone),e.on(["reveal","Carousel.change"],t.onChange),t.onReady(t.instance)}detach(){const t=this,e=t.instance;e.off("Carousel.initSlides",t.onReady),e.off("done",t.onDone),e.off(["reveal","Carousel.change"],t.onChange),t.removeContainer()}}Object.defineProperty(Qt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Ut});const te={Hash:class extends _{onReady(){ht=!1}onChange(t){ut&&clearTimeout(ut);const{hash:e}=pt(),{hash:i}=ft(),n=t.isOpeningSlide(t.getSlide());n&&(ct=i===e?"":i),e&&e!==i&&(ut=setTimeout((()=>{try{if(t.state===rt.Ready){let t="replaceState";n&&!dt&&(t="pushState",dt=!0),window.history[t]({},document.title,window.location.pathname+window.location.search+e)}}catch(t){}}),300))}onClose(t){if(ut&&clearTimeout(ut),!ht&&dt)return dt=!1,ht=!1,void window.history.back();if(!ht)try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+(ct||""))}catch(t){}}attach(){const t=this.instance;t.on("ready",this.onReady),t.on(["Carousel.ready","Carousel.change"],this.onChange),t.on("close",this.onClose)}detach(){const t=this.instance;t.off("ready",this.onReady),t.off(["Carousel.ready","Carousel.change"],this.onChange),t.off("close",this.onClose)}static parseURL(){return ft()}static startFromUrl(){gt()}static destroy(){window.removeEventListener("hashchange",vt,!1)}},Html:Lt,Images:wt,Slideshow:Dt,Thumbs:Yt,Toolbar:Qt},ee="with-fancybox",ie="hide-scrollbar",ne="--fancybox-scrollbar-compensate",se="--fancybox-body-margin",oe="aria-hidden",ae="is-using-tab",re="is-animated",le="is-compact",ce="is-loading",he="is-opening",de="has-caption",ue="disabled",pe="tabindex",fe="download",ge="href",me="src",ve=t=>"string"==typeof t,be=function(){var t=window.getSelection();return!!t&&"Range"===t.type};let ye,we=null,xe=null,Ee=0,Se=0,Pe=0,Ce=0;const Te=new Map;let Me=0;class Oe extends g{get isIdle(){return this.idle}get isCompact(){return this.option("compact")}constructor(t=[],e={},i={}){super(e),Object.defineProperty(this,"userSlides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"idle",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"idleTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreFocusChange",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"startedFs",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:rt.Init}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"footer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"lastFocus",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prevMouseMoveEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ye||(ye=ot()),this.id=e.id||++Me,Te.set(this.id,this),this.userSlides=t,this.userPlugins=i,queueMicrotask((()=>{this.init()}))}init(){if(this.state===rt.Destroy)return;this.state=rt.Init,this.attachPlugins(Object.assign(Object.assign({},Oe.Plugins),this.userPlugins)),this.emit("init"),this.emit("attachPlugins"),!0===this.option("hideScrollbar")&&(()=>{if(!et)return;const t=document,e=t.body,i=t.documentElement;if(e.classList.contains(ie))return;let n=window.innerWidth-i.getBoundingClientRect().width;const s=parseFloat(window.getComputedStyle(e).marginRight);n<0&&(n=0),i.style.setProperty(ne,`${n}px`),s&&e.style.setProperty(se,`${s}px`),e.classList.add(ie)})(),this.initLayout(),this.scale();const t=()=>{this.initCarousel(this.userSlides),this.state=rt.Ready,this.attachEvents(),this.emit("ready"),setTimeout((()=>{this.container&&this.container.setAttribute(oe,"false")}),16)};this.option("Fullscreen.autoStart")&&ye&&!ye.isFullscreen()?ye.request().then((()=>{this.startedFs=!0,t()})).catch((()=>t())):t()}initLayout(){var t,e;const i=this.option("parentEl")||document.body,s=n(this.localize(this.option("tpl.main")||""));if(s){if(s.setAttribute("id",`fancybox-${this.id}`),s.setAttribute("aria-label",this.localize("{{MODAL}}")),s.classList.toggle(le,this.isCompact),P(s,this.option("mainClass")||""),P(s,he),this.container=s,this.footer=s.querySelector(".fancybox__footer"),i.appendChild(s),P(document.documentElement,ee),we&&xe||(we=document.createElement("span"),P(we,"fancybox-focus-guard"),we.setAttribute(pe,"0"),we.setAttribute(oe,"true"),we.setAttribute("aria-label","Focus guard"),xe=we.cloneNode(),null===(t=s.parentElement)||void 0===t||t.insertBefore(we,s),null===(e=s.parentElement)||void 0===e||e.append(xe)),s.addEventListener("mousedown",(t=>{Ee=t.pageX,Se=t.pageY,S(s,ae)})),this.option("closeExisting"))for(const t of Te.values())t.id!==this.id&&t.close();else this.option("animated")&&(P(s,re),setTimeout((()=>{this.isClosing()||S(s,re)}),350));this.emit("initLayout")}}initCarousel(t){const i=this.container;if(!i)return;const n=i.querySelector(".fancybox__carousel");if(!n)return;const s=this.carousel=new Q(n,u({},{slides:t,transition:"fade",Panzoom:{lockAxis:this.option("dragToClose")?"xy":"x",infinite:!!this.option("dragToClose")&&"y"},Dots:!1,Navigation:{classes:{container:"fancybox__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"}},initialPage:this.option("startIndex"),l10n:this.option("l10n")},this.option("Carousel")||{}));s.on("*",((t,e,...i)=>{this.emit(`Carousel.${e}`,t,...i)})),s.on(["ready","change"],(()=>{this.manageCaption()})),this.on("Carousel.removeSlide",((t,e,i)=>{this.clearContent(i),i.state=void 0})),s.on("Panzoom.touchStart",(()=>{var t,e;this.isCompact||this.endIdle(),(null===(t=document.activeElement)||void 0===t?void 0:t.closest(".f-thumbs"))&&(null===(e=this.container)||void 0===e||e.focus())})),s.on("settle",(()=>{this.idleTimer||this.isCompact||!this.option("idle")||this.setIdle(),this.option("autoFocus")&&!this.isClosing&&this.checkFocus()})),this.option("dragToClose")&&(s.on("Panzoom.afterTransform",((t,i)=>{const n=this.getSlide();if(n&&e(n.el))return;const s=this.container;if(s){const t=Math.abs(i.current.f),e=t<1?"":Math.max(.5,Math.min(1,1-t/i.contentRect.fitHeight*1.5));s.style.setProperty("--fancybox-ts",e?"0s":""),s.style.setProperty("--fancybox-opacity",e+"")}})),s.on("Panzoom.touchEnd",((t,i,n)=>{var s;const o=this.getSlide();if(o&&e(o.el))return;if(i.isMobile&&document.activeElement&&-1!==["TEXTAREA","INPUT"].indexOf(null===(s=document.activeElement)||void 0===s?void 0:s.nodeName))return;const a=Math.abs(i.dragOffset.y);"y"===i.lockedAxis&&(a>=200||a>=50&&i.dragOffset.time<300)&&(n&&n.cancelable&&n.preventDefault(),this.close(n,"f-throwOut"+(i.current.f<0?"Up":"Down")))}))),s.on("change",(t=>{var e;let i=null===(e=this.getSlide())||void 0===e?void 0:e.triggerEl;if(i){const e=new CustomEvent("slideTo",{bubbles:!0,cancelable:!0,detail:t.page});i.dispatchEvent(e)}})),s.on(["refresh","change"],(t=>{const e=this.container;if(!e)return;for(const i of e.querySelectorAll("[data-fancybox-current-index]"))i.innerHTML=t.page+1;for(const i of e.querySelectorAll("[data-fancybox-count]"))i.innerHTML=t.pages.length;if(!t.isInfinite){for(const i of e.querySelectorAll("[data-fancybox-next]"))t.page<t.pages.length-1?(i.removeAttribute(ue),i.removeAttribute(pe)):(i.setAttribute(ue,""),i.setAttribute(pe,"-1"));for(const i of e.querySelectorAll("[data-fancybox-prev]"))t.page>0?(i.removeAttribute(ue),i.removeAttribute(pe)):(i.setAttribute(ue,""),i.setAttribute(pe,"-1"))}const i=this.getSlide();if(!i)return;let n=i.downloadSrc||"";n||"image"!==i.type||i.error||!ve(i[me])||(n=i[me]);for(const t of e.querySelectorAll("[data-fancybox-download]")){const e=i.downloadFilename;n?(t.removeAttribute(ue),t.removeAttribute(pe),t.setAttribute(ge,n),t.setAttribute(fe,e||n),t.setAttribute("target","_blank")):(t.setAttribute(ue,""),t.setAttribute(pe,"-1"),t.removeAttribute(ge),t.removeAttribute(fe))}})),this.emit("initCarousel")}attachEvents(){const t=this,e=t.container;if(!e)return;e.addEventListener("click",t.onClick,{passive:!1,capture:!1}),e.addEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),document.addEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),document.addEventListener("visibilitychange",t.onVisibilityChange,!1),document.addEventListener("mousemove",t.onMousemove),t.option("trapFocus")&&document.addEventListener("focus",t.onFocus,!0),window.addEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.addEventListener("scroll",t.onResize),i.addEventListener("resize",t.onResize))}detachEvents(){const t=this,e=t.container;if(!e)return;document.removeEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),e.removeEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),e.removeEventListener("click",t.onClick,{passive:!1,capture:!1}),document.removeEventListener("mousemove",t.onMousemove),window.removeEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.removeEventListener("resize",t.onResize),i.removeEventListener("scroll",t.onResize)),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),document.removeEventListener("focus",t.onFocus,!0)}scale(){const t=this.container;if(!t)return;const e=window.visualViewport,i=Math.max(1,(null==e?void 0:e.scale)||1);let n="",s="",o="";if(e&&i>1){let t=`${e.offsetLeft}px`,a=`${e.offsetTop}px`;n=e.width*i+"px",s=e.height*i+"px",o=`translate3d(${t}, ${a}, 0) scale(${1/i})`}t.style.transform=o,t.style.width=n,t.style.height=s}onClick(t){var e;const{container:i,isCompact:n}=this;if(!i||this.isClosing())return;!n&&this.option("idle")&&this.resetIdle();const s=t.composedPath()[0];if(s.closest(".fancybox-spinner")||s.closest("[data-fancybox-close]"))return t.preventDefault(),void this.close(t);if(s.closest("[data-fancybox-prev]"))return t.preventDefault(),void this.prev();if(s.closest("[data-fancybox-next]"))return t.preventDefault(),void this.next();if("click"===t.type&&0===t.detail)return;if(Math.abs(t.pageX-Ee)>30||Math.abs(t.pageY-Se)>30)return;const o=document.activeElement;if(be()&&o&&i.contains(o))return;if(n&&"image"===(null===(e=this.getSlide())||void 0===e?void 0:e.type))return void(this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null):this.clickTimer=setTimeout((()=>{this.toggleIdle(),this.clickTimer=null}),350));if(this.emit("click",t),t.defaultPrevented)return;let a=!1;if(s.closest(".fancybox__content")){if(o){if(o.closest("[contenteditable]"))return;s.matches(nt)||o.blur()}if(be())return;a=this.option("contentClick")}else s.closest(".fancybox__carousel")&&!s.matches(nt)&&(a=this.option("backdropClick"));"close"===a?(t.preventDefault(),this.close(t)):"next"===a?(t.preventDefault(),this.next()):"prev"===a&&(t.preventDefault(),this.prev())}onWheel(t){const e=t.target;let n=this.option("wheel",t);e.closest(".fancybox__thumbs")&&(n="slide");const s="slide"===n,o=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t})),a=Math.max(-1,Math.min(1,o)),r=Date.now();this.pwt&&r-this.pwt<300?s&&t.preventDefault():(this.pwt=r,this.emit("wheel",t,a),t.defaultPrevented||("close"===n?(t.preventDefault(),this.close(t)):"slide"===n&&(i(e)||(t.preventDefault(),this[a>0?"prev":"next"]()))))}onScroll(){window.scrollTo(Pe,Ce)}onKeydown(t){if(!this.isTopmost())return;this.isCompact||!this.option("idle")||this.isClosing()||this.resetIdle();const e=t.key,i=this.option("keyboard");if(!i)return;const n=t.composedPath()[0],s=document.activeElement&&document.activeElement.classList,o=s&&s.contains("f-button")||n.dataset.carouselPage||n.dataset.carouselIndex;if("Escape"!==e&&!o&&E(n)){if(n.isContentEditable||-1!==["TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.nodeName))return}if("Tab"===t.key?P(this.container,ae):S(this.container,ae),t.ctrlKey||t.altKey||t.shiftKey)return;this.emit("keydown",e,t);const a=i[e];a&&"function"==typeof this[a]&&(t.preventDefault(),this[a]())}onResize(){const t=this.container;if(!t)return;const e=this.isCompact;t.classList.toggle(le,e),this.manageCaption(this.getSlide()),this.isCompact?this.clearIdle():this.endIdle(),this.scale(),this.emit("resize")}onFocus(t){this.isTopmost()&&this.checkFocus(t)}onMousemove(t){this.prevMouseMoveEvent=t,!this.isCompact&&this.option("idle")&&this.resetIdle()}onVisibilityChange(){"visible"===document.visibilityState?this.checkFocus():this.endIdle()}manageCloseBtn(t){const e=this.optionFor(t,"closeButton")||!1;if("auto"===e){const t=this.plugins.Toolbar;if(t&&t.state===Zt.Ready)return}if(!e)return;if(!t.contentEl||t.closeBtnEl)return;const i=this.option("tpl.closeButton");if(i){const e=n(this.localize(i));t.closeBtnEl=t.contentEl.appendChild(e),t.el&&P(t.el,"has-close-btn")}}manageCaption(t=void 0){var e,i;const n="fancybox__caption",s=this.container;if(!s)return;S(s,de);const o=this.isCompact||this.option("commonCaption"),a=!o;if(this.caption&&this.stop(this.caption),a&&this.caption&&(this.caption.remove(),this.caption=null),o&&!this.caption)for(const t of(null===(e=this.carousel)||void 0===e?void 0:e.slides)||[])t.captionEl&&(t.captionEl.remove(),t.captionEl=void 0,S(t.el,de),null===(i=t.el)||void 0===i||i.removeAttribute("aria-labelledby"));if(t||(t=this.getSlide()),!t||o&&!this.isCurrentSlide(t))return;const r=t.el;let l=this.optionFor(t,"caption","");if(!l)return void(o&&this.caption&&this.animate(this.caption,"f-fadeOut",(()=>{this.caption&&(this.caption.innerHTML="")})));let c=null;if(a){if(c=t.captionEl||null,r&&!c){const e=n+`_${this.id}_${t.index}`;c=document.createElement("div"),P(c,n),c.setAttribute("id",e),t.captionEl=r.appendChild(c),P(r,de),r.setAttribute("aria-labelledby",e)}}else{if(c=this.caption,c||(c=s.querySelector("."+n)),!c){c=document.createElement("div"),c.dataset.fancyboxCaption="",P(c,n);(this.footer||s).prepend(c)}P(s,de),this.caption=c}c&&(c.innerHTML="",ve(l)||"number"==typeof l?c.innerHTML=l+"":l instanceof HTMLElement&&c.appendChild(l))}checkFocus(t){this.focus(t)}focus(t){var e;if(this.ignoreFocusChange)return;const i=document.activeElement||null,n=(null==t?void 0:t.target)||null,s=this.container,o=null===(e=this.carousel)||void 0===e?void 0:e.viewport;if(!s||!o)return;if(!t&&i&&s.contains(i))return;const a=this.getSlide(),r=a&&a.state===lt.Ready?a.el:null;if(!r||r.contains(i)||s===i)return;t&&t.cancelable&&t.preventDefault(),this.ignoreFocusChange=!0;const l=Array.from(s.querySelectorAll(nt));let c=[],h=null;for(let t of l){const e=!t.offsetParent||!!t.closest('[aria-hidden="true"]'),i=r&&r.contains(t),n=!o.contains(t);if(t===s||(i||n)&&!e){c.push(t);const e=t.dataset.origTabindex;void 0!==e&&e&&(t.tabIndex=parseFloat(e)),t.removeAttribute("data-orig-tabindex"),!t.hasAttribute("autoFocus")&&h||(h=t)}else{const e=void 0===t.dataset.origTabindex?t.getAttribute("tabindex")||"":t.dataset.origTabindex;e&&(t.dataset.origTabindex=e),t.tabIndex=-1}}let d=null;t?(!n||c.indexOf(n)<0)&&(d=h||s,c.length&&(i===xe?d=c[0]:this.lastFocus!==s&&i!==we||(d=c[c.length-1]))):d=a&&"image"===a.type?s:h||s,d&&st(d),this.lastFocus=document.activeElement,this.ignoreFocusChange=!1}next(){const t=this.carousel;t&&t.pages.length>1&&t.slideNext()}prev(){const t=this.carousel;t&&t.pages.length>1&&t.slidePrev()}jumpTo(...t){this.carousel&&this.carousel.slideTo(...t)}isTopmost(){var t;return(null===(t=Oe.getInstance())||void 0===t?void 0:t.id)==this.id}animate(t=null,e="",i){if(!t||!e)return void(i&&i());this.stop(t);const n=s=>{s.target===t&&t.dataset.animationName&&(t.removeEventListener("animationend",n),delete t.dataset.animationName,i&&i(),S(t,e))};t.dataset.animationName=e,t.addEventListener("animationend",n),P(t,e)}stop(t){t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:t}))}setContent(t,e="",i=!0){if(this.isClosing())return;const s=t.el;if(!s)return;let o=null;if(E(e)?o=e:(o=n(e+""),E(o)||(o=document.createElement("div"),o.innerHTML=e+"")),["img","picture","iframe","video","audio"].includes(o.nodeName.toLowerCase())){const t=document.createElement("div");t.appendChild(o),o=t}E(o)&&t.filter&&!t.error&&(o=o.querySelector(t.filter)),o&&E(o)?(P(o,"fancybox__content"),t.id&&o.setAttribute("id",t.id),s.classList.add(`has-${t.error?"error":t.type||"unknown"}`),s.prepend(o),"none"===o.style.display&&(o.style.display=""),"none"===getComputedStyle(o).getPropertyValue("display")&&(o.style.display=t.display||this.option("defaultDisplay")||"flex"),t.contentEl=o,i&&this.revealContent(t),this.manageCloseBtn(t),this.manageCaption(t)):this.setError(t,"{{ELEMENT_NOT_FOUND}}")}revealContent(t,e){const i=t.el,n=t.contentEl;i&&n&&(this.emit("reveal",t),this.hideLoading(t),t.state=lt.Opening,(e=this.isOpeningSlide(t)?void 0===e?this.optionFor(t,"showClass"):e:"f-fadeIn")?this.animate(n,e,(()=>{this.done(t)})):this.done(t))}done(t){this.isClosing()||(t.state=lt.Ready,this.emit("done",t),P(t.el,"is-done"),this.isCurrentSlide(t)&&this.option("autoFocus")&&queueMicrotask((()=>{var e;null===(e=t.panzoom)||void 0===e||e.updateControls(),this.option("autoFocus")&&this.focus()})),this.isOpeningSlide(t)&&(S(this.container,he),!this.isCompact&&this.option("idle")&&this.setIdle()))}isCurrentSlide(t){const e=this.getSlide();return!(!t||!e)&&e.index===t.index}isOpeningSlide(t){var e,i;return null===(null===(e=this.carousel)||void 0===e?void 0:e.prevPage)&&t&&t.index===(null===(i=this.getSlide())||void 0===i?void 0:i.index)}showLoading(t){t.state=lt.Loading;const e=t.el;if(!e)return;P(e,ce),this.emit("loading",t),t.spinnerEl||setTimeout((()=>{if(!this.isClosing()&&!t.spinnerEl&&t.state===lt.Loading){let i=n(x);P(i,"fancybox-spinner"),t.spinnerEl=i,e.prepend(i),this.animate(i,"f-fadeIn")}}),250)}hideLoading(t){const e=t.el;if(!e)return;const i=t.spinnerEl;this.isClosing()?null==i||i.remove():(S(e,ce),i&&this.animate(i,"f-fadeOut",(()=>{i.remove()})),t.state===lt.Loading&&(this.emit("loaded",t),t.state=lt.Ready))}setError(t,e){if(this.isClosing())return;const i=new Event("error",{bubbles:!0,cancelable:!0});if(this.emit("error",i,t),i.defaultPrevented)return;t.error=e,this.hideLoading(t),this.clearContent(t);const n=document.createElement("div");n.classList.add("fancybox-error"),n.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,n)}clearContent(t){if(void 0===t.state)return;this.emit("clearContent",t),t.contentEl&&(t.contentEl.remove(),t.contentEl=void 0);const e=t.el;e&&(S(e,"has-error"),S(e,"has-unknown"),S(e,`has-${t.type||"unknown"}`)),t.closeBtnEl&&t.closeBtnEl.remove(),t.closeBtnEl=void 0,t.captionEl&&t.captionEl.remove(),t.captionEl=void 0,t.spinnerEl&&t.spinnerEl.remove(),t.spinnerEl=void 0}getSlide(){var t;const e=this.carousel;return(null===(t=null==e?void 0:e.pages[null==e?void 0:e.page])||void 0===t?void 0:t.slides[0])||void 0}close(t,e){if(this.isClosing())return;const i=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(this.emit("shouldClose",i,t),i.defaultPrevented)return;t&&t.cancelable&&(t.preventDefault(),t.stopPropagation());const n=()=>{this.proceedClose(t,e)};this.startedFs&&ye&&ye.isFullscreen()?Promise.resolve(ye.exit()).then((()=>n())):n()}clearIdle(){this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=null}setIdle(t=!1){const e=()=>{this.clearIdle(),this.idle=!0,P(this.container,"is-idle"),this.emit("setIdle")};if(this.clearIdle(),!this.isClosing())if(t)e();else{const t=this.option("idle");t&&(this.idleTimer=setTimeout(e,t))}}endIdle(){this.clearIdle(),this.idle&&!this.isClosing()&&(this.idle=!1,S(this.container,"is-idle"),this.emit("endIdle"))}resetIdle(){this.endIdle(),this.setIdle()}toggleIdle(){this.idle?this.endIdle():this.setIdle(!0)}toggleFullscreen(){ye&&(ye.isFullscreen()?ye.exit():ye.request().then((()=>{this.startedFs=!0})))}isClosing(){return[rt.Closing,rt.CustomClosing,rt.Destroy].includes(this.state)}proceedClose(t,e){var i,n;this.state=rt.Closing,this.clearIdle(),this.detachEvents();const s=this.container,o=this.carousel,a=this.getSlide(),r=a&&this.option("placeFocusBack")?a.triggerEl||this.option("triggerEl"):null;if(r&&(tt(r)?st(r):r.focus()),s&&(S(s,he),P(s,"is-closing"),s.setAttribute(oe,"true"),this.option("animated")&&P(s,re),s.style.pointerEvents="none"),o){o.clearTransitions(),null===(i=o.panzoom)||void 0===i||i.destroy(),null===(n=o.plugins.Navigation)||void 0===n||n.detach();for(const t of o.slides){t.state=lt.Closing,this.hideLoading(t);const e=t.contentEl;e&&this.stop(e);const i=null==t?void 0:t.panzoom;i&&(i.stop(),i.detachEvents(),i.detachObserver()),this.isCurrentSlide(t)||o.emit("removeSlide",t)}}Pe=window.scrollX,Ce=window.scrollY,window.addEventListener("scroll",this.onScroll),this.emit("close",t),this.state!==rt.CustomClosing?(void 0===e&&a&&(e=this.optionFor(a,"hideClass")),e&&a?(this.animate(a.contentEl,e,(()=>{o&&o.emit("removeSlide",a)})),setTimeout((()=>{this.destroy()}),500)):this.destroy()):setTimeout((()=>{this.destroy()}),500)}destroy(){var t;if(this.state===rt.Destroy)return;window.removeEventListener("scroll",this.onScroll),this.state=rt.Destroy,null===(t=this.carousel)||void 0===t||t.destroy();const e=this.container;e&&e.remove(),Te.delete(this.id);const i=Oe.getInstance();i?i.focus():(we&&(we.remove(),we=null),xe&&(xe.remove(),xe=null),S(document.documentElement,ee),(()=>{if(!et)return;const t=document,e=t.body;e.classList.remove(ie),e.style.setProperty(se,""),t.documentElement.style.setProperty(ne,"")})(),this.emit("destroy"))}static bind(t,e,i){if(!et)return;let n,s="",o={};if(void 0===t?n=document.body:ve(t)?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):(n=t,ve(e)&&(s=e),"object"==typeof i&&(o=i||{})),!n||!E(n))return;s=s||"[data-fancybox]";const a=Oe.openers.get(n)||new Map;a.set(s,o),Oe.openers.set(n,a),1===a.size&&n.addEventListener("click",Oe.fromEvent)}static unbind(t,e){let i,n="";if(ve(t)?(i=document.body,n=t):(i=t,ve(e)&&(n=e)),!i)return;const s=Oe.openers.get(i);s&&n&&s.delete(n),n&&s||(Oe.openers.delete(i),i.removeEventListener("click",Oe.fromEvent))}static destroy(){let t;for(;t=Oe.getInstance();)t.destroy();for(const t of Oe.openers.keys())t.removeEventListener("click",Oe.fromEvent);Oe.openers=new Map}static fromEvent(t){if(t.defaultPrevented)return;if(t.button&&0!==t.button)return;if(t.ctrlKey||t.metaKey||t.shiftKey)return;let e=t.composedPath()[0];const i=e.closest("[data-fancybox-trigger]");if(i){const t=i.dataset.fancyboxTrigger||"",n=document.querySelectorAll(`[data-fancybox="${t}"]`),s=parseInt(i.dataset.fancyboxIndex||"",10)||0;e=n[s]||e}if(!(e&&e instanceof Element))return;let n,s,o,a;if([...Oe.openers].reverse().find((([t,i])=>!(!t.contains(e)||![...i].reverse().find((([i,r])=>{let l=e.closest(i);return!!l&&(n=t,s=i,o=l,a=r,!0)}))))),!n||!s||!o)return;a=a||{},t.preventDefault(),e=o;let r=[],l=u({},at,a);l.event=t,l.triggerEl=e,l.delegate=i;const c=l.groupAll,h=l.groupAttr,d=h&&e?e.getAttribute(`${h}`):"";if((!e||d||c)&&(r=[].slice.call(n.querySelectorAll(s))),e&&!c&&(r=d?r.filter((t=>t.getAttribute(`${h}`)===d)):[e]),!r.length)return;const p=Oe.getInstance();return p&&p.options.triggerEl&&r.indexOf(p.options.triggerEl)>-1?void 0:(e&&(l.startIndex=r.indexOf(e)),Oe.fromNodes(r,l))}static fromSelector(t,e,i){let n=null,s="",o={};if(ve(t)?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):t instanceof HTMLElement&&ve(e)&&(n=t,s=e,"object"==typeof i&&(o=i||{})),!n||!s)return!1;const a=Oe.openers.get(n);return!!a&&(o=u({},a.get(s)||{},o),!!o&&Oe.fromNodes(Array.from(n.querySelectorAll(s)),o))}static fromNodes(t,e){e=u({},at,e||{});const i=[];for(const n of t){const t=n.dataset||{},s=t[me]||n.getAttribute(ge)||n.getAttribute("currentSrc")||n.getAttribute(me)||void 0;let o;const a=e.delegate;let r;a&&i.length===e.startIndex&&(o=a instanceof HTMLImageElement?a:a.querySelector("img:not([aria-hidden])")),o||(o=n instanceof HTMLImageElement?n:n.querySelector("img:not([aria-hidden])")),o&&(r=o.currentSrc||o[me]||void 0,!r&&o.dataset&&(r=o.dataset.lazySrc||o.dataset[me]||void 0));const l={src:s,triggerEl:n,thumbEl:o,thumbElSrc:r,thumbSrc:r};for(const e in t){let i=t[e]+"";i="false"!==i&&("true"===i||i),l[e]=i}i.push(l)}return new Oe(i,e)}static getInstance(t){if(t)return Te.get(t);return Array.from(Te.values()).reverse().find((t=>!t.isClosing()&&t))||null}static getSlide(){var t;return(null===(t=Oe.getInstance())||void 0===t?void 0:t.getSlide())||null}static show(t=[],e={}){return new Oe(t,e)}static next(){const t=Oe.getInstance();t&&t.next()}static prev(){const t=Oe.getInstance();t&&t.prev()}static close(t=!0,...e){if(t)for(const t of Te.values())t.close(...e);else{const t=Oe.getInstance();t&&t.close(...e)}}}Object.defineProperty(Oe,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.36"}),Object.defineProperty(Oe,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:at}),Object.defineProperty(Oe,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:te}),Object.defineProperty(Oe,"openers",{enumerable:!0,configurable:!0,writable:!0,value:new Map});


/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopper: () => (/* binding */ createPopper),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   popperGenerator: () => (/* binding */ popperGenerator)
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    scaleX = element.offsetWidth > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !(0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element, strategy) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element, strategy)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");








function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  var isIE = /Trident/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(currentNode)) {
    currentNode = currentNode.host;
  }

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getViewportRect(element, strategy) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = (0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLayoutViewport)
/* harmony export */ });
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterMain: () => (/* binding */ afterMain),
/* harmony export */   afterRead: () => (/* binding */ afterRead),
/* harmony export */   afterWrite: () => (/* binding */ afterWrite),
/* harmony export */   auto: () => (/* binding */ auto),
/* harmony export */   basePlacements: () => (/* binding */ basePlacements),
/* harmony export */   beforeMain: () => (/* binding */ beforeMain),
/* harmony export */   beforeRead: () => (/* binding */ beforeRead),
/* harmony export */   beforeWrite: () => (/* binding */ beforeWrite),
/* harmony export */   bottom: () => (/* binding */ bottom),
/* harmony export */   clippingParents: () => (/* binding */ clippingParents),
/* harmony export */   end: () => (/* binding */ end),
/* harmony export */   left: () => (/* binding */ left),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   modifierPhases: () => (/* binding */ modifierPhases),
/* harmony export */   placements: () => (/* binding */ placements),
/* harmony export */   popper: () => (/* binding */ popper),
/* harmony export */   read: () => (/* binding */ read),
/* harmony export */   reference: () => (/* binding */ reference),
/* harmony export */   right: () => (/* binding */ right),
/* harmony export */   start: () => (/* binding */ start),
/* harmony export */   top: () => (/* binding */ top),
/* harmony export */   variationPlacements: () => (/* binding */ variationPlacements),
/* harmony export */   viewport: () => (/* binding */ viewport),
/* harmony export */   write: () => (/* binding */ write)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterMain: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain),
/* harmony export */   afterRead: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead),
/* harmony export */   afterWrite: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite),
/* harmony export */   applyStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles),
/* harmony export */   arrow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow),
/* harmony export */   auto: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto),
/* harmony export */   basePlacements: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements),
/* harmony export */   beforeMain: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain),
/* harmony export */   beforeRead: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead),
/* harmony export */   beforeWrite: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite),
/* harmony export */   bottom: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom),
/* harmony export */   clippingParents: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents),
/* harmony export */   computeStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles),
/* harmony export */   createPopper: () => (/* reexport safe */ _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper),
/* harmony export */   createPopperBase: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper),
/* harmony export */   createPopperLite: () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   end: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.end),
/* harmony export */   eventListeners: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners),
/* harmony export */   flip: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip),
/* harmony export */   hide: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide),
/* harmony export */   left: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.left),
/* harmony export */   main: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.main),
/* harmony export */   modifierPhases: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases),
/* harmony export */   offset: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset),
/* harmony export */   placements: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements),
/* harmony export */   popper: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper),
/* harmony export */   popperGenerator: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow),
/* harmony export */   read: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.read),
/* harmony export */   reference: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference),
/* harmony export */   right: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.right),
/* harmony export */   start: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.start),
/* harmony export */   top: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.top),
/* harmony export */   variationPlacements: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements),
/* harmony export */   viewport: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport),
/* harmony export */   write: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.write)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");








 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.within)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mapToStyles: () => (/* binding */ mapToStyles)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyles: () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   arrow: () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   computeStyles: () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   eventListeners: () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   flip: () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   hide: () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   offset: () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   distanceAndSkiddingToXY: () => (/* binding */ distanceAndSkiddingToXY)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopper: () => (/* binding */ createPopper),
/* harmony export */   defaultModifiers: () => (/* binding */ defaultModifiers),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   popperGenerator: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   arrow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   computeStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   createPopper: () => (/* binding */ createPopper),
/* harmony export */   createPopperLite: () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   defaultModifiers: () => (/* binding */ defaultModifiers),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   eventListeners: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   flip: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   hide: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   offset: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   popperGenerator: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.reference);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   round: () => (/* binding */ round)
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/userAgent.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/userAgent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUAString)
/* harmony export */ });
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   within: () => (/* binding */ within),
/* harmony export */   withinMaxClamp: () => (/* binding */ withinMaxClamp)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/base-component.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/base-component.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./dom/data.js */ "./node_modules/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./util/config.js */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Data, EventHandler, Config, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const VERSION = '5.3.3';

  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = index_js.getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      index_js.executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static getInstance(element) {
      return Data.get(index_js.getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  }

  return BaseComponent;

}));
//# sourceMappingURL=base-component.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/collapse.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/collapse.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap collapse.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'collapse';
  const DATA_KEY = 'bs.collapse';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  const Default = {
    parent: null,
    toggle: true
  };
  const DefaultType = {
    parent: '(null|element)',
    toggle: 'boolean'
  };

  /**
   * Class definition
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];

      // find active children
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      index_js.reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.style[dimension] = '';
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW);
    }

    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values
      config.parent = index_js.getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      // remove children if greater depth
      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    }

    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Collapse);

  return Collapse;

}));
//# sourceMappingURL=collapse.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/data.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/data.js ***!
  \****************************************************/
/***/ (function(module) {

/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  const elementMap = new Map();
  const data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  return data;

}));
//# sourceMappingURL=data.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/event-handler.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/event-handler.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string';
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const $ = index_js.getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }

  return EventHandler;

}));
//# sourceMappingURL=event-handler.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/manipulator.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/manipulator.js ***!
  \***********************************************************/
/***/ (function(module) {

/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };

  return Manipulator;

}));
//# sourceMappingURL=manipulator.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/selector-engine.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/selector-engine.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(',').map(sel => index_js.parseSelector(sel)).join(',') : null;
  };
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !index_js.isDisabled(el) && index_js.isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };

  return SelectorEngine;

}));
//# sourceMappingURL=selector-engine.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dropdown.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dropdown.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap dropdown.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js"), __webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Popper, BaseComponent, EventHandler, Manipulator, SelectorEngine, index_js) { 'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespaceDefault(Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'dropdown';
  const DATA_KEY = 'bs.dropdown';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const TAB_KEY = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = index_js.isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = index_js.isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = index_js.isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = index_js.isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = index_js.isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = index_js.isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };

  /**
   * Class definition
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper
      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (index_js.isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', index_js.noop);
        }
      }
      this._element.focus();
      this._element.setAttribute('aria-expanded', true);
      this._menu.classList.add(CLASS_NAME_SHOW);
      this._element.classList.add(CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_SHOWN, relatedTarget);
    }
    hide() {
      if (index_js.isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }

    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', index_js.noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW);
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._element.setAttribute('aria-expanded', 'false');
      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === 'object' && !index_js.isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }
      let referenceElement = this._element;
      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (index_js.isElement(this._config.reference)) {
        referenceElement = index_js.getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }

      // We need to trim the value because custom properties can also include spaces
      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset
      } = this._config;
      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      };

      // Disable Popper if we have a static display or Dropdown is in Navbar
      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...index_js.execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => index_js.isVisible(element));
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      index_js.getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        }

        // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command

      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();

      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Dropdown);

  return Dropdown;

}));
//# sourceMappingURL=dropdown.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/modal.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/modal.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/backdrop.js */ "./node_modules/bootstrap/js/dist/util/backdrop.js"), __webpack_require__(/*! ./util/component-functions.js */ "./node_modules/bootstrap/js/dist/util/component-functions.js"), __webpack_require__(/*! ./util/focustrap.js */ "./node_modules/bootstrap/js/dist/util/focustrap.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/scrollbar.js */ "./node_modules/bootstrap/js/dist/util/scrollbar.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'modal';
  const DATA_KEY = 'bs.modal';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  const Default = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY);
      EventHandler.off(this._dialog, EVENT_KEY);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }

    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      index_js.reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN, () => {
        if (index_js.isVisible(this)) {
          this.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  componentFunctions_js.enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Modal);

  return Modal;

}));
//# sourceMappingURL=modal.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/offcanvas.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/offcanvas.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap offcanvas.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/backdrop.js */ "./node_modules/bootstrap/js/dist/util/backdrop.js"), __webpack_require__(/*! ./util/component-functions.js */ "./node_modules/bootstrap/js/dist/util/component-functions.js"), __webpack_require__(/*! ./util/focustrap.js */ "./node_modules/bootstrap/js/dist/util/focustrap.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/scrollbar.js */ "./node_modules/bootstrap/js/dist/util/scrollbar.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'offcanvas';
  const DATA_KEY = 'bs.offcanvas';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="offcanvas"]';
  const Default = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW, CLASS_NAME_HIDING);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }

    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (index_js.isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN, () => {
      // focus on trigger when it is closed
      if (index_js.isVisible(this)) {
        this.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  componentFunctions_js.enableDismissTrigger(Offcanvas);

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Offcanvas);

  return Offcanvas;

}));
//# sourceMappingURL=offcanvas.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/backdrop.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/backdrop.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (EventHandler, Config, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'backdrop';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`;
  const Default = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };
  const DefaultType = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    show(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        index_js.reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        index_js.execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        this.dispose();
        index_js.execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = index_js.getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        index_js.execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      index_js.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }

  return Backdrop;

}));
//# sourceMappingURL=backdrop.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/component-functions.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/component-functions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (exports, EventHandler, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (index_js.isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  exports.enableDismissTrigger = enableDismissTrigger;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=component-functions.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/config.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Manipulator, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return {
        ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = index_js.isElement(value) ? 'element' : index_js.toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  }

  return Config;

}));
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/focustrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/focustrap.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js")) :
  0;
})(this, (function (EventHandler, SelectorEngine, Config) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'focustrap';
  const DATA_KEY = 'bs.focustrap';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };
  const DefaultType = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }

  return FocusTrap;

}));
//# sourceMappingURL=focustrap.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/index.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */
  const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };

  // Shout-out Angus Croll (https://goo.gl/pxwQGp)
  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  /**
   * Public Util API
   */

  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {};

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };
  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  const DOMContentLoadedCallbacks = [];
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
  };
  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */
  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  exports.defineJQueryPlugin = defineJQueryPlugin;
  exports.execute = execute;
  exports.executeAfterTransition = executeAfterTransition;
  exports.findShadowRoot = findShadowRoot;
  exports.getElement = getElement;
  exports.getNextActiveElement = getNextActiveElement;
  exports.getTransitionDurationFromElement = getTransitionDurationFromElement;
  exports.getUID = getUID;
  exports.getjQuery = getjQuery;
  exports.isDisabled = isDisabled;
  exports.isElement = isElement;
  exports.isRTL = isRTL;
  exports.isVisible = isVisible;
  exports.noop = noop;
  exports.onDOMContentLoaded = onDOMContentLoaded;
  exports.parseSelector = parseSelector;
  exports.reflow = reflow;
  exports.toType = toType;
  exports.triggerTransitionEnd = triggerTransitionEnd;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/scrollbar.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/scrollbar.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Manipulator, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (index_js.isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }

  return ScrollBarHelper;

}));
//# sourceMappingURL=scrollbar.js.map


/***/ }),

/***/ "./node_modules/choices.js/public/assets/scripts/choices.js":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.js ***!
  \******************************************************************/
/***/ ((module) => {

/*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 282:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_632__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
var constants_1 = __nested_webpack_require_632__(883);
var addChoice = function (_a) {
  var value = _a.value,
    label = _a.label,
    id = _a.id,
    groupId = _a.groupId,
    disabled = _a.disabled,
    elementId = _a.elementId,
    customProperties = _a.customProperties,
    placeholder = _a.placeholder,
    keyCode = _a.keyCode;
  return {
    type: constants_1.ACTION_TYPES.ADD_CHOICE,
    value: value,
    label: label,
    id: id,
    groupId: groupId,
    disabled: disabled,
    elementId: elementId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
exports.addChoice = addChoice;
var filterChoices = function (results) {
  return {
    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
    results: results
  };
};
exports.filterChoices = filterChoices;
var activateChoices = function (active) {
  if (active === void 0) {
    active = true;
  }
  return {
    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
    active: active
  };
};
exports.activateChoices = activateChoices;
var clearChoices = function () {
  return {
    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
  };
};
exports.clearChoices = clearChoices;

/***/ }),

/***/ 783:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2068__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addGroup = void 0;
var constants_1 = __nested_webpack_require_2068__(883);
var addGroup = function (_a) {
  var value = _a.value,
    id = _a.id,
    active = _a.active,
    disabled = _a.disabled;
  return {
    type: constants_1.ACTION_TYPES.ADD_GROUP,
    value: value,
    id: id,
    active: active,
    disabled: disabled
  };
};
exports.addGroup = addGroup;

/***/ }),

/***/ 464:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2595__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.highlightItem = exports.removeItem = exports.addItem = void 0;
var constants_1 = __nested_webpack_require_2595__(883);
var addItem = function (_a) {
  var value = _a.value,
    label = _a.label,
    id = _a.id,
    choiceId = _a.choiceId,
    groupId = _a.groupId,
    customProperties = _a.customProperties,
    placeholder = _a.placeholder,
    keyCode = _a.keyCode;
  return {
    type: constants_1.ACTION_TYPES.ADD_ITEM,
    value: value,
    label: label,
    id: id,
    choiceId: choiceId,
    groupId: groupId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
exports.addItem = addItem;
var removeItem = function (id, choiceId) {
  return {
    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
    id: id,
    choiceId: choiceId
  };
};
exports.removeItem = removeItem;
var highlightItem = function (id, highlighted) {
  return {
    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
    id: id,
    highlighted: highlighted
  };
};
exports.highlightItem = highlightItem;

/***/ }),

/***/ 137:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_3779__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
var constants_1 = __nested_webpack_require_3779__(883);
var clearAll = function () {
  return {
    type: constants_1.ACTION_TYPES.CLEAR_ALL
  };
};
exports.clearAll = clearAll;
var resetTo = function (state) {
  return {
    type: constants_1.ACTION_TYPES.RESET_TO,
    state: state
  };
};
exports.resetTo = resetTo;
var setIsLoading = function (isLoading) {
  return {
    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
    isLoading: isLoading
  };
};
exports.setIsLoading = setIsLoading;

/***/ }),

/***/ 373:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_4494__) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var deepmerge_1 = __importDefault(__nested_webpack_require_4494__(996));
/* eslint-disable @typescript-eslint/no-explicit-any */
var fuse_js_1 = __importDefault(__nested_webpack_require_4494__(221));
var choices_1 = __nested_webpack_require_4494__(282);
var groups_1 = __nested_webpack_require_4494__(783);
var items_1 = __nested_webpack_require_4494__(464);
var misc_1 = __nested_webpack_require_4494__(137);
var components_1 = __nested_webpack_require_4494__(520);
var constants_1 = __nested_webpack_require_4494__(883);
var defaults_1 = __nested_webpack_require_4494__(789);
var utils_1 = __nested_webpack_require_4494__(799);
var reducers_1 = __nested_webpack_require_4494__(655);
var store_1 = __importDefault(__nested_webpack_require_4494__(744));
var templates_1 = __importDefault(__nested_webpack_require_4494__(686));
/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */
var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
var USER_DEFAULTS = {};
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var Choices = /** @class */function () {
  function Choices(element, userConfig) {
    if (element === void 0) {
      element = '[data-choice]';
    }
    if (userConfig === void 0) {
      userConfig = {};
    }
    var _this = this;
    if (userConfig.allowHTML === undefined) {
      console.warn('Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.');
    }
    this.config = deepmerge_1.default.all([defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig],
    // When merging array configs, replace with a copy of the userConfig array,
    // instead of concatenating with the default array
    {
      arrayMerge: function (_, sourceArray) {
        return __spreadArray([], sourceArray, true);
      }
    });
    var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
    if (invalidConfigOptions.length) {
      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
    }
    var passedElement = typeof element === 'string' ? document.querySelector(element) : element;
    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
      throw TypeError('Expected one of the following types text|select-one|select-multiple');
    }
    this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
    this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
    this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
    if (!['auto', 'always'].includes("".concat(this.config.renderSelectedChoices))) {
      this.config.renderSelectedChoices = 'auto';
    }
    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
      var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
      this.config.addItemFilter = re.test.bind(re);
    }
    if (this._isTextElement) {
      this.passedElement = new components_1.WrappedInput({
        element: passedElement,
        classNames: this.config.classNames,
        delimiter: this.config.delimiter
      });
    } else {
      this.passedElement = new components_1.WrappedSelect({
        element: passedElement,
        classNames: this.config.classNames,
        template: function (data) {
          return _this._templates.option(data);
        }
      });
    }
    this.initialised = false;
    this._store = new store_1.default();
    this._initialState = reducers_1.defaultState;
    this._currentState = reducers_1.defaultState;
    this._prevState = reducers_1.defaultState;
    this._currentValue = '';
    this._canSearch = !!this.config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = (0, utils_1.generateId)(this.passedElement.element, 'choices-');
    /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     */
    this._direction = this.passedElement.dir;
    if (!this._direction) {
      var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
      var documentDirection = window.getComputedStyle(document.documentElement).direction;
      if (elementDirection !== documentDirection) {
        this._direction = elementDirection;
      }
    }
    this._idNames = {
      itemChoice: 'item-choice'
    };
    if (this._isSelectElement) {
      // Assign preset groups from passed element
      this._presetGroups = this.passedElement.optionGroups;
      // Assign preset options from passed element
      this._presetOptions = this.passedElement.options;
    }
    // Assign preset choices from passed object
    this._presetChoices = this.config.choices;
    // Assign preset items from passed object first
    this._presetItems = this.config.items;
    // Add any values passed from attribute
    if (this.passedElement.value && this._isTextElement) {
      var splitValues = this.passedElement.value.split(this.config.delimiter);
      this._presetItems = this._presetItems.concat(splitValues);
    }
    // Create array of choices from option elements
    if (this.passedElement.options) {
      this.passedElement.options.forEach(function (option) {
        _this._presetChoices.push({
          value: option.value,
          label: option.innerHTML,
          selected: !!option.selected,
          disabled: option.disabled || option.parentNode.disabled,
          placeholder: option.value === '' || option.hasAttribute('placeholder'),
          customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
        });
      });
    }
    this._render = this._render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onSelectKey = this._onSelectKey.bind(this);
    this._onEnterKey = this._onEnterKey.bind(this);
    this._onEscapeKey = this._onEscapeKey.bind(this);
    this._onDirectionKey = this._onDirectionKey.bind(this);
    this._onDeleteKey = this._onDeleteKey.bind(this);
    // If element has already been initialised with Choices, fail silently
    if (this.passedElement.isActive) {
      if (!this.config.silent) {
        console.warn('Trying to initialise Choices on element already initialised', {
          element: element
        });
      }
      this.initialised = true;
      return;
    }
    // Let's go
    this.init();
  }
  Object.defineProperty(Choices, "defaults", {
    get: function () {
      return Object.preventExtensions({
        get options() {
          return USER_DEFAULTS;
        },
        get templates() {
          return templates_1.default;
        }
      });
    },
    enumerable: false,
    configurable: true
  });
  Choices.prototype.init = function () {
    if (this.initialised) {
      return;
    }
    this._createTemplates();
    this._createElements();
    this._createStructure();
    this._store.subscribe(this._render);
    this._render();
    this._addEventListeners();
    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');
    if (shouldDisable) {
      this.disable();
    }
    this.initialised = true;
    var callbackOnInit = this.config.callbackOnInit;
    // Run callback if it is a function
    if (callbackOnInit && typeof callbackOnInit === 'function') {
      callbackOnInit.call(this);
    }
  };
  Choices.prototype.destroy = function () {
    if (!this.initialised) {
      return;
    }
    this._removeEventListeners();
    this.passedElement.reveal();
    this.containerOuter.unwrap(this.passedElement.element);
    this.clearStore();
    if (this._isSelectElement) {
      this.passedElement.options = this._presetOptions;
    }
    this._templates = templates_1.default;
    this.initialised = false;
  };
  Choices.prototype.enable = function () {
    if (this.passedElement.isDisabled) {
      this.passedElement.enable();
    }
    if (this.containerOuter.isDisabled) {
      this._addEventListeners();
      this.input.enable();
      this.containerOuter.enable();
    }
    return this;
  };
  Choices.prototype.disable = function () {
    if (!this.passedElement.isDisabled) {
      this.passedElement.disable();
    }
    if (!this.containerOuter.isDisabled) {
      this._removeEventListeners();
      this.input.disable();
      this.containerOuter.disable();
    }
    return this;
  };
  Choices.prototype.highlightItem = function (item, runEvent) {
    if (runEvent === void 0) {
      runEvent = true;
    }
    if (!item || !item.id) {
      return this;
    }
    var id = item.id,
      _a = item.groupId,
      groupId = _a === void 0 ? -1 : _a,
      _b = item.value,
      value = _b === void 0 ? '' : _b,
      _c = item.label,
      label = _c === void 0 ? '' : _c;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    this._store.dispatch((0, items_1.highlightItem)(id, true));
    if (runEvent) {
      this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group && group.value ? group.value : null
      });
    }
    return this;
  };
  Choices.prototype.unhighlightItem = function (item) {
    if (!item || !item.id) {
      return this;
    }
    var id = item.id,
      _a = item.groupId,
      groupId = _a === void 0 ? -1 : _a,
      _b = item.value,
      value = _b === void 0 ? '' : _b,
      _c = item.label,
      label = _c === void 0 ? '' : _c;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    this._store.dispatch((0, items_1.highlightItem)(id, false));
    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
      id: id,
      value: value,
      label: label,
      groupValue: group && group.value ? group.value : null
    });
    return this;
  };
  Choices.prototype.highlightAll = function () {
    var _this = this;
    this._store.items.forEach(function (item) {
      return _this.highlightItem(item);
    });
    return this;
  };
  Choices.prototype.unhighlightAll = function () {
    var _this = this;
    this._store.items.forEach(function (item) {
      return _this.unhighlightItem(item);
    });
    return this;
  };
  Choices.prototype.removeActiveItemsByValue = function (value) {
    var _this = this;
    this._store.activeItems.filter(function (item) {
      return item.value === value;
    }).forEach(function (item) {
      return _this._removeItem(item);
    });
    return this;
  };
  Choices.prototype.removeActiveItems = function (excludedId) {
    var _this = this;
    this._store.activeItems.filter(function (_a) {
      var id = _a.id;
      return id !== excludedId;
    }).forEach(function (item) {
      return _this._removeItem(item);
    });
    return this;
  };
  Choices.prototype.removeHighlightedItems = function (runEvent) {
    var _this = this;
    if (runEvent === void 0) {
      runEvent = false;
    }
    this._store.highlightedActiveItems.forEach(function (item) {
      _this._removeItem(item);
      // If this action was performed by the user
      // trigger the event
      if (runEvent) {
        _this._triggerChange(item.value);
      }
    });
    return this;
  };
  Choices.prototype.showDropdown = function (preventInputFocus) {
    var _this = this;
    if (this.dropdown.isActive) {
      return this;
    }
    requestAnimationFrame(function () {
      _this.dropdown.show();
      _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
      if (!preventInputFocus && _this._canSearch) {
        _this.input.focus();
      }
      _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
    });
    return this;
  };
  Choices.prototype.hideDropdown = function (preventInputBlur) {
    var _this = this;
    if (!this.dropdown.isActive) {
      return this;
    }
    requestAnimationFrame(function () {
      _this.dropdown.hide();
      _this.containerOuter.close();
      if (!preventInputBlur && _this._canSearch) {
        _this.input.removeActiveDescendant();
        _this.input.blur();
      }
      _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
    });
    return this;
  };
  Choices.prototype.getValue = function (valueOnly) {
    if (valueOnly === void 0) {
      valueOnly = false;
    }
    var values = this._store.activeItems.reduce(function (selectedItems, item) {
      var itemValue = valueOnly ? item.value : item;
      selectedItems.push(itemValue);
      return selectedItems;
    }, []);
    return this._isSelectOneElement ? values[0] : values;
  };
  Choices.prototype.setValue = function (items) {
    var _this = this;
    if (!this.initialised) {
      return this;
    }
    items.forEach(function (value) {
      return _this._setChoiceOrItem(value);
    });
    return this;
  };
  Choices.prototype.setChoiceByValue = function (value) {
    var _this = this;
    if (!this.initialised || this._isTextElement) {
      return this;
    }
    // If only one value has been passed, convert to array
    var choiceValue = Array.isArray(value) ? value : [value];
    // Loop through each value and
    choiceValue.forEach(function (val) {
      return _this._findAndSelectChoiceByValue(val);
    });
    return this;
  };
  /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */
  Choices.prototype.setChoices = function (choicesArrayOrFetcher, value, label, replaceChoices) {
    var _this = this;
    if (choicesArrayOrFetcher === void 0) {
      choicesArrayOrFetcher = [];
    }
    if (value === void 0) {
      value = 'value';
    }
    if (label === void 0) {
      label = 'label';
    }
    if (replaceChoices === void 0) {
      replaceChoices = false;
    }
    if (!this.initialised) {
      throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
    }
    if (!this._isSelectElement) {
      throw new TypeError("setChoices can't be used with INPUT based Choices");
    }
    if (typeof value !== 'string' || !value) {
      throw new TypeError("value parameter must be a name of 'value' field in passed objects");
    }
    // Clear choices if needed
    if (replaceChoices) {
      this.clearChoices();
    }
    if (typeof choicesArrayOrFetcher === 'function') {
      // it's a choices fetcher function
      var fetcher_1 = choicesArrayOrFetcher(this);
      if (typeof Promise === 'function' && fetcher_1 instanceof Promise) {
        // that's a promise
        // eslint-disable-next-line no-promise-executor-return
        return new Promise(function (resolve) {
          return requestAnimationFrame(resolve);
        }).then(function () {
          return _this._handleLoadingState(true);
        }).then(function () {
          return fetcher_1;
        }).then(function (data) {
          return _this.setChoices(data, value, label, replaceChoices);
        }).catch(function (err) {
          if (!_this.config.silent) {
            console.error(err);
          }
        }).then(function () {
          return _this._handleLoadingState(false);
        }).then(function () {
          return _this;
        });
      }
      // function returned something else than promise, let's check if it's an array of choices
      if (!Array.isArray(fetcher_1)) {
        throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
      }
      // recursion with results, it's sync and choices were cleared already
      return this.setChoices(fetcher_1, value, label, false);
    }
    if (!Array.isArray(choicesArrayOrFetcher)) {
      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
    }
    this.containerOuter.removeLoadingState();
    this._startLoading();
    choicesArrayOrFetcher.forEach(function (groupOrChoice) {
      if (groupOrChoice.choices) {
        _this._addGroup({
          id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
          group: groupOrChoice,
          valueKey: value,
          labelKey: label
        });
      } else {
        var choice = groupOrChoice;
        _this._addChoice({
          value: choice[value],
          label: choice[label],
          isSelected: !!choice.selected,
          isDisabled: !!choice.disabled,
          placeholder: !!choice.placeholder,
          customProperties: choice.customProperties
        });
      }
    });
    this._stopLoading();
    return this;
  };
  Choices.prototype.clearChoices = function () {
    this._store.dispatch((0, choices_1.clearChoices)());
    return this;
  };
  Choices.prototype.clearStore = function () {
    this._store.dispatch((0, misc_1.clearAll)());
    return this;
  };
  Choices.prototype.clearInput = function () {
    var shouldSetInputWidth = !this._isSelectOneElement;
    this.input.clear(shouldSetInputWidth);
    if (!this._isTextElement && this._canSearch) {
      this._isSearching = false;
      this._store.dispatch((0, choices_1.activateChoices)(true));
    }
    return this;
  };
  Choices.prototype._render = function () {
    if (this._store.isLoading()) {
      return;
    }
    this._currentState = this._store.state;
    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
    var shouldRenderChoices = this._isSelectElement;
    var shouldRenderItems = this._currentState.items !== this._prevState.items;
    if (!stateChanged) {
      return;
    }
    if (shouldRenderChoices) {
      this._renderChoices();
    }
    if (shouldRenderItems) {
      this._renderItems();
    }
    this._prevState = this._currentState;
  };
  Choices.prototype._renderChoices = function () {
    var _this = this;
    var _a = this._store,
      activeGroups = _a.activeGroups,
      activeChoices = _a.activeChoices;
    var choiceListFragment = document.createDocumentFragment();
    this.choiceList.clear();
    if (this.config.resetScrollPosition) {
      requestAnimationFrame(function () {
        return _this.choiceList.scrollToTop();
      });
    }
    // If we have grouped options
    if (activeGroups.length >= 1 && !this._isSearching) {
      // If we have a placeholder choice along with groups
      var activePlaceholders = activeChoices.filter(function (activeChoice) {
        return activeChoice.placeholder === true && activeChoice.groupId === -1;
      });
      if (activePlaceholders.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
      }
      choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
    } else if (activeChoices.length >= 1) {
      choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
    }
    // If we have choices to show
    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
      var activeItems = this._store.activeItems;
      var canAddItem = this._canAddItem(activeItems, this.input.value);
      // ...and we can select them
      if (canAddItem.response) {
        // ...append them and highlight the first choice
        this.choiceList.append(choiceListFragment);
        this._highlightChoice();
      } else {
        var notice = this._getTemplate('notice', canAddItem.notice);
        this.choiceList.append(notice);
      }
    } else {
      // Otherwise show a notice
      var dropdownItem = void 0;
      var notice = void 0;
      if (this._isSearching) {
        notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
        dropdownItem = this._getTemplate('notice', notice, 'no-results');
      } else {
        notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
        dropdownItem = this._getTemplate('notice', notice, 'no-choices');
      }
      this.choiceList.append(dropdownItem);
    }
  };
  Choices.prototype._renderItems = function () {
    var activeItems = this._store.activeItems || [];
    this.itemList.clear();
    // Create a fragment to store our list items
    // (so we don't have to update the DOM for each item)
    var itemListFragment = this._createItemsFragment(activeItems);
    // If we have items to add, append them
    if (itemListFragment.childNodes) {
      this.itemList.append(itemListFragment);
    }
  };
  Choices.prototype._createGroupsFragment = function (groups, choices, fragment) {
    var _this = this;
    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }
    var getGroupChoices = function (group) {
      return choices.filter(function (choice) {
        if (_this._isSelectOneElement) {
          return choice.groupId === group.id;
        }
        return choice.groupId === group.id && (_this.config.renderSelectedChoices === 'always' || !choice.selected);
      });
    };
    // If sorting is enabled, filter groups
    if (this.config.shouldSort) {
      groups.sort(this.config.sorter);
    }
    groups.forEach(function (group) {
      var groupChoices = getGroupChoices(group);
      if (groupChoices.length >= 1) {
        var dropdownGroup = _this._getTemplate('choiceGroup', group);
        fragment.appendChild(dropdownGroup);
        _this._createChoicesFragment(groupChoices, fragment, true);
      }
    });
    return fragment;
  };
  Choices.prototype._createChoicesFragment = function (choices, fragment, withinGroup) {
    var _this = this;
    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }
    if (withinGroup === void 0) {
      withinGroup = false;
    }
    // Create a fragment to store our list items (so we don't have to update the DOM for each item)
    var _a = this.config,
      renderSelectedChoices = _a.renderSelectedChoices,
      searchResultLimit = _a.searchResultLimit,
      renderChoiceLimit = _a.renderChoiceLimit;
    var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
    var appendChoice = function (choice) {
      var shouldRender = renderSelectedChoices === 'auto' ? _this._isSelectOneElement || !choice.selected : true;
      if (shouldRender) {
        var dropdownItem = _this._getTemplate('choice', choice, _this.config.itemSelectText);
        fragment.appendChild(dropdownItem);
      }
    };
    var rendererableChoices = choices;
    if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
      rendererableChoices = choices.filter(function (choice) {
        return !choice.selected;
      });
    }
    // Split array into placeholders and "normal" choices
    var _b = rendererableChoices.reduce(function (acc, choice) {
        if (choice.placeholder) {
          acc.placeholderChoices.push(choice);
        } else {
          acc.normalChoices.push(choice);
        }
        return acc;
      }, {
        placeholderChoices: [],
        normalChoices: []
      }),
      placeholderChoices = _b.placeholderChoices,
      normalChoices = _b.normalChoices;
    // If sorting is enabled or the user is searching, filter choices
    if (this.config.shouldSort || this._isSearching) {
      normalChoices.sort(filter);
    }
    var choiceLimit = rendererableChoices.length;
    // Prepend placeholeder
    var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
    if (this._isSearching) {
      choiceLimit = searchResultLimit;
    } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
      choiceLimit = renderChoiceLimit;
    }
    // Add each choice to dropdown within range
    for (var i = 0; i < choiceLimit; i += 1) {
      if (sortedChoices[i]) {
        appendChoice(sortedChoices[i]);
      }
    }
    return fragment;
  };
  Choices.prototype._createItemsFragment = function (items, fragment) {
    var _this = this;
    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }
    // Create fragment to add elements to
    var _a = this.config,
      shouldSortItems = _a.shouldSortItems,
      sorter = _a.sorter,
      removeItemButton = _a.removeItemButton;
    // If sorting is enabled, filter items
    if (shouldSortItems && !this._isSelectOneElement) {
      items.sort(sorter);
    }
    if (this._isTextElement) {
      // Update the value of the hidden input
      this.passedElement.value = items.map(function (_a) {
        var value = _a.value;
        return value;
      }).join(this.config.delimiter);
    } else {
      // Update the options of the hidden input
      this.passedElement.options = items;
    }
    var addItemToFragment = function (item) {
      // Create new list element
      var listItem = _this._getTemplate('item', item, removeItemButton);
      // Append it to list
      fragment.appendChild(listItem);
    };
    // Add each list item to list
    items.forEach(addItemToFragment);
    return fragment;
  };
  Choices.prototype._triggerChange = function (value) {
    if (value === undefined || value === null) {
      return;
    }
    this.passedElement.triggerEvent(constants_1.EVENTS.change, {
      value: value
    });
  };
  Choices.prototype._selectPlaceholderChoice = function (placeholderChoice) {
    this._addItem({
      value: placeholderChoice.value,
      label: placeholderChoice.label,
      choiceId: placeholderChoice.id,
      groupId: placeholderChoice.groupId,
      placeholder: placeholderChoice.placeholder
    });
    this._triggerChange(placeholderChoice.value);
  };
  Choices.prototype._handleButtonAction = function (activeItems, element) {
    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
      return;
    }
    var itemId = element.parentNode && element.parentNode.dataset.id;
    var itemToRemove = itemId && activeItems.find(function (item) {
      return item.id === parseInt(itemId, 10);
    });
    if (!itemToRemove) {
      return;
    }
    // Remove item associated with button
    this._removeItem(itemToRemove);
    this._triggerChange(itemToRemove.value);
    if (this._isSelectOneElement && this._store.placeholderChoice) {
      this._selectPlaceholderChoice(this._store.placeholderChoice);
    }
  };
  Choices.prototype._handleItemAction = function (activeItems, element, hasShiftKey) {
    var _this = this;
    if (hasShiftKey === void 0) {
      hasShiftKey = false;
    }
    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
      return;
    }
    var passedId = element.dataset.id;
    // We only want to select one item with a click
    // so we deselect any items that aren't the target
    // unless shift is being pressed
    activeItems.forEach(function (item) {
      if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
        _this.highlightItem(item);
      } else if (!hasShiftKey && item.highlighted) {
        _this.unhighlightItem(item);
      }
    });
    // Focus input as without focus, a user cannot do anything with a
    // highlighted item
    this.input.focus();
  };
  Choices.prototype._handleChoiceAction = function (activeItems, element) {
    if (!activeItems || !element) {
      return;
    }
    // If we are clicking on an option
    var id = element.dataset.id;
    var choice = id && this._store.getChoiceById(id);
    if (!choice) {
      return;
    }
    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
    var hasActiveDropdown = this.dropdown.isActive;
    // Update choice keyCode
    choice.keyCode = passedKeyCode;
    this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
      choice: choice
    });
    if (!choice.selected && !choice.disabled) {
      var canAddItem = this._canAddItem(activeItems, choice.value);
      if (canAddItem.response) {
        this._addItem({
          value: choice.value,
          label: choice.label,
          choiceId: choice.id,
          groupId: choice.groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder,
          keyCode: choice.keyCode
        });
        this._triggerChange(choice.value);
      }
    }
    this.clearInput();
    // We want to close the dropdown if we are dealing with a single select box
    if (hasActiveDropdown && this._isSelectOneElement) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };
  Choices.prototype._handleBackspace = function (activeItems) {
    if (!this.config.removeItems || !activeItems) {
      return;
    }
    var lastItem = activeItems[activeItems.length - 1];
    var hasHighlightedItems = activeItems.some(function (item) {
      return item.highlighted;
    });
    // If editing the last item is allowed and there are not other selected items,
    // we can edit the item value. Otherwise if we can remove items, remove all selected items
    if (this.config.editItems && !hasHighlightedItems && lastItem) {
      this.input.value = lastItem.value;
      this.input.setWidth();
      this._removeItem(lastItem);
      this._triggerChange(lastItem.value);
    } else {
      if (!hasHighlightedItems) {
        // Highlight last item if none already highlighted
        this.highlightItem(lastItem, false);
      }
      this.removeHighlightedItems(true);
    }
  };
  Choices.prototype._startLoading = function () {
    this._store.dispatch((0, misc_1.setIsLoading)(true));
  };
  Choices.prototype._stopLoading = function () {
    this._store.dispatch((0, misc_1.setIsLoading)(false));
  };
  Choices.prototype._handleLoadingState = function (setLoading) {
    if (setLoading === void 0) {
      setLoading = true;
    }
    var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
    if (setLoading) {
      this.disable();
      this.containerOuter.addLoadingState();
      if (this._isSelectOneElement) {
        if (!placeholderItem) {
          placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
          if (placeholderItem) {
            this.itemList.append(placeholderItem);
          }
        } else {
          placeholderItem.innerHTML = this.config.loadingText;
        }
      } else {
        this.input.placeholder = this.config.loadingText;
      }
    } else {
      this.enable();
      this.containerOuter.removeLoadingState();
      if (this._isSelectOneElement) {
        if (placeholderItem) {
          placeholderItem.innerHTML = this._placeholderValue || '';
        }
      } else {
        this.input.placeholder = this._placeholderValue || '';
      }
    }
  };
  Choices.prototype._handleSearch = function (value) {
    if (!this.input.isFocussed) {
      return;
    }
    var choices = this._store.choices;
    var _a = this.config,
      searchFloor = _a.searchFloor,
      searchChoices = _a.searchChoices;
    var hasUnactiveChoices = choices.some(function (option) {
      return !option.active;
    });
    // Check that we have a value to search and the input was an alphanumeric character
    if (value !== null && typeof value !== 'undefined' && value.length >= searchFloor) {
      var resultCount = searchChoices ? this._searchChoices(value) : 0;
      // Trigger search event
      this.passedElement.triggerEvent(constants_1.EVENTS.search, {
        value: value,
        resultCount: resultCount
      });
    } else if (hasUnactiveChoices) {
      // Otherwise reset choices to active
      this._isSearching = false;
      this._store.dispatch((0, choices_1.activateChoices)(true));
    }
  };
  Choices.prototype._canAddItem = function (activeItems, value) {
    var canAddItem = true;
    var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;
    if (!this._isSelectOneElement) {
      var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
      if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
        // If there is a max entry limit and we have reached that limit
        // don't update
        canAddItem = false;
        notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
      }
      if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
        canAddItem = false;
        notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
      }
      if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
        canAddItem = false;
        notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
      }
    }
    return {
      response: canAddItem,
      notice: notice
    };
  };
  Choices.prototype._searchChoices = function (value) {
    var newValue = typeof value === 'string' ? value.trim() : value;
    var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;
    if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
      return 0;
    }
    // If new value matches the desired length and is not the same as the current value with a space
    var haystack = this._store.searchableChoices;
    var needle = newValue;
    var options = Object.assign(this.config.fuseOptions, {
      keys: __spreadArray([], this.config.searchFields, true),
      includeMatches: true
    });
    var fuse = new fuse_js_1.default(haystack, options);
    var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303
    this._currentValue = newValue;
    this._highlightPosition = 0;
    this._isSearching = true;
    this._store.dispatch((0, choices_1.filterChoices)(results));
    return results.length;
  };
  Choices.prototype._addEventListeners = function () {
    var documentElement = document.documentElement;
    // capture events - can cancel event processing or propagation
    documentElement.addEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true);
    // passive events - doesn't call `preventDefault` or `stopPropagation`
    documentElement.addEventListener('click', this._onClick, {
      passive: true
    });
    documentElement.addEventListener('touchmove', this._onTouchMove, {
      passive: true
    });
    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
      passive: true
    });
    if (this._isSelectOneElement) {
      this.containerOuter.element.addEventListener('focus', this._onFocus, {
        passive: true
      });
      this.containerOuter.element.addEventListener('blur', this._onBlur, {
        passive: true
      });
    }
    this.input.element.addEventListener('keyup', this._onKeyUp, {
      passive: true
    });
    this.input.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.input.element.addEventListener('blur', this._onBlur, {
      passive: true
    });
    if (this.input.element.form) {
      this.input.element.form.addEventListener('reset', this._onFormReset, {
        passive: true
      });
    }
    this.input.addEventListeners();
  };
  Choices.prototype._removeEventListeners = function () {
    var documentElement = document.documentElement;
    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
    documentElement.removeEventListener('click', this._onClick);
    documentElement.removeEventListener('touchmove', this._onTouchMove);
    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
    if (this._isSelectOneElement) {
      this.containerOuter.element.removeEventListener('focus', this._onFocus);
      this.containerOuter.element.removeEventListener('blur', this._onBlur);
    }
    this.input.element.removeEventListener('keyup', this._onKeyUp);
    this.input.element.removeEventListener('focus', this._onFocus);
    this.input.element.removeEventListener('blur', this._onBlur);
    if (this.input.element.form) {
      this.input.element.form.removeEventListener('reset', this._onFormReset);
    }
    this.input.removeEventListeners();
  };
  Choices.prototype._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    var activeItems = this._store.activeItems;
    var hasFocusedInput = this.input.isFocussed;
    var hasActiveDropdown = this.dropdown.isActive;
    var hasItems = this.itemList.hasChildren();
    var keyString = String.fromCharCode(keyCode);
    // eslint-disable-next-line no-control-regex
    var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
    var BACK_KEY = constants_1.KEY_CODES.BACK_KEY,
      DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY,
      ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY,
      A_KEY = constants_1.KEY_CODES.A_KEY,
      ESC_KEY = constants_1.KEY_CODES.ESC_KEY,
      UP_KEY = constants_1.KEY_CODES.UP_KEY,
      DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY,
      PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY,
      PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
    if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
      this.showDropdown();
      if (!this.input.isFocussed) {
        /*
          We update the input value with the pressed key as
          the input was not focussed at the time of key press
          therefore does not have the value of the key.
        */
        this.input.value += event.key.toLowerCase();
      }
    }
    switch (keyCode) {
      case A_KEY:
        return this._onSelectKey(event, hasItems);
      case ENTER_KEY:
        return this._onEnterKey(event, activeItems, hasActiveDropdown);
      case ESC_KEY:
        return this._onEscapeKey(hasActiveDropdown);
      case UP_KEY:
      case PAGE_UP_KEY:
      case DOWN_KEY:
      case PAGE_DOWN_KEY:
        return this._onDirectionKey(event, hasActiveDropdown);
      case DELETE_KEY:
      case BACK_KEY:
        return this._onDeleteKey(event, activeItems, hasFocusedInput);
      default:
    }
  };
  Choices.prototype._onKeyUp = function (_a) {
    var target = _a.target,
      keyCode = _a.keyCode;
    var value = this.input.value;
    var activeItems = this._store.activeItems;
    var canAddItem = this._canAddItem(activeItems, value);
    var backKey = constants_1.KEY_CODES.BACK_KEY,
      deleteKey = constants_1.KEY_CODES.DELETE_KEY;
    // We are typing into a text input and have a value, we want to show a dropdown
    // notice. Otherwise hide the dropdown
    if (this._isTextElement) {
      var canShowDropdownNotice = canAddItem.notice && value;
      if (canShowDropdownNotice) {
        var dropdownItem = this._getTemplate('notice', canAddItem.notice);
        this.dropdown.element.innerHTML = dropdownItem.outerHTML;
        this.showDropdown(true);
      } else {
        this.hideDropdown(true);
      }
    } else {
      var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
      var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
      var canReactivateChoices = !this._isTextElement && this._isSearching;
      var canSearch = this._canSearch && canAddItem.response;
      if (userHasRemovedValue && canReactivateChoices) {
        this._isSearching = false;
        this._store.dispatch((0, choices_1.activateChoices)(true));
      } else if (canSearch) {
        this._handleSearch(this.input.rawValue);
      }
    }
    this._canSearch = this.config.searchEnabled;
  };
  Choices.prototype._onSelectKey = function (event, hasItems) {
    var ctrlKey = event.ctrlKey,
      metaKey = event.metaKey;
    var hasCtrlDownKeyPressed = ctrlKey || metaKey;
    // If CTRL + A or CMD + A have been pressed and there are items to select
    if (hasCtrlDownKeyPressed && hasItems) {
      this._canSearch = false;
      var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
      if (shouldHightlightAll) {
        this.highlightAll();
      }
    }
  };
  Choices.prototype._onEnterKey = function (event, activeItems, hasActiveDropdown) {
    var target = event.target;
    var enterKey = constants_1.KEY_CODES.ENTER_KEY;
    var targetWasButton = target && target.hasAttribute('data-button');
    if (this._isTextElement && target && target.value) {
      var value = this.input.value;
      var canAddItem = this._canAddItem(activeItems, value);
      if (canAddItem.response) {
        this.hideDropdown(true);
        this._addItem({
          value: value
        });
        this._triggerChange(value);
        this.clearInput();
      }
    }
    if (targetWasButton) {
      this._handleButtonAction(activeItems, target);
      event.preventDefault();
    }
    if (hasActiveDropdown) {
      var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
      if (highlightedChoice) {
        // add enter keyCode value
        if (activeItems[0]) {
          activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
        }

        this._handleChoiceAction(activeItems, highlightedChoice);
      }
      event.preventDefault();
    } else if (this._isSelectOneElement) {
      this.showDropdown();
      event.preventDefault();
    }
  };
  Choices.prototype._onEscapeKey = function (hasActiveDropdown) {
    if (hasActiveDropdown) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };
  Choices.prototype._onDirectionKey = function (event, hasActiveDropdown) {
    var keyCode = event.keyCode,
      metaKey = event.metaKey;
    var downKey = constants_1.KEY_CODES.DOWN_KEY,
      pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY,
      pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
    // If up or down key is pressed, traverse through options
    if (hasActiveDropdown || this._isSelectOneElement) {
      this.showDropdown();
      this._canSearch = false;
      var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
      var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
      var selectableChoiceIdentifier = '[data-choice-selectable]';
      var nextEl = void 0;
      if (skipKey) {
        if (directionInt > 0) {
          nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      } else {
        var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
        if (currentEl) {
          nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      }
      if (nextEl) {
        // We prevent default to stop the cursor moving
        // when pressing the arrow
        if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
          this.choiceList.scrollToChildElement(nextEl, directionInt);
        }
        this._highlightChoice(nextEl);
      }
      // Prevent default to maintain cursor position whilst
      // traversing dropdown options
      event.preventDefault();
    }
  };
  Choices.prototype._onDeleteKey = function (event, activeItems, hasFocusedInput) {
    var target = event.target;
    // If backspace or delete key is pressed and the input has no value
    if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
      this._handleBackspace(activeItems);
      event.preventDefault();
    }
  };
  Choices.prototype._onTouchMove = function () {
    if (this._wasTap) {
      this._wasTap = false;
    }
  };
  Choices.prototype._onTouchEnd = function (event) {
    var target = (event || event.touches[0]).target;
    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
    if (touchWasWithinContainer) {
      var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
      if (containerWasExactTarget) {
        if (this._isTextElement) {
          this.input.focus();
        } else if (this._isSelectMultipleElement) {
          this.showDropdown();
        }
      }
      // Prevents focus event firing
      event.stopPropagation();
    }
    this._wasTap = true;
  };
  /**
   * Handles mousedown event in capture mode for containetOuter.element
   */
  Choices.prototype._onMouseDown = function (event) {
    var target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    // If we have our mouse down on the scrollbar and are on IE11...
    if (IS_IE11 && this.choiceList.element.contains(target)) {
      // check if click was on a scrollbar area
      var firstChoice = this.choiceList.element.firstElementChild;
      var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
      this._isScrollingOnIe = isOnScrollbar;
    }
    if (target === this.input.element) {
      return;
    }
    var item = target.closest('[data-button],[data-item],[data-choice]');
    if (item instanceof HTMLElement) {
      var hasShiftKey = event.shiftKey;
      var activeItems = this._store.activeItems;
      var dataset = item.dataset;
      if ('button' in dataset) {
        this._handleButtonAction(activeItems, item);
      } else if ('item' in dataset) {
        this._handleItemAction(activeItems, item, hasShiftKey);
      } else if ('choice' in dataset) {
        this._handleChoiceAction(activeItems, item);
      }
    }
    event.preventDefault();
  };
  /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */
  Choices.prototype._onMouseOver = function (_a) {
    var target = _a.target;
    if (target instanceof HTMLElement && 'choice' in target.dataset) {
      this._highlightChoice(target);
    }
  };
  Choices.prototype._onClick = function (_a) {
    var target = _a.target;
    var clickWasWithinContainer = this.containerOuter.element.contains(target);
    if (clickWasWithinContainer) {
      if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
        if (this._isTextElement) {
          if (document.activeElement !== this.input.element) {
            this.input.focus();
          }
        } else {
          this.showDropdown();
          this.containerOuter.focus();
        }
      } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
        this.hideDropdown();
      }
    } else {
      var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
      if (hasHighlightedItems) {
        this.unhighlightAll();
      }
      this.containerOuter.removeFocusState();
      this.hideDropdown(true);
    }
  };
  Choices.prototype._onFocus = function (_a) {
    var _b;
    var _this = this;
    var target = _a.target;
    var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
    if (!focusWasWithinContainer) {
      return;
    }
    var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
      if (target === _this.input.element) {
        _this.containerOuter.addFocusState();
      }
    }, _b[constants_1.SELECT_ONE_TYPE] = function () {
      _this.containerOuter.addFocusState();
      if (target === _this.input.element) {
        _this.showDropdown(true);
      }
    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
      if (target === _this.input.element) {
        _this.showDropdown(true);
        // If element is a select box, the focused element is the container and the dropdown
        // isn't already open, focus and show dropdown
        _this.containerOuter.addFocusState();
      }
    }, _b);
    focusActions[this.passedElement.element.type]();
  };
  Choices.prototype._onBlur = function (_a) {
    var _b;
    var _this = this;
    var target = _a.target;
    var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
    if (blurWasWithinContainer && !this._isScrollingOnIe) {
      var activeItems = this._store.activeItems;
      var hasHighlightedItems_1 = activeItems.some(function (item) {
        return item.highlighted;
      });
      var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
        if (target === _this.input.element) {
          _this.containerOuter.removeFocusState();
          if (hasHighlightedItems_1) {
            _this.unhighlightAll();
          }
          _this.hideDropdown(true);
        }
      }, _b[constants_1.SELECT_ONE_TYPE] = function () {
        _this.containerOuter.removeFocusState();
        if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
          _this.hideDropdown(true);
        }
      }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
        if (target === _this.input.element) {
          _this.containerOuter.removeFocusState();
          _this.hideDropdown(true);
          if (hasHighlightedItems_1) {
            _this.unhighlightAll();
          }
        }
      }, _b);
      blurActions[this.passedElement.element.type]();
    } else {
      // On IE11, clicking the scollbar blurs our input and thus
      // closes the dropdown. To stop this, we refocus our input
      // if we know we are on IE *and* are scrolling.
      this._isScrollingOnIe = false;
      this.input.element.focus();
    }
  };
  Choices.prototype._onFormReset = function () {
    this._store.dispatch((0, misc_1.resetTo)(this._initialState));
  };
  Choices.prototype._highlightChoice = function (el) {
    var _this = this;
    if (el === void 0) {
      el = null;
    }
    var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));
    if (!choices.length) {
      return;
    }
    var passedEl = el;
    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
    // Remove any highlighted choices
    highlightedChoices.forEach(function (choice) {
      choice.classList.remove(_this.config.classNames.highlightedState);
      choice.setAttribute('aria-selected', 'false');
    });
    if (passedEl) {
      this._highlightPosition = choices.indexOf(passedEl);
    } else {
      // Highlight choice based on last known highlight location
      if (choices.length > this._highlightPosition) {
        // If we have an option to highlight
        passedEl = choices[this._highlightPosition];
      } else {
        // Otherwise highlight the option before
        passedEl = choices[choices.length - 1];
      }
      if (!passedEl) {
        passedEl = choices[0];
      }
    }
    passedEl.classList.add(this.config.classNames.highlightedState);
    passedEl.setAttribute('aria-selected', 'true');
    this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
      el: passedEl
    });
    if (this.dropdown.isActive) {
      // IE11 ignores aria-label and blocks virtual keyboard
      // if aria-activedescendant is set without a dropdown
      this.input.setActiveDescendant(passedEl.id);
      this.containerOuter.setActiveDescendant(passedEl.id);
    }
  };
  Choices.prototype._addItem = function (_a) {
    var value = _a.value,
      _b = _a.label,
      label = _b === void 0 ? null : _b,
      _c = _a.choiceId,
      choiceId = _c === void 0 ? -1 : _c,
      _d = _a.groupId,
      groupId = _d === void 0 ? -1 : _d,
      _e = _a.customProperties,
      customProperties = _e === void 0 ? {} : _e,
      _f = _a.placeholder,
      placeholder = _f === void 0 ? false : _f,
      _g = _a.keyCode,
      keyCode = _g === void 0 ? -1 : _g;
    var passedValue = typeof value === 'string' ? value.trim() : value;
    var items = this._store.items;
    var passedLabel = label || passedValue;
    var passedOptionId = choiceId || -1;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    var id = items ? items.length + 1 : 1;
    // If a prepended value has been passed, prepend it
    if (this.config.prependValue) {
      passedValue = this.config.prependValue + passedValue.toString();
    }
    // If an appended value has been passed, append it
    if (this.config.appendValue) {
      passedValue += this.config.appendValue.toString();
    }
    this._store.dispatch((0, items_1.addItem)({
      value: passedValue,
      label: passedLabel,
      id: id,
      choiceId: passedOptionId,
      groupId: groupId,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: keyCode
    }));
    if (this._isSelectOneElement) {
      this.removeActiveItems(id);
    }
    // Trigger change event
    this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
      id: id,
      value: passedValue,
      label: passedLabel,
      customProperties: customProperties,
      groupValue: group && group.value ? group.value : null,
      keyCode: keyCode
    });
  };
  Choices.prototype._removeItem = function (item) {
    var id = item.id,
      value = item.value,
      label = item.label,
      customProperties = item.customProperties,
      choiceId = item.choiceId,
      groupId = item.groupId;
    var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
    if (!id || !choiceId) {
      return;
    }
    this._store.dispatch((0, items_1.removeItem)(id, choiceId));
    this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
      id: id,
      value: value,
      label: label,
      customProperties: customProperties,
      groupValue: group && group.value ? group.value : null
    });
  };
  Choices.prototype._addChoice = function (_a) {
    var value = _a.value,
      _b = _a.label,
      label = _b === void 0 ? null : _b,
      _c = _a.isSelected,
      isSelected = _c === void 0 ? false : _c,
      _d = _a.isDisabled,
      isDisabled = _d === void 0 ? false : _d,
      _e = _a.groupId,
      groupId = _e === void 0 ? -1 : _e,
      _f = _a.customProperties,
      customProperties = _f === void 0 ? {} : _f,
      _g = _a.placeholder,
      placeholder = _g === void 0 ? false : _g,
      _h = _a.keyCode,
      keyCode = _h === void 0 ? -1 : _h;
    if (typeof value === 'undefined' || value === null) {
      return;
    }
    // Generate unique id
    var choices = this._store.choices;
    var choiceLabel = label || value;
    var choiceId = choices ? choices.length + 1 : 1;
    var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
    this._store.dispatch((0, choices_1.addChoice)({
      id: choiceId,
      groupId: groupId,
      elementId: choiceElementId,
      value: value,
      label: choiceLabel,
      disabled: isDisabled,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: keyCode
    }));
    if (isSelected) {
      this._addItem({
        value: value,
        label: choiceLabel,
        choiceId: choiceId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: keyCode
      });
    }
  };
  Choices.prototype._addGroup = function (_a) {
    var _this = this;
    var group = _a.group,
      id = _a.id,
      _b = _a.valueKey,
      valueKey = _b === void 0 ? 'value' : _b,
      _c = _a.labelKey,
      labelKey = _c === void 0 ? 'label' : _c;
    var groupChoices = (0, utils_1.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
    var groupId = id || Math.floor(new Date().valueOf() * Math.random());
    var isDisabled = group.disabled ? group.disabled : false;
    if (groupChoices) {
      this._store.dispatch((0, groups_1.addGroup)({
        value: group.label,
        id: groupId,
        active: true,
        disabled: isDisabled
      }));
      var addGroupChoices = function (choice) {
        var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
        _this._addChoice({
          value: choice[valueKey],
          label: (0, utils_1.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
          isSelected: choice.selected,
          isDisabled: isOptDisabled,
          groupId: groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder
        });
      };
      groupChoices.forEach(addGroupChoices);
    } else {
      this._store.dispatch((0, groups_1.addGroup)({
        value: group.label,
        id: group.id,
        active: false,
        disabled: group.disabled
      }));
    }
  };
  Choices.prototype._getTemplate = function (template) {
    var _a;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
  };
  Choices.prototype._createTemplates = function () {
    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
    var userTemplates = {};
    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
      userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
    }
    this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
  };
  Choices.prototype._createElements = function () {
    this.containerOuter = new components_1.Container({
      element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.containerInner = new components_1.Container({
      element: this._getTemplate('containerInner'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.input = new components_1.Input({
      element: this._getTemplate('input', this._placeholderValue),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      preventPaste: !this.config.paste
    });
    this.choiceList = new components_1.List({
      element: this._getTemplate('choiceList', this._isSelectOneElement)
    });
    this.itemList = new components_1.List({
      element: this._getTemplate('itemList', this._isSelectOneElement)
    });
    this.dropdown = new components_1.Dropdown({
      element: this._getTemplate('dropdown'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type
    });
  };
  Choices.prototype._createStructure = function () {
    // Hide original element
    this.passedElement.conceal();
    // Wrap input in container preserving DOM ordering
    this.containerInner.wrap(this.passedElement.element);
    // Wrapper inner container with outer container
    this.containerOuter.wrap(this.containerInner.element);
    if (this._isSelectOneElement) {
      this.input.placeholder = this.config.searchPlaceholderValue || '';
    } else if (this._placeholderValue) {
      this.input.placeholder = this._placeholderValue;
      this.input.setWidth();
    }
    this.containerOuter.element.appendChild(this.containerInner.element);
    this.containerOuter.element.appendChild(this.dropdown.element);
    this.containerInner.element.appendChild(this.itemList.element);
    if (!this._isTextElement) {
      this.dropdown.element.appendChild(this.choiceList.element);
    }
    if (!this._isSelectOneElement) {
      this.containerInner.element.appendChild(this.input.element);
    } else if (this.config.searchEnabled) {
      this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
    }
    if (this._isSelectElement) {
      this._highlightPosition = 0;
      this._isSearching = false;
      this._startLoading();
      if (this._presetGroups.length) {
        this._addPredefinedGroups(this._presetGroups);
      } else {
        this._addPredefinedChoices(this._presetChoices);
      }
      this._stopLoading();
    }
    if (this._isTextElement) {
      this._addPredefinedItems(this._presetItems);
    }
  };
  Choices.prototype._addPredefinedGroups = function (groups) {
    var _this = this;
    // If we have a placeholder option
    var placeholderChoice = this.passedElement.placeholderOption;
    if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === 'SELECT') {
      this._addChoice({
        value: placeholderChoice.value,
        label: placeholderChoice.innerHTML,
        isSelected: placeholderChoice.selected,
        isDisabled: placeholderChoice.disabled,
        placeholder: true
      });
    }
    groups.forEach(function (group) {
      return _this._addGroup({
        group: group,
        id: group.id || null
      });
    });
  };
  Choices.prototype._addPredefinedChoices = function (choices) {
    var _this = this;
    // If sorting is enabled or the user is searching, filter choices
    if (this.config.shouldSort) {
      choices.sort(this.config.sorter);
    }
    var hasSelectedChoice = choices.some(function (choice) {
      return choice.selected;
    });
    var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
      return choice.disabled === undefined || !choice.disabled;
    });
    choices.forEach(function (choice, index) {
      var _a = choice.value,
        value = _a === void 0 ? '' : _a,
        label = choice.label,
        customProperties = choice.customProperties,
        placeholder = choice.placeholder;
      if (_this._isSelectElement) {
        // If the choice is actually a group
        if (choice.choices) {
          _this._addGroup({
            group: choice,
            id: choice.id || null
          });
        } else {
          /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */
          var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
          var isSelected = shouldPreselect ? true : choice.selected;
          var isDisabled = choice.disabled;
          _this._addChoice({
            value: value,
            label: label,
            isSelected: !!isSelected,
            isDisabled: !!isDisabled,
            placeholder: !!placeholder,
            customProperties: customProperties
          });
        }
      } else {
        _this._addChoice({
          value: value,
          label: label,
          isSelected: !!choice.selected,
          isDisabled: !!choice.disabled,
          placeholder: !!choice.placeholder,
          customProperties: customProperties
        });
      }
    });
  };
  Choices.prototype._addPredefinedItems = function (items) {
    var _this = this;
    items.forEach(function (item) {
      if (typeof item === 'object' && item.value) {
        _this._addItem({
          value: item.value,
          label: item.label,
          choiceId: item.id,
          customProperties: item.customProperties,
          placeholder: item.placeholder
        });
      }
      if (typeof item === 'string') {
        _this._addItem({
          value: item
        });
      }
    });
  };
  Choices.prototype._setChoiceOrItem = function (item) {
    var _this = this;
    var itemType = (0, utils_1.getType)(item).toLowerCase();
    var handleType = {
      object: function () {
        if (!item.value) {
          return;
        }
        // If we are dealing with a select input, we need to create an option first
        // that is then selected. For text inputs we can just add items normally.
        if (!_this._isTextElement) {
          _this._addChoice({
            value: item.value,
            label: item.label,
            isSelected: true,
            isDisabled: false,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else {
          _this._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        }
      },
      string: function () {
        if (!_this._isTextElement) {
          _this._addChoice({
            value: item,
            label: item,
            isSelected: true,
            isDisabled: false
          });
        } else {
          _this._addItem({
            value: item
          });
        }
      }
    };
    handleType[itemType]();
  };
  Choices.prototype._findAndSelectChoiceByValue = function (value) {
    var _this = this;
    var choices = this._store.choices;
    // Check 'value' property exists and the choice isn't already selected
    var foundChoice = choices.find(function (choice) {
      return _this.config.valueComparer(choice.value, value);
    });
    if (foundChoice && !foundChoice.selected) {
      this._addItem({
        value: foundChoice.value,
        label: foundChoice.label,
        choiceId: foundChoice.id,
        groupId: foundChoice.groupId,
        customProperties: foundChoice.customProperties,
        placeholder: foundChoice.placeholder,
        keyCode: foundChoice.keyCode
      });
    }
  };
  Choices.prototype._generatePlaceholderValue = function () {
    if (this._isSelectElement && this.passedElement.placeholderOption) {
      var placeholderOption = this.passedElement.placeholderOption;
      return placeholderOption ? placeholderOption.text : null;
    }
    var _a = this.config,
      placeholder = _a.placeholder,
      placeholderValue = _a.placeholderValue;
    var dataset = this.passedElement.element.dataset;
    if (placeholder) {
      if (placeholderValue) {
        return placeholderValue;
      }
      if (dataset.placeholder) {
        return dataset.placeholder;
      }
    }
    return null;
  };
  return Choices;
}();
exports["default"] = Choices;

/***/ }),

/***/ 613:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_74916__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_1 = __nested_webpack_require_74916__(799);
var constants_1 = __nested_webpack_require_74916__(883);
var Container = /** @class */function () {
  function Container(_a) {
    var element = _a.element,
      type = _a.type,
      classNames = _a.classNames,
      position = _a.position;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.position = position;
    this.isOpen = false;
    this.isFlipped = false;
    this.isFocussed = false;
    this.isDisabled = false;
    this.isLoading = false;
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  Container.prototype.addEventListeners = function () {
    this.element.addEventListener('focus', this._onFocus);
    this.element.addEventListener('blur', this._onBlur);
  };
  Container.prototype.removeEventListeners = function () {
    this.element.removeEventListener('focus', this._onFocus);
    this.element.removeEventListener('blur', this._onBlur);
  };
  /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   */
  Container.prototype.shouldFlip = function (dropdownPos) {
    if (typeof dropdownPos !== 'number') {
      return false;
    }
    // If flip is enabled and the dropdown bottom position is
    // greater than the window height flip the dropdown.
    var shouldFlip = false;
    if (this.position === 'auto') {
      shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
    } else if (this.position === 'top') {
      shouldFlip = true;
    }
    return shouldFlip;
  };
  Container.prototype.setActiveDescendant = function (activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };
  Container.prototype.removeActiveDescendant = function () {
    this.element.removeAttribute('aria-activedescendant');
  };
  Container.prototype.open = function (dropdownPos) {
    this.element.classList.add(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isOpen = true;
    if (this.shouldFlip(dropdownPos)) {
      this.element.classList.add(this.classNames.flippedState);
      this.isFlipped = true;
    }
  };
  Container.prototype.close = function () {
    this.element.classList.remove(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'false');
    this.removeActiveDescendant();
    this.isOpen = false;
    // A dropdown flips if it does not have space within the page
    if (this.isFlipped) {
      this.element.classList.remove(this.classNames.flippedState);
      this.isFlipped = false;
    }
  };
  Container.prototype.focus = function () {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };
  Container.prototype.addFocusState = function () {
    this.element.classList.add(this.classNames.focusState);
  };
  Container.prototype.removeFocusState = function () {
    this.element.classList.remove(this.classNames.focusState);
  };
  Container.prototype.enable = function () {
    this.element.classList.remove(this.classNames.disabledState);
    this.element.removeAttribute('aria-disabled');
    if (this.type === constants_1.SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '0');
    }
    this.isDisabled = false;
  };
  Container.prototype.disable = function () {
    this.element.classList.add(this.classNames.disabledState);
    this.element.setAttribute('aria-disabled', 'true');
    if (this.type === constants_1.SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '-1');
    }
    this.isDisabled = true;
  };
  Container.prototype.wrap = function (element) {
    (0, utils_1.wrap)(element, this.element);
  };
  Container.prototype.unwrap = function (element) {
    if (this.element.parentNode) {
      // Move passed element outside this element
      this.element.parentNode.insertBefore(element, this.element);
      // Remove this element
      this.element.parentNode.removeChild(this.element);
    }
  };
  Container.prototype.addLoadingState = function () {
    this.element.classList.add(this.classNames.loadingState);
    this.element.setAttribute('aria-busy', 'true');
    this.isLoading = true;
  };
  Container.prototype.removeLoadingState = function () {
    this.element.classList.remove(this.classNames.loadingState);
    this.element.removeAttribute('aria-busy');
    this.isLoading = false;
  };
  Container.prototype._onFocus = function () {
    this.isFocussed = true;
  };
  Container.prototype._onBlur = function () {
    this.isFocussed = false;
  };
  return Container;
}();
exports["default"] = Container;

/***/ }),

/***/ 217:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Dropdown = /** @class */function () {
  function Dropdown(_a) {
    var element = _a.element,
      type = _a.type,
      classNames = _a.classNames;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.isActive = false;
  }
  Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
    /**
     * Bottom position of dropdown in viewport coordinates
     */
    get: function () {
      return this.element.getBoundingClientRect().bottom;
    },
    enumerable: false,
    configurable: true
  });
  Dropdown.prototype.getChild = function (selector) {
    return this.element.querySelector(selector);
  };
  /**
   * Show dropdown to user by adding active state class
   */
  Dropdown.prototype.show = function () {
    this.element.classList.add(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isActive = true;
    return this;
  };
  /**
   * Hide dropdown from user
   */
  Dropdown.prototype.hide = function () {
    this.element.classList.remove(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'false');
    this.isActive = false;
    return this;
  };
  return Dropdown;
}();
exports["default"] = Dropdown;

/***/ }),

/***/ 520:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_81090__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
var dropdown_1 = __importDefault(__nested_webpack_require_81090__(217));
exports.Dropdown = dropdown_1.default;
var container_1 = __importDefault(__nested_webpack_require_81090__(613));
exports.Container = container_1.default;
var input_1 = __importDefault(__nested_webpack_require_81090__(11));
exports.Input = input_1.default;
var list_1 = __importDefault(__nested_webpack_require_81090__(624));
exports.List = list_1.default;
var wrapped_input_1 = __importDefault(__nested_webpack_require_81090__(541));
exports.WrappedInput = wrapped_input_1.default;
var wrapped_select_1 = __importDefault(__nested_webpack_require_81090__(982));
exports.WrappedSelect = wrapped_select_1.default;

/***/ }),

/***/ 11:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_82125__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_1 = __nested_webpack_require_82125__(799);
var constants_1 = __nested_webpack_require_82125__(883);
var Input = /** @class */function () {
  function Input(_a) {
    var element = _a.element,
      type = _a.type,
      classNames = _a.classNames,
      preventPaste = _a.preventPaste;
    this.element = element;
    this.type = type;
    this.classNames = classNames;
    this.preventPaste = preventPaste;
    this.isFocussed = this.element.isEqualNode(document.activeElement);
    this.isDisabled = element.disabled;
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  Object.defineProperty(Input.prototype, "placeholder", {
    set: function (placeholder) {
      this.element.placeholder = placeholder;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "value", {
    get: function () {
      return (0, utils_1.sanitise)(this.element.value);
    },
    set: function (value) {
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "rawValue", {
    get: function () {
      return this.element.value;
    },
    enumerable: false,
    configurable: true
  });
  Input.prototype.addEventListeners = function () {
    this.element.addEventListener('paste', this._onPaste);
    this.element.addEventListener('input', this._onInput, {
      passive: true
    });
    this.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.addEventListener('blur', this._onBlur, {
      passive: true
    });
  };
  Input.prototype.removeEventListeners = function () {
    this.element.removeEventListener('input', this._onInput);
    this.element.removeEventListener('paste', this._onPaste);
    this.element.removeEventListener('focus', this._onFocus);
    this.element.removeEventListener('blur', this._onBlur);
  };
  Input.prototype.enable = function () {
    this.element.removeAttribute('disabled');
    this.isDisabled = false;
  };
  Input.prototype.disable = function () {
    this.element.setAttribute('disabled', '');
    this.isDisabled = true;
  };
  Input.prototype.focus = function () {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };
  Input.prototype.blur = function () {
    if (this.isFocussed) {
      this.element.blur();
    }
  };
  Input.prototype.clear = function (setWidth) {
    if (setWidth === void 0) {
      setWidth = true;
    }
    if (this.element.value) {
      this.element.value = '';
    }
    if (setWidth) {
      this.setWidth();
    }
    return this;
  };
  /**
   * Set the correct input width based on placeholder
   * value or input value
   */
  Input.prototype.setWidth = function () {
    // Resize input to contents or placeholder
    var _a = this.element,
      style = _a.style,
      value = _a.value,
      placeholder = _a.placeholder;
    style.minWidth = "".concat(placeholder.length + 1, "ch");
    style.width = "".concat(value.length + 1, "ch");
  };
  Input.prototype.setActiveDescendant = function (activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };
  Input.prototype.removeActiveDescendant = function () {
    this.element.removeAttribute('aria-activedescendant');
  };
  Input.prototype._onInput = function () {
    if (this.type !== constants_1.SELECT_ONE_TYPE) {
      this.setWidth();
    }
  };
  Input.prototype._onPaste = function (event) {
    if (this.preventPaste) {
      event.preventDefault();
    }
  };
  Input.prototype._onFocus = function () {
    this.isFocussed = true;
  };
  Input.prototype._onBlur = function () {
    this.isFocussed = false;
  };
  return Input;
}();
exports["default"] = Input;

/***/ }),

/***/ 624:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_86127__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var constants_1 = __nested_webpack_require_86127__(883);
var List = /** @class */function () {
  function List(_a) {
    var element = _a.element;
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }
  List.prototype.clear = function () {
    this.element.innerHTML = '';
  };
  List.prototype.append = function (node) {
    this.element.appendChild(node);
  };
  List.prototype.getChild = function (selector) {
    return this.element.querySelector(selector);
  };
  List.prototype.hasChildren = function () {
    return this.element.hasChildNodes();
  };
  List.prototype.scrollToTop = function () {
    this.element.scrollTop = 0;
  };
  List.prototype.scrollToChildElement = function (element, direction) {
    var _this = this;
    if (!element) {
      return;
    }
    var listHeight = this.element.offsetHeight;
    // Scroll position of dropdown
    var listScrollPosition = this.element.scrollTop + listHeight;
    var elementHeight = element.offsetHeight;
    // Distance from bottom of element to top of parent
    var elementPos = element.offsetTop + elementHeight;
    // Difference between the element and scroll position
    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
    requestAnimationFrame(function () {
      _this._animateScroll(destination, direction);
    });
  };
  List.prototype._scrollDown = function (scrollPos, strength, destination) {
    var easing = (destination - scrollPos) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos + distance;
  };
  List.prototype._scrollUp = function (scrollPos, strength, destination) {
    var easing = (scrollPos - destination) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos - distance;
  };
  List.prototype._animateScroll = function (destination, direction) {
    var _this = this;
    var strength = constants_1.SCROLLING_SPEED;
    var choiceListScrollTop = this.element.scrollTop;
    var continueAnimation = false;
    if (direction > 0) {
      this._scrollDown(choiceListScrollTop, strength, destination);
      if (choiceListScrollTop < destination) {
        continueAnimation = true;
      }
    } else {
      this._scrollUp(choiceListScrollTop, strength, destination);
      if (choiceListScrollTop > destination) {
        continueAnimation = true;
      }
    }
    if (continueAnimation) {
      requestAnimationFrame(function () {
        _this._animateScroll(destination, direction);
      });
    }
  };
  return List;
}();
exports["default"] = List;

/***/ }),

/***/ 730:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_88948__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_1 = __nested_webpack_require_88948__(799);
var WrappedElement = /** @class */function () {
  function WrappedElement(_a) {
    var element = _a.element,
      classNames = _a.classNames;
    this.element = element;
    this.classNames = classNames;
    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
      throw new TypeError('Invalid element passed');
    }
    this.isDisabled = false;
  }
  Object.defineProperty(WrappedElement.prototype, "isActive", {
    get: function () {
      return this.element.dataset.choice === 'active';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedElement.prototype, "dir", {
    get: function () {
      return this.element.dir;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedElement.prototype, "value", {
    get: function () {
      return this.element.value;
    },
    set: function (value) {
      // you must define setter here otherwise it will be readonly property
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });
  WrappedElement.prototype.conceal = function () {
    // Hide passed input
    this.element.classList.add(this.classNames.input);
    this.element.hidden = true;
    // Remove element from tab index
    this.element.tabIndex = -1;
    // Backup original styles if any
    var origStyle = this.element.getAttribute('style');
    if (origStyle) {
      this.element.setAttribute('data-choice-orig-style', origStyle);
    }
    this.element.setAttribute('data-choice', 'active');
  };
  WrappedElement.prototype.reveal = function () {
    // Reinstate passed element
    this.element.classList.remove(this.classNames.input);
    this.element.hidden = false;
    this.element.removeAttribute('tabindex');
    // Recover original styles if any
    var origStyle = this.element.getAttribute('data-choice-orig-style');
    if (origStyle) {
      this.element.removeAttribute('data-choice-orig-style');
      this.element.setAttribute('style', origStyle);
    } else {
      this.element.removeAttribute('style');
    }
    this.element.removeAttribute('data-choice');
    // Re-assign values - this is weird, I know
    // @todo Figure out why we need to do this
    this.element.value = this.element.value; // eslint-disable-line no-self-assign
  };

  WrappedElement.prototype.enable = function () {
    this.element.removeAttribute('disabled');
    this.element.disabled = false;
    this.isDisabled = false;
  };
  WrappedElement.prototype.disable = function () {
    this.element.setAttribute('disabled', '');
    this.element.disabled = true;
    this.isDisabled = true;
  };
  WrappedElement.prototype.triggerEvent = function (eventType, data) {
    (0, utils_1.dispatchEvent)(this.element, eventType, data);
  };
  return WrappedElement;
}();
exports["default"] = WrappedElement;

/***/ }),

/***/ 541:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_92021__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var wrapped_element_1 = __importDefault(__nested_webpack_require_92021__(730));
var WrappedInput = /** @class */function (_super) {
  __extends(WrappedInput, _super);
  function WrappedInput(_a) {
    var element = _a.element,
      classNames = _a.classNames,
      delimiter = _a.delimiter;
    var _this = _super.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.delimiter = delimiter;
    return _this;
  }
  Object.defineProperty(WrappedInput.prototype, "value", {
    get: function () {
      return this.element.value;
    },
    set: function (value) {
      this.element.setAttribute('value', value);
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });
  return WrappedInput;
}(wrapped_element_1.default);
exports["default"] = WrappedInput;

/***/ }),

/***/ 982:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_93875__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var wrapped_element_1 = __importDefault(__nested_webpack_require_93875__(730));
var WrappedSelect = /** @class */function (_super) {
  __extends(WrappedSelect, _super);
  function WrappedSelect(_a) {
    var element = _a.element,
      classNames = _a.classNames,
      template = _a.template;
    var _this = _super.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.template = template;
    return _this;
  }
  Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
    get: function () {
      return this.element.querySelector('option[value=""]') ||
      // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
      this.element.querySelector('option[placeholder]');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
    get: function () {
      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedSelect.prototype, "options", {
    get: function () {
      return Array.from(this.element.options);
    },
    set: function (options) {
      var _this = this;
      var fragment = document.createDocumentFragment();
      var addOptionToFragment = function (data) {
        // Create a standard select option
        var option = _this.template(data);
        // Append it to fragment
        fragment.appendChild(option);
      };
      // Add each list item to list
      options.forEach(function (optionData) {
        return addOptionToFragment(optionData);
      });
      this.appendDocFragment(fragment);
    },
    enumerable: false,
    configurable: true
  });
  WrappedSelect.prototype.appendDocFragment = function (fragment) {
    this.element.innerHTML = '';
    this.element.appendChild(fragment);
  };
  return WrappedSelect;
}(wrapped_element_1.default);
exports["default"] = WrappedSelect;

/***/ }),

/***/ 883:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
exports.EVENTS = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem',
  highlightChoice: 'highlightChoice',
  unhighlightItem: 'unhighlightItem'
};
exports.ACTION_TYPES = {
  ADD_CHOICE: 'ADD_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
  CLEAR_ALL: 'CLEAR_ALL',
  RESET_TO: 'RESET_TO',
  SET_IS_LOADING: 'SET_IS_LOADING'
};
exports.KEY_CODES = {
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
exports.TEXT_TYPE = 'text';
exports.SELECT_ONE_TYPE = 'select-one';
exports.SELECT_MULTIPLE_TYPE = 'select-multiple';
exports.SCROLLING_SPEED = 4;

/***/ }),

/***/ 789:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_98200__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
var utils_1 = __nested_webpack_require_98200__(799);
exports.DEFAULT_CLASSNAMES = {
  containerOuter: 'choices',
  containerInner: 'choices__inner',
  input: 'choices__input',
  inputCloned: 'choices__input--cloned',
  list: 'choices__list',
  listItems: 'choices__list--multiple',
  listSingle: 'choices__list--single',
  listDropdown: 'choices__list--dropdown',
  item: 'choices__item',
  itemSelectable: 'choices__item--selectable',
  itemDisabled: 'choices__item--disabled',
  itemChoice: 'choices__item--choice',
  placeholder: 'choices__placeholder',
  group: 'choices__group',
  groupHeading: 'choices__heading',
  button: 'choices__button',
  activeState: 'is-active',
  focusState: 'is-focused',
  openState: 'is-open',
  disabledState: 'is-disabled',
  highlightedState: 'is-highlighted',
  selectedState: 'is-selected',
  flippedState: 'is-flipped',
  loadingState: 'is-loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices'
};
exports.DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  addItemFilter: null,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  allowHTML: true,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sorter: utils_1.sortByAlpha,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added',
  customAddItemText: 'Only values matching specific conditions can be added',
  addItemText: function (value) {
    return "Press Enter to add <b>\"".concat((0, utils_1.sanitise)(value), "\"</b>");
  },
  maxItemText: function (maxItemCount) {
    return "Only ".concat(maxItemCount, " values can be added");
  },
  valueComparer: function (value1, value2) {
    return value1 === value2;
  },
  fuseOptions: {
    includeScore: true
  },
  labelId: '',
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: exports.DEFAULT_CLASSNAMES
};

/***/ }),

/***/ 18:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 978:
/***/ (function(__unused_webpack_module, exports) {



/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 948:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 359:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 285:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 533:
/***/ (function(__unused_webpack_module, exports) {



/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 187:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_101824__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__nested_webpack_require_101824__(18), exports);
__exportStar(__nested_webpack_require_101824__(978), exports);
__exportStar(__nested_webpack_require_101824__(948), exports);
__exportStar(__nested_webpack_require_101824__(359), exports);
__exportStar(__nested_webpack_require_101824__(285), exports);
__exportStar(__nested_webpack_require_101824__(533), exports);
__exportStar(__nested_webpack_require_101824__(287), exports);
__exportStar(__nested_webpack_require_101824__(132), exports);
__exportStar(__nested_webpack_require_101824__(837), exports);
__exportStar(__nested_webpack_require_101824__(598), exports);
__exportStar(__nested_webpack_require_101824__(369), exports);
__exportStar(__nested_webpack_require_101824__(37), exports);
__exportStar(__nested_webpack_require_101824__(47), exports);
__exportStar(__nested_webpack_require_101824__(923), exports);
__exportStar(__nested_webpack_require_101824__(876), exports);

/***/ }),

/***/ 287:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 132:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 837:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 598:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 37:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 369:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 47:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 923:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 876:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 799:
/***/ (function(__unused_webpack_module, exports) {



/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
exports.getRandomNumber = getRandomNumber;
var generateChars = function (length) {
  return Array.from({
    length: length
  }, function () {
    return (0, exports.getRandomNumber)(0, 36).toString(36);
  }).join('');
};
exports.generateChars = generateChars;
var generateId = function (element, prefix) {
  var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = "".concat(prefix, "-").concat(id);
  return id;
};
exports.generateId = generateId;
var getType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
exports.getType = getType;
var isType = function (type, obj) {
  return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
};
exports.isType = isType;
var wrap = function (element, wrapper) {
  if (wrapper === void 0) {
    wrapper = document.createElement('div');
  }
  if (element.parentNode) {
    if (element.nextSibling) {
      element.parentNode.insertBefore(wrapper, element.nextSibling);
    } else {
      element.parentNode.appendChild(wrapper);
    }
  }
  return wrapper.appendChild(element);
};
exports.wrap = wrap;
var getAdjacentEl = function (startEl, selector, direction) {
  if (direction === void 0) {
    direction = 1;
  }
  var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
  var sibling = startEl[prop];
  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling;
    }
    sibling = sibling[prop];
  }
  return sibling;
};
exports.getAdjacentEl = getAdjacentEl;
var isScrolledIntoView = function (element, parent, direction) {
  if (direction === void 0) {
    direction = 1;
  }
  if (!element) {
    return false;
  }
  var isVisible;
  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
  } else {
    // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
  }
  return isVisible;
};
exports.isScrolledIntoView = isScrolledIntoView;
var sanitise = function (value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};
exports.sanitise = sanitise;
exports.strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    var cleanedInput = str.trim();
    tmpEl.innerHTML = cleanedInput;
    var firldChild = tmpEl.children[0];
    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }
    return firldChild;
  };
}();
var sortByAlpha = function (_a, _b) {
  var value = _a.value,
    _c = _a.label,
    label = _c === void 0 ? value : _c;
  var value2 = _b.value,
    _d = _b.label,
    label2 = _d === void 0 ? value2 : _d;
  return label.localeCompare(label2, [], {
    sensitivity: 'base',
    ignorePunctuation: true,
    numeric: true
  });
};
exports.sortByAlpha = sortByAlpha;
var sortByScore = function (a, b) {
  var _a = a.score,
    scoreA = _a === void 0 ? 0 : _a;
  var _b = b.score,
    scoreB = _b === void 0 ? 0 : _b;
  return scoreA - scoreB;
};
exports.sortByScore = sortByScore;
var dispatchEvent = function (element, type, customArgs) {
  if (customArgs === void 0) {
    customArgs = null;
  }
  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};
exports.dispatchEvent = dispatchEvent;
var existsInArray = function (array, value, key) {
  if (key === void 0) {
    key = 'value';
  }
  return array.some(function (item) {
    if (typeof value === 'string') {
      return item[key] === value.trim();
    }
    return item[key] === value;
  });
};
exports.existsInArray = existsInArray;
var cloneObject = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};
exports.cloneObject = cloneObject;
/**
 * Returns an array of keys present on the first but missing on the second object
 */
var diff = function (a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.filter(function (i) {
    return bKeys.indexOf(i) < 0;
  });
};
exports.diff = diff;
var parseCustomProperties = function (customProperties) {
  if (typeof customProperties !== 'undefined') {
    try {
      return JSON.parse(customProperties);
    } catch (e) {
      return customProperties;
    }
  }
  return {};
};
exports.parseCustomProperties = parseCustomProperties;

/***/ }),

/***/ 273:
/***/ (function(__unused_webpack_module, exports) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = [];
function choices(state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'ADD_CHOICE':
      {
        var addChoiceAction = action;
        var choice = {
          id: addChoiceAction.id,
          elementId: addChoiceAction.elementId,
          groupId: addChoiceAction.groupId,
          value: addChoiceAction.value,
          label: addChoiceAction.label || addChoiceAction.value,
          disabled: addChoiceAction.disabled || false,
          selected: false,
          active: true,
          score: 9999,
          customProperties: addChoiceAction.customProperties,
          placeholder: addChoiceAction.placeholder || false
        };
        /*
          A disabled choice appears in the choice dropdown but cannot be selected
          A selected choice has been added to the passed input's value (added as an item)
          An active choice appears within the choice dropdown
        */
        return __spreadArray(__spreadArray([], state, true), [choice], false);
      }
    case 'ADD_ITEM':
      {
        var addItemAction_1 = action;
        // When an item is added and it has an associated choice,
        // we want to disable it so it can't be chosen again
        if (addItemAction_1.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;
            if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
              choice.selected = true;
            }
            return choice;
          });
        }
        return state;
      }
    case 'REMOVE_ITEM':
      {
        var removeItemAction_1 = action;
        // When an item is removed and it has an associated choice,
        // we want to re-enable it so it can be chosen again
        if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;
            if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
              choice.selected = false;
            }
            return choice;
          });
        }
        return state;
      }
    case 'FILTER_CHOICES':
      {
        var filterChoicesAction_1 = action;
        return state.map(function (obj) {
          var choice = obj;
          // Set active state based on whether choice is
          // within filtered results
          choice.active = filterChoicesAction_1.results.some(function (_a) {
            var item = _a.item,
              score = _a.score;
            if (item.id === choice.id) {
              choice.score = score;
              return true;
            }
            return false;
          });
          return choice;
        });
      }
    case 'ACTIVATE_CHOICES':
      {
        var activateChoicesAction_1 = action;
        return state.map(function (obj) {
          var choice = obj;
          choice.active = activateChoicesAction_1.active;
          return choice;
        });
      }
    case 'CLEAR_CHOICES':
      {
        return exports.defaultState;
      }
    default:
      {
        return state;
      }
  }
}
exports["default"] = choices;

/***/ }),

/***/ 871:
/***/ (function(__unused_webpack_module, exports) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = [];
function groups(state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'ADD_GROUP':
      {
        var addGroupAction = action;
        return __spreadArray(__spreadArray([], state, true), [{
          id: addGroupAction.id,
          value: addGroupAction.value,
          active: addGroupAction.active,
          disabled: addGroupAction.disabled
        }], false);
      }
    case 'CLEAR_CHOICES':
      {
        return [];
      }
    default:
      {
        return state;
      }
  }
}
exports["default"] = groups;

/***/ }),

/***/ 655:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_114916__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
var redux_1 = __nested_webpack_require_114916__(791);
var items_1 = __importDefault(__nested_webpack_require_114916__(52));
var groups_1 = __importDefault(__nested_webpack_require_114916__(871));
var choices_1 = __importDefault(__nested_webpack_require_114916__(273));
var loading_1 = __importDefault(__nested_webpack_require_114916__(502));
var utils_1 = __nested_webpack_require_114916__(799);
exports.defaultState = {
  groups: [],
  items: [],
  choices: [],
  loading: false
};
var appReducer = (0, redux_1.combineReducers)({
  items: items_1.default,
  groups: groups_1.default,
  choices: choices_1.default,
  loading: loading_1.default
});
var rootReducer = function (passedState, action) {
  var state = passedState;
  // If we are clearing all items, groups and options we reassign
  // state and then pass that state to our proper reducer. This isn't
  // mutating our actual state
  // See: http://stackoverflow.com/a/35641992
  if (action.type === 'CLEAR_ALL') {
    state = exports.defaultState;
  } else if (action.type === 'RESET_TO') {
    return (0, utils_1.cloneObject)(action.state);
  }
  return appReducer(state, action);
};
exports["default"] = rootReducer;

/***/ }),

/***/ 52:
/***/ (function(__unused_webpack_module, exports) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = [];
function items(state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'ADD_ITEM':
      {
        var addItemAction = action;
        // Add object to items array
        var newState = __spreadArray(__spreadArray([], state, true), [{
          id: addItemAction.id,
          choiceId: addItemAction.choiceId,
          groupId: addItemAction.groupId,
          value: addItemAction.value,
          label: addItemAction.label,
          active: true,
          highlighted: false,
          customProperties: addItemAction.customProperties,
          placeholder: addItemAction.placeholder || false,
          keyCode: null
        }], false);
        return newState.map(function (obj) {
          var item = obj;
          item.highlighted = false;
          return item;
        });
      }
    case 'REMOVE_ITEM':
      {
        // Set item to inactive
        return state.map(function (obj) {
          var item = obj;
          if (item.id === action.id) {
            item.active = false;
          }
          return item;
        });
      }
    case 'HIGHLIGHT_ITEM':
      {
        var highlightItemAction_1 = action;
        return state.map(function (obj) {
          var item = obj;
          if (item.id === highlightItemAction_1.id) {
            item.highlighted = highlightItemAction_1.highlighted;
          }
          return item;
        });
      }
    default:
      {
        return state;
      }
  }
}
exports["default"] = items;

/***/ }),

/***/ 502:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = false;
var general = function (state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'SET_IS_LOADING':
      {
        return action.isLoading;
      }
    default:
      {
        return state;
      }
  }
};
exports["default"] = general;

/***/ }),

/***/ 744:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_119022__) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint-disable @typescript-eslint/no-explicit-any */
var redux_1 = __nested_webpack_require_119022__(791);
var index_1 = __importDefault(__nested_webpack_require_119022__(655));
var Store = /** @class */function () {
  function Store() {
    this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  /**
   * Subscribe store to function call (wrapped Redux method)
   */
  Store.prototype.subscribe = function (onChange) {
    this._store.subscribe(onChange);
  };
  /**
   * Dispatch event to store (wrapped Redux method)
   */
  Store.prototype.dispatch = function (action) {
    this._store.dispatch(action);
  };
  Object.defineProperty(Store.prototype, "state", {
    /**
     * Get store object (wrapping Redux method)
     */
    get: function () {
      return this._store.getState();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "items", {
    /**
     * Get items from store
     */
    get: function () {
      return this.state.items;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeItems", {
    /**
     * Get active items from store
     */
    get: function () {
      return this.items.filter(function (item) {
        return item.active === true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "highlightedActiveItems", {
    /**
     * Get highlighted items from store
     */
    get: function () {
      return this.items.filter(function (item) {
        return item.active && item.highlighted;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "choices", {
    /**
     * Get choices from store
     */
    get: function () {
      return this.state.choices;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeChoices", {
    /**
     * Get active choices from store
     */
    get: function () {
      return this.choices.filter(function (choice) {
        return choice.active === true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "selectableChoices", {
    /**
     * Get selectable choices from store
     */
    get: function () {
      return this.choices.filter(function (choice) {
        return choice.disabled !== true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "searchableChoices", {
    /**
     * Get choices that can be searched (excluding placeholders)
     */
    get: function () {
      return this.selectableChoices.filter(function (choice) {
        return choice.placeholder !== true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "placeholderChoice", {
    /**
     * Get placeholder choice from store
     */
    get: function () {
      return __spreadArray([], this.choices, true).reverse().find(function (choice) {
        return choice.placeholder === true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "groups", {
    /**
     * Get groups from store
     */
    get: function () {
      return this.state.groups;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeGroups", {
    /**
     * Get active groups from store
     */
    get: function () {
      var _a = this,
        groups = _a.groups,
        choices = _a.choices;
      return groups.filter(function (group) {
        var isActive = group.active === true && group.disabled === false;
        var hasActiveOptions = choices.some(function (choice) {
          return choice.active === true && choice.disabled === false;
        });
        return isActive && hasActiveOptions;
      }, []);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Get loading state from store
   */
  Store.prototype.isLoading = function () {
    return this.state.loading;
  };
  /**
   * Get single choice by it's ID
   */
  Store.prototype.getChoiceById = function (id) {
    return this.activeChoices.find(function (choice) {
      return choice.id === parseInt(id, 10);
    });
  };
  /**
   * Get group by group id
   */
  Store.prototype.getGroupById = function (id) {
    return this.groups.find(function (group) {
      return group.id === id;
    });
  };
  return Store;
}();
exports["default"] = Store;

/***/ }),

/***/ 686:
/***/ (function(__unused_webpack_module, exports) {



/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var templates = {
  containerOuter: function (_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
    var containerOuter = _a.classNames.containerOuter;
    var div = Object.assign(document.createElement('div'), {
      className: containerOuter
    });
    div.dataset.type = passedElementType;
    if (dir) {
      div.dir = dir;
    }
    if (isSelectOneElement) {
      div.tabIndex = 0;
    }
    if (isSelectElement) {
      div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
      if (searchEnabled) {
        div.setAttribute('aria-autocomplete', 'list');
      }
    }
    div.setAttribute('aria-haspopup', 'true');
    div.setAttribute('aria-expanded', 'false');
    if (labelId) {
      div.setAttribute('aria-labelledby', labelId);
    }
    return div;
  },
  containerInner: function (_a) {
    var containerInner = _a.classNames.containerInner;
    return Object.assign(document.createElement('div'), {
      className: containerInner
    });
  },
  itemList: function (_a, isSelectOneElement) {
    var _b = _a.classNames,
      list = _b.list,
      listSingle = _b.listSingle,
      listItems = _b.listItems;
    return Object.assign(document.createElement('div'), {
      className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
    });
  },
  placeholder: function (_a, value) {
    var _b;
    var allowHTML = _a.allowHTML,
      placeholder = _a.classNames.placeholder;
    return Object.assign(document.createElement('div'), (_b = {
      className: placeholder
    }, _b[allowHTML ? 'innerHTML' : 'innerText'] = value, _b));
  },
  item: function (_a, _b, removeItemButton) {
    var _c, _d;
    var allowHTML = _a.allowHTML,
      _e = _a.classNames,
      item = _e.item,
      button = _e.button,
      highlightedState = _e.highlightedState,
      itemSelectable = _e.itemSelectable,
      placeholder = _e.placeholder;
    var id = _b.id,
      value = _b.value,
      label = _b.label,
      customProperties = _b.customProperties,
      active = _b.active,
      disabled = _b.disabled,
      highlighted = _b.highlighted,
      isPlaceholder = _b.placeholder;
    var div = Object.assign(document.createElement('div'), (_c = {
      className: item
    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c));
    Object.assign(div.dataset, {
      item: '',
      id: id,
      value: value,
      customProperties: customProperties
    });
    if (active) {
      div.setAttribute('aria-selected', 'true');
    }
    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }
    if (isPlaceholder) {
      div.classList.add(placeholder);
    }
    div.classList.add(highlighted ? highlightedState : itemSelectable);
    if (removeItemButton) {
      if (disabled) {
        div.classList.remove(itemSelectable);
      }
      div.dataset.deletable = '';
      /** @todo This MUST be localizable, not hardcoded! */
      var REMOVE_ITEM_TEXT = 'Remove item';
      var removeButton = Object.assign(document.createElement('button'), (_d = {
        type: 'button',
        className: button
      }, _d[allowHTML ? 'innerHTML' : 'innerText'] = REMOVE_ITEM_TEXT, _d));
      removeButton.setAttribute('aria-label', "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
      removeButton.dataset.button = '';
      div.appendChild(removeButton);
    }
    return div;
  },
  choiceList: function (_a, isSelectOneElement) {
    var list = _a.classNames.list;
    var div = Object.assign(document.createElement('div'), {
      className: list
    });
    if (!isSelectOneElement) {
      div.setAttribute('aria-multiselectable', 'true');
    }
    div.setAttribute('role', 'listbox');
    return div;
  },
  choiceGroup: function (_a, _b) {
    var _c;
    var allowHTML = _a.allowHTML,
      _d = _a.classNames,
      group = _d.group,
      groupHeading = _d.groupHeading,
      itemDisabled = _d.itemDisabled;
    var id = _b.id,
      value = _b.value,
      disabled = _b.disabled;
    var div = Object.assign(document.createElement('div'), {
      className: "".concat(group, " ").concat(disabled ? itemDisabled : '')
    });
    div.setAttribute('role', 'group');
    Object.assign(div.dataset, {
      group: '',
      id: id,
      value: value
    });
    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }
    div.appendChild(Object.assign(document.createElement('div'), (_c = {
      className: groupHeading
    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = value, _c)));
    return div;
  },
  choice: function (_a, _b, selectText) {
    var _c;
    var allowHTML = _a.allowHTML,
      _d = _a.classNames,
      item = _d.item,
      itemChoice = _d.itemChoice,
      itemSelectable = _d.itemSelectable,
      selectedState = _d.selectedState,
      itemDisabled = _d.itemDisabled,
      placeholder = _d.placeholder;
    var id = _b.id,
      value = _b.value,
      label = _b.label,
      groupId = _b.groupId,
      elementId = _b.elementId,
      isDisabled = _b.disabled,
      isSelected = _b.selected,
      isPlaceholder = _b.placeholder;
    var div = Object.assign(document.createElement('div'), (_c = {
      id: elementId
    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
    if (isSelected) {
      div.classList.add(selectedState);
    }
    if (isPlaceholder) {
      div.classList.add(placeholder);
    }
    div.setAttribute('role', groupId && groupId > 0 ? 'treeitem' : 'option');
    Object.assign(div.dataset, {
      choice: '',
      id: id,
      value: value,
      selectText: selectText
    });
    if (isDisabled) {
      div.classList.add(itemDisabled);
      div.dataset.choiceDisabled = '';
      div.setAttribute('aria-disabled', 'true');
    } else {
      div.classList.add(itemSelectable);
      div.dataset.choiceSelectable = '';
    }
    return div;
  },
  input: function (_a, placeholderValue) {
    var _b = _a.classNames,
      input = _b.input,
      inputCloned = _b.inputCloned;
    var inp = Object.assign(document.createElement('input'), {
      type: 'search',
      name: 'search_terms',
      className: "".concat(input, " ").concat(inputCloned),
      autocomplete: 'off',
      autocapitalize: 'off',
      spellcheck: false
    });
    inp.setAttribute('role', 'textbox');
    inp.setAttribute('aria-autocomplete', 'list');
    inp.setAttribute('aria-label', placeholderValue);
    return inp;
  },
  dropdown: function (_a) {
    var _b = _a.classNames,
      list = _b.list,
      listDropdown = _b.listDropdown;
    var div = document.createElement('div');
    div.classList.add(list, listDropdown);
    div.setAttribute('aria-expanded', 'false');
    return div;
  },
  notice: function (_a, innerText, type) {
    var _b;
    var allowHTML = _a.allowHTML,
      _c = _a.classNames,
      item = _c.item,
      itemChoice = _c.itemChoice,
      noResults = _c.noResults,
      noChoices = _c.noChoices;
    if (type === void 0) {
      type = '';
    }
    var classes = [item, itemChoice];
    if (type === 'no-choices') {
      classes.push(noChoices);
    } else if (type === 'no-results') {
      classes.push(noResults);
    }
    return Object.assign(document.createElement('div'), (_b = {}, _b[allowHTML ? 'innerHTML' : 'innerText'] = innerText, _b.className = classes.join(' '), _b));
  },
  option: function (_a) {
    var label = _a.label,
      value = _a.value,
      customProperties = _a.customProperties,
      active = _a.active,
      disabled = _a.disabled;
    var opt = new Option(label, value, false, active);
    if (customProperties) {
      opt.dataset.customProperties = "".concat(customProperties);
    }
    opt.disabled = !!disabled;
    return opt;
  }
};
exports["default"] = templates;

/***/ }),

/***/ 996:
/***/ (function(module) {



var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ 221:
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_136441__) {

__nested_webpack_require_136441__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_136441__.d(__nested_webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fuse; }
/* harmony export */ });
/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return { path, id, weight, src, getFn }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      // Default function is 1/sqrt(x), weight makes that variable
      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(
  keys,
  docs,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(
  data,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore$1(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {}

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return []
        }
      }
      return res
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.6.2';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}




/***/ }),

/***/ 791:
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_177999__) {

// ESM COMPAT FLAG
__nested_webpack_require_177999__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_177999__.d(__nested_webpack_exports__, {
  "__DO_NOT_USE__ActionTypes": function() { return /* binding */ ActionTypes; },
  "applyMiddleware": function() { return /* binding */ applyMiddleware; },
  "bindActionCreators": function() { return /* binding */ bindActionCreators; },
  "combineReducers": function() { return /* binding */ combineReducers; },
  "compose": function() { return /* binding */ compose; },
  "createStore": function() { return /* binding */ createStore; },
  "legacy_createStore": function() { return /* binding */ legacy_createStore; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error(  true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error(  true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error(  true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error(  true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error(  true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error(  true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error(  true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(  true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error(  true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error(  true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error(  true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error(  true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error(  true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error(  true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error(  true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(  true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error(  true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_204296__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_204296__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_204296__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_204296__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_204296__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_204296__.o(definition, key) && !__nested_webpack_require_204296__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_204296__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_204296__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204296__(373);
/* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_204296__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204296__(187);
/* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_204296__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_204296__(883);
/* harmony import */ var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_204296__(789);
/* harmony import */ var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_204296__(686);







/* harmony default export */ __nested_webpack_exports__["default"] = ((_scripts_choices__WEBPACK_IMPORTED_MODULE_0___default()));

}();
__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fields_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fields.js */ "./src/js/components/fields.js");
/* harmony import */ var _components_form_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form-slider.js */ "./src/js/components/form-slider.js");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider.js */ "./src/js/components/slider.js");
/* harmony import */ var _components_chat_height_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat-height.js */ "./src/js/components/chat-height.js");
/* harmony import */ var _components_chat_textarea_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat-textarea.js */ "./src/js/components/chat-textarea.js");
/* harmony import */ var _components_chat_tab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat-tab.js */ "./src/js/components/chat-tab.js");
/* harmony import */ var _components_upload_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/upload.js */ "./src/js/components/upload.js");
/* harmony import */ var _components_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/alert.js */ "./src/js/components/alert.js");
/* harmony import */ var _components_choices_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/choices.js */ "./src/js/components/choices.js");
/* harmony import */ var _components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dropdown.js */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_calendar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/calendar.js */ "./src/js/components/calendar.js");
/* harmony import */ var _components_form_validate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form-validate.js */ "./src/js/components/form-validate.js");
/* harmony import */ var _components_create_field_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/create-field.js */ "./src/js/components/create-field.js");
/* harmony import */ var _components_editable_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/editable.js */ "./src/js/components/editable.js");
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/offcanvas.js */ "./src/js/components/offcanvas.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/modal.js */ "./src/js/components/modal.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
/* harmony import */ var _components_swiper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/swiper.js */ "./src/js/components/swiper.js");
/* harmony import */ var _components_fancybox_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/fancybox.js */ "./src/js/components/fancybox.js");




















/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_collapse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/collapse.js */ "./node_modules/bootstrap/js/dist/collapse.js");

window.collapseInstances = new Map();
window.initializeCollapse = function (element) {
  const collapse = new bootstrap_js_dist_collapse_js__WEBPACK_IMPORTED_MODULE_0__(element, {
    toggle: false
  });
  window.collapseInstances.set(element, collapse);
};
document.querySelectorAll('[data-bs-toggle="collapse"]')?.forEach(button => {
  const targetSelector = button.getAttribute('data-bs-target');
  const collapseElement = document.querySelector(targetSelector);
  if (collapseElement) {
    window.initializeCollapse(collapseElement);
    button.addEventListener('click', event => {
      event.preventDefault();
      const parentId = collapseElement.getAttribute('data-bs-parent');
      if (parentId) {
        const parentElement = document.getElementById(parentId);
        if (parentElement) {
          parentElement.querySelectorAll('.accordion-collapse.show').forEach(openElement => {
            if (openElement !== collapseElement) {
              const instance = window.collapseInstances.get(openElement);
              instance?.hide();
            }
          });
        }
      }
      const instance = window.collapseInstances.get(collapseElement);
      instance?.toggle();
    });
  }
});

/***/ }),

/***/ "./src/js/components/alert.js":
/*!************************************!*\
  !*** ./src/js/components/alert.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Глобальная функция для создания уведомлений
window.showAlert = (type, message) => {
  // Определяем классы и иконки в зависимости от типа уведомления
  const alertClass = type === 'success' ? 'alert--success' : 'alert--error';
  const iconSrc = type === 'success' ? 'img/icons/success.svg' : 'img/icons/error.svg';
  const iconClass = type === 'success' ? 'image-success-sm' : 'image-error-sm';

  // Создаём элемент уведомления
  const alert = document.createElement('div');
  alert.className = `alert ${alertClass}`;
  alert.innerHTML = `
			<div class="alert-content">
					<img loading="lazy" src="${iconSrc}" class="image ${iconClass}" width="24" height="24" alt="Иконка">
					<p>${message}</p>
			</div>
			<button type="button" class="btn btn-close">
					<span class="icon">
							<svg>
									<use xlink:href="img/icons/close.svg#svg-close"></use>
							</svg>
					</span>
			</button>
	`;

  // Добавляем уведомление в контейнер
  const container = document.querySelector('.alert-container');
  container.appendChild(alert);
  setTimeout(() => {
    alert.style.transform = 'translateX(0vw)'; // Анимация появления
  }, 10);
  setTimeout(() => {
    alert.style.transform = ''; // Скрываем уведомление
    setTimeout(() => {
      alert.remove(); // Удаляем из DOM через 400 мс
    }, 400);
  }, 3000);

  // Обработчик для кнопки закрытия
  alert.querySelector('.btn-close').onclick = function () {
    alert.style.transform = ''; // Скрываем уведомление
    setTimeout(() => {
      alert.remove(); // Удаляем из DOM через 400 мс
    }, 400);
  };
};

/***/ }),

/***/ "./src/js/components/calendar.js":
/*!***************************************!*\
  !*** ./src/js/components/calendar.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_calendar_pro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-calendar-pro */ "./node_modules/vanilla-calendar-pro/build/vanilla-calendar.min.mjs");

window.initializeCalendar = (element, elementType) => {
  const dropdownCalendar = self => {
    const dropdown = self.HTMLElement.closest('.dropdown');
    if (!dropdown) return;
    const hiddenInput = dropdown.querySelector('input.visually-hidden');
    const dropdownValue = dropdown.querySelector('.dropdown-toggle-value');
    const dropdownClear = dropdown.querySelector('.btn-clear');
    dropdownValue.innerHTML = '';
    function resetChoice() {
      dropdownValue.textContent = "Все";
      hiddenInput.value = 'all';
      dropdownClear.classList.add('is-hidden');
      self.selectedDates.length = 0;
      self.update();
    }
    if (self.selectedDates.every(date => date === undefined)) {
      resetChoice();
    } else {
      hiddenInput.value = self.selectedDates.join(', ');
      dropdownClear.classList.remove('is-hidden');
      if (self.selectedDates.length > 0) {
        const badge = document.createElement('span');
        badge.className = "badge badge--md badge--magenta-250 choices__inner-filter-badge";
        badge.textContent = self.selectedDates.length > 1 ? "2" : "1";
        dropdownValue.appendChild(badge);
      }

      // Закрываем dropdown, если выбрано больше одной даты
      if (self.selectedDates.length > 1) {
        const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
        if (toggle && window.dropdownInstances.has(toggle)) {
          window.dropdownInstances.get(toggle).hide();
        }
      }
    }
    dropdown.addEventListener('click', event => {
      event.target.closest('.btn-clear') ? resetChoice() : null;
    });
  };
  const calendar = new vanilla_calendar_pro__WEBPACK_IMPORTED_MODULE_0__["default"](element, {
    type: elementType,
    settings: {
      lang: 'ru',
      visibility: {
        theme: 'light',
        weekend: false,
        daysOutside: false
      },
      selection: {
        day: elementType === 'multiple' ? 'multiple-ranged' : 'single'
      }
    },
    DOMTemplates: {
      default: `
				<div class="vanilla-calendar-header">
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_prev" data-calendar-arrow="prev">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
					<div class="vanilla-calendar-header__content">
						<#Month />
						<#Year />
					</div>
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_next" data-calendar-arrow="next">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
				</div>
				<div class="vanilla-calendar-wrapper">
					<#WeekNumbers />
					<div class="vanilla-calendar-content">
						<#Week />
						<#Days />
					</div>
				</div>
				<#ControlTime />
			`,
      multiple: `
				<div class="vanilla-calendar-controls">
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_prev" data-calendar-arrow="prev">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_next" data-calendar-arrow="next">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
				</div>
				<div class="vanilla-calendar-grid">
					<#Multiple>
						<div class="vanilla-calendar-column">
							<div class="vanilla-calendar-header">
								<div class="vanilla-calendar-header__content">
									<#Month />
									<#Year />
								</div>
							</div>
							<div class="vanilla-calendar-wrapper">
								<#WeekNumbers />
								<div class="vanilla-calendar-content">
									<#Week />
									<#Days />
								</div>
							</div>
						</div>
					<#/Multiple>
				</div>
				<#ControlTime />
			`,
      year: `
				<div class="vanilla-calendar-header">
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_prev" data-calendar-arrow="prev">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
					<div class="vanilla-calendar-header__content">
						<#Month />
						<#Year />
					</div>
					<button type="button" class="vanilla-calendar-arrow vanilla-calendar-arrow_next" data-calendar-arrow="next">
						<span class="icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
					</button>
				</div>
				<div class="vanilla-calendar-wrapper">
					<div class="vanilla-calendar-content">
						<#Years />
					</div>
				</div>
			`
    },
    actions: {
      initCalendar(self) {
        dropdownCalendar(self);
      },
      clickDay(e, self) {
        dropdownCalendar(self);
      },
      getDays(day, date, HTMLElement, HTMLButtonElement, self) {
        // Добавляем класс для первого дня месяца
        if (day === 1) {
          HTMLElement.classList.add('vanilla-calendar-day_first');
        }

        // Приводим date к экземпляру Date, если это не так
        let currentDate = date instanceof Date ? date : new Date(date);
        // Находим последний день месяца:
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        if (day === lastDay) {
          HTMLElement.classList.add('vanilla-calendar-day_last');
        }
      }
    }
  });
  calendar.init();
};
document.querySelectorAll('[data-calendar]')?.forEach(element => {
  let type = element.getAttribute('data-calendar');
  if (!type) {
    type = 'default';
  }
  initializeCalendar(element, type);
});

/***/ }),

/***/ "./src/js/components/chat-height.js":
/*!******************************************!*\
  !*** ./src/js/components/chat-height.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
window.isMobileDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
};
function adjustChatContainerHeight() {
  const chatContainer = document.querySelector('.chat-container');
  if (!chatContainer) return;

  // Получаем отступ сверху относительно документа
  const topOffset = chatContainer.getBoundingClientRect().top + window.scrollY;
  const windowHeight = window.innerHeight;

  // Находим header и получаем его высоту, если устройство не мобильное
  const header = document.querySelector('.header');
  const headerHeight = !isMobileDevice() && header ? header.offsetHeight + 24 : 0;

  // Вычисляем доступную высоту
  const availableHeight = windowHeight - topOffset - headerHeight;

  // Устанавливаем высоту для .chat-container
  chatContainer.style.height = availableHeight + 'px';
}
const events = [
// Изменение размеров окна – слушаем на объекте window
{
  type: 'resize',
  target: window
}, {
  type: 'DOMContentLoaded',
  target: document
},
// События Bootstrap – обычно срабатывают на document
{
  type: 'shown.bs.collapse',
  target: document
}, {
  type: 'hidden.bs.collapse',
  target: document
}];

// Регистрируем для каждого события слушатель, вызывающий adjustChatContainerHeight
events.forEach(eventObj => {
  eventObj.target.addEventListener(eventObj.type, event => {
    setTimeout(() => adjustChatContainerHeight(), 310);
  });
});

/***/ }),

/***/ "./src/js/components/chat-tab.js":
/*!***************************************!*\
  !*** ./src/js/components/chat-tab.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
const chatContainer = document.querySelector('.chat-container');
if (chatContainer) {
  const users = chatContainer.querySelectorAll('.chat-user');
  const contents = chatContainer.querySelectorAll('.chat-content');
  function updateChat(target) {
    contents.forEach(content => {
      content.classList.toggle('is-visible', content.dataset.chatRelated === target);
    });
    users.forEach(user => {
      user.classList.toggle('is-active', user.dataset.chatTarget === target);
    });
  }

  // Если ни один .chat-user не активен, показываем первый chat-content (preview)
  if (![...users].some(user => user.classList.contains('is-active'))) {
    updateChat('preview');
  }
  chatContainer.addEventListener('click', event => {
    const user = event.target.closest('.chat-user');
    const btnBack = event.target.closest('.btn-back');
    if (user) {
      updateChat(user.dataset.chatTarget);
      chatContainer.classList.add('is-chatting');
    }
    if (btnBack) {
      chatContainer.classList.remove('is-chatting');
      setTimeout(() => {
        updateChat('preview');
      }, 300);
    }
  });

  // Глобальная функция, доступная через window, для выбора определённого user
  window.choiceUserChat = function (target) {
    updateChat(target);
    chatContainer.classList.add('is-chatting');
  };
}

/***/ }),

/***/ "./src/js/components/chat-textarea.js":
/*!********************************************!*\
  !*** ./src/js/components/chat-textarea.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Функция инициализирует синхронизацию значения textarea с data-атрибутом контейнера.
 * @param {HTMLElement} container - Элемент-контейнер с классом .chat-textarea-container
 */
const initSyncTextarea = element => {
  // Находим textarea внутри контейнера
  const container = element.querySelector('.chat-textarea-container');
  const textarea = container.querySelector('textarea');
  if (!textarea) return;

  // Определяем имя data-атрибута для обновления:
  // Если у контейнера задан атрибут data-sync-attr, используем его значение, иначе — 'data-message'
  const dataAttrName = container.getAttribute('data-sync-attr') || 'data-message';

  // Функция для обновления data-атрибута контейнера значением из textarea.
  const updateDataAttr = () => {
    // При желании можно добавить дополнительную обработку значения (например, trim)
    container.setAttribute(dataAttrName, textarea.value);
  };

  // Сразу устанавливаем значение при загрузке страницы
  updateDataAttr();

  // Обновляем data-атрибут при каждом изменении содержимого textarea
  textarea.addEventListener('input', updateDataAttr);
};

// Ищем все контейнеры на странице с классом .chat-textarea-container
const chatTextareas = document.querySelectorAll('.chat-textarea');
chatTextareas.forEach(initSyncTextarea);

// Делегирование событий для установки фокуса
document.addEventListener('click', event => {
  const element = event.target.closest('.chat-textarea');
  if (element) {
    const textarea = element.querySelector('textarea');
    if (textarea) textarea.focus();
  }
});

/***/ }),

/***/ "./src/js/components/choices.js":
/*!**************************************!*\
  !*** ./src/js/components/choices.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");

window.getChoiceValue = choice => {
  return Array.isArray(choice.getValue()) ? choice.getValue() : [choice.getValue()];
};
window.initializeChoices = () => {
  const createSelectConfig = element => {
    function getContainerOuterClassNames() {
      let baseClasses = ['choices'];
      let additionalClasses = [];
      if (element.getAttribute('data-choices-class')) {
        additionalClasses.push(element.getAttribute('data-choices-class'));
        // additionalClasses = element.getAttribute('data-choices-class').split(' ')
      }
      return additionalClasses.length > 0 ? `${baseClasses} ${additionalClasses.join(' ')}` : baseClasses;
    }
    function shouldEnableSearch(element) {
      return element.options.length > 10;
    }
    return {
      allowHTML: true,
      placeholder: true,
      removeItems: false,
      loadingText: 'Загрузка...',
      noResultsText: 'Результаты не найдены',
      noChoicesText: 'Нет вариантов для выбора',
      renderSelectedChoices: 'always',
      resetScrollPosition: false,
      searchEnabled: shouldEnableSearch(element),
      searchFields: ['label'],
      shouldSort: false,
      classNames: {
        containerOuter: getContainerOuterClassNames()
      },
      callbackOnCreateTemplates: function (template) {
        return {
          item: (_ref, data) => {
            let {
              classNames
            } = _ref;
            let itemTemplate = ``;
            const dataSelectChoices = this.passedElement.element.getAttribute('data-select-choices') || '';
            const choicesTypes = dataSelectChoices.split(' ').filter(Boolean);
            if (choicesTypes.includes('filter')) {
              itemTemplate = `
								<div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} ${data.placeholder ? classNames.placeholder : ''}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
									<span>${data.label}</span>
								</div>
							`;
            } else {
              itemTemplate = `
								<div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} ${data.placeholder ? classNames.placeholder : ''}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
									<span class="${classNames.item}-value">${data.label}</span>
								</div>
							`;
            }
            return template(itemTemplate);
          },
          choice: (_ref2, data) => {
            let {
              classNames
            } = _ref2;
            let choiceTemplate = ``;
            const dataSelectChoices = this.passedElement.element.getAttribute('data-select-choices') || '';
            const choicesTypes = dataSelectChoices.split(' ').filter(Boolean);
            if (choicesTypes.includes('default-radio')) {
              choiceTemplate = `
								<div class="${classNames.item} ${classNames.itemChoice} ${data.selected ? 'is-selected' : ''} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable} ${data.placeholder ? 'is-placeholder' : ''}"
									data-select-text="${this.config.itemSelectText}"
									data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'}
									data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}
								>
	
									<div class="form-check form-radio--default">
										<div class="form-check-checkbox">
											<div class="form-check-input"></div>
											<span class="form-check-checkbox-span"></span>
										</div>
									</div>
	
									<span>${data.label}</span>
								</div>
							`;
            } else if (choicesTypes.includes('multiple')) {
              choiceTemplate = `
								<div class="${classNames.item} ${classNames.itemChoice} ${data.selected ? 'is-selected' : ''} ${data.placeholder ? 'is-placeholder' : ''} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
									data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
									<span>${data.label}</span>
								</div>
							`;
            } else if (choicesTypes.includes('multiple-checkbox')) {
              choiceTemplate = `
								<div class="${classNames.item} ${classNames.itemChoice} ${data.selected ? 'is-selected' : ''} ${data.placeholder ? 'is-placeholder' : ''} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
									data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
	
									<div class="form-check form-check--default">
										<div class="form-check-checkbox">
											<div class="form-check-input"></div>
											<span class="form-check-checkbox-span">
												<span class="icon icon-check">
													<svg>
														<use xlink:href="img/icons/check.svg#svg-check"></use>
													</svg>
												</span>
	
												<span class="icon icon-disabled">
													<svg>
														<use xlink:href="img/icons/minus.svg#svg-minus"></use>
													</svg>
												</span>
											</span>
										</div>
									</div>
	
									<span>${data.label}</span>
								</div>
							`;
            } else {
              choiceTemplate = `
								<div class="${classNames.item}
									${classNames.itemChoice}
									${data.selected ? 'is-selected' : ''}
									${data.placeholder ? 'is-placeholder' : ''}
									${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
									<span>${data.label}</span>
								</div>
							`;
            }
            return template(choiceTemplate);
          }
        };
      }
    };
  };
  const createDropdownSvg = choice => {
    let iconSpan = document.createElement('span');
    iconSpan.classList.add('icon', `${choice.config.classNames.containerInner}-dropdown`);
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/icons/dropdown.svg#svg-dropdown');
    svgElement.appendChild(useElement);
    iconSpan.appendChild(svgElement);
    return iconSpan;
  };
  const createFilterPlaceholder = choice => {
    const el = document.createElement('span');
    el.className = `${choice.config.classNames.containerInner}-filter-placeholder`;
    el.textContent = choice._placeholderValue;
    return el;
  };
  const createFilterBadge = choice => {
    const el = document.createElement('span');
    el.className = `badge badge--md badge--magenta-250 ${choice.config.classNames.containerInner}-filter-badge is-hidden`;
    return el;
  };
  const createClearButton = choice => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `btn btn-sm btn-clear ${choice.config.classNames.containerInner}-clear is-hidden`;
    el.innerHTML = `
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/close-clear.svg#svg-close-clear"></use>
				</svg>
			</span>
		`;
    return el;
  };
  const addFloatingLabel = choice => {
    // Проверяем, есть ли у choice.containerOuter.element класс `choices--floating`
    if (choice.containerOuter.element.classList.contains('choices--floating')) {
      // Создаём span с классом `field-floating`
      const floatingLabel = document.createElement('span');
      floatingLabel.classList.add('field-floating');

      // Устанавливаем значение из choice._placeholderValue
      floatingLabel.textContent = choice._placeholderValue;

      // Добавляем span внутрь choice.containerInner.element после всех элементов
      choice.containerInner.element.appendChild(floatingLabel);
    }
  };

  // Функция для обработки логики выбора "all"
  // Параметры:
  // - choice: экземпляр Choices для конкретного селекта
  // - prevSelectedValues: массив предыдущих выбранных значений (строк)
  // Возвращает обновлённый массив выбранных значений после выполнения логики "all"
  const processAllSelection = (choice, prevSelectedValues) => {
    // Получаем текущий выбор в виде массива строк
    let currentSelected = getChoiceValue(choice).map(item => item.value);

    // Если "all" выбран сейчас, а ранее его не было — удаляем все остальные варианты
    if (!prevSelectedValues.includes('all') && currentSelected.includes('all')) {
      currentSelected.filter(val => val !== 'all').forEach(val => {
        choice.removeActiveItemsByValue(val);
      });
    }
    // Если ранее был выбран "all", а теперь в выборе и "all" и другая опция — удаляем "all"
    else if (prevSelectedValues.includes('all') && currentSelected.includes('all') && currentSelected.length > 1) {
      choice.removeActiveItemsByValue('all');
    }

    // Если выбраны все индивидуальные варианты (т.е. все варианты, кроме "all"),
    // то снимаем весь выбор и устанавливаем только "all"
    const allOptions = choice.config.choices.map(ch => ch.value).filter(val => val && val !== 'all');
    if (allOptions.length && allOptions.every(val => currentSelected.includes(val))) {
      choice.removeActiveItems();
      choice.setChoiceByValue('all');
    }

    // Возвращаем обновлённый массив выбранных значений
    return getChoiceValue(choice).map(item => item.value);
  };
  const handleChoiceClass = (choice, getSelected) => {
    if (getSelected.length) {
      getSelected[0].placeholder === true ? choice.containerOuter.element.classList.remove('is-choice') : choice.containerOuter.element.classList.add('is-choice');
    } else {
      choice.containerOuter.element.classList.remove('is-choice');
    }
  };
  const handleChoiceFilter = (choice, dropdownSvg, choiceItemList, filterBadge, clearButton) => {
    const getChoiceSelected = getChoiceValue(choice);
    filterBadge.textContent = `${getChoiceSelected.length}`;
    if (getChoiceSelected.length > 1) {
      // dropdownSvg.classList.add('is-hidden')
      choiceItemList.classList.add('is-hidden');
      filterBadge.classList.remove('is-hidden');
      clearButton.classList.remove('is-hidden');
    } else if (getChoiceSelected.length < 2) {
      // dropdownSvg.classList.remove('is-hidden')
      choiceItemList.classList.remove('is-hidden');
      filterBadge.classList.add('is-hidden');
      clearButton.classList.add('is-hidden');
    }
  };
  window.choiceElements = Array.from(document.querySelectorAll('[data-select-choices]')).map(select => ({
    element: select
  }));
  window.choiceElements?.forEach(select => {
    if (select.element.closest('.choices')) {
      return;
    }
    const config = createSelectConfig(select.element);
    const choice = new choices_js__WEBPACK_IMPORTED_MODULE_0__(select.element, config);
    const choicesAttr = choice.passedElement.element.getAttribute('data-select-choices').split(' ') || '';
    const choiceHasMultiple = choice.passedElement.element.hasAttribute('multiple');
    const choiceHasFilter = choicesAttr.includes('filter');
    const choiceContainerOuter = choice.containerOuter.element;
    const choiceContainerInner = choice.containerInner.element;
    const choiceItemList = choice.itemList.element;
    const choiceDropdown = choice.dropdown.element;
    let filterPlaceholder, filterBadge, clearButton, dropdownSvg;
    let getChoiceSelected = getChoiceValue(choice);
    let prevSelectedValues = getChoiceSelected.map(item => item.value);
    dropdownSvg = createDropdownSvg(choice);
    choiceContainerInner.append(dropdownSvg);
    addFloatingLabel(choice);
    handleChoiceClass(choice, getChoiceSelected);
    choice.passedElement.element.addEventListener("choice", function (event) {
      const {
        value,
        selected
      } = event.detail.choice; // Получаем значение выбранного элемента

      setTimeout(() => {
        if (choiceHasMultiple) {
          if (selected) {
            choice.removeActiveItemsByValue(value); // Удаляем элемент из выбранных

            const event = new Event("change");
            choice.passedElement.element.dispatchEvent(event);
          }
        }
        getChoiceSelected = getChoiceValue(choice);
        handleChoiceClass(choice, getChoiceSelected);
      });
    });
    choice.passedElement.element.addEventListener("change", function (event) {
      if (choiceHasMultiple) {
        prevSelectedValues = processAllSelection(choice, prevSelectedValues);
      }
      if (choiceHasFilter) {
        handleChoiceFilter(choice, dropdownSvg, choiceItemList, filterBadge, clearButton);
      }
    });
    choice.passedElement.element.addEventListener("showDropdown", function (event) {
      const dropdownRect = choiceDropdown.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      // Если выпадающий список выходит за правую границу экрана
      if (dropdownRect.right > windowWidth) {
        choiceContainerOuter.classList.add('is-flipped-x');
      } else {
        choiceContainerOuter.classList.remove('is-flipped-x');
      }
    });
    choice.passedElement.element.addEventListener("hideDropdown", function (event) {
      choiceContainerOuter.classList.remove('is-flipped-x');
    });
    if (choiceHasMultiple) {
      const choiceInput = choice.input.element;
      choiceInput.classList.add('field', 'field-has-btn', 'field--md');

      // Создаём div с классом field-group
      const fieldGroup = document.createElement("div");
      fieldGroup.classList.add("field-group");
      choice._presetOptions.length < 10 ? fieldGroup.classList.add("is-hidden") : fieldGroup.classList.remove("is-hidden");

      // Создаём кнопку
      const button = document.createElement("button");
      button.type = "button";
      button.classList.add("btn", "field-btn", "field-clear");

      // Создаём span.icon
      const span = document.createElement("span");
      span.classList.add("icon");

      // Создаём svg
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      // Используем setAttributeNS с нужным пространством имён для xlink
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "img/icons/close-fill.svg#svg-close-fill");

      // Вкладываем элементы друг в друга
      svg.appendChild(use);
      span.appendChild(svg);
      button.appendChild(span);

      // Добавляем choiceInput и кнопку в fieldGroup
      fieldGroup.appendChild(choiceInput);
      fieldGroup.appendChild(button);

      // Добавляем field-group в начало choiceDropdown
      choiceDropdown.prepend(fieldGroup);
    }
    if (choiceHasFilter) {
      filterPlaceholder = createFilterPlaceholder(choice);
      filterBadge = createFilterBadge(choice);
      clearButton = createClearButton(choice);
      choiceContainerInner.prepend(filterPlaceholder);
      choiceContainerInner.append(filterBadge, clearButton);

      // Обработчик клика на clearButton
      clearButton.addEventListener('click', function () {
        // Очищаем выбор
        choice.removeActiveItems();

        // Устанавливаем "all" как выбранное значение
        choice.config.choices.some(item => item.value === "all") ? choice.setChoiceByValue('all') : null;

        // Скрываем фильтры и кнопки
        filterBadge.classList.add('is-hidden');
        clearButton.classList.add('is-hidden');
        choiceItemList.classList.remove('is-hidden');

        // Скрываем общую кнопку сброса
        if (choice.passedElement.element.closest('[data-filter-choices]')) {
          const event = new Event("clearButtonHidden");
          choice.passedElement.element.closest('[data-filter-choices]').dispatchEvent(event);
        }
      });
      handleChoiceFilter(choice, dropdownSvg, choiceItemList, filterBadge, clearButton);
    }
    if (select.element.closest('[data-filter-choices]')) {
      // Сохраняем экземпляр в свойстве элемента, чтобы потом его можно было найти
      select.choicesInstance = choice;
    }
    document.addEventListener('show.bs.dropdown', event => {
      choice.hideDropdown();
    });
  });
};
initializeChoices();

// Проходим по всем контейнерам с data-filter-choices
document.querySelectorAll('[data-filter-choices]').forEach(container => {
  const pushArrayInArray = (arrayMain, arrayOut, choiceId) => {
    const existingEntry = arrayMain.find(item => item.id === choiceId);
    if (existingEntry) {
      // Обновляем данные
      existingEntry.selected = arrayOut;
    } else {
      // Если вдруг не нашли, добавляем (на всякий случай)
      arrayMain.push({
        id: choiceId,
        selected: arrayOut
      });
    }
  };
  const toggleClearButton = array => {
    const hasSelected = array.some(item => item && item.selected.length > 0);
    clearButton ? clearButton.classList.toggle('is-hidden', !hasSelected) : null;
  };
  const filterChoicesArray = [];
  // Ищем кнопку очистки внутри контейнера
  const clearButton = container.querySelector('.filter-header-clear');
  window.choiceElements.forEach(item => {
    // Проверяем, что этот select находится в данном контейнере
    if (item.element.closest('[data-filter-choices]') === container && item.choicesInstance) {
      const choicesInstance = item.choicesInstance;
      let getChoiceSelected = getChoiceValue(choicesInstance).filter(item => item && item.value !== "all");
      pushArrayInArray(filterChoicesArray, getChoiceSelected, choicesInstance._baseId);
      choicesInstance.passedElement.element.addEventListener("change", function (event) {
        getChoiceSelected = getChoiceValue(choicesInstance).filter(item => item && item.value !== "all");
        pushArrayInArray(filterChoicesArray, getChoiceSelected, choicesInstance._baseId);
        toggleClearButton(filterChoicesArray);
      });
    }
  });
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      // Проходим по всем Choice, сохранённым в глобальной переменной
      window.choiceElements.forEach(item => {
        // Проверяем, что этот select находится в данном контейнере
        if (item.element.closest('[data-filter-choices]') === container && item.choicesInstance) {
          const choicesInstance = item.choicesInstance;

          // Сбрасываем выбранные элементы
          choicesInstance.removeActiveItems();

          // Если в конфигурации присутствует вариант "all", выбираем его
          if (choicesInstance.config.choices.some(choice => choice.value === "all")) {
            choicesInstance.setChoiceByValue('all');
          }
          const event = new Event("change");
          choicesInstance.passedElement.element.dispatchEvent(event);
        }
      });
    });
  }
  toggleClearButton(filterChoicesArray);
  container.addEventListener('clearButtonHidden', () => {
    window.choiceElements.forEach(item => {
      // Проверяем, что этот select находится в данном контейнере
      if (item.element.closest('[data-filter-choices]') === container && item.choicesInstance) {
        const choicesInstance = item.choicesInstance;
        let getChoiceSelected = getChoiceValue(choicesInstance).filter(item => item && item.value !== "all");
        pushArrayInArray(filterChoicesArray, getChoiceSelected, choicesInstance._baseId);
      }
    });
    toggleClearButton(filterChoicesArray);
  });
});

/***/ }),

/***/ "./src/js/components/create-field.js":
/*!*******************************************!*\
  !*** ./src/js/components/create-field.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Глобальный счётчик для уникальных имён полей
let fieldCounter = 0;
// Глобальная переменная, удаляемого поля
let fieldItemToRemove = null;
// Глобальная переменная, в которую будем сохранять контейнер, куда добавлять новое поле
let currentParentContainer = null;

// Функция для подсчёта количества предков с data-create-field="child-container"
function countAncestorChildContainers(element) {
  let count = 0;
  let current = element.parentElement;
  while (current) {
    if (current.matches('[data-create-field="child-container"]')) {
      count++;
    }
    current = current.parentElement;
  }
  return count;
}

// Устанавливаем placeholder для всех родительских контейнеров
function setPlaceholdersForParents(element, newPlaceholder) {
  let current = element.parentElement;
  while (current) {
    if (current.matches('[data-create-field="parent-container"]')) {
      // Получаем текущее значение placeholder
      let currentPlaceholder = current.getAttribute('data-fields-placeholder') || '';
      // Разделяем на массив значений по запятой
      let placeholdersArray = currentPlaceholder.split(',').map(p => p.trim()).filter(p => p !== '');
      // Добавляем новое значение, если его еще нет в массиве
      if (!placeholdersArray.includes(newPlaceholder)) {
        placeholdersArray.push(newPlaceholder);
      }
      // Обновляем атрибут с объединенными значениями через запятую
      current.setAttribute('data-fields-placeholder', placeholdersArray.join(', '));
    }
    current = current.parentElement;
  }
}

// Удаляем значение placeholder из всех родительских контейнеров
function removePlaceholderFromParents(element, placeholderToRemove) {
  let current = element.parentElement;
  while (current) {
    if (current.matches('[data-create-field="parent-container"]')) {
      // Получаем текущее значение placeholder
      let currentPlaceholder = current.getAttribute('data-fields-placeholder') || '';
      // Разделяем на массив значений по запятой
      let placeholdersArray = currentPlaceholder.split(',').map(p => p.trim()).filter(p => p !== '');
      // Удаляем указанное значение из массива
      placeholdersArray = placeholdersArray.filter(p => p !== placeholderToRemove);
      // Обновляем атрибут с новыми значениями через запятую
      current.setAttribute('data-fields-placeholder', placeholdersArray.join(', '));
    }
    current = current.parentElement;
  }
}
document.addEventListener('click', event => {
  // Находим ближайший элемент с data-create-field
  const createEl = event.target.closest('[data-create-field]');
  if (!createEl) return;

  // Получаем значение атрибута, которое определяет функционал
  const createType = createEl.getAttribute('data-create-field');
  const buttonChild = `
		<button type="button" class="btn btn-md btn-create-field"
			data-create-field="parent"
			data-bs-toggle="modal"
			data-bs-target="#modal_choice_field_type">
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/plus-fill.svg#svg-plus-fill"></use>
				</svg>
			</span>

			Дочернее поле
		</button>
	`;
  const buttonRemove = `
		<button type="button" class="btn btn-remove-field"
			data-bs-toggle="modal"
			data-bs-target="#modal_remove_field_question"
			data-create-field="remove">
			Удалить поле
		</button>
	`;
  switch (createType) {
    case 'main':
      {
        // Определяем, куда добавлять созданное поле.
        currentParentContainer = document.querySelector('[data-create-field="main-container"]');
        break;
      }
    case 'parent':
      {
        // Определяем, куда добавлять созданное поле.
        // Если кнопка находится внутри уже созданного поля, ищем ближайший вложенный контейнер.
        let container;
        const createdField = createEl.closest('[data-create-field="parent-container"]');
        if (createdField) container = createdField.querySelector('[data-create-field="child-container"]');
        currentParentContainer = container;
        break;
      }
    // Кнопка для удаления поля
    case 'remove':
      {
        // Удаляем весь блок (контейнер созданного поля)
        const createdField = createEl.closest('[data-create-field="parent-container"]');
        fieldItemToRemove = createdField;

        // Сохраняем placeholder удаляемого поля перед его удалением
        const placeholderToRemove = fieldItemToRemove?.getAttribute('data-fields-placeholder') || '';

        // Добавляем placeholderToRemove в глобальную переменную для использования при подтверждении удаления
        fieldItemToRemove.placeholderToRemove = placeholderToRemove;
        break;
      }
    case 'button':
      {
        // Это финальная кнопка в модальном окне, по клику на которую создаётся поле.
        // Предотвращаем действие по умолчанию (например, если это кнопка внутри формы).
        event.preventDefault();

        // Находим форму внутри модального окна, где собраны данные
        const form = createEl.closest('form');
        if (!form) return;

        // Собираем данные из формы
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
          // Если нужно обрабатывать одинаковые имена полей (например, для списка), можно делать массив
          if (data[key]) {
            if (Array.isArray(data[key])) {
              data[key].push(value);
            } else {
              data[key] = [data[key], value];
            }
          } else {
            data[key] = value;
          }
        });

        // Определяем тип поля по id модального окна.
        // Например, если id="modal_create_field_image", то тип будет "image".
        const modal = form.closest('.modal');
        let createdFieldType = '';
        if (modal && modal.id) {
          createdFieldType = modal.id.replace('modal_create_field_', '');
        }

        // Используем currentParentContainer (установленный при клике на кнопку parent)
        const parentContainer = currentParentContainer;
        if (!parentContainer) return;
        const ancestorCount = countAncestorChildContainers(parentContainer);
        const buttonChildMarkup = ancestorCount > 3 ? '' : buttonChild;

        // Формируем HTML нового поля – это пример,
        // в реальном проекте здесь можно создать нужную структуру
        const newField = document.createElement('div');
        newField.className = 'create-field-container';
        newField.setAttribute('data-create-field', 'parent-container');
        newField.setAttribute('data-fields-placeholder', data.placeholder || '');
        if (['select'].includes(createdFieldType)) {
          // Для типа "select": выводим все значения из data в option,
          // а placeholder используем как первый option с value=""
          fieldCounter++;
          const uniqueFieldName = `create_select_${fieldCounter}`;
          // Начинаем формировать разметку option, первым идет placeholder
          let optionsHTML = `
					<option value="">${data.placeholder || 'Заглушка'}</option>
				`;
          // Определяем атрибуты для select в зависимости от типа
          let selectChoicesAttr = 'default-radio';
          let choicesClassAttr = 'choices--floating choices--radio';
          let multipleAttribute = '';
          if (data.type === 'multiple') {
            selectChoicesAttr = 'multiple-checkbox';
            choicesClassAttr = 'choices--floating choices--checkbox';
            multipleAttribute = 'multiple';
            optionsHTML += `
						<option value="all">Все</option>
					`;
          }
          // Предполагаем, что значения для option передаются в data.select_value
          let valuesArray = [];
          if (data.value) {
            if (Array.isArray(data.value)) {
              valuesArray = data.value;
            } else {
              valuesArray = [data.value];
            }
          }
          valuesArray.forEach(value => {
            optionsHTML += `<option value="${value}">${value}</option>`;
          });
          newField.innerHTML = `
					<div class="create-field-group">
						<select name="${uniqueFieldName}" ${multipleAttribute}
							data-select-choices="${selectChoicesAttr}"
							data-choices-class="${choicesClassAttr}">
							${optionsHTML}
						</select>

						<div class="create-field-buttons">
							${buttonChildMarkup}
							${buttonRemove}
						</div>
					</div>

					<div class="create-field-container" data-create-field="child-container"></div>
				`;
        } else {
          fieldCounter++; // генерируем уникальный идентификатор
          const uniqueFieldName = `create_field_${fieldCounter}`;
          newField.innerHTML = `
					<div class="create-field-group">
						<div class="field-group field-group--floating">
							<input type="text" class="field field-has-btn" name="${uniqueFieldName}" placeholder=""
								value="${data.value || ''}"
								${createdFieldType === 'constant' ? 'readonly' : ''}>
							<span class="field-floating">${data.placeholder || 'Заглушка'}</span>
							<button type="button" class="btn field-btn field-clear">
								<span class="icon">
									<svg>
										<use xlink:href="img/icons/close-fill.svg#svg-close-fill"></use>
									</svg>
								</span>
							</button>
						</div>

						<div class="create-field-buttons">
							${buttonChildMarkup}
							${buttonRemove}
						</div>
					</div>

					<div class="create-field-container" data-create-field="child-container"></div>
				`;
        }

        // Добавляем созданное поле в выбранный контейнер
        parentContainer.appendChild(newField);
        setPlaceholdersForParents(newField, data.placeholder);
        if (createdFieldType === 'select' || createdFieldType === 'image') {
          setTimeout(() => {
            window.initializeChoices();
          });
        }

        // Сброс формы для чистоты (опционально)
        form.reset();

        // Для каждого input обновляем состояние кнопки (например, скрываем её, если значение пустое)
        form.querySelectorAll('.field-has-btn').forEach(input => {
          checkFieldInput(input);
        });
        break;
      }
    case 'main-container':
      {
        // Это контейнер для созданных полей – клик по нему не обрабатываем
        break;
      }
    default:
      break;
  }
});
document.addEventListener('show.bs.modal', event => {
  const confirmRemoveBtn = event.srcElement.querySelector('[data-remove-field]');
  const title = event.srcElement.querySelector('[data-title-field]');
  const text = event.srcElement.querySelector('[data-text-field]');
  if (confirmRemoveBtn) {
    confirmRemoveBtn.addEventListener('click', e => {
      e.preventDefault();
      if (!fieldItemToRemove) return;

      // Находим select внутри удаляемого контейнера
      const selectElement = fieldItemToRemove.querySelector('[data-select-choices]');

      // Если select есть, удаляем его из массива choiceElements
      if (selectElement) {
        window.choiceElements = window.choiceElements.filter(item => item.element !== selectElement);
      }

      // Удаляем placeholder из родительских элементов
      const placeholderToRemove = fieldItemToRemove.placeholderToRemove;
      if (placeholderToRemove) {
        removePlaceholderFromParents(fieldItemToRemove, placeholderToRemove);
      }
      fieldItemToRemove.remove();
      fieldItemToRemove = null;
    });
    setTimeout(() => {
      // Динамически обновляем текст заголовка и описания при открытии модального окна
      if (fieldItemToRemove) {
        const placeholder = fieldItemToRemove.getAttribute('data-fields-placeholder') || '';
        const placeholdersArray = placeholder.split(',').map(p => p.trim()).filter(p => p !== '');
        const firstPlaceholder = placeholdersArray[0];
        const otherPlaceholders = placeholdersArray.slice(1);
        if (firstPlaceholder) {
          title.textContent = `Точно удалить поле «${firstPlaceholder}»?`;
        } else {
          title.textContent = 'Точно удалить поле?';
        }
        if (placeholdersArray.length > 1) {
          const childFieldsText = otherPlaceholders.map(p => `«${p}»`).join(', ');
          text.textContent = `Данное поле родительское. Вместе с ним удалятся дочерние поля ${childFieldsText}.`;
        } else {
          text.textContent = 'Данное поле родительское.';
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/dropdown.js */ "./node_modules/bootstrap/js/dist/dropdown.js");

window.dropdownInstances = new Map();
window.initializeDropdown = function (element) {
  const dropdown = new bootstrap_js_dist_dropdown_js__WEBPACK_IMPORTED_MODULE_0__(element);
  dropdownInstances.set(element, dropdown);
};
document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(element => {
  initializeDropdown(element);
});
document.body.addEventListener('click', event => {
  // Ищем ближайший элемент-тогглер dropdown
  const targetToggle = event.target.closest('[data-bs-toggle="dropdown"]');
  // Проверяем, кликнули ли мы внутри dropdown-menu
  const clickedInsideMenu = event.target.closest('.dropdown-menu');
  if (targetToggle) {
    // Если для текущего элемента ещё не создан инстанс, создаём его
    if (!dropdownInstances.has(targetToggle)) {
      initializeDropdown(targetToggle);
    }

    // Закрываем все dropdown, кроме того, по которому кликнули
    dropdownInstances.forEach((dropdownInstance, element) => {
      if (element !== targetToggle) {
        dropdownInstance.hide();
      }
    });

    // Переключаем состояние текущего dropdown
    dropdownInstances.get(targetToggle).toggle();
  } else if (clickedInsideMenu) {
    // Если клик внутри меню, проверяем, нужно ли закрывать dropdown
    // Определяем родительский dropdown, которому принадлежит меню
    const parentDropdown = event.target.closest('.dropdown');
    if (parentDropdown) {
      // Ищем элемент-тогглер внутри родительского dropdown
      const toggle = parentDropdown.querySelector('[data-bs-toggle="dropdown"]');
      // Если установлен data-bs-auto-close="outside", то не закрываем dropdown
      if (toggle && toggle.getAttribute('data-bs-auto-close') === 'outside') {
        return;
      }
    }
    // Если условие не выполнено — закрываем все dropdown
    dropdownInstances.forEach(dropdownInstance => {
      dropdownInstance.hide();
    });
  }
});

/***/ }),

/***/ "./src/js/components/editable.js":
/*!***************************************!*\
  !*** ./src/js/components/editable.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_throttle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/throttle.js */ "./src/js/functions/throttle.js");


// Функция для обновления ширины одного input
function updateInputWidth(input) {
  const text = input.value || input.placeholder;

  // Создаём или переиспользуем canvas для измерения текста
  const canvas = updateInputWidth.canvas || (updateInputWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');

  // Получаем вычисленный стиль input, чтобы корректно задать шрифт для canvas
  const computedStyle = window.getComputedStyle(input);
  context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;

  // Измеряем ширину текста
  const textWidth = context.measureText(text).width;

  // Добавляем небольшой запас (например, 10px) для комфорта
  input.style.width = textWidth + 10 + 'px';
}

// Функция для обновления ширины всех input-элементов
function updateAllInputs() {
  document.querySelectorAll('.editable-input').forEach(input => {
    updateInputWidth(input);
  });
}

// Инициализация для всех элементов с классом 'editable-input'
document.querySelectorAll('.editable-input').forEach(input => {
  // Обновляем ширину при изменении текста
  input.addEventListener('input', () => updateInputWidth(input));
  // Обновляем ширину при фокусе/блюре, если нужно
  input.addEventListener('focus', () => updateInputWidth(input));
  input.addEventListener('blur', () => updateInputWidth(input));

  // Начальное обновление
  updateInputWidth(input);
});

// Обновляем все inputs при изменении размера окна
window.addEventListener('resize', (0,_functions_throttle_js__WEBPACK_IMPORTED_MODULE_0__.throttle)(updateAllInputs));

/***/ }),

/***/ "./src/js/components/fancybox.js":
/*!***************************************!*\
  !*** ./src/js/components/fancybox.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");

_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-fancybox]", {
  Toolbar: false,
  closeButton: false
});

/***/ }),

/***/ "./src/js/components/fields.js":
/*!*************************************!*\
  !*** ./src/js/components/fields.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
window.checkFieldInput = input => {
  if (input.value.trim()) {
    input.classList.add('is-input');
  } else {
    input.classList.remove('is-input');
  }
};
document.querySelectorAll('.field-has-btn')?.forEach(input => {
  checkFieldInput(input);
});
document.addEventListener('input', event => {
  const input = event.target;
  if (input.classList.contains('field-has-btn')) {
    checkFieldInput(input);
  }
});
document.addEventListener('click', event => {
  const fieldButton = event.target.closest('.field-btn');
  if (fieldButton) {
    const input = fieldButton.closest('.field-group')?.querySelector('.field-has-btn');
    if (fieldButton.classList.contains('field-clear')) {
      if (input) {
        input.value = '';
        checkFieldInput(input);
        input.dispatchEvent(new Event('input', {
          bubbles: true
        }));
      }
    }
    if (fieldButton.classList.contains('field-show')) {
      if (input) {
        if (input.classList.contains('is-show')) {
          input.classList.remove('is-show');
          input.type = 'password';
        } else {
          input.classList.add('is-show');
          input.type = 'text';
        }
      }
    }
  }
});

/***/ }),

/***/ "./src/js/components/form-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/form-slider.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slides = document.querySelectorAll('.form-slide');
const nextButtons = document.querySelectorAll('.form-slider-next');
const prevButtons = document.querySelectorAll('.form-slider-prev');
const progressBar = document.querySelector('.form-slider-progressbar span'); // Прогресс-бар

let currentIndex = 0; // Индекс текущего слайда
const totalSlides = slides.length; // Общее количество слайдов

if (totalSlides) {
  // Функция для плавного скрытия слайда
  const fadeOutSlide = (slide, callback) => {
    slide.style.opacity = '0';

    // Ожидаем завершения анимации
    slide.addEventListener('transitionend', function onTransitionEnd() {
      slide.style.display = 'none'; // Скрываем слайд после завершения анимации
      slide.removeEventListener('transitionend', onTransitionEnd); // Убираем обработчик
      callback && callback(); // Выполнить callback после завершения скрытия
    });
  };

  // Функция для плавного отображения слайда
  const fadeInSlide = slide => {
    slide.style.display = 'block';
    slide.style.opacity = '0'; // Начальное состояние

    // Ожидаем завершения анимации
    setTimeout(() => {
      slide.style.opacity = '1';
    }, 0);
  };

  // Функция для проверки, заполнены ли все обязательные поля на текущем слайде
  const areRequiredFieldsFilled = () => {
    const requiredFields = slides[currentIndex].querySelectorAll('[required]');
    return Array.from(requiredFields).every(input => input.value.trim() !== '');
  };

  // Добавление обработчиков на обязательные поля для обновления кнопки "Далее"
  const addRequiredFieldListeners = () => {
    const requiredFields = slides[currentIndex].querySelectorAll('[required]');
    requiredFields.forEach(field => {
      field.addEventListener('input', updateNextButton); // Обновляем прогресс и состояние кнопки при любом изменении
      field.addEventListener('change', updateNextButton); // Обновляем при изменении значения
    });
  };

  // Функция для обновления прогресс-бара
  const updateProgressBar = () => {
    const progress = currentIndex / totalSlides * 100; // Рассчитываем процент
    progressBar.style.width = `${currentIndex === 0 ? 5 : progress}%`;
  };
  const updateNextButton = () => {
    const nextButton = nextButtons[currentIndex];
    if (areRequiredFieldsFilled()) {
      nextButton.removeAttribute('disabled'); // Включаем кнопку, если все поля заполнены
    } else {
      nextButton.setAttribute('disabled', 'true'); // Отключаем кнопку, если поля не заполнены
    }
  };

  // Функция для показа текущего слайда
  const showSlide = index => {
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[index];
    if (currentSlide === nextSlide) return; // Если текущий слайд тот же, ничего не делаем

    // Сначала скрываем текущий слайд
    fadeOutSlide(currentSlide, () => {
      // После завершения скрытия показываем следующий слайд
      fadeInSlide(nextSlide);
      currentIndex = index; // Обновляем текущий индекс
      progressBar ? updateProgressBar() : null; // Обновляем прогресс-бар
      nextButtons.length ? updateNextButton() : null;
    });
  };

  // Обработчики для кнопок "Далее"
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        showSlide(currentIndex + 1);
        addRequiredFieldListeners(); // Добавляем обработчики на поля нового слайда
      }
    });
  });

  // Обработчики для кнопок "Назад"
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (currentIndex > 0) {
        showSlide(currentIndex - 1);
        addRequiredFieldListeners(); // Добавляем обработчики на поля нового слайда
      }
    });
  });

  // Инициализация: скрыть все слайды, кроме первого и обновить прогресс-бар
  slides.forEach((slide, index) => {
    if (index !== currentIndex) {
      slide.style.display = 'none';
      slide.style.opacity = '0';
    }
  });

  // Показать первый слайд и установить начальный прогресс
  fadeInSlide(slides[currentIndex]);
  progressBar ? updateProgressBar() : null;
  nextButtons.length ? updateNextButton() : null;
  addRequiredFieldListeners(); // Добавляем обработчики для обязательных полей первого слайда
}

/***/ }),

/***/ "./src/js/components/form-validate.js":
/*!********************************************!*\
  !*** ./src/js/components/form-validate.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
document.querySelectorAll('[data-form-validate]')?.forEach(form => {
  const submitButton = form.querySelector('button[type="submit"]');
  const updateButtonAttributes = () => {
    // Если форма должна работать по принципу выбора модального окна,
    // проверяем, выбран ли input с именем "field_type"
    const checkedInput = form.hasAttribute('data-choice-current-modal') ? form.querySelector('input[name="field_type"]:checked') : true;

    // Проверяем, что все поля с атрибутом required заполнены
    const allRequiredFilled = [...form.querySelectorAll('[required]')].every(field => field.checkValidity());
    if (checkedInput && allRequiredFilled) {
      // Если все условия выполнены, делаем кнопку активной
      submitButton.removeAttribute('disabled');
      if (form.hasAttribute('data-choice-current-modal')) {
        submitButton.setAttribute('data-bs-dismiss', 'modal');
        submitButton.setAttribute('data-bs-toggle', 'modal');
        submitButton.setAttribute('data-bs-target', `#${checkedInput.value}`);
      }
    } else {
      // Если хоть одно условие не выполнено, блокируем кнопку
      submitButton.setAttribute('disabled', 'true');
      if (form.hasAttribute('data-choice-current-modal')) {
        submitButton.removeAttribute('data-bs-dismiss');
        submitButton.removeAttribute('data-bs-toggle');
        submitButton.removeAttribute('data-bs-target');
      }
    }
  };

  // Запускаем проверку сразу при загрузке
  updateButtonAttributes();

  // Если форма использует выбор модального окна,
  // следим за изменением radio кнопок
  if (form.hasAttribute('data-choice-current-modal')) {
    form.querySelectorAll('input[name="field_type"]').forEach(input => {
      input.addEventListener('change', updateButtonAttributes);
    });
  }

  // Вместо назначения обработчиков на каждый существующий [required] элемент,
  // используем делегирование событий на форму, чтобы отлавливать изменения в динамически добавленных полях
  form.addEventListener('input', event => {
    if (event.target.matches('[required]')) {
      updateButtonAttributes();
    }
  });
  form.addEventListener('change', event => {
    if (event.target.matches('[required]')) {
      updateButtonAttributes();
    }
  });

  // Предотвращаем перезагрузку страницы при отправке формы
  form.addEventListener('submit', event => {
    event.preventDefault();
  });
});

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal.js */ "./node_modules/bootstrap/js/dist/modal.js");

window.modalInstances = new Map();
window.initializeModal = function (element) {
  const modal = new bootstrap_js_dist_modal_js__WEBPACK_IMPORTED_MODULE_0__(element);
  modalInstances.set(element, modal);
};
document.querySelectorAll('.modal')?.forEach(element => {
  initializeModal(element);
});
document.body.addEventListener('click', event => {
  const target = event.target;
  if (target.getAttribute('data-bs-toggle') === 'modal') {
    const targetElement = document.querySelector(target.getAttribute('data-bs-target'));
    if (!modalInstances.has(targetElement)) {
      initializeModal(targetElement);
    }
    modalInstances.get(targetElement).show();
  }
});
document.addEventListener('show.bs.modal', event => {
  const modalBodyList = event.srcElement.querySelector('.modal-body-list');
  setTimeout(() => {
    if (modalBodyList) {
      if (modalBodyList.scrollHeight > modalBodyList.clientHeight) {
        modalBodyList.classList.add('is-scrollable');
      } else {
        modalBodyList.classList.remove('is-scrollable');
      }
    }
  }, 100);
});

/***/ }),

/***/ "./src/js/components/offcanvas.js":
/*!****************************************!*\
  !*** ./src/js/components/offcanvas.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/offcanvas.js */ "./node_modules/bootstrap/js/dist/offcanvas.js");

window.offcanvasInstances = new Map();
window.initializeOffcanvas = function (element) {
  const offcanvas = new bootstrap_js_dist_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__(element);
  offcanvasInstances.set(element, offcanvas);
};
document.querySelectorAll('.offcanvas').forEach(element => {
  initializeOffcanvas(element);
});
document.body.addEventListener('click', event => {
  const target = event.target.closest('[data-bs-toggle="dropdown"]');
  if (!target) return;
  event.preventDefault();
  event.stopPropagation();
  if (!dropdownInstances.has(target)) {
    initializeDropdown(target);
  }
  dropdownInstances.get(target).toggle();
});

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
document.querySelectorAll(".slider").forEach(slider => {
  const valueDisplay = slider.closest(".slider-container").querySelector(".slider-value");
  function updateValue() {
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const value = parseInt(slider.value);
    valueDisplay.textContent = `${value.toLocaleString()} ₽`;

    // Обновляем CSS-переменную для заливки
    const percent = (value - min) / (max - min) * 100;
    slider.style.setProperty("--progress", `${percent}%`);
  }
  slider.addEventListener("input", updateValue);
  updateValue(); // Обновляем при загрузке страницы
});

/***/ }),

/***/ "./src/js/components/swiper.js":
/*!*************************************!*\
  !*** ./src/js/components/swiper.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

// import { Navigation, Pagination } from 'swiper/modules'
// Swiper.use([Navigation, Pagination])

document.querySelectorAll('.swiper-vacancy')?.forEach(element => {
  const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](element, {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 12
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    }
  });
});

/***/ }),

/***/ "./src/js/components/upload.js":
/*!*************************************!*\
  !*** ./src/js/components/upload.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
document.querySelectorAll('[data-upload-container]').forEach(container => {
  let fileItemToRemove = null;
  const mode = container.getAttribute('data-upload-container');

  // Создаём скрытый инпут для выбора файла(ов)
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  // Задаём допустимые форматы (при необходимости можно добавить иные)
  fileInput.accept = 'image/png, image/jpeg, image/jpg, image/webp, image/avif';
  // Скрываем стандартное отображение
  fileInput.dataset.upload = 'file';
  // Если режим multiple – разрешаем множественный выбор
  if (mode === 'multiple') {
    fileInput.multiple = true;
  }
  // Добавляем инпут в контейнер (можно использовать prepend, append или вставить в нужное место)
  container.appendChild(fileInput);

  // Если режим "select-one", создаём скрытый инпут для хранения выбранного ID файла
  let selectedInput = null;
  if (mode === 'select-one') {
    selectedInput = document.createElement('input');
    selectedInput.type = 'hidden';
    selectedInput.name = 'selected_logo';
    selectedInput.dataset.upload = 'selected';
    container.appendChild(selectedInput);
  }

  // Находим контейнер для отображения загруженных файлов и кнопку загрузки
  const uploadContainer = container.querySelector('.upload-container');
  const uploadButton = container.querySelector('[data-upload="button"]');
  uploadButton.addEventListener('click', () => {
    fileInput.click();
  });

  // Список допустимых MIME-типов и ограничение по размеру файла (4 MB)
  const validFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/avif'];
  const maxSize = 4 * 1024 * 1024;
  fileInput.addEventListener('change', event => {
    const files = Array.from(event.target.files);
    if (!files.length) return;
    files.forEach(file => {
      if (!validFormats.includes(file.type)) {
        window.showAlert('error', 'Неподдерживаемый формат файла.');
        return;
      }
      if (file.size > maxSize) {
        window.showAlert('error', 'Файл слишком большой. Максимальный размер — 4 MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        // Генерируем уникальный ID для элемента (можно использовать Date.now() + случайное число)
        const fileId = 'file-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
        let html = '';
        if (mode === 'select-one') {
          // Шаблон для режима выбора одного файла (с радио-кнопкой для выбора)
          html = `
            <label class="upload-item form-check form-radio--default" data-file-id="${fileId}">
              <div class="form-check-checkbox">
                <input type="radio" class="form-check-input" name="logo" value="${fileId}">
                <span class="form-check-checkbox-span"></span>
              </div>
              <div class="upload-item-content">
                <div class="upload-item-picture">
                  <img loading="lazy" src="${reader.result}" class="image" alt="Логотип">
                </div>
                <span class="form-check-label">${file.name}</span>
                <button type="button" class="btn btn-remove">
                  <span class="icon">
                    <svg>
                      <use xlink:href="img/icons/remove.svg#svg-remove"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </label>
          `;
        } else if (mode === 'multiple') {
          // Шаблон для множественной загрузки – здесь элемент сразу "выбран" для отправки.
          // В данном примере в форму будет добавлено скрытое поле с base64-представлением файла.
          html = `
            <div class="upload-item upload-item--multiple" data-file-id="${fileId}">
              <div class="upload-item-content">
                <div class="upload-item-picture">
                  <img loading="lazy" src="${reader.result}" class="image" alt="Логотип">
                </div>
                <button type="button" class="btn btn-remove">
                  <span class="icon">
                    <svg>
                      <use xlink:href="img/icons/remove.svg#svg-remove"></use>
                    </svg>
                  </span>
                </button>
                <input type="hidden" name="logos[]" value="${reader.result}">
              </div>
            </div>
          `;
        } else {
          // Другой режим – можно задать свой шаблон
          html = `
            <div class="upload-item" data-file-id="${fileId}">
              <div class="upload-item-content">
                <div class="upload-item-picture">
                  <img loading="lazy" src="${reader.result}" class="image" alt="Файл">
                </div>
                <span class="file-name">${file.name}</span>
                <button type="button" class="btn btn-remove">
                  <span class="icon">
                    <svg>
                      <use xlink:href="img/icons/remove.svg#svg-remove"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          `;
        }

        // Добавляем новый элемент в контейнер с загруженными файлами
        uploadContainer.insertAdjacentHTML('beforeend', html);
      };
      reader.readAsDataURL(file);
    });

    // Очищаем значение инпута, чтобы можно было загрузить тот же файл повторно
    fileInput.value = '';
  });

  // Делегирование событий для удаления элемента.
  // При клике на кнопку "удалить" соответствующий элемент удаляется из списка.
  container.addEventListener('click', e => {
    const removeBtn = e.target.closest('.btn-remove');
    if (!removeBtn) return;
    e.preventDefault();
    e.stopPropagation();
    const fileItem = removeBtn.closest('.upload-item');
    if (!fileItem) return;
    fileItemToRemove = fileItem;

    // Получаем элемент модального окна
    const modalElement = document.getElementById('modal_remove_question');
    if (!modalElement) return;

    // Если для этого модального окна не создан экземпляр, создаём его
    if (!window.modalInstances.has(modalElement)) {
      window.initializeModal(modalElement);
    }

    // Показываем модальное окно
    window.modalInstances.get(modalElement).show();
  });
  document.addEventListener('show.bs.modal', event => {
    const confirmRemoveBtn = event.srcElement.querySelector('[data-upload-remove="button"]');
    if (confirmRemoveBtn) {
      confirmRemoveBtn.addEventListener('click', e => {
        e.preventDefault();

        // Если элемент для удаления не был сохранён, выходим
        if (!fileItemToRemove) return;

        // Находим контейнер загрузки, чтобы проверить режим (например, "select-one")
        const container = fileItemToRemove.closest('[data-upload-container]');
        if (container) {
          const mode = container.getAttribute('data-upload-container');
          if (mode === 'select-one') {
            // Если элемент выбран (radio-элемент отмечен) – очищаем скрытое поле
            const radio = fileItemToRemove.querySelector('input[type="radio"]');
            if (radio && radio.checked) {
              const selectedInput = container.querySelector('input[data-upload="selected"]');
              if (selectedInput) {
                selectedInput.value = '';
              }
            }
          }

          // Удаляем элемент из DOM
          fileItemToRemove.remove();

          // Если в контейнере больше нет элементов, очищаем область отображения
          const uploadContainer = container.querySelector('.upload-container');
          if (uploadContainer && !uploadContainer.querySelector('.upload-item')) {
            uploadContainer.innerHTML = '';
          }
        } else {
          // Если по какой-то причине контейнер не найден, просто удаляем элемент
          fileItemToRemove.remove();
        }

        // Сбрасываем глобальную переменную, чтобы не оставить ссылку на удалённый элемент
        fileItemToRemove = null;
      });
    }
  });

  // В режиме "select-one" следим за изменением состояния радио-кнопок
  // и записываем значение выбранного файла в скрытое поле
  if (mode === 'select-one' && selectedInput) {
    uploadContainer.addEventListener('change', e => {
      const radio = e.target.closest('input[type="radio"]');
      if (radio) {
        selectedInput.value = radio.value;
      }
    });
  }
});

/***/ }),

/***/ "./src/js/functions/throttle.js":
/*!**************************************!*\
  !*** ./src/js/functions/throttle.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
const throttle = function (func) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;
  return function wrap() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isThrottled) {
      savedArgs = args, savedThis = this;
      return;
    }
    func.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (savedThis) {
        wrap.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
};

/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // initial virtual
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  // Update Index
  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)(targetEl, swiper.wrapperEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();

  // Get breakpoint for window/container width and update parameters
  const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
  const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ elementParents),
/* harmony export */   b: () => (/* binding */ elementOffset),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ now),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ elementOuterSize),
/* harmony export */   g: () => (/* binding */ getSlideTransformEl),
/* harmony export */   h: () => (/* binding */ elementIndex),
/* harmony export */   i: () => (/* binding */ classesToTokens),
/* harmony export */   j: () => (/* binding */ getTranslate),
/* harmony export */   k: () => (/* binding */ elementTransitionEnd),
/* harmony export */   l: () => (/* binding */ isObject),
/* harmony export */   m: () => (/* binding */ makeElementsArray),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ getRotateFix),
/* harmony export */   p: () => (/* binding */ elementStyle),
/* harmony export */   q: () => (/* binding */ elementNextAll),
/* harmony export */   r: () => (/* binding */ elementPrevAll),
/* harmony export */   s: () => (/* binding */ setCSSProperty),
/* harmony export */   t: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   u: () => (/* binding */ showWarning),
/* harmony export */   v: () => (/* binding */ elementIsChildOf),
/* harmony export */   w: () => (/* binding */ extend),
/* harmony export */   x: () => (/* binding */ deleteProps)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const children = [...element.children];
  if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  // Breadth-first search through all parent's children and assigned elements
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot?.children || []), ...(elementToCheck.assignedElements?.() || []));
  }
}
function elementIsChildOf(el, parent) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let isChild = parent.contains(el);
  if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 0.001;
    }
    return v;
  };
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 11.2.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 10, 2025
 */




/***/ }),

/***/ "./node_modules/vanilla-calendar-pro/build/vanilla-calendar.min.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/vanilla-calendar-pro/build/vanilla-calendar.min.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VanillaCalendar)
/* harmony export */ });
/*! name: vanilla-calendar-pro v2.9.10 | url: https://github.com/uvarov-frontend/vanilla-calendar-pro */
var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))__hasOwnProp.call(t,n)&&__defNormalProp(e,n,t[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(t))__propIsEnum.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__publicField=(e,t,n)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,n),n);const classes={calendar:"vanilla-calendar",calendarDefault:"vanilla-calendar_default",calendarMultiple:"vanilla-calendar_multiple",calendarMonth:"vanilla-calendar_month",calendarYear:"vanilla-calendar_year",calendarHidden:"vanilla-calendar_hidden",calendarToInput:"vanilla-calendar_to-input",calendarToInputTop:"vanilla-calendar_to-input_top",calendarToInputBottom:"vanilla-calendar_to-input_bottom",controls:"vanilla-calendar-controls",grid:"vanilla-calendar-grid",gridDisabled:"vanilla-calendar-grid_disabled",column:"vanilla-calendar-column",columnMonth:"vanilla-calendar-column_month",columnYear:"vanilla-calendar-column_year",header:"vanilla-calendar-header",headerContent:"vanilla-calendar-header__content",month:"vanilla-calendar-month",monthDisabled:"vanilla-calendar-month_disabled",year:"vanilla-calendar-year",yearDisabled:"vanilla-calendar-year_disabled",arrow:"vanilla-calendar-arrow",arrowPrev:"vanilla-calendar-arrow_prev",arrowNext:"vanilla-calendar-arrow_next",wrapper:"vanilla-calendar-wrapper",content:"vanilla-calendar-content",week:"vanilla-calendar-week",weekDay:"vanilla-calendar-week__day",weekDayWeekend:"vanilla-calendar-week__day_weekend",days:"vanilla-calendar-days",daysSelecting:"vanilla-calendar-days_selecting",months:"vanilla-calendar-months",monthsSelecting:"vanilla-calendar-months_selecting",monthsMonth:"vanilla-calendar-months__month",monthsMonthSelected:"vanilla-calendar-months__month_selected",monthsMonthDisabled:"vanilla-calendar-months__month_disabled",years:"vanilla-calendar-years",yearsSelecting:"vanilla-calendar-years_selecting",yearsYear:"vanilla-calendar-years__year",yearsYearSelected:"vanilla-calendar-years__year_selected",yearsYearDisabled:"vanilla-calendar-years__year_disabled",time:"vanilla-calendar-time",timeContent:"vanilla-calendar-time__content",timeHours:"vanilla-calendar-time__hours",timeMinutes:"vanilla-calendar-time__minutes",timeKeeping:"vanilla-calendar-time__keeping",timeRanges:"vanilla-calendar-time__ranges",timeRange:"vanilla-calendar-time__range",day:"vanilla-calendar-day",dayHoverFirst:"vanilla-calendar-day_hover-first",dayHoverLast:"vanilla-calendar-day_hover-last",dayHoverIntermediate:"vanilla-calendar-day_hover-intermediate",daySelectedFirst:"vanilla-calendar-day_selected-first",daySelectedLast:"vanilla-calendar-day_selected-last",daySelectedIntermediate:"vanilla-calendar-day_selected-intermediate",dayPopup:"vanilla-calendar-day__popup",dayBtn:"vanilla-calendar-day__btn",dayBtnPrev:"vanilla-calendar-day__btn_prev",dayBtnNext:"vanilla-calendar-day__btn_next",dayBtnToday:"vanilla-calendar-day__btn_today",dayBtnSelected:"vanilla-calendar-day__btn_selected",dayBtnHover:"vanilla-calendar-day__btn_hover",dayBtnDisabled:"vanilla-calendar-day__btn_disabled",dayBtnWeekend:"vanilla-calendar-day__btn_weekend",dayBtnHoliday:"vanilla-calendar-day__btn_holiday",weekNumbers:"vanilla-calendar-week-numbers",weekNumbersTitle:"vanilla-calendar-week-numbers__title",weekNumbersContent:"vanilla-calendar-week-numbers__content",weekNumber:"vanilla-calendar-week-number",isFocus:"vanilla-calendar-is-focus"},DOMDefault=e=>`<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div><#ControlTime />`,DOMMultiple=e=>`<div class="${e.controls}"><#ArrowPrev /><#ArrowNext /></div><div class="${e.grid}"><#Multiple><div class="${e.column}"><div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div></div><#/Multiple></div><#ControlTime />`,DOMMonths=e=>`<div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><div class="${e.content}"><#Months /></div></div>`,DOMYears=e=>`<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><div class="${e.content}"><#Years /></div></div>`;class DefaultOptionsCalendar{constructor(){var e;__publicField(this,"isInit",!1),__publicField(this,"isInputInit",!1),__publicField(this,"input",!1),__publicField(this,"type","default"),__publicField(this,"months",2),__publicField(this,"jumpMonths",1),__publicField(this,"jumpToSelectedDate",!1),__publicField(this,"toggleSelected",!0),__publicField(this,"date",{min:"1970-01-01",max:"2470-12-31",today:new Date}),__publicField(this,"settings",{lang:"en",iso8601:!0,range:{min:void 0,max:void 0,disablePast:!1,disableGaps:!1,edgesOnly:!1,disableAllDays:!1,disableWeekday:void 0,disabled:void 0,enabled:void 0},selection:{day:"single",month:!0,year:!0,time:!1,controlTime:"all",stepHours:1,stepMinutes:1,cancelableDay:!0},selected:{dates:void 0,month:void 0,year:void 0,holidays:void 0,time:void 0},visibility:{theme:"system",themeDetect:"html[data-theme]",monthShort:!0,weekNumbers:!1,weekend:!0,today:!0,disabled:!1,daysOutside:!0,positionToInput:"left"}}),__publicField(this,"locale",{months:[],weekday:[]}),__publicField(this,"sanitizer",(e=>e)),__publicField(this,"actions",{clickDay:null,clickWeekNumber:null,clickMonth:null,clickYear:null,clickArrow:null,changeTime:null,changeToInput:null,getDays:null,getMonths:null,getYears:null,initCalendar:null,updateCalendar:null,destroyCalendar:null,showCalendar:null,hideCalendar:null}),__publicField(this,"popups",{}),__publicField(this,"CSSClasses",__spreadValues({},classes)),__publicField(this,"DOMTemplates",{default:(e=this.CSSClasses,`<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div><#ControlTime />`),multiple:DOMMultiple(this.CSSClasses),month:DOMMonths(this.CSSClasses),year:DOMYears(this.CSSClasses)}),__publicField(this,"HTMLElement"),__publicField(this,"HTMLOriginalElement"),__publicField(this,"HTMLInputElement"),__publicField(this,"rangeMin"),__publicField(this,"rangeMax"),__publicField(this,"rangeDisabled"),__publicField(this,"rangeEnabled"),__publicField(this,"selectedDates"),__publicField(this,"selectedHolidays"),__publicField(this,"selectedMonth"),__publicField(this,"selectedYear"),__publicField(this,"selectedHours"),__publicField(this,"selectedMinutes"),__publicField(this,"selectedKeeping"),__publicField(this,"selectedTime"),__publicField(this,"currentType"),__publicField(this,"correctMonths"),__publicField(this,"viewYear"),__publicField(this,"dateMin"),__publicField(this,"dateMax")}}const getDateString=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,getDate=e=>new Date(`${e}T00:00:00`),parseDates=e=>e.reduce(((e,t)=>{if(t instanceof Date||"number"==typeof t){const n=t instanceof Date?t:new Date(t);e.push(n.toISOString().substring(0,10))}else t.match(/^(\d{4}-\d{2}-\d{2})$/g)?e.push(t):t.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g,((t,n,a)=>{const s=getDate(n),l=getDate(a),i=new Date(s.getTime());for(;i<=l;i.setDate(i.getDate()+1))e.push(getDateString(i));return t}));return e}),[]),getLocalDate=()=>{const e=new Date;return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().substring(0,10)},transformTime12=e=>e?{0:"12",13:"01",14:"02",15:"03",16:"04",17:"05",18:"06",19:"07",20:"08",21:"09",22:"10",23:"11"}[Number(e)]||String(e):"",messages={notFoundSelector:e=>`${e} is not found, check the first argument passed to new VanillaCalendar.`,notInit:'The calendar has not been initialized, please initialize it using the "init()" method first.',notLocale:'You specified "define" for "settings.lang" but did not provide the required values for "locale.weekday" or "locale.months".',incorrectTheme:'Incorrect name of theme in "settings.visibility.theme".',incorrectTime:"The value of the time property can be: false, true, 12 or 24."},initSelectedMonthYear=e=>{var t;if(e.jumpToSelectedDate&&(null==(t=e.settings.selected.dates)?void 0:t.length)&&void 0===e.settings.selected.month&&void 0===e.settings.selected.year){const t=getDate(parseDates(e.settings.selected.dates)[0]);e.settings.selected.month=t.getMonth(),e.settings.selected.year=t.getFullYear()}const n=void 0!==e.settings.selected.month&&Number(e.settings.selected.month)>=0&&Number(e.settings.selected.month)<12,a=void 0!==e.settings.selected.year&&Number(e.settings.selected.year)>=0&&Number(e.settings.selected.year)<=9999;e.selectedMonth=n?Number(e.settings.selected.month):e.date.today.getMonth(),e.selectedYear=a?Number(e.settings.selected.year):e.date.today.getFullYear(),e.viewYear=e.selectedYear},initRange=e=>{var t,n,a;"today"===e.date.min&&(e.date.min=getLocalDate()),"today"===e.date.max&&(e.date.max=getLocalDate()),"today"===e.settings.range.min&&(e.settings.range.min=getLocalDate()),"today"===e.settings.range.max&&(e.settings.range.max=getLocalDate()),e.settings.range.min=e.settings.range.min?getDate(e.date.min)>=getDate(e.settings.range.min)?e.date.min:e.settings.range.min:e.date.min,e.settings.range.max=e.settings.range.max?getDate(e.date.max)<=getDate(e.settings.range.max)?e.date.max:e.settings.range.max:e.date.max;const s=e.settings.range.disablePast&&!e.settings.range.disableAllDays&&getDate(e.settings.range.min)<e.date.today;e.rangeMin=s||e.settings.range.disableAllDays?getDateString(e.date.today):e.settings.range.min,e.rangeMax=e.settings.range.disableAllDays?getDateString(e.date.today):e.settings.range.max,e.rangeDisabled=e.settings.range.disabled&&!e.settings.range.disableAllDays?parseDates(e.settings.range.disabled):e.settings.range.disableAllDays?[e.rangeMin]:[],e.rangeDisabled.length>1&&e.rangeDisabled.sort(((e,t)=>+new Date(e)-+new Date(t))),e.rangeEnabled=e.settings.range.enabled?parseDates(e.settings.range.enabled):[],(null==(t=e.rangeEnabled)?void 0:t[0])&&(null==(n=e.rangeDisabled)?void 0:n[0])&&(e.rangeDisabled=e.rangeDisabled.filter((t=>!e.rangeEnabled.includes(t)))),e.rangeEnabled.length>1&&e.rangeEnabled.sort(((e,t)=>+new Date(e)-+new Date(t))),(null==(a=e.rangeEnabled)?void 0:a[0])&&e.settings.range.disableAllDays&&(e.rangeMin=e.rangeEnabled[0],e.rangeMax=e.rangeEnabled[e.rangeEnabled.length-1])},initSelectedDates=e=>{var t,n;e.selectedDates=(null==(t=e.settings.selected.dates)?void 0:t[0])?parseDates(e.settings.selected.dates):[],e.selectedHolidays=(null==(n=e.settings.selected.holidays)?void 0:n[0])?parseDates(e.settings.selected.holidays):[]},initDateMinMax=e=>{e.dateMin=e.settings.visibility.disabled?getDate(e.date.min):getDate(e.rangeMin),e.dateMax=e.settings.visibility.disabled?getDate(e.date.max):getDate(e.rangeMax)},initTime=e=>{const t=!0===e.settings.selection.time||12===e.settings.selection.time;if(t||24===e.settings.selection.time){let n=!1;if("string"==typeof e.settings.selected.time){const a=t?/^([0-9]|0[1-9]|1[0-2]):([0-5][0-9])|(AM|PM)/g:/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])/g;e.settings.selected.time.replace(a,((a,s,l,i)=>(s&&l&&(n=!0,e.selectedHours=s,e.selectedMinutes=l),i&&t?e.selectedKeeping=i:t&&(e.selectedKeeping="AM"),"")))}!n&&t?(e.selectedHours=transformTime12(String(e.date.today.getHours())),e.selectedMinutes=String(e.date.today.getMinutes()),e.selectedKeeping=Number(e.date.today.getHours())>=12?"PM":"AM"):n||(e.selectedHours=String(e.date.today.getHours()),e.selectedMinutes=String(e.date.today.getMinutes())),e.selectedHours=Number(e.selectedHours)<10?`0${Number(e.selectedHours)}`:`${e.selectedHours}`,e.selectedMinutes=Number(e.selectedMinutes)<10?`0${Number(e.selectedMinutes)}`:`${e.selectedMinutes}`,e.selectedTime=`${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping?` ${e.selectedKeeping}`:""}`}else if(e.settings.selection.time)throw new Error(messages.incorrectTime)},initCorrectMonths=e=>{e.correctMonths="multiple"===e.type?1===e.months?2:e.months>12?12:e.months:1},setVariables=e=>{e.currentType=e.type,initSelectedMonthYear(e),initRange(e),initSelectedDates(e),initDateMinMax(e),initTime(e),initCorrectMonths(e)},setVisibilityArrows=({arrowPrev:e,arrowNext:t,isPrevHidden:n,isNextHidden:a})=>{e.style.visibility=n?"hidden":"",t.style.visibility=a?"hidden":""},visibilityArrows=e=>{var t,n;if("month"===e.currentType)return;const a=null==(t=e.HTMLElement)?void 0:t.querySelector(`.${e.CSSClasses.arrowPrev}`),s=null==(n=e.HTMLElement)?void 0:n.querySelector(`.${e.CSSClasses.arrowNext}`);if(!a||!s)return;({default:()=>{const t=getDate(getDateString(new Date(e.selectedYear,e.selectedMonth,1))),n=new Date(t.getTime()),l=new Date(t.getTime());n.setMonth(n.getMonth()-e.jumpMonths),l.setMonth(l.getMonth()+e.jumpMonths),e.settings.selection.year||(e.dateMin.setFullYear(t.getFullYear()),e.dateMax.setFullYear(t.getFullYear()));const i=!e.settings.selection.month||n.getFullYear()<e.dateMin.getFullYear()||n.getFullYear()===e.dateMin.getFullYear()&&n.getMonth()<e.dateMin.getMonth(),r=!e.settings.selection.month||l.getFullYear()>e.dateMax.getFullYear()||l.getFullYear()===e.dateMax.getFullYear()&&l.getMonth()>e.dateMax.getMonth();setVisibilityArrows({arrowPrev:a,arrowNext:s,isPrevHidden:i,isNextHidden:r})},year:()=>{setVisibilityArrows({arrowPrev:a,arrowNext:s,isPrevHidden:e.dateMin.getFullYear()&&e.viewYear-7<=e.dateMin.getFullYear(),isNextHidden:e.dateMax.getFullYear()&&e.viewYear+7>=e.dateMax.getFullYear()})}})["multiple"===e.currentType?"default":e.currentType]()},getWeekNumber=(e,t)=>{if(!e)return null;const n=getDate(e),a=t?n.getDay()||7:n.getDay();n.setDate(n.getDate()+4-a);const s=new Date(n.getFullYear(),0,1),l=Math.ceil(((+n-+s)/864e5+1)/7);return{year:n.getFullYear(),week:l}};function getOffset(e){if(!e||!e.getBoundingClientRect)return{top:0,bottom:0,left:0,right:0};const t=e.getBoundingClientRect(),n=document.documentElement;return{bottom:t.bottom,right:t.right,top:t.top+window.scrollY-n.clientTop,left:t.left+window.scrollX-n.clientLeft}}function getWindowScrollPosition(){return{left:window.scrollX||document.documentElement.scrollLeft||0,top:window.scrollY||document.documentElement.scrollTop||0}}function getViewportDimensions(){return{vw:Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),vh:Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}}function calculateAvailableSpace(e){const{top:t,left:n}=getWindowScrollPosition(),{top:a,left:s}=getOffset(e),{vh:l,vw:i}=getViewportDimensions(),r=a-t,d=s-n;return{top:r,bottom:l-(r+e.clientHeight),left:d,right:i-(d+e.clientWidth)}}function getAvailablePosition(e,t,n=5){const a={top:!0,bottom:!0,left:!0,right:!0},s=[];if(!t||!e)return{canShow:a,parentPositions:s};const{bottom:l,top:i}=calculateAvailableSpace(e),{top:r,left:d}=getOffset(e),{height:o,width:c}=t.getBoundingClientRect(),{vh:u,vw:m}=getViewportDimensions(),g=m/2,h=u/2;return[{condition:r<h,position:"top"},{condition:r>h,position:"bottom"},{condition:d<g,position:"left"},{condition:d>g,position:"right"}].forEach((({condition:e,position:t})=>{e&&s.push(t)})),Object.assign(a,{top:o<=i-n,bottom:o<=l-n,left:c<=d,right:c<=m-d}),{canShow:a,parentPositions:s}}function findBestPickerPosition(e,t){const n="left";if(!t||!e)return n;const{canShow:a,parentPositions:s}=getAvailablePosition(e,t),l=a.left&&a.right;return(l&&a.bottom?"center":l&&a.top?["top","center"]:Array.isArray(s)?["bottom"===s[0]?"top":"bottom",...s.slice(1)]:s)||n}const setPositionCalendar=(e,t,n,a)=>{if(e){const s="auto"===n?findBestPickerPosition(e,t):n,l={top:-t.offsetHeight,bottom:e.offsetHeight,left:0,center:e.offsetWidth/2-t.offsetWidth/2,right:e.offsetWidth-t.offsetWidth},i=Array.isArray(s)?s[0]:"bottom",r=Array.isArray(s)?s[1]:s;"bottom"===i?(t.classList.remove(a.calendarToInputTop),t.classList.add(a.calendarToInputBottom)):(t.classList.remove(a.calendarToInputBottom),t.classList.add(a.calendarToInputTop));const{top:d,left:o}=getOffset(e),c=d+l[i];let u=o+l[r];const{vw:m}=getViewportDimensions();if(u+t.clientWidth>m){const e=window.innerWidth-document.body.clientWidth;u=m-t.clientWidth-e}else u<0&&(u=0);Object.assign(t.style,{left:`${u}px`,top:`${c}px`})}},handleDay=(e,t,n,a)=>{const s=e.CSSClasses.dayPopup,l=a.querySelector(`[data-calendar-day="${t}"]`);if(l&&((null==n?void 0:n.modifier)&&l.classList.add(...n.modifier.trim().split(" ")),null==n?void 0:n.html)){const t=l.parentElement,a=document.createElement("div");a.className=s,a.innerHTML=e.sanitizer(n.html),t.appendChild(a),setTimeout((()=>{if(a){const{canShow:e}=getAvailablePosition(t,a),n=5;let s=t.offsetHeight,l=0;e.bottom||(s=-a.offsetHeight-n),e.left&&!e.right&&(l=t.offsetWidth-a.offsetWidth/2),!e.left&&e.right&&(l=a.offsetWidth/2),Object.assign(a.style,{left:`${l}px`,top:`${s}px`})}}))}},createPopup=(e,t)=>{var n;e.popups&&(null==(n=Object.entries(e.popups))||n.forEach((([n,a])=>handleDay(e,n,a,t))))},createWeekNumber=(e,t,n,a,s)=>{const l=t[n].querySelector(`.${e.CSSClasses.dayBtn}`),i=getWeekNumber(null==l?void 0:l.dataset.calendarDay,e.settings.iso8601);if(!i)return;const r=a.cloneNode(!0);r.innerText=String(i.week),r.dataset.calendarYearWeek=String(i.year),s.appendChild(r)},createWeekNumbers=(e,t,n,a,s)=>{if(!e.settings.visibility.weekNumbers)return;a.textContent="";const l=document.createElement("b");l.className=e.CSSClasses.weekNumbersTitle,l.innerText="#",a.appendChild(l);const i=document.createElement("div");i.className=e.CSSClasses.weekNumbersContent,a.appendChild(i);const r=document.createElement("button");r.type="button",r.className=e.CSSClasses.weekNumber;const d=s.querySelectorAll(`.${e.CSSClasses.day}`),o=Math.ceil((t+n)/7);for(let t=0;t<o;t++)createWeekNumber(e,d,0===t?6:7*t,r,i)},setDisabledDays=(e,t,n)=>{var a,s,l,i,r;const d=null==(a=e.settings.range.disableWeekday)?void 0:a.includes(n),o=e.settings.range.disableAllDays&&!!(null==(s=e.rangeEnabled)?void 0:s[0]);!d&&!o||(null==(l=e.rangeEnabled)?void 0:l.includes(t))||(null==(i=e.rangeDisabled)?void 0:i.includes(t))||(e.rangeDisabled.push(t),null==(r=e.rangeDisabled)||r.sort(((e,t)=>+new Date(e)-+new Date(t))))},setDayModifier=(e,t,n,a,s,l,i)=>{var r,d,o;if((getDate(e.rangeMin)>getDate(l)||getDate(e.rangeMax)<getDate(l)||(null==(r=e.rangeDisabled)?void 0:r.includes(l))||!e.settings.selection.month&&i||!e.settings.selection.year&&getDate(l).getFullYear()!==t)&&(a.classList.add(e.CSSClasses.dayBtnDisabled),a.tabIndex=-1),e.settings.visibility.today&&getDateString(e.date.today)===l&&a.classList.add(e.CSSClasses.dayBtnToday),!e.settings.visibility.weekend||0!==s&&6!==s||a.classList.add(e.CSSClasses.dayBtnWeekend),(null==(d=e.selectedHolidays)?void 0:d.includes(l))&&a.classList.add(e.CSSClasses.dayBtnHoliday),(null==(o=e.selectedDates)?void 0:o.includes(l))&&(a.classList.add(e.CSSClasses.dayBtnSelected),e.selectedDates.length>1&&"multiple-ranged"===e.settings.selection.day&&(e.selectedDates[0]===l&&n.classList.add(e.CSSClasses.daySelectedFirst),e.selectedDates[e.selectedDates.length-1]===l&&n.classList.add(e.CSSClasses.daySelectedLast),e.selectedDates[0]!==l&&e.selectedDates[e.selectedDates.length-1]!==l&&n.classList.add(e.CSSClasses.daySelectedIntermediate))),e.settings.range.edgesOnly&&e.selectedDates.length>1&&"multiple-ranged"===e.settings.selection.day){const t=+new Date(e.selectedDates[0]),s=+new Date(e.selectedDates[e.selectedDates.length-1]),i=+new Date(l);i>t&&i<s&&(a.classList.add(e.CSSClasses.dayBtnSelected),n.classList.add(e.CSSClasses.daySelectedIntermediate))}},createDay=(e,t,n,a,s,l,i,r)=>{const d=document.createElement("div");d.className=e.CSSClasses.day;const o=document.createElement("button");o.className=`${e.CSSClasses.dayBtn}${r?` ${r}`:""}`,o.type="button",o.innerText=String(a),o.dataset.calendarDay=l;e.settings.visibility.weekNumbers&&(()=>{const t=getWeekNumber(l,e.settings.iso8601);t&&(o.dataset.calendarWeekNumber=String(t.week))})(),i?e.settings.visibility.daysOutside&&d.appendChild(o):d.appendChild(o),setDisabledDays(e,l,s),setDayModifier(e,t,d,o,s,l,i),n.appendChild(d),e.actions.getDays&&e.actions.getDays(a,l,d,o,e)},prevMonth=(e,t,n,a,s)=>{let l=new Date(n,a,0).getDate()-(s-1);const i=0===a?n-1:n,r=0===a?12:a<10?`0${a}`:a;for(let a=s;a>0;a--,l++){const a=`${i}-${r}-${l}`,s=getDate(a).getDay();createDay(e,n,t,l,s,a,!0,e.CSSClasses.dayBtnPrev)}},currentMonth=(e,t,n,a,s)=>{for(let l=1;l<=n;l++){const n=new Date(a,s,l),i=getDateString(n),r=n.getDay();createDay(e,a,t,l,r,i,!1,null)}},nextMonth=(e,t,n,a,s,l)=>{const i=l+n,r=7*Math.ceil(i/7)-i,d=s+1===12?a+1:a,o=s+1===12?"01":s+2<10?`0${s+2}`:s+2;for(let n=1;n<=r;n++){const s=`${d}-${o}-${n<10?`0${n}`:String(n)}`,l=getDate(s).getDay();createDay(e,a,t,n,l,s,!0,e.CSSClasses.dayBtnNext)}},createDays=e=>{const t=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.days}`),n=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.weekNumbers}`),a=new Date(e.selectedYear,e.selectedMonth,1);t.forEach(((t,s)=>{const l=new Date(a);l.setMonth(l.getMonth()+s);const i=l.getMonth(),r=l.getFullYear(),d=new Date(r,i,1),o=new Date(r,i+1,0).getDate(),c=e.settings.iso8601?(0!==d.getDay()?d.getDay():7)-1:d.getDay();e.settings.selection.day&&t.classList.add(e.CSSClasses.daysSelecting),t.textContent="",prevMonth(e,t,r,i,c),currentMonth(e,t,o,r,i),nextMonth(e,t,o,r,i,c),createWeekNumbers(e,c,o,n[s],t),createPopup(e,t)}))},visibilityMonth=(e,t,n,a)=>{const s=new Date(a.setMonth(e.selectedMonth+n)).getMonth(),l=!1===e.settings.selection.month||"only-arrows"===e.settings.selection.month;t.tabIndex=l?-1:0,t.classList.toggle(e.CSSClasses.monthDisabled,l),t.setAttribute("data-calendar-selected-month",String(s)),t.innerText=e.locale.months[s]},visibilityYear=(e,t,n,a)=>{const s=new Date(a.setFullYear(e.selectedYear,e.selectedMonth+n)).getFullYear(),l=!1===e.settings.selection.year||"only-arrows"===e.settings.selection.year;t.tabIndex=l?-1:0,t.classList.toggle(e.CSSClasses.yearDisabled,l),t.setAttribute("data-calendar-selected-year",String(s)),t.innerText=String(s)},visibilityTitle=e=>{var t,n;const a=null==(t=e.HTMLElement)?void 0:t.querySelectorAll("[data-calendar-selected-month]"),s=null==(n=e.HTMLElement)?void 0:n.querySelectorAll("[data-calendar-selected-year]");if(!(null==a?void 0:a[0])&&(null==s?void 0:s[0]))return;const l=new Date(e.selectedYear,e.selectedMonth,1);null==a||a.forEach(((t,n)=>visibilityMonth(e,t,n,l))),null==s||s.forEach(((t,n)=>visibilityYear(e,t,n,l)))},changeMonth=(e,t)=>{const n=getDate(getDateString(new Date(e.selectedYear,e.selectedMonth,1)));({prev:()=>n.setMonth(n.getMonth()-e.jumpMonths),next:()=>n.setMonth(n.getMonth()+e.jumpMonths)})[t](),[e.selectedMonth,e.selectedYear]=[n.getMonth(),n.getFullYear()],visibilityTitle(e),visibilityArrows(e),createDays(e)},ArrowPrev=e=>`<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowPrev}"data-calendar-arrow="prev"></button>`,ArrowNext=e=>`<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowNext}"data-calendar-arrow="next"></button>`,Month=e=>`<button type="button"class="${e.CSSClasses.month}"data-calendar-selected-month></button>`,Year=e=>`<button type="button"class="${e.CSSClasses.year}"data-calendar-selected-year></button>`,Week=e=>`<div class="${e.CSSClasses.week}"></div>`,Days=e=>`<div class="${e.CSSClasses.days}"></div>`,Months=e=>`<div class="${e.CSSClasses.months}"></div>`,Years=e=>`<div class="${e.CSSClasses.years}"></div>`,WeekNumbers=e=>e.settings.visibility.weekNumbers?`<div class="${e.CSSClasses.weekNumbers}"></div>`:"",ControlTime=e=>e.settings.selection.time?`<div class="${e.CSSClasses.time}"></div>`:"",components=Object.freeze(Object.defineProperty({__proto__:null,ArrowNext:ArrowNext,ArrowPrev:ArrowPrev,ControlTime:ControlTime,Days:Days,Month:Month,Months:Months,Week:Week,WeekNumbers:WeekNumbers,Year:Year,Years:Years},Symbol.toStringTag,{value:"Module"})),getComponent=e=>components[e],DOMParser=(e,t)=>t.replace(/[\n\t]/g,"").replace(/<#(?!\/?Multiple)(.*?)>/g,((t,n)=>{const a=(s=n.replace(/[/\s\n\t]/g,""),components[s]);var s;const l=a?a(e):"";return e.sanitizer(l)})).replace(/[\n\t]/g,""),MultipleParser=(e,t)=>t.replace(/<#Multiple>(.*?)<#\/Multiple>/g,((t,n)=>{let a="";for(let t=0;t<e.correctMonths;t++)a+=n;return e.sanitizer(a)})).replace(/[\n\t]/g,""),createDOM=(e,t)=>{const{HTMLElement:n,CSSClasses:a,DOMTemplates:s,type:l,currentType:i,correctMonths:r}=e,d=(s,l)=>{if(!t)return;const i=n.querySelector(`.${a.controls}`);i&&n.removeChild(i);n.querySelector(`.${a.grid}`).classList.add(a.gridDisabled);const r=t.closest(`.${a.column}`);r.classList.add(s),r.innerHTML=DOMParser(e,l)},o={default:()=>{n.classList.add(a.calendarDefault),n.classList.remove(a.calendarMonth,a.calendarYear),n.innerHTML=DOMParser(e,s.default)},multiple:()=>{r&&(n.classList.add(a.calendarMultiple),n.classList.remove(a.calendarMonth,a.calendarYear),n.innerHTML=MultipleParser(e,DOMParser(e,s.multiple)))},month:()=>{"multiple"!==l?(n.classList.add(a.calendarMonth),n.classList.remove(a.calendarDefault,a.calendarYear),n.innerHTML=DOMParser(e,s.month)):d(a.columnMonth,s.month)},year:()=>{"multiple"!==l?(n.classList.add(a.calendarYear),n.classList.remove(a.calendarDefault,a.calendarMonth),n.innerHTML=DOMParser(e,s.year)):d(a.columnYear,s.year)}};n.classList.add(a.calendar),o[i]()},createYearEl=(e,t,n,a,s)=>{const l=t.cloneNode(!1);return l.className=`${e.CSSClasses.yearsYear}${n===s?` ${e.CSSClasses.yearsYearSelected}`:a?` ${e.CSSClasses.yearsYearDisabled}`:""}`,l.dataset.calendarYear=String(s),l.title=String(s),l.innerText=String(s),a&&(l.tabIndex=-1),l},createYears=(e,t)=>{const n=(null==t?void 0:t.dataset.calendarSelectedYear)?Number(null==t?void 0:t.dataset.calendarSelectedYear):e.selectedYear;e.currentType="year",createDOM(e,t),visibilityTitle(e),visibilityArrows(e);const a=e.HTMLElement.querySelector(`.${e.CSSClasses.years}`);if(!e.settings.selection.year||!a)return;a.classList.add(e.CSSClasses.yearsSelecting);const s="multiple"!==e.type||e.selectedYear===n?0:1,l=document.createElement("button");l.type="button";for(let t=e.viewYear-7;t<e.viewYear+8;t++){const i=t<e.dateMin.getFullYear()+s||t>e.dateMax.getFullYear(),r=createYearEl(e,l,n,i,t);a.appendChild(r),e.actions.getYears&&e.actions.getYears(t,r,e)}},handleClickArrow=(e,t)=>{const n=t.target.closest(`.${e.CSSClasses.arrow}`);n&&(["default","multiple"].includes(e.currentType)?changeMonth(e,n.dataset.calendarArrow):"year"===e.currentType&&void 0!==e.viewYear&&(e.viewYear+={prev:-15,next:15}[n.dataset.calendarArrow],createYears(e,t.target)),e.actions.clickArrow&&e.actions.clickArrow(t,e))},handleClickWeekNumber=(e,t)=>{var n;if(!e.settings.visibility.weekNumbers||!e.actions.clickWeekNumber)return;const a=t.target.closest(`.${e.CSSClasses.weekNumber}`),s=null==(n=e.HTMLElement)?void 0:n.querySelectorAll("[data-calendar-week-number]");if(!a||!s)return;const l=Number(a.innerText),i=Number(a.dataset.calendarYearWeek),r=Array.from(s).filter((e=>Number(e.dataset.calendarWeekNumber)===l));e.actions.clickWeekNumber(t,l,r,i,e)},capitalizeFirstLetter=e=>`${e.charAt(0).toUpperCase()}${e.substring(1,e.length)}`.replace(/\./,""),getLocaleWeekday=(e,t)=>{const n=new Date(`1978-01-0${t+1}T00:00:00.000Z`).toLocaleString(e.settings.lang,{weekday:"short",timeZone:"UTC"});e.locale.weekday.push(capitalizeFirstLetter(n))},getLocaleMonth=(e,t)=>{const n=new Date(`1978-${t+1<=9?`0${t+1}`:t+1}-01T00:00:00.000Z`).toLocaleString(e.settings.lang,{month:"long",timeZone:"UTC"});e.locale.months.push(capitalizeFirstLetter(n))},getLocale=e=>{if("define"!==e.settings.lang||!e.locale.weekday[6]||!e.locale.months[11]){if("define"===e.settings.lang)throw new Error(messages.notLocale);e.locale.weekday=[],e.locale.months=[];for(let t=0;t<7;t++)getLocaleWeekday(e,t);for(let t=0;t<12;t++)getLocaleMonth(e,t)}},relationshipID=e=>{if("multiple"!==e.type)return 0;const t=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`),n=Array.from(t).findIndex((t=>t.classList.contains(`${e.CSSClasses.columnMonth}`)));return n>0?n:0},createMonthEl=(e,t,n,a,s,l)=>{const i=t.cloneNode(!1);return i.className=`${e.CSSClasses.monthsMonth}${n===l?` ${e.CSSClasses.monthsMonthSelected}`:s?` ${e.CSSClasses.monthsMonthDisabled}`:""}`,i.title=a,i.innerText=`${e.settings.visibility.monthShort?a.substring(0,3):a}`,i.dataset.calendarMonth=String(l),s&&(i.tabIndex=-1),i},createMonths=(e,t)=>{var n,a;const s=(null==t?void 0:t.dataset.calendarSelectedMonth)?Number(t.dataset.calendarSelectedMonth):e.selectedMonth,l=null==(n=null==t?void 0:t.closest(`.${e.CSSClasses.column}`))?void 0:n.querySelector(`.${e.CSSClasses.year}`),i=l?Number(l.dataset.calendarSelectedYear):e.selectedYear;e.currentType="month",createDOM(e,t),visibilityTitle(e);const r=null==(a=e.HTMLElement)?void 0:a.querySelector(`.${e.CSSClasses.months}`);if(!e.settings.selection.month||!r)return;r.classList.add(e.CSSClasses.monthsSelecting);const d=e.jumpMonths>1?e.locale.months.map(((t,n)=>s-e.jumpMonths*n)).concat(e.locale.months.map(((t,n)=>s+e.jumpMonths*n))).filter((e=>e>=0&&e<=12)):Array.from(Array(12).keys()),o=document.createElement("button");o.type="button";for(let t=0;t<12;t++){const n=e.locale.months[t],a=t<e.dateMin.getMonth()+relationshipID(e)&&i<=e.dateMin.getFullYear()||t>e.dateMax.getMonth()+relationshipID(e)&&i>=e.dateMax.getFullYear()||t!==s&&!d.includes(t),l=createMonthEl(e,o,s,n,a,t);r.appendChild(l),e.actions.getMonths&&e.actions.getMonths(t,l,e)}},transformTime24=(e,t)=>e&&t?{0:{AM:"00",PM:"12"},1:{AM:"01",PM:"13"},2:{AM:"02",PM:"14"},3:{AM:"03",PM:"15"},4:{AM:"04",PM:"16"},5:{AM:"05",PM:"17"},6:{AM:"06",PM:"18"},7:{AM:"07",PM:"19"},8:{AM:"08",PM:"20"},9:{AM:"09",PM:"21"},10:{AM:"10",PM:"22"},11:{AM:"11",PM:"23"},12:{AM:"12",PM:"12"}}[Number(e)][t]:"",getInputElement=(e,t,n)=>e.querySelector(`.${t}${n?` input[name="${n}"]`:""}`),addMouseEvents=(e,t,n)=>{e.addEventListener("mouseover",(()=>t.classList.add(n))),e.addEventListener("mouseout",(()=>t.classList.remove(n)))},setTime=(e,t,n,a)=>{({hours:()=>{e.selectedHours=n},minutes:()=>{e.selectedMinutes=n}})[a](),e.selectedTime=`${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping?` ${e.selectedKeeping}`:""}`,e.actions.changeTime&&e.actions.changeTime(t,e),e.input&&e.HTMLInputElement&&e.actions.changeToInput&&e.actions.changeToInput(t,e)},changeRange=(e,t,n,a,s,l)=>{t.addEventListener("input",(t=>{const i=t.target,r=Number(i.value),d=r<10?`0${r}`:`${r}`;if("hours"!==s||12!==l)return n.value=d,void setTime(e,t,d,s);r<l&&r>0?(n.value=d,e.selectedKeeping="AM",a.innerText=e.selectedKeeping,setTime(e,t,d,s)):(0===r?(e.selectedKeeping="AM",a.innerText="AM"):(e.selectedKeeping="PM",a.innerText="PM"),n.value=transformTime12(i.value),setTime(e,t,transformTime12(i.value),s))}))},changeInput=(e,t,n,a,s,l)=>{n.addEventListener("change",(n=>{const i=n.target,r=Number(i.value),d=r<10?`0${r}`:`${r}`;"hours"===s&&12===l?i.value&&r<=l&&r>0?(i.value=d,t.value=transformTime24(d,e.selectedKeeping),setTime(e,n,d,s)):i.value&&r<24&&(r>l||0===r)?(0===r?(e.selectedKeeping="AM",a.innerText="AM"):(e.selectedKeeping="PM",a.innerText="PM"),i.value=transformTime12(i.value),t.value=d,setTime(e,n,transformTime12(i.value),s)):i.value=e.selectedHours:i.value&&r<=l&&r>=0?(i.value=d,t.value=d,setTime(e,n,d,s)):"hours"===s?i.value=e.selectedHours:"minutes"===s&&(i.value=e.selectedMinutes)}))},clickBtnKeepingTime=(e,t,n)=>{t.addEventListener("click",(a=>{e.selectedKeeping=t.innerText.includes("AM")?"PM":"AM",t.innerText=e.selectedKeeping,n.value=transformTime24(e.selectedHours,e.selectedKeeping),setTime(e,a,e.selectedHours,"hours")}))},changeTime=(e,t,n)=>{const a=24===n?23:n||12,s=getInputElement(t,e.CSSClasses.timeRange,"hours"),l=getInputElement(t,e.CSSClasses.timeRange,"minutes"),i=getInputElement(t,e.CSSClasses.timeHours,"hours"),r=getInputElement(t,e.CSSClasses.timeMinutes,"minutes"),d=t.querySelector(`.${e.CSSClasses.timeKeeping}`);addMouseEvents(s,i,e.CSSClasses.isFocus),addMouseEvents(l,r,e.CSSClasses.isFocus),changeRange(e,s,i,d,"hours",a),changeRange(e,l,r,d,"minutes",0),changeInput(e,s,i,d,"hours",a),changeInput(e,l,r,d,"minutes",59),d&&clickBtnKeepingTime(e,d,s)},InputTime=(e,t,n,a)=>`<label class="${t}"><input type="text"name="${e}"maxlength="2"value="${n}"${a?"disabled":""}></label>`,RangeTime=(e,t,n,a,s,l)=>`<label class="${t}"><input type="range"name="${e}"min="${n}"max="${a}"step="${s}"value="${l}"></label>`,createTime=e=>{const t=e.HTMLElement.querySelector(`.${e.CSSClasses.time}`);if(!t)return;const n=!0===e.settings.selection.time?12:e.settings.selection.time,a="range"===e.settings.selection.controlTime,[s,l]=[0,23],[i,r]=[0,59];t.innerHTML=e.sanitizer(`<div class="${e.CSSClasses.timeContent}">${InputTime("hours",e.CSSClasses.timeHours,e.selectedHours,a)}${InputTime("minutes",e.CSSClasses.timeMinutes,e.selectedMinutes,a)}${12===n?`<button type="button" class="${e.CSSClasses.timeKeeping}"${a?"disabled":""}>${e.selectedKeeping}</button>`:""}</div><div class="${e.CSSClasses.timeRanges}">${RangeTime("hours",e.CSSClasses.timeRange,s,l,e.settings.selection.stepHours,e.selectedKeeping?transformTime24(e.selectedHours,e.selectedKeeping):e.selectedHours)}${RangeTime("minutes",e.CSSClasses.timeRange,i,r,e.settings.selection.stepMinutes,e.selectedMinutes)}</div>`),changeTime(e,t,n)},createWeekDays=(e,t,n)=>{const a=document.createElement("b");t.textContent="";for(let s=0;s<n.length;s++){const l=n[s],i=a.cloneNode(!0);i.className=`${e.CSSClasses.weekDay}`,i.className=`${e.CSSClasses.weekDay}${e.settings.visibility.weekend&&e.settings.iso8601?5===s||6===s?` ${e.CSSClasses.weekDayWeekend}`:"":e.settings.visibility.weekend&&!e.settings.iso8601&&(0===s||6===s)?` ${e.CSSClasses.weekDayWeekend}`:""}`,i.innerText=`${l}`,t.appendChild(i)}},createWeek=e=>{const t=[...e.locale.weekday];if(!t[0])return;e.settings.iso8601&&t.push(t.shift());e.HTMLElement.querySelectorAll(`.${e.CSSClasses.week}`).forEach((n=>createWeekDays(e,n,t)))},themes=["light","dark","system"],haveListener={value:!1,set:()=>{haveListener.value=!0},check:()=>haveListener.value},getTheme=(e,t)=>themes.find((n=>{var a;return"system"!==n&&(null==(a=e.getAttribute(t))?void 0:a.includes(n))})),setTheme=(e,t)=>{e.dataset.calendarTheme=t},trackChangesThemeInSystemSettings=(e,t)=>{var n;if(n=t,setTheme(e.HTMLElement,n.matches?"dark":"light"),"system"!==e.settings.visibility.theme||haveListener.check())return;const a=t=>{const n=document.querySelectorAll(`.${e.CSSClasses.calendar}`);null==n||n.forEach((e=>setTheme(e,t.matches?"dark":"light")))};t.addEventListener?t.addEventListener("change",a):t.addListener(a),haveListener.set()},trackChangesThemeInHTMLElement=(e,t,n)=>{new MutationObserver((a=>{for(let s=0;s<a.length;s++){if(a[s].attributeName===n){const a=getTheme(t,n);a&&setTheme(e.HTMLElement,a);break}}})).observe(t,{attributes:!0})},detectTheme=(e,t)=>{const n=e.settings.visibility.themeDetect?document.querySelector(e.settings.visibility.themeDetect):null;if(!n)return void trackChangesThemeInSystemSettings(e,t);const a=e.settings.visibility.themeDetect.replace(/^.*\[(.+)\]/g,((e,t)=>t)),s=getTheme(n,a);s?(setTheme(e.HTMLElement,s),trackChangesThemeInHTMLElement(e,n,a)):trackChangesThemeInSystemSettings(e,t)},changeTheme=e=>{if(!themes.includes(e.settings.visibility.theme))throw new Error(messages.incorrectTheme);if("not all"===window.matchMedia("(prefers-color-scheme)").media)return void setTheme(e.HTMLElement,"light");({light:()=>setTheme(e.HTMLElement,"light"),dark:()=>setTheme(e.HTMLElement,"dark"),system:()=>detectTheme(e,window.matchMedia("(prefers-color-scheme: dark)"))})[e.settings.visibility.theme]()},create=e=>{const t={default:()=>{createWeek(e),createDays(e)},multiple:()=>{createWeek(e),createDays(e)},month:()=>createMonths(e),year:()=>createYears(e)};changeTheme(e),getLocale(e),createDOM(e),visibilityTitle(e),visibilityArrows(e),createTime(e),t[e.currentType]()},current={self:null,rangeMin:void 0,rangeMax:void 0},removeHoverEffect=()=>{var e;if(!(null==(e=current.self)?void 0:e.HTMLElement))return;const{CSSClasses:t}=current.self;current.self.HTMLElement.querySelectorAll(`.${current.self.CSSClasses.dayBtnHover}`).forEach((e=>{var n;e.classList.remove(current.self.CSSClasses.dayBtnHover),null==(n=e.parentElement)||n.classList.remove(t.dayHoverIntermediate,t.dayHoverFirst,t.dayHoverLast)}))},addHoverEffect=(e,t,n)=>{var a,s,l;if(!(null==(a=current.self)?void 0:a.selectedDates))return;const i=getDateString(e),{CSSClasses:r}=current.self;if(null==(s=current.self.rangeDisabled)?void 0:s.includes(i))return;const d=null==(l=current.self.HTMLElement)?void 0:l.querySelectorAll(`[data-calendar-day="${i}"]`);null==d||d.forEach((e=>{var t;e.classList.add(r.dayBtnHover),null==(t=e.parentElement)||t.classList.add(r.dayHoverIntermediate)})),null==t||t.forEach((e=>{var t;return null==(t=e.parentElement)?void 0:t.classList.add(r.dayHoverFirst)})),null==n||n.forEach((e=>{var t;return null==(t=e.parentElement)?void 0:t.classList.add(r.dayHoverLast)}))},handleHoverDaysEvent=e=>{var t;if(!e.target||!(null==(t=current.self)?void 0:t.selectedDates))return;if(!e.target.closest(`.${current.self.CSSClasses.days}`))return void removeHoverEffect();const n=e.target.closest("[data-calendar-day]");if(!n)return;const a=n.dataset.calendarDay,s=getDate(current.self.selectedDates[0]),l=getDate(a),i=current.self.HTMLElement.querySelectorAll(`[data-calendar-day="${current.self.selectedDates[0]}"]`),r=current.self.HTMLElement.querySelectorAll(`[data-calendar-day="${a}"]`),[d,o]=s<l?[i,r]:[r,i],[c,u]=s<l?[s,l]:[l,s];removeHoverEffect();for(let e=new Date(c);e<=u;e.setDate(e.getDate()+1))addHoverEffect(e,d,o)},handleCancelSelectionDays=e=>{current.self&&"Escape"===e.key&&(current.self.selectedDates=[],current.self.HTMLElement.removeEventListener("mousemove",handleHoverDaysEvent),document.removeEventListener("keydown",handleCancelSelectionDays),create(current.self))},updateDisabledDates=()=>{var e,t,n;if(!(null==(t=null==(e=current.self)?void 0:e.selectedDates)?void 0:t[0])||!(null==(n=current.self.rangeDisabled)?void 0:n[0]))return;const a=getDate(current.self.selectedDates[0]),[s,l]=current.self.rangeDisabled.map((e=>getDate(e))).reduce((([e,t],n)=>[a>=n?n:e,a<n&&null===t?n:t]),[null,null]);s&&(current.self.rangeMin=getDateString(new Date(s.setDate(s.getDate()+1)))),l&&(current.self.rangeMax=getDateString(new Date(l.setDate(l.getDate()-1))))},resetDisabledDates=()=>{current.self&&(current.self.rangeMin=current.rangeMin,current.self.rangeMax=current.rangeMax)},handleDayRangedSelection=(e,t)=>{var n;if(t){const a=1===e.selectedDates.length&&e.selectedDates[0].includes(t);e.selectedDates=a&&!e.settings.selection.cancelableDay?[t,t]:a&&e.settings.selection.cancelableDay?[]:e.selectedDates.length>1?[t]:[...e.selectedDates,t],null==(n=e.selectedDates)||n.sort(((e,t)=>+new Date(e)-+new Date(t)))}e.settings.range.disableGaps&&(current.rangeMin=current.rangeMin?current.rangeMin:e.rangeMin,current.rangeMax=current.rangeMax?current.rangeMax:e.rangeMax),current.self=e;({set:()=>{e.HTMLElement.addEventListener("mousemove",handleHoverDaysEvent),document.addEventListener("keydown",handleCancelSelectionDays),e.settings.range.disableGaps&&updateDisabledDates()},reset:()=>{const[t,n]=[e.selectedDates[0],e.selectedDates[e.selectedDates.length-1]];e.selectedDates=e.selectedDates[0]!==e.selectedDates[e.selectedDates.length-1]?e.settings.range.edgesOnly?[t,n]:parseDates([`${t}:${n}`]):[e.selectedDates[0],e.selectedDates[0]],e.HTMLElement.removeEventListener("mousemove",handleHoverDaysEvent),document.removeEventListener("keydown",handleCancelSelectionDays),e.settings.range.disableGaps&&current.self&&(current.self.rangeMin=current.rangeMin,current.self.rangeMax=current.rangeMax)}})[1===e.selectedDates.length?"set":"reset"]()},handleDaySelection=(e,t,n)=>{if(!t.dataset.calendarDay)return;const a=t.dataset.calendarDay,s=t.classList.contains(e.CSSClasses.dayBtnSelected);if(s&&!e.settings.selection.cancelableDay)return;let l=!0;void 0!==e.toggleSelected&&(l="function"==typeof e.toggleSelected?e.toggleSelected(e):e.toggleSelected),s&&!l||(e.selectedDates=s?e.selectedDates.filter((e=>e!==a)):n?[...e.selectedDates,a]:[a])},handleClickDay=(e,t)=>{var n;const a=t.target,s=e=>a.closest(`.${e}`),l=s(e.CSSClasses.dayBtn);if(!e.settings.selection.day||!["single","multiple","multiple-ranged"].includes(e.settings.selection.day)||!l)return;({single:()=>handleDaySelection(e,l,!1),multiple:()=>handleDaySelection(e,l,!0),"multiple-ranged":()=>handleDayRangedSelection(e,l.dataset.calendarDay)})[e.settings.selection.day](),null==(n=e.selectedDates)||n.sort(((e,t)=>+new Date(e)-+new Date(t))),e.actions.clickDay&&e.actions.clickDay(t,e);e.input&&e.HTMLInputElement&&e.HTMLElement&&e.actions.changeToInput&&e.actions.changeToInput(t,e);const i=s(e.CSSClasses.dayBtnPrev),r=s(e.CSSClasses.dayBtnNext);({prev:()=>changeMonth(e,"prev"),next:()=>changeMonth(e,"next"),default:()=>createDays(e)})[i?"prev":r?"next":"default"]()},getColumnID=(e,t,n,a,s)=>{const l=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`),i=Array.from(l).findIndex((e=>e.classList.contains(t))),r=Number(l[i].querySelector(`.${n}`).getAttribute(s));return"month"===e.currentType&&i>=0?a-i:"year"===e.currentType&&e.selectedYear!==r?a-1:a},handleItemClick=(e,t,n,a,s)=>{const l={year:()=>{var n,a;return null==(a=(n=e.actions).clickYear)?void 0:a.call(n,t,e)},month:()=>{var n,a;return null==(a=(n=e.actions).clickMonth)?void 0:a.call(n,t,e)}};({year:()=>{if("multiple"===e.type){const t=getColumnID(e,e.CSSClasses.columnYear,e.CSSClasses.year,Number(s.dataset.calendarYear),"data-calendar-selected-year"),n=e.selectedMonth<e.dateMin.getMonth()&&t<=e.dateMin.getFullYear(),a=e.selectedMonth>e.dateMax.getMonth()&&t>=e.dateMax.getFullYear(),l=t<e.dateMin.getFullYear(),i=t>e.dateMax.getFullYear();n||l?(e.selectedYear=e.dateMin.getFullYear(),e.selectedMonth=e.dateMin.getMonth()):a||i?(e.selectedYear=e.dateMax.getFullYear(),e.selectedMonth=e.dateMax.getMonth()):e.selectedYear=t}else e.selectedYear=Number(s.dataset.calendarYear)},month:()=>{if("multiple"===e.type){const t=getColumnID(e,e.CSSClasses.columnMonth,e.CSSClasses.month,Number(s.dataset.calendarMonth),"data-calendar-selected-month"),n=s.closest(`.${a.column}`).querySelector(`.${e.CSSClasses.year}`);e.selectedYear=Number(n.dataset.calendarSelectedYear);const l=t<e.dateMin.getMonth()&&e.selectedYear<=e.dateMin.getFullYear(),i=t>e.dateMax.getMonth()&&e.selectedYear>=e.dateMax.getFullYear();e.selectedMonth=l?e.dateMin.getMonth():i?e.dateMax.getMonth():t}else e.selectedMonth=Number(s.dataset.calendarMonth)}})[n](),l[n](),e.currentType=e.type,create(e)},handleClickMonthOrYear=(e,t,n,a)=>{if(!e.settings.selection[n])return;const s=t.target,l=e=>s.closest(`.${e}`),i=l(a.header),r=l(a.item),d=l(e.CSSClasses.grid),o=l(e.CSSClasses.column);if(e.currentType!==n&&i){({year:()=>createYears(e,s),month:()=>createMonths(e,s)})[n]()}else r?handleItemClick(e,t,n,a,r):(e.currentType===n&&i||"multiple"===e.type&&e.currentType===n&&d&&!o)&&(e.currentType=e.type,create(e))},handleClick=e=>{const t=t=>{handleClickArrow(e,t),handleClickWeekNumber(e,t),handleClickDay(e,t),handleClickMonthOrYear(e,t,"month",{header:e.CSSClasses.month,item:e.CSSClasses.monthsMonth,column:e.CSSClasses.columnMonth}),handleClickMonthOrYear(e,t,"year",{header:e.CSSClasses.year,item:e.CSSClasses.yearsYear,column:e.CSSClasses.columnYear})};return e.HTMLElement.addEventListener("click",t),()=>e.HTMLElement.removeEventListener("click",t)},reset=(e,{year:t,month:n,dates:a,holidays:s,time:l}={})=>{var i;const r=__spreadValues({},e.settings.selected);e.settings.selected.year=t?r.year:e.selectedYear,e.settings.selected.month=n?r.month:e.selectedMonth,e.settings.selected.holidays=s?r.holidays:e.selectedHolidays,e.settings.selected.time=l?r.time:e.selectedTime,e.settings.selected.dates="only-first"===a&&(null==(i=e.selectedDates)?void 0:i[0])?[e.selectedDates[0]]:!0===a?r.dates:e.selectedDates,setVariables(e),create(e),e.settings.selected=r,"multiple-ranged"===e.settings.selection.day&&a&&handleDayRangedSelection(e)},createCalendarToInput=(e,t=!0)=>{e.isInputInit=!0;const n=document.createElement("div");return n.className=`${e.CSSClasses.calendar} ${e.CSSClasses.calendarToInput} ${e.CSSClasses.calendarHidden}`,e.HTMLElement=n,document.body.appendChild(e.HTMLElement),e.HTMLElement.style.visibility="hidden",t&&queueMicrotask((()=>{setPositionCalendar(e.HTMLInputElement,n,e.settings.visibility.positionToInput,e.CSSClasses),e.HTMLElement.style.visibility="visible",e.show()})),reset(e,{year:!0,month:!0,dates:!0,holidays:!0,time:!0}),e.actions.initCalendar&&e.actions.initCalendar(e),handleClick(e)},handleInput=e=>{const t=[];e.HTMLInputElement=e.HTMLElement;const n=()=>setPositionCalendar(e.HTMLInputElement,e.HTMLElement,e.settings.visibility.positionToInput,e.CSSClasses),a=t=>{"Escape"===t.key&&((null==e?void 0:e.HTMLInputElement)&&(null==e?void 0:e.HTMLElement)&&e.hide(),document.removeEventListener("keydown",a))},s=t=>{var a;e&&t.target!==e.HTMLInputElement&&!(null==(a=e.HTMLElement)?void 0:a.contains(t.target))&&(e.HTMLInputElement&&e.HTMLElement&&e.hide(),window.removeEventListener("resize",n),document.removeEventListener("click",s,{capture:!0}))},l=()=>{e.isInputInit?(setPositionCalendar(e.HTMLInputElement,e.HTMLElement,e.settings.visibility.positionToInput,e.CSSClasses),e.HTMLElement.style.visibility="visible",e.show()):t.push(createCalendarToInput(e)),window.addEventListener("resize",n),document.addEventListener("click",s,{capture:!0}),document.addEventListener("keydown",a)};return e.HTMLInputElement.addEventListener("click",l),e.HTMLInputElement.addEventListener("focus",l),()=>{t.forEach((e=>e()))}},init=e=>(e.HTMLOriginalElement=e.HTMLElement.cloneNode(!0),e.isInit=!0,e.input?handleInput(e):(setVariables(e),create(e),e.actions.initCalendar&&e.actions.initCalendar(e),handleClick(e))),update=(e,{year:t,month:n,dates:a,holidays:s,time:l}={})=>{if(!e.isInit)throw new Error(messages.notInit);e.input&&!e.isInputInit&&createCalendarToInput(e,!1),reset(e,{year:t,month:n,dates:a,holidays:s,time:l}),e.actions.updateCalendar&&e.actions.updateCalendar(e)},destroy=e=>{var t,n,a,s,l,i;if(!e.isInit)throw new Error(messages.notInit);e.input?(null==(n=null==(t=e.HTMLElement)?void 0:t.parentElement)||n.removeChild(e.HTMLElement),null==(s=null==(a=e.HTMLInputElement)?void 0:a.replaceWith)||s.call(a,e.HTMLOriginalElement),e.HTMLInputElement=void 0):null==(i=null==(l=e.HTMLElement)?void 0:l.replaceWith)||i.call(l,e.HTMLOriginalElement),e.HTMLElement=e.HTMLOriginalElement,e.actions.destroyCalendar&&e.actions.destroyCalendar(e)},show=e=>{e.currentType?(e.HTMLElement.classList.remove(e.CSSClasses.calendarHidden),e.actions.showCalendar&&e.actions.showCalendar(e)):e.HTMLElement.click()},hide=e=>{e.currentType&&(e.HTMLElement.classList.add(e.CSSClasses.calendarHidden),e.actions.hideCalendar&&e.actions.hideCalendar(e))};class VanillaCalendar extends DefaultOptionsCalendar{constructor(e,t){if(super(),__publicField(this,"init",(()=>{return(e=this).HTMLOriginalElement=e.HTMLElement.cloneNode(!0),e.isInit=!0,e.input?handleInput(e):(setVariables(e),create(e),e.actions.initCalendar&&e.actions.initCalendar(e),handleClick(e));var e})),__publicField(this,"update",(e=>update(this,e))),__publicField(this,"destroy",(()=>destroy(this))),__publicField(this,"show",(()=>{var e;(e=this).currentType?(e.HTMLElement.classList.remove(e.CSSClasses.calendarHidden),e.actions.showCalendar&&e.actions.showCalendar(e)):e.HTMLElement.click()})),__publicField(this,"hide",(()=>{var e;(e=this).currentType&&(e.HTMLElement.classList.add(e.CSSClasses.calendarHidden),e.actions.hideCalendar&&e.actions.hideCalendar(e))})),this.HTMLElement="string"==typeof e?document.querySelector(e):e,!this.HTMLElement)throw new Error(messages.notFoundSelector(e));if(!t)return;const n=(e,t)=>{Object.keys(t).forEach((a=>{"object"!=typeof e[a]||"object"!=typeof t[a]||t[a]instanceof Date?e[a]=t[a]:n(e[a],t[a])}))};n(this,t)}}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;