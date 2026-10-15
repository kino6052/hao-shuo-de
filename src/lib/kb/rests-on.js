// Which atoms a word rests on (KB_PLAN.md K24: "each word shows which atoms its paraphrase and its description come
// down to"). Plain code over the words, no solver: the atoms report (atoms.js) says which words are atoms by asking
// clingo for smallest sets; this says, for one word at a time, which of the words nothing else says it comes
// down to, and what a removal cuts off. It never changes data.
//
//   restsOnModel(source, { dropped })   -> the model (see below)
//   restsOnWord(model, id)              -> one word's line, ids only: { kind, level, atoms, forms, description, restedOnBy }
//   restsOnLoss(before, after, dropped) -> what dropping words does to the others (see below)
//   renderRestsOn(line, term)           -> that line as text (term(id) gives the pinyin)
//
// An **atom** here is a word nothing else says: marked as an atom, a clumsy paraphrase (K8, "until the clumsy
// way is accepted"), or not reviewed yet. A word with a fine paraphrase is **said** by it. The **level** of a word
// is its steps down to atoms (an atom is 0; a fine paraphrase that names only atoms is 1; and so on), and the
// form that gets there soonest is the one kept, the way atoms.js reads the definitions off a smallest set.
// What a word **rests on** is the atoms at the bottom of that form. Two cases have no atoms:
//   stuck    the paraphrases lead round in a circle (e says f, f says e): nothing at the bottom
//   cut off  (after a removal) every form names a word that is gone
//
// The description of a word (its definition, the note on why it is needed, what its senses say) names other
// words; each is brought down to atoms the same way, so `description.atoms` is what the text comes down to.
//
// A dropped word that has a paraphrase stays in the model as a *stand-in*: other forms that name it still work,
// one step longer, because its own paraphrase says it (that is what "potentially removable" means, K21). A
// dropped word without one (a marked atom) is simply gone, and every form that names it stops working.

import { wordRefIds } from '../word-refs.js';
import { paraphraseStatus } from '../paraphrase.js';
import { describedBy } from './facts.js';

export function restsOnModel(source, { dropped = [] } = {}) {
  const words = source.words ?? {};
  const ids = Object.keys(words);
  const known = (id) => Object.hasOwn(words, id);
  const gone = new Set(dropped);
  const absent = (id) => gone.has(id) && !words[id].paraphrase;
  // a word is said by its forms when it has a fine paraphrase, or when it is a dropped stand-in
  const isBase = (id) => !absent(id) && !(gone.has(id) && words[id].paraphrase) && paraphraseStatus(words[id]) !== 'paraphrase';
  const kindOf = (id) => {
    const s = paraphraseStatus(words[id]);
    return s === 'paraphrase' ? 'paraphrase' : s === 'clumsy' ? 'clumsy' : s === 'atom' ? 'atom' : 'unreviewed';
  };

  // the forms of a word, as the words each names (itself and strangers left out)
  const formUses = (id) => (words[id].paraphrase?.forms ?? []).map((f, i) => ({ n: i + 1, uses: [...new Set(wordRefIds(f))].filter((v) => v !== id && known(v)), unknown: wordRefIds(f).some((v) => v !== id && !known(v)) }));

  // the levels: the form that is ready soonest
  const level = new Map(ids.filter(isBase).map((id) => [id, 0]));
  const chosen = new Map();
  for (let changed = true; changed; ) {
    changed = false;
    for (const id of ids) {
      if (isBase(id) || absent(id) || !words[id].paraphrase) continue;
      let best = null;
      for (const f of formUses(id)) {
        if (f.unknown || !f.uses.every((u) => level.has(u))) continue;
        const lv = 1 + Math.max(0, ...f.uses.map((u) => level.get(u)));
        if (!best || lv < best.level) best = { n: f.n, level: lv };
      }
      if (best && (!level.has(id) || best.level < level.get(id))) {
        level.set(id, best.level);
        chosen.set(id, best.n);
        changed = true;
      }
    }
  }

  // the atoms a word rests on: itself if it is one, else the atoms under the form kept (levels only fall along it, so it ends)
  const memo = new Map();
  const atomsOf = (id) => {
    if (!level.has(id)) return null;
    if (isBase(id)) return [id];
    if (!memo.has(id)) {
      const f = formUses(id)[chosen.get(id) - 1];
      memo.set(id, [...new Set(f.uses.flatMap(atomsOf))].sort());
    }
    return memo.get(id);
  };

  // every form, ready or not: its atoms when all it names can be brought down
  const formsOf = (id) =>
    formUses(id).map((f) => {
      const ready = !f.unknown && f.uses.every((u) => level.has(u));
      return { n: f.n, uses: f.uses, level: ready ? 1 + Math.max(0, ...f.uses.map((u) => level.get(u))) : null, atoms: ready ? [...new Set(f.uses.flatMap(atomsOf))].sort() : null, blockedBy: ready ? [] : f.uses.filter((u) => !level.has(u)) };
    });

  const descriptionOf = (id) => {
    const names = [...describedBy(id, words[id], known)];
    return { names, atoms: [...new Set(names.flatMap((v) => atomsOf(v) ?? []))].sort(), stuck: names.filter((v) => !level.has(v)) };
  };

  return { words, ids, kindOf, level, chosen, isBase, absent, atomsOf, formsOf, descriptionOf, formUses, gone, restedBy: null };
}

// -> for every atom, the words that rest on it ({ words: those whose kept form comes down to it, named: those with a form that names it })
function restedByIndex(model) {
  if (model.restedBy) return model.restedBy;
  const by = new Map();
  const entry = (a) => (by.has(a) ? by.get(a) : by.set(a, { words: [], named: [] }).get(a));
  for (const id of model.ids) {
    if (model.absent(id)) continue;
    for (const a of model.isBase(id) ? [] : model.atomsOf(id) ?? []) entry(a).words.push(id);
    for (const f of model.formUses(id)) for (const u of f.uses) if (model.isBase(u) && !entry(u).named.includes(id)) entry(u).named.push(id);
  }
  return (model.restedBy = by);
}

// -> one word's line, ids only. `atoms` is null for a word that is stuck or cut off; for an atom it is the word itself.
export function restsOnWord(model, id) {
  if (!Object.hasOwn(model.words, id)) return null;
  const kind = model.kindOf(id);
  const by = restedByIndex(model).get(id);
  return {
    id,
    kind,
    // 'atom' words are said by nothing; a clumsy one has a paraphrase that would say it if it were accepted
    level: model.level.get(id) ?? null,
    atoms: model.atomsOf(id),
    kept: model.chosen.get(id) ?? null,
    forms: model.formsOf(id),
    description: model.descriptionOf(id),
    restedOnBy: by ? { words: by.words.length, named: by.named.length } : { words: 0, named: 0 },
  };
}

// -> what dropping words does to the others, comparing the model with them gone to the one as it is.
//   lose     [{ id, lost, now }]   rested on a dropped atom; now = the atoms it rests on after (null: no way left to say it)
//   longer   [{ id, from, to }]    still said, in more steps (a stand-in's paraphrase fills in for a dropped word, or another form takes over)
//   naming   [{ id, forms, left, kind }]  words with a paraphrase form that names a dropped word: those forms are to be rewritten
//                                  (left = forms that stay, kind = how the word is said now: paraphrase, clumsy)
export function restsOnLoss(before, after, dropped) {
  const gone = new Set(dropped);
  const lose = [];
  const longer = [];
  const naming = [];
  for (const id of before.ids) {
    if (gone.has(id)) continue;
    const all = before.formUses(id);
    const forms = all.filter((f) => f.uses.some((u) => gone.has(u))).map((f) => f.n);
    if (forms.length) naming.push({ id, forms, left: all.length - forms.length, kind: before.kindOf(id) });
    const was = before.atomsOf(id);
    if (!was) continue;
    const now = after.atomsOf(id);
    // atoms that went with the dropped words (a stand-in is not an atom lost: its paraphrase takes its place)
    const lost = was.filter((a) => after.absent(a));
    if (lost.length) lose.push({ id, lost, now });
    else if (now && after.level.get(id) > before.level.get(id)) longer.push({ id, from: before.level.get(id), to: after.level.get(id) });
  }
  const order = (a, b) => a.id.localeCompare(b.id);
  return { lose: lose.sort(order), longer: longer.sort(order), naming: naming.sort(order) };
}

// -- as text ---------------------------------------------------------------------------------

const list = (ids, term) => ids.map(term).join(', ');
const step = (n) => `${n} step${n === 1 ? '' : 's'}`;

// -> the lines of one word's card (without the leading spaces); `term(id)` gives the pinyin
export function renderRestsOn(line, term = (id) => id) {
  const out = [];
  const f = line.forms;
  if (line.kind === 'atom' || line.kind === 'unreviewed') {
    out.push(line.kind === 'atom' ? 'Rests on: itself, an atom.' : 'Rests on: itself, not reviewed yet (counted as an atom).');
  } else if (line.kind === 'paraphrase') {
    if (line.atoms) {
      out.push(`Rests on: ${list(line.atoms, term)}  (form ${line.kept}, ${step(line.level)} down${f.some((x) => x.level > line.level) ? ', the shortest form' : ''}).`);
      for (const x of f) if (x.n !== line.kept && x.atoms) out.push(`  form ${x.n} would rest on ${list(x.atoms, term)} (${step(x.level)}).`);
    } else out.push(`Rests on: nothing yet: its paraphrase goes round in a circle${f.some((x) => x.blockedBy.length) ? ` (it waits for ${list([...new Set(f.flatMap((x) => x.blockedBy))], term)})` : ''}.`);
  } else {
    out.push('Rests on: itself, an atom while its paraphrase is clumsy.');
    for (const x of f) if (x.atoms) out.push(`  accepted, form ${x.n} would rest on ${list(x.atoms, term)} (${step(x.level)}).`);
  }
  const d = line.description;
  if (d.names.length) {
    out.push(`Its description comes down to ${d.atoms.length ? list(d.atoms, term) : 'no atom'}${d.stuck.length ? `; ${list(d.stuck, term)} cannot be brought down` : ''}.`);
  }
  const by = line.restedOnBy;
  if (by.words || by.named) out.push(`Said from it: ${by.words} word${by.words === 1 ? '' : 's'} (fine paraphrases that come down to it); ${by.named} word${by.named === 1 ? '' : 's'} name it in a paraphrase form.`);
  return out;
}
