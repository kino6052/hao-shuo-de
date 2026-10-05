import { useState, useEffect } from "preact/hooks";
import composites from "../data/composites.ts";
import dictionary from "../data/dictionary.ts";
import {
  buildWordIndex,
  countDictionaryWords,
} from "../lib/dictionary-stats.js";
import { resolveLessonRefs, resolveWordRefs } from "../lib/word-refs.js";
import { AudioButton } from "./AudioButton.jsx";
import { t } from "../lib/i18n.js";
import { dictionaryBuilds, wordBuilderUrl, openInApp } from "../lib/builder-entries.js";
import styles from "./CompositeDictionarySection.module.css";

// The composite dictionary (src/data/composites.json): for a common word in
// the reader's language, what Hao-shuo-de says. The file keeps frequency
// order (its phases go by rank); here the entries are in alphabetical order
// of the reader's word, under letter headings, like a paper dictionary. The
// search box and the fit buttons narrow the list. `critical` marks a gap
// worth a new word; `proposed` marks a description still waiting for review.
const wordIndex = buildWordIndex(dictionary);
const wordCount = countDictionaryWords(dictionary);
const FITS = ["word", "natural", "plain", "gap", "skip", "name", "proposed"];
// The reader's word for an entry: the English or Russian gloss, or the Chinese word itself.
const SOURCE = { eng: (e) => e.en, rus: (e) => e.ru, zh: (e) => e.zh };
// What an entry is filed under: the English or Russian gloss without a
// leading bracket or article ("(passive)" under P, "the Earth" under E), or,
// for Chinese, the pinyin without tone marks.
const toneless = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const SORT_KEY = {
  eng: (e) => e.en.replace(/^\(/, "").replace(/^(a|an|the) /i, ""),
  rus: (e) => e.ru.replace(/^\(/, ""),
  zh: (e) => toneless(e.py),
};
const COLLATOR = {
  eng: new Intl.Collator("en", { sensitivity: "base" }),
  rus: new Intl.Collator("ru", { sensitivity: "base" }),
  zh: new Intl.Collator("en", { sensitivity: "base" }),
};
// lang -> [{ letter, entries }], built once per language.
const byLetter = {};
function alphabetical(lang) {
  if (!byLetter[lang]) {
    const key = SORT_KEY[lang] ?? SORT_KEY.eng;
    const collator = COLLATOR[lang] ?? COLLATOR.eng;
    const sorted = composites.entries
      .map((e) => ({ e, k: key(e) }))
      .sort((a, b) => collator.compare(a.k, b.k) || a.e.rank - b.e.rank);
    const groups = [];
    for (const { e, k } of sorted) {
      const letter = toneless(k.charAt(0)).toUpperCase();
      if (groups.at(-1)?.letter !== letter) groups.push({ letter, entries: [] });
      groups.at(-1).entries.push(e);
    }
    byLetter[lang] = groups;
  }
  return byLetter[lang];
}
// "proposed" is a flag on top of a fit, so it gets its own count.
const counts = composites.entries.reduce(
  (acc, e) => ({ ...acc, [e.fit]: (acc[e.fit] ?? 0) + 1 }),
  {
    all: composites.entries.length,
    proposed: composites.entries.filter((e) => e.proposed).length,
  },
);

// `built`: the Word Builder can show how this entry's word is built.
function Entry({ entry, lang, built }) {
  const source = (SOURCE[lang] ?? SOURCE.eng)(entry);
  const hsd = entry.hsd
    ? resolveWordRefs(entry.hsd, wordIndex, wordCount)
    : null;
  return (
    <li class={styles.entry}>
      <span class={styles.source}>{source}</span>
      {lang !== "zh" && <span class={styles.zh}>{entry.zh}</span>}
      <span class={styles.arrow}>→</span>
      {hsd ? (
        <span class={styles.hsd}>
          {hsd}
          {entry.tts && <AudioButton pinyin={hsd} ttsText={entry.tts} />}
        </span>
      ) : (
        <span class={styles.none}>{t(lang, "compositeNone")}</span>
      )}
      {entry.literal && <span class={styles.literal}> “{entry.literal}”</span>}
      {built && (
        <a
          class={styles.howBuilt}
          href={wordBuilderUrl(lang, entry.rank)}
          onClick={(e) => openInApp(e, wordBuilderUrl(lang, entry.rank))}
        >
          {t(lang, "wbHowBuilt")} →
        </a>
      )}
      <span class={`${styles.fit} ${styles[entry.fit]}`}>
        {t(lang, `fit_${entry.fit}`)}
      </span>
      {entry.critical && (
        <span class={`${styles.fit} ${styles.critical}`}>
          {t(lang, "compositeCritical")}
        </span>
      )}
      {entry.proposed && (
        <span class={styles.fit}>{t(lang, "compositeProposed")}</span>
      )}
      {entry.note && <div class={styles.note}>{resolveLessonRefs(entry.note)}</div>}
    </li>
  );
}

export function CompositeDictionarySection({ lang }) {
  const [query, setQuery] = useState("");
  const [fit, setFit] = useState("all");
  // Which entries the Word Builder can show, read just after the first draw.
  const [built, setBuilt] = useState(() => new Set());
  useEffect(() => {
    const id = setTimeout(() => setBuilt(new Set(dictionaryBuilds().map((b) => b.entry.rank))), 0);
    return () => clearTimeout(id);
  }, []);
  const q = query.trim().toLowerCase();
  const shown = (e) =>
    (fit === "all" || e.fit === fit || (fit === "proposed" && e.proposed)) &&
    (!q || [e.en, e.ru, e.zh, e.py].some((s) => s?.toLowerCase().includes(q)));
  const groups = alphabetical(lang)
    .map((g) => ({ letter: g.letter, entries: g.entries.filter(shown) }))
    .filter((g) => g.entries.length > 0);

  return (
    <div class={styles.wrap}>
      <input
        class={styles.search}
        type="search"
        value={query}
        placeholder={t(lang, "compositeSearch")}
        onInput={(ev) => setQuery(ev.currentTarget.value)}
      />
      <div class={styles.filters}>
        {["all", ...FITS].map((f) => (
          <button
            key={f}
            class={f === fit ? styles.filterOn : styles.filter}
            onClick={() => setFit(f)}
          >
            {t(lang, `fit_${f}`)} · {counts[f] ?? 0}
          </button>
        ))}
      </div>
      {groups.map((g) => (
        <div key={g.letter}>
          <h3 class={styles.letter}>{g.letter}</h3>
          <ul class={styles.list}>
            {g.entries.map((e) => (
              <Entry key={e.zh} entry={e} lang={lang} built={built.has(e.rank)} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
