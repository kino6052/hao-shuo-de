import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { createBrowserAkinator } from "../lib/kb/akinator-browser.js";
import { ANSWERS } from "../lib/kb/akinator.js";
import { STRINGS } from "../lib/kb/akinator-questions.js";
import { buildUrl, parseUrl } from "../lib/router.js";
import { openInApp } from "../lib/builder-entries.js";
import styles from "./Akinator.module.css";

// Find how to say an idea: the Akinator (AKINATOR_PLAN.md, part D). The learner picks what they want to say, then answers
// yes / probably / don't know / probably not / no to questions that split the 7,000-odd words, patterns and sentences, and
// the page shows what fits, each with the lesson that teaches it. The engine and the pool are the ones Claude uses
// (src/lib/kb/akinator-browser.js); the pool is one generated file (npm run akinator-data), loaded the first time the page opens.
// Every sentence on the page is in the STRINGS table (akinator-questions.js), so another language is a new table.

// The data file is an asset URL; when it has not been built, the glob is empty and the page says so instead of breaking the app.
const poolUrls = import.meta.glob("../data/akinator-pool.json", { query: "?url", import: "default", eager: true });
const POOL_URL = Object.values(poolUrls)[0] ?? null;

// a question as a short chip: the quoted name ("What the body does"), or the question without its opening words
const short = (text) => text.match(/“([^”]+)”/)?.[1] ?? text.replace(/^(Is it about|Is it|Does it use the|Does it use|Does it)\s+/, "").replace(/\?$/, "");

const fill = (template, values) => template.replace(/{(\w+)}/g, (_, k) => values[k] ?? "");
// the order the page shows them: a plain word first, then a way of building, then whole sentences
// the best three are shown once few enough still fit for them to mean something
const SHOW_LEADERS = 60;
const GROUPS = ["words", "composites", "patterns", "sentences"];

let loading = null; // one load shared by every visit to the page
function loadFinder() {
  if (!POOL_URL) return Promise.reject(new Error("missing"));
  return (loading ??= fetch(POOL_URL)
    .then((r) => {
      if (!r.ok) throw new Error(`pool ${r.status}`);
      return r.json();
    })
    .then(createBrowserAkinator)
    .catch((e) => {
      loading = null;
      throw e;
    }));
}

export function Akinator({ lang }) {
  const t = STRINGS.en; // English only for now (D5b)
  const ui = t.ui;
  const [finder, setFinder] = useState(null);
  const [problem, setProblem] = useState(null);
  const [hint, setHint] = useState("");
  const [draft, setDraft] = useState("");
  const [answers, setAnswers] = useState([]); // [{ feature, answer, text }]
  const [finish, setFinish] = useState(false);
  const top = useRef(null);

  useEffect(() => {
    let alive = true;
    loadFinder().then(
      (f) => alive && setFinder(f),
      (e) => alive && setProblem(e.message === "missing" ? "missing" : "failed"),
    );
    return () => {
      alive = false;
    };
  }, []);

  const step = useMemo(() => {
    if (!finder) return null;
    return finder.ask({ answers: answers.map(({ feature, answer }) => ({ feature, answer })), hint, finish, limit: 6 });
  }, [finder, answers, hint, finish]);

  const lessonFor = useMemo(() => {
    const byNumber = new Map((finder?.lessons ?? []).map((l) => [l.number, l.id]));
    return (item) => item.lesson ?? byNumber.get(item.number) ?? null;
  }, [finder]);

  const answer = (feature, value, text) => {
    setFinish(false);
    setAnswers((list) => [...list.filter((a) => a.feature !== feature), { feature, answer: value, text }]);
  };
  const takeBack = (feature) => {
    setFinish(false);
    setAnswers((list) => list.filter((a) => a.feature !== feature));
  };
  const startAgain = () => {
    setAnswers([]);
    setFinish(false);
    setHint("");
    setDraft("");
  };

  // keys 1 to 5 answer the open question; Backspace takes the last answer back (never while typing)
  const question = step?.stage === "question" ? step.question : null;
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target?.tagName ?? "");
      if (typing) return;
      if (question && /^[1-5]$/.test(e.key)) {
        e.preventDefault();
        answer(question.feature, ANSWERS[Number(e.key) - 1], question.text);
      } else if (e.key === "Backspace" && answers.length) {
        e.preventDefault();
        takeBack(answers[answers.length - 1].feature);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [question, answers]);

  if (problem) return <p class={styles.note}>{ui[problem]}</p>;
  if (!step) return <p class={styles.note}>{ui.loading}</p>;

  const root = parseUrl(window.location.pathname).root;
  const label = (item) => {
    const id = lessonFor(item);
    if (id === null || id === undefined) return { text: ui.outside, href: null };
    const text = fill(item.lesson ? ui.lessonIn : ui.lessonNeeds, { lesson: item.number ?? id });
    return { text, href: buildUrl(root, lang, id) };
  };

  const Item = ({ item }) => {
    const l = label(item);
    const main = item.text.zh || item.text.py;
    const sub = item.text.zh ? item.text.py : "";
    return (
      <li class={styles.item}>
        <span class={styles.zh}>{main}</span>
        {sub && <span class={styles.py}>{sub}</span>}
        {item.text.en && <span class={styles.en}>{item.text.en}</span>}
        {l.href ? (
          <a class={styles.lesson} href={l.href} onClick={(e) => openInApp(e, l.href)}>
            {l.text}
          </a>
        ) : (
          <span class={styles.lessonNone}>{l.text}</span>
        )}
      </li>
    );
  };

  const Groups = ({ groups }) =>
    GROUPS.filter((g) => groups[g]?.length).map((g) => (
      <section key={g} class={styles.group}>
        <h3 class={styles.groupTitle}>{ui.groups[g]}</h3>
        <ul class={styles.items}>
          {groups[g].map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </section>
    ));

  return (
    <div class={styles.wrap} ref={top}>
      {answers.length > 0 && (
        <div class={styles.chips} aria-label={ui.yourAnswers}>
          {answers.map((a) => (
            <button key={a.feature} class={styles.chip} title={`${a.text} ${ui.yourAnswers}`} onClick={() => takeBack(a.feature)}>
              <b>{t.answers[a.answer]}</b> · {short(a.text)} <span aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}

      {step.stage === "first" && (
        <>
          <form
            class={styles.hintRow}
            onSubmit={(e) => {
              e.preventDefault();
              setHint(draft.trim());
            }}
          >
            <label class={styles.hintLabel}>
              {ui.hintLabel}
              <input class={styles.input} type="text" value={draft} placeholder={ui.hintPlaceholder} onInput={(e) => setDraft(e.currentTarget.value)} />
            </label>
            <button class={styles.go} type="submit">
              {ui.hintGo}
            </button>
          </form>
          {hint && (
            <p class={styles.note}>{step.found ? ui.hintFound : ui.hintNothing}</p>
          )}
          {step.found && <Groups groups={step.found} />}
          <h3 class={styles.ask}>{hint ? ui.or : t.firstQuestion}</h3>
          <div class={styles.choices}>
            {step.question.choices.map((c) => (
              <button key={c.feature} class={styles.choice} onClick={() => answer(c.feature, "yes", c.label)}>
                {c.label}
              </button>
            ))}
          </div>
        </>
      )}

      {step.stage === "question" && (
        <>
          <p class={styles.count}>
            {fill(ui.question, { n: step.asked + 1 })} · {fill(ui.still, { n: Math.max(1, Math.round(step.effective)) })}
          </p>
          <h3 class={styles.ask} aria-live="polite">
            {step.question.text}
          </h3>
          {step.question.hint && <p class={styles.note}>{step.question.hint}</p>}
          <div class={styles.answers}>
            {ANSWERS.map((a, i) => (
              <button key={a} class={a === "yes" || a === "no" ? styles.answerStrong : styles.answerSoft} onClick={() => answer(step.question.feature, a, step.question.text)}>
                <kbd>{i + 1}</kbd> {t.answers[a]}
              </button>
            ))}
          </div>
          <div class={styles.actions}>
            <button class={styles.link} onClick={() => setFinish(true)}>
              {ui.showNow}
            </button>
            <button class={styles.link} onClick={() => takeBack(answers[answers.length - 1].feature)}>
              {ui.takeBack}
            </button>
            <button class={styles.link} onClick={startAgain}>
              {ui.startAgain}
            </button>
          </div>
          <p class={styles.keys}>{ui.keys}</p>
          {step.effective <= SHOW_LEADERS && (
            <>
              <h4 class={styles.small}>{ui.leading}</h4>
              <ul class={styles.items}>
                {step.leaders.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </ul>
            </>
          )}
        </>
      )}

      {step.stage === "result" && (
        <>
          {step.result.verdict.gap ? (
            <>
              <h3 class={styles.ask}>{ui.gapTitle}</h3>
              <p class={styles.note}>{ui.gapNote}</p>
              <ul class={styles.items}>
                {step.result.closest.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </ul>
              {step.result.missing.length > 0 && (
                <>
                  <p class={styles.note}>{ui.noMatch}</p>
                  <ul class={styles.plain}>
                    {step.result.missing.map((m) => (
                      <li key={m.feature}>
                        <b>{t.answers[m.answer]}</b> · {m.text}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <>
              <h3 class={styles.ask}>{ui.fits}</h3>
              <Groups groups={step.result} />
            </>
          )}
          <div class={styles.actions}>
            {answers.length > 0 && (
              <button class={styles.link} onClick={() => takeBack(answers[answers.length - 1].feature)}>
                {ui.takeBack}
              </button>
            )}
            <button class={styles.link} onClick={startAgain}>
              {ui.startAgain}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
