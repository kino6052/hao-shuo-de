// The visitor's choice about statistics and ads: 'granted', 'denied', or null (not asked yet).
// Kept in the browser; nothing from Google is loaded until it is 'granted'.
import { useEffect, useState } from 'preact/hooks';

const KEY = 'hsd-consent';
const listeners = new Set();

let value = (() => {
  try {
    const saved = localStorage.getItem(KEY);
    return saved === 'granted' || saved === 'denied' ? saved : null;
  } catch {
    return null;
  }
})();

export function getConsent() {
  return value;
}

export function setConsent(next) {
  value = next;
  try {
    if (next) localStorage.setItem(KEY, next);
    else localStorage.removeItem(KEY);
  } catch { /* private window */ }
  listeners.forEach((fn) => fn());
}

export function subscribeConsent(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useConsent() {
  const [, setTick] = useState(0);
  useEffect(() => subscribeConsent(() => setTick((t) => t + 1)), []);
  return value;
}
