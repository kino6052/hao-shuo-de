import { t } from '../lib/i18n.js';
import styles from './Section.module.css';

const BADGE_THEMES = {
  intro: { bg: 'var(--amber-bg)', icon: '❓', color: 'var(--text-handwritten)' },
  lesson: { bg: null, icon: null, color: null },
  dictionary: { bg: 'var(--blue-bg)', icon: '📖', color: 'var(--blue)' },
  appendix: { bg: 'var(--blue-bg)', icon: '🔤', color: 'var(--blue)' },
};

export function Section({ data, lang, children }) {
  const { meta } = data;
  const theme = BADGE_THEMES[meta.type] || BADGE_THEMES.intro;
  const isLesson = meta.type === 'lesson';

  return (
    <div class={styles.section}>
      {isLesson ? (
        <div class={styles.lessonHeader}>
          <div class={styles.lessonNum}>{meta.lessonNumber}</div>
          <h2 class={styles.lessonTitle}>{meta.title}</h2>
          <button
            type="button"
            class={styles.printBtn}
            onClick={() => window.print()}
            aria-label="Print this chapter"
            title="Print this chapter"
          >
            🖨
          </button>
        </div>
      ) : (
        <>
          <div class={styles.badgeRow}>
            <div class={styles.badge} style={{ background: theme.bg }}>
              {theme.icon}
            </div>
            <div class={styles.badgeLabel} style={{ color: theme.color }}>
              {meta.type === 'intro' ? t(lang, 'introduction') : meta.title}
            </div>
            <button
              type="button"
              class={styles.printBtn}
              onClick={() => window.print()}
              aria-label="Print this page"
              title="Print this page"
            >
              🖨
            </button>
          </div>
          <h2 class={styles.heading}>{meta.title}</h2>
        </>
      )}
      {children}
    </div>
  );
}
