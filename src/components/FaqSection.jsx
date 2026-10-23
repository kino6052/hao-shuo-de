import { t } from '../lib/i18n.js';
import { GrammarBlock } from './GrammarBlock.jsx';
import styles from './FaqSection.module.css';

// "Some questions you may have": a lesson's faq blocks after its exercises,
// closed until the reader opens it. `items` are { question, answerHtml },
// both already HTML (see the 'faq' group in src/lib/chapter-content.js).
// `parts`: each question's part id, for a comment.
export function FaqSection({ items, parts, lang }) {
  if (!items || items.length === 0) return null;
  return (
    <details class={styles.wrap}>
      <summary class={styles.header}>❓ {t(lang, 'faq')}</summary>
      {items.map((item, i) => (
        <div key={i} class={styles.item} data-part={parts?.[i]}>
          <div class={styles.question} dangerouslySetInnerHTML={{ __html: item.question }} />
          <GrammarBlock html={item.answerHtml} lang={lang} label={null} />
        </div>
      ))}
    </details>
  );
}
