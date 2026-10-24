---
title: Projects
description: "A collection of projects built over the years; from blockchain and microservices to machine learning and full stack apps."
hide:
  - toc
  - navigation
  - feedback
  - footer
icon: lucide/folder-kanban
---

<section class="section-hero home-band home-band--dark" data-search-exclude>
  <span class="home-eyebrow">Projects</span>
  <h1 class="section-hero__title">Things I've built. <em>All of them taught me something.</em></h1>
  <p class="section-hero__lead">Academic projects, interview challenges, personal experiments. Not all of them are polished; some were built to learn, some to ship, some to prove a concept.</p>
</section>

<nav class="project-category-nav" data-search-exclude>
  <a href="#blockchain">Blockchain</a>
  <a href="#fullstack">Full Stack &amp; Microservices</a>
  <a href="#ml">Machine Learning</a>
  <a href="#mini">Mini Projects</a>
  <a href="#web">Web &amp; Community</a>
  <a href="#powerbi">Power BI</a>
</nav>

<div class="project-sections" data-search-exclude>

  <div class="project-section" id="blockchain">
    <span class="home-eyebrow">Blockchain</span>
    <div class="project-grid">
      <a class="project-card" href="blockchain/bcertificate/">
        <div class="project-card__body">
          <h3 class="project-card__title">bcertificate</h3>
          <p class="project-card__desc">A permissioned blockchain network built on Hyperledger Fabric for issuing and verifying academic transcripts. Institutions can enroll, issue certificates as on-chain assets, and any third party can verify authenticity without contacting the issuing body.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="blockchain/landcertificate/">
        <div class="project-card__body">
          <h3 class="project-card__title">landcertificate</h3>
          <p class="project-card__desc">A Hyperledger Fabric network for recording and transferring land ownership. Property titles are stored as blockchain assets, making ownership history tamper-proof and publicly verifiable. Built as a proof of concept for land registry modernization.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
    </div>
  </div>

  <div class="project-section" id="fullstack">
    <span class="home-eyebrow">Full Stack &amp; Microservices</span>
    <div class="project-grid">
      <a class="project-card" href="java/crypto-portfolio/">
        <div class="project-card__body">
          <h3 class="project-card__title">Crypto Portfolio</h3>
          <p class="project-card__desc">A Spring Boot microservices application for tracking cryptocurrency holdings. Services communicate over REST, with a gateway handling routing and auth. Built to practice service decomposition, inter-service calls, and distributed state management.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="java/it-support-ticket-system/">
        <div class="project-card__body">
          <h3 class="project-card__title">IT Support Ticket System</h3>
          <p class="project-card__desc">A full stack ticket management system built with Spring Boot and a React frontend. Users can open, track and escalate support requests; agents can assign, update and close tickets. Covers role-based access, pagination, and real-time status updates.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="java/conferences/">
        <div class="project-card__body">
          <h3 class="project-card__title">Conferences</h3>
          <p class="project-card__desc">A conference management platform built with Spring Boot. Organizers can create events, manage committees, schedule sessions and assign speakers. Built to practice domain modeling, REST API design, and multi-role authorization in a real-world-shaped problem.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="java/pharmacy-mgmt/">
        <div class="project-card__body">
          <h3 class="project-card__title">Pharmacy Management</h3>
          <p class="project-card__desc">A JEE web application for managing pharmacy inventory, prescriptions, and sales. Built during a university module to learn the Java EE stack end to end: servlets, JPA, and deployment on a local application server.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="web/acemanager/">
        <div class="project-card__body">
          <h3 class="project-card__title">acemanager</h3>
          <p class="project-card__desc">A membership management application for a Comorian student association. Members can register, pay dues, and access resources; admins manage rosters and events. Built with Node.js and a simple dashboard. My first production-grade JavaScript backend.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
    </div>
  </div>

  <div class="project-section" id="ml">
    <span class="home-eyebrow">Machine Learning</span>
    <div class="project-grid">
      <a class="project-card" href="ml/ml-flask-app/">
        <div class="project-card__body">
          <h3 class="project-card__title">ML Flask App</h3>
          <p class="project-card__desc">A machine learning model exposed via a REST API built with Flask. The model is trained offline and served as a prediction endpoint: input features in, prediction out. Built to practice the gap between a notebook experiment and a deployable service.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
    </div>
  </div>

  <div class="project-section" id="mini">
    <span class="home-eyebrow">Mini Projects</span>
    <div class="project-grid">
      <a class="project-card" href="java/banking/">
        <div class="project-card__body">
          <h3 class="project-card__title">Banking</h3>
          <p class="project-card__desc">A Java SE console app simulating core banking operations: account creation, deposits, withdrawals, and transfer between accounts. Focused on OOP design (accounts, transactions, and a simple in-memory ledger) rather than persistence or UI.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="java/hotel-reservation/">
        <div class="project-card__body">
          <h3 class="project-card__title">Hotel Reservation</h3>
          <p class="project-card__desc">A Java SE command-line hotel reservation system. Guests can search available rooms by date, make and cancel bookings, and view their reservations. Built as a practice project for encapsulation, collections, and modeling date-based availability logic.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="java/rpg/">
        <div class="project-card__body">
          <h3 class="project-card__title">RPG Java</h3>
          <p class="project-card__desc">A text-based RPG built in Java, my first serious project. Players explore rooms, fight enemies, collect items and level up. Looking back, the code is messy, but finishing it was the moment programming stopped feeling abstract and started feeling real.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
    </div>
  </div>

  <div class="project-section" id="web">
    <span class="home-eyebrow">Web &amp; Community</span>
    <div class="project-grid">
      <a class="project-card" href="web/acem/">
        <div class="project-card__body">
          <h3 class="project-card__title">acem.tech</h3>
          <p class="project-card__desc">A news and community platform for a Comorian student association built with React. Members can read posts, browse announcements, and discover events. My first React project, where I learned component thinking, state management, and deploying a SPA the hard way.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="web/jsc-fes-2021/">
        <div class="project-card__body">
          <h3 class="project-card__title">jsc-fes-2021</h3>
          <p class="project-card__desc">A landing page for a Comorian cultural event held in Fez in 2021. Built with vanilla HTML and CSS: a single-page site with program details, speakers, and a registration section. Simple scope, but a good reminder of how much you can do without a framework.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="web/masterglcl/">
        <div class="project-card__body">
          <h3 class="project-card__title">MasterGLCL</h3>
          <p class="project-card__desc">An institutional website for a Master's program in Software Engineering for the Cloud. Built with HTML and CSS, it covers the curriculum, faculty, and admission process. Designed to be clean and readable. It was my first real attempt at typographic hierarchy on the web.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
      <a class="project-card" href="web/codelogium/">
        <div class="project-card__body">
          <h3 class="project-card__title">Codelogium</h3>
          <p class="project-card__desc">This site. A documentation and learning journal built with MkDocs Material, extended with custom CSS and JavaScript. Notes, guides, and projects collected in one place: the ongoing project of making my learning visible and shareable.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
    </div>
  </div>

  <div class="project-section" id="powerbi">
    <span class="home-eyebrow">Power BI</span>
    <div class="project-grid">
      <a class="project-card" href="powerbi/powerbi-template/">
        <div class="project-card__body">
          <h3 class="project-card__title">Power BI Template</h3>
          <p class="project-card__desc">A reusable Power BI dashboard template with a consistent color scheme, layout, and data model structure. Built to speed up report creation for recurring reporting needs: swap the data source, keep the design.</p>
        </div>
        <div class="project-card__footer">
          <span class="project-card__cta">View project &rsaquo;</span>
        </div>
      </a>
    </div>
  </div>

</div>
