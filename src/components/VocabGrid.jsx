import { AudioButton } from './AudioButton.jsx';
import { Hsd, Rich } from './Hsd.jsx';
import styles from './VocabGrid.module.css';

// `label` defaults to "Vocabulary"; pass null to leave it out. `parts`: each card's part id, for a comment.
export function VocabGrid({ items, parts, label = 'Vocabulary' }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      {label && <div class={styles.label}>{label}</div>}
      <div class={styles.grid}>
        {items.map((v, i) => (
          <div key={i} class={styles.card} data-part={parts?.[i]}>
            <div class={styles.pinyin}>
              <Hsd pinyin={v.pinyin} refs={v.refs} hanzi={v.ttsText} />
              <AudioButton pinyin={v.pinyin} audioFile={v.audioFile} ttsText={v.ttsText} />
            </div>
            <div class={styles.def}><Rich text={v.definition} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
