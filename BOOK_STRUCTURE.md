# Book Structure

Table of contents for Hǎo-shuō-de, in reading order. Source files live under `src/content/`. The 21 lessons are exactly the 21 lessons `intro-3.ts` lists, with the same titles, in the same three sections (the sidebar groups them the same way — see `src/lib/lesson-sections.js`). `npm run check-book` fails the build if they drift apart. `BOOK_PLAN.md` holds the plan, the tone guide, and the checklist for the restructure.

```
Hǎo-shuō-de
├── Introduction
│   ├── 1. Welcome to Hao-shuo-de!                    intro-1.ts
│   ├── 2. How small can a language be?               intro-2.ts
│   └── 3. Simplified Chinese, Not Invented Chinese    intro-3.ts
│
├── Section 1 — Sounds, Words, and Simple Sentences
│   ├── 1. Sounds and Symbols                          lesson-01/
│   ├── 2. Words and Sentences                         lesson-02/
│   ├── 3. Modifying Nouns                             lesson-03/
│   ├── 4. Pointing at People and Things               lesson-04/
│   ├── 5. Verbs                                       lesson-05/
│   └── 6. Questions and Answers                       lesson-06/
│
├── Section 2 — Modifying Words and Meaning
│   ├── 7.  Pre-Verbs                                  lesson-07/
│   ├── 8.  Time 1 — When it happens                   lesson-08/
│   ├── 9.  Time 2 — Around an action                  lesson-09/
│   ├── 10. Space 1 — Where it is                      lesson-10/
│   ├── 11. Space 2 — Moving                           lesson-11/
│   ├── 12. Modifiers 1 — How much                     lesson-12/
│   ├── 13. Modifiers 2 — Comparing                    lesson-13/
│   ├── 14. Modifiers 3 — Also and all                 lesson-14/
│   └── 15. Modifiers 4 — Becoming and making          lesson-15/
│
├── Section 3 — Special Words and Concepts
│   ├── 16. Numbers                                    lesson-16/
│   ├── 17. Colors                                     lesson-17/
│   ├── 18. Changing the Role of a Word                lesson-18/
│   ├── 19. Relationships 1 — Inside a sentence        lesson-19/
│   ├── 20. Relationships 2 — Linking sentences        lesson-20/
│   └── 21. Greetings and Feelings                     lesson-21/
│
└── Section 4 — Texts, Vocabulary, and Reference
    ├── Proverbs                                       proverbs.md
    ├── Dictionary
    │   ├── Alphabetical                                dictionary.md
    │   └── Categorical                                 dictionary-categorical.md
    ├── Sentence Builder (interactive tool)              sentence-builder.yaml
    └── Appendices
        ├── The Pinyin System                            appendix-pinyin.md
        ├── Tone Sandhi Reference                        appendix-sandhi.yaml
        ├── Why Minimality Works                         appendix-minimality.yaml
        ├── Ten Short Stories                             appendix-stories.yaml
        └── Grammar Patterns Reference                   appendix-grammar.yaml
```

## Lesson file structure

Each lesson folder holds a split-authoring set of files (see `src/lib/chapter-shape-types.ts` for the full explanation):

- **`shape.ts`** — hand-written `LessonShape` type (one property per block, JSDoc comment on each) plus the `shape` value populated with only the structural fields (`type`, `term`, `pinyin`, `tag`, nested `items`, ...). This is the single source of truth for comments and structure.
- **`en.ts` / `ru.ts` / `zh.ts`** — one object per language, typed as `PartialByKey<LessonShape>`, using the same keys as `shape.ts`. Each just adds that language's text (`en`/`ru`/`zh`, plus nested `tldr`/`necessity`/`title` where relevant) without repeating `shape.ts`'s comments. `ru.ts`/`zh.ts` are currently blank placeholders (`[]`) throughout — translation hasn't started yet.
- **`index.ts`** — `export default assembleChapter(shape, { en, ru, zh }, meta.id)`, zipping the four into the flat `Entry[]` array the app renders.

Every file types its object directly against `Shape`/`LessonShape` — there is no derived/generated type — so a typo in a block's `type`, a missing `term` on a vocab entry, or the wrong number of nested info items shows up as a type error in whichever file has it (`npm run typecheck`).

## Notes

- **The 21-lesson restructure (September 2026).** The book went from 16 lessons to the 21 that intro-3 lists: Time and Space, More Modifiers, and Relationships were split into several lessons, and Particles merged into Greetings and Feelings. See `BOOK_PLAN.md` for every decision. Phase 1 moved the old lessons' blocks into the new layout without rewriting them. Each block's JSDoc in `shape.ts` says `[from old LNN]`. Phase 2 rewrites the lessons one by one. Section 1 (lessons 1–6) is already in plain words.
- **Archives.** The 16-lesson layout is in `src/content/legacy/v2-16-lessons/`, and the 19-lesson curriculum before it is in `src/content/legacy/`. Both are excluded from the build, from `npm run typecheck`, and from the sidebar. They're reference material only.
- **Vocabulary.** Every one of the 148 words (the 136 original dictionary words plus 12 approved additions) is introduced in exactly one lesson, as that lesson's `vocab` blocks. `BOOK_PLAN.md` §4b lists which lesson introduces which word.
- **Checks.** `npm run build` starts with `npm run check`, which runs every gate: lessons match intro-3, vocabulary, summaries, jargon, words used too early, every word used, and a grammar box in every lesson. The gates are strict for the finished lessons in `scripts/finished-lessons.js` and report the rest. See `BOOK_PLAN.md` §6.
- **Dictionary and Categorical Dictionary** each have English/Russian/Chinese as separate `.md` files (`dictionary.md`, `dictionary.rus.md`, `dictionary.zh.md`, and the `-categorical` equivalents); the alphabetical one is regenerated from `src/data/dictionary.json` by `scripts/generate-dictionary.js`.
- **Appendix: Sandhi, Minimality, Stories, Grammar** and **Sentence Builder** are still on the older multi-language `.yaml` block schema (pre-`.ts` migration). Their `— Lesson N` citations point to the 21-lesson numbering.
