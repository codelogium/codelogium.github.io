// Contributors/feedback are hidden by CSS and shown only on content pages
// (not on the home page, section overviews, categories or tags).
const OVERVIEW_PATHS = ['/', '/network/', '/databases/', '/java/', '/spring/', '/lab/', '/blog/', '/projects/'];

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  const isOverviewPage = OVERVIEW_PATHS.includes(path)
    || path.endsWith('/index.html')
    || path.includes('categories')
    || path.includes('tags');
  document.body.classList.toggle('show-contrib-feedback', !isOverviewPage);

  if (path === '/' || path === '/index.html') {
    document.body.classList.add('home-page');
    injectHero();
  } else {
    injectFooterResources();
  }
});

// Edit this list to add or remove footer links.
const FOOTER_COLUMNS = [
  {
    title: 'C Language',
    links: [
      { label: "Beej's Guide to C", href: 'https://beej.us/guide/bgc/html/split-wide/' },
      { label: 'C Programming: A Modern Approach', href: 'http://knking.com/books/c2/' },
      { label: 'Robert C. Seacord', href: 'https://clark.center/users/Rcseacord' },
    ],
  },
  {
    title: 'Computer Science',
    links: [
      { label: 'CS Primer', href: 'https://csprimer.com/courses/' },
      { label: 'Teach Yourself CS', href: 'https://teachyourselfcs.com/' },
      { label: 'CS50 on edX', href: 'https://www.edx.org/cs50' },
    ],
  },
  {
    title: 'Codelogium',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Lab', href: '/lab/' },
      { label: 'Projects', href: '/projects/' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { label: 'GitHub', href: 'https://github.com/alfahami' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alfahami' },
    ],
  },
];

function injectFooterResources() {
  const footer = document.querySelector('.md-footer');
  if (!footer) return;

  const section = document.createElement('div');
  section.className = 'footer-resources md-grid';
  section.innerHTML = `
    <div class="footer-brand">
      <span class="footer-brand__name">Codelogium</span>
      <p class="footer-brand__line">Unlearn. Relearn. Keep learning.</p>
    </div>
    ${FOOTER_COLUMNS.map(col => `
      <nav class="footer-col" aria-label="${col.title}">
        <h4 class="footer-col__title">${col.title}</h4>
        <ul>
          ${col.links.map(l => {
            const external = l.href.startsWith('http');
            return `<li><a href="${l.href}"${external ? ' target="_blank" rel="noopener"' : ''}>${l.label}</a></li>`;
          }).join('')}
        </ul>
      </nav>
    `).join('')}
  `;
  footer.prepend(section);
}

function injectHero() {
  const hero = document.createElement('div');
  hero.id = 'hero-fixed';
  hero.innerHTML = '<div id="hero-overlay"></div><canvas id="hero-canvas"></canvas>';

  const title = document.createElement('div');
  title.id = 'hero-title';
  title.innerHTML = `
    <span class="hero-site-name">Codelogium</span>
    <p class="hero-desc">For the ones who go deep. No shortcuts, no spoon-feeding. CS fundamentals, C, databases, and the kind of curiosity that keeps you up at night.</p>
    <em class="hero-credit">Unlearn. Relearn. Keep learning.</em>
    <div class="hero-cta">
      <a href="/java/" class="hero-btn hero-btn--primary">Start exploring</a>
      <a href="#hero-scroll" class="hero-btn hero-btn--secondary">What's inside</a>
    </div>
    <span class="hero-tagline">Where code meets knowledge</span>
  `;

  document.body.prepend(hero, title);

  window.addEventListener('scroll', () => {
    const hidden = window.scrollY > window.innerHeight * 0.7;
    title.style.opacity = hidden ? '0' : '1';
    title.style.visibility = hidden ? 'hidden' : 'visible';
  });

  title.querySelector('[href="#hero-scroll"]').addEventListener('click', e => {
    e.preventDefault();
    const content = document.querySelector('.md-content__inner');
    // Does nothing while the home content is hidden.
    if (content && content.offsetParent) content.scrollIntoView({ behavior: 'smooth' });
  });

  // Line up with the first tab; below the tabs breakpoint, with the header title instead.
  const alignTitle = () => {
    const firstTab = document.querySelector('.md-tabs__link');
    const anchor = firstTab && firstTab.offsetParent ? firstTab : document.querySelector('.md-header__topic');
    if (anchor) title.style.left = Math.max(16, anchor.getBoundingClientRect().left) + 'px';
  };
  window.addEventListener('resize', alignTitle);

  // Wait two frames so the theme has laid out the tabs and viewport.
  requestAnimationFrame(() => requestAnimationFrame(() => {
    alignTitle();
    initHeroCanvas(hero.querySelector('canvas'));
  }));
}

function initHeroCanvas(canvas) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  const GLYPHS = [
    'O(n log n)', 'O(1)', 'O(n²)', 'O(2ⁿ)',
    '∑', '∫', '∂', '∞', '∅', 'λ', '∀x', '∈', 'φ', 'π',
    'fn()', '{}', '[]', '=>', '::', 'async', 'type',
    '01', '10', 'n!', 'log₂n', '√2',
    'SELECT', 'while', 'class', 'import', 'return',
    '≤', '≥', '≠', '≡', '⊕', '2ⁿ', 'n·log n', '∇'
  ];
  // Where glyphs rise from: the laptop screen in each mode's photo, as a fraction of the photo.
  // Update these when changing --book-image. Must match --book-pos (center 60%).
  const PHOTOS = {
    light: { w: 2000, h: 1121, x: 0.74, y: 0.62 },
    dark:  { w: 2000, h: 1333, x: 0.9,  y: 0.6 },
  };
  const POS = { x: 0.5, y: 0.6 };

  // Map a point on the photo to the screen, the same way `background-size: cover` crops it.
  const origin = () => {
    const p = PHOTOS[document.body.dataset.mdColorScheme === 'slate' ? 'dark' : 'light'];
    const scale = Math.max(canvas.width / p.w, canvas.height / p.h);
    const dw = p.w * scale, dh = p.h * scale;
    // On narrow screens the crop pushes the laptop off-screen; keep the glyphs visible.
    const clamp = v => Math.min(0.85, Math.max(0.15, v));
    return {
      x: clamp(((canvas.width - dw) * POS.x + p.x * dw) / canvas.width),
      y: clamp(((canvas.height - dh) * POS.y + p.y * dh) / canvas.height),
    };
  };
  const GLYPH_COUNT = 70;
  const BURST_SIZE = 12;

  class Glyph {
    constructor() { this.reset(true); }

    reset(scatter) {
      const o = origin();
      const side = Math.random() < 0.5 ? -1 : 1;
      const spread = Math.random();
      this.x = canvas.width * o.x + side * spread * canvas.width * 0.16 * (0.2 + Math.random() * 0.8);
      this.y = canvas.height * o.y - spread * canvas.height * 0.05 + (Math.random() - 0.5) * 6;
      this.vx = side * spread * 0.28 + (Math.random() - 0.5) * 0.15;
      this.vy = -(0.28 + Math.random() * 0.62);

      this.text = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      this.size = 8 + Math.random() * 9;
      this.maxOpacity = 0.18 + Math.random() * 0.5;
      this.opacity = 0;
      this.maxLife = 200 + Math.random() * 340;
      this.life = scatter ? Math.floor(Math.random() * this.maxLife) : 0;
      this.bright = Math.random() > 0.5;
      this.burst = false;
    }

    update() {
      this.life++;
      this.x += this.vx;
      this.y += this.vy;

      const fadeIn = 30, fadeOut = 50;
      if (this.life < fadeIn) {
        this.opacity = (this.life / fadeIn) * this.maxOpacity;
      } else if (this.life > this.maxLife - fadeOut) {
        this.opacity = ((this.maxLife - this.life) / fadeOut) * this.maxOpacity;
      } else {
        this.opacity = this.maxOpacity;
      }
    }

    get done() { return this.life >= this.maxLife; }

    draw() {
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.font = `${this.size}px "JetBrains Mono", "Courier New", monospace`;
      ctx.fillStyle = this.bright ? '#4ade80' : '#22c55e';
      ctx.shadowBlur = this.bright ? 10 : 5;
      ctx.fillText(this.text, this.x, this.y);
    }
  }

  let glyphs = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    glyphs = Array.from({ length: GLYPH_COUNT }, () => new Glyph());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowColor = '#22c55e';
    // Ambient glyphs recycle; burst glyphs are removed when they fade out.
    glyphs = glyphs.filter(g => {
      g.update();
      if (g.done) {
        if (g.burst) return false;
        g.reset(false);
      }
      g.draw();
      return true;
    });
    requestAnimationFrame(animate);
  }

  document.addEventListener('click', e => {
    if (e.target.closest('a, button')) return;
    if (window.scrollY > window.innerHeight * 0.5) return;
    for (let i = 0; i < BURST_SIZE; i++) {
      const g = new Glyph();
      const angle = (Math.PI * 2 * i / BURST_SIZE) + (Math.random() - 0.5) * 0.5;
      const speed = 0.6 + Math.random();
      g.x = e.clientX + (Math.random() - 0.5) * 10;
      g.y = e.clientY + (Math.random() - 0.5) * 10;
      g.vx = Math.cos(angle) * speed;
      g.vy = Math.sin(angle) * speed - 0.35;
      g.life = 0;
      g.maxOpacity = 0.5 + Math.random() * 0.45;
      g.bright = true;
      g.burst = true;
      glyphs.push(g);
    }
  });

  window.addEventListener('resize', resize);
  resize();
  animate();
}
