import { useEffect, useRef, useState } from 'preact/hooks';
import { t } from '../lib/i18n.js';
import { useAuth } from '../lib/auth.js';
import { LIMITS, quoteOf } from '../lib/comments/comment.js';
import styles from './CommentBox.module.css';

// What each answer of sendComment (src/lib/comments/client.js) tells the reader
const MESSAGE = { wait: 'commentWait', full: 'commentFull', off: 'commentOff', failed: 'commentFailed', long: 'commentFailed' };

// The box for one comment (COMMENTS_PLAN.md §1, §3): the part's own text, the reader's text with a counter, and Send.
// Loaded with comment mode (CommentButton.jsx); the Firestore SDK and the anonymous account come only on Send.
export function CommentBox({ page, part, quote, lang, onClose }) {
  const { status } = useAuth();
  const [text, setText] = useState('');
  const [state, setState] = useState('writing'); // 'writing', 'sending', 'sent', or a MESSAGE key
  const area = useRef(null);

  useEffect(() => {
    area.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  async function send(e) {
    e.preventDefault();
    if (!text.trim() || state === 'sending') return;
    setState('sending');
    try {
      const { sendComment } = await import('../lib/comments/client.js');
      const answer = await sendComment({ text, page, part, quote, lang });
      setState(answer.error && answer.error !== 'empty' ? answer.error : 'sent');
    } catch {
      setState('failed');
    }
  }

  const sent = state === 'sent';
  const shown = quoteOf(quote);

  return (
    <div class={styles.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <form class={styles.box} role="dialog" aria-modal="true" aria-labelledby="comment-title" onSubmit={send}>
        <div class={styles.header}>
          <h2 id="comment-title" class={styles.title}>{t(lang, 'commentTitle')}</h2>
          <button type="button" class={styles.close} onClick={onClose} aria-label={t(lang, 'commentClose')}>✕</button>
        </div>
        {shown && (
          <div class={styles.on}>
            <span class={styles.onLabel}>{t(lang, 'commentOn')}</span> <span class={styles.quote}>{shown}</span>
          </div>
        )}
        {sent ? (
          <p class={styles.thanks} role="status">{t(lang, 'commentSent')}</p>
        ) : (
          <>
            <textarea
              ref={area}
              class={styles.text}
              rows={5}
              maxLength={LIMITS.text}
              placeholder={t(lang, 'commentHint')}
              value={text}
              onInput={(e) => {
                setText(e.currentTarget.value);
                if (state !== 'sending' && state !== 'writing') setState('writing');
              }}
            />
            <div class={styles.small}>
              <span>{t(lang, 'commentPrivate')} {t(lang, status === 'in' ? 'commentAsAccount' : 'commentAsAnonymous')}</span>
              <span class={styles.left}>{t(lang, 'commentLeft').replace('{n}', LIMITS.text - text.length)}</span>
            </div>
            {MESSAGE[state] && <p class={styles.problem} role="alert">{t(lang, MESSAGE[state])}</p>}
          </>
        )}
        <div class={styles.buttons}>
          {sent ? (
            <button type="button" class={styles.primary} onClick={onClose}>{t(lang, 'commentClose')}</button>
          ) : (
            <>
              <button type="button" class={styles.secondary} onClick={onClose}>{t(lang, 'commentCancel')}</button>
              <button type="submit" class={styles.primary} disabled={!text.trim() || state === 'sending'}>
                {t(lang, state === 'sending' ? 'commentSending' : 'commentSend')}
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
