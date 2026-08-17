(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(t,e,a=[])=>{const c=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(o=>{c.setAttribute(o,String(e[o]))}),a.length&&a.forEach(o=>{const r=T(...o);c.appendChild(r)}),c};var L=([t,e,a])=>T(t,e,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t=>Array.from(t.attributes).reduce((e,a)=>(e[a.name]=a.value,e),{}),P=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",q=t=>t.flatMap(P).map(a=>a.trim()).filter(Boolean).filter((a,c,o)=>o.indexOf(a)===c).join(" "),H=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(e,a,c)=>a.toUpperCase()+c.toLowerCase()),w=(t,{nameAttr:e,icons:a,attrs:c})=>{var b;const o=t.getAttribute(e);if(o==null)return;const r=H(o),d=a[r];if(!d)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const i=C(t),[p,l,s]=d,f={...l,"data-lucide":o,...c,...i},M=q(["lucide",`lucide-${o}`,i,c]);M&&Object.assign(f,{class:M});const S=L([p,f,s]);return(b=t.parentNode)==null?void 0:b.replaceChild(S,t)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=["svg",n,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",n,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=["svg",n,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=["svg",n,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=["svg",n,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",n,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=["svg",n,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",n,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=["svg",n,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=["svg",n,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=["svg",n,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",n,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=["svg",n,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=["svg",n,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=["svg",n,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",n,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=["svg",n,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=["svg",n,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=["svg",n,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=["svg",n,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=["svg",n,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=["svg",n,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=["svg",n,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=["svg",n,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=["svg",n,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=["svg",n,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=["svg",n,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=["svg",n,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=["svg",n,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=["svg",n,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=({icons:t={},nameAttr:e="data-lucide",attrs:a={}}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const c=document.querySelectorAll(`[${e}]`);if(Array.from(c).forEach(o=>w(o,{nameAttr:e,icons:t,attrs:a})),e==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(r=>w(r,{nameAttr:"icon-name",icons:t,attrs:a})))}},bt={Menu:it,ArrowDownRight:V,ChevronRight:K,ArrowRight:I,ArrowLeft:N,BadgeCheck:R,CalendarClock:D,ShieldAlert:mt,Cpu:Y,Factory:J,ScanSearch:ht,Check:B,Cloud:X,CloudCog:W,ServerCog:pt,CircleDot:U,Plane:dt,Bot:F,Map:ct,HeartPulse:et,Landmark:nt,Boxes:Z,Zap:ft,Route:lt,Building2:z,Database:_,Network:rt,Gauge:tt,Receipt:st,ShieldCheck:yt,FileCheck:Q,BookOpen:j,TestTube:vt,Server:ut,ArrowUpRight:O,Info:at,X:gt,Layers3:ot,ClipboardCheck:G},x=[{id:"public",name:"公有云",icon:"cloud",tagline:"快速接入与按需弹性",focus:["价格与计费口径","模型可用性与版本","TTFT / TPOT / 吞吐","限流、可用性与数据边界"],cost:"调用量、输入/输出 Token、缓存命中、套餐与网络费用",boundary:"云厂商负责约定的云基础设施与服务，客户仍承担数据、应用和使用责任。",fit:"需求波动、快速试点、通用模型调用、希望降低前期建设投入。"},{id:"dedicated",name:"专有云",icon:"cloud-cog",tagline:"专属容量与云运营能力",focus:["物理或逻辑隔离","专属容量承诺","审计与合规证明","云厂商运维边界"],cost:"专属资源、保有量、托管运营与长期合约成本",boundary:"云厂商与客户按合同划分基础设施、平台、数据和运营责任。",fit:"数据边界较严，同时希望保留云平台运营能力和专属容量。"}],v=[{id:"low-altitude",name:"低空经济—低空巡检场景",icon:"plane",image:"./assets/industries/low-altitude.png",metrics:"mAP、MOTA / IDF1、定位误差、告警时延、链路可用性",formula:"mAP 按目标类别统计检测精度；定位误差 = 预测坐标与基准坐标的空间距离；告警时延 = 告警发出时间 − 事件发生时间；时延同时报告 P50 / P95 / P99。",collection:"连续采集飞行日志、感知结果、人工复核标注、定位基准和链路监控数据，按架次、空域、天气、弱网与目标类别分层。",cadence:"每架次形成记录；试点期按日汇总，稳定运行后按周复盘，重大告警逐条复核。",acceptance:"按任务风险分别设定检测、定位、告警与链路阈值；所有安全相关失败样本必须闭环，并验证降级与恢复策略。",description:"实时性、安全冗余、空域与航线约束、边云协同、弱网和多传感器融合。",priority:["实时性","安全冗余","定位精度"],lowerPriority:"离线大批量吞吐和极致单位成本通常低于飞行安全与告警时效"},{id:"embodied",name:"具身智能—协同作业场景",icon:"bot",image:"./assets/industries/embodied.png",metrics:"任务成功率、碰撞率、轨迹误差、端到端时延、恢复成功率",formula:"任务成功率 = 成功完成任务数 ÷ 总任务数；碰撞率 = 发生碰撞的任务数 ÷ 总任务数；恢复成功率 = 自动恢复成功次数 ÷ 可恢复异常次数。",collection:"由任务编排器、传感器、规划器和控制器记录完整轨迹、动作、异常和恢复日志，并以人工复核标注任务最终状态。",cadence:"每轮任务记录；按任务类型、难度、环境扰动和设备版本形成批次统计。",acceptance:"成功率、碰撞率、闭环时延和恢复率联合验收；安全事件零容忍项单独列出，不能用总体平均值掩盖。",description:"感知—规划—控制闭环、长时任务、仿真到现实、动作安全和实时控制。",priority:["任务成功","动作安全","闭环时延"],lowerPriority:"单纯追求峰值吞吐通常低于动作安全和闭环稳定性"},{id:"gis",name:"GIS / 测绘—遥感识别场景",icon:"map",image:"./assets/industries/gis.png",metrics:"IoU、mAP、配准误差、拓扑错误率、P95 时延、空间查询吞吐",formula:"IoU = 预测区域与真值区域交集面积 ÷ 并集面积；配准误差按同名控制点坐标差计算 RMSE；查询时延按 P50 / P95 / P99 统计。",collection:"使用带真值标注的遥感影像、矢量成果、控制点和空间查询日志，按区域、地物类别、分辨率、数据规模与并发分层。",cadence:"每批成果离线评测；在线查询按小时监测，版本发布前进行全量回归。",acceptance:"识别精度、坐标一致性、拓扑正确性和查询性能分别设阈值；错误样本需能定位到区域、类别和数据版本。",description:"图像与目标识别精度、坐标投影一致性、快速检索、时空数据更新和可解释性。",priority:["识别精度","快速检索","空间一致性"],lowerPriority:"对非实时成果生产，毫秒级首 Token 时延通常不是首要目标"},{id:"medical",name:"医疗行业—智慧医疗场景",icon:"heart-pulse",image:"./assets/industries/medical.png",metrics:"灵敏度、特异度、AUROC、F1、漏诊率、误诊率、报告时延",formula:"灵敏度 = TP ÷ (TP + FN)；特异度 = TN ÷ (TN + FP)；漏诊率 = FN ÷ (TP + FN)。同时报告置信区间和分层结果。",collection:"使用脱敏病例、影像设备元数据、专家标注和医生复核结论；按病种、设备、机构、人群及图像质量分层。",cadence:"验证集按版本全量评测；试运行按日抽样复核，异常和疑难病例逐例回顾。",acceptance:"阈值由具体适应证与临床评价方案确定；漏诊风险、外部验证和医生复核优先于极限速度。",description:"影像分析更重视诊断精度、漏诊风险、可追溯和医生复核，速度服从安全与质量。",priority:["诊断精度","漏诊风险","可追溯"],lowerPriority:"在满足临床流程时限后，极限生成速度低于准确性和医生复核"},{id:"finance",name:"金融行业—风控场景",icon:"landmark",image:"./assets/industries/finance.png",metrics:"AUC / KS、召回率、误报率、损失率、审计追溯时延",formula:"召回率 = 识别出的风险样本 ÷ 全部实际风险样本；误报率 = 被误判为风险的正常样本 ÷ 全部正常样本；损失率按业务确认账期计算。",collection:"从带结果标签的历史业务样本、策略决策、人工审核、损失结果和审计日志采集，按产品、客群、渠道与时间窗分层。",cadence:"实时监控决策链路；按日看分布漂移，按周或月复核效果与损失表现。",acceptance:"同时约束召回、误报、损失、稳定性和公平性；阈值由业务风险偏好审批，并保证单笔决策可追溯。",description:"风险可解释、稳定性、数据合规、审计、实时风控与模型漂移。",priority:["风险识别","可解释性","审计追溯"],lowerPriority:"单次输出长度和生成文风低于决策稳定性、合规与可审计性"},{id:"industry",name:"工业制造—质量检测场景",icon:"factory",image:"./assets/industries/industry.png",metrics:"良率、缺陷检出率、漏检率、节拍、OEE、停机时长",formula:"缺陷检出率 = 正确检出缺陷数 ÷ 实际缺陷总数；漏检率 = 未检出缺陷数 ÷ 实际缺陷总数；OEE = 可用率 × 性能效率 × 质量率。",collection:"联接机器视觉、质检、MES、设备状态和停机工单，按产线、产品、缺陷类别、班次与设备版本分层。",cadence:"单件实时记录；按班次和日汇总，换型、模型或工艺变更后进行回归。",acceptance:"漏检与误检成对报告，且不得破坏产线节拍；连续运行、异常停机和故障恢复必须通过现场验证。",description:"实时控制与确定性、设备协议、边缘部署、工艺安全、连续运行和回滚。",priority:["连续运行","缺陷检出","工艺安全"],lowerPriority:"通用对话体验低于确定性时延、协议兼容和现场可恢复性"},{id:"energy",name:"能源电力—设备巡检场景",icon:"zap",image:"./assets/industries/energy.png",metrics:"负荷预测 MAE、故障召回率、告警时延、供电可用性、调度约束满足率",formula:"MAE = Σ|预测负荷 − 实际负荷| ÷ 样本数；故障召回率 = 正确识别故障数 ÷ 实际故障数；告警闭环时长从触发到确认处置。",collection:"采集调度、设备、气象、负荷和告警闭环数据，按区域、季节、时间粒度、设备类型和极端天气分层。",cadence:"预测按调度周期计算；告警实时记录，日汇总、月复盘，极端事件单独回放。",acceptance:"除平均预测误差外，必须验证峰值、极端天气、漏报和调度约束；安全相关失败样本逐条闭环。",description:"安全稳定运行、预测可靠性、实时告警、设备寿命、调度约束与边缘自治。",priority:["安全稳定","预测可靠","告警闭环"],lowerPriority:"界面生成速度通常低于安全约束、预测可靠性和边缘自治"},{id:"logistics",name:"交通物流—路径调度场景",icon:"route",image:"./assets/industries/logistics.png",metrics:"ETA MAE / RMSE、履约率、调度耗时、异常识别召回",formula:"ETA MAE = Σ|预测到达时间 − 实际到达时间| ÷ 订单数；履约率 = 按承诺完成订单数 ÷ 应履约订单数；调度耗时按 P95 统计。",collection:"联接订单、轨迹、路况、天气、调度决策和异常工单，按路线、时段、区域、车型与订单类型分层。",cadence:"订单级实时记录；按小时监控峰值，按日复盘履约和成本，重大异常逐单追踪。",acceptance:"覆盖高峰、恶劣天气、异常订单和跨区域泛化；预测、履约、调度时延与单位成本联合判断。",description:"时空预测、实时调度、可靠性、异常处理、峰值并发和成本。",priority:["预测准确","调度效率","峰值稳定"],lowerPriority:"复杂生成效果通常低于 ETA 准确、履约率和峰值成本控制"}],g=[{name:"Train TPS",label:"训练吞吐",formula:"统计周期内处理的训练 Token 或样本数 ÷ 有效训练时间",note:"记录并行策略、批大小、精度、有效卡数和通信开销。",unit:"token/s"},{name:"Recovery",label:"训练恢复时长",formula:"训练任务恢复运行时间 − 故障确认时间",note:"结合检查点间隔、数据重载、重新调度和恢复后的有效进度。",unit:"min"},{name:"TTFT",label:"首 Token 时延",formula:"首个输出 Token 时间 − 请求到达时间",note:"衡量初始响应速度。固定输入长度、并发与预热状态。",unit:"ms"},{name:"TPOT",label:"输出 Token 间时延",formula:"生成阶段耗时 ÷ 输出 Token 数",note:"衡量持续生成速度。说明统计区间及是否包含首 Token。",unit:"ms/token"},{name:"Throughput",label:"输出吞吐",formula:"单位时间生成的输出 Token 数",note:"明确输出长度、并发、精度与批处理策略。",unit:"token/s"},{name:"Effective",label:"有效 Token 率",formula:"满足任务要求的输出 Token ÷ 总输出 Token",note:"有效性判定必须预先定义并可复核。",unit:"%"},{name:"KV Hit",label:"KV Cache 命中率",formula:"命中请求或 Token ÷ 可复用总量",note:"说明前缀复用、缓存容量与淘汰规则。",unit:"%"},{name:"Success",label:"调用成功率",formula:"成功请求 ÷ 总请求",note:"明确超时、取消、重试与降级的统计口径。",unit:"%"},{name:"Availability",label:"服务可用性",formula:"可用时间 ÷ 统计周期",note:"结合计划维护、SLA、恢复与容灾演练。",unit:"%"},{name:"Cost",label:"单位 Token 成本",formula:"对应费用 ÷ Token 数 × 1,000,000",note:"分输入与输出，说明折扣、缓存和失败请求。",unit:"元/1M token"},{name:"Energy",label:"单位 Token 能耗",formula:"推理阶段能耗 ÷ 有效输出 Token",note:"记录测量边界、采样方法与有效 Token 口径。",unit:"J/token"}],wt=[["短入短出","[512, 512]","交互响应与首 Token 体验"],["长入短出","[32K, 512]","长上下文 Prefill 能力"],["短入长出","[512, 4096]","持续生成与 Decode 吞吐"],["超长上下文","[128K / 1M]","容量、KV Cache 与稳定性"],["并发阶梯","1 → 4 → 8 → 饱和","时延、吞吐、错误率联合约束"]];function h(t,e=20){return`<i data-lucide="${t}" style="width:${e}px;height:${e}px"></i>`}function xt(){document.querySelector("[data-benchmark-strip]").innerHTML=`<div class="benchmark-heading"><span>BENCHMARK MATRIX</span><b>建议的统一测试场景</b><small>先统一条件，再比较结论</small></div>${wt.map(t=>`<div class="benchmark-item"><b>${t[0]}</b><span>${t[1]}</span><small>${t[2]}</small></div>`).join("")}`}let m="public";function A(){const t=document.querySelector("[data-deployment-tabs]");t.innerHTML=x.map(a=>`<button type="button" role="tab" aria-selected="${a.id===m}" class="${a.id===m?"active":""}" data-deployment="${a.id}">${h(a.icon,17)}${a.name}</button>`).join("");const e=x.find(a=>a.id===m);document.querySelector("[data-deployment-panel]").innerHTML=`
    <div class="deployment-summary"><p>${e.tagline}</p><h3>${e.name}</h3><span>适用场景</span><p>${e.fit}</p></div>
    <div class="deployment-facts">
      <div><span>客户更关注</span><ul>${e.focus.map(a=>`<li>${h("circle-dot",14)}${a}</li>`).join("")}</ul></div>
      <div><span>成本结构</span><p>${e.cost}</p></div>
      <div><span>责任边界</span><p>${e.boundary}</p></div>
    </div>`,t.querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{m=a.dataset.deployment,A(),u()}))}function Tt(){document.querySelector("[data-industry-count]").textContent=`${v.length} 个行业`,document.querySelector("[data-industry-body]").innerHTML=v.map(t=>`
    <tr>
      <td data-label="名称"><span class="industry-name">${h(t.icon,18)}${t.name}</span></td>
      <td data-label="计算指标与测量方法"><b>${t.metrics}</b><small class="metric-boundary">${t.collection}</small></td>
      <td data-label="指标说明 / 验收判断"><b class="priority-label">重点：</b>${t.description}<small class="acceptance-note"><b>验收：</b>${t.acceptance}</small><small class="lower-priority"><b>相对低优先级：</b>${t.lowerPriority}</small></td>
      <td><button class="icon-button detail-button" type="button" aria-label="查看${t.name}详情" data-industry-id="${t.id}">${h("chevron-right",17)}</button></td>
    </tr>`).join(""),document.querySelectorAll("[data-industry-id]").forEach(t=>t.addEventListener("click",()=>$(t.dataset.industryId))),u()}function $(t){const e=v.find(c=>c.id===t);if(!e)return;const a=document.querySelector("[data-industry-dialog]");document.querySelector("[data-dialog-content]").innerHTML=`
    <figure class="industry-visual"><img src="${e.image}" alt="${e.name}行业场景图" /><figcaption>INDUSTRY SCENE / ${e.name}</figcaption></figure>
    <div class="dialog-copy"><p class="kicker">行业需求详情</p><div class="dialog-title"><span>${h(e.icon,25)}</span><h2>${e.name}</h2></div>
    <p class="dialog-lead">${e.description}</p>
    <div class="priority-row">${e.priority.map(c=>`<span>${c}</span>`).join("")}</div>
    <dl><div><dt>关键指标</dt><dd>${e.metrics}</dd></div><div><dt>计算方式</dt><dd>${e.formula}</dd></div><div><dt>数据来源与采集</dt><dd>${e.collection}</dd></div><div><dt>统计频率</dt><dd>${e.cadence}</dd></div><div><dt>验收判断</dt><dd>${e.acceptance}</dd></div><div><dt>相对低优先级</dt><dd>${e.lowerPriority}</dd></div></dl></div>`,a.showModal(),u()}function At(){document.querySelectorAll("[data-industry-entry]").forEach(t=>t.addEventListener("click",e=>{e.preventDefault();const a=t.dataset.industryEntry;window.location.hash!=="#industries"&&(window.location.hash="industries"),window.setTimeout(()=>$(a),30)}))}let y=g.findIndex(t=>t.name==="TTFT");function k(){document.querySelector("[data-metric-list]").innerHTML=g.map((e,a)=>`<button type="button" class="${a===y?"active":""}" data-metric="${a}"><span>${e.name}</span><small>${e.label}</small>${h("chevron-right",16)}</button>`).join("");const t=g[y];document.querySelector("[data-metric-detail]").innerHTML=`<span class="metric-unit">${t.unit}</span><p class="kicker">${t.name}</p><h3>${t.label}</h3><div class="formula">${t.formula}</div><p>${t.note}</p><div class="condition-note">${h("info",17)}统一模型、精度、硬件、输入输出长度、并发与服务目标后再比较</div>`,document.querySelectorAll("[data-metric]").forEach(e=>e.addEventListener("click",()=>{y=Number(e.dataset.metric),k(),u()}))}function $t(){const t=document.querySelector("[data-network-canvas]"),e=t.getContext("2d");let a,c,o;const r=()=>{const i=Math.min(devicePixelRatio||1,2);a=t.clientWidth,c=t.clientHeight,t.width=a*i,t.height=c*i,e.setTransform(i,0,0,i,0,0);const p=a<700?22:46;o=Array.from({length:p},(l,s)=>({x:a*(.42+Math.random()*.56),y:Math.random()*c,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.14,r:s%9===0?4:2,color:s%7===0?"#f6c851":s%5===0?"#ff7668":"#5ce1e6"}))},d=()=>{e.clearRect(0,0,a,c),o.forEach((i,p)=>{i.x+=i.vx,i.y+=i.vy,(i.x<a*.38||i.x>a)&&(i.vx*=-1),(i.y<0||i.y>c)&&(i.vy*=-1),o.slice(p+1).forEach(l=>{const s=Math.hypot(i.x-l.x,i.y-l.y);s<145&&(e.strokeStyle=`rgba(92,225,230,${.13*(1-s/145)})`,e.lineWidth=1,e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(l.x,l.y),e.stroke())}),e.fillStyle=i.color,e.globalAlpha=.72,e.beginPath(),e.arc(i.x,i.y,i.r,0,Math.PI*2),e.fill(),e.globalAlpha=1}),requestAnimationFrame(d)};r(),d(),window.addEventListener("resize",r)}function kt(){const t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-mobile-nav]");t.addEventListener("click",()=>{const a=e.classList.toggle("open");t.setAttribute("aria-expanded",String(a)),t.setAttribute("aria-label",a?"关闭导航":"打开导航")}),e.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{e.classList.remove("open"),t.setAttribute("aria-expanded","false")})),window.addEventListener("scroll",()=>document.querySelector("[data-header]").classList.toggle("scrolled",scrollY>20),{passive:!0})}const Et={capabilities:"01 / 能力全景 · 国产异构算力",deployment:"02 / Token 工厂 · 部署与服务",industries:"03 / 行业场景 · 需求矩阵",metrics:"04 / 评价体系 · 指标字典",evidence:"05 / 能力验证 · 材料与边界"};function E(){const t=window.location.hash.replace("#",""),e=!t||t==="top";document.body.classList.toggle("route-home",e),document.body.classList.toggle("route-detail",!e),document.querySelectorAll("[data-route-section]").forEach(c=>c.classList.toggle("active-route",c.dataset.routeSection===t)),document.querySelector("[data-route-toolbar]").classList.toggle("visible",!e),document.querySelector("[data-route-title]").textContent=Et[t]||"内容页面",document.querySelectorAll("[data-route-link], .desktop-nav a, .mobile-nav a").forEach(c=>c.classList.toggle("active-link",c.getAttribute("href")===`#${t}`)),window.scrollTo({top:0,behavior:"instant"})}function u(){Mt({icons:bt})}A();Tt();k();xt();At();$t();kt();u();E();window.addEventListener("hashchange",E);document.querySelector("[data-dialog-close]").addEventListener("click",()=>document.querySelector("[data-industry-dialog]").close());document.querySelector("[data-industry-dialog]").addEventListener("click",t=>{t.target===t.currentTarget&&t.currentTarget.close()});
