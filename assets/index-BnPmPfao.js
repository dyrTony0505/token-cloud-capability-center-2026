(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(n){if(n.ep)return;n.ep=!0;const d=a(n);fetch(n.href,d)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(t,e,a=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(n=>{r.setAttribute(n,String(e[n]))}),a.length&&a.forEach(n=>{const d=x(...n);r.appendChild(d)}),r};var E=([t,e,a])=>x(t,e,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=t=>Array.from(t.attributes).reduce((e,a)=>(e[a.name]=a.value,e),{}),P=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",I=t=>t.flatMap(P).map(a=>a.trim()).filter(Boolean).filter((a,r,n)=>n.indexOf(a)===r).join(" "),q=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(e,a,r)=>a.toUpperCase()+r.toLowerCase()),b=(t,{nameAttr:e,icons:a,attrs:r})=>{var M;const n=t.getAttribute(e);if(n==null)return;const d=q(n),c=a[d];if(!c)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const i=L(t),[h,p,s]=c,g={...p,"data-lucide":n,...r,...i},f=I(["lucide",`lucide-${n}`,i,r]);f&&Object.assign(g,{class:f});const C=E([h,g,s]);return(M=t.parentNode)==null?void 0:M.replaceChild(C,t)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=["svg",o,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=["svg",o,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=["svg",o,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=["svg",o,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=["svg",o,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",o,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=["svg",o,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=["svg",o,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=["svg",o,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=["svg",o,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",o,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",o,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",o,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",o,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",o,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=["svg",o,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=["svg",o,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=["svg",o,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=["svg",o,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=["svg",o,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=["svg",o,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=["svg",o,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=["svg",o,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=["svg",o,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=["svg",o,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=["svg",o,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=["svg",o,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=["svg",o,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=["svg",o,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=["svg",o,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=["svg",o,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=["svg",o,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=["svg",o,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=["svg",o,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=["svg",o,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=({icons:t={},nameAttr:e="data-lucide",attrs:a={}}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const r=document.querySelectorAll(`[${e}]`);if(Array.from(r).forEach(n=>b(n,{nameAttr:e,icons:t,attrs:a})),e==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(d=>b(d,{nameAttr:"icon-name",icons:t,attrs:a})))}},ft={Menu:ot,ArrowDownRight:H,ChevronRight:z,ArrowRight:V,ArrowLeft:O,BadgeCheck:B,CalendarClock:Z,ShieldAlert:ht,Cpu:J,Factory:_,ScanSearch:st,Check:F,Cloud:W,CloudCog:U,ServerCog:lt,CircleDot:K,Plane:it,Bot:j,Map:nt,HeartPulse:tt,Landmark:at,Boxes:D,Zap:vt,Route:ct,Building2:G,Database:X,Network:rt,Gauge:Q,Receipt:dt,ShieldCheck:ut,FileCheck:Y,BookOpen:N,TestTube:mt,Server:pt,ArrowUpRight:R,Info:et,X:yt},w=[{id:"public",name:"公有云",icon:"cloud",tagline:"快速接入与按需弹性",focus:["价格与计费口径","模型可用性与版本","TTFT / TPOT / 吞吐","限流、可用性与数据边界"],cost:"调用量、输入/输出 Token、缓存命中、套餐与网络费用",boundary:"云厂商负责约定的云基础设施与服务，客户仍承担数据、应用和使用责任。",fit:"需求波动、快速试点、通用模型调用、希望降低前期建设投入。"},{id:"dedicated",name:"专有云",icon:"cloud-cog",tagline:"专属容量与云运营能力",focus:["物理或逻辑隔离","专属容量承诺","审计与合规证明","云厂商运维边界"],cost:"专属资源、保有量、托管运营与长期合约成本",boundary:"云厂商与客户按合同划分基础设施、平台、数据和运营责任。",fit:"数据边界较严，同时希望保留云平台运营能力和专属容量。"}],y=[{id:"low-altitude",name:"低空经济",icon:"plane",metrics:"mAP、MOTA / IDF1、定位误差、告警时延、链路可用性",formula:"按 P50 / P95 / P99 分位统计时延；检测、跟踪与定位分别评估。指标阈值按运行场景与风险等级验收，不由安全规章直接给出。",description:"实时性、安全冗余、空域与航线约束、边云协同、弱网和多传感器融合。",standards:[["运行监管","CCAR-92","已核验现行","verified"],["飞行管理","《无人驾驶航空器飞行管理暂行条例》（国令第761号）","已核验现行","verified"],["系统安全","GB 42590-2023","已核验现行","verified"]],standardDetail:"三项依据分别约束运行、飞行管理和系统安全，不直接规定 mAP、MOTA 或定位误差阈值。",priority:["实时性","安全冗余","定位精度"],lowerPriority:"离线大批量吞吐和极致单位成本通常低于飞行安全与告警时效"},{id:"embodied",name:"具身智能",icon:"bot",metrics:"任务成功率、碰撞率、轨迹误差、端到端时延、恢复成功率",formula:"任务成功率 = 成功完成任务数 / 总任务数；按任务难度分层。",description:"感知—规划—控制闭环、长时任务、仿真到现实、动作安全和实时控制。",standards:[["机器人安全","ISO 10218-1/-2:2025","已核验发布","verified"],["协作安全","ISO/TS 15066:2016","已发布·修订中","revising"]],standardDetail:"ISO/TS 15066:2016 当前仍为 Published，未来由 ISO/AWI 15066-1 替代；两类安全标准均不定义任务成功率。",priority:["任务成功","动作安全","闭环时延"],lowerPriority:"单纯追求峰值吞吐通常低于动作安全和闭环稳定性"},{id:"gis",name:"GIS / 测绘",icon:"map",metrics:"IoU、mAP、配准误差、拓扑错误率、P95 时延、空间查询吞吐",formula:"识别与配准分别计算；查询时延按数据规模、并发和空间范围分层。",description:"图像与目标识别精度、坐标投影一致性、快速检索、时空数据更新和可解释性。",standards:[["成果质量","GB/T 24356-2023","已核验现行","verified"],["数据交换","GB/T 17798-2007","已核验现行","verified"],["接口互操作","OGC API Features / WMS / WFS","版本待确认","pending"]],standardDetail:"IoU、mAP 属于项目测试口径；GB/T 24356 用于成果质量，GB/T 17798 用于数据交换，OGC 标准用于接口互操作。",priority:["识别精度","快速检索","空间一致性"],lowerPriority:"对非实时成果生产，毫秒级首 Token 时延通常不是首要目标"},{id:"medical",name:"医疗影像",icon:"heart-pulse",metrics:"灵敏度、特异度、AUROC、F1、漏诊率、误诊率、报告时延",formula:"按病种、设备、机构和人群分层；不能只报告总体平均值。性能阈值按适应证与临床评价方案确认。",description:"影像分析更重视诊断精度、漏诊风险、可追溯和医生复核，速度服从安全与质量。",standards:[["注册审评","人工智能医疗器械注册审查指导原则（2022年第8号）","已核验发布","verified"],["质量与研发","ISO 13485 / IEC 62304","适用性待确认","pending"],["数据安全","GB/T 39725-2020","适用性待确认","pending"]],standardDetail:"ISO 13485、IEC 62304 和 GB/T 39725 分别约束质量体系、软件生命周期和数据安全，不为灵敏度、特异度或 AUROC 设统一阈值。",priority:["诊断精度","漏诊风险","可追溯"],lowerPriority:"在满足临床流程时限后，极限生成速度低于准确性和医生复核"},{id:"finance",name:"金融风控",icon:"landmark",metrics:"AUC / KS、召回率、误报率、损失率、审计追溯时延",formula:"按业务、客群与时间窗口分层，并监测数据和模型漂移。",description:"风险可解释、稳定性、数据合规、审计、实时风控与模型漂移。",standards:[["模型与数据","JR/T 0223-2021 / JR/T 0197-2020","适用性待机构确认","pending"]],standardDetail:"金融标准版本、监管要求和适用范围需结合具体机构、产品和业务进一步核验。",priority:["风险识别","可解释性","审计追溯"],lowerPriority:"单次输出长度和生成文风低于决策稳定性、合规与可审计性"},{id:"industry",name:"工业制造",icon:"factory",metrics:"良率、缺陷检出率、漏检率、节拍、OEE、停机时长",formula:"按产线、产品、缺陷类别和班次分层；同时报告误检与漏检。",description:"实时控制与确定性、设备协议、边缘部署、工艺安全、连续运行和回滚。",standards:[["功能/工控安全","IEC 61508 / IEC 62443","边界待确认","pending"],["数字化车间","GB/T 37393-2019","适用性待确认","pending"]],standardDetail:"功能安全、工控安全和数字化车间要求按实际设备、控制回路与系统边界适用。",priority:["连续运行","缺陷检出","工艺安全"],lowerPriority:"通用对话体验低于确定性时延、协议兼容和现场可恢复性"},{id:"energy",name:"能源电力",icon:"zap",metrics:"负荷预测 MAE、故障召回率、告警时延、供电可用性、调度约束满足率",formula:"按区域、时间粒度、季节和极端天气分层；同时统计误报、漏报与告警闭环时长。",description:"安全稳定运行、预测可靠性、实时告警、设备寿命、调度约束与边缘自治。",standards:[["监控安全","《电力监控系统安全防护规定》（2024年第27号令）","已核验现行","verified"],["通信模型","IEC 61850","适用版本待确认","pending"]],standardDetail:"MAE、故障召回率等为项目测试口径；第27号令约束电力监控安全，IEC 61850 用于通信网络与信息模型。",priority:["安全稳定","预测可靠","告警闭环"],lowerPriority:"界面生成速度通常低于安全约束、预测可靠性和边缘自治"},{id:"logistics",name:"交通物流",icon:"route",metrics:"ETA MAE / RMSE、履约率、调度耗时、异常识别召回",formula:"按路线、时段、天气和订单类型分层计算预测误差。",description:"时空预测、实时调度、可靠性、异常处理、峰值并发和成本。",standards:[["物流信息","GB/T 35658-2017","状态与适用性待复核","pending"]],standardDetail:"具体业务还需核对交通运输行业的数据接口、安全规范及现行版本。",priority:["预测准确","调度效率","峰值稳定"],lowerPriority:"复杂生成效果通常低于 ETA 准确、履约率和峰值成本控制"}],T=[{name:"Train TPS",label:"训练吞吐",formula:"统计周期内处理的训练 Token 或样本数 ÷ 有效训练时间",note:"记录并行策略、批大小、精度、有效卡数和通信开销。",unit:"token/s"},{name:"Recovery",label:"训练恢复时长",formula:"训练任务恢复运行时间 − 故障确认时间",note:"结合检查点间隔、数据重载、重新调度和恢复后的有效进度。",unit:"min"},{name:"TTFT",label:"首 Token 时延",formula:"首个输出 Token 时间 − 请求到达时间",note:"衡量初始响应速度。固定输入长度、并发与预热状态。",unit:"ms"},{name:"TPOT",label:"输出 Token 间时延",formula:"生成阶段耗时 ÷ 输出 Token 数",note:"衡量持续生成速度。说明统计区间及是否包含首 Token。",unit:"ms/token"},{name:"Throughput",label:"输出吞吐",formula:"单位时间生成的输出 Token 数",note:"明确输出长度、并发、精度与批处理策略。",unit:"token/s"},{name:"Effective",label:"有效 Token 率",formula:"满足任务要求的输出 Token ÷ 总输出 Token",note:"有效性判定必须预先定义并可复核。",unit:"%"},{name:"KV Hit",label:"KV Cache 命中率",formula:"命中请求或 Token ÷ 可复用总量",note:"说明前缀复用、缓存容量与淘汰规则。",unit:"%"},{name:"Success",label:"调用成功率",formula:"成功请求 ÷ 总请求",note:"明确超时、取消、重试与降级的统计口径。",unit:"%"},{name:"Availability",label:"服务可用性",formula:"可用时间 ÷ 统计周期",note:"结合计划维护、SLA、恢复与容灾演练。",unit:"%"},{name:"Cost",label:"单位 Token 成本",formula:"对应费用 ÷ Token 数 × 1,000,000",note:"分输入与输出，说明折扣、缓存和失败请求。",unit:"元/1M token"},{name:"Energy",label:"单位 Token 能耗",formula:"推理阶段能耗 ÷ 有效输出 Token",note:"记录测量边界、采样方法与有效 Token 口径。",unit:"J/token"}],Mt=[["短入短出","[512, 512]","交互响应与首 Token 体验"],["长入短出","[32K, 512]","长上下文 Prefill 能力"],["短入长出","[512, 4096]","持续生成与 Decode 吞吐"],["超长上下文","[128K / 1M]","容量、KV Cache 与稳定性"],["并发阶梯","1 → 4 → 8 → 饱和","时延、吞吐、错误率联合约束"]];function l(t,e=20){return`<i data-lucide="${t}" style="width:${e}px;height:${e}px"></i>`}function bt(){document.querySelector("[data-industry-insights]").innerHTML=y.map(t=>`<article><span>${l(t.icon,18)}</span><div><b>${t.name}</b><p>${t.priority.join(" · ")}</p></div><i data-lucide="arrow-up-right"></i></article>`).join(""),document.querySelector("[data-benchmark-strip]").innerHTML=`<div class="benchmark-heading"><span>BENCHMARK MATRIX</span><b>建议的统一测试场景</b><small>先统一条件，再比较结论</small></div>${Mt.map(t=>`<div class="benchmark-item"><b>${t[0]}</b><span>${t[1]}</span><small>${t[2]}</small></div>`).join("")}`}let m="public";function A(){const t=document.querySelector("[data-deployment-tabs]");t.innerHTML=w.map(a=>`<button type="button" role="tab" aria-selected="${a.id===m}" class="${a.id===m?"active":""}" data-deployment="${a.id}">${l(a.icon,17)}${a.name}</button>`).join("");const e=w.find(a=>a.id===m);document.querySelector("[data-deployment-panel]").innerHTML=`
    <div class="deployment-summary"><p>${e.tagline}</p><h3>${e.name}</h3><span>适用场景</span><p>${e.fit}</p></div>
    <div class="deployment-facts">
      <div><span>客户更关注</span><ul>${e.focus.map(a=>`<li>${l("circle-dot",14)}${a}</li>`).join("")}</ul></div>
      <div><span>成本结构</span><p>${e.cost}</p></div>
      <div><span>责任边界</span><p>${e.boundary}</p></div>
    </div>`,t.querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{m=a.dataset.deployment,A(),u()}))}function $(t){return t.map(([e,a,r,n])=>`<span class="standard-line"><b>${e}</b><span class="standard-name">${a}</span><em class="status-${n}">${r}</em></span>`).join("")}function wt(){document.querySelector("[data-industry-count]").textContent=`${y.length} 个行业`,document.querySelector("[data-industry-body]").innerHTML=y.map(t=>`
    <tr>
      <td data-label="名称"><span class="industry-name">${l(t.icon,18)}${t.name}</span></td>
      <td data-label="计算指标与项目口径">${t.metrics}<small class="metric-boundary">具体阈值按任务与验收方案确定</small></td>
      <td data-label="侧重点 / 相对低优先级"><b class="priority-label">重点：</b>${t.description}<small class="lower-priority"><b>相对低优先级：</b>${t.lowerPriority}</small></td>
      <td data-label="适用依据 / 用途 / 状态">${$(t.standards)}</td>
      <td><button class="icon-button detail-button" type="button" aria-label="查看${t.name}详情" data-industry-id="${t.id}">${l("arrow-up-right",17)}</button></td>
    </tr>`).join(""),document.querySelectorAll("[data-industry-id]").forEach(t=>t.addEventListener("click",()=>Tt(t.dataset.industryId))),u()}function Tt(t){const e=y.find(r=>r.id===t),a=document.querySelector("[data-industry-dialog]");document.querySelector("[data-dialog-content]").innerHTML=`
    <p class="kicker">行业需求详情</p><div class="dialog-title"><span>${l(e.icon,25)}</span><h2>${e.name}</h2></div>
    <p class="dialog-lead">${e.description}</p>
    <div class="priority-row">${e.priority.map(r=>`<span>${r}</span>`).join("")}</div>
    <dl><div><dt>计算方式与口径</dt><dd>${e.formula}</dd></div><div><dt>关键指标</dt><dd>${e.metrics}</dd></div><div><dt>相对低优先级</dt><dd>${e.lowerPriority}</dd></div><div><dt>适用依据与状态</dt><dd>${$(e.standards)}<small>${e.standardDetail}</small></dd></div></dl>`,a.showModal(),u()}let v=0;function S(){document.querySelector("[data-metric-list]").innerHTML=T.map((e,a)=>`<button type="button" class="${a===v?"active":""}" data-metric="${a}"><span>${e.name}</span><small>${e.label}</small>${l("chevron-right",16)}</button>`).join("");const t=T[v];document.querySelector("[data-metric-detail]").innerHTML=`<span class="metric-unit">${t.unit}</span><p class="kicker">${t.name}</p><h3>${t.label}</h3><div class="formula">${t.formula}</div><p>${t.note}</p><div class="condition-note">${l("info",17)}统一模型、精度、硬件、输入输出长度、并发与服务目标后再比较</div>`,document.querySelectorAll("[data-metric]").forEach(e=>e.addEventListener("click",()=>{v=Number(e.dataset.metric),S(),u()}))}function xt(){const t=document.querySelector("[data-network-canvas]"),e=t.getContext("2d");let a,r,n;const d=()=>{const i=Math.min(devicePixelRatio||1,2);a=t.clientWidth,r=t.clientHeight,t.width=a*i,t.height=r*i,e.setTransform(i,0,0,i,0,0);const h=a<700?22:46;n=Array.from({length:h},(p,s)=>({x:a*(.42+Math.random()*.56),y:Math.random()*r,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.14,r:s%9===0?4:2,color:s%7===0?"#f6c851":s%5===0?"#ff7668":"#5ce1e6"}))},c=()=>{e.clearRect(0,0,a,r),n.forEach((i,h)=>{i.x+=i.vx,i.y+=i.vy,(i.x<a*.38||i.x>a)&&(i.vx*=-1),(i.y<0||i.y>r)&&(i.vy*=-1),n.slice(h+1).forEach(p=>{const s=Math.hypot(i.x-p.x,i.y-p.y);s<145&&(e.strokeStyle=`rgba(92,225,230,${.13*(1-s/145)})`,e.lineWidth=1,e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(p.x,p.y),e.stroke())}),e.fillStyle=i.color,e.globalAlpha=.72,e.beginPath(),e.arc(i.x,i.y,i.r,0,Math.PI*2),e.fill(),e.globalAlpha=1}),requestAnimationFrame(c)};d(),c(),window.addEventListener("resize",d)}function At(){const t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-mobile-nav]");t.addEventListener("click",()=>{const a=e.classList.toggle("open");t.setAttribute("aria-expanded",String(a)),t.setAttribute("aria-label",a?"关闭导航":"打开导航")}),e.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{e.classList.remove("open"),t.setAttribute("aria-expanded","false")})),window.addEventListener("scroll",()=>document.querySelector("[data-header]").classList.toggle("scrolled",scrollY>20),{passive:!0})}const $t={capabilities:"01 / 能力全景 · 国产异构算力",deployment:"02 / Token 工厂 · 部署与服务",industries:"03 / 垂直行业 · 需求矩阵",metrics:"04 / 评价体系 · 指标字典",evidence:"05 / 证据中心 · 来源与边界"};function k(){const t=window.location.hash.replace("#",""),e=!t||t==="top";document.body.classList.toggle("route-home",e),document.body.classList.toggle("route-detail",!e),document.querySelectorAll("[data-route-section]").forEach(r=>r.classList.toggle("active-route",r.dataset.routeSection===t)),document.querySelector("[data-route-toolbar]").classList.toggle("visible",!e),document.querySelector("[data-route-title]").textContent=$t[t]||"内容页面",document.querySelectorAll("[data-route-link], .desktop-nav a, .mobile-nav a").forEach(r=>r.classList.toggle("active-link",r.getAttribute("href")===`#${t}`)),window.scrollTo({top:0,behavior:"instant"})}function u(){gt({icons:ft})}A();wt();S();bt();xt();At();u();k();window.addEventListener("hashchange",k);document.querySelector("[data-dialog-close]").addEventListener("click",()=>document.querySelector("[data-industry-dialog]").close());document.querySelector("[data-industry-dialog]").addEventListener("click",t=>{t.target===t.currentTarget&&t.currentTarget.close()});
