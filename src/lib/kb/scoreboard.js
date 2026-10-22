// The scoreboard: a few numbers about the language, one row per change, kept in kb/scoreboard.csv.
// The point is to see what a change did, and what more data did when the solvers are run again later (KB_PLAN.md phase 3).
//
//   scoreboardRow(kb, opts)        -> one row (an object keyed by COLUMNS)
//   appendRow(file, row)           add a row to the CSV (the header is rewritten if the columns changed)
//   readScoreboard(file)           -> the rows, numbers as numbers
//   renderScoreboard(rows, now)    -> text: each number now, and the change since the last stored row
//
// Nothing here changes data. A number that can't be measured yet is left empty
// (parse rate with no grammar patterns, the yardsticks before phase 6), never
// guessed.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { wordRefIds } from '../word-refs.js';
import { parseReport } from './parse-report.js';

// column -> what it counts. The order is the CSV's order.
export const COLUMNS = {
  date: 'when the row was made',
  label: 'what changed',
  words: 'words in the dictionary',
  composites: 'composite entries',
  forms: 'descriptions (forms) over all composites',
  avg_form_words: 'average words per description',
  marked_atoms: 'words marked as atoms by the author',
  paraphrased: 'words with a paraphrase (fine or clumsy)',
  unreviewed: 'words with neither a paraphrase nor an atom mark',
  smallest_set: 'size of the smallest set of words that defines the rest',
  true_atoms: 'words in every smallest set, or marked',
  swappable: 'words in some smallest sets',
  secondary: 'words in no smallest set',
  unchecked: 'words whose question did not finish in time',
  core: 'the core (Harnad)',
  spelled: 'spelled forms (hidden vocabulary, learned whole)',
  spelled_bare: 'composites with a spelled form and no built form (potentially dangerous, K23)',
  built: 'built forms',
  undecided_forms: 'Mandarin compounds not marked built or spelled yet',
  items: 'coverage items',
  items_with_form: 'coverage items with at least one way to say them',
  parse_rate: 'share of the lesson sentences that parse with the patterns taught so far',
  patterns: 'grammar patterns',
  primes_said: 'NSM primes that a word or pattern carries',
  primes_once: 'primes carried by one word or pattern only (fragile)',
  categories_said: "Aristotle's categories that a word or pattern carries",
  grammar_said: 'grammar items that a word or pattern carries',
  traced_words: 'words whose description reaches a prime (or that say one)',
  said_mandarin_1000: 'share of the 1000 most common Mandarin words that have an entry (yardsticks.js)',
  said_mandarin_3000: 'share of the 3000 most common Mandarin words that have an entry',
  said_mandarin_all: 'share of the whole Mandarin word list (5329) that has an entry; K30 finishes it',
  said_english_500: 'share of the 500 most common English words an entry says (gloss or same WordNet sense)',
  said_english_1000: 'share of the 1000 most common English words an entry says',
  said_english_3000: 'share of the 3000 most common English words an entry says',
  covered_english_3000: 'share of them said, explained (english-explained.json) or said as a kind of; K30 finishes it',
  said_basic_english: 'share of the Basic English words an entry says',
  said_sentences: 'share of the everyday sentences whose every character an entry covers (grammar not checked)',
  translation_texts: "texts in the translator's test set at its last run (kb/translation-score.json, TRANSLATOR_PLAN.md F2)",
  translation_hsd_only: 'share of its sentences written in Hao-shuo-de words only',
  translation_meant: 'share of its sentences that can have the reading meant',
  translation_kept: 'share of its sentences that kept every needed idea (the bar, Q8, is 0.9)',
};
export const NAMES = Object.keys(COLUMNS);

const round = (n, places) => Math.round(n * 10 ** places) / 10 ** places;

const share = (said, of) => (of ? round(said / of, 3) : '');

// -> the sayability columns from a yardstick report: the share said in each band, as a fraction like parse_rate
export function sayability(y) {
  const band = (list, upTo) => {
    const b = list.bands.find((x) => x.upTo === upTo && x.total === upTo);
    return b ? share(b.said, b.total) : '';
  };
  const whole = (list) => {
    const b = list.bands.at(-1);
    return b ? share(b.said, b.total) : '';
  };
  const covered = (list, upTo) => {
    const b = list.bands.find((x) => x.upTo === upTo && x.total === upTo);
    return b ? share(b.said + (b.explained ?? 0) + b.near, b.total) : '';
  };
  return {
    said_mandarin_1000: band(y.mandarin, 1000),
    said_mandarin_3000: band(y.mandarin, 3000),
    said_mandarin_all: whole(y.mandarin),
    said_english_500: band(y.englishTop, 500),
    said_english_1000: band(y.englishTop, 1000),
    said_english_3000: band(y.englishTop, 3000),
    covered_english_3000: covered(y.englishTop, 3000),
    said_basic_english: share(y.basic.said, y.basic.total),
    said_sentences: share(y.sentences.said, y.sentences.total),
  };
}

// -> the translator columns from the numbers `npm run translator -- test` stored last (setScore in
// src/lib/translator/test-set.js); none stored leaves them empty
export const translationColumns = (score) =>
  score
    ? { translation_texts: score.texts ?? '', translation_hsd_only: score.hsdOnly ?? '', translation_meant: score.meant ?? '', translation_kept: score.sentencesKept ?? '' }
    : {};

// -> the stored translator numbers, or null when the test set has not been run (or the file is not JSON)
export function readTranslationScore(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf-8'));
  } catch {
    return null;
  }
}

// -> one row. `atoms: false` skips the solver (those columns stay empty). `translation` is readTranslationScore's result.
export async function scoreboardRow(kb, { label = '', date = new Date(), atoms = true, parseLessons = Infinity, atomsTimeoutMs, translation = null } = {}) {
  const { source, facts } = kb;
  const composites = source.composites ?? [];
  const forms = composites.flatMap((c) => (c.hsd ? c.hsd.split(' / ') : []));
  const items = (source.coverage ?? []).flatMap((g) => g.items);

  const row = Object.fromEntries(NAMES.map((n) => [n, '']));
  Object.assign(row, {
    date: date.toISOString().slice(0, 10),
    label,
    words: Object.keys(source.words).length,
    composites: composites.length,
    forms: forms.length,
    avg_form_words: forms.length ? round(forms.reduce((n, f) => n + wordRefIds(f).length, 0) / forms.length, 2) : '',
    items: items.length,
    items_with_form: items.filter((i) => (i.forms ?? []).length).length,
    patterns: (source.patterns ?? []).length,
  });

  // meaning links (K19): what is said, and what can be traced down to a prime
  if (kb.meaning) {
    const m = kb.meaning();
    const g = m.groups;
    Object.assign(row, {
      primes_said: g.atoms?.said ?? '',
      primes_once: g.atoms?.once ?? '',
      categories_said: g.categories?.said ?? '',
      grammar_said: g.grammar?.said ?? '',
      traced_words: m.totals.words - m.grounding.unreached.length - m.grounding.unreachedAtoms.length,
    });
  }

  // sayability against the word lists (yardsticks.js); a list that is not there leaves its columns empty
  if (kb.yardsticks) Object.assign(row, sayability(kb.yardsticks()));
  Object.assign(row, translationColumns(translation));

  if ((source.patterns ?? []).length) {
    const lessons = (source.lessons ?? []).filter((l) => l.number <= parseLessons).map(({ id, number }) => ({ id, number }));
    const report = parseReport({ sentences: facts.sentences, parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons });
    if (report.total) row.parse_rate = round(report.rate, 3);
  }

  if (atoms) {
    const r = await kb.atoms(undefined, { timeoutMs: atomsTimeoutMs });
    const c = r.counts;
    Object.assign(row, {
      marked_atoms: c.marked,
      paraphrased: c.paraphrased + c.clumsy,
      unreviewed: c.unreviewed,
      smallest_set: r.smallest,
      true_atoms: c.atoms,
      swappable: c.swappable,
      secondary: c.secondary,
      unchecked: c.unchecked,
      core: c.core,
      spelled: r.hidden.spelled.length,
      spelled_bare: r.hidden.bare.length,
      built: r.hidden.built,
      undecided_forms: r.hidden.undecided.length,
    });
  }
  return row;
}

// -- the CSV ----------------------------------------------------------------------------------

const cell = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') (field += '"', i++);
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') (row.push(field), (field = ''));
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      if (row.some((x) => x !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((x) => x !== '')) rows.push(row);
  return rows;
}

const asValue = (s) => (s !== '' && Number.isFinite(Number(s)) && /^-?[\d.]+$/.test(s) ? Number(s) : s);

// -> the rows of the CSV, oldest first; [] when there is no file yet.
export function readScoreboard(file) {
  if (!existsSync(file)) return [];
  const [head, ...rows] = parseCsv(readFileSync(file, 'utf-8'));
  if (!head) return [];
  return rows.map((r) => Object.fromEntries(head.map((name, i) => [name, asValue(r[i] ?? '')])));
}

const csvText = (rows) => `${[NAMES.join(','), ...rows.map((r) => NAMES.map((n) => cell(r[n])).join(','))].join('\n')}\n`;

// Adds a row. A file written with other columns is rewritten with these ones
// (a column that is new stays empty in the old rows; one that is gone is dropped).
export function appendRow(file, row) {
  const rows = [...readScoreboard(file), row];
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, csvText(rows));
  return rows.length;
}

// -- as text ----------------------------------------------------------------------------------

const change = (now, before) => {
  if (typeof now !== 'number' || typeof before !== 'number') return '';
  const d = round(now - before, 3);
  return d === 0 ? '' : `  (${d > 0 ? '+' : ''}${d})`;
};

// -> text: each measurable number, and how it changed since `rows`' last row.
export function renderScoreboard(now, rows = []) {
  const last = rows.at(-1);
  const out = [`Scoreboard${now.label ? `: ${now.label}` : ''}${last ? `, against the row of ${last.date}${last.label ? ` (${last.label})` : ''}` : ' (no earlier row)'}`];
  const width = Math.max(...NAMES.map((n) => n.length));
  for (const n of NAMES.filter((n) => n !== 'date' && n !== 'label')) {
    const v = now[n];
    out.push(`  ${n.padEnd(width)}  ${v === '' ? '-' : v}${last ? change(v, last[n]) : ''}   ${COLUMNS[n]}`);
  }
  out.push('', `${rows.length} stored row(s).`);
  return out.join('\n');
}

// -> the stored rows as a table of the numbers worth a glance (the CSV has them all).
export const KEY = ['words', 'composites', 'avg_form_words', 'unreviewed', 'smallest_set', 'true_atoms', 'spelled', 'undecided_forms', 'parse_rate'];

export function renderHistory(rows) {
  if (!rows.length) return 'No rows stored yet (kb/scoreboard.csv). node scripts/kb.js scoreboard --append adds one.';
  const cols = ['date', ...KEY, 'label'];
  const text = rows.map((r) => cols.map((c) => String(r[c] === '' || r[c] === undefined ? '-' : r[c])));
  const width = cols.map((c, i) => Math.max(c.length, ...text.map((t) => t[i].length)));
  const line = (cells) => cells.map((c, i) => (i === cols.length - 1 ? c : c.padEnd(width[i]))).join('  ');
  return [line(cols), ...text.map(line)].join('\n');
}
