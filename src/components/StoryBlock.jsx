import { AudioButton } from './AudioButton.jsx';
import styles from './StoryBlock.module.css';

// `label` defaults to "Story"; pass null when a heading already names the story.
export function StoryBlock({ items, label = 'Story' }) {
  if (!items || items.length === 0) return null;
  return (
    <div class={styles.story}>
      {label && <div class={styles.label}>{label}</div>}
      {items.map((line, i) => (
        <div key={i} class={styles.line}>
          <div class={styles.pinyin}>
            {line.pinyin}
            <AudioButton pinyin={line.pinyin} audioFile={line.audioFile} ttsText={line.ttsText} />
          </div>
          <div class={styles.translation}>({line.translation})</div>
        </div>
      ))}
    </div>
  );
}
