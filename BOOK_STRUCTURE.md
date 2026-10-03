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

Each lesson folder holds a split-authoring set of files (see `src/lib/chapter-shape-types.ts` for the full explanation):

- **`shape.ts`** — hand-written `LessonShape` type (one property per block, JSDoc comment on each) plus the `shape` value populated with only the structural fields (`type`, `term`, `pinyin`, `tag`, nested `items`, ...). This is the single source of truth for comments and structure.
- **`en.ts` / `ru.ts` / `zh.ts`** — one object per language, typed as `PartialByKey<LessonShape>`, using the same keys as `shape.ts`. Each just adds that language's text (`en`/`ru`/`zh`, plus nested `tldr`/`necessity`/`title` where relevant) without repeating `shape.ts`'s comments. `ru.ts`/`zh.ts` are currently blank placeholders (`[]`) throughout — translation hasn't started yet.
- **`index.ts`** — `meta` (`{ id, type: "lesson" }`, no number) and `export default assembleChapter(shape, { en, ru, zh }, meta.id)`, zipping the four into the flat `Entry[]` array the app renders.

Every file types its object directly against `Shape`/`LessonShape` — there is no derived/generated type — so a typo in a block's `type`, a missing `term` on a vocab entry, or the wrong number of nested info items shows up as a type error in whichever file has it (`npm run typecheck`).

## Notes

- **The 21-lesson restructure (September 2026).** The book went from 16 lessons to the 21 that intro-3 lists: Time and Space, More Modifiers, and Relationships were split into several lessons, and Particles merged into Greetings and Feelings. See `BOOK_PLAN.md` for every decision. Phase 1 moved the old lessons' blocks into the new layout without rewriting them. Each block's JSDoc in `shape.ts` says `[from old LNN]`. Phase 2 rewrites the lessons one by one. Section 1 (lessons 1–6) is already in plain words.
- **Archives.** The 16-lesson layout is in `src/content/legacy/v2-16-lessons/`, and the 19-lesson curriculum before it is in `src/content/legacy/`. Both are excluded from the build, from `npm run typecheck`, and from the sidebar. They're reference material only.
- **Reading order.** A lesson page shows its blocks in the order `shape.ts` lists them (the view's `flow`, built in `src/lib/chapter-content.js`): each point, then its examples, with word cards just before the first point that uses them. Info boxes and exercises can sit anywhere; exercise numbers carry on across groups.
- **Vocabulary.** Every one of the 191 words (133 of the original dictionary words plus 58 approved additions; see BOOK_PLAN.md §4d) is introduced in exactly one lesson, as that lesson's `vocab` blocks. `BOOK_PLAN.md` §4b lists which lesson introduces which word.
- **Checks.** `npm run build` starts with `npm run check`, which runs every gate: lessons match intro-3, vocabulary, summaries, jargon, words used too early, every word used, and a grammar box in every lesson. The gates are strict for the finished lessons in `scripts/finished-lessons.js` and report the rest. See `BOOK_PLAN.md` §6.
- **Dictionary and Categorical Dictionary** each have English/Russian/Chinese as separate `.md` files (`dictionary.md`, `dictionary.rus.md`, `dictionary.zh.md`, and the `-categorical` equivalents); the alphabetical one is regenerated from `src/data/dictionary.json` by `scripts/generate-dictionary.js`.
- **Appendix: Sandhi, Minimality, Stories** and **Sentence Builder** are still on the older multi-language `.yaml` block schema (pre-`.ts` migration). Their `— Lesson N` citations point to the 21-lesson numbering.
- **Grammar Patterns Reference** (`appendix-grammar.ts`) is generated by `scripts/generate-grammar-overview.js` from every lesson's grammar box, in lesson order, on every build. Edit a lesson's grammar box, not this file. The old hand-written version is in `src/content/legacy/appendix-grammar.yaml`.
