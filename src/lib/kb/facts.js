// The facts the reasoner works on (KB_PLAN.md K2): everything in src/data and
// the book, written as clingo facts. Pure -- it takes already-loaded data
// (the `source`, see scripts/kb-source.js) and returns text, so a test can
// feed it a small made-up dictionary. The KB reads fresh data on every run
// and never edits it.
//
// Constants are word ids (hao3, bi2zi). Composites are their hanzi, as
// strings. Anything else that is not an identifier (a lesson id, a category
// key) is a string too.
//
//   words        word(W). term(W,"hǎo"). hanzi(W,"好"). pos(W,adjective). necessity(W,5).
//                category(W,"leaf"). def_uses(V,W)   (V's text names W)
//                sense(W,"k"). sense_hanzi(W,"k","冬"). sense_alone(W,"k").
//                sense_compound(W,"k",N). sense_compound_uses(W,"k",N,V).
//   lessons      lesson("id",Number). card(W,"lesson","module").
//                card_sense(W,"k","lesson","module").
//                mention(W,"lesson","module",kind,Count)   kind: card example answer
//                exercise faq prose info head
//   composites   composite("飞机"). rank(C,488). en(C,"airplane"). cfit(C,natural).
//                cpos(C,noun). head_word(C,W). head_comp(C,C2).
//                form(C,F).  uses(C,F,Slot,W).  slot_sense(C,F,Slot,"k").
//                slot_light(C,F,Slot).  slot_sound(C,F,Slot,"ng").  slot_blank(C,F,Slot,x).
//                slot_chain(C,F,Slot,Chain).
//   coverage     item("atoms:I"). item_group(I,atoms). carries(W,I).
//                item_form(I,N). item_uses(I,N,W). item_lesson(I,"l"). item_taught(I,"l","m").
//   relations    antonym(A,B). synonym(A,B).
//                rel_phrase(antonym,W,N). rel_phrase_uses(antonym,W,N,V).
//   sentences    sent(Id). sent_kind(Id,kind). sent_at(Id,"lesson","module").
//                sent_of(Id,C). sent_uses(Id,W).
//                kind: lesson_example lesson_answer composite_example story phrase_book
//
// The sentence texts themselves are not facts; they come back in `sentences`.
//
// Two tiers, because clingo-wasm takes a program of about 1 MB at most (it is
// handed over on a 1 MB stack) and the real facts are 1.8 MB, mostly the text:
//   language  everything except sentences and mentions: `program`
//   text      sent*, mention: `textProgram(words)` writes just the sentences and
//             mentions that name those words, with only those words in sent_uses
//             (a what-if), `textProgram()` all of them. Both are written compactly with clingo pools:
//             sent_uses(12,(wo3;chi1)).  sent_kind((1..40;55),story).
// `lines` keeps every fact, one per line, for reading and `factsAbout`.

import { str, sym } from './clingo.js';
import { wordRefIds, wordRefRe, soleWordRef } from '../word-refs.js';
import { refSenses } from '../senses.js';
import { compositeHeads } from '../heads.js';

// A hanzi or toned-pinyin word's part of speech as clingo constants:
// "noun/measure word" -> noun, measure_word.
export const posClasses = (eng) =>
  String(eng ?? '')
    .toLowerCase()
    .split('/')
    .map((p) => p.trim().replace(/\s+/g, '_'))
    .filter(Boolean);

// The dictionary words a sentence uses: its word refs, and a bare "ge" (the
// counting word is written plainly in some examples) as ge4.
export function wordsOfText(text) {
  const words = wordRefIds(text);
  if (/(^|[\s-])ge(?![a-z])/.test(String(text).replace(/\{\{[^}]+\}\}/g, ' '))) words.push('ge4');
  return words;
}

const SLOT_RE = () => new RegExp(`${wordRefRe().source}|"[^"]*"|\\b[XY]\\b`, 'gu');

// -> the slots of a form, in order: { kind: 'word'|'sound'|'blank', ... }
// word:  { id, light, sense?, chain }, the chain being the hyphen-joined run
// the slot is in (shí-jiān is one chain, so 时 and 间 are read together).
export function formSlots(form, words) {
  const text = String(form);
  const senses = refSenses(text, words);
  const tokens = [...text.matchAll(SLOT_RE())];
  const out = [];
  let chain = 0;
  let refIndex = 0;
  let prevEnd = -1;
  for (const m of tokens) {
    // consecutive slots joined by "-" and nothing else are one chain
    chain = prevEnd >= 0 && text.slice(prevEnd, m.index) === '-' ? chain : chain + 1;
    prevEnd = m.index + m[0].length;
    if (m[0].startsWith('{{')) {
      const ref = /^\{\{(word|Word|light|Light):([a-z0-9_-]+)(?:#([a-z]+))?\}\}$/.exec(m[0]);
      const s = senses[refIndex++];
      out.push({ kind: 'word', id: ref[2], light: /^[lL]ight$/.test(ref[1]), sense: s?.sense, chain });
    } else if (m[0].startsWith('"')) out.push({ kind: 'sound', text: m[0].slice(1, -1), chain });
    else out.push({ kind: 'blank', text: m[0], chain });
  }
  return out;
}

// -> { program, lines, sentences, heads, counts } for a source (see the header).
export function buildFacts(source) {
  const lines = new Set();
  const lang = new Set();
  const add = (...l) => l.forEach((x) => (lines.add(x), lang.add(x)));
  const addText = (...l) => l.forEach((x) => lines.add(x));
  const sentences = [];
  const mentions = [];
  const words = source.words ?? {};
  const known = (id) => Object.hasOwn(words, id);

  // -- words ------------------------------------------------------------------
  for (const [id, w] of Object.entries(words)) {
    const W = sym(id);
    add(`word(${W}).`, `term(${W},${str(w.term)}).`, `hanzi(${W},${str(w.hanzi)}).`);
    if (w.necessity?.index) add(`necessity(${W},${w.necessity.index}).`);
    for (const p of posClasses(w.pos?.eng)) add(`pos(${W},${p}).`);
    for (const text of [w.definition?.eng, w.necessity?.eng]) {
      for (const v of new Set(wordRefIds(text ?? ''))) if (v !== id && known(v)) add(`def_uses(${W},${sym(v)}).`);
    }
    for (const [key, s] of Object.entries(w.senses ?? {})) {
      add(`sense(${W},${str(key)}).`, `sense_hanzi(${W},${str(key)},${str(s.hanzi)}).`);
      if (s.alone) add(`sense_alone(${W},${str(key)}).`);
      for (const v of new Set(wordRefIds(`${s.eng ?? ''} ${s.why?.eng ?? ''}`))) if (v !== id && known(v)) add(`def_uses(${W},${sym(v)}).`);
      (s.compounds ?? []).forEach((c, i) => {
        add(`sense_compound(${W},${str(key)},${i + 1}).`);
        for (const v of new Set(c.split(' '))) add(`sense_compound_uses(${W},${str(key)},${i + 1},${sym(v)}).`);
      });
    }
  }
  const walk = (c) => {
    for (const id of c.wordIds ?? []) if (known(id)) add(`category(${sym(id)},${str(c.key)}).`);
    (c.children ?? []).forEach(walk);
  };
  (source.categories ?? []).forEach(walk);

  // -- relations ----------------------------------------------------------------
  for (const kind of ['antonym', 'synonym']) {
    const r = source.maps?.[`${kind}s`];
    if (!r) continue;
    for (const [a, b] of r.pairs ?? []) add(`${kind}(${sym(a)},${sym(b)}).`);
    for (const [id, forms] of Object.entries(r.phrases ?? {})) {
      forms.forEach((f, i) => {
        add(`rel_phrase(${kind},${sym(id)},${i + 1}).`);
        for (const v of new Set(wordRefIds(f))) add(`rel_phrase_uses(${kind},${sym(id)},${i + 1},${sym(v)}).`);
      });
    }
  }

  // -- coverage -------------------------------------------------------------------
  for (const g of source.coverage ?? []) {
    for (const item of g.items) {
      const I = str(`${g.key}:${item.key}`);
      add(`item(${I}).`, `item_group(${I},${sym(g.key)}).`);
      for (const w of item.words ?? []) add(`carries(${sym(w)},${I}).`);
      (item.forms ?? []).forEach((f, i) => {
        add(`item_form(${I},${i + 1}).`);
        for (const v of new Set(wordRefIds(f))) add(`item_uses(${I},${i + 1},${sym(v)}).`);
      });
      if (item.lesson) add(`item_lesson(${I},${str(item.lesson)}).`);
      if (item.taught) {
        const [l, m] = item.taught.split('/');
        add(`item_taught(${I},${str(l)},${str(m ?? '')}).`);
      }
    }
  }

  // -- lessons, cards and mentions -----------------------------------------------------
  let sid = 0;
  const sentence = (s, ws) => {
    const id = ++sid;
    const used = [...new Set(ws)].filter(known);
    sentences.push({ id, ...s, words: used });
    addText(`sent(${id}).`, `sent_kind(${id},${s.kind}).`);
    if (s.lesson !== undefined) addText(`sent_at(${id},${str(s.lesson)},${str(s.module ?? '')}).`);
    if (s.composite) addText(`sent_of(${id},${str(s.composite)}).`);
    for (const w of used) addText(`sent_uses(${id},${sym(w)}).`);
  };
  const MENTION = { vocab: 'card', example: 'example', story: 'example', answer: 'answer', exercise: 'exercise', faq: 'faq', prose: 'prose', info: 'info', warning: 'info', title: 'head', summary: 'head' };
  for (const lesson of source.lessons ?? []) {
    add(`lesson(${str(lesson.id)},${lesson.number}).`);
    const seen = new Map();
    for (const e of lesson.entries) {
      const module = e.module ?? '';
      if (e.type === 'vocab') {
        const w = soleWordRef(e.term);
        if (w && known(w)) add(e.sense ? `card_sense(${sym(w)},${str(e.sense)},${str(lesson.id)},${str(module)}).` : `card(${sym(w)},${str(lesson.id)},${str(module)}).`);
      }
      const kind = MENTION[e.type];
      if (kind) {
        for (const w of new Set(e.refs ?? [])) {
          if (!known(w)) continue;
          const key = `${w}|${module}|${kind}`;
          seen.set(key, { w, module, kind, n: (seen.get(key)?.n ?? 0) + 1 });
        }
      }
      if ((e.type === 'example' || e.type === 'story') && e.pinyin) {
        sentence({ kind: 'lesson_example', lesson: lesson.id, module, key: e.key, pinyin: e.pinyin, hanzi: e.hanzi, en: e.en?.[0] }, wordsOfText(e.pinyin));
      } else if (e.type === 'answer') {
        const text = e.en?.[0];
        // an answer in Hao-shuo-de has word refs; one in English doesn't
        if (text && wordRefRe().test(text)) sentence({ kind: 'lesson_answer', lesson: lesson.id, module, key: e.key, pinyin: text }, wordsOfText(text));
      }
    }
    for (const { w, module, kind, n } of seen.values()) {
      mentions.push({ w, lesson: lesson.id, module, kind, n });
      addText(`mention(${sym(w)},${str(lesson.id)},${str(module)},${kind},${n}).`);
    }
  }
  for (const t of source.texts ?? []) {
    for (const e of t.entries) {
      if ((e.type === 'example' || e.type === 'story') && e.pinyin) {
        sentence({ kind: t.id === 'phrase-book' ? 'phrase_book' : 'story', lesson: t.id, module: '', key: e.key, pinyin: e.pinyin, hanzi: e.hanzi, en: e.en?.[0] }, wordsOfText(e.pinyin));
      }
    }
  }

  // -- composites --------------------------------------------------------------------------
  const composites = source.composites ?? [];
  const { heads } = compositeHeads({ words }, composites);
  for (const c of composites) {
    const C = str(c.zh);
    add(`composite(${C}).`, `rank(${C},${c.rank}).`, `en(${C},${str(c.en ?? '')}).`);
    if (c.fit) add(`cfit(${C},${c.fit}).`);
    if (c.pos) add(`cpos(${C},${c.pos}).`);
    const h = heads.get(c.zh);
    if (h) add(h.kind === 'word' ? `head_word(${C},${sym(h.id)}).` : `head_comp(${C},${str(h.zh)}).`);
    (c.hsd ? c.hsd.split(' / ') : []).forEach((form, fi) => {
      const F = fi + 1;
      add(`form(${C},${F}).`);
      formSlots(form, words).forEach((s, si) => {
        const S = si + 1;
        add(`slot_chain(${C},${F},${S},${s.chain}).`);
        if (s.kind === 'word') {
          add(`uses(${C},${F},${S},${sym(s.id)}).`);
          if (s.light) add(`slot_light(${C},${F},${S}).`);
          if (s.sense) add(`slot_sense(${C},${F},${S},${str(s.sense)}).`);
        } else if (s.kind === 'sound') add(`slot_sound(${C},${F},${S},${str(s.text)}).`);
        else add(`slot_blank(${C},${F},${S},${s.text.toLowerCase()}).`);
      });
    });
    for (const ex of c.examples ?? []) {
      sentence({ kind: 'composite_example', composite: c.zh, pinyin: ex.pinyin, hanzi: ex.hanzi, en: ex.en }, wordsOfText(ex.pinyin));
    }
  }

  const list = [...lines];
  return {
    program: [...lang].join('\n') + '\n',
    textProgram: (about) => textProgram(sentences, mentions, about),
    lines: list,
    sentences,
    heads,
    counts: {
      words: Object.keys(words).length,
      composites: composites.length,
      sentences: sentences.length,
      facts: list.length,
    },
  };
}

// -- the text tier as a compact program ----------------------------------------------------

// ids -> a clingo term for the set: 1..40 and 55 -> (1..40;55)
function idTerm(ids) {
  const sorted = [...ids].sort((a, b) => a - b);
  const parts = [];
  for (let i = 0; i < sorted.length; ) {
    let j = i;
    while (j + 1 < sorted.length && sorted[j + 1] === sorted[j] + 1) j++;
    parts.push(j - i >= 2 ? `${sorted[i]}..${sorted[j]}` : sorted.slice(i, j + 1).join(';'));
    i = j + 1;
  }
  return parts.length === 1 && !parts[0].includes(';') ? parts[0] : `(${parts.join(';')})`;
}

// about: a list of word ids, to write only the sentences and mentions that
// name one of them, and in sent_uses only those words; nothing: all of them.
function textProgram(sentences, mentions, about) {
  const want = about && new Set(about);
  const rows = want ? sentences.filter((s) => s.words.some((w) => want.has(w))) : sentences;
  const group = (key) => {
    const m = new Map();
    for (const s of rows) {
      const k = key(s);
      if (k !== null) m.set(k, [...(m.get(k) ?? []), s.id]);
    }
    return m;
  };
  const out = [];
  if (rows.length) out.push(`sent(${idTerm(rows.map((s) => s.id))}).`);
  for (const [kind, ids] of group((s) => s.kind)) out.push(`sent_kind(${idTerm(ids)},${kind}).`);
  for (const [at, ids] of group((s) => (s.lesson === undefined ? null : `${str(s.lesson)},${str(s.module ?? '')}`))) out.push(`sent_at(${idTerm(ids)},${at}).`);
  for (const [zh, ids] of group((s) => (s.composite ? str(s.composite) : null))) out.push(`sent_of(${idTerm(ids)},${zh}).`);
  for (const s of rows) {
    const used = want ? s.words.filter((w) => want.has(w)) : s.words;
    if (used.length) out.push(`sent_uses(${s.id},${used.length === 1 ? sym(used[0]) : `(${used.map(sym).join(';')})`}).`);
  }
  for (const m of mentions) if (!want || want.has(m.w)) out.push(`mention(${sym(m.w)},${str(m.lesson)},${str(m.module)},${m.kind},${m.n}).`);
  return out.join('\n') + '\n';
}

// -> the fact lines that name a constant (a word id, or a composite's hanzi).
export function factsAbout(lines, name) {
  const needle = /^[a-z][A-Za-z0-9_']*$/.test(name) ? name : str(name);
  const re = new RegExp(`[(,]${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[,)]`);
  return lines.filter((l) => re.test(l));
}

