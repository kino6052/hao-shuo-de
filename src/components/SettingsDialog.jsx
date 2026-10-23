import { useEffect, useRef } from 'preact/hooks';
import { FontSelector } from './FontSelector.jsx';
import { LANG_CONFIG, t } from '../lib/i18n.js';
import { SCRIPTS, setSetting, useSettings } from '../lib/settings.js';
import styles from './SettingsDialog.module.css';

const SCRIPT_LABELS = { pinyin: 'writingPinyin', hanzi: 'writingHanzi', both: 'writingBoth' };

// The ⚙ pop-up from the sidebar: the writing (pinyin, hanzi, or both), hover meanings and the comment button
// (src/lib/settings.js), then the book's language, font, theme and a progress reset. Every change applies at once; Esc, ✕ or a click
// outside closes it.
export function SettingsDialog({ lang, availableLangs, onSwitchLang, theme, onToggleTheme, onResetProgress, onClose }) {
  const settings = useSettings();
  const box = useRef(null);

  useEffect(() => {
    box.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  function reset() {
    if (window.confirm(t(lang, 'resetProgressConfirm'))) onResetProgress();
  }

  return (
    <div class={styles.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div class={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="settings-title" tabIndex={-1} ref={box}>
        <div class={styles.header}>
          <h2 id="settings-title" class={styles.title}>{t(lang, 'settings')}</h2>
          <button class={styles.close} onClick={onClose} aria-label={t(lang, 'settingsClose')}>✕</button>
        </div>

        <div class={styles.group} role="radiogroup" aria-labelledby="settings-writing">
          <div id="settings-writing" class={styles.label}>{t(lang, 'settingsWriting')}</div>
          {SCRIPTS.map((s) => (
            <label key={s} class={styles.choice}>
              <input type="radio" name="script" checked={settings.script === s} onChange={() => setSetting('script', s)} />
              {t(lang, SCRIPT_LABELS[s])}
            </label>
          ))}
        </div>

        <div class={styles.group}>
          <label class={styles.choice}>
            <input type="checkbox" checked={settings.hover} onChange={(e) => setSetting('hover', e.currentTarget.checked)} />
            {t(lang, 'settingsHover')}
          </label>
          <div class={styles.hint}>{t(lang, 'settingsHoverHint')}</div>
          <label class={styles.choice}>
            <input type="checkbox" checked={settings.comments} onChange={(e) => setSetting('comments', e.currentTarget.checked)} />
            {t(lang, 'settingsComments')}
          </label>
        </div>

        <div class={styles.group}>
          <div class={styles.label}>{t(lang, 'settingsLanguage')}</div>
          <div class={styles.row}>
            {availableLangs.map((l) => (
              <button key={l} class={`${styles.pill} ${l === lang ? styles.pillActive : ''}`} onClick={() => onSwitchLang(l)}>
                {LANG_CONFIG[l]?.nativeLabel || l}
              </button>
            ))}
          </div>
        </div>

        <div class={styles.group}>
          <div class={styles.label}>{t(lang, 'settingsFont')}</div>
          <FontSelector />
        </div>

        <div class={styles.group}>
          <div class={styles.label}>{t(lang, 'settingsTheme')}</div>
          <div class={styles.row}>
            {['light', 'dark'].map((th) => (
              <button
                key={th}
                class={`${styles.pill} ${theme === th ? styles.pillActive : ''}`}
                onClick={() => theme !== th && onToggleTheme()}
              >
                {th === 'light' ? '☀️' : '🌙'} {t(lang, th === 'light' ? 'themeLight' : 'themeDark')}
              </button>
            ))}
          </div>
        </div>

        <div class={styles.group}>
          <div class={styles.label}>{t(lang, 'settingsProgress')}</div>
          <button class={styles.pill} onClick={reset}>↺ {t(lang, 'resetProgress')}</button>
        </div>
      </div>
    </div>
  );
}
