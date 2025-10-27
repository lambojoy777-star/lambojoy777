// Simple language switcher using data-i18n attributes.
(function(){
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const state = {
    lang: localStorage.getItem("lang") || "en"
  };

  function applyLang(lang){
    const dict = (window.COPY || {}). [lang] || {};
    // Walk through all data-i18n nodes
    $$("[data-i18n]").forEach(el => {
      const path = el.getAttribute("data-i18n").split(".");
      let cur = dict;
      for (const key of path) {
        if (cur && typeof cur === "object") cur = cur[key];
      }
      if (typeof cur === "string") {
        el.textContent = cur;
      }
    });
    // html lang attr
    document.documentElement.setAttribute("lang", lang === "ja" ? "ja" : "en");
    // toggle button state
    $("#btn-en").classList.toggle("is-active", lang === "en");
    $("#btn-en").setAttribute("aria-pressed", String(lang === "en"));
    $("#btn-ja").classList.toggle("is-active", lang === "ja");
    $("#btn-ja").setAttribute("aria-pressed", String(lang === "ja"));
    // store
    localStorage.setItem("lang", lang);
  }

  // attach events
  $("#btn-en")?.addEventListener("click", () => applyLang("en"));
  $("#btn-ja")?.addEventListener("click", () => applyLang("ja"));

  // initialize after lang.js loaded the COPY object
  if (window.COPY) {
    applyLang(state.lang);
  } else {
    // Wait if needed
    window.addEventListener("load", () => applyLang(state.lang));
  }
})();