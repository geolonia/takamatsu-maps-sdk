(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var maplibreGlExports = {};
	var maplibreGl = {
	  get exports(){ return maplibreGlExports; },
	  set exports(v){ maplibreGlExports = v; },
	};

	/* MapLibre GL JS is licensed under the 3-Clause BSD License. Full text of license: https://github.com/maplibre/maplibre-gl-js/blob/v2.4.0/LICENSE.txt */

	(function (module, exports) {
		(function (global, factory) {
		module.exports = factory() ;
		})(commonjsGlobal, (function () {
		/* eslint-disable */

		var shared, worker, maplibregl;
		// define gets called three times: one for each chunk. we rely on the order
		// they're imported to know which is which
		function define(_, chunk) {
		    if (!shared) {
		        shared = chunk;
		    } else if (!worker) {
		        worker = chunk;
		    } else {
		        var workerBundleString = 'var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);';

		        var sharedChunk = {};
		        shared(sharedChunk);
		        maplibregl = chunk(sharedChunk);
		        if (typeof window !== 'undefined') {
		            maplibregl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
		        }
		    }
		}


		define(["exports"],(function(t){var e=r;function r(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=e,this.p2x=r,this.p2y=n;}function n(t,r,n,i){const a=new e(t,r,n,i);return function(t){return a.solve(t)}}r.prototype={sampleCurveX:function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},sampleCurveY:function(t){return ((this.ay*t+this.by)*t+this.cy)*t},sampleCurveDerivativeX:function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},solveCurveX:function(t,e){if(void 0===e&&(e=1e-6),t<0)return 0;if(t>1)return 1;for(var r=t,n=0;n<8;n++){var i=this.sampleCurveX(r)-t;if(Math.abs(i)<e)return r;var a=this.sampleCurveDerivativeX(r);if(Math.abs(a)<1e-6)break;r-=i/a;}var s=0,o=1;for(r=t,n=0;n<20&&(i=this.sampleCurveX(r),!(Math.abs(i-t)<e));n++)t>i?s=r:o=r,r=.5*(o-s)+s;return r},solve:function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}};const i=n(.25,.1,.25,1);function a(t,e,r){return Math.min(r,Math.max(e,t))}function s(t,e,r){const n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function o(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}let l=1;function u(t,e){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e));}));}function c(t,e,r){const n={};for(const i in t)n[i]=e.call(r||this,t[i],i,t);return n}function h(t,e,r){const n={};for(const i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function p(t){return Array.isArray(t)?t.map(p):"object"==typeof t&&t?c(t,p):t}const f={};function d(t){f[t]||("undefined"!=typeof console&&console.warn(t),f[t]=!0);}function y(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function m(t){let e=0;for(let r,n,i=0,a=t.length,s=a-1;i<a;s=i++)r=t[i],n=t[s],e+=(n.x-r.x)*(r.y+n.y);return e}function g(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function x(t){const e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,((t,r,n,i)=>{const a=n||i;return e[r]=!a||a.toLowerCase(),""})),e["max-age"]){const t=parseInt(e["max-age"],10);isNaN(t)?delete e["max-age"]:e["max-age"]=t;}return e}let v,b,w=null;function _(t){if(null==w){const e=t.navigator?t.navigator.userAgent:null;w=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")));}return w}function A(t){return "undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap}const k={now:"undefined"!=typeof performance&&performance&&performance.now?performance.now.bind(performance):Date.now.bind(Date),frame(t){const e=requestAnimationFrame(t);return {cancel:()=>cancelAnimationFrame(e)}},getImageData(t,e=0){const r=window.document.createElement("canvas"),n=r.getContext("2d");if(!n)throw new Error("failed to create canvas 2d context");return r.width=t.width,r.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:t=>(v||(v=document.createElement("a")),v.href=t,v.href),hardwareConcurrency:"undefined"!=typeof navigator&&navigator.hardwareConcurrency||4,get prefersReducedMotion(){return !!matchMedia&&(null==b&&(b=matchMedia("(prefers-reduced-motion: reduce)")),b.matches)}};var S=I;function I(t,e){this.x=t,this.y=e;}I.prototype={clone:function(){return new I(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y;return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=r*this.x+e*this.y;return this.x=e*this.x-r*this.y,this.y=n,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=e.x+r*(this.x-e.x)-n*(this.y-e.y),this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},I.convert=function(t){return t instanceof I?t:Array.isArray(t)?new I(t[0],t[1]):t};const M={MAX_PARALLEL_IMAGE_REQUESTS:16,REGISTERED_PROTOCOLS:{}},z="mapbox-tiles";let B,C,P=500,V=50;function E(){"undefined"==typeof caches||B||(B=caches.open(z));}let F=1/0;const T={supported:!1,testSupport:function(t){!$&&D&&(R?O(t):L=t);}};let L,D,$=!1,R=!1;function O(t){const e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,D),t.isContextLost())return;T.supported=!0;}catch(t){}t.deleteTexture(e),$=!0;}"undefined"!=typeof document&&(D=document.createElement("img"),D.onload=function(){L&&O(L),L=null,R=!0;},D.onerror=function(){$=!0,L=null;},D.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");const U={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(U);class q extends Error{constructor(t,e,r,n){super(`AJAXError: ${e} (${t}): ${r}`),this.status=t,this.statusText=e,this.url=r,this.body=n;}}const j=g()?()=>self.worker&&self.worker.referrer:()=>("blob:"===window.location.protocol?window.parent:window).location.href;function N(t,e){const r=new AbortController,n=new Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:j(),signal:r.signal});let i=!1,a=!1;"json"===t.type&&n.headers.set("Accept","application/json");return ((r,s,o)=>{if(a)return;const l=Date.now();fetch(n).then((r=>r.ok?((r,s,o)=>{("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then((t=>{a||(s&&o&&function(t,e,r){if(E(),!B)return;const n={status:e.status,statusText:e.statusText,headers:new Headers};e.headers.forEach(((t,e)=>n.headers.set(e,t)));const i=x(e.headers.get("Cache-Control")||"");i["no-store"]||(i["max-age"]&&n.headers.set("Expires",new Date(r+1e3*i["max-age"]).toUTCString()),new Date(n.headers.get("Expires")).getTime()-r<42e4||function(t,e){if(void 0===C)try{new Response(new ReadableStream),C=!0;}catch(t){C=!1;}C?e(t.body):t.blob().then(e);}(e,(e=>{const r=new Response(e,n);E(),B&&B.then((e=>e.put(function(t){const e=t.indexOf("?");return e<0?t:t.slice(0,e)}(t.url),r))).catch((t=>d(t.message)));})));}(n,s,o),i=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")));})).catch((t=>{a||e(new Error(t.message));}));})(r,null,l):r.blob().then((n=>e(new q(r.status,r.statusText,t.url,n)))))).catch((t=>{20!==t.code&&e(new Error(t.message));}));})(),{cancel:()=>{a=!0,i||r.abort();}}}const Z=function(t,e){if(/:\/\//.test(t.url)&&!/^https?:|^file:/.test(t.url)){if(g()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e);if(!g()){const r=t.url.substring(0,t.url.indexOf("://"));return (M.REGISTERED_PROTOCOLS[r]||N)(t,e)}}if(!(/^file:/.test(r=t.url)||/^file:/.test(j())&&!/^\w+:/.test(r))){if(fetch&&Request&&AbortController&&Object.prototype.hasOwnProperty.call(Request.prototype,"signal"))return N(t,e);if(g()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e,void 0,!0)}var r;return function(t,e){const r=new XMLHttpRequest;r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer");for(const e in t.headers)r.setRequestHeader(e,t.headers[e]);return "json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=()=>{e(new Error(r.statusText));},r.onload=()=>{if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){let n=r.response;if("json"===t.type)try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"));}else {const n=new Blob([r.response],{type:r.getResponseHeader("Content-Type")});e(new q(r.status,r.statusText,t.url,n));}},r.send(t.body),{cancel:()=>r.abort()}}(t,e)},K=function(t,e){return Z(o(t,{type:"arrayBuffer"}),e)};function G(t){const e=window.document.createElement("a");return e.href=t,e.protocol===window.document.location.protocol&&e.host===window.document.location.host}const J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";let X,Y;X=[],Y=0;const H=function(t,e){if(T.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),Y>=M.MAX_PARALLEL_IMAGE_REQUESTS){const r={requestParameters:t,callback:e,cancelled:!1,cancel(){this.cancelled=!0;}};return X.push(r),r}Y++;let r=!1;const n=()=>{if(!r)for(r=!0,Y--;X.length&&Y<M.MAX_PARALLEL_IMAGE_REQUESTS;){const t=X.shift(),{requestParameters:e,callback:r,cancelled:n}=t;n||(t.cancel=H(e,r).cancel);}},i=K(t,((t,r,i,a)=>{n(),t?e(t):r&&function(t,e){"function"==typeof createImageBitmap?function(t,e){const r=new Blob([new Uint8Array(t)],{type:"image/png"});createImageBitmap(r).then((t=>{e(null,t);})).catch((t=>{e(new Error(`Could not load image because of ${t.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`));}));}(t,e):function(t,e){const r=new Image;r.onload=()=>{e(null,r),URL.revokeObjectURL(r.src),r.onload=null,window.requestAnimationFrame((()=>{r.src=J;}));},r.onerror=()=>e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));const n=new Blob([new Uint8Array(t)],{type:"image/png"});r.src=t.byteLength?URL.createObjectURL(n):J;}(t,e);}(r,((t,r)=>{null!=t?e(t):null!=r&&e(null,r,{cacheControl:i,expires:a});}));}));return {cancel:()=>{i.cancel(),n();}}};function W(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function Q(t,e,r){if(r&&r[t]){const n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}class tt{constructor(t,e={}){o(this,e),this.type=t;}}class et extends tt{constructor(t,e={}){super("error",o({error:t},e));}}class rt{on(t,e){return this._listeners=this._listeners||{},W(t,e,this._listeners),this}off(t,e){return Q(t,e,this._listeners),Q(t,e,this._oneTimeListeners),this}once(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},W(t,e,this._oneTimeListeners),this}fire(t,e){"string"==typeof t&&(t=new tt(t,e||{}));const r=t.type;if(this.listens(r)){t.target=this;const e=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];for(const r of e)r.call(this,t);const n=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];for(const e of n)Q(r,e,this._oneTimeListeners),e.call(this,t);const i=this._eventedParent;i&&(o(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),i.fire(t));}else t instanceof et&&console.error(t.error);return this}listens(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)}setEventedParent(t,e){return this._eventedParent=t,this._eventedParentData=e,this}}var nt={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},terrain:{type:"terrain"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},promoteId:{type:"promoteId"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},filter:{type:"*"},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterMinPoints:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image",{"!":"icon-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"padding",default:[2],units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},"viewport-glyph":{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field",{"!":"text-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{},within:{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},terrain:{source:{type:"string",required:!0},exaggeration:{type:"number",minimum:0,default:1},elevationOffset:{type:"number",default:450}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}},promoteId:{"*":{type:"string"}}};class it{constructor(t,e,r,n){this.message=(t?`${t}: `:"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);}}function at(t){const e=t.value;return e?[new it(t.key,e,"constants have been deprecated as of v8")]:[]}function st(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}function ot(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function lt(t){if(Array.isArray(t))return t.map(lt);if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){const e={};for(const r in t)e[r]=lt(t[r]);return e}return ot(t)}class ut extends Error{constructor(t,e){super(e),this.message=e,this.key=t;}}class ct{constructor(t,e=[]){this.parent=t,this.bindings={};for(const[t,r]of e)this.bindings[t]=r;}concat(t){return new ct(this,t)}get(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(`${t} not found in scope.`)}has(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)}}const ht={kind:"null"},pt={kind:"number"},ft={kind:"string"},dt={kind:"boolean"},yt={kind:"color"},mt={kind:"object"},gt={kind:"value"},xt={kind:"collator"},vt={kind:"formatted"},bt={kind:"padding"},wt={kind:"resolvedImage"};function _t(t,e){return {kind:"array",itemType:t,N:e}}function At(t){if("array"===t.kind){const e=At(t.itemType);return "number"==typeof t.N?`array<${e}, ${t.N}>`:"value"===t.itemType.kind?"array":`array<${e}>`}return t.kind}const kt=[ht,pt,ft,dt,yt,vt,mt,_t(gt),bt,wt];function St(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!St(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else {if(t.kind===e.kind)return null;if("value"===t.kind)for(const t of kt)if(!St(t,e))return null}return `Expected ${At(t)} but found ${At(e)} instead.`}function It(t,e){return e.some((e=>e.kind===t.kind))}function Mt(t,e){return e.some((e=>"null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t))}var zt,Bt={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Ct(t){return (t=Math.round(t))<0?0:t>255?255:t}function Pt(t){return Ct("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function Vt(t){return (e="%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))<0?0:e>1?1:e;var e;}function Et(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{zt={}.parseCSSColor=function(t){var e,r=t.replace(/ /g,"").toLowerCase();if(r in Bt)return Bt[r].slice();if("#"===r[0])return 4===r.length?(e=parseInt(r.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===r.length&&(e=parseInt(r.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var n=r.indexOf("("),i=r.indexOf(")");if(-1!==n&&i+1===r.length){var a=r.substr(0,n),s=r.substr(n+1,i-(n+1)).split(","),o=1;switch(a){case"rgba":if(4!==s.length)return null;o=Vt(s.pop());case"rgb":return 3!==s.length?null:[Pt(s[0]),Pt(s[1]),Pt(s[2]),o];case"hsla":if(4!==s.length)return null;o=Vt(s.pop());case"hsl":if(3!==s.length)return null;var l=(parseFloat(s[0])%360+360)%360/360,u=Vt(s[1]),c=Vt(s[2]),h=c<=.5?c*(u+1):c+u-c*u,p=2*c-h;return [Ct(255*Et(p,h,l+1/3)),Ct(255*Et(p,h,l)),Ct(255*Et(p,h,l-1/3)),o];default:return null}}return null};}catch(t){}class Ft{constructor(t,e,r,n=1){this.r=t,this.g=e,this.b=r,this.a=n;}static parse(t){if(!t)return;if(t instanceof Ft)return t;if("string"!=typeof t)return;const e=zt(t);return e?new Ft(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3]):void 0}toString(){const[t,e,r,n]=this.toArray();return `rgba(${Math.round(t)},${Math.round(e)},${Math.round(r)},${n})`}toArray(){const{r:t,g:e,b:r,a:n}=this;return 0===n?[0,0,0,0]:[255*t/n,255*e/n,255*r/n,n]}}Ft.black=new Ft(0,0,0,1),Ft.white=new Ft(1,1,1,1),Ft.transparent=new Ft(0,0,0,0),Ft.red=new Ft(1,0,0,1);class Tt{constructor(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});}compare(t,e){return this.collator.compare(t,e)}resolvedLocale(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}}class Lt{constructor(t,e,r,n,i){this.text=t,this.image=e,this.scale=r,this.fontStack=n,this.textColor=i;}}class Dt{constructor(t){this.sections=t;}static fromString(t){return new Dt([new Lt(t,null,null,null,null)])}isEmpty(){return 0===this.sections.length||!this.sections.some((t=>0!==t.text.length||t.image&&0!==t.image.name.length))}static factory(t){return t instanceof Dt?t:Dt.fromString(t)}toString(){return 0===this.sections.length?"":this.sections.map((t=>t.text)).join("")}}class $t{constructor(t){this.values=t.slice();}static parse(t){if(t instanceof $t)return t;if("number"==typeof t)return new $t([t,t,t,t]);if(Array.isArray(t)&&!(t.length<1||t.length>4)){for(const e of t)if("number"!=typeof e)return;switch(t.length){case 1:t=[t[0],t[0],t[0],t[0]];break;case 2:t=[t[0],t[1],t[0],t[1]];break;case 3:t=[t[0],t[1],t[2],t[1]];}return new $t(t)}}toString(){return JSON.stringify(this.values)}}class Rt{constructor(t){this.name=t.name,this.available=t.available;}toString(){return this.name}static fromString(t){return t?new Rt({name:t,available:!1}):null}}function Ot(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:`Invalid rgba value [${[t,e,r,n].join(", ")}]: 'a' must be between 0 and 1.`:`Invalid rgba value [${("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`}function Ut(t){if(null===t)return !0;if("string"==typeof t)return !0;if("boolean"==typeof t)return !0;if("number"==typeof t)return !0;if(t instanceof Ft)return !0;if(t instanceof Tt)return !0;if(t instanceof Dt)return !0;if(t instanceof $t)return !0;if(t instanceof Rt)return !0;if(Array.isArray(t)){for(const e of t)if(!Ut(e))return !1;return !0}if("object"==typeof t){for(const e in t)if(!Ut(t[e]))return !1;return !0}return !1}function qt(t){if(null===t)return ht;if("string"==typeof t)return ft;if("boolean"==typeof t)return dt;if("number"==typeof t)return pt;if(t instanceof Ft)return yt;if(t instanceof Tt)return xt;if(t instanceof Dt)return vt;if(t instanceof $t)return bt;if(t instanceof Rt)return wt;if(Array.isArray(t)){const e=t.length;let r;for(const e of t){const t=qt(e);if(r){if(r===t)continue;r=gt;break}r=t;}return _t(r||gt,e)}return mt}function jt(t){const e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Ft||t instanceof Dt||t instanceof $t||t instanceof Rt?t.toString():JSON.stringify(t)}class Nt{constructor(t,e){this.type=t,this.value=e;}static parse(t,e){if(2!==t.length)return e.error(`'literal' expression requires exactly one argument, but found ${t.length-1} instead.`);if(!Ut(t[1]))return e.error("invalid value");const r=t[1];let n=qt(r);const i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new Nt(n,r)}evaluate(){return this.value}eachChild(){}outputDefined(){return !0}}class Zt{constructor(t){this.name="ExpressionEvaluationError",this.message=t;}toJSON(){return this.message}}const Kt={string:ft,number:pt,boolean:dt,object:mt};class Gt{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");let r,n=1;const i=t[0];if("array"===i){let i,a;if(t.length>2){const r=t[1];if("string"!=typeof r||!(r in Kt)||"object"===r)return e.error('The item type argument of "array" must be one of string, number, boolean',1);i=Kt[r],n++;}else i=gt;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);a=t[2],n++;}r=_t(i,a);}else {if(!Kt[i])throw new Error(`Types doesn't contain name = ${i}`);r=Kt[i];}const a=[];for(;n<t.length;n++){const r=e.parse(t[n],n,gt);if(!r)return null;a.push(r);}return new Gt(r,a)}evaluate(t){for(let e=0;e<this.args.length;e++){const r=this.args[e].evaluate(t);if(!St(this.type,qt(r)))return r;if(e===this.args.length-1)throw new Zt(`Expected value to be of type ${At(this.type)}, but found ${At(qt(r))} instead.`)}throw new Error}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}}const Jt={"to-boolean":dt,"to-color":yt,"to-number":pt,"to-string":ft};class Xt{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[0];if(!Jt[r])throw new Error(`Can't parse ${r} as it is not part of the known types`);if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");const n=Jt[r],i=[];for(let r=1;r<t.length;r++){const n=e.parse(t[r],r,gt);if(!n)return null;i.push(n);}return new Xt(n,i)}evaluate(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t));if("color"===this.type.kind){let e,r;for(const n of this.args){if(e=n.evaluate(t),r=null,e instanceof Ft)return e;if("string"==typeof e){const r=t.parseColor(e);if(r)return r}else if(Array.isArray(e)&&(r=e.length<3||e.length>4?`Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.`:Ot(e[0],e[1],e[2],e[3]),!r))return new Ft(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new Zt(r||`Could not parse color from value '${"string"==typeof e?e:JSON.stringify(e)}'`)}if("padding"===this.type.kind){let e;for(const r of this.args){e=r.evaluate(t);const n=$t.parse(e);if(n)return n}throw new Zt(`Could not parse padding from value '${"string"==typeof e?e:JSON.stringify(e)}'`)}if("number"===this.type.kind){let e=null;for(const r of this.args){if(e=r.evaluate(t),null===e)return 0;const n=Number(e);if(!isNaN(n))return n}throw new Zt(`Could not convert ${JSON.stringify(e)} to number.`)}return "formatted"===this.type.kind?Dt.fromString(jt(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?Rt.fromString(jt(this.args[0].evaluate(t))):jt(this.args[0].evaluate(t))}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}}const Yt=["Unknown","Point","LineString","Polygon"];class Ht{constructor(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null;}id(){return this.feature&&"id"in this.feature?this.feature.id:null}geometryType(){return this.feature?"number"==typeof this.feature.type?Yt[this.feature.type]:this.feature.type:null}geometry(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null}canonicalID(){return this.canonical}properties(){return this.feature&&this.feature.properties||{}}parseColor(t){let e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Ft.parse(t)),e}}class Wt{constructor(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;}evaluate(t){return this._evaluate(t,this.args)}eachChild(t){this.args.forEach(t);}outputDefined(){return !1}static parse(t,e){const r=t[0],n=Wt.definitions[r];if(!n)return e.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`,0);const i=Array.isArray(n)?n[0]:n.type,a=Array.isArray(n)?[[n[1],n[2]]]:n.overloads,s=a.filter((([e])=>!Array.isArray(e)||e.length===t.length-1));let o=null;for(const[n,a]of s){o=new we(e.registry,e.path,null,e.scope);const s=[];let l=!1;for(let e=1;e<t.length;e++){const r=t[e],i=Array.isArray(n)?n[e-1]:n.type,a=o.parse(r,1+s.length,i);if(!a){l=!0;break}s.push(a);}if(!l)if(Array.isArray(n)&&n.length!==s.length)o.error(`Expected ${n.length} arguments, but found ${s.length} instead.`);else {for(let t=0;t<s.length;t++){const e=Array.isArray(n)?n[t]:n.type,r=s[t];o.concat(t+1).checkSubtype(e,r.type);}if(0===o.errors.length)return new Wt(r,i,a,s)}}if(1===s.length)e.errors.push(...o.errors);else {const r=(s.length?s:a).map((([t])=>{return e=t,Array.isArray(e)?`(${e.map(At).join(", ")})`:`(${At(e.type)}...)`;var e;})).join(" | "),n=[];for(let r=1;r<t.length;r++){const i=e.parse(t[r],1+n.length);if(!i)return null;n.push(At(i.type));}e.error(`Expected arguments of type ${r}, but found (${n.join(", ")}) instead.`);}return null}static register(t,e){Wt.definitions=e;for(const r in e)t[r]=Wt;}}class Qt{constructor(t,e,r){this.type=xt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;}static parse(t,e){if(2!==t.length)return e.error("Expected one argument.");const r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");const n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,dt);if(!n)return null;const i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,dt);if(!i)return null;let a=null;return r.locale&&(a=e.parse(r.locale,1,ft),!a)?null:new Qt(n,i,a)}evaluate(t){return new Tt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)}eachChild(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);}outputDefined(){return !1}}const te=8192;function ee(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);}function re(t,e){return !(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function ne(t,e){const r=(180+t[0])/360,n=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,i=Math.pow(2,e.z);return [Math.round(r*i*te),Math.round(n*i*te)]}function ie(t,e,r){const n=t[0]-e[0],i=t[1]-e[1],a=t[0]-r[0],s=t[1]-r[1];return n*s-a*i==0&&n*a<=0&&i*s<=0}function ae(t,e){let r=!1;for(let s=0,o=e.length;s<o;s++){const o=e[s];for(let e=0,s=o.length;e<s-1;e++){if(ie(t,o[e],o[e+1]))return !1;(i=o[e])[1]>(n=t)[1]!=(a=o[e+1])[1]>n[1]&&n[0]<(a[0]-i[0])*(n[1]-i[1])/(a[1]-i[1])+i[0]&&(r=!r);}}var n,i,a;return r}function se(t,e){for(let r=0;r<e.length;r++)if(ae(t,e[r]))return !0;return !1}function oe(t,e,r,n){const i=n[0]-r[0],a=n[1]-r[1],s=(t[0]-r[0])*a-i*(t[1]-r[1]),o=(e[0]-r[0])*a-i*(e[1]-r[1]);return s>0&&o<0||s<0&&o>0}function le(t,e,r){for(const u of r)for(let r=0;r<u.length-1;++r)if(0!=(o=[(s=u[r+1])[0]-(a=u[r])[0],s[1]-a[1]])[0]*(l=[(i=e)[0]-(n=t)[0],i[1]-n[1]])[1]-o[1]*l[0]&&oe(n,i,a,s)&&oe(a,s,n,i))return !0;var n,i,a,s,o,l;return !1}function ue(t,e){for(let r=0;r<t.length;++r)if(!ae(t[r],e))return !1;for(let r=0;r<t.length-1;++r)if(le(t[r],t[r+1],e))return !1;return !0}function ce(t,e){for(let r=0;r<e.length;r++)if(ue(t,e[r]))return !0;return !1}function he(t,e,r){const n=[];for(let i=0;i<t.length;i++){const a=[];for(let n=0;n<t[i].length;n++){const s=ne(t[i][n],r);ee(e,s),a.push(s);}n.push(a);}return n}function pe(t,e,r){const n=[];for(let i=0;i<t.length;i++){const a=he(t[i],e,r);n.push(a);}return n}function fe(t,e,r,n){if(t[0]<r[0]||t[0]>r[2]){const e=.5*n;let i=t[0]-r[0]>e?-n:r[0]-t[0]>e?n:0;0===i&&(i=t[0]-r[2]>e?-n:r[2]-t[0]>e?n:0),t[0]+=i;}ee(e,t);}function de(t,e,r,n){const i=Math.pow(2,n.z)*te,a=[n.x*te,n.y*te],s=[];for(const n of t)for(const t of n){const n=[t.x+a[0],t.y+a[1]];fe(n,e,r,i),s.push(n);}return s}function ye(t,e,r,n){const i=Math.pow(2,n.z)*te,a=[n.x*te,n.y*te],s=[];for(const r of t){const t=[];for(const n of r){const r=[n.x+a[0],n.y+a[1]];ee(e,r),t.push(r);}s.push(t);}if(e[2]-e[0]<=i/2){(o=e)[0]=o[1]=1/0,o[2]=o[3]=-1/0;for(const t of s)for(const n of t)fe(n,e,r,i);}var o;return s}class me{constructor(t,e){this.type=dt,this.geojson=t,this.geometries=e;}static parse(t,e){if(2!==t.length)return e.error(`'within' expression requires exactly one argument, but found ${t.length-1} instead.`);if(Ut(t[1])){const e=t[1];if("FeatureCollection"===e.type)for(let t=0;t<e.features.length;++t){const r=e.features[t].geometry.type;if("Polygon"===r||"MultiPolygon"===r)return new me(e,e.features[t].geometry)}else if("Feature"===e.type){const t=e.geometry.type;if("Polygon"===t||"MultiPolygon"===t)return new me(e,e.geometry)}else if("Polygon"===e.type||"MultiPolygon"===e.type)return new me(e,e)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")}evaluate(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){const a=he(e.coordinates,n,i),s=de(t.geometry(),r,n,i);if(!re(r,n))return !1;for(const t of s)if(!ae(t,a))return !1}if("MultiPolygon"===e.type){const a=pe(e.coordinates,n,i),s=de(t.geometry(),r,n,i);if(!re(r,n))return !1;for(const t of s)if(!se(t,a))return !1}return !0}(t,this.geometries);if("LineString"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){const a=he(e.coordinates,n,i),s=ye(t.geometry(),r,n,i);if(!re(r,n))return !1;for(const t of s)if(!ue(t,a))return !1}if("MultiPolygon"===e.type){const a=pe(e.coordinates,n,i),s=ye(t.geometry(),r,n,i);if(!re(r,n))return !1;for(const t of s)if(!ce(t,a))return !1}return !0}(t,this.geometries)}return !1}eachChild(){}outputDefined(){return !0}}function ge(t){if(t instanceof Wt){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}if(t instanceof me)return !1;let e=!0;return t.eachChild((t=>{e&&!ge(t)&&(e=!1);})),e}function xe(t){if(t instanceof Wt&&"feature-state"===t.name)return !1;let e=!0;return t.eachChild((t=>{e&&!xe(t)&&(e=!1);})),e}function ve(t,e){if(t instanceof Wt&&e.indexOf(t.name)>=0)return !1;let r=!0;return t.eachChild((t=>{r&&!ve(t,e)&&(r=!1);})),r}class be{constructor(t,e){this.type=e.type,this.name=t,this.boundExpression=e;}static parse(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");const r=t[1];return e.scope.has(r)?new be(r,e.scope.get(r)):e.error(`Unknown variable "${r}". Make sure "${r}" has been bound in an enclosing "let" expression before using it.`,1)}evaluate(t){return this.boundExpression.evaluate(t)}eachChild(){}outputDefined(){return !1}}class we{constructor(t,e=[],r,n=new ct,i=[]){this.registry=t,this.path=e,this.key=e.map((t=>`[${t}]`)).join(""),this.scope=n,this.errors=i,this.expectedType=r;}parse(t,e,r,n,i={}){return e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)}_parse(t,e){function r(t,e,r){return "assert"===r?new Gt(e,[t]):"coerce"===r?new Xt(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');const n=t[0];if("string"!=typeof n)return this.error(`Expression name must be a string, but found ${typeof n} instead. If you wanted a literal array, use ["literal", [...]].`,0),null;const i=this.registry[n];if(i){let n=i.parse(t,this);if(!n)return null;if(this.expectedType){const t=this.expectedType,i=n.type;if("string"!==t.kind&&"number"!==t.kind&&"boolean"!==t.kind&&"object"!==t.kind&&"array"!==t.kind||"value"!==i.kind)if("color"!==t.kind&&"formatted"!==t.kind&&"resolvedImage"!==t.kind||"value"!==i.kind&&"string"!==i.kind)if("padding"!==t.kind||"value"!==i.kind&&"number"!==i.kind&&"array"!==i.kind){if(this.checkSubtype(t,i))return null}else n=r(n,t,e.typeAnnotation||"coerce");else n=r(n,t,e.typeAnnotation||"coerce");else n=r(n,t,e.typeAnnotation||"assert");}if(!(n instanceof Nt)&&"resolvedImage"!==n.type.kind&&_e(n)){const t=new Ht;try{n=new Nt(n.type,n.evaluate(t));}catch(t){return this.error(t.message),null}}return n}return this.error(`Unknown expression "${n}". If you wanted a literal array, use ["literal", [...]].`,0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':`Expected an array, but found ${typeof t} instead.`)}concat(t,e,r){const n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new we(this.registry,n,e||null,i,this.errors)}error(t,...e){const r=`${this.key}${e.map((t=>`[${t}]`)).join("")}`;this.errors.push(new ut(r,t));}checkSubtype(t,e){const r=St(t,e);return r&&this.error(r),r}}function _e(t){if(t instanceof be)return _e(t.boundExpression);if(t instanceof Wt&&"error"===t.name)return !1;if(t instanceof Qt)return !1;if(t instanceof me)return !1;const e=t instanceof Xt||t instanceof Gt;let r=!0;return t.eachChild((t=>{r=e?r&&_e(t):r&&t instanceof Nt;})),!!r&&ge(t)&&ve(t,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}function Ae(t,e){const r=t.length-1;let n,i,a=0,s=r,o=0;for(;a<=s;)if(o=Math.floor((a+s)/2),n=t[o],i=t[o+1],n<=e){if(o===r||e<i)return o;a=o+1;}else {if(!(n>e))throw new Zt("Input is not a number.");s=o-1;}return 0}class ke{constructor(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(const[t,e]of r)this.labels.push(t),this.outputs.push(e);}static parse(t,e){if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");const r=e.parse(t[1],1,pt);if(!r)return null;const n=[];let i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(let r=1;r<t.length;r+=2){const a=1===r?-1/0:t[r],s=t[r+1],o=r,l=r+1;if("number"!=typeof a)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',o);if(n.length&&n[n.length-1][0]>=a)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',o);const u=e.parse(s,l,i);if(!u)return null;i=i||u.type,n.push([a,u]);}return new ke(i,r,n)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[Ae(e,n)].evaluate(t)}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}}function Se(t,e,r){return t*(1-r)+e*r}var Ie=Object.freeze({__proto__:null,number:Se,color:function(t,e,r){return new Ft(Se(t.r,e.r,r),Se(t.g,e.g,r),Se(t.b,e.b,r),Se(t.a,e.a,r))},array:function(t,e,r){return t.map(((t,n)=>Se(t,e[n],r)))},padding:function(t,e,r){const n=t.values,i=e.values;return new $t([Se(n[0],i[0],r),Se(n[1],i[1],r),Se(n[2],i[2],r),Se(n[3],i[3],r)])}});const Me=.95047,ze=1.08883,Be=4/29,Ce=6/29,Pe=3*Ce*Ce,Ve=Math.PI/180,Ee=180/Math.PI;function Fe(t){return t>.008856451679035631?Math.pow(t,1/3):t/Pe+Be}function Te(t){return t>Ce?t*t*t:Pe*(t-Be)}function Le(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function De(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function $e(t){const e=De(t.r),r=De(t.g),n=De(t.b),i=Fe((.4124564*e+.3575761*r+.1804375*n)/Me),a=Fe((.2126729*e+.7151522*r+.072175*n)/1);return {l:116*a-16,a:500*(i-a),b:200*(a-Fe((.0193339*e+.119192*r+.9503041*n)/ze)),alpha:t.a}}function Re(t){let e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=1*Te(e),r=Me*Te(r),n=ze*Te(n),new Ft(Le(3.2404542*r-1.5371385*e-.4985314*n),Le(-.969266*r+1.8760108*e+.041556*n),Le(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}function Oe(t,e,r){const n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}const Ue={forward:$e,reverse:Re,interpolate:function(t,e,r){return {l:Se(t.l,e.l,r),a:Se(t.a,e.a,r),b:Se(t.b,e.b,r),alpha:Se(t.alpha,e.alpha,r)}}},qe={forward:function(t){const{l:e,a:r,b:n}=$e(t),i=Math.atan2(n,r)*Ee;return {h:i<0?i+360:i,c:Math.sqrt(r*r+n*n),l:e,alpha:t.a}},reverse:function(t){const e=t.h*Ve,r=t.c;return Re({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return {h:Oe(t.h,e.h,r),c:Se(t.c,e.c,r),l:Se(t.l,e.l,r),alpha:Se(t.alpha,e.alpha,r)}}};var je=Object.freeze({__proto__:null,lab:Ue,hcl:qe});class Ne{constructor(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(const[t,e]of i)this.labels.push(t),this.outputs.push(e);}static interpolationFactor(t,r,n,i){let a=0;if("exponential"===t.name)a=Ze(r,t.base,n,i);else if("linear"===t.name)a=Ze(r,1,n,i);else if("cubic-bezier"===t.name){const s=t.controlPoints;a=new e(s[0],s[1],s[2],s[3]).solve(Ze(r,1,n,i));}return a}static parse(t,e){let[r,n,i,...a]=t;if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){const t=n[1];if("number"!=typeof t)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:t};}else {if("cubic-bezier"!==n[0])return e.error(`Unknown interpolation type ${String(n[0])}`,1,0);{const t=n.slice(1);if(4!==t.length||t.some((t=>"number"!=typeof t||t<0||t>1)))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:t};}}if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(i=e.parse(i,2,pt),!i)return null;const s=[];let o=null;"interpolate-hcl"===r||"interpolate-lab"===r?o=yt:e.expectedType&&"value"!==e.expectedType.kind&&(o=e.expectedType);for(let t=0;t<a.length;t+=2){const r=a[t],n=a[t+1],i=t+3,l=t+4;if("number"!=typeof r)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',i);if(s.length&&s[s.length-1][0]>=r)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',i);const u=e.parse(n,l,o);if(!u)return null;o=o||u.type,s.push([r,u]);}return "number"===o.kind||"color"===o.kind||"padding"===o.kind||"array"===o.kind&&"number"===o.itemType.kind&&"number"==typeof o.N?new Ne(o,r,n,i,s):e.error(`Type ${At(o)} is not interpolatable.`)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);const a=Ae(e,n),s=Ne.interpolationFactor(this.interpolation,n,e[a],e[a+1]),o=r[a].evaluate(t),l=r[a+1].evaluate(t);return "interpolate"===this.operator?Ie[this.type.kind.toLowerCase()](o,l,s):"interpolate-hcl"===this.operator?qe.reverse(qe.interpolate(qe.forward(o),qe.forward(l),s)):Ue.reverse(Ue.interpolate(Ue.forward(o),Ue.forward(l),s))}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}}function Ze(t,e,r,n){const i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}class Ke{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expectected at least one argument.");let r=null;const n=e.expectedType;n&&"value"!==n.kind&&(r=n);const i=[];for(const n of t.slice(1)){const t=e.parse(n,1+i.length,r,void 0,{typeAnnotation:"omit"});if(!t)return null;r=r||t.type,i.push(t);}if(!r)throw new Error("No output type");const a=n&&i.some((t=>St(n,t.type)));return new Ke(a?gt:r,i)}evaluate(t){let e,r=null,n=0;for(const i of this.args)if(n++,r=i.evaluate(t),r&&r instanceof Rt&&!r.available&&(e||(e=r.name),r=null,n===this.args.length&&(r=e)),null!==r)break;return r}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}}class Ge{constructor(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;}evaluate(t){return this.result.evaluate(t)}eachChild(t){for(const e of this.bindings)t(e[1]);t(this.result);}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found ${t.length-1} instead.`);const r=[];for(let n=1;n<t.length-1;n+=2){const i=t[n];if("string"!=typeof i)return e.error(`Expected string, but found ${typeof i} instead.`,n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);const a=e.parse(t[n+1],n+1);if(!a)return null;r.push([i,a]);}const n=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return n?new Ge(r,n):null}outputDefined(){return this.result.outputDefined()}}class Je{constructor(t,e,r){this.type=t,this.index=e,this.input=r;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,pt),n=e.parse(t[2],2,_t(e.expectedType||gt));return r&&n?new Je(n.type.itemType,r,n):null}evaluate(t){const e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new Zt(`Array index out of bounds: ${e} < 0.`);if(e>=r.length)throw new Zt(`Array index out of bounds: ${e} > ${r.length-1}.`);if(e!==Math.floor(e))throw new Zt(`Array index must be an integer, but found ${e} instead.`);return r[e]}eachChild(t){t(this.index),t(this.input);}outputDefined(){return !1}}class Xe{constructor(t,e){this.type=dt,this.needle=t,this.haystack=e;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,gt),n=e.parse(t[2],2,gt);return r&&n?It(r.type,[dt,ft,pt,ht,gt])?new Xe(r,n):e.error(`Expected first argument to be of type boolean, string, number or null, but found ${At(r.type)} instead`):null}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!r)return !1;if(!Mt(e,["boolean","string","number","null"]))throw new Zt(`Expected first argument to be of type boolean, string, number or null, but found ${At(qt(e))} instead.`);if(!Mt(r,["string","array"]))throw new Zt(`Expected second argument to be of type array or string, but found ${At(qt(r))} instead.`);return r.indexOf(e)>=0}eachChild(t){t(this.needle),t(this.haystack);}outputDefined(){return !0}}class Ye{constructor(t,e,r){this.type=pt,this.needle=t,this.haystack=e,this.fromIndex=r;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,gt),n=e.parse(t[2],2,gt);if(!r||!n)return null;if(!It(r.type,[dt,ft,pt,ht,gt]))return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${At(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,pt);return i?new Ye(r,n,i):null}return new Ye(r,n)}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!Mt(e,["boolean","string","number","null"]))throw new Zt(`Expected first argument to be of type boolean, string, number or null, but found ${At(qt(e))} instead.`);if(!Mt(r,["string","array"]))throw new Zt(`Expected second argument to be of type array or string, but found ${At(qt(r))} instead.`);if(this.fromIndex){const n=this.fromIndex.evaluate(t);return r.indexOf(e,n)}return r.indexOf(e)}eachChild(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex);}outputDefined(){return !1}}class He{constructor(t,e,r,n,i,a){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=a;}static parse(t,e){if(t.length<5)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if(t.length%2!=1)return e.error("Expected an even number of arguments.");let r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);const i={},a=[];for(let s=2;s<t.length-1;s+=2){let o=t[s];const l=t[s+1];Array.isArray(o)||(o=[o]);const u=e.concat(s);if(0===o.length)return u.error("Expected at least one branch label.");for(const t of o){if("number"!=typeof t&&"string"!=typeof t)return u.error("Branch labels must be numbers or strings.");if("number"==typeof t&&Math.abs(t)>Number.MAX_SAFE_INTEGER)return u.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);if("number"==typeof t&&Math.floor(t)!==t)return u.error("Numeric branch labels must be integer values.");if(r){if(u.checkSubtype(r,qt(t)))return null}else r=qt(t);if(void 0!==i[String(t)])return u.error("Branch labels must be unique.");i[String(t)]=a.length;}const c=e.parse(l,s,n);if(!c)return null;n=n||c.type,a.push(c);}const s=e.parse(t[1],1,gt);if(!s)return null;const o=e.parse(t[t.length-1],t.length-1,n);return o?"value"!==s.type.kind&&e.concat(1).checkSubtype(r,s.type)?null:new He(r,n,s,i,a,o):null}evaluate(t){const e=this.input.evaluate(t);return (qt(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)}eachChild(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))&&this.otherwise.outputDefined()}}class We{constructor(t,e,r){this.type=t,this.branches=e,this.otherwise=r;}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found only ${t.length-1}.`);if(t.length%2!=0)return e.error("Expected an odd number of arguments.");let r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);const n=[];for(let i=1;i<t.length-1;i+=2){const a=e.parse(t[i],i,dt);if(!a)return null;const s=e.parse(t[i+1],i+1,r);if(!s)return null;n.push([a,s]),r=r||s.type;}const i=e.parse(t[t.length-1],t.length-1,r);if(!i)return null;if(!r)throw new Error("Can't infer output type");return new We(r,n,i)}evaluate(t){for(const[e,r]of this.branches)if(e.evaluate(t))return r.evaluate(t);return this.otherwise.evaluate(t)}eachChild(t){for(const[e,r]of this.branches)t(e),t(r);t(this.otherwise);}outputDefined(){return this.branches.every((([t,e])=>e.outputDefined()))&&this.otherwise.outputDefined()}}class Qe{constructor(t,e,r,n){this.type=t,this.input=e,this.beginIndex=r,this.endIndex=n;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,gt),n=e.parse(t[2],2,pt);if(!r||!n)return null;if(!It(r.type,[_t(gt),ft,gt]))return e.error(`Expected first argument to be of type array or string, but found ${At(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,pt);return i?new Qe(r.type,r,n,i):null}return new Qe(r.type,r,n)}evaluate(t){const e=this.input.evaluate(t),r=this.beginIndex.evaluate(t);if(!Mt(e,["string","array"]))throw new Zt(`Expected first argument to be of type array or string, but found ${At(qt(e))} instead.`);if(this.endIndex){const n=this.endIndex.evaluate(t);return e.slice(r,n)}return e.slice(r)}eachChild(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex);}outputDefined(){return !1}}function tr(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function er(t,e,r,n){return 0===n.compare(e,r)}function rr(t,e,r){const n="=="!==t&&"!="!==t;return class i{constructor(t,e,r){this.type=dt,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}static parse(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");const r=t[0];let a=e.parse(t[1],1,gt);if(!a)return null;if(!tr(r,a.type))return e.concat(1).error(`"${r}" comparisons are not supported for type '${At(a.type)}'.`);let s=e.parse(t[2],2,gt);if(!s)return null;if(!tr(r,s.type))return e.concat(2).error(`"${r}" comparisons are not supported for type '${At(s.type)}'.`);if(a.type.kind!==s.type.kind&&"value"!==a.type.kind&&"value"!==s.type.kind)return e.error(`Cannot compare types '${At(a.type)}' and '${At(s.type)}'.`);n&&("value"===a.type.kind&&"value"!==s.type.kind?a=new Gt(s.type,[a]):"value"!==a.type.kind&&"value"===s.type.kind&&(s=new Gt(a.type,[s])));let o=null;if(4===t.length){if("string"!==a.type.kind&&"string"!==s.type.kind&&"value"!==a.type.kind&&"value"!==s.type.kind)return e.error("Cannot use collator to compare non-string types.");if(o=e.parse(t[3],3,xt),!o)return null}return new i(a,s,o)}evaluate(i){const a=this.lhs.evaluate(i),s=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){const e=qt(a),r=qt(s);if(e.kind!==r.kind||"string"!==e.kind&&"number"!==e.kind)throw new Zt(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${r.kind}) instead.`)}if(this.collator&&!n&&this.hasUntypedArgument){const t=qt(a),r=qt(s);if("string"!==t.kind||"string"!==r.kind)return e(i,a,s)}return this.collator?r(i,a,s,this.collator.evaluate(i)):e(i,a,s)}eachChild(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);}outputDefined(){return !0}}}const nr=rr("==",(function(t,e,r){return e===r}),er),ir=rr("!=",(function(t,e,r){return e!==r}),(function(t,e,r,n){return !er(0,e,r,n)})),ar=rr("<",(function(t,e,r){return e<r}),(function(t,e,r,n){return n.compare(e,r)<0})),sr=rr(">",(function(t,e,r){return e>r}),(function(t,e,r,n){return n.compare(e,r)>0})),or=rr("<=",(function(t,e,r){return e<=r}),(function(t,e,r,n){return n.compare(e,r)<=0})),lr=rr(">=",(function(t,e,r){return e>=r}),(function(t,e,r,n){return n.compare(e,r)>=0}));class ur{constructor(t,e,r,n,i){this.type=ft,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=n,this.maxFractionDigits=i;}static parse(t,e){if(3!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,pt);if(!r)return null;const n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");let i=null;if(n.locale&&(i=e.parse(n.locale,1,ft),!i))return null;let a=null;if(n.currency&&(a=e.parse(n.currency,1,ft),!a))return null;let s=null;if(n["min-fraction-digits"]&&(s=e.parse(n["min-fraction-digits"],1,pt),!s))return null;let o=null;return n["max-fraction-digits"]&&(o=e.parse(n["max-fraction-digits"],1,pt),!o)?null:new ur(r,i,a,s,o)}evaluate(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))}eachChild(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);}outputDefined(){return !1}}class cr{constructor(t){this.type=vt,this.sections=t;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[1];if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.");const n=[];let i=!1;for(let r=1;r<=t.length-1;++r){const a=t[r];if(i&&"object"==typeof a&&!Array.isArray(a)){i=!1;let t=null;if(a["font-scale"]&&(t=e.parse(a["font-scale"],1,pt),!t))return null;let r=null;if(a["text-font"]&&(r=e.parse(a["text-font"],1,_t(ft)),!r))return null;let s=null;if(a["text-color"]&&(s=e.parse(a["text-color"],1,yt),!s))return null;const o=n[n.length-1];o.scale=t,o.font=r,o.textColor=s;}else {const a=e.parse(t[r],1,gt);if(!a)return null;const s=a.type.kind;if("string"!==s&&"value"!==s&&"null"!==s&&"resolvedImage"!==s)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");i=!0,n.push({content:a,scale:null,font:null,textColor:null});}}return new cr(n)}evaluate(t){return new Dt(this.sections.map((e=>{const r=e.content.evaluate(t);return qt(r)===wt?new Lt("",r,null,null,null):new Lt(jt(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))}eachChild(t){for(const e of this.sections)t(e.content),e.scale&&t(e.scale),e.font&&t(e.font),e.textColor&&t(e.textColor);}outputDefined(){return !1}}class hr{constructor(t){this.type=wt,this.input=t;}static parse(t,e){if(2!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,ft);return r?new hr(r):e.error("No image name provided.")}evaluate(t){const e=this.input.evaluate(t),r=Rt.fromString(e);return r&&t.availableImages&&(r.available=t.availableImages.indexOf(e)>-1),r}eachChild(t){t(this.input);}outputDefined(){return !1}}class pr{constructor(t){this.type=pt,this.input=t;}static parse(t,e){if(2!==t.length)return e.error(`Expected 1 argument, but found ${t.length-1} instead.`);const r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error(`Expected argument of type string or array, but found ${At(r.type)} instead.`):new pr(r):null}evaluate(t){const e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new Zt(`Expected value to be of type string or array, but found ${At(qt(e))} instead.`)}eachChild(t){t(this.input);}outputDefined(){return !1}}const fr={"==":nr,"!=":ir,">":sr,"<":ar,">=":lr,"<=":or,array:Gt,at:Je,boolean:Gt,case:We,coalesce:Ke,collator:Qt,format:cr,image:hr,in:Xe,"index-of":Ye,interpolate:Ne,"interpolate-hcl":Ne,"interpolate-lab":Ne,length:pr,let:Ge,literal:Nt,match:He,number:Gt,"number-format":ur,object:Gt,slice:Qe,step:ke,string:Gt,"to-boolean":Xt,"to-color":Xt,"to-number":Xt,"to-string":Xt,var:be,within:me};function dr(t,[e,r,n,i]){e=e.evaluate(t),r=r.evaluate(t),n=n.evaluate(t);const a=i?i.evaluate(t):1,s=Ot(e,r,n,a);if(s)throw new Zt(s);return new Ft(e/255*a,r/255*a,n/255*a,a)}function yr(t,e){return t in e}function mr(t,e){const r=e[t];return void 0===r?null:r}function gr(t){return {type:t}}function xr(t){return {result:"success",value:t}}function vr(t){return {result:"error",value:t}}function br(t){return "data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function wr(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function _r(t){return !!t.expression&&t.expression.interpolated}function Ar(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function kr(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function Sr(t){return t}function Ir(t,e){const r="color"===e.type,n=t.stops&&"object"==typeof t.stops[0][0],i=n||!(n||void 0!==t.property),a=t.type||(_r(e)?"exponential":"interval");if(r||"padding"===e.type){const n=r?Ft.parse:$t.parse;(t=st({},t)).stops&&(t.stops=t.stops.map((t=>[t[0],n(t[1])]))),t.default=n(t.default?t.default:e.default);}if(t.colorSpace&&"rgb"!==t.colorSpace&&!je[t.colorSpace])throw new Error(`Unknown color space: ${t.colorSpace}`);let s,o,l;if("exponential"===a)s=Cr;else if("interval"===a)s=Br;else if("categorical"===a){s=zr,o=Object.create(null);for(const e of t.stops)o[e[0]]=e[1];l=typeof t.stops[0][0];}else {if("identity"!==a)throw new Error(`Unknown function type "${a}"`);s=Pr;}if(n){const r={},n=[];for(let e=0;e<t.stops.length;e++){const i=t.stops[e],a=i[0].zoom;void 0===r[a]&&(r[a]={zoom:a,type:t.type,property:t.property,default:t.default,stops:[]},n.push(a)),r[a].stops.push([i[0].value,i[1]]);}const i=[];for(const t of n)i.push([r[t].zoom,Ir(r[t],e)]);const a={name:"linear"};return {kind:"composite",interpolationType:a,interpolationFactor:Ne.interpolationFactor.bind(void 0,a),zoomStops:i.map((t=>t[0])),evaluate:({zoom:r},n)=>Cr({stops:i,base:t.base},e,r).evaluate(r,n)}}if(i){const r="exponential"===a?{name:"exponential",base:void 0!==t.base?t.base:1}:null;return {kind:"camera",interpolationType:r,interpolationFactor:Ne.interpolationFactor.bind(void 0,r),zoomStops:t.stops.map((t=>t[0])),evaluate:({zoom:r})=>s(t,e,r,o,l)}}return {kind:"source",evaluate(r,n){const i=n&&n.properties?n.properties[t.property]:void 0;return void 0===i?Mr(t.default,e.default):s(t,e,i,o,l)}}}function Mr(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function zr(t,e,r,n,i){return Mr(typeof r===i?n[r]:void 0,t.default,e.default)}function Br(t,e,r){if("number"!==Ar(r))return Mr(t.default,e.default);const n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];const i=Ae(t.stops.map((t=>t[0])),r);return t.stops[i][1]}function Cr(t,e,r){const n=void 0!==t.base?t.base:1;if("number"!==Ar(r))return Mr(t.default,e.default);const i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];const a=Ae(t.stops.map((t=>t[0])),r),s=function(t,e,r,n){const i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[a][0],t.stops[a+1][0]),o=t.stops[a][1],l=t.stops[a+1][1];let u=Ie[e.type]||Sr;if(t.colorSpace&&"rgb"!==t.colorSpace){const e=je[t.colorSpace];u=(t,r)=>e.reverse(e.interpolate(e.forward(t),e.forward(r),s));}return "function"==typeof o.evaluate?{evaluate(...t){const e=o.evaluate.apply(void 0,t),r=l.evaluate.apply(void 0,t);if(void 0!==e&&void 0!==r)return u(e,r,s)}}:u(o,l,s)}function Pr(t,e,r){switch(e.type){case"color":r=Ft.parse(r);break;case"formatted":r=Dt.fromString(r.toString());break;case"resolvedImage":r=Rt.fromString(r.toString());break;case"padding":r=$t.parse(r);break;default:Ar(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0);}return Mr(r,t.default,e.default)}Wt.register(fr,{error:[{kind:"error"},[ft],(t,[e])=>{throw new Zt(e.evaluate(t))}],typeof:[ft,[gt],(t,[e])=>At(qt(e.evaluate(t)))],"to-rgba":[_t(pt,4),[yt],(t,[e])=>e.evaluate(t).toArray()],rgb:[yt,[pt,pt,pt],dr],rgba:[yt,[pt,pt,pt,pt],dr],has:{type:dt,overloads:[[[ft],(t,[e])=>yr(e.evaluate(t),t.properties())],[[ft,mt],(t,[e,r])=>yr(e.evaluate(t),r.evaluate(t))]]},get:{type:gt,overloads:[[[ft],(t,[e])=>mr(e.evaluate(t),t.properties())],[[ft,mt],(t,[e,r])=>mr(e.evaluate(t),r.evaluate(t))]]},"feature-state":[gt,[ft],(t,[e])=>mr(e.evaluate(t),t.featureState||{})],properties:[mt,[],t=>t.properties()],"geometry-type":[ft,[],t=>t.geometryType()],id:[gt,[],t=>t.id()],zoom:[pt,[],t=>t.globals.zoom],"heatmap-density":[pt,[],t=>t.globals.heatmapDensity||0],"line-progress":[pt,[],t=>t.globals.lineProgress||0],accumulated:[gt,[],t=>void 0===t.globals.accumulated?null:t.globals.accumulated],"+":[pt,gr(pt),(t,e)=>{let r=0;for(const n of e)r+=n.evaluate(t);return r}],"*":[pt,gr(pt),(t,e)=>{let r=1;for(const n of e)r*=n.evaluate(t);return r}],"-":{type:pt,overloads:[[[pt,pt],(t,[e,r])=>e.evaluate(t)-r.evaluate(t)],[[pt],(t,[e])=>-e.evaluate(t)]]},"/":[pt,[pt,pt],(t,[e,r])=>e.evaluate(t)/r.evaluate(t)],"%":[pt,[pt,pt],(t,[e,r])=>e.evaluate(t)%r.evaluate(t)],ln2:[pt,[],()=>Math.LN2],pi:[pt,[],()=>Math.PI],e:[pt,[],()=>Math.E],"^":[pt,[pt,pt],(t,[e,r])=>Math.pow(e.evaluate(t),r.evaluate(t))],sqrt:[pt,[pt],(t,[e])=>Math.sqrt(e.evaluate(t))],log10:[pt,[pt],(t,[e])=>Math.log(e.evaluate(t))/Math.LN10],ln:[pt,[pt],(t,[e])=>Math.log(e.evaluate(t))],log2:[pt,[pt],(t,[e])=>Math.log(e.evaluate(t))/Math.LN2],sin:[pt,[pt],(t,[e])=>Math.sin(e.evaluate(t))],cos:[pt,[pt],(t,[e])=>Math.cos(e.evaluate(t))],tan:[pt,[pt],(t,[e])=>Math.tan(e.evaluate(t))],asin:[pt,[pt],(t,[e])=>Math.asin(e.evaluate(t))],acos:[pt,[pt],(t,[e])=>Math.acos(e.evaluate(t))],atan:[pt,[pt],(t,[e])=>Math.atan(e.evaluate(t))],min:[pt,gr(pt),(t,e)=>Math.min(...e.map((e=>e.evaluate(t))))],max:[pt,gr(pt),(t,e)=>Math.max(...e.map((e=>e.evaluate(t))))],abs:[pt,[pt],(t,[e])=>Math.abs(e.evaluate(t))],round:[pt,[pt],(t,[e])=>{const r=e.evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[pt,[pt],(t,[e])=>Math.floor(e.evaluate(t))],ceil:[pt,[pt],(t,[e])=>Math.ceil(e.evaluate(t))],"filter-==":[dt,[ft,gt],(t,[e,r])=>t.properties()[e.value]===r.value],"filter-id-==":[dt,[gt],(t,[e])=>t.id()===e.value],"filter-type-==":[dt,[ft],(t,[e])=>t.geometryType()===e.value],"filter-<":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<i}],"filter-id-<":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<n}],"filter->":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>i}],"filter-id->":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>n}],"filter-<=":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<=i}],"filter-id-<=":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<=n}],"filter->=":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>=i}],"filter-id->=":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>=n}],"filter-has":[dt,[gt],(t,[e])=>e.value in t.properties()],"filter-has-id":[dt,[],t=>null!==t.id()&&void 0!==t.id()],"filter-type-in":[dt,[_t(ft)],(t,[e])=>e.value.indexOf(t.geometryType())>=0],"filter-id-in":[dt,[_t(gt)],(t,[e])=>e.value.indexOf(t.id())>=0],"filter-in-small":[dt,[ft,_t(gt)],(t,[e,r])=>r.value.indexOf(t.properties()[e.value])>=0],"filter-in-large":[dt,[ft,_t(gt)],(t,[e,r])=>function(t,e,r,n){for(;r<=n;){const i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[e.value],r.value,0,r.value.length-1)],all:{type:dt,overloads:[[[dt,dt],(t,[e,r])=>e.evaluate(t)&&r.evaluate(t)],[gr(dt),(t,e)=>{for(const r of e)if(!r.evaluate(t))return !1;return !0}]]},any:{type:dt,overloads:[[[dt,dt],(t,[e,r])=>e.evaluate(t)||r.evaluate(t)],[gr(dt),(t,e)=>{for(const r of e)if(r.evaluate(t))return !0;return !1}]]},"!":[dt,[dt],(t,[e])=>!e.evaluate(t)],"is-supported-script":[dt,[ft],(t,[e])=>{const r=t.globals&&t.globals.isSupportedScript;return !r||r(e.evaluate(t))}],upcase:[ft,[ft],(t,[e])=>e.evaluate(t).toUpperCase()],downcase:[ft,[ft],(t,[e])=>e.evaluate(t).toLowerCase()],concat:[ft,gr(gt),(t,e)=>e.map((e=>jt(e.evaluate(t)))).join("")],"resolved-locale":[ft,[xt],(t,[e])=>e.evaluate(t).resolvedLocale()]});class Vr{constructor(t,e){this.expression=t,this._warningHistory={},this._evaluator=new Ht,this._defaultValue=e?function(t){return "color"===t.type&&kr(t.default)?new Ft(0,0,0,0):"color"===t.type?Ft.parse(t.default)||null:"padding"===t.type?$t.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null;}evaluateWithoutErrorHandling(t,e,r,n,i,a){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=a,this.expression.evaluate(this._evaluator)}evaluate(t,e,r,n,i,a){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=a||null;try{const t=this.expression.evaluate(this._evaluator);if(null==t||"number"==typeof t&&t!=t)return this._defaultValue;if(this._enumValues&&!(t in this._enumValues))throw new Zt(`Expected value to be one of ${Object.keys(this._enumValues).map((t=>JSON.stringify(t))).join(", ")}, but found ${JSON.stringify(t)} instead.`);return t}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}}function Er(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in fr}function Fr(t,e){const r=new we(fr,[],e?function(t){const e={color:yt,string:ft,number:pt,enum:ft,boolean:dt,formatted:vt,padding:bt,resolvedImage:wt};return "array"===t.type?_t(e[t.value]||gt,t.length):e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?xr(new Vr(n,e)):vr(r.errors)}class Tr{constructor(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!xe(e.expression);}evaluateWithoutErrorHandling(t,e,r,n,i,a){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,a)}evaluate(t,e,r,n,i,a){return this._styleExpression.evaluate(t,e,r,n,i,a)}}class Lr{constructor(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!xe(e.expression),this.interpolationType=n;}evaluateWithoutErrorHandling(t,e,r,n,i,a){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,a)}evaluate(t,e,r,n,i,a){return this._styleExpression.evaluate(t,e,r,n,i,a)}interpolationFactor(t,e,r){return this.interpolationType?Ne.interpolationFactor(this.interpolationType,t,e,r):0}}function Dr(t,e){const r=Fr(t,e);if("error"===r.result)return r;const n=r.value.expression,i=ge(n);if(!i&&!br(e))return vr([new ut("","data expressions not supported")]);const a=ve(n,["zoom"]);if(!a&&!wr(e))return vr([new ut("","zoom expressions not supported")]);const s=Rr(n);return s||a?s instanceof ut?vr([s]):s instanceof Ne&&!_r(e)?vr([new ut("",'"interpolate" expressions cannot be used with this property')]):xr(s?new Lr(i?"camera":"composite",r.value,s.labels,s instanceof Ne?s.interpolation:void 0):new Tr(i?"constant":"source",r.value)):vr([new ut("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}class $r{constructor(t,e){this._parameters=t,this._specification=e,st(this,Ir(this._parameters,this._specification));}static deserialize(t){return new $r(t._parameters,t._specification)}static serialize(t){return {_parameters:t._parameters,_specification:t._specification}}}function Rr(t){let e=null;if(t instanceof Ge)e=Rr(t.result);else if(t instanceof Ke){for(const r of t.args)if(e=Rr(r),e)break}else (t instanceof ke||t instanceof Ne)&&t.input instanceof Wt&&"zoom"===t.input.name&&(e=t);return e instanceof ut||t.eachChild((t=>{const r=Rr(t);r instanceof ut?e=r:!e&&r?e=new ut("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):e&&r&&e!==r&&(e=new ut("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));})),e}function Or(t){const e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},a=t.style,s=t.styleSpec;let o=[];const l=Ar(r);if("object"!==l)return [new it(e,r,`object expected, ${l} found`)];for(const t in r){const l=t.split(".")[0],u=n[l]||n["*"];let c;if(i[l])c=i[l];else if(n[l])c=yn;else if(i["*"])c=i["*"];else {if(!n["*"]){o.push(new it(e,r[t],`unknown property "${t}"`));continue}c=yn;}o=o.concat(c({key:(e?`${e}.`:e)+t,value:r[t],valueSpec:u,style:a,styleSpec:s,object:r,objectKey:t},r));}for(const t in n)i[t]||n[t].required&&void 0===n[t].default&&void 0===r[t]&&o.push(new it(e,r,`missing required property "${t}"`));return o}function Ur(t){const e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,a=t.key,s=t.arrayElementValidator||yn;if("array"!==Ar(e))return [new it(a,e,`array expected, ${Ar(e)} found`)];if(r.length&&e.length!==r.length)return [new it(a,e,`array length ${r.length} expected, length ${e.length} found`)];if(r["min-length"]&&e.length<r["min-length"])return [new it(a,e,`array length at least ${r["min-length"]} expected, length ${e.length} found`)];let o={type:r.value,values:r.values};i.$version<7&&(o.function=r.function),"object"===Ar(r.value)&&(o=r.value);let l=[];for(let t=0;t<e.length;t++)l=l.concat(s({array:e,arrayIndex:t,value:e[t],valueSpec:o,style:n,styleSpec:i,key:`${a}[${t}]`}));return l}function qr(t){const e=t.key,r=t.value,n=t.valueSpec;let i=Ar(r);return "number"===i&&r!=r&&(i="NaN"),"number"!==i?[new it(e,r,`number expected, ${i} found`)]:"minimum"in n&&r<n.minimum?[new it(e,r,`${r} is less than the minimum value ${n.minimum}`)]:"maximum"in n&&r>n.maximum?[new it(e,r,`${r} is greater than the maximum value ${n.maximum}`)]:[]}function jr(t){const e=t.valueSpec,r=ot(t.value.type);let n,i,a,s={};const o="categorical"!==r&&void 0===t.value.property,l=!o,u="array"===Ar(t.value.stops)&&"array"===Ar(t.value.stops[0])&&"object"===Ar(t.value.stops[0][0]),c=Or({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===r)return [new it(t.key,t.value,'identity function may not have a "stops" property')];let e=[];const n=t.value;return e=e.concat(Ur({key:t.key,value:n,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:h})),"array"===Ar(n)&&0===n.length&&e.push(new it(t.key,n,"array must have at least one stop")),e},default:function(t){return yn({key:t.key,value:t.value,valueSpec:e,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===r&&o&&c.push(new it(t.key,t.value,'missing required property "property"')),"identity"===r||t.value.stops||c.push(new it(t.key,t.value,'missing required property "stops"')),"exponential"===r&&t.valueSpec.expression&&!_r(t.valueSpec)&&c.push(new it(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!br(t.valueSpec)?c.push(new it(t.key,t.value,"property functions not supported")):o&&!wr(t.valueSpec)&&c.push(new it(t.key,t.value,"zoom functions not supported"))),"categorical"!==r&&!u||void 0!==t.value.property||c.push(new it(t.key,t.value,'"property" property is required')),c;function h(t){let r=[];const n=t.value,o=t.key;if("array"!==Ar(n))return [new it(o,n,`array expected, ${Ar(n)} found`)];if(2!==n.length)return [new it(o,n,`array length 2 expected, length ${n.length} found`)];if(u){if("object"!==Ar(n[0]))return [new it(o,n,`object expected, ${Ar(n[0])} found`)];if(void 0===n[0].zoom)return [new it(o,n,"object stop key must have zoom")];if(void 0===n[0].value)return [new it(o,n,"object stop key must have value")];if(a&&a>ot(n[0].zoom))return [new it(o,n[0].zoom,"stop zoom values must appear in ascending order")];ot(n[0].zoom)!==a&&(a=ot(n[0].zoom),i=void 0,s={}),r=r.concat(Or({key:`${o}[0]`,value:n[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:qr,value:p}}));}else r=r.concat(p({key:`${o}[0]`,value:n[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},n));return Er(lt(n[1]))?r.concat([new it(`${o}[1]`,n[1],"expressions are not allowed in function stops.")]):r.concat(yn({key:`${o}[1]`,value:n[1],valueSpec:e,style:t.style,styleSpec:t.styleSpec}))}function p(t,a){const o=Ar(t.value),l=ot(t.value),u=null!==t.value?t.value:a;if(n){if(o!==n)return [new it(t.key,u,`${o} stop domain type must match previous stop domain type ${n}`)]}else n=o;if("number"!==o&&"string"!==o&&"boolean"!==o)return [new it(t.key,u,"stop domain value must be a number, string, or boolean")];if("number"!==o&&"categorical"!==r){let n=`number expected, ${o} found`;return br(e)&&void 0===r&&(n+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new it(t.key,u,n)]}return "categorical"!==r||"number"!==o||isFinite(l)&&Math.floor(l)===l?"categorical"!==r&&"number"===o&&void 0!==i&&l<i?[new it(t.key,u,"stop domain values must appear in ascending order")]:(i=l,"categorical"===r&&l in s?[new it(t.key,u,"stop domain values must be unique")]:(s[l]=!0,[])):[new it(t.key,u,`integer expected, found ${l}`)]}}function Nr(t){const e=("property"===t.expressionContext?Dr:Fr)(lt(t.value),t.valueSpec);if("error"===e.result)return e.value.map((e=>new it(`${t.key}${e.key}`,t.value,e.message)));const r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!r.outputDefined())return [new it(t.key,t.value,`Invalid data expression for "${t.propertyKey}". Output values must be contained as literals within the expression.`)];if("property"===t.expressionContext&&"layout"===t.propertyType&&!xe(r))return [new it(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext&&!xe(r))return [new it(t.key,t.value,'"feature-state" data expressions are not supported with filters.')];if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!ve(r,["zoom","feature-state"]))return [new it(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!ge(r))return [new it(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function Zr(t){const e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(ot(r))&&i.push(new it(e,r,`expected one of [${n.values.join(", ")}], ${JSON.stringify(r)} found`)):-1===Object.keys(n.values).indexOf(ot(r))&&i.push(new it(e,r,`expected one of [${Object.keys(n.values).join(", ")}], ${JSON.stringify(r)} found`)),i}function Kr(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]));case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(const e of t.slice(1))if(!Kr(e)&&"boolean"!=typeof e)return !1;return !0;default:return !0}}const Gr={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}};function Jr(t){if(null==t)return {filter:()=>!0,needGeometry:!1};Kr(t)||(t=Hr(t));const e=Fr(t,Gr);if("error"===e.result)throw new Error(e.value.map((t=>`${t.key}: ${t.message}`)).join(", "));return {filter:(t,r,n)=>e.value.evaluate(t,r,{},n),needGeometry:Yr(t)}}function Xr(t,e){return t<e?-1:t>e?1:0}function Yr(t){if(!Array.isArray(t))return !1;if("within"===t[0])return !0;for(let e=1;e<t.length;e++)if(Yr(t[e]))return !0;return !1}function Hr(t){if(!t)return !0;const e=t[0];return t.length<=1?"any"!==e:"=="===e?Wr(t[1],t[2],"=="):"!="===e?en(Wr(t[1],t[2],"==")):"<"===e||">"===e||"<="===e||">="===e?Wr(t[1],t[2],e):"any"===e?(r=t.slice(1),["any"].concat(r.map(Hr))):"all"===e?["all"].concat(t.slice(1).map(Hr)):"none"===e?["all"].concat(t.slice(1).map(Hr).map(en)):"in"===e?Qr(t[1],t.slice(2)):"!in"===e?en(Qr(t[1],t.slice(2))):"has"===e?tn(t[1]):"!has"===e?en(tn(t[1])):"within"!==e||t;var r;}function Wr(t,e,r){switch(t){case"$type":return [`filter-type-${r}`,e];case"$id":return [`filter-id-${r}`,e];default:return [`filter-${r}`,t,e]}}function Qr(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some((t=>typeof t!=typeof e[0]))?["filter-in-large",t,["literal",e.sort(Xr)]]:["filter-in-small",t,["literal",e]]}}function tn(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function en(t){return ["!",t]}function rn(t){return Kr(lt(t.value))?Nr(st({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):nn(t)}function nn(t){const e=t.value,r=t.key;if("array"!==Ar(e))return [new it(r,e,`array expected, ${Ar(e)} found`)];const n=t.styleSpec;let i,a=[];if(e.length<1)return [new it(r,e,"filter array must have at least 1 element")];switch(a=a.concat(Zr({key:`${r}[0]`,value:e[0],valueSpec:n.filter_operator,style:t.style,styleSpec:t.styleSpec})),ot(e[0])){case"<":case"<=":case">":case">=":e.length>=2&&"$type"===ot(e[1])&&a.push(new it(r,e,`"$type" cannot be use with operator "${e[0]}"`));case"==":case"!=":3!==e.length&&a.push(new it(r,e,`filter array for operator "${e[0]}" must have 3 elements`));case"in":case"!in":e.length>=2&&(i=Ar(e[1]),"string"!==i&&a.push(new it(`${r}[1]`,e[1],`string expected, ${i} found`)));for(let s=2;s<e.length;s++)i=Ar(e[s]),"$type"===ot(e[1])?a=a.concat(Zr({key:`${r}[${s}]`,value:e[s],valueSpec:n.geometry_type,style:t.style,styleSpec:t.styleSpec})):"string"!==i&&"number"!==i&&"boolean"!==i&&a.push(new it(`${r}[${s}]`,e[s],`string, number, or boolean expected, ${i} found`));break;case"any":case"all":case"none":for(let n=1;n<e.length;n++)a=a.concat(nn({key:`${r}[${n}]`,value:e[n],style:t.style,styleSpec:t.styleSpec}));break;case"has":case"!has":i=Ar(e[1]),2!==e.length?a.push(new it(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"string"!==i&&a.push(new it(`${r}[1]`,e[1],`string expected, ${i} found`));break;case"within":i=Ar(e[1]),2!==e.length?a.push(new it(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"object"!==i&&a.push(new it(`${r}[1]`,e[1],`object expected, ${i} found`));}return a}function an(t,e){const r=t.key,n=t.style,i=t.styleSpec,a=t.value,s=t.objectKey,o=i[`${e}_${t.layerType}`];if(!o)return [];const l=s.match(/^(.*)-transition$/);if("paint"===e&&l&&o[l[1]]&&o[l[1]].transition)return yn({key:r,value:a,valueSpec:i.transition,style:n,styleSpec:i});const u=t.valueSpec||o[s];if(!u)return [new it(r,a,`unknown property "${s}"`)];let c;if("string"===Ar(a)&&br(u)&&!u.tokens&&(c=/^{([^}]+)}$/.exec(a)))return [new it(r,a,`"${s}" does not support interpolation syntax\nUse an identity property function instead: \`{ "type": "identity", "property": ${JSON.stringify(c[1])} }\`.`)];const h=[];return "symbol"===t.layerType&&("text-field"===s&&n&&!n.glyphs&&h.push(new it(r,a,'use of "text-field" requires a style "glyphs" property')),"text-font"===s&&kr(lt(a))&&"identity"===ot(a.type)&&h.push(new it(r,a,'"text-font" does not support identity functions'))),h.concat(yn({key:t.key,value:a,valueSpec:u,style:n,styleSpec:i,expressionContext:"property",propertyType:e,propertyKey:s}))}function sn(t){return an(t,"paint")}function on(t){return an(t,"layout")}function ln(t){let e=[];const r=t.value,n=t.key,i=t.style,a=t.styleSpec;r.type||r.ref||e.push(new it(n,r,'either "type" or "ref" is required'));let s=ot(r.type);const o=ot(r.ref);if(r.id){const a=ot(r.id);for(let s=0;s<t.arrayIndex;s++){const t=i.layers[s];ot(t.id)===a&&e.push(new it(n,r.id,`duplicate layer id "${r.id}", previously used at line ${t.id.__line__}`));}}if("ref"in r){let t;["type","source","source-layer","filter","layout"].forEach((t=>{t in r&&e.push(new it(n,r[t],`"${t}" is prohibited for ref layers`));})),i.layers.forEach((e=>{ot(e.id)===o&&(t=e);})),t?t.ref?e.push(new it(n,r.ref,"ref cannot reference another ref layer")):s=ot(t.type):e.push(new it(n,r.ref,`ref layer "${o}" not found`));}else if("background"!==s)if(r.source){const t=i.sources&&i.sources[r.source],a=t&&ot(t.type);t?"vector"===a&&"raster"===s?e.push(new it(n,r.source,`layer "${r.id}" requires a raster source`)):"raster"===a&&"raster"!==s?e.push(new it(n,r.source,`layer "${r.id}" requires a vector source`)):"vector"!==a||r["source-layer"]?"raster-dem"===a&&"hillshade"!==s?e.push(new it(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===a&&t.lineMetrics||e.push(new it(n,r,`layer "${r.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)):e.push(new it(n,r,`layer "${r.id}" must specify a "source-layer"`)):e.push(new it(n,r.source,`source "${r.source}" not found`));}else e.push(new it(n,r,'missing required property "source"'));return e=e.concat(Or({key:n,value:r,valueSpec:a.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":()=>[],type:()=>yn({key:`${n}.type`,value:r.type,valueSpec:a.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"}),filter:rn,layout:t=>Or({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>on(st({layerType:s},t))}}),paint:t=>Or({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>sn(st({layerType:s},t))}})}})),e}function un(t){const e=t.value,r=t.key,n=Ar(e);return "string"!==n?[new it(r,e,`string expected, ${n} found`)]:[]}const cn={promoteId:function({key:t,value:e}){if("string"===Ar(e))return un({key:t,value:e});{const r=[];for(const n in e)r.push(...un({key:`${t}.${n}`,value:e[n]}));return r}}};function hn(t){const e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return [new it(r,e,'"type" is required')];const a=ot(e.type);let s;switch(a){case"vector":case"raster":case"raster-dem":return s=Or({key:r,value:e,valueSpec:n[`source_${a.replace("-","_")}`],style:t.style,styleSpec:n,objectElementValidators:cn}),s;case"geojson":if(s=Or({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n,objectElementValidators:cn}),e.cluster)for(const t in e.clusterProperties){const[n,i]=e.clusterProperties[t],a="string"==typeof n?[n,["accumulated"],["get",t]]:n;s.push(...Nr({key:`${r}.${t}.map`,value:i,expressionContext:"cluster-map"})),s.push(...Nr({key:`${r}.${t}.reduce`,value:a,expressionContext:"cluster-reduce"}));}return s;case"video":return Or({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return Or({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return [new it(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return Zr({key:`${r}.type`,value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,styleSpec:n})}}function pn(t){const e=t.value,r=t.styleSpec,n=r.light,i=t.style;let a=[];const s=Ar(e);if(void 0===e)return a;if("object"!==s)return a=a.concat([new it("light",e,`object expected, ${s} found`)]),a;for(const t in e){const s=t.match(/^(.*)-transition$/);a=a.concat(s&&n[s[1]]&&n[s[1]].transition?yn({key:t,value:e[t],valueSpec:r.transition,style:i,styleSpec:r}):n[t]?yn({key:t,value:e[t],valueSpec:n[t],style:i,styleSpec:r}):[new it(t,e[t],`unknown property "${t}"`)]);}return a}function fn(t){const e=t.value,r=t.styleSpec,n=r.terrain,i=t.style;let a=[];const s=Ar(e);if(void 0===e)return a;if("object"!==s)return a=a.concat([new it("terrain",e,`object expected, ${s} found`)]),a;for(const t in e)a=a.concat(n[t]?yn({key:t,value:e[t],valueSpec:n[t],style:i,styleSpec:r}):[new it(t,e[t],`unknown property "${t}"`)]);return a}const dn={"*":()=>[],array:Ur,boolean:function(t){const e=t.value,r=t.key,n=Ar(e);return "boolean"!==n?[new it(r,e,`boolean expected, ${n} found`)]:[]},number:qr,color:function(t){const e=t.key,r=t.value,n=Ar(r);return "string"!==n?[new it(e,r,`color expected, ${n} found`)]:null===zt(r)?[new it(e,r,`color expected, "${r}" found`)]:[]},constants:at,enum:Zr,filter:rn,function:jr,layer:ln,object:Or,source:hn,light:pn,terrain:fn,string:un,formatted:function(t){return 0===un(t).length?[]:Nr(t)},resolvedImage:function(t){return 0===un(t).length?[]:Nr(t)},padding:function(t){const e=t.key,r=t.value;if("array"===Ar(r)){if(r.length<1||r.length>4)return [new it(e,r,`padding requires 1 to 4 values; ${r.length} values found`)];const t={type:"number"};let n=[];for(let i=0;i<r.length;i++)n=n.concat(yn({key:`${e}[${i}]`,value:r[i],valueSpec:t}));return n}return qr({key:e,value:r,valueSpec:{}})}};function yn(t){const e=t.value,r=t.valueSpec,n=t.styleSpec;return r.expression&&kr(ot(e))?jr(t):r.expression&&Er(lt(e))?Nr(t):r.type&&dn[r.type]?dn[r.type](t):Or(st({},t,{valueSpec:r.type?n[r.type]:r}))}function mn(t){const e=t.value,r=t.key,n=un(t);return n.length||(-1===e.indexOf("{fontstack}")&&n.push(new it(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new it(r,e,'"glyphs" url must include a "{range}" token'))),n}function gn(t,e=nt){let r=[];return r=r.concat(yn({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:mn,"*":()=>[]}})),t.constants&&(r=r.concat(at({key:"constants",value:t.constants,style:t,styleSpec:e}))),xn(r)}function xn(t){return [].concat(t).sort(((t,e)=>t.line-e.line))}function vn(t){return function(...e){return xn(t.apply(this,e))}}gn.source=vn(hn),gn.light=vn(pn),gn.terrain=vn(fn),gn.layer=vn(ln),gn.filter=vn(rn),gn.paintProperty=vn(sn),gn.layoutProperty=vn(on);const bn=gn,wn=bn.light,_n=bn.paintProperty,An=bn.layoutProperty;function kn(t,e){let r=!1;if(e&&e.length)for(const n of e)t.fire(new et(new Error(n.message))),r=!0;return r}class Sn{constructor(t,e,r){const n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;const i=new Int32Array(this.arrayBuffer);t=i[0],this.d=(e=i[1])+2*(r=i[2]);for(let t=0;t<this.d*this.d;t++){const e=i[3+t],r=i[3+t+1];n.push(e===r?null:i.subarray(e,r));}const a=i[3+n.length+1];this.keys=i.subarray(i[3+n.length],a),this.bboxes=i.subarray(a),this.insert=this._insertReadonly;}else {this.d=e+2*r;for(let t=0;t<this.d*this.d;t++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;const i=r/e*t;this.min=-i,this.max=t+i;}insert(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++,void 0,void 0),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);}_insertReadonly(){throw new Error("Cannot insert into a GridIndex created from an ArrayBuffer.")}_insertCell(t,e,r,n,i,a){this.cells[i].push(a);}query(t,e,r,n,i){const a=this.min,s=this.max;if(t<=a&&e<=a&&s<=r&&s<=n&&!i)return Array.prototype.slice.call(this.keys);{const a=[];return this._forEachCell(t,e,r,n,this._queryCell,a,{},i),a}}_queryCell(t,e,r,n,i,a,s,o){const l=this.cells[i];if(null!==l){const i=this.keys,u=this.bboxes;for(let c=0;c<l.length;c++){const h=l[c];if(void 0===s[h]){const l=4*h;(o?o(u[l+0],u[l+1],u[l+2],u[l+3]):t<=u[l+2]&&e<=u[l+3]&&r>=u[l+0]&&n>=u[l+1])?(s[h]=!0,a.push(i[h])):s[h]=!1;}}}}_forEachCell(t,e,r,n,i,a,s,o){const l=this._convertToCellCoord(t),u=this._convertToCellCoord(e),c=this._convertToCellCoord(r),h=this._convertToCellCoord(n);for(let p=l;p<=c;p++)for(let l=u;l<=h;l++){const u=this.d*l+p;if((!o||o(this._convertFromCellCoord(p),this._convertFromCellCoord(l),this._convertFromCellCoord(p+1),this._convertFromCellCoord(l+1)))&&i.call(this,t,e,r,n,u,a,s,o))return}}_convertFromCellCoord(t){return (t-this.padding)/this.scale}_convertToCellCoord(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))}toArrayBuffer(){if(this.arrayBuffer)return this.arrayBuffer;const t=this.cells,e=3+this.cells.length+1+1;let r=0;for(let t=0;t<this.cells.length;t++)r+=this.cells[t].length;const n=new Int32Array(e+r+this.keys.length+this.bboxes.length);n[0]=this.extent,n[1]=this.n,n[2]=this.padding;let i=e;for(let e=0;e<t.length;e++){const r=t[e];n[3+e]=i,n.set(r,i),i+=r.length;}return n[3+t.length]=i,n.set(this.keys,i),i+=this.keys.length,n[3+t.length+1]=i,n.set(this.bboxes,i),i+=this.bboxes.length,n.buffer}static serialize(t,e){const r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}}static deserialize(t){return new Sn(t.buffer)}}const In={};function Mn(t,e,r={}){if(In[t])throw new Error(`${t} is already registered.`);Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),In[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}Mn("Object",Object),Mn("TransferableGridIndex",Sn),Mn("Color",Ft),Mn("Error",Error),Mn("AJAXError",q),Mn("ResolvedImage",Rt),Mn("StylePropertyFunction",$r),Mn("StyleExpression",Vr,{omit:["_evaluator"]}),Mn("ZoomDependentExpression",Lr),Mn("ZoomConstantExpression",Tr),Mn("CompoundExpression",Wt,{omit:["_evaluate"]});for(const t in fr)fr[t]._classRegistryKey||Mn(`Expression_${t}`,fr[t]);function zn(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function Bn(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob)return t;if(zn(t))return e&&e.push(t),t;if(A(t))return e&&e.push(t),t;if(ArrayBuffer.isView(t)){const r=t;return e&&e.push(r.buffer),r}if(t instanceof ImageData)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){const r=[];for(const n of t)r.push(Bn(n,e));return r}if("object"==typeof t){const r=t.constructor,n=r._classRegistryKey;if(!n)throw new Error("can't serialize object of unregistered class");if(!In[n])throw new Error(`${n} is not registered.`);const i=r.serialize?r.serialize(t,e):{};if(r.serialize){if(e&&i===e[e.length-1])throw new Error("statically serialized object won't survive transfer of $name property")}else {for(const r in t){if(!t.hasOwnProperty(r))continue;if(In[n].omit.indexOf(r)>=0)continue;const a=t[r];i[r]=In[n].shallow.indexOf(r)>=0?a:Bn(a,e);}t instanceof Error&&(i.message=t.message);}if(i.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==n&&(i.$name=n),i}throw new Error("can't serialize object of type "+typeof t)}function Cn(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob||zn(t)||A(t)||ArrayBuffer.isView(t)||t instanceof ImageData)return t;if(Array.isArray(t))return t.map(Cn);if("object"==typeof t){const e=t.$name||"Object";if(!In[e])throw new Error(`can't deserialize unregistered class ${e}`);const{klass:r}=In[e];if(!r)throw new Error(`can't deserialize unregistered class ${e}`);if(r.deserialize)return r.deserialize(t);const n=Object.create(r.prototype);for(const r of Object.keys(t)){if("$name"===r)continue;const i=t[r];n[r]=In[e].shallow.indexOf(r)>=0?i:Cn(i);}return n}throw new Error("can't deserialize object of type "+typeof t)}class Pn{constructor(){this.first=!0;}update(t,e){const r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))}}const Vn={"Latin-1 Supplement":t=>t>=128&&t<=255,Arabic:t=>t>=1536&&t<=1791,"Arabic Supplement":t=>t>=1872&&t<=1919,"Arabic Extended-A":t=>t>=2208&&t<=2303,"Hangul Jamo":t=>t>=4352&&t<=4607,"Unified Canadian Aboriginal Syllabics":t=>t>=5120&&t<=5759,Khmer:t=>t>=6016&&t<=6143,"Unified Canadian Aboriginal Syllabics Extended":t=>t>=6320&&t<=6399,"General Punctuation":t=>t>=8192&&t<=8303,"Letterlike Symbols":t=>t>=8448&&t<=8527,"Number Forms":t=>t>=8528&&t<=8591,"Miscellaneous Technical":t=>t>=8960&&t<=9215,"Control Pictures":t=>t>=9216&&t<=9279,"Optical Character Recognition":t=>t>=9280&&t<=9311,"Enclosed Alphanumerics":t=>t>=9312&&t<=9471,"Geometric Shapes":t=>t>=9632&&t<=9727,"Miscellaneous Symbols":t=>t>=9728&&t<=9983,"Miscellaneous Symbols and Arrows":t=>t>=11008&&t<=11263,"CJK Radicals Supplement":t=>t>=11904&&t<=12031,"Kangxi Radicals":t=>t>=12032&&t<=12255,"Ideographic Description Characters":t=>t>=12272&&t<=12287,"CJK Symbols and Punctuation":t=>t>=12288&&t<=12351,Hiragana:t=>t>=12352&&t<=12447,Katakana:t=>t>=12448&&t<=12543,Bopomofo:t=>t>=12544&&t<=12591,"Hangul Compatibility Jamo":t=>t>=12592&&t<=12687,Kanbun:t=>t>=12688&&t<=12703,"Bopomofo Extended":t=>t>=12704&&t<=12735,"CJK Strokes":t=>t>=12736&&t<=12783,"Katakana Phonetic Extensions":t=>t>=12784&&t<=12799,"Enclosed CJK Letters and Months":t=>t>=12800&&t<=13055,"CJK Compatibility":t=>t>=13056&&t<=13311,"CJK Unified Ideographs Extension A":t=>t>=13312&&t<=19903,"Yijing Hexagram Symbols":t=>t>=19904&&t<=19967,"CJK Unified Ideographs":t=>t>=19968&&t<=40959,"Yi Syllables":t=>t>=40960&&t<=42127,"Yi Radicals":t=>t>=42128&&t<=42191,"Hangul Jamo Extended-A":t=>t>=43360&&t<=43391,"Hangul Syllables":t=>t>=44032&&t<=55215,"Hangul Jamo Extended-B":t=>t>=55216&&t<=55295,"Private Use Area":t=>t>=57344&&t<=63743,"CJK Compatibility Ideographs":t=>t>=63744&&t<=64255,"Arabic Presentation Forms-A":t=>t>=64336&&t<=65023,"Vertical Forms":t=>t>=65040&&t<=65055,"CJK Compatibility Forms":t=>t>=65072&&t<=65103,"Small Form Variants":t=>t>=65104&&t<=65135,"Arabic Presentation Forms-B":t=>t>=65136&&t<=65279,"Halfwidth and Fullwidth Forms":t=>t>=65280&&t<=65519};function En(t){for(const e of t)if(Ln(e.charCodeAt(0)))return !0;return !1}function Fn(t){for(const e of t)if(!Tn(e.charCodeAt(0)))return !1;return !0}function Tn(t){return !(Vn.Arabic(t)||Vn["Arabic Supplement"](t)||Vn["Arabic Extended-A"](t)||Vn["Arabic Presentation Forms-A"](t)||Vn["Arabic Presentation Forms-B"](t))}function Ln(t){return !(746!==t&&747!==t&&(t<4352||!(Vn["Bopomofo Extended"](t)||Vn.Bopomofo(t)||Vn["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||Vn["CJK Compatibility Ideographs"](t)||Vn["CJK Compatibility"](t)||Vn["CJK Radicals Supplement"](t)||Vn["CJK Strokes"](t)||!(!Vn["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||Vn["CJK Unified Ideographs Extension A"](t)||Vn["CJK Unified Ideographs"](t)||Vn["Enclosed CJK Letters and Months"](t)||Vn["Hangul Compatibility Jamo"](t)||Vn["Hangul Jamo Extended-A"](t)||Vn["Hangul Jamo Extended-B"](t)||Vn["Hangul Jamo"](t)||Vn["Hangul Syllables"](t)||Vn.Hiragana(t)||Vn["Ideographic Description Characters"](t)||Vn.Kanbun(t)||Vn["Kangxi Radicals"](t)||Vn["Katakana Phonetic Extensions"](t)||Vn.Katakana(t)&&12540!==t||!(!Vn["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Vn["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||Vn["Unified Canadian Aboriginal Syllabics"](t)||Vn["Unified Canadian Aboriginal Syllabics Extended"](t)||Vn["Vertical Forms"](t)||Vn["Yijing Hexagram Symbols"](t)||Vn["Yi Syllables"](t)||Vn["Yi Radicals"](t))))}function Dn(t){return !(Ln(t)||function(t){return !!(Vn["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||Vn["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||Vn["Letterlike Symbols"](t)||Vn["Number Forms"](t)||Vn["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||Vn["Control Pictures"](t)&&9251!==t||Vn["Optical Character Recognition"](t)||Vn["Enclosed Alphanumerics"](t)||Vn["Geometric Shapes"](t)||Vn["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||Vn["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||Vn["CJK Symbols and Punctuation"](t)||Vn.Katakana(t)||Vn["Private Use Area"](t)||Vn["CJK Compatibility Forms"](t)||Vn["Small Form Variants"](t)||Vn["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function $n(t){return t>=1424&&t<=2303||Vn["Arabic Presentation Forms-A"](t)||Vn["Arabic Presentation Forms-B"](t)}function Rn(t,e){return !(!e&&$n(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||Vn.Khmer(t))}function On(t){for(const e of t)if($n(e.charCodeAt(0)))return !0;return !1}const Un="deferred",qn="loading",jn="loaded";let Nn=null,Zn="unavailable",Kn=null;const Gn=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&(Zn="error"),Nn&&Nn(t);};function Jn(){Xn.fire(new tt("pluginStateChange",{pluginStatus:Zn,pluginURL:Kn}));}const Xn=new rt,Yn=function(){return Zn},Hn=function(){if(Zn!==Un||!Kn)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified");Zn=qn,Jn(),Kn&&K({url:Kn},(t=>{t?Gn(t):(Zn=jn,Jn());}));},Wn={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:()=>Zn===jn||null!=Wn.applyArabicShaping,isLoading:()=>Zn===qn,setState(t){if(!g())throw new Error("Cannot set the state of the rtl-text-plugin when not in the web-worker context");Zn=t.pluginStatus,Kn=t.pluginURL;},isParsed(){if(!g())throw new Error("rtl-text-plugin is only parsed on the worker-threads");return null!=Wn.applyArabicShaping&&null!=Wn.processBidirectionalText&&null!=Wn.processStyledBidirectionalText},getPluginURL(){if(!g())throw new Error("rtl-text-plugin url can only be queried from the worker threads");return Kn}};class Qn{constructor(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new Pn,this.transition={});}isSupportedScript(t){return function(t,e){for(const r of t)if(!Rn(r.charCodeAt(0),e))return !1;return !0}(t,Wn.isLoaded())}crossFadingFactor(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)}getCrossfadeParameters(){const t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor();return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}}}class ti{constructor(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(kr(t))return new $r(t,e);if(Er(t)){const r=Dr(t,e);if("error"===r.result)throw new Error(r.value.map((t=>`${t.key}: ${t.message}`)).join(", "));return r.value}{let r=t;return "color"===e.type&&"string"==typeof t?r=Ft.parse(t):"padding"!==e.type||"number"!=typeof t&&!Array.isArray(t)||(r=$t.parse(t)),{kind:"constant",evaluate:()=>r}}}(void 0===e?t.specification.default:e,t.specification);}isDataDriven(){return "source"===this.expression.kind||"composite"===this.expression.kind}possiblyEvaluate(t,e,r){return this.property.possiblyEvaluate(this,t,e,r)}}class ei{constructor(t){this.property=t,this.value=new ti(t,void 0);}transitioned(t,e){return new ni(this.property,this.value,e,o({},t.transition,this.transition),t.now)}untransitioned(){return new ni(this.property,this.value,null,{},0)}}class ri{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);}getValue(t){return p(this._values[t].value.value)}setValue(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new ei(this._values[t].property)),this._values[t].value=new ti(this._values[t].property,null===e?void 0:p(e));}getTransition(t){return p(this._values[t].transition)}setTransition(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new ei(this._values[t].property)),this._values[t].transition=p(e)||void 0;}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);const n=this.getTransition(e);void 0!==n&&(t[`${e}-transition`]=n);}return t}transitioned(t,e){const r=new ii(this._properties);for(const n of Object.keys(this._values))r._values[n]=this._values[n].transitioned(t,e._values[n]);return r}untransitioned(){const t=new ii(this._properties);for(const e of Object.keys(this._values))t._values[e]=this._values[e].untransitioned();return t}}class ni{constructor(t,e,r,n,i){this.property=t,this.value=e,this.begin=i+n.delay||0,this.end=this.begin+n.duration||0,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);}possiblyEvaluate(t,e,r){const n=t.now||0,i=this.value.possiblyEvaluate(t,e,r),a=this.prior;if(a){if(n>this.end)return this.prior=null,i;if(this.value.isDataDriven())return this.prior=null,i;if(n<this.begin)return a.possiblyEvaluate(t,e,r);{const s=(n-this.begin)/(this.end-this.begin);return this.property.interpolate(a.possiblyEvaluate(t,e,r),i,function(t){if(t<=0)return 0;if(t>=1)return 1;const e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}(s))}}return i}}class ii{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);}possiblyEvaluate(t,e,r){const n=new oi(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}hasTransition(){for(const t of Object.keys(this._values))if(this._values[t].prior)return !0;return !1}}class ai{constructor(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);}getValue(t){return p(this._values[t].value)}setValue(t,e){this._values[t]=new ti(this._values[t].property,null===e?void 0:p(e));}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);}return t}possiblyEvaluate(t,e,r){const n=new oi(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}}class si{constructor(t,e,r){this.property=t,this.value=e,this.parameters=r;}isConstant(){return "constant"===this.value.kind}constantOr(t){return "constant"===this.value.kind?this.value.value:t}evaluate(t,e,r,n){return this.property.evaluate(this.value,this.parameters,t,e,r,n)}}class oi{constructor(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);}get(t){return this._values[t]}}class li{constructor(t){this.specification=t;}possiblyEvaluate(t,e){if(t.isDataDriven())throw new Error("Value should not be data driven");return t.expression.evaluate(e)}interpolate(t,e,r){const n=Ie[this.specification.type];return n?n(t,e,r):t}}class ui{constructor(t,e){this.specification=t,this.overrides=e;}possiblyEvaluate(t,e,r,n){return new si(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},r,n)}:t.expression,e)}interpolate(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new si(this,{kind:"constant",value:void 0},t.parameters);const n=Ie[this.specification.type];return n?new si(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.parameters):t}evaluate(t,e,r,n,i,a){return "constant"===t.kind?t.value:t.evaluate(e,r,n,i,a)}}class ci extends ui{possiblyEvaluate(t,e,r,n){if(void 0===t.value)return new si(this,{kind:"constant",value:void 0},e);if("constant"===t.expression.kind){const i=t.expression.evaluate(e,null,{},r,n),a="resolvedImage"===t.property.specification.type&&"string"!=typeof i?i.name:i,s=this._calculate(a,a,a,e);return new si(this,{kind:"constant",value:s},e)}if("camera"===t.expression.kind){const r=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e);return new si(this,{kind:"constant",value:r},e)}return new si(this,t.expression,e)}evaluate(t,e,r,n,i,a){if("source"===t.kind){const s=t.evaluate(e,r,n,i,a);return this._calculate(s,s,s,e)}return "composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,n),t.evaluate({zoom:Math.floor(e.zoom)},r,n),t.evaluate({zoom:Math.floor(e.zoom)+1},r,n),e):t.value}_calculate(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}}interpolate(t){return t}}class hi{constructor(t){this.specification=t;}possiblyEvaluate(t,e,r,n){if(void 0!==t.value){if("constant"===t.expression.kind){const i=t.expression.evaluate(e,null,{},r,n);return this._calculate(i,i,i,e)}return this._calculate(t.expression.evaluate(new Qn(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Qn(Math.floor(e.zoom),e)),t.expression.evaluate(new Qn(Math.floor(e.zoom+1),e)),e)}}_calculate(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}}interpolate(t){return t}}class pi{constructor(t){this.specification=t;}possiblyEvaluate(t,e,r,n){return !!t.expression.evaluate(e,null,{},r,n)}interpolate(){return !1}}class fi{constructor(t){this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[];for(const e in t){const r=t[e];r.specification.overridable&&this.overridableProperties.push(e);const n=this.defaultPropertyValues[e]=new ti(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new ei(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}}}Mn("DataDrivenProperty",ui),Mn("DataConstantProperty",li),Mn("CrossFadedDataDrivenProperty",ci),Mn("CrossFadedProperty",hi),Mn("ColorRampProperty",pi);const di="-transition";class yi extends rt{constructor(t,e){if(super(),this.id=t.id,this.type=t.type,this._featureFilter={filter:()=>!0,needGeometry:!1},"custom"!==t.type&&(this.metadata=t.metadata,this.minzoom=t.minzoom,this.maxzoom=t.maxzoom,"background"!==t.type&&(this.source=t.source,this.sourceLayer=t["source-layer"],this.filter=t.filter),e.layout&&(this._unevaluatedLayout=new ai(e.layout)),e.paint)){this._transitionablePaint=new ri(e.paint);for(const e in t.paint)this.setPaintProperty(e,t.paint[e],{validate:!1});for(const e in t.layout)this.setLayoutProperty(e,t.layout[e],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned(),this.paint=new oi(e.paint);}}getCrossfadeParameters(){return this._crossfadeParameters}getLayoutProperty(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)}setLayoutProperty(t,e,r={}){null!=e&&this._validate(An,`layers.${this.id}.layout.${t}`,t,e,r)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e);}getPaintProperty(t){return t.endsWith(di)?this._transitionablePaint.getTransition(t.slice(0,-di.length)):this._transitionablePaint.getValue(t)}setPaintProperty(t,e,r={}){if(null!=e&&this._validate(_n,`layers.${this.id}.paint.${t}`,t,e,r))return !1;if(t.endsWith(di))return this._transitionablePaint.setTransition(t.slice(0,-di.length),e||void 0),!1;{const r=this._transitionablePaint._values[t],n="cross-faded-data-driven"===r.property.specification["property-type"],i=r.value.isDataDriven(),a=r.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);const s=this._transitionablePaint._values[t].value;return s.isDataDriven()||i||n||this._handleOverridablePaintPropertyUpdate(t,a,s)}}_handleSpecialPaintPropertyUpdate(t){}_handleOverridablePaintPropertyUpdate(t,e,r){return !1}isHidden(t){return !!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility}updateTransitions(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);}hasTransition(){return this._transitioningPaint.hasTransition()}recalculate(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,void 0,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,void 0,e);}serialize(){const t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),h(t,((t,e)=>!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)))}_validate(t,e,r,n,i={}){return (!i||!1!==i.validate)&&kn(this,t.call(bn,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:nt,style:{glyphs:!0,sprite:!0}}))}is3D(){return !1}isTileClipped(){return !1}hasOffscreenPass(){return !1}resize(){}isStateDependent(){for(const t in this.paint._values){const e=this.paint.get(t);if(e instanceof si&&br(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return !0}return !1}}const mi={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array};class gi{constructor(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;}}class xi{constructor(){this.isTransferred=!1,this.capacity=-1,this.resize(0);}static serialize(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}}static deserialize(t){const e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e}_trim(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());}clear(){this.length=0;}resize(t){this.reserve(t),this.length=t;}reserve(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);const e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}}_refreshViews(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}}function vi(t,e=1){let r=0,n=0;return {members:t.map((t=>{const i=mi[t.type].BYTES_PER_ELEMENT,a=r=bi(r,Math.max(e,i)),s=t.components||1;return n=Math.max(n,i),r+=i*s,{name:t.name,type:t.type,components:s,offset:a}})),size:bi(r,Math.max(n,e)),alignment:e}}function bi(t,e){return Math.ceil(t/e)*e}class wi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t}}wi.prototype.bytesPerElement=4,Mn("StructArrayLayout2i4",wi);class _i extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const a=4*t;return this.int16[a+0]=e,this.int16[a+1]=r,this.int16[a+2]=n,this.int16[a+3]=i,t}}_i.prototype.bytesPerElement=8,Mn("StructArrayLayout4i8",_i);class Ai extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i,a)}emplace(t,e,r,n,i,a,s){const o=6*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=n,this.int16[o+3]=i,this.int16[o+4]=a,this.int16[o+5]=s,t}}Ai.prototype.bytesPerElement=12,Mn("StructArrayLayout2i4i12",Ai);class ki extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i,a)}emplace(t,e,r,n,i,a,s){const o=4*t,l=8*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.uint8[l+4]=n,this.uint8[l+5]=i,this.uint8[l+6]=a,this.uint8[l+7]=s,t}}ki.prototype.bytesPerElement=8,Mn("StructArrayLayout2i4ub8",ki);class Si extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t}}Si.prototype.bytesPerElement=8,Mn("StructArrayLayout2f8",Si);class Ii extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u){const c=this.length;return this.resize(c+1),this.emplace(c,t,e,r,n,i,a,s,o,l,u)}emplace(t,e,r,n,i,a,s,o,l,u,c){const h=10*t;return this.uint16[h+0]=e,this.uint16[h+1]=r,this.uint16[h+2]=n,this.uint16[h+3]=i,this.uint16[h+4]=a,this.uint16[h+5]=s,this.uint16[h+6]=o,this.uint16[h+7]=l,this.uint16[h+8]=u,this.uint16[h+9]=c,t}}Ii.prototype.bytesPerElement=20,Mn("StructArrayLayout10ui20",Ii);class Mi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u,c,h){const p=this.length;return this.resize(p+1),this.emplace(p,t,e,r,n,i,a,s,o,l,u,c,h)}emplace(t,e,r,n,i,a,s,o,l,u,c,h,p){const f=12*t;return this.int16[f+0]=e,this.int16[f+1]=r,this.int16[f+2]=n,this.int16[f+3]=i,this.uint16[f+4]=a,this.uint16[f+5]=s,this.uint16[f+6]=o,this.uint16[f+7]=l,this.int16[f+8]=u,this.int16[f+9]=c,this.int16[f+10]=h,this.int16[f+11]=p,t}}Mi.prototype.bytesPerElement=24,Mn("StructArrayLayout4i4ui4i24",Mi);class zi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t}}zi.prototype.bytesPerElement=12,Mn("StructArrayLayout3f12",zi);class Bi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint32[1*t+0]=e,t}}Bi.prototype.bytesPerElement=4,Mn("StructArrayLayout1ul4",Bi);class Ci extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l){const u=this.length;return this.resize(u+1),this.emplace(u,t,e,r,n,i,a,s,o,l)}emplace(t,e,r,n,i,a,s,o,l,u){const c=10*t,h=5*t;return this.int16[c+0]=e,this.int16[c+1]=r,this.int16[c+2]=n,this.int16[c+3]=i,this.int16[c+4]=a,this.int16[c+5]=s,this.uint32[h+3]=o,this.uint16[c+8]=l,this.uint16[c+9]=u,t}}Ci.prototype.bytesPerElement=20,Mn("StructArrayLayout6i1ul2ui20",Ci);class Pi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i,a)}emplace(t,e,r,n,i,a,s){const o=6*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=n,this.int16[o+3]=i,this.int16[o+4]=a,this.int16[o+5]=s,t}}Pi.prototype.bytesPerElement=12,Mn("StructArrayLayout2i2i2i12",Pi);class Vi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i){const a=this.length;return this.resize(a+1),this.emplace(a,t,e,r,n,i)}emplace(t,e,r,n,i,a){const s=4*t,o=8*t;return this.float32[s+0]=e,this.float32[s+1]=r,this.float32[s+2]=n,this.int16[o+6]=i,this.int16[o+7]=a,t}}Vi.prototype.bytesPerElement=16,Mn("StructArrayLayout2f1f2i16",Vi);class Ei extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const a=12*t,s=3*t;return this.uint8[a+0]=e,this.uint8[a+1]=r,this.float32[s+1]=n,this.float32[s+2]=i,t}}Ei.prototype.bytesPerElement=12,Mn("StructArrayLayout2ub2f12",Ei);class Fi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t}}Fi.prototype.bytesPerElement=6,Mn("StructArrayLayout3ui6",Fi);class Ti extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m){const g=this.length;return this.resize(g+1),this.emplace(g,t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m)}emplace(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g){const x=24*t,v=12*t,b=48*t;return this.int16[x+0]=e,this.int16[x+1]=r,this.uint16[x+2]=n,this.uint16[x+3]=i,this.uint32[v+2]=a,this.uint32[v+3]=s,this.uint32[v+4]=o,this.uint16[x+10]=l,this.uint16[x+11]=u,this.uint16[x+12]=c,this.float32[v+7]=h,this.float32[v+8]=p,this.uint8[b+36]=f,this.uint8[b+37]=d,this.uint8[b+38]=y,this.uint32[v+10]=m,this.int16[x+22]=g,t}}Ti.prototype.bytesPerElement=48,Mn("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",Ti);class Li extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g,x,v,b,w,_,A,k,S,I,M){const z=this.length;return this.resize(z+1),this.emplace(z,t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g,x,v,b,w,_,A,k,S,I,M)}emplace(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g,x,v,b,w,_,A,k,S,I,M,z){const B=34*t,C=17*t;return this.int16[B+0]=e,this.int16[B+1]=r,this.int16[B+2]=n,this.int16[B+3]=i,this.int16[B+4]=a,this.int16[B+5]=s,this.int16[B+6]=o,this.int16[B+7]=l,this.uint16[B+8]=u,this.uint16[B+9]=c,this.uint16[B+10]=h,this.uint16[B+11]=p,this.uint16[B+12]=f,this.uint16[B+13]=d,this.uint16[B+14]=y,this.uint16[B+15]=m,this.uint16[B+16]=g,this.uint16[B+17]=x,this.uint16[B+18]=v,this.uint16[B+19]=b,this.uint16[B+20]=w,this.uint16[B+21]=_,this.uint16[B+22]=A,this.uint32[C+12]=k,this.float32[C+13]=S,this.float32[C+14]=I,this.float32[C+15]=M,this.float32[C+16]=z,t}}Li.prototype.bytesPerElement=68,Mn("StructArrayLayout8i15ui1ul4f68",Li);class Di extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.float32[1*t+0]=e,t}}Di.prototype.bytesPerElement=4,Mn("StructArrayLayout1f4",Di);class $i extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t}}$i.prototype.bytesPerElement=6,Mn("StructArrayLayout3i6",$i);class Ri extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=4*t;return this.uint32[2*t+0]=e,this.uint16[i+2]=r,this.uint16[i+3]=n,t}}Ri.prototype.bytesPerElement=8,Mn("StructArrayLayout1ul2ui8",Ri);class Oi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t}}Oi.prototype.bytesPerElement=4,Mn("StructArrayLayout2ui4",Oi);class Ui extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint16[1*t+0]=e,t}}Ui.prototype.bytesPerElement=2,Mn("StructArrayLayout1ui2",Ui);class qi extends xi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const a=4*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.float32[a+3]=i,t}}qi.prototype.bytesPerElement=16,Mn("StructArrayLayout4f16",qi);class ji extends gi{get anchorPointX(){return this._structArray.int16[this._pos2+0]}get anchorPointY(){return this._structArray.int16[this._pos2+1]}get x1(){return this._structArray.int16[this._pos2+2]}get y1(){return this._structArray.int16[this._pos2+3]}get x2(){return this._structArray.int16[this._pos2+4]}get y2(){return this._structArray.int16[this._pos2+5]}get featureIndex(){return this._structArray.uint32[this._pos4+3]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+8]}get bucketIndex(){return this._structArray.uint16[this._pos2+9]}get anchorPoint(){return new S(this.anchorPointX,this.anchorPointY)}}ji.prototype.size=20;class Ni extends Ci{get(t){return new ji(this,t)}}Mn("CollisionBoxArray",Ni);class Zi extends gi{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get glyphStartIndex(){return this._structArray.uint16[this._pos2+2]}get numGlyphs(){return this._structArray.uint16[this._pos2+3]}get vertexStartIndex(){return this._structArray.uint32[this._pos4+2]}get lineStartIndex(){return this._structArray.uint32[this._pos4+3]}get lineLength(){return this._structArray.uint32[this._pos4+4]}get segment(){return this._structArray.uint16[this._pos2+10]}get lowerSize(){return this._structArray.uint16[this._pos2+11]}get upperSize(){return this._structArray.uint16[this._pos2+12]}get lineOffsetX(){return this._structArray.float32[this._pos4+7]}get lineOffsetY(){return this._structArray.float32[this._pos4+8]}get writingMode(){return this._structArray.uint8[this._pos1+36]}get placedOrientation(){return this._structArray.uint8[this._pos1+37]}set placedOrientation(t){this._structArray.uint8[this._pos1+37]=t;}get hidden(){return this._structArray.uint8[this._pos1+38]}set hidden(t){this._structArray.uint8[this._pos1+38]=t;}get crossTileID(){return this._structArray.uint32[this._pos4+10]}set crossTileID(t){this._structArray.uint32[this._pos4+10]=t;}get associatedIconIndex(){return this._structArray.int16[this._pos2+22]}}Zi.prototype.size=48;class Ki extends Ti{get(t){return new Zi(this,t)}}Mn("PlacedSymbolArray",Ki);class Gi extends gi{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get rightJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+2]}get centerJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+3]}get leftJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+4]}get verticalPlacedTextSymbolIndex(){return this._structArray.int16[this._pos2+5]}get placedIconSymbolIndex(){return this._structArray.int16[this._pos2+6]}get verticalPlacedIconSymbolIndex(){return this._structArray.int16[this._pos2+7]}get key(){return this._structArray.uint16[this._pos2+8]}get textBoxStartIndex(){return this._structArray.uint16[this._pos2+9]}get textBoxEndIndex(){return this._structArray.uint16[this._pos2+10]}get verticalTextBoxStartIndex(){return this._structArray.uint16[this._pos2+11]}get verticalTextBoxEndIndex(){return this._structArray.uint16[this._pos2+12]}get iconBoxStartIndex(){return this._structArray.uint16[this._pos2+13]}get iconBoxEndIndex(){return this._structArray.uint16[this._pos2+14]}get verticalIconBoxStartIndex(){return this._structArray.uint16[this._pos2+15]}get verticalIconBoxEndIndex(){return this._structArray.uint16[this._pos2+16]}get featureIndex(){return this._structArray.uint16[this._pos2+17]}get numHorizontalGlyphVertices(){return this._structArray.uint16[this._pos2+18]}get numVerticalGlyphVertices(){return this._structArray.uint16[this._pos2+19]}get numIconVertices(){return this._structArray.uint16[this._pos2+20]}get numVerticalIconVertices(){return this._structArray.uint16[this._pos2+21]}get useRuntimeCollisionCircles(){return this._structArray.uint16[this._pos2+22]}get crossTileID(){return this._structArray.uint32[this._pos4+12]}set crossTileID(t){this._structArray.uint32[this._pos4+12]=t;}get textBoxScale(){return this._structArray.float32[this._pos4+13]}get textOffset0(){return this._structArray.float32[this._pos4+14]}get textOffset1(){return this._structArray.float32[this._pos4+15]}get collisionCircleDiameter(){return this._structArray.float32[this._pos4+16]}}Gi.prototype.size=68;class Ji extends Li{get(t){return new Gi(this,t)}}Mn("SymbolInstanceArray",Ji);class Xi extends Di{getoffsetX(t){return this.float32[1*t+0]}}Mn("GlyphOffsetArray",Xi);class Yi extends $i{getx(t){return this.int16[3*t+0]}gety(t){return this.int16[3*t+1]}gettileUnitDistanceFromAnchor(t){return this.int16[3*t+2]}}Mn("SymbolLineVertexArray",Yi);class Hi extends gi{get featureIndex(){return this._structArray.uint32[this._pos4+0]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+2]}get bucketIndex(){return this._structArray.uint16[this._pos2+3]}}Hi.prototype.size=8;class Wi extends Ri{get(t){return new Hi(this,t)}}Mn("FeatureIndexArray",Wi);class Qi extends wi{}class ta extends wi{}class ea extends wi{}class ra extends Ai{}class na extends ki{}class ia extends Si{}class aa extends Ii{}class sa extends Mi{}class oa extends zi{}class la extends Bi{}class ua extends Pi{}class ca extends Ei{}class ha extends Fi{}class pa extends Oi{}const fa=vi([{name:"a_pos",components:2,type:"Int16"}],4),{members:da}=fa;class ya{constructor(t=[]){this.segments=t;}prepareSegment(t,e,r,n){let i=this.segments[this.segments.length-1];return t>ya.MAX_VERTEX_ARRAY_LENGTH&&d(`Max vertices per segment is ${ya.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t}`),(!i||i.vertexLength+t>ya.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i}get(){return this.segments}destroy(){for(const t of this.segments)for(const e in t.vaos)t.vaos[e].destroy();}static simpleSegment(t,e,r,n){return new ya([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])}}function ma(t,e){return 256*(t=a(Math.floor(t),0,255))+a(Math.floor(e),0,255)}ya.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,Mn("SegmentVector",ya);const ga=vi([{name:"a_pattern_from",components:4,type:"Uint16"},{name:"a_pattern_to",components:4,type:"Uint16"},{name:"a_pixel_ratio_from",components:1,type:"Uint16"},{name:"a_pixel_ratio_to",components:1,type:"Uint16"}]);var xa={exports:{}},va={exports:{}};va.exports=function(t,e){var r,n,i,a,s,o,l,u;for(n=t.length-(r=3&t.length),i=e,s=3432918353,o=461845907,u=0;u<n;)l=255&t.charCodeAt(u)|(255&t.charCodeAt(++u))<<8|(255&t.charCodeAt(++u))<<16|(255&t.charCodeAt(++u))<<24,++u,i=27492+(65535&(a=5*(65535&(i=(i^=l=(65535&(l=(l=(65535&l)*s+(((l>>>16)*s&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(a>>>16)&65535)<<16);switch(l=0,r){case 3:l^=(255&t.charCodeAt(u+2))<<16;case 2:l^=(255&t.charCodeAt(u+1))<<8;case 1:i^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(u)))*s+(((l>>>16)*s&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};var ba={exports:{}};ba.exports=function(t,e){for(var r,n=t.length,i=e^n,a=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++a;switch(n){case 3:i^=(255&t.charCodeAt(a+2))<<16;case 2:i^=(255&t.charCodeAt(a+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(a)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};var wa=va.exports,_a=ba.exports;xa.exports=wa,xa.exports.murmur3=wa,xa.exports.murmur2=_a;class Aa{constructor(){this.ids=[],this.positions=[],this.indexed=!1;}add(t,e,r,n){this.ids.push(ka(t)),this.positions.push(e,r,n);}getPositions(t){if(!this.indexed)throw new Error("Trying to get index, but feature positions are not indexed");const e=ka(t);let r=0,n=this.ids.length-1;for(;r<n;){const t=r+n>>1;this.ids[t]>=e?n=t:r=t+1;}const i=[];for(;this.ids[r]===e;)i.push({index:this.positions[3*r],start:this.positions[3*r+1],end:this.positions[3*r+2]}),r++;return i}static serialize(t,e){const r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return Sa(r,n,0,r.length-1),e&&e.push(r.buffer,n.buffer),{ids:r,positions:n}}static deserialize(t){const e=new Aa;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e}}function ka(t){const e=+t;return !isNaN(e)&&e<=Number.MAX_SAFE_INTEGER?e:xa.exports(String(t))}function Sa(t,e,r,n){for(;r<n;){const i=t[r+n>>1];let a=r-1,s=n+1;for(;;){do{a++;}while(t[a]<i);do{s--;}while(t[s]>i);if(a>=s)break;Ia(t,a,s),Ia(e,3*a,3*s),Ia(e,3*a+1,3*s+1),Ia(e,3*a+2,3*s+2);}s-r<n-s?(Sa(t,e,r,s),r=s+1):(Sa(t,e,s+1,n),n=s);}}function Ia(t,e,r){const n=t[e];t[e]=t[r],t[r]=n;}Mn("FeaturePositionMap",Aa);class Ma{constructor(t,e){this.gl=t.gl,this.location=e;}}class za extends Ma{constructor(t,e){super(t,e),this.current=0;}set(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t));}}class Ba extends Ma{constructor(t,e){super(t,e),this.current=[0,0,0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]));}}class Ca extends Ma{constructor(t,e){super(t,e),this.current=Ft.transparent;}set(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a));}}const Pa=new Float32Array(16);function Va(t){return [ma(255*t.r,255*t.g),ma(255*t.b,255*t.a)]}class Ea{constructor(t,e,r){this.value=t,this.uniformNames=e.map((t=>`u_${t}`)),this.type=r;}setUniform(t,e,r){t.set(r.constantOr(this.value));}getBinding(t,e,r){return "color"===this.type?new Ca(t,e):new za(t,e)}}class Fa{constructor(t,e){this.uniformNames=e.map((t=>`u_${t}`)),this.patternFrom=null,this.patternTo=null,this.pixelRatioFrom=1,this.pixelRatioTo=1;}setConstantPatternPositions(t,e){this.pixelRatioFrom=e.pixelRatio,this.pixelRatioTo=t.pixelRatio,this.patternFrom=e.tlbr,this.patternTo=t.tlbr;}setUniform(t,e,r,n){const i="u_pattern_to"===n?this.patternTo:"u_pattern_from"===n?this.patternFrom:"u_pixel_ratio_to"===n?this.pixelRatioTo:"u_pixel_ratio_from"===n?this.pixelRatioFrom:null;i&&t.set(i);}getBinding(t,e,r){return "u_pattern"===r.substr(0,9)?new Ba(t,e):new za(t,e)}}class Ta{constructor(t,e,r,n){this.expression=t,this.type=r,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?2:1,offset:0}))),this.paintVertexArray=new n;}populatePaintArray(t,e,r,n,i){const a=this.paintVertexArray.length,s=this.expression.evaluate(new Qn(0),e,{},n,[],i);this.paintVertexArray.resize(t),this._setPaintValue(a,t,s);}updatePaintArray(t,e,r,n){const i=this.expression.evaluate({zoom:0},r,n);this._setPaintValue(t,e,i);}_setPaintValue(t,e,r){if("color"===this.type){const n=Va(r);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,n[0],n[1]);}else {for(let n=t;n<e;n++)this.paintVertexArray.emplace(n,r);this.maxValue=Math.max(this.maxValue,Math.abs(r));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}}class La{constructor(t,e,r,n,i,a){this.expression=t,this.uniformNames=e.map((t=>`u_${t}_t`)),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?4:2,offset:0}))),this.paintVertexArray=new a;}populatePaintArray(t,e,r,n,i){const a=this.expression.evaluate(new Qn(this.zoom),e,{},n,[],i),s=this.expression.evaluate(new Qn(this.zoom+1),e,{},n,[],i),o=this.paintVertexArray.length;this.paintVertexArray.resize(t),this._setPaintValue(o,t,a,s);}updatePaintArray(t,e,r,n){const i=this.expression.evaluate({zoom:this.zoom},r,n),a=this.expression.evaluate({zoom:this.zoom+1},r,n);this._setPaintValue(t,e,i,a);}_setPaintValue(t,e,r,n){if("color"===this.type){const i=Va(r),a=Va(n);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,i[0],i[1],a[0],a[1]);}else {for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,r,n);this.maxValue=Math.max(this.maxValue,Math.abs(r),Math.abs(n));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}setUniform(t,e){const r=this.useIntegerZoom?Math.floor(e.zoom):e.zoom,n=a(this.expression.interpolationFactor(r,this.zoom,this.zoom+1),0,1);t.set(n);}getBinding(t,e,r){return new za(t,e)}}class Da{constructor(t,e,r,n,i,a){this.expression=t,this.type=e,this.useIntegerZoom=r,this.zoom=n,this.layerId=a,this.zoomInPaintVertexArray=new i,this.zoomOutPaintVertexArray=new i;}populatePaintArray(t,e,r){const n=this.zoomInPaintVertexArray.length;this.zoomInPaintVertexArray.resize(t),this.zoomOutPaintVertexArray.resize(t),this._setPaintValues(n,t,e.patterns&&e.patterns[this.layerId],r);}updatePaintArray(t,e,r,n,i){this._setPaintValues(t,e,r.patterns&&r.patterns[this.layerId],i);}_setPaintValues(t,e,r,n){if(!n||!r)return;const{min:i,mid:a,max:s}=r,o=n[i],l=n[a],u=n[s];if(o&&l&&u)for(let r=t;r<e;r++)this.zoomInPaintVertexArray.emplace(r,l.tl[0],l.tl[1],l.br[0],l.br[1],o.tl[0],o.tl[1],o.br[0],o.br[1],l.pixelRatio,o.pixelRatio),this.zoomOutPaintVertexArray.emplace(r,l.tl[0],l.tl[1],l.br[0],l.br[1],u.tl[0],u.tl[1],u.br[0],u.br[1],l.pixelRatio,u.pixelRatio);}upload(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,ga.members,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,ga.members,this.expression.isStateDependent));}destroy(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy();}}class $a{constructor(t,e,r){this.binders={},this._buffers=[];const n=[];for(const i in t.paint._values){if(!r(i))continue;const a=t.paint.get(i);if(!(a instanceof si&&br(a.property.specification)))continue;const s=Oa(i,t.type),o=a.value,l=a.property.specification.type,u=a.property.useIntegerZoom,c=a.property.specification["property-type"],h="cross-faded"===c||"cross-faded-data-driven"===c;if("constant"===o.kind)this.binders[i]=h?new Fa(o.value,s):new Ea(o.value,s,l),n.push(`/u_${i}`);else if("source"===o.kind||h){const r=Ua(i,l,"source");this.binders[i]=h?new Da(o,l,u,e,r,t.id):new Ta(o,s,l,r),n.push(`/a_${i}`);}else {const t=Ua(i,l,"composite");this.binders[i]=new La(o,s,l,u,e,t),n.push(`/z_${i}`);}}this.cacheKey=n.sort().join("");}getMaxValue(t){const e=this.binders[t];return e instanceof Ta||e instanceof La?e.maxValue:0}populatePaintArrays(t,e,r,n,i){for(const a in this.binders){const s=this.binders[a];(s instanceof Ta||s instanceof La||s instanceof Da)&&s.populatePaintArray(t,e,r,n,i);}}setConstantPatternPositions(t,e){for(const r in this.binders){const n=this.binders[r];n instanceof Fa&&n.setConstantPatternPositions(t,e);}}updatePaintArrays(t,e,r,n,i){let a=!1;for(const s in t){const o=e.getPositions(s);for(const e of o){const o=r.feature(e.index);for(const r in this.binders){const l=this.binders[r];if((l instanceof Ta||l instanceof La||l instanceof Da)&&!0===l.expression.isStateDependent){const u=n.paint.get(r);l.expression=u.value,l.updatePaintArray(e.start,e.end,o,t[s],i),a=!0;}}}}return a}defines(){const t=[];for(const e in this.binders){const r=this.binders[e];(r instanceof Ea||r instanceof Fa)&&t.push(...r.uniformNames.map((t=>`#define HAS_UNIFORM_${t}`)));}return t}getBinderAttributes(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof Ta||r instanceof La)for(let e=0;e<r.paintVertexAttributes.length;e++)t.push(r.paintVertexAttributes[e].name);else if(r instanceof Da)for(let e=0;e<ga.members.length;e++)t.push(ga.members[e].name);}return t}getBinderUniforms(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof Ea||r instanceof Fa||r instanceof La)for(const e of r.uniformNames)t.push(e);}return t}getPaintVertexBuffers(){return this._buffers}getUniforms(t,e){const r=[];for(const n in this.binders){const i=this.binders[n];if(i instanceof Ea||i instanceof Fa||i instanceof La)for(const a of i.uniformNames)if(e[a]){const s=i.getBinding(t,e[a],a);r.push({name:a,property:n,binding:s});}}return r}setUniforms(t,e,r,n){for(const{name:t,property:i,binding:a}of e)this.binders[i].setUniform(a,n,r.get(i),t);}updatePaintBuffers(t){this._buffers=[];for(const e in this.binders){const r=this.binders[e];if(t&&r instanceof Da){const e=2===t.fromScale?r.zoomInPaintVertexBuffer:r.zoomOutPaintVertexBuffer;e&&this._buffers.push(e);}else (r instanceof Ta||r instanceof La)&&r.paintVertexBuffer&&this._buffers.push(r.paintVertexBuffer);}}upload(t){for(const e in this.binders){const r=this.binders[e];(r instanceof Ta||r instanceof La||r instanceof Da)&&r.upload(t);}this.updatePaintBuffers();}destroy(){for(const t in this.binders){const e=this.binders[t];(e instanceof Ta||e instanceof La||e instanceof Da)&&e.destroy();}}}class Ra{constructor(t,e,r=(()=>!0)){this.programConfigurations={};for(const n of t)this.programConfigurations[n.id]=new $a(n,e,r);this.needsUpload=!1,this._featureMap=new Aa,this._bufferOffset=0;}populatePaintArrays(t,e,r,n,i,a){for(const r in this.programConfigurations)this.programConfigurations[r].populatePaintArrays(t,e,n,i,a);void 0!==e.id&&this._featureMap.add(e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0;}updatePaintArrays(t,e,r,n){for(const i of r)this.needsUpload=this.programConfigurations[i.id].updatePaintArrays(t,this._featureMap,e,i,n)||this.needsUpload;}get(t){return this.programConfigurations[t]}upload(t){if(this.needsUpload){for(const e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}}destroy(){for(const t in this.programConfigurations)this.programConfigurations[t].destroy();}}function Oa(t,e){return {"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-extrusion-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"]}[t]||[t.replace(`${e}-`,"").replace(/-/g,"_")]}function Ua(t,e,r){const n={color:{source:Si,composite:qi},number:{source:Di,composite:Si}},i=function(t){return {"line-pattern":{source:aa,composite:aa},"fill-pattern":{source:aa,composite:aa},"fill-extrusion-pattern":{source:aa,composite:aa}}[t]}(t);return i&&i[r]||n[e][r]}Mn("ConstantBinder",Ea),Mn("CrossFadedConstantBinder",Fa),Mn("SourceExpressionBinder",Ta),Mn("CrossFadedCompositeBinder",Da),Mn("CompositeExpressionBinder",La),Mn("ProgramConfiguration",$a,{omit:["_buffers"]}),Mn("ProgramConfigurationSet",Ra);var qa=8192;const ja=Math.pow(2,14)-1,Na=-ja-1;function Za(t){const e=qa/t.extent,r=t.loadGeometry();for(let t=0;t<r.length;t++){const n=r[t];for(let t=0;t<n.length;t++){const r=n[t],i=Math.round(r.x*e),s=Math.round(r.y*e);r.x=a(i,Na,ja),r.y=a(s,Na,ja),(i<r.x||i>r.x+1||s<r.y||s>r.y+1)&&d("Geometry exceeds allowed extent, reduce your vector tile buffer size");}}return r}function Ka(t,e){return {type:t.type,id:t.id,properties:t.properties,geometry:e?Za(t):[]}}function Ga(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}class Ja{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new ta,this.indexArray=new ha,this.segments=new ya,this.programConfigurations=new Ra(t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){const n=this.layers[0],i=[];let a=null,s=!1;"circle"===n.type&&(a=n.layout.get("circle-sort-key"),s=!a.isConstant());for(const{feature:e,id:n,index:o,sourceLayerIndex:l}of t){const t=this.layers[0]._featureFilter.needGeometry,u=Ka(e,t);if(!this.layers[0]._featureFilter.filter(new Qn(this.zoom),u,r))continue;const c=s?a.evaluate(u,{},r):void 0,h={id:n,properties:e.properties,type:e.type,sourceLayerIndex:l,index:o,geometry:t?u.geometry:Za(e),patterns:{},sortKey:c};i.push(h);}s&&i.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of i){const{geometry:i,index:a,sourceLayerIndex:s}=n,o=t[a].feature;this.addFeature(n,i,a,r),e.featureIndex.insert(o,i,a,s,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,da),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}addFeature(t,e,r,n){for(const r of e)for(const e of r){const r=e.x,n=e.y;if(r<0||r>=qa||n<0||n>=qa)continue;const i=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),a=i.vertexLength;Ga(this.layoutVertexArray,r,n,-1,-1),Ga(this.layoutVertexArray,r,n,1,-1),Ga(this.layoutVertexArray,r,n,1,1),Ga(this.layoutVertexArray,r,n,-1,1),this.indexArray.emplaceBack(a,a+1,a+2),this.indexArray.emplaceBack(a,a+3,a+2),i.vertexLength+=4,i.primitiveLength+=2;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{},n);}}function Xa(t,e){for(let r=0;r<t.length;r++)if(is(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(is(t,e[r]))return !0;return !!Qa(t,e)}function Ya(t,e,r){return !!is(t,e)||!!es(e,t,r)}function Ha(t,e){if(1===t.length)return ns(e,t[0]);for(let r=0;r<e.length;r++){const n=e[r];for(let e=0;e<n.length;e++)if(is(t,n[e]))return !0}for(let r=0;r<t.length;r++)if(ns(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(Qa(t,e[r]))return !0;return !1}function Wa(t,e,r){if(t.length>1){if(Qa(t,e))return !0;for(let n=0;n<e.length;n++)if(es(e[n],t,r))return !0}for(let n=0;n<t.length;n++)if(es(t[n],e,r))return !0;return !1}function Qa(t,e){if(0===t.length||0===e.length)return !1;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1];for(let t=0;t<e.length-1;t++)if(ts(n,i,e[t],e[t+1]))return !0}return !1}function ts(t,e,r,n){return y(t,r,n)!==y(e,r,n)&&y(t,e,r)!==y(t,e,n)}function es(t,e,r){const n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(let r=1;r<e.length;r++)if(rs(t,e[r-1],e[r])<n)return !0;return !1}function rs(t,e,r){const n=e.distSqr(r);if(0===n)return t.distSqr(e);const i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return t.distSqr(i<0?e:i>1?r:r.sub(e)._mult(i)._add(e))}function ns(t,e){let r,n,i,a=!1;for(let s=0;s<t.length;s++){r=t[s];for(let t=0,s=r.length-1;t<r.length;s=t++)n=r[t],i=r[s],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(a=!a);}return a}function is(t,e){let r=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){const a=t[n],s=t[i];a.y>e.y!=s.y>e.y&&e.x<(s.x-a.x)*(e.y-a.y)/(s.y-a.y)+a.x&&(r=!r);}return r}function as(t,e,r){const n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;const a=y(t,e,r[0]);return a!==y(t,e,r[1])||a!==y(t,e,r[2])||a!==y(t,e,r[3])}function ss(t,e,r){const n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).getMaxValue(t)}function os(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function ls(t,e,r,n,i){if(!e[0]&&!e[1])return t;const a=S.convert(e)._mult(i);"viewport"===r&&a._rotate(-n);const s=[];for(let e=0;e<t.length;e++)s.push(t[e].sub(a));return s}Mn("CircleBucket",Ja,{omit:["layers"]});const us=new fi({"circle-sort-key":new ui(nt.layout_circle["circle-sort-key"])});var cs={paint:new fi({"circle-radius":new ui(nt.paint_circle["circle-radius"]),"circle-color":new ui(nt.paint_circle["circle-color"]),"circle-blur":new ui(nt.paint_circle["circle-blur"]),"circle-opacity":new ui(nt.paint_circle["circle-opacity"]),"circle-translate":new li(nt.paint_circle["circle-translate"]),"circle-translate-anchor":new li(nt.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new li(nt.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new li(nt.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new ui(nt.paint_circle["circle-stroke-width"]),"circle-stroke-color":new ui(nt.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new ui(nt.paint_circle["circle-stroke-opacity"])}),layout:us},hs=1e-6,ps="undefined"!=typeof Float32Array?Float32Array:Array;function fs(){var t=new ps(9);return ps!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function ds(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ys(t,e,r){var n=e[0],i=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],f=e[10],d=e[11],y=e[12],m=e[13],g=e[14],x=e[15],v=r[0],b=r[1],w=r[2],_=r[3];return t[0]=v*n+b*o+w*h+_*y,t[1]=v*i+b*l+w*p+_*m,t[2]=v*a+b*u+w*f+_*g,t[3]=v*s+b*c+w*d+_*x,t[4]=(v=r[4])*n+(b=r[5])*o+(w=r[6])*h+(_=r[7])*y,t[5]=v*i+b*l+w*p+_*m,t[6]=v*a+b*u+w*f+_*g,t[7]=v*s+b*c+w*d+_*x,t[8]=(v=r[8])*n+(b=r[9])*o+(w=r[10])*h+(_=r[11])*y,t[9]=v*i+b*l+w*p+_*m,t[10]=v*a+b*u+w*f+_*g,t[11]=v*s+b*c+w*d+_*x,t[12]=(v=r[12])*n+(b=r[13])*o+(w=r[14])*h+(_=r[15])*y,t[13]=v*i+b*l+w*p+_*m,t[14]=v*a+b*u+w*f+_*g,t[15]=v*s+b*c+w*d+_*x,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var ms,gs=ys;function xs(){var t=new ps(3);return ps!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function vs(t,e,r){var n=new ps(3);return n[0]=t,n[1]=e,n[2]=r,n}function bs(t,e,r){var n=e[0],i=e[1],a=e[2],s=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*s,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*s,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*s,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*s,t}function ws(){var t=new ps(4);return ps!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function _s(t,e){const r=bs([],[t.x,t.y,0,1],e);return new S(r[0]/r[3],r[1]/r[3])}xs(),ms=new ps(4),ps!=Float32Array&&(ms[0]=0,ms[1]=0,ms[2]=0,ms[3]=0),xs(),vs(1,0,0),vs(0,1,0),ws(),ws(),fs(),function(){var t;t=new ps(2),ps!=Float32Array&&(t[0]=0,t[1]=0);}();class As extends Ja{}Mn("HeatmapBucket",As,{omit:["layers"]});var ks={paint:new fi({"heatmap-radius":new ui(nt.paint_heatmap["heatmap-radius"]),"heatmap-weight":new ui(nt.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new li(nt.paint_heatmap["heatmap-intensity"]),"heatmap-color":new pi(nt.paint_heatmap["heatmap-color"]),"heatmap-opacity":new li(nt.paint_heatmap["heatmap-opacity"])})};function Ss(t,{width:e,height:r},n,i){if(i){if(i instanceof Uint8ClampedArray)i=new Uint8Array(i.buffer);else if(i.length!==e*r*n)throw new RangeError(`mismatched image size. expected: ${i.length} but got: ${e*r*n}`)}else i=new Uint8Array(e*r*n);return t.width=e,t.height=r,t.data=i,t}function Is(t,{width:e,height:r},n){if(e===t.width&&r===t.height)return;const i=Ss({},{width:e,height:r},n);Ms(t,i,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,e),height:Math.min(t.height,r)},n),t.width=e,t.height=r,t.data=i.data;}function Ms(t,e,r,n,i,a){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");const s=t.data,o=e.data;if(s===o)throw new Error("srcData equals dstData, so image is already copied");for(let l=0;l<i.height;l++){const u=((r.y+l)*t.width+r.x)*a,c=((n.y+l)*e.width+n.x)*a;for(let t=0;t<i.width*a;t++)o[c+t]=s[u+t];}return e}class zs{constructor(t,e){Ss(this,t,1,e);}resize(t){Is(this,t,1);}clone(){return new zs({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Ms(t,e,r,n,i,1);}}class Bs{constructor(t,e){Ss(this,t,4,e);}resize(t){Is(this,t,4);}replace(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t;}clone(){return new Bs({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Ms(t,e,r,n,i,4);}}function Cs(t){const e={},r=t.resolution||256,n=t.clips?t.clips.length:1,i=t.image||new Bs({width:r,height:n});if(Math.log(r)/Math.LN2%1!=0)throw new Error(`width is not a power of 2 - ${r}`);const a=(r,n,a)=>{e[t.evaluationKey]=a;const s=t.expression.evaluate(e);i.data[r+n+0]=Math.floor(255*s.r/s.a),i.data[r+n+1]=Math.floor(255*s.g/s.a),i.data[r+n+2]=Math.floor(255*s.b/s.a),i.data[r+n+3]=Math.floor(255*s.a);};if(t.clips)for(let e=0,i=0;e<n;++e,i+=4*r)for(let n=0,s=0;n<r;n++,s+=4){const o=n/(r-1),{start:l,end:u}=t.clips[e];a(i,s,l*(1-o)+u*o);}else for(let t=0,e=0;t<r;t++,e+=4)a(0,e,t/(r-1));return i}Mn("AlphaImage",zs),Mn("RGBAImage",Bs);var Ps={paint:new fi({"hillshade-illumination-direction":new li(nt.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new li(nt.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new li(nt.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new li(nt.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new li(nt.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new li(nt.paint_hillshade["hillshade-accent-color"])})};const Vs=vi([{name:"a_pos",components:2,type:"Int16"}],4),{members:Es}=Vs;var Fs={exports:{}};function Ts(t,e,r){r=r||2;var n,i,a,s,o,l,u,c=e&&e.length,h=c?e[0]*r:t.length,p=Ls(t,0,h,r,!0),f=[];if(!p||p.next===p.prev)return f;if(c&&(p=function(t,e,r,n){var i,a,s,o=[];for(i=0,a=e.length;i<a;i++)(s=Ls(t,e[i]*n,i<a-1?e[i+1]*n:t.length,n,!1))===s.next&&(s.steiner=!0),o.push(Gs(s));for(o.sort(js),i=0;i<o.length;i++)r=Ns(o[i],r);return r}(t,e,p,r)),t.length>80*r){n=a=t[0],i=s=t[1];for(var d=r;d<h;d+=r)(o=t[d])<n&&(n=o),(l=t[d+1])<i&&(i=l),o>a&&(a=o),l>s&&(s=l);u=0!==(u=Math.max(a-n,s-i))?32767/u:0;}return $s(p,f,r,n,i,u,0),f}function Ls(t,e,r,n,i){var a,s;if(i===so(t,e,r,n)>0)for(a=e;a<r;a+=n)s=no(a,t[a],t[a+1],s);else for(a=r-n;a>=e;a-=n)s=no(a,t[a],t[a+1],s);return s&&Hs(s,s.next)&&(io(s),s=s.next),s}function Ds(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!Hs(n,n.next)&&0!==Ys(n.prev,n,n.next))n=n.next;else {if(io(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function $s(t,e,r,n,i,a,s){if(t){!s&&a&&function(t,e,r,n){var i=t;do{0===i.z&&(i.z=Ks(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,a,s,o,l,u=1;do{for(r=t,t=null,a=null,s=0;r;){for(s++,n=r,o=0,e=0;e<u&&(o++,n=n.nextZ);e++);for(l=u;o>0||l>0&&n;)0!==o&&(0===l||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=n;}a.nextZ=null,u*=2;}while(s>1)}(i);}(t,n,i,a);for(var o,l,u=t;t.prev!==t.next;)if(o=t.prev,l=t.next,a?Os(t,n,i,a):Rs(t))e.push(o.i/r|0),e.push(t.i/r|0),e.push(l.i/r|0),io(t),t=l.next,u=l.next;else if((t=l)===u){s?1===s?$s(t=Us(Ds(t),e,r),e,r,n,i,a,2):2===s&&qs(t,e,r,n,i,a):$s(Ds(t),e,r,n,i,a,1);break}}}function Rs(t){var e=t.prev,r=t,n=t.next;if(Ys(e,r,n)>=0)return !1;for(var i=e.x,a=r.x,s=n.x,o=e.y,l=r.y,u=n.y,c=i<a?i<s?i:s:a<s?a:s,h=o<l?o<u?o:u:l<u?l:u,p=i>a?i>s?i:s:a>s?a:s,f=o>l?o>u?o:u:l>u?l:u,d=n.next;d!==e;){if(d.x>=c&&d.x<=p&&d.y>=h&&d.y<=f&&Js(i,o,a,l,s,u,d.x,d.y)&&Ys(d.prev,d,d.next)>=0)return !1;d=d.next;}return !0}function Os(t,e,r,n){var i=t.prev,a=t,s=t.next;if(Ys(i,a,s)>=0)return !1;for(var o=i.x,l=a.x,u=s.x,c=i.y,h=a.y,p=s.y,f=o<l?o<u?o:u:l<u?l:u,d=c<h?c<p?c:p:h<p?h:p,y=o>l?o>u?o:u:l>u?l:u,m=c>h?c>p?c:p:h>p?h:p,g=Ks(f,d,e,r,n),x=Ks(y,m,e,r,n),v=t.prevZ,b=t.nextZ;v&&v.z>=g&&b&&b.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=d&&v.y<=m&&v!==i&&v!==s&&Js(o,c,l,h,u,p,v.x,v.y)&&Ys(v.prev,v,v.next)>=0)return !1;if(v=v.prevZ,b.x>=f&&b.x<=y&&b.y>=d&&b.y<=m&&b!==i&&b!==s&&Js(o,c,l,h,u,p,b.x,b.y)&&Ys(b.prev,b,b.next)>=0)return !1;b=b.nextZ;}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=y&&v.y>=d&&v.y<=m&&v!==i&&v!==s&&Js(o,c,l,h,u,p,v.x,v.y)&&Ys(v.prev,v,v.next)>=0)return !1;v=v.prevZ;}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=y&&b.y>=d&&b.y<=m&&b!==i&&b!==s&&Js(o,c,l,h,u,p,b.x,b.y)&&Ys(b.prev,b,b.next)>=0)return !1;b=b.nextZ;}return !0}function Us(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!Hs(i,a)&&Ws(i,n,n.next,a)&&eo(i,a)&&eo(a,i)&&(e.push(i.i/r|0),e.push(n.i/r|0),e.push(a.i/r|0),io(n),io(n.next),n=t=a),n=n.next;}while(n!==t);return Ds(n)}function qs(t,e,r,n,i,a){var s=t;do{for(var o=s.next.next;o!==s.prev;){if(s.i!==o.i&&Xs(s,o)){var l=ro(s,o);return s=Ds(s,s.next),l=Ds(l,l.next),$s(s,e,r,n,i,a,0),void $s(l,e,r,n,i,a,0)}o=o.next;}s=s.next;}while(s!==t)}function js(t,e){return t.x-e.x}function Ns(t,e){var r=function(t,e){var r,n=e,i=t.x,a=t.y,s=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var o=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>s&&(s=o,r=n.x<n.next.x?n:n.next,o===i))return r}n=n.next;}while(n!==e);if(!r)return null;var l,u=r,c=r.x,h=r.y,p=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&Js(a<h?i:s,a,c,h,a<h?s:i,a,n.x,n.y)&&(l=Math.abs(a-n.y)/(i-n.x),eo(n,t)&&(l<p||l===p&&(n.x>r.x||n.x===r.x&&Zs(r,n)))&&(r=n,p=l)),n=n.next;}while(n!==u);return r}(t,e);if(!r)return e;var n=ro(r,t);return Ds(n,n.next),Ds(r,r.next)}function Zs(t,e){return Ys(t.prev,t,e.prev)<0&&Ys(e.next,t,t.next)<0}function Ks(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*i|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Gs(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function Js(t,e,r,n,i,a,s,o){return (i-s)*(e-o)>=(t-s)*(a-o)&&(t-s)*(n-o)>=(r-s)*(e-o)&&(r-s)*(a-o)>=(i-s)*(n-o)}function Xs(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&Ws(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&(eo(t,e)&&eo(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)&&(Ys(t.prev,t,e.prev)||Ys(t,e.prev,e))||Hs(t,e)&&Ys(t.prev,t,t.next)>0&&Ys(e.prev,e,e.next)>0)}function Ys(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Hs(t,e){return t.x===e.x&&t.y===e.y}function Ws(t,e,r,n){var i=to(Ys(t,e,r)),a=to(Ys(t,e,n)),s=to(Ys(r,n,t)),o=to(Ys(r,n,e));return i!==a&&s!==o||!(0!==i||!Qs(t,r,e))||!(0!==a||!Qs(t,n,e))||!(0!==s||!Qs(r,t,n))||!(0!==o||!Qs(r,e,n))}function Qs(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function to(t){return t>0?1:t<0?-1:0}function eo(t,e){return Ys(t.prev,t,t.next)<0?Ys(t,e,t.next)>=0&&Ys(t,t.prev,e)>=0:Ys(t,e,t.prev)<0||Ys(t,t.next,e)<0}function ro(t,e){var r=new ao(t.i,t.x,t.y),n=new ao(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function no(t,e,r,n){var i=new ao(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function io(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function ao(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function so(t,e,r,n){for(var i=0,a=e,s=r-n;a<r;a+=n)i+=(t[s]-t[a])*(t[a+1]+t[s+1]),s=a;return i}function oo(t,e,r,n,i){lo(t,e,r||0,n||t.length-1,i||co);}function lo(t,e,r,n,i){for(;n>r;){if(n-r>600){var a=n-r+1,s=e-r+1,o=Math.log(a),l=.5*Math.exp(2*o/3),u=.5*Math.sqrt(o*l*(a-l)/a)*(s-a/2<0?-1:1);lo(t,e,Math.max(r,Math.floor(e-s*l/a+u)),Math.min(n,Math.floor(e+(a-s)*l/a+u)),i);}var c=t[e],h=r,p=n;for(uo(t,r,e),i(t[n],c)>0&&uo(t,r,n);h<p;){for(uo(t,h,p),h++,p--;i(t[h],c)<0;)h++;for(;i(t[p],c)>0;)p--;}0===i(t[r],c)?uo(t,r,p):uo(t,++p,n),p<=e&&(r=p+1),e<=p&&(n=p-1);}}function uo(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function co(t,e){return t<e?-1:t>e?1:0}function ho(t,e){const r=t.length;if(r<=1)return [t];const n=[];let i,a;for(let e=0;e<r;e++){const r=m(t[e]);0!==r&&(t[e].area=Math.abs(r),void 0===a&&(a=r<0),a===r<0?(i&&n.push(i),i=[t[e]]):i.push(t[e]));}if(i&&n.push(i),e>1)for(let t=0;t<n.length;t++)n[t].length<=e||(oo(n[t],e,1,n[t].length-1,po),n[t]=n[t].slice(0,e));return n}function po(t,e){return e.area-t.area}function fo(t,e,r){const n=r.patternDependencies;let i=!1;for(const r of e){const e=r.paint.get(`${t}-pattern`);e.isConstant()||(i=!0);const a=e.constantOr(null);a&&(i=!0,n[a.to]=!0,n[a.from]=!0);}return i}function yo(t,e,r,n,i){const a=i.patternDependencies;for(const s of e){const e=s.paint.get(`${t}-pattern`).value;if("constant"!==e.kind){let t=e.evaluate({zoom:n-1},r,{},i.availableImages),o=e.evaluate({zoom:n},r,{},i.availableImages),l=e.evaluate({zoom:n+1},r,{},i.availableImages);t=t&&t.name?t.name:t,o=o&&o.name?o.name:o,l=l&&l.name?l.name:l,a[t]=!0,a[o]=!0,a[l]=!0,r.patterns[s.id]={min:t,mid:o,max:l};}}return r}Fs.exports=Ts,Fs.exports.default=Ts,Ts.deviation=function(t,e,r,n){var i=e&&e.length,a=Math.abs(so(t,0,i?e[0]*r:t.length,r));if(i)for(var s=0,o=e.length;s<o;s++)a-=Math.abs(so(t,e[s]*r,s<o-1?e[s+1]*r:t.length,r));var l=0;for(s=0;s<n.length;s+=3){var u=n[s]*r,c=n[s+1]*r,h=n[s+2]*r;l+=Math.abs((t[u]-t[h])*(t[c+1]-t[u+1])-(t[u]-t[c])*(t[h+1]-t[u+1]));}return 0===a&&0===l?0:Math.abs((l-a)/a)},Ts.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var s=0;s<e;s++)r.vertices.push(t[i][a][s]);i>0&&r.holes.push(n+=t[i-1].length);}return r};class mo{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new ea,this.indexArray=new ha,this.indexArray2=new pa,this.programConfigurations=new Ra(t.layers,t.zoom),this.segments=new ya,this.segments2=new ya,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.hasPattern=fo("fill",this.layers,e);const n=this.layers[0].layout.get("fill-sort-key"),i=!n.isConstant(),a=[];for(const{feature:s,id:o,index:l,sourceLayerIndex:u}of t){const t=this.layers[0]._featureFilter.needGeometry,c=Ka(s,t);if(!this.layers[0]._featureFilter.filter(new Qn(this.zoom),c,r))continue;const h=i?n.evaluate(c,{},r,e.availableImages):void 0,p={id:o,properties:s.properties,type:s.type,sourceLayerIndex:u,index:l,geometry:t?c.geometry:Za(s),patterns:{},sortKey:h};a.push(p);}i&&a.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of a){const{geometry:i,index:a,sourceLayerIndex:s}=n;if(this.hasPattern){const t=yo("fill",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,a,r,{});e.featureIndex.insert(t[a].feature,i,a,s,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}addFeatures(t,e,r){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Es),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());}addFeature(t,e,r,n,i){for(const t of ho(e,500)){let e=0;for(const r of t)e+=r.length;const r=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray),n=r.vertexLength,i=[],a=[];for(const e of t){if(0===e.length)continue;e!==t[0]&&a.push(i.length/2);const r=this.segments2.prepareSegment(e.length,this.layoutVertexArray,this.indexArray2),n=r.vertexLength;this.layoutVertexArray.emplaceBack(e[0].x,e[0].y),this.indexArray2.emplaceBack(n+e.length-1,n),i.push(e[0].x),i.push(e[0].y);for(let t=1;t<e.length;t++)this.layoutVertexArray.emplaceBack(e[t].x,e[t].y),this.indexArray2.emplaceBack(n+t-1,n+t),i.push(e[t].x),i.push(e[t].y);r.vertexLength+=e.length,r.primitiveLength+=e.length;}const s=Fs.exports(i,a);for(let t=0;t<s.length;t+=3)this.indexArray.emplaceBack(n+s[t],n+s[t+1],n+s[t+2]);r.vertexLength+=e,r.primitiveLength+=s.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}}Mn("FillBucket",mo,{omit:["layers","patternFeatures"]});const go=new fi({"fill-sort-key":new ui(nt.layout_fill["fill-sort-key"])});var xo={paint:new fi({"fill-antialias":new li(nt.paint_fill["fill-antialias"]),"fill-opacity":new ui(nt.paint_fill["fill-opacity"]),"fill-color":new ui(nt.paint_fill["fill-color"]),"fill-outline-color":new ui(nt.paint_fill["fill-outline-color"]),"fill-translate":new li(nt.paint_fill["fill-translate"]),"fill-translate-anchor":new li(nt.paint_fill["fill-translate-anchor"]),"fill-pattern":new ci(nt.paint_fill["fill-pattern"])}),layout:go};const vo=vi([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4),bo=vi([{name:"a_centroid",components:2,type:"Int16"}],4),{members:wo}=vo;var _o={},Ao=S,ko=So;function So(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(Io,this,e);}function Io(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function Mo(t){for(var e,r,n=0,i=0,a=t.length,s=a-1;i<a;s=i++)n+=((r=t[s]).x-(e=t[i]).x)*(e.y+r.y);return n}So.types=["Unknown","Point","LineString","Polygon"],So.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,i=0,a=0,s=0,o=[];t.pos<r;){if(i<=0){var l=t.readVarint();n=7&l,i=l>>3;}if(i--,1===n||2===n)a+=t.readSVarint(),s+=t.readSVarint(),1===n&&(e&&o.push(e),e=[]),e.push(new Ao(a,s));else {if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&o.push(e),o},So.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,a=0,s=1/0,o=-1/0,l=1/0,u=-1/0;t.pos<e;){if(n<=0){var c=t.readVarint();r=7&c,n=c>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<s&&(s=i),i>o&&(o=i),(a+=t.readSVarint())<l&&(l=a),a>u&&(u=a);else if(7!==r)throw new Error("unknown command "+r)}return [s,l,o,u]},So.prototype.toGeoJSON=function(t,e,r){var n,i,a=this.extent*Math.pow(2,r),s=this.extent*t,o=this.extent*e,l=this.loadGeometry(),u=So.types[this.type];function c(t){for(var e=0;e<t.length;e++){var r=t[e];t[e]=[360*(r.x+s)/a-180,360/Math.PI*Math.atan(Math.exp((180-360*(r.y+o)/a)*Math.PI/180))-90];}}switch(this.type){case 1:var h=[];for(n=0;n<l.length;n++)h[n]=l[n][0];c(l=h);break;case 2:for(n=0;n<l.length;n++)c(l[n]);break;case 3:for(l=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],a=0;a<e;a++){var s=Mo(t[a]);0!==s&&(void 0===n&&(n=s<0),n===s<0?(r&&i.push(r),r=[t[a]]):r.push(t[a]));}return r&&i.push(r),i}(l),n=0;n<l.length;n++)for(i=0;i<l[n].length;i++)c(l[n][i]);}1===l.length?l=l[0]:u="Multi"+u;var p={type:"Feature",geometry:{type:u,coordinates:l},properties:this.properties};return "id"in this&&(p.id=this.id),p};var zo=ko,Bo=Co;function Co(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Po,this,e),this.length=this._features.length;}function Po(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}Co.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new zo(this._pbf,e,this.extent,this._keys,this._values)};var Vo=Bo;function Eo(t,e,r){if(3===t){var n=new Vo(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}_o.VectorTile=function(t,e){this.layers=t.readFields(Eo,{},e);},_o.VectorTileFeature=ko,_o.VectorTileLayer=Bo;const Fo=_o.VectorTileFeature.types,To=Math.pow(2,13);function Lo(t,e,r,n,i,a,s,o){t.emplaceBack(e,r,2*Math.floor(n*To)+s,i*To*2,a*To*2,Math.round(o));}class Do{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new ra,this.centroidVertexArray=new Qi,this.indexArray=new ha,this.programConfigurations=new Ra(t.layers,t.zoom),this.segments=new ya,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.features=[],this.hasPattern=fo("fill-extrusion",this.layers,e);for(const{feature:n,id:i,index:a,sourceLayerIndex:s}of t){const t=this.layers[0]._featureFilter.needGeometry,o=Ka(n,t);if(!this.layers[0]._featureFilter.filter(new Qn(this.zoom),o,r))continue;const l={id:i,sourceLayerIndex:s,index:a,geometry:t?o.geometry:Za(n),properties:n.properties,type:n.type,patterns:{}};this.hasPattern?this.features.push(yo("fill-extrusion",this.layers,l,this.zoom,e)):this.addFeature(l,l.geometry,a,r,{}),e.featureIndex.insert(n,l.geometry,a,s,this.index,!0);}}addFeatures(t,e,r){for(const t of this.features){const{geometry:n}=t;this.addFeature(t,n,t.index,e,r);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.centroidVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,wo),this.centroidVertexBuffer=t.createVertexBuffer(this.centroidVertexArray,bo.members,!0),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.centroidVertexBuffer.destroy());}addFeature(t,e,r,n,i){const a={x:0,y:0,vertexCount:0};for(const r of ho(e,500)){let e=0;for(const t of r)e+=t.length;let n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray);for(const t of r){if(0===t.length)continue;if(Ro(t))continue;let e=0;for(let r=0;r<t.length;r++){const i=t[r];if(r>=1){const s=t[r-1];if(!$o(i,s)){n.vertexLength+4>ya.MAX_VERTEX_ARRAY_LENGTH&&(n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));const t=i.sub(s)._perp()._unit(),r=s.dist(i);e+r>32768&&(e=0),Lo(this.layoutVertexArray,i.x,i.y,t.x,t.y,0,0,e),Lo(this.layoutVertexArray,i.x,i.y,t.x,t.y,0,1,e),a.x+=2*i.x,a.y+=2*i.y,a.vertexCount+=2,e+=r,Lo(this.layoutVertexArray,s.x,s.y,t.x,t.y,0,0,e),Lo(this.layoutVertexArray,s.x,s.y,t.x,t.y,0,1,e),a.x+=2*s.x,a.y+=2*s.y,a.vertexCount+=2;const o=n.vertexLength;this.indexArray.emplaceBack(o,o+2,o+1),this.indexArray.emplaceBack(o+1,o+2,o+3),n.vertexLength+=4,n.primitiveLength+=2;}}}}if(n.vertexLength+e>ya.MAX_VERTEX_ARRAY_LENGTH&&(n=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray)),"Polygon"!==Fo[t.type])continue;const i=[],s=[],o=n.vertexLength;for(const t of r)if(0!==t.length){t!==r[0]&&s.push(i.length/2);for(let e=0;e<t.length;e++){const r=t[e];Lo(this.layoutVertexArray,r.x,r.y,0,0,1,1,0),a.x+=r.x,a.y+=r.y,a.vertexCount+=1,i.push(r.x),i.push(r.y);}}const l=Fs.exports(i,s);for(let t=0;t<l.length;t+=3)this.indexArray.emplaceBack(o+l[t],o+l[t+2],o+l[t+1]);n.primitiveLength+=l.length/3,n.vertexLength+=e;}for(let t=0;t<a.vertexCount;t++)this.centroidVertexArray.emplaceBack(Math.floor(a.x/a.vertexCount),Math.floor(a.y/a.vertexCount));this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}}function $o(t,e){return t.x===e.x&&(t.x<0||t.x>qa)||t.y===e.y&&(t.y<0||t.y>qa)}function Ro(t){return t.every((t=>t.x<0))||t.every((t=>t.x>qa))||t.every((t=>t.y<0))||t.every((t=>t.y>qa))}Mn("FillExtrusionBucket",Do,{omit:["layers","features"]});var Oo={paint:new fi({"fill-extrusion-opacity":new li(nt["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new ui(nt["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new li(nt["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new li(nt["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new ci(nt["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new ui(nt["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new ui(nt["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new li(nt["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})};function Uo(t,e){return t.x*e.x+t.y*e.y}function qo(t,e){if(1===t.length){let r=0;const n=e[r++];let i;for(;!i||n.equals(i);)if(i=e[r++],!i)return 1/0;for(;r<e.length;r++){const a=e[r],s=t[0],o=i.sub(n),l=a.sub(n),u=s.sub(n),c=Uo(o,o),h=Uo(o,l),p=Uo(l,l),f=Uo(u,o),d=Uo(u,l),y=c*p-h*h,m=(p*f-h*d)/y,g=(c*d-h*f)/y,x=n.z*(1-m-g)+i.z*m+a.z*g;if(isFinite(x))return x}return 1/0}{let t=1/0;for(const r of e)t=Math.min(t,r.z);return t}}const jo=vi([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4),{members:No}=jo,Zo=vi([{name:"a_uv_x",components:1,type:"Float32"},{name:"a_split_index",components:1,type:"Float32"}]),{members:Ko}=Zo,Go=_o.VectorTileFeature.types,Jo=Math.cos(Math.PI/180*37.5),Xo=Math.pow(2,14)/.5;class Yo{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.lineClipsArray=[],this.gradients={},this.layers.forEach((t=>{this.gradients[t.id]={};})),this.layoutVertexArray=new na,this.layoutVertexArray2=new ia,this.indexArray=new ha,this.programConfigurations=new Ra(t.layers,t.zoom),this.segments=new ya,this.maxLineLength=0,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.hasPattern=fo("line",this.layers,e);const n=this.layers[0].layout.get("line-sort-key"),i=!n.isConstant(),a=[];for(const{feature:e,id:s,index:o,sourceLayerIndex:l}of t){const t=this.layers[0]._featureFilter.needGeometry,u=Ka(e,t);if(!this.layers[0]._featureFilter.filter(new Qn(this.zoom),u,r))continue;const c=i?n.evaluate(u,{},r):void 0,h={id:s,properties:e.properties,type:e.type,sourceLayerIndex:l,index:o,geometry:t?u.geometry:Za(e),patterns:{},sortKey:c};a.push(h);}i&&a.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of a){const{geometry:i,index:a,sourceLayerIndex:s}=n;if(this.hasPattern){const t=yo("line",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,a,r,{});e.featureIndex.insert(t[a].feature,i,a,s,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}addFeatures(t,e,r){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(0!==this.layoutVertexArray2.length&&(this.layoutVertexBuffer2=t.createVertexBuffer(this.layoutVertexArray2,Ko)),this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,No),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}lineFeatureClips(t){if(t.properties&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_start")&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_end"))return {start:+t.properties.mapbox_clip_start,end:+t.properties.mapbox_clip_end}}addFeature(t,e,r,n,i){const a=this.layers[0].layout,s=a.get("line-join").evaluate(t,{}),o=a.get("line-cap"),l=a.get("line-miter-limit"),u=a.get("line-round-limit");this.lineClips=this.lineFeatureClips(t);for(const r of e)this.addLine(r,t,s,o,l,u);this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}addLine(t,e,r,n,i,a){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,this.lineClips){this.lineClipsArray.push(this.lineClips);for(let e=0;e<t.length-1;e++)this.totalDistance+=t[e].dist(t[e+1]);this.updateScaledDistance(),this.maxLineLength=Math.max(this.maxLineLength,this.totalDistance);}const s="Polygon"===Go[e.type];let o=t.length;for(;o>=2&&t[o-1].equals(t[o-2]);)o--;let l=0;for(;l<o-1&&t[l].equals(t[l+1]);)l++;if(o<(s?3:2))return;"bevel"===r&&(i=1.05);const u=this.overscaling<=16?122880/(512*this.overscaling):0,c=this.segments.prepareSegment(10*o,this.layoutVertexArray,this.indexArray);let h,p,f,d,y;this.e1=this.e2=-1,s&&(h=t[o-2],y=t[l].sub(h)._unit()._perp());for(let e=l;e<o;e++){if(f=e===o-1?s?t[l+1]:void 0:t[e+1],f&&t[e].equals(f))continue;y&&(d=y),h&&(p=h),h=t[e],y=f?f.sub(h)._unit()._perp():d,d=d||y;let m=d.add(y);0===m.x&&0===m.y||m._unit();const g=d.x*y.x+d.y*y.y,x=m.x*y.x+m.y*y.y,v=0!==x?1/x:1/0,b=2*Math.sqrt(2-2*x),w=x<Jo&&p&&f,_=d.x*y.y-d.y*y.x>0;if(w&&e>l){const t=h.dist(p);if(t>2*u){const e=h.sub(h.sub(p)._mult(u/t)._round());this.updateDistance(p,e),this.addCurrentVertex(e,d,0,0,c),p=e;}}const A=p&&f;let k=A?r:s?"butt":n;if(A&&"round"===k&&(v<a?k="miter":v<=2&&(k="fakeround")),"miter"===k&&v>i&&(k="bevel"),"bevel"===k&&(v>2&&(k="flipbevel"),v<i&&(k="miter")),p&&this.updateDistance(p,h),"miter"===k)m._mult(v),this.addCurrentVertex(h,m,0,0,c);else if("flipbevel"===k){if(v>100)m=y.mult(-1);else {const t=v*d.add(y).mag()/d.sub(y).mag();m._perp()._mult(t*(_?-1:1));}this.addCurrentVertex(h,m,0,0,c),this.addCurrentVertex(h,m.mult(-1),0,0,c);}else if("bevel"===k||"fakeround"===k){const t=-Math.sqrt(v*v-1),e=_?t:0,r=_?0:t;if(p&&this.addCurrentVertex(h,d,e,r,c),"fakeround"===k){const t=Math.round(180*b/Math.PI/20);for(let e=1;e<t;e++){let r=e/t;if(.5!==r){const t=r-.5;r+=r*t*(r-1)*((1.0904+g*(g*(3.55645-1.43519*g)-3.2452))*t*t+(.848013+g*(.215638*g-1.06021)));}const n=y.sub(d)._mult(r)._add(d)._unit()._mult(_?-1:1);this.addHalfVertex(h,n.x,n.y,!1,_,0,c);}}f&&this.addCurrentVertex(h,y,-e,-r,c);}else if("butt"===k)this.addCurrentVertex(h,m,0,0,c);else if("square"===k){const t=p?1:-1;this.addCurrentVertex(h,m,t,t,c);}else "round"===k&&(p&&(this.addCurrentVertex(h,d,0,0,c),this.addCurrentVertex(h,d,1,1,c,!0)),f&&(this.addCurrentVertex(h,y,-1,-1,c,!0),this.addCurrentVertex(h,y,0,0,c)));if(w&&e<o-1){const t=h.dist(f);if(t>2*u){const e=h.add(f.sub(h)._mult(u/t)._round());this.updateDistance(h,e),this.addCurrentVertex(e,y,0,0,c),h=e;}}}}addCurrentVertex(t,e,r,n,i,a=!1){const s=e.y*n-e.x,o=-e.y-e.x*n;this.addHalfVertex(t,e.x+e.y*r,e.y-e.x*r,a,!1,r,i),this.addHalfVertex(t,s,o,a,!0,-n,i),this.distance>Xo/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,r,n,i,a));}addHalfVertex({x:t,y:e},r,n,i,a,s,o){const l=.5*(this.lineClips?this.scaledDistance*(Xo-1):this.scaledDistance);this.layoutVertexArray.emplaceBack((t<<1)+(i?1:0),(e<<1)+(a?1:0),Math.round(63*r)+128,Math.round(63*n)+128,1+(0===s?0:s<0?-1:1)|(63&l)<<2,l>>6),this.lineClips&&this.layoutVertexArray2.emplaceBack((this.scaledDistance-this.lineClips.start)/(this.lineClips.end-this.lineClips.start),this.lineClipsArray.length);const u=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,u),o.primitiveLength++),a?this.e2=u:this.e1=u;}updateScaledDistance(){this.scaledDistance=this.lineClips?this.lineClips.start+(this.lineClips.end-this.lineClips.start)*this.distance/this.totalDistance:this.distance;}updateDistance(t,e){this.distance+=t.dist(e),this.updateScaledDistance();}}Mn("LineBucket",Yo,{omit:["layers","patternFeatures"]});const Ho=new fi({"line-cap":new li(nt.layout_line["line-cap"]),"line-join":new ui(nt.layout_line["line-join"]),"line-miter-limit":new li(nt.layout_line["line-miter-limit"]),"line-round-limit":new li(nt.layout_line["line-round-limit"]),"line-sort-key":new ui(nt.layout_line["line-sort-key"])});var Wo={paint:new fi({"line-opacity":new ui(nt.paint_line["line-opacity"]),"line-color":new ui(nt.paint_line["line-color"]),"line-translate":new li(nt.paint_line["line-translate"]),"line-translate-anchor":new li(nt.paint_line["line-translate-anchor"]),"line-width":new ui(nt.paint_line["line-width"]),"line-gap-width":new ui(nt.paint_line["line-gap-width"]),"line-offset":new ui(nt.paint_line["line-offset"]),"line-blur":new ui(nt.paint_line["line-blur"]),"line-dasharray":new hi(nt.paint_line["line-dasharray"]),"line-pattern":new ci(nt.paint_line["line-pattern"]),"line-gradient":new pi(nt.paint_line["line-gradient"])}),layout:Ho};const Qo=new class extends ui{possiblyEvaluate(t,e){return e=new Qn(Math.floor(e.zoom),{now:e.now,fadeDuration:e.fadeDuration,zoomHistory:e.zoomHistory,transition:e.transition}),super.possiblyEvaluate(t,e)}evaluate(t,e,r,n){return e=o({},e,{zoom:Math.floor(e.zoom)}),super.evaluate(t,e,r,n)}}(Wo.paint.properties["line-width"].specification);function tl(t,e){return e>0?e+2*t:t}Qo.useIntegerZoom=!0;const el=vi([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),rl=vi([{name:"a_projected_pos",components:3,type:"Float32"}],4);vi([{name:"a_fade_opacity",components:1,type:"Uint32"}],4);const nl=vi([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}]);vi([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]);const il=vi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),al=vi([{name:"a_pos",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4);function sl(t,e,r){return t.sections.forEach((t=>{t.text=function(t,e,r){const n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),Wn.applyArabicShaping&&(t=Wn.applyArabicShaping(t)),t}(t.text,e,r);})),t}vi([{name:"triangle",components:3,type:"Uint16"}]),vi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),vi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"},{type:"Float32",name:"collisionCircleDiameter"}]),vi([{type:"Float32",name:"offsetX"}]),vi([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]);const ol={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};var ll=24,ul=pl,cl=function(t,e,r,n,i){var a,s,o=8*i-n-1,l=(1<<o)-1,u=l>>1,c=-7,h=r?i-1:0,p=r?-1:1,f=t[e+h];for(h+=p,a=f&(1<<-c)-1,f>>=-c,c+=o;c>0;a=256*a+t[e+h],h+=p,c-=8);for(s=a&(1<<-c)-1,a>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=p,c-=8);if(0===a)a=1-u;else {if(a===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,n),a-=u;}return (f?-1:1)*s*Math.pow(2,a-n)},hl=function(t,e,r,n,i,a){var s,o,l,u=8*a-i-1,c=(1<<u)-1,h=c>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:a-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+h>=1?p/l:p*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=c?(o=0,s=c):s+h>=1?(o=(e*l-1)*Math.pow(2,i),s+=h):(o=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+f]=255&o,f+=d,o/=256,i-=8);for(s=s<<i|o,u+=i;u>0;t[r+f]=255&s,f+=d,s/=256,u-=8);t[r+f-d]|=128*y;};function pl(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}pl.Varint=0,pl.Fixed64=1,pl.Bytes=2,pl.Fixed32=5;var fl,dl=4294967296,yl=1/dl,ml="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function gl(t){return t.type===pl.Bytes?t.readVarint()+t.pos:t.pos+1}function xl(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function vl(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function bl(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function wl(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function _l(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function Al(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function kl(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function Sl(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function Il(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function Ml(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function zl(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function Bl(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function Cl(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function Pl(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function Vl(t,e,r){1===t&&r.readMessage(El,e);}function El(t,e,r){if(3===t){const{id:t,bitmap:n,width:i,height:a,left:s,top:o,advance:l}=r.readMessage(Fl,{});e.push({id:t,bitmap:new zs({width:i+6,height:a+6},n),metrics:{width:i,height:a,left:s,top:o,advance:l}});}}function Fl(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}function Tl(t){let e=0,r=0;for(const n of t)e+=n.w*n.h,r=Math.max(r,n.w);t.sort(((t,e)=>e.h-t.h));const n=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}];let i=0,a=0;for(const e of t)for(let t=n.length-1;t>=0;t--){const r=n[t];if(!(e.w>r.w||e.h>r.h)){if(e.x=r.x,e.y=r.y,a=Math.max(a,e.y+e.h),i=Math.max(i,e.x+e.w),e.w===r.w&&e.h===r.h){const e=n.pop();t<n.length&&(n[t]=e);}else e.h===r.h?(r.x+=e.w,r.w-=e.w):e.w===r.w?(r.y+=e.h,r.h-=e.h):(n.push({x:r.x+e.w,y:r.y,w:r.w-e.w,h:e.h}),r.y+=e.h,r.h-=e.h);break}}return {w:i,h:a,fill:e/(i*a)||0}}pl.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,a=this.pos;this.type=7&n,t(i,e,this),this.pos===a&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Bl(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=Pl(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Bl(this.buf,this.pos)+Bl(this.buf,this.pos+4)*dl;return this.pos+=8,t},readSFixed64:function(){var t=Bl(this.buf,this.pos)+Pl(this.buf,this.pos+4)*dl;return this.pos+=8,t},readFloat:function(){var t=cl(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=cl(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,a=r.buf;if(n=(112&(i=a[r.pos++]))>>4,i<128)return xl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<3,i<128)return xl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<10,i<128)return xl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<17,i<128)return xl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<24,i<128)return xl(t,n,e);if(n|=(1&(i=a[r.pos++]))<<31,i<128)return xl(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&ml?function(t,e,r){return ml.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){for(var n="",i=e;i<r;){var a,s,o,l=t[i],u=null,c=l>239?4:l>223?3:l>191?2:1;if(i+c>r)break;1===c?l<128&&(u=l):2===c?128==(192&(a=t[i+1]))&&(u=(31&l)<<6|63&a)<=127&&(u=null):3===c?(s=t[i+2],128==(192&(a=t[i+1]))&&128==(192&s)&&((u=(15&l)<<12|(63&a)<<6|63&s)<=2047||u>=55296&&u<=57343)&&(u=null)):4===c&&(s=t[i+2],o=t[i+3],128==(192&(a=t[i+1]))&&128==(192&s)&&128==(192&o)&&((u=(15&l)<<18|(63&a)<<12|(63&s)<<6|63&o)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,c=1):u>65535&&(u-=65536,n+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),n+=String.fromCharCode(u),i+=c;}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==pl.Bytes)return t.push(this.readVarint(e));var r=gl(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==pl.Bytes)return t.push(this.readSVarint());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==pl.Bytes)return t.push(this.readBoolean());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==pl.Bytes)return t.push(this.readFloat());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==pl.Bytes)return t.push(this.readDouble());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==pl.Bytes)return t.push(this.readFixed32());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==pl.Bytes)return t.push(this.readSFixed32());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==pl.Bytes)return t.push(this.readFixed64());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==pl.Bytes)return t.push(this.readSFixed64());var e=gl(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===pl.Varint)for(;this.buf[this.pos++]>127;);else if(e===pl.Bytes)this.pos=this.readVarint()+this.pos;else if(e===pl.Fixed32)this.pos+=4;else {if(e!==pl.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),Cl(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),Cl(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),Cl(this.buf,-1&t,this.pos),Cl(this.buf,Math.floor(t*yl),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),Cl(this.buf,-1&t,this.pos),Cl(this.buf,Math.floor(t*yl),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;if(t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,r.buf[r.pos]=127&(t>>>=7);}(r,0,e),function(t,e){var r=(7&t)<<4;e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))));}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,a=0;a<e.length;a++){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){n>56319||a+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&vl(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),hl(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),hl(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&vl(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,pl.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,bl,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,wl,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,kl,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,_l,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,Al,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,Sl,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,Il,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,Ml,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,zl,e);},writeBytesField:function(t,e){this.writeTag(t,pl.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,pl.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,pl.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,pl.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,pl.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,pl.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,pl.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,pl.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,pl.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,pl.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};class Ll{constructor(t,{pixelRatio:e,version:r,stretchX:n,stretchY:i,content:a}){this.paddedRect=t,this.pixelRatio=e,this.stretchX=n,this.stretchY=i,this.content=a,this.version=r;}get tl(){return [this.paddedRect.x+1,this.paddedRect.y+1]}get br(){return [this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]}get tlbr(){return this.tl.concat(this.br)}get displaySize(){return [(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]}}class Dl{constructor(t,e){const r={},n={};this.haveRenderCallbacks=[];const i=[];this.addImages(t,r,i),this.addImages(e,n,i);const{w:a,h:s}=Tl(i),o=new Bs({width:a||1,height:s||1});for(const e in t){const n=t[e],i=r[e].paddedRect;Bs.copy(n.data,o,{x:0,y:0},{x:i.x+1,y:i.y+1},n.data);}for(const t in e){const r=e[t],i=n[t].paddedRect,a=i.x+1,s=i.y+1,l=r.data.width,u=r.data.height;Bs.copy(r.data,o,{x:0,y:0},{x:a,y:s},r.data),Bs.copy(r.data,o,{x:0,y:u-1},{x:a,y:s-1},{width:l,height:1}),Bs.copy(r.data,o,{x:0,y:0},{x:a,y:s+u},{width:l,height:1}),Bs.copy(r.data,o,{x:l-1,y:0},{x:a-1,y:s},{width:1,height:u}),Bs.copy(r.data,o,{x:0,y:0},{x:a+l,y:s},{width:1,height:u});}this.image=o,this.iconPositions=r,this.patternPositions=n;}addImages(t,e,r){for(const n in t){const i=t[n],a={x:0,y:0,w:i.data.width+2,h:i.data.height+2};r.push(a),e[n]=new Ll(a,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}}patchUpdatedImages(t,e){t.dispatchRenderCallbacks(this.haveRenderCallbacks);for(const r in t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);}patchUpdatedImage(t,e,r){if(!t||!e)return;if(t.version===e.version)return;t.version=e.version;const[n,i]=t.tl;r.update(e.data,void 0,{x:n,y:i});}}Mn("ImagePosition",Ll),Mn("ImageAtlas",Dl),t.WritingMode=void 0,(fl=t.WritingMode||(t.WritingMode={}))[fl.none=0]="none",fl[fl.horizontal=1]="horizontal",fl[fl.vertical=2]="vertical",fl[fl.horizontalOnly=3]="horizontalOnly";const $l=-17;class Rl{constructor(){this.scale=1,this.fontStack="",this.imageName=null;}static forText(t,e){const r=new Rl;return r.scale=t||1,r.fontStack=e,r}static forImage(t){const e=new Rl;return e.imageName=t,e}}class Ol{constructor(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null;}static fromFeature(t,e){const r=new Ol;for(let n=0;n<t.sections.length;n++){const i=t.sections[n];i.image?r.addImageSection(i):r.addTextSection(i,e);}return r}length(){return this.text.length}getSection(t){return this.sections[this.sectionIndex[t]]}getSectionIndex(t){return this.sectionIndex[t]}getCharCode(t){return this.text.charCodeAt(t)}verticalizePunctuation(){this.text=function(t){let e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;e+=n&&Dn(n)&&!ol[t[r+1]]||i&&Dn(i)&&!ol[t[r-1]]||!ol[t[r]]?t[r]:ol[t[r]];}return e}(this.text);}trim(){let t=0;for(let e=0;e<this.text.length&&ql[this.text.charCodeAt(e)];e++)t++;let e=this.text.length;for(let r=this.text.length-1;r>=0&&r>=t&&ql[this.text.charCodeAt(r)];r--)e--;this.text=this.text.substring(t,e),this.sectionIndex=this.sectionIndex.slice(t,e);}substring(t,e){const r=new Ol;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r}toString(){return this.text}getMaxScale(){return this.sectionIndex.reduce(((t,e)=>Math.max(t,this.sections[e].scale)),0)}addTextSection(t,e){this.text+=t.text,this.sections.push(Rl.forText(t.scale,t.fontStack||e));const r=this.sections.length-1;for(let e=0;e<t.text.length;++e)this.sectionIndex.push(r);}addImageSection(t){const e=t.image?t.image.name:"";if(0===e.length)return void d("Can't add FormattedSection with an empty image.");const r=this.getNextImageSectionCharCode();r?(this.text+=String.fromCharCode(r),this.sections.push(Rl.forImage(e)),this.sectionIndex.push(this.sections.length-1)):d("Reached maximum number of images 6401");}getNextImageSectionCharCode(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)}}function Ul(e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m){const g=Ol.fromFeature(e,a);let x;p===t.WritingMode.vertical&&g.verticalizePunctuation();const{processBidirectionalText:v,processStyledBidirectionalText:b}=Wn;if(v&&1===g.sections.length){x=[];const t=v(g.toString(),Xl(g,c,s,r,i,d,y));for(const e of t){const t=new Ol;t.text=e,t.sections=g.sections;for(let r=0;r<e.length;r++)t.sectionIndex.push(0);x.push(t);}}else if(b){x=[];const t=b(g.text,g.sectionIndex,Xl(g,c,s,r,i,d,y));for(const e of t){const t=new Ol;t.text=e[0],t.sectionIndex=e[1],t.sections=g.sections,x.push(t);}}else x=function(t,e){const r=[],n=t.text;let i=0;for(const n of e)r.push(t.substring(i,n)),i=n;return i<n.length&&r.push(t.substring(i,n.length)),r}(g,Xl(g,c,s,r,i,d,y));const w=[],_={positionedLines:w,text:g.toString(),top:h[1],bottom:h[1],left:h[0],right:h[0],writingMode:p,iconsInText:!1,verticalizable:!1};return function(e,r,n,i,a,s,o,l,u,c,h,p){let f=0,d=$l,y=0,m=0;const g="right"===l?1:"left"===l?0:.5;let x=0;for(const o of a){o.trim();const a=o.getMaxScale(),l=(a-1)*ll,b={positionedGlyphs:[],lineOffset:0};e.positionedLines[x]=b;const w=b.positionedGlyphs;let _=0;if(!o.length()){d+=s,++x;continue}for(let s=0;s<o.length();s++){const y=o.getSection(s),m=o.getSectionIndex(s),g=o.getCharCode(s);let x=0,b=null,A=null,k=null,S=ll;const I=!(u===t.WritingMode.horizontal||!h&&!Ln(g)||h&&(ql[g]||(v=g,Vn.Arabic(v)||Vn["Arabic Supplement"](v)||Vn["Arabic Extended-A"](v)||Vn["Arabic Presentation Forms-A"](v)||Vn["Arabic Presentation Forms-B"](v))));if(y.imageName){const t=i[y.imageName];if(!t)continue;k=y.imageName,e.iconsInText=e.iconsInText||!0,A=t.paddedRect;const r=t.displaySize;y.scale=y.scale*ll/p,b={width:r[0],height:r[1],left:1,top:-3,advance:I?r[1]:r[0]},x=l+(ll-r[1]*y.scale),S=b.advance;const n=I?r[0]*y.scale-ll*a:r[1]*y.scale-ll*a;n>0&&n>_&&(_=n);}else {const t=n[y.fontStack],e=t&&t[g];if(e&&e.rect)A=e.rect,b=e.metrics;else {const t=r[y.fontStack],e=t&&t[g];if(!e)continue;b=e.metrics;}x=(a-y.scale)*ll;}I?(e.verticalizable=!0,w.push({glyph:g,imageName:k,x:f,y:d+x,vertical:I,scale:y.scale,fontStack:y.fontStack,sectionIndex:m,metrics:b,rect:A}),f+=S*y.scale+c):(w.push({glyph:g,imageName:k,x:f,y:d+x,vertical:I,scale:y.scale,fontStack:y.fontStack,sectionIndex:m,metrics:b,rect:A}),f+=b.advance*y.scale+c);}0!==w.length&&(y=Math.max(f-c,y),Hl(w,0,w.length-1,g,_)),f=0;const A=s*a+_;b.lineOffset=Math.max(_,l),d+=A,m=Math.max(A,m),++x;}var v;const b=d-$l,{horizontalAlign:w,verticalAlign:_}=Yl(o);(((function(t,e,r,n,i,a,s,o,l){const u=(e-r)*i;let c=0;c=a!==s?-o*n-$l:(-n*l+.5)*s;for(const e of t)for(const t of e.positionedGlyphs)t.x+=u,t.y+=c;})))(e.positionedLines,g,w,_,y,m,s,b,a.length),e.top+=-_*b,e.bottom=e.top+b,e.left+=-w*y,e.right=e.left+y;}(_,r,n,i,x,o,l,u,p,c,f,m),!function(t){for(const e of t)if(0!==e.positionedGlyphs.length)return !1;return !0}(w)&&_}const ql={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},jl={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0};function Nl(t,e,r,n,i,a){if(e.imageName){const t=n[e.imageName];return t?t.displaySize[0]*e.scale*ll/a+i:0}{const n=r[e.fontStack],a=n&&n[t];return a?a.metrics.advance*e.scale+i:0}}function Zl(t,e,r,n){const i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function Kl(t,e,r){let n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function Gl(t,e,r,n,i,a){let s=null,o=Zl(e,r,i,a);for(const t of n){const n=Zl(e-t.x,r,i,a)+t.badness;n<=o&&(s=t,o=n);}return {index:t,x:e,priorBreak:s,badness:o}}function Jl(t){return t?Jl(t.priorBreak).concat(t.index):[]}function Xl(t,e,r,n,i,a,s){if("point"!==a)return [];if(!t)return [];const o=[],l=function(t,e,r,n,i,a){let s=0;for(let r=0;r<t.length();r++){const o=t.getSection(r);s+=Nl(t.getCharCode(r),o,n,i,e,a);}return s/Math.max(1,Math.ceil(s/r))}(t,e,r,n,i,s),u=t.text.indexOf("​")>=0;let c=0;for(let r=0;r<t.length();r++){const a=t.getSection(r),p=t.getCharCode(r);if(ql[p]||(c+=Nl(p,a,n,i,e,s)),r<t.length()-1){const e=!((h=p)<11904||!(Vn["Bopomofo Extended"](h)||Vn.Bopomofo(h)||Vn["CJK Compatibility Forms"](h)||Vn["CJK Compatibility Ideographs"](h)||Vn["CJK Compatibility"](h)||Vn["CJK Radicals Supplement"](h)||Vn["CJK Strokes"](h)||Vn["CJK Symbols and Punctuation"](h)||Vn["CJK Unified Ideographs Extension A"](h)||Vn["CJK Unified Ideographs"](h)||Vn["Enclosed CJK Letters and Months"](h)||Vn["Halfwidth and Fullwidth Forms"](h)||Vn.Hiragana(h)||Vn["Ideographic Description Characters"](h)||Vn["Kangxi Radicals"](h)||Vn["Katakana Phonetic Extensions"](h)||Vn.Katakana(h)||Vn["Vertical Forms"](h)||Vn["Yi Radicals"](h)||Vn["Yi Syllables"](h)));(jl[p]||e||a.imageName)&&o.push(Gl(r+1,c,l,o,Kl(p,t.getCharCode(r+1),e&&u),!1));}}var h;return Jl(Gl(t.length(),c,l,o,0,!0))}function Yl(t){let e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function Hl(t,e,r,n,i){if(!n&&!i)return;const a=t[r],s=(t[r].x+a.metrics.advance*a.scale)*n;for(let n=e;n<=r;n++)t[n].x-=s,t[n].y+=i;}function Wl(t,e,r){const{horizontalAlign:n,verticalAlign:i}=Yl(r),a=e[0]-t.displaySize[0]*n,s=e[1]-t.displaySize[1]*i;return {image:t,top:s,bottom:s+t.displaySize[1],left:a,right:a+t.displaySize[0]}}function Ql(t,e,r,n,i,a){const s=t.image;let o;if(s.content){const t=s.content,e=s.pixelRatio||1;o=[t[0]/e,t[1]/e,s.displaySize[0]-t[2]/e,s.displaySize[1]-t[3]/e];}const l=e.left*a,u=e.right*a;let c,h,p,f;"width"===r||"both"===r?(f=i[0]+l-n[3],h=i[0]+u+n[1]):(f=i[0]+(l+u-s.displaySize[0])/2,h=f+s.displaySize[0]);const d=e.top*a,y=e.bottom*a;return "height"===r||"both"===r?(c=i[1]+d-n[0],p=i[1]+y+n[2]):(c=i[1]+(d+y-s.displaySize[1])/2,p=c+s.displaySize[1]),{image:s,top:c,right:h,bottom:p,left:f,collisionPadding:o}}const tu=128;function eu(t,e){const{expression:r}=e;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new Qn(t+1))};if("source"===r.kind)return {kind:"source"};{const{zoomStops:e,interpolationType:n}=r;let i=0;for(;i<e.length&&e[i]<=t;)i++;i=Math.max(0,i-1);let a=i;for(;a<e.length&&e[a]<t+1;)a++;a=Math.min(e.length-1,a);const s=e[i],o=e[a];return "composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:o,interpolationType:n}:{kind:"camera",minZoom:s,maxZoom:o,minSize:r.evaluate(new Qn(s)),maxSize:r.evaluate(new Qn(o)),interpolationType:n}}}class ru extends S{constructor(t,e,r,n){super(t,e),this.angle=r,void 0!==n&&(this.segment=n);}clone(){return new ru(this.x,this.y,this.angle,this.segment)}}function nu(t,e,r,n,i){if(void 0===e.segment)return !0;let a=e,s=e.segment+1,o=0;for(;o>-r/2;){if(s--,s<0)return !1;o-=t[s].dist(a),a=t[s];}o+=t[s].dist(t[s+1]),s++;const l=[];let u=0;for(;o<r/2;){const e=t[s],r=t[s+1];if(!r)return !1;let a=t[s-1].angleTo(e)-e.angleTo(r);for(a=Math.abs((a+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:o,angleDelta:a}),u+=a;o-l[0].distance>n;)u-=l.shift().angleDelta;if(u>i)return !1;s++,o+=e.dist(r);}return !0}function iu(t){let e=0;for(let r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function au(t,e,r){return t?.6*e*r:0}function su(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function ou(t,e,r,n,i,a){const s=au(r,i,a),o=su(r,n)*a;let l=0;const u=iu(t)/2;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1],a=n.dist(i);if(l+a>u){const c=(u-l)/a,h=Se(n.x,i.x,c),p=Se(n.y,i.y,c),f=new ru(h,p,i.angleTo(n),r);return f._round(),!s||nu(t,f,o,s,e)?f:void 0}l+=a;}}function lu(t,e,r,n,i,a,s,o,l){const u=au(n,a,s),c=su(n,i),h=c*s,p=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l;return e-h<e/4&&(e=h+e/4),uu(t,p?e/2*o%e:(c/2+2*a)*s*o%e,e,u,r,h,p,!1,l)}function uu(t,e,r,n,i,a,s,o,l){const u=a/2,c=iu(t);let h=0,p=e-r,f=[];for(let e=0;e<t.length-1;e++){const s=t[e],o=t[e+1],d=s.dist(o),y=o.angleTo(s);for(;p+r<h+d;){p+=r;const m=(p-h)/d,g=Se(s.x,o.x,m),x=Se(s.y,o.y,m);if(g>=0&&g<l&&x>=0&&x<l&&p-u>=0&&p+u<=c){const r=new ru(g,x,y,e);r._round(),n&&!nu(t,r,a,n,i)||f.push(r);}}h+=d;}return o||f.length||s||(f=uu(t,h/2,r,n,i,a,s,!0,l)),f}function cu(t,e,r,n,i){const a=[];for(let s=0;s<t.length;s++){const o=t[s];let l;for(let t=0;t<o.length-1;t++){let s=o[t],u=o[t+1];s.x<e&&u.x<e||(s.x<e?s=new S(e,s.y+(e-s.x)/(u.x-s.x)*(u.y-s.y))._round():u.x<e&&(u=new S(e,s.y+(e-s.x)/(u.x-s.x)*(u.y-s.y))._round()),s.y<r&&u.y<r||(s.y<r?s=new S(s.x+(r-s.y)/(u.y-s.y)*(u.x-s.x),r)._round():u.y<r&&(u=new S(s.x+(r-s.y)/(u.y-s.y)*(u.x-s.x),r)._round()),s.x>=n&&u.x>=n||(s.x>=n?s=new S(n,s.y+(n-s.x)/(u.x-s.x)*(u.y-s.y))._round():u.x>=n&&(u=new S(n,s.y+(n-s.x)/(u.x-s.x)*(u.y-s.y))._round()),s.y>=i&&u.y>=i||(s.y>=i?s=new S(s.x+(i-s.y)/(u.y-s.y)*(u.x-s.x),i)._round():u.y>=i&&(u=new S(s.x+(i-s.y)/(u.y-s.y)*(u.x-s.x),i)._round()),l&&s.equals(l[l.length-1])||(l=[s],a.push(l)),l.push(u)))));}}return a}function hu(t,e,r,n){const i=[],a=t.image,s=a.pixelRatio,o=a.paddedRect.w-2,l=a.paddedRect.h-2,u=t.right-t.left,c=t.bottom-t.top,h=a.stretchX||[[0,o]],p=a.stretchY||[[0,l]],f=(t,e)=>t+e[1]-e[0],d=h.reduce(f,0),y=p.reduce(f,0),m=o-d,g=l-y;let x=0,v=d,b=0,w=y,_=0,A=m,k=0,I=g;if(a.content&&n){const t=a.content;x=pu(h,0,t[0]),b=pu(p,0,t[1]),v=pu(h,t[0],t[2]),w=pu(p,t[1],t[3]),_=t[0]-x,k=t[1]-b,A=t[2]-t[0]-v,I=t[3]-t[1]-w;}const M=(n,i,o,l)=>{const h=du(n.stretch-x,v,u,t.left),p=yu(n.fixed-_,A,n.stretch,d),f=du(i.stretch-b,w,c,t.top),m=yu(i.fixed-k,I,i.stretch,y),g=du(o.stretch-x,v,u,t.left),M=yu(o.fixed-_,A,o.stretch,d),z=du(l.stretch-b,w,c,t.top),B=yu(l.fixed-k,I,l.stretch,y),C=new S(h,f),P=new S(g,f),V=new S(g,z),E=new S(h,z),F=new S(p/s,m/s),T=new S(M/s,B/s),L=e*Math.PI/180;if(L){const t=Math.sin(L),e=Math.cos(L),r=[e,-t,t,e];C._matMult(r),P._matMult(r),E._matMult(r),V._matMult(r);}const D=n.stretch+n.fixed,$=i.stretch+i.fixed;return {tl:C,tr:P,bl:E,br:V,tex:{x:a.paddedRect.x+1+D,y:a.paddedRect.y+1+$,w:o.stretch+o.fixed-D,h:l.stretch+l.fixed-$},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:F,pixelOffsetBR:T,minFontScaleX:A/s/u,minFontScaleY:I/s/c,isSDF:r}};if(n&&(a.stretchX||a.stretchY)){const t=fu(h,m,d),e=fu(p,g,y);for(let r=0;r<t.length-1;r++){const n=t[r],a=t[r+1];for(let t=0;t<e.length-1;t++)i.push(M(n,e[t],a,e[t+1]));}}else i.push(M({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:o+1},{fixed:0,stretch:l+1}));return i}function pu(t,e,r){let n=0;for(const i of t)n+=Math.max(e,Math.min(r,i[1]))-Math.max(e,Math.min(r,i[0]));return n}function fu(t,e,r){const n=[{fixed:-1,stretch:0}];for(const[e,r]of t){const t=n[n.length-1];n.push({fixed:e-t.stretch,stretch:t.stretch}),n.push({fixed:e-t.stretch,stretch:t.stretch+(r-e)});}return n.push({fixed:e+1,stretch:r}),n}function du(t,e,r,n){return t/e*r+n}function yu(t,e,r,n){return t-e*r/n}Mn("Anchor",ru);class mu{constructor(t,e,r,n,i,a,s,o,l,u){if(this.boxStartIndex=t.length,l){let t=a.top,e=a.bottom;const r=a.collisionPadding;r&&(t-=r[1],e+=r[3]);let n=e-t;n>0&&(n=Math.max(10,n),this.circleDiameter=n);}else {let l=a.top*s-o[0],c=a.bottom*s+o[2],h=a.left*s-o[3],p=a.right*s+o[1];const f=a.collisionPadding;if(f&&(h-=f[0]*s,l-=f[1]*s,p+=f[2]*s,c+=f[3]*s),u){const t=new S(h,l),e=new S(p,l),r=new S(h,c),n=new S(p,c),i=u*Math.PI/180;t._rotate(i),e._rotate(i),r._rotate(i),n._rotate(i),h=Math.min(t.x,e.x,r.x,n.x),p=Math.max(t.x,e.x,r.x,n.x),l=Math.min(t.y,e.y,r.y,n.y),c=Math.max(t.y,e.y,r.y,n.y);}t.emplaceBack(e.x,e.y,h,l,p,c,r,n,i);}this.boxEndIndex=t.length;}}class gu{constructor(t=[],e=xu){if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let t=(this.length>>1)-1;t>=0;t--)this._down(t);}push(t){this.data.push(t),this.length++,this._up(this.length-1);}pop(){if(0===this.length)return;const t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:r}=this,n=e[t];for(;t>0;){const i=t-1>>1,a=e[i];if(r(n,a)>=0)break;e[t]=a,t=i;}e[t]=n;}_down(t){const{data:e,compare:r}=this,n=this.length>>1,i=e[t];for(;t<n;){let n=1+(t<<1),a=e[n];const s=n+1;if(s<this.length&&r(e[s],a)<0&&(n=s,a=e[s]),r(a,i)>=0)break;e[t]=a,t=n;}e[t]=i;}}function xu(t,e){return t<e?-1:t>e?1:0}function vu(t,e=1,r=!1){let n=1/0,i=1/0,a=-1/0,s=-1/0;const o=t[0];for(let t=0;t<o.length;t++){const e=o[t];(!t||e.x<n)&&(n=e.x),(!t||e.y<i)&&(i=e.y),(!t||e.x>a)&&(a=e.x),(!t||e.y>s)&&(s=e.y);}const l=Math.min(a-n,s-i);let u=l/2;const c=new gu([],bu);if(0===l)return new S(n,i);for(let e=n;e<a;e+=l)for(let r=i;r<s;r+=l)c.push(new wu(e+u,r+u,u,t));let h=function(t){let e=0,r=0,n=0;const i=t[0];for(let t=0,a=i.length,s=a-1;t<a;s=t++){const a=i[t],o=i[s],l=a.x*o.y-o.x*a.y;r+=(a.x+o.x)*l,n+=(a.y+o.y)*l,e+=3*l;}return new wu(r/e,n/e,0,t)}(t),p=c.length;for(;c.length;){const n=c.pop();(n.d>h.d||!h.d)&&(h=n,r&&console.log("found best %d after %d probes",Math.round(1e4*n.d)/1e4,p)),n.max-h.d<=e||(u=n.h/2,c.push(new wu(n.p.x-u,n.p.y-u,u,t)),c.push(new wu(n.p.x+u,n.p.y-u,u,t)),c.push(new wu(n.p.x-u,n.p.y+u,u,t)),c.push(new wu(n.p.x+u,n.p.y+u,u,t)),p+=4);}return r&&(console.log(`num probes: ${p}`),console.log(`best distance: ${h.d}`)),h.p}function bu(t,e){return e.max-t.max}function wu(t,e,r,n){this.p=new S(t,e),this.h=r,this.d=function(t,e){let r=!1,n=1/0;for(let i=0;i<e.length;i++){const a=e[i];for(let e=0,i=a.length,s=i-1;e<i;s=e++){const i=a[e],o=a[s];i.y>t.y!=o.y>t.y&&t.x<(o.x-i.x)*(t.y-i.y)/(o.y-i.y)+i.x&&(r=!r),n=Math.min(n,rs(t,i,o));}}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}const _u=Number.POSITIVE_INFINITY;function Au(t,e){return e[1]!==_u?function(t,e,r){let n=0,i=0;switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":i=r-7;break;case"bottom-right":case"bottom-left":case"bottom":i=7-r;}switch(t){case"top-right":case"bottom-right":case"right":n=-e;break;case"top-left":case"bottom-left":case"left":n=e;}return [n,i]}(t,e[0],e[1]):function(t,e){let r=0,n=0;e<0&&(e=0);const i=e/Math.sqrt(2);switch(t){case"top-right":case"top-left":n=i-7;break;case"bottom-right":case"bottom-left":n=7-i;break;case"bottom":n=7-e;break;case"top":n=e-7;}switch(t){case"top-right":case"bottom-right":r=-i;break;case"top-left":case"bottom-left":r=i;break;case"left":r=e;break;case"right":r=-e;}return [r,n]}(t,e[0])}function ku(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}function Su(e,r,n,i,a,s,o,l,u,c,h){let p=s.textMaxSize.evaluate(r,{});void 0===p&&(p=o);const f=e.layers[0].layout,y=f.get("icon-offset").evaluate(r,{},h),m=zu(n.horizontal),g=o/24,x=e.tilePixelRatio*g,v=e.tilePixelRatio*p/24,b=e.tilePixelRatio*l,w=e.tilePixelRatio*f.get("symbol-spacing"),_=f.get("text-padding")*e.tilePixelRatio,A=function(t,e,r,n=1){const i=t.get("icon-padding").evaluate(e,{},r),a=i&&i.values;return [a[0]*n,a[1]*n,a[2]*n,a[3]*n]}(f,r,h,e.tilePixelRatio),k=f.get("text-max-angle")/180*Math.PI,S="viewport"!==f.get("text-rotation-alignment")&&"point"!==f.get("symbol-placement"),I="map"===f.get("icon-rotation-alignment")&&"point"!==f.get("symbol-placement"),M=f.get("symbol-placement"),z=w/2,B=f.get("icon-text-fit");let C;i&&"none"!==B&&(e.allowVerticalPlacement&&n.vertical&&(C=Ql(i,n.vertical,B,f.get("icon-text-fit-padding"),y,g)),m&&(i=Ql(i,m,B,f.get("icon-text-fit-padding"),y,g)));const P=(l,p)=>{p.x<0||p.x>=qa||p.y<0||p.y>=qa||function(e,r,n,i,a,s,o,l,u,c,h,p,f,y,m,g,x,v,b,w,_,A,k,S,I){const M=e.addToLineVertexArray(r,n);let z,B,C,P,V=0,E=0,F=0,T=0,L=-1,D=-1;const $={};let R=xa.exports(""),O=0,U=0;if(void 0===l._unevaluatedLayout.getValue("text-radial-offset")?[O,U]=l.layout.get("text-offset").evaluate(_,{},S).map((t=>t*ll)):(O=l.layout.get("text-radial-offset").evaluate(_,{},S)*ll,U=_u),e.allowVerticalPlacement&&i.vertical){const t=l.layout.get("text-rotate").evaluate(_,{},S)+90;C=new mu(u,r,c,h,p,i.vertical,f,y,m,t),o&&(P=new mu(u,r,c,h,p,o,x,v,m,t));}if(a){const n=l.layout.get("icon-rotate").evaluate(_,{}),i="none"!==l.layout.get("icon-text-fit"),s=hu(a,n,k,i),f=o?hu(o,n,k,i):void 0;B=new mu(u,r,c,h,p,a,x,v,!1,n),V=4*s.length;const y=e.iconSizeData;let m=null;"source"===y.kind?(m=[tu*l.layout.get("icon-size").evaluate(_,{})],m[0]>Iu&&d(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)):"composite"===y.kind&&(m=[tu*A.compositeIconSizes[0].evaluate(_,{},S),tu*A.compositeIconSizes[1].evaluate(_,{},S)],(m[0]>Iu||m[1]>Iu)&&d(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)),e.addSymbols(e.icon,s,m,w,b,_,t.WritingMode.none,r,M.lineStartIndex,M.lineLength,-1,S),L=e.icon.placedSymbolArray.length-1,f&&(E=4*f.length,e.addSymbols(e.icon,f,m,w,b,_,t.WritingMode.vertical,r,M.lineStartIndex,M.lineLength,-1,S),D=e.icon.placedSymbolArray.length-1);}const q=Object.keys(i.horizontal);for(const n of q){const a=i.horizontal[n];if(!z){R=xa.exports(a.text);const t=l.layout.get("text-rotate").evaluate(_,{},S);z=new mu(u,r,c,h,p,a,f,y,m,t);}const o=1===a.positionedLines.length;if(F+=Mu(e,r,a,s,l,m,_,g,M,i.vertical?t.WritingMode.horizontal:t.WritingMode.horizontalOnly,o?q:[n],$,L,A,S),o)break}i.vertical&&(T+=Mu(e,r,i.vertical,s,l,m,_,g,M,t.WritingMode.vertical,["vertical"],$,D,A,S));const j=z?z.boxStartIndex:e.collisionBoxArray.length,N=z?z.boxEndIndex:e.collisionBoxArray.length,Z=C?C.boxStartIndex:e.collisionBoxArray.length,K=C?C.boxEndIndex:e.collisionBoxArray.length,G=B?B.boxStartIndex:e.collisionBoxArray.length,J=B?B.boxEndIndex:e.collisionBoxArray.length,X=P?P.boxStartIndex:e.collisionBoxArray.length,Y=P?P.boxEndIndex:e.collisionBoxArray.length;let H=-1;const W=(t,e)=>t&&t.circleDiameter?Math.max(t.circleDiameter,e):e;H=W(z,H),H=W(C,H),H=W(B,H),H=W(P,H);const Q=H>-1?1:0;Q&&(H*=I/ll),e.glyphOffsetArray.length>=Du.MAX_GLYPHS&&d("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==_.sortKey&&e.addToSortKeyRanges(e.symbolInstances.length,_.sortKey),e.symbolInstances.emplaceBack(r.x,r.y,$.right>=0?$.right:-1,$.center>=0?$.center:-1,$.left>=0?$.left:-1,$.vertical||-1,L,D,R,j,N,Z,K,G,J,X,Y,c,F,T,V,E,Q,0,f,O,U,H);}(e,p,l,n,i,a,C,e.layers[0],e.collisionBoxArray,r.index,r.sourceLayerIndex,e.index,x,[_,_,_,_],S,u,b,A,I,y,r,s,c,h,o);};if("line"===M)for(const t of cu(r.geometry,0,0,qa,qa)){const r=lu(t,w,k,n.vertical||m,i,24,v,e.overscaling,qa);for(const n of r){const r=m;r&&Bu(e,r.text,z,n)||P(t,n);}}else if("line-center"===M){for(const t of r.geometry)if(t.length>1){const e=ou(t,k,n.vertical||m,i,24,v);e&&P(t,e);}}else if("Polygon"===r.type)for(const t of ho(r.geometry,0)){const e=vu(t,16);P(t[0],new ru(e.x,e.y,0));}else if("LineString"===r.type)for(const t of r.geometry)P(t,new ru(t[0].x,t[0].y,0));else if("Point"===r.type)for(const t of r.geometry)for(const e of t)P([e],new ru(e.x,e.y,0));}const Iu=32640;function Mu(t,e,r,n,i,a,s,o,l,u,c,h,p,f,y){const m=function(t,e,r,n,i,a,s,o){const l=n.layout.get("text-rotate").evaluate(a,{})*Math.PI/180,u=[];for(const t of e.positionedLines)for(const n of t.positionedGlyphs){if(!n.rect)continue;const a=n.rect||{};let c=4,h=!0,p=1,f=0;const d=(i||o)&&n.vertical,y=n.metrics.advance*n.scale/2;if(o&&e.verticalizable){const e=(n.scale-1)*ll,r=(ll-n.metrics.width*n.scale)/2;f=t.lineOffset/2-(n.imageName?-r:e);}if(n.imageName){const t=s[n.imageName];h=t.sdf,p=t.pixelRatio,c=1/p;}const m=i?[n.x+y,n.y]:[0,0];let g=i?[0,0]:[n.x+y+r[0],n.y+r[1]-f],x=[0,0];d&&(x=g,g=[0,0]);const v=(n.metrics.left-c)*n.scale-y+g[0],b=(-n.metrics.top-c)*n.scale+g[1],w=v+a.w*n.scale/p,_=b+a.h*n.scale/p,A=new S(v,b),k=new S(w,b),I=new S(v,_),M=new S(w,_);if(d){const t=new S(-y,y-$l),e=-Math.PI/2,r=12-y,i=new S(22-r,-(n.imageName?r:0)),a=new S(...x);A._rotateAround(e,t)._add(i)._add(a),k._rotateAround(e,t)._add(i)._add(a),I._rotateAround(e,t)._add(i)._add(a),M._rotateAround(e,t)._add(i)._add(a);}if(l){const t=Math.sin(l),e=Math.cos(l),r=[e,-t,t,e];A._matMult(r),k._matMult(r),I._matMult(r),M._matMult(r);}const z=new S(0,0),B=new S(0,0);u.push({tl:A,tr:k,bl:I,br:M,tex:a,writingMode:e.writingMode,glyphOffset:m,sectionIndex:n.sectionIndex,isSDF:h,pixelOffsetTL:z,pixelOffsetBR:B,minFontScaleX:0,minFontScaleY:0});}return u}(0,r,o,i,a,s,n,t.allowVerticalPlacement),g=t.textSizeData;let x=null;"source"===g.kind?(x=[tu*i.layout.get("text-size").evaluate(s,{})],x[0]>Iu&&d(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)):"composite"===g.kind&&(x=[tu*f.compositeTextSizes[0].evaluate(s,{},y),tu*f.compositeTextSizes[1].evaluate(s,{},y)],(x[0]>Iu||x[1]>Iu)&&d(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)),t.addSymbols(t.text,m,x,o,a,s,u,e,l.lineStartIndex,l.lineLength,p,y);for(const e of c)h[e]=t.text.placedSymbolArray.length-1;return 4*m.length}function zu(t){for(const e in t)return t[e];return null}function Bu(t,e,r,n){const i=t.compareText;if(e in i){const t=i[e];for(let e=t.length-1;e>=0;e--)if(n.dist(t[e])<r)return !0}else i[e]=[];return i[e].push(n),!1}const Cu=_o.VectorTileFeature.types,Pu=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function Vu(t,e,r,n,i,a,s,o,l,u,c,h,p){const f=o?Math.min(Iu,Math.round(o[0])):0,d=o?Math.min(Iu,Math.round(o[1])):0;t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),a,s,(f<<1)+(l?1:0),d,16*u,16*c,256*h,256*p);}function Eu(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}function Fu(t){for(const e of t.sections)if(On(e.text))return !0;return !1}class Tu{constructor(t){this.layoutVertexArray=new sa,this.indexArray=new ha,this.programConfigurations=t,this.segments=new ya,this.dynamicLayoutVertexArray=new oa,this.opacityVertexArray=new la,this.placedSymbolArray=new Ki;}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length}upload(t,e,r,n){this.isEmpty()||(r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,el.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,rl.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,Pu,!0),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t));}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());}}Mn("SymbolBuffers",Tu);class Lu{constructor(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new ya,this.collisionVertexArray=new ca;}upload(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,nl.members,!0);}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy());}}Mn("CollisionBuffers",Lu);class Du{constructor(e){this.collisionBoxArray=e.collisionBoxArray,this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=e.index,this.pixelRatio=e.pixelRatio,this.sourceLayerIndex=e.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=ds([]),this.placementViewportMatrix=ds([]);const r=this.layers[0]._unevaluatedLayout._values;this.textSizeData=eu(this.zoom,r["text-size"]),this.iconSizeData=eu(this.zoom,r["icon-size"]);const n=this.layers[0].layout,i=n.get("symbol-sort-key"),a=n.get("symbol-z-order");this.canOverlap="never"!==qu(n,"text-overlap","text-allow-overlap")||"never"!==qu(n,"icon-overlap","icon-allow-overlap")||n.get("text-ignore-placement")||n.get("icon-ignore-placement"),this.sortFeaturesByKey="viewport-y"!==a&&!i.isConstant(),this.sortFeaturesByY=("viewport-y"===a||"auto"===a&&!this.sortFeaturesByKey)&&this.canOverlap,"point"===n.get("symbol-placement")&&(this.writingModes=n.get("text-writing-mode").map((e=>t.WritingMode[e]))),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.sourceID=e.sourceID;}createArrays(){this.text=new Tu(new Ra(this.layers,this.zoom,(t=>/^text/.test(t)))),this.icon=new Tu(new Ra(this.layers,this.zoom,(t=>/^icon/.test(t)))),this.glyphOffsetArray=new Xi,this.lineVertexArray=new Yi,this.symbolInstances=new Ji;}calculateGlyphDependencies(t,e,r,n,i){for(let a=0;a<t.length;a++)if(e[t.charCodeAt(a)]=!0,(r||n)&&i){const r=ol[t.charAt(a)];r&&(e[r.charCodeAt(0)]=!0);}}populate(e,r,n){const i=this.layers[0],a=i.layout,s=a.get("text-font"),o=a.get("text-field"),l=a.get("icon-image"),u=("constant"!==o.value.kind||o.value.value instanceof Dt&&!o.value.value.isEmpty()||o.value.value.toString().length>0)&&("constant"!==s.value.kind||s.value.value.length>0),c="constant"!==l.value.kind||!!l.value.value||Object.keys(l.parameters).length>0,h=a.get("symbol-sort-key");if(this.features=[],!u&&!c)return;const p=r.iconDependencies,f=r.glyphDependencies,d=r.availableImages,y=new Qn(this.zoom);for(const{feature:r,id:o,index:l,sourceLayerIndex:m}of e){const e=i._featureFilter.needGeometry,g=Ka(r,e);if(!i._featureFilter.filter(y,g,n))continue;let x,v;if(e||(g.geometry=Za(r)),u){const t=i.getValueAndResolveTokens("text-field",g,n,d),e=Dt.factory(t);Fu(e)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===Yn()||this.hasRTLText&&Wn.isParsed())&&(x=sl(e,i,g));}if(c){const t=i.getValueAndResolveTokens("icon-image",g,n,d);v=t instanceof Rt?t:Rt.fromString(t);}if(!x&&!v)continue;const b=this.sortFeaturesByKey?h.evaluate(g,{},n):void 0;if(this.features.push({id:o,text:x,icon:v,index:l,sourceLayerIndex:m,geometry:g.geometry,properties:r.properties,type:Cu[r.type],sortKey:b}),v&&(p[v.name]=!0),x){const e=s.evaluate(g,{},n).join(","),r="viewport"!==a.get("text-rotation-alignment")&&"point"!==a.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(t.WritingMode.vertical)>=0;for(const t of x.sections)if(t.image)p[t.image.name]=!0;else {const n=En(x.toString()),i=t.fontStack||e,a=f[i]=f[i]||{};this.calculateGlyphDependencies(t.text,a,r,this.allowVerticalPlacement,n);}}}"line"===a.get("symbol-placement")&&(this.features=function(t){const e={},r={},n=[];let i=0;function a(e){n.push(t[e]),i++;}function s(t,e,i){const a=r[t];return delete r[t],r[e]=a,n[a].geometry[0].pop(),n[a].geometry[0]=n[a].geometry[0].concat(i[0]),a}function o(t,r,i){const a=e[r];return delete e[r],e[t]=a,n[a].geometry[0].shift(),n[a].geometry[0]=i[0].concat(n[a].geometry[0]),a}function l(t,e,r){const n=r?e[0][e[0].length-1]:e[0][0];return `${t}:${n.x}:${n.y}`}for(let u=0;u<t.length;u++){const c=t[u],h=c.geometry,p=c.text?c.text.toString():null;if(!p){a(u);continue}const f=l(p,h),d=l(p,h,!0);if(f in r&&d in e&&r[f]!==e[d]){const t=o(f,d,h),i=s(f,d,n[t].geometry);delete e[f],delete r[d],r[l(p,n[i].geometry,!0)]=i,n[t].geometry=null;}else f in r?s(f,d,h):d in e?o(f,d,h):(a(u),e[f]=i-1,r[d]=i-1);}return n.filter((t=>t.geometry))}(this.features)),this.sortFeaturesByKey&&this.features.sort(((t,e)=>t.sortKey-e.sortKey));}update(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r));}isEmpty(){return 0===this.symbolInstances.length&&!this.hasRTLText}uploadPending(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload}upload(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;}destroyDebugData(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy();}destroy(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData();}addToLineVertexArray(t,e){const r=this.lineVertexArray.length;if(void 0!==t.segment){let r=t.dist(e[t.segment+1]),n=t.dist(e[t.segment]);const i={};for(let n=t.segment+1;n<e.length;n++)i[n]={x:e[n].x,y:e[n].y,tileUnitDistanceFromAnchor:r},n<e.length-1&&(r+=e[n+1].dist(e[n]));for(let r=t.segment||0;r>=0;r--)i[r]={x:e[r].x,y:e[r].y,tileUnitDistanceFromAnchor:n},r>0&&(n+=e[r-1].dist(e[r]));for(let t=0;t<e.length;t++){const e=i[t];this.lineVertexArray.emplaceBack(e.x,e.y,e.tileUnitDistanceFromAnchor);}}return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}}addSymbols(e,r,n,i,a,s,o,l,u,c,h,p){const f=e.indexArray,d=e.layoutVertexArray,y=e.segments.prepareSegment(4*r.length,d,f,this.canOverlap?s.sortKey:void 0),m=this.glyphOffsetArray.length,g=y.vertexLength,x=this.allowVerticalPlacement&&o===t.WritingMode.vertical?Math.PI/2:0,v=s.text&&s.text.sections;for(let t=0;t<r.length;t++){const{tl:i,tr:a,bl:o,br:u,tex:c,pixelOffsetTL:h,pixelOffsetBR:m,minFontScaleX:g,minFontScaleY:b,glyphOffset:w,isSDF:_,sectionIndex:A}=r[t],k=y.vertexLength,S=w[1];Vu(d,l.x,l.y,i.x,S+i.y,c.x,c.y,n,_,h.x,h.y,g,b),Vu(d,l.x,l.y,a.x,S+a.y,c.x+c.w,c.y,n,_,m.x,h.y,g,b),Vu(d,l.x,l.y,o.x,S+o.y,c.x,c.y+c.h,n,_,h.x,m.y,g,b),Vu(d,l.x,l.y,u.x,S+u.y,c.x+c.w,c.y+c.h,n,_,m.x,m.y,g,b),Eu(e.dynamicLayoutVertexArray,l,x),f.emplaceBack(k,k+1,k+2),f.emplaceBack(k+1,k+2,k+3),y.vertexLength+=4,y.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(w[0]),t!==r.length-1&&A===r[t+1].sectionIndex||e.programConfigurations.populatePaintArrays(d.length,s,s.index,{},p,v&&v[A]);}e.placedSymbolArray.emplaceBack(l.x,l.y,m,this.glyphOffsetArray.length-m,g,u,c,l.segment,n?n[0]:0,n?n[1]:0,i[0],i[1],o,0,!1,0,h);}_addCollisionDebugVertex(t,e,r,n,i,a){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,n,i,Math.round(a.x),Math.round(a.y))}addCollisionDebugVertices(t,e,r,n,i,a,s){const o=i.segments.prepareSegment(4,i.layoutVertexArray,i.indexArray),l=o.vertexLength,u=i.layoutVertexArray,c=i.collisionVertexArray,h=s.anchorX,p=s.anchorY;this._addCollisionDebugVertex(u,c,a,h,p,new S(t,e)),this._addCollisionDebugVertex(u,c,a,h,p,new S(r,e)),this._addCollisionDebugVertex(u,c,a,h,p,new S(r,n)),this._addCollisionDebugVertex(u,c,a,h,p,new S(t,n)),o.vertexLength+=4;const f=i.indexArray;f.emplaceBack(l,l+1),f.emplaceBack(l+1,l+2),f.emplaceBack(l+2,l+3),f.emplaceBack(l+3,l),o.primitiveLength+=4;}addDebugCollisionBoxes(t,e,r,n){for(let i=t;i<e;i++){const t=this.collisionBoxArray.get(i);this.addCollisionDebugVertices(t.x1,t.y1,t.x2,t.y2,n?this.textCollisionBox:this.iconCollisionBox,t.anchorPoint,r);}}generateCollisionDebugBuffers(){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new Lu(ua,il.members,pa),this.iconCollisionBox=new Lu(ua,il.members,pa);for(let t=0;t<this.symbolInstances.length;t++){const e=this.symbolInstances.get(t);this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1);}}_deserializeCollisionBoxesForSymbol(t,e,r,n,i,a,s,o,l){const u={};for(let n=e;n<r;n++){const e=t.get(n);u.textBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},u.textFeatureIndex=e.featureIndex;break}for(let e=n;e<i;e++){const r=t.get(e);u.verticalTextBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.verticalTextFeatureIndex=r.featureIndex;break}for(let e=a;e<s;e++){const r=t.get(e);u.iconBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.iconFeatureIndex=r.featureIndex;break}for(let e=o;e<l;e++){const r=t.get(e);u.verticalIconBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.verticalIconFeatureIndex=r.featureIndex;break}return u}deserializeCollisionBoxes(t){this.collisionArrays=[];for(let e=0;e<this.symbolInstances.length;e++){const r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex));}}hasTextData(){return this.text.segments.get().length>0}hasIconData(){return this.icon.segments.get().length>0}hasDebugData(){return this.textCollisionBox&&this.iconCollisionBox}hasTextCollisionBoxData(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0}hasIconCollisionBoxData(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0}addIndicesForPlacedSymbol(t,e){const r=t.placedSymbolArray.get(e),n=r.vertexStartIndex+4*r.numGlyphs;for(let e=r.vertexStartIndex;e<n;e+=4)t.indexArray.emplaceBack(e,e+1,e+2),t.indexArray.emplaceBack(e+1,e+2,e+3);}getSortedSymbolIndexes(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;const e=Math.sin(t),r=Math.cos(t),n=[],i=[],a=[];for(let t=0;t<this.symbolInstances.length;++t){a.push(t);const s=this.symbolInstances.get(t);n.push(0|Math.round(e*s.anchorX+r*s.anchorY)),i.push(s.featureIndex);}return a.sort(((t,e)=>n[t]-n[e]||i[e]-i[t])),a}addToSortKeyRanges(t,e){const r=this.sortKeyRanges[this.sortKeyRanges.length-1];r&&r.sortKey===e?r.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1});}sortFeatures(t){if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(const t of this.symbolInstanceIndexes){const e=this.symbolInstances.get(t);this.featureSortOrder.push(e.featureIndex),[e.rightJustifiedTextSymbolIndex,e.centerJustifiedTextSymbolIndex,e.leftJustifiedTextSymbolIndex].forEach(((t,e,r)=>{t>=0&&r.indexOf(t)===e&&this.addIndicesForPlacedSymbol(this.text,t);})),e.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,e.verticalPlacedTextSymbolIndex),e.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.placedIconSymbolIndex),e.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.verticalPlacedIconSymbolIndex);}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}}}Mn("SymbolBucket",Du,{omit:["layers","collisionBoxArray","features","compareText"]}),Du.MAX_GLYPHS=65535,Du.addDynamicAttributes=Eu;const $u=new fi({"symbol-placement":new li(nt.layout_symbol["symbol-placement"]),"symbol-spacing":new li(nt.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new li(nt.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new ui(nt.layout_symbol["symbol-sort-key"]),"symbol-z-order":new li(nt.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new li(nt.layout_symbol["icon-allow-overlap"]),"icon-overlap":new li(nt.layout_symbol["icon-overlap"]),"icon-ignore-placement":new li(nt.layout_symbol["icon-ignore-placement"]),"icon-optional":new li(nt.layout_symbol["icon-optional"]),"icon-rotation-alignment":new li(nt.layout_symbol["icon-rotation-alignment"]),"icon-size":new ui(nt.layout_symbol["icon-size"]),"icon-text-fit":new li(nt.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new li(nt.layout_symbol["icon-text-fit-padding"]),"icon-image":new ui(nt.layout_symbol["icon-image"]),"icon-rotate":new ui(nt.layout_symbol["icon-rotate"]),"icon-padding":new ui(nt.layout_symbol["icon-padding"]),"icon-keep-upright":new li(nt.layout_symbol["icon-keep-upright"]),"icon-offset":new ui(nt.layout_symbol["icon-offset"]),"icon-anchor":new ui(nt.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new li(nt.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new li(nt.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new li(nt.layout_symbol["text-rotation-alignment"]),"text-field":new ui(nt.layout_symbol["text-field"]),"text-font":new ui(nt.layout_symbol["text-font"]),"text-size":new ui(nt.layout_symbol["text-size"]),"text-max-width":new ui(nt.layout_symbol["text-max-width"]),"text-line-height":new li(nt.layout_symbol["text-line-height"]),"text-letter-spacing":new ui(nt.layout_symbol["text-letter-spacing"]),"text-justify":new ui(nt.layout_symbol["text-justify"]),"text-radial-offset":new ui(nt.layout_symbol["text-radial-offset"]),"text-variable-anchor":new li(nt.layout_symbol["text-variable-anchor"]),"text-anchor":new ui(nt.layout_symbol["text-anchor"]),"text-max-angle":new li(nt.layout_symbol["text-max-angle"]),"text-writing-mode":new li(nt.layout_symbol["text-writing-mode"]),"text-rotate":new ui(nt.layout_symbol["text-rotate"]),"text-padding":new li(nt.layout_symbol["text-padding"]),"text-keep-upright":new li(nt.layout_symbol["text-keep-upright"]),"text-transform":new ui(nt.layout_symbol["text-transform"]),"text-offset":new ui(nt.layout_symbol["text-offset"]),"text-allow-overlap":new li(nt.layout_symbol["text-allow-overlap"]),"text-overlap":new li(nt.layout_symbol["text-overlap"]),"text-ignore-placement":new li(nt.layout_symbol["text-ignore-placement"]),"text-optional":new li(nt.layout_symbol["text-optional"])});var Ru={paint:new fi({"icon-opacity":new ui(nt.paint_symbol["icon-opacity"]),"icon-color":new ui(nt.paint_symbol["icon-color"]),"icon-halo-color":new ui(nt.paint_symbol["icon-halo-color"]),"icon-halo-width":new ui(nt.paint_symbol["icon-halo-width"]),"icon-halo-blur":new ui(nt.paint_symbol["icon-halo-blur"]),"icon-translate":new li(nt.paint_symbol["icon-translate"]),"icon-translate-anchor":new li(nt.paint_symbol["icon-translate-anchor"]),"text-opacity":new ui(nt.paint_symbol["text-opacity"]),"text-color":new ui(nt.paint_symbol["text-color"],{runtimeType:yt,getOverride:t=>t.textColor,hasOverride:t=>!!t.textColor}),"text-halo-color":new ui(nt.paint_symbol["text-halo-color"]),"text-halo-width":new ui(nt.paint_symbol["text-halo-width"]),"text-halo-blur":new ui(nt.paint_symbol["text-halo-blur"]),"text-translate":new li(nt.paint_symbol["text-translate"]),"text-translate-anchor":new li(nt.paint_symbol["text-translate-anchor"])}),layout:$u};class Ou{constructor(t){if(void 0===t.property.overrides)throw new Error("overrides must be provided to instantiate FormatSectionOverride class");this.type=t.property.overrides?t.property.overrides.runtimeType:ht,this.defaultValue=t;}evaluate(t){if(t.formattedSection){const e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default}eachChild(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);}outputDefined(){return !1}serialize(){return null}}Mn("FormatSectionOverride",Ou,{omit:["defaultValue"]});class Uu extends yi{constructor(t){super(t,Ru);}recalculate(t,e){if(super.recalculate(t,e),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]="map"===this.layout.get("text-rotation-alignment")?"map":"viewport"),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){const t=this.layout.get("text-writing-mode");if(t){const e=[];for(const r of t)e.indexOf(r)<0&&e.push(r);this.layout._values["text-writing-mode"]=e;}else this.layout._values["text-writing-mode"]=["horizontal"];}this._setPaintOverrides();}getValueAndResolveTokens(t,e,r,n){const i=this.layout.get(t).evaluate(e,{},r,n),a=this._unevaluatedLayout._values[t];return a.isDataDriven()||Er(a.value)||!i?i:function(t,e){return e.replace(/{([^{}]+)}/g,((e,r)=>r in t?String(t[r]):""))}(e.properties,i)}createBucket(t){return new Du(t)}queryRadius(){return 0}queryIntersectsFeature(){throw new Error("Should take a different path in FeatureIndex")}_setPaintOverrides(){for(const t of Ru.paint.overridableProperties){if(!Uu.hasPaintOverride(this.layout,t))continue;const e=this.paint.get(t),r=new Ou(e),n=new Vr(r,e.property.specification);let i=null;i="constant"===e.value.kind||"source"===e.value.kind?new Tr("source",n):new Lr("composite",n,e.value.zoomStops),this.paint._values[t]=new si(e.property,i,e.parameters);}}_handleOverridablePaintPropertyUpdate(t,e,r){return !(!this.layout||e.isDataDriven()||r.isDataDriven())&&Uu.hasPaintOverride(this.layout,t)}static hasPaintOverride(t,e){const r=t.get("text-field"),n=Ru.paint.properties[e];let i=!1;const a=t=>{for(const e of t)if(n.overrides&&n.overrides.hasOverride(e))return void(i=!0)};if("constant"===r.value.kind&&r.value.value instanceof Dt)a(r.value.value.sections);else if("source"===r.value.kind){const t=e=>{i||(e instanceof Nt&&qt(e.value)===vt?a(e.value.sections):e instanceof cr?a(e.sections):e.eachChild(t));},e=r.value;e._styleExpression&&t(e._styleExpression.expression);}return i}}function qu(t,e,r){let n="never";const i=t.get(e);return i?n=i:t.get(r)&&(n="always"),n}var ju={paint:new fi({"background-color":new li(nt.paint_background["background-color"]),"background-pattern":new hi(nt.paint_background["background-pattern"]),"background-opacity":new li(nt.paint_background["background-opacity"])})},Nu={paint:new fi({"raster-opacity":new li(nt.paint_raster["raster-opacity"]),"raster-hue-rotate":new li(nt.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new li(nt.paint_raster["raster-brightness-min"]),"raster-brightness-max":new li(nt.paint_raster["raster-brightness-max"]),"raster-saturation":new li(nt.paint_raster["raster-saturation"]),"raster-contrast":new li(nt.paint_raster["raster-contrast"]),"raster-resampling":new li(nt.paint_raster["raster-resampling"]),"raster-fade-duration":new li(nt.paint_raster["raster-fade-duration"])})};class Zu extends yi{constructor(t){super(t,{}),this.onAdd=t=>{this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);},this.onRemove=t=>{this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);},this.implementation=t;}is3D(){return "3d"===this.implementation.renderingMode}hasOffscreenPass(){return void 0!==this.implementation.prerender}recalculate(){}updateTransitions(){}hasTransition(){return !1}serialize(){throw new Error("Custom layers cannot be serialized")}}const Ku={circle:class extends yi{constructor(t){super(t,cs);}createBucket(t){return new Ja(t)}queryRadius(t){const e=t;return ss("circle-radius",this,e)+ss("circle-stroke-width",this,e)+os(this.paint.get("circle-translate"))}queryIntersectsFeature(t,e,r,n,i,a,s,o){const l=ls(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),a.angle,s),u=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),c="map"===this.paint.get("circle-pitch-alignment"),h=c?l:function(t,e){return t.map((t=>_s(t,e)))}(l,o),p=c?u*s:u;for(const t of n)for(const e of t){const t=c?e:_s(e,o);let r=p;const n=bs([],[e.x,e.y,0,1],o);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?r*=n[3]/a.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(r*=a.cameraToCenterDistance/n[3]),Ya(h,t,r))return !0}return !1}},heatmap:class extends yi{constructor(t){super(t,ks),this._updateColorRamp();}createBucket(t){return new As(t)}_handleSpecialPaintPropertyUpdate(t){"heatmap-color"===t&&this._updateColorRamp();}_updateColorRamp(){this.colorRamp=Cs({expression:this._transitionablePaint._values["heatmap-color"].value.expression,evaluationKey:"heatmapDensity",image:this.colorRamp}),this.colorRampTexture=null;}resize(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);}queryRadius(){return 0}queryIntersectsFeature(){return !1}hasOffscreenPass(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility}},hillshade:class extends yi{constructor(t){super(t,Ps);}hasOffscreenPass(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility}},fill:class extends yi{constructor(t){super(t,xo);}recalculate(t,e){super.recalculate(t,e);const r=this.paint._values["fill-outline-color"];"constant"===r.value.kind&&void 0===r.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);}createBucket(t){return new mo(t)}queryRadius(){return os(this.paint.get("fill-translate"))}queryIntersectsFeature(t,e,r,n,i,a,s){return Ha(ls(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),a.angle,s),n)}isTileClipped(){return !0}},"fill-extrusion":class extends yi{constructor(t){super(t,Oo);}createBucket(t){return new Do(t)}queryRadius(){return os(this.paint.get("fill-extrusion-translate"))}is3D(){return !0}queryIntersectsFeature(t,e,r,n,i,a,s,o){const l=ls(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),a.angle,s),u=this.paint.get("fill-extrusion-height").evaluate(e,r),c=this.paint.get("fill-extrusion-base").evaluate(e,r),h=function(t,e,r,n){const i=[];for(const r of t){const t=[r.x,r.y,0,1];bs(t,t,e),i.push(new S(t[0]/t[3],t[1]/t[3]));}return i}(l,o),p=function(t,e,r,n){const i=[],a=[],s=n[8]*e,o=n[9]*e,l=n[10]*e,u=n[11]*e,c=n[8]*r,h=n[9]*r,p=n[10]*r,f=n[11]*r;for(const e of t){const t=[],r=[];for(const i of e){const e=i.x,a=i.y,d=n[0]*e+n[4]*a+n[12],y=n[1]*e+n[5]*a+n[13],m=n[2]*e+n[6]*a+n[14],g=n[3]*e+n[7]*a+n[15],x=m+l,v=g+u,b=d+c,w=y+h,_=m+p,A=g+f,k=new S((d+s)/v,(y+o)/v);k.z=x/v,t.push(k);const I=new S(b/A,w/A);I.z=_/A,r.push(I);}i.push(t),a.push(r);}return [i,a]}(n,c,u,o);return function(t,e,r){let n=1/0;Ha(r,e)&&(n=qo(r,e[0]));for(let i=0;i<e.length;i++){const a=e[i],s=t[i];for(let t=0;t<a.length-1;t++){const e=a[t],i=[e,a[t+1],s[t+1],s[t],e];Xa(r,i)&&(n=Math.min(n,qo(r,i)));}}return n!==1/0&&n}(p[0],p[1],h)}},line:class extends yi{constructor(t){super(t,Wo),this.gradientVersion=0;}_handleSpecialPaintPropertyUpdate(t){"line-gradient"===t&&(this.stepInterpolant=this._transitionablePaint._values["line-gradient"].value.expression._styleExpression.expression instanceof ke,this.gradientVersion=(this.gradientVersion+1)%Number.MAX_SAFE_INTEGER);}gradientExpression(){return this._transitionablePaint._values["line-gradient"].value.expression}recalculate(t,e){super.recalculate(t,e),this.paint._values["line-floorwidth"]=Qo.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,t);}createBucket(t){return new Yo(t)}queryRadius(t){const e=t,r=tl(ss("line-width",this,e),ss("line-gap-width",this,e)),n=ss("line-offset",this,e);return r/2+Math.abs(n)+os(this.paint.get("line-translate"))}queryIntersectsFeature(t,e,r,n,i,a,s){const o=ls(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),a.angle,s),l=s/2*tl(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),u=this.paint.get("line-offset").evaluate(e,r);return u&&(n=function(t,e){const r=[];for(let n=0;n<t.length;n++){const i=t[n],a=[];for(let t=0;t<i.length;t++){const r=i[t-1],n=i[t],s=i[t+1],o=0===t?new S(0,0):n.sub(r)._unit()._perp(),l=t===i.length-1?new S(0,0):s.sub(n)._unit()._perp(),u=o._add(l)._unit(),c=u.x*l.x+u.y*l.y;0!==c&&u._mult(1/c),a.push(u._mult(e)._add(n));}r.push(a);}return r}(n,u*s)),function(t,e,r){for(let n=0;n<e.length;n++){const i=e[n];if(t.length>=3)for(let e=0;e<i.length;e++)if(is(t,i[e]))return !0;if(Wa(t,i,r))return !0}return !1}(o,n,l)}isTileClipped(){return !0}},symbol:Uu,background:class extends yi{constructor(t){super(t,ju);}},raster:class extends yi{constructor(t){super(t,Nu);}}};class Gu{constructor(t){this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=()=>{this._triggered=!1,this._callback();});}trigger(){this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((()=>{this._triggered=!1,this._callback();}),0));}remove(){delete this._channel,this._callback=()=>{};}}const Ju=6371008.8;class Xu{constructor(t,e){if(isNaN(t)||isNaN(e))throw new Error(`Invalid LngLat object: (${t}, ${e})`);if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}wrap(){return new Xu(s(this.lng,-180,180),this.lat)}toArray(){return [this.lng,this.lat]}toString(){return `LngLat(${this.lng}, ${this.lat})`}distanceTo(t){const e=Math.PI/180,r=this.lat*e,n=t.lat*e,i=Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos((t.lng-this.lng)*e);return Ju*Math.acos(Math.min(i,1))}toBounds(t=0){const e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat);return new Yu(new Xu(this.lng-r,this.lat-e),new Xu(this.lng+r,this.lat+e))}static convert(t){if(t instanceof Xu)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new Xu(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Xu(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}}class Yu{constructor(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));}setNorthEast(t){return this._ne=t instanceof Xu?new Xu(t.lng,t.lat):Xu.convert(t),this}setSouthWest(t){return this._sw=t instanceof Xu?new Xu(t.lng,t.lat):Xu.convert(t),this}extend(t){const e=this._sw,r=this._ne;let n,i;if(t instanceof Xu)n=t,i=t;else {if(!(t instanceof Yu))return Array.isArray(t)?4===t.length||t.every(Array.isArray)?this.extend(Yu.convert(t)):this.extend(Xu.convert(t)):this;if(n=t._sw,i=t._ne,!n||!i)return this}return e||r?(e.lng=Math.min(n.lng,e.lng),e.lat=Math.min(n.lat,e.lat),r.lng=Math.max(i.lng,r.lng),r.lat=Math.max(i.lat,r.lat)):(this._sw=new Xu(n.lng,n.lat),this._ne=new Xu(i.lng,i.lat)),this}getCenter(){return new Xu((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)}getSouthWest(){return this._sw}getNorthEast(){return this._ne}getNorthWest(){return new Xu(this.getWest(),this.getNorth())}getSouthEast(){return new Xu(this.getEast(),this.getSouth())}getWest(){return this._sw.lng}getSouth(){return this._sw.lat}getEast(){return this._ne.lng}getNorth(){return this._ne.lat}toArray(){return [this._sw.toArray(),this._ne.toArray()]}toString(){return `LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`}isEmpty(){return !(this._sw&&this._ne)}contains(t){const{lng:e,lat:r}=Xu.convert(t);let n=this._sw.lng<=e&&e<=this._ne.lng;return this._sw.lng>this._ne.lng&&(n=this._sw.lng>=e&&e>=this._ne.lng),this._sw.lat<=r&&r<=this._ne.lat&&n}static convert(t){return t instanceof Yu?t:t?new Yu(t):t}}const Hu=2*Math.PI*Ju;function Wu(t){return Hu*Math.cos(t*Math.PI/180)}function Qu(t){return (180+t)/360}function tc(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function ec(t,e){return t/Wu(e)}function rc(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}class nc{constructor(t,e,r=0){this.x=+t,this.y=+e,this.z=+r;}static fromLngLat(t,e=0){const r=Xu.convert(t);return new nc(Qu(r.lng),tc(r.lat),ec(e,r.lat))}toLngLat(){return new Xu(360*this.x-180,rc(this.y))}toAltitude(){return this.z*Wu(rc(this.y))}meterInMercatorCoordinateUnits(){return 1/Hu*(t=rc(this.y),1/Math.cos(t*Math.PI/180));var t;}}function ic(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}class ac{constructor(t,e,r){if(t<0||t>25||r<0||r>=Math.pow(2,t)||e<0||e>=Math.pow(2,t))throw new Error(`x=${e}, y=${r}, z=${t} outside of bounds. 0<=x<${Math.pow(2,t)}, 0<=y<${Math.pow(2,t)} 0<=z<=25 `);this.z=t,this.x=e,this.y=r,this.key=lc(0,t,t,e,r);}equals(t){return this.z===t.z&&this.x===t.x&&this.y===t.y}url(t,e,r){const n=(a=this.y,s=this.z,o=ic(256*(i=this.x),256*(a=Math.pow(2,s)-a-1),s),l=ic(256*(i+1),256*(a+1),s),o[0]+","+o[1]+","+l[0]+","+l[1]);var i,a,s,o,l;const u=function(t,e,r){let n,i="";for(let a=t;a>0;a--)n=1<<a-1,i+=(e&n?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace(/{prefix}/g,(this.x%16).toString(16)+(this.y%16).toString(16)).replace(/{z}/g,String(this.z)).replace(/{x}/g,String(this.x)).replace(/{y}/g,String("tms"===r?Math.pow(2,this.z)-this.y-1:this.y)).replace(/{ratio}/g,e>1?"@2x":"").replace(/{quadkey}/g,u).replace(/{bbox-epsg-3857}/g,n)}isChildOf(t){const e=this.z-t.z;return e>0&&t.x===this.x>>e&&t.y===this.y>>e}getTilePoint(t){const e=Math.pow(2,this.z);return new S((t.x*e-this.x)*qa,(t.y*e-this.y)*qa)}toString(){return `${this.z}/${this.x}/${this.y}`}}class sc{constructor(t,e){this.wrap=t,this.canonical=e,this.key=lc(t,e.z,e.z,e.x,e.y);}}class oc{constructor(t,e,r,n,i){if(t<r)throw new Error(`overscaledZ should be >= z; overscaledZ = ${t}; z = ${r}`);this.overscaledZ=t,this.wrap=e,this.canonical=new ac(r,+n,+i),this.key=lc(e,t,r,n,i);}clone(){return new oc(this.overscaledZ,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)}equals(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)}scaledTo(t){if(t>this.overscaledZ)throw new Error(`targetZ > this.overscaledZ; targetZ = ${t}; overscaledZ = ${this.overscaledZ}`);const e=this.canonical.z-t;return t>this.canonical.z?new oc(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new oc(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)}calculateScaledKey(t,e){if(t>this.overscaledZ)throw new Error(`targetZ > this.overscaledZ; targetZ = ${t}; overscaledZ = ${this.overscaledZ}`);const r=this.canonical.z-t;return t>this.canonical.z?lc(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y):lc(this.wrap*+e,t,t,this.canonical.x>>r,this.canonical.y>>r)}isChildOf(t){if(t.wrap!==this.wrap)return !1;const e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e}children(t){if(this.overscaledZ>=t)return [new oc(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];const e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new oc(e,this.wrap,e,r,n),new oc(e,this.wrap,e,r+1,n),new oc(e,this.wrap,e,r,n+1),new oc(e,this.wrap,e,r+1,n+1)]}isLessThan(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))}wrapped(){return new oc(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)}unwrapTo(t){return new oc(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)}overscaleFactor(){return Math.pow(2,this.overscaledZ-this.canonical.z)}toUnwrapped(){return new sc(this.wrap,this.canonical)}toString(){return `${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`}getTilePoint(t){return this.canonical.getTilePoint(new nc(t.x-this.wrap,t.y))}}function lc(t,e,r,n,i){(t*=2)<0&&(t=-1*t-1);const a=1<<r;return (a*a*t+a*i+n).toString(36)+r.toString(36)+e.toString(36)}Mn("CanonicalTileID",ac),Mn("OverscaledTileID",oc,{omit:["posMatrix"]});class uc{constructor(t,e,r){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&"mapbox"!==r&&"terrarium"!==r)return void d(`"${r}" is not a valid encoding type. Valid types include "mapbox" and "terrarium".`);this.stride=e.height;const n=this.dim=e.height-2;this.data=new Uint32Array(e.data.buffer),this.encoding=r||"mapbox";for(let t=0;t<n;t++)this.data[this._idx(-1,t)]=this.data[this._idx(0,t)],this.data[this._idx(n,t)]=this.data[this._idx(n-1,t)],this.data[this._idx(t,-1)]=this.data[this._idx(t,0)],this.data[this._idx(t,n)]=this.data[this._idx(t,n-1)];this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(n,-1)]=this.data[this._idx(n-1,0)],this.data[this._idx(-1,n)]=this.data[this._idx(0,n-1)],this.data[this._idx(n,n)]=this.data[this._idx(n-1,n-1)],this.min=Number.MAX_SAFE_INTEGER,this.max=Number.MIN_SAFE_INTEGER;for(let t=0;t<n;t++)for(let e=0;e<n;e++){const r=this.get(t,e);r>this.max&&(this.max=r),r<this.min&&(this.min=r);}}get(t,e){const r=new Uint8Array(this.data.buffer),n=4*this._idx(t,e);return ("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(r[n],r[n+1],r[n+2])}getUnpackVector(){return "terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]}_idx(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)}_unpackMapbox(t,e,r){return (256*t*256+256*e+r)/10-1e4}_unpackTerrarium(t,e,r){return 256*t+e+r/256-32768}getPixels(){return new Bs({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))}backfillBorder(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");let n=e*this.dim,i=e*this.dim+this.dim,a=r*this.dim,s=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:a=s-1;break;case 1:s=a+1;}const o=-e*this.dim,l=-r*this.dim;for(let e=a;e<s;e++)for(let r=n;r<i;r++)this.data[this._idx(r,e)]=t.data[this._idx(r+o,e+l)];}}Mn("DEMData",uc);class cc{constructor(t){this._stringToNumber={},this._numberToString=[];for(let e=0;e<t.length;e++){const r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}}encode(t){return this._stringToNumber[t]}decode(t){if(t>=this._numberToString.length)throw new Error(`Out of bounds. Index requested n=${t} can't be >= this._numberToString.length ${this._numberToString.length}`);return this._numberToString[t]}}class hc{constructor(t,e,r,n,i){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,this.id=i;}get geometry(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry}set geometry(t){this._geometry=t;}toJSON(){const t={geometry:this.geometry};for(const e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t}}class pc{constructor(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new Sn(qa,16,0),this.grid3D=new Sn(qa,16,0),this.featureIndexArray=new Wi,this.promoteId=e;}insert(t,e,r,n,i,a){const s=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i);const o=a?this.grid3D:this.grid;for(let t=0;t<e.length;t++){const r=e[t],n=[1/0,1/0,-1/0,-1/0];for(let t=0;t<r.length;t++){const e=r[t];n[0]=Math.min(n[0],e.x),n[1]=Math.min(n[1],e.y),n[2]=Math.max(n[2],e.x),n[3]=Math.max(n[3],e.y);}n[0]<qa&&n[1]<qa&&n[2]>=0&&n[3]>=0&&o.insert(s,n[0],n[1],n[2],n[3]);}}loadVTLayers(){return this.vtLayers||(this.vtLayers=new _o.VectorTile(new ul(this.rawTileData)).layers,this.sourceLayerCoder=new cc(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers}query(t,e,r,n){this.loadVTLayers();const i=t.params||{},a=qa/t.tileSize/t.scale,s=Jr(i.filter),o=t.queryGeometry,l=t.queryPadding*a,u=dc(o),c=this.grid.query(u.minX-l,u.minY-l,u.maxX+l,u.maxY+l),h=dc(t.cameraQueryGeometry),p=this.grid3D.query(h.minX-l,h.minY-l,h.maxX+l,h.maxY+l,((e,r,n,i)=>function(t,e,r,n,i){for(const a of t)if(e<=a.x&&r<=a.y&&n>=a.x&&i>=a.y)return !0;const a=[new S(e,r),new S(e,i),new S(n,i),new S(n,r)];if(t.length>2)for(const e of a)if(is(t,e))return !0;for(let e=0;e<t.length-1;e++)if(as(t[e],t[e+1],a))return !0;return !1}(t.cameraQueryGeometry,e-l,r-l,n+l,i+l)));for(const t of p)c.push(t);c.sort(yc);const f={};let d;for(let l=0;l<c.length;l++){const u=c[l];if(u===d)continue;d=u;const h=this.featureIndexArray.get(u);let p=null;this.loadMatchingFeature(f,h.bucketIndex,h.sourceLayerIndex,h.featureIndex,s,i.layers,i.availableImages,e,r,n,((e,r,n)=>(p||(p=Za(e)),r.queryIntersectsFeature(o,e,n,p,this.z,t.transform,a,t.pixelPosMatrix))));}return f}loadMatchingFeature(t,e,r,n,i,a,s,l,u,c,h){const p=this.bucketLayerIDs[e];if(a&&!function(t,e){for(let r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(a,p))return;const f=this.sourceLayerCoder.decode(r),d=this.vtLayers[f].feature(n);if(i.needGeometry){const t=Ka(d,!0);if(!i.filter(new Qn(this.tileID.overscaledZ),t,this.tileID.canonical))return}else if(!i.filter(new Qn(this.tileID.overscaledZ),d))return;const y=this.getId(d,f);for(let e=0;e<p.length;e++){const r=p[e];if(a&&a.indexOf(r)<0)continue;const i=l[r];if(!i)continue;let f={};y&&c&&(f=c.getState(i.sourceLayer||"_geojsonTileLayer",y));const m=o({},u[r]);m.paint=fc(m.paint,i.paint,d,f,s),m.layout=fc(m.layout,i.layout,d,f,s);const g=!h||h(d,i,f);if(!g)continue;const x=new hc(d,this.z,this.x,this.y,y);x.layer=m;let v=t[r];void 0===v&&(v=t[r]=[]),v.push({featureIndex:n,feature:x,intersectionZ:g});}}lookupSymbolFeatures(t,e,r,n,i,a,s,o){const l={};this.loadVTLayers();const u=Jr(i);for(const i of t)this.loadMatchingFeature(l,r,n,i,u,a,s,o,e);return l}hasLayer(t){for(const e of this.bucketLayerIDs)for(const r of e)if(t===r)return !0;return !1}getId(t,e){let r=t.id;return this.promoteId&&(r=t.properties["string"==typeof this.promoteId?this.promoteId:this.promoteId[e]],"boolean"==typeof r&&(r=Number(r))),r}}function fc(t,e,r,n,i){return c(t,((t,a)=>{const s=e instanceof oi?e.get(a):null;return s&&s.evaluate?s.evaluate(r,n,i):s}))}function dc(t){let e=1/0,r=1/0,n=-1/0,i=-1/0;for(const a of t)e=Math.min(e,a.x),r=Math.min(r,a.y),n=Math.max(n,a.x),i=Math.max(i,a.y);return {minX:e,minY:r,maxX:n,maxY:i}}function yc(t,e){return e-t}var mc;Mn("FeatureIndex",pc,{omit:["rawTileData","sourceLayerCoder"]}),t.PerformanceMarkers=void 0,(mc=t.PerformanceMarkers||(t.PerformanceMarkers={})).create="create",mc.load="load",mc.fullLoad="fullLoad";let gc=null,xc=[];const vc=1e3/30,bc={mark(t){performance.mark(t);},frame(t){const e=t;null!=gc&&xc.push(e-gc),gc=e;},clearMetrics(){gc=null,xc=[],performance.clearMeasures("loadTime"),performance.clearMeasures("fullLoadTime");for(const e in t.PerformanceMarkers)performance.clearMarks(t.PerformanceMarkers[e]);},getPerformanceMetrics(){performance.measure("loadTime",t.PerformanceMarkers.create,t.PerformanceMarkers.load),performance.measure("fullLoadTime",t.PerformanceMarkers.create,t.PerformanceMarkers.fullLoad);const e=performance.getEntriesByName("loadTime")[0].duration,r=performance.getEntriesByName("fullLoadTime")[0].duration,n=xc.length,i=1/(xc.reduce(((t,e)=>t+e),0)/n/1e3),a=xc.filter((t=>t>vc)).reduce(((t,e)=>t+(e-vc)/vc),0);return {loadTime:e,fullLoadTime:r,fps:i,percentDroppedFrames:a/(n+a)*100}}};t.AJAXError=q,t.ARRAY_TYPE=ps,t.Actor=class{constructor(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},u(["receive","process"],this),this.invoker=new Gu(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=g()?t:window;}send(t,e,r,n,i=!1){const a=Math.round(1e18*Math.random()).toString(36).substring(0,10);r&&(this.callbacks[a]=r);const s=_(this.globalScope)?void 0:[];return this.target.postMessage({id:a,type:t,hasCallback:!!r,targetMapId:n,mustQueue:i,sourceMapId:this.mapId,data:Bn(e,s)},s),{cancel:()=>{r&&delete this.callbacks[a],this.target.postMessage({id:a,type:"<cancel>",targetMapId:n,sourceMapId:this.mapId});}}}receive(t){const e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r];const t=this.cancelCallbacks[r];delete this.cancelCallbacks[r],t&&t();}else g()||e.mustQueue?(this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger()):this.processTask(r,e);}process(){if(!this.taskQueue.length)return;const t=this.taskQueue.shift(),e=this.tasks[t];delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e);}processTask(t,e){if("<response>"===e.type){const r=this.callbacks[t];delete this.callbacks[t],r&&(e.error?r(Cn(e.error)):r(null,Cn(e.data)));}else {let r=!1;const n=_(this.globalScope)?void 0:[],i=e.hasCallback?(e,i)=>{r=!0,delete this.cancelCallbacks[t],this.target.postMessage({id:t,type:"<response>",sourceMapId:this.mapId,error:e?Bn(e):null,data:Bn(i,n)},n);}:t=>{r=!0;};let a=null;const s=Cn(e.data);if(this.parent[e.type])a=this.parent[e.type](e.sourceMapId,s,i);else if(this.parent.getWorkerSource){const t=e.type.split(".");a=this.parent.getWorkerSource(e.sourceMapId,t[0],s.source)[t[1]](s,i);}else i(new Error(`Could not find function ${e.type}`));!r&&a&&a.cancel&&(this.cancelCallbacks[t]=a.cancel);}}remove(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1);}},t.AlphaImage=zs,t.CanonicalTileID=ac,t.CollisionBoxArray=Ni,t.CollisionCircleLayoutArray=class extends Vi{},t.Color=Ft,t.DEMData=uc,t.DataConstantProperty=li,t.DictionaryCoder=cc,t.EXTENT=qa,t.ErrorEvent=et,t.EvaluationParameters=Qn,t.Event=tt,t.Evented=rt,t.FeatureIndex=pc,t.FillBucket=mo,t.FillExtrusionBucket=Do,t.GeoJSONFeature=hc,t.ImageAtlas=Dl,t.ImagePosition=Ll,t.LineBucket=Yo,t.LineStripIndexArray=class extends Ui{},t.LngLat=Xu,t.LngLatBounds=Yu,t.MercatorCoordinate=nc,t.ONE_EM=ll,t.OverscaledTileID=oc,t.PerformanceUtils=bc,t.PosArray=Qi,t.Properties=fi,t.QuadTriangleArray=class extends Fi{},t.RGBAImage=Bs,t.RasterBoundsArray=class extends _i{},t.RequestPerformance=class{constructor(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},performance.mark(this._marks.start);}finish(){performance.mark(this._marks.end);let t=performance.getEntriesByName(this._marks.measure);return 0===t.length&&(performance.measure(this._marks.measure,this._marks.start,this._marks.end),t=performance.getEntriesByName(this._marks.measure),performance.clearMarks(this._marks.start),performance.clearMarks(this._marks.end),performance.clearMeasures(this._marks.measure)),t}},t.ResourceType=U,t.SegmentVector=ya,t.SymbolBucket=Du,t.Transitionable=ri,t.TriangleIndexArray=ha,t.Uniform1f=za,t.Uniform1i=class extends Ma{constructor(t,e){super(t,e),this.current=0;}set(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t));}},t.Uniform2f=class extends Ma{constructor(t,e){super(t,e),this.current=[0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]));}},t.Uniform3f=class extends Ma{constructor(t,e){super(t,e),this.current=[0,0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]));}},t.Uniform4f=Ba,t.UniformColor=Ca,t.UniformMatrix4f=class extends Ma{constructor(t,e){super(t,e),this.current=Pa;}set(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t);for(let e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t);break}}},t.UnwrappedTileID=sc,t.ValidationError=it,t.ZoomHistory=Pn,t.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},t.addDynamicAttributes=Eu,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[]);let n=t.length;const i=new Array(t.length);let a=null;t.forEach(((t,s)=>{e(t,((t,e)=>{t&&(a=t),i[s]=e,0==--n&&r(a,i);}));}));},t.bezier=n,t.bindAll=u,t.cacheEntryPossiblyAdded=function(t){F++,F>V&&(t.getActor().send("enforceCacheSizeLimit",P),F=0);},t.clamp=a,t.clearTileCache=function(t){const e=caches.delete(z);t&&e.catch(t).then((()=>t()));},t.clipLine=cu,t.clone=function(t){var e=new ps(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=p,t.clone$2=function(t){var e=new ps(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},t.collisionCircleLayout=al,t.config=M,t.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.create=function(){var t=new ps(16);return ps!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=fs,t.createExpression=Fr,t.createFilter=Jr,t.createLayout=vi,t.createStyleLayer=function(t){return "custom"===t.type?new Zu(t):new Ku[t.type](t)},t.cross=function(t,e,r){var n=e[0],i=e[1],a=e[2],s=r[0],o=r[1],l=r[2];return t[0]=i*l-a*o,t[1]=a*s-n*l,t[2]=n*o-i*s,t},t.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},t.dot$1=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},t.ease=i,t.emitValidationErrors=kn,t.enforceCacheSizeLimit=function(t){E(),B&&B.then((e=>{e.keys().then((r=>{for(let n=0;n<r.length-t;n++)e.delete(r[n]);}));}));},t.equals=function(t,e){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=t[9],p=t[10],f=t[11],d=t[12],y=t[13],m=t[14],g=t[15],x=e[0],v=e[1],b=e[2],w=e[3],_=e[4],A=e[5],k=e[6],S=e[7],I=e[8],M=e[9],z=e[10],B=e[11],C=e[12],P=e[13],V=e[14],E=e[15];return Math.abs(r-x)<=hs*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(n-v)<=hs*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(i-b)<=hs*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(a-w)<=hs*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(s-_)<=hs*Math.max(1,Math.abs(s),Math.abs(_))&&Math.abs(o-A)<=hs*Math.max(1,Math.abs(o),Math.abs(A))&&Math.abs(l-k)<=hs*Math.max(1,Math.abs(l),Math.abs(k))&&Math.abs(u-S)<=hs*Math.max(1,Math.abs(u),Math.abs(S))&&Math.abs(c-I)<=hs*Math.max(1,Math.abs(c),Math.abs(I))&&Math.abs(h-M)<=hs*Math.max(1,Math.abs(h),Math.abs(M))&&Math.abs(p-z)<=hs*Math.max(1,Math.abs(p),Math.abs(z))&&Math.abs(f-B)<=hs*Math.max(1,Math.abs(f),Math.abs(B))&&Math.abs(d-C)<=hs*Math.max(1,Math.abs(d),Math.abs(C))&&Math.abs(y-P)<=hs*Math.max(1,Math.abs(y),Math.abs(P))&&Math.abs(m-V)<=hs*Math.max(1,Math.abs(m),Math.abs(V))&&Math.abs(g-E)<=hs*Math.max(1,Math.abs(g),Math.abs(E))},t.evaluateSizeForFeature=function(t,{uSize:e,uSizeT:r},{lowerSize:n,upperSize:i}){return "source"===t.kind?n/tu:"composite"===t.kind?Se(n/tu,i/tu,r):e},t.evaluateSizeForZoom=function(t,e){let r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){const{interpolationType:i,minZoom:s,maxZoom:o}=t,l=i?a(Ne.interpolationFactor(i,e,s,o),0,1):0;"camera"===t.kind?n=Se(t.minSize,t.maxSize,l):r=l;}return {uSizeT:r,uSize:n}},t.evaluateVariableOffset=Au,t.evented=Xn,t.exported=k,t.exported$1=T,t.extend=o,t.filterObject=h,t.fromRotation=function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.getAnchorAlignment=Yl,t.getAnchorJustification=ku,t.getArrayBuffer=K,t.getImage=H,t.getJSON=function(t,e){return Z(o(t,{type:"json"}),e)},t.getOverlapMode=qu,t.getRTLTextPluginStatus=Yn,t.getReferrer=j,t.getVideo=function(t,e){const r=window.document.createElement("video");r.muted=!0,r.onloadstart=function(){e(null,r);};for(let e=0;e<t.length;e++){const n=window.document.createElement("source");G(t[e])||(r.crossOrigin="Anonymous"),n.src=t[e],r.appendChild(n);}return {cancel:()=>{}}},t.identity=ds,t.invert=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],p=e[10],f=e[11],d=e[12],y=e[13],m=e[14],g=e[15],x=r*o-n*s,v=r*l-i*s,b=r*u-a*s,w=n*l-i*o,_=n*u-a*o,A=i*u-a*l,k=c*y-h*d,S=c*m-p*d,I=c*g-f*d,M=h*m-p*y,z=h*g-f*y,B=p*g-f*m,C=x*B-v*z+b*M+w*I-_*S+A*k;return C?(t[0]=(o*B-l*z+u*M)*(C=1/C),t[1]=(i*z-n*B-a*M)*C,t[2]=(y*A-m*_+g*w)*C,t[3]=(p*_-h*A-f*w)*C,t[4]=(l*I-s*B-u*S)*C,t[5]=(r*B-i*I+a*S)*C,t[6]=(m*b-d*A-g*v)*C,t[7]=(c*A-p*b+f*v)*C,t[8]=(s*z-o*I+u*k)*C,t[9]=(n*I-r*z-a*k)*C,t[10]=(d*_-y*b+g*x)*C,t[11]=(h*b-c*_-f*x)*C,t[12]=(o*S-s*M-l*k)*C,t[13]=(r*M-n*S+i*k)*C,t[14]=(y*v-d*w-m*x)*C,t[15]=(c*w-h*v+p*x)*C,t):null},t.isImageBitmap=A,t.isSafari=_,t.isWorker=g,t.keysDifference=function(t,e){const r=[];for(const n in t)n in e||r.push(n);return r},t.lazyLoadRTLTextPlugin=function(){Wn.isLoading()||Wn.isLoaded()||"deferred"!==Yn()||Hn();},t.makeRequest=Z,t.mapObject=c,t.mercatorXfromLng=Qu,t.mercatorYfromLat=tc,t.mercatorZfromAltitude=ec,t.mul=gs,t.mul$1=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t},t.multiply=ys,t.nextPowerOfTwo=function(t){return t<=1?1:Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},t.normalize=function(t,e){var r=e[0],n=e[1],i=e[2],a=r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a,t},t.number=Se,t.ortho=function(t,e,r,n,i,a,s){var o=1/(e-r),l=1/(n-i),u=1/(a-s);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*o,t[13]=(i+n)*l,t[14]=(s+a)*u,t[15]=1,t},t.parseCacheControl=x,t.parseGlyphPbf=function(t){return new ul(t).readFields(Vl,[])},t.pbf=ul,t.performSymbolLayout=function(e){e.bucket.createArrays(),e.bucket.tilePixelRatio=qa/(512*e.bucket.overscaling),e.bucket.compareText={},e.bucket.iconsNeedLinear=!1;const r=e.bucket.layers[0].layout,n=e.bucket.layers[0]._unevaluatedLayout._values,i={layoutIconSize:n["icon-size"].possiblyEvaluate(new Qn(e.bucket.zoom+1),e.canonical),layoutTextSize:n["text-size"].possiblyEvaluate(new Qn(e.bucket.zoom+1),e.canonical),textMaxSize:n["text-size"].possiblyEvaluate(new Qn(18))};if("composite"===e.bucket.textSizeData.kind){const{minZoom:t,maxZoom:r}=e.bucket.textSizeData;i.compositeTextSizes=[n["text-size"].possiblyEvaluate(new Qn(t),e.canonical),n["text-size"].possiblyEvaluate(new Qn(r),e.canonical)];}if("composite"===e.bucket.iconSizeData.kind){const{minZoom:t,maxZoom:r}=e.bucket.iconSizeData;i.compositeIconSizes=[n["icon-size"].possiblyEvaluate(new Qn(t),e.canonical),n["icon-size"].possiblyEvaluate(new Qn(r),e.canonical)];}const a=r.get("text-line-height")*ll,s="viewport"!==r.get("text-rotation-alignment")&&"point"!==r.get("symbol-placement"),o=r.get("text-keep-upright"),l=r.get("text-size");for(const n of e.bucket.features){const u=r.get("text-font").evaluate(n,{},e.canonical).join(","),c=l.evaluate(n,{},e.canonical),h=i.layoutTextSize.evaluate(n,{},e.canonical),p=i.layoutIconSize.evaluate(n,{},e.canonical),f={horizontal:{},vertical:void 0},y=n.text;let m,g=[0,0];if(y){const i=y.toString(),l=r.get("text-letter-spacing").evaluate(n,{},e.canonical)*ll,p=Fn(i)?l:0,d=r.get("text-anchor").evaluate(n,{},e.canonical),m=r.get("text-variable-anchor");if(!m){const t=r.get("text-radial-offset").evaluate(n,{},e.canonical);g=t?Au(d,[t*ll,_u]):r.get("text-offset").evaluate(n,{},e.canonical).map((t=>t*ll));}let x=s?"center":r.get("text-justify").evaluate(n,{},e.canonical);const v=r.get("symbol-placement"),b="point"===v?r.get("text-max-width").evaluate(n,{},e.canonical)*ll:0,w=()=>{e.bucket.allowVerticalPlacement&&En(i)&&(f.vertical=Ul(y,e.glyphMap,e.glyphPositions,e.imagePositions,u,b,a,d,"left",p,g,t.WritingMode.vertical,!0,v,h,c));};if(!s&&m){const r="auto"===x?m.map((t=>ku(t))):[x];let n=!1;for(let i=0;i<r.length;i++){const s=r[i];if(!f.horizontal[s])if(n)f.horizontal[s]=f.horizontal[0];else {const r=Ul(y,e.glyphMap,e.glyphPositions,e.imagePositions,u,b,a,"center",s,p,g,t.WritingMode.horizontal,!1,v,h,c);r&&(f.horizontal[s]=r,n=1===r.positionedLines.length);}}w();}else {"auto"===x&&(x=ku(d));const r=Ul(y,e.glyphMap,e.glyphPositions,e.imagePositions,u,b,a,d,x,p,g,t.WritingMode.horizontal,!1,v,h,c);r&&(f.horizontal[x]=r),w(),En(i)&&s&&o&&(f.vertical=Ul(y,e.glyphMap,e.glyphPositions,e.imagePositions,u,b,a,d,x,p,g,t.WritingMode.vertical,!1,v,h,c));}}let x=!1;if(n.icon&&n.icon.name){const t=e.imageMap[n.icon.name];t&&(m=Wl(e.imagePositions[n.icon.name],r.get("icon-offset").evaluate(n,{},e.canonical),r.get("icon-anchor").evaluate(n,{},e.canonical)),x=!!t.sdf,void 0===e.bucket.sdfIcons?e.bucket.sdfIcons=x:e.bucket.sdfIcons!==x&&d("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(t.pixelRatio!==e.bucket.pixelRatio||0!==r.get("icon-rotate").constantOr(1))&&(e.bucket.iconsNeedLinear=!0));}const v=zu(f.horizontal)||f.vertical;e.bucket.iconsInText=!!v&&v.iconsInText,(v||m)&&Su(e.bucket,n,f,m,e.imageMap,i,h,p,g,x,e.canonical);}e.showCollisionBoxes&&e.bucket.generateCollisionDebugBuffers();},t.perspective=function(t,e,r,n,i){var a,s=1/Math.tan(e/2);return t[0]=s/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(t[10]=(i+n)*(a=1/(n-i)),t[14]=2*i*n*a):(t[10]=-1,t[14]=-2*n),t},t.pick=function(t,e){const r={};for(let n=0;n<e.length;n++){const i=e[n];i in t&&(r[i]=t[i]);}return r},t.plugin=Wn,t.pointGeometry=S,t.polygonIntersectsPolygon=Xa,t.potpack=Tl,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=Mn,t.registerForPluginStateChange=function(t){return t({pluginStatus:Zn,pluginURL:Kn}),Xn.on("pluginStateChange",t),t},t.renderColorRamp=Cs,t.rotateX=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],s=e[5],o=e[6],l=e[7],u=e[8],c=e[9],h=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+u*n,t[5]=s*i+c*n,t[6]=o*i+h*n,t[7]=l*i+p*n,t[8]=u*i-a*n,t[9]=c*i-s*n,t[10]=h*i-o*n,t[11]=p*i-l*n,t},t.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+u*n,t[1]=s*i+c*n,t[2]=o*i+h*n,t[3]=l*i+p*n,t[4]=u*i-a*n,t[5]=c*i-s*n,t[6]=h*i-o*n,t[7]=p*i-l*n,t},t.scale=function(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.scale$1=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t},t.setCacheLimits=function(t,e){P=t,V=e;},t.setRTLTextPlugin=function(t,e,r=!1){if(Zn===Un||Zn===qn||Zn===jn)throw new Error("setRTLTextPlugin cannot be called multiple times.");Kn=k.resolveURL(t),Zn=Un,Nn=e,Jn(),r||Hn();},t.spec=nt,t.sphericalToCartesian=function([t,e,r]){return e+=90,e*=Math.PI/180,r*=Math.PI/180,{x:t*Math.cos(e)*Math.sin(r),y:t*Math.sin(e)*Math.sin(r),z:t*Math.cos(r)}},t.sqrLen=function(t){var e=t[0],r=t[1];return e*e+r*r},t.sub=function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t},t.toEvaluationFeature=Ka,t.transformMat3=function(t,e,r){var n=e[0],i=e[1],a=e[2];return t[0]=n*r[0]+i*r[3]+a*r[6],t[1]=n*r[1]+i*r[4]+a*r[7],t[2]=n*r[2]+i*r[5]+a*r[8],t},t.transformMat4=bs,t.transformMat4$1=function(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[4]*i+r[12],t[1]=r[1]*n+r[5]*i+r[13],t},t.translate=function(t,e,r){var n,i,a,s,o,l,u,c,h,p,f,d,y=r[0],m=r[1],g=r[2];return e===t?(t[12]=e[0]*y+e[4]*m+e[8]*g+e[12],t[13]=e[1]*y+e[5]*m+e[9]*g+e[13],t[14]=e[2]*y+e[6]*m+e[10]*g+e[14],t[15]=e[3]*y+e[7]*m+e[11]*g+e[15]):(i=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],f=e[10],d=e[11],t[0]=n=e[0],t[1]=i,t[2]=a,t[3]=s,t[4]=o,t[5]=l,t[6]=u,t[7]=c,t[8]=h,t[9]=p,t[10]=f,t[11]=d,t[12]=n*y+o*m+h*g+e[12],t[13]=i*y+l*m+p*g+e[13],t[14]=a*y+u*m+f*g+e[14],t[15]=s*y+c*m+d*g+e[15]),t},t.triggerPluginCompletionEvent=Gn,t.unicodeBlockLookup=Vn,t.uniqueId=function(){return l++},t.validateCustomStyleLayer=function(t){const e=[],r=t.id;return void 0===r&&e.push({message:`layers.${r}: missing required property "id"`}),void 0===t.render&&e.push({message:`layers.${r}: missing required method "render"`}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:`layers.${r}: property "renderingMode" must be either "2d" or "3d"`}),e},t.validateLight=wn,t.validateStyle=bn,t.vectorTile=_o,t.warnOnce=d,t.wrap=s;}));

		define(["./shared"],(function(e){function t(e){const o=typeof e;if("number"===o||"boolean"===o||"string"===o||null==e)return JSON.stringify(e);if(Array.isArray(e)){let o="[";for(const i of e)o+=`${t(i)},`;return `${o}]`}const i=Object.keys(e).sort();let r="{";for(let o=0;o<i.length;o++)r+=`${JSON.stringify(i[o])}:${t(e[i[o]])},`;return `${r}}`}function o(o){let i="";for(const r of e.refProperties)i+=`/${t(o[r])}`;return i}class i{constructor(e){this.keyCache={},e&&this.replace(e);}replace(e){this._layerConfigs={},this._layers={},this.update(e,[]);}update(t,i){for(const o of t){this._layerConfigs[o.id]=o;const t=this._layers[o.id]=e.createStyleLayer(o);t._featureFilter=e.createFilter(t.filter),this.keyCache[o.id]&&delete this.keyCache[o.id];}for(const e of i)delete this.keyCache[e],delete this._layerConfigs[e],delete this._layers[e];this.familiesBySource={};const r=function(e,t){const i={};for(let r=0;r<e.length;r++){const n=t&&t[e[r].id]||o(e[r]);t&&(t[e[r].id]=n);let s=i[n];s||(s=i[n]=[]),s.push(e[r]);}const r=[];for(const e in i)r.push(i[e]);return r}(Object.values(this._layerConfigs),this.keyCache);for(const e of r){const t=e.map((e=>this._layers[e.id])),o=t[0];if("none"===o.visibility)continue;const i=o.source||"";let r=this.familiesBySource[i];r||(r=this.familiesBySource[i]={});const n=o.sourceLayer||"_geojsonTileLayer";let s=r[n];s||(s=r[n]=[]),s.push(t);}}}class r{constructor(t){const o={},i=[];for(const e in t){const r=t[e],n=o[e]={};for(const e in r){const t=r[+e];if(!t||0===t.bitmap.width||0===t.bitmap.height)continue;const o={x:0,y:0,w:t.bitmap.width+2,h:t.bitmap.height+2};i.push(o),n[e]={rect:o,metrics:t.metrics};}}const{w:r,h:n}=e.potpack(i),s=new e.AlphaImage({width:r||1,height:n||1});for(const i in t){const r=t[i];for(const t in r){const n=r[+t];if(!n||0===n.bitmap.width||0===n.bitmap.height)continue;const a=o[i][t].rect;e.AlphaImage.copy(n.bitmap,s,{x:0,y:0},{x:a.x+1,y:a.y+1},n.bitmap);}}this.image=s,this.positions=o;}}e.register("GlyphAtlas",r);class n{constructor(t){this.tileID=new e.OverscaledTileID(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies,this.promoteId=t.promoteId;}parse(t,o,i,n,a){this.status="parsing",this.data=t,this.collisionBoxArray=new e.CollisionBoxArray;const l=new e.DictionaryCoder(Object.keys(t.layers).sort()),c=new e.FeatureIndex(this.tileID,this.promoteId);c.bucketLayerIDs=[];const u={},h={featureIndex:c,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:i},p=o.familiesBySource[this.source];for(const o in p){const r=t.layers[o];if(!r)continue;1===r.version&&e.warnOnce(`Vector tile source "${this.source}" layer "${o}" does not use vector tile spec v2 and therefore may have some rendering errors.`);const n=l.encode(o),a=[];for(let e=0;e<r.length;e++){const t=r.feature(e),i=c.getId(t,o);a.push({feature:t,id:i,index:e,sourceLayerIndex:n});}for(const t of p[o]){const o=t[0];o.source!==this.source&&e.warnOnce(`layer.source = ${o.source} does not equal this.source = ${this.source}`),o.minzoom&&this.zoom<Math.floor(o.minzoom)||o.maxzoom&&this.zoom>=o.maxzoom||"none"!==o.visibility&&(s(t,this.zoom,i),(u[o.id]=o.createBucket({index:c.bucketLayerIDs.length,layers:t,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:n,sourceID:this.source})).populate(a,h,this.tileID.canonical),c.bucketLayerIDs.push(t.map((e=>e.id))));}}let f,d,g,m;const y=e.mapObject(h.glyphDependencies,(e=>Object.keys(e).map(Number)));Object.keys(y).length?n.send("getGlyphs",{uid:this.uid,stacks:y},((e,t)=>{f||(f=e,d=t,w.call(this));})):d={};const v=Object.keys(h.iconDependencies);v.length?n.send("getImages",{icons:v,source:this.source,tileID:this.tileID,type:"icons"},((e,t)=>{f||(f=e,g=t,w.call(this));})):g={};const x=Object.keys(h.patternDependencies);function w(){if(f)return a(f);if(d&&g&&m){const t=new r(d),o=new e.ImageAtlas(g,m);for(const r in u){const n=u[r];n instanceof e.SymbolBucket?(s(n.layers,this.zoom,i),e.performSymbolLayout({bucket:n,glyphMap:d,glyphPositions:t.positions,imageMap:g,imagePositions:o.iconPositions,showCollisionBoxes:this.showCollisionBoxes,canonical:this.tileID.canonical})):n.hasPattern&&(n instanceof e.LineBucket||n instanceof e.FillBucket||n instanceof e.FillExtrusionBucket)&&(s(n.layers,this.zoom,i),n.addFeatures(h,this.tileID.canonical,o.patternPositions));}this.status="done",a(null,{buckets:Object.values(u).filter((e=>!e.isEmpty())),featureIndex:c,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,imageAtlas:o,glyphMap:this.returnDependencies?d:null,iconMap:this.returnDependencies?g:null,glyphPositions:this.returnDependencies?t.positions:null});}}x.length?n.send("getImages",{icons:x,source:this.source,tileID:this.tileID,type:"patterns"},((e,t)=>{f||(f=e,m=t,w.call(this));})):m={},w.call(this);}}function s(t,o,i){const r=new e.EvaluationParameters(o);for(const e of t)e.recalculate(r,i);}function a(t,o){const i=e.getArrayBuffer(t.request,((t,i,r,n)=>{t?o(t):i&&o(null,{vectorTile:new e.vectorTile.VectorTile(new e.pbf(i)),rawData:i,cacheControl:r,expires:n});}));return ()=>{i.cancel(),o();}}class l{constructor(e,t,o,i){this.actor=e,this.layerIndex=t,this.availableImages=o,this.loadVectorData=i||a,this.loading={},this.loaded={};}loadTile(t,o){const i=t.uid;this.loading||(this.loading={});const r=!!(t&&t.request&&t.request.collectResourceTiming)&&new e.RequestPerformance(t.request),s=this.loading[i]=new n(t);s.abort=this.loadVectorData(t,((t,n)=>{if(delete this.loading[i],t||!n)return s.status="done",this.loaded[i]=s,o(t);const a=n.rawData,l={};n.expires&&(l.expires=n.expires),n.cacheControl&&(l.cacheControl=n.cacheControl);const c={};if(r){const e=r.finish();e&&(c.resourceTiming=JSON.parse(JSON.stringify(e)));}s.vectorTile=n.vectorTile,s.parse(n.vectorTile,this.layerIndex,this.availableImages,this.actor,((t,i)=>{if(t||!i)return o(t);o(null,e.extend({rawTileData:a.slice(0)},i,l,c));})),this.loaded=this.loaded||{},this.loaded[i]=s;}));}reloadTile(e,t){const o=this.loaded,i=e.uid,r=this;if(o&&o[i]){const n=o[i];n.showCollisionBoxes=e.showCollisionBoxes;const s=(e,o)=>{const i=n.reloadCallback;i&&(delete n.reloadCallback,n.parse(n.vectorTile,r.layerIndex,this.availableImages,r.actor,i)),t(e,o);};"parsing"===n.status?n.reloadCallback=s:"done"===n.status&&(n.vectorTile?n.parse(n.vectorTile,this.layerIndex,this.availableImages,this.actor,s):s());}}abortTile(e,t){const o=this.loading,i=e.uid;o&&o[i]&&o[i].abort&&(o[i].abort(),delete o[i]),t();}removeTile(e,t){const o=this.loaded,i=e.uid;o&&o[i]&&delete o[i],t();}}class c{constructor(){this.loaded={};}loadTile(t,o){const{uid:i,encoding:r,rawImageData:n}=t,s=e.isImageBitmap(n)?this.getImageData(n):n,a=new e.DEMData(i,s,r);this.loaded=this.loaded||{},this.loaded[i]=a,o(null,a);}getImageData(t){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(t.width,t.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d")),this.offscreenCanvas.width=t.width,this.offscreenCanvas.height=t.height,this.offscreenCanvasContext.drawImage(t,0,0,t.width,t.height);const o=this.offscreenCanvasContext.getImageData(-1,-1,t.width+2,t.height+2);return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),new e.RGBAImage({width:o.width,height:o.height},o.data)}removeTile(e){const t=this.loaded,o=e.uid;t&&t[o]&&delete t[o];}}var u=function e(t,o){var i,r=t&&t.type;if("FeatureCollection"===r)for(i=0;i<t.features.length;i++)e(t.features[i],o);else if("GeometryCollection"===r)for(i=0;i<t.geometries.length;i++)e(t.geometries[i],o);else if("Feature"===r)e(t.geometry,o);else if("Polygon"===r)h(t.coordinates,o);else if("MultiPolygon"===r)for(i=0;i<t.coordinates.length;i++)h(t.coordinates[i],o);return t};function h(e,t){if(0!==e.length){p(e[0],t);for(var o=1;o<e.length;o++)p(e[o],!t);}}function p(e,t){for(var o=0,i=0,r=0,n=e.length,s=n-1;r<n;s=r++){var a=(e[r][0]-e[s][0])*(e[s][1]+e[r][1]),l=o+a;i+=Math.abs(o)>=Math.abs(a)?o-l+a:a-l+o,o=l;}o+i>=0!=!!t&&e.reverse();}const f=e.vectorTile.VectorTileFeature.prototype.toGeoJSON;class d{constructor(t){this._feature=t,this.extent=e.EXTENT,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));}loadGeometry(){if(1===this._feature.type){const t=[];for(const o of this._feature.geometry)t.push([new e.pointGeometry(o[0],o[1])]);return t}{const t=[];for(const o of this._feature.geometry){const i=[];for(const t of o)i.push(new e.pointGeometry(t[0],t[1]));t.push(i);}return t}}toGeoJSON(e,t,o){return f.call(this,e,t,o)}}class g{constructor(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.EXTENT,this.length=t.length,this._features=t;}feature(e){return new d(this._features[e])}}var m={exports:{}},y=e.pointGeometry,v=e.vectorTile.VectorTileFeature,x=w;function w(e,t){this.options=t||{},this.features=e,this.length=e.length;}function S(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}w.prototype.feature=function(e){return new S(this.features[e],this.options.extent)},S.prototype.loadGeometry=function(){var e=this.rawGeometry;this.geometry=[];for(var t=0;t<e.length;t++){for(var o=e[t],i=[],r=0;r<o.length;r++)i.push(new y(o[r][0],o[r][1]));this.geometry.push(i);}return this.geometry},S.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,o=-1/0,i=1/0,r=-1/0,n=0;n<e.length;n++)for(var s=e[n],a=0;a<s.length;a++){var l=s[a];t=Math.min(t,l.x),o=Math.max(o,l.x),i=Math.min(i,l.y),r=Math.max(r,l.y);}return [t,i,o,r]},S.prototype.toGeoJSON=v.prototype.toGeoJSON;var M=e.pbf,I=x;function b(e){var t=new M;return function(e,t){for(var o in e.layers)t.writeMessage(3,k,e.layers[o]);}(e,t),t.finish()}function k(e,t){var o;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var i={keys:[],values:[],keycache:{},valuecache:{}};for(o=0;o<e.length;o++)i.feature=e.feature(o),t.writeMessage(2,P,i);var r=i.keys;for(o=0;o<r.length;o++)t.writeStringField(3,r[o]);var n=i.values;for(o=0;o<n.length;o++)t.writeMessage(4,L,n[o]);}function P(e,t){var o=e.feature;void 0!==o.id&&t.writeVarintField(1,o.id),t.writeMessage(2,T,e),t.writeVarintField(3,o.type),t.writeMessage(4,D,o);}function T(e,t){var o=e.feature,i=e.keys,r=e.values,n=e.keycache,s=e.valuecache;for(var a in o.properties){var l=o.properties[a],c=n[a];if(null!==l){void 0===c&&(i.push(a),n[a]=c=i.length-1),t.writeVarint(c);var u=typeof l;"string"!==u&&"boolean"!==u&&"number"!==u&&(l=JSON.stringify(l));var h=u+":"+l,p=s[h];void 0===p&&(r.push(l),s[h]=p=r.length-1),t.writeVarint(p);}}}function C(e,t){return (t<<3)+(7&e)}function _(e){return e<<1^e>>31}function D(e,t){for(var o=e.loadGeometry(),i=e.type,r=0,n=0,s=o.length,a=0;a<s;a++){var l=o[a],c=1;1===i&&(c=l.length),t.writeVarint(C(1,c));for(var u=3===i?l.length-1:l.length,h=0;h<u;h++){1===h&&1!==i&&t.writeVarint(C(2,u-1));var p=l[h].x-r,f=l[h].y-n;t.writeVarint(_(p)),t.writeVarint(_(f)),r+=p,n+=f;}3===i&&t.writeVarint(C(7,1));}}function L(e,t){var o=typeof e;"string"===o?t.writeStringField(1,e):"boolean"===o?t.writeBooleanField(7,e):"number"===o&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}function z(e,t,o,i,r,n){if(r-i<=o)return;const s=i+r>>1;O(e,t,s,i,r,n%2),z(e,t,o,i,s-1,n+1),z(e,t,o,s+1,r,n+1);}function O(e,t,o,i,r,n){for(;r>i;){if(r-i>600){const s=r-i+1,a=o-i+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(a-s/2<0?-1:1);O(e,t,o,Math.max(i,Math.floor(o-a*c/s+u)),Math.min(r,Math.floor(o+(s-a)*c/s+u)),n);}const s=t[2*o+n];let a=i,l=r;for(E(e,t,i,o),t[2*r+n]>s&&E(e,t,i,r);a<l;){for(E(e,t,a,l),a++,l--;t[2*a+n]<s;)a++;for(;t[2*l+n]>s;)l--;}t[2*i+n]===s?E(e,t,i,l):(l++,E(e,t,l,r)),l<=o&&(i=l+1),o<=l&&(r=l-1);}}function E(e,t,o,i){F(e,o,i),F(t,2*o,2*i),F(t,2*o+1,2*i+1);}function F(e,t,o){const i=e[t];e[t]=e[o],e[o]=i;}function N(e,t,o,i){const r=e-o,n=t-i;return r*r+n*n}m.exports=b,m.exports.fromVectorTileJs=b,m.exports.fromGeojsonVt=function(e,t){t=t||{};var o={};for(var i in e)o[i]=new I(e[i].features,t),o[i].name=i,o[i].version=t.version,o[i].extent=t.extent;return b({layers:o})},m.exports.GeoJSONWrapper=I;const A=e=>e[0],B=e=>e[1];class J{constructor(e,t=A,o=B,i=64,r=Float64Array){this.nodeSize=i,this.points=e;const n=e.length<65536?Uint16Array:Uint32Array,s=this.ids=new n(e.length),a=this.coords=new r(2*e.length);for(let i=0;i<e.length;i++)s[i]=i,a[2*i]=t(e[i]),a[2*i+1]=o(e[i]);z(s,a,i,0,s.length-1,0);}range(e,t,o,i){return function(e,t,o,i,r,n,s){const a=[0,e.length-1,0],l=[];let c,u;for(;a.length;){const h=a.pop(),p=a.pop(),f=a.pop();if(p-f<=s){for(let s=f;s<=p;s++)c=t[2*s],u=t[2*s+1],c>=o&&c<=r&&u>=i&&u<=n&&l.push(e[s]);continue}const d=Math.floor((f+p)/2);c=t[2*d],u=t[2*d+1],c>=o&&c<=r&&u>=i&&u<=n&&l.push(e[d]);const g=(h+1)%2;(0===h?o<=c:i<=u)&&(a.push(f),a.push(d-1),a.push(g)),(0===h?r>=c:n>=u)&&(a.push(d+1),a.push(p),a.push(g));}return l}(this.ids,this.coords,e,t,o,i,this.nodeSize)}within(e,t,o){return function(e,t,o,i,r,n){const s=[0,e.length-1,0],a=[],l=r*r;for(;s.length;){const c=s.pop(),u=s.pop(),h=s.pop();if(u-h<=n){for(let r=h;r<=u;r++)N(t[2*r],t[2*r+1],o,i)<=l&&a.push(e[r]);continue}const p=Math.floor((h+u)/2),f=t[2*p],d=t[2*p+1];N(f,d,o,i)<=l&&a.push(e[p]);const g=(c+1)%2;(0===c?o-r<=f:i-r<=d)&&(s.push(h),s.push(p-1),s.push(g)),(0===c?o+r>=f:i+r>=d)&&(s.push(p+1),s.push(u),s.push(g));}return a}(this.ids,this.coords,e,t,o,this.nodeSize)}}const Z={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},G=Math.fround||(j=new Float32Array(1),e=>(j[0]=+e,j[0]));var j;class Y{constructor(e){this.options=H(Object.create(Z),e),this.trees=new Array(this.options.maxZoom+1);}load(e){const{log:t,minZoom:o,maxZoom:i,nodeSize:r}=this.options;t&&console.time("total time");const n=`prepare ${e.length} points`;t&&console.time(n),this.points=e;let s=[];for(let t=0;t<e.length;t++)e[t].geometry&&s.push(X(e[t],t));this.trees[i+1]=new J(s,K,Q,r,Float32Array),t&&console.timeEnd(n);for(let e=i;e>=o;e--){const o=+Date.now();s=this._cluster(s,e),this.trees[e]=new J(s,K,Q,r,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,s.length,+Date.now()-o);}return t&&console.timeEnd("total time"),this}getClusters(e,t){let o=((e[0]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,e[1]));let r=180===e[2]?180:((e[2]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)o=-180,r=180;else if(o>r){const e=this.getClusters([o,i,180,n],t),s=this.getClusters([-180,i,r,n],t);return e.concat(s)}const s=this.trees[this._limitZoom(t)],a=s.range($(o),q(n),$(r),q(i)),l=[];for(const e of a){const t=s.points[e];l.push(t.numPoints?R(t):this.points[t.index]);}return l}getChildren(e){const t=this._getOriginId(e),o=this._getOriginZoom(e),i="No cluster with the specified id.",r=this.trees[o];if(!r)throw new Error(i);const n=r.points[t];if(!n)throw new Error(i);const s=this.options.radius/(this.options.extent*Math.pow(2,o-1)),a=r.within(n.x,n.y,s),l=[];for(const t of a){const o=r.points[t];o.parentId===e&&l.push(o.numPoints?R(o):this.points[o.index]);}if(0===l.length)throw new Error(i);return l}getLeaves(e,t,o){const i=[];return this._appendLeaves(i,e,t=t||10,o=o||0,0),i}getTile(e,t,o){const i=this.trees[this._limitZoom(e)],r=Math.pow(2,e),{extent:n,radius:s}=this.options,a=s/n,l=(o-a)/r,c=(o+1+a)/r,u={features:[]};return this._addTileFeatures(i.range((t-a)/r,l,(t+1+a)/r,c),i.points,t,o,r,u),0===t&&this._addTileFeatures(i.range(1-a/r,l,1,c),i.points,r,o,r,u),t===r-1&&this._addTileFeatures(i.range(0,l,a/r,c),i.points,-1,o,r,u),u.features.length?u:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom;){const o=this.getChildren(e);if(t++,1!==o.length)break;e=o[0].properties.cluster_id;}return t}_appendLeaves(e,t,o,i,r){const n=this.getChildren(t);for(const t of n){const n=t.properties;if(n&&n.cluster?r+n.point_count<=i?r+=n.point_count:r=this._appendLeaves(e,n.cluster_id,o,i,r):r<i?r++:e.push(t),e.length===o)break}return r}_addTileFeatures(e,t,o,i,r,n){for(const s of e){const e=t[s],a=e.numPoints;let l,c,u;if(a)l=W(e),c=e.x,u=e.y;else {const t=this.points[e.index];l=t.properties,c=$(t.geometry.coordinates[0]),u=q(t.geometry.coordinates[1]);}const h={type:1,geometry:[[Math.round(this.options.extent*(c*r-o)),Math.round(this.options.extent*(u*r-i))]],tags:l};let p;a?p=e.id:this.options.generateId?p=e.index:this.points[e.index].id&&(p=this.points[e.index].id),void 0!==p&&(h.id=p),n.features.push(h);}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){const o=[],{radius:i,extent:r,reduce:n,minPoints:s}=this.options,a=i/(r*Math.pow(2,t));for(let i=0;i<e.length;i++){const r=e[i];if(r.zoom<=t)continue;r.zoom=t;const l=this.trees[t+1],c=l.within(r.x,r.y,a),u=r.numPoints||1;let h=u;for(const e of c){const o=l.points[e];o.zoom>t&&(h+=o.numPoints||1);}if(h>u&&h>=s){let e=r.x*u,s=r.y*u,a=n&&u>1?this._map(r,!0):null;const p=(i<<5)+(t+1)+this.points.length;for(const o of c){const i=l.points[o];if(i.zoom<=t)continue;i.zoom=t;const c=i.numPoints||1;e+=i.x*c,s+=i.y*c,i.parentId=p,n&&(a||(a=this._map(r,!0)),n(a,this._map(i)));}r.parentId=p,o.push(V(e/h,s/h,p,h,a));}else if(o.push(r),h>1)for(const e of c){const i=l.points[e];i.zoom<=t||(i.zoom=t,o.push(i));}}return o}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return (e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?H({},e.properties):e.properties;const o=this.points[e.index].properties,i=this.options.map(o);return t&&i===o?H({},i):i}}function V(e,t,o,i,r){return {x:G(e),y:G(t),zoom:1/0,id:o,parentId:-1,numPoints:i,properties:r}}function X(e,t){const[o,i]=e.geometry.coordinates;return {x:G($(o)),y:G(q(i)),zoom:1/0,index:t,parentId:-1}}function R(e){return {type:"Feature",id:e.id,properties:W(e),geometry:{type:"Point",coordinates:[(t=e.x,360*(t-.5)),U(e.y)]}};var t;}function W(e){const t=e.numPoints,o=t>=1e4?`${Math.round(t/1e3)}k`:t>=1e3?Math.round(t/100)/10+"k":t;return H(H({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:o})}function $(e){return e/360+.5}function q(e){const t=Math.sin(e*Math.PI/180),o=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return o<0?0:o>1?1:o}function U(e){const t=(180-360*e)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}function H(e,t){for(const o in t)e[o]=t[o];return e}function K(e){return e.x}function Q(e){return e.y}function ee(e,t,o,i){for(var r,n=i,s=o-t>>1,a=o-t,l=e[t],c=e[t+1],u=e[o],h=e[o+1],p=t+3;p<o;p+=3){var f=te(e[p],e[p+1],l,c,u,h);if(f>n)r=p,n=f;else if(f===n){var d=Math.abs(p-s);d<a&&(r=p,a=d);}}n>i&&(r-t>3&&ee(e,t,r,i),e[r+2]=n,o-r>3&&ee(e,r,o,i));}function te(e,t,o,i,r,n){var s=r-o,a=n-i;if(0!==s||0!==a){var l=((e-o)*s+(t-i)*a)/(s*s+a*a);l>1?(o=r,i=n):l>0&&(o+=s*l,i+=a*l);}return (s=e-o)*s+(a=t-i)*a}function oe(e,t,o,i){var r={id:void 0===e?null:e,type:t,geometry:o,tags:i,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,o=e.type;if("Point"===o||"MultiPoint"===o||"LineString"===o)ie(e,t);else if("Polygon"===o||"MultiLineString"===o)for(var i=0;i<t.length;i++)ie(e,t[i]);else if("MultiPolygon"===o)for(i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++)ie(e,t[i][r]);}(r),r}function ie(e,t){for(var o=0;o<t.length;o+=3)e.minX=Math.min(e.minX,t[o]),e.minY=Math.min(e.minY,t[o+1]),e.maxX=Math.max(e.maxX,t[o]),e.maxY=Math.max(e.maxY,t[o+1]);}function re(e,t,o,i){if(t.geometry){var r=t.geometry.coordinates,n=t.geometry.type,s=Math.pow(o.tolerance/((1<<o.maxZoom)*o.extent),2),a=[],l=t.id;if(o.promoteId?l=t.properties[o.promoteId]:o.generateId&&(l=i||0),"Point"===n)ne(r,a);else if("MultiPoint"===n)for(var c=0;c<r.length;c++)ne(r[c],a);else if("LineString"===n)se(r,a,s,!1);else if("MultiLineString"===n){if(o.lineMetrics){for(c=0;c<r.length;c++)se(r[c],a=[],s,!1),e.push(oe(l,"LineString",a,t.properties));return}ae(r,a,s,!1);}else if("Polygon"===n)ae(r,a,s,!0);else {if("MultiPolygon"!==n){if("GeometryCollection"===n){for(c=0;c<t.geometry.geometries.length;c++)re(e,{id:l,geometry:t.geometry.geometries[c],properties:t.properties},o,i);return}throw new Error("Input data is not a valid GeoJSON object.")}for(c=0;c<r.length;c++){var u=[];ae(r[c],u,s,!0),a.push(u);}}e.push(oe(l,n,a,t.properties));}}function ne(e,t){t.push(le(e[0])),t.push(ce(e[1])),t.push(0);}function se(e,t,o,i){for(var r,n,s=0,a=0;a<e.length;a++){var l=le(e[a][0]),c=ce(e[a][1]);t.push(l),t.push(c),t.push(0),a>0&&(s+=i?(r*c-l*n)/2:Math.sqrt(Math.pow(l-r,2)+Math.pow(c-n,2))),r=l,n=c;}var u=t.length-3;t[2]=1,ee(t,0,u,o),t[u+2]=1,t.size=Math.abs(s),t.start=0,t.end=t.size;}function ae(e,t,o,i){for(var r=0;r<e.length;r++){var n=[];se(e[r],n,o,i),t.push(n);}}function le(e){return e/360+.5}function ce(e){var t=Math.sin(e*Math.PI/180),o=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return o<0?0:o>1?1:o}function ue(e,t,o,i,r,n,s,a){if(i/=t,n>=(o/=t)&&s<i)return e;if(s<o||n>=i)return null;for(var l=[],c=0;c<e.length;c++){var u=e[c],h=u.geometry,p=u.type,f=0===r?u.minX:u.minY,d=0===r?u.maxX:u.maxY;if(f>=o&&d<i)l.push(u);else if(!(d<o||f>=i)){var g=[];if("Point"===p||"MultiPoint"===p)he(h,g,o,i,r);else if("LineString"===p)pe(h,g,o,i,r,!1,a.lineMetrics);else if("MultiLineString"===p)de(h,g,o,i,r,!1);else if("Polygon"===p)de(h,g,o,i,r,!0);else if("MultiPolygon"===p)for(var m=0;m<h.length;m++){var y=[];de(h[m],y,o,i,r,!0),y.length&&g.push(y);}if(g.length){if(a.lineMetrics&&"LineString"===p){for(m=0;m<g.length;m++)l.push(oe(u.id,p,g[m],u.tags));continue}"LineString"!==p&&"MultiLineString"!==p||(1===g.length?(p="LineString",g=g[0]):p="MultiLineString"),"Point"!==p&&"MultiPoint"!==p||(p=3===g.length?"Point":"MultiPoint"),l.push(oe(u.id,p,g,u.tags));}}}return l.length?l:null}function he(e,t,o,i,r){for(var n=0;n<e.length;n+=3){var s=e[n+r];s>=o&&s<=i&&(t.push(e[n]),t.push(e[n+1]),t.push(e[n+2]));}}function pe(e,t,o,i,r,n,s){for(var a,l,c=fe(e),u=0===r?me:ye,h=e.start,p=0;p<e.length-3;p+=3){var f=e[p],d=e[p+1],g=e[p+2],m=e[p+3],y=e[p+4],v=0===r?f:d,x=0===r?m:y,w=!1;s&&(a=Math.sqrt(Math.pow(f-m,2)+Math.pow(d-y,2))),v<o?x>o&&(l=u(c,f,d,m,y,o),s&&(c.start=h+a*l)):v>i?x<i&&(l=u(c,f,d,m,y,i),s&&(c.start=h+a*l)):ge(c,f,d,g),x<o&&v>=o&&(l=u(c,f,d,m,y,o),w=!0),x>i&&v<=i&&(l=u(c,f,d,m,y,i),w=!0),!n&&w&&(s&&(c.end=h+a*l),t.push(c),c=fe(e)),s&&(h+=a);}var S=e.length-3;f=e[S],d=e[S+1],g=e[S+2],(v=0===r?f:d)>=o&&v<=i&&ge(c,f,d,g),S=c.length-3,n&&S>=3&&(c[S]!==c[0]||c[S+1]!==c[1])&&ge(c,c[0],c[1],c[2]),c.length&&t.push(c);}function fe(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function de(e,t,o,i,r,n){for(var s=0;s<e.length;s++)pe(e[s],t,o,i,r,n,!1);}function ge(e,t,o,i){e.push(t),e.push(o),e.push(i);}function me(e,t,o,i,r,n){var s=(n-t)/(i-t);return e.push(n),e.push(o+(r-o)*s),e.push(1),s}function ye(e,t,o,i,r,n){var s=(n-o)/(r-o);return e.push(t+(i-t)*s),e.push(n),e.push(1),s}function ve(e,t){for(var o=[],i=0;i<e.length;i++){var r,n=e[i],s=n.type;if("Point"===s||"MultiPoint"===s||"LineString"===s)r=xe(n.geometry,t);else if("MultiLineString"===s||"Polygon"===s){r=[];for(var a=0;a<n.geometry.length;a++)r.push(xe(n.geometry[a],t));}else if("MultiPolygon"===s)for(r=[],a=0;a<n.geometry.length;a++){for(var l=[],c=0;c<n.geometry[a].length;c++)l.push(xe(n.geometry[a][c],t));r.push(l);}o.push(oe(n.id,s,r,n.tags));}return o}function xe(e,t){var o=[];o.size=e.size,void 0!==e.start&&(o.start=e.start,o.end=e.end);for(var i=0;i<e.length;i+=3)o.push(e[i]+t,e[i+1],e[i+2]);return o}function we(e,t){if(e.transformed)return e;var o,i,r,n=1<<e.z,s=e.x,a=e.y;for(o=0;o<e.features.length;o++){var l=e.features[o],c=l.geometry,u=l.type;if(l.geometry=[],1===u)for(i=0;i<c.length;i+=2)l.geometry.push(Se(c[i],c[i+1],t,n,s,a));else for(i=0;i<c.length;i++){var h=[];for(r=0;r<c[i].length;r+=2)h.push(Se(c[i][r],c[i][r+1],t,n,s,a));l.geometry.push(h);}}return e.transformed=!0,e}function Se(e,t,o,i,r,n){return [Math.round(o*(e*i-r)),Math.round(o*(t*i-n))]}function Me(e,t,o,i,r){for(var n=t===r.maxZoom?0:r.tolerance/((1<<t)*r.extent),s={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:o,y:i,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<e.length;a++){s.numFeatures++,Ie(s,e[a],n,r);var l=e[a].minX,c=e[a].minY,u=e[a].maxX,h=e[a].maxY;l<s.minX&&(s.minX=l),c<s.minY&&(s.minY=c),u>s.maxX&&(s.maxX=u),h>s.maxY&&(s.maxY=h);}return s}function Ie(e,t,o,i){var r=t.geometry,n=t.type,s=[];if("Point"===n||"MultiPoint"===n)for(var a=0;a<r.length;a+=3)s.push(r[a]),s.push(r[a+1]),e.numPoints++,e.numSimplified++;else if("LineString"===n)be(s,r,e,o,!1,!1);else if("MultiLineString"===n||"Polygon"===n)for(a=0;a<r.length;a++)be(s,r[a],e,o,"Polygon"===n,0===a);else if("MultiPolygon"===n)for(var l=0;l<r.length;l++){var c=r[l];for(a=0;a<c.length;a++)be(s,c[a],e,o,!0,0===a);}if(s.length){var u=t.tags||null;if("LineString"===n&&i.lineMetrics){for(var h in u={},t.tags)u[h]=t.tags[h];u.mapbox_clip_start=r.start/r.size,u.mapbox_clip_end=r.end/r.size;}var p={geometry:s,type:"Polygon"===n||"MultiPolygon"===n?3:"LineString"===n||"MultiLineString"===n?2:1,tags:u};null!==t.id&&(p.id=t.id),e.features.push(p);}}function be(e,t,o,i,r,n){var s=i*i;if(i>0&&t.size<(r?s:i))o.numPoints+=t.length/3;else {for(var a=[],l=0;l<t.length;l+=3)(0===i||t[l+2]>s)&&(o.numSimplified++,a.push(t[l]),a.push(t[l+1])),o.numPoints++;r&&function(e,t){for(var o=0,i=0,r=e.length,n=r-2;i<r;n=i,i+=2)o+=(e[i]-e[n])*(e[i+1]+e[n+1]);if(o>0===t)for(i=0,r=e.length;i<r/2;i+=2){var s=e[i],a=e[i+1];e[i]=e[r-2-i],e[i+1]=e[r-1-i],e[r-2-i]=s,e[r-1-i]=a;}}(a,n),e.push(a);}}function ke(e,t){var o=(t=this.options=function(e,t){for(var o in t)e[o]=t[o];return e}(Object.create(this.options),t)).debug;if(o&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var i=function(e,t){var o=[];if("FeatureCollection"===e.type)for(var i=0;i<e.features.length;i++)re(o,e.features[i],t,i);else re(o,"Feature"===e.type?e:{geometry:e},t);return o}(e,t);this.tiles={},this.tileCoords=[],o&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),i=function(e,t){var o=t.buffer/t.extent,i=e,r=ue(e,1,-1-o,o,0,-1,2,t),n=ue(e,1,1-o,2+o,0,-1,2,t);return (r||n)&&(i=ue(e,1,-o,1+o,0,-1,2,t)||[],r&&(i=ve(r,1).concat(i)),n&&(i=i.concat(ve(n,-1)))),i}(i,t),i.length&&this.splitTile(i,0,0,0),o&&(i.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function Pe(e,t,o){return 32*((1<<e)*o+t)+e}function Te(e,t){const o=e.tileID.canonical;if(!this._geoJSONIndex)return t(null,null);const i=this._geoJSONIndex.getTile(o.z,o.x,o.y);if(!i)return t(null,null);const r=new g(i.features);let n=m.exports(r);0===n.byteOffset&&n.byteLength===n.buffer.byteLength||(n=new Uint8Array(n)),t(null,{vectorTile:r,rawData:n.buffer});}ke.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},ke.prototype.splitTile=function(e,t,o,i,r,n,s){for(var a=[e,t,o,i],l=this.options,c=l.debug;a.length;){i=a.pop(),o=a.pop(),t=a.pop(),e=a.pop();var u=1<<t,h=Pe(t,o,i),p=this.tiles[h];if(!p&&(c>1&&console.time("creation"),p=this.tiles[h]=Me(e,t,o,i,l),this.tileCoords.push({z:t,x:o,y:i}),c)){c>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,o,i,p.numFeatures,p.numPoints,p.numSimplified),console.timeEnd("creation"));var f="z"+t;this.stats[f]=(this.stats[f]||0)+1,this.total++;}if(p.source=e,r){if(t===l.maxZoom||t===r)continue;var d=1<<r-t;if(o!==Math.floor(n/d)||i!==Math.floor(s/d))continue}else if(t===l.indexMaxZoom||p.numPoints<=l.indexMaxPoints)continue;if(p.source=null,0!==e.length){c>1&&console.time("clipping");var g,m,y,v,x,w,S=.5*l.buffer/l.extent,M=.5-S,I=.5+S,b=1+S;g=m=y=v=null,x=ue(e,u,o-S,o+I,0,p.minX,p.maxX,l),w=ue(e,u,o+M,o+b,0,p.minX,p.maxX,l),e=null,x&&(g=ue(x,u,i-S,i+I,1,p.minY,p.maxY,l),m=ue(x,u,i+M,i+b,1,p.minY,p.maxY,l),x=null),w&&(y=ue(w,u,i-S,i+I,1,p.minY,p.maxY,l),v=ue(w,u,i+M,i+b,1,p.minY,p.maxY,l),w=null),c>1&&console.timeEnd("clipping"),a.push(g||[],t+1,2*o,2*i),a.push(m||[],t+1,2*o,2*i+1),a.push(y||[],t+1,2*o+1,2*i),a.push(v||[],t+1,2*o+1,2*i+1);}}},ke.prototype.getTile=function(e,t,o){var i=this.options,r=i.extent,n=i.debug;if(e<0||e>24)return null;var s=1<<e,a=Pe(e,t=(t%s+s)%s,o);if(this.tiles[a])return we(this.tiles[a],r);n>1&&console.log("drilling down to z%d-%d-%d",e,t,o);for(var l,c=e,u=t,h=o;!l&&c>0;)c--,u=Math.floor(u/2),h=Math.floor(h/2),l=this.tiles[Pe(c,u,h)];return l&&l.source?(n>1&&console.log("found parent tile z%d-%d-%d",c,u,h),n>1&&console.time("drilling down"),this.splitTile(l.source,c,u,h,e,t,o),n>1&&console.timeEnd("drilling down"),this.tiles[a]?we(this.tiles[a],r):null):null};class Ce extends l{constructor(e,t,o,i){super(e,t,o,Te),i&&(this.loadGeoJSON=i);}loadData(t,o){var i;null===(i=this._pendingRequest)||void 0===i||i.cancel(),this._pendingCallback&&this._pendingCallback(null,{abandoned:!0});const r=!!(t&&t.request&&t.request.collectResourceTiming)&&new e.RequestPerformance(t.request);this._pendingCallback=o,this._pendingRequest=this.loadGeoJSON(t,((i,n)=>{if(delete this._pendingCallback,delete this._pendingRequest,i||!n)return o(i);if("object"!=typeof n)return o(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));{u(n,!0);try{if(t.filter){const o=e.createExpression(t.filter,{type:"boolean","property-type":"data-driven",overridable:!1,transition:!1});if("error"===o.result)throw new Error(o.value.map((e=>`${e.key}: ${e.message}`)).join(", "));const i=n.features.filter((e=>o.value.evaluate({zoom:0},e)));n={type:"FeatureCollection",features:i};}this._geoJSONIndex=t.cluster?new Y(function({superclusterOptions:t,clusterProperties:o}){if(!o||!t)return t;const i={},r={},n={accumulated:null,zoom:0},s={properties:null},a=Object.keys(o);for(const t of a){const[n,s]=o[t],a=e.createExpression(s),l=e.createExpression("string"==typeof n?[n,["accumulated"],["get",t]]:n);i[t]=a.value,r[t]=l.value;}return t.map=e=>{s.properties=e;const t={};for(const e of a)t[e]=i[e].evaluate(n,s);return t},t.reduce=(e,t)=>{s.properties=t;for(const t of a)n.accumulated=e[t],e[t]=r[t].evaluate(n,s);},t}(t)).load(n.features):function(e,t){return new ke(e,t)}(n,t.geojsonVtOptions);}catch(i){return o(i)}this.loaded={};const s={};if(r){const e=r.finish();e&&(s.resourceTiming={},s.resourceTiming[t.source]=JSON.parse(JSON.stringify(e)));}o(null,s);}}));}reloadTile(e,t){const o=this.loaded;return o&&o[e.uid]?super.reloadTile(e,t):this.loadTile(e,t)}loadGeoJSON(t,o){if(t.request)return e.getJSON(t.request,o);if("string"==typeof t.data)try{o(null,JSON.parse(t.data));}catch(e){o(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));}else o(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));return {cancel:()=>{}}}removeSource(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),t();}getClusterExpansionZoom(e,t){try{t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));}catch(e){t(e);}}getClusterChildren(e,t){try{t(null,this._geoJSONIndex.getChildren(e.clusterId));}catch(e){t(e);}}getClusterLeaves(e,t){try{t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));}catch(e){t(e);}}}class _e{constructor(t){this.self=t,this.actor=new e.Actor(t,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:l,geojson:Ce},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=(e,t)=>{if(this.workerSourceTypes[e])throw new Error(`Worker source with name "${e}" already registered.`);this.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=t=>{if(e.plugin.isParsed())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText,e.plugin.processStyledBidirectionalText=t.processStyledBidirectionalText;};}setReferrer(e,t){this.referrer=t;}setImages(e,t,o){this.availableImages[e]=t;for(const o in this.workerSources[e]){const i=this.workerSources[e][o];for(const e in i)i[e].availableImages=t;}o();}setLayers(e,t,o){this.getLayerIndex(e).replace(t),o();}updateLayers(e,t,o){this.getLayerIndex(e).update(t.layers,t.removedIds),o();}loadTile(e,t,o){this.getWorkerSource(e,t.type,t.source).loadTile(t,o);}loadDEMTile(e,t,o){this.getDEMWorkerSource(e,t.source).loadTile(t,o);}reloadTile(e,t,o){this.getWorkerSource(e,t.type,t.source).reloadTile(t,o);}abortTile(e,t,o){this.getWorkerSource(e,t.type,t.source).abortTile(t,o);}removeTile(e,t,o){this.getWorkerSource(e,t.type,t.source).removeTile(t,o);}removeDEMTile(e,t){this.getDEMWorkerSource(e,t.source).removeTile(t);}removeSource(e,t,o){if(!this.workerSources[e]||!this.workerSources[e][t.type]||!this.workerSources[e][t.type][t.source])return;const i=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==i.removeSource?i.removeSource(t,o):o();}loadWorkerSource(e,t,o){try{this.self.importScripts(t.url),o();}catch(e){o(e.toString());}}syncRTLPluginState(t,o,i){try{e.plugin.setState(o);const t=e.plugin.getPluginURL();if(e.plugin.isLoaded()&&!e.plugin.isParsed()&&null!=t){this.self.importScripts(t);const o=e.plugin.isParsed();i(o?void 0:new Error(`RTL Text Plugin failed to import scripts from ${t}`),o);}}catch(e){i(e.toString());}}getAvailableImages(e){let t=this.availableImages[e];return t||(t=[]),t}getLayerIndex(e){let t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new i),t}getWorkerSource(e,t,o){if(this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),!this.workerSources[e][t][o]){const i={send:(t,o,i)=>{this.actor.send(t,o,i,e);}};this.workerSources[e][t][o]=new this.workerSourceTypes[t](i,this.getLayerIndex(e),this.getAvailableImages(e));}return this.workerSources[e][t][o]}getDEMWorkerSource(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new c),this.demWorkerSources[e][t]}enforceCacheSizeLimit(t,o){e.enforceCacheSizeLimit(o);}}return e.isWorker()&&(self.worker=new _e(self)),_e}));

		define(["./shared"],(function(t){var e=i;function i(t){return !function(t){return "undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return !1;var t,e,i=new Blob([""],{type:"text/javascript"}),o=URL.createObjectURL(i);try{e=new Worker(o),t=!0;}catch(e){t=!1;}return e&&e.terminate(),URL.revokeObjectURL(o),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var t=document.createElement("canvas");t.width=t.height=1;var e=t.getContext("2d");if(!e)return !1;var i=e.getImageData(0,0,1,1);return i&&i.width===t.width}()?(void 0===o[e=t&&t.failIfMajorPerformanceCaveat]&&(o[e]=function(t){var e,o=function(t){var e=document.createElement("canvas"),o=Object.create(i.webGLContextAttributes);return o.failIfMajorPerformanceCaveat=t,e.getContext("webgl",o)||e.getContext("experimental-webgl",o)}(t);if(!o)return !1;try{e=o.createShader(o.VERTEX_SHADER);}catch(t){return !1}return !(!e||o.isContextLost())&&(o.shaderSource(e,"void main() {}"),o.compileShader(e),!0===o.getShaderParameter(e,o.COMPILE_STATUS))}(e)),o[e]?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support"):"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support";var e;}(t)}var o={};function a(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return !1;for(let i=0;i<t.length;i++)if(!a(t[i],e[i]))return !1;return !0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return !1;if(Object.keys(t).length!==Object.keys(e).length)return !1;for(const i in t)if(!a(t[i],e[i]))return !1;return !0}return t===e}i.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0};class r{static testProp(t){if(!r.docStyle)return t[0];for(let e=0;e<t.length;e++)if(t[e]in r.docStyle)return t[e];return t[0]}static create(t,e,i){const o=window.document.createElement(t);return void 0!==e&&(o.className=e),i&&i.appendChild(o),o}static createNS(t,e){return window.document.createElementNS(t,e)}static disableDrag(){r.docStyle&&r.selectProp&&(r.userSelect=r.docStyle[r.selectProp],r.docStyle[r.selectProp]="none");}static enableDrag(){r.docStyle&&r.selectProp&&(r.docStyle[r.selectProp]=r.userSelect);}static setTransform(t,e){t.style[r.transformProp]=e;}static addEventListener(t,e,i,o={}){t.addEventListener(e,i,"passive"in o?o:o.capture);}static removeEventListener(t,e,i,o={}){t.removeEventListener(e,i,"passive"in o?o:o.capture);}static suppressClickInternal(t){t.preventDefault(),t.stopPropagation(),window.removeEventListener("click",r.suppressClickInternal,!0);}static suppressClick(){window.addEventListener("click",r.suppressClickInternal,!0),window.setTimeout((()=>{window.removeEventListener("click",r.suppressClickInternal,!0);}),0);}static mousePos(e,i){const o=e.getBoundingClientRect();return new t.pointGeometry(i.clientX-o.left-e.clientLeft,i.clientY-o.top-e.clientTop)}static touchPos(e,i){const o=e.getBoundingClientRect(),a=[];for(let r=0;r<i.length;r++)a.push(new t.pointGeometry(i[r].clientX-o.left-e.clientLeft,i[r].clientY-o.top-e.clientTop));return a}static mouseButton(t){return t.button}static remove(t){t.parentNode&&t.parentNode.removeChild(t);}}r.docStyle="undefined"!=typeof window&&window.document&&window.document.documentElement.style,r.selectProp=r.testProp(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]),r.transformProp=r.testProp(["transform","WebkitTransform"]);class s{constructor(t){this._transformRequestFn=t;}transformRequest(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}}normalizeSpriteURL(t,e,i){const o=function(t){const e=t.match(n);if(!e)throw new Error(`Unable to parse URL "${t}"`);return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}(t);return o.path+=`${e}${i}`,function(t){const e=t.params.length?`?${t.params.join("&")}`:"";return `${t.protocol}://${t.authority}${t.path}${e}`}(o)}setTransformRequest(t){this._transformRequestFn=t;}}const n=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;class l{constructor(t,e,i,o){this.context=t,this.format=i,this.texture=t.gl.createTexture(),this.update(e,o);}update(e,i,o){const{width:a,height:r}=e,s=!(this.size&&this.size[0]===a&&this.size[1]===r||o),{context:n}=this,{gl:l}=n;if(this.useMipmap=Boolean(i&&i.useMipmap),l.bindTexture(l.TEXTURE_2D,this.texture),n.pixelStoreUnpackFlipY.set(!1),n.pixelStoreUnpack.set(1),n.pixelStoreUnpackPremultiplyAlpha.set(this.format===l.RGBA&&(!i||!1!==i.premultiply)),s)this.size=[a,r],e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.isImageBitmap(e)?l.texImage2D(l.TEXTURE_2D,0,this.format,this.format,l.UNSIGNED_BYTE,e):l.texImage2D(l.TEXTURE_2D,0,this.format,a,r,0,this.format,l.UNSIGNED_BYTE,e.data);else {const{x:i,y:s}=o||{x:0,y:0};e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.isImageBitmap(e)?l.texSubImage2D(l.TEXTURE_2D,0,i,s,l.RGBA,l.UNSIGNED_BYTE,e):l.texSubImage2D(l.TEXTURE_2D,0,i,s,a,r,l.RGBA,l.UNSIGNED_BYTE,e.data);}this.useMipmap&&this.isSizePowerOfTwo()&&l.generateMipmap(l.TEXTURE_2D);}bind(t,e,i){const{context:o}=this,{gl:a}=o;a.bindTexture(a.TEXTURE_2D,this.texture),i!==a.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(i=a.LINEAR),t!==this.filter&&(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,t),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,i||t),this.filter=t),e!==this.wrap&&(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,e),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,e),this.wrap=e);}isSizePowerOfTwo(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0}destroy(){const{gl:t}=this.context;t.deleteTexture(this.texture),this.texture=null;}}function c(t){const{userImage:e}=t;return !!(e&&e.render&&e.render())&&(t.data.replace(new Uint8Array(e.data.buffer)),!0)}class h extends t.Evented{constructor(){super(),this.images={},this.updatedImages={},this.callbackDispatchedThisFrame={},this.loaded=!1,this.requestors=[],this.patterns={},this.atlasImage=new t.RGBAImage({width:1,height:1}),this.dirty=!0;}isLoaded(){return this.loaded}setLoaded(t){if(this.loaded!==t&&(this.loaded=t,t)){for(const{ids:t,callback:e}of this.requestors)this._notify(t,e);this.requestors=[];}}getImage(t){return this.images[t]}addImage(t,e){if(this.images[t])throw new Error(`Image id ${t} already exist, use updateImage instead`);this._validate(t,e)&&(this.images[t]=e);}_validate(e,i){let o=!0;return this._validateStretch(i.stretchX,i.data&&i.data.width)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "stretchX" value`))),o=!1),this._validateStretch(i.stretchY,i.data&&i.data.height)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "stretchY" value`))),o=!1),this._validateContent(i.content,i)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "content" value`))),o=!1),o}_validateStretch(t,e){if(!t)return !0;let i=0;for(const o of t){if(o[0]<i||o[1]<o[0]||e<o[1])return !1;i=o[1];}return !0}_validateContent(t,e){return !(t&&(4!==t.length||t[0]<0||e.data.width<t[0]||t[1]<0||e.data.height<t[1]||t[2]<0||e.data.width<t[2]||t[3]<0||e.data.height<t[3]||t[2]<t[0]||t[3]<t[1]))}updateImage(t,e){const i=this.images[t];if(i.data.width!==e.data.width||i.data.height!==e.data.height)throw new Error(`size mismatch between old image (${i.data.width}x${i.data.height}) and new image (${e.data.width}x${e.data.height}).`);e.version=i.version+1,this.images[t]=e,this.updatedImages[t]=!0;}removeImage(t){const e=this.images[t];delete this.images[t],delete this.patterns[t],e.userImage&&e.userImage.onRemove&&e.userImage.onRemove();}listImages(){return Object.keys(this.images)}getImages(t,e){let i=!0;if(!this.isLoaded())for(const e of t)this.images[e]||(i=!1);this.isLoaded()||i?this._notify(t,e):this.requestors.push({ids:t,callback:e});}_notify(e,i){const o={};for(const i of e){this.images[i]||this.fire(new t.Event("styleimagemissing",{id:i}));const e=this.images[i];e?o[i]={data:e.data.clone(),pixelRatio:e.pixelRatio,sdf:e.sdf,version:e.version,stretchX:e.stretchX,stretchY:e.stretchY,content:e.content,hasRenderCallback:Boolean(e.userImage&&e.userImage.render)}:t.warnOnce(`Image "${i}" could not be loaded. Please make sure you have added the image with map.addImage() or a "sprite" property in your style. You can provide missing images by listening for the "styleimagemissing" map event.`);}i(null,o);}getPixelSize(){const{width:t,height:e}=this.atlasImage;return {width:t,height:e}}getPattern(e){const i=this.patterns[e],o=this.getImage(e);if(!o)return null;if(i&&i.position.version===o.version)return i.position;if(i)i.position.version=o.version;else {const i={w:o.data.width+2,h:o.data.height+2,x:0,y:0},a=new t.ImagePosition(i,o);this.patterns[e]={bin:i,position:a};}return this._updatePatternAtlas(),this.patterns[e].position}bind(t){const e=t.gl;this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new l(t,this.atlasImage,e.RGBA),this.atlasTexture.bind(e.LINEAR,e.CLAMP_TO_EDGE);}_updatePatternAtlas(){const e=[];for(const t in this.patterns)e.push(this.patterns[t].bin);const{w:i,h:o}=t.potpack(e),a=this.atlasImage;a.resize({width:i||1,height:o||1});for(const e in this.patterns){const{bin:i}=this.patterns[e],o=i.x+1,r=i.y+1,s=this.images[e].data,n=s.width,l=s.height;t.RGBAImage.copy(s,a,{x:0,y:0},{x:o,y:r},{width:n,height:l}),t.RGBAImage.copy(s,a,{x:0,y:l-1},{x:o,y:r-1},{width:n,height:1}),t.RGBAImage.copy(s,a,{x:0,y:0},{x:o,y:r+l},{width:n,height:1}),t.RGBAImage.copy(s,a,{x:n-1,y:0},{x:o-1,y:r},{width:1,height:l}),t.RGBAImage.copy(s,a,{x:0,y:0},{x:o+n,y:r},{width:1,height:l});}this.dirty=!0;}beginFrame(){this.callbackDispatchedThisFrame={};}dispatchRenderCallbacks(e){for(const i of e){if(this.callbackDispatchedThisFrame[i])continue;this.callbackDispatchedThisFrame[i]=!0;const e=this.images[i];e||t.warnOnce(`Image with ID: "${i}" was not found`),c(e)&&this.updateImage(i,e);}}}const u=1e20;function d(t,e,i,o,a,r,s,n,l){for(let c=e;c<e+o;c++)m(t,i*r+c,r,a,s,n,l);for(let c=i;c<i+a;c++)m(t,c*r+e,1,o,s,n,l);}function m(t,e,i,o,a,r,s){r[0]=0,s[0]=-u,s[1]=u,a[0]=t[e];for(let n=1,l=0,c=0;n<o;n++){a[n]=t[e+n*i];const o=n*n;do{const t=r[l];c=(a[n]-a[t]+o-t*t)/(n-t)/2;}while(c<=s[l]&&--l>-1);l++,r[l]=n,s[l]=c,s[l+1]=u;}for(let n=0,l=0;n<o;n++){for(;s[l+1]<n;)l++;const o=r[l],c=n-o;t[e+n*i]=a[o]+c*c;}}class _{constructor(t,e){this.requestManager=t,this.localIdeographFontFamily=e,this.entries={};}setURL(t){this.url=t;}getGlyphs(e,i){const o=[];for(const t in e)for(const i of e[t])o.push({stack:t,id:i});t.asyncAll(o,(({stack:t,id:e},i)=>{let o=this.entries[t];o||(o=this.entries[t]={glyphs:{},requests:{},ranges:{}});let a=o.glyphs[e];if(void 0!==a)return void i(null,{stack:t,id:e,glyph:a});if(a=this._tinySDF(o,t,e),a)return o.glyphs[e]=a,void i(null,{stack:t,id:e,glyph:a});const r=Math.floor(e/256);if(256*r>65535)return void i(new Error("glyphs > 65535 not supported"));if(o.ranges[r])return void i(null,{stack:t,id:e,glyph:a});let s=o.requests[r];s||(s=o.requests[r]=[],_.loadGlyphRange(t,r,this.url,this.requestManager,((t,e)=>{if(e){for(const t in e)this._doesCharSupportLocalGlyph(+t)||(o.glyphs[+t]=e[+t]);o.ranges[r]=!0;}for(const i of s)i(t,e);delete o.requests[r];}))),s.push(((o,a)=>{o?i(o):a&&i(null,{stack:t,id:e,glyph:a[e]||null});}));}),((t,e)=>{if(t)i(t);else if(e){const t={};for(const{stack:i,id:o,glyph:a}of e)(t[i]||(t[i]={}))[o]=a&&{id:a.id,bitmap:a.bitmap.clone(),metrics:a.metrics};i(null,t);}}));}_doesCharSupportLocalGlyph(e){return !!this.localIdeographFontFamily&&(t.unicodeBlockLookup["CJK Unified Ideographs"](e)||t.unicodeBlockLookup["Hangul Syllables"](e)||t.unicodeBlockLookup.Hiragana(e)||t.unicodeBlockLookup.Katakana(e))}_tinySDF(e,i,o){const a=this.localIdeographFontFamily;if(!a)return;if(!this._doesCharSupportLocalGlyph(o))return;let r=e.tinySDF;if(!r){let t="400";/bold/i.test(i)?t="900":/medium/i.test(i)?t="500":/light/i.test(i)&&(t="200"),r=e.tinySDF=new _.TinySDF({fontSize:24,buffer:3,radius:8,cutoff:.25,fontFamily:a,fontWeight:t});}const s=r.draw(String.fromCharCode(o));return {id:o,bitmap:new t.AlphaImage({width:s.width||30,height:s.height||30},s.data),metrics:{width:s.glyphWidth||24,height:s.glyphHeight||24,left:s.glyphLeft||0,top:s.glyphTop-27||-8,advance:s.glyphAdvance||24}}}}_.loadGlyphRange=function(e,i,o,a,r){const s=256*i,n=s+255,l=a.transformRequest(o.replace("{fontstack}",e).replace("{range}",`${s}-${n}`),t.ResourceType.Glyphs);t.getArrayBuffer(l,((e,i)=>{if(e)r(e);else if(i){const e={};for(const o of t.parseGlyphPbf(i))e[o.id]=o;r(null,e);}}));},_.TinySDF=class{constructor({fontSize:t=24,buffer:e=3,radius:i=8,cutoff:o=.25,fontFamily:a="sans-serif",fontWeight:r="normal",fontStyle:s="normal"}={}){this.buffer=e,this.cutoff=o,this.radius=i;const n=this.size=t+4*e,l=this._createCanvas(n),c=this.ctx=l.getContext("2d",{willReadFrequently:!0});c.font=`${s} ${r} ${t}px ${a}`,c.textBaseline="alphabetic",c.textAlign="left",c.fillStyle="black",this.gridOuter=new Float64Array(n*n),this.gridInner=new Float64Array(n*n),this.f=new Float64Array(n),this.z=new Float64Array(n+1),this.v=new Uint16Array(n);}_createCanvas(t){const e=document.createElement("canvas");return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:i,actualBoundingBoxDescent:o,actualBoundingBoxLeft:a,actualBoundingBoxRight:r}=this.ctx.measureText(t),s=Math.ceil(i),n=Math.min(this.size-this.buffer,Math.ceil(r-a)),l=Math.min(this.size-this.buffer,s+Math.ceil(o)),c=n+2*this.buffer,h=l+2*this.buffer,m=Math.max(c*h,0),_=new Uint8ClampedArray(m),p={data:_,width:c,height:h,glyphWidth:n,glyphHeight:l,glyphTop:s,glyphLeft:0,glyphAdvance:e};if(0===n||0===l)return p;const{ctx:f,buffer:g,gridInner:x,gridOuter:v}=this;f.clearRect(g,g,n,l),f.fillText(t,g,g+s);const y=f.getImageData(g,g,n,l);v.fill(u,0,m),x.fill(0,0,m);for(let t=0;t<l;t++)for(let e=0;e<n;e++){const i=y.data[4*(t*n+e)+3]/255;if(0===i)continue;const o=(t+g)*c+e+g;if(1===i)v[o]=0,x[o]=u;else {const t=.5-i;v[o]=t>0?t*t:0,x[o]=t<0?t*t:0;}}d(v,0,0,c,h,c,this.f,this.v,this.z),d(x,g,g,n,l,c,this.f,this.v,this.z);for(let t=0;t<m;t++){const e=Math.sqrt(v[t])-Math.sqrt(x[t]);_[t]=Math.round(255-255*(e/this.radius+this.cutoff));}return p}};const p=new t.Properties({anchor:new t.DataConstantProperty(t.spec.light.anchor),position:new class{constructor(){this.specification=t.spec.light.position;}possiblyEvaluate(e,i){return t.sphericalToCartesian(e.expression.evaluate(i))}interpolate(e,i,o){return {x:t.number(e.x,i.x,o),y:t.number(e.y,i.y,o),z:t.number(e.z,i.z,o)}}},color:new t.DataConstantProperty(t.spec.light.color),intensity:new t.DataConstantProperty(t.spec.light.intensity)}),f="-transition";class g extends t.Evented{constructor(e){super(),this._transitionable=new t.Transitionable(p),this.setLight(e),this._transitioning=this._transitionable.untransitioned();}getLight(){return this._transitionable.serialize()}setLight(e,i={}){if(!this._validate(t.validateLight,e,i))for(const t in e){const i=e[t];t.endsWith(f)?this._transitionable.setTransition(t.slice(0,-f.length),i):this._transitionable.setValue(t,i);}}updateTransitions(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning);}hasTransition(){return this._transitioning.hasTransition()}recalculate(t){this.properties=this._transitioning.possiblyEvaluate(t);}_validate(e,i,o){return (!o||!1!==o.validate)&&t.emitValidationErrors(this,e.call(t.validateStyle,t.extend({value:i,style:{glyphs:!0,sprite:!0},styleSpec:t.spec})))}}class x{constructor(t,e){this.width=t,this.height=e,this.nextRow=0,this.data=new Uint8Array(this.width*this.height),this.dashEntry={};}getDash(t,e){const i=t.join(",")+String(e);return this.dashEntry[i]||(this.dashEntry[i]=this.addDash(t,e)),this.dashEntry[i]}getDashRanges(t,e,i){const o=[];let a=t.length%2==1?-t[t.length-1]*i:0,r=t[0]*i,s=!0;o.push({left:a,right:r,isDash:s,zeroLength:0===t[0]});let n=t[0];for(let e=1;e<t.length;e++){s=!s;const l=t[e];a=n*i,n+=l,r=n*i,o.push({left:a,right:r,isDash:s,zeroLength:0===l});}return o}addRoundDash(t,e,i){const o=e/2;for(let e=-i;e<=i;e++){const a=this.width*(this.nextRow+i+e);let r=0,s=t[r];for(let n=0;n<this.width;n++){n/s.right>1&&(s=t[++r]);const l=Math.abs(n-s.left),c=Math.abs(n-s.right),h=Math.min(l,c);let u;const d=e/i*(o+1);if(s.isDash){const t=o-Math.abs(d);u=Math.sqrt(h*h+t*t);}else u=o-Math.sqrt(h*h+d*d);this.data[a+n]=Math.max(0,Math.min(255,u+128));}}}addRegularDash(t){for(let e=t.length-1;e>=0;--e){const i=t[e],o=t[e+1];i.zeroLength?t.splice(e,1):o&&o.isDash===i.isDash&&(o.left=i.left,t.splice(e,1));}const e=t[0],i=t[t.length-1];e.isDash===i.isDash&&(e.left=i.left-this.width,i.right=e.right+this.width);const o=this.width*this.nextRow;let a=0,r=t[a];for(let e=0;e<this.width;e++){e/r.right>1&&(r=t[++a]);const i=Math.abs(e-r.left),s=Math.abs(e-r.right),n=Math.min(i,s);this.data[o+e]=Math.max(0,Math.min(255,(r.isDash?n:-n)+128));}}addDash(e,i){const o=i?7:0,a=2*o+1;if(this.nextRow+a>this.height)return t.warnOnce("LineAtlas out of space"),null;let r=0;for(let t=0;t<e.length;t++)r+=e[t];if(0!==r){const t=this.width/r,a=this.getDashRanges(e,this.width,t);i?this.addRoundDash(a,t,o):this.addRegularDash(a);}const s={y:(this.nextRow+o+.5)/this.height,height:2*o/this.height,width:r};return this.nextRow+=a,this.dirty=!0,s}bind(t){const e=t.gl;this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.ALPHA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.ALPHA,this.width,this.height,0,e.ALPHA,e.UNSIGNED_BYTE,this.data));}}class v{constructor(e,i){this.workerPool=e,this.actors=[],this.currentActor=0,this.id=t.uniqueId();const o=this.workerPool.acquire(this.id);for(let t=0;t<o.length;t++){const e=new v.Actor(o[t],i,this.id);e.name=`Worker ${t}`,this.actors.push(e);}if(!this.actors.length)throw new Error("No actors found")}broadcast(e,i,o){t.asyncAll(this.actors,((t,o)=>{t.send(e,i,o);}),o=o||function(){});}getActor(){return this.currentActor=(this.currentActor+1)%this.actors.length,this.actors[this.currentActor]}remove(){this.actors.forEach((t=>{t.remove();})),this.actors=[],this.workerPool.release(this.id);}}function y(e,i,o){const a=function(i,a){if(i)return o(i);if(a){const i=t.pick(t.extend(a,e),["tiles","minzoom","maxzoom","attribution","bounds","scheme","tileSize","encoding"]);a.vector_layers&&(i.vectorLayers=a.vector_layers,i.vectorLayerIds=i.vectorLayers.map((t=>t.id))),o(null,i);}};return e.url?t.getJSON(i.transformRequest(e.url,t.ResourceType.Source),a):t.exported.frame((()=>a(null,e)))}v.Actor=t.Actor;class b{constructor(e,i,o){this.bounds=t.LngLatBounds.convert(this.validateBounds(e)),this.minzoom=i||0,this.maxzoom=o||24;}validateBounds(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]}contains(e){const i=Math.pow(2,e.z),o=Math.floor(t.mercatorXfromLng(this.bounds.getWest())*i),a=Math.floor(t.mercatorYfromLat(this.bounds.getNorth())*i),r=Math.ceil(t.mercatorXfromLng(this.bounds.getEast())*i),s=Math.ceil(t.mercatorYfromLat(this.bounds.getSouth())*i);return e.x>=o&&e.x<r&&e.y>=a&&e.y<s}}class w extends t.Evented{constructor(e,i,o,a){if(super(),this.id=e,this.dispatcher=o,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,this._loaded=!1,t.extend(this,t.pick(i,["url","scheme","tileSize","promoteId"])),this._options=t.extend({type:"vector"},i),this._collectResourceTiming=i.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512");this.setEventedParent(a);}load(){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=y(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,this.map.style.sourceCaches[this.id].clearTiles(),e?this.fire(new t.ErrorEvent(e)):i&&(t.extend(this,i),i.bounds&&(this.tileBounds=new b(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})));}));}loaded(){return this._loaded}hasTile(t){return !this.tileBounds||this.tileBounds.contains(t.canonical)}onAdd(t){this.map=t,this.load();}setSourceProperty(t){this._tileJSONRequest&&this._tileJSONRequest.cancel(),t(),this.load();}setTiles(t){return this.setSourceProperty((()=>{this._options.tiles=t;})),this}setUrl(t){return this.setSourceProperty((()=>{this.url=t,this._options.url=t;})),this}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null);}serialize(){return t.extend({},this._options)}loadTile(e,i){const o=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme),a={request:this.map._requestManager.transformRequest(o,t.ResourceType.Tile),uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId};function r(o,a){return delete e.request,e.aborted?i(null):o&&404!==o.status?i(o):(a&&a.resourceTiming&&(e.resourceTiming=a.resourceTiming),this.map._refreshExpiredTiles&&a&&e.setExpiryData(a),e.loadVectorData(a,this.map.painter),t.cacheEntryPossiblyAdded(this.dispatcher),i(null),void(e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)))}a.request.collectResourceTiming=this._collectResourceTiming,e.actor&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=i:e.request=e.actor.send("reloadTile",a,r.bind(this)):(e.actor=this.dispatcher.getActor(),e.request=e.actor.send("loadTile",a,r.bind(this)));}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.actor&&t.actor.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0);}unloadTile(t){t.unloadVectorData(),t.actor&&t.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0);}hasTransition(){return !1}}class T extends t.Evented{constructor(e,i,o,a){super(),this.id=e,this.dispatcher=o,this.setEventedParent(a),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.extend({type:"raster"},i),t.extend(this,t.pick(i,["url","scheme","tileSize"]));}load(){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=y(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,e?this.fire(new t.ErrorEvent(e)):i&&(t.extend(this,i),i.bounds&&(this.tileBounds=new b(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})));}));}loaded(){return this._loaded}onAdd(t){this.map=t,this.load();}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null);}serialize(){return t.extend({},this._options)}hasTile(t){return !this.tileBounds||this.tileBounds.contains(t.canonical)}loadTile(e,i){const o=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme);e.request=t.getImage(this.map._requestManager.transformRequest(o,t.ResourceType.Tile),((o,a,r)=>{if(delete e.request,e.aborted)e.state="unloaded",i(null);else if(o)e.state="errored",i(o);else if(a){this.map._refreshExpiredTiles&&e.setExpiryData(r);const o=this.map.painter.context,s=o.gl;e.texture=this.map.painter.getTileTexture(a.width),e.texture?e.texture.update(a,{useMipmap:!0}):(e.texture=new l(o,a,s.RGBA,{useMipmap:!0}),e.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),o.extTextureFilterAnisotropic&&s.texParameterf(s.TEXTURE_2D,o.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,o.extTextureFilterAnisotropicMax)),e.state="loaded",t.cacheEntryPossiblyAdded(this.dispatcher),i(null);}}));}abortTile(t,e){t.request&&(t.request.cancel(),delete t.request),e();}unloadTile(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e();}hasTransition(){return !1}}let E;class I extends T{constructor(e,i,o,a){super(e,i,o,a),this.type="raster-dem",this.maxzoom=22,this._options=t.extend({type:"raster-dem"},i),this.encoding=i.encoding||"mapbox";}serialize(){return {type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds,encoding:this.encoding}}loadTile(e,i){const o=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme);function a(t,o){t&&(e.state="errored",i(t)),o&&(e.dem=o,e.needsHillshadePrepare=!0,e.needsTerrainPrepare=!0,e.state="loaded",i(null));}e.request=t.getImage(this.map._requestManager.transformRequest(o,t.ResourceType.Tile),function(o,r){if(delete e.request,e.aborted)e.state="unloaded",i(null);else if(o)e.state="errored",i(o);else if(r){this.map._refreshExpiredTiles&&e.setExpiryData(r),delete r.cacheControl,delete r.expires;const i=t.isImageBitmap(r)&&(null==E&&(E="undefined"!=typeof OffscreenCanvas&&new OffscreenCanvas(1,1).getContext("2d")&&"function"==typeof createImageBitmap),E)?r:t.exported.getImageData(r,1),o={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:i,encoding:this.encoding};e.actor&&"expired"!==e.state||(e.actor=this.dispatcher.getActor(),e.actor.send("loadDEMTile",o,a.bind(this)));}}.bind(this)),e.neighboringTiles=this._getNeighboringTiles(e.tileID);}_getNeighboringTiles(e){const i=e.canonical,o=Math.pow(2,i.z),a=(i.x-1+o)%o,r=0===i.x?e.wrap-1:e.wrap,s=(i.x+1+o)%o,n=i.x+1===o?e.wrap+1:e.wrap,l={};return l[new t.OverscaledTileID(e.overscaledZ,r,i.z,a,i.y).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,n,i.z,s,i.y).key]={backfilled:!1},i.y>0&&(l[new t.OverscaledTileID(e.overscaledZ,r,i.z,a,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,n,i.z,s,i.y-1).key]={backfilled:!1}),i.y+1<o&&(l[new t.OverscaledTileID(e.overscaledZ,r,i.z,a,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,n,i.z,s,i.y+1).key]={backfilled:!1}),l}unloadTile(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",t.actor&&t.actor.send("removeDEMTile",{uid:t.uid,source:this.id});}}class C extends t.Evented{constructor(e,i,o,a){super(),this.id=e,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this._pendingLoads=0,this.actor=o.getActor(),this.setEventedParent(a),this._data=i.data,this._options=t.extend({},i),this._collectResourceTiming=i.collectResourceTiming,void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type),i.attribution&&(this.attribution=i.attribution),this.promoteId=i.promoteId;const r=t.EXTENT/this.tileSize;this.workerOptions=t.extend({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*r,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*r,extent:t.EXTENT,maxZoom:this.maxzoom,lineMetrics:i.lineMetrics||!1,generateId:i.generateId||!1},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?i.clusterMaxZoom:this.maxzoom-1,minPoints:Math.max(2,i.clusterMinPoints||2),extent:t.EXTENT,radius:(i.clusterRadius||50)*r,log:!1,generateId:i.generateId||!1},clusterProperties:i.clusterProperties,filter:i.filter},i.workerOptions);}load(){this._updateWorkerData("metadata");}onAdd(t){this.map=t,this.load();}setData(t){return this._data=t,this._updateWorkerData("content"),this}getClusterExpansionZoom(t,e){return this.actor.send("geojson.getClusterExpansionZoom",{clusterId:t,source:this.id},e),this}getClusterChildren(t,e){return this.actor.send("geojson.getClusterChildren",{clusterId:t,source:this.id},e),this}getClusterLeaves(t,e,i,o){return this.actor.send("geojson.getClusterLeaves",{source:this.id,clusterId:t,limit:e,offset:i},o),this}_updateWorkerData(e){const i=t.extend({},this.workerOptions),o=this._data;"string"==typeof o?(i.request=this.map._requestManager.transformRequest(t.exported.resolveURL(o),t.ResourceType.Source),i.request.collectResourceTiming=this._collectResourceTiming):i.data=JSON.stringify(o),this._pendingLoads++,this.fire(new t.Event("dataloading",{dataType:"source"})),this.actor.send(`${this.type}.loadData`,i,((i,o)=>{if(this._pendingLoads--,this._removed||o&&o.abandoned)return void this.fire(new t.Event("dataabort",{dataType:"source",sourceDataType:e}));let a=null;if(o&&o.resourceTiming&&o.resourceTiming[this.id]&&(a=o.resourceTiming[this.id].slice(0)),i)return void this.fire(new t.ErrorEvent(i));const r={dataType:"source",sourceDataType:e};this._collectResourceTiming&&a&&a.length>0&&t.extend(r,{resourceTiming:a}),this.fire(new t.Event("data",r));}));}loaded(){return 0===this._pendingLoads}loadTile(t,e){const i=t.actor?"reloadTile":"loadTile";t.actor=this.actor;const o={type:this.type,uid:t.uid,tileID:t.tileID,zoom:t.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId};t.request=this.actor.send(i,o,((o,a)=>(delete t.request,t.unloadVectorData(),t.aborted?e(null):o?e(o):(t.loadVectorData(a,this.map.painter,"reloadTile"===i),e(null)))));}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.aborted=!0;}unloadTile(t){t.unloadVectorData(),this.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id});}onRemove(){this._removed=!0,this.actor.send("removeSource",{type:this.type,source:this.id});}serialize(){return t.extend({},this._options,{type:this.type,data:this._data})}hasTransition(){return !1}}var S=t.createLayout([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]);class D extends t.Evented{constructor(t,e,i,o){super(),this.id=t,this.dispatcher=i,this.coordinates=e.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this._loaded=!1,this.setEventedParent(o),this.options=e;}load(e,i){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this.url=this.options.url,t.getImage(this.map._requestManager.transformRequest(this.url,t.ResourceType.Image),((o,a)=>{this._loaded=!0,o?this.fire(new t.ErrorEvent(o)):a&&(this.image=a,e&&(this.coordinates=e),i&&i(),this._finishLoading());}));}loaded(){return this._loaded}updateImage(t){return this.image&&t.url?(this.options.url=t.url,this.load(t.coordinates,(()=>{this.texture=null;})),this):this}_finishLoading(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})));}onAdd(t){this.map=t,this.load();}setCoordinates(e){this.coordinates=e;const i=e.map(t.MercatorCoordinate.fromLngLat);this.tileID=function(e){let i=1/0,o=1/0,a=-1/0,r=-1/0;for(const t of e)i=Math.min(i,t.x),o=Math.min(o,t.y),a=Math.max(a,t.x),r=Math.max(r,t.y);const s=Math.max(a-i,r-o),n=Math.max(0,Math.floor(-Math.log(s)/Math.LN2)),l=Math.pow(2,n);return new t.CanonicalTileID(n,Math.floor((i+a)/2*l),Math.floor((o+r)/2*l))}(i),this.minzoom=this.maxzoom=this.tileID.z;const o=i.map((t=>this.tileID.getTilePoint(t)._round()));return this._boundsArray=new t.RasterBoundsArray,this._boundsArray.emplaceBack(o[0].x,o[0].y,0,0),this._boundsArray.emplaceBack(o[1].x,o[1].y,t.EXTENT,0),this._boundsArray.emplaceBack(o[3].x,o[3].y,0,t.EXTENT),this._boundsArray.emplaceBack(o[2].x,o[2].y,t.EXTENT,t.EXTENT),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})),this}prepare(){if(0===Object.keys(this.tiles).length||!this.image)return;const e=this.map.painter.context,i=e.gl;this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,S.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture||(this.texture=new l(e,this.image,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE));for(const t in this.tiles){const e=this.tiles[t];"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture);}}loadTile(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null));}serialize(){return {type:"image",url:this.options.url,coordinates:this.coordinates}}hasTransition(){return !1}}class z extends D{constructor(t,e,i,o){super(t,e,i,o),this.roundZoom=!0,this.type="video",this.options=e;}load(){this._loaded=!1;const e=this.options;this.urls=[];for(const i of e.urls)this.urls.push(this.map._requestManager.transformRequest(i,t.ResourceType.Source).url);t.getVideo(this.urls,((e,i)=>{this._loaded=!0,e?this.fire(new t.ErrorEvent(e)):i&&(this.video=i,this.video.loop=!0,this.video.addEventListener("playing",(()=>{this.map.triggerRepaint();})),this.map&&this.video.play(),this._finishLoading());}));}pause(){this.video&&this.video.pause();}play(){this.video&&this.video.play();}seek(e){if(this.video){const i=this.video.seekable;e<i.start(0)||e>i.end(0)?this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${this.id}`,null,`Playback for this video can be set only between the ${i.start(0)} and ${i.end(0)}-second mark.`))):this.video.currentTime=e;}}getVideo(){return this.video}onAdd(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)));}prepare(){if(0===Object.keys(this.tiles).length||this.video.readyState<2)return;const e=this.map.painter.context,i=e.gl;this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,S.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?this.video.paused||(this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE),i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,this.video)):(this.texture=new l(e,this.video,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE));for(const t in this.tiles){const e=this.tiles[t];"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture);}}serialize(){return {type:"video",urls:this.urls,coordinates:this.coordinates}}hasTransition(){return this.video&&!this.video.paused}}class P extends D{constructor(e,i,o,a){super(e,i,o,a),i.coordinates?Array.isArray(i.coordinates)&&4===i.coordinates.length&&!i.coordinates.some((t=>!Array.isArray(t)||2!==t.length||t.some((t=>"number"!=typeof t))))||this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'missing required property "coordinates"'))),i.animate&&"boolean"!=typeof i.animate&&this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'optional "animate" property must be a boolean value'))),i.canvas?"string"==typeof i.canvas||i.canvas instanceof HTMLCanvasElement||this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'missing required property "canvas"'))),this.options=i,this.animate=void 0===i.animate||i.animate;}load(){this._loaded=!0,this.canvas||(this.canvas=this.options.canvas instanceof HTMLCanvasElement?this.options.canvas:document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.ErrorEvent(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map.triggerRepaint();},this.pause=function(){this._playing&&(this.prepare(),this._playing=!1);},this._finishLoading());}getCanvas(){return this.canvas}onAdd(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play();}onRemove(){this.pause();}prepare(){let e=!1;if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),this._hasInvalidDimensions())return;if(0===Object.keys(this.tiles).length)return;const i=this.map.painter.context,o=i.gl;this.boundsBuffer||(this.boundsBuffer=i.createVertexBuffer(this._boundsArray,S.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?(e||this._playing)&&this.texture.update(this.canvas,{premultiply:!0}):this.texture=new l(i,this.canvas,o.RGBA,{premultiply:!0});for(const t in this.tiles){const e=this.tiles[t];"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture);}}serialize(){return {type:"canvas",coordinates:this.coordinates}}hasTransition(){return this._playing}_hasInvalidDimensions(){for(const t of [this.canvas.width,this.canvas.height])if(isNaN(t)||t<=0)return !0;return !1}}const M={vector:w,raster:T,"raster-dem":I,geojson:C,video:z,image:D,canvas:P};function A(e,i){const o=t.create();return t.translate(o,o,[1,1,0]),t.scale(o,o,[.5*e.width,.5*e.height,1]),t.multiply(o,o,e.calculatePosMatrix(i.toUnwrapped()))}function L(t,e,i,o,a,r){const s=function(t,e,i){if(t)for(const o of t){const t=e[o];if(t&&t.source===i&&"fill-extrusion"===t.type)return !0}else for(const t in e){const o=e[t];if(o.source===i&&"fill-extrusion"===o.type)return !0}return !1}(a&&a.layers,e,t.id),n=r.maxPitchScaleFactor(),l=t.tilesIn(o,n,s);l.sort(R);const c=[];for(const o of l)c.push({wrappedTileID:o.tileID.wrapped().key,queryResults:o.tile.queryRenderedFeatures(e,i,t._state,o.queryGeometry,o.cameraQueryGeometry,o.scale,a,r,n,A(t.transform,o.tileID))});const h=function(t){const e={},i={};for(const o of t){const t=o.queryResults,a=o.wrappedTileID,r=i[a]=i[a]||{};for(const i in t){const o=t[i],a=r[i]=r[i]||{},s=e[i]=e[i]||[];for(const t of o)a[t.featureIndex]||(a[t.featureIndex]=!0,s.push(t));}}return e}(c);for(const e in h)h[e].forEach((e=>{const i=e.feature,o=t.getFeatureState(i.layer["source-layer"],i.id);i.source=i.layer.source,i.layer["source-layer"]&&(i.sourceLayer=i.layer["source-layer"]),i.state=o;}));return h}function R(t,e){const i=t.tileID,o=e.tileID;return i.overscaledZ-o.overscaledZ||i.canonical.y-o.canonical.y||i.wrap-o.wrap||i.canonical.x-o.canonical.x}class k{constructor(e,i){this.tileID=e,this.uid=t.uniqueId(),this.uses=0,this.tileSize=i,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.textures=[],this.textureCoords={},this.expiredRequestCount=0,this.state="loading";}registerFadeDuration(e){const i=e+this.timeAdded;i<t.exported.now()||this.fadeEndTime&&i<this.fadeEndTime||(this.fadeEndTime=i);}wasRequested(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state}clearTextures(t){this.demTexture&&t.saveTileTexture(this.demTexture),this.textures.forEach((e=>t.saveTileTexture(e))),this.demTexture=null,this.textures=[],this.textureCoords={};}loadVectorData(e,i,o){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",e){e.featureIndex&&(this.latestFeatureIndex=e.featureIndex,e.rawTileData?(this.latestRawTileData=e.rawTileData,this.latestFeatureIndex.rawTileData=e.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=e.collisionBoxArray,this.buckets=function(t,e){const i={};if(!e)return i;for(const o of t){const t=o.layerIds.map((t=>e.getLayer(t))).filter(Boolean);if(0!==t.length){o.layers=t,o.stateDependentLayerIds&&(o.stateDependentLayers=o.stateDependentLayerIds.map((e=>t.filter((t=>t.id===e))[0])));for(const e of t)i[e.id]=o;}}return i}(e.buckets,i.style),this.hasSymbolBuckets=!1;for(const e in this.buckets){const i=this.buckets[e];if(i instanceof t.SymbolBucket){if(this.hasSymbolBuckets=!0,!o)break;i.justReloaded=!0;}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(const e in this.buckets){const i=this.buckets[e];if(i instanceof t.SymbolBucket&&i.hasRTLText){this.hasRTLText=!0,t.lazyLoadRTLTextPlugin();break}}this.queryPadding=0;for(const t in this.buckets){const e=this.buckets[t];this.queryPadding=Math.max(this.queryPadding,i.style.getLayer(t).queryRadius(e));}e.imageAtlas&&(this.imageAtlas=e.imageAtlas),e.glyphAtlasImage&&(this.glyphAtlasImage=e.glyphAtlasImage);}else this.collisionBoxArray=new t.CollisionBoxArray;}unloadVectorData(){for(const t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";}getBucket(t){return this.buckets[t.id]}upload(t){for(const e in this.buckets){const i=this.buckets[e];i.uploadPending()&&i.upload(t);}const e=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new l(t,this.imageAtlas.image,e.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new l(t,this.glyphAtlasImage,e.ALPHA),this.glyphAtlasImage=null);}prepare(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);}queryRenderedFeatures(t,e,i,o,a,r,s,n,l,c){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:o,cameraQueryGeometry:a,scale:r,tileSize:this.tileSize,pixelPosMatrix:c,transform:n,params:s,queryPadding:this.queryPadding*l},t,e,i):{}}querySourceFeatures(e,i){const o=this.latestFeatureIndex;if(!o||!o.rawTileData)return;const a=o.loadVTLayers(),r=i?i.sourceLayer:"",s=a._geojsonTileLayer||a[r];if(!s)return;const n=t.createFilter(i&&i.filter),{z:l,x:c,y:h}=this.tileID.canonical,u={z:l,x:c,y:h};for(let i=0;i<s.length;i++){const a=s.feature(i);if(n.needGeometry){const e=t.toEvaluationFeature(a,!0);if(!n.filter(new t.EvaluationParameters(this.tileID.overscaledZ),e,this.tileID.canonical))continue}else if(!n.filter(new t.EvaluationParameters(this.tileID.overscaledZ),a))continue;const d=o.getId(a,r),m=new t.GeoJSONFeature(a,l,c,h,d);m.tile=u,e.push(m);}}hasData(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state}patternsLoaded(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length}setExpiryData(e){const i=this.expirationTime;if(e.cacheControl){const i=t.parseCacheControl(e.cacheControl);i["max-age"]&&(this.expirationTime=Date.now()+1e3*i["max-age"]);}else e.expires&&(this.expirationTime=new Date(e.expires).getTime());if(this.expirationTime){const t=Date.now();let e=!1;if(this.expirationTime>t)e=!1;else if(i)if(this.expirationTime<i)e=!0;else {const o=this.expirationTime-i;o?this.expirationTime=t+Math.max(o,3e4):e=!0;}else e=!0;e?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}}getExpiryTimeout(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)}setFeatureState(t,e){if(!this.latestFeatureIndex||!this.latestFeatureIndex.rawTileData||0===Object.keys(t).length)return;const i=this.latestFeatureIndex.loadVTLayers();for(const o in this.buckets){if(!e.style.hasLayer(o))continue;const a=this.buckets[o],r=a.layers[0].sourceLayer||"_geojsonTileLayer",s=i[r],n=t[r];if(!s||!n||0===Object.keys(n).length)continue;a.update(n,s,this.imageAtlas&&this.imageAtlas.patternPositions||{});const l=e&&e.style&&e.style.getLayer(o);l&&(this.queryPadding=Math.max(this.queryPadding,l.queryRadius(a)));}}holdingForFade(){return void 0!==this.symbolFadeHoldUntil}symbolFadeFinished(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<t.exported.now()}clearFadeHold(){this.symbolFadeHoldUntil=void 0;}setHoldDuration(e){this.symbolFadeHoldUntil=t.exported.now()+e;}setDependencies(t,e){const i={};for(const t of e)i[t]=!0;this.dependencies[t]=i;}hasDependency(t,e){for(const i of t){const t=this.dependencies[i];if(t)for(const i of e)if(t[i])return !0}return !1}}class B{constructor(t,e){this.max=t,this.onRemove=e,this.reset();}reset(){for(const t in this.data)for(const e of this.data[t])e.timeout&&clearTimeout(e.timeout),this.onRemove(e.value);return this.data={},this.order=[],this}add(t,e,i){const o=t.wrapped().key;void 0===this.data[o]&&(this.data[o]=[]);const a={value:e,timeout:void 0};if(void 0!==i&&(a.timeout=setTimeout((()=>{this.remove(t,a);}),i)),this.data[o].push(a),this.order.push(o),this.order.length>this.max){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}has(t){return t.wrapped().key in this.data}getAndRemove(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null}_getAndRemoveByKey(t){const e=this.data[t].shift();return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value}getByKey(t){const e=this.data[t];return e?e[0].value:null}get(t){return this.has(t)?this.data[t.wrapped().key][0].value:null}remove(t,e){if(!this.has(t))return this;const i=t.wrapped().key,o=void 0===e?0:this.data[i].indexOf(e),a=this.data[i][o];return this.data[i].splice(o,1),a.timeout&&clearTimeout(a.timeout),0===this.data[i].length&&delete this.data[i],this.onRemove(a.value),this.order.splice(this.order.indexOf(i),1),this}setMaxSize(t){for(this.max=t;this.order.length>this.max;){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}filter(t){const e=[];for(const i in this.data)for(const o of this.data[i])t(o.value)||e.push(o);for(const t of e)this.remove(t.value.tileID,t);}}class F{constructor(){this.state={},this.stateChanges={},this.deletedStates={};}updateState(e,i,o){const a=String(i);if(this.stateChanges[e]=this.stateChanges[e]||{},this.stateChanges[e][a]=this.stateChanges[e][a]||{},t.extend(this.stateChanges[e][a],o),null===this.deletedStates[e]){this.deletedStates[e]={};for(const t in this.state[e])t!==a&&(this.deletedStates[e][t]=null);}else if(this.deletedStates[e]&&null===this.deletedStates[e][a]){this.deletedStates[e][a]={};for(const t in this.state[e][a])o[t]||(this.deletedStates[e][a][t]=null);}else for(const t in o)this.deletedStates[e]&&this.deletedStates[e][a]&&null===this.deletedStates[e][a][t]&&delete this.deletedStates[e][a][t];}removeFeatureState(t,e,i){if(null===this.deletedStates[t])return;const o=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},i&&void 0!==e)null!==this.deletedStates[t][o]&&(this.deletedStates[t][o]=this.deletedStates[t][o]||{},this.deletedStates[t][o][i]=null);else if(void 0!==e)if(this.stateChanges[t]&&this.stateChanges[t][o])for(i in this.deletedStates[t][o]={},this.stateChanges[t][o])this.deletedStates[t][o][i]=null;else this.deletedStates[t][o]=null;else this.deletedStates[t]=null;}getState(e,i){const o=String(i),a=t.extend({},(this.state[e]||{})[o],(this.stateChanges[e]||{})[o]);if(null===this.deletedStates[e])return {};if(this.deletedStates[e]){const t=this.deletedStates[e][i];if(null===t)return {};for(const e in t)delete a[e];}return a}initializeTileState(t,e){t.setFeatureState(this.state,e);}coalesceChanges(e,i){const o={};for(const e in this.stateChanges){this.state[e]=this.state[e]||{};const i={};for(const o in this.stateChanges[e])this.state[e][o]||(this.state[e][o]={}),t.extend(this.state[e][o],this.stateChanges[e][o]),i[o]=this.state[e][o];o[e]=i;}for(const e in this.deletedStates){this.state[e]=this.state[e]||{};const i={};if(null===this.deletedStates[e])for(const t in this.state[e])i[t]={},this.state[e][t]={};else for(const t in this.deletedStates[e]){if(null===this.deletedStates[e][t])this.state[e][t]={};else for(const i of Object.keys(this.deletedStates[e][t]))delete this.state[e][t][i];i[t]=this.state[e][t];}o[e]=o[e]||{},t.extend(o[e],i);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(o).length)for(const t in e)e[t].setFeatureState(o,i);}}class O extends t.Evented{constructor(e,i,o){super(),this.id=e,this.dispatcher=o,this.on("data",(t=>{"source"===t.dataType&&"metadata"===t.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&!this._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform,this.terrain));})),this.on("dataloading",(()=>{this._sourceErrored=!1;})),this.on("error",(()=>{this._sourceErrored=this._source.loaded();})),this._source=function(e,i,o,a){const r=new M[i.type](e,i,o,a);if(r.id!==e)throw new Error(`Expected Source id to be ${e} instead of ${r.id}`);return t.bindAll(["load","abort","unload","serialize","prepare"],r),r}(e,i,o,this),this._tiles={},this._cache=new B(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._loadedParentTiles={},this._coveredTiles={},this._state=new F;}onAdd(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t);}onRemove(t){this.clearTiles(),this._source&&this._source.onRemove&&this._source.onRemove(t);}loaded(){if(this._sourceErrored)return !0;if(!this._sourceLoaded)return !1;if(!this._source.loaded())return !1;for(const t in this._tiles){const e=this._tiles[t];if("loaded"!==e.state&&"errored"!==e.state)return !1}return !0}getSource(){return this._source}pause(){this._paused=!0;}resume(){if(!this._paused)return;const t=this._shouldReloadOnResume;this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform,this.terrain);}_loadTile(t,e){return this._source.loadTile(t,e)}_unloadTile(t){if(this._source.unloadTile)return this._source.unloadTile(t,(()=>{}))}_abortTile(e){this._source.abortTile&&this._source.abortTile(e,(()=>{})),this._source.fire(new t.Event("dataabort",{tile:e,coord:e.tileID,dataType:"source"}));}serialize(){return this._source.serialize()}prepare(t){this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null);for(const e in this._tiles){const i=this._tiles[e];i.upload(t),i.prepare(this.map.style.imageManager);}}getIds(){return Object.values(this._tiles).map((t=>t.tileID)).sort(U).map((t=>t.key))}getRenderableIds(e){const i=[];for(const t in this._tiles)this._isIdRenderable(t,e)&&i.push(this._tiles[t]);return e?i.sort(((e,i)=>{const o=e.tileID,a=i.tileID,r=new t.pointGeometry(o.canonical.x,o.canonical.y)._rotate(this.transform.angle),s=new t.pointGeometry(a.canonical.x,a.canonical.y)._rotate(this.transform.angle);return o.overscaledZ-a.overscaledZ||s.y-r.y||s.x-r.x})).map((t=>t.tileID.key)):i.map((t=>t.tileID)).sort(U).map((t=>t.key))}hasRenderableParent(t){const e=this.findLoadedParent(t,0);return !!e&&this._isIdRenderable(e.tileID.key)}_isIdRenderable(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())}reload(){if(this._paused)this._shouldReloadOnResume=!0;else {this._cache.reset();for(const t in this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(t,"reloading");}}_reloadTile(t,e){const i=this._tiles[t];i&&("loading"!==i.state&&(i.state=e),this._loadTile(i,this._tileLoaded.bind(this,i,t,e)));}_tileLoaded(e,i,o,a){if(a)return e.state="errored",void(404!==a.status?this._source.fire(new t.ErrorEvent(a,{tile:e})):this.update(this.transform,this.terrain));e.timeAdded=t.exported.now(),"expired"===o&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(i,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._state.initializeTileState(e,this.map?this.map.painter:null),e.aborted||this._source.fire(new t.Event("data",{dataType:"source",tile:e,coord:e.tileID}));}_backfillDEM(t){const e=this.getRenderableIds();for(let o=0;o<e.length;o++){const a=e[o];if(t.neighboringTiles&&t.neighboringTiles[a]){const e=this.getTileByID(a);i(t,e),i(e,t);}}function i(t,e){t.needsHillshadePrepare=!0,t.needsTerrainPrepare=!0;let i=e.tileID.canonical.x-t.tileID.canonical.x;const o=e.tileID.canonical.y-t.tileID.canonical.y,a=Math.pow(2,t.tileID.canonical.z),r=e.tileID.key;0===i&&0===o||Math.abs(o)>1||(Math.abs(i)>1&&(1===Math.abs(i+a)?i+=a:1===Math.abs(i-a)&&(i-=a)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,i,o),t.neighboringTiles&&t.neighboringTiles[r]&&(t.neighboringTiles[r].backfilled=!0)));}}getTile(t){return this.getTileByID(t.key)}getTileByID(t){return this._tiles[t]}_retainLoadedChildren(t,e,i,o){for(const a in this._tiles){let r=this._tiles[a];if(o[a]||!r.hasData()||r.tileID.overscaledZ<=e||r.tileID.overscaledZ>i)continue;let s=r.tileID;for(;r&&r.tileID.overscaledZ>e+1;){const t=r.tileID.scaledTo(r.tileID.overscaledZ-1);r=this._tiles[t.key],r&&r.hasData()&&(s=t);}let n=s;for(;n.overscaledZ>e;)if(n=n.scaledTo(n.overscaledZ-1),t[n.key]){o[s.key]=s;break}}}findLoadedParent(t,e){if(t.key in this._loadedParentTiles){const i=this._loadedParentTiles[t.key];return i&&i.tileID.overscaledZ>=e?i:null}for(let i=t.overscaledZ-1;i>=e;i--){const e=t.scaledTo(i),o=this._getLoadedTile(e);if(o)return o}}_getLoadedTile(t){const e=this._tiles[t.key];return e&&e.hasData()?e:this._cache.getByKey(t.wrapped().key)}updateCacheSize(t){const e=Math.ceil(t.width/this._source.tileSize)+1,i=Math.ceil(t.height/this._source.tileSize)+1,o=Math.floor(e*i*5),a="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,o):o;this._cache.setMaxSize(a);}handleWrapJump(t){const e=Math.round((t-(void 0===this._prevLng?t:this._prevLng))/360);if(this._prevLng=t,e){const t={};for(const i in this._tiles){const o=this._tiles[i];o.tileID=o.tileID.unwrapTo(o.tileID.wrap+e),t[o.tileID.key]=o;}this._tiles=t;for(const t in this._timers)clearTimeout(this._timers[t]),delete this._timers[t];for(const t in this._tiles)this._setTileReloadTimer(t,this._tiles[t]);}}update(e,i){if(this.transform=e,this.terrain=i,!this._sourceLoaded||this._paused)return;let o;this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used||this.usedForTerrain?this._source.tileID?o=e.getVisibleUnwrappedCoordinates(this._source.tileID).map((e=>new t.OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y))):(o=e.coveringTiles({tileSize:this.usedForTerrain?this.tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:!this.usedForTerrain&&this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled,terrain:i}),this._source.hasTile&&(o=o.filter((t=>this._source.hasTile(t))))):o=[];const a=e.coveringZoomLevel(this._source),r=Math.max(a-O.maxOverzooming,this._source.minzoom),s=Math.max(a+O.maxUnderzooming,this._source.minzoom);if(this.usedForTerrain){const t={};for(const e of o)if(e.canonical.z>this._source.minzoom){const i=e.scaledTo(e.canonical.z-1);t[i.key]=i;const o=e.scaledTo(Math.max(this._source.minzoom,Math.min(e.canonical.z,5)));t[o.key]=o;}o=o.concat(Object.values(t));}const n=this._updateRetainedTiles(o,a);if(N(this._source.type)){const e={},l={},c=Object.keys(n);for(const i of c){const o=n[i],a=this._tiles[i];if(!a||a.fadeEndTime&&a.fadeEndTime<=t.exported.now())continue;const s=this.findLoadedParent(o,r);s&&(this._addTile(s.tileID),e[s.tileID.key]=s.tileID),l[i]=o;}this._retainLoadedChildren(l,a,s,n);for(const t in e)n[t]||(this._coveredTiles[t]=!0,n[t]=e[t]);if(i){const t={},e={};for(const i of o)this._tiles[i.key].hasData()?t[i.key]=i:e[i.key]=i;for(const i in e){const o=e[i].children(this._source.maxzoom);this._tiles[o[0].key]&&this._tiles[o[1].key]&&this._tiles[o[2].key]&&this._tiles[o[3].key]&&(t[o[0].key]=n[o[0].key]=o[0],t[o[1].key]=n[o[1].key]=o[1],t[o[2].key]=n[o[2].key]=o[2],t[o[3].key]=n[o[3].key]=o[3],delete e[i]);}for(const i in e){const o=this.findLoadedParent(e[i],this._source.minzoom);if(o){t[o.tileID.key]=n[o.tileID.key]=o.tileID;for(const e in t)t[e].isChildOf(o.tileID)&&delete t[e];}}for(const e in this._tiles)t[e]||(this._coveredTiles[e]=!0);}}for(const t in n)this._tiles[t].clearFadeHold();const l=t.keysDifference(this._tiles,n);for(const t of l){const e=this._tiles[t];e.hasSymbolBuckets&&!e.holdingForFade()?e.setHoldDuration(this.map._fadeDuration):e.hasSymbolBuckets&&!e.symbolFadeFinished()||this._removeTile(t);}this._updateLoadedParentTileCache();}releaseSymbolFadeTiles(){for(const t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(t);}_updateRetainedTiles(t,e){const i={},o={},a=Math.max(e-O.maxOverzooming,this._source.minzoom),r=Math.max(e+O.maxUnderzooming,this._source.minzoom),s={};for(const o of t){const t=this._addTile(o);i[o.key]=o,t.hasData()||e<this._source.maxzoom&&(s[o.key]=o);}this._retainLoadedChildren(s,e,r,i);for(const r of t){let t=this._tiles[r.key];if(t.hasData())continue;if(e+1>this._source.maxzoom){const t=r.children(this._source.maxzoom)[0],e=this.getTile(t);if(e&&e.hasData()){i[t.key]=t;continue}}else {const t=r.children(this._source.maxzoom);if(i[t[0].key]&&i[t[1].key]&&i[t[2].key]&&i[t[3].key])continue}let s=t.wasRequested();for(let e=r.overscaledZ-1;e>=a;--e){const a=r.scaledTo(e);if(o[a.key])break;if(o[a.key]=!0,t=this.getTile(a),!t&&s&&(t=this._addTile(a)),t&&(i[a.key]=a,s=t.wasRequested(),t.hasData()))break}}return i}_updateLoadedParentTileCache(){this._loadedParentTiles={};for(const t in this._tiles){const e=[];let i,o=this._tiles[t].tileID;for(;o.overscaledZ>0;){if(o.key in this._loadedParentTiles){i=this._loadedParentTiles[o.key];break}e.push(o.key);const t=o.scaledTo(o.overscaledZ-1);if(i=this._getLoadedTile(t),i)break;o=t;}for(const t of e)this._loadedParentTiles[t]=i;}}_addTile(e){let i=this._tiles[e.key];if(i)return i;i=this._cache.getAndRemove(e),i&&(this._setTileReloadTimer(e.key,i),i.tileID=e,this._state.initializeTileState(i,this.map?this.map.painter:null),this._cacheTimers[e.key]&&(clearTimeout(this._cacheTimers[e.key]),delete this._cacheTimers[e.key],this._setTileReloadTimer(e.key,i)));const o=i;return i||(i=new k(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(i,this._tileLoaded.bind(this,i,e.key,i.state))),i.uses++,this._tiles[e.key]=i,o||this._source.fire(new t.Event("dataloading",{tile:i,coord:i.tileID,dataType:"source"})),i}_setTileReloadTimer(t,e){t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t]);const i=e.getExpiryTimeout();i&&(this._timers[t]=setTimeout((()=>{this._reloadTile(t,"expired"),delete this._timers[t];}),i));}_removeTile(t){const e=this._tiles[t];e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))));}clearTiles(){this._shouldReloadOnResume=!1,this._paused=!1;for(const t in this._tiles)this._removeTile(t);this._cache.reset();}tilesIn(e,i,o){const a=[],r=this.transform;if(!r)return a;const s=o?r.getCameraQueryGeometry(e):e,n=e.map((t=>r.pointCoordinate(t,this.terrain))),l=s.map((t=>r.pointCoordinate(t,this.terrain))),c=this.getIds();let h=1/0,u=1/0,d=-1/0,m=-1/0;for(const t of l)h=Math.min(h,t.x),u=Math.min(u,t.y),d=Math.max(d,t.x),m=Math.max(m,t.y);for(let e=0;e<c.length;e++){const o=this._tiles[c[e]];if(o.holdingForFade())continue;const s=o.tileID,_=Math.pow(2,r.zoom-o.tileID.overscaledZ),p=i*o.queryPadding*t.EXTENT/o.tileSize/_,f=[s.getTilePoint(new t.MercatorCoordinate(h,u)),s.getTilePoint(new t.MercatorCoordinate(d,m))];if(f[0].x-p<t.EXTENT&&f[0].y-p<t.EXTENT&&f[1].x+p>=0&&f[1].y+p>=0){const t=n.map((t=>s.getTilePoint(t))),e=l.map((t=>s.getTilePoint(t)));a.push({tile:o,tileID:s,queryGeometry:t,cameraQueryGeometry:e,scale:_});}}return a}getVisibleCoordinates(t){const e=this.getRenderableIds(t).map((t=>this._tiles[t].tileID));for(const t of e)t.posMatrix=this.transform.calculatePosMatrix(t.toUnwrapped());return e}hasTransition(){if(this._source.hasTransition())return !0;if(N(this._source.type))for(const e in this._tiles){const i=this._tiles[e];if(void 0!==i.fadeEndTime&&i.fadeEndTime>=t.exported.now())return !0}return !1}setFeatureState(t,e,i){this._state.updateState(t=t||"_geojsonTileLayer",e,i);}removeFeatureState(t,e,i){this._state.removeFeatureState(t=t||"_geojsonTileLayer",e,i);}getFeatureState(t,e){return this._state.getState(t=t||"_geojsonTileLayer",e)}setDependencies(t,e,i){const o=this._tiles[t];o&&o.setDependencies(e,i);}reloadTilesForDependencies(t,e){for(const i in this._tiles)this._tiles[i].hasDependency(t,e)&&this._reloadTile(i,"reloading");this._cache.filter((i=>!i.hasDependency(t,e)));}}function U(t,e){const i=Math.abs(2*t.wrap)-+(t.wrap<0),o=Math.abs(2*e.wrap)-+(e.wrap<0);return t.overscaledZ-e.overscaledZ||o-i||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function N(t){return "raster"===t||"image"===t||"video"===t}O.maxOverzooming=10,O.maxUnderzooming=3;const G="mapboxgl_preloaded_worker_pool";class Z{constructor(){this.active={};}acquire(t){if(!this.workers)for(this.workers=[];this.workers.length<Z.workerCount;)this.workers.push(new Worker(ba.workerUrl));return this.active[t]=!0,this.workers.slice()}release(t){delete this.active[t],0===this.numActive()&&(this.workers.forEach((t=>{t.terminate();})),this.workers=null);}isPreloaded(){return !!this.active[G]}numActive(){return Object.keys(this.active).length}}const V=Math.floor(t.exported.hardwareConcurrency/2);let q;function j(){return q||(q=new Z),q}function $(e,i){const o={};for(const t in e)"ref"!==t&&(o[t]=e[t]);return t.refProperties.forEach((t=>{t in i&&(o[t]=i[t]);})),o}function X(t){t=t.slice();const e=Object.create(null);for(let i=0;i<t.length;i++)e[t[i].id]=t[i];for(let i=0;i<t.length;i++)"ref"in t[i]&&(t[i]=$(t[i],e[t[i].ref]));return t}Z.workerCount=Math.max(Math.min(V,6),1);const W={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"};function H(t,e,i){i.push({command:W.addSource,args:[t,e[t]]});}function K(t,e,i){e.push({command:W.removeSource,args:[t]}),i[t]=!0;}function Y(t,e,i,o){K(t,i,o),H(t,e,i);}function J(t,e,i){let o;for(o in t[i])if(Object.prototype.hasOwnProperty.call(t[i],o)&&"data"!==o&&!a(t[i][o],e[i][o]))return !1;for(o in e[i])if(Object.prototype.hasOwnProperty.call(e[i],o)&&"data"!==o&&!a(t[i][o],e[i][o]))return !1;return !0}function Q(t,e,i,o,r,s){let n;for(n in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(a(t[n],e[n])||i.push({command:s,args:[o,n,e[n],r]}));for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&!Object.prototype.hasOwnProperty.call(t,n)&&(a(t[n],e[n])||i.push({command:s,args:[o,n,e[n],r]}));}function tt(t){return t.id}function et(t,e){return t[e.id]=e,t}class it{constructor(t,e){this.reset(t,e);}reset(t,e){this.points=t||[],this._distances=[0];for(let t=1;t<this.points.length;t++)this._distances[t]=this._distances[t-1]+this.points[t].dist(this.points[t-1]);this.length=this._distances[this._distances.length-1],this.padding=Math.min(e||0,.5*this.length),this.paddedLength=this.length-2*this.padding;}lerp(e){if(1===this.points.length)return this.points[0];e=t.clamp(e,0,1);let i=1,o=this._distances[i];const a=e*this.paddedLength+this.padding;for(;o<a&&i<this._distances.length;)o=this._distances[++i];const r=i-1,s=this._distances[r],n=o-s,l=n>0?(a-s)/n:0;return this.points[r].mult(1-l).add(this.points[i].mult(l))}}function ot(t,e){let i=!0;return "always"===t||"never"!==t&&"never"!==e||(i=!1),i}class at{constructor(t,e,i){const o=this.boxCells=[],a=this.circleCells=[];this.xCellCount=Math.ceil(t/i),this.yCellCount=Math.ceil(e/i);for(let t=0;t<this.xCellCount*this.yCellCount;t++)o.push([]),a.push([]);this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0;}keysLength(){return this.boxKeys.length+this.circleKeys.length}insert(t,e,i,o,a){this._forEachCell(e,i,o,a,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(o),this.bboxes.push(a);}insertCircle(t,e,i,o){this._forEachCell(e-o,i-o,e+o,i+o,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(i),this.circles.push(o);}_insertBoxCell(t,e,i,o,a,r){this.boxCells[a].push(r);}_insertCircleCell(t,e,i,o,a,r){this.circleCells[a].push(r);}_query(t,e,i,o,a,r,s){if(i<0||t>this.width||o<0||e>this.height)return [];const n=[];if(t<=0&&e<=0&&this.width<=i&&this.height<=o){if(a)return [{key:null,x1:t,y1:e,x2:i,y2:o}];for(let t=0;t<this.boxKeys.length;t++)n.push({key:this.boxKeys[t],x1:this.bboxes[4*t],y1:this.bboxes[4*t+1],x2:this.bboxes[4*t+2],y2:this.bboxes[4*t+3]});for(let t=0;t<this.circleKeys.length;t++){const e=this.circles[3*t],i=this.circles[3*t+1],o=this.circles[3*t+2];n.push({key:this.circleKeys[t],x1:e-o,y1:i-o,x2:e+o,y2:i+o});}}else this._forEachCell(t,e,i,o,this._queryCell,n,{hitTest:a,overlapMode:r,seenUids:{box:{},circle:{}}},s);return n}query(t,e,i,o){return this._query(t,e,i,o,!1,null)}hitTest(t,e,i,o,a,r){return this._query(t,e,i,o,!0,a,r).length>0}hitTestCircle(t,e,i,o,a){const r=t-i,s=t+i,n=e-i,l=e+i;if(s<0||r>this.width||l<0||n>this.height)return !1;const c=[];return this._forEachCell(r,n,s,l,this._queryCellCircle,c,{hitTest:!0,overlapMode:o,circle:{x:t,y:e,radius:i},seenUids:{box:{},circle:{}}},a),c.length>0}_queryCell(t,e,i,o,a,r,s,n){const{seenUids:l,hitTest:c,overlapMode:h}=s,u=this.boxCells[a];if(null!==u){const a=this.bboxes;for(const s of u)if(!l.box[s]){l.box[s]=!0;const u=4*s,d=this.boxKeys[s];if(t<=a[u+2]&&e<=a[u+3]&&i>=a[u+0]&&o>=a[u+1]&&(!n||n(d))&&(!c||!ot(h,d.overlapMode))&&(r.push({key:d,x1:a[u],y1:a[u+1],x2:a[u+2],y2:a[u+3]}),c))return !0}}const d=this.circleCells[a];if(null!==d){const a=this.circles;for(const s of d)if(!l.circle[s]){l.circle[s]=!0;const u=3*s,d=this.circleKeys[s];if(this._circleAndRectCollide(a[u],a[u+1],a[u+2],t,e,i,o)&&(!n||n(d))&&(!c||!ot(h,d.overlapMode))){const t=a[u],e=a[u+1],i=a[u+2];if(r.push({key:d,x1:t-i,y1:e-i,x2:t+i,y2:e+i}),c)return !0}}}return !1}_queryCellCircle(t,e,i,o,a,r,s,n){const{circle:l,seenUids:c,overlapMode:h}=s,u=this.boxCells[a];if(null!==u){const t=this.bboxes;for(const e of u)if(!c.box[e]){c.box[e]=!0;const i=4*e,o=this.boxKeys[e];if(this._circleAndRectCollide(l.x,l.y,l.radius,t[i+0],t[i+1],t[i+2],t[i+3])&&(!n||n(o))&&!ot(h,o.overlapMode))return r.push(!0),!0}}const d=this.circleCells[a];if(null!==d){const t=this.circles;for(const e of d)if(!c.circle[e]){c.circle[e]=!0;const i=3*e,o=this.circleKeys[e];if(this._circlesCollide(t[i],t[i+1],t[i+2],l.x,l.y,l.radius)&&(!n||n(o))&&!ot(h,o.overlapMode))return r.push(!0),!0}}}_forEachCell(t,e,i,o,a,r,s,n){const l=this._convertToXCellCoord(t),c=this._convertToYCellCoord(e),h=this._convertToXCellCoord(i),u=this._convertToYCellCoord(o);for(let d=l;d<=h;d++)for(let l=c;l<=u;l++)if(a.call(this,t,e,i,o,this.xCellCount*l+d,r,s,n))return}_convertToXCellCoord(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))}_convertToYCellCoord(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))}_circlesCollide(t,e,i,o,a,r){const s=o-t,n=a-e,l=i+r;return l*l>s*s+n*n}_circleAndRectCollide(t,e,i,o,a,r,s){const n=(r-o)/2,l=Math.abs(t-(o+n));if(l>n+i)return !1;const c=(s-a)/2,h=Math.abs(e-(a+c));if(h>c+i)return !1;if(l<=n||h<=c)return !0;const u=l-n,d=h-c;return u*u+d*d<=i*i}}function rt(e,i,o,a,r){const s=t.create();return i?(t.scale(s,s,[1/r,1/r,1]),o||t.rotateZ(s,s,a.angle)):t.multiply(s,a.labelPlaneMatrix,e),s}function st(e,i,o,a,r){if(i){const i=t.clone(e);return t.scale(i,i,[r,r,1]),o||t.rotateZ(i,i,-a.angle),i}return a.glCoordMatrix}function nt(e,i,o){let a;o?(a=[e.x,e.y,o(e.x,e.y),1],t.transformMat4(a,a,i)):(a=[e.x,e.y,0,1],xt(a,a,i));const r=a[3];return {point:new t.pointGeometry(a[0]/r,a[1]/r),signedDistanceFromCamera:r}}function lt(t,e){return .5+t/e*.5}function ct(t,e){const i=t[0]/t[3],o=t[1]/t[3];return i>=-e[0]&&i<=e[0]&&o>=-e[1]&&o<=e[1]}function ht(e,i,o,a,r,s,n,l,c,h){const u=a?e.textSizeData:e.iconSizeData,d=t.evaluateSizeForZoom(u,o.transform.zoom),m=[256/o.width*2+1,256/o.height*2+1],_=a?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray;_.clear();const p=e.lineVertexArray,f=a?e.text.placedSymbolArray:e.icon.placedSymbolArray,g=o.transform.width/o.transform.height;let x=!1;for(let a=0;a<f.length;a++){const v=f.get(a);if(v.hidden||v.writingMode===t.WritingMode.vertical&&!x){gt(v.numGlyphs,_);continue}let y;if(x=!1,h?(y=[v.anchorX,v.anchorY,h(v.anchorX,v.anchorY),1],t.transformMat4(y,y,i)):(y=[v.anchorX,v.anchorY,0,1],xt(y,y,i)),!ct(y,m)){gt(v.numGlyphs,_);continue}const b=lt(o.transform.cameraToCenterDistance,y[3]),w=t.evaluateSizeForFeature(u,d,v),T=n?w/b:w*b,E=new t.pointGeometry(v.anchorX,v.anchorY),I=nt(E,r,h).point,C={},S=mt(v,T,!1,l,i,r,s,e.glyphOffsetArray,p,_,I,E,C,g,c,h);x=S.useVertical,(S.notEnoughRoom||x||S.needsFlipping&&mt(v,T,!0,l,i,r,s,e.glyphOffsetArray,p,_,I,E,C,g,c,h).notEnoughRoom)&&gt(v.numGlyphs,_);}a?e.text.dynamicLayoutVertexBuffer.updateData(_):e.icon.dynamicLayoutVertexBuffer.updateData(_);}function ut(t,e,i,o,a,r,s,n,l,c,h,u,d){const m=n.glyphStartIndex+n.numGlyphs,_=n.lineStartIndex,p=n.lineStartIndex+n.lineLength,f=e.getoffsetX(n.glyphStartIndex),g=e.getoffsetX(m-1),x=pt(t*f,i,o,a,r,s,n.segment,_,p,l,c,h,u,d);if(!x)return null;const v=pt(t*g,i,o,a,r,s,n.segment,_,p,l,c,h,u,d);return v?{first:x,last:v}:null}function dt(e,i,o,a){return e===t.WritingMode.horizontal&&Math.abs(o.y-i.y)>Math.abs(o.x-i.x)*a?{useVertical:!0}:(e===t.WritingMode.vertical?i.y<o.y:i.x>o.x)?{needsFlipping:!0}:null}function mt(e,i,o,a,r,s,n,l,c,h,u,d,m,_,p,f){const g=i/24,x=e.lineOffsetX*g,v=e.lineOffsetY*g;let y;if(e.numGlyphs>1){const t=e.glyphStartIndex+e.numGlyphs,i=e.lineStartIndex,r=e.lineStartIndex+e.lineLength,h=ut(g,l,x,v,o,u,d,e,c,s,m,p,f);if(!h)return {notEnoughRoom:!0};const b=nt(h.first.point,n,f).point,w=nt(h.last.point,n,f).point;if(a&&!o){const t=dt(e.writingMode,b,w,_);if(t)return t}y=[h.first];for(let a=e.glyphStartIndex+1;a<t-1;a++)y.push(pt(g*l.getoffsetX(a),x,v,o,u,d,e.segment,i,r,c,s,m,p,f));y.push(h.last);}else {if(a&&!o){const i=nt(d,r,f).point,o=e.lineStartIndex+e.segment+1,a=new t.pointGeometry(c.getx(o),c.gety(o)),s=nt(a,r,f),n=s.signedDistanceFromCamera>0?s.point:_t(d,a,i,1,r,f),l=dt(e.writingMode,i,n,_);if(l)return l}const i=pt(g*l.getoffsetX(e.glyphStartIndex),x,v,o,u,d,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,c,s,m,p,f);if(!i)return {notEnoughRoom:!0};y=[i];}for(const e of y)t.addDynamicAttributes(h,e.point,e.angle);return {}}function _t(t,e,i,o,a,r){const s=nt(t.add(t.sub(e)._unit()),a,r).point,n=i.sub(s);return i.add(n._mult(o/n.mag()))}function pt(e,i,o,a,r,s,n,l,c,h,u,d,m,_){const p=a?e-i:e+i;let f=p>0?1:-1,g=0;a&&(f*=-1,g=Math.PI),f<0&&(g+=Math.PI);let x=f>0?l+n:l+n+1,v=r,y=r,b=0,w=0;const T=Math.abs(p),E=[];for(;b+w<=T;){if(x+=f,x<l||x>=c)return null;if(y=v,E.push(v),v=d[x],void 0===v){const e=new t.pointGeometry(h.getx(x),h.gety(x)),i=nt(e,u,_);if(i.signedDistanceFromCamera>0)v=d[x]=i.point;else {const i=x-f;v=_t(0===b?s:new t.pointGeometry(h.getx(i),h.gety(i)),e,y,T-b+1,u,_);}}b+=w,w=y.dist(v);}const I=(T-b)/w,C=v.sub(y),S=C.mult(I)._add(y);S._add(C._unit()._perp()._mult(o*f));const D=g+Math.atan2(v.y-y.y,v.x-y.x);return E.push(S),{point:S,angle:m?D:0,path:E}}const ft=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0]);function gt(t,e){for(let i=0;i<t;i++){const t=e.length;e.resize(t+4),e.float32.set(ft,3*t);}}function xt(t,e,i){const o=e[0],a=e[1];return t[0]=i[0]*o+i[4]*a+i[12],t[1]=i[1]*o+i[5]*a+i[13],t[3]=i[3]*o+i[7]*a+i[15],t}const vt=100;class yt{constructor(t,e=new at(t.width+200,t.height+200,25),i=new at(t.width+200,t.height+200,25)){this.transform=t,this.grid=e,this.ignoredGrid=i,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+vt,this.screenBottomBoundary=t.height+vt,this.gridRightBoundary=t.width+200,this.gridBottomBoundary=t.height+200,this.perspectiveRatioCutoff=.6;}placeCollisionBox(t,e,i,o,a,r){const s=this.projectAndGetPerspectiveRatio(o,t.anchorPointX,t.anchorPointY,r),n=i*s.perspectiveRatio,l=t.x1*n+s.point.x,c=t.y1*n+s.point.y,h=t.x2*n+s.point.x,u=t.y2*n+s.point.y;return !this.isInsideGrid(l,c,h,u)||"always"!==e&&this.grid.hitTest(l,c,h,u,e,a)||s.perspectiveRatio<this.perspectiveRatioCutoff?{box:[],offscreen:!1}:{box:[l,c,h,u],offscreen:this.isOffscreen(l,c,h,u)}}placeCollisionCircles(e,i,o,a,r,s,n,l,c,h,u,d,m,_){const p=[],f=new t.pointGeometry(i.anchorX,i.anchorY),g=nt(f,s,_),x=lt(this.transform.cameraToCenterDistance,g.signedDistanceFromCamera),v=(h?r/x:r*x)/t.ONE_EM,y=nt(f,n,_).point,b=ut(v,a,i.lineOffsetX*v,i.lineOffsetY*v,!1,y,f,i,o,n,{},!1,_);let w=!1,T=!1,E=!0;if(b){const i=.5*d*x+m,o=new t.pointGeometry(-100,-100),a=new t.pointGeometry(this.screenRightBoundary,this.screenBottomBoundary),r=new it,s=b.first,n=b.last;let h=[];for(let t=s.path.length-1;t>=1;t--)h.push(s.path[t]);for(let t=1;t<n.path.length;t++)h.push(n.path[t]);const f=2.5*i;if(l){const t=h.map((t=>nt(t,l,_)));h=t.some((t=>t.signedDistanceFromCamera<=0))?[]:t.map((t=>t.point));}let g=[];if(h.length>0){const e=h[0].clone(),i=h[0].clone();for(let t=1;t<h.length;t++)e.x=Math.min(e.x,h[t].x),e.y=Math.min(e.y,h[t].y),i.x=Math.max(i.x,h[t].x),i.y=Math.max(i.y,h[t].y);g=e.x>=o.x&&i.x<=a.x&&e.y>=o.y&&i.y<=a.y?[h]:i.x<o.x||e.x>a.x||i.y<o.y||e.y>a.y?[]:t.clipLine([h],o.x,o.y,a.x,a.y);}for(const t of g){r.reset(t,.25*i);let o=0;o=r.length<=.5*i?1:Math.ceil(r.paddedLength/f)+1;for(let t=0;t<o;t++){const a=t/Math.max(o-1,1),s=r.lerp(a),n=s.x+vt,l=s.y+vt;p.push(n,l,i,0);const h=n-i,d=l-i,m=n+i,_=l+i;if(E=E&&this.isOffscreen(h,d,m,_),T=T||this.isInsideGrid(h,d,m,_),"always"!==e&&this.grid.hitTestCircle(n,l,i,e,u)&&(w=!0,!c))return {circles:[],offscreen:!1,collisionDetected:w}}}}return {circles:!c&&w||!T||x<this.perspectiveRatioCutoff?[]:p,offscreen:E,collisionDetected:w}}queryRenderedSymbols(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return {};const i=[];let o=1/0,a=1/0,r=-1/0,s=-1/0;for(const n of e){const e=new t.pointGeometry(n.x+vt,n.y+vt);o=Math.min(o,e.x),a=Math.min(a,e.y),r=Math.max(r,e.x),s=Math.max(s,e.y),i.push(e);}const n=this.grid.query(o,a,r,s).concat(this.ignoredGrid.query(o,a,r,s)),l={},c={};for(const e of n){const o=e.key;if(void 0===l[o.bucketInstanceId]&&(l[o.bucketInstanceId]={}),l[o.bucketInstanceId][o.featureIndex])continue;const a=[new t.pointGeometry(e.x1,e.y1),new t.pointGeometry(e.x2,e.y1),new t.pointGeometry(e.x2,e.y2),new t.pointGeometry(e.x1,e.y2)];t.polygonIntersectsPolygon(i,a)&&(l[o.bucketInstanceId][o.featureIndex]=!0,void 0===c[o.bucketInstanceId]&&(c[o.bucketInstanceId]=[]),c[o.bucketInstanceId].push(o.featureIndex));}return c}insertCollisionBox(t,e,i,o,a,r){(i?this.ignoredGrid:this.grid).insert({bucketInstanceId:o,featureIndex:a,collisionGroupID:r,overlapMode:e},t[0],t[1],t[2],t[3]);}insertCollisionCircles(t,e,i,o,a,r){const s=i?this.ignoredGrid:this.grid,n={bucketInstanceId:o,featureIndex:a,collisionGroupID:r,overlapMode:e};for(let e=0;e<t.length;e+=4)s.insertCircle(n,t[e],t[e+1],t[e+2]);}projectAndGetPerspectiveRatio(e,i,o,a){let r;return a?(r=[i,o,a(i,o),1],t.transformMat4(r,r,e)):(r=[i,o,0,1],xt(r,r,e)),{point:new t.pointGeometry((r[0]/r[3]+1)/2*this.transform.width+vt,(-r[1]/r[3]+1)/2*this.transform.height+vt),perspectiveRatio:.5+this.transform.cameraToCenterDistance/r[3]*.5}}isOffscreen(t,e,i,o){return i<vt||t>=this.screenRightBoundary||o<vt||e>this.screenBottomBoundary}isInsideGrid(t,e,i,o){return i>=0&&t<this.gridRightBoundary&&o>=0&&e<this.gridBottomBoundary}getViewportMatrix(){const e=t.identity([]);return t.translate(e,e,[-100,-100,0]),e}}function bt(e,i,o){return i*(t.EXTENT/(e.tileSize*Math.pow(2,o-e.tileID.overscaledZ)))}class wt{constructor(t,e,i,o){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):o&&i?1:0,this.placed=i;}isHidden(){return 0===this.opacity&&!this.placed}}class Tt{constructor(t,e,i,o,a){this.text=new wt(t?t.text:null,e,i,a),this.icon=new wt(t?t.icon:null,e,o,a);}isHidden(){return this.text.isHidden()&&this.icon.isHidden()}}class Et{constructor(t,e,i){this.text=t,this.icon=e,this.skipFade=i;}}class It{constructor(){this.invProjMatrix=t.create(),this.viewportMatrix=t.create(),this.circles=[];}}class Ct{constructor(t,e,i,o,a){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=i,this.bucketIndex=o,this.tileID=a;}}class St{constructor(t){this.crossSourceCollisions=t,this.maxGroupID=0,this.collisionGroups={};}get(t){if(this.crossSourceCollisions)return {ID:0,predicate:null};if(!this.collisionGroups[t]){const e=++this.maxGroupID;this.collisionGroups[t]={ID:e,predicate:t=>t.collisionGroupID===e};}return this.collisionGroups[t]}}function Dt(e,i,o,a,r){const{horizontalAlign:s,verticalAlign:n}=t.getAnchorAlignment(e),l=-(s-.5)*i,c=-(n-.5)*o,h=t.evaluateVariableOffset(e,a);return new t.pointGeometry(l+h[0]*r,c+h[1]*r)}function zt(e,i,o,a,r,s){const{x1:n,x2:l,y1:c,y2:h,anchorPointX:u,anchorPointY:d}=e,m=new t.pointGeometry(i,o);return a&&m._rotate(r?s:-s),{x1:n+m.x,y1:c+m.y,x2:l+m.x,y2:h+m.y,anchorPointX:u,anchorPointY:d}}class Pt{constructor(t,e,i,o,a){this.transform=t.clone(),this.terrain=e,this.collisionIndex=new yt(this.transform),this.placements={},this.opacities={},this.variableOffsets={},this.stale=!1,this.commitTime=0,this.fadeDuration=i,this.retainedQueryData={},this.collisionGroups=new St(o),this.collisionCircleArrays={},this.prevPlacement=a,a&&(a.prevPlacement=void 0),this.placedOrientations={};}getBucketParts(e,i,o,a){const r=o.getBucket(i),s=o.latestFeatureIndex;if(!r||!s||i.id!==r.layerIds[0])return;const n=o.collisionBoxArray,l=r.layers[0].layout,c=Math.pow(2,this.transform.zoom-o.tileID.overscaledZ),h=o.tileSize/t.EXTENT,u=this.transform.calculatePosMatrix(o.tileID.toUnwrapped()),d="map"===l.get("text-pitch-alignment"),m="map"===l.get("text-rotation-alignment"),_=bt(o,1,this.transform.zoom),p=rt(u,d,m,this.transform,_);let f=null;if(d){const e=st(u,d,m,this.transform,_);f=t.multiply([],this.transform.labelPlaneMatrix,e);}this.retainedQueryData[r.bucketInstanceId]=new Ct(r.bucketInstanceId,s,r.sourceLayerIndex,r.index,o.tileID);const g={bucket:r,layout:l,posMatrix:u,textLabelPlaneMatrix:p,labelToScreenMatrix:f,scale:c,textPixelRatio:h,holdingForFade:o.holdingForFade(),collisionBoxArray:n,partiallyEvaluatedTextSize:t.evaluateSizeForZoom(r.textSizeData,this.transform.zoom),collisionGroup:this.collisionGroups.get(r.sourceID)};if(a)for(const t of r.sortKeyRanges){const{sortKey:i,symbolInstanceStart:o,symbolInstanceEnd:a}=t;e.push({sortKey:i,symbolInstanceStart:o,symbolInstanceEnd:a,parameters:g});}else e.push({symbolInstanceStart:0,symbolInstanceEnd:r.symbolInstances.length,parameters:g});}attemptAnchorPlacement(t,e,i,o,a,r,s,n,l,c,h,u,d,m,_,p){const f=[u.textOffset0,u.textOffset1],g=Dt(t,i,o,f,a),x=this.collisionIndex.placeCollisionBox(zt(e,g.x,g.y,r,s,this.transform.angle),h,n,l,c.predicate,p);if((!_||0!==this.collisionIndex.placeCollisionBox(zt(_,g.x,g.y,r,s,this.transform.angle),h,n,l,c.predicate,p).box.length)&&x.box.length>0){let e;if(this.prevPlacement&&this.prevPlacement.variableOffsets[u.crossTileID]&&this.prevPlacement.placements[u.crossTileID]&&this.prevPlacement.placements[u.crossTileID].text&&(e=this.prevPlacement.variableOffsets[u.crossTileID].anchor),0===u.crossTileID)throw new Error("symbolInstance.crossTileID can't be 0");return this.variableOffsets[u.crossTileID]={textOffset:f,width:i,height:o,anchor:t,textBoxScale:a,prevAnchor:e},this.markUsedJustification(d,t,u,m),d.allowVerticalPlacement&&(this.markUsedOrientation(d,m,u),this.placedOrientations[u.crossTileID]=m),{shift:g,placedGlyphBoxes:x}}}placeLayerBucketPart(e,i,o){const{bucket:a,layout:r,posMatrix:s,textLabelPlaneMatrix:n,labelToScreenMatrix:l,textPixelRatio:c,holdingForFade:h,collisionBoxArray:u,partiallyEvaluatedTextSize:d,collisionGroup:m}=e.parameters,_=r.get("text-optional"),p=r.get("icon-optional"),f=t.getOverlapMode(r,"text-overlap","text-allow-overlap"),g="always"===f,x=t.getOverlapMode(r,"icon-overlap","icon-allow-overlap"),v="always"===x,y="map"===r.get("text-rotation-alignment"),b="map"===r.get("text-pitch-alignment"),w="none"!==r.get("icon-text-fit"),T="viewport-y"===r.get("symbol-z-order"),E=g&&(v||!a.hasIconData()||p),I=v&&(g||!a.hasTextData()||_);!a.collisionArrays&&u&&a.deserializeCollisionBoxes(u);const C=(e,u)=>{if(i[e.crossTileID])return;if(h)return void(this.placements[e.crossTileID]=new Et(!1,!1,!1));let v=!1,T=!1,C=!0,S=null,D={box:null,offscreen:null},z={box:null,offscreen:null},P=null,M=null,A=null,L=0,R=0,k=0;u.textFeatureIndex?L=u.textFeatureIndex:e.useRuntimeCollisionCircles&&(L=e.featureIndex),u.verticalTextFeatureIndex&&(R=u.verticalTextFeatureIndex);const B=this.retainedQueryData[a.bucketInstanceId].tileID,F=this.terrain?(t,e)=>this.terrain.getElevation(B,t,e):null;for(const t of ["textBox","verticalTextBox","iconBox","verticalIconBox"]){const e=u[t];e&&(e.elevation=F?F(e.anchorPointX,e.anchorPointY):0);}const O=u.textBox;if(O){const i=i=>{let o=t.WritingMode.horizontal;if(a.allowVerticalPlacement&&!i&&this.prevPlacement){const t=this.prevPlacement.placedOrientations[e.crossTileID];t&&(this.placedOrientations[e.crossTileID]=t,o=t,this.markUsedOrientation(a,o,e));}return o},o=(i,o)=>{if(a.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&u.verticalTextBox){for(const e of a.writingModes)if(e===t.WritingMode.vertical?(D=o(),z=D):D=i(),D&&D.box&&D.box.length)break}else D=i();};if(r.get("text-variable-anchor")){let n=r.get("text-variable-anchor");if(this.prevPlacement&&this.prevPlacement.variableOffsets[e.crossTileID]){const t=this.prevPlacement.variableOffsets[e.crossTileID];n.indexOf(t.anchor)>0&&(n=n.filter((e=>e!==t.anchor)),n.unshift(t.anchor));}const l=(t,i,o)=>{const r=t.x2-t.x1,l=t.y2-t.y1,h=e.textBoxScale,u=w&&"never"===x?i:null;let d={box:[],offscreen:!1};const _="never"!==f?2*n.length:n.length;for(let i=0;i<_;++i){const _=this.attemptAnchorPlacement(n[i%n.length],t,r,l,h,y,b,c,s,m,i>=n.length?f:"never",e,a,o,u,F);if(_&&(d=_.placedGlyphBoxes,d&&d.box&&d.box.length)){v=!0,S=_.shift;break}}return d};o((()=>l(O,u.iconBox,t.WritingMode.horizontal)),(()=>{const i=u.verticalTextBox;return a.allowVerticalPlacement&&!(D&&D.box&&D.box.length)&&e.numVerticalGlyphVertices>0&&i?l(i,u.verticalIconBox,t.WritingMode.vertical):{box:null,offscreen:null}})),D&&(v=D.box,C=D.offscreen);const h=i(D&&D.box);if(!v&&this.prevPlacement){const t=this.prevPlacement.variableOffsets[e.crossTileID];t&&(this.variableOffsets[e.crossTileID]=t,this.markUsedJustification(a,t.anchor,e,h));}}else {const r=(t,i)=>{const o=this.collisionIndex.placeCollisionBox(t,f,c,s,m.predicate,F);return o&&o.box&&o.box.length&&(this.markUsedOrientation(a,i,e),this.placedOrientations[e.crossTileID]=i),o};o((()=>r(O,t.WritingMode.horizontal)),(()=>{const i=u.verticalTextBox;return a.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&i?r(i,t.WritingMode.vertical):{box:null,offscreen:null}})),i(D&&D.box&&D.box.length);}}if(P=D,v=P&&P.box&&P.box.length>0,C=P&&P.offscreen,e.useRuntimeCollisionCircles){const i=a.text.placedSymbolArray.get(e.centerJustifiedTextSymbolIndex),c=t.evaluateSizeForFeature(a.textSizeData,d,i),h=r.get("text-padding");M=this.collisionIndex.placeCollisionCircles(f,i,a.lineVertexArray,a.glyphOffsetArray,c,s,n,l,o,b,m.predicate,e.collisionCircleDiameter,h,F),M.circles.length&&M.collisionDetected&&!o&&t.warnOnce("Collisions detected, but collision boxes are not shown"),v=g||M.circles.length>0&&!M.collisionDetected,C=C&&M.offscreen;}if(u.iconFeatureIndex&&(k=u.iconFeatureIndex),u.iconBox){const t=t=>{const e=w&&S?zt(t,S.x,S.y,y,b,this.transform.angle):t;return this.collisionIndex.placeCollisionBox(e,x,c,s,m.predicate,F)};z&&z.box&&z.box.length&&u.verticalIconBox?(A=t(u.verticalIconBox),T=A.box.length>0):(A=t(u.iconBox),T=A.box.length>0),C=C&&A.offscreen;}const U=_||0===e.numHorizontalGlyphVertices&&0===e.numVerticalGlyphVertices,N=p||0===e.numIconVertices;if(U||N?N?U||(T=T&&v):v=T&&v:T=v=T&&v,v&&P&&P.box&&this.collisionIndex.insertCollisionBox(P.box,f,r.get("text-ignore-placement"),a.bucketInstanceId,z&&z.box&&R?R:L,m.ID),T&&A&&this.collisionIndex.insertCollisionBox(A.box,x,r.get("icon-ignore-placement"),a.bucketInstanceId,k,m.ID),M&&(v&&this.collisionIndex.insertCollisionCircles(M.circles,f,r.get("text-ignore-placement"),a.bucketInstanceId,L,m.ID),o)){const t=a.bucketInstanceId;let e=this.collisionCircleArrays[t];void 0===e&&(e=this.collisionCircleArrays[t]=new It);for(let t=0;t<M.circles.length;t+=4)e.circles.push(M.circles[t+0]),e.circles.push(M.circles[t+1]),e.circles.push(M.circles[t+2]),e.circles.push(M.collisionDetected?1:0);}if(0===e.crossTileID)throw new Error("symbolInstance.crossTileID can't be 0");if(0===a.bucketInstanceId)throw new Error("bucket.bucketInstanceId can't be 0");this.placements[e.crossTileID]=new Et(v||E,T||I,C||a.justReloaded),i[e.crossTileID]=!0;};if(T){if(0!==e.symbolInstanceStart)throw new Error("bucket.bucketInstanceId should be 0");const t=a.getSortedSymbolIndexes(this.transform.angle);for(let e=t.length-1;e>=0;--e){const i=t[e];C(a.symbolInstances.get(i),a.collisionArrays[i]);}}else for(let t=e.symbolInstanceStart;t<e.symbolInstanceEnd;t++)C(a.symbolInstances.get(t),a.collisionArrays[t]);if(o&&a.bucketInstanceId in this.collisionCircleArrays){const e=this.collisionCircleArrays[a.bucketInstanceId];t.invert(e.invProjMatrix,s),e.viewportMatrix=this.collisionIndex.getViewportMatrix();}a.justReloaded=!1;}markUsedJustification(e,i,o,a){let r;r=a===t.WritingMode.vertical?o.verticalPlacedTextSymbolIndex:{left:o.leftJustifiedTextSymbolIndex,center:o.centerJustifiedTextSymbolIndex,right:o.rightJustifiedTextSymbolIndex}[t.getAnchorJustification(i)];const s=[o.leftJustifiedTextSymbolIndex,o.centerJustifiedTextSymbolIndex,o.rightJustifiedTextSymbolIndex,o.verticalPlacedTextSymbolIndex];for(const t of s)t>=0&&(e.text.placedSymbolArray.get(t).crossTileID=r>=0&&t!==r?0:o.crossTileID);}markUsedOrientation(e,i,o){const a=i===t.WritingMode.horizontal||i===t.WritingMode.horizontalOnly?i:0,r=i===t.WritingMode.vertical?i:0,s=[o.leftJustifiedTextSymbolIndex,o.centerJustifiedTextSymbolIndex,o.rightJustifiedTextSymbolIndex];for(const t of s)e.text.placedSymbolArray.get(t).placedOrientation=a;o.verticalPlacedTextSymbolIndex&&(e.text.placedSymbolArray.get(o.verticalPlacedTextSymbolIndex).placedOrientation=r);}commit(t){this.commitTime=t,this.zoomAtLastRecencyCheck=this.transform.zoom;const e=this.prevPlacement;let i=!1;this.prevZoomAdjustment=e?e.zoomAdjustment(this.transform.zoom):0;const o=e?e.symbolFadeChange(t):1,a=e?e.opacities:{},r=e?e.variableOffsets:{},s=e?e.placedOrientations:{};for(const t in this.placements){const e=this.placements[t],r=a[t];r?(this.opacities[t]=new Tt(r,o,e.text,e.icon),i=i||e.text!==r.text.placed||e.icon!==r.icon.placed):(this.opacities[t]=new Tt(null,o,e.text,e.icon,e.skipFade),i=i||e.text||e.icon);}for(const t in a){const e=a[t];if(!this.opacities[t]){const a=new Tt(e,o,!1,!1);a.isHidden()||(this.opacities[t]=a,i=i||e.text.placed||e.icon.placed);}}for(const t in r)this.variableOffsets[t]||!this.opacities[t]||this.opacities[t].isHidden()||(this.variableOffsets[t]=r[t]);for(const t in s)this.placedOrientations[t]||!this.opacities[t]||this.opacities[t].isHidden()||(this.placedOrientations[t]=s[t]);if(e&&void 0===e.lastPlacementChangeTime)throw new Error("Last placement time for previous placement is not defined");i?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t);}updateLayerOpacities(t,e){const i={};for(const o of e){const e=o.getBucket(t);e&&o.latestFeatureIndex&&t.id===e.layerIds[0]&&this.updateBucketOpacities(e,i,o.collisionBoxArray);}}updateBucketOpacities(e,i,o){e.hasTextData()&&e.text.opacityVertexArray.clear(),e.hasIconData()&&e.icon.opacityVertexArray.clear(),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexArray.clear(),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexArray.clear();const a=e.layers[0].layout,r=new Tt(null,0,!1,!1,!0),s=a.get("text-allow-overlap"),n=a.get("icon-allow-overlap"),l=a.get("text-variable-anchor"),c="map"===a.get("text-rotation-alignment"),h="map"===a.get("text-pitch-alignment"),u="none"!==a.get("icon-text-fit"),d=new Tt(null,0,s&&(n||!e.hasIconData()||a.get("icon-optional")),n&&(s||!e.hasTextData()||a.get("text-optional")),!0);!e.collisionArrays&&o&&(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData())&&e.deserializeCollisionBoxes(o);const m=(t,e,i)=>{for(let o=0;o<e/4;o++)t.opacityVertexArray.emplaceBack(i);};for(let o=0;o<e.symbolInstances.length;o++){const a=e.symbolInstances.get(o),{numHorizontalGlyphVertices:s,numVerticalGlyphVertices:n,crossTileID:_}=a;let p=this.opacities[_];i[_]?p=r:p||(p=d,this.opacities[_]=p),i[_]=!0;const f=a.numIconVertices>0,g=this.placedOrientations[a.crossTileID],x=g===t.WritingMode.vertical,v=g===t.WritingMode.horizontal||g===t.WritingMode.horizontalOnly;if(s>0||n>0){const t=Ut(p.text);m(e.text,s,x?Nt:t),m(e.text,n,v?Nt:t);const i=p.text.isHidden();[a.rightJustifiedTextSymbolIndex,a.centerJustifiedTextSymbolIndex,a.leftJustifiedTextSymbolIndex].forEach((t=>{t>=0&&(e.text.placedSymbolArray.get(t).hidden=i||x?1:0);})),a.verticalPlacedTextSymbolIndex>=0&&(e.text.placedSymbolArray.get(a.verticalPlacedTextSymbolIndex).hidden=i||v?1:0);const o=this.variableOffsets[a.crossTileID];o&&this.markUsedJustification(e,o.anchor,a,g);const r=this.placedOrientations[a.crossTileID];r&&(this.markUsedJustification(e,"left",a,r),this.markUsedOrientation(e,r,a));}if(f){const t=Ut(p.icon),i=!(u&&a.verticalPlacedIconSymbolIndex&&x);a.placedIconSymbolIndex>=0&&(m(e.icon,a.numIconVertices,i?t:Nt),e.icon.placedSymbolArray.get(a.placedIconSymbolIndex).hidden=p.icon.isHidden()),a.verticalPlacedIconSymbolIndex>=0&&(m(e.icon,a.numVerticalIconVertices,i?Nt:t),e.icon.placedSymbolArray.get(a.verticalPlacedIconSymbolIndex).hidden=p.icon.isHidden());}if(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData()){const i=e.collisionArrays[o];if(i){let o=new t.pointGeometry(0,0);if(i.textBox||i.verticalTextBox){let t=!0;if(l){const e=this.variableOffsets[_];e?(o=Dt(e.anchor,e.width,e.height,e.textOffset,e.textBoxScale),c&&o._rotate(h?this.transform.angle:-this.transform.angle)):t=!1;}i.textBox&&Mt(e.textCollisionBox.collisionVertexArray,p.text.placed,!t||x,o.x,o.y),i.verticalTextBox&&Mt(e.textCollisionBox.collisionVertexArray,p.text.placed,!t||v,o.x,o.y);}const a=Boolean(!v&&i.verticalIconBox);i.iconBox&&Mt(e.iconCollisionBox.collisionVertexArray,p.icon.placed,a,u?o.x:0,u?o.y:0),i.verticalIconBox&&Mt(e.iconCollisionBox.collisionVertexArray,p.icon.placed,!a,u?o.x:0,u?o.y:0);}}}if(e.sortFeatures(this.transform.angle),this.retainedQueryData[e.bucketInstanceId]&&(this.retainedQueryData[e.bucketInstanceId].featureSortOrder=e.featureSortOrder),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexBuffer&&e.iconCollisionBox.collisionVertexBuffer.updateData(e.iconCollisionBox.collisionVertexArray),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexBuffer&&e.textCollisionBox.collisionVertexBuffer.updateData(e.textCollisionBox.collisionVertexArray),e.text.opacityVertexArray.length!==e.text.layoutVertexArray.length/4)throw new Error(`bucket.text.opacityVertexArray.length (= ${e.text.opacityVertexArray.length}) !== bucket.text.layoutVertexArray.length (= ${e.text.layoutVertexArray.length}) / 4`);if(e.icon.opacityVertexArray.length!==e.icon.layoutVertexArray.length/4)throw new Error(`bucket.icon.opacityVertexArray.length (= ${e.icon.opacityVertexArray.length}) !== bucket.icon.layoutVertexArray.length (= ${e.icon.layoutVertexArray.length}) / 4`);if(e.bucketInstanceId in this.collisionCircleArrays){const t=this.collisionCircleArrays[e.bucketInstanceId];e.placementInvProjMatrix=t.invProjMatrix,e.placementViewportMatrix=t.viewportMatrix,e.collisionCircleArray=t.circles,delete this.collisionCircleArrays[e.bucketInstanceId];}}symbolFadeChange(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration+this.prevZoomAdjustment}zoomAdjustment(t){return Math.max(0,(this.transform.zoom-t)/1.5)}hasTransitions(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration}stillRecent(t,e){const i=this.zoomAtLastRecencyCheck===e?1-this.zoomAdjustment(e):1;return this.zoomAtLastRecencyCheck=e,this.commitTime+this.fadeDuration*i>t}setStale(){this.stale=!0;}}function Mt(t,e,i,o,a){t.emplaceBack(e?1:0,i?1:0,o||0,a||0),t.emplaceBack(e?1:0,i?1:0,o||0,a||0),t.emplaceBack(e?1:0,i?1:0,o||0,a||0),t.emplaceBack(e?1:0,i?1:0,o||0,a||0);}const At=Math.pow(2,25),Lt=Math.pow(2,24),Rt=Math.pow(2,17),kt=Math.pow(2,16),Bt=Math.pow(2,9),Ft=Math.pow(2,8),Ot=Math.pow(2,1);function Ut(t){if(0===t.opacity&&!t.placed)return 0;if(1===t.opacity&&t.placed)return 4294967295;const e=t.placed?1:0,i=Math.floor(127*t.opacity);return i*At+e*Lt+i*Rt+e*kt+i*Bt+e*Ft+i*Ot+e}const Nt=0;class Gt{constructor(t){this._sortAcrossTiles="viewport-y"!==t.layout.get("symbol-z-order")&&!t.layout.get("symbol-sort-key").isConstant(),this._currentTileIndex=0,this._currentPartIndex=0,this._seenCrossTileIDs={},this._bucketParts=[];}continuePlacement(t,e,i,o,a){const r=this._bucketParts;for(;this._currentTileIndex<t.length;)if(e.getBucketParts(r,o,t[this._currentTileIndex],this._sortAcrossTiles),this._currentTileIndex++,a())return !0;for(this._sortAcrossTiles&&(this._sortAcrossTiles=!1,r.sort(((t,e)=>t.sortKey-e.sortKey)));this._currentPartIndex<r.length;)if(e.placeLayerBucketPart(r[this._currentPartIndex],this._seenCrossTileIDs,i),this._currentPartIndex++,a())return !0;return !1}}class Zt{constructor(t,e,i,o,a,r,s,n){this.placement=new Pt(t,e,r,s,n),this._currentPlacementIndex=i.length-1,this._forceFullPlacement=o,this._showCollisionBoxes=a,this._done=!1;}isDone(){return this._done}continuePlacement(e,i,o){const a=t.exported.now(),r=()=>{const e=t.exported.now()-a;return !this._forceFullPlacement&&e>2};for(;this._currentPlacementIndex>=0;){const t=i[e[this._currentPlacementIndex]],a=this.placement.collisionIndex.transform.zoom;if("symbol"===t.type&&(!t.minzoom||t.minzoom<=a)&&(!t.maxzoom||t.maxzoom>a)){if(this._inProgressLayer||(this._inProgressLayer=new Gt(t)),this._inProgressLayer.continuePlacement(o[t.source],this.placement,this._showCollisionBoxes,t,r))return;delete this._inProgressLayer;}this._currentPlacementIndex--;}this._done=!0;}commit(t){return this.placement.commit(t),this.placement}}const Vt=512/t.EXTENT/2;class qt{constructor(t,e,i){this.tileID=t,this.indexedSymbolInstances={},this.bucketInstanceId=i;for(let i=0;i<e.length;i++){const o=e.get(i),a=o.key;this.indexedSymbolInstances[a]||(this.indexedSymbolInstances[a]=[]),this.indexedSymbolInstances[a].push({crossTileID:o.crossTileID,coord:this.getScaledCoordinates(o,t)});}}getScaledCoordinates(e,i){const o=Vt/Math.pow(2,i.canonical.z-this.tileID.canonical.z);return {x:Math.floor((i.canonical.x*t.EXTENT+e.anchorX)*o),y:Math.floor((i.canonical.y*t.EXTENT+e.anchorY)*o)}}findMatches(t,e,i){const o=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z);for(let a=0;a<t.length;a++){const r=t.get(a);if(r.crossTileID)continue;const s=this.indexedSymbolInstances[r.key];if(!s)continue;const n=this.getScaledCoordinates(r,e);for(const t of s)if(Math.abs(t.coord.x-n.x)<=o&&Math.abs(t.coord.y-n.y)<=o&&!i[t.crossTileID]){i[t.crossTileID]=!0,r.crossTileID=t.crossTileID;break}}}}class jt{constructor(){this.maxCrossTileID=0;}generate(){return ++this.maxCrossTileID}}class $t{constructor(){this.indexes={},this.usedCrossTileIDs={},this.lng=0;}handleWrapJump(t){const e=Math.round((t-this.lng)/360);if(0!==e)for(const t in this.indexes){const i=this.indexes[t],o={};for(const t in i){const a=i[t];a.tileID=a.tileID.unwrapTo(a.tileID.wrap+e),o[a.tileID.key]=a;}this.indexes[t]=o;}this.lng=t;}addBucket(t,e,i){if(this.indexes[t.overscaledZ]&&this.indexes[t.overscaledZ][t.key]){if(this.indexes[t.overscaledZ][t.key].bucketInstanceId===e.bucketInstanceId)return !1;this.removeBucketCrossTileIDs(t.overscaledZ,this.indexes[t.overscaledZ][t.key]);}for(let t=0;t<e.symbolInstances.length;t++)e.symbolInstances.get(t).crossTileID=0;this.usedCrossTileIDs[t.overscaledZ]||(this.usedCrossTileIDs[t.overscaledZ]={});const o=this.usedCrossTileIDs[t.overscaledZ];for(const i in this.indexes){const a=this.indexes[i];if(Number(i)>t.overscaledZ)for(const i in a){const r=a[i];r.tileID.isChildOf(t)&&r.findMatches(e.symbolInstances,t,o);}else {const r=a[t.scaledTo(Number(i)).key];r&&r.findMatches(e.symbolInstances,t,o);}}for(let t=0;t<e.symbolInstances.length;t++){const a=e.symbolInstances.get(t);a.crossTileID||(a.crossTileID=i.generate(),o[a.crossTileID]=!0);}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new qt(t,e.symbolInstances,e.bucketInstanceId),!0}removeBucketCrossTileIDs(t,e){for(const i in e.indexedSymbolInstances)for(const o of e.indexedSymbolInstances[i])delete this.usedCrossTileIDs[t][o.crossTileID];}removeStaleBuckets(t){let e=!1;for(const i in this.indexes){const o=this.indexes[i];for(const a in o)t[o[a].bucketInstanceId]||(this.removeBucketCrossTileIDs(i,o[a]),delete o[a],e=!0);}return e}}class Xt{constructor(){this.layerIndexes={},this.crossTileIDs=new jt,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={};}addLayer(t,e,i){let o=this.layerIndexes[t.id];void 0===o&&(o=this.layerIndexes[t.id]=new $t);let a=!1;const r={};o.handleWrapJump(i);for(const i of e){const e=i.getBucket(t);e&&t.id===e.layerIds[0]&&(e.bucketInstanceId||(e.bucketInstanceId=++this.maxBucketInstanceId),o.addBucket(i.tileID,e,this.crossTileIDs)&&(a=!0),r[e.bucketInstanceId]=!0);}return o.removeStaleBuckets(r)&&(a=!0),a}pruneUnusedLayers(t){const e={};t.forEach((t=>{e[t]=!0;}));for(const t in this.layerIndexes)e[t]||delete this.layerIndexes[t];}}var Wt=t.createLayout([{name:"a_pos",type:"Int16",components:2}]);class Ht extends t.Evented{constructor(t){super(),this.sourceCache=t,this._tiles={},this._renderableTilesKeys=[],this._sourceTileCache={},this.renderHistory=[],this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.deltaZoom=1,this.renderHistorySize=t._cache.max,t.usedForTerrain=!0,t.tileSize=this.tileSize*2**this.deltaZoom;}destruct(){this.sourceCache.usedForTerrain=!1,this.sourceCache.tileSize=null;for(const t in this._tiles){const e=this._tiles[t];e.textures.forEach((t=>t.destroy())),e.textures=[];}}update(e,i){this.sourceCache.update(e,i),this._renderableTilesKeys=[];for(const o of e.coveringTiles({tileSize:this.tileSize,minzoom:this.minzoom,maxzoom:this.maxzoom,reparseOverscaled:!1,terrain:i}))this._renderableTilesKeys.push(o.key),this._tiles[o.key]||(o.posMatrix=new Float64Array(16),t.ortho(o.posMatrix,0,t.EXTENT,0,t.EXTENT,0,1),this._tiles[o.key]=new k(o,this.tileSize));}removeOutdated(t){const e={};this.renderHistory=this.renderHistory.filter(((t,e)=>this.renderHistory.indexOf(t)===e)).slice(0,this.renderHistorySize);for(const t of this._renderableTilesKeys)e[t]=!0;for(const t of this.renderHistory)e[t]=!0;for(const i in this._tiles)e[i]||(this._tiles[i].clearTextures(t),delete this._tiles[i]);}getRenderableTiles(){return this._renderableTilesKeys.map((t=>this.getTileByID(t)))}getTileByID(t){return this._tiles[t]}getTerrainCoords(e){const i={};for(const o of this._renderableTilesKeys){const a=this._tiles[o].tileID;if(a.canonical.equals(e.canonical)){const a=e.clone();a.posMatrix=new Float64Array(16),t.ortho(a.posMatrix,0,t.EXTENT,0,t.EXTENT,0,1),i[o]=a;}else if(a.canonical.isChildOf(e.canonical)){const r=e.clone();r.posMatrix=new Float64Array(16);const s=a.canonical.z-e.canonical.z,n=a.canonical.x-(a.canonical.x>>s<<s),l=a.canonical.y-(a.canonical.y>>s<<s),c=t.EXTENT>>s;t.ortho(r.posMatrix,0,c,0,c,0,1),t.translate(r.posMatrix,r.posMatrix,[-n*c,-l*c,0]),i[o]=r;}else if(e.canonical.isChildOf(a.canonical)){const r=e.clone();r.posMatrix=new Float64Array(16);const s=e.canonical.z-a.canonical.z,n=e.canonical.x-(e.canonical.x>>s<<s),l=e.canonical.y-(e.canonical.y>>s<<s),c=t.EXTENT>>s;t.ortho(r.posMatrix,0,t.EXTENT,0,t.EXTENT,0,1),t.translate(r.posMatrix,r.posMatrix,[n*c,l*c,0]),t.scale(r.posMatrix,r.posMatrix,[1/2**s,1/2**s,0]),i[o]=r;}}return i}getSourceTile(t,e){const i=this.sourceCache._source;let o=t.overscaledZ-this.deltaZoom;if(o>i.maxzoom&&(o=i.maxzoom),o<i.minzoom)return null;this._sourceTileCache[t.key]||(this._sourceTileCache[t.key]=t.scaledTo(o).key);let a=this.sourceCache.getTileByID(this._sourceTileCache[t.key]);if((!a||!a.dem)&&e)for(;o>=i.minzoom&&(!a||!a.dem);)a=this.sourceCache.getTileByID(t.scaledTo(o--).key);return a}tilesAfterTime(t=Date.now()){return Object.values(this._tiles).filter((e=>e.timeLoaded>=t))}}class Kt{constructor(t,e,i){this.style=t,this.sourceCache=new Ht(e),this.options=i,this.exaggeration="number"==typeof i.exaggeration?i.exaggeration:1,this.elevationOffset="number"==typeof i.elevationOffset?i.elevationOffset:450,this.qualityFactor=2,this.meshSize=128,this._demMatrixCache={},this.coordsIndex=[],this._coordsTextureSize=1024,this.clearRerenderCache();}getDEMElevation(e,i,o,a=t.EXTENT){if(!(i>=0&&i<a&&o>=0&&o<a))return this.elevationOffset;let r=0;const s=this.getTerrainData(e);if(s.tile&&s.tile.dem){const e=t.transformMat4$1([],[i/a*t.EXTENT,o/a*t.EXTENT],s.u_terrain_matrix),n=[e[0]*s.tile.dem.dim,e[1]*s.tile.dem.dim],l=[Math.floor(n[0]),Math.floor(n[1])],c=s.tile.dem.get(l[0],l[1]),h=s.tile.dem.get(l[0],l[1]+1),u=s.tile.dem.get(l[0]+1,l[1]),d=s.tile.dem.get(l[0]+1,l[1]+1);r=t.number(t.number(c,h,n[0]-l[0]),t.number(u,d,n[0]-l[0]),n[1]-l[1]);}return r}rememberForRerender(t,e){for(const i in this.sourceCache._tiles){const o=this.sourceCache._tiles[i];(o.tileID.equals(e)||o.tileID.isChildOf(e))&&(t===this.sourceCache.sourceCache.id&&(o.timeLoaded=Date.now()),this._rerender[t]=this._rerender[t]||{},this._rerender[t][o.tileID.key]=!0);}}needsRerender(t,e){return this._rerender[t]&&this._rerender[t][e.key]}clearRerenderCache(){this._rerender={};}getElevation(e,i,o,a=t.EXTENT){return (this.getDEMElevation(e,i,o,a)+this.elevationOffset)*this.exaggeration}getTerrainData(e){if(!this._emptyDemTexture){const e=this.style.map.painter.context,i=new t.RGBAImage({width:1,height:1},new Uint8Array(4));this._emptyDepthTexture=new l(e,i,e.gl.RGBA,{premultiply:!1}),this._emptyDemUnpack=[0,0,0,0],this._emptyDemTexture=new l(e,new t.RGBAImage({width:1,height:1}),e.gl.RGBA,{premultiply:!1}),this._emptyDemTexture.bind(e.gl.NEAREST,e.gl.CLAMP_TO_EDGE),this._emptyDemMatrix=t.identity([]);}const i=this.sourceCache.getSourceTile(e,!0);if(i&&i.dem&&(!i.demTexture||i.needsTerrainPrepare)){const t=this.style.map.painter.context;i.demTexture=this.style.map.painter.getTileTexture(i.dem.stride),i.demTexture?i.demTexture.update(i.dem.getPixels(),{premultiply:!1}):i.demTexture=new l(t,i.dem.getPixels(),t.gl.RGBA,{premultiply:!1}),i.demTexture.bind(t.gl.NEAREST,t.gl.CLAMP_TO_EDGE),i.needsTerrainPrepare=!1;}const o=i&&i+i.tileID.key+e.key;if(o&&!this._demMatrixCache[o]){const o=this.sourceCache.sourceCache._source.maxzoom;let a=e.canonical.z-i.tileID.canonical.z;e.overscaledZ>e.canonical.z&&(e.canonical.z>=o?a=e.canonical.z-o:t.warnOnce("cannot calculate elevation if elevation maxzoom > source.maxzoom"));const r=e.canonical.x-(e.canonical.x>>a<<a),s=e.canonical.y-(e.canonical.y>>a<<a),n=t.fromScaling(new Float64Array(16),[1/(t.EXTENT<<a),1/(t.EXTENT<<a),0]);t.translate(n,n,[r*t.EXTENT,s*t.EXTENT,0]),this._demMatrixCache[e.key]={matrix:n,coord:e};}return {u_depth:2,u_terrain:3,u_terrain_dim:i&&i.dem&&i.dem.dim||1,u_terrain_matrix:o?this._demMatrixCache[e.key].matrix:this._emptyDemMatrix,u_terrain_unpack:i&&i.dem&&i.dem.getUnpackVector()||this._emptyDemUnpack,u_terrain_offset:this.elevationOffset,u_terrain_exaggeration:this.exaggeration,texture:(i&&i.demTexture||this._emptyDemTexture).texture,depthTexture:(this._fboDepthTexture||this._emptyDepthTexture).texture,tile:i}}getRTTFramebuffer(){const t=this.style.map.painter;if(!this._rttFramebuffer){const e=this.sourceCache.tileSize*this.qualityFactor;this._rttFramebuffer=t.context.createFramebuffer(e,e,!0),this._rttFramebuffer.depthAttachment.set(t.context.createRenderbuffer(t.context.gl.DEPTH_COMPONENT16,e,e));}return this._rttFramebuffer}getFramebuffer(t){const e=this.style.map.painter,i=e.width/devicePixelRatio,o=e.height/devicePixelRatio;return !this._fbo||this._fbo.width===i&&this._fbo.height===o||(this._fbo.destroy(),this._fboCoordsTexture.destroy(),this._fboDepthTexture.destroy(),delete this._fbo,delete this._fboDepthTexture,delete this._fboCoordsTexture),this._fboCoordsTexture||(this._fboCoordsTexture=new l(e.context,{width:i,height:o,data:null},e.context.gl.RGBA,{premultiply:!1}),this._fboCoordsTexture.bind(e.context.gl.NEAREST,e.context.gl.CLAMP_TO_EDGE)),this._fboDepthTexture||(this._fboDepthTexture=new l(e.context,{width:i,height:o,data:null},e.context.gl.RGBA,{premultiply:!1}),this._fboDepthTexture.bind(e.context.gl.NEAREST,e.context.gl.CLAMP_TO_EDGE)),this._fbo||(this._fbo=e.context.createFramebuffer(i,o,!0),this._fbo.depthAttachment.set(e.context.createRenderbuffer(e.context.gl.DEPTH_COMPONENT16,i,o))),this._fbo.colorAttachment.set("coords"===t?this._fboCoordsTexture.texture:this._fboDepthTexture.texture),this._fbo}getCoordsTexture(){const e=this.style.map.painter.context;if(this._coordsTexture)return this._coordsTexture;const i=new Uint8Array(this._coordsTextureSize*this._coordsTextureSize*4);for(let t=0,e=0;t<this._coordsTextureSize;t++)for(let o=0;o<this._coordsTextureSize;o++,e+=4)i[e+0]=255&o,i[e+1]=255&t,i[e+2]=o>>8<<4|t>>8,i[e+3]=0;const o=new t.RGBAImage({width:this._coordsTextureSize,height:this._coordsTextureSize},new Uint8Array(i.buffer)),a=new l(e,o,e.gl.RGBA,{premultiply:!1});return a.bind(e.gl.NEAREST,e.gl.CLAMP_TO_EDGE),this._coordsTexture=a,a}pointCoordinate(e){const i=new Uint8Array(4),o=this.style.map.painter,a=o.context,r=a.gl;a.bindFramebuffer.set(this.getFramebuffer("coords").framebuffer),r.readPixels(e.x,o.height/devicePixelRatio-e.y-1,1,1,r.RGBA,r.UNSIGNED_BYTE,i),a.bindFramebuffer.set(null);const s=i[0]+(i[2]>>4<<8),n=i[1]+((15&i[2])<<8),l=this.coordsIndex[255-i[3]],c=l&&this.sourceCache.getTileByID(l);if(!c)return null;const h=this._coordsTextureSize,u=(1<<c.tileID.canonical.z)*h;return new t.MercatorCoordinate((c.tileID.canonical.x*h+s)/u,(c.tileID.canonical.y*h+n)/u,this.getElevation(c.tileID,s,n,h))}getTerrainMesh(){if(this._mesh)return this._mesh;const e=this.style.map.painter.context,i=new t.PosArray,o=new t.TriangleIndexArray,a=this.meshSize,r=t.EXTENT/a,s=a*a;for(let t=0;t<=a;t++)for(let e=0;e<=a;e++)i.emplaceBack(e*r,t*r);for(let t=0;t<s;t+=a+1)for(let e=0;e<a;e++)o.emplaceBack(e+t,a+e+t+1,a+e+t+2),o.emplaceBack(e+t,a+e+t+2,e+t+1);return this._mesh={indexBuffer:e.createIndexBuffer(o),vertexBuffer:e.createVertexBuffer(i,Wt.members),segments:t.SegmentVector.simpleSegment(0,0,i.length,o.length)},this._mesh}getMinMaxElevation(t){const e=this.getTerrainData(t).tile,i={minElevation:null,maxElevation:null};return e&&e.dem&&(i.minElevation=(e.dem.min+this.elevationOffset)*this.exaggeration,i.maxElevation=(e.dem.max+this.elevationOffset)*this.exaggeration),i}}const Yt=(e,i)=>t.emitValidationErrors(e,i&&i.filter((t=>"source.canvas"!==t.identifier))),Jt=t.pick(W,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData"]),Qt=t.pick(W,["setCenter","setZoom","setBearing","setPitch"]),te=function(){const e={},i=t.spec.$version;for(const o in t.spec.$root){const a=t.spec.$root[o];if(a.required){let t=null;t="version"===o?i:"array"===a.type?[]:{},null!=t&&(e[o]=t);}}return e}();class ee extends t.Evented{constructor(e,i={}){super(),this.map=e,this.dispatcher=new v(j(),this),this.imageManager=new h,this.imageManager.setEventedParent(this),this.glyphManager=new _(e._requestManager,i.localIdeographFontFamily),this.lineAtlas=new x(256,512),this.crossTileSymbolIndex=new Xt,this._layers={},this._serializedLayers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.ZoomHistory,this._loaded=!1,this._availableImages=[],this._resetUpdates(),this.dispatcher.broadcast("setReferrer",t.getReferrer());const o=this;this._rtlTextPluginCallback=ee.registerForPluginStateChange((e=>{o.dispatcher.broadcast("syncRTLPluginState",{pluginStatus:e.pluginStatus,pluginURL:e.pluginURL},((e,i)=>{if(t.triggerPluginCompletionEvent(e),i&&i.every((t=>t)))for(const t in o.sourceCaches)o.sourceCaches[t].reload();}));})),this.on("data",(t=>{if("source"!==t.dataType||"metadata"!==t.sourceDataType)return;const e=this.sourceCaches[t.sourceId];if(!e)return;const i=e.getSource();if(i&&i.vectorLayerIds)for(const t in this._layers){const e=this._layers[t];e.source===i.id&&this._validateLayer(e);}}));}loadURL(e,i={}){this.fire(new t.Event("dataloading",{dataType:"style"}));const o="boolean"!=typeof i.validate||i.validate,a=this.map._requestManager.transformRequest(e,t.ResourceType.Style);this._request=t.getJSON(a,((e,i)=>{this._request=null,e?this.fire(new t.ErrorEvent(e)):i&&this._load(i,o);}));}loadJSON(e,i={}){this.fire(new t.Event("dataloading",{dataType:"style"})),this._request=t.exported.frame((()=>{this._request=null,this._load(e,!1!==i.validate);}));}loadEmpty(){this.fire(new t.Event("dataloading",{dataType:"style"})),this._load(te,!1);}_load(e,i){if(i&&Yt(this,t.validateStyle(e)))return;this._loaded=!0,this.stylesheet=e;for(const t in e.sources)this.addSource(t,e.sources[t],{validate:!1});e.sprite?this._loadSprite(e.sprite):this.imageManager.setLoaded(!0),this.glyphManager.setURL(e.glyphs);const o=X(this.stylesheet.layers);this._order=o.map((t=>t.id)),this._layers={},this._serializedLayers={};for(let e of o)e=t.createStyleLayer(e),e.setEventedParent(this,{layer:{id:e.id}}),this._layers[e.id]=e,this._serializedLayers[e.id]=e.serialize();this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new g(this.stylesheet.light),this.setTerrain(this.stylesheet.terrain),this.fire(new t.Event("data",{dataType:"style"})),this.fire(new t.Event("style.load"));}_loadSprite(e){this._spriteRequest=function(e,i,o,a){let r,s,n;const l=o>1?"@2x":"";let c=t.getJSON(i.transformRequest(i.normalizeSpriteURL(e,l,".json"),t.ResourceType.SpriteJSON),((t,e)=>{c=null,n||(n=t,r=e,u());})),h=t.getImage(i.transformRequest(i.normalizeSpriteURL(e,l,".png"),t.ResourceType.SpriteImage),((t,e)=>{h=null,n||(n=t,s=e,u());}));function u(){if(n)a(n);else if(r&&s){const e=t.exported.getImageData(s),i={};for(const o in r){const{width:a,height:s,x:n,y:l,sdf:c,pixelRatio:h,stretchX:u,stretchY:d,content:m}=r[o],_=new t.RGBAImage({width:a,height:s});t.RGBAImage.copy(e,_,{x:n,y:l},{x:0,y:0},{width:a,height:s}),i[o]={data:_,pixelRatio:h,sdf:c,stretchX:u,stretchY:d,content:m};}a(null,i);}}return {cancel(){c&&(c.cancel(),c=null),h&&(h.cancel(),h=null);}}}(e,this.map._requestManager,this.map.getPixelRatio(),((e,i)=>{if(this._spriteRequest=null,e)this.fire(new t.ErrorEvent(e));else if(i)for(const t in i)this.imageManager.addImage(t,i[t]);this.imageManager.setLoaded(!0),this._availableImages=this.imageManager.listImages(),this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"}));}));}_validateLayer(e){const i=this.sourceCaches[e.source];if(!i)return;const o=e.sourceLayer;if(!o)return;const a=i.getSource();("geojson"===a.type||a.vectorLayerIds&&-1===a.vectorLayerIds.indexOf(o))&&this.fire(new t.ErrorEvent(new Error(`Source layer "${o}" does not exist on source "${a.id}" as specified by style layer "${e.id}".`)));}loaded(){if(!this._loaded)return !1;if(Object.keys(this._updatedSources).length)return !1;for(const t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return !1;return !!this.imageManager.isLoaded()}_serializeLayers(t){const e=[];for(const i of t){const t=this._layers[i];"custom"!==t.type&&e.push(t.serialize());}return e}hasTransitions(){if(this.light&&this.light.hasTransition())return !0;for(const t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return !0;for(const t in this._layers)if(this._layers[t].hasTransition())return !0;return !1}_checkLoaded(){if(!this._loaded)throw new Error("Style is not done loading.")}update(e){if(!this._loaded)return;const i=this._changed;if(this._changed){const t=Object.keys(this._updatedLayers),i=Object.keys(this._removedLayers);(t.length||i.length)&&this._updateWorkerLayers(t,i);for(const t in this._updatedSources){const e=this._updatedSources[t];if("reload"===e)this._reloadSource(t);else {if("clear"!==e)throw new Error(`Invalid action ${e}`);this._clearSource(t);}}this._updateTilesForChangedImages();for(const t in this._updatedPaintProps)this._layers[t].updateTransitions(e);this.light.updateTransitions(e),this._resetUpdates();}const o={};for(const t in this.sourceCaches){const e=this.sourceCaches[t];o[t]=e.used,e.used=!1;}for(const t of this._order){const i=this._layers[t];i.recalculate(e,this._availableImages),!i.isHidden(e.zoom)&&i.source&&(this.sourceCaches[i.source].used=!0);}for(const e in o){const i=this.sourceCaches[e];o[e]!==i.used&&i.fire(new t.Event("data",{sourceDataType:"visibility",dataType:"source",sourceId:e}));}this.light.recalculate(e),this.z=e.zoom,i&&this.fire(new t.Event("data",{dataType:"style"}));}_updateTilesForChangedImages(){const t=Object.keys(this._changedImages);if(t.length){for(const e in this.sourceCaches)this.sourceCaches[e].reloadTilesForDependencies(["icons","patterns"],t);this._changedImages={};}}_updateWorkerLayers(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(t),removedIds:e});}_resetUpdates(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={},this._changedImages={};}setTerrain(e){if(this._checkLoaded(),this._terrainDataCallback&&this.off("data",this._terrainDataCallback),this._terrainfreezeElevationCallback&&this.map.off("freezeElevation",this._terrainfreezeElevationCallback),e){const t=this.sourceCaches[e.source];if(!t)throw new Error(`cannot load terrain, because there exists no source with ID: ${e.source}`);this.terrain=new Kt(this,t,e),this.map.transform.updateElevation(this.terrain),this._terrainfreezeElevationCallback=t=>{t.freeze?this.map.transform.freezeElevation=!0:(this.map.transform.freezeElevation=!1,this.map.transform.recalculateZoom(this.terrain));},this._terrainDataCallback=t=>{t.tile&&(t.sourceId===e.source?(this.map.transform.updateElevation(this.terrain),this.terrain.rememberForRerender(t.sourceId,t.tile.tileID)):"geojson"===t.source.type&&this.terrain.rememberForRerender(t.sourceId,t.tile.tileID));},this.on("data",this._terrainDataCallback),this.map.on("freezeElevation",this._terrainfreezeElevationCallback);}else this.terrain&&this.terrain.sourceCache.destruct(),this.terrain=null,this.map.transform.updateElevation(this.terrain);this.map.fire(new t.Event("terrain",{terrain:e}));}setState(e){if(this._checkLoaded(),Yt(this,t.validateStyle(e)))return !1;(e=t.clone$1(e)).layers=X(e.layers);const i=function(t,e){if(!t)return [{command:W.setStyle,args:[e]}];let i=[];try{if(!a(t.version,e.version))return [{command:W.setStyle,args:[e]}];a(t.center,e.center)||i.push({command:W.setCenter,args:[e.center]}),a(t.zoom,e.zoom)||i.push({command:W.setZoom,args:[e.zoom]}),a(t.bearing,e.bearing)||i.push({command:W.setBearing,args:[e.bearing]}),a(t.pitch,e.pitch)||i.push({command:W.setPitch,args:[e.pitch]}),a(t.sprite,e.sprite)||i.push({command:W.setSprite,args:[e.sprite]}),a(t.glyphs,e.glyphs)||i.push({command:W.setGlyphs,args:[e.glyphs]}),a(t.transition,e.transition)||i.push({command:W.setTransition,args:[e.transition]}),a(t.light,e.light)||i.push({command:W.setLight,args:[e.light]});const o={},r=[];!function(t,e,i,o){let r;for(r in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,r)&&(Object.prototype.hasOwnProperty.call(e,r)||K(r,i,o));for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(Object.prototype.hasOwnProperty.call(t,r)?a(t[r],e[r])||("geojson"===t[r].type&&"geojson"===e[r].type&&J(t,e,r)?i.push({command:W.setGeoJSONSourceData,args:[r,e[r].data]}):Y(r,e,i,o)):H(r,e,i));}(t.sources,e.sources,r,o);const s=[];t.layers&&t.layers.forEach((t=>{o[t.source]?i.push({command:W.removeLayer,args:[t.id]}):s.push(t);})),i=i.concat(r),function(t,e,i){e=e||[];const o=(t=t||[]).map(tt),r=e.map(tt),s=t.reduce(et,{}),n=e.reduce(et,{}),l=o.slice(),c=Object.create(null);let h,u,d,m,_,p,f;for(h=0,u=0;h<o.length;h++)d=o[h],Object.prototype.hasOwnProperty.call(n,d)?u++:(i.push({command:W.removeLayer,args:[d]}),l.splice(l.indexOf(d,u),1));for(h=0,u=0;h<r.length;h++)d=r[r.length-1-h],l[l.length-1-h]!==d&&(Object.prototype.hasOwnProperty.call(s,d)?(i.push({command:W.removeLayer,args:[d]}),l.splice(l.lastIndexOf(d,l.length-u),1)):u++,p=l[l.length-h],i.push({command:W.addLayer,args:[n[d],p]}),l.splice(l.length-h,0,d),c[d]=!0);for(h=0;h<r.length;h++)if(d=r[h],m=s[d],_=n[d],!c[d]&&!a(m,_))if(a(m.source,_.source)&&a(m["source-layer"],_["source-layer"])&&a(m.type,_.type)){for(f in Q(m.layout,_.layout,i,d,null,W.setLayoutProperty),Q(m.paint,_.paint,i,d,null,W.setPaintProperty),a(m.filter,_.filter)||i.push({command:W.setFilter,args:[d,_.filter]}),a(m.minzoom,_.minzoom)&&a(m.maxzoom,_.maxzoom)||i.push({command:W.setLayerZoomRange,args:[d,_.minzoom,_.maxzoom]}),m)Object.prototype.hasOwnProperty.call(m,f)&&"layout"!==f&&"paint"!==f&&"filter"!==f&&"metadata"!==f&&"minzoom"!==f&&"maxzoom"!==f&&(0===f.indexOf("paint.")?Q(m[f],_[f],i,d,f.slice(6),W.setPaintProperty):a(m[f],_[f])||i.push({command:W.setLayerProperty,args:[d,f,_[f]]}));for(f in _)Object.prototype.hasOwnProperty.call(_,f)&&!Object.prototype.hasOwnProperty.call(m,f)&&"layout"!==f&&"paint"!==f&&"filter"!==f&&"metadata"!==f&&"minzoom"!==f&&"maxzoom"!==f&&(0===f.indexOf("paint.")?Q(m[f],_[f],i,d,f.slice(6),W.setPaintProperty):a(m[f],_[f])||i.push({command:W.setLayerProperty,args:[d,f,_[f]]}));}else i.push({command:W.removeLayer,args:[d]}),p=l[l.lastIndexOf(d)+1],i.push({command:W.addLayer,args:[_,p]});}(s,e.layers,i);}catch(t){console.warn("Unable to compute style diff:",t),i=[{command:W.setStyle,args:[e]}];}return i}(this.serialize(),e).filter((t=>!(t.command in Qt)));if(0===i.length)return !1;const o=i.filter((t=>!(t.command in Jt)));if(o.length>0)throw new Error(`Unimplemented: ${o.map((t=>t.command)).join(", ")}.`);return i.forEach((t=>{"setTransition"!==t.command&&this[t.command].apply(this,t.args);})),this.stylesheet=e,!0}addImage(e,i){if(this.getImage(e))return this.fire(new t.ErrorEvent(new Error(`An image named "${e}" already exists.`)));this.imageManager.addImage(e,i),this._afterImageUpdated(e);}updateImage(t,e){this.imageManager.updateImage(t,e);}getImage(t){return this.imageManager.getImage(t)}removeImage(e){if(!this.getImage(e))return this.fire(new t.ErrorEvent(new Error(`An image named "${e}" does not exist.`)));this.imageManager.removeImage(e),this._afterImageUpdated(e);}_afterImageUpdated(e){this._availableImages=this.imageManager.listImages(),this._changedImages[e]=!0,this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"}));}listImages(){return this._checkLoaded(),this.imageManager.listImages()}addSource(e,i,o={}){if(this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error(`Source "${e}" already exists.`);if(!i.type)throw new Error(`The type property must be defined, but only the following properties were given: ${Object.keys(i).join(", ")}.`);if(["vector","raster","geojson","video","image"].indexOf(i.type)>=0&&this._validate(t.validateStyle.source,`sources.${e}`,i,null,o))return;this.map&&this.map._collectResourceTiming&&(i.collectResourceTiming=!0);const a=this.sourceCaches[e]=new O(e,i,this.dispatcher);a.style=this,a.setEventedParent(this,(()=>({isSourceLoaded:this.loaded(),source:a.serialize(),sourceId:e}))),a.onAdd(this.map),this._changed=!0;}removeSource(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID");for(const i in this._layers)if(this._layers[i].source===e)return this.fire(new t.ErrorEvent(new Error(`Source "${e}" cannot be removed while layer "${i}" is using it.`)));const i=this.sourceCaches[e];delete this.sourceCaches[e],delete this._updatedSources[e],i.fire(new t.Event("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),i.setEventedParent(null),i.onRemove(this.map),this._changed=!0;}setGeoJSONSourceData(t,e){if(this._checkLoaded(),void 0===this.sourceCaches[t])throw new Error(`There is no source with this ID=${t}`);const i=this.sourceCaches[t].getSource();if("geojson"!==i.type)throw new Error(`geojsonSource.type is ${i.type}, which is !== 'geojson`);i.setData(e),this._changed=!0;}getSource(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()}addLayer(e,i,o={}){this._checkLoaded();const a=e.id;if(this.getLayer(a))return void this.fire(new t.ErrorEvent(new Error(`Layer "${a}" already exists on this map.`)));let r;if("custom"===e.type){if(Yt(this,t.validateCustomStyleLayer(e)))return;r=t.createStyleLayer(e);}else {if("object"==typeof e.source&&(this.addSource(a,e.source),e=t.clone$1(e),e=t.extend(e,{source:a})),this._validate(t.validateStyle.layer,`layers.${a}`,e,{arrayIndex:-1},o))return;r=t.createStyleLayer(e),this._validateLayer(r),r.setEventedParent(this,{layer:{id:a}}),this._serializedLayers[r.id]=r.serialize();}const s=i?this._order.indexOf(i):this._order.length;if(i&&-1===s)this.fire(new t.ErrorEvent(new Error(`Cannot add layer "${a}" before non-existing layer "${i}".`)));else {if(this._order.splice(s,0,a),this._layerOrderChanged=!0,this._layers[a]=r,this._removedLayers[a]&&r.source&&"custom"!==r.type){const t=this._removedLayers[a];delete this._removedLayers[a],t.type!==r.type?this._updatedSources[r.source]="clear":(this._updatedSources[r.source]="reload",this.sourceCaches[r.source].pause());}this._updateLayer(r),r.onAdd&&r.onAdd(this.map);}}moveLayer(e,i){if(this._checkLoaded(),this._changed=!0,!this._layers[e])return void this.fire(new t.ErrorEvent(new Error(`The layer '${e}' does not exist in the map's style and cannot be moved.`)));if(e===i)return;const o=this._order.indexOf(e);this._order.splice(o,1);const a=i?this._order.indexOf(i):this._order.length;i&&-1===a?this.fire(new t.ErrorEvent(new Error(`Cannot move layer "${e}" before non-existing layer "${i}".`))):(this._order.splice(a,0,e),this._layerOrderChanged=!0);}removeLayer(e){this._checkLoaded();const i=this._layers[e];if(!i)return void this.fire(new t.ErrorEvent(new Error(`Cannot remove non-existing layer "${e}".`)));i.setEventedParent(null);const o=this._order.indexOf(e);this._order.splice(o,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=i,delete this._layers[e],delete this._serializedLayers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e],i.onRemove&&i.onRemove(this.map);}getLayer(t){return this._layers[t]}hasLayer(t){return t in this._layers}setLayerZoomRange(e,i,o){this._checkLoaded();const a=this.getLayer(e);a?a.minzoom===i&&a.maxzoom===o||(null!=i&&(a.minzoom=i),null!=o&&(a.maxzoom=o),this._updateLayer(a)):this.fire(new t.ErrorEvent(new Error(`Cannot set the zoom range of non-existing layer "${e}".`)));}setFilter(e,i,o={}){this._checkLoaded();const r=this.getLayer(e);if(r){if(!a(r.filter,i))return null==i?(r.filter=void 0,void this._updateLayer(r)):void(this._validate(t.validateStyle.filter,`layers.${r.id}.filter`,i,null,o)||(r.filter=t.clone$1(i),this._updateLayer(r)))}else this.fire(new t.ErrorEvent(new Error(`Cannot filter non-existing layer "${e}".`)));}getFilter(e){return t.clone$1(this.getLayer(e).filter)}setLayoutProperty(e,i,o,r={}){this._checkLoaded();const s=this.getLayer(e);s?a(s.getLayoutProperty(i),o)||(s.setLayoutProperty(i,o,r),this._updateLayer(s)):this.fire(new t.ErrorEvent(new Error(`Cannot style non-existing layer "${e}".`)));}getLayoutProperty(e,i){const o=this.getLayer(e);if(o)return o.getLayoutProperty(i);this.fire(new t.ErrorEvent(new Error(`Cannot get style of non-existing layer "${e}".`)));}setPaintProperty(e,i,o,r={}){this._checkLoaded();const s=this.getLayer(e);s?a(s.getPaintProperty(i),o)||(s.setPaintProperty(i,o,r)&&this._updateLayer(s),this._changed=!0,this._updatedPaintProps[e]=!0):this.fire(new t.ErrorEvent(new Error(`Cannot style non-existing layer "${e}".`)));}getPaintProperty(t,e){return this.getLayer(t).getPaintProperty(e)}setFeatureState(e,i){this._checkLoaded();const o=e.source,a=e.sourceLayer,r=this.sourceCaches[o];if(void 0===r)return void this.fire(new t.ErrorEvent(new Error(`The source '${o}' does not exist in the map's style.`)));const s=r.getSource().type;"geojson"===s&&a?this.fire(new t.ErrorEvent(new Error("GeoJSON sources cannot have a sourceLayer parameter."))):"vector"!==s||a?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),r.setFeatureState(a,e.id,i)):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")));}removeFeatureState(e,i){this._checkLoaded();const o=e.source,a=this.sourceCaches[o];if(void 0===a)return void this.fire(new t.ErrorEvent(new Error(`The source '${o}' does not exist in the map's style.`)));const r=a.getSource().type,s="vector"===r?e.sourceLayer:void 0;"vector"!==r||s?i&&"string"!=typeof e.id&&"number"!=typeof e.id?this.fire(new t.ErrorEvent(new Error("A feature id is required to remove its specific state property."))):a.removeFeatureState(s,e.id,i):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")));}getFeatureState(e){this._checkLoaded();const i=e.source,o=e.sourceLayer,a=this.sourceCaches[i];if(void 0!==a)return "vector"!==a.getSource().type||o?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),a.getFeatureState(o,e.id)):void this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")));this.fire(new t.ErrorEvent(new Error(`The source '${i}' does not exist in the map's style.`)));}getTransition(){return t.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)}serialize(){return t.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:t.mapObject(this.sourceCaches,(t=>t.serialize())),layers:this._serializeLayers(this._order)},(t=>void 0!==t))}_updateLayer(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&"raster"!==this.sourceCaches[t.source].getSource().type&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._changed=!0;}_flattenAndSortRenderedFeatures(t){const e=t=>"fill-extrusion"===this._layers[t].type,i={},o=[];for(let a=this._order.length-1;a>=0;a--){const r=this._order[a];if(e(r)){i[r]=a;for(const e of t){const t=e[r];if(t)for(const e of t)o.push(e);}}}o.sort(((t,e)=>e.intersectionZ-t.intersectionZ));const a=[];for(let r=this._order.length-1;r>=0;r--){const s=this._order[r];if(e(s))for(let t=o.length-1;t>=0;t--){const e=o[t].feature;if(i[e.layer.id]<r)break;a.push(e),o.pop();}else for(const e of t){const t=e[s];if(t)for(const e of t)a.push(e.feature);}}return a}queryRenderedFeatures(e,i,o){i&&i.filter&&this._validate(t.validateStyle.filter,"queryRenderedFeatures.filter",i.filter,null,i);const a={};if(i&&i.layers){if(!Array.isArray(i.layers))return this.fire(new t.ErrorEvent(new Error("parameters.layers must be an Array."))),[];for(const e of i.layers){const i=this._layers[e];if(!i)return this.fire(new t.ErrorEvent(new Error(`The layer '${e}' does not exist in the map's style and cannot be queried for features.`))),[];a[i.source]=!0;}}const r=[];i.availableImages=this._availableImages;for(const t in this.sourceCaches)i.layers&&!a[t]||r.push(L(this.sourceCaches[t],this._layers,this._serializedLayers,e,i,o));return this.placement&&r.push(function(t,e,i,o,a,r,s){const n={},l=r.queryRenderedSymbols(o),c=[];for(const t of Object.keys(l).map(Number))c.push(s[t]);c.sort(R);for(const i of c){const o=i.featureIndex.lookupSymbolFeatures(l[i.bucketInstanceId],e,i.bucketIndex,i.sourceLayerIndex,a.filter,a.layers,a.availableImages,t);for(const t in o){const e=n[t]=n[t]||[],a=o[t];a.sort(((t,e)=>{const o=i.featureSortOrder;if(o){const i=o.indexOf(t.featureIndex);return o.indexOf(e.featureIndex)-i}return e.featureIndex-t.featureIndex}));for(const t of a)e.push(t);}}for(const e in n)n[e].forEach((o=>{const a=o.feature,r=i[t[e].source].getFeatureState(a.layer["source-layer"],a.id);a.source=a.layer.source,a.layer["source-layer"]&&(a.sourceLayer=a.layer["source-layer"]),a.state=r;}));return n}(this._layers,this._serializedLayers,this.sourceCaches,e,i,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenAndSortRenderedFeatures(r)}querySourceFeatures(e,i){i&&i.filter&&this._validate(t.validateStyle.filter,"querySourceFeatures.filter",i.filter,null,i);const o=this.sourceCaches[e];return o?function(t,e){const i=t.getRenderableIds().map((e=>t.getTileByID(e))),o=[],a={};for(let t=0;t<i.length;t++){const r=i[t],s=r.tileID.canonical.key;a[s]||(a[s]=!0,r.querySourceFeatures(o,e));}return o}(o,i):[]}addSourceType(t,e,i){return ee.getSourceType(t)?i(new Error(`A source type called "${t}" already exists.`)):(ee.setSourceType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},i):i(null,null))}getLight(){return this.light.getLight()}setLight(e,i={}){this._checkLoaded();const o=this.light.getLight();let r=!1;for(const t in e)if(!a(e[t],o[t])){r=!0;break}if(!r)return;const s={now:t.exported.now(),transition:t.extend({duration:300,delay:0},this.stylesheet.transition)};this.light.setLight(e,i),this.light.updateTransitions(s);}_validate(e,i,o,a,r={}){return (!r||!1!==r.validate)&&Yt(this,e.call(t.validateStyle,t.extend({key:i,style:this.serialize(),value:o,styleSpec:t.spec},a)))}_remove(){this._request&&(this._request.cancel(),this._request=null),this._spriteRequest&&(this._spriteRequest.cancel(),this._spriteRequest=null),t.evented.off("pluginStateChange",this._rtlTextPluginCallback);for(const t in this._layers)this._layers[t].setEventedParent(null);for(const t in this.sourceCaches){const e=this.sourceCaches[t];e.setEventedParent(null),e.onRemove(this.map);}this.imageManager.setEventedParent(null),this.setEventedParent(null),this.dispatcher.remove();}_clearSource(t){this.sourceCaches[t].clearTiles();}_reloadSource(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload();}_updateSources(t){for(const e in this.sourceCaches)this.sourceCaches[e].update(t,this.terrain);}_generateCollisionBoxes(){for(const t in this.sourceCaches)this._reloadSource(t);}_updatePlacement(e,i,o,a,r=!1){let s=!1,n=!1;const l={};for(const t of this._order){const i=this._layers[t];if("symbol"!==i.type)continue;if(!l[i.source]){const t=this.sourceCaches[i.source];l[i.source]=t.getRenderableIds(!0).map((e=>t.getTileByID(e))).sort(((t,e)=>e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)));}const o=this.crossTileSymbolIndex.addLayer(i,l[i.source],e.center.lng);s=s||o;}if(this.crossTileSymbolIndex.pruneUnusedLayers(this._order),((r=r||this._layerOrderChanged||0===o)||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(t.exported.now(),e.zoom))&&(this.pauseablePlacement=new Zt(e,this.terrain,this._order,r,i,o,a,this.placement),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,l),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(t.exported.now()),n=!0),s&&this.pauseablePlacement.placement.setStale()),n||s)for(const t of this._order){const e=this._layers[t];"symbol"===e.type&&this.placement.updateLayerOpacities(e,l[e.source]);}return !this.pauseablePlacement.isDone()||this.placement.hasTransitions(t.exported.now())}_releaseSymbolFadeTiles(){for(const t in this.sourceCaches)this.sourceCaches[t].releaseSymbolFadeTiles();}getImages(t,e,i){this.imageManager.getImages(e.icons,i),this._updateTilesForChangedImages();const o=this.sourceCaches[e.source];o&&o.setDependencies(e.tileID.key,e.type,e.icons);}getGlyphs(t,e,i){this.glyphManager.getGlyphs(e.stacks,i);}getResource(e,i,o){return t.makeRequest(i,o)}}ee.getSourceType=function(t){return M[t]},ee.setSourceType=function(t,e){M[t]=e;},ee.registerForPluginStateChange=t.registerForPluginStateChange;var ie="attribute vec2 a_pos;uniform mat4 u_matrix;varying vec2 v_texture_pos;varying float v_depth;void main() {v_texture_pos=a_pos/8192.0;gl_Position=u_matrix*vec4(a_pos,get_elevation(a_pos),1.0);v_depth=gl_Position.z/gl_Position.w;}";const oe={prelude:ae("#ifdef GL_ES\nprecision mediump float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif","#ifdef GL_ES\nprecision highp float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nvec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0\n);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}\n#ifdef TERRAIN3D\nuniform sampler2D u_terrain;uniform float u_terrain_dim;uniform mat4 u_terrain_matrix;uniform vec4 u_terrain_unpack;uniform float u_terrain_offset;uniform float u_terrain_exaggeration;uniform highp sampler2D u_depth;\n#endif\nconst highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitShifts=vec4(1.)/bitSh;highp float unpack(highp vec4 color) {return dot(color,bitShifts);}highp float depthOpacity(vec3 frag) {\n#ifdef TERRAIN3D\nhighp float d=unpack(texture2D(u_depth,frag.xy*0.5+0.5))+0.0001-frag.z;return 1.0-max(0.0,min(1.0,-d*500.0));\n#else\nreturn 1.0;\n#endif\n}float calculate_visibility(vec4 pos) {\n#ifdef TERRAIN3D\nvec3 frag=pos.xyz/pos.w;highp float d=depthOpacity(frag);if (d > 0.95) return 1.0;return (d+depthOpacity(frag+vec3(0.0,0.01,0.0)))/2.0;\n#else\nreturn 1.0;\n#endif\n}float ele(vec2 pos) {\n#ifdef TERRAIN3D\nvec4 rgb=(texture2D(u_terrain,pos)*255.0)*u_terrain_unpack;return rgb.r+rgb.g+rgb.b-u_terrain_unpack.a;\n#else\nreturn 0.0;\n#endif\n}float get_elevation(vec2 pos) {\n#ifdef TERRAIN3D\nvec2 coord=(u_terrain_matrix*vec4(pos,0.0,1.0)).xy*u_terrain_dim+1.0;vec2 f=fract(coord);vec2 c=(floor(coord)+0.5)/(u_terrain_dim+2.0);float d=1.0/(u_terrain_dim+2.0);float tl=ele(c);float tr=ele(c+vec2(d,0.0));float bl=ele(c+vec2(0.0,d));float br=ele(c+vec2(d,d));float elevation=mix(mix(tl,tr,f.x),mix(bl,br,f.x),f.y);return (elevation+u_terrain_offset)*u_terrain_exaggeration;\n#else\nreturn 0.0;\n#endif\n}"),background:ae("uniform vec4 u_color;uniform float u_opacity;void main() {gl_FragColor=u_color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),backgroundPattern:ae("uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_mix)*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}"),circle:ae("varying vec3 v_data;varying float v_visibility;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=v_data.xy;float extrude_length=length(extrude);lowp float antialiasblur=v_data.z;float antialiased_blur=-max(blur,antialiasblur);float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));gl_FragColor=v_visibility*opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;attribute vec2 a_pos;varying vec3 v_data;varying float v_visibility;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main(void) {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=vec2(mod(a_pos,2.0)*2.0-1.0);vec2 circle_center=floor(a_pos*0.5);float ele=get_elevation(circle_center);v_visibility=calculate_visibility(u_matrix*vec4(circle_center,ele,1.0));if (u_pitch_with_map) {vec2 corner_position=circle_center;if (u_scale_with_map) {corner_position+=extrude*(radius+stroke_width)*u_extrude_scale;} else {vec4 projected_center=u_matrix*vec4(circle_center,0,1);corner_position+=extrude*(radius+stroke_width)*u_extrude_scale*(projected_center.w/u_camera_to_center_distance);}gl_Position=u_matrix*vec4(corner_position,ele,1);} else {gl_Position=u_matrix*vec4(circle_center,ele,1);if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}lowp float antialiasblur=1.0/u_device_pixel_ratio/(radius+stroke_width);v_data=vec3(extrude.x,extrude.y,antialiasblur);}"),clippingMask:ae("void main() {gl_FragColor=vec4(1.0);}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),heatmap:ae("uniform highp float u_intensity;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n#pragma mapbox: initialize highp float weight\nfloat d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);gl_FragColor=vec4(val,1.0,1.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;attribute vec2 a_pos;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\nconst highp float ZERO=1.0/255.0/16.0;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n#pragma mapbox: initialize highp float weight\n#pragma mapbox: initialize mediump float radius\nvec2 unscaled_extrude=vec2(mod(a_pos,2.0)*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec4 pos=vec4(floor(a_pos*0.5)+extrude,0,1);gl_Position=u_matrix*pos;}"),heatmapTexture:ae("uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;varying vec2 v_pos;void main() {float t=texture2D(u_image,v_pos).r;vec4 color=texture2D(u_color_ramp,vec2(t,0.5));gl_FragColor=color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(0.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;attribute vec2 a_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}"),collisionBox:ae("varying float v_placed;varying float v_notUsed;void main() {float alpha=0.5;gl_FragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {gl_FragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {gl_FragColor*=.1;}}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;attribute vec2 a_shift;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,get_elevation(a_pos),1.0);gl_Position.xy+=(a_extrude+a_shift)*u_extrude_scale*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;}"),collisionCircle:ae("varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;void main() {float alpha=0.5*min(v_perspective_ratio,1.0);float stroke_radius=0.9*max(v_perspective_ratio,1.0);float distance_to_center=length(v_extrude);float distance_to_edge=abs(distance_to_center-v_radius);float opacity_t=smoothstep(-stroke_radius,0.0,-distance_to_edge);vec4 color=mix(vec4(0.0,0.0,1.0,0.5),vec4(1.0,0.0,0.0,1.0),v_collision);gl_FragColor=color*alpha*opacity_t;}","attribute vec2 a_pos;attribute float a_radius;attribute vec2 a_flags;uniform mat4 u_matrix;uniform mat4 u_inv_matrix;uniform vec2 u_viewport_size;uniform float u_camera_to_center_distance;varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;vec3 toTilePosition(vec2 screenPos) {vec4 rayStart=u_inv_matrix*vec4(screenPos,-1.0,1.0);vec4 rayEnd  =u_inv_matrix*vec4(screenPos, 1.0,1.0);rayStart.xyz/=rayStart.w;rayEnd.xyz  /=rayEnd.w;highp float t=(0.0-rayStart.z)/(rayEnd.z-rayStart.z);return mix(rayStart.xyz,rayEnd.xyz,t);}void main() {vec2 quadCenterPos=a_pos;float radius=a_radius;float collision=a_flags.x;float vertexIdx=a_flags.y;vec2 quadVertexOffset=vec2(mix(-1.0,1.0,float(vertexIdx >=2.0)),mix(-1.0,1.0,float(vertexIdx >=1.0 && vertexIdx <=2.0)));vec2 quadVertexExtent=quadVertexOffset*radius;vec3 tilePos=toTilePosition(quadCenterPos);vec4 clipPos=u_matrix*vec4(tilePos,1.0);highp float camera_to_anchor_distance=clipPos.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);float padding_factor=1.2;v_radius=radius;v_extrude=quadVertexExtent*padding_factor;v_perspective_ratio=collision_perspective_ratio;v_collision=collision;gl_Position=vec4(clipPos.xyz/clipPos.w,1.0)+vec4(quadVertexExtent*padding_factor/u_viewport_size*2.0,0.0,0.0);}"),debug:ae("uniform highp vec4 u_color;uniform sampler2D u_overlay;varying vec2 v_uv;void main() {vec4 overlay_color=texture2D(u_overlay,v_uv);gl_FragColor=mix(u_color,overlay_color,overlay_color.a);}","attribute vec2 a_pos;varying vec2 v_uv;uniform mat4 u_matrix;uniform float u_overlay_scale;void main() {v_uv=a_pos/8192.0;gl_Position=u_matrix*vec4(a_pos*u_overlay_scale,get_elevation(a_pos),1);}"),fill:ae("#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_FragColor=color*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);}"),fillOutline:ae("varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=outline_color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;uniform vec2 u_world;varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillOutlinePattern:ae("uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=mix(color1,color2,u_fade)*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;gl_Position=u_matrix*vec4(a_pos,0,1);vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillPattern:ae("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_fade)*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}"),fillExtrusion:ae("varying vec4 v_color;void main() {gl_FragColor=v_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;attribute vec2 a_pos;attribute vec4 a_normal_ed;\n#ifdef TERRAIN3D\nattribute vec2 a_centroid;\n#endif\nvarying vec4 v_color;\n#pragma mapbox: define highp float base\n#pragma mapbox: define highp float height\n#pragma mapbox: define highp vec4 color\nvoid main() {\n#pragma mapbox: initialize highp float base\n#pragma mapbox: initialize highp float height\n#pragma mapbox: initialize highp vec4 color\nvec3 normal=a_normal_ed.xyz;\n#ifdef TERRAIN3D\nfloat baseDelta=10.0;float ele=get_elevation(a_centroid);\n#else\nfloat baseDelta=0.0;float ele=0.0;\n#endif\nbase=max(0.0,ele+base-baseDelta);height=max(0.0,ele+height);float t=mod(normal.x,2.0);gl_Position=u_matrix*vec4(a_pos,t > 0.0 ? height : base,1);float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;float directional=clamp(dot(normal/16384.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}"),fillExtrusionPattern:ae("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);gl_FragColor=mixedColor*v_lighting;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec3 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;attribute vec2 a_pos;attribute vec4 a_normal_ed;\n#ifdef TERRAIN3D\nattribute vec2 a_centroid;\n#endif\nvarying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;\n#ifdef TERRAIN3D\nfloat baseDelta=10.0;float ele=get_elevation(a_centroid);\n#else\nfloat baseDelta=0.0;float ele=0.0;\n#endif\nbase=max(0.0,ele+base-baseDelta);height=max(0.0,ele+height);float t=mod(normal.x,2.0);float z=t > 0.0 ? height : base;gl_Position=u_matrix*vec4(a_pos,z,1);vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0\n? a_pos\n: vec2(edgedistance,z*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}"),hillshadePrepare:ae("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture2D(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack)/4.0;}void main() {vec2 epsilon=1.0/u_dimension;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggerationFactor=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;float exaggeration=u_zoom < 15.0 ? (u_zoom-15.0)*exaggerationFactor : 0.0;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))/pow(2.0,exaggeration+(19.2562-u_zoom));gl_FragColor=clamp(vec4(deriv.x/2.0+0.5,deriv.y/2.0+0.5,1.0,1.0),0.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_dimension;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}"),hillshade:ae("uniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_latrange;uniform vec2 u_light;uniform vec4 u_shadow;uniform vec4 u_highlight;uniform vec4 u_accent;\n#define PI 3.141592653589793\nvoid main() {vec4 pixel=texture2D(u_image,v_pos);vec2 deriv=((pixel.rg*2.0)-1.0);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));float slope=atan(1.25*length(deriv)/scaleFactor);float aspect=deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);float intensity=u_light.x;float azimuth=u_light.y+PI;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadow,u_highlight,shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);gl_FragColor=accent_color*(1.0-shade_color.a)+shade_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos=a_texture_pos/8192.0;}"),line:ae("uniform lowp float u_device_pixel_ratio;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_linesofar;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_width2=vec2(outset,inset);}"),lineGradient:ae("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;varying highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture2D(u_image,v_uv);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;attribute float a_uv_x;attribute float a_split_index;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;uniform float u_image_height;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;highp float texel_height=1.0/u_image_height;highp float half_texel_height=0.5*texel_height;v_uv=vec2(a_uv_x,a_split_index*texel_height-half_texel_height);vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_width2=vec2(outset,inset);}"),linePattern:ae("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec3 u_scale;uniform sampler2D u_image;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float aspect_a=display_size_a.y/v_width;float aspect_b=display_size_b.y/v_width;float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x*aspect_a,1.0);float x_b=mod(v_linesofar/pattern_size_b.x*aspect_b,1.0);float y=0.5*v_normal.y+0.5;vec2 texel_size=1.0/u_texsize;vec2 pos_a=mix(pattern_tl_a*texel_size-texel_size,pattern_br_a*texel_size+texel_size,vec2(x_a,y));vec2 pos_b=mix(pattern_tl_b*texel_size-texel_size,pattern_br_b*texel_size+texel_size,vec2(x_b,y));vec4 color=mix(texture2D(u_image,pos_a),texture2D(u_image,pos_b),u_fade);gl_FragColor=color*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_linesofar=a_linesofar;v_width2=vec2(outset,inset);v_width=floorwidth;}"),lineSDF:ae("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform float u_sdfgamma;uniform float u_mix;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture2D(u_image,v_tex_a).a;float sdfdist_b=texture2D(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);alpha*=smoothstep(0.5-u_sdfgamma/floorwidth,0.5+u_sdfgamma/floorwidth,sdfdist);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_patternscale_a;uniform float u_tex_y_a;uniform vec2 u_patternscale_b;uniform float u_tex_y_b;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_tex_a=vec2(a_linesofar*u_patternscale_a.x/floorwidth,normal.y*u_patternscale_a.y+u_tex_y_a);v_tex_b=vec2(a_linesofar*u_patternscale_b.x/floorwidth,normal.y*u_patternscale_b.y+u_tex_y_b);v_width2=vec2(outset,inset);}"),raster:ae("uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;varying vec2 v_pos0;varying vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture2D(u_image0,v_pos0);vec4 color1=texture2D(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);gl_FragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos0;varying vec2 v_pos1;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos0=(((a_texture_pos/8192.0)-0.5)/u_buffer_scale )+0.5;v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}"),symbolIcon:ae("uniform sampler2D u_texture;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nlowp float alpha=opacity*v_fade_opacity;gl_FragColor=texture2D(u_texture,v_tex)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;vec2 a_minFontScale=a_pixeloffset.zw/256.0;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*max(a_minFontScale,fontScale)+a_pxoffset/16.0),z,1.0);v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float visibility=calculate_visibility(projectedPoint);v_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));}"),symbolSDF:ae("#define SDF_PX 8.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale+a_pxoffset),z,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0=a_tex/u_texsize;v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}"),symbolTextAndIcon:ae("#define SDF_PX 8.0\n#define SDF 1.0\n#define ICON 0.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform sampler2D u_texture_icon;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat fade_opacity=v_data1[2];if (v_data1.w==ICON) {vec2 tex_icon=v_data0.zw;lowp float alpha=opacity*fade_opacity;gl_FragColor=texture2D(u_texture_icon,tex_icon)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\nreturn;}vec2 tex=v_data0.xy;float EDGE_GAMMA=0.105/u_device_pixel_ratio;float gamma_scale=v_data1.x;float size=v_data1.y;float fontScale=size/24.0;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_texsize_icon;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);float is_sdf=a_size[0]-2.0*a_size_min;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=size/24.0;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),z,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0.xy=a_tex/u_texsize;v_data0.zw=a_tex/u_texsize_icon;v_data1=vec4(gamma_scale,size,interpolated_fade_opacity,is_sdf);}"),terrain:ae("uniform sampler2D u_texture;varying vec2 v_texture_pos;void main() {gl_FragColor=texture2D(u_texture,v_texture_pos);}",ie),terrainDepth:ae("varying float v_depth;const highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitMsk=vec4(0.,vec3(1./256.0));highp vec4 pack(highp float value) {highp vec4 comp=fract(value*bitSh);comp-=comp.xxyz*bitMsk;return comp;}void main() {gl_FragColor=pack(v_depth);}",ie),terrainCoords:ae("precision mediump float;uniform sampler2D u_texture;uniform float u_terrain_coords_id;varying vec2 v_texture_pos;void main() {vec4 rgba=texture2D(u_texture,v_texture_pos);gl_FragColor=vec4(rgba.r,rgba.g,rgba.b,u_terrain_coords_id);}",ie)};function ae(t,e){const i=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,o=e.match(/attribute ([\w]+) ([\w]+)/g),a=t.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),r=e.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),s=r?r.concat(a):a,n={};return {fragmentSource:t=t.replace(i,((t,e,i,o,a)=>(n[a]=!0,"define"===e?`\n#ifndef HAS_UNIFORM_u_${a}\nvarying ${i} ${o} ${a};\n#else\nuniform ${i} ${o} u_${a};\n#endif\n`:`\n#ifdef HAS_UNIFORM_u_${a}\n    ${i} ${o} ${a} = u_${a};\n#endif\n`))),vertexSource:e=e.replace(i,((t,e,i,o,a)=>{const r="float"===o?"vec2":"vec4",s=a.match(/color/)?"color":r;return n[a]?"define"===e?`\n#ifndef HAS_UNIFORM_u_${a}\nuniform lowp float u_${a}_t;\nattribute ${i} ${r} a_${a};\nvarying ${i} ${o} ${a};\n#else\nuniform ${i} ${o} u_${a};\n#endif\n`:"vec4"===s?`\n#ifndef HAS_UNIFORM_u_${a}\n    ${a} = a_${a};\n#else\n    ${i} ${o} ${a} = u_${a};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${a}\n    ${a} = unpack_mix_${s}(a_${a}, u_${a}_t);\n#else\n    ${i} ${o} ${a} = u_${a};\n#endif\n`:"define"===e?`\n#ifndef HAS_UNIFORM_u_${a}\nuniform lowp float u_${a}_t;\nattribute ${i} ${r} a_${a};\n#else\nuniform ${i} ${o} u_${a};\n#endif\n`:"vec4"===s?`\n#ifndef HAS_UNIFORM_u_${a}\n    ${i} ${o} ${a} = a_${a};\n#else\n    ${i} ${o} ${a} = u_${a};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${a}\n    ${i} ${o} ${a} = unpack_mix_${s}(a_${a}, u_${a}_t);\n#else\n    ${i} ${o} ${a} = u_${a};\n#endif\n`})),staticAttributes:o,staticUniforms:s}}class re{constructor(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null;}bind(t,e,i,o,a,r,s,n,l){this.context=t;let c=this.boundPaintVertexBuffers.length!==o.length;for(let t=0;!c&&t<o.length;t++)this.boundPaintVertexBuffers[t]!==o[t]&&(c=!0);t.extVertexArrayObject&&this.vao&&this.boundProgram===e&&this.boundLayoutVertexBuffer===i&&!c&&this.boundIndexBuffer===a&&this.boundVertexOffset===r&&this.boundDynamicVertexBuffer===s&&this.boundDynamicVertexBuffer2===n&&this.boundDynamicVertexBuffer3===l?(t.bindVertexArrayOES.set(this.vao),s&&s.bind(),a&&a.dynamicDraw&&a.bind(),n&&n.bind(),l&&l.bind()):this.freshBind(e,i,o,a,r,s,n,l);}freshBind(t,e,i,o,a,r,s,n){let l;const c=t.numAttributes,h=this.context,u=h.gl;if(h.extVertexArrayObject)this.vao&&this.destroy(),this.vao=h.extVertexArrayObject.createVertexArrayOES(),h.bindVertexArrayOES.set(this.vao),l=0,this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=i,this.boundIndexBuffer=o,this.boundVertexOffset=a,this.boundDynamicVertexBuffer=r,this.boundDynamicVertexBuffer2=s,this.boundDynamicVertexBuffer3=n;else {l=h.currentNumAttributes||0;for(let t=c;t<l;t++)u.disableVertexAttribArray(t);}e.enableAttributes(u,t);for(const e of i)e.enableAttributes(u,t);r&&r.enableAttributes(u,t),s&&s.enableAttributes(u,t),n&&n.enableAttributes(u,t),e.bind(),e.setVertexAttribPointers(u,t,a);for(const e of i)e.bind(),e.setVertexAttribPointers(u,t,a);r&&(r.bind(),r.setVertexAttribPointers(u,t,a)),o&&o.bind(),s&&(s.bind(),s.setVertexAttribPointers(u,t,a)),n&&(n.bind(),n.setVertexAttribPointers(u,t,a)),h.currentNumAttributes=c;}destroy(){this.vao&&(this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null);}}function se(t){const e=[];for(let i=0;i<t.length;i++){if(null===t[i])continue;const o=t[i].split(" ");e.push(o.pop());}return e}class ne{constructor(e,i,o,a,r,s,n){const l=e.gl;this.program=l.createProgram();const c=se(o.staticAttributes),h=a?a.getBinderAttributes():[],u=c.concat(h),d=oe.prelude.staticUniforms?se(oe.prelude.staticUniforms):[],m=o.staticUniforms?se(o.staticUniforms):[],_=a?a.getBinderUniforms():[],p=d.concat(m).concat(_),f=[];for(const t of p)f.indexOf(t)<0&&f.push(t);const g=a?a.defines():[];s&&g.push("#define OVERDRAW_INSPECTOR;"),n&&g.push("#define TERRAIN3D;");const x=g.concat(oe.prelude.fragmentSource,o.fragmentSource).join("\n"),v=g.concat(oe.prelude.vertexSource,o.vertexSource).join("\n"),y=l.createShader(l.FRAGMENT_SHADER);if(l.isContextLost())return void(this.failedToCreate=!0);l.shaderSource(y,x),l.compileShader(y),l.attachShader(this.program,y);const b=l.createShader(l.VERTEX_SHADER);if(l.isContextLost())return void(this.failedToCreate=!0);l.shaderSource(b,v),l.compileShader(b),l.attachShader(this.program,b),this.attributes={};const w={};this.numAttributes=u.length;for(let t=0;t<this.numAttributes;t++)u[t]&&(l.bindAttribLocation(this.program,t,u[t]),this.attributes[u[t]]=t);l.linkProgram(this.program),l.deleteShader(b),l.deleteShader(y);for(let t=0;t<f.length;t++){const e=f[t];if(e&&!w[e]){const t=l.getUniformLocation(this.program,e);t&&(w[e]=t);}}this.fixedUniforms=r(e,w),this.terrainUniforms=((e,i)=>({u_depth:new t.Uniform1i(e,i.u_depth),u_terrain:new t.Uniform1i(e,i.u_terrain),u_terrain_dim:new t.Uniform1f(e,i.u_terrain_dim),u_terrain_matrix:new t.UniformMatrix4f(e,i.u_terrain_matrix),u_terrain_unpack:new t.Uniform4f(e,i.u_terrain_unpack),u_terrain_offset:new t.Uniform1f(e,i.u_terrain_offset),u_terrain_exaggeration:new t.Uniform1f(e,i.u_terrain_exaggeration)}))(e,w),this.binderUniforms=a?a.getUniforms(e,w):[];}draw(t,e,i,o,a,r,s,n,l,c,h,u,d,m,_,p,f,g){const x=t.gl;if(this.failedToCreate)return;if(t.program.set(this.program),t.setDepthMode(i),t.setStencilMode(o),t.setColorMode(a),t.setCullFace(r),n){t.activeTexture.set(x.TEXTURE2),x.bindTexture(x.TEXTURE_2D,n.depthTexture),t.activeTexture.set(x.TEXTURE3),x.bindTexture(x.TEXTURE_2D,n.texture);for(const t in this.terrainUniforms)this.terrainUniforms[t].set(n[t]);}for(const t in this.fixedUniforms)this.fixedUniforms[t].set(s[t]);_&&_.setUniforms(t,this.binderUniforms,d,{zoom:m});let v=0;switch(e){case x.LINES:v=2;break;case x.TRIANGLES:v=3;break;case x.LINE_STRIP:v=1;}for(const i of u.get()){const o=i.vaos||(i.vaos={});(o[l]||(o[l]=new re)).bind(t,this,c,_?_.getPaintVertexBuffers():[],h,i.vertexOffset,p,f,g),x.drawElements(e,i.primitiveLength*v,x.UNSIGNED_SHORT,i.primitiveOffset*v*2);}}}function le(t,e,i){const o=1/bt(i,1,e.transform.tileZoom),a=Math.pow(2,i.tileID.overscaledZ),r=i.tileSize*Math.pow(2,e.transform.tileZoom)/a,s=r*(i.tileID.canonical.x+i.tileID.wrap*a),n=r*i.tileID.canonical.y;return {u_image:0,u_texsize:i.imageAtlasTexture.size,u_scale:[o,t.fromScale,t.toScale],u_fade:t.t,u_pixel_coord_upper:[s>>16,n>>16],u_pixel_coord_lower:[65535&s,65535&n]}}const ce=(e,i,o,a)=>{const r=i.style.light,s=r.properties.get("position"),n=[s.x,s.y,s.z],l=t.create$1();"viewport"===r.properties.get("anchor")&&t.fromRotation(l,-i.transform.angle),t.transformMat3(n,n,l);const c=r.properties.get("color");return {u_matrix:e,u_lightpos:n,u_lightintensity:r.properties.get("intensity"),u_lightcolor:[c.r,c.g,c.b],u_vertical_gradient:+o,u_opacity:a}},he=(e,i,o,a,r,s,n)=>t.extend(ce(e,i,o,a),le(s,i,n),{u_height_factor:-Math.pow(2,r.overscaledZ)/n.tileSize/8}),ue=t=>({u_matrix:t}),de=(e,i,o,a)=>t.extend(ue(e),le(o,i,a)),me=(t,e)=>({u_matrix:t,u_world:e}),_e=(e,i,o,a,r)=>t.extend(de(e,i,o,a),{u_world:r}),pe=(t,e,i,o)=>{const a=t.transform;let r,s;if("map"===o.paint.get("circle-pitch-alignment")){const t=bt(i,1,a.zoom);r=!0,s=[t,t];}else r=!1,s=a.pixelsToGLUnits;return {u_camera_to_center_distance:a.cameraToCenterDistance,u_scale_with_map:+("map"===o.paint.get("circle-pitch-scale")),u_matrix:t.translatePosMatrix(e.posMatrix,i,o.paint.get("circle-translate"),o.paint.get("circle-translate-anchor")),u_pitch_with_map:+r,u_device_pixel_ratio:t.pixelRatio,u_extrude_scale:s}},fe=(t,e,i)=>{const o=bt(i,1,e.zoom),a=Math.pow(2,e.zoom-i.tileID.overscaledZ),r=i.tileID.overscaleFactor();return {u_matrix:t,u_camera_to_center_distance:e.cameraToCenterDistance,u_pixels_to_tile_units:o,u_extrude_scale:[e.pixelsToGLUnits[0]/(o*a),e.pixelsToGLUnits[1]/(o*a)],u_overscale_factor:r}},ge=(t,e,i=1)=>({u_matrix:t,u_color:e,u_overlay:0,u_overlay_scale:i}),xe=t=>({u_matrix:t}),ve=(t,e,i,o)=>({u_matrix:t,u_extrude_scale:bt(e,1,i),u_intensity:o});function ye(e,i){const o=Math.pow(2,i.canonical.z),a=i.canonical.y;return [new t.MercatorCoordinate(0,a/o).toLngLat().lat,new t.MercatorCoordinate(0,(a+1)/o).toLngLat().lat]}const be=(t,e,i,o)=>{const a=t.transform;return {u_matrix:Ce(t,e,i,o),u_ratio:1/bt(e,1,a.zoom),u_device_pixel_ratio:t.pixelRatio,u_units_to_pixels:[1/a.pixelsToGLUnits[0],1/a.pixelsToGLUnits[1]]}},we=(e,i,o,a,r)=>t.extend(be(e,i,o,r),{u_image:0,u_image_height:a}),Te=(t,e,i,o,a)=>{const r=t.transform,s=Ie(e,r);return {u_matrix:Ce(t,e,i,a),u_texsize:e.imageAtlasTexture.size,u_ratio:1/bt(e,1,r.zoom),u_device_pixel_ratio:t.pixelRatio,u_image:0,u_scale:[s,o.fromScale,o.toScale],u_fade:o.t,u_units_to_pixels:[1/r.pixelsToGLUnits[0],1/r.pixelsToGLUnits[1]]}},Ee=(e,i,o,a,r,s)=>{const n=e.lineAtlas,l=Ie(i,e.transform),c="round"===o.layout.get("line-cap"),h=n.getDash(a.from,c),u=n.getDash(a.to,c),d=h.width*r.fromScale,m=u.width*r.toScale;return t.extend(be(e,i,o,s),{u_patternscale_a:[l/d,-h.height/2],u_patternscale_b:[l/m,-u.height/2],u_sdfgamma:n.width/(256*Math.min(d,m)*e.pixelRatio)/2,u_image:0,u_tex_y_a:h.y,u_tex_y_b:u.y,u_mix:r.t})};function Ie(t,e){return 1/bt(t,1,e.tileZoom)}function Ce(t,e,i,o){return t.translatePosMatrix(o?o.posMatrix:e.tileID.posMatrix,e,i.paint.get("line-translate"),i.paint.get("line-translate-anchor"))}const Se=(t,e,i,o,a)=>{return {u_matrix:t,u_tl_parent:e,u_scale_parent:i,u_buffer_scale:1,u_fade_t:o.mix,u_opacity:o.opacity*a.paint.get("raster-opacity"),u_image0:0,u_image1:1,u_brightness_low:a.paint.get("raster-brightness-min"),u_brightness_high:a.paint.get("raster-brightness-max"),u_saturation_factor:(s=a.paint.get("raster-saturation"),s>0?1-1/(1.001-s):-s),u_contrast_factor:(r=a.paint.get("raster-contrast"),r>0?1/(1-r):1+r),u_spin_weights:De(a.paint.get("raster-hue-rotate"))};var r,s;};function De(t){t*=Math.PI/180;const e=Math.sin(t),i=Math.cos(t);return [(2*i+1)/3,(-Math.sqrt(3)*e-i+1)/3,(Math.sqrt(3)*e-i+1)/3]}const ze=(t,e,i,o,a,r,s,n,l,c)=>{const h=a.transform;return {u_is_size_zoom_constant:+("constant"===t||"source"===t),u_is_size_feature_constant:+("constant"===t||"camera"===t),u_size_t:e?e.uSizeT:0,u_size:e?e.uSize:0,u_camera_to_center_distance:h.cameraToCenterDistance,u_pitch:h.pitch/360*2*Math.PI,u_rotate_symbol:+i,u_aspect_ratio:h.width/h.height,u_fade_change:a.options.fadeDuration?a.symbolFadeChange:1,u_matrix:r,u_label_plane_matrix:s,u_coord_matrix:n,u_is_text:+l,u_pitch_with_map:+o,u_texsize:c,u_texture:0}},Pe=(e,i,o,a,r,s,n,l,c,h,u)=>{const d=r.transform;return t.extend(ze(e,i,o,a,r,s,n,l,c,h),{u_gamma_scale:a?Math.cos(d._pitch)*d.cameraToCenterDistance:1,u_device_pixel_ratio:r.pixelRatio,u_is_halo:+u})},Me=(e,i,o,a,r,s,n,l,c,h)=>t.extend(Pe(e,i,o,a,r,s,n,l,!0,c,!0),{u_texsize_icon:h,u_texture_icon:1}),Ae=(t,e,i)=>({u_matrix:t,u_opacity:e,u_color:i}),Le=(e,i,o,a,r,s)=>t.extend(function(t,e,i,o){const a=i.imageManager.getPattern(t.from.toString()),r=i.imageManager.getPattern(t.to.toString()),{width:s,height:n}=i.imageManager.getPixelSize(),l=Math.pow(2,o.tileID.overscaledZ),c=o.tileSize*Math.pow(2,i.transform.tileZoom)/l,h=c*(o.tileID.canonical.x+o.tileID.wrap*l),u=c*o.tileID.canonical.y;return {u_image:0,u_pattern_tl_a:a.tl,u_pattern_br_a:a.br,u_pattern_tl_b:r.tl,u_pattern_br_b:r.br,u_texsize:[s,n],u_mix:e.t,u_pattern_size_a:a.displaySize,u_pattern_size_b:r.displaySize,u_scale_a:e.fromScale,u_scale_b:e.toScale,u_tile_units_to_pixels:1/bt(o,1,i.transform.tileZoom),u_pixel_coord_upper:[h>>16,u>>16],u_pixel_coord_lower:[65535&h,65535&u]}}(a,s,o,r),{u_matrix:e,u_opacity:i}),Re={fillExtrusion:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_opacity:new t.Uniform1f(e,i.u_opacity)}),fillExtrusionPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_height_factor:new t.Uniform1f(e,i.u_height_factor),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade),u_opacity:new t.Uniform1f(e,i.u_opacity)}),fill:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),fillPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),fillOutline:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world)}),fillOutlinePattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),circle:(e,i)=>({u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_scale_with_map:new t.Uniform1i(e,i.u_scale_with_map),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),collisionBox:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pixels_to_tile_units:new t.Uniform1f(e,i.u_pixels_to_tile_units),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_overscale_factor:new t.Uniform1f(e,i.u_overscale_factor)}),collisionCircle:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_inv_matrix:new t.UniformMatrix4f(e,i.u_inv_matrix),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_viewport_size:new t.Uniform2f(e,i.u_viewport_size)}),debug:(e,i)=>({u_color:new t.UniformColor(e,i.u_color),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_overlay:new t.Uniform1i(e,i.u_overlay),u_overlay_scale:new t.Uniform1f(e,i.u_overlay_scale)}),clippingMask:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),heatmap:(e,i)=>({u_extrude_scale:new t.Uniform1f(e,i.u_extrude_scale),u_intensity:new t.Uniform1f(e,i.u_intensity),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),heatmapTexture:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_color_ramp:new t.Uniform1i(e,i.u_color_ramp),u_opacity:new t.Uniform1f(e,i.u_opacity)}),hillshade:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_latrange:new t.Uniform2f(e,i.u_latrange),u_light:new t.Uniform2f(e,i.u_light),u_shadow:new t.UniformColor(e,i.u_shadow),u_highlight:new t.UniformColor(e,i.u_highlight),u_accent:new t.UniformColor(e,i.u_accent)}),hillshadePrepare:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_dimension:new t.Uniform2f(e,i.u_dimension),u_zoom:new t.Uniform1f(e,i.u_zoom),u_unpack:new t.Uniform4f(e,i.u_unpack)}),line:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels)}),lineGradient:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_image:new t.Uniform1i(e,i.u_image),u_image_height:new t.Uniform1f(e,i.u_image_height)}),linePattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texsize:new t.Uniform2f(e,i.u_texsize),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_image:new t.Uniform1i(e,i.u_image),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),lineSDF:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_patternscale_a:new t.Uniform2f(e,i.u_patternscale_a),u_patternscale_b:new t.Uniform2f(e,i.u_patternscale_b),u_sdfgamma:new t.Uniform1f(e,i.u_sdfgamma),u_image:new t.Uniform1i(e,i.u_image),u_tex_y_a:new t.Uniform1f(e,i.u_tex_y_a),u_tex_y_b:new t.Uniform1f(e,i.u_tex_y_b),u_mix:new t.Uniform1f(e,i.u_mix)}),raster:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_tl_parent:new t.Uniform2f(e,i.u_tl_parent),u_scale_parent:new t.Uniform1f(e,i.u_scale_parent),u_buffer_scale:new t.Uniform1f(e,i.u_buffer_scale),u_fade_t:new t.Uniform1f(e,i.u_fade_t),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image0:new t.Uniform1i(e,i.u_image0),u_image1:new t.Uniform1i(e,i.u_image1),u_brightness_low:new t.Uniform1f(e,i.u_brightness_low),u_brightness_high:new t.Uniform1f(e,i.u_brightness_high),u_saturation_factor:new t.Uniform1f(e,i.u_saturation_factor),u_contrast_factor:new t.Uniform1f(e,i.u_contrast_factor),u_spin_weights:new t.Uniform3f(e,i.u_spin_weights)}),symbolIcon:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture)}),symbolSDF:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,i.u_is_halo)}),symbolTextAndIcon:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texsize_icon:new t.Uniform2f(e,i.u_texsize_icon),u_texture:new t.Uniform1i(e,i.u_texture),u_texture_icon:new t.Uniform1i(e,i.u_texture_icon),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,i.u_is_halo)}),background:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_color:new t.UniformColor(e,i.u_color)}),backgroundPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image:new t.Uniform1i(e,i.u_image),u_pattern_tl_a:new t.Uniform2f(e,i.u_pattern_tl_a),u_pattern_br_a:new t.Uniform2f(e,i.u_pattern_br_a),u_pattern_tl_b:new t.Uniform2f(e,i.u_pattern_tl_b),u_pattern_br_b:new t.Uniform2f(e,i.u_pattern_br_b),u_texsize:new t.Uniform2f(e,i.u_texsize),u_mix:new t.Uniform1f(e,i.u_mix),u_pattern_size_a:new t.Uniform2f(e,i.u_pattern_size_a),u_pattern_size_b:new t.Uniform2f(e,i.u_pattern_size_b),u_scale_a:new t.Uniform1f(e,i.u_scale_a),u_scale_b:new t.Uniform1f(e,i.u_scale_b),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_tile_units_to_pixels:new t.Uniform1f(e,i.u_tile_units_to_pixels)}),terrain:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texture:new t.Uniform1i(e,i.u_texture)}),terrainDepth:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),terrainCoords:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texture:new t.Uniform1i(e,i.u_texture),u_terrain_coords_id:new t.Uniform1f(e,i.u_terrain_coords_id)})};class ke{constructor(t,e,i){this.context=t;const o=t.gl;this.buffer=o.createBuffer(),this.dynamicDraw=Boolean(i),this.context.unbindVAO(),t.bindElementBuffer.set(this.buffer),o.bufferData(o.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?o.DYNAMIC_DRAW:o.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;}bind(){this.context.bindElementBuffer.set(this.buffer);}updateData(t){const e=this.context.gl;if(!this.dynamicDraw)throw new Error("Attempted to update data while not in dynamic mode.");this.context.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer);}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer);}}const Be={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"};class Fe{constructor(t,e,i,o){this.length=e.length,this.attributes=i,this.itemSize=e.bytesPerElement,this.dynamicDraw=o,this.context=t;const a=t.gl;this.buffer=a.createBuffer(),t.bindVertexBuffer.set(this.buffer),a.bufferData(a.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?a.DYNAMIC_DRAW:a.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;}bind(){this.context.bindVertexBuffer.set(this.buffer);}updateData(t){if(t.length!==this.length)throw new Error(`Length of new data is ${t.length}, which doesn't match current length of ${this.length}`);const e=this.context.gl;this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer);}enableAttributes(t,e){for(let i=0;i<this.attributes.length;i++){const o=e.attributes[this.attributes[i].name];void 0!==o&&t.enableVertexAttribArray(o);}}setVertexAttribPointers(t,e,i){for(let o=0;o<this.attributes.length;o++){const a=this.attributes[o],r=e.attributes[a.name];void 0!==r&&t.vertexAttribPointer(r,a.components,t[Be[a.type]],!1,this.itemSize,a.offset+this.itemSize*(i||0));}}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer);}}class Oe{constructor(t){this.gl=t.gl,this.default=this.getDefault(),this.current=this.default,this.dirty=!1;}get(){return this.current}set(t){}getDefault(){return this.default}setDefault(){this.set(this.default);}}class Ue extends Oe{getDefault(){return t.Color.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1);}}class Ne extends Oe{getDefault(){return 1}set(t){(t!==this.current||this.dirty)&&(this.gl.clearDepth(t),this.current=t,this.dirty=!1);}}class Ge extends Oe{getDefault(){return 0}set(t){(t!==this.current||this.dirty)&&(this.gl.clearStencil(t),this.current=t,this.dirty=!1);}}class Ze extends Oe{getDefault(){return [!0,!0,!0,!0]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1);}}class Ve extends Oe{getDefault(){return !0}set(t){(t!==this.current||this.dirty)&&(this.gl.depthMask(t),this.current=t,this.dirty=!1);}}class qe extends Oe{getDefault(){return 255}set(t){(t!==this.current||this.dirty)&&(this.gl.stencilMask(t),this.current=t,this.dirty=!1);}}class je extends Oe{getDefault(){return {func:this.gl.ALWAYS,ref:0,mask:255}}set(t){const e=this.current;(t.func!==e.func||t.ref!==e.ref||t.mask!==e.mask||this.dirty)&&(this.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t,this.dirty=!1);}}class $e extends Oe{getDefault(){const t=this.gl;return [t.KEEP,t.KEEP,t.KEEP]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||this.dirty)&&(this.gl.stencilOp(t[0],t[1],t[2]),this.current=t,this.dirty=!1);}}class Xe extends Oe{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t,this.dirty=!1;}}class We extends Oe{getDefault(){return [0,1]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.depthRange(t[0],t[1]),this.current=t,this.dirty=!1);}}class He extends Oe{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t,this.dirty=!1;}}class Ke extends Oe{getDefault(){return this.gl.LESS}set(t){(t!==this.current||this.dirty)&&(this.gl.depthFunc(t),this.current=t,this.dirty=!1);}}class Ye extends Oe{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t,this.dirty=!1;}}class Je extends Oe{getDefault(){const t=this.gl;return [t.ONE,t.ZERO]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.blendFunc(t[0],t[1]),this.current=t,this.dirty=!1);}}class Qe extends Oe{getDefault(){return t.Color.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1);}}class ti extends Oe{getDefault(){return this.gl.FUNC_ADD}set(t){(t!==this.current||this.dirty)&&(this.gl.blendEquation(t),this.current=t,this.dirty=!1);}}class ei extends Oe{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this.current=t,this.dirty=!1;}}class ii extends Oe{getDefault(){return this.gl.BACK}set(t){(t!==this.current||this.dirty)&&(this.gl.cullFace(t),this.current=t,this.dirty=!1);}}class oi extends Oe{getDefault(){return this.gl.CCW}set(t){(t!==this.current||this.dirty)&&(this.gl.frontFace(t),this.current=t,this.dirty=!1);}}class ai extends Oe{getDefault(){return null}set(t){(t!==this.current||this.dirty)&&(this.gl.useProgram(t),this.current=t,this.dirty=!1);}}class ri extends Oe{getDefault(){return this.gl.TEXTURE0}set(t){(t!==this.current||this.dirty)&&(this.gl.activeTexture(t),this.current=t,this.dirty=!1);}}class si extends Oe{getDefault(){const t=this.gl;return [0,0,t.drawingBufferWidth,t.drawingBufferHeight]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1);}}class ni extends Oe{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t,this.dirty=!1;}}class li extends Oe{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t,this.dirty=!1;}}class ci extends Oe{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindTexture(e.TEXTURE_2D,t),this.current=t,this.dirty=!1;}}class hi extends Oe{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t,this.dirty=!1;}}class ui extends Oe{getDefault(){return null}set(t){const e=this.gl;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t,this.dirty=!1;}}class di extends Oe{constructor(t){super(t),this.vao=t.extVertexArrayObject;}getDefault(){return null}set(t){this.vao&&(t!==this.current||this.dirty)&&(this.vao.bindVertexArrayOES(t),this.current=t,this.dirty=!1);}}class mi extends Oe{getDefault(){return 4}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t,this.dirty=!1;}}class _i extends Oe{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t,this.dirty=!1;}}class pi extends Oe{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t),this.current=t,this.dirty=!1;}}class fi extends Oe{constructor(t,e){super(t),this.context=t,this.parent=e;}getDefault(){return null}}class gi extends fi{setDirty(){this.dirty=!0;}set(t){if(t===this.current&&!this.dirty)return;this.context.bindFramebuffer.set(this.parent);const e=this.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1;}}class xi extends fi{set(t){if(t===this.current&&!this.dirty)return;this.context.bindFramebuffer.set(this.parent);const e=this.gl;e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1;}}class vi{constructor(t,e,i,o){this.context=t,this.width=e,this.height=i;const a=t.gl,r=this.framebuffer=a.createFramebuffer();if(this.colorAttachment=new gi(t,r),o&&(this.depthAttachment=new xi(t,r)),a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE)throw new Error("Framebuffer is not complete")}destroy(){const t=this.context.gl,e=this.colorAttachment.get();if(e&&t.deleteTexture(e),this.depthAttachment){const e=this.depthAttachment.get();e&&t.deleteRenderbuffer(e);}t.deleteFramebuffer(this.framebuffer);}}class yi{constructor(t,e,i){this.blendFunction=t,this.blendColor=e,this.mask=i;}}yi.Replace=[1,0],yi.disabled=new yi(yi.Replace,t.Color.transparent,[!1,!1,!1,!1]),yi.unblended=new yi(yi.Replace,t.Color.transparent,[!0,!0,!0,!0]),yi.alphaBlended=new yi([1,771],t.Color.transparent,[!0,!0,!0,!0]);class bi{constructor(t){this.gl=t,this.extVertexArrayObject=this.gl.getExtension("OES_vertex_array_object"),this.clearColor=new Ue(this),this.clearDepth=new Ne(this),this.clearStencil=new Ge(this),this.colorMask=new Ze(this),this.depthMask=new Ve(this),this.stencilMask=new qe(this),this.stencilFunc=new je(this),this.stencilOp=new $e(this),this.stencilTest=new Xe(this),this.depthRange=new We(this),this.depthTest=new He(this),this.depthFunc=new Ke(this),this.blend=new Ye(this),this.blendFunc=new Je(this),this.blendColor=new Qe(this),this.blendEquation=new ti(this),this.cullFace=new ei(this),this.cullFaceSide=new ii(this),this.frontFace=new oi(this),this.program=new ai(this),this.activeTexture=new ri(this),this.viewport=new si(this),this.bindFramebuffer=new ni(this),this.bindRenderbuffer=new li(this),this.bindTexture=new ci(this),this.bindVertexBuffer=new hi(this),this.bindElementBuffer=new ui(this),this.bindVertexArrayOES=this.extVertexArrayObject&&new di(this),this.pixelStoreUnpack=new mi(this),this.pixelStoreUnpackPremultiplyAlpha=new _i(this),this.pixelStoreUnpackFlipY=new pi(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.extTextureHalfFloat=t.getExtension("OES_texture_half_float"),this.extTextureHalfFloat&&(t.getExtension("OES_texture_half_float_linear"),this.extRenderToTextureHalfFloat=t.getExtension("EXT_color_buffer_half_float")),this.extTimerQuery=t.getExtension("EXT_disjoint_timer_query"),this.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE);}setDefault(){this.unbindVAO(),this.clearColor.setDefault(),this.clearDepth.setDefault(),this.clearStencil.setDefault(),this.colorMask.setDefault(),this.depthMask.setDefault(),this.stencilMask.setDefault(),this.stencilFunc.setDefault(),this.stencilOp.setDefault(),this.stencilTest.setDefault(),this.depthRange.setDefault(),this.depthTest.setDefault(),this.depthFunc.setDefault(),this.blend.setDefault(),this.blendFunc.setDefault(),this.blendColor.setDefault(),this.blendEquation.setDefault(),this.cullFace.setDefault(),this.cullFaceSide.setDefault(),this.frontFace.setDefault(),this.program.setDefault(),this.activeTexture.setDefault(),this.bindFramebuffer.setDefault(),this.pixelStoreUnpack.setDefault(),this.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.pixelStoreUnpackFlipY.setDefault();}setDirty(){this.clearColor.dirty=!0,this.clearDepth.dirty=!0,this.clearStencil.dirty=!0,this.colorMask.dirty=!0,this.depthMask.dirty=!0,this.stencilMask.dirty=!0,this.stencilFunc.dirty=!0,this.stencilOp.dirty=!0,this.stencilTest.dirty=!0,this.depthRange.dirty=!0,this.depthTest.dirty=!0,this.depthFunc.dirty=!0,this.blend.dirty=!0,this.blendFunc.dirty=!0,this.blendColor.dirty=!0,this.blendEquation.dirty=!0,this.cullFace.dirty=!0,this.cullFaceSide.dirty=!0,this.frontFace.dirty=!0,this.program.dirty=!0,this.activeTexture.dirty=!0,this.viewport.dirty=!0,this.bindFramebuffer.dirty=!0,this.bindRenderbuffer.dirty=!0,this.bindTexture.dirty=!0,this.bindVertexBuffer.dirty=!0,this.bindElementBuffer.dirty=!0,this.extVertexArrayObject&&(this.bindVertexArrayOES.dirty=!0),this.pixelStoreUnpack.dirty=!0,this.pixelStoreUnpackPremultiplyAlpha.dirty=!0,this.pixelStoreUnpackFlipY.dirty=!0;}createIndexBuffer(t,e){return new ke(this,t,e)}createVertexBuffer(t,e,i){return new Fe(this,t,e,i)}createRenderbuffer(t,e,i){const o=this.gl,a=o.createRenderbuffer();return this.bindRenderbuffer.set(a),o.renderbufferStorage(o.RENDERBUFFER,t,e,i),this.bindRenderbuffer.set(null),a}createFramebuffer(t,e,i){return new vi(this,t,e,i)}clear({color:t,depth:e}){const i=this.gl;let o=0;t&&(o|=i.COLOR_BUFFER_BIT,this.clearColor.set(t),this.colorMask.set([!0,!0,!0,!0])),void 0!==e&&(o|=i.DEPTH_BUFFER_BIT,this.depthRange.set([0,1]),this.clearDepth.set(e),this.depthMask.set(!0)),i.clear(o);}setCullFace(t){!1===t.enable?this.cullFace.set(!1):(this.cullFace.set(!0),this.cullFaceSide.set(t.mode),this.frontFace.set(t.frontFace));}setDepthMode(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1);}setStencilMode(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1);}setColorMode(t){a(t.blendFunction,yi.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(t.blendFunction),this.blendColor.set(t.blendColor)),this.colorMask.set(t.mask);}unbindVAO(){this.extVertexArrayObject&&this.bindVertexArrayOES.set(null);}}class wi{constructor(t,e,i){this.func=t,this.mask=e,this.range=i;}}wi.ReadOnly=!1,wi.ReadWrite=!0,wi.disabled=new wi(519,wi.ReadOnly,[0,1]);const Ti=7680;class Ei{constructor(t,e,i,o,a,r){this.test=t,this.ref=e,this.mask=i,this.fail=o,this.depthFail=a,this.pass=r;}}Ei.disabled=new Ei({func:519,mask:0},0,0,Ti,Ti,Ti);class Ii{constructor(t,e,i){this.enable=t,this.mode=e,this.frontFace=i;}}let Ci;function Si(e,i,o,a,r,s,n){const l=e.context,c=l.gl,h=e.useProgram("collisionBox"),u=[];let d=0,m=0;for(let _=0;_<a.length;_++){const p=a[_],f=i.getTile(p),g=f.getBucket(o);if(!g)continue;let x=p.posMatrix;0===r[0]&&0===r[1]||(x=e.translatePosMatrix(p.posMatrix,f,r,s));const v=n?g.textCollisionBox:g.iconCollisionBox,y=g.collisionCircleArray;if(y.length>0){const i=t.create(),o=x;t.mul(i,g.placementInvProjMatrix,e.transform.glCoordMatrix),t.mul(i,i,g.placementViewportMatrix),u.push({circleArray:y,circleOffset:m,transform:o,invTransform:i,coord:p}),d+=y.length/4,m=d;}v&&h.draw(l,c.LINES,wi.disabled,Ei.disabled,e.colorModeForRenderPass(),Ii.disabled,fe(x,e.transform,f),e.style.terrain&&e.style.terrain.getTerrainData(p),o.id,v.layoutVertexBuffer,v.indexBuffer,v.segments,null,e.transform.zoom,null,null,v.collisionVertexBuffer);}if(!n||!u.length)return;const _=e.useProgram("collisionCircle"),p=new t.CollisionCircleLayoutArray;p.resize(4*d),p._trim();let f=0;for(const t of u)for(let e=0;e<t.circleArray.length/4;e++){const i=4*e,o=t.circleArray[i+0],a=t.circleArray[i+1],r=t.circleArray[i+2],s=t.circleArray[i+3];p.emplace(f++,o,a,r,s,0),p.emplace(f++,o,a,r,s,1),p.emplace(f++,o,a,r,s,2),p.emplace(f++,o,a,r,s,3);}(!Ci||Ci.length<2*d)&&(Ci=function(e){const i=2*e,o=new t.QuadTriangleArray;o.resize(i),o._trim();for(let t=0;t<i;t++){const e=6*t;o.uint16[e+0]=4*t+0,o.uint16[e+1]=4*t+1,o.uint16[e+2]=4*t+2,o.uint16[e+3]=4*t+2,o.uint16[e+4]=4*t+3,o.uint16[e+5]=4*t+0;}return o}(d));const g=l.createIndexBuffer(Ci,!0),x=l.createVertexBuffer(p,t.collisionCircleLayout.members,!0);for(const i of u){const a={u_matrix:i.transform,u_inv_matrix:i.invTransform,u_camera_to_center_distance:(v=e.transform).cameraToCenterDistance,u_viewport_size:[v.width,v.height]};_.draw(l,c.TRIANGLES,wi.disabled,Ei.disabled,e.colorModeForRenderPass(),Ii.disabled,a,e.style.terrain&&e.style.terrain.getTerrainData(i.coord),o.id,x,g,t.SegmentVector.simpleSegment(0,2*i.circleOffset,i.circleArray.length,i.circleArray.length/2),null,e.transform.zoom,null,null,null);}var v;x.destroy(),g.destroy();}Ii.disabled=new Ii(!1,1029,2305),Ii.backCCW=new Ii(!0,1029,2305);const Di=t.identity(new Float32Array(16));function zi(e,i,o,a,r,s){const{horizontalAlign:n,verticalAlign:l}=t.getAnchorAlignment(e),c=-(n-.5)*i,h=-(l-.5)*o,u=t.evaluateVariableOffset(e,a);return new t.pointGeometry((c/r+u[0])*s,(h/r+u[1])*s)}function Pi(e,i,o,a,r,s,n,l,c,h,u){const d=e.text.placedSymbolArray,m=e.text.dynamicLayoutVertexArray,_=e.icon.dynamicLayoutVertexArray,p={};m.clear();for(let _=0;_<d.length;_++){const f=d.get(_),g=e.allowVerticalPlacement&&!f.placedOrientation,x=f.hidden||!f.crossTileID||g?null:a[f.crossTileID];if(x){const a=new t.pointGeometry(f.anchorX,f.anchorY),d=nt(a,o?n:s,u),_=lt(r.cameraToCenterDistance,d.signedDistanceFromCamera);let g=t.evaluateSizeForFeature(e.textSizeData,c,f)*_/t.ONE_EM;o&&(g*=e.tilePixelRatio/l);const{width:v,height:y,anchor:b,textOffset:w,textBoxScale:T}=x,E=zi(b,v,y,w,T,g),I=o?nt(a.add(E),s,u).point:d.point.add(i?E.rotate(-r.angle):E),C=e.allowVerticalPlacement&&f.placedOrientation===t.WritingMode.vertical?Math.PI/2:0;for(let e=0;e<f.numGlyphs;e++)t.addDynamicAttributes(m,I,C);h&&f.associatedIconIndex>=0&&(p[f.associatedIconIndex]={shiftedAnchor:I,angle:C});}else gt(f.numGlyphs,m);}if(h){_.clear();const i=e.icon.placedSymbolArray;for(let e=0;e<i.length;e++){const o=i.get(e);if(o.hidden)gt(o.numGlyphs,_);else {const i=p[e];if(i)for(let e=0;e<o.numGlyphs;e++)t.addDynamicAttributes(_,i.shiftedAnchor,i.angle);else gt(o.numGlyphs,_);}}e.icon.dynamicLayoutVertexBuffer.updateData(_);}e.text.dynamicLayoutVertexBuffer.updateData(m);}function Mi(t,e,i){return i.iconsInText&&e?"symbolTextAndIcon":t?"symbolSDF":"symbolIcon"}function Ai(e,i,o,a,r,s,n,l,c,h,u,d){const m=e.context,_=m.gl,p=e.transform,f="map"===l,g="map"===c,x="viewport"!==l&&"point"!==o.layout.get("symbol-placement"),v=f&&!g&&!x,y=!o.layout.get("symbol-sort-key").isConstant();let b=!1;const w=e.depthModeForSublayer(0,wi.ReadOnly),T=o.layout.get("text-variable-anchor"),E=[];for(const l of a){const a=i.getTile(l),c=a.getBucket(o);if(!c)continue;const u=r?c.text:c.icon;if(!u||!u.segments.get().length)continue;const d=u.programConfigurations.get(o.id),m=r||c.sdfIcons,w=r?c.textSizeData:c.iconSizeData,I=g||0!==p.pitch,C=e.useProgram(Mi(m,r,c),d),S=t.evaluateSizeForZoom(w,p.zoom),D=e.style.terrain&&e.style.terrain.getTerrainData(l);let z,P,M,A,L=[0,0],R=null;if(r){if(P=a.glyphAtlasTexture,M=_.LINEAR,z=a.glyphAtlasTexture.size,c.iconsInText){L=a.imageAtlasTexture.size,R=a.imageAtlasTexture;const t="composite"===w.kind||"camera"===w.kind;A=I||e.options.rotating||e.options.zooming||t?_.LINEAR:_.NEAREST;}}else {const t=1!==o.layout.get("icon-size").constantOr(0)||c.iconsNeedLinear;P=a.imageAtlasTexture,M=m||e.options.rotating||e.options.zooming||t||I?_.LINEAR:_.NEAREST,z=a.imageAtlasTexture.size;}const k=bt(a,1,e.transform.zoom),B=rt(l.posMatrix,g,f,e.transform,k),F=st(l.posMatrix,g,f,e.transform,k),O=T&&c.hasTextData(),U="none"!==o.layout.get("icon-text-fit")&&O&&c.hasIconData();if(x){const t=e.style.terrain?(t,i)=>e.style.terrain.getElevation(l,t,i):null,i="map"===o.layout.get("text-rotation-alignment");ht(c,l.posMatrix,e,r,B,F,g,h,i,t);}const N=e.translatePosMatrix(l.posMatrix,a,s,n),G=x||r&&T||U?Di:B,Z=e.translatePosMatrix(F,a,s,n,!0),V=m&&0!==o.paint.get(r?"text-halo-width":"icon-halo-width").constantOr(1);let q;q=m?c.iconsInText?Me(w.kind,S,v,g,e,N,G,Z,z,L):Pe(w.kind,S,v,g,e,N,G,Z,r,z,!0):ze(w.kind,S,v,g,e,N,G,Z,r,z);const j={program:C,buffers:u,uniformValues:q,atlasTexture:P,atlasTextureIcon:R,atlasInterpolation:M,atlasInterpolationIcon:A,isSDF:m,hasHalo:V};if(y&&c.canOverlap){b=!0;const e=u.segments.get();for(const i of e)E.push({segments:new t.SegmentVector([i]),sortKey:i.sortKey,state:j,terrainData:D});}else E.push({segments:u.segments,sortKey:0,state:j,terrainData:D});}b&&E.sort(((t,e)=>t.sortKey-e.sortKey));for(const t of E){const i=t.state;if(m.activeTexture.set(_.TEXTURE0),i.atlasTexture.bind(i.atlasInterpolation,_.CLAMP_TO_EDGE),i.atlasTextureIcon&&(m.activeTexture.set(_.TEXTURE1),i.atlasTextureIcon&&i.atlasTextureIcon.bind(i.atlasInterpolationIcon,_.CLAMP_TO_EDGE)),i.isSDF){const a=i.uniformValues;i.hasHalo&&(a.u_is_halo=1,Li(i.buffers,t.segments,o,e,i.program,w,u,d,a,t.terrainData)),a.u_is_halo=0;}Li(i.buffers,t.segments,o,e,i.program,w,u,d,i.uniformValues,t.terrainData);}}function Li(t,e,i,o,a,r,s,n,l,c){const h=o.context;a.draw(h,h.gl.TRIANGLES,r,s,n,Ii.disabled,l,c,i.id,t.layoutVertexBuffer,t.indexBuffer,e,i.paint,o.transform.zoom,t.programConfigurations.get(i.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer);}function Ri(t,e,i,o,a,r,s){const n=t.context.gl,l=i.paint.get("fill-pattern"),c=l&&l.constantOr(1),h=i.getCrossfadeParameters();let u,d,m,_,p;s?(d=c&&!i.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline",u=n.LINES):(d=c?"fillPattern":"fill",u=n.TRIANGLES);for(const f of o){const o=e.getTile(f);if(c&&!o.patternsLoaded())continue;const g=o.getBucket(i);if(!g)continue;const x=g.programConfigurations.get(i.id),v=t.useProgram(d,x),y=t.style.terrain&&t.style.terrain.getTerrainData(f);c&&(t.context.activeTexture.set(n.TEXTURE0),o.imageAtlasTexture.bind(n.LINEAR,n.CLAMP_TO_EDGE),x.updatePaintBuffers(h));const b=l.constantOr(null);if(b&&o.imageAtlas){const t=o.imageAtlas,e=t.patternPositions[b.to.toString()],i=t.patternPositions[b.from.toString()];e&&i&&x.setConstantPatternPositions(e,i);}const w=y?f:null,T=t.translatePosMatrix(w?w.posMatrix:f.posMatrix,o,i.paint.get("fill-translate"),i.paint.get("fill-translate-anchor"));if(s){_=g.indexBuffer2,p=g.segments2;const e=[n.drawingBufferWidth,n.drawingBufferHeight];m="fillOutlinePattern"===d&&c?_e(T,t,h,o,e):me(T,e);}else _=g.indexBuffer,p=g.segments,m=c?de(T,t,h,o):ue(T);v.draw(t.context,u,a,t.stencilModeForClipping(f),r,Ii.disabled,m,y,i.id,g.layoutVertexBuffer,_,p,i.paint,t.transform.zoom,x);}}function ki(t,e,i,o,a,r,s){const n=t.context,l=n.gl,c=i.paint.get("fill-extrusion-pattern"),h=c.constantOr(1),u=i.getCrossfadeParameters(),d=i.paint.get("fill-extrusion-opacity");for(const m of o){const o=e.getTile(m),_=o.getBucket(i);if(!_)continue;const p=t.style.terrain&&t.style.terrain.getTerrainData(m),f=_.programConfigurations.get(i.id),g=t.useProgram(h?"fillExtrusionPattern":"fillExtrusion",f);h&&(t.context.activeTexture.set(l.TEXTURE0),o.imageAtlasTexture.bind(l.LINEAR,l.CLAMP_TO_EDGE),f.updatePaintBuffers(u));const x=c.constantOr(null);if(x&&o.imageAtlas){const t=o.imageAtlas,e=t.patternPositions[x.to.toString()],i=t.patternPositions[x.from.toString()];e&&i&&f.setConstantPatternPositions(e,i);}const v=t.translatePosMatrix(m.posMatrix,o,i.paint.get("fill-extrusion-translate"),i.paint.get("fill-extrusion-translate-anchor")),y=i.paint.get("fill-extrusion-vertical-gradient"),b=h?he(v,t,y,d,m,u,o):ce(v,t,y,d);g.draw(n,n.gl.TRIANGLES,a,r,s,Ii.backCCW,b,p,i.id,_.layoutVertexBuffer,_.indexBuffer,_.segments,i.paint,t.transform.zoom,f,t.style.terrain&&_.centroidVertexBuffer);}}function Bi(t,e,i,o,a,r,s){const n=t.context,l=n.gl,c=i.fbo;if(!c)return;const h=t.useProgram("hillshade"),u=t.style.terrain&&t.style.terrain.getTerrainData(e);n.activeTexture.set(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,c.colorAttachment.get()),h.draw(n,l.TRIANGLES,a,r,s,Ii.disabled,((t,e,i,o)=>{const a=i.paint.get("hillshade-shadow-color"),r=i.paint.get("hillshade-highlight-color"),s=i.paint.get("hillshade-accent-color");let n=i.paint.get("hillshade-illumination-direction")*(Math.PI/180);"viewport"===i.paint.get("hillshade-illumination-anchor")&&(n-=t.transform.angle);const l=!t.options.moving;return {u_matrix:o?o.posMatrix:t.transform.calculatePosMatrix(e.tileID.toUnwrapped(),l),u_image:0,u_latrange:ye(0,e.tileID),u_light:[i.paint.get("hillshade-exaggeration"),n],u_shadow:a,u_highlight:r,u_accent:s}})(t,i,o,u?e:null),u,o.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments);}function Fi(e,i,o,a,r,s){const n=e.context,c=n.gl,h=i.dem;if(h&&h.data){const u=h.dim,d=h.stride,m=h.getPixels();if(n.activeTexture.set(c.TEXTURE1),n.pixelStoreUnpackPremultiplyAlpha.set(!1),i.demTexture=i.demTexture||e.getTileTexture(d),i.demTexture){const t=i.demTexture;t.update(m,{premultiply:!1}),t.bind(c.NEAREST,c.CLAMP_TO_EDGE);}else i.demTexture=new l(n,m,c.RGBA,{premultiply:!1}),i.demTexture.bind(c.NEAREST,c.CLAMP_TO_EDGE);n.activeTexture.set(c.TEXTURE0);let _=i.fbo;if(!_){const t=new l(n,{width:u,height:u,data:null},c.RGBA);t.bind(c.LINEAR,c.CLAMP_TO_EDGE),_=i.fbo=n.createFramebuffer(u,u,!0),_.colorAttachment.set(t.texture);}n.bindFramebuffer.set(_.framebuffer),n.viewport.set([0,0,u,u]),e.useProgram("hillshadePrepare").draw(n,c.TRIANGLES,a,r,s,Ii.disabled,((e,i)=>{const o=i.stride,a=t.create();return t.ortho(a,0,t.EXTENT,-t.EXTENT,0,0,1),t.translate(a,a,[0,-t.EXTENT,0]),{u_matrix:a,u_image:1,u_dimension:[o,o],u_zoom:e.overscaledZ,u_unpack:i.getUnpackVector()}})(i.tileID,h),null,o.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments),i.needsHillshadePrepare=!1;}}function Oi(e,i,o,a,r,s){const n=a.paint.get("raster-fade-duration");if(!s&&n>0){const a=t.exported.now(),s=(a-e.timeAdded)/n,l=i?(a-i.timeAdded)/n:-1,c=o.getSource(),h=r.coveringZoomLevel({tileSize:c.tileSize,roundZoom:c.roundZoom}),u=!i||Math.abs(i.tileID.overscaledZ-h)>Math.abs(e.tileID.overscaledZ-h),d=u&&e.refreshedUponExpiration?1:t.clamp(u?s:1-l,0,1);return e.refreshedUponExpiration&&s>=1&&(e.refreshedUponExpiration=!1),i?{opacity:1,mix:1-d}:{opacity:d,mix:0}}return {opacity:1,mix:0}}const Ui=new t.Color(1,0,0,1),Ni=new t.Color(0,1,0,1),Gi=new t.Color(0,0,1,1),Zi=new t.Color(1,0,1,1),Vi=new t.Color(0,1,1,1);function qi(t,e,i,o){$i(t,0,e+i/2,t.transform.width,i,o);}function ji(t,e,i,o){$i(t,e-i/2,0,i,t.transform.height,o);}function $i(t,e,i,o,a,r){const s=t.context,n=s.gl;n.enable(n.SCISSOR_TEST),n.scissor(e*t.pixelRatio,i*t.pixelRatio,o*t.pixelRatio,a*t.pixelRatio),s.clear({color:r}),n.disable(n.SCISSOR_TEST);}function Xi(e,i,o){const a=e.context,r=a.gl,s=o.posMatrix,n=e.useProgram("debug"),l=wi.disabled,c=Ei.disabled,h=e.colorModeForRenderPass(),u="$debug",d=e.style.terrain&&e.style.terrain.getTerrainData(o);a.activeTexture.set(r.TEXTURE0),e.emptyTexture.bind(r.LINEAR,r.CLAMP_TO_EDGE);const m=i.getTileByID(o.key).latestRawTileData,_=Math.floor((m&&m.byteLength||0)/1024),p=i.getTile(o).tileSize,f=512/Math.min(p,512)*(o.overscaledZ/e.transform.zoom)*.5;let g=o.canonical.toString();o.overscaledZ!==o.canonical.z&&(g+=` => ${o.overscaledZ}`),function(t,e){t.initDebugOverlayCanvas();const i=t.debugOverlayCanvas,o=t.context.gl,a=t.debugOverlayCanvas.getContext("2d");a.clearRect(0,0,i.width,i.height),a.shadowColor="white",a.shadowBlur=2,a.lineWidth=1.5,a.strokeStyle="white",a.textBaseline="top",a.font="bold 36px Open Sans, sans-serif",a.fillText(e,5,5),a.strokeText(e,5,5),t.debugOverlayTexture.update(i),t.debugOverlayTexture.bind(o.LINEAR,o.CLAMP_TO_EDGE);}(e,`${g} ${_}kB`),n.draw(a,r.TRIANGLES,l,c,yi.alphaBlended,Ii.disabled,ge(s,t.Color.transparent,f),null,u,e.debugBuffer,e.quadTriangleIndexBuffer,e.debugSegments),n.draw(a,r.LINE_STRIP,l,c,h,Ii.disabled,ge(s,t.Color.red),d,u,e.debugBuffer,e.tileBorderIndexBuffer,e.debugSegments);}function Wi(t,e,i){const o=t.context,a=o.gl,r=t.colorModeForRenderPass(),s=new wi(a.LEQUAL,wi.ReadWrite,t.depthRangeFor3D),n=t.useProgram("terrain"),l=e.getTerrainMesh(),c=e.getTerrainData(i.tileID);o.bindFramebuffer.set(null),o.viewport.set([0,0,t.width,t.height]),o.activeTexture.set(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e.getRTTFramebuffer().colorAttachment.get());const h=t.transform.calculatePosMatrix(i.tileID.toUnwrapped());n.draw(o,a.TRIANGLES,s,Ei.disabled,r,Ii.backCCW,{u_matrix:h,u_texture:0},c,"terrain",l.vertexBuffer,l.indexBuffer,l.segments);}function Hi(t,e,i,o){const a=t.context,r=i.tileSize*e.qualityFactor;i.textures[o]||(i.textures[o]=t.getTileTexture(r)||new l(a,{width:r,height:r,data:null},a.gl.RGBA),i.textures[o].bind(a.gl.LINEAR,a.gl.CLAMP_TO_EDGE),0===o&&e.sourceCache.renderHistory.unshift(i.tileID.key));const s=e.getRTTFramebuffer();s.colorAttachment.set(i.textures[o].texture),a.bindFramebuffer.set(s.framebuffer),a.viewport.set([0,0,r,r]);}class Ki{constructor(t){this._coordsDescendingInv={},this._coordsDescendingInvStr={},this.painter=t,this._renderToTexture={background:!0,fill:!0,line:!0,raster:!0},this._coordsDescendingInv={},this._coordsDescendingInvStr={},this._stacks=[],this._prevType=null,this._rerender={},this._renderableTiles=t.style.terrain.sourceCache.getRenderableTiles(),this._init();}_init(){const t=this.painter.style,e=t.terrain;for(const i in t.sourceCaches){this._coordsDescendingInv[i]={};const o=t.sourceCaches[i].getVisibleCoordinates();for(const t of o){const o=e.sourceCache.getTerrainCoords(t);for(const t in o)this._coordsDescendingInv[i][t]||(this._coordsDescendingInv[i][t]=[]),this._coordsDescendingInv[i][t].push(o[t]);}}for(const e of t._order){const i=t._layers[e],o=i.source;if(this._renderToTexture[i.type]&&!this._coordsDescendingInvStr[o]){this._coordsDescendingInvStr[o]={};for(const t in this._coordsDescendingInv[o])this._coordsDescendingInvStr[o][t]=this._coordsDescendingInv[o][t].map((t=>t.key)).sort().join();}}return this._renderableTiles.forEach((t=>{for(const i in this._coordsDescendingInvStr){const o=this._coordsDescendingInvStr[i][t.tileID.key];o&&o!==t.textureCoords[i]&&t.clearTextures(this.painter),e.needsRerender(i,t.tileID)&&t.clearTextures(this.painter);}this._rerender[t.tileID.key]=!t.textures.length;})),e.clearRerenderCache(),e.sourceCache.removeOutdated(this.painter),this}renderLayer(e){const i=e.type,o=this.painter,a=o.style._order,r=o.currentLayer,s=r+1===a.length;if(this._renderToTexture[i]&&(this._prevType&&this._renderToTexture[this._prevType]||this._stacks.push([]),this._prevType=i,this._stacks[this._stacks.length-1].push(a[r]),!s))return !0;if(this._renderToTexture[this._prevType]||"hillshade"===i||this._renderToTexture[i]&&s){this._prevType=i;const s=this._stacks.length-1,n=this._stacks[s]||[];for(const e of this._renderableTiles){if(Hi(o,o.style.terrain,e,s),this._rerender[e.tileID.key]){o.context.clear({color:t.Color.transparent});for(let t=0;t<n.length;t++){const i=o.style._layers[n[t]],a=i.source?this._coordsDescendingInv[i.source][e.tileID.key]:[e.tileID];o._renderTileClippingMasks(i,a),o.renderLayer(o,o.style.sourceCaches[i.source],i,a),i.source&&(e.textureCoords[i.source]=this._coordsDescendingInvStr[i.source][e.tileID.key]);}}Wi(o,o.style.terrain,e);}if("hillshade"===i){this._stacks.push([a[r]]);for(const i of this._renderableTiles){const a=this._coordsDescendingInv[e.source][i.tileID.key];Hi(o,o.style.terrain,i,this._stacks.length-1),o.context.clear({color:t.Color.transparent}),o._renderTileClippingMasks(e,a),o.renderLayer(o,o.style.sourceCaches[e.source],e,a),Wi(o,o.style.terrain,i);}return !0}return this._renderToTexture[i]}return !1}}const Yi={symbol:function(e,i,o,a,r){if("translucent"!==e.renderPass)return;const s=Ei.disabled,n=e.colorModeForRenderPass();o.layout.get("text-variable-anchor")&&function(e,i,o,a,r,s,n){const l=i.transform,c="map"===r,h="map"===s;for(const r of e){const e=a.getTile(r),s=e.getBucket(o);if(!s||!s.text||!s.text.segments.get().length)continue;const u=t.evaluateSizeForZoom(s.textSizeData,l.zoom),d=bt(e,1,i.transform.zoom),m=rt(r.posMatrix,h,c,i.transform,d),_="none"!==o.layout.get("icon-text-fit")&&s.hasIconData();if(u){const t=Math.pow(2,l.zoom-e.tileID.overscaledZ);Pi(s,c,h,n,l,m,r.posMatrix,t,u,_,i.style.terrain?(t,e)=>i.style.terrain.getElevation(r,t,e):null);}}}(a,e,o,i,o.layout.get("text-rotation-alignment"),o.layout.get("text-pitch-alignment"),r),0!==o.paint.get("icon-opacity").constantOr(1)&&Ai(e,i,o,a,!1,o.paint.get("icon-translate"),o.paint.get("icon-translate-anchor"),o.layout.get("icon-rotation-alignment"),o.layout.get("icon-pitch-alignment"),o.layout.get("icon-keep-upright"),s,n),0!==o.paint.get("text-opacity").constantOr(1)&&Ai(e,i,o,a,!0,o.paint.get("text-translate"),o.paint.get("text-translate-anchor"),o.layout.get("text-rotation-alignment"),o.layout.get("text-pitch-alignment"),o.layout.get("text-keep-upright"),s,n),i.map.showCollisionBoxes&&(Si(e,i,o,a,o.paint.get("text-translate"),o.paint.get("text-translate-anchor"),!0),Si(e,i,o,a,o.paint.get("icon-translate"),o.paint.get("icon-translate-anchor"),!1));},circle:function(e,i,o,a){if("translucent"!==e.renderPass)return;const r=o.paint.get("circle-opacity"),s=o.paint.get("circle-stroke-width"),n=o.paint.get("circle-stroke-opacity"),l=!o.layout.get("circle-sort-key").isConstant();if(0===r.constantOr(1)&&(0===s.constantOr(1)||0===n.constantOr(1)))return;const c=e.context,h=c.gl,u=e.depthModeForSublayer(0,wi.ReadOnly),d=Ei.disabled,m=e.colorModeForRenderPass(),_=[];for(let r=0;r<a.length;r++){const s=a[r],n=i.getTile(s),c=n.getBucket(o);if(!c)continue;const h=c.programConfigurations.get(o.id),u=e.useProgram("circle",h),d=c.layoutVertexBuffer,m=c.indexBuffer,p=e.style.terrain&&e.style.terrain.getTerrainData(s),f={programConfiguration:h,program:u,layoutVertexBuffer:d,indexBuffer:m,uniformValues:pe(e,s,n,o),terrainData:p};if(l){const e=c.segments.get();for(const i of e)_.push({segments:new t.SegmentVector([i]),sortKey:i.sortKey,state:f});}else _.push({segments:c.segments,sortKey:0,state:f});}l&&_.sort(((t,e)=>t.sortKey-e.sortKey));for(const t of _){const{programConfiguration:i,program:a,layoutVertexBuffer:r,indexBuffer:s,uniformValues:n,terrainData:l}=t.state;a.draw(c,h.TRIANGLES,u,d,m,Ii.disabled,n,l,o.id,r,s,t.segments,o.paint,e.transform.zoom,i);}},heatmap:function(e,i,o,a){if(0!==o.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){const r=e.context,s=r.gl,n=Ei.disabled,l=new yi([s.ONE,s.ONE],t.Color.transparent,[!0,!0,!0,!0]);!function(t,e,i){const o=t.gl;t.activeTexture.set(o.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4]);let a=i.heatmapFbo;if(a)o.bindTexture(o.TEXTURE_2D,a.colorAttachment.get()),t.bindFramebuffer.set(a.framebuffer);else {const r=o.createTexture();o.bindTexture(o.TEXTURE_2D,r),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),a=i.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4,!1),function(t,e,i,o){const a=t.gl;a.texImage2D(a.TEXTURE_2D,0,a.RGBA,e.width/4,e.height/4,0,a.RGBA,t.extRenderToTextureHalfFloat?t.extTextureHalfFloat.HALF_FLOAT_OES:a.UNSIGNED_BYTE,null),o.colorAttachment.set(i);}(t,e,r,a);}}(r,e,o),r.clear({color:t.Color.transparent});for(let t=0;t<a.length;t++){const c=a[t];if(i.hasRenderableParent(c))continue;const h=i.getTile(c),u=h.getBucket(o);if(!u)continue;const d=u.programConfigurations.get(o.id),m=e.useProgram("heatmap",d),{zoom:_}=e.transform;m.draw(r,s.TRIANGLES,wi.disabled,n,l,Ii.disabled,ve(c.posMatrix,h,_,o.paint.get("heatmap-intensity")),null,o.id,u.layoutVertexBuffer,u.indexBuffer,u.segments,o.paint,e.transform.zoom,d);}r.viewport.set([0,0,e.width,e.height]);}else "translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,i){const o=e.context,a=o.gl,r=i.heatmapFbo;if(!r)return;o.activeTexture.set(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,r.colorAttachment.get()),o.activeTexture.set(a.TEXTURE1);let s=i.colorRampTexture;s||(s=i.colorRampTexture=new l(o,i.colorRamp,a.RGBA)),s.bind(a.LINEAR,a.CLAMP_TO_EDGE),e.useProgram("heatmapTexture").draw(o,a.TRIANGLES,wi.disabled,Ei.disabled,e.colorModeForRenderPass(),Ii.disabled,((e,i,o,a)=>{const r=t.create();t.ortho(r,0,e.width,e.height,0,0,1);const s=e.context.gl;return {u_matrix:r,u_world:[s.drawingBufferWidth,s.drawingBufferHeight],u_image:0,u_color_ramp:1,u_opacity:i.paint.get("heatmap-opacity")}})(e,i),null,i.id,e.viewportBuffer,e.quadTriangleIndexBuffer,e.viewportSegments,i.paint,e.transform.zoom);}(e,o));},line:function(e,i,o,a){if("translucent"!==e.renderPass)return;const r=o.paint.get("line-opacity"),s=o.paint.get("line-width");if(0===r.constantOr(1)||0===s.constantOr(1))return;const n=e.depthModeForSublayer(0,wi.ReadOnly),c=e.colorModeForRenderPass(),h=o.paint.get("line-dasharray"),u=o.paint.get("line-pattern"),d=u.constantOr(1),m=o.paint.get("line-gradient"),_=o.getCrossfadeParameters(),p=d?"linePattern":h?"lineSDF":m?"lineGradient":"line",f=e.context,g=f.gl;let x=!0;for(const r of a){const a=i.getTile(r);if(d&&!a.patternsLoaded())continue;const s=a.getBucket(o);if(!s)continue;const v=s.programConfigurations.get(o.id),y=e.context.program.get(),b=e.useProgram(p,v),w=x||b.program!==y,T=e.style.terrain&&e.style.terrain.getTerrainData(r),E=u.constantOr(null);if(E&&a.imageAtlas){const t=a.imageAtlas,e=t.patternPositions[E.to.toString()],i=t.patternPositions[E.from.toString()];e&&i&&v.setConstantPatternPositions(e,i);}const I=T?r:null,C=d?Te(e,a,o,_,I):h?Ee(e,a,o,h,_,I):m?we(e,a,o,s.lineClipsArray.length,I):be(e,a,o,I);if(d)f.activeTexture.set(g.TEXTURE0),a.imageAtlasTexture.bind(g.LINEAR,g.CLAMP_TO_EDGE),v.updatePaintBuffers(_);else if(h&&(w||e.lineAtlas.dirty))f.activeTexture.set(g.TEXTURE0),e.lineAtlas.bind(f);else if(m){const a=s.gradients[o.id];let n=a.texture;if(o.gradientVersion!==a.version){let c=256;if(o.stepInterpolant){const o=i.getSource().maxzoom,a=r.canonical.z===o?Math.ceil(1<<e.transform.maxZoom-r.canonical.z):1;c=t.clamp(t.nextPowerOfTwo(s.maxLineLength/t.EXTENT*1024*a),256,f.maxTextureSize);}a.gradient=t.renderColorRamp({expression:o.gradientExpression(),evaluationKey:"lineProgress",resolution:c,image:a.gradient||void 0,clips:s.lineClipsArray}),a.texture?a.texture.update(a.gradient):a.texture=new l(f,a.gradient,g.RGBA),a.version=o.gradientVersion,n=a.texture;}f.activeTexture.set(g.TEXTURE0),n.bind(o.stepInterpolant?g.NEAREST:g.LINEAR,g.CLAMP_TO_EDGE);}b.draw(f,g.TRIANGLES,n,e.stencilModeForClipping(r),c,Ii.disabled,C,T,o.id,s.layoutVertexBuffer,s.indexBuffer,s.segments,o.paint,e.transform.zoom,v,s.layoutVertexBuffer2),x=!1;}},fill:function(e,i,o,a){const r=o.paint.get("fill-color"),s=o.paint.get("fill-opacity");if(0===s.constantOr(1))return;const n=e.colorModeForRenderPass(),l=o.paint.get("fill-pattern"),c=e.opaquePassEnabledForLayer()&&!l.constantOr(1)&&1===r.constantOr(t.Color.transparent).a&&1===s.constantOr(0)?"opaque":"translucent";if(e.renderPass===c){const t=e.depthModeForSublayer(1,"opaque"===e.renderPass?wi.ReadWrite:wi.ReadOnly);Ri(e,i,o,a,t,n,!1);}if("translucent"===e.renderPass&&o.paint.get("fill-antialias")){const t=e.depthModeForSublayer(o.getPaintProperty("fill-outline-color")?2:0,wi.ReadOnly);Ri(e,i,o,a,t,n,!0);}},"fill-extrusion":function(t,e,i,o){const a=i.paint.get("fill-extrusion-opacity");if(0!==a&&"translucent"===t.renderPass){const r=new wi(t.context.gl.LEQUAL,wi.ReadWrite,t.depthRangeFor3D);if(1!==a||i.paint.get("fill-extrusion-pattern").constantOr(1))ki(t,e,i,o,r,Ei.disabled,yi.disabled),ki(t,e,i,o,r,t.stencilModeFor3D(),t.colorModeForRenderPass());else {const a=t.colorModeForRenderPass();ki(t,e,i,o,r,Ei.disabled,a);}}},hillshade:function(t,e,i,o){if("offscreen"!==t.renderPass&&"translucent"!==t.renderPass)return;const a=t.context,r=t.depthModeForSublayer(0,wi.ReadOnly),s=t.colorModeForRenderPass(),[n,l]="translucent"===t.renderPass?t.stencilConfigForOverlap(o):[{},o];for(const o of l){const a=e.getTile(o);void 0!==a.needsHillshadePrepare&&a.needsHillshadePrepare&&"offscreen"===t.renderPass?Fi(t,a,i,r,Ei.disabled,s):"translucent"===t.renderPass&&Bi(t,o,a,i,r,n[o.overscaledZ],s);}a.viewport.set([0,0,t.width,t.height]);},raster:function(t,e,i,o){if("translucent"!==t.renderPass)return;if(0===i.paint.get("raster-opacity"))return;if(!o.length)return;const a=t.context,r=a.gl,s=e.getSource(),n=t.useProgram("raster"),l=t.colorModeForRenderPass(),[c,h]=s instanceof D?[{},o]:t.stencilConfigForOverlap(o),u=h[h.length-1].overscaledZ,d=!t.options.moving;for(const o of h){const h=t.depthModeForSublayer(o.overscaledZ-u,1===i.paint.get("raster-opacity")?wi.ReadWrite:wi.ReadOnly,r.LESS),m=e.getTile(o);m.registerFadeDuration(i.paint.get("raster-fade-duration"));const _=e.findLoadedParent(o,0),p=Oi(m,_,e,i,t.transform,t.style.terrain);let f,g;const x="nearest"===i.paint.get("raster-resampling")?r.NEAREST:r.LINEAR;a.activeTexture.set(r.TEXTURE0),m.texture.bind(x,r.CLAMP_TO_EDGE,r.LINEAR_MIPMAP_NEAREST),a.activeTexture.set(r.TEXTURE1),_?(_.texture.bind(x,r.CLAMP_TO_EDGE,r.LINEAR_MIPMAP_NEAREST),f=Math.pow(2,_.tileID.overscaledZ-m.tileID.overscaledZ),g=[m.tileID.canonical.x*f%1,m.tileID.canonical.y*f%1]):m.texture.bind(x,r.CLAMP_TO_EDGE,r.LINEAR_MIPMAP_NEAREST);const v=t.style.terrain&&t.style.terrain.getTerrainData(o),y=v?o:null,b=y?y.posMatrix:t.transform.calculatePosMatrix(o.toUnwrapped(),d),w=Se(b,g||[0,0],f||1,p,i);s instanceof D?n.draw(a,r.TRIANGLES,h,Ei.disabled,l,Ii.disabled,w,v,i.id,s.boundsBuffer,t.quadTriangleIndexBuffer,s.boundsSegments):n.draw(a,r.TRIANGLES,h,c[o.overscaledZ],l,Ii.disabled,w,v,i.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments);}},background:function(t,e,i,o){const a=i.paint.get("background-color"),r=i.paint.get("background-opacity");if(0===r)return;const s=t.context,n=s.gl,l=t.transform,c=l.tileSize,h=i.paint.get("background-pattern");if(t.isPatternMissing(h))return;const u=!h&&1===a.a&&1===r&&t.opaquePassEnabledForLayer()?"opaque":"translucent";if(t.renderPass!==u)return;const d=Ei.disabled,m=t.depthModeForSublayer(0,"opaque"===u?wi.ReadWrite:wi.ReadOnly),_=t.colorModeForRenderPass(),p=t.useProgram(h?"backgroundPattern":"background"),f=o||l.coveringTiles({tileSize:c,terrain:t.style.terrain});h&&(s.activeTexture.set(n.TEXTURE0),t.imageManager.bind(t.context));const g=i.getCrossfadeParameters();for(const e of f){const l=o?e.posMatrix:t.transform.calculatePosMatrix(e.toUnwrapped()),u=h?Le(l,r,t,h,{tileID:e,tileSize:c},g):Ae(l,r,a),f=t.style.terrain&&t.style.terrain.getTerrainData(e);p.draw(s,n.TRIANGLES,m,d,_,Ii.disabled,u,f,i.id,t.tileExtentBuffer,t.quadTriangleIndexBuffer,t.tileExtentSegments);}},debug:function(t,e,i){for(let o=0;o<i.length;o++)Xi(t,e,i[o]);},custom:function(t,e,i){const o=t.context,a=i.implementation;if("offscreen"===t.renderPass){const e=a.prerender;e&&(t.setCustomLayerDefaults(),o.setColorMode(t.colorModeForRenderPass()),e.call(a,o.gl,t.transform.customLayerMatrix()),o.setDirty(),t.setBaseState());}else if("translucent"===t.renderPass){t.setCustomLayerDefaults(),o.setColorMode(t.colorModeForRenderPass()),o.setStencilMode(Ei.disabled);const e="3d"===a.renderingMode?new wi(t.context.gl.LEQUAL,wi.ReadWrite,t.depthRangeFor3D):t.depthModeForSublayer(0,wi.ReadOnly);o.setDepthMode(e),a.render(o.gl,t.transform.customLayerMatrix()),o.setDirty(),t.setBaseState(),o.bindFramebuffer.set(null);}}};class Ji{constructor(e,i){this.context=new bi(e),this.transform=i,this._tileTextures={},this.terrainFacilitator={dirty:!0,matrix:t.create(),renderTime:0},this.setup(),this.numSublayers=O.maxUnderzooming+O.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.crossTileSymbolIndex=new Xt,this.gpuTimers={};}resize(t,e,i){if(this.width=t*i,this.height=e*i,this.pixelRatio=i,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(const t of this.style._order)this.style._layers[t].resize();}setup(){const e=this.context,i=new t.PosArray;i.emplaceBack(0,0),i.emplaceBack(t.EXTENT,0),i.emplaceBack(0,t.EXTENT),i.emplaceBack(t.EXTENT,t.EXTENT),this.tileExtentBuffer=e.createVertexBuffer(i,Wt.members),this.tileExtentSegments=t.SegmentVector.simpleSegment(0,0,4,2);const o=new t.PosArray;o.emplaceBack(0,0),o.emplaceBack(t.EXTENT,0),o.emplaceBack(0,t.EXTENT),o.emplaceBack(t.EXTENT,t.EXTENT),this.debugBuffer=e.createVertexBuffer(o,Wt.members),this.debugSegments=t.SegmentVector.simpleSegment(0,0,4,5);const a=new t.RasterBoundsArray;a.emplaceBack(0,0,0,0),a.emplaceBack(t.EXTENT,0,t.EXTENT,0),a.emplaceBack(0,t.EXTENT,0,t.EXTENT),a.emplaceBack(t.EXTENT,t.EXTENT,t.EXTENT,t.EXTENT),this.rasterBoundsBuffer=e.createVertexBuffer(a,S.members),this.rasterBoundsSegments=t.SegmentVector.simpleSegment(0,0,4,2);const r=new t.PosArray;r.emplaceBack(0,0),r.emplaceBack(1,0),r.emplaceBack(0,1),r.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(r,Wt.members),this.viewportSegments=t.SegmentVector.simpleSegment(0,0,4,2);const s=new t.LineStripIndexArray;s.emplaceBack(0),s.emplaceBack(1),s.emplaceBack(3),s.emplaceBack(2),s.emplaceBack(0),this.tileBorderIndexBuffer=e.createIndexBuffer(s);const n=new t.TriangleIndexArray;n.emplaceBack(0,1,2),n.emplaceBack(2,1,3),this.quadTriangleIndexBuffer=e.createIndexBuffer(n),this.emptyTexture=new l(e,{width:1,height:1,data:new Uint8Array([0,0,0,0])},e.gl.RGBA);const c=this.context.gl;this.stencilClearMode=new Ei({func:c.ALWAYS,mask:0},0,255,c.ZERO,c.ZERO,c.ZERO);}clearStencil(){const e=this.context,i=e.gl;this.nextStencilID=1,this.currentStencilSource=void 0;const o=t.create();t.ortho(o,0,this.width,this.height,0,0,1),t.scale(o,o,[i.drawingBufferWidth,i.drawingBufferHeight,0]),this.useProgram("clippingMask").draw(e,i.TRIANGLES,wi.disabled,this.stencilClearMode,yi.disabled,Ii.disabled,xe(o),null,"$clipping",this.viewportBuffer,this.quadTriangleIndexBuffer,this.viewportSegments);}_renderTileClippingMasks(t,e){if(this.currentStencilSource===t.source||!t.isTileClipped()||!e||!e.length)return;this.currentStencilSource=t.source;const i=this.context,o=i.gl;this.nextStencilID+e.length>256&&this.clearStencil(),i.setColorMode(yi.disabled),i.setDepthMode(wi.disabled);const a=this.useProgram("clippingMask");this._tileClippingMaskIDs={};for(const t of e){const e=this._tileClippingMaskIDs[t.key]=this.nextStencilID++,r=this.style.terrain&&this.style.terrain.getTerrainData(t);a.draw(i,o.TRIANGLES,wi.disabled,new Ei({func:o.ALWAYS,mask:0},e,255,o.KEEP,o.KEEP,o.REPLACE),yi.disabled,Ii.disabled,xe(t.posMatrix),r,"$clipping",this.tileExtentBuffer,this.quadTriangleIndexBuffer,this.tileExtentSegments);}}stencilModeFor3D(){this.currentStencilSource=void 0,this.nextStencilID+1>256&&this.clearStencil();const t=this.nextStencilID++,e=this.context.gl;return new Ei({func:e.NOTEQUAL,mask:255},t,255,e.KEEP,e.KEEP,e.REPLACE)}stencilModeForClipping(t){const e=this.context.gl;return new Ei({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)}stencilConfigForOverlap(t){const e=this.context.gl,i=t.sort(((t,e)=>e.overscaledZ-t.overscaledZ)),o=i[i.length-1].overscaledZ,a=i[0].overscaledZ-o+1;if(a>1){this.currentStencilSource=void 0,this.nextStencilID+a>256&&this.clearStencil();const t={};for(let i=0;i<a;i++)t[i+o]=new Ei({func:e.GEQUAL,mask:255},i+this.nextStencilID,255,e.KEEP,e.KEEP,e.REPLACE);return this.nextStencilID+=a,[t,i]}return [{[o]:Ei.disabled},i]}colorModeForRenderPass(){const e=this.context.gl;if(this._showOverdrawInspector){const i=1/8;return new yi([e.CONSTANT_COLOR,e.ONE],new t.Color(i,i,i,0),[!0,!0,!0,!0])}return "opaque"===this.renderPass?yi.unblended:yi.alphaBlended}depthModeForSublayer(t,e,i){if(!this.opaquePassEnabledForLayer())return wi.disabled;const o=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon;return new wi(i||this.context.gl.LEQUAL,e,[o,o])}opaquePassEnabledForLayer(){return this.currentLayer<this.opaquePassCutoff}render(e,i){this.style=e,this.options=i,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(t.exported.now()),this.imageManager.beginFrame();const o=this.style._order,a=this.style.sourceCaches,r=this.style.terrain&&new Ki(this);for(const t in a){const e=a[t];e.used&&e.prepare(this.context);}const s={},n={},l={};for(const t in a){const e=a[t];s[t]=e.getVisibleCoordinates(),n[t]=s[t].slice().reverse(),l[t]=e.getVisibleCoordinates(!0).reverse();}this.opaquePassCutoff=1/0;for(let t=0;t<o.length;t++)if(this.style._layers[o[t]].is3D()){this.opaquePassCutoff=t;break}if(r){this.opaquePassCutoff=0;const e=this.style.terrain.sourceCache.tilesAfterTime(this.terrainFacilitator.renderTime);(this.terrainFacilitator.dirty||!t.equals(this.terrainFacilitator.matrix,this.transform.projMatrix)||e.length)&&(t.copy(this.terrainFacilitator.matrix,this.transform.projMatrix),this.terrainFacilitator.renderTime=Date.now(),this.terrainFacilitator.dirty=!1,function(e,i){const o=e.context,a=o.gl,r=yi.unblended,s=new wi(a.LEQUAL,wi.ReadWrite,[0,1]),n=i.getTerrainMesh(),l=i.sourceCache.getRenderableTiles(),c=e.useProgram("terrainDepth");o.bindFramebuffer.set(i.getFramebuffer("depth").framebuffer),o.viewport.set([0,0,e.width/devicePixelRatio,e.height/devicePixelRatio]),o.clear({color:t.Color.transparent,depth:1});for(const t of l){const l=i.getTerrainData(t.tileID),h=e.transform.calculatePosMatrix(t.tileID.toUnwrapped());c.draw(o,a.TRIANGLES,s,Ei.disabled,r,Ii.backCCW,{u_matrix:h},l,"terrain",n.vertexBuffer,n.indexBuffer,n.segments);}o.bindFramebuffer.set(null),o.viewport.set([0,0,e.width,e.height]);}(this,this.style.terrain),function(e,i){const o=e.context,a=o.gl,r=yi.unblended,s=new wi(a.LEQUAL,wi.ReadWrite,[0,1]),n=i.getTerrainMesh(),l=i.getCoordsTexture(),c=i.sourceCache.getRenderableTiles(),h=e.useProgram("terrainCoords");o.bindFramebuffer.set(i.getFramebuffer("coords").framebuffer),o.viewport.set([0,0,e.width/devicePixelRatio,e.height/devicePixelRatio]),o.clear({color:t.Color.transparent,depth:1}),i.coordsIndex=[];for(const t of c){const c=i.getTerrainData(t.tileID);o.activeTexture.set(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,l.texture);const u=e.transform.calculatePosMatrix(t.tileID.toUnwrapped());h.draw(o,a.TRIANGLES,s,Ei.disabled,r,Ii.backCCW,{u_matrix:u,u_terrain_coords_id:(255-i.coordsIndex.length)/255,u_texture:0},c,"terrain",n.vertexBuffer,n.indexBuffer,n.segments),i.coordsIndex.push(t.tileID.key);}o.bindFramebuffer.set(null),o.viewport.set([0,0,e.width,e.height]);}(this,this.style.terrain));}this.renderPass="offscreen";for(const t of o){const e=this.style._layers[t];if(!e.hasOffscreenPass()||e.isHidden(this.transform.zoom))continue;const i=n[e.source];("custom"===e.type||i.length)&&this.renderLayer(this,a[e.source],e,i);}if(this.context.bindFramebuffer.set(null),this.context.clear({color:i.showOverdrawInspector?t.Color.black:t.Color.transparent,depth:1}),this.clearStencil(),this._showOverdrawInspector=i.showOverdrawInspector,this.depthRangeFor3D=[0,1-(e._order.length+2)*this.numSublayers*this.depthEpsilon],!r)for(this.renderPass="opaque",this.currentLayer=o.length-1;this.currentLayer>=0;this.currentLayer--){const t=this.style._layers[o[this.currentLayer]],e=a[t.source],i=s[t.source];this._renderTileClippingMasks(t,i),this.renderLayer(this,e,t,i);}for(this.renderPass="translucent",this.currentLayer=0;this.currentLayer<o.length;this.currentLayer++){const t=this.style._layers[o[this.currentLayer]],e=a[t.source];if(r&&r.renderLayer(t))continue;const i=("symbol"===t.type?l:n)[t.source];this._renderTileClippingMasks(t,s[t.source]),this.renderLayer(this,e,t,i);}if(this.options.showTileBoundaries){let t,e;Object.values(this.style._layers).forEach((i=>{i.source&&!i.isHidden(this.transform.zoom)&&(i.source!==(e&&e.id)&&(e=this.style.sourceCaches[i.source]),(!t||t.getSource().maxzoom<e.getSource().maxzoom)&&(t=e));})),t&&Yi.debug(this,t,t.getVisibleCoordinates());}this.options.showPadding&&function(t){const e=t.transform.padding;qi(t,t.transform.height-(e.top||0),3,Ui),qi(t,e.bottom||0,3,Ni),ji(t,e.left||0,3,Gi),ji(t,t.transform.width-(e.right||0),3,Zi);const i=t.transform.centerPoint;!function(t,e,i,o){$i(t,e-1,i-10,2,20,o),$i(t,e-10,i-1,20,2,o);}(t,i.x,t.transform.height-i.y,Vi);}(this),this.context.setDefault();}renderLayer(t,e,i,o){i.isHidden(this.transform.zoom)||("background"===i.type||"custom"===i.type||(o||[]).length)&&(this.id=i.id,this.gpuTimingStart(i),Yi[i.type](t,e,i,o,this.style.placement.variableOffsets),this.gpuTimingEnd());}gpuTimingStart(t){if(!this.options.gpuTiming)return;const e=this.context.extTimerQuery;let i=this.gpuTimers[t.id];i||(i=this.gpuTimers[t.id]={calls:0,cpuTime:0,query:e.createQueryEXT()}),i.calls++,e.beginQueryEXT(e.TIME_ELAPSED_EXT,i.query);}gpuTimingEnd(){if(!this.options.gpuTiming)return;const t=this.context.extTimerQuery;t.endQueryEXT(t.TIME_ELAPSED_EXT);}collectGpuTimers(){const t=this.gpuTimers;return this.gpuTimers={},t}queryGpuTimers(t){const e={};for(const i in t){const o=t[i],a=this.context.extTimerQuery,r=a.getQueryObjectEXT(o.query,a.QUERY_RESULT_EXT)/1e6;a.deleteQueryEXT(o.query),e[i]=r;}return e}translatePosMatrix(e,i,o,a,r){if(!o[0]&&!o[1])return e;const s=r?"map"===a?this.transform.angle:0:"viewport"===a?-this.transform.angle:0;if(s){const t=Math.sin(s),e=Math.cos(s);o=[o[0]*e-o[1]*t,o[0]*t+o[1]*e];}const n=[r?o[0]:bt(i,o[0],this.transform.zoom),r?o[1]:bt(i,o[1],this.transform.zoom),0],l=new Float32Array(16);return t.translate(l,e,n),l}saveTileTexture(t){const e=this._tileTextures[t.size[0]];e?e.push(t):this._tileTextures[t.size[0]]=[t];}getTileTexture(t){const e=this._tileTextures[t];return e&&e.length>0?e.pop():null}isPatternMissing(t){if(!t)return !1;if(!t.from||!t.to)return !0;const e=this.imageManager.getPattern(t.from.toString()),i=this.imageManager.getPattern(t.to.toString());return !e||!i}useProgram(t,e){this.cache=this.cache||{};const i=t+(e?e.cacheKey:"")+(this._showOverdrawInspector?"/overdraw":"")+(this.style.terrain?"/terrain":"");return this.cache[i]||(this.cache[i]=new ne(this.context,t,oe[t],e,Re[t],this._showOverdrawInspector,this.style.terrain)),this.cache[i]}setCustomLayerDefaults(){this.context.unbindVAO(),this.context.cullFace.setDefault(),this.context.activeTexture.setDefault(),this.context.pixelStoreUnpack.setDefault(),this.context.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.context.pixelStoreUnpackFlipY.setDefault();}setBaseState(){const t=this.context.gl;this.context.cullFace.set(!1),this.context.viewport.set([0,0,this.width,this.height]),this.context.blendEquation.set(t.FUNC_ADD);}initDebugOverlayCanvas(){null==this.debugOverlayCanvas&&(this.debugOverlayCanvas=document.createElement("canvas"),this.debugOverlayCanvas.width=512,this.debugOverlayCanvas.height=512,this.debugOverlayTexture=new l(this.context,this.debugOverlayCanvas,this.context.gl.RGBA));}destroy(){this.emptyTexture.destroy(),this.debugOverlayTexture&&this.debugOverlayTexture.destroy();}}class Qi{constructor(t,e){this.points=t,this.planes=e;}static fromInvProjectionMatrix(e,i,o){const a=Math.pow(2,o),r=[[-1,1,-1,1],[1,1,-1,1],[1,-1,-1,1],[-1,-1,-1,1],[-1,1,1,1],[1,1,1,1],[1,-1,1,1],[-1,-1,1,1]].map((o=>{const r=1/(o=t.transformMat4([],o,e))[3]/i*a;return t.mul$1(o,o,[r,r,1/o[3],r])})),s=[[0,1,2],[6,5,4],[0,3,7],[2,1,5],[3,2,6],[0,4,5]].map((e=>{const i=t.sub([],r[e[0]],r[e[1]]),o=t.sub([],r[e[2]],r[e[1]]),a=t.normalize([],t.cross([],i,o)),s=-t.dot(a,r[e[1]]);return a.concat(s)}));return new Qi(r,s)}}class to{constructor(e,i){this.min=e,this.max=i,this.center=t.scale$1([],t.add([],this.min,this.max),.5);}quadrant(e){const i=[e%2==0,e<2],o=t.clone$2(this.min),a=t.clone$2(this.max);for(let t=0;t<i.length;t++)o[t]=i[t]?this.min[t]:this.center[t],a[t]=i[t]?this.center[t]:this.max[t];return a[2]=this.max[2],new to(o,a)}distanceX(t){return Math.max(Math.min(this.max[0],t[0]),this.min[0])-t[0]}distanceY(t){return Math.max(Math.min(this.max[1],t[1]),this.min[1])-t[1]}intersects(e){const i=[[this.min[0],this.min[1],this.min[2],1],[this.max[0],this.min[1],this.min[2],1],[this.max[0],this.max[1],this.min[2],1],[this.min[0],this.max[1],this.min[2],1],[this.min[0],this.min[1],this.max[2],1],[this.max[0],this.min[1],this.max[2],1],[this.max[0],this.max[1],this.max[2],1],[this.min[0],this.max[1],this.max[2],1]];let o=!0;for(let a=0;a<e.planes.length;a++){const r=e.planes[a];let s=0;for(let e=0;e<i.length;e++)t.dot$1(r,i[e])>=0&&s++;if(0===s)return 0;s!==i.length&&(o=!1);}if(o)return 2;for(let t=0;t<3;t++){let i=Number.MAX_VALUE,o=-Number.MAX_VALUE;for(let a=0;a<e.points.length;a++){const r=e.points[a][t]-this.min[t];i=Math.min(i,r),o=Math.max(o,r);}if(o<0||i>this.max[t]-this.min[t])return 0}return 1}}class eo{constructor(t=0,e=0,i=0,o=0){if(isNaN(t)||t<0||isNaN(e)||e<0||isNaN(i)||i<0||isNaN(o)||o<0)throw new Error("Invalid value for edge-insets, top, bottom, left and right must all be numbers");this.top=t,this.bottom=e,this.left=i,this.right=o;}interpolate(e,i,o){return null!=i.top&&null!=e.top&&(this.top=t.number(e.top,i.top,o)),null!=i.bottom&&null!=e.bottom&&(this.bottom=t.number(e.bottom,i.bottom,o)),null!=i.left&&null!=e.left&&(this.left=t.number(e.left,i.left,o)),null!=i.right&&null!=e.right&&(this.right=t.number(e.right,i.right,o)),this}getCenter(e,i){const o=t.clamp((this.left+e-this.right)/2,0,e),a=t.clamp((this.top+i-this.bottom)/2,0,i);return new t.pointGeometry(o,a)}equals(t){return this.top===t.top&&this.bottom===t.bottom&&this.left===t.left&&this.right===t.right}clone(){return new eo(this.top,this.bottom,this.left,this.right)}toJSON(){return {top:this.top,bottom:this.bottom,left:this.left,right:this.right}}}class io{constructor(e,i,o,a,r){this.tileSize=512,this.maxValidLatitude=85.051129,this.freezeElevation=!1,this._renderWorldCopies=void 0===r||!!r,this._minZoom=e||0,this._maxZoom=i||22,this._minPitch=null==o?0:o,this._maxPitch=null==a?60:a,this.setMaxBounds(),this.width=0,this.height=0,this._center=new t.LngLat(0,0),this._elevation=0,this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._edgeInsets=new eo,this._posMatrixCache={},this._alignedPosMatrixCache={};}clone(){const t=new io(this._minZoom,this._maxZoom,this._minPitch,this.maxPitch,this._renderWorldCopies);return t.tileSize=this.tileSize,t.latRange=this.latRange,t.width=this.width,t.height=this.height,t._center=this._center,t._elevation=this._elevation,t.zoom=this.zoom,t.angle=this.angle,t._fov=this._fov,t._pitch=this._pitch,t._unmodified=this._unmodified,t._edgeInsets=this._edgeInsets.clone(),t._calcMatrices(),t}get minZoom(){return this._minZoom}set minZoom(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t));}get maxZoom(){return this._maxZoom}set maxZoom(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t));}get minPitch(){return this._minPitch}set minPitch(t){this._minPitch!==t&&(this._minPitch=t,this.pitch=Math.max(this.pitch,t));}get maxPitch(){return this._maxPitch}set maxPitch(t){this._maxPitch!==t&&(this._maxPitch=t,this.pitch=Math.min(this.pitch,t));}get renderWorldCopies(){return this._renderWorldCopies}set renderWorldCopies(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t;}get worldSize(){return this.tileSize*this.scale}get centerOffset(){return this.centerPoint._sub(this.size._div(2))}get size(){return new t.pointGeometry(this.width,this.height)}get bearing(){return -this.angle/Math.PI*180}set bearing(e){const i=-t.wrap(e,-180,180)*Math.PI/180;var o;this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=(o=new t.ARRAY_TYPE(4),t.ARRAY_TYPE!=Float32Array&&(o[1]=0,o[2]=0),o[0]=1,o[3]=1,o),function(t,e,i){var o=e[0],a=e[1],r=e[2],s=e[3],n=Math.sin(i),l=Math.cos(i);t[0]=o*l+r*n,t[1]=a*l+s*n,t[2]=o*-n+r*l,t[3]=a*-n+s*l;}(this.rotationMatrix,this.rotationMatrix,this.angle));}get pitch(){return this._pitch/Math.PI*180}set pitch(e){const i=t.clamp(e,this.minPitch,this.maxPitch)/180*Math.PI;this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices());}get fov(){return this._fov/Math.PI*180}set fov(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices());}get zoom(){return this._zoom}set zoom(t){const e=Math.min(Math.max(t,this.minZoom),this.maxZoom);this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.scale=this.zoomScale(e),this.tileZoom=Math.floor(e),this.zoomFraction=e-this.tileZoom,this._constrain(),this._calcMatrices());}get center(){return this._center}set center(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices());}get elevation(){return this._elevation}set elevation(t){t!==this._elevation&&(this._elevation=t,this._constrain(),this._calcMatrices());}get padding(){return this._edgeInsets.toJSON()}set padding(t){this._edgeInsets.equals(t)||(this._unmodified=!1,this._edgeInsets.interpolate(this._edgeInsets,t,1),this._calcMatrices());}get centerPoint(){return this._edgeInsets.getCenter(this.width,this.height)}isPaddingEqual(t){return this._edgeInsets.equals(t)}interpolatePadding(t,e,i){this._unmodified=!1,this._edgeInsets.interpolate(t,e,i),this._constrain(),this._calcMatrices();}coveringZoomLevel(t){const e=(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize));return Math.max(0,e)}getVisibleUnwrappedCoordinates(e){const i=[new t.UnwrappedTileID(0,e)];if(this._renderWorldCopies){const o=this.pointCoordinate(new t.pointGeometry(0,0)),a=this.pointCoordinate(new t.pointGeometry(this.width,0)),r=this.pointCoordinate(new t.pointGeometry(this.width,this.height)),s=this.pointCoordinate(new t.pointGeometry(0,this.height)),n=Math.floor(Math.min(o.x,a.x,r.x,s.x)),l=Math.floor(Math.max(o.x,a.x,r.x,s.x)),c=1;for(let o=n-c;o<=l+c;o++)0!==o&&i.push(new t.UnwrappedTileID(o,e));}return i}coveringTiles(e){var i,o;let a=this.coveringZoomLevel(e);const r=a;if(void 0!==e.minzoom&&a<e.minzoom)return [];void 0!==e.maxzoom&&a>e.maxzoom&&(a=e.maxzoom);const s=this.pointCoordinate(this.getCameraPoint()),n=t.MercatorCoordinate.fromLngLat(this.center),l=Math.pow(2,a),c=[l*s.x,l*s.y,0],h=[l*n.x,l*n.y,0],u=Qi.fromInvProjectionMatrix(this.invProjMatrix,this.worldSize,a);let d=e.minzoom||0;!e.terrain&&this.pitch<=60&&this._edgeInsets.top<.1&&(d=a);const m=e.terrain?2/Math.min(this.tileSize,e.tileSize)*this.tileSize:3,_=t=>({aabb:new to([t*l,0,0],[(t+1)*l,l,0]),zoom:0,x:0,y:0,wrap:t,fullyVisible:!1}),p=[],f=[],g=a,x=e.reparseOverscaled?r:a;if(this._renderWorldCopies)for(let t=1;t<=3;t++)p.push(_(-t)),p.push(_(t));for(p.push(_(0));p.length>0;){const a=p.pop(),r=a.x,s=a.y;let n=a.fullyVisible;if(!n){const t=a.aabb.intersects(u);if(0===t)continue;n=2===t;}const l=e.terrain?c:h,_=a.aabb.distanceX(l),v=a.aabb.distanceY(l),y=Math.max(Math.abs(_),Math.abs(v)),b=m+(1<<g-a.zoom)-2;if(a.zoom===g||y>b&&a.zoom>=d){const e=g-a.zoom,i=c[0]-.5-(r<<e),o=c[1]-.5-(s<<e);f.push({tileID:new t.OverscaledTileID(a.zoom===g?x:a.zoom,a.wrap,a.zoom,r,s),distanceSq:t.sqrLen([h[0]-.5-r,h[1]-.5-s]),tileDistanceToCamera:Math.sqrt(i*i+o*o)});}else for(let l=0;l<4;l++){const c=(r<<1)+l%2,h=(s<<1)+(l>>1),u=a.zoom+1;let d=a.aabb.quadrant(l);if(e.terrain){const r=new t.OverscaledTileID(u,a.wrap,u,c,h),s=e.terrain.getMinMaxElevation(r),n=null!==(i=s.minElevation)&&void 0!==i?i:this.elevation,l=null!==(o=s.maxElevation)&&void 0!==o?o:this.elevation;d=new to([d.min[0],d.min[1],n],[d.max[0],d.max[1],l]);}p.push({aabb:d,zoom:u,x:c,y:h,wrap:a.wrap,fullyVisible:n});}}return f.sort(((t,e)=>t.distanceSq-e.distanceSq)).map((t=>t.tileID))}resize(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices();}get unmodified(){return this._unmodified}zoomScale(t){return Math.pow(2,t)}scaleZoom(t){return Math.log(t)/Math.LN2}project(e){const i=t.clamp(e.lat,-this.maxValidLatitude,this.maxValidLatitude);return new t.pointGeometry(t.mercatorXfromLng(e.lng)*this.worldSize,t.mercatorYfromLat(i)*this.worldSize)}unproject(e){return new t.MercatorCoordinate(e.x/this.worldSize,e.y/this.worldSize).toLngLat()}get point(){return this.project(this.center)}updateElevation(t){this.freezeElevation||(this.elevation=t?this.getElevation(this._center,t):0);}getElevation(e,i){const o=t.MercatorCoordinate.fromLngLat(e),a=(1<<this.tileZoom)*t.EXTENT,r=o.x*a,s=o.y*a,n=Math.floor(r/t.EXTENT),l=Math.floor(s/t.EXTENT),c=new t.OverscaledTileID(this.tileZoom,0,this.tileZoom,n,l);return i.getElevation(c,r%t.EXTENT,s%t.EXTENT,t.EXTENT)}getCameraPosition(){return {lngLat:this.pointLocation(this.getCameraPoint()),altitude:Math.cos(this._pitch)*this.cameraToCenterDistance/this._pixelPerMeter+this.elevation}}recalculateZoom(e){const i=this.pointLocation(this.centerPoint,e),o=this.getElevation(i,e);if(!(this.elevation-o))return;const a=this.getCameraPosition(),r=t.MercatorCoordinate.fromLngLat(a.lngLat,a.altitude),s=t.MercatorCoordinate.fromLngLat(i,o),n=r.x-s.x,l=r.y-s.y,c=r.z-s.z,h=Math.sqrt(n*n+l*l+c*c),u=this.scaleZoom(this.cameraToCenterDistance/h/this.tileSize);this._elevation=o,this._center=i,this.zoom=u;}setLocationAtPoint(e,i){const o=this.pointCoordinate(i),a=this.pointCoordinate(this.centerPoint),r=this.locationCoordinate(e),s=new t.MercatorCoordinate(r.x-(o.x-a.x),r.y-(o.y-a.y));this.center=this.coordinateLocation(s),this._renderWorldCopies&&(this.center=this.center.wrap());}locationPoint(t,e){return e?this.coordinatePoint(this.locationCoordinate(t),this.getElevation(t,e),this.pixelMatrix3D):this.coordinatePoint(this.locationCoordinate(t))}pointLocation(t,e){return this.coordinateLocation(this.pointCoordinate(t,e))}locationCoordinate(e){return t.MercatorCoordinate.fromLngLat(e)}coordinateLocation(t){return t&&t.toLngLat()}pointCoordinate(e,i){if(i){const t=i.pointCoordinate(e);if(null!=t)return t}const o=[e.x,e.y,0,1],a=[e.x,e.y,1,1];t.transformMat4(o,o,this.pixelMatrixInverse),t.transformMat4(a,a,this.pixelMatrixInverse);const r=o[3],s=a[3],n=o[1]/r,l=a[1]/s,c=o[2]/r,h=a[2]/s,u=(0-c)/(h-c);return new t.MercatorCoordinate(t.number(o[0]/r,a[0]/s,u)/this.worldSize,t.number(n,l,u)/this.worldSize)}coordinatePoint(e,i=0,o=this.pixelMatrix){const a=[e.x*this.worldSize,e.y*this.worldSize,i,1];return t.transformMat4(a,a,o),new t.pointGeometry(a[0]/a[3],a[1]/a[3])}getBounds(){const e=Math.max(0,this.height/2-this.getHorizon());return (new t.LngLatBounds).extend(this.pointLocation(new t.pointGeometry(0,e))).extend(this.pointLocation(new t.pointGeometry(this.width,e))).extend(this.pointLocation(new t.pointGeometry(this.width,this.height))).extend(this.pointLocation(new t.pointGeometry(0,this.height)))}getMaxBounds(){return this.latRange&&2===this.latRange.length&&this.lngRange&&2===this.lngRange.length?new t.LngLatBounds([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]]):null}getHorizon(){return Math.tan(Math.PI/2-this._pitch)*this.cameraToCenterDistance*.85}setMaxBounds(t){t?(this.lngRange=[t.getWest(),t.getEast()],this.latRange=[t.getSouth(),t.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-this.maxValidLatitude,this.maxValidLatitude]);}calculatePosMatrix(e,i=!1){const o=e.key,a=i?this._alignedPosMatrixCache:this._posMatrixCache;if(a[o])return a[o];const r=e.canonical,s=this.worldSize/this.zoomScale(r.z),n=r.x+Math.pow(2,r.z)*e.wrap,l=t.identity(new Float64Array(16));return t.translate(l,l,[n*s,r.y*s,0]),t.scale(l,l,[s/t.EXTENT,s/t.EXTENT,1]),t.multiply(l,i?this.alignedProjMatrix:this.projMatrix,l),a[o]=new Float32Array(l),a[o]}customLayerMatrix(){return this.mercatorMatrix.slice()}_constrain(){if(!this.center||!this.width||!this.height||this._constraining)return;this._constraining=!0;let e,i,o,a,r=-90,s=90,n=-180,l=180;const c=this.size,h=this._unmodified;if(this.latRange){const i=this.latRange;r=t.mercatorYfromLat(i[1])*this.worldSize,s=t.mercatorYfromLat(i[0])*this.worldSize,e=s-r<c.y?c.y/(s-r):0;}if(this.lngRange){const e=this.lngRange;n=t.wrap(t.mercatorXfromLng(e[0])*this.worldSize,0,this.worldSize),l=t.wrap(t.mercatorXfromLng(e[1])*this.worldSize,0,this.worldSize),l<n&&(l+=this.worldSize),i=l-n<c.x?c.x/(l-n):0;}const u=this.point,d=Math.max(i||0,e||0);if(d)return this.center=this.unproject(new t.pointGeometry(i?(l+n)/2:u.x,e?(s+r)/2:u.y)),this.zoom+=this.scaleZoom(d),this._unmodified=h,void(this._constraining=!1);if(this.latRange){const t=u.y,e=c.y/2;t-e<r&&(a=r+e),t+e>s&&(a=s-e);}if(this.lngRange){const e=(n+l)/2,i=t.wrap(u.x,e-this.worldSize/2,e+this.worldSize/2),a=c.x/2;i-a<n&&(o=n+a),i+a>l&&(o=l-a);}void 0===o&&void 0===a||(this.center=this.unproject(new t.pointGeometry(void 0!==o?o:u.x,void 0!==a?a:u.y)).wrap()),this._unmodified=h,this._constraining=!1;}_calcMatrices(){if(!this.height)return;const e=this.centerOffset,i=this.point.x,o=this.point.y;this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height,this._pixelPerMeter=t.mercatorZfromAltitude(1,this.center.lat)*this.worldSize;let a=t.identity(new Float64Array(16));t.scale(a,a,[this.width/2,-this.height/2,1]),t.translate(a,a,[1,-1,0]),this.labelPlaneMatrix=a,a=t.identity(new Float64Array(16)),t.scale(a,a,[1,-1,1]),t.translate(a,a,[-1,-1,0]),t.scale(a,a,[2/this.width,2/this.height,1]),this.glCoordMatrix=a,this.cameraToSeaLevelDistance=this.cameraToCenterDistance+this._elevation*this._pixelPerMeter/Math.cos(this._pitch);const r=Math.PI/2+this._pitch,s=this._fov*(.5+e.y/this.height),n=Math.sin(s)*this.cameraToSeaLevelDistance/Math.sin(t.clamp(Math.PI-r-s,.01,Math.PI-.01)),l=this.getHorizon(),c=2*Math.atan(l/this.cameraToCenterDistance)*(.5+e.y/(2*l)),h=Math.sin(c)*this.cameraToSeaLevelDistance/Math.sin(t.clamp(Math.PI-r-c,.01,Math.PI-.01)),u=Math.cos(Math.PI/2-this._pitch)*n+this.cameraToSeaLevelDistance,d=Math.cos(Math.PI/2-this._pitch)*h+this.cameraToSeaLevelDistance,m=1.01*Math.min(u,d),_=this.height/50;a=new Float64Array(16),t.perspective(a,this._fov,this.width/this.height,_,m),a[8]=2*-e.x/this.width,a[9]=2*e.y/this.height,t.scale(a,a,[1,-1,1]),t.translate(a,a,[0,0,-this.cameraToCenterDistance]),t.rotateX(a,a,this._pitch),t.rotateZ(a,a,this.angle),t.translate(a,a,[-i,-o,0]),this.mercatorMatrix=t.scale([],a,[this.worldSize,this.worldSize,this.worldSize]),t.scale(a,a,[1,1,this._pixelPerMeter]),this.pixelMatrix=t.multiply(new Float64Array(16),this.labelPlaneMatrix,a),t.translate(a,a,[0,0,-this.elevation]),this.projMatrix=a,this.invProjMatrix=t.invert([],a),this.pixelMatrix3D=t.multiply(new Float64Array(16),this.labelPlaneMatrix,a);const p=this.width%2/2,f=this.height%2/2,g=Math.cos(this.angle),x=Math.sin(this.angle),v=i-Math.round(i)+g*p+x*f,y=o-Math.round(o)+g*f+x*p,b=new Float64Array(a);if(t.translate(b,b,[v>.5?v-1:v,y>.5?y-1:y,0]),this.alignedProjMatrix=b,a=t.invert(new Float64Array(16),this.pixelMatrix),!a)throw new Error("failed to invert matrix");this.pixelMatrixInverse=a,this._posMatrixCache={},this._alignedPosMatrixCache={};}maxPitchScaleFactor(){if(!this.pixelMatrixInverse)return 1;const e=this.pointCoordinate(new t.pointGeometry(0,0)),i=[e.x*this.worldSize,e.y*this.worldSize,0,1];return t.transformMat4(i,i,this.pixelMatrix)[3]/this.cameraToCenterDistance}getCameraPoint(){const e=Math.tan(this._pitch)*(this.cameraToCenterDistance||1);return this.centerPoint.add(new t.pointGeometry(0,e))}getCameraQueryGeometry(e){const i=this.getCameraPoint();if(1===e.length)return [e[0],i];{let o=i.x,a=i.y,r=i.x,s=i.y;for(const t of e)o=Math.min(o,t.x),a=Math.min(a,t.y),r=Math.max(r,t.x),s=Math.max(s,t.y);return [new t.pointGeometry(o,a),new t.pointGeometry(r,a),new t.pointGeometry(r,s),new t.pointGeometry(o,s),new t.pointGeometry(o,a)]}}}class oo{constructor(e){this._hashName=e&&encodeURIComponent(e),t.bindAll(["_getCurrentHash","_onHashChange","_updateHash"],this),this._updateHash=function(t,e){let i=!1,o=null;const a=()=>{o=null,i&&(t(),o=setTimeout(a,300),i=!1);};return ()=>(i=!0,o||a(),o)}(this._updateHashUnthrottled.bind(this));}addTo(t){return this._map=t,addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this}remove(){return removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this}getHashString(t){const e=this._map.getCenter(),i=Math.round(100*this._map.getZoom())/100,o=Math.ceil((i*Math.LN2+Math.log(512/360/.5))/Math.LN10),a=Math.pow(10,o),r=Math.round(e.lng*a)/a,s=Math.round(e.lat*a)/a,n=this._map.getBearing(),l=this._map.getPitch();let c="";if(c+=t?`/${r}/${s}/${i}`:`${i}/${s}/${r}`,(n||l)&&(c+="/"+Math.round(10*n)/10),l&&(c+=`/${Math.round(l)}`),this._hashName){const t=this._hashName;let e=!1;const i=window.location.hash.slice(1).split("&").map((i=>{const o=i.split("=")[0];return o===t?(e=!0,`${o}=${c}`):i})).filter((t=>t));return e||i.push(`${t}=${c}`),`#${i.join("&")}`}return `#${c}`}_getCurrentHash(){const t=window.location.hash.replace("#","");if(this._hashName){let e;return t.split("&").map((t=>t.split("="))).forEach((t=>{t[0]===this._hashName&&(e=t);})),(e&&e[1]||"").split("/")}return t.split("/")}_onHashChange(){const t=this._getCurrentHash();if(t.length>=3&&!t.some((t=>isNaN(t)))){const e=this._map.dragRotate.isEnabled()&&this._map.touchZoomRotate.isEnabled()?+(t[3]||0):this._map.getBearing();return this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:e,pitch:+(t[4]||0)}),!0}return !1}_updateHashUnthrottled(){const t=window.location.href.replace(/(#.+)?$/,this.getHashString());try{window.history.replaceState(window.history.state,null,t);}catch(t){}}}const ao={linearity:.3,easing:t.bezier(0,0,.3,1)},ro=t.extend({deceleration:2500,maxSpeed:1400},ao),so=t.extend({deceleration:20,maxSpeed:1400},ao),no=t.extend({deceleration:1e3,maxSpeed:360},ao),lo=t.extend({deceleration:1e3,maxSpeed:90},ao);class co{constructor(t){this._map=t,this.clear();}clear(){this._inertiaBuffer=[];}record(e){this._drainInertiaBuffer(),this._inertiaBuffer.push({time:t.exported.now(),settings:e});}_drainInertiaBuffer(){const e=this._inertiaBuffer,i=t.exported.now();for(;e.length>0&&i-e[0].time>160;)e.shift();}_onMoveEnd(e){if(this._drainInertiaBuffer(),this._inertiaBuffer.length<2)return;const i={zoom:0,bearing:0,pitch:0,pan:new t.pointGeometry(0,0),pinchAround:void 0,around:void 0};for(const{settings:t}of this._inertiaBuffer)i.zoom+=t.zoomDelta||0,i.bearing+=t.bearingDelta||0,i.pitch+=t.pitchDelta||0,t.panDelta&&i.pan._add(t.panDelta),t.around&&(i.around=t.around),t.pinchAround&&(i.pinchAround=t.pinchAround);const o=this._inertiaBuffer[this._inertiaBuffer.length-1].time-this._inertiaBuffer[0].time,a={};if(i.pan.mag()){const r=uo(i.pan.mag(),o,t.extend({},ro,e||{}));a.offset=i.pan.mult(r.amount/i.pan.mag()),a.center=this._map.transform.center,ho(a,r);}if(i.zoom){const t=uo(i.zoom,o,so);a.zoom=this._map.transform.zoom+t.amount,ho(a,t);}if(i.bearing){const e=uo(i.bearing,o,no);a.bearing=this._map.transform.bearing+t.clamp(e.amount,-179,179),ho(a,e);}if(i.pitch){const t=uo(i.pitch,o,lo);a.pitch=this._map.transform.pitch+t.amount,ho(a,t);}if(a.zoom||a.bearing){const t=void 0===i.pinchAround?i.around:i.pinchAround;a.around=t?this._map.unproject(t):this._map.getCenter();}return this.clear(),t.extend(a,{noMoveStart:!0})}}function ho(t,e){(!t.duration||t.duration<e.duration)&&(t.duration=e.duration,t.easing=e.easing);}function uo(e,i,o){const{maxSpeed:a,linearity:r,deceleration:s}=o,n=t.clamp(e*r/(i/1e3),-a,a),l=Math.abs(n)/(s*r);return {easing:o.easing,duration:1e3*l,amount:n*(l/2)}}class mo extends t.Event{constructor(e,i,o,a={}){const s=r.mousePos(i.getCanvasContainer(),o),n=i.unproject(s);super(e,t.extend({point:s,lngLat:n,originalEvent:o},a)),this._defaultPrevented=!1,this.target=i;}preventDefault(){this._defaultPrevented=!0;}get defaultPrevented(){return this._defaultPrevented}}class _o extends t.Event{constructor(e,i,o){const a="touchend"===e?o.changedTouches:o.touches,s=r.touchPos(i.getCanvasContainer(),a),n=s.map((t=>i.unproject(t))),l=s.reduce(((t,e,i,o)=>t.add(e.div(o.length))),new t.pointGeometry(0,0));super(e,{points:s,point:l,lngLats:n,lngLat:i.unproject(l),originalEvent:o}),this._defaultPrevented=!1;}preventDefault(){this._defaultPrevented=!0;}get defaultPrevented(){return this._defaultPrevented}}class po extends t.Event{constructor(t,e,i){super(t,{originalEvent:i}),this._defaultPrevented=!1;}preventDefault(){this._defaultPrevented=!0;}get defaultPrevented(){return this._defaultPrevented}}class fo{constructor(t,e){this._map=t,this._clickTolerance=e.clickTolerance;}reset(){delete this._mousedownPos;}wheel(t){return this._firePreventable(new po(t.type,this._map,t))}mousedown(t,e){return this._mousedownPos=e,this._firePreventable(new mo(t.type,this._map,t))}mouseup(t){this._map.fire(new mo(t.type,this._map,t));}click(t,e){this._mousedownPos&&this._mousedownPos.dist(e)>=this._clickTolerance||this._map.fire(new mo(t.type,this._map,t));}dblclick(t){return this._firePreventable(new mo(t.type,this._map,t))}mouseover(t){this._map.fire(new mo(t.type,this._map,t));}mouseout(t){this._map.fire(new mo(t.type,this._map,t));}touchstart(t){return this._firePreventable(new _o(t.type,this._map,t))}touchmove(t){this._map.fire(new _o(t.type,this._map,t));}touchend(t){this._map.fire(new _o(t.type,this._map,t));}touchcancel(t){this._map.fire(new _o(t.type,this._map,t));}_firePreventable(t){if(this._map.fire(t),t.defaultPrevented)return {}}isEnabled(){return !0}isActive(){return !1}enable(){}disable(){}}class go{constructor(t){this._map=t;}reset(){this._delayContextMenu=!1,this._ignoreContextMenu=!0,delete this._contextMenuEvent;}mousemove(t){this._map.fire(new mo(t.type,this._map,t));}mousedown(){this._delayContextMenu=!0,this._ignoreContextMenu=!1;}mouseup(){this._delayContextMenu=!1,this._contextMenuEvent&&(this._map.fire(new mo("contextmenu",this._map,this._contextMenuEvent)),delete this._contextMenuEvent);}contextmenu(t){this._delayContextMenu?this._contextMenuEvent=t:this._ignoreContextMenu||this._map.fire(new mo(t.type,this._map,t)),this._map.listens("contextmenu")&&t.preventDefault();}isEnabled(){return !0}isActive(){return !1}enable(){}disable(){}}class xo{constructor(t,e){this._map=t,this._el=t.getCanvasContainer(),this._container=t.getContainer(),this._clickTolerance=e.clickTolerance||1;}isEnabled(){return !!this._enabled}isActive(){return !!this._active}enable(){this.isEnabled()||(this._enabled=!0);}disable(){this.isEnabled()&&(this._enabled=!1);}mousedown(t,e){this.isEnabled()&&t.shiftKey&&0===t.button&&(r.disableDrag(),this._startPos=this._lastPos=e,this._active=!0);}mousemoveWindow(t,e){if(!this._active)return;const i=e;if(this._lastPos.equals(i)||!this._box&&i.dist(this._startPos)<this._clickTolerance)return;const o=this._startPos;this._lastPos=i,this._box||(this._box=r.create("div","maplibregl-boxzoom mapboxgl-boxzoom",this._container),this._container.classList.add("maplibregl-crosshair","mapboxgl-crosshair"),this._fireEvent("boxzoomstart",t));const a=Math.min(o.x,i.x),s=Math.max(o.x,i.x),n=Math.min(o.y,i.y),l=Math.max(o.y,i.y);r.setTransform(this._box,`translate(${a}px,${n}px)`),this._box.style.width=s-a+"px",this._box.style.height=l-n+"px";}mouseupWindow(e,i){if(!this._active)return;if(0!==e.button)return;const o=this._startPos,a=i;if(this.reset(),r.suppressClick(),o.x!==a.x||o.y!==a.y)return this._map.fire(new t.Event("boxzoomend",{originalEvent:e})),{cameraAnimation:t=>t.fitScreenCoordinates(o,a,this._map.getBearing(),{linear:!0})};this._fireEvent("boxzoomcancel",e);}keydown(t){this._active&&27===t.keyCode&&(this.reset(),this._fireEvent("boxzoomcancel",t));}reset(){this._active=!1,this._container.classList.remove("maplibregl-crosshair","mapboxgl-crosshair"),this._box&&(r.remove(this._box),this._box=null),r.enableDrag(),delete this._startPos,delete this._lastPos;}_fireEvent(e,i){return this._map.fire(new t.Event(e,{originalEvent:i}))}}function vo(t,e){if(t.length!==e.length)throw new Error(`The number of touches and points are not equal - touches ${t.length}, points ${e.length}`);const i={};for(let o=0;o<t.length;o++)i[t[o].identifier]=e[o];return i}class yo{constructor(t){this.reset(),this.numTouches=t.numTouches;}reset(){delete this.centroid,delete this.startTime,delete this.touches,this.aborted=!1;}touchstart(e,i,o){(this.centroid||o.length>this.numTouches)&&(this.aborted=!0),this.aborted||(void 0===this.startTime&&(this.startTime=e.timeStamp),o.length===this.numTouches&&(this.centroid=function(e){const i=new t.pointGeometry(0,0);for(const t of e)i._add(t);return i.div(e.length)}(i),this.touches=vo(o,i)));}touchmove(t,e,i){if(this.aborted||!this.centroid)return;const o=vo(i,e);for(const t in this.touches){const e=this.touches[t],i=o[t];(!i||i.dist(e)>30)&&(this.aborted=!0);}}touchend(t,e,i){if((!this.centroid||t.timeStamp-this.startTime>500)&&(this.aborted=!0),0===i.length){const t=!this.aborted&&this.centroid;if(this.reset(),t)return t}}}class bo{constructor(t){this.singleTap=new yo(t),this.numTaps=t.numTaps,this.reset();}reset(){this.lastTime=1/0,delete this.lastTap,this.count=0,this.singleTap.reset();}touchstart(t,e,i){this.singleTap.touchstart(t,e,i);}touchmove(t,e,i){this.singleTap.touchmove(t,e,i);}touchend(t,e,i){const o=this.singleTap.touchend(t,e,i);if(o){const e=t.timeStamp-this.lastTime<500,i=!this.lastTap||this.lastTap.dist(o)<30;if(e&&i||this.reset(),this.count++,this.lastTime=t.timeStamp,this.lastTap=o,this.count===this.numTaps)return this.reset(),o}}}class wo{constructor(){this._zoomIn=new bo({numTouches:1,numTaps:2}),this._zoomOut=new bo({numTouches:2,numTaps:1}),this.reset();}reset(){this._active=!1,this._zoomIn.reset(),this._zoomOut.reset();}touchstart(t,e,i){this._zoomIn.touchstart(t,e,i),this._zoomOut.touchstart(t,e,i);}touchmove(t,e,i){this._zoomIn.touchmove(t,e,i),this._zoomOut.touchmove(t,e,i);}touchend(t,e,i){const o=this._zoomIn.touchend(t,e,i),a=this._zoomOut.touchend(t,e,i);return o?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:e.getZoom()+1,around:e.unproject(o)},{originalEvent:t})}):a?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:e.getZoom()-1,around:e.unproject(a)},{originalEvent:t})}):void 0}touchcancel(){this.reset();}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}const To={0:1,2:2};class Eo{constructor(t){this.reset(),this._clickTolerance=t.clickTolerance||1;}reset(){this._active=!1,this._moved=!1,delete this._lastPoint,delete this._eventButton;}_correctButton(t,e){return !1}_move(t,e){return {}}mousedown(t,e){if(this._lastPoint)return;const i=r.mouseButton(t);this._correctButton(t,i)&&(this._lastPoint=e,this._eventButton=i);}mousemoveWindow(t,e){const i=this._lastPoint;if(i)if(t.preventDefault(),function(t,e){const i=To[e];return void 0===t.buttons||(t.buttons&i)!==i}(t,this._eventButton))this.reset();else if(this._moved||!(e.dist(i)<this._clickTolerance))return this._moved=!0,this._lastPoint=e,this._move(i,e)}mouseupWindow(t){this._lastPoint&&r.mouseButton(t)===this._eventButton&&(this._moved&&r.suppressClick(),this.reset());}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class Io extends Eo{mousedown(t,e){super.mousedown(t,e),this._lastPoint&&(this._active=!0);}_correctButton(t,e){return 0===e&&!t.ctrlKey}_move(t,e){return {around:e,panDelta:e.sub(t)}}}class Co extends Eo{_correctButton(t,e){return 0===e&&t.ctrlKey||2===e}_move(t,e){const i=.8*(e.x-t.x);if(i)return this._active=!0,{bearingDelta:i}}contextmenu(t){t.preventDefault();}}class So extends Eo{_correctButton(t,e){return 0===e&&t.ctrlKey||2===e}_move(t,e){const i=-.5*(e.y-t.y);if(i)return this._active=!0,{pitchDelta:i}}contextmenu(t){t.preventDefault();}}class Do{constructor(t,e){this._minTouches=t.cooperativeGestures?2:1,this._clickTolerance=t.clickTolerance||1,this._map=e,this.reset();}reset(){this._active=!1,this._touches={},this._sum=new t.pointGeometry(0,0),setTimeout((()=>{this._cancelCooperativeMessage=!1;}),200);}touchstart(t,e,i){return this._calculateTransform(t,e,i)}touchmove(t,e,i){if(this._map._cooperativeGestures&&(2===this._minTouches&&i.length<2&&!this._cancelCooperativeMessage?this._map._onCooperativeGesture(t,!1,i.length):this._cancelCooperativeMessage||(this._cancelCooperativeMessage=!0)),this._active&&!(i.length<this._minTouches))return t.preventDefault(),this._calculateTransform(t,e,i)}touchend(t,e,i){this._calculateTransform(t,e,i),this._active&&i.length<this._minTouches&&this.reset();}touchcancel(){this.reset();}_calculateTransform(e,i,o){o.length>0&&(this._active=!0);const a=vo(o,i),r=new t.pointGeometry(0,0),s=new t.pointGeometry(0,0);let n=0;for(const t in a){const e=a[t],i=this._touches[t];i&&(r._add(e),s._add(e.sub(i)),n++,a[t]=e);}if(this._touches=a,n<this._minTouches||!s.mag())return;const l=s.div(n);return this._sum._add(l),this._sum.mag()<this._clickTolerance?void 0:{around:r.div(n),panDelta:l}}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class zo{constructor(){this.reset();}reset(){this._active=!1,delete this._firstTwoTouches;}_start(t){}_move(t,e,i){return {}}touchstart(t,e,i){this._firstTwoTouches||i.length<2||(this._firstTwoTouches=[i[0].identifier,i[1].identifier],this._start([e[0],e[1]]));}touchmove(t,e,i){if(!this._firstTwoTouches)return;t.preventDefault();const[o,a]=this._firstTwoTouches,r=Po(i,e,o),s=Po(i,e,a);if(!r||!s)return;const n=this._aroundCenter?null:r.add(s).div(2);return this._move([r,s],n,t)}touchend(t,e,i){if(!this._firstTwoTouches)return;const[o,a]=this._firstTwoTouches,s=Po(i,e,o),n=Po(i,e,a);s&&n||(this._active&&r.suppressClick(),this.reset());}touchcancel(){this.reset();}enable(t){this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}function Po(t,e,i){for(let o=0;o<t.length;o++)if(t[o].identifier===i)return e[o]}function Mo(t,e){return Math.log(t/e)/Math.LN2}class Ao extends zo{reset(){super.reset(),delete this._distance,delete this._startDistance;}_start(t){this._startDistance=this._distance=t[0].dist(t[1]);}_move(t,e){const i=this._distance;if(this._distance=t[0].dist(t[1]),this._active||!(Math.abs(Mo(this._distance,this._startDistance))<.1))return this._active=!0,{zoomDelta:Mo(this._distance,i),pinchAround:e}}}function Lo(t,e){return 180*t.angleWith(e)/Math.PI}class Ro extends zo{reset(){super.reset(),delete this._minDiameter,delete this._startVector,delete this._vector;}_start(t){this._startVector=this._vector=t[0].sub(t[1]),this._minDiameter=t[0].dist(t[1]);}_move(t,e){const i=this._vector;if(this._vector=t[0].sub(t[1]),this._active||!this._isBelowThreshold(this._vector))return this._active=!0,{bearingDelta:Lo(this._vector,i),pinchAround:e}}_isBelowThreshold(t){this._minDiameter=Math.min(this._minDiameter,t.mag());const e=25/(Math.PI*this._minDiameter)*360,i=Lo(t,this._startVector);return Math.abs(i)<e}}function ko(t){return Math.abs(t.y)>Math.abs(t.x)}class Bo extends zo{constructor(t){super(),this._map=t;}reset(){super.reset(),this._valid=void 0,delete this._firstMove,delete this._lastPoints;}touchstart(t,e,i){super.touchstart(t,e,i),this._currentTouchCount=i.length;}_start(t){this._lastPoints=t,ko(t[0].sub(t[1]))&&(this._valid=!1);}_move(t,e,i){if(this._map._cooperativeGestures&&this._currentTouchCount<3)return;const o=t[0].sub(this._lastPoints[0]),a=t[1].sub(this._lastPoints[1]);return this._valid=this.gestureBeginsVertically(o,a,i.timeStamp),this._valid?(this._lastPoints=t,this._active=!0,{pitchDelta:(o.y+a.y)/2*-.5}):void 0}gestureBeginsVertically(t,e,i){if(void 0!==this._valid)return this._valid;const o=t.mag()>=2,a=e.mag()>=2;if(!o&&!a)return;if(!o||!a)return void 0===this._firstMove&&(this._firstMove=i),i-this._firstMove<100&&void 0;const r=t.y>0==e.y>0;return ko(t)&&ko(e)&&r}}const Fo={panStep:100,bearingStep:15,pitchStep:10};class Oo{constructor(){const t=Fo;this._panStep=t.panStep,this._bearingStep=t.bearingStep,this._pitchStep=t.pitchStep,this._rotationDisabled=!1;}reset(){this._active=!1;}keydown(t){if(t.altKey||t.ctrlKey||t.metaKey)return;let e=0,i=0,o=0,a=0,r=0;switch(t.keyCode){case 61:case 107:case 171:case 187:e=1;break;case 189:case 109:case 173:e=-1;break;case 37:t.shiftKey?i=-1:(t.preventDefault(),a=-1);break;case 39:t.shiftKey?i=1:(t.preventDefault(),a=1);break;case 38:t.shiftKey?o=1:(t.preventDefault(),r=-1);break;case 40:t.shiftKey?o=-1:(t.preventDefault(),r=1);break;default:return}return this._rotationDisabled&&(i=0,o=0),{cameraAnimation:s=>{const n=s.getZoom();s.easeTo({duration:300,easeId:"keyboardHandler",easing:Uo,zoom:e?Math.round(n)+e*(t.shiftKey?2:1):n,bearing:s.getBearing()+i*this._bearingStep,pitch:s.getPitch()+o*this._pitchStep,offset:[-a*this._panStep,-r*this._panStep],center:s.getCenter()},{originalEvent:t});}}}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}disableRotation(){this._rotationDisabled=!0;}enableRotation(){this._rotationDisabled=!1;}}function Uo(t){return t*(2-t)}const No=4.000244140625;class Go{constructor(e,i){this._map=e,this._el=e.getCanvasContainer(),this._handler=i,this._delta=0,this._defaultZoomRate=.01,this._wheelZoomRate=.0022222222222222222,t.bindAll(["_onTimeout"],this);}setZoomRate(t){this._defaultZoomRate=t;}setWheelZoomRate(t){this._wheelZoomRate=t;}isEnabled(){return !!this._enabled}isActive(){return !!this._active||void 0!==this._finishTimeout}isZooming(){return !!this._zooming}enable(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=t&&"center"===t.around);}disable(){this.isEnabled()&&(this._enabled=!1);}wheel(e){if(!this.isEnabled())return;if(this._map._cooperativeGestures){if(!this._map._metaPress)return;e.preventDefault();}let i=e.deltaMode===WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY;const o=t.exported.now(),a=o-(this._lastWheelEventTime||0);this._lastWheelEventTime=o,0!==i&&i%No==0?this._type="wheel":0!==i&&Math.abs(i)<4?this._type="trackpad":a>400?(this._type=null,this._lastValue=i,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(a*i)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,i+=this._lastValue)),e.shiftKey&&i&&(i/=4),this._type&&(this._lastWheelEvent=e,this._delta-=i,this._active||this._start(e)),e.preventDefault();}_onTimeout(t){this._type="wheel",this._delta-=this._lastValue,this._active||this._start(t);}_start(e){if(!this._delta)return;this._frameId&&(this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0),this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout);const i=r.mousePos(this._el,e);this._around=t.LngLat.convert(this._aroundCenter?this._map.getCenter():this._map.unproject(i)),this._aroundPoint=this._map.transform.locationPoint(this._around),this._frameId||(this._frameId=!0,this._handler._triggerRenderFrame());}renderFrame(){if(!this._frameId)return;if(this._frameId=null,!this.isActive())return;const e=this._map.transform;if(0!==this._delta){const t="wheel"===this._type&&Math.abs(this._delta)>No?this._wheelZoomRate:this._defaultZoomRate;let i=2/(1+Math.exp(-Math.abs(this._delta*t)));this._delta<0&&0!==i&&(i=1/i);const o="number"==typeof this._targetZoom?e.zoomScale(this._targetZoom):e.scale;this._targetZoom=Math.min(e.maxZoom,Math.max(e.minZoom,e.scaleZoom(o*i))),"wheel"===this._type&&(this._startZoom=e.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0;}const i="number"==typeof this._targetZoom?this._targetZoom:e.zoom,o=this._startZoom,a=this._easing;let r,s=!1;if("wheel"===this._type&&o&&a){const e=Math.min((t.exported.now()-this._lastWheelEventTime)/200,1),n=a(e);r=t.number(o,i,n),e<1?this._frameId||(this._frameId=!0):s=!0;}else r=i,s=!0;return this._active=!0,s&&(this._active=!1,this._finishTimeout=setTimeout((()=>{this._zooming=!1,this._handler._triggerRenderFrame(),delete this._targetZoom,delete this._finishTimeout;}),200)),{noInertia:!0,needsRenderFrame:!s,zoomDelta:r-e.zoom,around:this._aroundPoint,originalEvent:this._lastWheelEvent}}_smoothOutEasing(e){let i=t.ease;if(this._prevEase){const e=this._prevEase,o=(t.exported.now()-e.start)/e.duration,a=e.easing(o+.01)-e.easing(o),r=.27/Math.sqrt(a*a+1e-4)*.01,s=Math.sqrt(.0729-r*r);i=t.bezier(r,s,.25,1);}return this._prevEase={start:t.exported.now(),duration:e,easing:i},i}reset(){this._active=!1;}}class Zo{constructor(t,e){this._clickZoom=t,this._tapZoom=e;}enable(){this._clickZoom.enable(),this._tapZoom.enable();}disable(){this._clickZoom.disable(),this._tapZoom.disable();}isEnabled(){return this._clickZoom.isEnabled()&&this._tapZoom.isEnabled()}isActive(){return this._clickZoom.isActive()||this._tapZoom.isActive()}}class Vo{constructor(){this.reset();}reset(){this._active=!1;}dblclick(t,e){return t.preventDefault(),{cameraAnimation:i=>{i.easeTo({duration:300,zoom:i.getZoom()+(t.shiftKey?-1:1),around:i.unproject(e)},{originalEvent:t});}}}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class qo{constructor(){this._tap=new bo({numTouches:1,numTaps:1}),this.reset();}reset(){this._active=!1,delete this._swipePoint,delete this._swipeTouch,delete this._tapTime,this._tap.reset();}touchstart(t,e,i){this._swipePoint||(this._tapTime&&t.timeStamp-this._tapTime>500&&this.reset(),this._tapTime?i.length>0&&(this._swipePoint=e[0],this._swipeTouch=i[0].identifier):this._tap.touchstart(t,e,i));}touchmove(t,e,i){if(this._tapTime){if(this._swipePoint){if(i[0].identifier!==this._swipeTouch)return;const o=e[0],a=o.y-this._swipePoint.y;return this._swipePoint=o,t.preventDefault(),this._active=!0,{zoomDelta:a/128}}}else this._tap.touchmove(t,e,i);}touchend(t,e,i){this._tapTime?this._swipePoint&&0===i.length&&this.reset():this._tap.touchend(t,e,i)&&(this._tapTime=t.timeStamp);}touchcancel(){this.reset();}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class jo{constructor(t,e,i){this._el=t,this._mousePan=e,this._touchPan=i;}enable(t){this._inertiaOptions=t||{},this._mousePan.enable(),this._touchPan.enable(),this._el.classList.add("maplibregl-touch-drag-pan","mapboxgl-touch-drag-pan");}disable(){this._mousePan.disable(),this._touchPan.disable(),this._el.classList.remove("maplibregl-touch-drag-pan","mapboxgl-touch-drag-pan");}isEnabled(){return this._mousePan.isEnabled()&&this._touchPan.isEnabled()}isActive(){return this._mousePan.isActive()||this._touchPan.isActive()}}class $o{constructor(t,e,i){this._pitchWithRotate=t.pitchWithRotate,this._mouseRotate=e,this._mousePitch=i;}enable(){this._mouseRotate.enable(),this._pitchWithRotate&&this._mousePitch.enable();}disable(){this._mouseRotate.disable(),this._mousePitch.disable();}isEnabled(){return this._mouseRotate.isEnabled()&&(!this._pitchWithRotate||this._mousePitch.isEnabled())}isActive(){return this._mouseRotate.isActive()||this._mousePitch.isActive()}}class Xo{constructor(t,e,i,o){this._el=t,this._touchZoom=e,this._touchRotate=i,this._tapDragZoom=o,this._rotationDisabled=!1,this._enabled=!0;}enable(t){this._touchZoom.enable(t),this._rotationDisabled||this._touchRotate.enable(t),this._tapDragZoom.enable(),this._el.classList.add("maplibregl-touch-zoom-rotate","mapboxgl-touch-zoom-rotate");}disable(){this._touchZoom.disable(),this._touchRotate.disable(),this._tapDragZoom.disable(),this._el.classList.remove("maplibregl-touch-zoom-rotate","mapboxgl-touch-zoom-rotate");}isEnabled(){return this._touchZoom.isEnabled()&&(this._rotationDisabled||this._touchRotate.isEnabled())&&this._tapDragZoom.isEnabled()}isActive(){return this._touchZoom.isActive()||this._touchRotate.isActive()||this._tapDragZoom.isActive()}disableRotation(){this._rotationDisabled=!0,this._touchRotate.disable();}enableRotation(){this._rotationDisabled=!1,this._touchZoom.isEnabled()&&this._touchRotate.enable();}}const Wo=t=>t.zoom||t.drag||t.pitch||t.rotate;class Ho extends t.Event{}function Ko(t){return t.panDelta&&t.panDelta.mag()||t.zoomDelta||t.bearingDelta||t.pitchDelta}class Yo{constructor(e,i){this._map=e,this._el=this._map.getCanvasContainer(),this._handlers=[],this._handlersById={},this._changes=[],this._inertia=new co(e),this._bearingSnap=i.bearingSnap,this._previousActiveHandlers={},this._eventsInProgress={},this._addDefaultHandlers(i),t.bindAll(["handleEvent","handleWindowEvent"],this);const o=this._el;this._listeners=[[o,"touchstart",{passive:!0}],[o,"touchmove",{passive:!1}],[o,"touchend",void 0],[o,"touchcancel",void 0],[o,"mousedown",void 0],[o,"mousemove",void 0],[o,"mouseup",void 0],[document,"mousemove",{capture:!0}],[document,"mouseup",void 0],[o,"mouseover",void 0],[o,"mouseout",void 0],[o,"dblclick",void 0],[o,"click",void 0],[o,"keydown",{capture:!1}],[o,"keyup",void 0],[o,"wheel",{passive:!1}],[o,"contextmenu",void 0],[window,"blur",void 0]];for(const[t,e,i]of this._listeners)r.addEventListener(t,e,t===document?this.handleWindowEvent:this.handleEvent,i);}destroy(){for(const[t,e,i]of this._listeners)r.removeEventListener(t,e,t===document?this.handleWindowEvent:this.handleEvent,i);}_addDefaultHandlers(t){const e=this._map,i=e.getCanvasContainer();this._add("mapEvent",new fo(e,t));const o=e.boxZoom=new xo(e,t);this._add("boxZoom",o);const a=new wo,r=new Vo;e.doubleClickZoom=new Zo(r,a),this._add("tapZoom",a),this._add("clickZoom",r);const s=new qo;this._add("tapDragZoom",s);const n=e.touchPitch=new Bo(e);this._add("touchPitch",n);const l=new Co(t),c=new So(t);e.dragRotate=new $o(t,l,c),this._add("mouseRotate",l,["mousePitch"]),this._add("mousePitch",c,["mouseRotate"]);const h=new Io(t),u=new Do(t,e);e.dragPan=new jo(i,h,u),this._add("mousePan",h),this._add("touchPan",u,["touchZoom","touchRotate"]);const d=new Ro,m=new Ao;e.touchZoomRotate=new Xo(i,m,d,s),this._add("touchRotate",d,["touchPan","touchZoom"]),this._add("touchZoom",m,["touchPan","touchRotate"]);const _=e.scrollZoom=new Go(e,this);this._add("scrollZoom",_,["mousePan"]);const p=e.keyboard=new Oo;this._add("keyboard",p),this._add("blockableMapEvent",new go(e));for(const i of ["boxZoom","doubleClickZoom","tapDragZoom","touchPitch","dragRotate","dragPan","touchZoomRotate","scrollZoom","keyboard"])t.interactive&&t[i]&&e[i].enable(t[i]);}_add(t,e,i){this._handlers.push({handlerName:t,handler:e,allowed:i}),this._handlersById[t]=e;}stop(t){if(!this._updatingCamera){for(const{handler:t}of this._handlers)t.reset();this._inertia.clear(),this._fireEvents({},{},t),this._changes=[];}}isActive(){for(const{handler:t}of this._handlers)if(t.isActive())return !0;return !1}isZooming(){return !!this._eventsInProgress.zoom||this._map.scrollZoom.isZooming()}isRotating(){return !!this._eventsInProgress.rotate}isMoving(){return Boolean(Wo(this._eventsInProgress))||this.isZooming()}_blockedByActive(t,e,i){for(const o in t)if(o!==i&&(!e||e.indexOf(o)<0))return !0;return !1}handleWindowEvent(t){this.handleEvent(t,`${t.type}Window`);}_getMapTouches(t){const e=[];for(const i of t)this._el.contains(i.target)&&e.push(i);return e}handleEvent(t,e){if("blur"===t.type)return void this.stop(!0);this._updatingCamera=!0;const i="renderFrame"===t.type?void 0:t,o={needsRenderFrame:!1},a={},s={},n=t.touches,l=n?this._getMapTouches(n):void 0,c=l?r.touchPos(this._el,l):r.mousePos(this._el,t);for(const{handlerName:r,handler:n,allowed:h}of this._handlers){if(!n.isEnabled())continue;let u;this._blockedByActive(s,h,r)?n.reset():n[e||t.type]&&(u=n[e||t.type](t,c,l),this.mergeHandlerResult(o,a,u,r,i),u&&u.needsRenderFrame&&this._triggerRenderFrame()),(u||n.isActive())&&(s[r]=n);}const h={};for(const t in this._previousActiveHandlers)s[t]||(h[t]=i);this._previousActiveHandlers=s,(Object.keys(h).length||Ko(o))&&(this._changes.push([o,a,h]),this._triggerRenderFrame()),(Object.keys(s).length||Ko(o))&&this._map._stop(!0),this._updatingCamera=!1;const{cameraAnimation:u}=o;u&&(this._inertia.clear(),this._fireEvents({},{},!0),this._changes=[],u(this._map));}mergeHandlerResult(e,i,o,a,r){if(!o)return;t.extend(e,o);const s={handlerName:a,originalEvent:o.originalEvent||r};void 0!==o.zoomDelta&&(i.zoom=s),void 0!==o.panDelta&&(i.drag=s),void 0!==o.pitchDelta&&(i.pitch=s),void 0!==o.bearingDelta&&(i.rotate=s);}_applyChanges(){const e={},i={},o={};for(const[a,r,s]of this._changes)a.panDelta&&(e.panDelta=(e.panDelta||new t.pointGeometry(0,0))._add(a.panDelta)),a.zoomDelta&&(e.zoomDelta=(e.zoomDelta||0)+a.zoomDelta),a.bearingDelta&&(e.bearingDelta=(e.bearingDelta||0)+a.bearingDelta),a.pitchDelta&&(e.pitchDelta=(e.pitchDelta||0)+a.pitchDelta),void 0!==a.around&&(e.around=a.around),void 0!==a.pinchAround&&(e.pinchAround=a.pinchAround),a.noInertia&&(e.noInertia=a.noInertia),t.extend(i,r),t.extend(o,s);this._updateMapTransform(e,i,o),this._changes=[];}_updateMapTransform(e,i,o){const a=this._map,r=a.transform,s=a.style&&a.style.terrain;if(!(Ko(e)||s&&this._drag))return this._fireEvents(i,o,!0);let{panDelta:n,zoomDelta:l,bearingDelta:c,pitchDelta:h,around:u,pinchAround:d}=e;void 0!==d&&(u=d),a._stop(!0),u=u||a.transform.centerPoint;const m=r.pointLocation(n?u.sub(n):u);c&&(r.bearing+=c),h&&(r.pitch+=h),l&&(r.zoom+=l),s?i.drag&&!this._drag?(this._drag={center:r.centerPoint,lngLat:r.pointLocation(u),point:u,handlerName:i.drag.handlerName},a.fire(new t.Event("freezeElevation",{freeze:!0}))):this._drag&&o[this._drag.handlerName]?(a.fire(new t.Event("freezeElevation",{freeze:!1})),this._drag=null):i.drag&&this._drag&&(r.center=r.pointLocation(r.centerPoint.sub(n))):r.setLocationAtPoint(m,u),this._map._update(),e.noInertia||this._inertia.record(e),this._fireEvents(i,o,!0);}_fireEvents(e,i,o){const a=Wo(this._eventsInProgress),r=Wo(e),s={};for(const t in e){const{originalEvent:i}=e[t];this._eventsInProgress[t]||(s[`${t}start`]=i),this._eventsInProgress[t]=e[t];}!a&&r&&this._fireEvent("movestart",r.originalEvent);for(const t in s)this._fireEvent(t,s[t]);r&&this._fireEvent("move",r.originalEvent);for(const t in e){const{originalEvent:i}=e[t];this._fireEvent(t,i);}const n={};let l;for(const t in this._eventsInProgress){const{handlerName:e,originalEvent:o}=this._eventsInProgress[t];this._handlersById[e].isActive()||(delete this._eventsInProgress[t],l=i[e]||o,n[`${t}end`]=l);}for(const t in n)this._fireEvent(t,n[t]);const c=Wo(this._eventsInProgress);if(o&&(a||r)&&!c){this._updatingCamera=!0;const e=this._inertia._onMoveEnd(this._map.dragPan._inertiaOptions),i=t=>0!==t&&-this._bearingSnap<t&&t<this._bearingSnap;e?(i(e.bearing||this._map.getBearing())&&(e.bearing=0),this._map.easeTo(e,{originalEvent:l})):(this._map.fire(new t.Event("moveend",{originalEvent:l})),i(this._map.getBearing())&&this._map.resetNorth()),this._updatingCamera=!1;}}_fireEvent(e,i){this._map.fire(new t.Event(e,i?{originalEvent:i}:{}));}_requestFrame(){return this._map.triggerRepaint(),this._map._renderTaskQueue.add((t=>{delete this._frameId,this.handleEvent(new Ho("renderFrame",{timeStamp:t})),this._applyChanges();}))}_triggerRenderFrame(){void 0===this._frameId&&(this._frameId=this._requestFrame());}}const Jo={extend:(e,...i)=>t.extend(e,...i),run(t){t();},logToElement(t,e=!1,i="log"){const o=window.document.getElementById(i);o&&(e&&(o.innerHTML=""),o.innerHTML+=`<br>${t}`);}};class Qo extends t.Evented{constructor(e,i){super(),this._moving=!1,this._zooming=!1,this.transform=e,this._bearingSnap=i.bearingSnap,t.bindAll(["_renderFrameCallback"],this);}getCenter(){return new t.LngLat(this.transform.center.lng,this.transform.center.lat)}setCenter(t,e){return this.jumpTo({center:t},e)}panBy(e,i,o){return e=t.pointGeometry.convert(e).mult(-1),this.panTo(this.transform.center,t.extend({offset:e},i),o)}panTo(e,i,o){return this.easeTo(t.extend({center:e},i),o)}getZoom(){return this.transform.zoom}setZoom(t,e){return this.jumpTo({zoom:t},e),this}zoomTo(e,i,o){return this.easeTo(t.extend({zoom:e},i),o)}zoomIn(t,e){return this.zoomTo(this.getZoom()+1,t,e),this}zoomOut(t,e){return this.zoomTo(this.getZoom()-1,t,e),this}getBearing(){return this.transform.bearing}setBearing(t,e){return this.jumpTo({bearing:t},e),this}getPadding(){return this.transform.padding}setPadding(t,e){return this.jumpTo({padding:t},e),this}rotateTo(e,i,o){return this.easeTo(t.extend({bearing:e},i),o)}resetNorth(e,i){return this.rotateTo(0,t.extend({duration:1e3},e),i),this}resetNorthPitch(e,i){return this.easeTo(t.extend({bearing:0,pitch:0,duration:1e3},e),i),this}snapToNorth(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this}getPitch(){return this.transform.pitch}setPitch(t,e){return this.jumpTo({pitch:t},e),this}cameraForBounds(e,i){e=t.LngLatBounds.convert(e);const o=i&&i.bearing||0;return this._cameraForBoxAndBearing(e.getNorthWest(),e.getSouthEast(),o,i)}_cameraForBoxAndBearing(e,i,o,a){const r={top:0,bottom:0,right:0,left:0};if("number"==typeof(a=t.extend({padding:r,offset:[0,0],maxZoom:this.transform.maxZoom},a)).padding){const t=a.padding;a.padding={top:t,bottom:t,right:t,left:t};}a.padding=t.extend(r,a.padding);const s=this.transform,n=s.padding,l=s.project(t.LngLat.convert(e)),c=s.project(t.LngLat.convert(i)),h=l.rotate(-o*Math.PI/180),u=c.rotate(-o*Math.PI/180),d=new t.pointGeometry(Math.max(h.x,u.x),Math.max(h.y,u.y)),m=new t.pointGeometry(Math.min(h.x,u.x),Math.min(h.y,u.y)),_=d.sub(m),p=(s.width-(n.left+n.right+a.padding.left+a.padding.right))/_.x,f=(s.height-(n.top+n.bottom+a.padding.top+a.padding.bottom))/_.y;if(f<0||p<0)return void t.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset.");const g=Math.min(s.scaleZoom(s.scale*Math.min(p,f)),a.maxZoom),x=t.pointGeometry.convert(a.offset),v=new t.pointGeometry((a.padding.left-a.padding.right)/2,(a.padding.top-a.padding.bottom)/2).rotate(o*Math.PI/180),y=x.add(v).mult(s.scale/s.zoomScale(g));return {center:s.unproject(l.add(c).div(2).sub(y)),zoom:g,bearing:o}}fitBounds(t,e,i){return this._fitInternal(this.cameraForBounds(t,e),e,i)}fitScreenCoordinates(e,i,o,a,r){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(t.pointGeometry.convert(e)),this.transform.pointLocation(t.pointGeometry.convert(i)),o,a),a,r)}_fitInternal(e,i,o){return e?(delete(i=t.extend(e,i)).padding,i.linear?this.easeTo(i,o):this.flyTo(i,o)):this}jumpTo(e,i){this.stop();const o=this.transform;let a=!1,r=!1,s=!1;return "zoom"in e&&o.zoom!==+e.zoom&&(a=!0,o.zoom=+e.zoom),void 0!==e.center&&(o.center=t.LngLat.convert(e.center)),"bearing"in e&&o.bearing!==+e.bearing&&(r=!0,o.bearing=+e.bearing),"pitch"in e&&o.pitch!==+e.pitch&&(s=!0,o.pitch=+e.pitch),null==e.padding||o.isPaddingEqual(e.padding)||(o.padding=e.padding),this.fire(new t.Event("movestart",i)).fire(new t.Event("move",i)),a&&this.fire(new t.Event("zoomstart",i)).fire(new t.Event("zoom",i)).fire(new t.Event("zoomend",i)),r&&this.fire(new t.Event("rotatestart",i)).fire(new t.Event("rotate",i)).fire(new t.Event("rotateend",i)),s&&this.fire(new t.Event("pitchstart",i)).fire(new t.Event("pitch",i)).fire(new t.Event("pitchend",i)),this.fire(new t.Event("moveend",i))}calculateCameraOptionsFromTo(e,i,o,a=0){const r=t.MercatorCoordinate.fromLngLat(e,i),s=t.MercatorCoordinate.fromLngLat(o,a),n=s.x-r.x,l=s.y-r.y,c=s.z-r.z,h=Math.hypot(n,l,c);if(0===h)throw new Error("Can't calculate camera options with same From and To");const u=Math.hypot(n,l),d=this.transform.scaleZoom(this.transform.cameraToCenterDistance/h/this.transform.tileSize),m=180*Math.atan2(n,-l)/Math.PI;let _=180*Math.acos(u/h)/Math.PI;return _=c<0?90-_:90+_,{center:s.toLngLat(),zoom:d,pitch:_,bearing:m}}easeTo(e,i){this._stop(!1,e.easeId),(!1===(e=t.extend({offset:[0,0],duration:500,easing:t.ease},e)).animate||!e.essential&&t.exported.prefersReducedMotion)&&(e.duration=0);const o=this.transform,a=this.getZoom(),r=this.getBearing(),s=this.getPitch(),n=this.getPadding(),l="zoom"in e?+e.zoom:a,c="bearing"in e?this._normalizeBearing(e.bearing,r):r,h="pitch"in e?+e.pitch:s,u="padding"in e?e.padding:o.padding,d=t.pointGeometry.convert(e.offset);let m=o.centerPoint.add(d);const _=o.pointLocation(m),p=t.LngLat.convert(e.center||_);this._normalizeCenter(p);const f=o.project(_),g=o.project(p).sub(f),x=o.zoomScale(l-a);let v,y;e.around&&(v=t.LngLat.convert(e.around),y=o.locationPoint(v));const b={moving:this._moving,zooming:this._zooming,rotating:this._rotating,pitching:this._pitching};return this._zooming=this._zooming||l!==a,this._rotating=this._rotating||r!==c,this._pitching=this._pitching||h!==s,this._padding=!o.isPaddingEqual(u),this._easeId=e.easeId,this._prepareEase(i,e.noMoveStart,b),this._ease((e=>{if(this._zooming&&(o.zoom=t.number(a,l,e)),this._rotating&&(o.bearing=t.number(r,c,e)),this._pitching&&(o.pitch=t.number(s,h,e)),this._padding&&(o.interpolatePadding(n,u,e),m=o.centerPoint.add(d)),v)o.setLocationAtPoint(v,y);else {const t=o.zoomScale(o.zoom-a),i=l>a?Math.min(2,x):Math.max(.5,x),r=Math.pow(i,1-e),s=o.unproject(f.add(g.mult(e*r)).mult(t));o.setLocationAtPoint(o.renderWorldCopies?s.wrap():s,m);}this._fireMoveEvents(i);}),(t=>{this._afterEase(i,t);}),e),this}_prepareEase(e,i,o={}){this._moving=!0,this.fire(new t.Event("freezeElevation",{freeze:!0})),i||o.moving||this.fire(new t.Event("movestart",e)),this._zooming&&!o.zooming&&this.fire(new t.Event("zoomstart",e)),this._rotating&&!o.rotating&&this.fire(new t.Event("rotatestart",e)),this._pitching&&!o.pitching&&this.fire(new t.Event("pitchstart",e));}_fireMoveEvents(e){this.fire(new t.Event("move",e)),this._zooming&&this.fire(new t.Event("zoom",e)),this._rotating&&this.fire(new t.Event("rotate",e)),this._pitching&&this.fire(new t.Event("pitch",e));}_afterEase(e,i){if(this._easeId&&i&&this._easeId===i)return;delete this._easeId,this.fire(new t.Event("freezeElevation",{freeze:!1}));const o=this._zooming,a=this._rotating,r=this._pitching;this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,this._padding=!1,o&&this.fire(new t.Event("zoomend",e)),a&&this.fire(new t.Event("rotateend",e)),r&&this.fire(new t.Event("pitchend",e)),this.fire(new t.Event("moveend",e));}flyTo(e,i){if(!e.essential&&t.exported.prefersReducedMotion){const o=t.pick(e,["center","zoom","bearing","pitch","around"]);return this.jumpTo(o,i)}this.stop(),e=t.extend({offset:[0,0],speed:1.2,curve:1.42,easing:t.ease},e);const o=this.transform,a=this.getZoom(),r=this.getBearing(),s=this.getPitch(),n=this.getPadding(),l="zoom"in e?t.clamp(+e.zoom,o.minZoom,o.maxZoom):a,c="bearing"in e?this._normalizeBearing(e.bearing,r):r,h="pitch"in e?+e.pitch:s,u="padding"in e?e.padding:o.padding,d=o.zoomScale(l-a),m=t.pointGeometry.convert(e.offset);let _=o.centerPoint.add(m);const p=o.pointLocation(_),f=t.LngLat.convert(e.center||p);this._normalizeCenter(f);const g=o.project(p),x=o.project(f).sub(g);let v=e.curve;const y=Math.max(o.width,o.height),b=y/d,w=x.mag();if("minZoom"in e){const i=t.clamp(Math.min(e.minZoom,a,l),o.minZoom,o.maxZoom),r=y/o.zoomScale(i-a);v=Math.sqrt(r/w*2);}const T=v*v;function E(t){const e=(b*b-y*y+(t?-1:1)*T*T*w*w)/(2*(t?b:y)*T*w);return Math.log(Math.sqrt(e*e+1)-e)}function I(t){return (Math.exp(t)-Math.exp(-t))/2}function C(t){return (Math.exp(t)+Math.exp(-t))/2}const S=E(0);let D=function(t){return C(S)/C(S+v*t)},z=function(t){return y*((C(S)*(I(e=S+v*t)/C(e))-I(S))/T)/w;var e;},P=(E(1)-S)/v;if(Math.abs(w)<1e-6||!isFinite(P)){if(Math.abs(y-b)<1e-6)return this.easeTo(e,i);const t=b<y?-1:1;P=Math.abs(Math.log(b/y))/v,z=function(){return 0},D=function(e){return Math.exp(t*v*e)};}return e.duration="duration"in e?+e.duration:1e3*P/("screenSpeed"in e?+e.screenSpeed/v:+e.speed),e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=r!==c,this._pitching=h!==s,this._padding=!o.isPaddingEqual(u),this._prepareEase(i,!1),this._ease((e=>{const d=e*P,p=1/D(d);o.zoom=1===e?l:a+o.scaleZoom(p),this._rotating&&(o.bearing=t.number(r,c,e)),this._pitching&&(o.pitch=t.number(s,h,e)),this._padding&&(o.interpolatePadding(n,u,e),_=o.centerPoint.add(m));const v=1===e?f:o.unproject(g.add(x.mult(z(d))).mult(p));o.setLocationAtPoint(o.renderWorldCopies?v.wrap():v,_),this._fireMoveEvents(i);}),(()=>this._afterEase(i)),e),this}isEasing(){return !!this._easeFrameId}stop(){return this._stop()}_stop(t,e){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){const t=this._onEaseEnd;delete this._onEaseEnd,t.call(this,e);}if(!t){const t=this.handlers;t&&t.stop(!1);}return this}_ease(e,i,o){!1===o.animate||0===o.duration?(e(1),i()):(this._easeStart=t.exported.now(),this._easeOptions=o,this._onEaseFrame=e,this._onEaseEnd=i,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback));}_renderFrameCallback(){const e=Math.min((t.exported.now()-this._easeStart)/this._easeOptions.duration,1);this._onEaseFrame(this._easeOptions.easing(e)),e<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop();}_normalizeBearing(e,i){e=t.wrap(e,-180,180);const o=Math.abs(e-i);return Math.abs(e-360-i)<o&&(e-=360),Math.abs(e+360-i)<o&&(e+=360),e}_normalizeCenter(t){const e=this.transform;if(!e.renderWorldCopies||e.lngRange)return;const i=t.lng-e.center.lng;t.lng+=i>180?-360:i<-180?360:0;}}class ta{constructor(e={}){this.options=e,t.bindAll(["_toggleAttribution","_updateData","_updateCompact","_updateCompactMinimize"],this);}getDefaultPosition(){return "bottom-right"}onAdd(t){return this._map=t,this._compact=this.options&&this.options.compact,this._container=r.create("details","maplibregl-ctrl maplibregl-ctrl-attrib mapboxgl-ctrl mapboxgl-ctrl-attrib"),this._compactButton=r.create("summary","maplibregl-ctrl-attrib-button mapboxgl-ctrl-attrib-button",this._container),this._compactButton.addEventListener("click",this._toggleAttribution),this._setElementTitle(this._compactButton,"ToggleAttribution"),this._innerContainer=r.create("div","maplibregl-ctrl-attrib-inner mapboxgl-ctrl-attrib-inner",this._container),this._updateAttributions(),this._updateCompact(),this._map.on("styledata",this._updateData),this._map.on("sourcedata",this._updateData),this._map.on("terrain",this._updateData),this._map.on("resize",this._updateCompact),this._map.on("drag",this._updateCompactMinimize),this._container}onRemove(){r.remove(this._container),this._map.off("styledata",this._updateData),this._map.off("sourcedata",this._updateData),this._map.off("terrain",this._updateData),this._map.off("resize",this._updateCompact),this._map.off("drag",this._updateCompactMinimize),this._map=void 0,this._compact=void 0,this._attribHTML=void 0;}_setElementTitle(t,e){const i=this._map._getUIString(`AttributionControl.${e}`);t.title=i,t.setAttribute("aria-label",i);}_toggleAttribution(){this._container.classList.contains("maplibregl-compact")&&(this._container.classList.contains("maplibregl-compact-show")?(this._container.setAttribute("open",""),this._container.classList.remove("maplibregl-compact-show","mapboxgl-compact-show")):(this._container.classList.add("maplibregl-compact-show","mapboxgl-compact-show"),this._container.removeAttribute("open")));}_updateData(t){!t||"metadata"!==t.sourceDataType&&"visibility"!==t.sourceDataType&&"style"!==t.dataType&&"terrain"!==t.type||this._updateAttributions();}_updateAttributions(){if(!this._map.style)return;let t=[];if(this.options.customAttribution&&(Array.isArray(this.options.customAttribution)?t=t.concat(this.options.customAttribution.map((t=>"string"!=typeof t?"":t))):"string"==typeof this.options.customAttribution&&t.push(this.options.customAttribution)),this._map.style.stylesheet){const t=this._map.style.stylesheet;this.styleOwner=t.owner,this.styleId=t.id;}const e=this._map.style.sourceCaches;for(const i in e){const o=e[i];if(o.used||o.usedForTerrain){const e=o.getSource();e.attribution&&t.indexOf(e.attribution)<0&&t.push(e.attribution);}}t=t.filter((t=>String(t).trim())),t.sort(((t,e)=>t.length-e.length)),t=t.filter(((e,i)=>{for(let o=i+1;o<t.length;o++)if(t[o].indexOf(e)>=0)return !1;return !0}));const i=t.join(" | ");i!==this._attribHTML&&(this._attribHTML=i,t.length?(this._innerContainer.innerHTML=i,this._container.classList.remove("maplibregl-attrib-empty","mapboxgl-attrib-empty")):this._container.classList.add("maplibregl-attrib-empty","mapboxgl-attrib-empty"),this._updateCompact(),this._editLink=null);}_updateCompact(){this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1===this._compact?this._container.setAttribute("open",""):this._container.classList.contains("maplibregl-compact")||this._container.classList.contains("maplibregl-attrib-empty")||(this._container.setAttribute("open",""),this._container.classList.add("maplibregl-compact","mapboxgl-compact","maplibregl-compact-show","mapboxgl-compact-show")):(this._container.setAttribute("open",""),this._container.classList.contains("maplibregl-compact")&&this._container.classList.remove("maplibregl-compact","maplibregl-compact-show","mapboxgl-compact","mapboxgl-compact-show"));}_updateCompactMinimize(){this._container.classList.contains("maplibregl-compact")&&this._container.classList.contains("maplibregl-compact-show")&&this._container.classList.remove("maplibregl-compact-show","mapboxgl-compact-show");}}class ea{constructor(e={}){this.options=e,t.bindAll(["_updateCompact"],this);}getDefaultPosition(){return "bottom-left"}onAdd(t){this._map=t,this._compact=this.options&&this.options.compact,this._container=r.create("div","maplibregl-ctrl mapboxgl-ctrl");const e=r.create("a","maplibregl-ctrl-logo mapboxgl-ctrl-logo");return e.target="_blank",e.rel="noopener nofollow",e.href="https://maplibre.org/",e.setAttribute("aria-label",this._map._getUIString("LogoControl.Title")),e.setAttribute("rel","noopener nofollow"),this._container.appendChild(e),this._container.style.display="block",this._map.on("resize",this._updateCompact),this._updateCompact(),this._container}onRemove(){r.remove(this._container),this._map.off("resize",this._updateCompact),this._map=void 0,this._compact=void 0;}_updateCompact(){const t=this._container.children;if(t.length){const e=t[0];this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1!==this._compact&&e.classList.add("maplibregl-compact","mapboxgl-compact"):e.classList.remove("maplibregl-compact","mapboxgl-compact");}}}class ia{constructor(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1;}add(t){const e=++this._id;return this._queue.push({callback:t,id:e,cancelled:!1}),e}remove(t){const e=this._currentlyRunning,i=e?this._queue.concat(e):this._queue;for(const e of i)if(e.id===t)return void(e.cancelled=!0)}run(t=0){if(this._currentlyRunning)throw new Error("Attempting to run(), but is already running.");const e=this._currentlyRunning=this._queue;this._queue=[];for(const i of e)if(!i.cancelled&&(i.callback(t),this._cleared))break;this._cleared=!1,this._currentlyRunning=!1;}clear(){this._currentlyRunning&&(this._cleared=!0),this._queue=[];}}const oa={"AttributionControl.ToggleAttribution":"Toggle attribution","AttributionControl.MapFeedback":"Map feedback","FullscreenControl.Enter":"Enter fullscreen","FullscreenControl.Exit":"Exit fullscreen","GeolocateControl.FindMyLocation":"Find my location","GeolocateControl.LocationNotAvailable":"Location not available","LogoControl.Title":"Mapbox logo","NavigationControl.ResetBearing":"Reset bearing to north","NavigationControl.ZoomIn":"Zoom in","NavigationControl.ZoomOut":"Zoom out","ScaleControl.Feet":"ft","ScaleControl.Meters":"m","ScaleControl.Kilometers":"km","ScaleControl.Miles":"mi","ScaleControl.NauticalMiles":"nm","TerrainControl.enableTerrain":"Enable terrain","TerrainControl.disableTerrain":"Disable terrain"},aa={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:-2,maxZoom:22,minPitch:0,maxPitch:60,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,cooperativeGestures:void 0,bearingSnap:7,clickTolerance:3,pitchWithRotate:!0,hash:!1,attributionControl:!0,maplibreLogo:!1,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,localIdeographFontFamily:"sans-serif",transformRequest:null,fadeDuration:300,crossSourceCollisions:!0},ra={showCompass:!0,showZoom:!0,visualizePitch:!1};class sa{constructor(e,i,o=!1){this._clickTolerance=10,this.element=i,this.mouseRotate=new Co({clickTolerance:e.dragRotate._mouseRotate._clickTolerance}),this.map=e,o&&(this.mousePitch=new So({clickTolerance:e.dragRotate._mousePitch._clickTolerance})),t.bindAll(["mousedown","mousemove","mouseup","touchstart","touchmove","touchend","reset"],this),r.addEventListener(i,"mousedown",this.mousedown),r.addEventListener(i,"touchstart",this.touchstart,{passive:!1}),r.addEventListener(i,"touchmove",this.touchmove),r.addEventListener(i,"touchend",this.touchend),r.addEventListener(i,"touchcancel",this.reset);}down(t,e){this.mouseRotate.mousedown(t,e),this.mousePitch&&this.mousePitch.mousedown(t,e),r.disableDrag();}move(t,e){const i=this.map,o=this.mouseRotate.mousemoveWindow(t,e);if(o&&o.bearingDelta&&i.setBearing(i.getBearing()+o.bearingDelta),this.mousePitch){const o=this.mousePitch.mousemoveWindow(t,e);o&&o.pitchDelta&&i.setPitch(i.getPitch()+o.pitchDelta);}}off(){const t=this.element;r.removeEventListener(t,"mousedown",this.mousedown),r.removeEventListener(t,"touchstart",this.touchstart,{passive:!1}),r.removeEventListener(t,"touchmove",this.touchmove),r.removeEventListener(t,"touchend",this.touchend),r.removeEventListener(t,"touchcancel",this.reset),this.offTemp();}offTemp(){r.enableDrag(),r.removeEventListener(window,"mousemove",this.mousemove),r.removeEventListener(window,"mouseup",this.mouseup);}mousedown(e){this.down(t.extend({},e,{ctrlKey:!0,preventDefault:()=>e.preventDefault()}),r.mousePos(this.element,e)),r.addEventListener(window,"mousemove",this.mousemove),r.addEventListener(window,"mouseup",this.mouseup);}mousemove(t){this.move(t,r.mousePos(this.element,t));}mouseup(t){this.mouseRotate.mouseupWindow(t),this.mousePitch&&this.mousePitch.mouseupWindow(t),this.offTemp();}touchstart(t){1!==t.targetTouches.length?this.reset():(this._startPos=this._lastPos=r.touchPos(this.element,t.targetTouches)[0],this.down({type:"mousedown",button:0,ctrlKey:!0,preventDefault:()=>t.preventDefault()},this._startPos));}touchmove(t){1!==t.targetTouches.length?this.reset():(this._lastPos=r.touchPos(this.element,t.targetTouches)[0],this.move({preventDefault:()=>t.preventDefault()},this._lastPos));}touchend(t){0===t.targetTouches.length&&this._startPos&&this._lastPos&&this._startPos.dist(this._lastPos)<this._clickTolerance&&this.element.click(),this.reset();}reset(){this.mouseRotate.reset(),this.mousePitch&&this.mousePitch.reset(),delete this._startPos,delete this._lastPos,this.offTemp();}}function na(e,i,o){if(e=new t.LngLat(e.lng,e.lat),i){const a=new t.LngLat(e.lng-360,e.lat),r=new t.LngLat(e.lng+360,e.lat),s=o.locationPoint(e).distSqr(i);o.locationPoint(a).distSqr(i)<s?e=a:o.locationPoint(r).distSqr(i)<s&&(e=r);}for(;Math.abs(e.lng-o.center.lng)>180;){const t=o.locationPoint(e);if(t.x>=0&&t.y>=0&&t.x<=o.width&&t.y<=o.height)break;e.lng>o.center.lng?e.lng-=360:e.lng+=360;}return e}const la={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"};function ca(t,e,i){const o=t.classList;for(const t in la)o.remove(`maplibregl-${i}-anchor-${t}`,`mapboxgl-${i}-anchor-${t}`);o.add(`maplibregl-${i}-anchor-${e}`,`mapboxgl-${i}-anchor-${e}`);}class ha extends t.Evented{constructor(e,i){if(super(),(e instanceof HTMLElement||i)&&(e=t.extend({element:e},i)),t.bindAll(["_update","_onMove","_onUp","_addDragHandler","_onMapClick","_onKeyPress"],this),this._anchor=e&&e.anchor||"center",this._color=e&&e.color||"#3FB1CE",this._scale=e&&e.scale||1,this._draggable=e&&e.draggable||!1,this._clickTolerance=e&&e.clickTolerance||0,this._isDragging=!1,this._state="inactive",this._rotation=e&&e.rotation||0,this._rotationAlignment=e&&e.rotationAlignment||"auto",this._pitchAlignment=e&&e.pitchAlignment&&"auto"!==e.pitchAlignment?e.pitchAlignment:this._rotationAlignment,e&&e.element)this._element=e.element,this._offset=t.pointGeometry.convert(e&&e.offset||[0,0]);else {this._defaultMarker=!0,this._element=r.create("div"),this._element.setAttribute("aria-label","Map marker");const i=r.createNS("http://www.w3.org/2000/svg","svg"),o=41,a=27;i.setAttributeNS(null,"display","block"),i.setAttributeNS(null,"height",`${o}px`),i.setAttributeNS(null,"width",`${a}px`),i.setAttributeNS(null,"viewBox",`0 0 ${a} ${o}`);const s=r.createNS("http://www.w3.org/2000/svg","g");s.setAttributeNS(null,"stroke","none"),s.setAttributeNS(null,"stroke-width","1"),s.setAttributeNS(null,"fill","none"),s.setAttributeNS(null,"fill-rule","evenodd");const n=r.createNS("http://www.w3.org/2000/svg","g");n.setAttributeNS(null,"fill-rule","nonzero");const l=r.createNS("http://www.w3.org/2000/svg","g");l.setAttributeNS(null,"transform","translate(3.0, 29.0)"),l.setAttributeNS(null,"fill","#000000");const c=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}];for(const t of c){const e=r.createNS("http://www.w3.org/2000/svg","ellipse");e.setAttributeNS(null,"opacity","0.04"),e.setAttributeNS(null,"cx","10.5"),e.setAttributeNS(null,"cy","5.80029008"),e.setAttributeNS(null,"rx",t.rx),e.setAttributeNS(null,"ry",t.ry),l.appendChild(e);}const h=r.createNS("http://www.w3.org/2000/svg","g");h.setAttributeNS(null,"fill",this._color);const u=r.createNS("http://www.w3.org/2000/svg","path");u.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),h.appendChild(u);const d=r.createNS("http://www.w3.org/2000/svg","g");d.setAttributeNS(null,"opacity","0.25"),d.setAttributeNS(null,"fill","#000000");const m=r.createNS("http://www.w3.org/2000/svg","path");m.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),d.appendChild(m);const _=r.createNS("http://www.w3.org/2000/svg","g");_.setAttributeNS(null,"transform","translate(6.0, 7.0)"),_.setAttributeNS(null,"fill","#FFFFFF");const p=r.createNS("http://www.w3.org/2000/svg","g");p.setAttributeNS(null,"transform","translate(8.0, 8.0)");const f=r.createNS("http://www.w3.org/2000/svg","circle");f.setAttributeNS(null,"fill","#000000"),f.setAttributeNS(null,"opacity","0.25"),f.setAttributeNS(null,"cx","5.5"),f.setAttributeNS(null,"cy","5.5"),f.setAttributeNS(null,"r","5.4999962");const g=r.createNS("http://www.w3.org/2000/svg","circle");g.setAttributeNS(null,"fill","#FFFFFF"),g.setAttributeNS(null,"cx","5.5"),g.setAttributeNS(null,"cy","5.5"),g.setAttributeNS(null,"r","5.4999962"),p.appendChild(f),p.appendChild(g),n.appendChild(l),n.appendChild(h),n.appendChild(d),n.appendChild(_),n.appendChild(p),i.appendChild(n),i.setAttributeNS(null,"height",o*this._scale+"px"),i.setAttributeNS(null,"width",a*this._scale+"px"),this._element.appendChild(i),this._offset=t.pointGeometry.convert(e&&e.offset||[0,-14]);}this._element.classList.add("maplibregl-marker","mapboxgl-marker"),this._element.addEventListener("dragstart",(t=>{t.preventDefault();})),this._element.addEventListener("mousedown",(t=>{t.preventDefault();})),ca(this._element,this._anchor,"marker"),this._popup=null;}addTo(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this.setDraggable(this._draggable),this._update(),this._map.on("click",this._onMapClick),this}remove(){return this._opacityTimeout&&(clearTimeout(this._opacityTimeout),delete this._opacityTimeout),this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler),this._map.off("mouseup",this._onUp),this._map.off("touchend",this._onUp),this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),delete this._map),r.remove(this._element),this._popup&&this._popup.remove(),this}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this}getElement(){return this._element}setPopup(t){if(this._popup&&(this._popup.remove(),this._popup=null,this._element.removeEventListener("keypress",this._onKeyPress),this._originalTabIndex||this._element.removeAttribute("tabindex")),t){if(!("offset"in t.options)){const e=38.1,i=13.5,o=Math.sqrt(Math.pow(i,2)/2);t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-e],"bottom-left":[o,-1*(e-i+o)],"bottom-right":[-o,-1*(e-i+o)],left:[i,-1*(e-i)],right:[-i,-1*(e-i)]}:this._offset;}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat),this._originalTabIndex=this._element.getAttribute("tabindex"),this._originalTabIndex||this._element.setAttribute("tabindex","0"),this._element.addEventListener("keypress",this._onKeyPress);}return this}_onKeyPress(t){const e=t.code,i=t.charCode||t.keyCode;"Space"!==e&&"Enter"!==e&&32!==i&&13!==i||this.togglePopup();}_onMapClick(t){const e=t.originalEvent.target,i=this._element;this._popup&&(e===i||i.contains(e))&&this.togglePopup();}getPopup(){return this._popup}togglePopup(){const t=this._popup;return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this}_update(t){if(!this._map)return;this._map.transform.renderWorldCopies&&(this._lngLat=na(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset);let e="";"viewport"===this._rotationAlignment||"auto"===this._rotationAlignment?e=`rotateZ(${this._rotation}deg)`:"map"===this._rotationAlignment&&(e=`rotateZ(${this._rotation-this._map.getBearing()}deg)`);let i="";"viewport"===this._pitchAlignment||"auto"===this._pitchAlignment?i="rotateX(0deg)":"map"===this._pitchAlignment&&(i=`rotateX(${this._map.getPitch()}deg)`),t&&"moveend"!==t.type||(this._pos=this._pos.round()),r.setTransform(this._element,`${la[this._anchor]} translate(${this._pos.x}px, ${this._pos.y}px) ${i} ${e}`),this._map.style&&this._map.style.terrain&&!this._opacityTimeout&&(this._opacityTimeout=setTimeout((()=>{const t=this._map.unproject(this._pos),e=40075016.686*Math.abs(Math.cos(this._lngLat.lat*Math.PI/180))/Math.pow(2,this._map.transform.tileZoom+8);this._element.style.opacity=t.distanceTo(this._lngLat)>20*e?"0.2":"1.0",this._opacityTimeout=null;}),100));}getOffset(){return this._offset}setOffset(e){return this._offset=t.pointGeometry.convert(e),this._update(),this}_onMove(e){if(!this._isDragging){const t=this._clickTolerance||this._map._clickTolerance;this._isDragging=e.point.dist(this._pointerdownPos)>=t;}this._isDragging&&(this._pos=e.point.sub(this._positionDelta),this._lngLat=this._map.unproject(this._pos),this.setLngLat(this._lngLat),this._element.style.pointerEvents="none","pending"===this._state&&(this._state="active",this.fire(new t.Event("dragstart"))),this.fire(new t.Event("drag")));}_onUp(){this._element.style.pointerEvents="auto",this._positionDelta=null,this._pointerdownPos=null,this._isDragging=!1,this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),"active"===this._state&&this.fire(new t.Event("dragend")),this._state="inactive";}_addDragHandler(t){this._element.contains(t.originalEvent.target)&&(t.preventDefault(),this._positionDelta=t.point.sub(this._pos).add(this._offset),this._pointerdownPos=t.point,this._state="pending",this._map.on("mousemove",this._onMove),this._map.on("touchmove",this._onMove),this._map.once("mouseup",this._onUp),this._map.once("touchend",this._onUp));}setDraggable(t){return this._draggable=!!t,this._map&&(t?(this._map.on("mousedown",this._addDragHandler),this._map.on("touchstart",this._addDragHandler)):(this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler))),this}isDraggable(){return this._draggable}setRotation(t){return this._rotation=t||0,this._update(),this}getRotation(){return this._rotation}setRotationAlignment(t){return this._rotationAlignment=t||"auto",this._update(),this}getRotationAlignment(){return this._rotationAlignment}setPitchAlignment(t){return this._pitchAlignment=t&&"auto"!==t?t:this._rotationAlignment,this._update(),this}getPitchAlignment(){return this._pitchAlignment}}const ua={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showAccuracyCircle:!0,showUserLocation:!0};let da,ma=0,_a=!1;const pa={maxWidth:100,unit:"metric"};function fa(t,e,i){const o=i&&i.maxWidth||100,a=t._container.clientHeight/2,r=t.unproject([0,a]),s=t.unproject([o,a]),n=r.distanceTo(s);if(i&&"imperial"===i.unit){const i=3.2808*n;i>5280?ga(e,o,i/5280,t._getUIString("ScaleControl.Miles")):ga(e,o,i,t._getUIString("ScaleControl.Feet"));}else i&&"nautical"===i.unit?ga(e,o,n/1852,t._getUIString("ScaleControl.NauticalMiles")):n>=1e3?ga(e,o,n/1e3,t._getUIString("ScaleControl.Kilometers")):ga(e,o,n,t._getUIString("ScaleControl.Meters"));}function ga(t,e,i,o){const a=function(t){const e=Math.pow(10,`${Math.floor(t)}`.length-1);let i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:i>=1?1:function(t){const e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10));return Math.round(t*e)/e}(i),e*i}(i);t.style.width=e*(a/i)+"px",t.innerHTML=`${a}&nbsp;${o}`;}const xa={closeButton:!0,closeOnClick:!0,focusAfterOpen:!0,className:"",maxWidth:"240px"},va=["a[href]","[tabindex]:not([tabindex='-1'])","[contenteditable]:not([contenteditable='false'])","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].join(", ");function ya(e){if(e){if("number"==typeof e){const i=Math.round(Math.sqrt(.5*Math.pow(e,2)));return {center:new t.pointGeometry(0,0),top:new t.pointGeometry(0,e),"top-left":new t.pointGeometry(i,i),"top-right":new t.pointGeometry(-i,i),bottom:new t.pointGeometry(0,-e),"bottom-left":new t.pointGeometry(i,-i),"bottom-right":new t.pointGeometry(-i,-i),left:new t.pointGeometry(e,0),right:new t.pointGeometry(-e,0)}}if(e instanceof t.pointGeometry||Array.isArray(e)){const i=t.pointGeometry.convert(e);return {center:i,top:i,"top-left":i,"top-right":i,bottom:i,"bottom-left":i,"bottom-right":i,left:i,right:i}}return {center:t.pointGeometry.convert(e.center||[0,0]),top:t.pointGeometry.convert(e.top||[0,0]),"top-left":t.pointGeometry.convert(e["top-left"]||[0,0]),"top-right":t.pointGeometry.convert(e["top-right"]||[0,0]),bottom:t.pointGeometry.convert(e.bottom||[0,0]),"bottom-left":t.pointGeometry.convert(e["bottom-left"]||[0,0]),"bottom-right":t.pointGeometry.convert(e["bottom-right"]||[0,0]),left:t.pointGeometry.convert(e.left||[0,0]),right:t.pointGeometry.convert(e.right||[0,0])}}return ya(new t.pointGeometry(0,0))}const ba={supported:e,setRTLTextPlugin:t.setRTLTextPlugin,getRTLTextPluginStatus:t.getRTLTextPluginStatus,Map:class extends Qo{constructor(e){var i;if(t.PerformanceUtils.mark(t.PerformanceMarkers.create),null!=(e=t.extend({},aa,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than or equal to minZoom");if(null!=e.minPitch&&null!=e.maxPitch&&e.minPitch>e.maxPitch)throw new Error("maxPitch must be greater than or equal to minPitch");if(null!=e.minPitch&&e.minPitch<0)throw new Error("minPitch must be greater than or equal to 0");if(null!=e.maxPitch&&e.maxPitch>85)throw new Error("maxPitch must be less than or equal to 85");if(super(new io(e.minZoom,e.maxZoom,e.minPitch,e.maxPitch,e.renderWorldCopies),{bearingSnap:e.bearingSnap}),this._interactive=e.interactive,this._cooperativeGestures=e.cooperativeGestures,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._antialias=e.antialias,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossSourceCollisions=e.crossSourceCollisions,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new ia,this._controls=[],this._mapId=t.uniqueId(),this._locale=t.extend({},oa,e.locale),this._clickTolerance=e.clickTolerance,this._pixelRatio=null!==(i=e.pixelRatio)&&void 0!==i?i:devicePixelRatio,this._requestManager=new s(e.transformRequest),"string"==typeof e.container){if(this._container=document.getElementById(e.container),!this._container)throw new Error(`Container '${e.container}' not found.`)}else {if(!(e.container instanceof HTMLElement))throw new Error("Invalid type: 'container' must be a String or HTMLElement.");this._container=e.container;}if(e.maxBounds&&this.setMaxBounds(e.maxBounds),t.bindAll(["_onWindowOnline","_onWindowResize","_onMapScroll","_contextLost","_contextRestored"],this),this._setupContainer(),this._setupPainter(),void 0===this.painter)throw new Error("Failed to initialize WebGL.");this.on("move",(()=>this._update(!1))),this.on("moveend",(()=>this._update(!1))),this.on("zoom",(()=>this._update(!0))),this.on("terrain",(()=>{this.painter.terrainFacilitator.dirty=!0,this._update(!0);})),"undefined"!=typeof window&&(addEventListener("online",this._onWindowOnline,!1),addEventListener("resize",this._onWindowResize,!1),addEventListener("orientationchange",this._onWindowResize,!1)),this.handlers=new Yo(this,e),this._cooperativeGestures&&this._setupCooperativeGestures(),this._hash=e.hash&&new oo("string"==typeof e.hash&&e.hash||void 0).addTo(this),this._hash&&this._hash._onHashChange()||(this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),e.bounds&&(this.resize(),this.fitBounds(e.bounds,t.extend({},e.fitBoundsOptions,{duration:0})))),this.resize(),this._localIdeographFontFamily=e.localIdeographFontFamily,e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new ta({customAttribution:e.customAttribution})),e.maplibreLogo&&this.addControl(new ea,e.logoPosition),this.on("style.load",(()=>{this.transform.unmodified&&this.jumpTo(this.style.stylesheet);})),this.on("data",(e=>{this._update("style"===e.dataType),this.fire(new t.Event(`${e.dataType}data`,e));})),this.on("dataloading",(e=>{this.fire(new t.Event(`${e.dataType}dataloading`,e));})),this.on("dataabort",(e=>{this.fire(new t.Event("sourcedataabort",e));}));}_getMapId(){return this._mapId}addControl(e,i){if(void 0===i&&(i=e.getDefaultPosition?e.getDefaultPosition():"top-right"),!e||!e.onAdd)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.addControl(). Argument must be a control with onAdd and onRemove methods.")));const o=e.onAdd(this);this._controls.push(e);const a=this._controlPositions[i];return -1!==i.indexOf("bottom")?a.insertBefore(o,a.firstChild):a.appendChild(o),this}removeControl(e){if(!e||!e.onRemove)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.removeControl(). Argument must be a control with onAdd and onRemove methods.")));const i=this._controls.indexOf(e);return i>-1&&this._controls.splice(i,1),e.onRemove(this),this}hasControl(t){return this._controls.indexOf(t)>-1}calculateCameraOptionsFromTo(t,e,i,o){return null==o&&this.style.terrain&&(o=this.transform.getElevation(i,this.style.terrain)),super.calculateCameraOptionsFromTo(t,e,i,o)}resize(e){const i=this._containerDimensions(),o=i[0],a=i[1];this._resizeCanvas(o,a,this.getPixelRatio()),this.transform.resize(o,a),this.painter.resize(o,a,this.getPixelRatio());const r=!this._moving;return r&&(this.stop(),this.fire(new t.Event("movestart",e)).fire(new t.Event("move",e))),this.fire(new t.Event("resize",e)),r&&this.fire(new t.Event("moveend",e)),this}getPixelRatio(){return this._pixelRatio}setPixelRatio(t){const[e,i]=this._containerDimensions();this._pixelRatio=t,this._resizeCanvas(e,i,t),this.painter.resize(e,i,t);}getBounds(){return this.transform.getBounds()}getMaxBounds(){return this.transform.getMaxBounds()}setMaxBounds(e){return this.transform.setMaxBounds(t.LngLatBounds.convert(e)),this._update()}setMinZoom(t){if((t=null==t?-2:t)>=-2&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this;throw new Error("minZoom must be between -2 and the current maxZoom, inclusive")}getMinZoom(){return this.transform.minZoom}setMaxZoom(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this;throw new Error("maxZoom must be greater than the current minZoom")}getMaxZoom(){return this.transform.maxZoom}setMinPitch(t){if((t=null==t?0:t)<0)throw new Error("minPitch must be greater than or equal to 0");if(t>=0&&t<=this.transform.maxPitch)return this.transform.minPitch=t,this._update(),this.getPitch()<t&&this.setPitch(t),this;throw new Error("minPitch must be between 0 and the current maxPitch, inclusive")}getMinPitch(){return this.transform.minPitch}setMaxPitch(t){if((t=null==t?60:t)>85)throw new Error("maxPitch must be less than or equal to 85");if(t>=this.transform.minPitch)return this.transform.maxPitch=t,this._update(),this.getPitch()>t&&this.setPitch(t),this;throw new Error("maxPitch must be greater than the current minPitch")}getMaxPitch(){return this.transform.maxPitch}getRenderWorldCopies(){return this.transform.renderWorldCopies}setRenderWorldCopies(t){return this.transform.renderWorldCopies=t,this._update()}project(e){return this.transform.locationPoint(t.LngLat.convert(e),this.style&&this.style.terrain)}unproject(e){return this.transform.pointLocation(t.pointGeometry.convert(e),this.style&&this.style.terrain)}isMoving(){return this._moving||this.handlers.isMoving()}isZooming(){return this._zooming||this.handlers.isZooming()}isRotating(){return this._rotating||this.handlers.isRotating()}_createDelegatedListener(t,e,i){if("mouseenter"===t||"mouseover"===t){let o=!1;const a=a=>{const r=this.getLayer(e)?this.queryRenderedFeatures(a.point,{layers:[e]}):[];r.length?o||(o=!0,i.call(this,new mo(t,this,a.originalEvent,{features:r}))):o=!1;};return {layer:e,listener:i,delegates:{mousemove:a,mouseout:()=>{o=!1;}}}}if("mouseleave"===t||"mouseout"===t){let o=!1;const a=a=>{(this.getLayer(e)?this.queryRenderedFeatures(a.point,{layers:[e]}):[]).length?o=!0:o&&(o=!1,i.call(this,new mo(t,this,a.originalEvent)));},r=e=>{o&&(o=!1,i.call(this,new mo(t,this,e.originalEvent)));};return {layer:e,listener:i,delegates:{mousemove:a,mouseout:r}}}{const o=t=>{const o=this.getLayer(e)?this.queryRenderedFeatures(t.point,{layers:[e]}):[];o.length&&(t.features=o,i.call(this,t),delete t.features);};return {layer:e,listener:i,delegates:{[t]:o}}}}on(t,e,i){if(void 0===i)return super.on(t,e);const o=this._createDelegatedListener(t,e,i);this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[t]=this._delegatedListeners[t]||[],this._delegatedListeners[t].push(o);for(const t in o.delegates)this.on(t,o.delegates[t]);return this}once(t,e,i){if(void 0===i)return super.once(t,e);const o=this._createDelegatedListener(t,e,i);for(const t in o.delegates)this.once(t,o.delegates[t]);return this}off(t,e,i){return void 0===i?super.off(t,e):(this._delegatedListeners&&this._delegatedListeners[t]&&(o=>{const a=this._delegatedListeners[t];for(let t=0;t<a.length;t++){const o=a[t];if(o.layer===e&&o.listener===i){for(const t in o.delegates)this.off(t,o.delegates[t]);return a.splice(t,1),this}}})(),this)}queryRenderedFeatures(e,i){if(!this.style)return [];let o;if(void 0!==i||void 0===e||e instanceof t.pointGeometry||Array.isArray(e)||(i=e,e=void 0),i=i||{},(e=e||[[0,0],[this.transform.width,this.transform.height]])instanceof t.pointGeometry||"number"==typeof e[0])o=[t.pointGeometry.convert(e)];else {const i=t.pointGeometry.convert(e[0]),a=t.pointGeometry.convert(e[1]);o=[i,new t.pointGeometry(a.x,i.y),a,new t.pointGeometry(i.x,a.y),i];}return this.style.queryRenderedFeatures(o,i,this.transform)}querySourceFeatures(t,e){return this.style.querySourceFeatures(t,e)}setStyle(e,i){return !1!==(i=t.extend({},{localIdeographFontFamily:this._localIdeographFontFamily},i)).diff&&i.localIdeographFontFamily===this._localIdeographFontFamily&&this.style&&e?(this._diffStyle(e,i),this):(this._localIdeographFontFamily=i.localIdeographFontFamily,this._updateStyle(e,i))}setTransformRequest(t){return this._requestManager.setTransformRequest(t),this}_getUIString(t){const e=this._locale[t];if(null==e)throw new Error(`Missing UI string '${t}'`);return e}_updateStyle(t,e){return this.style&&(this.style.setEventedParent(null),this.style._remove()),t?(this.style=new ee(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t):this.style.loadJSON(t),this):(delete this.style,this)}_lazyInitEmptyStyle(){this.style||(this.style=new ee(this,{}),this.style.setEventedParent(this,{style:this.style}),this.style.loadEmpty());}_diffStyle(e,i){if("string"==typeof e){const o=this._requestManager.transformRequest(e,t.ResourceType.Style);t.getJSON(o,((e,o)=>{e?this.fire(new t.ErrorEvent(e)):o&&this._updateDiff(o,i);}));}else "object"==typeof e&&this._updateDiff(e,i);}_updateDiff(e,i){try{this.style.setState(e)&&this._update(!0);}catch(o){t.warnOnce(`Unable to perform style diff: ${o.message||o.error||o}.  Rebuilding the style from scratch.`),this._updateStyle(e,i);}}getStyle(){if(this.style)return this.style.serialize()}isStyleLoaded(){return this.style?this.style.loaded():t.warnOnce("There is no style added to the map.")}addSource(t,e){return this._lazyInitEmptyStyle(),this.style.addSource(t,e),this._update(!0)}isSourceLoaded(e){const i=this.style&&this.style.sourceCaches[e];if(void 0!==i)return i.loaded();this.fire(new t.ErrorEvent(new Error(`There is no source with ID '${e}'`)));}setTerrain(t){return this.style.setTerrain(t),this}getTerrain(){return this.style.terrain&&this.style.terrain.options}areTilesLoaded(){const t=this.style&&this.style.sourceCaches;for(const e in t){const i=t[e]._tiles;for(const t in i){const e=i[t];if("loaded"!==e.state&&"errored"!==e.state)return !1}}return !0}addSourceType(t,e,i){return this._lazyInitEmptyStyle(),this.style.addSourceType(t,e,i)}removeSource(t){return this.style.removeSource(t),this._update(!0)}getSource(t){return this.style.getSource(t)}addImage(e,i,{pixelRatio:o=1,sdf:a=!1,stretchX:r,stretchY:s,content:n}={}){if(this._lazyInitEmptyStyle(),i instanceof HTMLImageElement||t.isImageBitmap(i)){const{width:l,height:c,data:h}=t.exported.getImageData(i);this.style.addImage(e,{data:new t.RGBAImage({width:l,height:c},h),pixelRatio:o,stretchX:r,stretchY:s,content:n,sdf:a,version:0});}else {if(void 0===i.width||void 0===i.height)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")));{const{width:l,height:c,data:h}=i,u=i;this.style.addImage(e,{data:new t.RGBAImage({width:l,height:c},new Uint8Array(h)),pixelRatio:o,stretchX:r,stretchY:s,content:n,sdf:a,version:0,userImage:u}),u.onAdd&&u.onAdd(this,e);}}}updateImage(e,i){const o=this.style.getImage(e);if(!o)return this.fire(new t.ErrorEvent(new Error("The map has no image with that id. If you are adding a new image use `map.addImage(...)` instead.")));const a=i instanceof HTMLImageElement||t.isImageBitmap(i)?t.exported.getImageData(i):i,{width:r,height:s,data:n}=a;if(void 0===r||void 0===s)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.updateImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")));if(r!==o.data.width||s!==o.data.height)return this.fire(new t.ErrorEvent(new Error("The width and height of the updated image must be that same as the previous version of the image")));const l=!(i instanceof HTMLImageElement||t.isImageBitmap(i));o.data.replace(n,l),this.style.updateImage(e,o);}hasImage(e){return e?!!this.style.getImage(e):(this.fire(new t.ErrorEvent(new Error("Missing required image id"))),!1)}removeImage(t){this.style.removeImage(t);}loadImage(e,i){t.getImage(this._requestManager.transformRequest(e,t.ResourceType.Image),i);}listImages(){return this.style.listImages()}addLayer(t,e){return this._lazyInitEmptyStyle(),this.style.addLayer(t,e),this._update(!0)}moveLayer(t,e){return this.style.moveLayer(t,e),this._update(!0)}removeLayer(t){return this.style.removeLayer(t),this._update(!0)}getLayer(t){return this.style.getLayer(t)}setLayerZoomRange(t,e,i){return this.style.setLayerZoomRange(t,e,i),this._update(!0)}setFilter(t,e,i={}){return this.style.setFilter(t,e,i),this._update(!0)}getFilter(t){return this.style.getFilter(t)}setPaintProperty(t,e,i,o={}){return this.style.setPaintProperty(t,e,i,o),this._update(!0)}getPaintProperty(t,e){return this.style.getPaintProperty(t,e)}setLayoutProperty(t,e,i,o={}){return this.style.setLayoutProperty(t,e,i,o),this._update(!0)}getLayoutProperty(t,e){return this.style.getLayoutProperty(t,e)}setLight(t,e={}){return this._lazyInitEmptyStyle(),this.style.setLight(t,e),this._update(!0)}getLight(){return this.style.getLight()}setFeatureState(t,e){return this.style.setFeatureState(t,e),this._update()}removeFeatureState(t,e){return this.style.removeFeatureState(t,e),this._update()}getFeatureState(t){return this.style.getFeatureState(t)}getContainer(){return this._container}getCanvasContainer(){return this._canvasContainer}getCanvas(){return this._canvas}_containerDimensions(){let t=0,e=0;return this._container&&(t=this._container.clientWidth||400,e=this._container.clientHeight||300),[t,e]}_setupContainer(){const t=this._container;t.classList.add("maplibregl-map","mapboxgl-map");const e=this._canvasContainer=r.create("div","maplibregl-canvas-container mapboxgl-canvas-container",t);this._interactive&&e.classList.add("maplibregl-interactive","mapboxgl-interactive"),this._canvas=r.create("canvas","maplibregl-canvas mapboxgl-canvas",e),this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map"),this._canvas.setAttribute("role","region");const i=this._containerDimensions();this._resizeCanvas(i[0],i[1],this.getPixelRatio());const o=this._controlContainer=r.create("div","maplibregl-control-container mapboxgl-control-container",t),a=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach((t=>{a[t]=r.create("div",`maplibregl-ctrl-${t} mapboxgl-ctrl-${t}`,o);})),this._container.addEventListener("scroll",this._onMapScroll,!1);}_setupCooperativeGestures(){const t=this._container;this._metaPress=!1,this._cooperativeGesturesScreen=r.create("div","maplibregl-cooperative-gesture-screen",t);let e="Control",i="boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.windowsHelpText?this._cooperativeGestures.windowsHelpText:"Use Ctrl + scroll to zoom the map";0===navigator.platform.indexOf("Mac")&&(i="boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.macHelpText?this._cooperativeGestures.macHelpText:"Use ⌘ + scroll to zoom the map",e="Meta"),this._cooperativeGesturesScreen.innerHTML=`\n            <div class="maplibregl-desktop-message">${i}</div>\n            <div class="maplibregl-mobile-message">${"boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.mobileHelpText?this._cooperativeGestures.mobileHelpText:"Use two fingers to move the map"}</div>\n        `,document.addEventListener("keydown",(t=>{t.key===e&&(this._metaPress=!0);})),document.addEventListener("keyup",(t=>{t.key===e&&(this._metaPress=!1);})),this._canvasContainer.addEventListener("wheel",(t=>{this._onCooperativeGesture(t,this._metaPress,1);}),!1),this._canvasContainer.classList.remove("mapboxgl-touch-drag-pan","maplibregl-touch-drag-pan");}_resizeCanvas(t,e,i){this._canvas.width=i*t,this._canvas.height=i*e,this._canvas.style.width=`${t}px`,this._canvas.style.height=`${e}px`;}_setupPainter(){const i=t.extend({},e.webGLContextAttributes,{failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer,antialias:this._antialias||!1}),o=this._canvas.getContext("webgl",i)||this._canvas.getContext("experimental-webgl",i);o?(this.painter=new Ji(o,this.transform),t.exported$1.testSupport(o)):this.fire(new t.ErrorEvent(new Error("Failed to initialize WebGL")));}_contextLost(e){e.preventDefault(),this._frame&&(this._frame.cancel(),this._frame=null),this.fire(new t.Event("webglcontextlost",{originalEvent:e}));}_contextRestored(e){this._setupPainter(),this.resize(),this._update(),this.fire(new t.Event("webglcontextrestored",{originalEvent:e}));}_onMapScroll(t){if(t.target===this._container)return this._container.scrollTop=0,this._container.scrollLeft=0,!1}_onCooperativeGesture(t,e,i){return !e&&i<2&&(this._cooperativeGesturesScreen.classList.add("maplibregl-show"),setTimeout((()=>{this._cooperativeGesturesScreen.classList.remove("maplibregl-show");}),100)),!1}loaded(){return !this._styleDirty&&!this._sourcesDirty&&!!this.style&&this.style.loaded()}_update(t){return this.style?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this.triggerRepaint(),this):this}_requestRenderFrame(t){return this._update(),this._renderTaskQueue.add(t)}_cancelRenderFrame(t){this._renderTaskQueue.remove(t);}_render(e){let i,o=0;const a=this.painter.context.extTimerQuery;if(this.listens("gpu-timing-frame")&&(i=a.createQueryEXT(),a.beginQueryEXT(a.TIME_ELAPSED_EXT,i),o=t.exported.now()),this.painter.context.setDirty(),this.painter.setBaseState(),this._renderTaskQueue.run(e),this._removed)return;let r=!1;if(this.style&&this._styleDirty){this._styleDirty=!1;const e=this.transform.zoom,i=t.exported.now();this.style.zoomHistory.update(e,i);const o=new t.EvaluationParameters(e,{now:i,fadeDuration:this._fadeDuration,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),a=o.crossFadingFactor();1===a&&a===this._crossFadingFactor||(r=!0,this._crossFadingFactor=a),this.style.update(o);}if(this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this.style.terrain&&this.style.terrain.sourceCache.update(this.transform,this.style.terrain),this.transform.updateElevation(this.style.terrain),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,this._fadeDuration,this._crossSourceCollisions),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),moving:this.isMoving(),fadeDuration:this._fadeDuration,showPadding:this.showPadding,gpuTiming:!!this.listens("gpu-timing-layer")}),this.fire(new t.Event("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,t.PerformanceUtils.mark(t.PerformanceMarkers.load),this.fire(new t.Event("load"))),this.style&&(this.style.hasTransitions()||r)&&(this._styleDirty=!0),this.style&&!this._placementDirty&&this.style._releaseSymbolFadeTiles(),this.listens("gpu-timing-frame")){const e=t.exported.now()-o;a.endQueryEXT(a.TIME_ELAPSED_EXT,i),setTimeout((()=>{const o=a.getQueryObjectEXT(i,a.QUERY_RESULT_EXT)/1e6;a.deleteQueryEXT(i),this.fire(new t.Event("gpu-timing-frame",{cpuTime:e,gpuTime:o}));}),50);}if(this.listens("gpu-timing-layer")){const e=this.painter.collectGpuTimers();setTimeout((()=>{const i=this.painter.queryGpuTimers(e);this.fire(new t.Event("gpu-timing-layer",{layerTimes:i}));}),50);}const s=this._sourcesDirty||this._styleDirty||this._placementDirty;return s||this._repaint?this.triggerRepaint():!this.isMoving()&&this.loaded()&&this.fire(new t.Event("idle")),!this._loaded||this._fullyLoaded||s||(this._fullyLoaded=!0,t.PerformanceUtils.mark(t.PerformanceMarkers.fullLoad)),this}redraw(){return this.style&&(this._frame&&(this._frame.cancel(),this._frame=null),this._render(0)),this}remove(){this._hash&&this._hash.remove();for(const t of this._controls)t.onRemove(this);this._controls=[],this._frame&&(this._frame.cancel(),this._frame=null),this._renderTaskQueue.clear(),this.painter.destroy(),this.handlers.destroy(),delete this.handlers,this.setStyle(null),"undefined"!=typeof window&&(removeEventListener("resize",this._onWindowResize,!1),removeEventListener("orientationchange",this._onWindowResize,!1),removeEventListener("online",this._onWindowOnline,!1));const e=this.painter.context.gl.getExtension("WEBGL_lose_context");e&&e.loseContext(),this._canvas.removeEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.removeEventListener("webglcontextlost",this._contextLost,!1),r.remove(this._canvasContainer),r.remove(this._controlContainer),this._cooperativeGestures&&r.remove(this._cooperativeGesturesScreen),this._container.classList.remove("maplibregl-map","mapboxgl-map"),t.PerformanceUtils.clearMetrics(),this._removed=!0,this.fire(new t.Event("remove"));}triggerRepaint(){this.style&&!this._frame&&(this._frame=t.exported.frame((e=>{t.PerformanceUtils.frame(e),this._frame=null,this._render(e);})));}_onWindowOnline(){this._update();}_onWindowResize(t){this._trackResize&&this.resize({originalEvent:t})._update();}get showTileBoundaries(){return !!this._showTileBoundaries}set showTileBoundaries(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update());}get showPadding(){return !!this._showPadding}set showPadding(t){this._showPadding!==t&&(this._showPadding=t,this._update());}get showCollisionBoxes(){return !!this._showCollisionBoxes}set showCollisionBoxes(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update());}get showOverdrawInspector(){return !!this._showOverdrawInspector}set showOverdrawInspector(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update());}get repaint(){return !!this._repaint}set repaint(t){this._repaint!==t&&(this._repaint=t,this.triggerRepaint());}get vertices(){return !!this._vertices}set vertices(t){this._vertices=t,this._update();}_setCacheLimits(e,i){t.setCacheLimits(e,i);}get version(){return "2.4.0"}},NavigationControl:class{constructor(e){this.options=t.extend({},ra,e),this._container=r.create("div","maplibregl-ctrl maplibregl-ctrl-group mapboxgl-ctrl mapboxgl-ctrl-group"),this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this.options.showZoom&&(t.bindAll(["_setButtonTitle","_updateZoomButtons"],this),this._zoomInButton=this._createButton("maplibregl-ctrl-zoom-in mapboxgl-ctrl-zoom-in",(t=>this._map.zoomIn({},{originalEvent:t}))),r.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._zoomInButton).setAttribute("aria-hidden","true"),this._zoomOutButton=this._createButton("maplibregl-ctrl-zoom-out mapboxgl-ctrl-zoom-out",(t=>this._map.zoomOut({},{originalEvent:t}))),r.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._zoomOutButton).setAttribute("aria-hidden","true")),this.options.showCompass&&(t.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("maplibregl-ctrl-compass mapboxgl-ctrl-compass",(t=>{this.options.visualizePitch?this._map.resetNorthPitch({},{originalEvent:t}):this._map.resetNorth({},{originalEvent:t});})),this._compassIcon=r.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._compass),this._compassIcon.setAttribute("aria-hidden","true"));}_updateZoomButtons(){const t=this._map.getZoom(),e=t===this._map.getMaxZoom(),i=t===this._map.getMinZoom();this._zoomInButton.disabled=e,this._zoomOutButton.disabled=i,this._zoomInButton.setAttribute("aria-disabled",e.toString()),this._zoomOutButton.setAttribute("aria-disabled",i.toString());}_rotateCompassArrow(){const t=this.options.visualizePitch?`scale(${1/Math.pow(Math.cos(this._map.transform.pitch*(Math.PI/180)),.5)}) rotateX(${this._map.transform.pitch}deg) rotateZ(${this._map.transform.angle*(180/Math.PI)}deg)`:`rotate(${this._map.transform.angle*(180/Math.PI)}deg)`;this._compassIcon.style.transform=t;}onAdd(t){return this._map=t,this.options.showZoom&&(this._setButtonTitle(this._zoomInButton,"ZoomIn"),this._setButtonTitle(this._zoomOutButton,"ZoomOut"),this._map.on("zoom",this._updateZoomButtons),this._updateZoomButtons()),this.options.showCompass&&(this._setButtonTitle(this._compass,"ResetBearing"),this.options.visualizePitch&&this._map.on("pitch",this._rotateCompassArrow),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new sa(this._map,this._compass,this.options.visualizePitch)),this._container}onRemove(){r.remove(this._container),this.options.showZoom&&this._map.off("zoom",this._updateZoomButtons),this.options.showCompass&&(this.options.visualizePitch&&this._map.off("pitch",this._rotateCompassArrow),this._map.off("rotate",this._rotateCompassArrow),this._handler.off(),delete this._handler),delete this._map;}_createButton(t,e){const i=r.create("button",t,this._container);return i.type="button",i.addEventListener("click",e),i}_setButtonTitle(t,e){const i=this._map._getUIString(`NavigationControl.${e}`);t.title=i,t.setAttribute("aria-label",i);}},GeolocateControl:class extends t.Evented{constructor(e){super(),this.options=t.extend({},ua,e),t.bindAll(["_onSuccess","_onError","_onZoom","_finish","_setupUI","_updateCamera","_updateMarker"],this);}onAdd(t){var e;return this._map=t,this._container=r.create("div","maplibregl-ctrl maplibregl-ctrl-group mapboxgl-ctrl mapboxgl-ctrl-group"),e=this._setupUI,void 0!==da?e(da):void 0!==window.navigator.permissions?window.navigator.permissions.query({name:"geolocation"}).then((t=>{da="denied"!==t.state,e(da);})):(da=!!window.navigator.geolocation,e(da)),this._container}onRemove(){void 0!==this._geolocationWatchID&&(window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker&&this._userLocationDotMarker.remove(),this.options.showAccuracyCircle&&this._accuracyCircleMarker&&this._accuracyCircleMarker.remove(),r.remove(this._container),this._map.off("zoom",this._onZoom),this._map=void 0,ma=0,_a=!1;}_isOutOfMapMaxBounds(t){const e=this._map.getMaxBounds(),i=t.coords;return e&&(i.longitude<e.getWest()||i.longitude>e.getEast()||i.latitude<e.getSouth()||i.latitude>e.getNorth())}_setErrorState(){switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error");break;case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting");break;case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting");break;case"ACTIVE_ERROR":break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}}_onSuccess(e){if(this._map){if(this._isOutOfMapMaxBounds(e))return this._setErrorState(),this.fire(new t.Event("outofmaxbounds",e)),this._updateMarker(),void this._finish();if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active");break;case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background");break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("maplibregl-user-location-dot-stale","mapboxgl-user-location-dot-stale"),this.fire(new t.Event("geolocate",e)),this._finish();}}_updateCamera(e){const i=new t.LngLat(e.coords.longitude,e.coords.latitude),o=e.coords.accuracy,a=this._map.getBearing(),r=t.extend({bearing:a},this.options.fitBoundsOptions);this._map.fitBounds(i.toBounds(o),r,{geolocateSource:!0});}_updateMarker(e){if(e){const i=new t.LngLat(e.coords.longitude,e.coords.latitude);this._accuracyCircleMarker.setLngLat(i).addTo(this._map),this._userLocationDotMarker.setLngLat(i).addTo(this._map),this._accuracy=e.coords.accuracy,this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius();}else this._userLocationDotMarker.remove(),this._accuracyCircleMarker.remove();}_updateCircleRadius(){const t=this._map._container.clientHeight/2,e=this._map.unproject([0,t]),i=this._map.unproject([1,t]),o=e.distanceTo(i),a=Math.ceil(2*this._accuracy/o);this._circleElement.style.width=`${a}px`,this._circleElement.style.height=`${a}px`;}_onZoom(){this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius();}_onError(e){if(this._map){if(this.options.trackUserLocation)if(1===e.code){this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.disabled=!0;const t=this._map._getUIString("GeolocateControl.LocationNotAvailable");this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t),void 0!==this._geolocationWatchID&&this._clearWatch();}else {if(3===e.code&&_a)return;this._setErrorState();}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("maplibregl-user-location-dot-stale","mapboxgl-user-location-dot-stale"),this.fire(new t.Event("error",e)),this._finish();}}_finish(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0;}_setupUI(e){if(this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this._geolocateButton=r.create("button","maplibregl-ctrl-geolocate mapboxgl-ctrl-geolocate",this._container),r.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._geolocateButton).setAttribute("aria-hidden","true"),this._geolocateButton.type="button",!1===e){t.warnOnce("Geolocation support is not available so the GeolocateControl will be disabled.");const e=this._map._getUIString("GeolocateControl.LocationNotAvailable");this._geolocateButton.disabled=!0,this._geolocateButton.title=e,this._geolocateButton.setAttribute("aria-label",e);}else {const t=this._map._getUIString("GeolocateControl.FindMyLocation");this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t);}this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=r.create("div","maplibregl-user-location-dot mapboxgl-user-location-dot"),this._userLocationDotMarker=new ha(this._dotElement),this._circleElement=r.create("div","maplibregl-user-location-accuracy-circle mapboxgl-user-location-accuracy-circle"),this._accuracyCircleMarker=new ha({element:this._circleElement,pitchAlignment:"map"}),this.options.trackUserLocation&&(this._watchState="OFF"),this._map.on("zoom",this._onZoom)),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",(e=>{e.geolocateSource||"ACTIVE_LOCK"!==this._watchState||e.originalEvent&&"resize"===e.originalEvent.type||(this._watchState="BACKGROUND",this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this.fire(new t.Event("trackuserlocationend")));}));}trigger(){if(!this._setup)return t.warnOnce("Geolocate control triggered before added to a map"),!1;if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.Event("trackuserlocationstart"));break;case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":ma--,_a=!1,this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this.fire(new t.Event("trackuserlocationend"));break;case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.Event("trackuserlocationstart"));break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active");break;case"ACTIVE_LOCK":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active");break;case"OFF":break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}if("OFF"===this._watchState&&void 0!==this._geolocationWatchID)this._clearWatch();else if(void 0===this._geolocationWatchID){let t;this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),ma++,ma>1?(t={maximumAge:6e5,timeout:0},_a=!0):(t=this.options.positionOptions,_a=!1),this._geolocationWatchID=window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,t);}}else window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4);return !0}_clearWatch(){window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null);}},AttributionControl:ta,LogoControl:ea,ScaleControl:class{constructor(e){this.options=t.extend({},pa,e),t.bindAll(["_onMove","setUnit"],this);}getDefaultPosition(){return "bottom-left"}_onMove(){fa(this._map,this._container,this.options);}onAdd(t){return this._map=t,this._container=r.create("div","maplibregl-ctrl maplibregl-ctrl-scale mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container}onRemove(){r.remove(this._container),this._map.off("move",this._onMove),this._map=void 0;}setUnit(t){this.options.unit=t,fa(this._map,this._container,this.options);}},FullscreenControl:class{constructor(e){this._fullscreen=!1,e&&e.container&&(e.container instanceof HTMLElement?this._container=e.container:t.warnOnce("Full screen control 'container' must be a DOM element.")),t.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in document&&(this._fullscreenchange="MSFullscreenChange");}onAdd(e){return this._map=e,this._container||(this._container=this._map.getContainer()),this._controlContainer=r.create("div","maplibregl-ctrl maplibregl-ctrl-group mapboxgl-ctrl mapboxgl-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._controlContainer.style.display="none",t.warnOnce("This device does not support fullscreen mode.")),this._controlContainer}onRemove(){r.remove(this._controlContainer),this._map=null,window.document.removeEventListener(this._fullscreenchange,this._changeIcon);}_checkFullscreenSupport(){return !!(document.fullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled)}_setupUI(){const t=this._fullscreenButton=r.create("button","maplibregl-ctrl-fullscreen mapboxgl-ctrl-fullscreen",this._controlContainer);r.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",t).setAttribute("aria-hidden","true"),t.type="button",this._updateTitle(),this._fullscreenButton.addEventListener("click",this._onClickFullscreen),window.document.addEventListener(this._fullscreenchange,this._changeIcon);}_updateTitle(){const t=this._getTitle();this._fullscreenButton.setAttribute("aria-label",t),this._fullscreenButton.title=t;}_getTitle(){return this._map._getUIString(this._isFullscreen()?"FullscreenControl.Exit":"FullscreenControl.Enter")}_isFullscreen(){return this._fullscreen}_changeIcon(){(window.document.fullscreenElement||window.document.mozFullScreenElement||window.document.webkitFullscreenElement||window.document.msFullscreenElement)===this._container!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle("maplibregl-ctrl-shrink"),this._fullscreenButton.classList.toggle("mapboxgl-ctrl-shrink"),this._fullscreenButton.classList.toggle("maplibregl-ctrl-fullscreen"),this._fullscreenButton.classList.toggle("mapboxgl-ctrl-fullscreen"),this._updateTitle());}_onClickFullscreen(){this._isFullscreen()?window.document.exitFullscreen?window.document.exitFullscreen():window.document.mozCancelFullScreen?window.document.mozCancelFullScreen():window.document.msExitFullscreen?window.document.msExitFullscreen():window.document.webkitCancelFullScreen&&window.document.webkitCancelFullScreen():this._container.requestFullscreen?this._container.requestFullscreen():this._container.mozRequestFullScreen?this._container.mozRequestFullScreen():this._container.msRequestFullscreen?this._container.msRequestFullscreen():this._container.webkitRequestFullscreen&&this._container.webkitRequestFullscreen();}},TerrainControl:class{constructor(e){this.options=e,t.bindAll(["_toggleTerrain","_updateTerrainIcon"],this);}onAdd(t){return this._map=t,this._container=r.create("div","maplibregl-ctrl maplibregl-ctrl-group mapboxgl-ctrl mapboxgl-ctrl-group"),this._terrainButton=r.create("button","maplibregl-ctrl-terrain mapboxgl-ctrl-terrain",this._container),r.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._terrainButton).setAttribute("aria-hidden","true"),this._terrainButton.type="button",this._terrainButton.addEventListener("click",this._toggleTerrain),this._updateTerrainIcon(),this._map.on("terrain",this._updateTerrainIcon),this._container}onRemove(){r.remove(this._container),this._map.off("terrain",this._updateTerrainIcon),this._map=void 0;}_toggleTerrain(){this._map.getTerrain()?this._map.setTerrain(null):this._map.setTerrain(this.options),this._updateTerrainIcon();}_updateTerrainIcon(){this._terrainButton.classList.remove("maplibregl-ctrl-terrain","mapboxgl-ctrl-terrain"),this._terrainButton.classList.remove("maplibregl-ctrl-terrain-enabled","mapboxgl-ctrl-terrain-enabled"),this._map.style.terrain?(this._terrainButton.classList.add("maplibregl-ctrl-terrain-enabled","mapboxgl-ctrl-terrain-enabled"),this._terrainButton.title=this._map._getUIString("TerrainControl.disableTerrain")):(this._terrainButton.classList.add("maplibregl-ctrl-terrain","mapboxgl-ctrl-terrain"),this._terrainButton.title=this._map._getUIString("TerrainControl.enableTerrain"));}},Popup:class extends t.Evented{constructor(e){super(),this.options=t.extend(Object.create(xa),e),t.bindAll(["_update","_onClose","remove","_onMouseMove","_onMouseUp","_onDrag"],this);}addTo(e){return this._map&&this.remove(),this._map=e,this.options.closeOnClick&&this._map.on("click",this._onClose),this.options.closeOnMove&&this._map.on("move",this._onClose),this._map.on("remove",this.remove),this._update(),this._focusFirstElement(),this._trackPointer?(this._map.on("mousemove",this._onMouseMove),this._map.on("mouseup",this._onMouseUp),this._container&&this._container.classList.add("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer","mapboxgl-track-pointer")):this._map.on("move",this._update),this.fire(new t.Event("open")),this}isOpen(){return !!this._map}remove(){return this._content&&r.remove(this._content),this._container&&(r.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("move",this._onClose),this._map.off("click",this._onClose),this._map.off("remove",this.remove),this._map.off("mousemove",this._onMouseMove),this._map.off("mouseup",this._onMouseUp),this._map.off("drag",this._onDrag),delete this._map),this.fire(new t.Event("close")),this}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._trackPointer=!1,this._update(),this._map&&(this._map.on("move",this._update),this._map.off("mousemove",this._onMouseMove),this._container&&this._container.classList.remove("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.remove("maplibregl-track-pointer","mapboxgl-track-pointer")),this}trackPointer(){return this._trackPointer=!0,this._pos=null,this._update(),this._map&&(this._map.off("move",this._update),this._map.on("mousemove",this._onMouseMove),this._map.on("drag",this._onDrag),this._container&&this._container.classList.add("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer","mapboxgl-track-pointer")),this}getElement(){return this._container}setText(t){return this.setDOMContent(document.createTextNode(t))}setHTML(t){const e=document.createDocumentFragment(),i=document.createElement("body");let o;for(i.innerHTML=t;o=i.firstChild,o;)e.appendChild(o);return this.setDOMContent(e)}getMaxWidth(){return this._container&&this._container.style.maxWidth}setMaxWidth(t){return this.options.maxWidth=t,this._update(),this}setDOMContent(t){if(this._content)for(;this._content.hasChildNodes();)this._content.firstChild&&this._content.removeChild(this._content.firstChild);else this._content=r.create("div","maplibregl-popup-content mapboxgl-popup-content",this._container);return this._content.appendChild(t),this._createCloseButton(),this._update(),this._focusFirstElement(),this}addClassName(t){this._container&&this._container.classList.add(t);}removeClassName(t){this._container&&this._container.classList.remove(t);}setOffset(t){return this.options.offset=t,this._update(),this}toggleClassName(t){if(this._container)return this._container.classList.toggle(t)}_createCloseButton(){this.options.closeButton&&(this._closeButton=r.create("button","maplibregl-popup-close-button mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClose));}_onMouseUp(t){this._update(t.point);}_onMouseMove(t){this._update(t.point);}_onDrag(t){this._update(t.point);}_update(t){if(!this._map||!this._lngLat&&!this._trackPointer||!this._content)return;if(this._container||(this._container=r.create("div","maplibregl-popup mapboxgl-popup",this._map.getContainer()),this._tip=r.create("div","maplibregl-popup-tip mapboxgl-popup-tip",this._container),this._container.appendChild(this._content),this.options.className&&this.options.className.split(" ").forEach((t=>this._container.classList.add(t))),this._trackPointer&&this._container.classList.add("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer")),this.options.maxWidth&&this._container.style.maxWidth!==this.options.maxWidth&&(this._container.style.maxWidth=this.options.maxWidth),this._map.transform.renderWorldCopies&&!this._trackPointer&&(this._lngLat=na(this._lngLat,this._pos,this._map.transform)),this._trackPointer&&!t)return;const e=this._pos=this._trackPointer&&t?t:this._map.project(this._lngLat);let i=this.options.anchor;const o=ya(this.options.offset);if(!i){const t=this._container.offsetWidth,a=this._container.offsetHeight;let r;r=e.y+o.bottom.y<a?["top"]:e.y>this._map.transform.height-a?["bottom"]:[],e.x<t/2?r.push("left"):e.x>this._map.transform.width-t/2&&r.push("right"),i=0===r.length?"bottom":r.join("-");}const a=e.add(o[i]).round();r.setTransform(this._container,`${la[i]} translate(${a.x}px,${a.y}px)`),ca(this._container,i,"popup");}_focusFirstElement(){if(!this.options.focusAfterOpen||!this._container)return;const t=this._container.querySelector(va);t&&t.focus();}_onClose(){this.remove();}},Marker:ha,Style:ee,LngLat:t.LngLat,LngLatBounds:t.LngLatBounds,Point:t.pointGeometry,MercatorCoordinate:t.MercatorCoordinate,Evented:t.Evented,AJAXError:t.AJAXError,config:t.config,CanvasSource:P,GeoJSONSource:C,ImageSource:D,RasterDEMTileSource:I,RasterTileSource:T,VectorTileSource:w,VideoSource:z,prewarm:function(){j().acquire(G);},clearPrewarmedResources:function(){const t=q;t&&(t.isPreloaded()&&1===t.numActive()?(t.release(G),q=null):console.warn("Could not clear WebWorkers since there are active Map instances that still reference it. The pre-warmed WebWorker pool can only be cleared when all map instances have been removed with map.remove()"));},get version(){return "2.4.0"},get workerCount(){return Z.workerCount},set workerCount(t){Z.workerCount=t;},get maxParallelImageRequests(){return t.config.MAX_PARALLEL_IMAGE_REQUESTS},set maxParallelImageRequests(e){t.config.MAX_PARALLEL_IMAGE_REQUESTS=e;},clearStorage(e){t.clearTileCache(e);},workerUrl:"",addProtocol(e,i){t.config.REGISTERED_PROTOCOLS[e]=i;},removeProtocol(e){delete t.config.REGISTERED_PROTOCOLS[e];}};return Jo.extend(ba,{isSafari:t.isSafari,getPerformanceMetrics:t.PerformanceUtils.getPerformanceMetrics}),ba}));

		//

		var maplibregl$1 = maplibregl;

		return maplibregl$1;

		}));
		
	} (maplibreGl));

	var version = 8;
	var name = "GSI Japan + OpenStreetMap based style for Geolonia";
	var sources = {
		oceanus: {
			type: "vector",
			url: "https://tileserver.geolonia.com/oceanus/tiles.json?key=YOUR-API-KEY"
		},
		"gsi-japan": {
			type: "vector",
			url: "https://tileserver.geolonia.com/gsi_experimental_bvmap/tiles.json?key=YOUR-API-KEY",
			minzoom: 5
		},
		"geolonia-water": {
			type: "vector",
			url: "https://tileserver.geolonia.com/water/tiles.json?key=YOUR-API-KEY"
		},
		"geolonia-gsi-custom": {
			type: "vector",
			url: "https://tileserver.geolonia.com/gsi-extra-v2/tiles.json?key=YOUR-API-KEY"
		},
		takamatsu: {
			type: "vector",
			url: "https://tileserver.geolonia.com/takamatsu_main_v0/tiles.json?key=YOUR-API-KEY"
		}
	};
	var sprite = "https://geoloniamaps.github.io/gsi/gsi";
	var glyphs = "https://glyphs.geolonia.com/{fontstack}/{range}.pbf";
	var layers = [
		{
			id: "background",
			type: "background",
			paint: {
				"background-color": {
					stops: [
						[
							1,
							"#f2f5d6"
						],
						[
							5,
							"#dae2c1"
						],
						[
							8,
							"#EDE6DD"
						],
						[
							10,
							"#e6e5e3"
						],
						[
							16,
							"#f5f5f5"
						]
					]
				}
			}
		},
		{
			id: "landcover-grass",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landcover",
			filter: [
				"==",
				"class",
				"grass"
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#daeca9",
				"fill-opacity": 1
			}
		},
		{
			id: "landcover-wood-blur",
			type: "line",
			source: "geolonia-gsi-custom",
			"source-layer": "landcover",
			filter: [
				"==",
				"class",
				"wood"
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"line-color": "#bce398",
				"line-width": 5,
				"line-translate": {
					stops: [
						[
							14,
							[
								0,
								0
							]
						],
						[
							17,
							[
								0,
								2
							]
						]
					]
				},
				"line-opacity": {
					stops: [
						[
							14,
							0
						],
						[
							17,
							0.4
						]
					]
				},
				"line-blur": 10
			}
		},
		{
			id: "landcover-wood",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landcover",
			filter: [
				"==",
				"class",
				"wood"
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#bce398",
				"fill-antialias": {
					base: 1,
					stops: [
						[
							0,
							false
						],
						[
							9,
							true
						]
					]
				}
			}
		},
		{
			id: "landcover-grass-park",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "park",
			filter: [
				"==",
				"class",
				"public_park"
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#d8e8c8",
				"fill-opacity": 0.8
			}
		},
		{
			id: "geolonia-water-ocean",
			type: "fill",
			source: "geolonia-water",
			"source-layer": "water",
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#65cbf9"
			}
		},
		{
			id: "water-blur",
			type: "line",
			source: "geolonia-water",
			"source-layer": "water",
			minzoom: 17,
			layout: {
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#62cffc",
				"line-width": {
					stops: [
						[
							17,
							3
						],
						[
							20,
							5
						]
					]
				},
				"line-translate": {
					stops: [
						[
							17,
							[
								1,
								1
							]
						],
						[
							20,
							[
								-2,
								-2
							]
						]
					]
				},
				"line-blur": 2
			}
		},
		{
			id: "water-blur-gsi",
			type: "line",
			source: "gsi-japan",
			"source-layer": "river",
			minzoom: 17,
			layout: {
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#62cffc",
				"line-width": {
					stops: [
						[
							17,
							3
						],
						[
							20,
							5
						]
					]
				},
				"line-translate": {
					stops: [
						[
							17,
							[
								1,
								1
							]
						],
						[
							20,
							[
								-2,
								-2
							]
						]
					]
				},
				"line-blur": 2
			}
		},
		{
			id: "water-gsi",
			type: "line",
			source: "gsi-japan",
			"source-layer": "river",
			minzoom: 16,
			filter: [
				"all",
				[
					"!=",
					"ftCode",
					5322
				]
			],
			layout: {
				"line-join": "round",
				"line-round-limit": 0.5,
				visibility: "visible"
			},
			paint: {
				"line-color": "#65cbf9",
				"line-width": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					16,
					1,
					20,
					5
				]
			}
		},
		{
			id: "water",
			type: "fill",
			source: "gsi-japan",
			"source-layer": "waterarea",
			filter: [
				"all"
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#65cbf9"
			}
		},
		{
			id: "oc-ocean",
			type: "fill",
			source: "oceanus",
			"source-layer": "oc-water",
			maxzoom: 10,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"ocean"
				]
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-opacity": {
					stops: [
						[
							9,
							1
						],
						[
							10,
							0
						]
					]
				},
				"fill-color": [
					"match",
					[
						"get",
						"depth"
					],
					200,
					"#5bc2f8",
					1000,
					"#52baf7",
					2000,
					"#4ab2f7",
					3000,
					"#40a8f6",
					4000,
					"#36a0f5",
					5000,
					"#319bf6",
					6000,
					"#2a94f5",
					7000,
					"#238df4",
					8000,
					"#1c88f4",
					9000,
					"#147ff3",
					10000,
					"#0e7af2",
					"#0673f2"
				]
			}
		},
		{
			id: "oc-glacier",
			type: "fill",
			source: "oceanus",
			"source-layer": "oc-glacier",
			maxzoom: 8,
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "rgba(241, 248, 254, 1)"
			}
		},
		{
			id: "oc-landuse-commercial-ja",
			type: "fill",
			source: "oceanus",
			"source-layer": "oc-landuse",
			minzoom: 5,
			maxzoom: 8,
			filter: [
				"all",
				[
					"==",
					[
						"geometry-type"
					],
					"Polygon"
				],
				[
					"==",
					[
						"get",
						"class"
					],
					"commercial"
				],
				[
					"has",
					"jflag"
				]
			],
			paint: {
				"fill-color": "hsla(0, 60%, 87%, 0.23)"
			}
		},
		{
			id: "oc-landuse-commercial",
			type: "fill",
			source: "oceanus",
			"source-layer": "oc-landuse",
			minzoom: 5,
			filter: [
				"all",
				[
					"==",
					[
						"geometry-type"
					],
					"Polygon"
				],
				[
					"==",
					[
						"get",
						"class"
					],
					"commercial"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			paint: {
				"fill-color": "hsla(0, 60%, 87%, 0.23)"
			}
		},
		{
			id: "oc-forest",
			type: "fill",
			source: "oceanus",
			"source-layer": "oc-forest",
			minzoom: 0,
			maxzoom: 9,
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": {
					stops: [
						[
							5,
							"#a5d47b"
						],
						[
							8,
							"#bce398"
						]
					]
				}
			}
		},
		{
			id: "oc-waterway-river-ja",
			type: "line",
			source: "oceanus",
			"source-layer": "oc-waterway",
			minzoom: 4,
			maxzoom: 8,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"river"
				],
				[
					"!=",
					[
						"get",
						"brunnel"
					],
					"tunnel"
				],
				[
					"has",
					"jflag"
				]
			],
			layout: {
				"line-cap": "round"
			},
			paint: {
				"line-color": "#a0c8f0",
				"line-width": [
					"interpolate",
					[
						"exponential",
						1.2
					],
					[
						"zoom"
					],
					10,
					0.8,
					20,
					6
				]
			}
		},
		{
			id: "oc-waterway-river",
			type: "line",
			source: "oceanus",
			"source-layer": "oc-waterway",
			minzoom: 4,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"river"
				],
				[
					"!=",
					[
						"get",
						"brunnel"
					],
					"tunnel"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			layout: {
				"line-cap": "round"
			},
			paint: {
				"line-color": "#a0c8f0",
				"line-width": [
					"interpolate",
					[
						"exponential",
						1.2
					],
					[
						"zoom"
					],
					10,
					0.8,
					20,
					6
				]
			}
		},
		{
			id: "oc-waterway-name-ja",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-waterway",
			minzoom: 6,
			maxzoom: 8,
			filter: [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"has",
					"name"
				],
				[
					"has",
					"jflag"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "line",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "oc-waterway-name",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-waterway",
			minzoom: 6,
			filter: [
				"all",
				[
					"has",
					"name"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "line",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "oc-lake-blur",
			type: "line",
			source: "oceanus",
			"source-layer": "oc-water",
			minzoom: 17,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"lakes"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			layout: {
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#62cffc",
				"line-width": {
					stops: [
						[
							17,
							3
						],
						[
							20,
							5
						]
					]
				},
				"line-translate": {
					stops: [
						[
							17,
							[
								1,
								1
							]
						],
						[
							20,
							[
								-2,
								-2
							]
						]
					]
				},
				"line-blur": 2
			}
		},
		{
			id: "oc-lake-ja",
			type: "fill",
			source: "oceanus",
			"source-layer": "oc-water",
			minzoom: 4,
			maxzoom: 8,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"lakes"
				],
				[
					"has",
					"jflag"
				]
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#65cbf9"
			}
		},
		{
			id: "oc-lake",
			type: "fill",
			source: "oceanus",
			"source-layer": "oc-water",
			minzoom: 4,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"lakes"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#65cbf9"
			}
		},
		{
			id: "oc-boundary-land-level-1-ja",
			type: "line",
			source: "oceanus",
			"source-layer": "oc-boundary",
			minzoom: 4,
			maxzoom: 6,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"admin_level"
					],
					1
				],
				[
					"has",
					"jflag"
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": {
					stops: [
						[
							4,
							"rgba(102,102,102,0.7)"
						],
						[
							7,
							"rgba(136,136,136,0.7)"
						]
					]
				},
				"line-dasharray": [
					3,
					1,
					1,
					1
				],
				"line-width": {
					stops: [
						[
							4,
							0.5
						],
						[
							7,
							1.8
						]
					]
				}
			}
		},
		{
			id: "oc-boundary-land-level-1",
			type: "line",
			source: "oceanus",
			"source-layer": "oc-boundary",
			minzoom: 4,
			maxzoom: 8,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"admin_level"
					],
					1
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "#9e9cab",
				"line-dasharray": [
					3,
					1,
					1,
					1
				],
				"line-width": 1
			}
		},
		{
			id: "oc-boundary-land-level-0",
			type: "line",
			source: "oceanus",
			"source-layer": "oc-boundary",
			filter: [
				"==",
				[
					"get",
					"admin_level"
				],
				0
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "#9e9cab",
				"line-width": 1,
				"line-blur": 0.4
			}
		},
		{
			id: "oc-water-name-ocean",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-water_name",
			filter: [
				"all",
				[
					"==",
					[
						"geometry-type"
					],
					"Point"
				],
				[
					"==",
					[
						"get",
						"class"
					],
					"ocean"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "point",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "oc-water-name-other",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-water",
			minzoom: 6,
			filter: [
				"all",
				[
					"==",
					[
						"geometry-type"
					],
					"Polygon"
				],
				[
					"has",
					"name"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					0,
					10,
					6,
					14
				],
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "point",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2,
				visibility: "visible"
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "oc-motorway",
			type: "line",
			source: "oceanus",
			"source-layer": "oc-road",
			minzoom: 6,
			maxzoom: 6,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"highway"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					true
				]
			],
			layout: {
				"line-cap": "round"
			},
			paint: {
				"line-color": "#00A54E",
				"line-width": 2
			}
		},
		{
			id: "nt-water-name-ocean",
			type: "symbol",
			source: "oceanus",
			"source-layer": "nt-water-name",
			minzoom: 8,
			filter: [
				"==",
				[
					"get",
					"class"
				],
				"ocean"
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "point",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "nt-water-name-river",
			type: "symbol",
			source: "oceanus",
			"source-layer": "nt-water-name",
			minzoom: 13,
			filter: [
				"==",
				[
					"get",
					"class"
				],
				"river"
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "point",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "landuse-commercial",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landuse",
			filter: [
				"all",
				[
					"==",
					"$type",
					"Polygon"
				],
				[
					"==",
					"class",
					"commercial"
				]
			],
			paint: {
				"fill-color": "hsla(0, 60%, 87%, 0.23)"
			}
		},
		{
			id: "landuse-industrial",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landuse",
			filter: [
				"all",
				[
					"==",
					"$type",
					"Polygon"
				],
				[
					"==",
					"class",
					"industrial"
				]
			],
			paint: {
				"fill-color": "hsla(49, 100%, 88%, 0.34)"
			}
		},
		{
			id: "park",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "park",
			filter: [
				"all",
				[
					"==",
					"$type",
					"Polygon"
				],
				[
					"!=",
					"class",
					"national_park"
				]
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "rgba(102, 170, 68, 1)",
				"fill-opacity": {
					stops: [
						[
							7,
							0
						],
						[
							9,
							0.2
						]
					]
				}
			}
		},
		{
			id: "landuse-cemetery",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landuse",
			filter: [
				"==",
				"class",
				"cemetery"
			],
			paint: {
				"fill-color": "#e0e4dd"
			}
		},
		{
			id: "landuse-hospital",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landuse",
			filter: [
				"==",
				"class",
				"hospital"
			],
			paint: {
				"fill-color": "#fde"
			}
		},
		{
			id: "landuse-school",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landuse",
			filter: [
				"==",
				"class",
				"school"
			],
			paint: {
				"fill-color": "#f0e8f8"
			}
		},
		{
			id: "landuse-railway",
			type: "fill",
			source: "geolonia-gsi-custom",
			"source-layer": "landuse",
			filter: [
				"==",
				"class",
				"railway"
			],
			paint: {
				"fill-color": "hsla(30, 19%, 90%, 0.4)"
			}
		},
		{
			id: "waterway_tunnel",
			type: "line",
			source: "geolonia-gsi-custom",
			"source-layer": "waterway",
			minzoom: 14,
			filter: [
				"all",
				[
					"in",
					"class",
					"river",
					"stream",
					"canal"
				],
				[
					"==",
					"brunnel",
					"tunnel"
				]
			],
			layout: {
				"line-cap": "round"
			},
			paint: {
				"line-color": "#65cbf9",
				"line-width": {
					base: 1.3,
					stops: [
						[
							13,
							0.5
						],
						[
							20,
							6
						]
					]
				},
				"line-dasharray": [
					2,
					4
				]
			}
		},
		{
			id: "waterway-other",
			type: "line",
			source: "geolonia-gsi-custom",
			"source-layer": "waterway",
			filter: [
				"!in",
				"class",
				"canal",
				"river",
				"stream"
			],
			layout: {
				"line-cap": "round"
			},
			paint: {
				"line-color": "#65cbf9",
				"line-width": {
					base: 1.3,
					stops: [
						[
							13,
							0.5
						],
						[
							20,
							2
						]
					]
				}
			}
		},
		{
			id: "waterway-stream-canal",
			type: "line",
			source: "geolonia-gsi-custom",
			"source-layer": "waterway",
			filter: [
				"all",
				[
					"in",
					"class",
					"canal",
					"stream"
				],
				[
					"!=",
					"brunnel",
					"tunnel"
				]
			],
			layout: {
				"line-cap": "round"
			},
			paint: {
				"line-color": "#65cbf9",
				"line-width": {
					base: 1.3,
					stops: [
						[
							13,
							0.5
						],
						[
							20,
							6
						]
					]
				}
			}
		},
		{
			id: "waterway-name",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "waterway",
			minzoom: 13,
			filter: [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"has",
					"name"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "line",
				"text-letter-spacing": 0.2,
				"symbol-spacing": 350
			},
			paint: {
				"text-color": "#65cbf9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "water-name-lakeline",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "water_name",
			filter: [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "line",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "water-name-ocean",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "water_name",
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"class",
					"ocean"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "point",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "water-name-other",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "water_name",
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"!in",
					"class",
					"ocean"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				],
				[
					"!=",
					"subclass",
					"moat"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": {
					stops: [
						[
							0,
							10
						],
						[
							6,
							14
						]
					]
				},
				"text-field": "{name}",
				"text-max-width": 5,
				"text-rotation-alignment": "map",
				"symbol-placement": "point",
				"symbol-spacing": 350,
				"text-letter-spacing": 0.2,
				visibility: "visible"
			},
			paint: {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			}
		},
		{
			id: "highway-minor-bridge-casing-blur",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					2702,
					2703
				],
				[
					"!=",
					"motorway",
					1
				],
				[
					"!=",
					"rdCtg",
					0
				],
				[
					"!=",
					"rdCtg",
					1
				],
				[
					"!=",
					"rdCtg",
					2
				],
				[
					"!=",
					"rdCtg",
					3
				]
			],
			paint: {
				"line-color": "#000000",
				"line-width": {
					base: 1.2,
					stops: [
						[
							15,
							1.2
						],
						[
							20,
							15
						]
					]
				},
				"line-translate": {
					stops: [
						[
							14,
							[
								0,
								0
							]
						],
						[
							17,
							[
								5,
								2
							]
						]
					]
				},
				"line-opacity": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					14,
					0.2,
					17,
					0.8,
					18,
					0
				],
				"line-blur": {
					stops: [
						[
							14,
							20
						],
						[
							17,
							25
						]
					]
				}
			}
		},
		{
			id: "highway-secondary-bridge-casing-blur",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"!=",
						"rnkWidth",
						0
					],
					[
						"!=",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round",
				"line-cap": "round"
			},
			paint: {
				"line-color": "#000000",
				"line-translate": {
					stops: [
						[
							14,
							[
								0,
								0
							]
						],
						[
							17,
							[
								5,
								2
							]
						]
					]
				},
				"line-opacity": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					14,
					0.2,
					17,
					0.8,
					18,
					0
				],
				"line-blur": {
					stops: [
						[
							14,
							20
						],
						[
							17,
							25
						]
					]
				},
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-primary-bridge-casing-blur",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round",
				"line-cap": "round"
			},
			paint: {
				"line-color": "#000000",
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				],
				"line-translate": {
					stops: [
						[
							14,
							[
								0,
								0
							]
						],
						[
							17,
							[
								5,
								2
							]
						]
					]
				},
				"line-opacity": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					14,
					0.2,
					17,
					0.8,
					18,
					0
				],
				"line-blur": {
					stops: [
						[
							14,
							20
						],
						[
							17,
							25
						]
					]
				}
			}
		},
		{
			id: "highway-motorway-bridge-casing-blur",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 6,
			filter: [
				"any",
				[
					"all",
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"any",
						[
							"==",
							"motorway",
							1
						],
						[
							"==",
							"rdCtg",
							3
						]
					]
				],
				[
					"==",
					"ftCode",
					52703
				]
			],
			layout: {
				"line-join": "round",
				"line-cap": "round"
			},
			paint: {
				"line-color": "#000000",
				"line-translate": {
					stops: [
						[
							14,
							[
								0,
								0
							]
						],
						[
							17,
							[
								5,
								2
							]
						]
					]
				},
				"line-opacity": {
					stops: [
						[
							14,
							0.2
						],
						[
							17,
							0.6
						]
					]
				},
				"line-blur": {
					stops: [
						[
							14,
							20
						],
						[
							17,
							30
						]
					]
				},
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-motorway-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 4,
			filter: [
				"any",
				[
					"all",
					[
						">=",
						"ftCode",
						2700
					],
					[
						"<",
						"ftCode",
						2800
					],
					[
						"!=",
						"ftCode",
						2702
					],
					[
						"!=",
						"ftCode",
						2703
					],
					[
						"!=",
						"ftCode",
						2704
					],
					[
						"any",
						[
							"==",
							"motorway",
							1
						],
						[
							"==",
							"rdCtg",
							3
						]
					]
				],
				[
					"==",
					"ftCode",
					52703
				]
			],
			layout: {
				"line-cap": "butt",
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#4ed19e",
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				],
				"line-opacity": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					8,
					0.6,
					11,
					1
				]
			}
		},
		{
			id: "highway-minor",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			filter: [
				"all",
				[
					">=",
					"ftCode",
					2700
				],
				[
					"<",
					"ftCode",
					2800
				],
				[
					"!=",
					"ftCode",
					2704
				]
			],
			layout: {
				"line-cap": "round",
				"line-join": "round"
			},
			paint: {
				"line-color": [
					"step",
					[
						"zoom"
					],
					"#ffffff",
					16,
					"#f5f5f5"
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					13.5,
					0,
					14,
					1.2,
					16,
					2.2,
					20,
					16
				]
			}
		},
		{
			id: "highway-secondary",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"any",
						[
							"==",
							"ftCode",
							2701
						]
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"!=",
						"rdCtg",
						3
					],
					[
						"any",
						[
							"in",
							"rdCtg",
							0,
							1,
							2
						],
						[
							"==",
							"rnkWidth",
							4
						]
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-cap": "round",
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": [
					"step",
					[
						"zoom"
					],
					"#ffffff",
					16,
					"#f5f5f5"
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.5,
					12,
					0.8,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "highway-primary",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"rnkWidth",
						4
					],
					[
						"any",
						[
							"==",
							"ftCode",
							2701
						]
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"!=",
						"rdCtg",
						3
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2,
						6
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-cap": "round",
				"line-join": "round"
			},
			paint: {
				"line-color": [
					"step",
					[
						"zoom"
					],
					"#ffffff",
					16,
					"#f5f5f5"
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.5,
					12,
					0.8,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "road-outline",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 16,
			filter: [
				"all",
				[
					">=",
					"ftCode",
					2200
				],
				[
					"<",
					"ftCode",
					2700
				]
			],
			layout: {
				"line-cap": "round",
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#DDDDDD",
				"line-width": 2
			}
		},
		{
			id: "highway-motorway",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 6,
			filter: [
				"any",
				[
					"all",
					[
						">=",
						"ftCode",
						2700
					],
					[
						"<",
						"ftCode",
						2800
					],
					[
						"!=",
						"ftCode",
						2702
					],
					[
						"!=",
						"ftCode",
						2703
					],
					[
						"!=",
						"ftCode",
						2704
					],
					[
						"any",
						[
							"==",
							"motorway",
							1
						],
						[
							"==",
							"rdCtg",
							3
						]
					]
				],
				[
					"==",
					"ftCode",
					52703
				]
			],
			layout: {
				"line-cap": "round",
				"line-join": "round"
			},
			paint: {
				"line-color": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					6,
					"#00A54E",
					13,
					"#3dcc80"
				],
				"line-width": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					6,
					2,
					8,
					2,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "building",
			type: "fill",
			source: "gsi-japan",
			"source-layer": "building",
			minzoom: 15,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Polygon"
				],
				[
					"!in",
					"ftCode",
					3112,
					3111
				]
			],
			paint: {
				"fill-color": "rgba(236, 236, 236, 0.9)",
				"fill-outline-color": "#ccc",
				"fill-antialias": true
			}
		},
		{
			id: "building-nowall",
			type: "fill",
			source: "gsi-japan",
			"source-layer": "building",
			minzoom: 15,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Polygon"
				],
				[
					"in",
					"ftCode",
					3111,
					3112
				]
			],
			paint: {
				"fill-color": "#e2dcd4",
				"fill-outline-color": "#d7cfc2",
				"fill-opacity": 0.6,
				"fill-antialias": true
			}
		},
		{
			id: "structurea-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "structurea",
			minzoom: 15,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Polygon"
				]
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"line-color": "#DEDEDE",
				"line-width": {
					stops: [
						[
							15,
							1
						],
						[
							18,
							3
						]
					]
				}
			}
		},
		{
			id: "structurea",
			type: "fill",
			source: "gsi-japan",
			"source-layer": "structurea",
			minzoom: 15,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Polygon"
				]
			],
			layout: {
				visibility: "visible"
			},
			paint: {
				"fill-color": "#FAFAFA"
			}
		},
		{
			id: "highway-secondary-tunnel-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 4,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"ftCode",
						2704
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"!=",
						"rdCtg",
						3
					],
					[
						"any",
						[
							"in",
							"rdCtg",
							0,
							1,
							2
						],
						[
							"==",
							"rnkWidth",
							4
						]
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "#9C9DA2",
				"line-dasharray": [
					0.5,
					0.25
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-secondary-tunnel",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 4,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"ftCode",
						2704
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"!=",
						"rdCtg",
						3
					],
					[
						"any",
						[
							"in",
							"rdCtg",
							0,
							1,
							2
						],
						[
							"==",
							"rnkWidth",
							4
						]
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "#D8D8D8",
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.5,
					12,
					0.8,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "highway-primary-tunnel-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2704
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "#9C9DA2",
				"line-dasharray": [
					0.5,
					0.25
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-primary-tunnel",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2704
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#D8D8D8",
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.5,
					12,
					0.8,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "highway-motorway-tunnel-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 6,
			filter: [
				"all",
				[
					"==",
					"ftCode",
					2704
				],
				[
					"any",
					[
						"==",
						"motorway",
						1
					],
					[
						"==",
						"rdCtg",
						3
					]
				]
			],
			layout: {
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#9C9DA2",
				"line-dasharray": [
					0.5,
					0.25
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-motorway-tunnel",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 6,
			filter: [
				"all",
				[
					"==",
					"ftCode",
					2704
				],
				[
					"any",
					[
						"==",
						"motorway",
						1
					],
					[
						"==",
						"rdCtg",
						3
					]
				]
			],
			layout: {
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": {
					stops: [
						[
							8,
							"#00A54E"
						],
						[
							13,
							"#D8D8D8"
						]
					]
				},
				"line-width": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					6,
					2,
					8,
					2,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "highway-minor-bridge-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					2702,
					2703
				],
				[
					"!=",
					"motorway",
					1
				],
				[
					"!=",
					"rdCtg",
					0
				],
				[
					"!=",
					"rdCtg",
					1
				],
				[
					"!=",
					"rdCtg",
					2
				],
				[
					"!=",
					"rdCtg",
					3
				]
			],
			paint: {
				"line-color": "#f8f4f0",
				"line-width": {
					base: 1.2,
					stops: [
						[
							15,
							1.2
						],
						[
							20,
							18
						]
					]
				}
			}
		},
		{
			id: "highway-minor-bridge",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					2702,
					2703
				],
				[
					"!=",
					"motorway",
					1
				],
				[
					"!=",
					"rdCtg",
					0
				],
				[
					"!=",
					"rdCtg",
					1
				],
				[
					"!=",
					"rdCtg",
					2
				],
				[
					"!=",
					"rdCtg",
					3
				]
			],
			paint: {
				"line-color": [
					"step",
					[
						"zoom"
					],
					"#ffffff",
					16,
					"#f5f5f5"
				],
				"line-width": {
					base: 1.2,
					stops: [
						[
							15,
							1.2
						],
						[
							20,
							4
						]
					]
				},
				"line-dasharray": [
					1.5,
					0.75
				]
			}
		},
		{
			id: "highway-secondary-bridge-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"!=",
						"rnkWidth",
						0
					],
					[
						"!=",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "rgba(222, 222, 222, 1)",
				"line-opacity": 1,
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-secondary-bridge",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"!=",
						"rnkWidth",
						0
					],
					[
						"!=",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": [
					"step",
					[
						"zoom"
					],
					"#ffffff",
					16,
					"#f5f5f5"
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.5,
					12,
					0.8,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "highway-primary-bridge-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "rgba(222, 222, 222, 1)",
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-primary-bridge",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 7,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"rnkWidth",
						4
					],
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"!=",
						"motorway",
						1
					],
					[
						"in",
						"rdCtg",
						0,
						1,
						2
					]
				],
				[
					"all",
					[
						">=",
						"ftCode",
						52700
					],
					[
						"<",
						"ftCode",
						52800
					],
					[
						"!=",
						"ftCode",
						52703
					]
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": [
					"step",
					[
						"zoom"
					],
					"#ffffff",
					16,
					"#f5f5f5"
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.5,
					12,
					0.8,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "highway-motorway-bridge-casing",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 6,
			filter: [
				"any",
				[
					"all",
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"any",
						[
							"==",
							"motorway",
							1
						],
						[
							"==",
							"rdCtg",
							3
						]
					]
				],
				[
					"==",
					"ftCode",
					52703
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "#4ed19e",
				"line-opacity": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					8,
					0,
					11,
					1
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.6,
					12,
					0.9,
					14,
					4,
					16,
					14,
					18,
					24,
					19,
					72,
					20,
					166
				]
			}
		},
		{
			id: "highway-motorway-bridge",
			type: "line",
			source: "gsi-japan",
			"source-layer": "road",
			minzoom: 6,
			filter: [
				"any",
				[
					"all",
					[
						"in",
						"ftCode",
						2702,
						2703
					],
					[
						"any",
						[
							"==",
							"motorway",
							1
						],
						[
							"==",
							"rdCtg",
							3
						]
					]
				],
				[
					"==",
					"ftCode",
					52703
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					6,
					"#00A54E",
					13,
					"#3dcc80"
				],
				"line-width": [
					"interpolate",
					[
						"exponential",
						0.9
					],
					[
						"zoom"
					],
					8,
					0,
					9,
					0.5,
					12,
					0.8,
					14,
					3,
					16,
					10,
					18,
					20,
					19,
					68,
					20,
					160
				]
			}
		},
		{
			id: "railway-subway",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 13,
			filter: [
				"any",
				[
					"==",
					"rtCode10",
					"2"
				],
				[
					"all",
					[
						">=",
						"rtCode",
						"40203000000"
					],
					[
						"<",
						"rtCode",
						"40204000000"
					]
				],
				[
					"all",
					[
						">=",
						"rtCode1",
						"40203000000"
					],
					[
						"<",
						"rtCode1",
						"40204000000"
					]
				]
			],
			paint: {
				"line-color": "#9dabdd",
				"line-opacity": 1,
				"line-width": 1.5
			}
		},
		{
			id: "railway-tunnel",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"in",
					"railState",
					100,
					200,
					300,
					2,
					3,
					4
				]
			],
			paint: {
				"line-color": "#908150",
				"line-opacity": 0.6,
				"line-width": {
					stops: [
						[
							10,
							1
						],
						[
							22,
							3
						]
					]
				},
				"line-dasharray": [
					3,
					2
				]
			}
		},
		{
			id: "railway-minor",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 14,
			filter: [
				"all",
				[
					"in",
					"railState",
					0,
					200,
					400,
					4,
					5,
					6,
					7
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"all",
					[
						">=",
						"rtCode1",
						"40217000000"
					],
					[
						"<",
						"rtCode1",
						"40218000000"
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-width": {
					stops: [
						[
							10,
							1
						],
						[
							22,
							2
						]
					]
				}
			}
		},
		{
			id: "railway-minor-hatching",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 14,
			filter: [
				"all",
				[
					"in",
					"railState",
					0,
					200,
					400,
					4,
					5,
					6,
					7
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"all",
					[
						">=",
						"rtCode1",
						"40217000000"
					],
					[
						"<",
						"rtCode1",
						"40218000000"
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-dasharray": [
					0.2,
					1.5
				],
				"line-width": {
					stops: [
						[
							10,
							4
						],
						[
							22,
							8
						]
					]
				}
			}
		},
		{
			id: "railway-secondary",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"in",
					"railState",
					0,
					200,
					400,
					4,
					5,
					6,
					7
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40202000000"
						],
						[
							"<",
							"rtCode",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40202000000"
						],
						[
							"<",
							"rtCode1",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40205000000"
						],
						[
							"<",
							"rtCode",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40205000000"
						],
						[
							"<",
							"rtCode1",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40204000000"
						],
						[
							"<",
							"rtCode",
							"40205000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40217000000"
						],
						[
							"<",
							"rtCode",
							"40218000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40204000000"
						],
						[
							"<",
							"rtCode1",
							"40205000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-width": {
					stops: [
						[
							10,
							1
						],
						[
							22,
							2
						]
					]
				}
			}
		},
		{
			id: "railway-secondary-hatching",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"in",
					"railState",
					0,
					200,
					400,
					4,
					5,
					6,
					7
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40202000000"
						],
						[
							"<",
							"rtCode",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40202000000"
						],
						[
							"<",
							"rtCode1",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40205000000"
						],
						[
							"<",
							"rtCode",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40205000000"
						],
						[
							"<",
							"rtCode1",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40204000000"
						],
						[
							"<",
							"rtCode",
							"40205000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40217000000"
						],
						[
							"<",
							"rtCode",
							"40218000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40204000000"
						],
						[
							"<",
							"rtCode1",
							"40205000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-dasharray": [
					0.2,
					1.5
				],
				"line-width": {
					stops: [
						[
							10,
							4
						],
						[
							22,
							8
						]
					]
				}
			}
		},
		{
			id: "railway-jr",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"in",
					"railState",
					0,
					200,
					400,
					4,
					5,
					6,
					7
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"==",
						"rtCode10",
						"1"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40201000000"
						],
						[
							"<",
							"rtCode",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40201000000"
						],
						[
							"<",
							"rtCode1",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40216000000"
						],
						[
							"<",
							"rtCode",
							"40217000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40216000000"
						],
						[
							"<",
							"rtCode1",
							"40217000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-width": {
					stops: [
						[
							6,
							2
						],
						[
							10,
							3
						],
						[
							18,
							4
						],
						[
							22,
							20
						]
					]
				}
			}
		},
		{
			id: "railway-jr-hatching",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"in",
					"railState",
					0,
					200,
					400,
					4,
					5,
					6,
					7
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"==",
						"rtCode10",
						"1"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40201000000"
						],
						[
							"<",
							"rtCode",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40201000000"
						],
						[
							"<",
							"rtCode1",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40216000000"
						],
						[
							"<",
							"rtCode",
							"40217000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40216000000"
						],
						[
							"<",
							"rtCode1",
							"40217000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#FFFFFF",
				"line-dasharray": [
					3,
					4
				],
				"line-width": {
					stops: [
						[
							6,
							1
						],
						[
							10,
							2
						],
						[
							18,
							3
						],
						[
							22,
							19
						]
					]
				}
			}
		},
		{
			id: "railway-jr-bridge",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"==",
					"railState",
					1
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40201000000"
						],
						[
							"<",
							"rtCode",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40201000000"
						],
						[
							"<",
							"rtCode1",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40216000000"
						],
						[
							"<",
							"rtCode",
							"40217000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40216000000"
						],
						[
							"<",
							"rtCode1",
							"40217000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-width": {
					stops: [
						[
							6,
							2
						],
						[
							10,
							3
						],
						[
							18,
							4
						],
						[
							22,
							20
						]
					]
				}
			}
		},
		{
			id: "railway-secondary-bridge",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"in",
					"railState",
					1
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"==",
						"rtCode10",
						"1"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40202000000"
						],
						[
							"<",
							"rtCode",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40202000000"
						],
						[
							"<",
							"rtCode1",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40205000000"
						],
						[
							"<",
							"rtCode",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40205000000"
						],
						[
							"<",
							"rtCode1",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40204000000"
						],
						[
							"<",
							"rtCode",
							"40205000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40217000000"
						],
						[
							"<",
							"rtCode",
							"40218000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40204000000"
						],
						[
							"<",
							"rtCode1",
							"40205000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40217000000"
						],
						[
							"<",
							"rtCode1",
							"40218000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-width": {
					stops: [
						[
							10,
							1
						],
						[
							22,
							2
						]
					]
				}
			}
		},
		{
			id: "railway-secondary-bridge-hatching",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"in",
					"railState",
					1
				],
				[
					"any",
					[
						"==",
						"rtCode10",
						"0"
					],
					[
						"==",
						"rtCode10",
						"1"
					],
					[
						"!has",
						"rtCode10"
					]
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40202000000"
						],
						[
							"<",
							"rtCode",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40202000000"
						],
						[
							"<",
							"rtCode1",
							"40203000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40205000000"
						],
						[
							"<",
							"rtCode",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40205000000"
						],
						[
							"<",
							"rtCode1",
							"40206000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40204000000"
						],
						[
							"<",
							"rtCode",
							"40205000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40217000000"
						],
						[
							"<",
							"rtCode",
							"40218000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40204000000"
						],
						[
							"<",
							"rtCode1",
							"40205000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40217000000"
						],
						[
							"<",
							"rtCode1",
							"40218000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#999999",
				"line-dasharray": [
					0.2,
					1.5
				],
				"line-width": {
					stops: [
						[
							10,
							4
						],
						[
							22,
							8
						]
					]
				}
			}
		},
		{
			id: "railway-jr-bridge-hatching",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 10,
			filter: [
				"all",
				[
					"==",
					"railState",
					1
				],
				[
					"any",
					[
						"all",
						[
							">=",
							"rtCode",
							"40201000000"
						],
						[
							"<",
							"rtCode",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40201000000"
						],
						[
							"<",
							"rtCode1",
							"40202000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode",
							"40216000000"
						],
						[
							"<",
							"rtCode",
							"40217000000"
						]
					],
					[
						"all",
						[
							">=",
							"rtCode1",
							"40216000000"
						],
						[
							"<",
							"rtCode1",
							"40217000000"
						]
					]
				]
			],
			paint: {
				"line-color": "#FFFFFF",
				"line-dasharray": [
					3,
					4
				],
				"line-width": {
					stops: [
						[
							6,
							1
						],
						[
							10,
							2
						],
						[
							18,
							3
						],
						[
							22,
							19
						]
					]
				}
			}
		},
		{
			id: "railway-jr-high-speed",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 5,
			filter: [
				"any",
				[
					"==",
					"rtCode10",
					"1"
				],
				[
					"==",
					"ftCode",
					58203
				],
				[
					"==",
					"ftCode",
					58204
				]
			],
			paint: {
				"line-color": "#5747C7",
				"line-width": {
					stops: [
						[
							5,
							2
						],
						[
							10,
							3
						],
						[
							18,
							4
						],
						[
							22,
							20
						]
					]
				}
			}
		},
		{
			id: "railway-jr-high-speed-hatching",
			type: "line",
			source: "gsi-japan",
			"source-layer": "railway",
			minzoom: 5,
			filter: [
				"any",
				[
					"==",
					"rtCode10",
					"1"
				],
				[
					"==",
					"ftCode",
					58203
				],
				[
					"==",
					"ftCode",
					58204
				]
			],
			paint: {
				"line-color": "#FFFFFF",
				"line-dasharray": [
					3,
					4
				],
				"line-width": {
					stops: [
						[
							5,
							1
						],
						[
							10,
							2
						],
						[
							18,
							3
						],
						[
							22,
							19
						]
					]
				}
			}
		},
		{
			id: "boundary-sea",
			type: "line",
			source: "gsi-japan",
			"source-layer": "boundary",
			minzoom: 6,
			maxzoom: 8,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					51221
				]
			],
			layout: {
				"line-join": "round",
				visibility: "visible"
			},
			paint: {
				"line-color": "#9e9cab",
				"line-dasharray": [
					4,
					1,
					1,
					1
				],
				"line-width": 2
			}
		},
		{
			id: "boundary",
			type: "line",
			source: "gsi-japan",
			"source-layer": "boundary",
			minzoom: 6,
			maxzoom: 14,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					1211,
					1212,
					51212
				]
			],
			layout: {
				"line-join": "round"
			},
			paint: {
				"line-color": "rgba(68,68,68,0.7)",
				"line-dasharray": [
					3,
					1,
					1,
					1
				],
				"line-width": {
					base: 1.4,
					stops: [
						[
							8,
							1.2
						],
						[
							12,
							2
						]
					]
				},
				"line-opacity": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					6,
					1,
					14,
					0.1
				]
			}
		},
		{
			id: "building-3d",
			type: "fill-extrusion",
			metadata: {
				"visible-on-3d": true
			},
			source: "gsi-japan",
			"source-layer": "building",
			minzoom: 16,
			layout: {
				visibility: "none"
			},
			paint: {
				"fill-extrusion-color": "#D7D4D1",
				"fill-extrusion-height": [
					"match",
					[
						"get",
						"ftCode"
					],
					3101,
					3,
					3102,
					30,
					3013,
					100,
					3111,
					3,
					3112,
					10,
					10
				],
				"fill-extrusion-opacity": 0.5
			}
		},
		{
			id: "structurea-3d",
			type: "fill-extrusion",
			metadata: {
				"visible-on-3d": true
			},
			source: "gsi-japan",
			"source-layer": "structurea",
			minzoom: 16,
			layout: {
				visibility: "none"
			},
			paint: {
				"fill-extrusion-color": "#EEEEEE",
				"fill-extrusion-height": 30,
				"fill-extrusion-opacity": 0.4
			}
		},
		{
			id: "poi",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 16,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					">",
					"rank",
					25
				],
				[
					"has",
					"name"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle"
					]
				],
				"text-field": "{name}",
				"text-size": 12,
				"text-max-width": 9,
				"text-variable-anchor": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"text-radial-offset": 0.7,
				"text-justify": "center",
				"text-anchor": "center"
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "oc-label-town",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-label",
			minzoom: 6,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"town"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-image": "circle",
				"text-field": "{name}",
				"text-offset": [
					0,
					0.6
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "oc-label-town-ja",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-label",
			minzoom: 7,
			maxzoom: 8,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"town"
				],
				[
					"has",
					"jflag"
				],
				[
					"==",
					[
						"has",
						"pref-capital"
					],
					false
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-image": "circle-stroked",
				"icon-size": 0.8,
				"text-field": [
					"match",
					[
						"length",
						[
							"get",
							"name"
						]
					],
					2,
					[
						"get",
						"name"
					],
					3,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						2
					],
					4,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						3
					],
					5,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						4
					],
					[
						"get",
						"name"
					]
				],
				"text-offset": [
					0,
					0.6
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#333",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "oc-label-pref",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-label",
			minzoom: 5,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"pref"
				],
				[
					"==",
					[
						"has",
						"jflag"
					],
					false
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": {
					stops: [
						[
							5,
							12
						],
						[
							8,
							14
						]
					]
				},
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "oc-label-pref-ja",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-label",
			minzoom: 6,
			maxzoom: 8,
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"pref"
				],
				[
					"has",
					"jflag"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": {
					stops: [
						[
							6,
							13
						],
						[
							8,
							17
						]
					]
				},
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"text-color": "rgba(126, 126, 126, 1)",
				"text-halo-width": 1,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "oc-label-pref-capital-ja",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-label",
			minzoom: 7,
			maxzoom: 8,
			filter: [
				"all",
				[
					"has",
					"jflag"
				],
				[
					"has",
					"pref-capital"
				],
				[
					"!in",
					"name",
					"福岡市",
					"広島市",
					"大阪市",
					"神戸市",
					"名古屋市",
					"横浜市",
					"東京",
					"新潟市",
					"仙台市",
					"盛岡市",
					"札幌市"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"text-variable-anchor": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"icon-image": "circle-stroked",
				"icon-size": 0.8,
				"icon-allow-overlap": true,
				"text-field": [
					"match",
					[
						"length",
						[
							"get",
							"name"
						]
					],
					2,
					[
						"get",
						"name"
					],
					3,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						2
					],
					4,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						3
					],
					5,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						4
					],
					[
						"get",
						"name"
					]
				],
				"text-offset": [
					0.6,
					0.6
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "rgba(71, 71, 71, 1)",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "oc-label-pref-capital-popular-ja",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-label",
			minzoom: 5,
			maxzoom: 8,
			filter: [
				"all",
				[
					"has",
					"jflag"
				],
				[
					"has",
					"pref-capital"
				],
				[
					"in",
					"name",
					"福岡市",
					"鹿児島市",
					"長崎市",
					"広島市",
					"岡山市",
					"大阪市",
					"神戸市",
					"京都市",
					"名古屋市",
					"金沢市",
					"静岡市",
					"横浜市",
					"東京",
					"宇都宮市",
					"新潟市",
					"福島市",
					"仙台市",
					"盛岡市",
					"青森市",
					"札幌市"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans CJK JP Bold"
				],
				"text-anchor": "top",
				"text-variable-anchor": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"icon-image": "circle-stroked",
				"icon-size": 0.8,
				"icon-allow-overlap": true,
				"text-field": [
					"match",
					[
						"length",
						[
							"get",
							"name"
						]
					],
					2,
					[
						"get",
						"name"
					],
					3,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						2
					],
					4,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						3
					],
					5,
					[
						"slice",
						[
							"get",
							"name"
						],
						0,
						4
					],
					[
						"get",
						"name"
					]
				],
				"text-offset": [
					0.6,
					0.6
				],
				"text-size": {
					stops: [
						[
							5,
							13
						],
						[
							8,
							17
						]
					]
				},
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "rgba(30, 30, 30, 1)",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "oc-label-country",
			type: "symbol",
			source: "oceanus",
			"source-layer": "oc-label",
			maxzoom: 7,
			filter: [
				"==",
				[
					"get",
					"class"
				],
				"country"
			],
			layout: {
				"text-font": [
					"Noto Sans CJK JP Bold"
				],
				"text-size": {
					stops: [
						[
							0,
							9
						],
						[
							8,
							16
						]
					]
				},
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"text-color": "rgba(68, 68, 68, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "poi-z16",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 16,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": "circle-stroked",
				"icon-size": 0.6,
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-z16-primary",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 16,
			filter: [
				"any",
				[
					"all",
					[
						"==",
						"$type",
						"Point"
					],
					[
						"has",
						"name"
					],
					[
						"in",
						"class",
						"cemetery",
						"restaurant",
						"bar",
						"cafe",
						"sushi",
						"restaurant_noodle",
						"fast_food",
						"ice_cream",
						"restaurant_pizza",
						"restaurant_seafood",
						"beer",
						"library",
						"fuel",
						"post",
						"police",
						"fire_station",
						"entrance",
						"bus",
						"attraction",
						"art_gallery"
					],
					[
						"!=",
						"disputed",
						"japan_northern_territories"
					]
				],
				[
					"all",
					[
						"in",
						"subclass",
						"community_centre"
					],
					[
						"!=",
						"disputed",
						"japan_northern_territories"
					]
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-z15",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 15,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"in",
					"class",
					"bank",
					"parking",
					"grocery",
					"shop",
					"school",
					"hospital"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-z14",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 14,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"in",
					"class",
					"college",
					"castle",
					"aquarium",
					"cinema",
					"theatre",
					"zoo",
					"convenience",
					"lodging"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-z13",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 13,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"in",
					"class",
					"stadium",
					"landmark",
					"monument",
					"museum",
					"town_hall",
					"golf"
				],
				[
					"!in",
					"subclass",
					"community_centre"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-worship",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 16,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"!has",
					"wikidata"
				],
				[
					"in",
					"class",
					"place_of_worship"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-worship-primary",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 14,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"has",
					"wikidata"
				],
				[
					"in",
					"class",
					"place_of_worship"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"text-field": "{name}",
				"icon-padding": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					11,
					30,
					15,
					2
				],
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-park",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 16,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"!has",
					"wikidata"
				],
				[
					"in",
					"class",
					"park"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-park-primary",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 13,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"has",
					"wikidata"
				],
				[
					"in",
					"class",
					"park"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						[
							"get",
							"class"
						]
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"icon-padding": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					11,
					15,
					15,
					2
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-railway",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "poi",
			minzoom: 11,
			filter: [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"has",
					"name"
				],
				[
					"==",
					"class",
					"railway"
				],
				[
					"==",
					"subclass",
					"station"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans CJK JP Bold"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						"railway"
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"icon-padding": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					11,
					50,
					13,
					30,
					15,
					2
				],
				"text-field": "{name}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9,
				"icon-optional": false,
				"icon-ignore-placement": false,
				"icon-allow-overlap": false,
				"text-ignore-placement": false,
				"text-allow-overlap": false,
				"text-optional": true
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#415CBD",
				"text-halo-width": 2,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "poi-airport-primary",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "aerodrome_label",
			minzoom: 10,
			filter: [
				"all",
				[
					"has",
					"iata"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-image": "airport",
				"text-field": "{name}",
				"text-offset": [
					0,
					0.6
				],
				"text-size": 12,
				"text-max-width": 9,
				visibility: "visible",
				"icon-size": 1,
				"text-optional": true
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "label-gsi",
			type: "symbol",
			source: "gsi-japan",
			"source-layer": "label",
			minzoom: 10,
			maxzoom: 15,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					100,
					50100
				],
				[
					"in",
					"annoCtg",
					311,
					314,
					315
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-anchor": "bottom",
				"icon-image": [
					"coalesce",
					[
						"image",
						"mountain"
					],
					[
						"image",
						"circle-stroked"
					]
				],
				"icon-padding": [
					"interpolate",
					[
						"linear"
					],
					[
						"zoom"
					],
					8,
					50,
					11,
					100,
					20,
					2
				],
				"text-field": "{knj}",
				"text-offset": [
					0,
					0.3
				],
				"text-size": 12,
				"text-max-width": 9,
				visibility: "visible"
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "road_shield_national",
			type: "symbol",
			source: "gsi-japan",
			"source-layer": "transp",
			minzoom: 9,
			maxzoom: 20,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					2901
				]
			],
			layout: {
				"icon-image": [
					"match",
					[
						"length",
						[
							"to-string",
							[
								"get",
								"nRNo"
							]
						]
					],
					1,
					"national-JP_1",
					2,
					"national-JP_2",
					3,
					"national-JP_3",
					"national-JP_3"
				],
				"icon-padding": 13,
				"text-field": [
					"get",
					"nRNo"
				],
				"text-font": [
					"Noto Sans CJK JP Bold"
				],
				"text-offset": [
					0,
					-0.1
				],
				"text-rotation-alignment": "viewport",
				"text-size": 10,
				"icon-size": 1
			},
			paint: {
				"text-color": "#ffffff"
			}
		},
		{
			id: "road_shield_highway",
			type: "symbol",
			source: "gsi-japan",
			"source-layer": "transp",
			minzoom: 8,
			filter: [
				"all",
				[
					"in",
					"ftCode",
					2903,
					2904
				]
			],
			layout: {
				"icon-image": [
					"match",
					[
						"length",
						[
							"case",
							[
								"has",
								"uRNo"
							],
							[
								"get",
								"uRNo"
							],
							[
								"has",
								"nRNo"
							],
							[
								"get",
								"nRNo"
							],
							""
						]
					],
					1,
					"highway-JP_1",
					2,
					"highway-JP_2",
					3,
					"highway-JP_3",
					"highway-JP_3"
				],
				"icon-rotation-alignment": "viewport",
				"icon-padding": 13,
				"text-field": [
					"case",
					[
						"has",
						"uRNo"
					],
					[
						"get",
						"uRNo"
					],
					[
						"has",
						"nRNo"
					],
					[
						"get",
						"nRNo"
					],
					""
				],
				"text-font": [
					"Noto Sans CJK JP Bold"
				],
				"text-offset": [
					0,
					-0.1
				],
				"text-rotation-alignment": "viewport",
				"text-size": 10,
				"icon-size": 1
			},
			paint: {
				"text-color": "#ffffff"
			}
		},
		{
			id: "railway-label",
			type: "symbol",
			source: "gsi-japan",
			"source-layer": "label",
			minzoom: 10,
			maxzoom: 15,
			filter: [
				"all",
				[
					"==",
					"ftCode",
					100
				],
				[
					"==",
					"annoCtg",
					421
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-keep-upright": true,
				"text-field": "{knj}",
				"text-size": 12,
				"text-allow-overlap": true,
				"text-rotate": [
					"case",
					[
						"==",
						[
							"get",
							"arrng"
						],
						2
					],
					[
						"*",
						[
							"+",
							[
								"to-number",
								[
									"get",
									"arrngAgl"
								]
							],
							90
						],
						-1
					],
					[
						"*",
						[
							"to-number",
							[
								"get",
								"arrngAgl"
							]
						],
						-1
					]
				],
				"text-anchor": [
					"case",
					[
						"==",
						[
							"get",
							"arrng"
						],
						2
					],
					[
						"case",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"LC"
						],
						"top",
						"center"
					],
					[
						"case",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"LT"
						],
						"top-left",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"CT"
						],
						"top",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"RT"
						],
						"top-right",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"LC"
						],
						"left",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"CC"
						],
						"center",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"RC"
						],
						"right",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"LB"
						],
						"bottom-left",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"CB"
						],
						"bottom",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"RB"
						],
						"bottom-right",
						"center"
					]
				],
				"text-pitch-alignment": "viewport",
				"text-rotation-alignment": "viewport",
				"icon-pitch-alignment": "auto",
				"icon-rotation-alignment": "auto",
				"text-offset": [
					"case",
					[
						"any",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"LT"
						],
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"LC"
						],
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"LB"
						]
					],
					[
						"literal",
						[
							0.5,
							0
						]
					],
					[
						"any",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"RT"
						],
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"RC"
						],
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"RB"
						]
					],
					[
						"literal",
						[
							-0.5,
							0
						]
					],
					[
						"any",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"CT"
						]
					],
					[
						"literal",
						[
							0,
							0.5
						]
					],
					[
						"any",
						[
							"==",
							[
								"get",
								"dspPos"
							],
							"CB"
						]
					],
					[
						"literal",
						[
							0,
							-0.5
						]
					],
					[
						"literal",
						[
							0,
							0
						]
					]
				],
				visibility: "visible"
			},
			paint: {
				"text-color": "rgba(68, 68, 68, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "airport-label-major",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "aerodrome_label",
			minzoom: 5,
			filter: [
				"all",
				[
					"has",
					"iata"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-padding": 2,
				"text-font": [
					"Noto Sans Regular"
				],
				"text-anchor": "top",
				"icon-image": "airport",
				"text-field": "{name}",
				"text-offset": [
					0,
					0.6
				],
				"text-size": 12,
				"text-max-width": 9
			},
			paint: {
				"text-halo-blur": 0.5,
				"text-color": "#666",
				"text-halo-width": 1,
				"text-halo-color": "#ffffff"
			}
		},
		{
			id: "place-village",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 9,
			maxzoom: 13,
			filter: [
				"all",
				[
					"==",
					"class",
					"village"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": {
					base: 1.2,
					stops: [
						[
							10,
							12
						],
						[
							15,
							22
						]
					]
				},
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "#333",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-town",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 8.5,
			maxzoom: 13,
			filter: [
				"all",
				[
					"==",
					"class",
					"town"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 12,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-island-name",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			filter: [
				"all",
				[
					"==",
					[
						"get",
						"class"
					],
					"island"
				],
				[
					"!=",
					[
						"get",
						"disputed"
					],
					"japan_northern_territories"
				],
				[
					"any",
					[
						"!=",
						[
							"get",
							"subclass"
						],
						"islet"
					],
					[
						">=",
						[
							"zoom"
						],
						16
					]
				]
			],
			layout: {
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 11,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank10",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 8,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					10
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank9",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 8,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					9
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank8",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 8,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					8
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank7",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 8,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					7
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank6",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 11,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					6
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank5",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 10,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					5
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank4",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 9,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					4
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.3,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 14,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank3",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 8,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					3
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle",
				"icon-size": 0.4,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.1
				],
				"text-font": [
					"Noto Sans Regular"
				],
				"text-size": 16,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(102, 102, 102, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-rank2",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			minzoom: 8,
			maxzoom: 13,
			filter: [
				"all",
				[
					"!=",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"==",
					"rank",
					2
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"icon-image": "circle-stroked",
				"icon-size": 0.8,
				"text-anchor": "top",
				"text-offset": [
					0,
					0.2
				],
				"text-font": [
					"Noto Sans CJK JP Bold"
				],
				"text-size": 17,
				"text-field": "{name}",
				"text-max-width": 8,
				visibility: "visible"
			},
			paint: {
				"icon-color": "#000000",
				"icon-opacity": {
					stops: [
						[
							11.9,
							1
						],
						[
							12,
							0
						]
					]
				},
				"text-color": "rgba(68, 68, 68, 1)",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		},
		{
			id: "place-city-capital",
			type: "symbol",
			source: "geolonia-gsi-custom",
			"source-layer": "place",
			maxzoom: 11,
			filter: [
				"all",
				[
					"==",
					"capital",
					2
				],
				[
					"==",
					"class",
					"city"
				],
				[
					"!=",
					"disputed",
					"japan_northern_territories"
				]
			],
			layout: {
				"text-font": [
					"Noto Sans CJK JP Bold"
				],
				"text-size": 18,
				"text-field": "{name}",
				"text-max-width": 8,
				"icon-image": "star",
				"text-offset": [
					0.4,
					-0.1
				],
				"icon-size": 1,
				"text-anchor": "left",
				visibility: "visible"
			},
			paint: {
				"text-color": "#333",
				"text-halo-width": 1.2,
				"text-halo-color": "rgba(255,255,255,0.8)"
			}
		}
	];
	var style = {
		version: version,
		name: name,
		sources: sources,
		sprite: sprite,
		glyphs: glyphs,
		layers: layers
	};

	class TakamatsuMap extends maplibreGlExports.Map {
	    constructor(params) {
	        const defaults = {
	            container: 'map',
	            style: style,
	            center: [134.04654783784918, 34.34283588989655],
	            zoom: 12
	        };
	        super(Object.assign(Object.assign({}, defaults), params));
	    }
	    loadData(className) {
	        this.addLayer({
	            id: className,
	            type: 'fill',
	            source: 'takamatsu',
	            'source-layer': 'main',
	            paint: {
	                'fill-color': '#FF0000',
	                'fill-opacity': 0.2
	            },
	            "filter": [
	                "all",
	                [
	                    "==",
	                    "class",
	                    className
	                ],
	            ],
	        });
	    }
	}
	window.city = {};
	window.city.Takamatsu = maplibreGlExports;
	window.city.Takamatsu.Map = TakamatsuMap;

}));
//# sourceMappingURL=index.js.map
