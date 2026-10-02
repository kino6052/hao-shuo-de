import { useState } from 'preact/hooks';
import composites from '../data/composites.json';
import dictionary from '../data/dictionary.json';
import { buildWordIndex, countDictionaryWords } from '../lib/dictionary-stats.js';
import { resolveWordRefs } from '../lib/word-refs.js';
import { AudioButton } from './AudioButton.jsx';
import { t } from '../lib/i18n.js';
import styles from './CompositeDictionarySection.module.css';

// The composite dictionary (src/data/composites.json): for a common word in
// the reader's language, what Hao-shuo-de says. Entries keep their
// frequency order; the search box and the fit buttons narrow the list.
// `critical` marks a gap worth a new word; `proposed` marks a description
// still waiting for review.
const wordIndex = buildWordIndex(dictionary);
const wordCount = countDictionaryWords(dictionary);
const FITS = ['word', 'natural', 'plain', 'gap', 'skip', 'name'];
// The reader's word for an entry: the English or Russian gloss, or the Chinese word itself.
const SOURCE = { eng: (e) => e.en, rus: (e) => e.ru, zh: (e) => e.zh };
const counts = composites.entries.reduce((acc, e) => ({ ...acc, [e.fit]: (acc[e.fit] ?? 0) + 1 }), { all: composites.entries.length });

function Entry({ entry, lang }) {
  const source = (SOURCE[lang] ?? SOURCE.eng)(entry);
  const hsd = entry.hsd ? resolveWordRefs(entry.hsd, wordIndex, wordCount) : null;
  return (
    <li class={styles.entry}>
      <span class={styles.source}>{source}</span>
      {lang !== 'zh' && <span class={styles.zh}>{entry.zh}</span>}
      <span class={styles.arrow}>→</span>
      {hsd ? (
        <span class={styles.hsd}>
          {hsd}
          {entry.tts && <AudioButton pinyin={hsd} ttsText={entry.tts} />}
        </span>
      ) : (
        <span class={styles.none}>{t(lang, 'compositeNone')}</span>
      )}
      {entry.literal && <span class={styles.literal}> “{entry.literal}”</span>}
      <span class={`${styles.fit} ${styles[entry.fit]}`}>{t(lang, `fit_${entry.fit}`)}</span>
      {entry.critical && <span class={`${styles.fit} ${styles.critical}`}>{t(lang, 'compositeCritical')}</span>}
      {entry.proposed && <span class={styles.fit}>{t(lang, 'compositeProposed')}</span>}
      {entry.note && <div class={styles.note}>{entry.note}</div>}
    </li>
  );
}

export function CompositeDictionarySection({ lang }) {
  const [query, setQuery] = useState('');
  const [fit, setFit] = useState('all');
  const q = query.trim().toLowerCase();
  const entries = composites.entries.filter(
    (e) => (fit === 'all' || e.fit === fit) && (!q || [e.en, e.ru, e.zh, e.py].some((s) => s?.toLowerCase().includes(q))),
  );

  return (
    <div class={styles.wrap}>
      <input
        class={styles.search}
        type="search"
        value={query}
        placeholder={t(lang, 'compositeSearch')}
        onInput={(ev) => setQuery(ev.currentTarget.value)}
      />
      <div class={styles.filters}>
        {['all', ...FITS].map((f) => (
          <button key={f} class={f === fit ? styles.filterOn : styles.filter} onClick={() => setFit(f)}>
            {t(lang, `fit_${f}`)} · {counts[f] ?? 0}
          </button>
        ))}
      </div>
      <ol class={styles.list}>
        {entries.map((e) => <Entry key={e.zh} entry={e} lang={lang} />)}
      </ol>
    </div>
  );
}
