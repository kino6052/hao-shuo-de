import { t } from '../lib/i18n.js';
import styles from './GrammarBlock.module.css';

// `label` defaults to "Grammar" in the page's language; pass null to leave it out.
export function GrammarBlock({ html, lang, label = t(lang, 'grammar') }) {
  if (!html) return null;
  return (
    <div>
      {label && <div class={styles.label}>{label}</div>}
      <div class={styles.prose} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
