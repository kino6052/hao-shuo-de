import { t } from '../lib/i18n.js';
import { VocabGrid } from './VocabGrid.jsx';
import { GrammarBlock } from './GrammarBlock.jsx';
import { ExampleList } from './ExampleList.jsx';
import { StoryBlock } from './StoryBlock.jsx';
import { PracticeExercise } from './PracticeExercise.jsx';
import styles from './LessonFlow.module.css';

// A lesson in the order its file lists the blocks (the view's `flow`, see
// src/lib/chapter-content.js): each point is followed by its own examples,
// word cards sit just before the point that teaches them, and info boxes or
// exercises show up wherever the lesson puts them.
export function LessonFlow({ flow, lang }) {
  return (
    <div class={styles.flow}>
      {flow.map((group, i) => (
        <div key={i} class={styles.group}>
          {group.kind === 'vocab' && <VocabGrid items={group.items} label={t(lang, 'newWords')} />}
          {group.kind === 'html' && <GrammarBlock html={group.items.join('\n')} lang={lang} label={null} />}
          {group.kind === 'examples' && <ExampleList items={group.items} label={null} />}
          {group.kind === 'story' && <StoryBlock items={group.items} />}
          {group.kind === 'exercise' && (
            <PracticeExercise questions={group.questions} answers={group.answers} start={group.start} lang={lang} />
          )}
        </div>
      ))}
    </div>
  );
}
