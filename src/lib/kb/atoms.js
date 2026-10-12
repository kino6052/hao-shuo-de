// Which words are atoms (KB_PLAN.md K3, K8, phase 2). The reasoning is in
// kb/rules/atoms.lp (the smallest sets of words the others can be said from)
// and kb/rules/kernel.lp (Harnad's kernel and core); this file asks it and
// turns the answer into a report with the reason for every line. It never
// changes data.
//
//   atoms(ctx)             -> the report (a plain object, see below)
//   renderAtoms(r, opts)   -> the report as text, for the CLI and the Claude tools
//   atomWord(r, id)        -> one word's line of the report, with how it is said
//   renderAtomWord(r, line)-> that line as text
//
// ctx = { facts, source }: buildFacts(source) and the source.
//
// The sorting (K8, "true atoms" = marked, clumsy, or in every smallest set):
//   atom        the author marked it, its paraphrase is clumsy, or every smallest set needs it
//   swappable   some smallest sets have it and others do not: another word could take its place
//   secondary   no smallest set needs it: the others say it
//   unreviewed  no paraphrase and no atom mark yet; it is counted in the sets, but not called an atom
//
// Only fine paraphrases are definitions. The definitions are drawn from the
// first smallest set found; a swappable word may be said differently from
// another smallest set.

import { solve, tables } from './clingo.js';
import { readRules } from './rules.js';
import { wordRefIds } from '../word-refs.js';
import { formKinds } from '../form-kinds.js';
import { paraphraseStatus } from '../paraphrase.js';
import { pinyinOf } from './whatif.js';

const OK = ['SATISFIABLE', 'OPTIMUM FOUND'];

// -> the ids in the first column of a predicate's rows.
const firstOf = (t, pred) => (t[pred] ?? []).map(([w]) => w);

// -> the last model of a run of consequences (brave or cautious), as a table.
const lastTable = (result) => tables(result.models.at(-1) ?? { atoms: [] });

// models: 1 for the best answer; 0 for all of them (with brave or cautious, that is the one set of consequences)
async function ask(program, options, models, timeoutMs) {
  const r = await solve(program, { models, options, timeoutMs });
  if (r.status === 'TIMEOUT') throw new Error(`the atoms question ran out of time (${timeoutMs} ms)`);
  if (!OK.includes(r.status)) throw new Error(`the atoms question has no answer (${r.status})`);
  return r;
}

export async function atoms(ctx, { timeoutMs = 60_000 } = {}) {
  const { source, facts } = ctx;
  const words = source.words;
  const ids = Object.keys(words);
  const program = `${facts.program}\n${readRules('atoms')}`;

  // one smallest set (and the kernel); the words in some of the smallest sets; in all of them
  const first = await ask(`${program}\n${readRules('kernel')}`, ['--opt-mode=opt'], 1, timeoutMs);
  const some = await ask(program, ['--opt-mode=optN', '--enum-mode=brave'], 0, timeoutMs);
  const all = await ask(program, ['--opt-mode=optN', '--enum-mode=cautious'], 0, timeoutMs);

  const one = tables(first.models.at(-1));
  const chosen = new Set(firstOf(one, 'base'));
  const marked = new Set(firstOf(one, 'marked'));
  const unreviewed = new Set(firstOf(one, 'unreviewed'));
  const inSome = new Set(firstOf(lastTable(some), 'base'));
  const inAll = new Set(firstOf(lastTable(all), 'base'));
  const kernel = firstOf(one, 'kernel');
  const core = firstOf(one, 'core');

  const pin = pinyinOf(words);
  const card = (id) => ({ id, term: words[id].term, hanzi: words[id].hanzi });

  const kindOf = (id) => {
    if (unreviewed.has(id)) return 'unreviewed';
    if (marked.has(id) || inAll.has(id)) return 'atom';
    return inSome.has(id) ? 'swappable' : 'secondary';
  };
  const whyAtom = (id) => {
    const status = paraphraseStatus(words[id]);
    if (status === 'atom') return 'marked as an atom';
    if (status === 'clumsy') return 'its paraphrase is clumsy';
    return 'every smallest set needs it';
  };

  // the fine forms of a word: [{ n, uses }]
  const fineForms = (id) => {
    const w = words[id];
    if (paraphraseStatus(w) !== 'paraphrase') return [];
    return w.paraphrase.forms.map((f, i) => ({ n: i + 1, uses: [...new Set(wordRefIds(f))].filter((v) => v !== id) }));
  };

  // how each word outside the chosen set is said: the form that is ready soonest
  const level = new Map([...chosen].map((id) => [id, 0]));
  const how = new Map();
  for (let changed = true; changed; ) {
    changed = false;
    for (const id of ids) {
      if (chosen.has(id)) continue;
      let best = null;
      for (const f of fineForms(id)) {
        if (!f.uses.every((u) => level.has(u))) continue;
        const lv = 1 + Math.max(0, ...f.uses.map((u) => level.get(u)));
        if (!best || lv < best.level) best = { ...f, level: lv };
      }
      if (best && (!level.has(id) || best.level < level.get(id))) {
        level.set(id, best.level);
        how.set(id, best);
        changed = true;
      }
    }
  }
  // the atoms (words of the chosen set) a word rests on, through its definitions
  const rests = new Map();
  const restsOn = (id) => {
    if (chosen.has(id)) return [id];
    if (!rests.has(id)) {
      const h = how.get(id);
      rests.set(id, h ? [...new Set(h.uses.flatMap(restsOn))] : []);
    }
    return rests.get(id);
  };
  const definitions = {};
  for (const [id, h] of how) {
    const form = words[id].paraphrase.forms[h.n - 1];
    definitions[id] = { form: h.n, text: pin(form), level: h.level, uses: h.uses, restsOn: restsOn(id).sort() };
  }

  // how often each word is needed: composite forms and sentences that name it
  const used = new Map();
  const bump = (id) => used.set(id, (used.get(id) ?? 0) + 1);
  for (const c of source.composites ?? []) for (const f of c.hsd ? c.hsd.split(' / ') : []) new Set(wordRefIds(f)).forEach(bump);
  for (const s of facts.sentences ?? []) s.words.forEach(bump);
  // K8: too long for how often the word is needed = its shortest paraphrase times its uses
  const cost = ids
    .filter((id) => words[id].paraphrase)
    .map((id) => {
      const length = Math.min(...words[id].paraphrase.forms.map((f) => wordRefIds(f).length));
      const uses = used.get(id) ?? 0;
      return { ...card(id), length, uses, cost: length * uses, verdict: words[id].paraphrase.verdict };
    })
    .sort((a, b) => b.cost - a.cost || a.id.localeCompare(b.id));

  // hidden vocabulary: spelled forms are Mandarin words written with ours and learned whole (K9)
  const hidden = { spelled: [], undecided: [], built: 0 };
  for (const c of source.composites ?? []) {
    formKinds(c).forEach((k, i) => {
      if (k === 'built') hidden.built++;
      else (k === 'spelled' ? hidden.spelled : hidden.undecided).push({ zh: c.zh, py: c.py, rank: c.rank, form: i + 1 });
    });
  }

  const list = (kind) => ids.filter((id) => kindOf(id) === kind).map((id) => ({ ...card(id), ...(kind === 'atom' ? { why: whyAtom(id) } : {}) }));
  const out = {
    smallest: chosen.size,
    atoms: list('atom'),
    swappable: list('swappable'),
    secondary: list('secondary'),
    unreviewed: list('unreviewed'),
    kernel,
    core,
    chosen: [...chosen].sort(),
    terms: Object.fromEntries(ids.map((id) => [id, words[id].term])),
    definitions,
    cost,
    hidden,
    counts: {
      words: ids.length,
      paraphrased: ids.filter((id) => paraphraseStatus(words[id]) === 'paraphrase').length,
      clumsy: ids.filter((id) => paraphraseStatus(words[id]) === 'clumsy').length,
      marked: ids.filter((id) => paraphraseStatus(words[id]) === 'atom').length,
      kernel: kernel.length,
      core: core.length,
    },
  };
  out.counts.atoms = out.atoms.length;
  out.counts.swappable = out.swappable.length;
  out.counts.secondary = out.secondary.length;
  out.counts.unreviewed = out.unreviewed.length;
  return out;
}

// -> one word's line of the report: its sort, and how it is said when it is not an atom.
export function atomWord(r, id) {
  for (const kind of ['atoms', 'swappable', 'secondary', 'unreviewed']) {
    const hit = r[kind].find((x) => x.id === id);
    if (hit) return { ...hit, kind: kind === 'atoms' ? 'atom' : kind, definition: r.definitions[id] ?? null };
  }
  return null;
}

// -- as text ---------------------------------------------------------------------------------

const SORTS = {
  atom: 'an atom',
  swappable: 'swappable: in some smallest sets and not others, so another word could take its place',
  secondary: 'secondary: the other words say it',
  unreviewed: 'not reviewed yet: no paraphrase and no atom mark, so it counts as in the set',
};

// -> one word's line as text; `line` comes from atomWord().
export function renderAtomWord(r, line) {
  if (!line) return 'That word is not in the dictionary.';
  const terms = (id) => r.terms[id] ?? id;
  const out = [`${line.term} ${line.hanzi} (${line.id}) is ${SORTS[line.kind]}.`];
  if (line.why) out.push(`  Why: ${line.why}.`);
  const d = line.definition;
  if (d) out.push(`  Said as: ${d.text} (form ${d.form}, ${d.level} step${d.level === 1 ? '' : 's'} from the set), using ${d.uses.map(terms).join(', ')}; rests on ${d.restsOn.map(terms).join(', ')}.`);
  const cost = r.cost.find((x) => x.id === line.id);
  if (cost) out.push(`  Cost: ${cost.length} word(s) in its shortest form × ${cost.uses} use(s) = ${cost.cost}${cost.verdict === 'clumsy' ? ' (clumsy)' : ''}.`);
  if (r.core.includes(line.id)) out.push('  It is in the core.');
  else if (r.kernel.includes(line.id)) out.push('  It is in the kernel (not the core).');
  return out.join('\n');
}

export function renderAtoms(r, { limit = 15 } = {}) {
  const out = [];
  const c = r.counts;
  const terms = (id) => r.terms[id] ?? id;
  out.push(`Atoms: ${c.words} words, the smallest set that says the rest has ${r.smallest}.`);
  out.push(`  ${c.atoms} true atoms (${c.marked} marked, ${c.clumsy} clumsy), ${c.swappable} swappable, ${c.secondary} secondary, ${c.unreviewed} not reviewed yet.`);
  if (c.unreviewed) out.push(`  Words with neither a paraphrase nor an atom mark count in the set but are not called atoms: review them first.`);

  const section = (title, rows, line) => {
    out.push('', `${title} (${rows.length})`);
    if (!rows.length) out.push('  none');
    for (const x of rows.slice(0, limit)) out.push(`  ${line(x)}`);
    if (rows.length > limit) out.push(`  … and ${rows.length - limit} more`);
  };
  section('True atoms', r.atoms, (x) => `${x.term} ${x.hanzi} (${x.id}): ${x.why}`);
  section('Swappable (in some smallest sets, not all)', r.swappable, (x) => `${x.term} ${x.hanzi} (${x.id})`);
  section('Secondary, with what they rest on', r.secondary.filter((x) => r.definitions[x.id]), (x) => {
    const d = r.definitions[x.id];
    return `${x.term} ${x.hanzi} = ${d.text} — rests on ${d.restsOn.map(terms).join(', ')}`;
  });
  section('Not reviewed yet', r.unreviewed, (x) => `${x.term} ${x.hanzi} (${x.id})`);

  out.push('', `Kernel: ${r.kernel.length} words; core: ${r.core.length}${r.core.length ? ` (${r.core.map(terms).join(', ')})` : ''}`);
  const long = r.cost.filter((x) => x.cost > 0);
  section('Paraphrases that cost the most (words in the shortest form × uses)', long, (x) => `${x.term} ${x.hanzi}: ${x.length} × ${x.uses} = ${x.cost}${x.verdict === 'clumsy' ? ' (clumsy)' : ''}`);
  out.push('', `Hidden vocabulary: ${r.hidden.spelled.length} spelled form(s) learned whole; ${r.hidden.undecided.length} Mandarin compound(s) not marked built or spelled yet.`);
  for (const h of r.hidden.spelled.slice(0, limit)) out.push(`  ${h.zh} ${h.py} #${h.rank}`);
  if (r.hidden.spelled.length > limit) out.push(`  … and ${r.hidden.spelled.length - limit} more`);
  return out.join('\n');
}
