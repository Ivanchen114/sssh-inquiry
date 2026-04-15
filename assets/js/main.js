// ═══════════════════════════════════════════════════
//  Sidebar 資料結構
// ═══════════════════════════════════════════════════
const NAV_DATA = [
  {
    label: '課程',
    items: [
      { name: '課程總覽', path: 'index.html' },
    ]
  },
  {
    sublabel: '第一站 · 論證建模',
    phase: 1,
    items: [
      { name: '疫苗選擇', path: 'units/phase1/vaccine.html', week: 'W2' },
      { name: 'SHM 週期', path: 'units/phase1/shm.html', week: 'W3' },
      { name: '有效數字與不確定度', path: 'units/phase1/uncertainty.html', week: 'W4' },
      { name: '單擺與數據處理', path: 'units/phase1/pendulum.html', week: 'W5' },
    ]
  },
  {
    sublabel: '第二站 · 規劃研究',
    phase: 2,
    items: [
      { name: '彈簧變因設計', path: 'units/phase2/spring.html', week: 'W6' },
      { name: '冪級數與線性化', path: 'units/phase2/power-law.html', week: 'W8' },
      { name: '報告撰寫規範', path: 'units/phase2/report.html', week: 'W9' },
      { name: '浮力：鐵達尼號', path: 'units/phase2/buoyancy.html', week: 'W10' },
    ]
  },
  {
    sublabel: '第三站 · 發現問題',
    phase: 3,
    items: [
      { name: '翻滾仔', path: 'units/phase3/roller.html', week: 'W12' },
      { name: '揚聲器：自主探究', path: 'units/phase3/speaker.html', week: 'W16' },
      { name: '期末成果發表', path: 'units/phase3/final.html', week: 'W18' },
    ]
  },
  {
    label: '資源',
    items: [
      { name: '工具箱', path: 'tools/index.html' },
      { name: '練習場', path: 'practice/index.html' },
    ]
  }
];

const PHASE_COLORS = { 1: '#2952c4', 2: '#1e7a52', 3: '#b5621e' };

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
  sidebar.innerHTML = `
    <div id="sidebar-brand">
      <span class="site-title">探究與實作</span>
      <span class="site-sub">松山高中 SSSH · 108 課綱</span>
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
    // Sublabel with phase dot
    if (section.sublabel) {
      const sub = document.createElement('div');
      sub.className = 'nav-sublabel';
      const color = PHASE_COLORS[section.phase] || '#ababc4';
      sub.innerHTML = `<span class="dot" style="background:${color}"></span>${section.sublabel}`;
      nav.appendChild(sub);
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

      nav.appendChild(a);
    });
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
  initReadingBar();
});
