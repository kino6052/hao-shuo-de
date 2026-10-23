import { AudioButton } from './AudioButton.jsx';
import { ShadowBox } from './ShadowBox.jsx';
import { Hsd, Rich } from './Hsd.jsx';
import styles from './ExampleList.module.css';

// `label` defaults to "Examples"; pass null to leave it out. `parts`: each example's part id, for a comment.
export function ExampleList({ items, parts, label = 'Examples' }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      {label && <div class={styles.label}>{label}</div>}
      <div class={styles.list}>
        {items.map((ex, i) => (
          <ShadowBox key={i} class={styles.card} pinyin={ex.pinyin} audioFile={ex.audioFile} data-part={parts?.[i]}>
            <span class={styles.pinyin}>
              <Hsd pinyin={ex.pinyin} refs={ex.refs} hanzi={ex.ttsText} />
              <AudioButton shadow pinyin={ex.pinyin} audioFile={ex.audioFile} ttsText={ex.ttsText} />
            </span>
            <span class={styles.translation}> — <Rich text={ex.translation} /></span>
          </ShadowBox>
        ))}
      </div>
    </div>
  );
}
