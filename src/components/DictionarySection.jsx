import dictionary from '../data/dictionary.ts';
import coverage from '../data/coverage.ts';
import { buildWordIndex } from '../lib/dictionary-stats.js';
import { resolveWordRefs } from '../lib/word-refs.js';
import { AudioButton } from './AudioButton.jsx';
import { getUsageLabels } from '../lib/word-usage.js';
import { t } from '../lib/i18n.js';
import styles from './DictionarySection.module.css';

const idByTerm = new Map(Object.entries(dictionary.words).map(([id, w]) => [w.term, id]));
const wordIndex = buildWordIndex(dictionary);
const refs = (text) => resolveWordRefs(text, wordIndex);
// "atoms:GOOD" -> what the reader sees: the atom itself, the category's name
// ("Quality: what it is like" -> "Quality"), or the grammar point.
const COVER_GROUP = { atoms: 'coverAtoms', categories: 'coverCategories', grammar: 'coverGrammar' };
const coverItems = new Map(coverage.groups.flatMap((g) => g.items.map((item) => [`${g.key}:${item.key}`, { group: g.key, item }])));
function coverLabel(key, lang) {
  const { group, item } = coverItems.get(key);
  const name = group === 'atoms'
    ? (lang === 'eng' || !item[lang] ? item.key : item[lang].split(',')[0].toUpperCase())
    : (item[lang] || item.eng).split(':')[0];
  return `${t(lang, COVER_GROUP[group])} ${name}`;
}
// The reason a word is in the dictionary (necessity, 5 = no sentence without
// it ... 1 = convenience), and its opposites and near-equivalents. The
// Chinese page shows the English reason until it's translated.
function WordNotes({ word, lang }) {
  const need = word.necessity;
  return (
    <>
      {need && (
        <div class={styles.need}>
          <span class={styles.needIndex} title={t(lang, 'necessity')}>{need.index}/5</span> {t(lang, 'necessity')}: {refs(need[lang] || need.eng)}
        </div>
      )}
      {word.covers && <div class={styles.related}>{t(lang, 'covers')} {word.covers.map((key) => coverLabel(key, lang)).join(' · ')}</div>}
      {word.antonyms && <div class={styles.related}>{t(lang, 'opposite')} {word.antonyms.map(refs).join(', ')}</div>}
      {word.synonyms && <div class={styles.related}>{t(lang, 'similar')} {word.synonyms.map(refs).join(', ')}</div>}
    </>
  );
}

export function DictionarySection({ items, lang }) {
  if (!items || items.length === 0) return null;

  const grouped = {};
  for (const entry of items) {
    const key = (entry.term[0] || '?').toUpperCase();
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(entry);
  }

  return (
    <div class={styles.dict}>
      {Object.entries(grouped).map(([label, entries]) => (
        <div key={label}>
          <h3 class={styles.letter}>{label}</h3>
          {entries.map((e, i) => {
            const id = idByTerm.get(e.term);
            const usage = id ? getUsageLabels(id) : [];
            return (
              <div key={i} class={styles.entry}>
                <span class={styles.term}>
                  {e.term}
                  <AudioButton pinyin={e.term} audioFile={e.audioFile} ttsText={e.ttsText} />
                </span>
                {e.pos && <span class={styles.pos}>[{e.pos}]</span>}
                <span class={styles.def}> — {e.definition}</span>
                {e.maps && <span class={styles.maps}> (Maps to: <i>{e.maps}</i>)</span>}
                {id && <WordNotes word={dictionary.words[id]} lang={lang} />}
                {usage.length > 0 ? (
                  <div class={styles.usage}>{t(lang, 'usedIn')} {usage.join(', ')}</div>
                ) : (
                  <div class={styles.usageEmpty}>{t(lang, 'notUsedYet')}</div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
