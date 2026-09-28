// Plain words only (BOOK_PLAN.md §1, rule 4).
//
// CORE_TERMS are the grammar words the book does use, because a learner
// really needs them (BOOK_PLAN.md D34). Where a term has a plain name, a
// lesson gives the plain name first, with the term once in brackets, and
// uses the term after that: "describing word (adjective)", "pointer
// (pronoun)", "counting word (measure word)". Use them only where they're
// necessary. "Question" and "word" are everyday words.
//
// JARGON is everything else from a grammar book: the lessons never use it.
//
// Shared by scripts/check-jargon.js (the whole-book jargon gate) and
// scripts/check-book.js (which holds summaries and TL;DR lines to it on
// every build). Each entry is a regex fragment; a plural "s" is matched
// automatically.

export const CORE_TERMS = [
  "noun",
  "verb",
  "subject",
  "object",
  "adverb",
  "adjective",
  "particle",
  "pronoun",
  "preposition",
  "measure word",
  "grammar",
  "sentence",
];

export const JARGON = [
  // word classes
  "conjunction",
  "determiner",
  "demonstrative",
  "quantifier",
  "numeral",
  "classifier",
  "coverb",
  "auxiliar\\w*",
  "modal",
  "intensifier",
  "interrogative",
  "directional",
  // sentence parts
  "predicate",
  "clause",
  "phrase",
  "complement",
  "copula",
  "copular",
  "topic-comment",
  // forms and endings
  "tense",
  "aspect",
  "perfective",
  "plural\\w*",
  "singular",
  "suffix",
  "prefix",
  "morpheme",
  "ordinal",
  "imperative",
  "negat\\w*",
  "marker",
  "reduplicat\\w*",
  "nominali[sz]\\w*",
  "inflect\\w*",
  "conjugat\\w*",
  // talk about grammar itself
  "grammatical\\w*",
  "ungrammatical",
  "syntax",
  "syntactic\\w*",
  "semantic\\w*",
  "lexical\\w*",
  "morpholog\\w*",
  "construction",
  "compositional\\w*",
  "causative",
  "transitive",
  "intransitive",
];

const termsRe = (terms) => new RegExp(`\\b(${terms.join("|")})s?\\b`, "gi");
export const JARGON_RE = termsRe(JARGON);
const CORE_RE = termsRe(CORE_TERMS);

// Text as a reader sees it: {{word:..}} refs stand in for plain words, and
// HTML tags (with their attributes) aren't prose.
export function plainText(text) {
  return text
    .replace(/\{\{(?:word|Word):[a-z0-9-]+\}\}/g, "w")
    .replace(/\{\{dictionaryCount\}\}/g, "0")
    .replace(/<[^>]*>/g, " ");
}

function find(re, text) {
  const plain = plainText(text);
  return [...plain.matchAll(re)].map((m) => {
    const start = Math.max(0, m.index - 40);
    const end = Math.min(plain.length, m.index + m[0].length + 40);
    const snippet = `${start > 0 ? "…" : ""}${plain.slice(start, end).replace(/\s+/g, " ").trim()}${end < plain.length ? "…" : ""}`;
    return { term: m[1].toLowerCase(), snippet };
  });
}

// -> [{ term, snippet }] for every jargon word in `text`.
export const findJargon = (text) => find(JARGON_RE, text);

// -> [{ term, snippet }] for every core term in `text` (allowed, but keep them few).
export const findCoreTerms = (text) => find(CORE_RE, text);
