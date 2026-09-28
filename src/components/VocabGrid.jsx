import { AudioButton } from './AudioButton.jsx';
import styles from './VocabGrid.module.css';

// `label` defaults to "Vocabulary"; pass null to leave it out.
export function VocabGrid({ items, label = 'Vocabulary' }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      {label && <div class={styles.label}>{label}</div>}
      <div class={styles.grid}>
        {items.map((v, i) => (
          <div key={i} class={styles.card}>
            <div class={styles.pinyin}>
              {v.pinyin}
              <AudioButton pinyin={v.pinyin} audioFile={v.audioFile} ttsText={v.ttsText} />
            </div>
            <div class={styles.def}>{v.definition}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
