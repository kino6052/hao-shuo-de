# Akinator plan (W27)

A tool that helps find how to say an idea in Hao-shuo-de by asking questions, like the Akinator game. The first question is fixed (what kind of idea is it); each next question is the one that best splits what is left. The answer is the examples, patterns and words that fit, each with its lesson as a label, or a gap with the closest candidates. It never writes the sentence and saves nothing. Decided in WRITING_PLAN.md W27 (2026-10-21); this file is its living checklist.

**Now:** The finder is a page in the book (Tools, after the Word Map: `/en/akinator`): hint box, first choices, five-answer questions with keys 1 to 5, take-back chips, results with lesson links. D1 to D5 and D7 are done; D6 is checked at phone width and in dark mode. Next: the question quality seen on the page (see D3 notes), the gap view seen on screen, then the author plays it (E4).

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

- [x] **A1. Pattern tags (W22)** (stored and guarded 2026-10-21; read and approved by the author the same day)
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
  - [x] The author read the extra tags (one batch, in chat) and approved them as they are (lgtm, 2026-10-21). Seven patterns Claude flagged as unsure stay as tagged: xia-fall, hao-label, perceive-doing, mei-guanxi, jiao-name, written-words, add-take.
- [x] **A2. Lesson lookups (W21)**
  - [x] A lesson index in the KB: per lesson, its words, composites, patterns and sentences (the lesson is the main key); `kb.lessons()`, `src/lib/kb/lesson-lookup.js`
  - [x] Patterns: all, by tag, by lesson, by the lesson they are taught by at the latest; an id gives one in full
  - [x] Similar sentences: by shared words and patterns (Jaccard, at least a quarter)
  - [x] The uses of a word, with their sentences by lesson (the senses stay on the word card)
  - [x] Command line `node scripts/kb.js lesson | grammar | uses | similar` (`patterns` was taken by the minimal-patterns report), tools `kb_lesson`, `kb_patterns` and `kb_uses` (also similar sentences); the Lessons tab in /__kb/ (C4)
  - [x] Tests (`lesson-lookup.test.js`, 6)
- [~] **A3. What it searches (the pool)** (built 2026-10-21: src/lib/kb/akinator-pool.js, `kb.pool()`)
  - [x] One list of items, each with an id, a type (word, composite, pattern, sentence), a source (lesson example, lesson answer, phrase book, story, composite example, pattern example), its text (Hao-shuo-de, hanzi, English) and its lesson label (`lesson`, and `number`: the lesson a learner needs)
  - [x] Features of an item, as a set of `family:value` strings: words and composites get their topic and kind tags with every tag above them (K31), composites also their build tags (A5), patterns their A1 tags, a sentence the union of its words' features and the themes and categories of the patterns it uses
  - [x] Stable ids: `word:<id>`, `composite:<zh>`, `pattern:<id>`, `sentence:<source>:<lesson>/<key>`, `sentence:composite_example:<n>`, `sentence:pattern_example:<pattern>/<n>`. The two numbered kinds are temporary (a position, not a name) until the W25 sentence ids exist.
  - [x] For each sentence: the words and patterns it uses (first reading of the parser; 2 pieces do not parse and carry words only)
  - [x] Count and time it: 7,679 items (230 words, 2,169 composites, 145 patterns, 4,820 sentences, 315 of them pattern examples) with 1,054 different features; 12.7 s the first time (it parses every sentence), 0.4 s with the parse memory, 2.4 s through `kb.pool()` with the tag and build models; 8 fixture tests in the fast pass
  - [x] Known: `theme:basic` and `pattern:subject-predicate` are on most sentences; they split nothing, so the engine (B) must rank questions by how well they split, not by name
  - [x] Ask it from the command line: `node scripts/kb.js pool` (items by type and source, features by family, the biggest features)
- [~] **A4. What the questions ask about (features)**, now mostly from the K31 tag nets (2026-10-21)
  - [x] The ten categories for every word and composite: already there as the top of the kind net (src/data/maps/kinds.ts, `isA`), so Claude does not draft them and the author does not read them again here (the author's review of the nets is TAGS_PLAN.md). This closes the open K19 point.
  - [x] Kind questions: a kind tag is a yes/no question; an item has the tag and every tag above it, so "yes" to a broad kind keeps everything under it (`kind:` features, asked by the engine)
  - [x] Topic questions: the same on the topic net (`topic:` features)
  - [x] Pattern tags (A1): `theme:` and `cat:` features on patterns and on the sentences that use them, `pattern:<id>` as a question too. The coverage items (`grammar:`, `coverage:`) are on the pattern items but are not asked as questions: they say what the book covers, not what the person means.
  - [x] Build tags of composites (A5): the patterns, words and lesson a composite's description is made from
  - [ ] The primes a word says or reaches (the `kb_meaning` lines)
  - [ ] Word relations: kind of, part of, opposite (the K18 store)
  - [ ] English keywords (`kb_english`)
  - [x] A sentence's features: those of its words and patterns together (A3)
  - [~] A plain question for each feature (src/lib/kb/akinator-questions.js, one strings table, English): kind, topic, theme, category, pattern, word and type are written ("Do you meet it when talking about “Kitchen”?", "Is it for comparing things?"). Build tags (`form:`, `made:`, `reach:`) and the lesson and coverage tags are not asked on purpose. Run through the jargon check: a test over the table and `check-akinator` over every exported question (D5).
- [~] **A5. Build tags of composites: how each one is made** (the author, 2026-10-21: does it use bǎ? does it use doubling? which chapters' logic?)
  - [x] What a build tag says, for every form of a composite's description (hsd)
    - [x] `form:chain` a hyphen chain of words (fāng-fǎ), `form:phrase` a description read by the grammar, `form:unread` a description the patterns cannot read yet, `form:none` no description
    - [x] `made:built` or `made:spelled` (K9, from form-kinds.js; `made:unknown` where the author has not decided)
    - [x] `pattern:<id>` for every pattern the parse uses (bǎ is `pattern:ba-handle`, doubling is `pattern:doubled-verb`), and `theme:<tag>` for its A1 tags (compare, when, make and so on)
    - [x] `word:<id>` for every word the description uses
    - [x] `reach:<lesson>`: the first lesson after which the description reads with only the patterns taught so far (the early-patterns rule, found by halving over `kb.parseUpTo`) and its words are taught; the form readable soonest decides. This is also the simplest reading, so the pattern tags show the grammar a learner has at that point, not a later one.
  - [x] Derived from the description every time, not stored in the 2,169 files, so a word that moves (K20) cannot leave a stale tag. Not a separate cache file: the parse memory (kb/cache) already makes a rebuild 0.35 s, 7.6 s the first time.
  - [x] Word to lesson: the earliest card (or catch-all sense card) of each core word, from the KB facts
  - [x] Code: src/lib/kb/build-tags.js (pure) with fixture tests (src/lib/kb/build-tags.test.js: bǎ, doubling, a chain, an unread form, the reach rule, filters), in npm test
  - [x] Run on the real data (2026-10-21): 2,169 composites; 1,399 have a phrase read by the grammar, 952 a chain (some have both), 35 an unread description, 4 none; 90 spelled; 118 patterns, 27 themes and 25 reach lessons appear as tags
  - [x] Ask it
    - [x] Command line `node scripts/kb.js built [composite] [--pattern] [--theme] [--word] [--form] [--made] [--reach] [--up-to N]`
    - [x] A "Built from" line on a composite's word card (`kb word 刀`), worked out for that one composite
    - [x] Claude tool `kb_built` (same text as the command line)
    - [x] A tab in /__kb/ (the Lessons tab: `built <composite>`)
    - [x] Say it in the skill (C3): "which composites may a text for lesson N use" is `built --up-to N`
  - [x] The author read the sample in chat (ba-handle 56, doubled-verb 3, the 35 unread) and approved it (lgtm, 2026-10-21); no change asked. Still true, and left open on purpose: the parser takes one reading per description, so a pattern that reads too widely shows up as a tag (doubled-verb on "ràng rén zuò, rén bù xiǎng zuò"); these are worth fixing in the pattern, not in the tag.

## B. The engine (src/lib/kb/akinator.js, plain code, no solver)

- [x] **B1. The first question, fixed:** what do you want to express (built 2026-10-21)
  - [x] Choices from the top of the kind net, the ten categories (K31), in plain words, and one for the little words that hold a sentence together (the net's eleventh top tag); the wording is in the strings table
  - [x] Plus "a whole situation" for a full sentence (the feature `type:sentence`)
- [x] **B2. Picking the next question** (src/lib/kb/akinator.js, `kb.akinator()`)
  - [x] Weight every item by how well it agrees with the answers so far
  - [x] Score each question not yet asked by how evenly it splits the weight (times a factor per family: words count half, patterns four fifths)
  - [x] Soft answers change weights and never drop an item for good, so one wrong answer can be undone (an item that disagrees keeps 5% for yes/no, 30% for probably)
  - [x] Ties broken in a fixed order (the feature that sorts first): the same answers always give the same question
- [x] **B3. When to stop**
  - [x] A clear leader (6 or fewer items still count), no question left that splits, or a cap (20 answers)
  - [x] "Show me what you have" works at any step (`finish`)
- [x] **B4. The result**
  - [x] Grouped: example sentences, patterns, words and composites, each with its lesson as a label
  - [x] Why each one fits: the answers it agrees with, and the ones it does not
  - [x] No lesson filter (W27), only the label
- [~] **B5. Gaps**
  - [x] When the best fit is weak (the best item kept under a quarter of its weight): say it is a gap and give the closest three
  - [x] Name what is missing: the answers none of the closest agree with
  - [ ] Claude may pass a gap on to `kb_candidates` (W9); the tool itself saves nothing (goes in the skill, C3)
- [x] **B6. No memory:** the input is the list of answers; nothing is stored between sessions. An English hint (Q3) is an optional `prior` of starting weights, built by the caller; the lookup from English to the prior is still to do (C2)
- [~] **B7. Tests**
  - [x] Fixture tests on a small pool (src/lib/kb/akinator.test.js, in npm test)
  - [ ] Replays: given answers, the expected next question and result, on the real pool (waits until the data is steady)
  - [~] Self-play (src/lib/kb/akinator-selfplay.js): an answerer who knows an item and answers from its features. Numbers on the real pool, 250 targets (150 sentences, 50 composites, 25 words, 25 patterns), found among the top six of their group: sure answers 100% (12.4 questions on average), probably / probably not 99% (18.4), every seventh answer wrong 0% found but 19% among the closest three of the gap (47 of 250). A wrong answer sinks the item to 5%, so the result says "nothing fits well yet" and names, per close item, the answer it disagrees with; the person takes that answer back. Two fixes made on the way: a pattern now takes the kind and topic features of its examples (before, every kind answer sank the patterns: 23 of 25 found), and an answer repeated for a feature counts once.
  - [x] After the in-play change (only items within 15% of the best weight are asked about, see the 2026-10-21 sanity log line) a wrong answer is no longer found, and no longer shows up as a gap either: 0 of 250 found, 0 near (before: 0% found, 19% near). The questions stay on what still fits every answer, so one wrong "yes" or "no" makes the true item invisible and the Akinator is confidently wrong. The way back is the page's take-back chips (and, for Claude, leaving the answer out). A softer penalty does not help (the item is out of the questions either way); "which one answer, if dropped, fits" has nothing to rank by. Dropped.
  - [x] Numbers on demand, not a scoreboard row (a row would add about 40 s to each scoreboard run): `node scripts/kb.js selfplay [--mode sure|soft|noisy] [--per N]`
  - [x] Speed: the slowest step on the full pool was 47 ms (about 12 ms on average); a test for it waits for the push tier

## C. Claude's side

- [x] **C1. Command line:** `node scripts/kb.js akinator [--start doing] [--hint "..."] [--finish] [--limit N] [kind:doing=yes ...]` prints the next question or the result (src/lib/kb/akinator-ask.js; `--json` gives the data)
- [x] **C2. The tool `kb_akinator`** in src/lib/kb/tools.js: the answers so far in; the next question with its choices, the leaders, or the result out. The English hint (Q3) looks the words up with `kb_english` and starts the matching composites, words and the sentences using those words at 25 times the weight. Tests with a stand-in KB in akinator.test.js; the MCP tool list test is updated.
- [x] **C3. A skill** (.claude/skills/akinator/SKILL.md): when to use it (writing texts, step 3 of the writer), how to answer, how to read the lesson labels, what to do with a gap; also says "which composites may a text for lesson N use" is `kb_built` with `up_to` (closes the A5 skill line)
- [x] **C4. A tab in /__kb/** so the author can play it
  - [x] `/__kb/akinator` and `/__kb/lessons` routes in vite-plugin-kb.js; tabs "Akinator" (hint box, what the hint found, answer buttons, take-back chips, leaders, result) and "Lessons" (lesson, grammar, uses, similar, built) in kb/page.html
  - [x] Seen working in the browser (dev-5174): hint "food" shows what it found at once; "Doing something", then answers, give new questions with the answers as chips. The dev server keeps modules it has loaded, so restart it after changing src/lib/kb code.
  - [x] Looked at: the Lessons tab, a finished game's result, take-back chips (click an answer, it goes), phone width (375 px, no side scroll), the console (no errors)
- [~] **C5. Try it in a session:** find 10 ideas from the lesson 11 pilot text with it; note what was slow or missing
  - [x] First idea tried by hand, "go home by bus" (hint, doing, housing probably, travel yes): after four answers the leaders were "We walk home" and "My mom will come to my home from my country", both in lesson moving. Useful.
  - [x] Two things found and fixed: a hint word under three letters was dropped, so "go" was lost (now two letters count, with a short list of small words left out; the hint then also matches 去 and 动, plus a little noise such as 合适); a theme question read badly ("Is it for whose it is, or which part?"), now "Is it about …?"
  - [x] Seven more ideas tried with a hint and "a whole situation" (hungrier than you, meet at the station tomorrow, forgot to bring the key, please do not tell anyone, how long does it take to walk, I have never been there, she is as tall as her brother). Found: a hint never reached a pattern ("than" should lead to bǐ) and a hint's weight of 25 let a word the author had ruled out ("a whole situation" = no) lead the list. Fixed: the hint also finds a pattern by a rare word of its meaning (the part before the colon), and its weight is 10 (under 1/0.05, so a "no" still wins); one more test, 953 pass.
  - [x] A hint that found only composites (station, key) did nothing for a "whole situation" start. Fixed: a composite's own example sentences are boosted too (the pool item keeps `about`). Now "meet" leads to "I came across him" and "forgot" to "His name? I've forgotten."
  - [ ] The other two ideas (the pilot text is to be rewritten from scratch, W23, so use ideas from its new sketch)

## D. The book's side (learners)

- [x] **D1. Data for the browser:** the pool and its features exported at build time as one JSON file (aim under 300 KB gzipped)
  - 282 KB zipped (1.2 MB raw): `public/akinator-pool.json` from `npm run akinator-data` (not committed; the build makes it and the script fails above 300 KB). A sentence lists the words and patterns it uses, not its features (src/lib/kb/akinator-export.js); the question words travel with it.
- [x] **D2. The engine runs in the browser:** the same akinator.js, with no Node-only code
  - `createBrowserAkinator(data).ask({ answers, start, hint, finish, limit })` (akinator-browser.js) gives the same data as the command line; the hint uses English glosses only (no WordNet) and still finds all 25 everyday ideas (`npm run check-akinator` checks both paths)
- [x] **D3. The component (Preact)** (src/components/Akinator.jsx, one strings table: `STRINGS.en.ui`)
  - [x] The question card and the answer buttons (keys 1 to 5)
  - [x] Back (take back the last answer, or tap a chip), start again, "show me what fits now"
  - [x] Results with lesson labels and links to the lessons (words first, then composites, patterns, sentences)
  - [~] The gap view (Q4): written from the same data as the KB tab; not yet seen on screen (the questions stop at a clear leader, so a gap is hard to reach by hand)
  - [ ] Question quality seen on the page: after "Doing" it can ask about "Little words: le, de, ma" or "how much"; the first answers could stay on what was chosen. The three best are shown only when 60 or fewer still fit.
- [x] **D4. Its place in the book** (Q5) and its route in generate-pages
  - chapter `src/content/akinator.yaml` ("Find How to Say It"), in Tools after the Word Map (book.js, content-registry order 3.8, app.jsx, intro-3 contents, BOOK_STRUCTURE.md); generate-pages reads the yaml, so the route page comes with the build
- [x] **D5. Words on the page:** the plain-language gates (check-jargon, check-summaries); English only for now (Q6), all words in one strings table so Russian and others can be added later
  - test: the strings table has no jargon; `check-akinator`: no exported question has any. It found and fixed: "Ordinal" and "Set phrase" (kind titles), "plural" (the men pattern), four theme descriptions that were clauses ("Is it about it is done…"), and pattern questions that quoted their examples
- [ ] **D5b. Other languages (later):** add Russian and more once the page is settled
- [x] **D6. Phone width, dark mode, keyboard,** checked in the preview pane
  - 375 px: no sideways scroll, answer buttons wrap in two columns; dark mode seen; keys 1 to 5 and Backspace work; the page needs a dev server restart after a data change (`npm run akinator-data` rebuilds the pool file)
- [x] **D7. `npm run build` passes** with every gate
  - checked without touching docs/: `node scripts/check-all.js` passes, `vite build` into a scratch folder passes; the pool is its own asset (285 KB zipped) outside the main bundle; `npm run build` itself makes the file and fails above 300 KB

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
- 2026-10-21 Plan adjusted for the K31 tag nets (kinds and topics replace the ten-categories draft in A4) and the author's request for build tags (A5).
- 2026-10-21 A5 built: composites tagged by form, patterns, themes, words and reach lesson (derived, kb built / kb_built / card line); 10 tests; fast pass green.
- 2026-10-21 A3 built: the pool of 7,679 items (words, composites, patterns, sentences) with features from the tag nets, the build tags and the parser; `kb.pool()`; 8 tests; fast pass green (925).
- 2026-10-21 Engine built (B1 to B6, most of B7): `kb.akinator().step(answers)`, plain questions in one strings table, self-play on 250 targets finds 99% with sure answers, 95% with soft ones, 47% when every seventh answer is wrong; 16 tests; fast pass green (941).
- 2026-10-21 C1 and C2 built: `kb akinator` and `kb_akinator` (answers in, next question or result out, English hint); patterns take their examples' kind and topic; self-play 100% with sure answers, 99% with soft ones; fast pass green (946).
- 2026-10-21 The author read the A1 tags and the A5 sample in chat and approved both (lgtm).
- 2026-10-21 C3 built: the akinator skill. First trial by hand ("go home by bus") works; two things to fix are noted under C5.
- 2026-10-21 C5: seven more ideas tried; the hint now finds patterns by a rare word of their meaning and weighs 10 instead of 25; one weak spot left (composite-only hints).
- 2026-10-21 Sanity pass on simple things (the author asked that food and the like be easy to find): `scripts/check-akinator.js` (`npm run check-akinator`) checks 25 everyday hints and 6 start words. It found: "food" missed 吃 (hint now also matches core-word definitions), "father" missed 爸爸 (small synonym list), a hint with no answers was padded with junk (now only what the hint found), a start word like "food" or "kitchen" was an error (now any kind, topic or theme name, or part of one), and after "kitchen=yes" the questions still ran over the other 7,600 items at 5% each (now only items within 15% of the best weight are in play). First screen with a hint shows what it found. Cost: the noisy self-play (every 7th answer wrong) fell from 47% to about 1%; sure and soft answers stay at 100%.
- 2026-10-21 C4 built: Akinator and Lessons tabs in /__kb/; seen working in the browser.
- 2026-10-21 A2 built: lessons, patterns, uses and similar sentences from the pool (CLI and three tools); the tab waits for C4; 6 tests; fast pass green (952).
- 2026-10-21 Command line extras: `kb pool` (counts of the pool) and `kb selfplay` (the numbers of the engine); B7 and C4 items ticked, and the noisy self-play drop kept as a known trade-off (the take-back chips are the remedy).
- 2026-10-21 D1 and D2 built: the pool as one file of 282 KB zipped (`npm run akinator-data`, part of the build), `createBrowserAkinator` runs the engine and the hint in the browser without the knowledge base; `askData` is the core `askAkinator` now wraps; 8 more tests; check-akinator runs both paths; fast pass green (965).
- 2026-10-21 D3 to D7 built: the page `Find How to Say It` (Preact component, one strings table, route and chapter, jargon gate on the strings and on every question), seen working at desktop and phone width; check-all and a scratch vite build pass; 967 tests green.
