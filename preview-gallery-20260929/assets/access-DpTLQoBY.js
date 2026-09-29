(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const i="se-capability-access-v1",l=480*60*1e3,d="65dcd1aa364e1887c521ebf78342d873d7bb40bb51971fd102aade8a0028e1f8";function u(){try{const e=JSON.parse(localStorage.getItem(i)||"null");return(e==null?void 0:e.expiresAt)>Date.now()}catch{return!1}}function f(){var e;localStorage.setItem(i,JSON.stringify({expiresAt:Date.now()+l})),document.documentElement.classList.remove("access-pending"),(e=document.querySelector(".access-gate"))==null||e.remove()}async function m(e){const c=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",c);return Array.from(new Uint8Array(o),r=>r.toString(16).padStart(2,"0")).join("")}function a(){const e=document.createElement("section");e.className="access-gate",e.setAttribute("aria-labelledby","access-title"),e.innerHTML=`
    <div class="access-panel">
      <span class="access-index">PRIVATE REVIEW / ACCESS CONTROL</span>
      <h1 id="access-title">访问验证</h1>
      <p>当前内容仅用于内部评审。请输入访问口令后继续，验证状态将在本浏览器保留 8 小时。</p>
      <form class="access-form">
        <label for="site-access-code">访问口令</label>
        <div class="access-control">
          <input id="site-access-code" name="accessCode" type="password" autocomplete="current-password" placeholder="请输入访问口令" required />
          <button type="submit">验证并进入</button>
        </div>
        <div class="access-error" role="alert" aria-live="polite"></div>
      </form>
      <small class="access-footnote">智能系统与工程能力中心 · 内部预览</small>
    </div>`,document.body.prepend(e);const c=e.querySelector("form"),o=e.querySelector("input"),r=e.querySelector("button"),t=e.querySelector(".access-error");o.focus(),c.addEventListener("submit",async s=>{if(s.preventDefault(),r.disabled=!0,r.textContent="验证中...",await m(o.value.trim())===d){f();return}t.textContent="访问口令不正确，请确认后重新输入。",o.select(),r.disabled=!1,r.textContent="验证并进入"})}u()?document.documentElement.classList.remove("access-pending"):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a,{once:!0}):a();
