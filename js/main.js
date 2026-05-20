/**
 * main.js — Ernie And Flo
 *
 * Shared behaviour for every page:
 *   - Mobile nav toggle
 *   - Buy modal (open / close / keyboard / outside-click)
 *   - reCAPTCHA validation (about.html contact form)
 *   - Auto-redirect on confirmation pages
 *
 * Page-specific logic lives in an inline <script> on each page
 * (or a dedicated file if it grows significantly).
 *
 * NOTE: landing.js has been merged here and can be deleted.
 */

/* ── Mobile navigation ───────────────────────────────────────── */
(function initNav() {
  const toggle   = document.getElementById("menu-toggle");
  const dropdown = document.getElementById("dropdown-menu");

  if (!toggle || !dropdown) return;

  toggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close when a nav link is tapped (mobile UX)
  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();


/* ── Buy modal ───────────────────────────────────────────────── */
(function initBuyModal() {
  const modal        = document.getElementById("buy-modal");
  const closeBtn     = document.getElementById("modal-close-btn");
  const openTriggers = document.querySelectorAll("[data-open-buy]");

  // Guard: modal not present on every page
  if (!modal) return;

  function openModal() {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  openTriggers.forEach((btn) => btn.addEventListener("click", openModal));

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Click on the dark backdrop (not the box itself) closes the modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard: Escape closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();


/* ── reCAPTCHA validation (about.html contact form) ─────────── */
(function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    if (typeof grecaptcha === "undefined") return;

    const response = grecaptcha.getResponse();
    if (response.length === 0) {
      e.preventDefault();

      const errorEl = document.getElementById("recaptchaError");
      if (errorEl) errorEl.classList.add("is-visible");

      document.querySelector(".g-recaptcha")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
})();


/* ── Auto-redirect on confirmation pages ─────────────────────── */
(function initAutoRedirect() {
  const el = document.getElementById("auto-redirect");
  if (!el) return;

  const delay = parseInt(el.dataset.delay ?? "8000", 10);
  const dest  = el.dataset.dest  ?? "https://www.ernieandflo.com";

  setTimeout(() => {
    window.location.href = dest;
  }, delay);
})();
