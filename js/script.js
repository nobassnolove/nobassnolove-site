/**
 * NO BASS NO LOVE — Electronic Press Kit
 * JavaScript puro, sem dependências.
 * Módulos: navbar, menu mobile, scroll reveal, botão "voltar ao topo", ano do rodapé.
 */

(function () {
  "use strict";

  /* ---------- Ano automático no rodapé ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Navbar: estado "rolado" ---------- */
  var navbar = document.getElementById("navbar");
  var backToTop = document.getElementById("backToTop");

  function onScroll() {
    var scrolled = window.scrollY > 40;
    if (navbar) navbar.classList.toggle("is-scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 700);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Fecha o menu ao clicar em um link
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir menu");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Botão voltar ao topo ---------- */
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Scroll reveal (fade + slide up) ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: sem suporte a IntersectionObserver, mostra tudo direto
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
