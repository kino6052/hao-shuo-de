import { useState } from 'preact/hooks';
import { t } from '../lib/i18n.js';
import { AudioButton } from './AudioButton.jsx';
import { ShadowBox } from './ShadowBox.jsx';
import { Hsd, Rich } from './Hsd.jsx';
import styles from './PracticeExercise.module.css';

// `start` is the index of the first question, so numbering carries on when a
// chapter splits its exercises into several groups. `parts`: each question's part id, for a comment.
export function PracticeExercise({ questions, answers, lang, parts, start = 0 }) {
  if (!questions || questions.length === 0) return null;
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div class={styles.wrap}>
      <div class={styles.header}>
        <span>✏️ {t(lang, 'practice')}</span>
        {answers && answers.length > 0 && (
          <button class={styles.toggle} onClick={() => setShowAnswers(!showAnswers)}>
            {showAnswers ? t(lang, 'hideAnswers') : t(lang, 'showAnswers')}
          </button>
        )}
      </div>
      {questions.map((q, i) => (
        <ShadowBox key={i} class={styles.item} pinyin={showAnswers && answers?.[i]?.text} audioFile={answers?.[i]?.audioFile} data-part={parts?.[i]}>
          <div class={styles.question}><b>{start + i + 1}.</b> <Rich text={q} /></div>
          {showAnswers && answers && answers[i] && (
            <div class={styles.answer}>
              → <Hsd pinyin={answers[i].text} refs={answers[i].refs} hanzi={answers[i].ttsText} />
              <AudioButton shadow pinyin={answers[i].text} audioFile={answers[i].audioFile} ttsText={answers[i].ttsText} />
            </div>
          )}
        </ShadowBox>
      ))}
    </div>
  );
}
