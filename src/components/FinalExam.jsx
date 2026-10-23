import { useState } from 'preact/hooks';
import { t } from '../lib/i18n.js';
import { loadPools, wordTerm } from '../lib/quiz/load.js';
import { drawExam, EXAM_PASS } from '../lib/quiz/draw.js';
import { scoreTry } from '../lib/quiz/result.js';
import { newSeed } from '../lib/quiz/rng.js';
import { loadRecord, saveTry, toReview } from '../lib/quiz/progress.js';
import { lessonNumber, sectionKeyForLesson, FINAL_EXAM_ID } from '../content/book.js';
import { Quiz, LessonLink } from './Quiz.jsx';
import styles from './Quiz.module.css';

const storage = () => (typeof localStorage === 'undefined' ? null : localStorage);
const WORST_SHOWN = 3;

// The final exam (BOOK_PLAN.md §3, Q8-Q9): 60 questions drawn from every lesson's pool, balanced by lesson (in
// proportion to how much each teaches) and by kind, a pass mark of 80%. The result: the score, each section and
// lesson, links to read again the lessons that went worst, and the words missed. Retakeable; every try is new.
export function FinalExam({ lang }) {
  const [phase, setPhase] = useState('idle');
  const [items, setItems] = useState(null);
  const [result, setResult] = useState(null);
  const [tryNo, setTryNo] = useState(0);
  const record = loadRecord(storage());
  const best = record.tests[FINAL_EXAM_ID];
  const review = toReview(record);

  function start() {
    setPhase('loading');
    loadPools().then(
      (pools) => {
        setItems(drawExam({ pools, seed: newSeed(), missed: loadRecord(storage()).missed }));
        setTryNo((n) => n + 1);
        setPhase('running');
      },
      () => setPhase('failed'),
    );
  }

  function finish(responses) {
    const r = scoreTry(items, responses, { passMark: EXAM_PASS, sectionOf: sectionKeyForLesson });
    saveTry(storage(), FINAL_EXAM_ID, r);
    setResult(r);
    setPhase('done');
  }

  const pass = Math.round(EXAM_PASS * 100);
  return (
    <section class={styles.wrap} aria-label={t(lang, 'finalExam')}>
      {phase === 'running' && <Quiz key={tryNo} items={items} lang={lang} onFinish={finish} />}
      {phase === 'done' && (
        <div>
          <div class={styles.score}>
            {result.right} / {result.total} ({result.percent}%)
          </div>
          <p class={styles.lead}>{t(lang, result.passed ? 'examPassed' : 'examNotPassed').replace('{pass}', pass)}</p>
          <table class={styles.table}>
            <tbody>
              {result.bySection.map((s) => (
                <tr key={s.section}>
                  <td>{t(lang, s.section)}</td>
                  <td>{s.right} / {s.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table class={styles.table}>
            <tbody>
              {result.byLesson
                .slice()
                .sort((a, b) => (lessonNumber(a.lesson) ?? 0) - (lessonNumber(b.lesson) ?? 0))
                .map((l) => (
                  <tr key={l.lesson}>
                    <td>{t(lang, 'examLesson').replace('{n}', lessonNumber(l.lesson))}</td>
                    <td>{l.right} / {l.total}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {result.worst.length > 0 && (
            <ul class={styles.words}>
              {result.worst.slice(0, WORST_SHOWN).map((id) => (
                <li key={id}><LessonLink lang={lang} lesson={id} /></li>
              ))}
            </ul>
          )}
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
          {phase !== 'done' && <p class={styles.lead}>{t(lang, 'examLead').replace('{pass}', pass)}</p>}
          {best && phase !== 'done' && <p class={styles.lead}>{t(lang, 'quizBest').replace('{best}', best.best).replace('{total}', best.total)}</p>}
          {phase !== 'done' && review.length > 0 && (
            <>
              <p class={styles.lead}>{t(lang, 'examToReview')}</p>
              <ul class={styles.words}>{review.slice(0, 30).map((w) => <li key={w}>{wordTerm(w)}</li>)}</ul>
            </>
          )}
          {phase === 'failed' && <p class={styles.lead}>{t(lang, 'pageLoadFailed')}</p>}
          <button class={styles.action} disabled={phase === 'loading'} onClick={start}>
            {phase === 'loading' ? t(lang, 'pageLoading') : phase === 'done' ? t(lang, 'quizTryAgain') : t(lang, 'examStart')}
          </button>
        </>
      )}
    </section>
  );
}
