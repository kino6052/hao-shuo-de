import { useState, useEffect } from "preact/hooks";
import dictionary from "../data/dictionary.ts";
import { t } from "../lib/i18n.js";
import { AudioButton } from "./AudioButton.jsx";
import { WordPicker } from "./WordPicker.jsx";
import { getAtPath, setAtPath } from "../lib/sentence-builder.js";
import { WORD_HANZI } from "../lib/word-hanzi.js";
import { dictionaryBuilds, buildOfRank } from "../lib/builder-entries.js";
import {
  ASK_ORDER,
  CHOICES,
  POSITIONS,
  PLACE_QUESTIONS,
  VIAS,
  DEFAULT_VIA,
  positionOf,
  takesVia,
  START_NOUNS,
  START_VERBS,
  questionOf,
  openQuestions,
  choicesFor,
  newNode,
  roleOf,
  poolFor,
  render,
  pinyinSystem,
  hanziSystem,
  glossTree,
  firstSense,
} from "../lib/word-builder.js";
import styles from "./WordBuilder.module.css";

const PINYIN = pinyinSystem(dictionary);
const HANZI = hanziSystem(WORD_HANZI, dictionary);

const term = (id) => dictionary.words[id]?.term || dictionary.units[id]?.term || id;
const choicePinyin = (key, value) => CHOICES[key][value].map(term).join("-");
const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);
// A composite dictionary entry's word in the reader's language.
const meaningOf = (entry, lang) => (lang === "rus" ? entry.ru : lang === "zh" ? entry.zh : entry.en);

// The Word Builder: pick a broad word (or any noun or verb), then describe
// it by answering questions. Each answer that is a word can be described
// with its own questions, so the built word is a tree (see
// src/lib/word-builder.js for the shapes and the Mandarin word order). A
// word from the composite dictionary can be opened too (?w=<rank>), to show
// how it's built.
export function WordBuilder({ lang }) {
  const [root, setRootState] = useState(null);
  // The composite dictionary entry on show, until the reader changes it.
  const [source, setSource] = useState(null);
  const [picker, setPicker] = useState(null);
  // The choice question whose options are showing: "<path>|<question>".
  const [openChoice, setOpenChoice] = useState(null);

  const label = (key) => t(lang, `wb_${key}`);
  // Any change the reader makes: it's no longer the dictionary's word.
  const setRoot = (next) => {
    setRootState(next);
    setSource(null);
  };
  const open = (entry, tree) => {
    setRootState(tree);
    setSource(entry);
    setOpenChoice(null);
  };

  useEffect(() => {
    const rank = Number(new URLSearchParams(window.location.search).get("w"));
    const build = rank ? buildOfRank(rank) : null;
    if (build) open(build.entry, build.tree);
  }, []);

  // Keep the dictionary word in the URL (?w=<rank>) while it's on show, so the
  // link can be shared; replaceState, so it doesn't add history entries.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (source) url.searchParams.set("w", source.rank);
    else url.searchParams.delete("w");
    window.history.replaceState(null, "", url);
  }, [source]);

  function pick(pool, title, onPick) {
    setPicker({
      pool,
      title,
      onPick: (id) => {
        onPick(id);
        setPicker(null);
      },
    });
  }

  const actions = {
    start() {
      pick(poolFor(dictionary, "noun", "verb"), t(lang, "wbWhatIsIt"), (id) => setRoot(newNode(dictionary, id)));
    },
    // Swap the word at `path`. Its answers stay when it's still the same
    // kind of word; the base word may switch between a noun and a verb.
    changeWord(path, node) {
      const roles = path.length === 0 ? ["noun", "verb"] : [node.role];
      pick(poolFor(dictionary, ...roles), t(lang, "wbChangeWord"), (id) => {
        const role = path.length === 0 ? roleOf(dictionary, id) : node.role;
        const { direction, ...rest } = role === node.role ? node.answers : {};
        const next = { id, role, answers: rest };
        // A direction the new verb can't take (shàng-lái with qù) is dropped.
        if (direction && choicesFor(next, "direction").includes(direction.value)) next.answers.direction = direction;
        setRoot((r) => setAtPath(r, path, next));
      });
    },
    ask(path, node, key) {
      const q = questionOf(node.role, key);
      if (q.choice) {
        const id = `${path.join(".")}|${key}`;
        setOpenChoice((open) => (open === id ? null : id));
        return;
      }
      pick(poolFor(dictionary, q.answer), label(key), (id) =>
        setRoot((r) => setAtPath(r, [...path, "answers", key], { node: newNode(dictionary, id, q.answer) })),
      );
    },
    choose(path, key, value) {
      setRoot((r) => setAtPath(r, [...path, "answers", key], { value }));
      setOpenChoice(null);
    },
    setPosition(path, key, position) {
      setRoot((r) => setAtPath(r, [...path, "answers", key, "position"], position));
    },
    setVia(path, key, via) {
      setRoot((r) => setAtPath(r, [...path, "answers", key, "via"], via));
    },
    remove(path, key) {
      setRoot((r) => {
        const { [key]: _, ...rest } = getAtPath(r, path).answers;
        return setAtPath(r, [...path, "answers"], rest);
      });
    },
  };

  const ctx = { lang, label, actions, openChoice };

  return (
    <div class={styles.wrap}>
      <Result root={root} source={source} lang={lang} label={label} onReset={() => setRoot(null)} />

      <DictionaryWords lang={lang} onOpen={open} />

      {root ? (
        <WordNode node={root} path={[]} ctx={ctx} />
      ) : (
        <div class={styles.start}>
          <div class={styles.startLabel}>{t(lang, "wbWhatIsIt")}</div>
          <div class={styles.chips}>
            {START_NOUNS.map((id) => (
              <StartChip key={id} id={id} lang={lang} onPick={() => setRoot(newNode(dictionary, id))} />
            ))}
          </div>
          <div class={styles.startLabel}>{t(lang, "wbOrAction")}</div>
          <div class={styles.chips}>
            {START_VERBS.map((id) => (
              <StartChip key={id} id={id} lang={lang} onPick={() => setRoot(newNode(dictionary, id))} />
            ))}
          </div>
          <button type="button" class={styles.anyWord} onClick={actions.start}>
            🔍 {t(lang, "wbAnyWord")}
          </button>
        </div>
      )}

      {picker && (
        <WordPicker
          dict={dictionary}
          lang={lang}
          pool={picker.pool}
          title={picker.title}
          onPick={picker.onPick}
          onClose={() => setPicker(null)}
        />
      )}
    </div>
  );
}

function StartChip({ id, lang, onPick }) {
  return (
    <button type="button" class={styles.startChip} onClick={onPick}>
      <span class={styles.term}>{term(id)}</span>
      <span class={styles.sense}>{firstSense(dictionary, id, lang)}</span>
    </button>
  );
}

// "See how a dictionary word is built": the composite dictionary's words the
// Word Builder can show, found by meaning. Reading them all takes a moment,
// so it happens just after the page first draws.
function DictionaryWords({ lang, onOpen }) {
  const [builds, setBuilds] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const id = setTimeout(() => setBuilds(dictionaryBuilds()), 0);
    return () => clearTimeout(id);
  }, []);
  const q = query.trim().toLowerCase();
  const found = (builds ?? []).filter(
    ({ entry: e }) => !q || [e.en, e.ru, e.zh, e.py].some((s) => s?.toLowerCase().includes(q)),
  );
  return (
    <div class={styles.dict}>
      <div class={styles.startLabel}>{t(lang, "wbDictTitle")}</div>
      <input
        class={styles.dictSearch}
        type="search"
        value={query}
        placeholder={t(lang, "wbDictSearch")}
        onInput={(e) => setQuery(e.currentTarget.value)}
      />
      <div class={styles.chips}>
        {found.slice(0, 8).map(({ entry, tree }) => (
          <button type="button" key={entry.rank} class={styles.startChip} onClick={() => onOpen(entry, tree)}>
            <span class={styles.meaning}>{meaningOf(entry, lang)}</span>
            <span class={styles.sense}>{render(tree, PINYIN)}</span>
          </button>
        ))}
      </div>
      {builds && q && found.length === 0 && <div class={styles.placeholder}>{t(lang, "sbNoResults")}</div>}
    </div>
  );
}

// The built word: pinyin, hanzi with audio, and what it means, question by question.
function Result({ root, source, lang, label, onReset }) {
  if (!root) {
    return (
      <div class={styles.output}>
        <div class={styles.placeholder}>{t(lang, "wbEmpty")}</div>
      </div>
    );
  }
  const pinyin = render(root, PINYIN);
  const hanzi = render(root, HANZI);
  const gloss = glossTree(dictionary, root, lang, (key) => lowerFirst(label(key)));
  return (
    <div class={styles.output}>
      {source && (
        <div class={styles.source}>
          {t(lang, "wbDictWord")} <b>{meaningOf(source, lang)}</b> · <span lang="zh">{source.zh}</span>
        </div>
      )}
      <div class={styles.wordRow}>
        <span class={styles.wordText}>{pinyin}</span>
        <AudioButton pinyin={pinyin} ttsText={hanzi} />
      </div>
      <div class={styles.hanzi} lang="zh">
        {hanzi}
      </div>
      <div class={styles.gloss}>
        <div class={styles.glossBase}>{gloss.text}</div>
        <GlossItems items={gloss.items} />
      </div>
      <div class={styles.toolbar}>
        <button type="button" class={styles.toolBtn} onClick={onReset}>
          {t(lang, "sbReset")}
        </button>
      </div>
    </div>
  );
}

function GlossItems({ items }) {
  if (!items.length) return null;
  return (
    <ul class={styles.glossList}>
      {items.map((item, i) => (
        <li key={i}>
          <span class={styles.glossQ}>{item.question}</span> → {item.text}
          <GlossItems items={item.items} />
        </li>
      ))}
    </ul>
  );
}

// One word in the tree: the word itself, its answered questions (each with
// the answering word, described the same way), and the questions left.
function WordNode({ node, path, ctx }) {
  const { lang, label, actions, openChoice } = ctx;
  const answered = ASK_ORDER[node.role].filter((key) => node.answers[key]);
  const open = openQuestions(node);
  const choiceKey = open.find((key) => openChoice === `${path.join(".")}|${key}`);

  return (
    <div class={styles.node}>
      <button
        type="button"
        class={styles.headWord}
        onClick={() => actions.changeWord(path, node)}
        title={t(lang, "wbChangeWord")}
      >
        <span class={styles.term}>{term(node.id)}</span>
        <span class={styles.sense}>{firstSense(dictionary, node.id, lang)}</span>
      </button>

      {answered.length > 0 && (
        <ul class={styles.answers}>
          {answered.map((key) => (
            <AnswerRow key={key} qKey={key} answer={node.answers[key]} parent={node} path={path} ctx={ctx} />
          ))}
        </ul>
      )}

      {open.length > 0 && (
        <div class={styles.questions}>
          {open.map((key) => (
            <button
              type="button"
              key={key}
              class={`${styles.question} ${choiceKey === key ? styles.questionOpen : ""}`}
              onClick={() => actions.ask(path, node, key)}
            >
              + {label(key)}
            </button>
          ))}
        </div>
      )}

      {choiceKey && (
        <div class={styles.chips}>
          {choicesFor(node, choiceKey).map((value) => (
            <button
              type="button"
              key={value}
              class={styles.choiceChip}
              onClick={() => actions.choose(path, choiceKey, value)}
            >
              <span class={styles.term}>{choicePinyin(choiceKey, value)}</span>
              <span class={styles.sense}>{label(`${choiceKey}_${value}`)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AnswerRow({ qKey, answer, parent, path, ctx }) {
  const { lang, label, actions } = ctx;
  return (
    <li class={styles.answer}>
      <div class={styles.answerHead}>
        <span class={styles.qLabel}>{label(qKey)}</span>
        <button
          type="button"
          class={styles.remove}
          onClick={() => actions.remove(path, qKey)}
          aria-label={t(lang, "sbRemoveAria")}
          title={t(lang, "sbRemoveAria")}
        >
          ×
        </button>
      </div>
      {"value" in answer ? (
        <span class={`${styles.choiceChip} ${styles.choiceActive}`}>
          <span class={styles.term}>{choicePinyin(qKey, answer.value)}</span>
          <span class={styles.sense}>{label(`${qKey}_${answer.value}`)}</span>
        </span>
      ) : (
        <>
          {takesVia(parent, qKey) && (
            <div class={styles.chips}>
              {VIAS.map((via) => (
                <button
                  type="button"
                  key={via}
                  class={`${styles.choiceChip} ${via === (answer.via || DEFAULT_VIA) ? styles.choiceActive : ""}`}
                  onClick={() => actions.setVia(path, qKey, via)}
                >
                  <span class={styles.term}>{term(via)}</span>
                  <span class={styles.sense}>{label(`via_${via}`)}</span>
                </button>
              ))}
            </div>
          )}
          {PLACE_QUESTIONS.has(qKey) && (
            <div class={styles.chips}>
              {Object.keys(POSITIONS).map((p) => (
                <button
                  type="button"
                  key={p}
                  class={`${styles.choiceChip} ${p === positionOf(answer) ? styles.choiceActive : ""}`}
                  onClick={() => actions.setPosition(path, qKey, p)}
                >
                  <span class={styles.term}>{POSITIONS[p].map(term).join("-") || "—"}</span>
                  <span class={styles.sense}>{label(`pos_${p}`)}</span>
                </button>
              ))}
            </div>
          )}
          <WordNode node={answer.node} path={[...path, "answers", qKey, "node"]} ctx={ctx} />
        </>
      )}
    </li>
  );
}
