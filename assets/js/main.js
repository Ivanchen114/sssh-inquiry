// ── 教師模式 ──────────────────────────────────────────
const TEACHER_KEY = 'sssh_teacher_mode';

function initTeacherMode() {
  const toggle = document.getElementById('teacher-toggle');
  const badge  = document.getElementById('teacher-badge');
  const blocks = document.querySelectorAll('.teacher-only');

  if (!toggle) return;

  const isOn = () => localStorage.getItem(TEACHER_KEY) === '1';

  function apply(on) {
    blocks.forEach(el => {
      el.classList.toggle('hidden', !on);
    });
    if (badge) {
      badge.classList.toggle('hidden', !on);
    }
    toggle.textContent = on ? '🎓 教師模式：開啟' : '👤 教師模式：關閉';
    toggle.classList.toggle('bg-amber-500', on);
    toggle.classList.toggle('bg-slate-300', !on);
    toggle.classList.toggle('text-white', on);
    toggle.classList.toggle('text-slate-700', !on);
  }

  apply(isOn());

  toggle.addEventListener('click', () => {
    const next = !isOn();
    localStorage.setItem(TEACHER_KEY, next ? '1' : '0');
    apply(next);
  });
}

// ── 導覽列高亮目前頁 ──────────────────────────────────
function initNavHighlight() {
  const path = window.location.pathname;
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace(/^\//, ''))) {
      a.classList.add('font-bold', 'text-blue-700');
    }
  });
}

// ── 進度條（單元頁閱讀進度）────────────────────────────
function initReadingProgress() {
  const bar = document.getElementById('reading-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

// ── 平滑捲動錨點 ─────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── 手機選單 ─────────────────────────────────────────
function initMobileMenu() {
  const btn  = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

// ── 初始化全部 ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTeacherMode();
  initNavHighlight();
  initReadingProgress();
  initSmoothScroll();
  initMobileMenu();
});
