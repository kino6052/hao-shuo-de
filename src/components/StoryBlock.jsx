import { AudioButton } from './AudioButton.jsx';
import { ShadowBox } from './ShadowBox.jsx';
import { Hsd, Rich } from './Hsd.jsx';
import styles from './StoryBlock.module.css';

// `label` defaults to "Story"; pass null when a heading already names the story. `parts`: each line's part id.
export function StoryBlock({ items, parts, label = 'Story' }) {
  if (!items || items.length === 0) return null;
  return (
    <div class={styles.story}>
      {label && <div class={styles.label}>{label}</div>}
      {items.map((line, i) => (
        <ShadowBox key={i} class={styles.line} pinyin={line.pinyin} audioFile={line.audioFile} data-part={parts?.[i]}>
          <div class={styles.pinyin}>
            <Hsd pinyin={line.pinyin} refs={line.refs} hanzi={line.ttsText} />
            <AudioButton shadow pinyin={line.pinyin} audioFile={line.audioFile} ttsText={line.ttsText} />
          </div>
          <div class={styles.translation}>(<Rich text={line.translation} />)</div>
        </ShadowBox>
      ))}
    </div>
  );
}
