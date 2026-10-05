// Reads a Hao-shuo-de form from the composite dictionary
// (src/data/composites/) back into a Word Builder tree (see
// src/lib/word-builder.js), so a reader can open a dictionary word in the
// Word Builder and see the questions it answers.
//
// It reads the forms the Word Builder writes (zài-shuǐ-lǐ-de dòngwù) and the
// shorter forms the dictionary used before (shuǐ-lǐ-de dòngwù, with zài left
// out; mǎi dōngxi-de dìfāng, with a space inside a part).
// scripts/composites-builder-forms.js rewrites every description it can read
// into the Word Builder's own form, so the two agree. A form is left alone
// when it can't be read (a name, "X", a pattern the Word Builder has no
// question for, like bǎ … nòng-hǎo or bāng rén …), or when it can be read in
// more than one way that the Word Builder would write differently.

import { roleOf, isOffered, render, refSystem, POSITIONS, CHOICES, SELF_DIRECTED } from "./word-builder.js";
import { onlyWordRef } from "./word-refs.js";

// Stop reading a form that branches too much; it won't be one the builder wrote.
const MAX_STEPS = 20000;
const MAX_READINGS = 40;

// -> { ids, glued } for a form: its word ids, and for each one whether a
// hyphen (not a space) joins it to the word before; or null if any piece of
// the form isn't a dictionary word. A unit's words, joined by hyphens, read
// as the unit (dict.units, keyed by hanzi).
export function formWords(form, dict) {
  const pieces = form.trim().split(/([\s-]+)/);
  const ids = [];
  const glued = [];
  for (let k = 0; k < pieces.length; k += 2) {
    const id = onlyWordRef(pieces[k]);
    if (!id) return null;
    ids.push(id);
    glued.push(k > 0 && !/\s/.test(pieces[k - 1]));
  }
  return mergeUnits({ ids, glued }, dict);
}

// -> the words with each unit's run of hyphen-joined words read as the unit.
function mergeUnits(words, dict) {
  const units = Object.entries(dict?.units ?? {}).map(([key, u]) => ({ key, parts: formWords(u.form)?.ids ?? [] })).filter((u) => u.parts.length > 1);
  if (!units.length) return words;
  units.sort((a, b) => b.parts.length - a.parts.length);
  const ids = [];
  const glued = [];
  for (let i = 0; i < words.ids.length; ) {
    const u = units.find((u) => u.parts.every((p, k) => words.ids[i + k] === p && (k === 0 || words.glued[i + k])));
    ids.push(u ? u.key : words.ids[i]);
    glued.push(words.glued[i]);
    i += u ? u.parts.length : 1;
  }
  return { ids, glued };
}

const DEGREES = Object.entries(CHOICES.degree).sort((a, b) => b[1].length - a[1].length);
const PLACE_POSITIONS = Object.entries(POSITIONS).filter(([key]) => key !== "at");

function reader(dict, { ids: t, glued }) {
  let steps = 0;
  const step = () => {
    if (++steps > MAX_STEPS) throw new Error("too many ways to read this form");
  };
  const role = (i) => (i < t.length && isOffered(t[i]) ? roleOf(dict, t[i]) : null);
  const is = (i, id) => t[i] === id;
  const isRun = (i, ids) => ids.every((id, k) => is(i + k, id));
  const node = (id, role, answers = {}) => ({ id, role, answers });

  // A describing word, maybe with a degree before it: dà, hěn dà, bù hěn dà.
  function* adjective(i) {
    step();
    for (const [value, words] of DEGREES) {
      const j = i + words.length;
      if (isRun(i, words) && role(j) === "adj") {
        // duō and shǎo always take hěn, so it's part of the word, not a degree.
        const plain = value === "hen3" && (t[j] === "duo1" || t[j] === "shao3");
        yield { node: node(t[j], "adj", plain ? {} : { degree: { value } }), j: j + 1 };
      }
    }
    if (role(i) === "adj") yield { node: node(t[i], "adj"), j: i + 1 };
  }

  // A place: a noun, then where at it (shuǐ-lǐ), or the place itself (jiā).
  function* place(i, depth) {
    for (const n of noun(i, depth + 1)) {
      for (const [key, words] of PLACE_POSITIONS) {
        if (isRun(n.j, words)) yield { answer: { node: n.node, position: key }, j: n.j + words.length };
      }
      yield { answer: { node: n.node, position: "at" }, j: n.j };
    }
  }

  // A noun with its describing parts: [part-de]* [describing word] NOUN.
  function* noun(i, depth = 0) {
    step();
    if (depth > 5) return;
    if (role(i) === "noun") yield { node: node(t[i], "noun"), j: i + 1 };
    // A describing word right before the noun, with no -de (hěn duō dìfāng).
    for (const a of adjective(i)) {
      if (role(a.j) === "noun") yield { node: node(t[a.j], "noun", { kind: { node: a.node } }), j: a.j + 1 };
    }
    for (const part of nounPart(i, depth)) {
      if (!is(part.j, "de")) continue;
      for (const rest of noun(part.j + 1, depth + 1)) {
        if (rest.node.answers[part.key]) continue;
        yield { node: { ...rest.node, answers: { ...rest.node.answers, [part.key]: part.answer } }, j: rest.j };
      }
    }
  }

  // One describing part of a noun, before its -de. zài, cóng, dào, and qù
  // starting a part are joined to their place (zài-shuǐ-lǐ-de); "zuò zài X",
  // with a space, is a different pattern (sit at X).
  function* nounPart(i, depth) {
    const marker = (id) => is(i, id) && glued[i + 1];
    if (marker("cong2")) {
      for (const p of place(i + 1, depth)) if (is(p.j, "lai2")) yield { key: "from", answer: p.answer, j: p.j + 1 };
    }
    for (const via of ["dao4", "qu4"]) {
      if (marker(via)) for (const p of place(i + 1, depth)) yield { key: "to", answer: { ...p.answer, via }, j: p.j };
    }
    if (marker("zai4")) for (const p of place(i + 1, depth)) yield { key: "where", answer: p.answer, j: p.j };
    // shuǐ-lǐ-de: a place with zài left out.
    for (const p of place(i, depth)) if (p.answer.position !== "at") yield { key: "where", answer: p.answer, j: p.j };
    for (const a of adjective(i)) yield { key: "kind", answer: { node: a.node }, j: a.j };
    if (role(i) === "color") yield { key: "color", answer: { node: node(t[i], "color") }, j: i + 1 };
    for (const v of verb(i, depth)) yield { key: "does", answer: { node: v.node }, j: v.j };
  }

  // How a verb is done: kuài-kuài-de, hěn-kuài-de.
  function* way(i) {
    if (role(i) === "adj" && is(i + 1, t[i]) && is(i + 2, "de")) yield { node: node(t[i], "adj"), j: i + 3 };
    for (const a of adjective(i)) if (is(a.j, "de")) yield { node: a.node, j: a.j + 1 };
  }

  // A verb with its parts: [cóng X] [zài X] [yòng X] [way] [bǎ X] VERB …
  function* verb(i, depth = 0) {
    step();
    if (depth > 5) return;
    yield* beforeVerb(i, depth, {}, 0);
  }

  function* beforeVerb(i, depth, answers, stage) {
    if (stage < 1 && is(i, "cong2")) {
      for (const p of place(i + 1, depth)) yield* beforeVerb(p.j, depth, { ...answers, from: p.answer }, 1);
    }
    if (stage < 2 && is(i, "zai4")) {
      for (const p of place(i + 1, depth)) yield* beforeVerb(p.j, depth, { ...answers, where: p.answer }, 2);
    }
    if (stage < 3 && is(i, "yong4")) {
      for (const n of noun(i + 1, depth + 1)) yield* beforeVerb(n.j, depth, { ...answers, with: { node: n.node } }, 3);
    }
    if (stage < 4) {
      for (const w of way(i)) yield* beforeVerb(w.j, depth, { ...answers, way: { node: w.node } }, 4);
    }
    // bǎ + thing comes before a verb that then says where the thing goes.
    if (stage < 5 && is(i, "ba3")) {
      for (const n of noun(i + 1, depth + 1)) yield* verbAndAfter(n.j, depth, answers, { node: n.node });
    }
    yield* verbAndAfter(i, depth, answers, null);
  }

  // The verb itself, with a direction (fēi-shàng-qù; chū-qù for qù), then a
  // place it goes to (fēi-dào X; qù X) or the thing it's done to.
  function* verbAndAfter(i, depth, answers, moved) {
    const cores = [];
    for (const [value, [first, last]] of Object.entries(CHOICES.direction)) {
      if (is(i, first) && is(i + 1, last)) cores.push({ id: last, direction: value, j: i + 2 });
      if (role(i) === "verb" && !SELF_DIRECTED.has(t[i]) && is(i + 1, first) && is(i + 2, last)) {
        cores.push({ id: t[i], direction: value, j: i + 3 });
      }
    }
    if (role(i) === "verb") cores.push({ id: t[i], j: i + 1 });
    for (const core of cores) {
      const base = core.direction ? { ...answers, direction: { value: core.direction } } : answers;
      const make = (extra, j) => ({ node: node(core.id, "verb", { ...base, ...extra }), j });
      const thing = moved ? { what: moved } : {};
      // A describing word right after a verb is its result (nòng hǎo X, "fix
      // X"), which the Word Builder has no question for, not the start of a thing.
      const result = role(core.j) === "adj" && !is(core.j + 1, "de");
      if (!core.direction && !result) {
        if (SELF_DIRECTED.has(core.id)) {
          for (const p of place(core.j, depth)) yield make({ ...thing, to: p.answer }, p.j);
        } else {
          for (const via of ["dao4", "qu4"]) {
            if (is(core.j, via)) for (const p of place(core.j + 1, depth)) yield make({ ...thing, to: { ...p.answer, via } }, p.j);
          }
        }
      }
      if (moved) continue;
      yield make({}, core.j);
      if (!result) for (const n of noun(core.j, depth + 1)) yield make({ what: { node: n.node } }, n.j);
    }
  }

  return { noun, verb };
}

// Yields every whole reading of a form's words as a Word Builder tree.
function* wholeReadings(dict, words) {
  const { noun, verb } = reader(dict, words);
  for (const gen of [noun(0), verb(0)]) {
    for (const r of gen) if (r.j === words.ids.length) yield r.node;
  }
}

// -> every whole reading of a form as a Word Builder tree (at most a few dozen).
export function readForm(dict, form) {
  const words = formWords(form, dict);
  if (!words?.ids.length) return [];
  const trees = [];
  try {
    for (const tree of wholeReadings(dict, words)) {
      trees.push(tree);
      if (trees.length >= MAX_READINGS) break;
    }
  } catch {
    return [];
  }
  return trees;
}

// -> the tree the Word Builder writes exactly as `form` (with at least one
// question answered), or null. Stops at the first one, so it's quick enough
// to run over the whole dictionary in the browser.
export function treeOfForm(dict, form) {
  const words = formWords(form, dict);
  if (!words?.ids.length) return null;
  const sys = refSystem(dict);
  try {
    for (const tree of wholeReadings(dict, words)) {
      if (Object.keys(tree.answers).length && render(tree, sys) === form) return tree;
    }
  } catch {
    return null;
  }
  return null;
}

// Whether the new form keeps every pair of words the old form joined with a
// hyphen joined (with at most a -de or zài between): "zhīdào-hěn-duō-de gōngjù",
// a tool that knows a lot, must not become "zhīdào hěn-duō-de gōngjù", knowing
// many tools. Forms whose parts moved are not compared.
function keepsJoins(oldWords, newWords) {
  const extra = new Set(["de", "zai4"]);
  const map = [];
  let n = 0;
  for (let o = 0; o < oldWords.ids.length; o++) {
    while (n < newWords.ids.length && newWords.ids[n] !== oldWords.ids[o] && extra.has(newWords.ids[n])) n++;
    if (newWords.ids[n] !== oldWords.ids[o]) return true;
    map.push(n++);
  }
  for (let o = 1; o < map.length; o++) {
    if (!oldWords.glued[o]) continue;
    for (let k = map[o - 1] + 1; k <= map[o]; k++) if (!newWords.glued[k]) return false;
  }
  return true;
}

// -> { tree, form, same } for a dictionary form that describes its word with
// the Word Builder's questions, where `form` is how the Word Builder writes it
// and `same` says whether that's already the dictionary's form; or null.
// A noun with no -de at all is a word of its own (dà bùfen, "most";
// xiǎo-xīn, "careful"), not a description, so it's left alone.
export function builderForm(dict, form) {
  const words = formWords(form, dict);
  if (!words) return null;
  const sys = refSystem(dict);
  const readings = readForm(dict, form)
    .filter((tree) => Object.keys(tree.answers).length > 0)
    .filter((tree) => tree.role === "verb" || words.ids.includes("de"))
    .map((tree) => ({ tree, form: render(tree, sys) }));
  if (!readings.length) return null;
  const same = readings.find((r) => r.form === form);
  if (same) return { ...same, same: true };
  if (new Set(readings.map((r) => r.form)).size > 1) return null;
  const [reading] = readings;
  // A verb with a -de inside its thing (zhīdào hěn duō-de rén) may really be a
  // noun the Word Builder can't say ("the one who knows a lot"), so it's
  // only taken as written, never rewritten.
  if (reading.tree.role === "verb" && words.ids.includes("de")) return null;
  if (!keepsJoins(words, formWords(reading.form, dict))) return null;
  return { ...reading, same: false };
}

// Which composite dictionary entries the Word Builder may rewrite: the plain
// descriptions. "natural" ones are combinations Mandarin itself uses
// (jiā-lǐ-de rén, "family"), so they keep their own form.
export const REWRITTEN_FITS = new Set(["plain"]);

// The composite dictionary entries that describe their word with the Word
// Builder's questions: [{ entry, tree }], using an entry's first form that
// does, in the Word Builder's own form.
export function builderEntries(dict, entries) {
  const found = [];
  for (const entry of entries) {
    if (!entry.hsd || (entry.fit !== "plain" && entry.fit !== "natural")) continue;
    for (const form of entry.hsd.split(" / ")) {
      const tree = treeOfForm(dict, form);
      if (tree) {
        found.push({ entry, tree });
        break;
      }
    }
  }
  return found;
}
