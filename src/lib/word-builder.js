// Pure logic for the Word Builder page: a new word is a base word (a noun or
// a verb) plus describing parts, each one the answer to a question ("what
// kind?", "where?", "in what way?" ...). Any answer that is itself a word
// can be described further with its own questions, so a built word is a
// tree. Framework-free so it can be unit-tested on its own.
//
// Data shapes:
//   Node   = { id: wordId, role: Role, answers: { [questionKey]: Answer } }
//   Role   = 'noun' | 'verb' | 'adj' | 'color'
//   Answer = { node: Node, position?: PositionKey }   (a word answer)
//          | { value: string }                         (a choice answer)
//
// The parts always come out in the usual Mandarin order, whatever order the
// reader answered in (QUESTIONS[role] lists them in that order):
//   noun: where-de, does-de, kind-de, color-de + NOUN
//         shuǐ-lǐ-de xiǎo-de huángsè-de dòngwù
//   verb: zài + place, yòng + thing, way-de + VERB-direction + object
//         zài shuǐ-lǐ yòng jiǎo kuài-kuài-de qù

// Each question, in output order, with the role its answer takes. `choice`
// questions are answered by picking one of CHOICES[key] instead of a word.
export const QUESTIONS = {
  noun: [
    { key: "where", answer: "noun" },
    { key: "does", answer: "verb" },
    { key: "kind", answer: "adj" },
    { key: "color", answer: "color" },
  ],
  verb: [
    { key: "where", answer: "noun" },
    { key: "with", answer: "noun" },
    { key: "way", answer: "adj" },
    { key: "direction", choice: true },
    { key: "what", answer: "noun" },
  ],
  adj: [{ key: "degree", choice: true }],
  color: [],
};

// The order the question buttons are offered in: the reader's natural
// first questions first, not the output order.
export const ASK_ORDER = {
  noun: ["kind", "color", "where", "does"],
  verb: ["way", "where", "with", "direction", "what"],
  adj: ["degree"],
  color: [],
};

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
// them as the verb a direction is just the first half plus the verb itself:
// chū + qù = chū-qù ("go out"), never qù-chū-qù.
const SELF_DIRECTED = new Set(["lai2", "qu4"]);

// -> the values a choice question offers this node.
export function choicesFor(node, key) {
  const all = Object.keys(CHOICES[key]);
  if (key !== "direction" || !SELF_DIRECTED.has(node.id)) return all;
  return all.filter((value) => CHOICES.direction[value].at(-1) === node.id);
}

// Where a "where?" answer is, relative to its place: in the box, on the box...
export const POSITIONS = {
  in: ["li3"],
  on: ["shang4"],
  under: ["xia4", "mian4"],
  front: ["qian2", "mian4"],
  behind: ["hou4", "mian4"],
  beside: ["pang2bian1"],
  near: ["fu4jin4"],
};
export const DEFAULT_POSITION = "in";

// The broad words offered by the first question, "What is it?".
export const START_NOUNS = ["dong1xi", "ren2", "dong4wu4", "zhi2wu4", "gong1ju4", "di4fang1"];
export const START_VERBS = ["nong4", "qu4", "chi1", "kan4"];

// -- Which words can answer which question -----------------------------

const COLORS = new Set(["bai2se4", "hei1se4", "hong2se4", "huang2se4", "lan2se4"]);
// Grammar words and words the questions themselves add (zài, yòng, the
// place and direction words), so they're never offered as answers.
const NOT_OFFERED = new Set([
  "shi4", "zai4", "yong4", "wan2", "hen3", "zui4", "zhen1", "bie2de",
  "li3", "shang4", "xia4", "hou4", "qian2", "pang2", "mian4", "bian1",
  "pang2bian1", "zuo3bian1", "you4bian1", "fu4jin4",
  "dian3", "zhong3", "xian4zai4",
]);
// Words whose part of speech in the dictionary doesn't say what they are here.
const ROLE_OVERRIDES = { jue2de: "verb", fang1fa3: "noun" };

// -> 'noun' | 'verb' | 'adj' | 'color' | null, from the first part of speech
// the dictionary lists for the word ("verb/noun" -> verb).
export function roleOf(dict, id) {
  if (COLORS.has(id)) return "color";
  if (ROLE_OVERRIDES[id]) return ROLE_OVERRIDES[id];
  const first = (dict.words[id]?.pos?.eng || "").split("/")[0].trim();
  if (first === "noun") return "noun";
  if (first === "verb") return "verb";
  if (first === "adjective") return "adj";
  return null;
}

// -> every dictionary word id that can take `role` (the base-word search
// offers nouns and verbs together).
export function poolFor(dict, ...roles) {
  return Object.keys(dict.words).filter((id) => !NOT_OFFERED.has(id) && roles.includes(roleOf(dict, id)));
}

// -- Building the tree ------------------------------------------------------

export function newNode(dict, id, role = roleOf(dict, id)) {
  return { id, role, answers: {} };
}

// The questions a node can still be asked, in ASK_ORDER.
export function openQuestions(node) {
  return ASK_ORDER[node.role].filter((key) => !node.answers[key]);
}

export function questionOf(role, key) {
  return QUESTIONS[role].find((q) => q.key === key);
}

// -- Rendering ----------------------------------------------------------------

// A writing system: how words are spelled and how parts are joined. Pinyin
// joins the parts of one describing part with hyphens and the parts with
// spaces (the composite dictionary's style: shuǐ-lǐ-de dòngwù); hanzi joins
// everything without spaces.
export function pinyinSystem(dict) {
  return {
    word: (id) => dict.words[id]?.term || id,
    wayDe: dict.words.de?.term || "de",
    hyphen: (parts) => parts.filter(Boolean).join("-"),
    space: (parts) => parts.filter(Boolean).join(" "),
    glue: (text) => text.replace(/ /g, "-"),
  };
}

// `hanzi` is a Map of word id -> characters (from the lessons' word cards).
export function hanziSystem(hanzi) {
  return {
    word: (id) => hanzi.get(id) || "",
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

function renderPlace(answer, sys) {
  const position = POSITIONS[answer.position || DEFAULT_POSITION];
  return sys.hyphen([sys.glue(render(answer.node, sys)), ...position.map(sys.word)]);
}

// How a verb is done: a one-syllable describing word is said twice
// (kuài-kuài-de qù), a longer one or one with a degree is not (hěn-kuài-de).
function renderWay(node, sys) {
  const id = node.id;
  if (!node.answers.degree && isOneSyllable(id)) return sys.hyphen([sys.word(id), sys.word(id), sys.wayDe]);
  return sys.hyphen([renderAdj(node, sys), sys.wayDe]);
}

// -> the built word, in the given writing system.
export function render(node, sys) {
  const a = node.answers;
  const de = sys.word("de");
  if (node.role === "noun") {
    return sys.space([
      a.where && sys.hyphen([renderPlace(a.where, sys), de]),
      a.does && sys.hyphen([sys.glue(render(a.does.node, sys)), de]),
      a.kind && sys.hyphen([renderAdj(a.kind.node, sys), de]),
      a.color && sys.hyphen([sys.word(a.color.node.id), de]),
      sys.word(node.id),
    ]);
  }
  if (node.role === "verb") {
    const direction = a.direction ? CHOICES.direction[a.direction.value] : [];
    const core = SELF_DIRECTED.has(node.id) && direction.at(-1) === node.id ? direction : [node.id, ...direction];
    return sys.space([
      a.where && sys.space([sys.word("zai4"), renderPlace(a.where, sys)]),
      a.with && sys.space([sys.word("yong4"), render(a.with.node, sys)]),
      a.way && renderWay(a.way.node, sys),
      sys.hyphen(core.map(sys.word)),
      a.what && render(a.what.node, sys),
    ]);
  }
  return renderAdj(node, sys);
}

// -- Literal meaning ------------------------------------------------------------

const WORD_REF_RE = /\{\{(?:word|Word):([a-z0-9-]+)\}\}/g;

// The first sense of a word's definition: "animal, land mammal" -> "animal".
export function firstSense(dict, id, lang) {
  const w = dict.words[id];
  const def = w?.definition?.[lang] || w?.definition?.eng || "";
  return def
    .replace(WORD_REF_RE, (_, ref) => dict.words[ref]?.term || ref)
    .split(/[,;(]/)[0]
    .trim();
}

// -> { text, items: [{ question, text, items }] }: the base word's meaning,
// then each answered question with its answer's meaning, nested the same
// way as the word. `label(key)` names a question, a position ("pos_in"), or
// a choice ("direction_shang4-lai2", "degree_hen3") in the reader's language.
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
    const where = key === "where" ? ` (${label(`pos_${answer.position || DEFAULT_POSITION}`)})` : "";
    items.push({ question: label(key), text: sub.text + where, items: sub.items });
  }
  return { text: firstSense(dict, node.id, lang), items };
}
