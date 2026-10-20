/*
  THIS ENSURES THAT CONTENT (CONTRIBUTORS AND FEEDBACK) IS HIDDEN BY DEFAULT VIA CSS,
  AND ONLY SHOWN ON PAGES THAT ARE NOT OVERVIEW/INDEX PAGES.
  OVERVIEW PAGES INCLUDE: HOME (/), SECTION INDEX PAGES (e.g. /network/, /lab/),
  AND PAGES UNDER 'categories' OR 'tags' SECTIONS.
  THE CONTENT REMAINS IN THE DOM BUT IS CONTROLLED BY A CLASS ADDED/REMOVED BY JAVASCRIPT,
  MAKING IT EASY TO SHOW OR HIDE WHEN NECESSARY BASED ON THE PAGE URL.
*/

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;

  const overviewSlugs = ['/', '/network/', '/databases/', '/java/', '/spring/', '/lab/', '/blog/', '/categories/', '/tags/', '/projects/'];
  const isOverviewPage = overviewSlugs.includes(path)
    || path.endsWith('/index.html')
    || ['categories', 'tags'].some(p => path.includes(p));

  if (!isOverviewPage) {
    document.body.classList.add('show-contrib-feedback');
  } else {
    document.body.classList.remove('show-contrib-feedback');
  }

  // ── Hero: inject on home page only ──────────────────────────────────────
  const isHome = path === '/' || path === '/index.html';
  if (isHome) {
    document.body.classList.add('home-page');
    injectHero();
  }
});

function injectHero() {
  // Fixed full-viewport hero behind all material chrome
  const hero = document.createElement('div');
  hero.id = 'hero-fixed';

  const overlay = document.createElement('div');
  overlay.id = 'hero-overlay';

  const canvas = document.createElement('canvas');
  canvas.id = 'hero-canvas';

  const titleEl = document.createElement('div');
  titleEl.id = 'hero-title';
  titleEl.innerHTML = `
    <span class="hero-site-name">Codelogium</span>
    <p class="hero-desc">For the ones who go deep. No shortcuts, no spoon-feeding. CS fundamentals, C, databases, and the kind of curiosity that keeps you up at night.</p>
    <em class="hero-credit">Unlearn. Relearn. Keep learning.</em>
    <div class="hero-cta">
      <a href="/java/" class="hero-btn hero-btn--primary">Start exploring</a>
      <a href="#hero-scroll" class="hero-btn hero-btn--secondary">What's inside</a>
    </div>
    <span class="hero-tagline">Where code meets knowledge</span>
  `;

  hero.appendChild(overlay);
  hero.appendChild(canvas);

  // Title is a separate fixed layer so buttons sit above md-main
  titleEl.style.position = 'fixed';
  titleEl.style.zIndex   = '3';

  document.body.insertBefore(hero, document.body.firstChild);
  document.body.insertBefore(titleEl, document.body.firstChild);

  // Hide title once user scrolls past the hero
  window.addEventListener('scroll', () => {
    titleEl.style.opacity = window.scrollY > window.innerHeight * 0.7 ? '0' : '1';
    titleEl.style.pointerEvents = window.scrollY > window.innerHeight * 0.7 ? 'none' : 'auto';
  });

  // "What's inside" scrolls to content
  titleEl.addEventListener('click', e => {
    if (e.target.hash === '#hero-scroll') {
      e.preventDefault();
      document.querySelector('.md-content__inner').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Align title with first tab's actual left position
  function alignTitle() {
    const firstTab = document.querySelector('.md-tabs__link');
    if (firstTab && titleEl) {
      titleEl.style.left = firstTab.getBoundingClientRect().left + 'px';
    }
  }
  requestAnimationFrame(() => { requestAnimationFrame(() => { alignTitle(); }); });
  window.addEventListener('resize', alignTitle);

  // Run animation after layout settles
  requestAnimationFrame(() => { requestAnimationFrame(() => { initHeroCanvas(canvas, hero); }); });
}

function initHeroCanvas(canvas, hero) {
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); init(); });

  const GLYPHS = [
    'O(n log n)', 'O(1)', 'O(n²)', 'O(2ⁿ)',
    '∑', '∫', '∂', '∞', '∅', 'λ', '∀x', '∈', 'φ', 'π',
    'fn()', '{}', '[]', '=>', '::', 'async', 'type',
    '01', '10', 'n!', 'log₂n', '√2',
    'SELECT', 'while', 'class', 'import', 'return',
    '≤', '≥', '≠', '≡', '⊕', '2ⁿ', 'n·log n', '∇'
  ];

  // Book spine in the photo: ~62% from left, ~68% from top
  function origin() {
    return { x: canvas.width * 0.62, y: canvas.height * 0.68 };
  }

  class Glyph {
    constructor() { this.reset(true); }

    reset(scatter) {
      const o = origin();
      const side = Math.random() < 0.5 ? -1 : 1;
      const spread = Math.random();
      this.x = o.x + side * spread * (canvas.width * 0.16) * (0.2 + Math.random() * 0.8);
      this.y = o.y - spread * (canvas.height * 0.05) + (Math.random() - 0.5) * 6;

      // Slower rise: was 0.5–1.6, now 0.28–0.9
      const rise  = 0.28 + Math.random() * 0.62;
      const drift = side * spread * 0.28 + (Math.random() - 0.5) * 0.15;
      this.vx = drift;
      this.vy = -rise;

      this.text       = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      this.size       = 8 + Math.random() * 9;
      this.maxOpacity = 0.18 + Math.random() * 0.5;
      this.opacity    = 0;
      // Longer life to match slower speed
      this.maxLife    = 200 + Math.random() * 340;
      this.life       = scatter ? Math.floor(Math.random() * this.maxLife) : 0;
      this.hi         = Math.random() > 0.5;
    }

    update() {
      this.life++;
      this.x += this.vx;
      this.y += this.vy;
      const fi = 30, fo = 50;
      if (this.life < fi) {
        this.opacity = (this.life / fi) * this.maxOpacity;
      } else if (this.life > this.maxLife - fo) {
        this.opacity = ((this.maxLife - this.life) / fo) * this.maxOpacity;
      } else {
        this.opacity = this.maxOpacity;
      }
      if (this.life >= this.maxLife) this.reset(false);
    }

    draw() {
      ctx.save();
      ctx.globalAlpha  = Math.max(0, this.opacity);
      ctx.font         = `${this.size}px "JetBrains Mono", "Courier New", monospace`;
      ctx.fillStyle    = this.hi ? '#4ade80' : '#22c55e';
      ctx.shadowColor  = '#22c55e';
      ctx.shadowBlur   = this.hi ? 10 : 5;
      ctx.fillText(this.text, this.x, this.y);
      ctx.restore();
    }
  }

  let glyphs = [];
  function init() {
    glyphs = Array.from({ length: 70 }, () => new Glyph());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    glyphs.forEach(g => { g.update(); g.draw(); });
    requestAnimationFrame(animate);
  }

  // Click burst — fires anywhere in the hero viewport area (not on buttons)
  document.addEventListener('click', e => {
    if (e.target.closest('a, button')) return;
    if (window.scrollY > window.innerHeight * 0.5) return; // only when hero visible
    const rect = { left: 0, top: 0 };
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    for (let i = 0; i < 12; i++) {
      const g = new Glyph();
      const angle = (Math.PI * 2 * i / 12) + (Math.random() - 0.5) * 0.5;
      const speed = 0.6 + Math.random() * 1.0;
      g.x = cx + (Math.random() - 0.5) * 10;
      g.y = cy + (Math.random() - 0.5) * 10;
      g.vx = Math.cos(angle) * speed;
      g.vy = Math.sin(angle) * speed - 0.35;
      g.life = 0;
      g.maxOpacity = 0.5 + Math.random() * 0.45;
      g.hi = true;
      glyphs.push(g);
    }
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    init();
    animate();
  }
}

// Translate Page Widget
function addTranslateWidget() {
  const script = document.createElement('script');
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
  
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'fr,ar,es',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  };
}