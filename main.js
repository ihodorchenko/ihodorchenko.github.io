/* =========================================================
   Senior iOS Developer — landing page
   Language switch (RU base / EN override) + interactions
   ========================================================= */
(() => {
  "use strict";

  /* ---------- translations ---------- */
  const EN = {
    "skip": "Skip to content",
    "nav.aria": "Main navigation",
    "lang.aria": "Language",
    "about.factsAria": "Key facts",
    "brand.name": "Senior iOS Developer",
    "brand.mark": "IK",
    "brand.aria": "Senior iOS Developer — home",
    "brand.role": "Senior iOS Developer",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.work": "Projects",
    "nav.skills": "Stack",
    "nav.ai": "AI",
    "nav.contact": "Contact",
    "nav.linkedin": "LinkedIn",

    "hero.kicker": "10 years in iOS",
    "hero.name.first": "Senior iOS",
    "hero.name.last": "Developer",
    "hero.lead": "I design and grow mobile banking apps — from architecture and the first screen to App Store release. 13 years in software, 10 of them in iOS. I step into legacy code and make it clearer, faster and safer.",
    "hero.ctaPrimary": "Get in touch",
    "hero.ctaLinkedin": "LinkedIn",
    "hero.ctaTertiary": "See projects",
    "hero.fun": "I write Swift, think in commits",
    "hero.english": "English Upper-Intermediate",
    "hero.photoCaption": "13 years building software",
    "hero.appsUnit": "apps",
    "hero.photoAlt": "Senior iOS Developer, Senior iOS Developer",

    "stats.years": "Years in software",
    "stats.ios": "Years in iOS",
    "stats.apps": "Apps on the App Store",
    "stats.markets": "Markets",

    "about.kicker": "About me",
    "about.title": "Mobile banking is<br><em>my home turf</em>",
    "about.p1": "For over ten years I have been building iOS apps in fintech: payments, transfers, cards, deposits, loans, support chat. I have worked on products built from scratch and on projects where there is more code than documentation and more users than tests.",
    "about.p2": "I own a feature end to end: discuss it with product and design, propose a solution, estimate, write the code, review the team's code, prepare the build and ship it. I can explain complex things simply — to engineers and to stakeholders alike.",
    "about.p3": "I am comfortable with other people's code and with “it has always been like this”: first I understand it, then I change it — in small steps, without breaking what customers already rely on.",
    "about.quote": "“Good code isn't the code written fast — it's the code you're not afraid to open a year later.”",
    "about.factsTitle": "At a glance",
    "about.fact1": "13 years of commercial development",
    "about.fact2": "Master's in Mathematics and Computer Science",
    "about.fact3": "9 apps on the App Store",
    "about.fact4": "Apps built from scratch",
    "about.fact5": "Code review and mentoring juniors",
    "about.fact6": "Releases, TestFlight and App Store Connect",
    "about.fact7": "Estimates and feature planning",
    "about.badge1": "Banking",
    "about.badge2": "Fintech",
    "about.badge3": "Telecom",

    "exp.kicker": "Experience",
    "exp.title": "Three teams,<br><em>thirteen years</em>",
    "exp.lead": "From Windows Phone in 2013 to Swift, Combine and HCE payments today. The companies, the projects and what I actually did there.",
    "exp.nda": "NDA",
    "exp.did": "What I did:",

    "exp.job1.period": "April 2022 — present",
    "exp.job1.duration": "4 yrs 7 mos",
    "exp.job1.role": "Senior iOS Developer",
    "exp.job1.mode": "Outsourcing, banking & fintech",
    "exp.job1.p1.period": "November 2023 — now",
    "exp.job1.p1.desc": "Telecom banking: payments, card-to-card transfers, virtual card issuing, credit products and in-app HCE payments.",
    "exp.job1.p1.did": "revamped the UI, rewrote the overall balance logic and the Megawallet (credits) module.",
    "exp.job1.p2.period": "June — October 2023",
    "exp.job1.p2.desc": "Mobile bank for Birbank customers in Azerbaijan: accounts, transfers, loans and credit cards, utility and mobile top-ups.",
    "exp.job1.p2.did": "built the PFM (Personal Finance Manager) module and owned its performance and code quality.",
    "exp.job1.p3.period": "May 2022 — May 2023",
    "exp.job1.p3.desc": "Unibank banking app: cards, deposits, loans, insurance, transfers via the national and international systems.",
    "exp.job1.p3.did": "card look customisation for Apple Wallet, moneybox and top-ups, card scanning with Vision, architecture upgrade, module refactoring.",
    "exp.job1.p4.period": "2022 — 2024",
    "exp.job1.p4.did": "App maintenance, bug fixing, feature estimates.",
    "exp.job1.p5.period": "2022 — 2024",
    "exp.job1.p5.did": "New features, bug fixing, code review.",
    "exp.job1.p6.period": "2022 — 2023",
    "exp.job1.p6.did": "Code review and feature estimates.",

    "exp.job2.period": "August 2016 — April 2022",
    "exp.job2.duration": "5 yrs 9 mos",
    "exp.job2.company": "CleverTech (LLC)",
    "exp.job2.role": "iOS Developer",
    "exp.job2.mode": "Custom development",
    "exp.job2.p1.period": "2016 — 2022",
    "exp.job2.p1.desc": "Alfa-Bank Belarus mobile bank: passport-scan onboarding, payments, SWIFT transfers, deposits, cards, support chat.",
    "exp.job2.p1.did": "built the app from scratch in Swift, designed the architecture, several graphic themes, localisation, Vision-based scanning, Apple Wallet, chat and news UI, App Store releases, mentored juniors.",
    "exp.job2.p2.period": "2017 — 2022",
    "exp.job2.p2.did": "App maintenance, legacy refactoring, new features, estimates, communication with the client, backend and design teams, code review.",
    "exp.job2.p3.period": "2017 — 2022",
    "exp.job2.p3.title": "Alfa-Bank Kazakhstan <svg class=\"icon icon-link\" aria-hidden=\"true\"><use href=\"#i-arrow\"/></svg>",
    "exp.job2.p3.did": "Maintenance, refactoring, new features, code review, releases.",
    "exp.job2.p4.period": "December 2019 — February 2020",
    "exp.job2.p4.did": "Worked on the app's overall design, refactored modules, fixed bugs, reviewed code.",

    "exp.job3.period": "April 2013 — April 2016",
    "exp.job3.duration": "3 yrs 1 mo",
    "exp.job3.company": "Intervale-Gomel (LLC)",
    "exp.job3.role": "Software Engineer",
    "exp.job3.mode": "Windows Phone",
    "exp.job3.p1.desc": "A pool of Windows Phone banking apps: a shared payment module and UI components branded for each client bank.",
    "exp.job3.p1.did": "built the business logic and the presentation layer, a separate UI for every customer.",

    "work.kicker": "Projects",
    "work.title": "Apps that<br><em>real people use</em>",
    "work.lead": "Banks and telecom across six countries. Some projects are under NDA — happy to walk you through them on a call. The rest are live on the App Store.",
    "work.is.category": "Banking · Belarus",
    "work.is.desc": "Built from scratch: architecture, custom themes, passport scanning, SWIFT transfers, Apple Wallet.",
    "work.birbank.category": "Banking · Azerbaijan",
    "work.birbank.desc": "PFM module: spending analytics and budgets inside a large mobile bank.",
    "work.ubank.category": "Banking · Unibank",
    "work.ubank.desc": "Apple Wallet, moneybox, card scanning with Vision, architecture upgrade.",
    "work.a1.category": "Banking · A1 telecom",
    "work.a1.desc": "Maintenance and growth of the A1 telecom mobile bank.",
    "work.kz.category": "Banking · Kazakhstan",
    "work.kz.title": "Alfa-Bank Kazakhstan",
    "work.kz.desc": "Maintaining a large banking app: features, refactoring, releases.",
    "work.ua.category": "Banking · Ukraine",
    "work.ua.desc": "Growing the app while gradually refactoring legacy code.",
    "work.cashew.category": "BNPL · United Kingdom",
    "work.cashew.desc": "Code review and estimates in a buy-now-pay-later fintech product.",
    "work.yota.category": "Telecom · Yota",
    "work.yota.desc": "App design, module refactoring, code review.",
    "work.dns.category": "Security · Uzbekistan",
    "work.dns.desc": "New features and code review in a NetworkExtension-powered app.",

    "skills.kicker": "Stack",
    "skills.title": "What I use<br><em>every day</em>",
    "skills.lead": "I don't chase every new library — I pick the tool that fits the task and the project. But I know the modern iOS stack well.",
    "skills.lang.title": "Languages",
    "skills.ui.title": "Interface",
    "skills.arch.title": "Architecture & data",
    "skills.payments.title": "Payments & security",
    "skills.tools.title": "Tooling",
    "skills.frameworks.title": "Frameworks",

    "ai.kicker": "AI at work",
    "ai.title": "AI speeds up the routine,<br><em>the decisions stay mine</em>",
    "ai.lead": "Claude, ChatGPT and Cursor are part of my daily process: make sense of unfamiliar code, sketch a refactor, generate tests, describe a feature. Whatever lands in the project goes through review, tests and my own check.",
    "ai.work.title": "Commercial projects",
    "ai.work.desc": "Banking and fintech: AI removes the routine and helps get into complex legacy faster, but it does not make product decisions.",
    "ai.work.1": "mapping old modules and unfamiliar architectures",
    "ai.work.2": "refactoring drafts, finished by hand",
    "ai.work.3": "unit tests, mocks and test data",
    "ai.work.4": "feature specs, estimates, documentation",
    "ai.personal.title": "Personal projects",
    "ai.personal.desc": "A sandbox for quick experiments — here AI can take more, because the cost of a mistake is lower.",
    "ai.personal.1": "interface prototypes and idea checks",
    "ai.personal.2": "this page was built together with an AI assistant",
    "ai.personal.3": "automating routine: scripts, copy, data",
    "ai.personal.4": "exploring new frameworks and APIs",
    "ai.rules.title": "Ground rules",
    "ai.rules.desc": "AI is a tool, not the author. Responsibility for code, data and deadlines stays with me.",
    "ai.rules.1": "no client code or data in public models without permission",
    "ai.rules.2": "every generated line is checked before commit",
    "ai.rules.3": "architecture decisions are mine",
    "ai.rules.4": "licences and dependencies are verified by hand",
    "ai.tools": "Tools",
    "ai.note": "AI doesn't replace code review or tests",

    "edu.kicker": "Education & languages",
    "edu.title": "Mathematics<br><em>that paid off</em>",
    "edu.master.title": "Master's in Mathematics",
    "edu.master.school": "Francysk Skaryna Gomel State University",
    "edu.master.detail": "Mathematics. Computer Science",
    "edu.bachelor.period": "Bachelor's degree",
    "edu.bachelor.title": "Economic Cybernetics",
    "edu.bachelor.school": "Francysk Skaryna Gomel State University",
    "edu.bachelor.detail": "Mathematical methods and computer modelling in economics",
    "edu.languages": "Languages",
    "edu.en.level": "Upper-Intermediate",
    "edu.ru.name": "Russian",
    "edu.ru.level": "Fluent",
    "edu.by.name": "Belarusian",
    "edu.by.level": "Native",

    "contact.kicker": "Contact",
    "contact.title": "Looking for an iOS developer<br><em>who ships?</em>",
    "contact.lead": "An idea, a product or tricky legacy code — I'll reply and suggest how to approach it.",
    "contact.fun": "I reply before Xcode finishes indexing",
    "contact.copy": "Copy",
    "contact.copyEmail": "Copy email address",

    "footer.name": "Senior iOS Developer",
    "footer.made": "Senior iOS Developer",
    "footer.linkedin": "LinkedIn",
    "footer.top": "Back to top ↑",
    "theme.label": "Theme",

    "toast.copied": "Copied"
  };

  const META = {
    ru: {
      title: "Senior iOS Developer — Senior iOS Developer",
      desc: "Senior iOS Developer с 13-летним опытом. Мобильный банкинг: 9 приложений в App Store, Swift, UIKit, SwiftUI, Combine."
    },
    en: {
      title: "Senior iOS Developer — Senior iOS Developer",
      desc: "Senior iOS Developer with 13 years in software and 10 in iOS. Mobile banking: 9 apps on the App Store. Swift, UIKit, SwiftUI, Combine."
    }
  };

  const root = document.documentElement;
  const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const altNodes = Array.from(document.querySelectorAll("[data-i18n-alt]"));
  const labelNodes = Array.from(document.querySelectorAll("[data-i18n-label]"));
  const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
  const metaDesc = document.querySelector('meta[name="description"]');

  // Remember the Russian baseline exactly as authored in the HTML.
  i18nNodes.forEach((el) => { el.dataset.ru = el.innerHTML; });
  altNodes.forEach((el) => { el.dataset.ruAlt = el.getAttribute("alt") || ""; });
  labelNodes.forEach((el) => { el.dataset.ruLabel = el.getAttribute("aria-label") || ""; });

  let currentLang = "ru";

  function applyLanguage(lang) {
    currentLang = lang;
    const dict = lang === "en" ? EN : null;

    i18nNodes.forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict ? dict[key] : el.dataset.ru;
      if (value == null) return;
      if (/<[a-z][\s\S]*>/i.test(value)) el.innerHTML = value;
      else el.textContent = value;
    });

    altNodes.forEach((el) => {
      const key = el.dataset.i18nAlt;
      const value = lang === "en" ? EN[key] : el.dataset.ruAlt;
      if (value) el.setAttribute("alt", value);
    });

    labelNodes.forEach((el) => {
      const key = el.dataset.i18nLabel;
      const value = lang === "en" ? EN[key] : el.dataset.ruLabel;
      if (value) el.setAttribute("aria-label", value);
    });

    root.setAttribute("lang", lang);
    document.title = META[lang].title;
    if (metaDesc) metaDesc.setAttribute("content", META[lang].desc);

    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]')
      .forEach((el) => el.setAttribute("content", META[lang].title));
    document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]')
      .forEach((el) => el.setAttribute("content", META[lang].desc));

    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    const toggle = document.getElementById("nav-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", lang === "en" ? "Open menu" : "Открыть меню");
    }

    try { localStorage.setItem("ih-lang", lang); } catch (e) { /* private mode */ }
    try {
      const url = new URL(window.location.href);
      if (url.protocol === "file:") return;
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
    } catch (e) { /* noop */ }
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang !== currentLang) {
        applyLanguage(btn.dataset.lang);
        renderTheme();
      }
    });
  });

  // Priority: ?lang= in the URL (shareable link) → saved preference → Russian.
  let savedLang = "ru";
  try { savedLang = localStorage.getItem("ih-lang") || "ru"; } catch (e) { /* noop */ }
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "en" || param === "ru") savedLang = param;
  } catch (e) { /* noop */ }
  applyLanguage(savedLang === "en" ? "en" : "ru");

  /* ---------- theme ---------- */
  const THEME_KEY = "ih-theme";
  const THEME_NAMES = {
    ru: { auto: "Авто", light: "Светлая", dark: "Тёмная" },
    en: { auto: "Auto", light: "Light", dark: "Dark" }
  };
  const THEME_PREFIX = { ru: "Тема", en: "Theme" };
  const themeButtons = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-mobile")
  ].filter(Boolean);
  const themeIcons = Array.from(document.querySelectorAll(".theme-icon-use"));
  const themeValue = document.getElementById("theme-value");
  const systemLight = window.matchMedia("(prefers-color-scheme: light)");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  let themeMode = document.documentElement.getAttribute("data-theme-mode") || "auto";

  function resolveTheme(mode) {
    if (mode === "light" || mode === "dark") return mode;
    return systemLight.matches ? "light" : "dark";
  }

  function renderTheme() {
    const resolved = resolveTheme(themeMode);
    const rootEl = document.documentElement;
    rootEl.setAttribute("data-theme", resolved);
    rootEl.setAttribute("data-theme-mode", themeMode);

    const icon = themeMode === "auto" ? "#i-theme-auto" : themeMode === "light" ? "#i-sun" : "#i-moon";
    themeIcons.forEach((use) => use.setAttribute("href", icon));

    const lang = THEME_NAMES[currentLang] ? currentLang : "ru";
    const name = THEME_NAMES[lang][themeMode];
    themeButtons.forEach((btn) => {
      btn.setAttribute("aria-label", `${THEME_PREFIX[lang]}: ${name}`);
      btn.setAttribute("title", THEME_PREFIX[lang]);
    });
    if (themeValue) themeValue.textContent = name;

    if (themeMeta) themeMeta.setAttribute("content", resolved === "light" ? "#f5f7f6" : "#07090a");
  }

  function cycleTheme() {
    const order = ["auto", "light", "dark"];
    themeMode = order[(order.indexOf(themeMode) + 1) % order.length];
    try { localStorage.setItem(THEME_KEY, themeMode); } catch (e) { /* private mode */ }
    renderTheme();
  }

  themeButtons.forEach((btn) => btn.addEventListener("click", cycleTheme));

  // When following the system, react to OS appearance changes.
  if (systemLight.addEventListener) {
    systemLight.addEventListener("change", () => {
      if (themeMode === "auto") renderTheme();
    });
  }

  renderTheme();

  /* ---------- header + scroll progress ---------- */
  const header = document.getElementById("site-header");
  const progressBar = document.getElementById("progress-bar");

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    header.classList.toggle("is-scrolled", y > 8);

    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
  }, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  function setMenu(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
    document.body.classList.toggle("nav-open", open);
  }

  navToggle.addEventListener("click", () => {
    setMenu(navToggle.getAttribute("aria-expanded") !== "true");
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      navToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && navToggle.getAttribute("aria-expanded") === "true") setMenu(false);
  });

  /* ---------- reveal on scroll ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });

    revealItems.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- animated counters ---------- */
  const counters = Array.from(document.querySelectorAll(".count"));

  function runCounter(el) {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    if (reduceMotion) { el.textContent = String(target); return; }

    const duration = 1300;
    const start = performance.now();
    const formatter = new Intl.NumberFormat(currentLang === "en" ? "en-US" : "ru-RU");

    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = formatter.format(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = formatter.format(target);
    }
    requestAnimationFrame(frame);
  }

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ---------- active nav link ---------- */
  const navLinks = Array.from(document.querySelectorAll(".nav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach((section) => activeObserver.observe(section));
  }

  /* ---------- copy to clipboard ---------- */
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  function fallbackCopy(text) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.dataset.copy;
      let ok = false;
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch (e) {
        ok = fallbackCopy(text);
      }
      showToast(ok
        ? (currentLang === "en" ? "Copied — " : "Скопировано — ") + text
        : text);
    });
  });

  /* ---------- misc ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
