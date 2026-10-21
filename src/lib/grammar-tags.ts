/**
 * The tags a grammar pattern can carry (WRITING_PLAN.md W22). A tag says what the pattern
 * helps you say, in a few plain words, so a question can ask about it (AKINATOR_PLAN.md A1).
 * Every tag lives in this one list, so a typo in a pattern file is caught by `tagProblems`.
 *
 *   theme tags     what the pattern is for (TAGS below), written as `compare`
 *   category tags  which of the ten categories it helps say (K19), written as `cat:place`
 *   derived tags   not stored: `lesson:<lesson>` and `module:<lesson>/<module>` come from `taught`,
 *                  and `grammar:<item>` from `covers` (see `patternTags`)
 */

import type { Pattern } from "./grammar-pattern.ts";

/** Theme tag -> what it means, plain. */
export const TAGS: Record<string, string> = {
  basic: "who does what, or what is what",
  negation: "saying no or not",
  question: "asking a question",
  compare: "comparing things",
  when: "saying when, or in what order",
  where: "saying where, or which way",
  count: "counting and numbers",
  "how-much": "how much, how many, how strongly",
  "only-some": "only, some, part of",
  want: "wanting and loving",
  ability: "being able, knowing how, learning",
  maybe: "it might be so",
  future: "it will happen",
  done: "it is done, or has happened",
  ongoing: "it is happening now",
  change: "something becoming different",
  make: "making something so, or having someone do it",
  describe: "what something is like",
  owner: "whose it is, or which part",
  "all-also": "all, also, together, again",
  link: "joining two ideas: and, or, because, if, but, then",
  "with-for": "doing it with, for or to someone",
  command: "orders, requests, offers and suggestions",
  greet: "greetings and names",
  feeling: "feeling and thinking",
  speech: "saying, asking and what was said",
  doubling: "saying a word twice",
  spelling: "how words look in writing",
};

/** The ten categories (src/data/coverage/categories.ts keys), as tags. */
export const CATEGORY_TAGS = [
  "substance",
  "quantity",
  "quality",
  "relation",
  "place",
  "time",
  "position",
  "state",
  "action",
  "affection",
].map((k) => `cat:${k}`);

const KNOWN = new Set([...Object.keys(TAGS), ...CATEGORY_TAGS]);

/** Every tag of a pattern, the stored ones and the derived ones. */
export function patternTags(p: Pick<Pattern, "tags" | "taught" | "covers">): string[] {
  const out = [...p.tags];
  if (p.taught) {
    const [lesson] = p.taught.split("/");
    out.push(`lesson:${lesson}`, `module:${p.taught}`);
  }
  for (const c of p.covers) out.push(c.startsWith("grammar:") ? c : `coverage:${c}`);
  return out;
}

/** What is wrong with a pattern's stored tags (empty when fine). */
export function tagProblems(p: Pick<Pattern, "id" | "tags" | "taught">): string[] {
  const out: string[] = [];
  if (!Array.isArray(p.tags) || !p.tags.length) return [`${p.id}: no tags`];
  for (const t of p.tags) if (!KNOWN.has(t)) out.push(`${p.id}: unknown tag "${t}"`);
  if (new Set(p.tags).size !== p.tags.length) out.push(`${p.id}: a tag is listed twice`);
  if (!p.tags.some((t) => TAGS[t])) out.push(`${p.id}: no theme tag`);
  if (!p.tags.some((t) => t.startsWith("cat:"))) out.push(`${p.id}: no category tag (cat:...)`);
  if (!p.taught) out.push(`${p.id}: not taught in a lesson module, so it has no lesson tag`);
  return out;
}
