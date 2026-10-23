// Google Analytics 4 and the AdSense script, loaded only once the visitor has said yes (see consent.js).
import { ADSENSE_CLIENT, GA_ID } from './tracking-config.js';
import { getConsent, subscribeConsent } from './consent.js';

export const trackingConfigured = Boolean(GA_ID || ADSENSE_CLIENT);

let started = false;

function addScript(src, crossorigin) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  if (crossorigin) s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

function start() {
  if (started || getConsent() !== 'granted') return;
  started = true;
  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    // The scripts load only after a yes, so they say so (Google's consent mode wants it said for visitors in the EU).
    window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
    window.gtag('js', new Date());
    // Page views are sent by hand (trackPageView) because the book changes pages without reloading.
    window.gtag('config', GA_ID, userId ? { send_page_view: false, user_id: userId } : { send_page_view: false });
    addScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`);
    trackPageView();
  }
  if (ADSENSE_CLIENT) {
    addScript(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT)}`, true);
  }
}

export function startTracking() {
  if (!trackingConfigured) return;
  start();
  subscribeConsent(start);
}

export function trackPageView() {
  if (started && GA_ID) {
    window.gtag('event', 'page_view', { page_path: location.pathname, page_title: document.title });
  }
}

export function track(name, params) {
  if (started && GA_ID) window.gtag('event', name, params);
}

// True once Google's scripts are on the page; they cannot be unloaded, so withdrawing consent reloads the page.
export const trackingStarted = () => started;

// Tell Google Analytics who is signed in (the account's ID, never the name or e-mail), so visits of
// one member can be followed across devices. Called by auth.js; remembered until the script has loaded.
let userId = null;
export function setTrackedUser(id) {
  userId = id;
  if (started && GA_ID) window.gtag('config', GA_ID, { send_page_view: false, user_id: userId });
}
