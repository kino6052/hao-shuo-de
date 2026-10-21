# Book Structure

Table of contents for Hǎo-shuō-de, in reading order. Source files live under `src/content/`. **`src/content/book.js` is the one place that sets the structure**: the three sections and the lesson ids in reading order. A lesson's number is its position there; its folder is `src/content/lessons/<id>/`, and its id is also its URL. After the lessons, `book.js` also lists every other chapter by id in four groups (`BACK_MATTER`): content, reference, tools, and misc. The sidebar and intro-3's table of contents are built from `book.js`, and text points at a lesson with `{{lesson:<id>}}`, which shows its current number. To move a lesson, move its id in `book.js`. `npm run check-book` fails the build if `book.js` and the lesson folders drift apart. `BOOK_PLAN.md` holds the plan, the tone guide, and the checklist for the restructure.

The tree below is written by `npm run readme` from `book.js`, the chapters' titles and the files themselves, and every commit refreshes it. What each lesson teaches is in the table in [README.md](README.md), read from the lessons' own comments.

<!-- generated:book-tree -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

```
Hǎo-shuō-de
├── Introduction
│   ├── 1. intro-1                                          intros/intro-1/
│   ├── 2. intro-2                                          intros/intro-2/
│   ├── 3. intro-3                                          intros/intro-3/
│   └── 4. intro-4                                          intros/intro-4/
│
├── Section 1 — Sounds, Words, and Simple Sentences
│   ├── 1. Sounds and Symbols                               lessons/sounds-and-symbols/
│   ├── 2. Words and Sentences                              lessons/words-and-sentences/
│   ├── 3. Modifying Nouns                                  lessons/modifying-nouns/
│   ├── 4. Pointing at People and Things                    lessons/pointing/
│   ├── 5. Verbs 1 — Who does what                          lessons/who-does-what/
│   └── 6. Questions and Answers                            lessons/questions/
│
├── Section 2 — Modifying Words and Meaning
│   ├── 7. Pre-Verbs                                        lessons/pre-verbs/
│   ├── 8. Time 1 — When it happens                         lessons/when-it-happens/
│   ├── 9. Time 2 — Around an action                        lessons/around-an-action/
│   ├── 10. Space 1 — Where it is                           lessons/where-it-is/
│   ├── 11. Space 2 — Moving                                lessons/moving/
│   ├── 12. Modifiers 1 — How much                          lessons/how-much/
│   ├── 13. Modifiers 2 — Comparing                         lessons/comparing/
│   ├── 14. Modifiers 3 — Also and all                      lessons/also-and-all/
│   ├── 15. Modifiers 4 — Becoming and making               lessons/becoming-and-making/
│   └── 16. Verbs 2 — Direction and result                  lessons/direction-and-result/
│
├── Section 3 — Special Words and Concepts
│   ├── 17. Numbers                                         lessons/numbers/
│   ├── 18. Numbers 2 — Time and sums                       lessons/time-and-sums/
│   ├── 19. Colors                                          lessons/colors/
│   ├── 20. Changing the Role of a Word                     lessons/roles-of-a-word/
│   ├── 21. Relationships 1 — Inside a sentence             lessons/inside-a-sentence/
│   ├── 22. Relationships 2 — Linking sentences             lessons/linking-sentences/
│   ├── 23. Greetings                                       lessons/greetings/
│   ├── 24. Feelings                                        lessons/feelings/
│   ├── 25. Doubling Words                                  lessons/doubling-words/
│   └── 26. Everyday Patterns                               lessons/everyday-patterns/
│
├── Content
│   ├── Phrase Book                                         phrase-book.ts
│   └── Ten Short Stories                                   appendix-stories.ts
│
├── Reference
│   ├── The Pinyin System                                   appendix-pinyin.md
│   ├── Tone Sandhi Reference                               appendix-sandhi.yaml
│   └── Grammar Patterns Reference                          appendix-grammar.ts
│
├── Tools
│   ├── The Official Hao-shuo-de Dictionary                 dictionary.md
│   ├── The Official Hao-shuo-de Categorical Dictionary     dictionary-categorical.md
│   ├── The Composite Dictionary                            dictionary-composites.md
│   ├── Sentence Builder                                    sentence-builder.yaml
│   ├── Word Builder                                        word-builder.yaml
│   ├── Word Map                                            word-map.yaml
│   └── akinator                                            akinator.yaml
│
└── Misc
    ├── Why Minimality Works                                appendix-minimality.yaml
    ├── The Frontier                                        appendix-frontier.ts
    ├── Hao-shuo-de is not toki pona                        appendix-toki-pona.yaml
    └── Extra Resources                                     appendix-resources.ts
```
<!-- /generated:book-tree -->

## Lesson file structure

A lesson is assembled from modules, one file per point (see `src/lib/lesson.ts` for the full explanation):

- **`<module>.ts`** — one teaching point, written with `lessonModule({ ... })`: its `words` (word cards: term, hanzi, gloss), `prose` (the explanation, with `tldr` and `necessity`), `info` (the point's pattern in one line, or a short box; `kind: "note"` for an aside; `pattern: "<id>"` points to its grammar pattern in `src/data/grammar/`), `examples`, `exercises` (each with its `answer` and `hanzi`), and an optional `faq`. Every language sits next to the English it translates; a missing `ru` or `zh` means "not translated yet". One sentence can be a plain string.
- **`index.ts`** — `meta` (`{ id, type: "lesson" }`, no number) and `export default lesson(meta.id, { title, summary, modules: [...] })`, which turns the modules, in the order listed, into the flat `Entry[]` array the app renders. Each entry carries `module` and `key` (`"through.example2"`), which the gates use to say where a problem is. The comment at the top of `index.ts` says what the lesson teaches (or carries a `@teaches` line); the README's table is read from it.

To move a point to another lesson, move its file and its line in the two `index.ts` files. `npm run typecheck` checks every module against the types in `src/lib/lesson.ts` (a module without its info block or exercises is a type error).

## Notes

- **The restructure (September to October 2026).** The book went from 16 lessons to 21, and then grew to the 26 lessons `book.js` lists: Verbs split in two, a Doubling Words lesson and a last Everyday Patterns lesson were added, and Numbers and Greetings and Feelings were each split in two to keep every lesson at 7 sections or fewer (`MAX_SECTIONS_PER_LESSON` in `scripts/limits.js`, checked by `check-book`). See `BOOK_PLAN.md` for every decision. All 26 lessons are written in plain words and pass every gate (`DRAFT_LESSONS` in `scripts/finished-lessons.js` is empty); the plan's checklist still waits for the author's review of each one.
- **Archives.** The 16-lesson layout is in `src/content/legacy/v2-16-lessons/`, and the 19-lesson curriculum before it is in `src/content/legacy/`. Both are excluded from the build, from `npm run typecheck`, and from the sidebar. They're reference material only.
- **Reading order.** A lesson page shows its modules in the order `index.ts` lists them (the view's `flow`, built in `src/lib/chapter-content.js`), each as word cards, explanation, info block, examples, exercises, then its FAQ. Exercise numbers carry on across modules.
- **Vocabulary.** The core words are one file each in `src/data/words/`. Each is introduced in exactly one lesson, as that lesson's word cards (`check-book` fails the build otherwise), and `BOOK_PLAN.md` §4b lists which lesson introduces which word. Words are added and taken away through refactor lists (`npm run word`, `npm run refactor`), never by hand.
- **Checks.** `npm run build` starts with `npm run check`, which runs every gate (the list is in [README.md](README.md)): lessons match intro-3, vocabulary (every word in a category, with a necessity and its opposites), what the language must be able to say (`src/data/coverage/`: the atoms of meaning, Aristotle's categories, the core grammar), summaries, jargon, words used too early, every word used, an info block and exercises in every module, and that every sentence parses with the grammar patterns. The gates are strict for the finished lessons in `scripts/finished-lessons.js` and report the rest. See `BOOK_PLAN.md` §6.
- **Dictionary pages.** The alphabetical, categorical and composite dictionaries each have English/Russian/Chinese as separate `.md` files (`dictionary.md`, `dictionary.rus.md`, `dictionary.zh.md`, and the `-categorical` and `-composites` equivalents). They are regenerated from the word and composite data by `scripts/generate-dictionary.js` on every build; never edit them.
- **Older chapters.** Tone Sandhi, Why Minimality Works, Hao-shuo-de is not Toki Pona and the Sentence Builder are still on the older multi-language `.yaml` block schema (from before the `.ts` migration). Their `— Lesson N` citations point to the current numbering.
- **Grammar Patterns Reference** (`appendix-grammar.ts`) is generated by `scripts/generate-grammar-overview.js` from the modules' info lines (one box per lesson, in lesson order) on every build. Edit a module's info block, not this file. The old hand-written version is in `src/content/legacy/appendix-grammar.yaml`.
