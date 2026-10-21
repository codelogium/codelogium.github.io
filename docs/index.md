---
title: Home
hide:
  - toc
  - feedback
  - metadata
  - footer
---

<section class="home-section" id="whats-inside" data-search-exclude>
  <h2 class="home-section__title">What's inside</h2>
  <p class="home-section__lead">Three places to start, depending on how deep you want to go.</p>

  <div class="home-cards">
    <a class="home-card" href="cs-fundamentals/">
      <div class="home-card__art" aria-hidden="true">
        <svg viewBox="0 0 200 110">
          <g class="art-line"><path d="M100 22 L60 55 M100 22 L140 55 M60 55 L38 88 M60 55 L82 88 M140 55 L162 88"/></g>
          <g class="art-node"><circle cx="100" cy="22" r="11"/><circle cx="60" cy="55" r="11"/><circle cx="140" cy="55" r="11"/><circle cx="38" cy="88" r="9"/><circle cx="82" cy="88" r="9"/><circle cx="162" cy="88" r="9"/></g>
          <g class="art-text"><text x="100" y="26">8</text><text x="60" y="59">3</text><text x="140" y="59">12</text><text x="38" y="92">1</text><text x="82" y="92">5</text><text x="162" y="92">15</text></g>
        </svg>
      </div>
      <div class="home-card__body">
        <h3>CS Fundamentals</h3>
        <p>How a computer actually runs a program: memory, algorithms and data structures, through CS50 and beyond.</p>
        <span class="home-card__link">Explore the foundations →</span>
      </div>
    </a>

    <a class="home-card" href="c/">
      <div class="home-card__art" aria-hidden="true">
        <svg viewBox="0 0 200 110">
          <g class="art-box"><rect x="22" y="38" width="56" height="34" rx="5"/><rect x="122" y="38" width="56" height="34" rx="5"/></g>
          <g class="art-line"><path d="M78 55 H114"/><path class="art-arrow" d="M108 49 L116 55 L108 61"/></g>
          <g class="art-text"><text x="50" y="59">p</text><text x="150" y="59">42</text></g>
          <g class="art-caption"><text x="50" y="90">int *p</text><text x="150" y="90">0x7ffe</text><text x="100" y="24">p = &amp;x;</text></g>
        </svg>
      </div>
      <div class="home-card__body">
        <h3>C</h3>
        <p>Pointers, memory you manage yourself, and notes from K&amp;R: where you stop guessing what the machine does.</p>
        <span class="home-card__link">Dive into C →</span>
      </div>
    </a>

    <a class="home-card" href="lab/">
      <div class="home-card__art" aria-hidden="true">
        <svg viewBox="0 0 200 110">
          <g class="art-box"><rect x="20" y="14" width="160" height="82" rx="7"/></g>
          <g class="art-dots"><circle cx="34" cy="26" r="3"/><circle cx="44" cy="26" r="3"/><circle cx="54" cy="26" r="3"/></g>
          <g class="art-code"><text x="32" y="52"><tspan class="art-accent">$</tspan> git add .</text><text x="32" y="68"><tspan class="art-accent">$</tspan> git commit -m "fix"</text><text x="32" y="84"><tspan class="art-accent">$</tspan> git push<tspan class="art-cursor">▌</tspan></text></g>
        </svg>
      </div>
      <div class="home-card__body">
        <h3>Lab</h3>
        <p>Hands-on guides and cheatsheets from real work: Git today, Docker and CI/CD next.</p>
        <span class="home-card__link">Open the Lab →</span>
      </div>
    </a>
  </div>
</section>

<section class="home-section home-journey" data-search-exclude>
  <div class="home-journey__intro">
    <h2 class="home-section__title">Currently learning</h2>
    <p class="home-section__lead">Working through CS50 with K&amp;R open on the desk, and writing down what sticks: the wins, the bugs, and the "oh, that's why" moments.</p>
    <a class="home-btn" href="blog/">Follow the journey</a>
  </div>

  <div class="home-journey__art" aria-hidden="true">
    <svg viewBox="0 0 320 190">
      <g class="art-box"><rect x="10" y="10" width="300" height="170" rx="10"/></g>
      <g class="art-dots"><circle cx="28" cy="27" r="4"/><circle cx="42" cy="27" r="4"/><circle cx="56" cy="27" r="4"/></g>
      <g class="art-caption"><text x="160" y="30">hello.c</text></g>
      <g class="art-code art-code--lg">
        <text x="30" y="66"><tspan class="art-accent">#include</tspan> &lt;stdio.h&gt;</text>
        <text x="30" y="96"><tspan class="art-accent">int</tspan> main(<tspan class="art-accent">void</tspan>)</text>
        <text x="30" y="116">{</text>
        <text x="48" y="136">printf(<tspan class="art-string">"hello, world\n"</tspan>);</text>
        <text x="30" y="156">}<tspan class="art-cursor">▌</tspan></text>
      </g>
    </svg>
  </div>

  <div class="home-latest">
    <h3 class="home-latest__title">Latest notes</h3>
    <div class="home-mini-cards">
      <a class="home-mini-card" href="lab/git/basics/">
        <span class="home-mini-card__kicker">Lab · Git</span>
        <span class="home-mini-card__title">Basics &amp; Daily Commands</span>
        <span class="home-card__link">Read →</span>
      </a>
      <a class="home-mini-card" href="java/generic-types/">
        <span class="home-mini-card__kicker">Languages · Java</span>
        <span class="home-mini-card__title">Generic Types in Java</span>
        <span class="home-card__link">Read →</span>
      </a>
      <a class="home-mini-card" href="blog/2026/05/09/why-my-mkdocs-article-showed-11-months-ago-as-creation-date/">
        <span class="home-mini-card__kicker">Blog · Debugging</span>
        <span class="home-mini-card__title">Why My Article Showed 11 Months Ago as Creation Date</span>
        <span class="home-card__link">Read →</span>
      </a>
    </div>
  </div>
</section>
