# Book Structure

Table of contents for Hǎo-shuō-de, in reading order. Source files live under `src/content/`. The 16 lessons are exactly the 16 topics `intro-3.ts` names, in the same three sections (the sidebar groups them the same way — see `src/lib/lesson-sections.js`).

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
│   ├── 4. You and I                                   lesson-04/
│   ├── 5. Verbs                                       lesson-05/
│   └── 6. Questions and Answers                       lesson-06/
│
├── Section 2 — Modifying Words and Meaning
│   ├── 7.  Prepositions                               lesson-07/
│   ├── 8.  Expressing Time and Space                  lesson-08/
│   ├── 9.  Pre-Verbs                                  lesson-09/
│   └── 10. More Modifiers                             lesson-10/
│
├── Section 3 — Special Words and Concepts
│   ├── 11. Measure word ge                            lesson-11/
│   ├── 12. Greetings and Feelings                     lesson-12/
│   ├── 13. Numbers                                    lesson-13/
│   ├── 14. Colors                                     lesson-14/
│   ├── 15. Spatial Nouns                              lesson-15/
│   └── 16. Particles and Other Special Words          lesson-16/
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

- **This is a from-scratch rebuild (September 2026).** The previous 19-lesson curriculum (which had drifted from `intro-3.ts`'s plan, and predates the split-authoring pattern) was archived to `src/content/legacy/` rather than migrated in place. `src/content/legacy/` is excluded from the build, from `npm run typecheck`, and from the sidebar — it's reference material only.
- **Lessons 8, 11, and 14** (Expressing Time and Space; Measure word ge; Colors) are new or substantially reworked content, not straight ports: `legacy/lesson-12` ("Colors and la") was split into the fronted-context-clause material (now in lesson-08) and the color-adjective material (now in lesson-14); "Measure word ge" is new, formalizing the `-ge` classifier lesson-03 already introduced.
- Five lessons from the old curriculum aren't among intro-3's 16 named topics (Proper Names & Geography, Modification Stacking, and three story lessons) and were **not** carried forward into the new numbering; they remain in `src/content/legacy/` only.
- **Dictionary and Categorical Dictionary** each have English/Russian/Chinese as separate `.md` files (`dictionary.md`, `dictionary.rus.md`, `dictionary.zh.md`, and the `-categorical` equivalents); the alphabetical one is regenerated from `src/data/dictionary.json` by `scripts/generate-dictionary.js`.
- **Appendix: Sandhi, Minimality, Stories, Grammar** and **Sentence Builder** are still on the older multi-language `.yaml` block schema (pre-`.ts` migration). Their `— Lesson N` citations were updated to match the new numbering.
