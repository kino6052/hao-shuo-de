# Book Structure

Table of contents for Hǎo-shuō-de, in reading order. Source files live under `src/content/`. Lessons are numbered sequentially and grouped into the four sections `intro-3.ts` describes to the reader (the sidebar groups them the same way — see `src/lib/lesson-sections.js`).

```
Hǎo-shuō-de
├── Introduction
│   ├── 1. Welcome to Hao-shuo-de!                    intro-1.ts
│   ├── 2. How small can a language be?               intro-2.ts
│   └── 3. Simplified Chinese, Not Invented Chinese    intro-3.ts
│
├── Section 1 — Sounds, Words, and Simple Sentences
│   ├── 1. Sounds and Symbols                          lesson-01/index.ts
│   ├── 2. Words and Sentences                         lesson-02/index.ts
│   ├── 3. Modifying Nouns                             lesson-03/index.ts
│   ├── 4. Nouns and Adjectives                        lesson-04/index.ts
│   ├── 5. You and I                                   lesson-05/index.ts
│   ├── 6. Dongzuo (Verbs)                              lesson-06/index.ts
│   └── 7. Questions and Answers                       lesson-07/index.ts
│
├── Section 2 — Modifying Words and Meaning
│   ├── 8.  More Adjectives & State Changes            lesson-08/index.ts
│   ├── 9.  Prepositions & Coverbs                     lesson-09.md
│   └── 10. Pre-Verbs & Auxiliaries                    lesson-10.md
│
├── Section 3 — Special Words and Concepts
│   ├── 11. Greetings and Feelings                     lesson-11.md
│   ├── 12. Shùzì (Numbers and Order)                  lesson-12.md
│   ├── 13. Colors and la                              lesson-13.md
│   ├── 14. Spatial Nouns                              lesson-14.md
│   └── 15. Particles and Perspective                  lesson-15.md
│
├── More Lessons (not yet placed in a section)
│   ├── 16. Proper Names & Geography                   lesson-16.md
│   ├── 17. Modification Stacking                      lesson-17.md
│   ├── 18. Hunting Adventure                          lesson-18.md
│   ├── 19. Cooking Adventure                          lesson-19.md
│   └── 20. The Frontier                               lesson-20.md
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

## Notes

- **Lessons 1–8, both Intro pages** are `.ts` files (one file, all languages: `en`/`zh`/`ru`).
- **Lessons 9–20**, Proverbs, and Appendix: Pinyin are still plain `.md`, English only — not yet migrated to the `.ts` schema or translated.
- **Lessons 16–20** haven't been reconciled with intro-3's plan yet (their topics — Proper Names & Geography, Modification Stacking, the three story lessons — aren't among intro-3's 16 named topics), so they sit in a "More Lessons" bucket both here and in the sidebar rather than claiming a section they don't belong to.
- The book was resequenced (September 2026) so each section is a consecutive number range; see `src/content/lesson-07/index.ts` and `lesson-08/index.ts`'s header comments for the one swap, and `git log` for the rest of the moves.
- **Dictionary and Categorical Dictionary** each have English/Russian/Chinese as separate `.md` files (`dictionary.md`, `dictionary.rus.md`, `dictionary.zh.md`, and the `-categorical` equivalents); the alphabetical one is regenerated from `src/data/dictionary.json` by `scripts/generate-dictionary.js`.
- **Appendix: Sandhi, Minimality, Stories, Grammar** and **Sentence Builder** are still on the older multi-language `.yaml` block schema (pre-`.ts` migration).
