import { useState } from 'preact/hooks';
import { t } from '../lib/i18n.js';
import { loadPools, wordTerm } from '../lib/quiz/load.js';
import { drawLessonTest } from '../lib/quiz/draw.js';
import { scoreTry } from '../lib/quiz/result.js';
import { newSeed } from '../lib/quiz/rng.js';
import { loadRecord, saveTry } from '../lib/quiz/progress.js';
import { Quiz } from './Quiz.jsx';
import styles from './Quiz.module.css';

const storage = () => (typeof localStorage === 'undefined' ? null : localStorage);

// The lesson test at the end of a lesson page (BOOK_PLAN.md §3): 10 questions drawn at random from the lesson's pool,
// a quarter from earlier lessons, words missed before more often. No pass mark: a score, the words to look at again,
// and "try again" for a new set. The best score and the missed words are kept in the browser (src/lib/quiz/progress.js).
export function LessonTest({ lessonId, lang }) {
  const [phase, setPhase] = useState('idle'); // idle | loading | running | done | failed
  const [items, setItems] = useState(null);
  const [result, setResult] = useState(null);
  const [tryNo, setTryNo] = useState(0);
  const best = loadRecord(storage()).tests[lessonId];

  function start() {
    setPhase('loading');
    loadPools().then(
      (pools) => {
        setItems(drawLessonTest({ pools, lesson: lessonId, seed: newSeed(), missed: loadRecord(storage()).missed }));
        setTryNo((n) => n + 1);
        setPhase('running');
      },
      () => setPhase('failed'),
    );
  }

  function finish(responses) {
    const r = scoreTry(items, responses);
    saveTry(storage(), lessonId, r);
    setResult(r);
    setPhase('done');
  }

  return (
    <section class={styles.wrap} aria-label={t(lang, 'lessonTest')}>
      <h2 class={styles.title}>{t(lang, 'lessonTest')}</h2>
      {phase === 'running' && <Quiz key={tryNo} items={items} lang={lang} onFinish={finish} here={lessonId} />}
      {phase === 'done' && (
        <div>
          <div class={styles.score}>{result.right} / {result.total}</div>
          {result.missed.length > 0 && (
            <>
              <p class={styles.lead}>{t(lang, 'quizWordsToReview')}</p>
              <ul class={styles.words}>{result.missed.map((w) => <li key={w}>{wordTerm(w)}</li>)}</ul>
            </>
          )}
        </div>
      )}
      {phase !== 'running' && (
        <>
          {phase !== 'done' && <p class={styles.lead}>{t(lang, 'lessonTestLead')}</p>}
          {best && phase !== 'done' && <p class={styles.lead}>{t(lang, 'quizBest').replace('{best}', best.best).replace('{total}', best.total)}</p>}
          {phase === 'failed' && <p class={styles.lead}>{t(lang, 'pageLoadFailed')}</p>}
          <button class={styles.action} disabled={phase === 'loading'} onClick={start}>
            {phase === 'loading' ? t(lang, 'pageLoading') : phase === 'done' ? t(lang, 'quizTryAgain') : t(lang, 'quizStart')}
          </button>
        </>
      )}
    </section>
  );
}
