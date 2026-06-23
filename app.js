/* ============================================================================
   app.js — render logic. You normally don't need to touch this file.
   Reads PROFESSIONAL and PERSONAL from content.js and builds the page.
   ========================================================================== */

(function () {
  "use strict";

  var escapeHTML = function (str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };

  // On-brand gradients used when a project has no image yet.
  var GRADIENTS = [
    "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    "linear-gradient(135deg, #1d1442 0%, #5b3aa8 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #6428c7 100%)",
    "linear-gradient(135deg, #29205a 0%, #7c3aed 100%)",
    "linear-gradient(135deg, #a855f7 0%, #6a2cd4 100%)"
  ];

  function visualStyle(project, index) {
    if (project.image && project.image.trim()) {
      return 'background-image:url(\'' + escapeHTML(project.image) + '\')';
    }
    return "background-image:" + GRADIENTS[index % GRADIENTS.length];
  }

  var store = { professional: [], personal: [] };

  function tagsHTML(tags) {
    if (!tags || !tags.length) return "";
    return tags.map(function (t) { return '<span class="tag">' + escapeHTML(t) + "</span>"; }).join("");
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function cardHTML(project, category, index) {
    return (
      '<button class="card" data-cat="' + category + '" data-index="' + index + '">' +
        '<span class="card__visual" style="' + visualStyle(project, index) + '">' +
          '<span class="card__num">' + pad(index + 1) + "</span>" +
          (project.domain ? '<span class="card__domain">' + escapeHTML(project.domain) + "</span>" : "") +
        "</span>" +
        '<span class="card__content">' +
          '<span class="card__meta">' + escapeHTML(project.org) + " · " + escapeHTML(project.role) +
            " · " + escapeHTML(project.timeframe) + "</span>" +
          '<span class="card__title">' + escapeHTML(project.title) + "</span>" +
          (project.tagline ? '<span class="card__tagline">' + escapeHTML(project.tagline) + "</span>" : "") +
          (project.impact ? '<span class="card__impact">' + escapeHTML(project.impact) + "</span>" : "") +
          '<span class="card__tags">' + tagsHTML(project.tags) + "</span>" +
          '<span class="card__more">Read the story →</span>' +
        "</span>" +
      "</button>"
    );
  }

  function renderGrid(list, category, mountId) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    store[category] = list || [];
    if (!store[category].length) {
      mount.innerHTML = '<p class="card__tagline">Projects coming soon.</p>';
      return;
    }
    mount.innerHTML = store[category]
      .map(function (p, i) { return cardHTML(p, category, i); })
      .join("");
  }

  function listHTML(items) {
    if (!items || !items.length) return "";
    return "<ul>" + items.map(function (i) { return "<li>" + escapeHTML(i) + "</li>"; }).join("") + "</ul>";
  }

  function galleryHTML(gallery) {
    if (!gallery || !gallery.length) return "";
    return '<div class="gallery">' + gallery.map(function (g) {
      return "<figure><img src='" + escapeHTML(g.src) + "' alt='" + escapeHTML(g.caption || "") + "' />" +
        (g.caption ? "<figcaption>" + escapeHTML(g.caption) + "</figcaption>" : "") + "</figure>";
    }).join("") + "</div>";
  }

  function linksHTML(links) {
    if (!links || !links.length) return "";
    return '<div class="links">' + links.map(function (l) {
      return '<a href="' + escapeHTML(l.url) + '" target="_blank" rel="noopener">' + escapeHTML(l.label) + " ↗</a>";
    }).join("") + "</div>";
  }

  function openModal(category, index) {
    var p = store[category][index];
    if (!p) return;
    var heroStyle = visualStyle(p, index);
    var body = document.getElementById("modal-body");
    body.innerHTML =
      '<p class="eyebrow">' + (category === "professional" ? "Professional" : "Personal") + "</p>" +
      '<h3 id="modal-title">' + escapeHTML(p.title) + "</h3>" +
      (p.tagline ? '<p class="tagline">' + escapeHTML(p.tagline) + "</p>" : "") +
      '<p class="meta">' + escapeHTML(p.org) + " · " + escapeHTML(p.role) + " · " + escapeHTML(p.timeframe) + "</p>" +
      (p.impact ? '<span class="impact-badge">' + escapeHTML(p.impact) + "</span>" : "") +
      (p.challenge ? "<h4>The challenge</h4><p>" + escapeHTML(p.challenge) + "</p>" : "") +
      (p.approach ? "<h4>My approach</h4><p>" + escapeHTML(p.approach) + "</p>" : "") +
      (p.decision ? '<p class="decision"><span class="decision__label">The call I made</span>' + escapeHTML(p.decision) + "</p>" : "") +
      (p.results && p.results.length ? "<h4>The outcome</h4>" + listHTML(p.results) : "") +
      (p.reflection ? '<p class="reflect">' + escapeHTML(p.reflection) + "</p>" : "") +
      galleryHTML(p.gallery) +
      (p.tags && p.tags.length ? '<div class="tags">' + tagsHTML(p.tags) + "</div>" : "") +
      linksHTML(p.links);

    // Header image only when a real image is set (gradients stay on the cards).
    var panel = document.querySelector(".modal__panel");
    var existingHero = panel.querySelector(".modal__hero");
    if (existingHero) existingHero.remove();
    if (p.image && p.image.trim()) {
      var hero = document.createElement("div");
      hero.className = "modal__hero";
      hero.style.cssText = heroStyle;
      panel.insertBefore(hero, body);
    }

    var modal = document.getElementById("modal");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    panel.scrollTop = 0;
  }

  function closeModal() {
    document.getElementById("modal").hidden = true;
    document.body.style.overflow = "";
  }

  function init() {
    renderGrid(typeof PROFESSIONAL !== "undefined" ? PROFESSIONAL : [], "professional", "professional-grid");
    renderGrid(typeof PERSONAL !== "undefined" ? PERSONAL : [], "personal", "personal-grid");

    document.addEventListener("click", function (e) {
      var card = e.target.closest(".card");
      if (card) { openModal(card.dataset.cat, parseInt(card.dataset.index, 10)); return; }
      if (e.target.hasAttribute("data-close")) closeModal();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
