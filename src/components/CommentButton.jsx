import { useEffect, useState } from 'preact/hooks';
import { t } from '../lib/i18n.js';
import { useSettings } from '../lib/settings.js';
import styles from './CommentButton.module.css';

// the part's words as the reader sees them, without its buttons' labels (the speed, the sound icons): app.css hides
// them for the moment innerText is read
function wordsOf(el) {
  el.dataset.quoting = '';
  const words = el.innerText;
  delete el.dataset.quoting;
  return words;
}

// A reader's comment on a part of the page (COMMENTS_PLAN.md §1). The 💬 button in the corner starts comment mode:
// every part (an element with data-part, src/components/LessonFlow.jsx) gets an outline, and a tap on one opens the
// box for it, without the part's own action (an audio button, a link). The bar offers the whole page instead. The box
// (CommentBox.jsx) is its own chunk, fetched when comment mode starts; the ⚙ setting hides the button (CM10).
export function CommentButton({ page, title, lang }) {
  const settings = useSettings();
  const [mode, setMode] = useState('idle'); // 'idle', 'picking' or 'writing'
  const [target, setTarget] = useState(null); // { part, quote }
  const [Box, setBox] = useState(null);

  // a new page ends comment mode
  useEffect(() => setMode('idle'), [page]);

  useEffect(() => {
    if (mode !== 'picking') return;
    const root = document.documentElement;
    root.dataset.commenting = 'on';
    const onClick = (e) => {
      const el = e.target.closest?.('.main-content [data-part]');
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      open({ part: el.dataset.part, quote: wordsOf(el) });
    };
    const onKey = (e) => e.key === 'Escape' && setMode('idle');
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKey);
    return () => {
      delete root.dataset.commenting;
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKey);
    };
  }, [mode]);

  function start() {
    setMode('picking');
    if (!Box) import('./CommentBox.jsx').then((m) => setBox(() => m.CommentBox));
  }

  function open(next) {
    setTarget(next);
    setMode('writing');
  }

  if (!settings.comments && mode === 'idle') return null;

  return (
    <>
      {mode === 'idle' && (
        <button type="button" class={styles.button} onClick={start} aria-label={t(lang, 'commentButton')} title={t(lang, 'commentButton')}>
          💬
        </button>
      )}
      {mode === 'picking' && (
        <div class={styles.bar} role="status">
          <span class={styles.prompt}>{t(lang, 'commentPick')}</span>
          <span class={styles.actions}>
            <button type="button" class={styles.pill} onClick={() => open({ part: 'page', quote: title })}>{t(lang, 'commentWholePage')}</button>
            <button type="button" class={styles.pill} onClick={() => setMode('idle')}>{t(lang, 'commentCancel')}</button>
          </span>
        </div>
      )}
      {mode === 'writing' && Box && <Box page={page} part={target.part} quote={target.quote} lang={lang} onClose={() => setMode('idle')} />}
    </>
  );
}
