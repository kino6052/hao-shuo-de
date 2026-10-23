import { t } from '../lib/i18n.js';
import { VocabGrid } from './VocabGrid.jsx';
import { GrammarBlock } from './GrammarBlock.jsx';
import { ExampleList } from './ExampleList.jsx';
import { StoryBlock } from './StoryBlock.jsx';
import { StoryImage } from './StoryImage.jsx';
import { PracticeExercise } from './PracticeExercise.jsx';
import { FaqSection } from './FaqSection.jsx';
import styles from './LessonFlow.module.css';

// A lesson in the order its file lists the blocks (the view's `flow`, see
// src/lib/chapter-content.js): each point is followed by its own examples,
// word cards sit just before the point that teaches them, and info boxes or
// exercises show up wherever the lesson puts them. Each item carries its part
// id (`group.parts`) as data-part, for a reader's comment (COMMENTS_PLAN.md CM1).
const partAttr = (part) => String(part).replace(/[&"<]/g, '');

export function LessonFlow({ flow, lang }) {
  return (
    <div class={styles.flow}>
      {flow.map((group, i) => (
        <div key={i} class={styles.group}>
          {group.kind === 'vocab' && <VocabGrid items={group.items} parts={group.parts} label={t(lang, 'newWords')} />}
          {group.kind === 'html' && (
            <GrammarBlock html={group.items.map((h, j) => `<div data-part="${partAttr(group.parts?.[j])}">${h}</div>`).join('\n')} lang={lang} label={null} />
          )}
          {group.kind === 'examples' && <ExampleList items={group.items} parts={group.parts} label={null} />}
          {group.kind === 'story' && <StoryBlock items={group.items} parts={group.parts} label={null} />}
          {group.kind === 'image' && <StoryImage items={group.items} parts={group.parts} />}
          {group.kind === 'exercise' && (
            <PracticeExercise questions={group.questions} answers={group.answers} start={group.start} parts={group.parts} lang={lang} />
          )}
          {group.kind === 'faq' && <FaqSection items={group.items} parts={group.parts} lang={lang} />}
        </div>
      ))}
    </div>
  );
}
