import { useState, useEffect, useMemo } from "preact/hooks";
import composites from "../data/composites.ts";
import dictionary from "../data/dictionary.ts";
import {
  buildWordIndex,
  countDictionaryWords,
} from "../lib/dictionary-stats.js";
import { resolveLessonRefs, resolveWordRefs } from "../lib/word-refs.js";
import { AudioButton } from "./AudioButton.jsx";
import { Hsd, Zh, zhLabel } from "./Hsd.jsx";
import { useSettings } from "../lib/settings.js";
import { t } from "../lib/i18n.js";
import { buildOf, wordBuilderUrl, openInApp } from "../lib/builder-entries.js";
import { compositeHeads, headHanzi } from "../lib/heads.js";
import { naturalness, naturalnessSummary } from "../lib/naturalness.js";
import relations from "../data/relations.json";
import { LoadMore } from "./LoadMore.jsx";
import styles from "./CompositeDictionarySection.module.css";

// The composite dictionary (src/data/composites/): for a common word in
// the reader's language, what Hao-shuo-de says. The file keeps frequency
// order (its phases go by rank); here the entries are in alphabetical order
// of the reader's word, under letter headings, like a paper dictionary. The
// search box and the fit buttons narrow the list. `critical` marks a gap
// worth a new word; `proposed` marks a description still waiting for review.
// Each entry shows how close it is to Mandarin (src/lib/naturalness.js):
// five dots for Mandarin's own word, one for a description.
//
// With thousands of entries the page stays quick: it draws the first 60, then
// more as the reader scrolls near the end (LoadMore); the search runs once
// typing pauses, over text lowercased once; and what the page works out from
// the data (pageData) waits until the page first draws, not the app's start.
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
// What the page works out from the data, once, the first time it draws.
let data = null;
function pageData() {
  if (data) return data;
  // zh -> 1..5 (null without a form): how close each entry is to Mandarin.
  const { heads } = compositeHeads(dictionary, composites.entries);
  const natural = new Map(composites.entries.map((e) => [e.zh, naturalness(e, headHanzi(heads.get(e.zh), dictionary.words))]));
  const naturalCounts = { any: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (const s of natural.values()) if (s != null) (naturalCounts[s]++, naturalCounts.any++);
  // "proposed" is a flag on top of a fit, so it gets its own count.
  const counts = { all: composites.entries.length, proposed: 0 };
  for (const e of composites.entries) {
    counts[e.fit] = (counts[e.fit] ?? 0) + 1;
    if (e.proposed) counts.proposed++;
  }
  data = {
    wordIndex: buildWordIndex(dictionary),
    wordCount: countDictionaryWords(dictionary),
    natural,
    naturalCounts,
    summary: naturalnessSummary(composites.entries.map((entry) => ({ entry, score: natural.get(entry.zh) }))),
    counts,
    byZh: new Map(composites.entries.map((e) => [e.zh, e])),
    // what the search looks in: both glosses, the hanzi and the pinyin
    text: new Map(composites.entries.map((e) => [e, [e.en, e.ru, e.zh, e.py].filter(Boolean).join("\n").toLowerCase()])),
  };
  return data;
}

function Closeness({ score, lang }) {
  if (score == null) return null;
  const label = t(lang, `natural_${score}`);
  return (
    <span class={styles.closeness} title={`${t(lang, "naturalness")}: ${label}`} aria-label={`${t(lang, "naturalness")}: ${label}`}>
      <span aria-hidden="true">{"●".repeat(score)}{"○".repeat(5 - score)}</span>
    </span>
  );
}

// The accepted relations of an entry (src/data/relations.json, made by scripts/generate-relations.js): an end is a
// composite's hanzi or "word:<id>", shown with its sound.
const REL_KEYS = [["opposite", "relOpposite"], ["same", "relSame"], ["close", "relClose"], ["partOf", "relPartOf"], ["parts", "relParts"], ["kindOf", "relKindOf"], ["kinds", "relKinds"]];
// a long list shows its first few and the count
const MAX_ENDS = 12;
// a related entry: a core word by its pinyin, a composite by its pinyin (its Mandarin word in front while the reader
// writes in hanzi)
const endLabel = (settings) => (end) => {
  if (end.startsWith("word:")) return dictionary.words[end.slice(5)]?.term ?? end;
  const e = pageData().byZh.get(end);
  return e ? zhLabel(settings, end, e.py) : end;
};
function Relations({ zh, lang }) {
  const settings = useSettings();
  const mine = relations.composites[zh];
  if (!mine) return null;
  return (
    <div class={styles.note}>
      {REL_KEYS.filter(([key]) => mine[key]).map(([key, label], i) => (
        <span key={key}>
          {i > 0 && " · "}
          {t(lang, label)} {mine[key].slice(0, MAX_ENDS).map(endLabel(settings)).join(", ")}{mine[key].length > MAX_ENDS && ` … (${mine[key].length})`}
        </span>
      ))}
    </div>
  );
}

function Entry({ entry, lang }) {
  const { wordIndex, wordCount, natural } = pageData();
  const source = (SOURCE[lang] ?? SOURCE.eng)(entry);
  const hsd = entry.hsd
    ? resolveWordRefs(entry.hsd, wordIndex, wordCount)
    : null;
  // the Word Builder can show how this entry's word is built
  const built = buildOf(entry) != null;
  return (
    <li class={styles.entry}>
      <span class={styles.source}>{source}</span>
      {lang !== "zh" && <Zh class={styles.zh} text={entry.zh} />}
      <span class={styles.arrow}>→</span>
      {hsd ? (
        <span class={styles.hsd}>
          <Hsd pinyin={hsd} refs={entry.hsd} hanzi={entry.tts} />
          {entry.tts && <AudioButton pinyin={hsd} ttsText={entry.tts} />}
        </span>
      ) : (
        <span class={styles.none}>{t(lang, "compositeNone")}</span>
      )}
      {entry.literal && <span class={styles.literal}> “{entry.literal}”</span>}
      <Closeness score={natural.get(entry.zh)} lang={lang} />
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
      <Relations zh={entry.zh} lang={lang} />
      {entry.examples?.length > 0 && (
        <ul class={styles.examples}>
          {entry.examples.map((x, i) => {
            const pinyin = resolveWordRefs(x.pinyin, wordIndex, wordCount);
            return (
              <li key={i}>
                <Hsd class={styles.exPinyin} pinyin={pinyin} refs={x.pinyin} hanzi={x.hanzi} />
                <AudioButton pinyin={pinyin} ttsText={x.hanzi} />
                <span class={styles.exGloss}>{lang === "rus" ? x.ru : x.en}</span>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

// entries drawn at first, entries each later batch adds, and the pause in
// typing (ms) after which the search runs
const FIRST = 60;
const BATCH = 120;
const PAUSE = 150;

export function CompositeDictionarySection({ lang }) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const id = setTimeout(() => setSearch(query.trim().toLowerCase()), PAUSE);
    return () => clearTimeout(id);
  }, [query]);
  const [fit, setFit] = useState("all");
  const [close, setClose] = useState("any");
  const { natural, naturalCounts, summary, counts, text } = pageData();
  const groups = useMemo(() => {
    const shown = (e) =>
      (fit === "all" || e.fit === fit || (fit === "proposed" && e.proposed)) &&
      (close === "any" || natural.get(e.zh) === Number(close)) &&
      (!search || text.get(e).includes(search));
    return alphabetical(lang)
      .map((g) => ({ letter: g.letter, entries: g.entries.filter(shown) }))
      .filter((g) => g.entries.length > 0);
  }, [lang, search, fit, close]);
  const total = useMemo(() => groups.reduce((n, g) => n + g.entries.length, 0), [groups]);
  // How many entries are drawn: FIRST whenever the list changes, then a batch
  // more each time the reader nears the end.
  const list = `${lang}|${search}|${fit}|${close}`;
  const [drawn, setDrawn] = useState({ list, n: FIRST });
  const n = drawn.list === list ? drawn.n : FIRST;
  const more = () => setDrawn({ list, n: n + BATCH });
  const visible = [];
  let left = n;
  for (const g of groups) {
    if (left <= 0) break;
    visible.push(left >= g.entries.length ? g : { letter: g.letter, entries: g.entries.slice(0, left) });
    left -= g.entries.length;
  }

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
      <div class={styles.filters} role="group" aria-label={t(lang, "naturalness")}>
        <span class={styles.filterLabel}>{t(lang, "naturalness")}:</span>
        {["any", "5", "4", "3", "2", "1"].map((n) => (
          <button
            key={n}
            class={n === close ? styles.filterOn : styles.filter}
            onClick={() => setClose(n)}
            title={n === "any" ? undefined : t(lang, `natural_${n}`)}
          >
            {n === "any" ? t(lang, "naturalAll") : `${"●".repeat(Number(n))} ${t(lang, `natural_${n}`)}`} · {naturalCounts[n]}
          </button>
        ))}
      </div>
      <p class={styles.summary}>{t(lang, "naturalSummary")(naturalCounts[5], naturalCounts.any, summary.weighted.toFixed(1))}</p>
      {total === 0 && <p class={styles.summary}>{t(lang, "dictionaryNoMatch")}</p>}
      {visible.map((g) => (
        <div key={g.letter}>
          <h3 class={styles.letter}>{g.letter}</h3>
          <ul class={styles.list}>
            {g.entries.map((e) => (
              <Entry key={e.zh} entry={e} lang={lang} />
            ))}
          </ul>
        </div>
      ))}
      <LoadMore shown={Math.min(n, total)} total={total} label={t(lang, "showMore")} onMore={more} />
    </div>
  );
}
