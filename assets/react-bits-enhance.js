/* ==========================================================================
   React Bits 风格增强层（原生 JS 版，无依赖）
   按 React Bits (reactbits.dev) 组件的效果思路改写，适配本站纯 HTML 结构：
     Aurora · BlurText · ShinyText · CountUp · SpotlightCard
     AnimatedContent · DecryptedText · Magnet · ClickSpark
   在 main.js 之后加载；任何一项出错都不会影响页面原有功能。
   ========================================================================== */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const safe = (name, fn) => { try { fn(); } catch (e) { console.warn('[react-bits-enhance] ' + name, e); } };

  /* 让 --rb-so 可以平滑过渡（聚光淡入淡出） */
  safe('registerProperty', () => {
    if (window.CSS && CSS.registerProperty) {
      CSS.registerProperty({ name: '--rb-so', syntax: '<number>', inherits: true, initialValue: '0' });
    }
  });

  /* ------------------------------------------------------------------
     1. Aurora —— 首屏 WebGL 极光背景（移植自 React Bits Aurora 着色器）
     ------------------------------------------------------------------ */
  function initAurora() {
    const hero = $('.hero');
    if (!hero || reduceMotion) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'rb-aurora';
    canvas.setAttribute('aria-hidden', 'true');
    hero.prepend(canvas);
    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) { canvas.remove(); return; }

    const vert = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
    const frag = `
precision highp float;
uniform float uTime;uniform float uAmp;uniform float uBlend;uniform vec2 uRes;
uniform vec3 uC0;uniform vec3 uC1;uniform vec3 uC2;
vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x,289.0);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}
vec3 ramp(float t){
  return t<0.5? mix(uC0,uC1,t/0.5) : mix(uC1,uC2,(t-0.5)/0.5);
}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes;
  vec3 col=ramp(uv.x);
  float h=snoise(vec2(uv.x*2.0+uTime*0.1,uTime*0.25))*0.5*uAmp;
  h=exp(h);
  h=(uv.y*2.0-h+0.2);
  float intensity=0.6*h;
  float mid=0.20;
  float a=smoothstep(mid-uBlend*0.5,mid+uBlend*0.5,intensity);
  vec3 c=intensity*col;
  gl_FragColor=vec4(c*a,a);
}`;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    const U = n => gl.getUniformLocation(prog, n);
    const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
    // 品牌色：深青 → 主青 → 深蓝青，保持克制
    gl.uniform3fv(U('uC0'), hex('#2a9d97'));
    gl.uniform3fv(U('uC1'), hex('#5ce1e6'));
    gl.uniform3fv(U('uC2'), hex('#2f6f9a'));
    gl.uniform1f(U('uAmp'), 1.15);
    gl.uniform1f(U('uBlend'), 0.55);
    const uTime = U('uTime'), uRes = U('uRes');

    const SCALE = 0.5; // 极光本身是柔和渐变，半分辨率渲染足够且更省电
    const resize = () => {
      const w = Math.max(1, Math.round(hero.clientWidth * SCALE));
      const h = Math.max(1, Math.round(hero.clientHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    let visible = true, raf = 0;
    const start = performance.now();
    const shouldRun = () => visible && !document.hidden && hero.offsetParent !== null;
    const frame = t => {
      raf = 0;
      if (!shouldRun()) return;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, (t - start) * 0.001 * 0.6);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    const kick = () => { if (!raf && shouldRun()) { resize(); raf = requestAnimationFrame(frame); } };
    new IntersectionObserver(es => { visible = es[0].isIntersecting; kick(); }).observe(hero);
    document.addEventListener('visibilitychange', kick);
    window.addEventListener('hashchange', () => setTimeout(kick, 50));
    kick();
    requestAnimationFrame(() => canvas.classList.add('is-ready'));
  }

  /* ------------------------------------------------------------------
     2. BlurText —— 标题逐字模糊浮现
     ------------------------------------------------------------------ */
  function splitChars(el) {
    if (el.dataset.rbSplit) return;
    el.dataset.rbSplit = '1';
    if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    let i = 0;
    const walk = node => {
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          for (const ch of child.textContent) {
            if (/\s/.test(ch) && !ch.trim()) { frag.append(ch === '\n' ? '' : ' '); continue; }
            const s = document.createElement('span');
            s.className = 'rb-blur-char';
            s.setAttribute('aria-hidden', 'true');
            s.style.setProperty('--i', i++);
            s.textContent = ch;
            frag.append(s);
          }
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
  }
  function playBlur(el) {
    if (!el || reduceMotion) return;
    splitChars(el);
    el.classList.remove('rb-blur-run');
    void el.offsetWidth; // 重新触发动画
    el.classList.add('rb-blur-run');
  }
  function initBlurText() {
    if (reduceMotion) return;
    playBlur($('#hero-title'));
    const playRoute = () => {
      const h = $('.active-route .section-heading h2');
      if (h) playBlur(h);
      if (document.body.classList.contains('route-home')) playBlur($('#hero-title'));
    };
    window.addEventListener('hashchange', () => requestAnimationFrame(playRoute));
    requestAnimationFrame(playRoute);
  }

  /* ------------------------------------------------------------------
     3. ShinyText —— 小标题流光
     ------------------------------------------------------------------ */
  function initShiny() {
    if (reduceMotion) return;
    $$('.hero .eyebrow, .section-heading .kicker').forEach(el => el.classList.add('rb-shiny'));
  }

  /* ------------------------------------------------------------------
     4. CountUp —— 首屏数字滚动
     ------------------------------------------------------------------ */
  function initCountUp() {
    $$('.hero-stats dt').forEach(dt => {
      const target = parseFloat(dt.textContent);
      if (!isFinite(target) || reduceMotion) return;
      dt.classList.add('rb-count');
      dt.setAttribute('aria-label', String(target));
      const run = () => {
        const dur = 1400 + target * 40, t0 = performance.now();
        const step = t => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 4);
          dt.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(step);
        };
        dt.textContent = '0';
        requestAnimationFrame(step);
      };
      let played = false;
      new IntersectionObserver((es, io) => {
        if (es[0].isIntersecting && !played) { played = true; setTimeout(run, 500); io.disconnect(); }
      }).observe(dt);
    });
  }

  /* ------------------------------------------------------------------
     5. SpotlightCard —— 卡片聚光 + 顶部高光线
     ------------------------------------------------------------------ */
  const SPOT_SELECTOR = [
    '.hero-pillar',
    '.capability-card',
    '.factory-grid > article',
    '.industry-table tbody tr',
    '.validation-card',
    '.platform-portal',
    '.route-section article'
  ].join(',');

  function decorateSpot(el) {
    if (el.dataset.rbSpot) return;
    el.dataset.rbSpot = '1';
    el.classList.add('rb-spotlight');
    if (el.tagName === 'TR') {
      // 表格行的单元格各有底色，径向光会被切成条带；改用整行描边光晕
      el.classList.add('rb-spot-row');
      return;
    }
    const cs = getComputedStyle(el);
    const orig = cs.backgroundImage && cs.backgroundImage !== 'none' ? ', ' + cs.backgroundImage : '';
    el.style.backgroundImage =
      'radial-gradient(420px circle at var(--rb-sx) var(--rb-sy), rgba(var(--rb-tone), calc(.11 * var(--rb-so))), transparent 65%)' + orig;
    if (cs.position !== 'static') {
      el.classList.add('rb-spot-edge');
      const edge = document.createElement('span');
      edge.className = 'rb-edge';
      edge.setAttribute('aria-hidden', 'true');
      el.append(edge);
    }
  }
  function initSpotlight() {
    if (!finePointer) return;
    $$(SPOT_SELECTOR).forEach(decorateSpot);
    // 行业表格行由脚本渲染/筛选，后续新增的元素也补上
    new MutationObserver(() => $$(SPOT_SELECTOR).forEach(decorateSpot))
      .observe(document.body, { childList: true, subtree: true });

    let current = null;
    document.addEventListener('pointermove', e => {
      const card = e.target.closest && e.target.closest('.rb-spotlight');
      if (current && current !== card) current.classList.remove('is-lit');
      current = card;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--rb-sx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--rb-sy', (e.clientY - r.top) + 'px');
      card.classList.add('is-lit');
    }, { passive: true });
    document.addEventListener('pointerleave', () => current && current.classList.remove('is-lit'));
  }

  /* ------------------------------------------------------------------
     6. AnimatedContent —— 区块进入视口时依次上浮淡入
     ------------------------------------------------------------------ */
  const REVEAL_SELECTOR = [
    '.hero-actions', '.hero-stats', '.hero-pillar',
    '.route-section .section-heading', '.route-section .subsection-heading',
    '.route-section article', '.industry-table tbody tr',
    '.comparison-table-wrap', '.deployment-summary', '.deployment-facts',
    '.metric-list', '.metric-detail', '.benchmark-heading',
    '.validation-item', '.platform-portal', '.industry-toolbar'
  ].join(',');

  function initReveal() {
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const el = en.target;
        if (en.isIntersecting) {
          el.classList.add('is-in');
        } else if (el.offsetParent === null) {
          // 所在路由被隐藏：复位，下次切回时重新播放
          el.classList.remove('is-in');
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    const decorate = () => {
      const all = $$(REVEAL_SELECTOR).filter(el => !el.dataset.rbReveal);
      const set = new Set($$(REVEAL_SELECTOR));
      all.forEach(el => {
        // 避免父子元素重复动画
        let p = el.parentElement, nested = false;
        while (p) { if (set.has(p)) { nested = true; break; } p = p.parentElement; }
        el.dataset.rbReveal = '1';
        if (nested) return;
        const sibs = Array.from(el.parentElement.children).filter(c => c.matches(REVEAL_SELECTOR));
        el.style.setProperty('--rb-d', Math.min(sibs.indexOf(el), 8));
        el.classList.add('rb-reveal');
        io.observe(el);
      });
    };
    decorate();
    new MutationObserver(decorate).observe(document.body, { childList: true, subtree: true });
  }

  /* ------------------------------------------------------------------
     7. DecryptedText —— 英文编号解码效果（加载时 + 悬停时）
     ------------------------------------------------------------------ */
  function initDecrypt() {
    if (reduceMotion) return;
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%&';
    $$('.pillar-index').forEach(el => {
      const original = el.textContent;
      el.classList.add('rb-decrypt');
      el.setAttribute('aria-label', original);
      let timer = 0;
      const play = () => {
        clearInterval(timer);
        let revealed = 0;
        timer = setInterval(() => {
          revealed += 0.6;
          let html = '';
          for (let i = 0; i < original.length; i++) {
            const ch = original[i];
            if (i < revealed || ch === ' ' || ch === '/') html += ch;
            else html += '<span class="rb-scramble">' + CHARS[(Math.random() * CHARS.length) | 0] + '</span>';
          }
          el.innerHTML = html;
          if (revealed >= original.length) { clearInterval(timer); el.textContent = original; }
        }, 35);
      };
      setTimeout(play, 700);
      const card = el.closest('.hero-pillar');
      if (card && finePointer) card.addEventListener('mouseenter', play);
    });
  }

  /* ------------------------------------------------------------------
     8. Magnet —— 首屏按钮磁吸
     ------------------------------------------------------------------ */
  function initMagnet() {
    if (reduceMotion || !finePointer) return;
    const PAD = 60, STRENGTH = 5;
    const btns = $$('.hero-actions .button');
    btns.forEach(b => b.classList.add('rb-magnet'));
    document.addEventListener('pointermove', e => {
      btns.forEach(b => {
        const r = b.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const near = Math.abs(e.clientX - cx) < r.width / 2 + PAD && Math.abs(e.clientY - cy) < r.height / 2 + PAD;
        if (near) {
          b.classList.add('is-pulling');
          b.style.setProperty('--rb-mx', ((e.clientX - cx) / STRENGTH).toFixed(1) + 'px');
          b.style.setProperty('--rb-my', ((e.clientY - cy) / STRENGTH).toFixed(1) + 'px');
        } else if (b.classList.contains('is-pulling')) {
          b.classList.remove('is-pulling');
          b.style.setProperty('--rb-mx', '0px');
          b.style.setProperty('--rb-my', '0px');
        }
      });
    }, { passive: true });
    const primary = $('.hero-actions .button.primary');
    if (primary) primary.classList.add('rb-shine-btn');
  }

  /* ------------------------------------------------------------------
     9. ClickSpark —— 点击处迸出细小火花
     ------------------------------------------------------------------ */
  function initClickSpark() {
    if (reduceMotion) return;
    const c = document.createElement('canvas');
    c.className = 'rb-spark-layer';
    c.setAttribute('aria-hidden', 'true');
    document.body.append(c);
    const ctx = c.getContext('2d');
    let sparks = [], raf = 0;
    const size = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      c.width = innerWidth * d; c.height = innerHeight * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    size();
    window.addEventListener('resize', size);
    const DUR = 420, COUNT = 8, RADIUS = 18, LEN = 9;
    const draw = now => {
      ctx.clearRect(0, 0, c.width, c.height);
      sparks = sparks.filter(s => now - s.t < DUR);
      sparks.forEach(s => {
        const p = (now - s.t) / DUR, e = p * (2 - p);
        const dist = e * RADIUS, len = LEN * (1 - e);
        const x1 = s.x + dist * Math.cos(s.a), y1 = s.y + dist * Math.sin(s.a);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = 1 - p;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 + len * Math.cos(s.a), y1 + len * Math.sin(s.a));
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      raf = sparks.length ? requestAnimationFrame(draw) : 0;
    };
    document.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      const onLight = !e.target.closest('.hero, .site-header, .route-section, [class*="dark"]');
      const color = onLight ? '#24aeb4' : '#5ce1e6';
      const t = performance.now();
      for (let i = 0; i < COUNT; i++) sparks.push({ x: e.clientX, y: e.clientY, a: (2 * Math.PI * i) / COUNT, t, color });
      if (!raf) raf = requestAnimationFrame(draw);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  const boot = () => {
    safe('Aurora', initAurora);
    safe('BlurText', initBlurText);
    safe('ShinyText', initShiny);
    safe('CountUp', initCountUp);
    safe('Spotlight', initSpotlight);
    safe('Reveal', initReveal);
    safe('Decrypt', initDecrypt);
    safe('Magnet', initMagnet);
    safe('ClickSpark', initClickSpark);
  };
  // 站点有访问口令页：等口令通过、内容可见后再启动，确保动画是给用户看到的
  const whenAccessible = fn => {
    const root = document.documentElement;
    if (!root.classList.contains('access-pending')) return fn();
    const mo = new MutationObserver(() => {
      if (!root.classList.contains('access-pending')) { mo.disconnect(); fn(); }
    });
    mo.observe(root, { attributes: true, attributeFilter: ['class'] });
  };
  const start = () => whenAccessible(boot);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
