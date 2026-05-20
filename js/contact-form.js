/**
 * contact-form.js — Ernie And Flo
 *
 * Handles the contact form on about.html.
 * Replaces the old StaticForms POST approach with EmailJS so the
 * user stays on the site and is redirected to message-sent.html.
 *
 * Depends on:
 *   - js/email.min.js  (EmailJS SDK, loaded before this file)
 * 
 * Template variables expected by EmailJS:
 *   {{name}}    — sender's name
 *   {{email}}   — sender's email (set as Reply-To in the template)
 *   {{message}} — message body
 */

(function initContactForm() {
  "use strict";

  /* ── Config — update template ID once created in the dashboard ── */
  var EMAILJS_PUBLIC_KEY  = "JirJ4-BPe5UTaHc6V";
  var EMAILJS_SERVICE_ID  = "service_hcqlzmh";
  var EMAILJS_TEMPLATE_ID = "template_g6xy20i";
  var REDIRECT_URL        = "message-sent.html";

  /* ── Guard: only run on pages that have the contact form ──────── */
  var form = document.getElementById("contactForm");
  if (!form) return;

  emailjs.init(EMAILJS_PUBLIC_KEY);

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    /* Honeypot check */
    if (form.querySelector('[name="honeypot"]').value) return;

    /* reCAPTCHA check */
    if (typeof grecaptcha !== "undefined") {
      if (grecaptcha.getResponse().length === 0) {
        var errorEl = document.getElementById("recaptchaError");
        if (errorEl) errorEl.classList.add("is-visible");
        document.querySelector(".g-recaptcha")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }
    }

    /* Consent check */
    var consent = document.getElementById("consent");
    if (consent && !consent.checked) {
      var consentLabel = document.querySelector("label[for='consent']");
      alert(consentLabel ? consentLabel.textContent.trim() : "Veuillez accepter les conditions.");
      return;
    }

    /* Collect field values */
    var name    = document.getElementById("name").value.trim();
    var email   = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    /* Disable submit button to prevent double-send */
    var submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name:    name,
        email:   email,
        message: message,
      });

      window.location.href = REDIRECT_URL;

    } catch (err) {
      console.error("EmailJS error:", err);

      var msg = err?.text
        ? "Erreur " + err.status + " : " + err.text
        : (err?.message ? "Erreur réseau : " + err.message : "Une erreur inconnue s'est produite.");

      alert(msg);

      /* Re-enable submit so the user can try again */
      if (submitBtn) submitBtn.disabled = false;
    }
  });

})();
