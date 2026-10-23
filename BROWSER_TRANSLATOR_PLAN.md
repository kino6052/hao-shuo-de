# Browser translator plan

The author asked (2026-10-23) for a translator that is reliable, not fully based on an LLM, and done in the browser. The English is corrected first, so bad input never goes in. An LLM turns it into a fixed format that code can check, a **meaning tree**; fixed code builds the Hao-shuo-de from the tree; an LLM only polishes the result. A test-and-verify loop makes sure every tree parses. This file lists the steps, the loop, the tests, what runs where, and the questions for the author.

It builds on [TRANSLATOR_PLAN.md](TRANSLATOR_PLAN.md) (the checks, the glossary, the test set and the daemon) and [INSTANT_TRANSLATION_PLAN.md](INSTANT_TRANSLATION_PLAN.md). How this plan differs from that plan's option B: B turned English word order into Hao-shuo-de with rules, and only 55% of its sentences parsed. Here the LLM handles the English, and the code handles only the Hao-shuo-de, which the patterns already describe.

**Now:** B1 to B3 are built: the meaning tree, the build and the round trip, which holds for every book sentence that parses. B4 waits for Q1. Waiting for the author: §Q.

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
- [ ] **B4. Steps 0 and 1:** the prompts with the checks and the loop, run through the daemon (Q1 c). Then T-bad and T-eng.
- [ ] **B5. The browser:** the dictionary file and steps 2 to 4 in the page.
- [ ] **B6. The polish** as tree edits.
- [ ] **B7. The simple-English mode.**
- [ ] **B8. A local model** (Q1 a or b), measured against c on T-eng.

## Q. Questions for the author

- [?] **Q1. The LLM steps:** a, b or c (§4)?
  - **Claude's pick:** c first, since it works today and gives the test numbers. Then a or b where the browser has it, with c as the fallback.
- [?] **Q2. The corrected English:** does step 0 always show it and wait for the person to accept it, or only when the meaning changed?
  - **Claude's pick:** wait only when the meaning changed or a word was ambiguous. Every change is listed under the result.
- [?] **Q3. Where it lives:** a mode of the `/translator/` page, or its own page?
  - **Claude's pick:** the `/translator/` page. The simple-English mode needs no LLM, so it can be open to everyone, without the list.
- [?] **Q4. Joined words that spell a composite:** should the parser read them as the composite first? The book writes méi-yǒu, and the first reading is méi and yǒu, not 没有. The list is in `kb/reports/round-trip.md`.
  - **Claude's pick:** not yet. Many read the same either way (tā-de is "his" both ways), and in others the words are meant (nǐ shuō-de is "what you say", not 内容). A tree made from English says which one it means, so look again after B4.
- [?] **Q5. An English side for each rule:** so the readback is English sentences, not a gloss?
  - **Claude's pick:** yes. Claude drafts them, starting with the patterns most sentences use, and the author reviews them in batches.

## Log

- 2026-10-23 Plan written from the author's idea: a fixed algorithm between an LLM that corrects and shapes the input and one that polishes, a test-and-verify loop on the tree, and the whole thing in the browser.
- 2026-10-24 B1 to B3 built: the tree from the rules (not the templates), the build with the book's spelling habits, a gloss readback, and the round trip, which holds for all 4,591 book sentences that parse. Q4 and Q5 added.
