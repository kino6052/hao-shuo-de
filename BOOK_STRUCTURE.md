# Book Structure

Table of contents for Hǎo-shuō-de, in reading order. Source files live under `src/content/`. **`src/content/book.js` is the one place that sets the structure**: the three sections and the lesson ids in reading order. A lesson's number is its position there; its folder is `src/content/lessons/<id>/`, and its id is also its URL. After the lessons, `book.js` also lists every other chapter by id in four groups (`BACK_MATTER`): content, reference, tools, and misc. The sidebar and intro-3's table of contents are built from `book.js`, and text points at a lesson with `{{lesson:<id>}}`, which shows its current number. To move a lesson, move its id in `book.js`. `npm run check-book` fails the build if `book.js` and the lesson folders drift apart. `BOOK_PLAN.md` holds the plan, the tone guide, and the checklist for the restructure.

```
Hǎo-shuō-de
├── Introduction
│   ├── 1. Welcome to Hao-shuo-de!                    intro-1.ts
│   ├── 2. How small can a language be?               intro-2.ts
│   └── 3. Simplified Chinese, Not Invented Chinese    intro-3.ts
│
├── Section 1 — Sounds, Words, and Simple Sentences
│   ├── 1. Sounds and Symbols                          lessons/sounds-and-symbols/
│   ├── 2. Words and Sentences                         lessons/words-and-sentences/
│   ├── 3. Modifying Nouns                             lessons/modifying-nouns/
│   ├── 4. Pointing at People and Things               lessons/pointing/
│   ├── 5. Verbs 1 — Who does what                     lessons/who-does-what/
│   └── 6. Questions and Answers                       lessons/questions/
│
├── Section 2 — Modifying Words and Meaning
│   ├── 7.  Pre-Verbs                                  lessons/pre-verbs/
│   ├── 8.  Time 1 — When it happens                   lessons/when-it-happens/
│   ├── 9.  Time 2 — Around an action                  lessons/around-an-action/
│   ├── 10. Space 1 — Where it is                      lessons/where-it-is/
│   ├── 11. Space 2 — Moving                           lessons/moving/
│   ├── 12. Modifiers 1 — How much                     lessons/how-much/
│   ├── 13. Modifiers 2 — Comparing                    lessons/comparing/
│   ├── 14. Modifiers 3 — Also and all                 lessons/also-and-all/
│   ├── 15. Modifiers 4 — Becoming and making          lessons/becoming-and-making/
│   └── 16. Verbs 2 — Direction and result             lessons/direction-and-result/
│
├── Section 3 — Special Words and Concepts
│   ├── 17. Numbers                                    lessons/numbers/
│   ├── 18. Colors                                     lessons/colors/
│   ├── 19. Changing the Role of a Word                lessons/roles-of-a-word/
│   ├── 20. Relationships 1 — Inside a sentence        lessons/inside-a-sentence/
│   ├── 21. Relationships 2 — Linking sentences        lessons/linking-sentences/
│   ├── 22. Greetings and Feelings                     lessons/greetings-and-feelings/
│   ├── 23. Doubling Words                             lessons/doubling-words/
│   └── 24. Everyday Patterns                          lessons/everyday-patterns/
│
├── Content — things to read
│   ├── Proverbs                                       proverbs.md
│   └── Ten Short Stories                              appendix-stories.yaml
│
├── Reference — how the language works
│   ├── The Pinyin System                              appendix-pinyin.md
│   ├── Tone Sandhi Reference                          appendix-sandhi.yaml
│   └── Grammar Patterns Reference                     appendix-grammar.ts (generated)
│
├── Tools — dictionaries and builders
│   ├── Dictionary (alphabetical)                      dictionary.md
│   ├── Categorical Dictionary                         dictionary-categorical.md
│   ├── Composite Dictionary                           dictionary-composites.md
│   └── Sentence Builder                               sentence-builder.yaml
│
└── Misc — extra articles
    ├── Why Minimality Works                           appendix-minimality.yaml
    └── Hao-shuo-de is not Toki Pona                   appendix-toki-pona.yaml
```

## Lesson file structure

A lesson is assembled from modules, one file per point (see `src/lib/lesson.ts` for the full explanation):

- **`<module>.ts`** — one teaching point, written with `lessonModule({ ... })`: its `words` (word cards: term, hanzi, gloss), `prose` (the explanation, with `tldr` and `necessity`), `info` (the point's pattern in one line, or a short box; `kind: "note"` for an aside), `examples`, `exercises` (each with its `answer` and `hanzi`), and an optional `faq`. Every language sits next to the English it translates; a missing `ru` or `zh` means "not translated yet". One sentence can be a plain string.
- **`index.ts`** — `meta` (`{ id, type: "lesson" }`, no number) and `export default lesson(meta.id, { title, summary, modules: [...] })`, which turns the modules, in the order listed, into the flat `Entry[]` array the app renders. Each entry carries `module` and `key` (`"through.example2"`), which the gates use to say where a problem is.

To move a point to another lesson, move its file and its line in the two `index.ts` files. `npm run typecheck` checks every module against the types in `src/lib/lesson.ts` (a module without its info block or exercises is a type error).

## Notes

- **The 21-lesson restructure (September 2026).** The book went from 16 lessons to the 21 that intro-3 lists: Time and Space, More Modifiers, and Relationships were split into several lessons, and Particles merged into Greetings and Feelings. See `BOOK_PLAN.md` for every decision. Phase 1 moved the old lessons' blocks into the new layout without rewriting them. Each block's JSDoc in `shape.ts` says `[from old LNN]`. Phase 2 rewrites the lessons one by one. Section 1 (lessons 1–6) is already in plain words.
- **Archives.** The 16-lesson layout is in `src/content/legacy/v2-16-lessons/`, and the 19-lesson curriculum before it is in `src/content/legacy/`. Both are excluded from the build, from `npm run typecheck`, and from the sidebar. They're reference material only.
- **Reading order.** A lesson page shows its modules in the order `index.ts` lists them (the view's `flow`, built in `src/lib/chapter-content.js`), each as word cards, explanation, info block, examples, exercises, then its FAQ. Exercise numbers carry on across modules.
- **Vocabulary.** Every one of the 200 words (122 of the original dictionary words plus 78 approved additions; see BOOK_PLAN.md §4d) is introduced in exactly one lesson, as that lesson's `vocab` blocks. `BOOK_PLAN.md` §4b lists which lesson introduces which word.
- **Checks.** `npm run build` starts with `npm run check`, which runs every gate: lessons match intro-3, vocabulary (every word in a category, with a necessity and its opposites), what the language must be able to say (`src/data/coverage.json`: the atoms of meaning, Aristotle's categories, the core grammar), summaries, jargon, words used too early, every word used, an info block and exercises in every module. The gates are strict for the finished lessons in `scripts/finished-lessons.js` and report the rest. See `BOOK_PLAN.md` §6.
- **Dictionary and Categorical Dictionary** each have English/Russian/Chinese as separate `.md` files (`dictionary.md`, `dictionary.rus.md`, `dictionary.zh.md`, and the `-categorical` equivalents); the alphabetical one is regenerated from `src/data/dictionary.json` by `scripts/generate-dictionary.js`.
- **Appendix: Sandhi, Minimality, Stories** and **Sentence Builder** are still on the older multi-language `.yaml` block schema (pre-`.ts` migration). Their `— Lesson N` citations point to the 21-lesson numbering.
- **Grammar Patterns Reference** (`appendix-grammar.ts`) is generated by `scripts/generate-grammar-overview.js` from the modules' info lines (one box per lesson, in lesson order) on every build. Edit a module's info block, not this file. The old hand-written version is in `src/content/legacy/appendix-grammar.yaml`.
