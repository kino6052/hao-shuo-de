// Pure logic for the Word Builder page: a new word is a base word (a noun or
// a verb) plus describing parts, each one the answer to a question ("what
// kind?", "where?", "in what way?" ...). Any answer that is itself a word
// can be described further with its own questions, so a built word is a
// tree. Framework-free so it can be unit-tested on its own.
//
// Data shapes:
//   Node   = { id: wordId, role: Role, answers: { [questionKey]: Answer } }
//   Role   = 'noun' | 'verb' | 'adj' | 'color'
//   Answer = { node: Node, position?: PositionKey, via?: 'dao4' | 'qu4' }  (a word answer)
//          | { value: string }                                             (a choice answer)
//
// Space has three questions, each with its own word: where it is (zài),
// where it comes from (cóng), and where it goes (dào, reaching the place, or
// qù, heading toward it).
//
// The parts always come out in the usual Mandarin order, whatever order the
// reader answered in:
//   noun: cóng-X-lái-de, dào/qù-X-de, zài-X-de, does-de, kind-de, color-de + NOUN
//         zài-shuǐ-lǐ-de xiǎo-de huáng-sè-de dòng-wù
//   verb: cóng X, zài X, yòng + thing, way-de + VERB-direction / VERB-dào X + object
//         cóng jiā yòng jiǎo kuài-kuài-de qù     fēi-dào shuǐ-lǐ

import { wordRefRe, refTerm } from "./word-refs.js";

// Each question with the role its answer takes. `choice` questions are
// answered by picking one of CHOICES[key] instead of a word. The order is the
// order of the meaning list under the built word.
export const QUESTIONS = {
  noun: [
    { key: "from", answer: "noun" },
    { key: "to", answer: "noun" },
    { key: "where", answer: "noun" },
    { key: "does", answer: "verb" },
    { key: "kind", answer: "adj" },
    { key: "color", answer: "color" },
  ],
  verb: [
    { key: "from", answer: "noun" },
    { key: "where", answer: "noun" },
    { key: "with", answer: "noun" },
    { key: "way", answer: "adj" },
    { key: "direction", choice: true },
    { key: "to", answer: "noun" },
    { key: "what", answer: "noun" },
  ],
  adj: [{ key: "degree", choice: true }],
  color: [],
};

// The questions whose answer is a place.
export const PLACE_QUESTIONS = new Set(["where", "from", "to"]);

// The order the question buttons are offered in: the reader's natural
// first questions first, not the output order.
export const ASK_ORDER = {
  noun: ["kind", "color", "where", "from", "to", "does"],
  verb: ["way", "where", "from", "to", "with", "direction", "what"],
  adj: ["degree"],
  color: [],
};

// A verb takes either a direction (fēi-shàng-qù) or a place it goes to
// (fēi-dào shuǐ-lǐ), not both.
const EXCLUSIVE = { to: "direction", direction: "to" };

// Choice answers: value -> the dictionary words it adds.
export const CHOICES = {
  direction: {
    "shang4-lai2": ["shang4", "lai2"],
    "shang4-qu4": ["shang4", "qu4"],
    "xia4-lai2": ["xia4", "lai2"],
    "xia4-qu4": ["xia4", "qu4"],
    "jin4-lai2": ["jin4", "lai2"],
    "jin4-qu4": ["jin4", "qu4"],
    "chu1-lai2": ["chu1", "lai2"],
    "chu1-qu4": ["chu1", "qu4"],
    "hui2-lai2": ["hui2", "lai2"],
    "hui2-qu4": ["hui2", "qu4"],
    "qi3-lai2": ["qi3", "lai2"],
  },
  degree: {
    hen3: ["hen3"],
    zui4: ["zui4"],
    bu4: ["bu4"],
    "bu4-hen3": ["bu4", "hen3"],
  },
};

// lái and qù are already the "toward / away" half of a direction, so with
// them as the verb a direction is just the first half plus the verb itself
// (chū + qù = chū-qù, never qù-chū-qù), and a place follows them directly
// (qù jiā, never qù-dào jiā).
export const SELF_DIRECTED = new Set(["lai2", "qu4"]);

// -> the values a choice question offers this node.
export function choicesFor(node, key) {
  const all = Object.keys(CHOICES[key]);
  if (key !== "direction" || !SELF_DIRECTED.has(node.id)) return all;
  return all.filter((value) => CHOICES.direction[value].at(-1) === node.id);
}

// Where a place answer is, relative to its place: the place itself (jiā),
// in the box, on the box...
export const POSITIONS = {
  at: [],
  in: ["li3"],
  on: ["shang4"],
  under: ["xia4", "mian4"],
  front: ["qian2", "mian4"],
  behind: ["hou4", "mian4"],
  beside: ["pang2bian1"],
  near: ["fu4jin4"],
};
// Words that are a place already (zài jiā), unlike a thing (zài hézi-lǐ).
const PLACE_WORDS = new Set(["jia1", "地方"]);

// -> the position of a place answer: the reader's pick, or the place itself
// for a place word and "in" for anything else.
export function positionOf(answer) {
  return answer.position ?? (PLACE_WORDS.has(answer.node.id) ? "at" : "in");
}

// "To where?" is said with dào (reaching the place) or qù (heading toward it).
export const VIAS = ["dao4", "qu4"];
export const DEFAULT_VIA = "dao4";

// -> whether the answer to `key` on `node` takes dào or qù: only "to", and
// not when the verb is lái or qù itself.
export function takesVia(node, key) {
  return key === "to" && !(node.role === "verb" && SELF_DIRECTED.has(node.id));
}

// The broad words offered by the first question, "What is it?".
export const START_NOUNS = ["东西", "ren2", "动物", "zhi2wu4", "工具", "地方"];
export const START_VERBS = ["nong4", "qu4", "chi1", "kan4"];

// -- Which words can answer which question -----------------------------

const COLORS = new Set(["bai2", "hei1", "hong2", "huang2", "lan2"]);
// Grammar words and words the questions themselves add (zài, cóng, yòng, the
// place and direction words), so they're never offered as answers.
const NOT_OFFERED = new Set([
  "shi4", "zai4", "yong4", "wan2", "hen3", "zui4", "zhen1", "bie2",
  "li3", "shang4", "xia4", "hou4", "qian2", "mian4", "bian1",
  "pang2bian1", "zuo3", "you4bian1", "fu4jin4", "fang1", "dong1", "xi1", "se4", "zhe3",
  "dian3", "zhong3", "xian4zai4",
]);
// Words whose part of speech in the dictionary doesn't say what they are here.
const ROLE_OVERRIDES = { jue2de: "verb" };

// A unit is a ready-made word made of words: a composite with a role
// (src/lib/composite.ts), like dōng-xi, "thing". dict.units holds them, keyed
// by their hanzi, and the builder offers and writes them like one word.
const unitOf = (dict, id) => dict?.units?.[id];

// -> 'noun' | 'verb' | 'adj' | 'color' | null, from the first part of speech
// the dictionary lists for the word ("verb/noun" -> verb).
export function roleOf(dict, id) {
  if (unitOf(dict, id)) return unitOf(dict, id).role;
  if (COLORS.has(id)) return "color";
  if (ROLE_OVERRIDES[id]) return ROLE_OVERRIDES[id];
  const first = (dict.words[id]?.pos?.eng || "").split("/")[0].trim();
  if (first === "noun") return "noun";
  if (first === "verb") return "verb";
  if (first === "adjective") return "adj";
  return null;
}

// -> whether a word can be an answer (or the base word) at all.
export function isOffered(id) {
  return !NOT_OFFERED.has(id);
}

// -> every dictionary word id that can take `role` (the base-word search
// offers nouns and verbs together).
export function poolFor(dict, ...roles) {
  return [...Object.keys(dict.words), ...Object.keys(dict.units ?? {})].filter((id) => isOffered(id) && roles.includes(roleOf(dict, id)));
}

// -- Building the tree ------------------------------------------------------

export function newNode(dict, id, role = roleOf(dict, id)) {
  return { id, role, answers: {} };
}

// The questions a node can still be asked, in ASK_ORDER.
export function openQuestions(node) {
  return ASK_ORDER[node.role].filter(
    (key) => !node.answers[key] && !(node.role === "verb" && node.answers[EXCLUSIVE[key]]),
  );
}

export function questionOf(role, key) {
  return QUESTIONS[role].find((q) => q.key === key);
}

// -- Rendering ----------------------------------------------------------------

// A writing system: how words are spelled and how parts are joined. Pinyin
// joins the parts of one describing part with hyphens and the parts with
// spaces (the composite dictionary's style: shuǐ-lǐ-de dòng-wù); hanzi joins
// everything without spaces.
export function pinyinSystem(dict) {
  return {
    word: (id) => dict.words[id]?.term || unitOf(dict, id)?.term || id,
    wayDe: dict.words.de?.term || "de",
    hyphen: (parts) => parts.filter(Boolean).join("-"),
    space: (parts) => parts.filter(Boolean).join(" "),
    glue: (text) => text.replace(/ /g, "-"),
  };
}

// Word references ({{word:shui3}}), the way src/data/composites/ writes
// its forms, joined like pinyin.
export function refSystem(dict) {
  return {
    word: (id) => unitOf(dict, id)?.form ?? `{{word:${id}}}`,
    wayDe: "{{word:de}}",
    hyphen: (parts) => parts.filter(Boolean).join("-"),
    space: (parts) => parts.filter(Boolean).join(" "),
    glue: (text) => text.replace(/ /g, "-"),
  };
}

// `hanzi` is a Map of word id -> characters (src/lib/hanzi-map.js); a unit
// (from `dict`) writes its own hanzi.
export function hanziSystem(hanzi, dict) {
  return {
    word: (id) => hanzi.get(id) || unitOf(dict, id)?.hanzi || "",
    wayDe: "地",
    hyphen: (parts) => parts.filter(Boolean).join(""),
    space: (parts) => parts.filter(Boolean).join(""),
    glue: (text) => text,
  };
}

// One syllable or more, from the id's tone numbers (kuai4 = 1, qi2guai4 = 2).
function isOneSyllable(id) {
  return (id.match(/\d/g) || []).length <= 1;
}

function renderAdj(node, sys) {
  const degree = node.answers.degree?.value;
  if (degree) return sys.hyphen([...CHOICES.degree[degree].map(sys.word), sys.word(node.id)]);
  // duō and shǎo can't go before -de on their own (Lesson modifying-nouns).
  if (node.id === "duo1" || node.id === "shao3") return sys.hyphen([sys.word("hen3"), sys.word(node.id)]);
  return sys.word(node.id);
}

// A place and where at it: dà-de shuǐ-lǐ. Glued into one piece where it's
// part of a describing part (zài-dà-de-shuǐ-lǐ-de dòng-wù).
function renderPlace(answer, sys) {
  return sys.hyphen([render(answer.node, sys), ...POSITIONS[positionOf(answer)].map(sys.word)]);
}

// How a verb is done: a one-syllable describing word is said twice
// (kuài-kuài-de qù), a longer one or one with a degree is not (hěn-kuài-de).
function renderWay(node, sys) {
  const id = node.id;
  if (!node.answers.degree && isOneSyllable(id)) return sys.hyphen([sys.word(id), sys.word(id), sys.wayDe]);
  return sys.hyphen([renderAdj(node, sys), sys.wayDe]);
}

function renderNoun(node, sys) {
  const a = node.answers;
  const de = sys.word("de");
  const part = (parts) => sys.glue(sys.hyphen(parts));
  return sys.space([
    a.from && part([sys.word("cong2"), renderPlace(a.from, sys), sys.word("lai2"), de]),
    a.to && part([sys.word(a.to.via || DEFAULT_VIA), renderPlace(a.to, sys), de]),
    a.where && part([sys.word("zai4"), renderPlace(a.where, sys), de]),
    a.does && sys.hyphen([sys.glue(render(a.does.node, sys)), de]),
    a.kind && sys.hyphen([renderAdj(a.kind.node, sys), de]),
    a.color && sys.hyphen([sys.word(a.color.node.id), de]),
    sys.word(node.id),
  ]);
}

function renderVerb(node, sys) {
  const a = node.answers;
  const direction = a.direction ? CHOICES.direction[a.direction.value] : [];
  const selfDirected = SELF_DIRECTED.has(node.id);
  const core = selfDirected && direction.at(-1) === node.id ? direction : [node.id, ...direction];
  // A place it goes to follows the verb: fēi-dào shuǐ-lǐ, fēi-qù shuǐ-lǐ, qù jiā.
  const verb = a.to
    ? sys.space([sys.hyphen([...core, ...(selfDirected ? [] : [a.to.via || DEFAULT_VIA])].map(sys.word)), renderPlace(a.to, sys)])
    : sys.hyphen(core.map(sys.word));
  // With a place after the verb, the thing moves up front with bǎ
  // (Lesson becoming-and-making): bǎ jīn ná-dào jiā.
  const thing = a.what && render(a.what.node, sys);
  return sys.space([
    a.from && sys.space([sys.word("cong2"), renderPlace(a.from, sys)]),
    a.where && sys.space([sys.word("zai4"), renderPlace(a.where, sys)]),
    a.with && sys.space([sys.word("yong4"), render(a.with.node, sys)]),
    a.way && renderWay(a.way.node, sys),
    a.to && thing && sys.space([sys.word("ba3"), thing]),
    verb,
    !a.to && thing,
  ]);
}

// -> the built word, in the given writing system.
export function render(node, sys) {
  if (node.role === "noun") return renderNoun(node, sys);
  if (node.role === "verb") return renderVerb(node, sys);
  return renderAdj(node, sys);
}

// -- Literal meaning ------------------------------------------------------------

// The first sense of a word's definition: "animal, land mammal" -> "animal".
export function firstSense(dict, id, lang) {
  const w = dict.words[id] ?? unitOf(dict, id);
  const def = w?.definition?.[lang] || w?.definition?.eng || "";
  return def
    .replace(wordRefRe(), (_, kind, ref) => (dict.words[ref] ? refTerm(dict.words[ref].term, kind) : ref))
    .split(/[,;(]/)[0]
    .trim();
}

// -> { text, items: [{ question, text, items }] }: the base word's meaning,
// then each answered question with its answer's meaning, nested the same
// way as the word. `label(key)` names a question, a position ("pos_in"), a
// way of going ("via_dao4"), or a choice ("direction_shang4-lai2",
// "degree_hen3") in the reader's language.
export function glossTree(dict, node, lang, label) {
  const items = [];
  for (const { key } of QUESTIONS[node.role]) {
    const answer = node.answers[key];
    if (!answer) continue;
    if ("value" in answer) {
      items.push({ question: label(key), text: label(`${key}_${answer.value}`), items: [] });
      continue;
    }
    const sub = glossTree(dict, answer.node, lang, label);
    const notes = [];
    if (PLACE_QUESTIONS.has(key) && positionOf(answer) !== "at") notes.push(label(`pos_${positionOf(answer)}`));
    if (takesVia(node, key)) notes.push(label(`via_${answer.via || DEFAULT_VIA}`));
    items.push({ question: label(key), text: notes.length ? `${sub.text} (${notes.join(", ")})` : sub.text, items: sub.items });
  }
  return { text: firstSense(dict, node.id, lang), items };
}
