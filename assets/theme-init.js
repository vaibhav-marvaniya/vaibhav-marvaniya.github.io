/*
 * Early theme initialization (before rendering; no framework/build step).
 * First session: Hybrid. Every NEW browsing session without a manual preference:
 * Hybrid -> Editor -> C# Runtime -> Blueprint -> Hybrid.
 * Navigating between pages/reloading in the same tab keeps the active theme.
 * Any manual theme choice is persistent until Auto is reselected.
 */
(() => {
  'use strict';
  const ORDER = ['hybrid', 'editor', 'runtime', 'blueprint'];
  const VALID = new Set(ORDER);
  const MANUAL_KEY = 'vm_portfolio_theme_manual_v3';
  const OLD_MANUAL_KEY = 'vm_portfolio_theme_v2'; // Existing users' selection.
  const LAST_AUTO_KEY = 'vm_portfolio_last_auto_theme_v3';
  const SESSION_KEY = 'vm_portfolio_session_theme_v3';
  let manual = null;
  let theme = 'hybrid';
  let mode = 'auto';
  try {
    const saved = localStorage.getItem(MANUAL_KEY);
    const oldSaved = localStorage.getItem(OLD_MANUAL_KEY);
    manual = VALID.has(saved) ? saved : (VALID.has(oldSaved) ? oldSaved : null);
    if (manual) {
      mode = 'manual';
      theme = manual;
      // Keep legacy saved preferences working when upgrading from the v2 site.
      if (!VALID.has(saved)) localStorage.setItem(MANUAL_KEY, manual);
    }
  } catch (_) { /* Gracefully keep automatic fallback if storage is blocked. */ }
  if (mode === 'auto') {
    try {
      const inSession = sessionStorage.getItem(SESSION_KEY);
      if (VALID.has(inSession)) {
        theme = inSession;
      } else {
        const last = localStorage.getItem(LAST_AUTO_KEY);
        theme = VALID.has(last) ? ORDER[(ORDER.indexOf(last) + 1) % ORDER.length] : 'hybrid';
        sessionStorage.setItem(SESSION_KEY, theme);
        localStorage.setItem(LAST_AUTO_KEY, theme);
      }
    } catch (_) { /* Hybrid fallback if storage access is unavailable. */ }
  }
  document.documentElement.dataset.theme = theme;
  window.portfolioTheme = {
    mode,
    theme,
    setManual(next) {
      if (!VALID.has(next)) return;
      this.mode = 'manual';
      this.theme = next;
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(MANUAL_KEY, next);
        localStorage.removeItem(OLD_MANUAL_KEY);
        sessionStorage.setItem(SESSION_KEY, next);
      } catch (_) { /* A manual choice still works for this open page. */ }
    },
    useAuto() {
      this.mode = 'auto';
      // Keep the displayed theme in THIS session; resume cycling NEXT session.
      this.theme = document.documentElement.dataset.theme;
      try {
        localStorage.removeItem(MANUAL_KEY);
        localStorage.removeItem(OLD_MANUAL_KEY);
        sessionStorage.setItem(SESSION_KEY, this.theme);
        // Next automatic visit advances from the theme the visitor is viewing now.
        localStorage.setItem(LAST_AUTO_KEY, this.theme);
      } catch (_) { /* Storage availability cannot be guaranteed. */ }
    }
  };
})();
