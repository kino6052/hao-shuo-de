// Pure logic for the Sentence Builder page: part-of-speech classification,
// pinyin/gloss rendering of the recursive Subject/Predicate/Object tree, and
// URL (de)serialization. Kept framework-free so it's easy to reason about
// and unit-test independently of the Preact component tree.
//
// Data shapes:
//   NounPhrase = { wordId: string, modifiers: Modifier[] }
//   Modifier   = { type: 'adjective', wordId: string }
//              | { type: 'noun', phrase: NounPhrase }
//   Predicate  = { shape: 'verb', wordId, negated, adverbId: string|null }
//              | { shape: 'adjective', wordId, negated }
//              | { shape: 'noun', phrase: NounPhrase, negated }
//   State      = { subject: NounPhrase|null, predicate: Predicate|null, object: NounPhrase|null }
//
// Grammar rules encoded here (see src/content/appendix-grammar.yaml §4-5):
//   4.1 Subject + Verb + Object (fixed order)
//   4.2 Subject + shi4 + Noun (copula)
//   5.1 Subject + hen3 + Adjective (predicate adjective)
//   5.2 Modifier + -de + Noun (possession / modifier binding)
//   5.3 hen3 + Adjective before a Verb (adverbial)
//   5.4 Modifier chains stack left-to-right before one head noun

// Grammar-glue words the app inserts automatically -- never offered as a
// pick in any search pool.
export const GRAMMAR_WORD_IDS = new Set(["shi4", "hen3", "de", "bu4", "mei2"]);

function posOf(dict, wordId) {
  return dict.words[wordId]?.pos?.eng || "";
}

export function isNounPos(pos) {
  return /noun|pronoun/i.test(pos);
}

export function isAdjectivePos(pos) {
  return /adjective/i.test(pos);
}

// Priority for auto-detecting the predicate's grammatical shape from the
// word the user picked: a verb-capable word always yields the most general
// S-V-O shape; otherwise prefer the adjective predicate (hen3 + Adj) over
// treating it as an identity statement (shi4 + Noun).
export function predicateShape(pos) {
  if (/verb/i.test(pos)) return "verb";
  if (/adjective/i.test(pos)) return "adjective";
  if (/noun|pronoun/i.test(pos)) return "noun";
  return null;
}

export function nounPool(dict) {
  return Object.entries(dict.words)
    .filter(([id, w]) => !GRAMMAR_WORD_IDS.has(id) && isNounPos(w.pos.eng))
    .map(([id]) => id);
}

export function adjectivePool(dict) {
  return Object.entries(dict.words)
    .filter(([id, w]) => !GRAMMAR_WORD_IDS.has(id) && isAdjectivePos(w.pos.eng))
    .map(([id]) => id);
}

export function predicatePool(dict) {
  return Object.entries(dict.words)
    .filter(([id, w]) => !GRAMMAR_WORD_IDS.has(id) && predicateShape(w.pos.eng))
    .map(([id]) => id);
}

// A modifier can be either an adjective or another (possessive) noun -- the
// same auto-detect-from-the-word philosophy used for the predicate.
export function modifierPool(dict) {
  return Object.entries(dict.words)
    .filter(
      ([id, w]) =>
        !GRAMMAR_WORD_IDS.has(id) &&
        (isAdjectivePos(w.pos.eng) || isNounPos(w.pos.eng)),
    )
    .map(([id]) => id);
}

const DIACRITICS_RE = /[̀-ͯ]/g;

// Strips tone marks so a plain-ASCII search ("wo", "ni") matches
// diacritic-marked pinyin terms ("wǒ", "nǐ") -- every dictionary term
// carries a tone mark, so without this the search box couldn't find
// anything by pinyin at all.
function foldDiacritics(str) {
  return str.normalize("NFD").replace(DIACRITICS_RE, "");
}

const WORD_REF_RE = /\{\{(word|Word):([a-z0-9_-]+)\}\}/g;

// dictionary.json definitions sometimes carry unresolved {{word:id}} /
// {{Word:id}} cross-reference markup (resolved to real pinyin only when
// content is compiled through scripts/word-refs.js at build time -- a
// Node-only pipeline dictionary.json's own entries don't go through). This
// mirrors that resolution at runtime from the dictionary already loaded in
// the browser, so search and the picker never show raw template syntax.
export function resolveInlineRefs(dict, text) {
  if (!text) return text;
  return text.replace(WORD_REF_RE, (full, kind, id) => {
    const term = dict.words[id]?.term;
    if (!term) return full;
    return kind === "Word" ? term.charAt(0).toUpperCase() + term.slice(1) : term;
  });
}

export function searchPool(dict, pool, query, lang) {
  const q = foldDiacritics(query.trim().toLowerCase());
  const ids = q
    ? pool.filter((id) => {
        const w = dict.words[id];
        const haystack = foldDiacritics(
          [
            w.term,
            resolveInlineRefs(dict, w.definition?.eng),
            resolveInlineRefs(dict, w.definition?.rus),
            resolveInlineRefs(dict, w.definition?.zh),
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase(),
        );
        return haystack.includes(q);
      })
    : pool;
  return ids
    .slice()
    .sort((a, b) => dict.words[a].term.localeCompare(dict.words[b].term));
}

function newModifier(dict, wordId) {
  const pos = posOf(dict, wordId);
  if (isAdjectivePos(pos)) return { type: "adjective", wordId };
  return { type: "noun", phrase: { wordId, modifiers: [] } };
}

export function newNounPhrase(wordId) {
  return { wordId, modifiers: [] };
}

export function newPredicate(dict, wordId) {
  const shape = predicateShape(posOf(dict, wordId));
  if (shape === "verb") return { shape, wordId, negated: false, adverbId: null };
  if (shape === "adjective") return { shape, wordId, negated: false };
  if (shape === "noun") return { shape, phrase: newNounPhrase(wordId), negated: false };
  return null;
}

export function addModifier(dict, phrase, wordId) {
  return { ...phrase, modifiers: [...phrase.modifiers, newModifier(dict, wordId)] };
}

export function removeModifier(phrase, index) {
  return { ...phrase, modifiers: phrase.modifiers.filter((_, i) => i !== index) };
}

// -- Rendering --------------------------------------------------------

export function term(dict, id) {
  return dict.words[id]?.term || "";
}

export function renderModifier(dict, mod) {
  if (mod.type === "adjective") {
    return `${term(dict, "hen3")}-${term(dict, mod.wordId)}-${term(dict, "de")}`;
  }
  return `${renderNounPhrase(dict, mod.phrase)}-${term(dict, "de")}`;
}

export function renderNounPhrase(dict, phrase) {
  if (!phrase) return "";
  const parts = phrase.modifiers.map((m) => renderModifier(dict, m));
  parts.push(term(dict, phrase.wordId));
  return parts.join(" ");
}

export function renderPredicate(dict, pred) {
  if (!pred) return "";
  const neg = pred.negated
    ? term(dict, pred.wordId === "you3" ? "mei2" : "bu4")
    : null;

  if (pred.shape === "verb") {
    const parts = [];
    if (pred.adverbId) parts.push(term(dict, "hen3"), term(dict, pred.adverbId));
    if (neg) parts.push(neg);
    parts.push(term(dict, pred.wordId));
    return parts.join(" ");
  }
  if (pred.shape === "adjective") {
    const parts = [];
    if (neg) parts.push(neg);
    parts.push(term(dict, "hen3"), term(dict, pred.wordId));
    return parts.join(" ");
  }
  if (pred.shape === "noun") {
    const parts = [];
    if (neg) parts.push(neg);
    parts.push(term(dict, "shi4"), renderNounPhrase(dict, pred.phrase));
    return parts.join(" ");
  }
  return "";
}

export function renderSentence(dict, state) {
  const parts = [];
  if (state.subject) parts.push(renderNounPhrase(dict, state.subject));
  if (state.predicate) parts.push(renderPredicate(dict, state.predicate));
  if (state.predicate?.shape === "verb" && state.object) {
    parts.push(renderNounPhrase(dict, state.object));
  }
  return parts.join(" ");
}

// -- Literal gloss (rough back-translation, not a real translation) ---

const POSSESSIVE_OVERRIDES = { wo3: "my", ni3: "your", ta1: "their" };

function firstSense(dict, id) {
  const def = dict.words[id]?.definition?.eng || "";
  return def.split(",")[0].trim();
}

function glossModifier(dict, mod) {
  if (mod.type === "adjective") return `very ${firstSense(dict, mod.wordId)}`;
  const possessor = mod.phrase;
  if (!possessor.modifiers.length && POSSESSIVE_OVERRIDES[possessor.wordId]) {
    return POSSESSIVE_OVERRIDES[possessor.wordId];
  }
  return `${glossNounPhrase(dict, possessor)}'s`;
}

export function glossNounPhrase(dict, phrase) {
  if (!phrase) return "";
  const parts = phrase.modifiers.map((m) => glossModifier(dict, m));
  parts.push(firstSense(dict, phrase.wordId));
  return parts.join(" ");
}

export function glossSentence(dict, state) {
  const parts = [];
  if (state.subject) parts.push(glossNounPhrase(dict, state.subject));
  const pred = state.predicate;
  if (pred) {
    if (pred.shape === "verb") {
      if (pred.negated) parts.push("does not");
      if (pred.adverbId) parts.push("very", firstSense(dict, pred.adverbId));
      parts.push(firstSense(dict, pred.wordId));
      if (state.object) parts.push(glossNounPhrase(dict, state.object));
    } else if (pred.shape === "adjective") {
      parts.push("is", pred.negated ? "not" : null, "very", firstSense(dict, pred.wordId));
    } else if (pred.shape === "noun") {
      parts.push("is", pred.negated ? "not" : null, glossNounPhrase(dict, pred.phrase));
    }
  }
  return parts.filter(Boolean).join(" ");
}

// -- Generic immutable path-based state updates ------------------------
// A path is an array of object keys / array indices describing how to
// descend from the root state to a nested node (e.g.
// ['predicate', 'phrase', 'modifiers', 0, 'phrase']). This lets the UI
// update arbitrarily deep, arbitrarily shaped nesting without a bespoke
// reducer case per node type -- the recursion itself is the fractal part.

export function getAtPath(root, path) {
  return path.reduce((acc, key) => (acc == null ? acc : acc[key]), root);
}

export function setAtPath(root, path, value) {
  if (path.length === 0) return value;
  const [key, ...rest] = path;
  const container = root == null ? (typeof key === "number" ? [] : {}) : root;
  const clone = Array.isArray(container) ? container.slice() : { ...container };
  clone[key] = setAtPath(container[key], rest, value);
  return clone;
}

// -- URL persistence -----------------------------------------------------

const EMPTY_STATE = { subject: null, predicate: null, object: null };

// Callers store the result via URLSearchParams.set/get, which does its own
// percent-encoding on the way in and out -- encoding it here too would just
// double-encode and bloat the shareable link.
export function encodeState(state) {
  if (!state.subject && !state.predicate && !state.object) return null;
  return JSON.stringify(state);
}

export function decodeState(raw) {
  if (!raw) return EMPTY_STATE;
  try {
    const parsed = JSON.parse(raw);
    return { ...EMPTY_STATE, ...parsed };
  } catch {
    return EMPTY_STATE;
  }
}
