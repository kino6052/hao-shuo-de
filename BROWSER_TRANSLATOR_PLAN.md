# Browser translator plan

The author asked (2026-10-23) for a translator that is reliable, not fully based on an LLM, and done in the browser. The English is corrected first, so bad input never goes in. An LLM turns it into a fixed format that code can check, a **meaning tree**; fixed code builds the Hao-shuo-de from the tree; an LLM only polishes the result. A test-and-verify loop makes sure every tree parses. This file lists the steps, the loop, the tests, what runs where, and the questions for the author.

It builds on [TRANSLATOR_PLAN.md](TRANSLATOR_PLAN.md) (the checks, the glossary, the test set and the daemon) and [INSTANT_TRANSLATION_PLAN.md](INSTANT_TRANSLATION_PLAN.md). How this plan differs from that plan's option B: B turned English word order into Hao-shuo-de with rules, and only 55% of its sentences parsed. Here the LLM handles the English, and the code handles only the Hao-shuo-de, which the patterns already describe.

**Now:** B1 to B4 are built, and B5 is built but not live. The translator page has three modes: quick, with meaning trees, and slow and careful. The LLM steps run through the daemon, and the page checks each tree itself. It was tried from the command line (`translator-daemon.js try`). The rules are deployed (2026-10-24). Next: look at the page once. Waiting for the author: the first batch of rule English (Q5a).

**Live view:** `npm run dev`, then http://127.0.0.1:5173/__plan/?file=BROWSER_TRANSLATOR_PLAN.md

**Marks:** `[ ]` to do · `[~]` doing now · `[x]` done · `[?]` waits for the author · `[-]` dropped. A line under an item without a mark is a note. **(measured)** and **(estimated)** say which numbers were timed and which are guesses.

## 1. What is already there

- **The parser runs in the browser.** `src/lib/grammar/parser.js` is pure JavaScript and says so in its header. No page uses it yet.
- **Every pattern has a two-sided template**, one Hao-shuo-de side and one English side. In `add-take` they are "A, B fàng zài yī-qǐ, shì C" and "A and B put together is C".
  - The plan was to make a tree node from a template: a pattern id and its slots (A, B, C). The letters don't line up with the parser's rules, so B1 makes a node from a rule instead (§6).
- **Every parser rule is named after its pattern** ("bi-than#1"), so a parse says which patterns read the sentence. This is how the code checks that the output means what the tree meant.
- **Also ready:** `kb_gloss` (word by word, no AI), the glossary, the forms from `kb_lookup`, the kind net from the tags, and the pinyin and hanzi rendering.
- **Not in the browser yet:**
  - The dictionary in a small form. The composites' source files are 17 MB.
  - The composite index. It takes about 39 s to build in Node (measured, INSTANT_TRANSLATION_PLAN.md §P), so it has to be built ahead, not in the page.

## 2. The steps

Each LLM step answers in a format that code checks. A failed check goes back to the LLM with the exact message.

- **0. Correct the English** (an LLM, then code)
  - The LLM:
    - fixes spelling and grammar, and splits long sentences;
    - says who "he", "she" and "it" are, and writes out what is only implied;
    - lists every change it made.
  - Then code checks:
    - every word is a known English word (from WordNet, which the KB has);
    - every content word has a lookup (`kb_lookup`, or `english-explained.json`);
    - no sentence is over the length limit.
  - A change of meaning, or a real ambiguity ("bank": the river's or the money one), goes to the person as "Did you mean …?" The text is translated only once they answer.
  - Text that can't be fixed (nonsense, not English) is refused with the reason, never translated.
- **1. Make the tree** (an LLM)
  - It gets:
    - the corrected English;
    - the candidates for each word (`kb_lookup`);
    - the matching patterns with their templates (`kb_constructions`).
  - For each sentence it answers a tree: a pattern id with its slots, each slot filled by an entry id or by another node.
  - Where the model allows it, the answer is held to the tree's format while it is written. A JSON schema allows only the candidate ids and the pattern ids, so a made-up word or pattern can't come out at all.
- **2. Check the tree** (code)
  - Every pattern id exists, and every slot is filled.
  - Every slot holds the right kind of thing, from the kind net: a person or a thing where the template wants one.
  - Every leaf is a dictionary entry. With a lesson given, only entries taught by then.
- **3. Build** (code)
  - Fill each node's Hao-shuo-de template, from the inside out.
  - Each entry becomes its form, glossary first.
  - A long description comes once in full, then zhè-ge and its head word (the cast list, TRANSLATOR_PLAN.md D4).
- **4. Verify** (code)
  - **The tree parses back.** The parser reads the built text. One of its readings must use the tree's patterns, with the slots in the same places: the reading meant, as `kb_check_reading` checks it. The number of other readings is shown.
  - **The form.** `kb_check_text`: only Hao-shuo-de words, the level, the readability limits.
  - **The readback.** Fill each node's English template; that gives plain English for what the tree says. It is compared with the corrected English: by an LLM judge when one is at hand, else by a sentence-similarity score in the browser.
- **5. The loop**
  - Any failure in step 2 or 4 goes back to step 1 with the exact message. For example:
    - "slot B of bi-than wants a person or a thing, got zou3";
    - "the parser reads nan2 ren2 as two words here";
    - "the readback lost 'yesterday'".
  - At most three tries. Then the request goes to the full translator (TRANSLATOR_PLAN.md, through the daemon), and the case is saved as a test (§3, T-live).
- **6. Polish** (an LLM, optional)
  - It edits the tree, never the text:
    - leave out a repeated subject;
    - join two sentences with a pattern;
    - pick another form the KB lists for the same thing.
  - Steps 2 to 4 run again. An edit that fails is dropped, and the unpolished text stands.
- **7. Show:**
  - the pinyin (the hanzi when the reader turns them on);
  - the readback in English;
  - what step 0 changed.

## 3. Testing (the same loop, run at build time)

- **T-round. The round trip on the book** (fast tests)
  - Each book sentence goes: parse → tree → build → parse. It must come back with the same words, and the tree must be one of its readings. The spelling (hyphens, capitals, light syllables) is only counted.
  - The sentences: the 4,734 English and Hao-shuo-de pairs (INSTANT_TRANSLATION_PLAN.md §F), or the lesson sentences.
  - The fixture's round trip runs in `npm test`, every pattern's examples in `npm run test:push`, and the whole book with `node scripts/round-trip.js` (29 s, measured).
  - A rule the build can't write back fails here.
- **T-eng. English to Hao-shuo-de on the book**
  - The book's English goes through steps 0 to 5.
  - The built text is compared with the book's own Hao-shuo-de and scored: words shared, the reading meant, the readback.
  - The read-back is the full translator's: a blind reader reads the built text without the English, and a judge says which of the sketch's ideas it kept. The scores are the test set's (setScore): needed ideas kept, sentences keeping all theirs, and the same with the ideas of the sentences not built counted as lost.
  - Two samples: the book (`node scripts/t-eng.js`, one lesson example per lesson and 5 composite examples) and the full translator's test set (`node scripts/t-eng.js --set`, the ten stories and the first 100 everyday sentences). The report is `kb/reports/t-eng.md`.
  - `--replay` checks the kept answers again with no session (seconds); `--fresh` asks everything again.
  - Run on request and before a push, like the test set.
- **T-bad. Bad input**
  - Misspellings, broken grammar, ambiguity, nonsense, and instructions hidden in the text.
  - Each must be corrected (with the change shown), asked about, or refused. Never translated as it is.
- **T-live. Every failure becomes a test.** A request that needed the fallback, or that a reader flagged, is saved with its English, its tree and the messages, and joins T-eng.
- **Scores on the scoreboard:**
  - trees right the first time, and trees right within three tries;
  - round trips that hold;
  - inputs refused or asked about;
  - fallbacks to the full translator.

## 4. In the browser

- **The code part** (steps 2 to 4 and 7) is plain JavaScript; the parser already runs in the browser.
  - The dictionary goes as one small file made at build time: the forms, the kinds, the patterns' templates and rules, and the composite index built ahead.
  - Each check takes 20 to 90 ms in Node (measured, INSTANT_TRANSLATION_PLAN.md §1), so the loop costs little next to the LLM steps.
- **The LLM part** (steps 0, 1 and 6), one of these (Q1):
  - **a. Chrome's built-in model** (the Prompt API, Gemini Nano). Nothing for the page to download, and the answer can be held to a JSON schema. Only in Chrome, on machines that can run it (not checked).
  - **b. A small open model in the page** through WebLLM (WebGPU), such as Qwen3 at 1.7 B to 4 B parameters. It downloads 1 to 2.5 GB once and is held to the schema while it writes (estimated). The loop's exact messages are what can make a small model good enough.
  - **c. The LLM steps through the daemon** (Claude, one short request each), with the code steps in the browser. Not offline, but each request is small and its answer is checked locally.
- **With no LLM at all: a simple-English mode**
  - The person writes in a restricted English.
  - An editor suggests only words the dictionary has, and sentence shapes from the patterns' English templates.
  - Code turns the text into a tree directly. It works offline and is exact, at the book's level.
- **Spelling with no LLM:** the text box's own spell check, and a word the KB doesn't have marked as it is typed.

## 5. What is hard

- **Coverage.** English says things the 145 patterns can't. Step 0 has to split and simplify, and some meaning is lost; the readback shows the person what was kept.
- **The templates were written to teach, not to build.** The tree is made of the rules instead (B1), so the templates matter only for an English readback (Q5).
- **Several readings.** A built sentence can read in several ways. The reading meant must be among them, and the readback is what the person sees.
- **Stiff text.** The polish fixes some of it, within the checks.

## 6. Build order

- [x] **B1. The tree format:** a pattern id and named slots, taken from each pattern's template (A, B, C …), with the kind each slot takes. Tests on the fixture.
  - Built differently: a node is a parser rule and its slots, not a template. The templates' letters don't line up with the rules, and the rules are what the parser checks. In `src/lib/grammar/tree.js`.
  - A slot is named after its symbol in the rule (NP, verb), and a second one gets a number (NP, NP2). The kind a slot takes is the rule's word class for now; the kind net comes in with B4.
  - A leaf is a word (light syllable and sense kept), a composite with its words, a name in quotes, an open X, or a repeated syllable.
  - The checks say each problem as a sentence, ready for the loop: "slot verb of vp#2 wants a verb, got rén (noun)".
  - Tests: `src/lib/grammar/tree.test.js`, 23 tests on a tiny made-up grammar.
- [x] **B2. Build and readback:** fill the Hao-shuo-de and English templates, with the cast list.
  - The build walks the rules, puts back the words and commas a rule names, and spells the result the way the book does. It learns the book's habits: which words it joins (zhè-ge, wǒ-de), says light, or writes as a bare ge.
  - A habit never joins words that would spell a composite the tree doesn't use: tā-de spells 其, which would add a reading.
  - The readback is a word-by-word gloss in brackets named by the pattern: "[frame: I [vp: to be person]]". English sentences need an English side for each rule (Q5).
  - The cast list moves to B4. A book sentence already has its descriptions written out; a tree made from English is where they first come in.
- [x] **B3. The round trip on the book** (T-round), and the list of patterns that fail it.
  - `node scripts/round-trip.js` writes `kb/reports/round-trip.md`. It covers 4,598 sentences: lessons, composite examples, stories and the phrase book.
  - 4,591 of them parse, and the round trip holds for all 4,591 (measured). No pattern fails. Every tree is the first reading of its built sentence except one, which is a later one.
  - 69% are spelled exactly as the book spells them. The differences: hyphens 1,195, a light gè for a bare ge 133, capitals 58, light syllables 19, other 14.
  - The book writes gè after a word both ways: light 465 times, a bare ge 197 times. The build writes the light one.
  - In 950 sentences the book joins words that spell a composite (tā-de, méi-yǒu, shí-jiān), and the first reading takes them one by one (Q4). Most of the hyphen differences come from these.
  - With the composites first (Q4, 2026-10-24): still 4,591 of 4,591 hold, spelled exactly the same rose from 69% to 81%, and the sentences that split a composite fell from 950 to 269 (measured).
- [x] **B4. Steps 0 and 1:** the prompts with the checks and the loop, run through the daemon (Q1 c). Then T-bad and T-eng.
  - `src/lib/translator/tree-translate.js` has the steps, with the LLM passed in as `ask`, so the page can use the same code. Tests: `tree-translate.test.js` with a scripted LLM.
  - `node scripts/tree-translate.js "I eat rice."` runs it through headless Claude sessions: step 0 without tools, the tree step with kb_lookup.
  - Step 0 asks the person only about a change of meaning or a real ambiguity (Q2). A sentence too long or a word that is not English goes back to the LLM. It keeps "the man who …" in one sentence, and keeps a pronoun that the text never explains.
  - The tree step lists each rule with its slots and its English side. A failed check, a sentence that does not parse, or a reading that does not match goes back with the exact message. After 3 tries the sentence goes to the full translator.
  - The built sentence keeps the English "?" or "!".
  - First real runs (measured, 2026-10-24): 7 sentences in 5 runs. All of them built in the end; one went to the full translator once, before the format fix below. 3 took one try, 3 took two, and "The man who eats rice is my friend." took three: chī-fàn-de rén shì wǒ hǎo-guānxi-de rén.
  - The tree format is one part shape with a rule's fields and a leaf's fields, all optional. With a rule or a leaf in each slot, Claude's answers failed the format silently; the code checks say exactly what a mixed-up part lacks.
  - A composite that is a phrase (朋友 is hǎo-guānxi-de rén) now gets a message saying to build it with the rules.
  - The built tree is often not the first reading: reading 9 of 16, 45 of 84, 5 of 6. A reader takes the first one (Q7).
  - **T-bad** (measured, 2026-10-24): 22 of 22 cases pass (`node scripts/t-bad.js`, `kb/reports/t-bad.md`). 7 were corrected with the change shown, 4 asked about, 4 refused, and the 7 good texts were left as they were, with no question. 179 s, $0.27.
  - **T-eng on the book sample** (measured, 2026-10-24): 30 texts, one lesson example per lesson and 5 composite examples. 25 of 29 sentences built (86%), 22 texts right the first time, and 10 of the 25 have the book's own tree. The blind reader and the judge keep 70% of the needed ideas of what was built, and 72% of the sentences keep all theirs. Counting the ideas of the 4 sentences not built as lost, 58%. The hand-made stories of the full translator keep 92%.
  - **T-eng on the full translator's test set** (measured, 2026-10-24, `--set`):
    - The 100 everyday sentences: 78 built, 58 texts right the first time. 59% of the needed ideas kept, 54% of the sentences keep all theirs, 47% with the ideas not built as lost. 156 + 91 s, $4.96 + $0.63.
    - The ten stories: 104 of 216 sentences built (48%), no story whole. 49% of the needed ideas kept, 49% of the sentences keep all theirs, 22% with the ideas not built as lost. 633 + 74 s, $13.46 + $0.59. The full translator keeps 92% of the same stories. Two stories (5 and 8) stop at step 0, which asks a question, in both runs.
    - Long sentences rarely build: 59 of 94 with up to 6 words, 35 of 80 with 7 to 10, 9 of 30 with 11 to 14, 1 of 12 with more. A story sentence has 57 readings on average, an everyday one 2.6.
    - Why the 112 story sentences did not build (the last message): 51 only read first as something else (Q7); 41 build a sentence whose readings lack the tree; 10 put a word of the wrong kind in a slot; 10 trees did not read as one line.
    - **Step 0 splits long sentences** (2026-10-24): every sentence over 8 words is split at and, but, because, so, then, when and commas, the subject written out again; "the man who ..." stays whole (`splitOver` 8 in the prompt; `maxWords` 14, was 20, in the check). The same stories: 151 of 247 sentences built (61%). 59% of the needed ideas kept, 64% of the sentences keep all theirs, 36% with the ideas not built as lost. 704 + 115 s, $13.87 + $0.57. A sentence asked before with the same words and messages is answered from the kept trees (`sentenceKey`), so the short ones cost no new call.
      - By length: 106 of 151 with up to 6 words, 41 of 79 with 7 or 8, 4 of 15 with 9 or 10, 0 of 2 with 11 to 14; none longer. 5.9 words on average.
      - Why the 96 did not build: 35 only read first as something else (Q7), 46 build a sentence whose readings lack the tree, 10 put a word of the wrong kind in a slot, 5 trees did not read as one line.
  - Q7: on the book sample, the first-reading check alone sent 4 sentences to the full translator; without it, 29 of 29 would have built. In the first run, the sentences it sent read first as a wrong meaning, so the check stays on. On the everyday sentences it sent 21 of the 22 that did not build: without it, 96 of 100 would have built. Whether those 21 read wrong is not measured yet.
  - **Fast** (measured, book sample): steps 0 to 4 went from 1,546 s and $5.42 to 85 s and $1.47. The read-back went from 123 s and $0.68 (195 s and $0.84 one sentence at a time on the 25 built now) to 45 s and $0.30. On the sentences built both ways, the ideas kept are the same (15 of 20 before, 14 of 19 now). What changed:
    - The composites' build reads the saved parse results, so a fresh kb server answers its first kb_lookup in 1.6 s, not 66 s (`src/lib/kb/kb.js`, `buildMemo`).
    - The words are looked up in code and put in the prompt (`src/lib/translator/tree-words.js`): the 230 core words once, and under each sentence what its English words look up to. The tree step needs no tool.
    - Step 0, the tree step and the read-back each take many texts or sentences in one call (`correctMany`, `translateMany`, `readBackMany`), and only what failed goes back, with its last tree and its messages.
    - A tree is written as one line, like `[subject-predicate#1 S=[subject-predicate#3 NP=[subject-predicate#4 noun=men2] VP=[svo#3 VerbP=[svo#2 verb=kai1]]]]`, which builds mén kāi (`treeText`, `readTreeText` in `src/lib/grammar/tree.js`): many JSON trees in one answer came back broken.
    - Every answer is kept by its prompt in `.cache/t-eng-answers.json`. `--replay` checks the kept answers again with the code as it is now, with no session: the book sample in 10 s. `--fresh` asks everything again.
  - Why sentences still go to the full translator (the first run): spellings the book writes otherwise (zhè-xiē, wǎng-shàng), a composite read first where the words were meant (méi-guānxi), phrase composites (教室 is xué-de fáng-jiān), wǒ-men refused where a noun is wanted, and "beside", which the English word list lacks. One message is wrong: "植物 is not spelled zhi2wu4; it is zhi2wu4".
  - Still open: the scoreboard does not read T-eng yet; a noisy lookup can lead a tree astray ("He broke the tool." became bǎ-jù); the judge's counts move a few points between runs; sentences of 7 to 10 words still build half the time or less (the readings above).
- [~] **B5. The browser:** the dictionary file and steps 2 to 4 in the page.
  - The translator page (`/translator/`, which the book links for signed-in people on the list) asks how to translate each text:
    - **Quick:** one sonnet session writes the whole text, then the book's checks run on it. A few seconds.
    - **With meaning trees** (the default):
      - The daemon runs step 0 and the tree step (sonnet, `src/lib/translator/tree-request.js`), 8 sentences per call.
      - A sentence that no tree says after three tries goes to the quick translator.
      - The page builds each tree again and parses it (`src/lib/translator/tree-check.js`). It uses `src/data/tree-data.json`, the spelling habits and the rule English, made by `scripts/generate-tree-data.js`.
      - The page shows what the tree says and how each sentence was made.
    - **Slow and careful:** the full pipeline (opus, high effort): the writer with the kb tools, the blind reader and the judge. Several minutes.
  - The LLM steps go through the daemon (Q1 c), so the page still needs sign-in and the list. Only the check runs in the browser. B7 and B8 are the ways to need neither.
  - A request carries `mode`: 'tree', 'full', or none for quick.
    - `firestore.rules` allows only those (the emulator rules test passes 7 of 7).
    - The daemon gives each mode its own time limit: 3, 6 and 20 minutes.
  - Tried from the command line, with no Firestore: `node scripts/translator-daemon.js try --mode quick|tree|full [--lesson N] [--json FILE] "text"`.
    - It runs one text through the daemon's own code and prints each sentence, the book's checks and the page's check.
    - On one text (the umbrella and the tea):
      - quick: 6.6 s; both sentences pass the book's checks.
      - tree: 102 s. Step 0 split the first sentence. 2 of 3 sentences came from a tree (one took 3 tries), and both pass the page's check; the third went to quick. One tree is grammatical but wrong: "the time" became shí jiān, which reads back as "ten between" (the noisy lookup under B4's still open).
      - full: 281 s, 7 sentences, 3 of 5 needed ideas kept. "Tea" as zhíwù-de rè-shuǐ parses, but not as meant.
  - The daemon's KB keeps the parse memory, whose results hold no trees. When the KB has one, the tree translator makes its own parser, and it refuses a slim parser by name.
  - 2026-10-24: `firestore.rules` deployed to hao-shuo-de at the author's request. The 19 rules tests passed on the emulator first, and the dry run compiled.
  - Left: look at the page once in a browser.
- [ ] **B6. The polish** as tree edits.
- [ ] **B7. The simple-English mode.**
- [ ] **B8. A local model** (Q1 a or b), measured against c on T-eng.

## Q. Questions for the author

- [x] **Q1. The LLM steps:** a, b or c (§4)?
  - **Claude's pick:** c first, since it works today and gives the test numbers. Then a or b where the browser has it, with c as the fallback.
  - **The author (2026-10-24):** yes.
- [x] **Q2. The corrected English:** does step 0 always show it and wait for the person to accept it, or only when the meaning changed?
  - **Claude's pick:** wait only when the meaning changed or a word was ambiguous. Every change is listed under the result.
  - **The author (2026-10-24):** yes.
- [x] **Q3. Where it lives:** a mode of the `/translator/` page, or its own page?
  - **Claude's pick:** the `/translator/` page. The simple-English mode needs no LLM, so it can be open to everyone, without the list.
  - **The author (2026-10-24):** yes.
- [x] **Q4. Joined words that spell a composite:** should the parser read them as the composite first? The book writes méi-yǒu, and the first reading is méi and yǒu, not 没有. The list is in `kb/reports/round-trip.md`.
  - **Claude's pick:** not yet. Many read the same either way (tā-de is "his" both ways), and in others the words are meant (nǐ shuō-de is "what you say", not 内容). A tree made from English says which one it means, so look again after B4.
  - **The author (2026-10-24):** no: try the composites first.
  - Done (2026-10-24): the parser orders its readings by the most composites (`src/lib/grammar/earley.js`). The numbers are under B3. It raised Q6.
- [x] **Q5. An English side for each rule:** so the readback is English sentences, not a gloss?
  - **Claude's pick:** yes. Claude drafts them, starting with the patterns most sentences use, and the author reviews them in batches.
  - **The author (2026-10-24):** yes.
  - A rule's English side is its `say`, with its slots in braces: "{NP} is {NP2}". Drafts live in `review/rule-english/batch-N.json`. A draft is used only while its rule is unchanged.
  - `node scripts/rule-english.js --next 100` writes the next batch. Without options it writes `review/rule-english/rules.md`: each draft with its uses, an example and how the example reads back.
- [?] **Q5a. Batch 1 of the rule English:** 100 rules, the ones most sentences use. With them, 3,549 of 4,591 book sentences (77%) read back in English with no gloss left (measured). Review `review/rule-english/rules.md`. Known rough spots: object pronouns ("give I"), the measure word as "one", and some composite glosses.
- [x] **Q6. A word and de that spell a composite:** with the composites first, chī-de reads as 饭 and shuō-de as 内容, even where the book means "what is eaten" or "the one who speaks". 18 composites do this, in about 390 sentences; the list is in `kb/reports/round-trip.md`.
  - **Claude's pick:** composites first, except a word-and-de composite right before a noun: there the de-modifier reading comes first (shuō-de rén is "the one who speaks"). Where no noun follows, the composite stays first (wǒ yào chī-de reads as 饭 either way).
  - **The author (2026-10-24):** yes.
  - Done (2026-10-24): such a composite counts against its reading in the parser (`src/lib/grammar/earley.js`), and the build may join a word and de again before a noun (tā-de tóu), since that no longer makes the composite the reading.
  - On the book (measured): the round trip still holds for 4,591 of 4,591, and spelled exactly the same rose from 81% to 82%. 315 sentences now read a word and de before a noun as the words, on purpose. Word-and-de composites that are still the first reading fell from 18 in about 390 sentences to 12 in 119, mostly with no noun after them (wǒ yào chī-de). The sentences whose first reading splits a composite for another reason fell from 269 to 222.
- [x] **Q7. The first reading:** the loop accepts a tree when it is any reading of the built sentence. A reader, and the blind reader, takes the first. Should the tree have to be the first reading?
  - **Claude's pick:** yes in the page. A tree that is a later reading goes back with "it reads first as: …", like any other failure. Measure on T-eng how many sentences that sends to the full translator before turning it on.
  - **The author (2026-10-24):** yes.
  - Done (2026-10-24): `firstReading` in `src/lib/translator/tree-translate.js`, on by default (`--any-reading` turns it off in the scripts). Each try is recorded, so T-eng also counts what would have happened without the check.

## Log

- 2026-10-23 Plan written from the author's idea: a fixed algorithm between an LLM that corrects and shapes the input and one that polishes, a test-and-verify loop on the tree, and the whole thing in the browser.
- 2026-10-24 B1 to B3 built: the tree from the rules (not the templates), the build with the book's spelling habits, a gloss readback, and the round trip, which holds for all 4,591 book sentences that parse. Q4 and Q5 added.
- 2026-10-24 The author answered Q1 to Q5. Composites come first in the parser (Q4), which raised Q6. The rule English is in place, with batch 1 of 100 drafts waiting for review (Q5a). B4 steps 0 and 1 built and run on real sentences through Claude sessions; Q7 added.
- 2026-10-24 Q6 and Q7 done. T-bad passes 22 of 22. T-eng scores the built text with the full translator's blind reader and judge, on the book sample and on the test set. The book sample now runs 13 times faster (130 s, not 1,669 s): the words go in the prompt, many sentences go in one call, trees are one line, and kept answers can be replayed with no session. B4 done.
- 2026-10-24 Step 0 splits sentences of over 8 words, which raises the stories from 48% to 61%. B5 built:
  - the page's three modes
  - the daemon's tree and full sessions
  - a request's mode in the rules
  - the page's own check of each tree
  - a `try` command that runs one text through the daemon's code with no Firestore
