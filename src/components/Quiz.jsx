import { useEffect, useRef, useState } from 'preact/hooks';
import { t } from '../lib/i18n.js';
import { playAudio } from '../lib/audio.js';
import { say } from '../lib/quiz/question.js';
import { itemCorrect } from '../lib/quiz/result.js';
import { buildUrl, parseUrl } from '../lib/router.js';
import { lessonNumber } from '../content/book.js';
import { Hsd, Zh } from './Hsd.jsx';
import styles from './Quiz.module.css';

const LANG_KEYS = { eng: 'en', rus: 'ru', zh: 'zh' };

// -> a link that opens a lesson in the app (the router follows the address, as on back and forward).
export function LessonLink({ lang, lesson }) {
  const href = buildUrl(parseUrl(window.location.pathname).root, lang, lesson);
  const open = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <a class={styles.link} href={href} onClick={open}>
      {t(lang, 'quizReadAgain').replace('{n}', lessonNumber(lesson) ?? '')}
    </a>
  );
}

// One try of a test, question by question (BOOK_PLAN.md Phase 5): the learner answers, sees whether it was right,
// the right answer and the point that teaches it after a wrong one, then goes on. Choices answer at a click or with
// the number keys 1-4; an order question is built by clicking the words, then checked.
//   items: drawn by src/lib/quiz/draw.js;  onFinish(responses);  here: the lesson whose page this is (its own
//   questions get the pattern line; a question from another lesson also gets a link to read it again)
export function Quiz({ items, lang, onFinish, here = null }) {
  const [at, setAt] = useState(0);
  const [responses, setResponses] = useState([]);
  const [built, setBuilt] = useState([]); // an order question: the token places picked so far
  const nextRef = useRef(null);
  const key = LANG_KEYS[lang] ?? 'en';
  const item = items[at];
  const answered = responses.length > at;
  const q = item.question;

  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);

  function answer(response) {
    if (answered) return;
    setResponses([...responses, response]);
  }

  function next() {
    setBuilt([]);
    if (at + 1 < items.length) setAt(at + 1);
    else onFinish(responses);
  }

  useEffect(() => {
    function onKey(e) {
      if (answered || q.kind === 'order' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const n = Number(e.key);
      if (n >= 1 && n <= item.choices.length) {
        e.preventDefault();
        answer(n - 1);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const right = answered && itemCorrect(item, responses[at]);
  const audio = q.prompt.audio;
  // a Hao-shuo-de choice in the reader's script; a tone question's stay pinyin (the characters would give the tone away)
  const shown = (text) => (text?.any != null && q.kind !== 'tone' ? <Hsd pinyin={text.any} /> : say(text, key));
  const rightText = q.kind === 'order' ? <Hsd pinyin={q.answer.join(' ')} /> : shown(item.choices[item.answer].text);
  const help = say(q.help, key);
  const link = !right && q.lesson !== here ? <LessonLink lang={lang} lesson={q.lesson} /> : null;

  return (
    <div class={styles.quiz} data-no-hover>
      <div class={styles.progress}>
        {t(lang, 'quizQuestion').replace('{n}', at + 1).replace('{total}', items.length)}
      </div>
      <div class={styles.instruction}>{t(lang, `quizKind_${q.kind}`)}</div>
      <div class={styles.prompt}>
        {audio && (
          <button class={styles.play} onClick={() => playAudio(audio.pinyin, audio.file, audio.hanzi)} aria-label={t(lang, 'quizPlay')}>
            ▶ {t(lang, 'quizPlay')}
          </button>
        )}
        {q.prompt.pinyin && (
          <div class={styles.pinyin}>
            <Hsd pinyin={q.prompt.pinyin} hanzi={q.prompt.hanzi} />
          </div>
        )}
        {!q.prompt.pinyin && <Zh class={styles.hanzi} text={q.prompt.hanzi} />}
        {q.prompt.text && <div class={styles.text}>{say(q.prompt.text, key)}</div>}
      </div>

      {q.kind === 'order' ? (
        <div>
          <div class={styles.built} aria-live="polite">
            {built.map((i, j) => (
              <button key={j} class={styles.token} disabled={answered} onClick={() => setBuilt(built.filter((_, k) => k !== j))}>
                <Hsd pinyin={item.tokens[i]} />
              </button>
            ))}
          </div>
          <div class={styles.tokens}>
            {item.tokens.map((tok, i) => (
              <button key={i} class={styles.token} disabled={answered || built.includes(i)} onClick={() => setBuilt([...built, i])}>
                <Hsd pinyin={tok} />
              </button>
            ))}
          </div>
          {!answered && (
            <button class={styles.action} disabled={built.length !== item.tokens.length} onClick={() => answer(built.map((i) => item.tokens[i]))}>
              {t(lang, 'quizCheck')}
            </button>
          )}
        </div>
      ) : (
        <div class={styles.choices} role="group">
          {item.choices.map((c, i) => {
            const state = !answered ? '' : i === item.answer ? styles.right : i === responses[at] ? styles.wrong : '';
            return (
              <button key={i} class={`${styles.choice} ${state}`} disabled={answered} onClick={() => answer(i)}>
                <span class={styles.num}>{i + 1}</span>
                {shown(c.text)}
              </button>
            );
          })}
        </div>
      )}

      {answered && (
        <div class={`${styles.feedback} ${right ? styles.feedbackRight : styles.feedbackWrong}`} role="status">
          <strong>{right ? t(lang, 'quizRight') : t(lang, 'quizWrong')}</strong>
          {!right && (
            <div>
              {t(lang, 'quizAnswerWas')} <strong>{rightText}</strong>
            </div>
          )}
          {!right && help && <div class={styles.help}>{help}</div>}
          {link}
          <button ref={nextRef} class={styles.action} onClick={next}>
            {at + 1 < items.length ? t(lang, 'quizNext') : t(lang, 'quizSeeScore')}
          </button>
        </div>
      )}
    </div>
  );
}
