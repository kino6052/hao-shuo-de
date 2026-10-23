import { useEffect, useState } from 'preact/hooks';

// The reader's settings (the ⚙ pop-up, src/components/SettingsDialog.jsx), kept in this browser only:
//   script  'pinyin' (the default: no hanzi anywhere, scripts/check-hanzi.js), 'hanzi' (hanzi in place of the
//           pinyin) or 'both' (hanzi with small pinyin above)
//   hover   true shows a word's meaning when the pointer rests on it (never inside a test)
//   comments  true shows the 💬 button for a reader's comment (COMMENTS_PLAN.md CM10)
// Both are also set on <html data-script data-hover> for the stylesheet; src/lib/script.js does the writing.

const KEY = 'hsd-settings';
export const SCRIPTS = ['pinyin', 'hanzi', 'both'];
const DEFAULTS = { script: 'pinyin', hover: false, comments: true };

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    return {
      script: SCRIPTS.includes(saved.script) ? saved.script : DEFAULTS.script,
      hover: typeof saved.hover === 'boolean' ? saved.hover : DEFAULTS.hover,
      comments: typeof saved.comments === 'boolean' ? saved.comments : DEFAULTS.comments,
    };
  } catch {
    return { ...DEFAULTS };
  }
}

let settings = typeof window === 'undefined' ? { ...DEFAULTS } : load();
const listeners = new Set();

function mark() {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.script = settings.script;
  document.documentElement.dataset.hover = settings.hover ? 'on' : 'off';
}
mark();

export const getSettings = () => settings;

export function setSetting(key, value) {
  settings = { ...settings, [key]: value };
  try {
    localStorage.setItem(KEY, JSON.stringify(settings));
  } catch {}
  mark();
  listeners.forEach((fn) => fn(settings));
}

// -> unsubscribe
export function subscribeSettings(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// true when the writing needs the word data (src/lib/script.js): anything but plain pinyin
export const needsScript = (s) => s.script !== 'pinyin' || s.hover;

export function useSettings() {
  const [s, set] = useState(getSettings);
  useEffect(() => subscribeSettings(set), []);
  return s;
}
