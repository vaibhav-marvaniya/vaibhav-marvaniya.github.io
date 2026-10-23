'use strict';
/*
 * Original Google Analytics 4 measurement ID preserved from the uploaded site.
 * This is the GA4 / Google tag setup; no Firebase JS SDK credentials were present.
 * Click events across every page are sent only if the visitor accepts analytics.
 */
(() => {
  const MEASUREMENT_ID = 'G-G3SQ6RH85V';
  const CONSENT_KEY = 'vm_analytics_consent_v1';
  let analyticsLoaded = false;
  let consent = null;
  try { consent = localStorage.getItem(CONSENT_KEY); } catch (_) { /* private browsing/storage disabled */ }

  const startAnalytics = () => {
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, { send_page_view: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.onerror = () => { console.warn('Portfolio analytics could not be loaded.'); };
    document.head.appendChild(script);
  };
  if (consent === 'accepted') startAnalytics();
  const setConsent = (choice) => {
    consent = choice;
    try { localStorage.setItem(CONSENT_KEY, choice); } catch (_) { /* storage optional */ }
    document.getElementById('analytics-consent')?.remove();
    if (choice === 'accepted') startAnalytics();
  };

  window.portfolioEvent = (name, params = {}) => {
    if (consent !== 'accepted' || typeof window.gtag !== 'function') return;
    window.gtag('event', name, { ...params, page_name: document.title, site_section: window.location.pathname.split('/').pop() || 'index.html' });
  };
  document.addEventListener('click', event => {
    // Allow visitors to reconsider their analytics choice at any time.
    if (event.target.closest('#analytics-settings')) {
      try { localStorage.removeItem(CONSENT_KEY); } catch (_) {}
      window.location.reload();
      return;
    }
    const link = event.target.closest('a[data-track]');
    if (!link) return;
    // Avoid transmitting email addresses, telephone numbers and query strings.
    let destinationType = 'internal';
    const href = link.getAttribute('href') || '';
    if (href.startsWith('mailto:') || href.startsWith('tel:')) destinationType = 'contact';
    else if (/^https?:\/\//i.test(href)) destinationType = 'external';
    else if (href.endsWith('.pdf')) destinationType = 'resume';
    window.portfolioEvent(link.dataset.track, {
      link_label: (link.dataset.label || link.textContent || '').trim().slice(0, 90),
      destination_type: destinationType,
      project_name: link.dataset.project || undefined
    });
  });

  const consentUI = () => {
    if (consent === 'accepted' || consent === 'declined' || document.getElementById('analytics-consent')) return;
    const banner = document.createElement('aside');
    banner.id = 'analytics-consent';
    banner.className = 'consent-banner';
    banner.setAttribute('aria-label', 'Optional website analytics');
    banner.innerHTML = `<strong>Help improve this portfolio</strong><p>May I use Google Analytics to measure page visits and clicks on projects, resume and contact links? Optional; no analytics loads unless you accept.</p><div class="consent-buttons"><button type="button" class="accept" data-consent="accepted">Allow analytics</button><button type="button" data-consent="declined">No thanks</button></div>`;
    banner.addEventListener('click', event => {
      const button = event.target.closest('button[data-consent]');
      if (button) setConsent(button.dataset.consent);
    });
    document.body.appendChild(banner);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', consentUI, { once: true });
  else consentUI();
})();
