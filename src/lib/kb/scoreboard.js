// The scoreboard (KB_PLAN.md phase 3): a few numbers about the language, one
// row per change, kept in kb/scoreboard.csv. The point is to see what a change
// did, and what more data did when the solvers are run again later.
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
  built: 'built forms',
  undecided_forms: 'Mandarin compounds not marked built or spelled yet',
  items: 'coverage items',
  items_with_form: 'coverage items with at least one way to say them',
  parse_rate: 'share of the first lessons\' sentences that parse',
  patterns: 'grammar patterns',
};
export const NAMES = Object.keys(COLUMNS);

const round = (n, places) => Math.round(n * 10 ** places) / 10 ** places;

// -> one row. `atoms: false` skips the solver (those columns stay empty).
export async function scoreboardRow(kb, { label = '', date = new Date(), atoms = true, parseLessons = 4, atomsTimeoutMs } = {}) {
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

  if ((source.patterns ?? []).length) {
    const lessons = (source.lessons ?? []).filter((l) => l.number <= parseLessons).map(({ id, number }) => ({ id, number }));
    const report = parseReport({ sentences: facts.sentences, parseText: kb.parse, lessons });
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
