// The meaning tree (BROWSER_TRANSLATOR_PLAN.md B1, B2): a sentence as the grammar rules that build it, in a form
// that code can check, build back into a sentence and read back word by word. The translator's LLM step is to
// answer in this form; the parser gives it for every book sentence, which is how the round trip is tested (B3,
// scripts/round-trip.js). Pure: runs in Node and in the browser.
//
//   const trees = makeTrees({ rules, glue, words, composites })   once per grammar: parser.rules, parser.grammar.glue
//   trees.slotsOf('svo#5')     -> [{ name: 'verb', sym: '@verb' }, { name: 'NP', sym: 'NP' }]
//   trees.fromParse(result, k) -> the k-th reading of a parse result (parser.parse) as a tree, null if there is none
//   trees.check(tree)          -> problems, one sentence each; [] when the tree is well formed
//   trees.build(tree)          -> { refs, tokens }: the sentence with word refs, and its words in order
//   trees.readback(tree)       -> the tree word by word in English, in brackets named by their pattern
//   trees.compositesOf(ids)    -> the composites a chain of words spells: ['shi2', 'jian1'] -> ['时间']
//   sameTree(a, b, { reading }) -> true when two trees are the same; reading: true leaves out the light syllables
//   spellingHabits(texts)      -> how the book writes each word (below); makeTrees({ ..., habits }) builds with them
//   spelledTokens(text)        -> a sentence's words as written: { kind, id?, text?, light?, bare?, joined? }
//
// A node is a rule and its slots; a leaf fills a word-class slot:
//
//   { rule: 'svo#5', slots: { verb: { word: 'chi1' }, NP: { rule: 'svo#4', slots: { noun: { word: 'fan4' } } } } }
//
//   { word: 'gao1' }                                  a word; light: true for a light syllable ({{light:..}}),
//                                                     sense: 'school' when the sentence names the sense
//   { composite: '时间', words: ['shi2', 'jian1'] }    a chain that spells a composite, read as one word
//                                                     (light: [1] lists the light syllables in it)
//   { quoted: 'Jack' }, { quoted: 'diàn', zi: true }  a name in quotes; "diàn"-zi
//   { open: 'X' }                                     X, Y or Z: a thing the sentence leaves open
//   { again: 'kan' }                                  a bare light syllable that repeats the word before (kàn-kan)
//
// The slots are the rule's right side without what the rule says by itself: a word it names (shi4, =bi3) and a
// comma (@comma, @colon) come back when the tree is built, so the tree holds only the choices. A slot is named after
// its symbol (NP; adjective for @adjective-zhe4-na4), and a second one of the same name gets a number (NP, NP2).
//
// The checks are the parser's own conditions, said as reasons: the rule exists, a nonterminal slot holds a rule that
// makes that nonterminal, a word fills a class it has, not a word the class leaves out, and never a word the grammar
// names (shì is only ever shì). A word in an @again slot must repeat the word before it; only parsing the built
// sentence checks that.
//
// The spelling is not in the tree; the build decides it. A composite's words are joined (dòng-wù), and so is what
// repeats a word (kàn-kan) or follows a name ("diàn"-zi). The rest follows the book's habits when they are given
// (spellingHabits): whether a word is joined to the one before (zhè-ge, wǒ-de), said light (dì-fang) or written as a
// bare "ge". A pair of words the book writes at least twice follows its own habit, any other the word's; without
// habits only de is joined. The first word has a capital, and so does the first after a colon (Tā wèn: Zhè …).

import { isNonterminal, classRef } from './earley.js';
import { buildLexicon, classesOf } from './lexicon.js';
import { sayExpected } from './parser.js';
import { wordRefRe } from '../word-refs.js';

// classes a rule writes by itself: a comma is punctuation, not a choice
const MARKS = { comma: ',', colon: ':' };

// without the book's habits: the words joined to the word before them (wǒ-de, dà-de)
const JOINED = new Set(['de']);

// the same pieces lexicon.js reads; a hyphen joins a word to the one before
const SPELLED = new RegExp(`${wordRefRe().source}|"[^"]*"|\\p{L}+|[-,;:]|[.!?…]+`, 'gu');

export function spelledTokens(text) {
  const src = String(text).normalize('NFC');
  const out = [];
  let prevEnd = 0;
  let hyphen = false;
  for (const m of src.matchAll(SPELLED)) {
    const gap = src.slice(prevEnd, m.index);
    prevEnd = m.index + m[0].length;
    const [tok] = m;
    if (tok === '-') {
      hyphen = gap === '' && out.length > 0 && out.at(-1).kind !== 'mark';
      continue;
    }
    const joined = hyphen && gap === '';
    hyphen = false;
    if (/^[.!?…]+$/.test(tok)) continue;
    if (/^[,;:]$/.test(tok)) out.push({ kind: 'mark', text: tok });
    else if (tok.startsWith('{{')) out.push({ kind: 'word', id: m[2], light: /^light$/i.test(m[1]), joined });
    else if (tok.toLowerCase() === 'ge') out.push({ kind: 'word', id: 'ge4', bare: true, joined });
    else out.push({ kind: 'text', text: tok, joined });
  }
  return out;
}

// -> { pairs, words }: for "zhe4 ge4" (a word after a word) and for each word alone, how often the book writes it
//    { n, joined, light, bare }; a word's `after` counts the times it follows a word, which is when it could be joined
export function spellingHabits(texts) {
  const pairs = new Map();
  const single = new Map();
  const count = (map, key, t, after) => {
    const h = map.get(key) ?? { n: 0, after: 0, joined: 0, light: 0, bare: 0 };
    h.n++;
    if (after) h.after++;
    if (t.joined) h.joined++;
    if (t.light) h.light++;
    if (t.bare) h.bare++;
    map.set(key, h);
  };
  for (const text of texts) {
    let prev = null;
    for (const t of spelledTokens(text)) {
      if (t.kind === 'word') {
        if (prev !== null) count(pairs, `${prev} ${t.id}`, t, true);
        count(single, t.id, t, prev !== null);
      }
      prev = t.kind === 'word' ? t.id : t.kind === 'text' && t.text.startsWith('"') ? '"' : null;
    }
  }
  return { pairs, words: single };
}

export function makeTrees({ rules, glue = new Set(), words, composites = [], habits = null }) {
  const byId = new Map(rules.map((r) => [r.id, r]));
  const { chains } = buildLexicon({ words, composites });

  // a rule's right side, each symbol with the slot it fills (none for a named word or a comma)
  const shapes = new Map();
  const shapeOf = (id) => {
    let s = shapes.get(id);
    if (!s) {
      const rule = byId.get(id);
      const seen = new Map();
      const parts = (rule?.rhs ?? []).map((sym) => {
        const cls = sym[0] === '@' ? classRef(sym).name : null;
        if (!isNonterminal(sym) && (!cls || MARKS[cls])) return { sym };
        const base = cls ?? sym;
        const n = (seen.get(base) ?? 0) + 1;
        seen.set(base, n);
        return { sym, slot: n === 1 ? base : `${base}${n}` };
      });
      s = { rule, parts };
      shapes.set(id, s);
    }
    return s;
  };
  const slotsOf = (id) => shapeOf(id).parts.filter((p) => p.slot).map((p) => ({ name: p.slot, sym: p.sym }));
  const compositesOf = (ids) => (chains.get(ids.join(' ')) ?? []).map((c) => c.zh);

  // -- from a parse ------------------------------------------------------------------------------------------------

  const leafOf = ({ edge, from, to }, tokens) => {
    const lights = (list) => list.flatMap((t, i) => (t.light ? [i] : []));
    if (edge.composite) {
      const toks = tokens.slice(from, to);
      const light = lights(toks);
      return { composite: edge.composite, words: toks.map((t) => t.id), ...(light.length ? { light } : {}) };
    }
    if (edge.id) {
      const t = tokens[from];
      return { word: edge.id, ...(t?.light ? { light: true } : {}), ...(t?.sense ? { sense: t.sense } : {}) };
    }
    if (edge.classes.has('quoted')) return { quoted: edge.term.slice(1, -1) };
    if (edge.classes.has('slot')) return { open: edge.term };
    if (edge.classes.has('again')) return { again: edge.term };
    const zi = /^"(.*)"-zi$/.exec(edge.term);
    if (zi) return { quoted: zi[1], zi: true };
    return { unknown: edge.term };
  };

  const fromParse = (result, k = 0) => {
    const top = result?.trees?.[k];
    if (!top || result.slim) return null;
    const node = (t) => {
      const { parts } = shapeOf(t.rule);
      const slots = {};
      t.children.forEach((c, i) => {
        const slot = parts[i]?.slot;
        if (slot) slots[slot] = c.children ? node(c) : leafOf(c, result.tokens);
      });
      return { rule: t.rule, slots };
    };
    return node(top);
  };

  // -- checks ------------------------------------------------------------------------------------------------------

  const classesOfLeaf = (v) => {
    if (v.word !== undefined) return words[v.word] ? new Set(classesOf(words[v.word])) : null;
    if (v.composite !== undefined) {
      const c = (chains.get((v.words ?? []).join(' ')) ?? []).find((x) => x.zh === v.composite);
      return c ? new Set(c.classes) : null;
    }
    if (v.quoted !== undefined) return new Set(v.zi ? ['noun'] : ['noun', 'quoted']);
    if (v.open !== undefined) return new Set(['noun', 'slot']);
    if (v.again !== undefined) return new Set(['again']);
    return null;
  };

  const say = (v) =>
    v.word !== undefined ? (words[v.word]?.term ?? v.word) : v.composite !== undefined ? v.composite : v.quoted !== undefined ? `"${v.quoted}"` : (v.open ?? v.again ?? '?');

  const leafProblem = (v, sym, at) => {
    if (!v || typeof v !== 'object' || 'rule' in v) return `${at} wants ${sayExpected(sym, words)}, got a whole ${v?.rule ? byId.get(v.rule)?.lhs ?? 'rule' : 'nothing'}`;
    if (v.word !== undefined && !words[v.word]) return `${at}: "${v.word}" is not a word`;
    if (v.word !== undefined && v.sense !== undefined && !words[v.word].senses?.[v.sense]) return `${at}: ${say(v)} has no sense "${v.sense}"`;
    const { name, except } = classRef(sym);
    if (v.word !== undefined && glue.has(v.word)) return `${at}: ${say(v)} is only used where a rule names it, never as ${sayExpected(sym, words)}`;
    if (v.word !== undefined && except.includes(v.word)) return `${at}: ${sayExpected(sym, words)} here leaves out ${say(v)}`;
    if (name === 'again' && v.word !== undefined) return null;
    const has = classesOfLeaf(v);
    if (!has) return `${at}: ${v.composite !== undefined ? `"${v.composite}" is not a composite spelled ${(v.words ?? []).join(' ')}` : 'not a word, a composite, a name or X'}`;
    if (!has.has(name)) return `${at} wants ${sayExpected(sym, words)}, got ${say(v)} (${[...has].join(', ') || 'no class'})`;
    return null;
  };

  const check = (tree, { start = 'Utt' } = {}) => {
    const problems = [];
    const visit = (t, want, at) => {
      if (!t || typeof t !== 'object' || !('rule' in t)) return problems.push(`${at} wants a ${want}, got ${t ? `the word ${say(t)}` : 'nothing'}`);
      const rule = byId.get(t.rule);
      if (!rule) return problems.push(`${at}: there is no rule "${t.rule}"`);
      if (rule.lhs !== want) problems.push(`${at} wants a ${want}, but ${t.rule} makes a ${rule.lhs}`);
      const slots = slotsOf(t.rule);
      const names = new Set(slots.map((s) => s.name));
      for (const k of Object.keys(t.slots ?? {})) if (!names.has(k)) problems.push(`${t.rule} has no slot "${k}" (its slots: ${[...names].join(', ') || 'none'})`);
      for (const { name, sym } of slots) {
        const v = t.slots?.[name];
        const where = `slot ${name} of ${t.rule}`;
        if (v === undefined) problems.push(`${where} is empty`);
        else if (isNonterminal(sym)) visit(v, sym, where);
        else {
          const p = leafProblem(v, sym, where);
          if (p) problems.push(p);
        }
      }
    };
    visit(tree, start, 'the sentence');
    return problems;
  };

  // -- build -------------------------------------------------------------------------------------------------------

  const leafTokens = (v) => {
    if (v.word !== undefined) return [{ id: v.word, ...(v.light ? { light: true } : {}), ...(v.sense ? { sense: v.sense } : {}) }];
    if (v.composite !== undefined) return v.words.map((id, i) => ({ id, joined: i > 0, ...(v.light?.includes(i) ? { light: true } : {}) }));
    if (v.quoted !== undefined) return v.zi ? [{ text: `"${v.quoted}"` }, { id: 'zi', joined: true }] : [{ text: `"${v.quoted}"` }];
    if (v.again !== undefined) return [{ text: v.again, joined: true }];
    return [{ text: v.open ?? v.unknown ?? '?' }];
  };

  const build = (tree, { end = '.' } = {}) => {
    const tokens = [];
    const visit = (t) => {
      const { parts } = shapeOf(t.rule);
      for (const { sym, slot } of parts) {
        if (slot) {
          const v = t.slots[slot];
          if (isNonterminal(sym)) visit(v);
          else tokens.push(...leafTokens(v));
        } else if (sym[0] === '@') tokens.push({ mark: MARKS[classRef(sym).name] });
        else tokens.push({ id: sym[0] === '=' ? sym.slice(1) : sym });
      }
    };
    visit(tree);
    const habitOf = (prev, id) => {
      const pair = prev !== null ? habits.pairs.get(`${prev} ${id}`) : null;
      return pair && pair.n >= 2 ? { ...pair, after: pair.n } : habits.words.get(id);
    };
    const most = (h, key, of = 'n') => Boolean(h && h[key] * 2 > h[of]);
    // joining words that spell a composite makes that composite a reading, so only the tree joins them (a composite leaf)
    const spellsNone = (run) => run.every((_, i) => i > run.length - 2 || !compositesOf(run.slice(i)).length);
    let refs = '';
    let prev = null; // the word before: its id, '"' after a name, null at the start and after a comma
    let run = []; // the ids of the words joined so far, ending with the word before
    let capital = true;
    for (const t of tokens) {
      if (t.mark) {
        refs += t.mark;
        prev = null;
        run = [];
        capital = t.mark === ':';
        continue;
      }
      const h = habits && t.id && !t.joined ? habitOf(prev, t.id) : null;
      const habitJoins = habits ? most(h, 'joined', 'after') : JOINED.has(t.id);
      const joined = prev !== null && (t.joined || (habitJoins && spellsNone([...run, t.id])));
      run = joined ? [...run, t.id ?? ''] : [t.id ?? ''];
      // a bare "ge" when the book writes it so more often than light and more often than as a ref
      const bare = t.id === 'ge4' && !t.light && Boolean(h) && h.bare > h.light && h.bare * 2 >= h.n - h.light;
      const light = !bare && Boolean(t.light || (!t.sense && most(h, 'light')));
      const kind = light ? (capital ? 'Light' : 'light') : capital ? 'Word' : 'word';
      const word = bare ? (capital ? 'Ge' : 'ge') : t.id ? `{{${kind}:${t.id}${t.sense ? `#${t.sense}` : ''}}}` : t.text;
      refs += refs === '' ? word : joined ? `-${word}` : ` ${word}`;
      prev = t.id ?? (t.text?.startsWith('"') ? '"' : null);
      capital = false;
    }
    return { refs: refs + end, tokens };
  };

  // -- readback ----------------------------------------------------------------------------------------------------

  const firstSense = (text) => String(text ?? '').replace(/\{\{[^}]*\}\}/g, '').split(/[,;:(]/)[0].trim();
  let english = null; // composite -> its English, made on the first readback
  const glossOf = (v) => {
    if (v.word !== undefined) return firstSense(words[v.word]?.definition?.eng) || say(v);
    if (v.composite !== undefined) {
      english ??= new Map(composites.map((c) => [c.zh, c.en]));
      return firstSense(english.get(v.composite)) || say(v);
    }
    return say(v);
  };

  // a node with a single slot and nothing of its own is its child (Utt -> S); a pattern's brackets are shown once
  const readback = (tree) => {
    const visit = (t, outer) => {
      const { rule, parts } = shapeOf(t.rule);
      const shown = parts.length > 1 && rule?.pattern !== outer;
      const items = parts.map(({ sym, slot }) => {
        if (!slot) return sym[0] === '@' ? MARKS[classRef(sym).name] : glossOf({ word: sym[0] === '=' ? sym.slice(1) : sym });
        const v = t.slots[slot];
        return isNonterminal(sym) ? visit(v, shown ? rule?.pattern : outer) : glossOf(v);
      });
      const text = items.join(' ').replace(/ ([,:])/g, '$1');
      return shown ? `[${rule?.pattern ?? t.rule}: ${text}]` : text;
    };
    return visit(tree, null);
  };

  return { slotsOf, fromParse, check, build, readback, compositesOf };
}

// the same tree written with its keys in any order; without the light syllables when only the reading counts
const canonical = (v, drop) =>
  Array.isArray(v)
    ? `[${v.map((x) => canonical(x, drop)).join(',')}]`
    : v && typeof v === 'object'
      ? `{${Object.keys(v).filter((k) => !drop.has(k)).sort().map((k) => `${JSON.stringify(k)}:${canonical(v[k], drop)}`).join(',')}}`
      : JSON.stringify(v);

const NOTHING = new Set();
const SPELLING = new Set(['light']);

// { reading: true } compares what the parser reads: a light syllable is how a word is said, not which word it is
export const sameTree = (a, b, { reading = false } = {}) => canonical(a, reading ? SPELLING : NOTHING) === canonical(b, reading ? SPELLING : NOTHING);
