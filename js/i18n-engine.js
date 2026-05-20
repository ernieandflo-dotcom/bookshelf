/**
 * i18n-engine.js -- Ernie And Flo
 *
 * Responsibilities:
 *   1. Detect active language (?lang= param > localStorage > "fr" default).
 *   2. Apply all translations to data-i18n elements on the page.
 *   3. Render the FR | EN toggle in the nav and wire up switching.
 *   4. Persist the choice to localStorage and sync the URL param.
 *
 * Depends on: js/i18n.js (must be loaded first).
 *
 * To add Kirundi later:
 *   - Add "rn" keys to EAF_I18N in i18n.js.
 *   - Add "rn" to SUPPORTED_LANGS below.
 *   - The toggle will automatically gain a third button.
 */

(function () {
  "use strict";

  /* ── Config ─────────────────────────────────────────────────── */
  var SUPPORTED_LANGS = ["fr", "en"];
  var DEFAULT_LANG    = "fr";
  var STORAGE_KEY     = "eaf_lang";

  /* ── 1. Resolve active language ─────────────────────────────── */
  function getInitialLang() {
    var param   = new URLSearchParams(window.location.search).get("lang");
    var stored  = localStorage.getItem(STORAGE_KEY);
    var lang    = param || stored || DEFAULT_LANG;
    return SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  }

  /* ── 2. Apply translations ──────────────────────────────────── */
  function applyTranslations(lang) {
    var strings = window.EAF_I18N[lang];
    if (!strings) return;

    // Set lang attribute on <html> for screen readers and CSS
    document.documentElement.lang = lang;

    // Translate all data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in strings)) return;

      // Keys ending in __html are set via innerHTML (used for links/em/strong).
      // All other keys use textContent (safer).
      if (key.endsWith("__html")) {
        el.innerHTML = strings[key];
      } else {
        el.textContent = strings[key];
      }
    });

    // Translate placeholder attributes separately
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key in strings) el.placeholder = strings[key];
    });

    // Translate aria-label attributes
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key in strings) el.setAttribute("aria-label", strings[key]);
    });

    // Update book language badges text
    document.querySelectorAll(".book-lang-badge").forEach(function (badge) {
      var bookLang = badge.getAttribute("data-book-lang");
      var badgeKey = "badge.lang." + bookLang;
      if (badgeKey in strings) badge.textContent = strings[badgeKey];
    });

    // Highlight active toggle button
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
      btn.setAttribute("aria-current", btn.dataset.lang === lang ? "true" : "false");
    });
  }

  /* ── 3. Switch language ─────────────────────────────────────── */
  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;

    // Persist
    localStorage.setItem(STORAGE_KEY, lang);

    // Sync URL param without a page reload
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url.toString());

    // Re-render
    applyTranslations(lang);
  }

  /* ── 4. Render the toggle into the nav ──────────────────────── */
  function renderToggle(activeLang) {
    // Find the desktop nav list -- we append after the last nav-divider
    var navList = document.querySelector("ul.nav-links");
    if (!navList) return;

    // Build the toggle container
    var toggle = document.createElement("li");
    toggle.className = "nav-lang-toggle";
    toggle.setAttribute("aria-label", "Language / Langue");

    SUPPORTED_LANGS.forEach(function (lang, idx) {
      // Separator between buttons (not before the first one)
      if (idx > 0) {
        var sep = document.createElement("span");
        sep.className = "lang-sep";
        sep.setAttribute("aria-hidden", "true");
        sep.textContent = "|";
        toggle.appendChild(sep);
      }

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-btn";
      btn.dataset.lang = lang;
      btn.textContent = lang.toUpperCase();
      btn.setAttribute("aria-current", lang === activeLang ? "true" : "false");
      btn.setAttribute("aria-label", "Switch to " + lang.toUpperCase());

      btn.addEventListener("click", function () {
        setLang(lang);
      });

      toggle.appendChild(btn);
    });

    navList.appendChild(toggle);

    // Mirror in the mobile dropdown too
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown) {
      var mobileToggle = toggle.cloneNode(true);
      mobileToggle.className = "mobile-lang-toggle";
      // Re-wire click events on the clone (cloneNode doesn't copy listeners)
      mobileToggle.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          setLang(btn.dataset.lang);
        });
      });
      dropdown.appendChild(mobileToggle);
    }
  }

  /* ── Boot ───────────────────────────────────────────────────── */
  var activeLang = getInitialLang();

  // Persist param to localStorage on first load (normalises bookmarked URLs)
  localStorage.setItem(STORAGE_KEY, activeLang);

  // Sync URL if param was missing or wrong
  var url = new URL(window.location.href);
  if (url.searchParams.get("lang") !== activeLang) {
    url.searchParams.set("lang", activeLang);
    history.replaceState(null, "", url.toString());
  }

  // Render toggle and apply strings once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      renderToggle(activeLang);
      applyTranslations(activeLang);
    });
  } else {
    renderToggle(activeLang);
    applyTranslations(activeLang);
  }

})();
