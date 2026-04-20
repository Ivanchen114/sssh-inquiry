// ═══════════════════════════════════════════════════
//  Sidebar 資料結構
// ═══════════════════════════════════════════════════
const NAV_DATA = [
  {
    label: '課程',
    items: [
      { name: '🧭 網站操作說明', path: 'tools/guide.html' },
      { name: '課程總覽', path: 'index.html' },
    ]
  },
  {
    label: '測量工具',
    items: [
      { name: '課程說明 × 疫苗選擇', path: 'units/phase1/vaccine.html' },
      { name: '有效數字與不確定度', path: 'units/phase1/uncertainty.html' },
    ]
  },
  {
    sublabel: '主題 · 單擺',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模', path: 'units/phase1/pendulum-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究', path: 'units/phase2/pendulum-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：10 秒競賽', path: 'units/phase3/pendulum-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · 彈簧',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：虎克定律', path: 'units/phase1/spring-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：變因設計', path: 'units/phase2/spring-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：橡皮筋磅秤', path: 'units/phase3/spring-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · 浮力',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：阿基米德', path: 'units/phase1/buoyancy-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：鐵達尼號', path: 'units/phase2/buoyancy-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：智造微船', path: 'units/phase3/buoyancy-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · 聲音',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：頻率與波形', path: 'units/phase1/sound-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：聲音變因', path: 'units/phase2/sound-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：水瓶琴競賽', path: 'units/phase3/sound-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · 翻滾仔',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：滾動數據', path: 'units/phase1/roller-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：變因設計', path: 'units/phase2/roller-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：競速競賽', path: 'units/phase3/roller-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · 橡皮筋動力罐',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：能量轉換', path: 'units/phase1/rubber-band-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：變因設計', path: 'units/phase2/rubber-band-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：精準回滾', path: 'units/phase3/rubber-band-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · DNA 繞射',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：繞射數據', path: 'units/phase1/diffraction-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：光學實驗', path: 'units/phase2/diffraction-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：用光看結構', path: 'units/phase3/diffraction-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · 冰屋',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：鹽冰降溫', path: 'units/phase1/icehouse-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：保冷方案', path: 'units/phase2/icehouse-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：保冷箱競賽', path: 'units/phase3/icehouse-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '主題 · 紙飛機',
    phase: 1,
    items: [
      { name: 'Lv1 論證建模：拋體運動', path: 'units/phase1/airplane-lv1.html', week: 'Lv1' },
      { name: 'Lv2 規劃研究：變因設計', path: 'units/phase2/airplane-lv2.html', week: 'Lv2' },
      { name: 'Lv3 發現問題：定點降落', path: 'units/phase3/airplane-lv3.html', week: 'Lv3' },
    ]
  },
  {
    sublabel: '研究工具',
    phase: 2,
    items: [
      { name: '論證建模工具', path: 'units/phase2/argument-model.html' },
      { name: '研究規劃表', path: 'units/phase2/research-plan.html' },
      { name: '問題發現單', path: 'units/phase3/question-discover.html' },
      { name: '冪級數與線性化', path: 'units/phase2/power-law.html' },
      { name: '報告撰寫規範', path: 'units/phase2/report.html' },
      { name: '期末成果發表', path: 'units/phase3/final.html' },
    ]
  },
  {
    label: '資源',
    items: [
      { name: '工具箱', path: 'tools/index.html' },
      { name: '　表達與分享', path: 'tools/presentation.html' },
      { name: '　ORID 反思框架', path: 'tools/orid.html' },
      { name: '　Excel 數據分析', path: 'tools/excel.html' },
      { name: '　數據分析工坊', path: 'tools/data-workshop.html' },
      { name: '　學習歷程指引', path: 'tools/portfolio.html' },
      { name: '　自主探究指引', path: 'tools/independent-research.html' },
      { name: '　什麼是好的探究問題', path: 'tools/good-question.html' },
      { name: '　課綱能力對應', path: 'tools/curriculum-map.html' },
      { name: '練習場', path: 'practice/index.html' },
    ]
  }
];

const PHASE_COLORS = { 1: '#2952c4', 2: '#1e7a52', 3: '#b5621e' };

// ═══════════════════════════════════════════════════
//  模組展開狀態記憶（localStorage）
// ═══════════════════════════════════════════════════
const MODULE_STATE_KEY = 'sssh_nav_modules';

function _readModuleStates() {
  try { return JSON.parse(localStorage.getItem(MODULE_STATE_KEY)) || {}; }
  catch { return {}; }
}

function getModuleState(name) {
  const states = _readModuleStates();
  return name in states ? states[name] : null;
}

function setModuleState(name, isOpen) {
  const states = _readModuleStates();
  states[name] = isOpen;
  localStorage.setItem(MODULE_STATE_KEY, JSON.stringify(states));
}

// ═══════════════════════════════════════════════════
//  路徑工具
// ═══════════════════════════════════════════════════
function resolvePath(rootRelPath) {
  const root = window.SITE_ROOT || '.';
  return root + '/' + rootRelPath;
}

function isActivePath(rootRelPath) {
  const resolved = resolvePath(rootRelPath);
  const current  = window.location.pathname;
  // 比對檔名結尾
  return current.endsWith(rootRelPath) ||
         current.endsWith(rootRelPath.replace('index.html', '')) ||
         (rootRelPath === 'index.html' && (current.endsWith('/') || current.endsWith('/index.html')));
}

// ═══════════════════════════════════════════════════
//  Sidebar 產生
// ═══════════════════════════════════════════════════
function buildSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.id = 'sidebar';

  // Brand
  const logoPath = resolvePath('image/songshan-logo.svg');
  sidebar.innerHTML = `
    <div id="sidebar-brand">
      <div class="brand-row">
        <img src="${logoPath}" alt="松山高中校徽" class="brand-logo" />
        <div>
          <span class="site-title">探究與實作</span>
          <span class="site-sub">松山高中 SSSH · 108 課綱</span>
        </div>
      </div>
    </div>
    <nav id="sidebar-nav"></nav>
    <div id="sidebar-footer">
      <button id="teacher-toggle">👤 教師模式：關閉</button>
    </div>
  `;

  const nav = sidebar.querySelector('#sidebar-nav');

  NAV_DATA.forEach(section => {
    // Section label
    if (section.label) {
      const lbl = document.createElement('div');
      lbl.className = 'nav-label';
      lbl.textContent = section.label;
      nav.appendChild(lbl);
    }

    // 判斷此區塊是否為可收合的「主題模組」（有 sublabel 且 items 含 week 標籤）
    const isCollapsibleModule = section.sublabel && section.items.some(i => i.week);
    const moduleKey = section.sublabel || null; // 作為 localStorage key

    // Sublabel with phase dot
    let toggleEl = null;
    if (section.sublabel) {
      const sub = document.createElement('div');
      sub.className = 'nav-sublabel';
      const color = PHASE_COLORS[section.phase] || '#ababc4';

      if (isCollapsibleModule) {
        sub.classList.add('nav-module-toggle');
        sub.innerHTML = `<span class="dot" style="background:${color}"></span>${section.sublabel}<span class="module-arrow">›</span>`;
        sub.style.cursor = 'pointer';
        sub.style.userSelect = 'none';
        toggleEl = sub;
      } else {
        sub.innerHTML = `<span class="dot" style="background:${color}"></span>${section.sublabel}`;
      }
      nav.appendChild(sub);
    }

    // 如果是可收合模組，包一層容器
    let itemContainer = nav;

    if (isCollapsibleModule) {
      const hasActivePage = section.items.some(i => isActivePath(i.path));
      // 優先看 localStorage 記憶，若無記錄則以「當前頁面是否在此模組」為預設
      const saved = getModuleState(moduleKey);
      const shouldOpen = saved !== null ? saved : hasActivePage;

      itemContainer = document.createElement('div');
      itemContainer.className = 'nav-module-items' + (shouldOpen ? ' open' : '');
      nav.appendChild(itemContainer);
    }

    // Items
    section.items.forEach(item => {
      const a = document.createElement('a');
      a.className = 'nav-item' + (isActivePath(item.path) ? ' active' : '');
      a.href = resolvePath(item.path);

      const dot = document.createElement('span');
      dot.className = 'dot';

      const name = document.createElement('span');
      name.textContent = item.name;
      name.style.flex = '1';
      name.style.overflow = 'hidden';
      name.style.textOverflow = 'ellipsis';

      a.appendChild(dot);
      a.appendChild(name);

      if (item.week) {
        const tag = document.createElement('span');
        tag.className = 'week-tag';
        tag.textContent = item.week;
        a.appendChild(tag);
      }

      itemContainer.appendChild(a);
    });

    // 綁定收合行為 + 記憶狀態
    if (isCollapsibleModule && toggleEl) {
      if (itemContainer.classList.contains('open')) toggleEl.classList.add('open');
      toggleEl.addEventListener('click', () => {
        const isOpen = itemContainer.classList.toggle('open');
        toggleEl.classList.toggle('open', isOpen);
        setModuleState(moduleKey, isOpen);
      });
    }
  });

  return sidebar;
}

// ═══════════════════════════════════════════════════
//  教師模式
// ═══════════════════════════════════════════════════
const TEACHER_KEY = 'sssh_inquiry_teacher';

function initTeacherMode() {
  const btn = document.getElementById('teacher-toggle');
  if (!btn) return;

  const isOn = () => localStorage.getItem(TEACHER_KEY) === '1';

  function apply(on) {
    document.querySelectorAll('.teacher-only').forEach(el => {
      el.style.display = on ? '' : 'none';
    });
    btn.textContent = on ? '🎓 教師模式：開啟' : '👤 教師模式：關閉';
    btn.classList.toggle('on', on);
  }

  apply(isOn());
  btn.addEventListener('click', () => {
    const next = !isOn();
    localStorage.setItem(TEACHER_KEY, next ? '1' : '0');
    apply(next);
  });
}

// ═══════════════════════════════════════════════════
//  桌面 Sidebar 收合（⌘/Ctrl + \ 或點按鈕）
//  狀態存 localStorage，跨頁跨 session 持續
// ═══════════════════════════════════════════════════
function initDesktopSidebarToggle() {
  // 手機寬度用漢堡鈕，不建立桌面切換鈕
  const mobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  if (mobile) return;

  // 沒 sidebar 的頁面也不做
  if (!document.getElementById('sidebar')) return;

  const STORAGE_KEY = 'sssh-sidebar-collapsed';
  const btn = document.createElement('button');
  btn.id = 'sidebar-toggle';
  btn.setAttribute('aria-label', '收合或展開側欄');
  btn.title = '收合／展開側欄（⌘\\ 或 Ctrl+\\）';
  document.body.appendChild(btn);

  // 暫停 transition 避免初始閃動
  document.body.classList.add('no-sidebar-transition');

  function apply(collapsed) {
    document.body.classList.toggle('sidebar-collapsed', collapsed);
    btn.textContent = collapsed ? '›' : '‹';
    try { localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0'); } catch (e) {}
  }

  let initCollapsed = false;
  try { initCollapsed = localStorage.getItem(STORAGE_KEY) === '1'; } catch (e) {}
  apply(initCollapsed);

  // 下一幀再解除 transition 鎖
  requestAnimationFrame(() => {
    document.body.classList.remove('no-sidebar-transition');
  });

  btn.addEventListener('click', () => {
    apply(!document.body.classList.contains('sidebar-collapsed'));
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
      e.preventDefault();
      apply(!document.body.classList.contains('sidebar-collapsed'));
    }
  });
}

// ═══════════════════════════════════════════════════
//  手機 Sidebar 開關
// ═══════════════════════════════════════════════════
function initMobileMenu() {
  const btn      = document.getElementById('menu-btn');
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  if (!btn || !sidebar) return;

  function close() {
    sidebar.classList.remove('open');
    if (overlay) overlay.style.display = 'none';
  }
  btn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    if (overlay) overlay.style.display = isOpen ? 'block' : 'none';
  });
  if (overlay) overlay.addEventListener('click', close);
}

// ═══════════════════════════════════════════════════
//  閱讀進度條
// ═══════════════════════════════════════════════════
function initReadingBar() {
  const bar = document.getElementById('reading-bar');
  if (!bar) return;
  const update = () => {
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0%';
  };
  window.addEventListener('scroll', update, { passive: true });
}

// ═══════════════════════════════════════════════════
//  KaTeX 自動載入與渲染
// ═══════════════════════════════════════════════════
function loadKaTeX(callback) {
  // CSS
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
  document.head.appendChild(css);

  // JS
  const js = document.createElement('script');
  js.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
  js.onload = () => {
    // auto-render
    const ar = document.createElement('script');
    ar.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js';
    ar.onload = callback;
    document.head.appendChild(ar);
  };
  document.head.appendChild(js);
}

function renderMath() {
  if (typeof renderMathInElement !== 'function') return;
  renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    throwOnError: false,
    trust: true,
  });
}

// ═══════════════════════════════════════════════════
//  初始化
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // 注入 Sidebar
  const mount = document.getElementById('sidebar-mount');
  if (mount) {
    const sb = buildSidebar();
    document.body.insertBefore(sb, document.body.firstChild);
    mount.remove();
  }

  initTeacherMode();
  initMobileMenu();
  initDesktopSidebarToggle();
  initReadingBar();
  initCollapsibles();

  // 載入 KaTeX 並渲染數學公式
  loadKaTeX(() => renderMath());

  // 頁面自帶 step/think 引擎時跳過（如 mobile-first 頁面）
  if (!window.__CUSTOM_STEP_ENGINE) {
    initStepEngine();
    initStepKeyboard();
    initThinkReveal();
    initThinkRecord();
    initThinkChoice();
  }

  // 照片插槽提示
  initPhotoSlots();

  // 匯出學習記錄
  initExportFab();
});

// ═══════════════════════════════════════════════════
//  照片插槽：用 data-* 自動渲染視覺內容
// ═══════════════════════════════════════════════════
function initPhotoSlots() {
  document.querySelectorAll('.photo-slot').forEach(slot => {
    // 已渲染過就跳過（避免重複）
    if (slot.querySelector('.photo-slot-body')) return;

    const label = slot.dataset.label || '照片';
    const purpose = slot.dataset.purpose || '';
    const timing = slot.dataset.timing || '';

    const purposeHtml = purpose ? `<div class="photo-slot-purpose"><strong>用途：</strong>${purpose}</div>` : '';
    const timingHtml = timing ? `<div class="photo-slot-timing"><strong>時機：</strong>${timing}</div>` : '';

    slot.innerHTML = `
      <div class="photo-slot-icon">📷</div>
      <div class="photo-slot-body">
        <div class="photo-slot-label">此處需要一張照片：${label}</div>
        ${purposeHtml}
        ${timingHtml}
        <div class="photo-slot-hint">用手機相機拍照（照片會自動存相簿）。下課匯出學習記錄時會標出位置，到 Google 文件再把照片貼進去。</div>
      </div>
    `;
  });
}

// ═══════════════════════════════════════════════════
//  互動摺疊元件
// ═══════════════════════════════════════════════════
function initCollapsibles() {
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.collapsible');
      parent.classList.toggle('open');
    });
    // touch 支援
    header.addEventListener('touchend', (e) => {
      e.preventDefault();
      header.click();
    });
  });
}

// ═══════════════════════════════════════════════════
//  分步驟引擎 — 一屏一任務
// ═══════════════════════════════════════════════════
function initStepEngine() {
  const panels = document.querySelectorAll('.step-panel');
  if (panels.length === 0) return;

  const tabs = document.querySelectorAll('.step-tab');
  let current = 0;

  // 計算元素相對 document 頂端的絕對位置（繞過 sticky 干擾）
  function absoluteTop(el) {
    let top = 0;
    while (el) {
      top += el.offsetTop;
      el = el.offsetParent;
    }
    return top;
  }

  function scrollToStepTop() {
    // 按下「下一步」後按鈕仍保有焦點，部分瀏覽器會把焦點元素自動捲回視野、
    // 覆蓋我們的 scrollTo。先 blur 再捲動。
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    const nav = document.querySelector('.step-nav');
    if (!nav) return;
    let target = absoluteTop(nav);
    const mh = document.getElementById('mobile-header');
    if (mh && getComputedStyle(mh).display !== 'none') {
      target -= mh.offsetHeight;
    }
    target = Math.max(0, target);
    // 先 instant 立刻到位（避免焦點/smooth 互咬），再以 smooth 微調（讓使用者看到動作）
    window.scrollTo(0, target);
    // 若瀏覽器支援 smooth，再呼叫一次做動畫微調
    try {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } catch (_) { /* 舊瀏覽器忽略 */ }
  }

  function goTo(index, doScroll = true) {
    if (index < 0 || index >= panels.length) return;
    // 切換面板
    panels.forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
    // 切換 tab
    tabs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    // 更新所有步驟底部的圓點和按鈕
    document.querySelectorAll('.step-footer').forEach(footer => {
      const dots = footer.querySelectorAll('.step-dot');
      dots.forEach((d, i) => {
        d.className = 'step-dot';
        if (i < index) d.classList.add('done');
        if (i === index) d.classList.add('current');
      });
      const prevBtn = footer.querySelector('[data-step="prev"]');
      const nextBtn = footer.querySelector('[data-step="next"]');
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === panels.length - 1;
    });
    current = index;
    // 切 panel 會改變 document 高度。先 blur（跳脫焦點元素自動捲回），
    // 再用 double-rAF 等到新面板 layout 穩定後才捲。
    if (doScroll) {
      if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToStepTop);
      });
    }
  }

  // Tab 點擊
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => goTo(i));
  });

  // Prev/Next 按鈕
  document.querySelectorAll('[data-step="prev"]').forEach(btn => {
    btn.addEventListener('click', () => goTo(current - 1));
  });
  document.querySelectorAll('[data-step="next"]').forEach(btn => {
    btn.addEventListener('click', () => goTo(current + 1));
  });

  // 課後資源摺疊
  document.querySelectorAll('.post-class-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.closest('.post-class').classList.toggle('open');
    });
  });

  // 初始化：不捲動（讓學生從頁面頂端開始讀，包含 page-header 和學習目標）
  goTo(0, false);
}

// ═══════════════════════════════════════════════════
//  鍵盤快捷鍵（老師用：左右鍵切步驟）
// ═══════════════════════════════════════════════════
// ═══════════════════════════════════════════════════
//  互動思考元件 — Layer 1: 想一想 → 展開提示
// ═══════════════════════════════════════════════════
function initThinkReveal() {
  document.querySelectorAll('.think-block.reveal .think-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const block = btn.closest('.think-block');
      block.classList.toggle('open');
      btn.textContent = block.classList.contains('open')
        ? '已展開提示'
        : '想好了？點擊看提示 →';
    });
  });
}

// ═══════════════════════════════════════════════════
//  互動思考元件 — Layer 2: 自我記錄 (localStorage)
// ═══════════════════════════════════════════════════
const THINK_STORAGE_KEY = 'sssh_think_records';

function _readThinkRecords() {
  try { return JSON.parse(localStorage.getItem(THINK_STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function _saveThinkRecord(key, value) {
  const records = _readThinkRecords();
  records[key] = value;
  localStorage.setItem(THINK_STORAGE_KEY, JSON.stringify(records));
}

function initThinkRecord() {
  const inputs = document.querySelectorAll('.think-input');
  if (inputs.length === 0) return;

  const records = _readThinkRecords();
  let saveTimer = null;

  inputs.forEach(input => {
    const key = input.dataset.key;
    if (!key) return;

    // 還原已存的內容
    if (records[key]) {
      input.value = records[key];
      const status = input.parentElement.querySelector('.think-status');
      if (status) { status.textContent = '↑ 上次的記錄已載入'; status.className = 'think-status saved'; }
    }

    // 自動儲存（打字後 800ms）
    input.addEventListener('input', () => {
      const status = input.parentElement.querySelector('.think-status');
      if (status) { status.textContent = '輸入中…'; status.className = 'think-status'; }
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        _saveThinkRecord(key, input.value);
        if (status) { status.textContent = '✓ 已自動儲存'; status.className = 'think-status saved'; }
      }, 800);
    });

    // 失焦時立即存
    input.addEventListener('blur', () => {
      if (input.value) {
        _saveThinkRecord(key, input.value);
        const status = input.parentElement.querySelector('.think-status');
        if (status) { status.textContent = '✓ 已自動儲存'; status.className = 'think-status saved'; }
      }
    });
  });
}

// ═══════════════════════════════════════════════════
//  互動思考元件 — Layer 3: 選擇題 → 即時回饋
// ═══════════════════════════════════════════════════
function initThinkChoice() {
  document.querySelectorAll('.think-block.choice').forEach(block => {
    const answer = block.dataset.answer;
    const options = block.querySelectorAll('.think-opt');

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        if (block.classList.contains('answered')) return; // 已作答

        block.classList.add('answered');
        const chosen = opt.dataset.val;

        options.forEach(o => {
          o.disabled = true;
          if (o.dataset.val === answer) {
            o.classList.add('correct');
          } else if (o === opt && chosen !== answer) {
            o.classList.add('wrong');
          }
        });
      });
    });
  });
}

// ═══════════════════════════════════════════════════
//  匯出學習記錄（頁尾獨立區塊，貼 Google Docs 用）
// ═══════════════════════════════════════════════════
function initExportFab() {
  const inputs = document.querySelectorAll('.think-input');
  if (inputs.length === 0) return;

  // 頁尾區塊——優先掛到 .page-body 裡（和正文寬度、對齊一致），找不到才退 #main-content / body
  const host = document.querySelector('.page-body')
            || document.getElementById('main-content')
            || document.querySelector('main')
            || document.body;
  const section = document.createElement('section');
  section.className = 'export-footer';

  const photoCount = document.querySelectorAll('.photo-slot').length;
  const photoHint = photoCount > 0
    ? `<p class="export-footer-hint">📷 這堂課有 <strong>${photoCount}</strong> 處需要照片——匯出文字會標出插入位置，請把手機拍的照片依序貼到對應位置。</p>`
    : '';

  section.innerHTML = `
    <h2 class="export-footer-title">📋 下課前：匯出學習記錄</h2>
    <p class="export-footer-desc">完成本節後，按下方按鈕複製學習記錄，貼到老師在 Google Classroom 開的 Google 文件作業裡。</p>
    ${photoHint}
    <div class="export-footer-meta">
      已填寫：<span class="export-footer-count">0</span>
    </div>
    <button class="export-footer-btn">
      <span class="export-icon">📋</span>
      <span>複製學習記錄</span>
    </button>
    <div class="export-footer-steps">
      <div class="export-footer-step">① 按上方「複製學習記錄」</div>
      <div class="export-footer-step">② 打開 Google Classroom 的作業 → 你的 Google 文件</div>
      <div class="export-footer-step">③ 在文件內按 <kbd>Ctrl</kbd>+<kbd>V</kbd>（或 <kbd>⌘</kbd>+<kbd>V</kbd>）貼上</div>
      ${photoCount > 0 ? '<div class="export-footer-step">④ 依照文件裡的 📷 標記，把手機相簿的照片插入對應位置</div>' : ''}
    </div>
  `;
  host.appendChild(section);

  // Toast
  const toast = document.createElement('div');
  toast.className = 'export-toast';
  document.body.appendChild(toast);

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2400);
  }

  const copyBtn = section.querySelector('.export-footer-btn');
  const countEl = section.querySelector('.export-footer-count');

  function updateCount() {
    const records = _readThinkRecords();
    let filled = 0;
    inputs.forEach(input => {
      const key = input.dataset.key;
      if (key && records[key] && records[key].trim()) filled++;
    });
    countEl.textContent = filled + '/' + inputs.length;
  }
  updateCount();

  inputs.forEach(input => {
    input.addEventListener('input', () => setTimeout(updateCount, 900));
  });

  // 複製到剪貼簿（純文字，給 Google Docs 貼上）
  copyBtn.addEventListener('click', () => {
    const text = buildExportText();
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      showToast('✓ 已複製！打開 Google 文件按 Ctrl+V / ⌘+V 貼上');
    }).catch(() => {
      // fallback：舊瀏覽器
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px;';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('✓ 已複製到剪貼簿！');
    });
  });
}

// ═══════════════════════════════════════════════════
//  格式化實驗數據 → Markdown
// ═══════════════════════════════════════════════════
function _formatLabData(data) {
  // ── 單擺實驗 ──
  if (data.type === 'pendulum') {
    let s = '### 單擺 T² vs L 實驗\n\n';
    s += '| 擺長 L (m) | T₁ (s) | T₂ (s) | T₃ (s) | T̄ (s) | T² (s²) |\n';
    s += '|---|---|---|---|---|---|\n';
    const lengthKeys = Object.keys(data.records).sort((a, b) => parseFloat(a) - parseFloat(b));
    lengthKeys.forEach(Lkey => {
      const L = parseFloat(Lkey);
      const trials = data.records[Lkey];
      if (!trials || trials.length === 0) return;
      const avg = trials.reduce((a, b) => a + b, 0) / trials.length;
      const t2 = avg * avg;
      const cells = [L.toFixed(2),
        ...trials.map(t => t.toFixed(3)),
        ...Array(3 - trials.length).fill('—'),
        avg.toFixed(3), t2.toFixed(4)];
      s += `| ${cells.join(' | ')} |\n`;
    });
    s += '\n';
    if (data.slopes && data.slopes.T2_vs_L) {
      s += `- 擬合斜率（T² vs L，過原點）：${data.slopes.T2_vs_L.toFixed(4)} s²/m\n`;
    }
    if (data.g_calculated) {
      s += `- 計算得 g = 4π²/斜率 = **${data.g_calculated.toFixed(2)} m/s²**\n`;
    }
    if (data.g_error_percent != null) {
      s += `- 與標準值 9.81 m/s² 的誤差：${data.g_error_percent.toFixed(1)}%\n`;
    }
    s += '\n';
    return s;
  }

  // ── 聲音實驗 ──
  // recordedNotes = { C4: 262, D4: 294, ... }
  const noteOrder = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
  const notesInData = noteOrder.filter(n => data[n] !== undefined);
  if (notesInData.length > 0 && typeof data[notesInData[0]] === 'number') {
    let s = '### 聲音頻率實驗\n\n';
    s += '| 音符 | 頻率 (Hz) | 與前一音的頻率比 |\n';
    s += '|---|---|---|\n';
    notesInData.forEach((note, i) => {
      const freq = data[note];
      let ratio = '—';
      if (i > 0) {
        const prevFreq = data[notesInData[i - 1]];
        ratio = (freq / prevFreq).toFixed(4);
      }
      s += `| ${note} | ${freq} | ${ratio} |\n`;
    });
    s += '\n';
    if (notesInData.length >= 2) {
      const ratios = [];
      for (let i = 1; i < notesInData.length; i++) {
        ratios.push(data[notesInData[i]] / data[notesInData[i - 1]]);
      }
      const avg = ratios.reduce((a, b) => a + b, 0) / ratios.length;
      s += `- 平均頻率比：${avg.toFixed(4)}（理論值 2^(1/12) ≈ 1.0595）\n\n`;
    }
    return s;
  }

  // ── 浮力實驗 ──
  // recorded = { wood: [0.6], ice: [0.92], ... }
  const BUOYANCY_NAMES = {
    wood: '木塊', ice: '冰塊', aluminum: '鋁塊',
    iron: '鐵塊', styrofoam: '保麗龍', ship: '鐵船'
  };
  const BUOYANCY_DENSITIES = {
    wood: 0.60, ice: 0.92, aluminum: 2.70,
    iron: 7.87, styrofoam: 0.03, ship: 0.30
  };
  const buoyancyKeys = Object.keys(data).filter(k => Array.isArray(data[k]));
  if (buoyancyKeys.length > 0 && BUOYANCY_NAMES[buoyancyKeys[0]]) {
    let s = '### 浮力實驗\n\n';
    s += '| 物體 | 密度 (g/cm³) | 沉入比例 | 浮／沉 |\n';
    s += '|---|---|---|---|\n';
    buoyancyKeys.forEach(key => {
      const name = BUOYANCY_NAMES[key] || key;
      const density = BUOYANCY_DENSITIES[key] || '?';
      const ratio = data[key][0];
      const status = ratio >= 1 ? '沉' : '浮';
      s += `| ${name} | ${density} | ${(ratio * 100).toFixed(0)}% | ${status} |\n`;
    });
    s += '\n- 結論：密度 < 1 的物體浮在水面，密度 > 1 的物體沉入水底\n\n';
    return s;
  }

  // ── 通用格式（其他 labData）──
  let s = '### 實驗數據\n\n';
  s += '```json\n' + JSON.stringify(data, null, 2) + '\n```\n\n';
  return s;
}

function buildExportMarkdown() {
  const title = document.querySelector('.page-header h1');
  const pageName = title ? title.textContent.trim() : document.title;
  const records = _readThinkRecords();
  const now = new Date();
  const dateStr = now.getFullYear() + '-' +
    String(now.getMonth()+1).padStart(2,'0') + '-' +
    String(now.getDate()).padStart(2,'0') + ' ' +
    String(now.getHours()).padStart(2,'0') + ':' +
    String(now.getMinutes()).padStart(2,'0');

  let md = `# ${pageName}\n`;
  md += `> 匯出時間：${dateStr}\n\n`;

  let sectionNum = 0;

  function mdThinkBlock(block) {
    const prompt = block.querySelector('.think-prompt');
    if (!prompt) return '';
    const promptText = prompt.textContent.trim();
    if (block.classList.contains('record')) {
      const input = block.querySelector('.think-input');
      const key = input ? input.dataset.key : null;
      const value = key && records[key] ? records[key].trim() : '';
      if (value) {
        sectionNum++;
        return `### ${sectionNum}. ${promptText}\n\n${value}\n\n`;
      }
    } else if (block.classList.contains('choice')) {
      const selected = block.querySelector('.think-opt.correct, .think-opt.wrong.selected, .think-opt.selected');
      if (selected) {
        sectionNum++;
        const isCorrect = selected.classList.contains('correct');
        let s = `### ${sectionNum}. ${promptText}\n\n`;
        s += `我的選擇：${selected.textContent.trim()}${isCorrect ? ' ✓' : ' ✗'}\n\n`;
        const feedback = block.querySelector('.think-feedback');
        if (feedback) s += `> ${feedback.textContent.trim()}\n\n`;
        return s;
      }
    }
    return '';
  }

  function mdTeacherBlock(el) {
    const titleEl = el.querySelector('.tb-title');
    const tbTitle = titleEl ? titleEl.textContent.trim() : '';
    const paras = Array.from(el.children).filter(c => c.tagName === 'P').map(p => p.textContent.trim()).filter(Boolean);
    const hyps = Array.from(el.querySelectorAll('.hypothesis-box')).map(hb => {
      const label = (hb.querySelector('.hb-label')?.textContent || '').trim();
      const content = (hb.querySelector('.hb-content')?.textContent || '').trim();
      const note = (hb.querySelector('.hb-note')?.textContent || '').trim();
      return `- **${label}**：${content}` + (note ? ` *（${note}）*` : '');
    });
    if (!tbTitle && paras.length === 0 && hyps.length === 0) return '';
    let s = `> **🔒 老師提供｜${tbTitle}**\n>\n`;
    paras.forEach(p => { s += `> ${p}\n>\n`; });
    if (hyps.length) s += hyps.map(h => `> ${h}`).join('\n') + '\n\n';
    else s += '\n';
    return s;
  }

  const stagedPanels = document.querySelectorAll('.step-panel[data-stage]');

  if (stagedPanels.length > 0) {
    stagedPanels.forEach(panel => {
      const stageNum = panel.dataset.stage || '?';
      const stageName = panel.dataset.stageName || '';
      let panelMd = '';

      const items = panel.querySelectorAll('.teacher-block, .student-block, .think-block');
      items.forEach(item => {
        const inTeacher = item.closest('.teacher-block');
        const inStudent = item.closest('.student-block');

        if (item.classList.contains('teacher-block')) {
          panelMd += mdTeacherBlock(item);
          return;
        }
        if (item.classList.contains('student-block')) {
          const titleEl = item.querySelector('.sb-title');
          const sbTitle = titleEl ? titleEl.textContent.trim() : '';
          let inner = '';
          item.querySelectorAll('.think-block').forEach(tb => { inner += mdThinkBlock(tb); });
          if (inner) {
            panelMd += `**✏️ 你的填寫｜${sbTitle}**\n\n` + inner;
          }
          return;
        }
        if (item === inTeacher || item === inStudent) return;
        if (inTeacher || inStudent) return;

        if (item.classList.contains('think-block')) {
          panelMd += mdThinkBlock(item);
        }
      });

      if (panelMd) {
        md += `\n## 階段 ${stageNum} · ${stageName}\n\n`;
        md += panelMd;
      }
    });
  } else {
    // 舊版頁面
    document.querySelectorAll('.think-block').forEach(block => {
      md += mdThinkBlock(block);
    });
  }

  let hasLabData = false;
  if (window.labData && typeof window.labData === 'object' && Object.keys(window.labData).length > 0) {
    hasLabData = true;
    md += `## 實驗數據\n\n`;
    md += _formatLabData(window.labData);
  }

  if (sectionNum === 0 && !hasLabData) {
    alert('還沒有填寫任何記錄喔！先在頁面上的輸入框寫下你的想法。');
    return null;
  }

  md += `---\n*松山高中 探究與實作 · 學習記錄*\n`;
  return md;
}

// ═══════════════════════════════════════════════════
//  匯出純文字（貼 Google Docs 用）
//  會依照 DOM 順序交錯輸出 think-block 與 photo-slot 的提示
// ═══════════════════════════════════════════════════
function buildExportText() {
  const title = document.querySelector('.page-header h1');
  const pageName = title ? title.textContent.trim() : document.title;
  const records = _readThinkRecords();
  const now = new Date();
  const dateStr = now.getFullYear() + '-' +
    String(now.getMonth()+1).padStart(2,'0') + '-' +
    String(now.getDate()).padStart(2,'0') + ' ' +
    String(now.getHours()).padStart(2,'0') + ':' +
    String(now.getMinutes()).padStart(2,'0');

  const BAR = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
  let out = '';
  out += BAR + '\n';
  out += pageName + '\n';
  out += '匯出時間：' + dateStr + '\n';
  out += BAR + '\n\n';

  let sectionNum = 0;
  let hasRecord = false;

  function formatThinkBlock(el) {
    const prompt = el.querySelector('.think-prompt');
    if (!prompt) return '';
    const promptText = prompt.textContent.trim();
    if (el.classList.contains('record')) {
      const input = el.querySelector('.think-input');
      const key = input ? input.dataset.key : null;
      const value = key && records[key] ? records[key].trim() : '';
      if (value) {
        sectionNum++;
        hasRecord = true;
        return '【' + sectionNum + '】' + promptText + '\n' + value + '\n\n';
      }
    } else if (el.classList.contains('choice')) {
      const selected = el.querySelector('.think-opt.correct, .think-opt.wrong.selected, .think-opt.selected');
      if (selected) {
        sectionNum++;
        hasRecord = true;
        const isCorrect = selected.classList.contains('correct');
        let s = '【' + sectionNum + '】' + promptText + '\n';
        s += '我的選擇：' + selected.textContent.trim() + (isCorrect ? ' ✓' : ' ✗') + '\n';
        const feedback = el.querySelector('.think-feedback');
        if (feedback) s += '回饋：' + feedback.textContent.trim() + '\n';
        s += '\n';
        return s;
      }
    }
    return '';
  }

  function formatPhotoSlot(el) {
    const label = el.dataset.label || '照片';
    const purpose = el.dataset.purpose || '';
    const timing = el.dataset.timing || '';
    let s = BAR + '\n';
    s += '📷 請在此處插入照片：' + label + '\n';
    if (purpose) s += '   用途：' + purpose + '\n';
    if (timing) s += '   時機：' + timing + '\n';
    s += '   👉 打開手機相簿找到這張照片，貼到這裡\n';
    s += BAR + '\n\n';
    hasRecord = true;
    return s;
  }

  function formatTeacherBlock(el) {
    const titleEl = el.querySelector('.tb-title');
    const tbTitle = titleEl ? titleEl.textContent.trim() : '';
    // 直系 <p>
    const paras = Array.from(el.children)
      .filter(c => c.tagName === 'P')
      .map(p => p.textContent.trim())
      .filter(Boolean);
    // 結構化假設
    const hyps = Array.from(el.querySelectorAll('.hypothesis-box')).map(hb => {
      const label = (hb.querySelector('.hb-label')?.textContent || '').trim();
      const content = (hb.querySelector('.hb-content')?.textContent || '').trim();
      const note = (hb.querySelector('.hb-note')?.textContent || '').trim();
      return '  · [' + label + '] ' + content + (note ? '（' + note + '）' : '');
    });
    if (!tbTitle && paras.length === 0 && hyps.length === 0) return '';
    let s = '〖老師提供〗 ' + tbTitle + '\n';
    paras.forEach(p => { s += '  ' + p + '\n'; });
    if (hyps.length) s += hyps.join('\n') + '\n';
    s += '\n';
    return s;
  }

  // 判斷此頁是否為「四階段」格式
  const stagedPanels = document.querySelectorAll('.step-panel[data-stage]');

  if (stagedPanels.length > 0) {
    stagedPanels.forEach(panel => {
      const stageNum = panel.dataset.stage || '?';
      const stageName = panel.dataset.stageName || '';
      let panelOut = '';

      // 依 DOM 順序走頂層相關元素
      const items = panel.querySelectorAll('.teacher-block, .student-block, .think-block, .photo-slot');
      items.forEach(item => {
        // 避免被兩次處理：若它在 teacher-block/student-block 內，跳過（已由父層處理）
        const inTeacher = item.closest('.teacher-block');
        const inStudent = item.closest('.student-block');

        if (item.classList.contains('teacher-block')) {
          panelOut += formatTeacherBlock(item);
          return;
        }

        if (item.classList.contains('student-block')) {
          const titleEl = item.querySelector('.sb-title');
          const sbTitle = titleEl ? titleEl.textContent.trim() : '';
          let innerOut = '';
          item.querySelectorAll('.think-block').forEach(tb => { innerOut += formatThinkBlock(tb); });
          item.querySelectorAll('.photo-slot').forEach(ps => { innerOut += formatPhotoSlot(ps); });
          if (innerOut) {
            panelOut += '〖你的填寫〗 ' + sbTitle + '\n\n' + innerOut;
          }
          return;
        }

        // 頂層（不在 teacher-block/student-block 裡）的 think-block / photo-slot
        if (item === inTeacher || item === inStudent) return;
        if (inTeacher || inStudent) return;

        if (item.classList.contains('think-block')) {
          panelOut += formatThinkBlock(item);
        } else if (item.classList.contains('photo-slot')) {
          panelOut += formatPhotoSlot(item);
        }
      });

      if (panelOut) {
        out += BAR + '\n';
        out += '🔹 階段 ' + stageNum + ' · ' + stageName + '\n';
        out += BAR + '\n\n';
        out += panelOut;
      }
    });
  } else {
    // 舊版頁面：依 DOM 順序直接掃
    const elements = document.querySelectorAll('.think-block, .photo-slot');
    elements.forEach(el => {
      if (el.classList.contains('photo-slot')) out += formatPhotoSlot(el);
      else out += formatThinkBlock(el);
    });
  }

  let hasLabData = false;
  if (window.labData && typeof window.labData === 'object' && Object.keys(window.labData).length > 0) {
    hasLabData = true;
    out += '【實驗數據】\n\n';
    out += _formatLabData(window.labData);
  }

  if (!hasRecord && !hasLabData) {
    alert('還沒有填寫任何記錄喔！先在頁面上的輸入框寫下你的想法。');
    return null;
  }

  out += BAR + '\n';
  out += '松山高中 · 探究與實作 · 學習記錄\n';
  out += BAR + '\n';
  return out;
}

function exportThinkRecords() {
  const md = buildExportMarkdown();
  if (!md) return;

  const title = document.querySelector('.page-header h1');
  const pageName = title ? title.textContent.trim() : document.title;
  const now = new Date();
  const safeTitle = pageName.replace(/[^\u4e00-\u9fff\w\s·]/g, '').trim().replace(/\s+/g, '_');

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `學習記錄_${safeTitle}_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function initStepKeyboard() {
  const panels = document.querySelectorAll('.step-panel');
  if (panels.length === 0) return;
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight') {
      const next = document.querySelector('[data-step="next"]:not(:disabled)');
      if (next) next.click();
    }
    if (e.key === 'ArrowLeft') {
      const prev = document.querySelector('[data-step="prev"]:not(:disabled)');
      if (prev) prev.click();
    }
  });
}
