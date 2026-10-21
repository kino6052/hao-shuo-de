# Akinator plan (W27)

A tool that helps find how to say an idea in Hao-shuo-de by asking questions, like the Akinator game. The first question is fixed (what kind of idea is it); each next question is the one that best splits what is left. The answer is the examples, patterns and words that fit, each with its lesson as a label, or a gap with the closest candidates. It never writes the sentence and saves nothing. Decided in WRITING_PLAN.md W27 (2026-10-21); this file is its living checklist.

**Now:** part 0 is done. All six questions are decided. A1 (pattern tags) is built; only your read of the tags is left. Next is A2 (lesson lookups).

**Live view:** `npm run dev`, then http://127.0.0.1:5173/__plan/ (the page reads this file again every 2 seconds and marks what changed).

**Marks:** `[ ]` to do · `[~]` doing now · `[x]` done · `[?]` waits for the author · `[-]` dropped. A line under an item without a mark is a note.

## 0. This plan and its live page

- [x] **0.1 The plan:** this file, steps nested by part, with ids to point at in a session
- [x] **0.2 The live page** `/__plan/` (vite-plugin-plan.js, review/plan.html)
  - [x] The parser: headings, nested items, marks, notes, the Now line, the Log (src/lib/plan-tree.js)
  - [x] Tests for the parser (src/lib/plan-tree.test.js, in npm test)
  - [x] The page: progress per part, filters, what changed since the last read, the Log
  - [x] Any `*_PLAN.md` file can be opened (`/__plan/?file=KB_PLAN.md`)
  - [x] Checked in the preview pane: it updates when this file changes, and fits a phone width
- [x] **0.3 Links:** WRITING_PLAN.md §6 points here

## Q. Questions for the author (one at a time; answers become W28 and on)

- [x] **Q1. What the questions are made of.** Decided 2026-10-21 (the author took Claude's pick): all of these, and the engine asks whichever splits best: the ten categories (first question only), pattern tags (W22), the coverage items a pattern or word carries (primes, grammar items), word relations (kind of, part of, opposite), part of speech, and English keywords.
- [x] **Q2. The answers.** Decided 2026-10-21 (Claude's pick): Akinator's five, yes / probably / don't know / probably not / no. A soft answer changes weights and never drops an item for good (B2).
- [x] **Q3. A start from English.** Decided 2026-10-21 (Claude's pick): yes, and the person may skip it. Besides the fixed first question, may the person type a hint ("I'm hungrier than you") that sets the starting weights through `kb_english`?
- [x] **Q4. How a gap is shown.** Decided 2026-10-21 (Claude's pick): "Nothing fits well yet", the three closest results, and the answers none of them agree with.
- [x] **Q5. Where it lives in the book.** Decided 2026-10-21 (Claude's pick): its own page next to the Sentence Builder (not an appendix).
- [x] **Q6. Languages on the book page.** Decided 2026-10-21: English for now, other languages later. Keep every page word in one strings table so a language can be added without touching the code (D5).

## A. Groundwork (shared with WRITING_PLAN.md §6, ticked in both)

- [~] **A1. Pattern tags (W22)** (all stored and guarded 2026-10-21; waits only for the author's read)
  - [x] Read the 145 patterns in src/data/grammar: id, meaning, `covers`, `taught` (lesson/module), examples
  - [x] Lesson tags: derived from `taught` when read (`lesson:<lesson>`, `module:<lesson>/<module>`), not stored, so they cannot drift (`patternTags` in src/lib/grammar-tags.ts)
  - [x] Extra tags by Claude, one batch
    - [x] Meaning tags: 28 theme tags, each with a plain description (compare, when, where, count, question, negation, want, ability, link and more)
    - [x] The category (of the ten) the pattern helps say, as `cat:<category>` tags
    - [x] The grammar items it carries: derived from `covers` as `grammar:<item>` (no primes are carried by patterns yet)
  - [x] Where tags live: `tags: [...]` on `pattern()` in src/data/grammar/<id>.ts; the type in src/lib/grammar-pattern.ts
  - [x] A tag list in one file, so a typo is caught (src/lib/grammar-tags.ts)
  - [x] A gate: every pattern has a theme tag, a category tag, a lesson and only known tags (check-data; the rule itself is tested in the fast pass)
  - [x] Tests (src/lib/grammar-tags.test.js, in npm test)
  - [?] The author reads the extra tags (one batch): easiest once A2's `patterns` command lists each pattern with its tags; until then the `tags:` line of each src/data/grammar file
- [ ] **A2. Lesson lookups (W21)**
  - [ ] A lesson index in the KB: per lesson, its words, composites, patterns and sentences (the lesson is the main key)
  - [ ] Patterns: all, by tag, by lesson
  - [ ] Similar sentences: by shared words and patterns
  - [ ] The senses and uses of a word, with their sentences
  - [ ] Command line `node scripts/kb.js lesson | patterns`, tools `kb_lesson` and `kb_patterns`, a tab in /__kb/
  - [ ] Tests
- [ ] **A3. What it searches (the pool)**
  - [ ] One list of items, each with an id, a kind (lesson sentence, composite example, pattern example, pattern, word, composite), its text (Hao-shuo-de, hanzi, English) and its lesson label
  - [ ] Stable ids: the W25 sentence ids once they exist; until then source file plus position, marked as temporary
  - [ ] For each sentence: the words and patterns it uses (from the parser, cached)
  - [ ] Count and time it: how many items, how long it takes to build (must fit the fast pass)
- [ ] **A4. What the questions ask about (features)**
  - [ ] The ten categories for every word and composite (the open K19 point)
    - [ ] Claude drafts from part of speech, the categorical dictionary groups and the description
    - [?] The author reads them in batches of 100
  - [ ] Pattern tags (A1) and the coverage items each pattern carries
  - [ ] The primes a word says or reaches (the `kb_meaning` lines)
  - [ ] Word relations: kind of, part of, opposite (the K18 store)
  - [ ] English keywords (`kb_english`)
  - [ ] A sentence's features: those of its words and patterns together
  - [ ] A plain question for each feature ("Is it about comparing two things?"), checked by check-jargon

## B. The engine (src/lib/kb/akinator.js, plain code, no solver)

- [ ] **B1. The first question, fixed:** what do you want to express
  - [ ] Choices from the ten categories in plain words: a thing, how much, what it is like, how it relates to something, where, when, how it is placed, what it has on, doing something, something done to it
  - [ ] Plus "a whole situation" for a full sentence
- [ ] **B2. Picking the next question**
  - [ ] Weight every item by how well it agrees with the answers so far
  - [ ] Score each question not yet asked by how evenly it splits the weight
  - [ ] Soft answers change weights and never drop an item for good, so one wrong answer can be undone
  - [ ] Ties broken in a fixed order: the same answers always give the same question
- [ ] **B3. When to stop**
  - [ ] A clear leader, no question left that splits, or a cap (start at 20 questions)
  - [ ] "Show me what you have" works at any step
- [ ] **B4. The result**
  - [ ] Grouped: example sentences, patterns, words and composites, each with its lesson as a label
  - [ ] Why each one fits: the answers it agrees with
  - [ ] No lesson filter (W27), only the label
- [ ] **B5. Gaps**
  - [ ] When the best fit is weak: say it is a gap and give the closest candidates
  - [ ] Name what is missing: the answers no item agrees with
  - [ ] Claude may pass a gap on to `kb_candidates` (W9); the tool itself saves nothing
- [ ] **B6. No memory:** the input is the list of answers; nothing is stored between sessions
- [ ] **B7. Tests**
  - [ ] Fixture tests on a small pool (fast, in npm test)
  - [ ] Replays: given answers, the expected next question and result
  - [ ] Self-play: for each sentence in the pool, an answerer that answers from its features; how often it is found and in how many questions (a row in the scoreboard)
  - [ ] Speed: one step under 50 ms on the full pool

## C. Claude's side

- [ ] **C1. Command line:** `node scripts/kb.js akinator [answers]` prints the next question or the result
- [ ] **C2. The tool `kb_akinator`** in src/lib/kb/tools.js: the answers so far in; the next question with its choices, the top candidates, or the result out
- [ ] **C3. A skill** (.claude/skills/akinator/SKILL.md): when to use it (writing texts, step 3 of the writer), how to answer, what to do with a gap
- [ ] **C4. A tab in /__kb/** so the author can play it
- [ ] **C5. Try it in a session:** find 10 ideas from the lesson 11 pilot text with it; note what was slow or missing

## D. The book's side (learners)

- [ ] **D1. Data for the browser:** the pool and its features exported at build time as one JSON file (aim under 300 KB gzipped)
- [ ] **D2. The engine runs in the browser:** the same akinator.js, with no Node-only code
- [ ] **D3. The component (Preact)**
  - [ ] The question card and the answer buttons
  - [ ] Back, start again, "show me what you have"
  - [ ] Results with lesson labels and links to the lessons
  - [ ] The gap view (Q4)
- [ ] **D4. Its place in the book** (Q5) and its route in generate-pages
- [ ] **D5. Words on the page:** the plain-language gates (check-jargon, check-summaries); English only for now (Q6), all words in one strings table so Russian and others can be added later
- [ ] **D5b. Other languages (later):** add Russian and more once the page is settled
- [ ] **D6. Phone width, dark mode, keyboard,** checked in the preview pane
- [ ] **D7. `npm run build` passes** with every gate

## E. Wrap-up

- [ ] **E1.** The READMEs refresh on commit (from the header comments)
- [ ] **E2.** Tick W27 in WRITING_PLAN.md; link this file from KB_PLAN.md
- [ ] **E3.** Fast pass on every commit; `npm run test:push` before a push
- [?] **E4.** The author plays it and approves

## Log

- 2026-10-21 Plan written: parts 0, Q, A to E.
- 2026-10-21 Live page `/__plan/` built and checked (updates in 2 s, any *_PLAN.md, phone width); WRITING_PLAN.md §6 links here. Part 0 done.
- 2026-10-21 Q1 decided: the questions are made of all the feature kinds; the engine picks the best split.
- 2026-10-21 Q2 decided: the five Akinator answers.
- 2026-10-21 Q3 decided: an optional English hint sets the starting weights.
- 2026-10-21 Q4 decided: a gap says "Nothing fits well yet", with the three closest and the answers none agree with.
- 2026-10-21 Q5 decided: its own book page next to the Sentence Builder.
- 2026-10-21 Q6 decided: English for now, other languages later (strings in one table; D5b added).
- 2026-10-21 A1 built: 145 patterns tagged (28 themes plus ten categories), lesson tags derived from `taught`, gate in check-data, 5 tests; check-data and the fast pass are green.
