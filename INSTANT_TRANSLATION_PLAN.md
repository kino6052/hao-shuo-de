# Instant translation plan

The owner asked (2026-10-22, from the phone): translation must be near-instant. Today one line takes about 80 s with Opus (about 66 s of it the writing session), a 3-sentence text 362 s, and the 110-text test set about an hour at 4 at a time (TRANSLATOR_PLAN.md, measured by the agent running the test set). This file lists the ways to make it fast, says what each one would look like to the person on the page, what was measured and what is only estimated, and ranks them. It builds on [TRANSLATOR_PLAN.md](TRANSLATOR_PLAN.md) (the pipeline, parts A to S) and follows the spirit of [OPTIMIZATIONS.md](OPTIMIZATIONS.md): measure first, keep in memory, check that the answers stay the same.

**Now:** research only (2026-10-22). Nothing in `translator/`, `src/` or `scripts/` was changed. The measurements were run from scratch scripts outside the repo (`%TEMP%\instant-measure\`), which import the repo's own code read-only: the KB, `formOf`, `askCheckText`, `askMemory`, `askGloss`, the pipeline's `runClaude` and the saved Claude login. The owner's own idea (a rough draft from the data with no AI, then an agent only polishes it) is option **P** below; the owner's refinement (break the text into word and grammar pieces, then an agent stitches them) is option **S**, and the two together come first in the ranking. Waiting for the owner: the questions in §Q.

**Live view:** `npm run dev`, then http://127.0.0.1:5173/__plan/?file=INSTANT_TRANSLATION_PLAN.md

**Marks:** `[ ]` to do · `[~]` doing now · `[x]` done · `[?]` waits for the owner · `[-]` dropped. A line under an item without a mark is a note. **(measured)** and **(estimated)** say which numbers were timed on this PC and which are guesses.

## 1. Where the time goes today

- **The writing session is an agent loop.** One `claude -p` session calls the kb tools again and again (look up, check, check the reading, look up again), and every call is one more model turn. The turns, not the tools, are the cost.
- **The kb tools are fast** (measured): `kb_check_text` on a sentence 40 to 90 ms; `kb_memory` 0.4 s as written (it tokenizes the 5,410 pool sentences on every call; with the tokens kept, 1,000 queries took 0.9 s in all); `openKb` 1.9 s cold and **0.26 s on every later call** (it walks the repo for a stamp each time, and the kb MCP server opens it for every tool call).
- **Starting a session costs 4 to 10 s before any thinking** (measured, "Reply with OK"): Haiku 3.9 to 5.6 s, Sonnet 5.4 to 6.5 s, Opus 5.3 to 10.1 s. So no path that starts a fresh `claude -p` per request can be near-instant.
- **A session that is already running answers a short request in 1.5 to 2.8 s with Haiku and 3.2 to 7.6 s with Sonnet** (measured: the process started and left idle, then sent the request on its stdin, `--input-format stream-json`).
- **The models think before they answer, and the CLI does not let us stop it** (measured): a polish that answers 100 to 700 characters spent 1,900 to 9,800 output tokens; `--effort low`, `alwaysThinkingEnabled: false` in `--settings`, `MAX_THINKING_TOKENS=0` and "answer at once" in the prompt all left it at 10 to 25 s. The API (not the CLI) can turn thinking off; that is Q2.
- **A faster model in today's loop is slower, not faster** (measured, the umbrella line through `npm run translator -- translate --no-blind --effort low`): Sonnet 87 s (10 tool calls, $0.12), Haiku 144 s (27 tool calls, $0.02), against Opus's 66 s for the same session. A weaker model takes more turns to get the checks to pass.

## 2. The options

Each option: what the person sees, the latency, what can go wrong with quality, how to verify it.

### P. A rough draft from the data, then a polish (the owner's idea)

- **How it works**
  - The English goes to Mandarin first (a short request to a warm Haiku session, or a local translation model, Q3). Hao-shuo-de words are Mandarin words, so Mandarin is the shortest bridge.
  - The draft (no AI): split the Mandarin into the longest words the dictionary has (every composite and core word, longest match first) and put each one's Hao-shuo-de form in its place (`formOf`, the form `kb_lookup` gives). A character with no word is marked.
  - `kb_check_text` checks the draft (ms) and the page shows it at once, labelled rough.
  - One polish request (no tools): the English, the draft, what the checker said, the 230 words, and the rules (keep the draft's forms, fix the order, a long description once and then zhè-ge plus its noun). It answers the pinyin only.
  - `kb_check_text` again (ms); a failing sentence goes back once with the checker's words; the better answer is kept, as the pipeline does today.
  - Later, in the background, the full pipeline (Opus, the blind reader and the judge) can still run and replace the result if it scores better (P5).
- **What the person sees:** "Rough draft" with the Hao-shuo-de in about 2 to 3 s; the polished, checked text replaces it a few seconds later; optionally "checked by the full translator" a minute or two after that.
- **Latency (measured on this PC, the steps in one Node process, Haiku sessions started ahead and left waiting)**
  - English to Mandarin: one line 1.5 to 3.1 s, 3 sentences 1.5 to 2.1 s, 13 lines 2.4 to 5.3 s
  - The draft: 4 to 100 ms a text, once the KB is warm. The first `formOf` builds the composite index: about 39 s, once per process, so a resident worker builds it at start
  - Each check: 20 to 90 ms
  - **The draft on screen: 1.6 to 2.2 s after the request for one line or three sentences, 2.6 to 5.3 s for 13 lines** (plus Firestore's round trip, estimated 0.3 to 1 s)
  - The polish with Haiku through the CLI: one line 10 to 16 s, 3 sentences 12 to 29 s, 13 lines 23 to 46 s plus one repair of 11 to 16 s. **Whole path: one line 12.5 to 18 s, 3 sentences 14 to 32 s, 13 lines 39 to 60 s**, against 80 s, 362 s and (not timed) today
  - The same polish without thinking, through the API (estimated, Q2): about 1 to 3 s, so **about 3 to 5 s for one line** in all
- **Quality (measured, small sample)**
  - The draft alone, 1,000 everyday sentences (`kb/yardsticks/sentences.json`, their own Mandarin, 99% of them 4 English words or fewer): every character has a word in 98%, only Hao-shuo-de words in 98%, **parses in 85%**. In 0.05 s for all 1,000.
  - The draft alone, the 125 lines of the ten stories (12.4 English words a line, Mandarin by Haiku): every character has a word in 60%, **parses in 32%** (53% of the lines with every character mapped), and it shares 51% of its words with the book's own Hao-shuo-de. What it misses: 孩 (13 lines; 女孩 is not an entry), names (杰克), animals with no entry (蚱蜢, 鹅, 鸭), and it puts a long description in every time (狼 17 times, 熊 12): the cast list is not applied.
  - After the polish (Haiku, Sonnet or Opus): the umbrella text 3 of 3 sentences pass the checks; Little Red Riding Hood's 13 lines 11 of 13 after one request and 12 or 13 after one repair. Haiku's warm runs: 1/1, 3/3, 10 to 13 of 13.
  - The meaning, read back by a Sonnet blind reader (the repo's `blind-reader.md` prompt) and judged by Sonnet, line by line, strictly: the draft keeps 5 of 13 story lines fully and 0 of 3 umbrella sentences (the rest weaker); polished by Haiku 9 of 13, by Sonnet 10, by Opus 10 (the rest weaker, none lost). Judged on the whole text instead, every polished version and today's full pipeline (the hand-run story-1 and umbrella results) keep all 13 and all 3; the draft 11 of 13 and 1 of 3. Two caveats: the story English carries "(literally: …)" hints that help the polisher, and the sample is two texts.
  - The polish costs (as the CLI reports): Haiku $0.004 to $0.009 a text, Sonnet $0.04 to $0.05, Opus $0.09 to $0.11. Today's pipeline: about $0.60 a text at Opus rates (BENCHMARK_PLAN.md).
- **What could go wrong**
  - The polish has no `kb_check_reading`, `kb_memory` or Akinator: it can keep a sentence that parses but reads otherwise (§1 of TRANSLATOR_PLAN.md: "Tiān shàng xià shuǐ"). The fix is in P3 (the check after the polish asks for the reading meant, from the parser's own first readings) and P5 (the full check in the background).
  - The Mandarin step can choose a word the dictionary lacks or a figure of speech; the draft then marks a hole and the polish has to describe it with no tools. Gaps are logged as today (E2).
  - The draft's word choice follows Mandarin, not the book's habits (祖母 → "māma-de māma" where the book says "bàba-māma-de bàba-māma"): the glossary (E1) and the book's sentences (P2) correct that.
- **How to verify:** run the 110-text test set through P with `npm run translator -- score`'s own numbers (only Hao-shuo-de words, meant reading, the blind reader's kept ideas), and compare with the full pipeline's scores on the same texts. Ship P as the default only if it stays within an agreed margin of Q8's bar (Q4).

### S. Break the English into word and grammar pieces, then an agent stitches them (the owner's refinement, 2026-10-23)

- **How it works**
  - The breakdown (no AI): each English word goes through `kb_lookup` (pronouns by a small table, contractions and the common irregular pasts undone first), and up to three of its forms are kept: glossary first, then a gloss, then the shortest. Every `kb_constructions` row the sentence matches comes along with its patterns, templates and examples (the tool's own text).
  - One request (no tools): the English, the pieces for each sentence, the 230 words and the rules. The agent picks the right sense and stitches the sentence; then the same checks and one repair as P.
  - No Mandarin step, so there is no outside translation to rely on, and the pieces carry the book's own choices (the glossary, the patterns and their lessons).
- **Breakdown coverage (measured)**
  - The 1,000 everyday sentences: 96% of the content words get a form, **95% of the sentences are covered in full** (every word has a form or a grammar row), 95% match at least one grammar row (2.7 on average)
  - The 125 story lines: 96% of the content words, **88% of the lines in full**, every line matches a grammar row (5.2 on average)
  - What is left over: particles and odd words (out, off, into, asleep, something, myself, abroad, unhappy). A form is not always the right sense: "fellow" gets the form for a companion, "stupid" a description; the agent has to choose
  - Speed: about 2 ms a sentence once the word index is warm (the first lookups build it: about 40 s, once per process, the same index as P's)
- **Stitch quality against P (measured, warm Haiku, the umbrella text and two stories with the "(literally: …)" hints taken out, 28 sentences)**
  - Pass the checks, first answer then after one repair: stitch 3/3, 11 then 11/13, 9 then 12/12; P (draft then polish) 3/3, 9 then 11/13, 8 then 11/12; **both together** (the pieces and P's draft in one prompt) 3/3, 12 then 13/13, 11 then 12/12, so **28 of 28**, the best of the three
  - The meaning, line by line by a Sonnet blind reader and judge: kept in full stitch 21 of 28, P 24, both 20; **none lost** in any. The gap comes from one story (stitch 5 of 12 kept, P 9) and is within the judge's noise: P's first story went from 9 to 13 of 13 between two runs
  - Time (the whole path): umbrella stitch 31 s, P 26 s, both 27 s; the stories stitch 54 and 70 s, P 74 and 113 s, both 71 s each. All slow for the same reason as P: the model thinks for 10 to 50 s through the CLI. The pieces are 12,000 to 36,000 characters of prompt against P's 6,000 to 8,000
- **What the person sees:** no readable draft to show early (pieces are not a sentence), so the first Hao-shuo-de comes with the stitched answer; P shows its draft in about 2 s
- **What could go wrong:** the wrong sense of a word (the pieces list several; nothing checks the choice but the blind reader); long texts make long prompts
- **Verdict:** as good as P on the checks and close on the meaning, a little faster on long texts (no Mandarin step, fewer repairs), with no early draft. **Best is both in one prompt:** P's draft for the early screen and the sentence shape, S's pieces for the book's own words and grammar. That is now P2's prompt.

### K. DeepSeek in the browser for the polish or stitch step (the owner's question, 2026-10-23)

- **The idea:** the slowest step is the one model request that thinks for 10 to 50 s (P's polish, S's stitch). Send that one request to DeepSeek's chat in the owner's logged-in Chrome tab through browser-controller's `ask.ts` (`pnpm ask --new -f <prompt file> -o <reply file>`) with DeepThink off, so it answers without thinking first. The draft, the pieces and the checks stay local.
- **Not measured:** at 01:12 on 2026-10-23 Chrome was running but the Browser Controller extension did not connect to the server (one minute of retries), so no request could be sent. The two prompts are ready to try: `%TEMP%\instant-measure\ds-umbrella.txt` (13,000 characters, 3 sentences) and `ds-storyA.txt` (36,000 characters, 13 lines). Each holds S's stitch prompt and pieces, the same ones Haiku got. Run each, time it, then put the reply through `kb_check_text` and the same blind reader and judge as S (28 sentences, so the numbers compare).
- **Expected latency (estimated):** a non-thinking chat reply of 100 to 700 characters usually takes a few seconds once it starts. To that add pasting 13,000 to 36,000 characters into the page, the page's own rendering and `ask.ts` waiting for the reply to stop growing. A guess of 5 to 15 s per text, not timed.
- **Costs and risks**
  - The browser must be on, the extension connected (it was not tonight) and DeepSeek logged in. The PC sleeping, a Chrome update or a logout stops the translator, and nobody is there to fix it at night.
  - One tab answers one request at a time, so requests queue: 4 people at once wait 4 times as long. More tabs might help but are untested.
  - The reply has no JSON schema; a stray line or a markdown fence breaks the parse. Easy to catch, since the checks run anyway.
  - The page can change its layout (the `ask.ts` selectors break), slow down at busy hours, rate-limit or show a captcha.
  - Every text a person sends goes to DeepSeek's servers under the owner's account. That is a privacy change the people on the list have not agreed to, and automating a consumer chat page may break its terms of use.
  - Quality unverified: DeepSeek has not seen Hao-shuo-de. The checks catch non-words and failed parses, but not a wrong meaning; only the blind reader does.
- **A cleaner way to the same speed:** DeepSeek's own API (paid, billed per token, no browser, thinking off), or the Anthropic API with thinking off (Q2). Both remove every browser risk above; the privacy point remains for DeepSeek.
- **Verdict:** fine as a one-evening experiment to learn how fast and how good a non-thinking model is on this task. Not suitable as the live path.

### A. A cache of finished translations, and the common sentences done ahead

- **What the person sees:** a text (or a sentence) already translated comes back at once, under 1 s with Firestore.
- **Latency:** a lookup, milliseconds (estimated; Firestore's round trip dominates).
- **How often it hits** (measured): of the 1,000 everyday sentences, 3% have a book sentence with exactly the same English words, 5% one that shares 80%, 22% one that shares 60%. So a cache of the book alone answers few new texts; it grows with every translation, and repeats (the same text sent twice, the test set run again) are free.
- **What could go wrong:** a stale result after the dictionary changes. Key each entry by the English (normalized) and the KB's stamp, as `.cache/` does (OPTIMIZATIONS.md), and check a hit again with `kb_check_text` (ms) before showing it.
- **How to verify:** a hit must pass the same checks as a fresh result; count hits per week.
- Precomputing "the common sentences" offline (the 1,000 everyday sentences, then more) with the full pipeline costs about $0.60 each at Opus rates and an hour per 110 texts: worth it for a phrase-book page, not as the main answer, given the hit rates above.

### B. A translator from the KB alone, the LLM only for the rest

- **From the English, word by word** (measured, 1,000 everyday sentences): pronouns and "not" by a small table, the rest through `kb_english` and `formOf`: every word found in 83%, **parses in 55%**, and the meaning is often wrong ("It's not mine." → "Tā bù wǒ-de."; "What did you do?" → "Shénme nǐ ma?"). English word order and the auxiliaries need rules a grammar would take months to cover.
- **From the Mandarin** (P's draft): 85% parse on short sentences, 32% on story lines, meaning weaker than polished (above).
- **Verdict:** not good enough alone. Its value is as P's draft, and as an answer of its own only for a sentence whose draft passes every check, including the reading meant (P3).

### C. A faster model or a smaller prompt for the writing step

- **In today's agent loop:** measured slower (Sonnet 87 s, Haiku 144 s against Opus 66 s): more turns. Dropped as a speed fix.
- **As the polisher in P:** Haiku is enough for the checks (all passed after one repair); Sonnet and Opus kept one more story line of 13 in the strict reading. Smaller prompt: P's polish prompt is about 5,000 characters (the 230 words and the rules) against the skill plus the agent prompt plus tool results today.
- **How to verify:** the test set, each model as P's polisher.

### D. Streaming, so the first words show within a second

- **What the person sees:** the steps and then the text appear as they are made, instead of one wait.
- **What it can do:** the CLI streams the answer as it is written (`--include-partial-messages`) and the daemon could write it to the request every few hundred ms. But the model thinks first (10 to 25 s for the polish through the CLI), so the first word of the polish comes late. In P, **the draft is the first words**: 1.6 to 2.2 s (measured) for short texts.
- Under a second end to end needs the Mandarin step under a second too: the API without thinking, or a local translation model (both estimated; Q2, Q3).
- **What could go wrong:** a sentence shown and then changed by the polish. Label the draft "rough" and replace it whole.

### E. Batching and running steps side by side

- **Show the result before the blind reader and the judge** (they take about 14 s of the 80 s on one line, from the numbers above): the person sees the checked text at about 66 s; the reading-back fills in after. A small change in `pipeline.js` once the test-set agent is done.
- **Sentences side by side:** a long text split into groups, each its own session, joined after; 362 s for 3 sentences would come close to one sentence's time. Risk: the cast list and the links between sentences (so, then, he) break across groups.
- **Sessions started ahead:** the daemon keeps one or two sessions started and waiting (measured: 4 to 10 s saved a request). The daemon's one-session-per-request rule (Q13) still holds: each waiting session is used once and then closed.
- **The kb server:** keep the opened KB in memory and watch files instead of a stamp walk on every tool call (0.26 s each, measured; tens of calls a text).
- **The test set:** with P, 110 texts at about 15 to 60 s each, 4 at a time, comes to about 10 to 20 minutes (estimated from the timings above), against an hour.

### F. A fine-tuned or distilled small model

Assessed again on 2026-10-23, at the owner's question: does a fast grammar model, or another small model, make sense as the translator?

- **What the person sees:** the whole translation from one small model in under a second or two, with the local checks after it, and the LLM only when the checks fail.
- **The training data there is (counted 2026-10-23)**
  - **English with Hao-shuo-de, ready now: 4,734 pairs** from the book (3,028 composite examples, 1,131 lesson examples, 317 pattern examples, 153 story lines, 105 phrase-book lines), about 29,000 Hao-shuo-de words in all. They are short: half are 4 English words or fewer, 90% are 7 or fewer. Plus about 250 checked sentences translated by hand (the ten stories and the umbrella text)
  - **The 1,000 everyday sentences are English with Mandarin, not Hao-shuo-de:** they become training data only after a translator has made and checked their Hao-shuo-de
  - **The dictionary and the KB** (230 words, 5,490 composites with their forms, the grammar patterns, the glossary) are not sentence pairs. They do two other jobs: the parser checks every output (the KB already is the "grammar model", exact, in ms), and the forms can generate pairs
  - **More pairs can be made (distillation):** run P with S's pieces over a larger English–Mandarin set (the 1,000 sentences, then a public set such as Tatoeba's tens of thousands of pairs) and keep only the outputs that pass the checks. P cost $0.004 to $0.009 a text with Haiku (measured) and passed 25 to 28 of 28 sentences, so 20,000 pairs cost roughly $50 to $150 and a day or two of running at 4 at a time (estimated). Most would be short sentences, as the sources are
- **The compute**
  - **This PC** (Intel i7-1165G7, 16 GB, no GPU, measured): training even a small model on the CPU takes days and stalls the machine. It can **run** a small model: a translation model of about 80 M parameters (Marian/opus-mt size) in about 0.1 to 0.5 s a sentence, a 0.5 to 1.5 B language model in a few seconds a sentence (estimated)
  - **A rented GPU** (one A10 or L4, a few dollars an hour): fine-tuning an 80 M translation model or a LoRA on a 0.5 to 1.5 B model with 5,000 to 20,000 pairs takes about an hour or two, under $10 a run (estimated)
  - The best start is probably an English-to-Mandarin translation model (opus-mt-en-zh) fine-tuned to write Hao-shuo-de **in hanzi**, since the book's sentences carry their hanzi; the dictionary then turns the hanzi back into pinyin and word references, as P's draft does. It already knows English to Mandarin, so it only has to learn the shift
- **Expected quality against the checks (estimated, not trained)**
  - Short everyday sentences: roughly what P's draft reaches or a little better, 80 to 90% parse. The training data looks like them
  - Story sentences (12 words on average): much lower, likely under half parsing, because the data has almost no long sentences; P's draft alone reached 32%
  - The meaning is the open question, and only the blind reader measures it. A small model has no way to describe a word it never saw (a wolf as "a big bad animal"); the LLM does that today
  - So it would sit where P's draft sits now: a fast first draft that still needs the LLM on failure. It would not replace the polish
- **Time to build (estimated):** making the distilled pairs 2 to 3 days (mostly waiting); training and tuning 1 to 2 days; measuring on the test set against P 1 day; wiring it into the daemon 1 to 2 days; **about one to two weeks**. Then a retrain whenever the dictionary changes: the composites changed by the thousands this month, and a model trained on old forms writes old forms. P's draft and pieces read the dictionary live, so they never go stale
- **Recommendation: only later, not now.** It would cut the draft from about 2 s to well under a second, but P already shows a draft in about 2 s and the slow step is the polish, which a small model does not remove. Revisit when three things hold: the dictionary is stable; P has produced 10,000 to 20,000 checked pairs (its own logs, free); and the API route (Q2) is turned down, so a local model is the only way below about 15 s. Until then, one cheap experiment can settle it: fine-tune opus-mt-en-zh on the 4,734 book pairs on a rented GPU (an hour, a few dollars) and measure its parse rate on the 1,000 sentences and the 125 story lines against P's draft (85% and 32%).

## 3. The ranking

- **1. P with S's pieces in the same prompt, sessions started ahead (P1 to P6).** The draft shows in about 2 s; the pieces lifted the checks to 28 of 28 sentences on three texts (measured), with no meaning lost. S alone is a close second if the Mandarin step is unwanted (no early draft). The figures below are P's alone. Fastest real gain on the current login: draft on screen in about 2 to 3 s, checked result in about 12 to 18 s for a line (from 80 s) and 14 to 32 s for three sentences (from 362 s), all measured. Quality risk medium: the checks pass as often as today's, the meaning was a little weaker than the full pipeline in the strict reading on two texts; the full pipeline in the background removes the risk for anything that matters. Cost: about a hundredth of today's per text with Haiku.
- **2. P through the API without thinking (Q2).** The same path at about 3 to 5 s for a line (estimated). Same quality risk; costs money on a separate bill.
- **2b. K, DeepSeek in the browser.** Only as an experiment to measure a non-thinking model (not measured: the extension was not connected); too fragile and too open on privacy for the live path.
- **3. A, the cache.** Instant for repeats, no quality risk once a hit is checked again; few hits at first (3% exact against the book).
- **4. E, the quick fixes to today's pipeline.** About 15 to 20% off (the reader after the result, sessions started ahead, the kb server's stamp); side-by-side sentences more, with a coherence risk.
- **5. D, streaming.** Comes with P (the draft is the first words); on its own it does not shorten the thinking.
- **6. B alone.** Fast (ms) but wrong too often; only as P's draft.
- **7. C in today's loop.** Measured slower. Dropped.
- **8. F, a small trained model.** Only later: 4,734 short book pairs today, no GPU here, one to two weeks to build, a retrain whenever the dictionary changes, and it would replace P's 2 s draft, not the slow polish. Revisit once the dictionary is stable and P has made 10,000 to 20,000 checked pairs.

## 4. Build order (after the test-set agent finishes in `translator/`)

- [ ] **P1. The draft** (`src/lib/translator/draft.js`): the Mandarin split into dictionary words, each with its form; names kept in quotes (the English's capitalized words); a few aliases where Mandarin has no entry but a near one exists (女孩 → xiǎo nǚ-rén); the cast list applied (a description over 6 words in full once, then zhè-ge and its head word). Tests on the fixture. Measured on the 1,000 sentences and the 125 story lines, the numbers above as the floor.
- [ ] **P2. The polish prompt** (`prompts/translator-polish.md`): the English, the draft, the checker's words, S's pieces (each word's forms from `kb_lookup`, the matching `kb_constructions` rows), the closest book sentence (`kb_memory`, made fast by keeping the pool's tokens), the glossary rows for the text's words, the 230 words and the rules. JSON out: one pinyin per sentence, the sketch, the gaps.
- [ ] **P3. The checks after the polish:** `verifyAnswer` as today; the reading meant from the parser's first readings and the gloss; one repair; the better answer kept.
- [ ] **P4. A resident worker** in the daemon: the KB and the composite index loaded once (39 s at start, then ms), one or two Haiku sessions started ahead and each used once, the draft written to the request at once and the polished result after.
- [ ] **P5. The full check in the background:** the full pipeline (today's, Opus) runs after P's answer is shown and replaces it when it scores better; the page says which one it shows. Can be switched off to save cost (Q5).
- [ ] **P6. The test set through P,** with the full pipeline's numbers beside it (`score`), before P becomes the default.
- [ ] **A1. The cache:** a result keyed by the normalized English and the KB's stamp; a hit is checked again before it is shown.
- [ ] **E1. Today's pipeline:** the result shown before the blind reader; the kb server keeps its KB and watches files.

## Q. Questions for the owner

- [?] **Q1. Go ahead with P** as a new path beside the pipeline (P1 to P6, built once the test-set agent is done in `translator/`)?
- [?] **Q2. An API key.** The CLI login cannot turn thinking off, so the polish takes 10 to 25 s through it (measured). The Anthropic API can, which should bring a line to about 3 to 5 s in all (estimated). It is billed apart from the Claude login. Yes, or stay on the login at about 15 s?
- [?] **Q3. The English-to-Mandarin step:** a warm Haiku session (1.5 to 5 s, measured, on the login), the API (about a second, estimated), or a local translation model (estimated well under a second on this CPU, a few hundred MB to download, not tried)?
- [?] **Q4. The bar for P:** the same as Q8 in TRANSLATOR_PLAN.md (90% of sentences keep every needed idea), or a little lower in exchange for speed, with the full check in the background?
- [?] **Q5. The full check in the background** after every fast answer (about $0.60 and a minute or two each at Opus rates), only on request, or only for the owner's own texts?
- [?] **Q7. DeepSeek:** try K once (Chrome on, the extension connected, DeepSeek logged in, DeepThink off) to learn how fast a non-thinking model is? Is sending the people's texts to DeepSeek acceptable at all, even through its API?
- [?] **Q6. Showing the rough draft** before the polish, labelled "rough": yes or no?

## Log

- 2026-10-22 Researched and measured (scratch scripts in `%TEMP%\instant-measure\`, the repo's code read-only, nothing in the repo changed): session start 4 to 10 s; a session started ahead answers in 1.5 to 2.8 s (Haiku); thinking cannot be turned off from the CLI; Sonnet and Haiku in today's loop take 87 s and 144 s against Opus's 66 s. The owner's idea, a rough draft from the data and a polish (P), measured: draft on screen in 1.6 to 5.3 s, the checked result in 12.5 to 18 s for one line, 14 to 32 s for three sentences, 39 to 60 s for 13 lines; the draft parses in 85% of the everyday sentences and 32% of the story lines, and after the polish 12 or 13 of 13 story lines pass the checks.
- 2026-10-23 The owner's refinement, S (break the English into word and grammar pieces, then an agent stitches them), measured: 95% of the everyday sentences and 88% of the story lines are covered in full, in about 2 ms a sentence. Stitching passes the checks about as often as P (26 against 25 of 28) with no meaning lost. Both in one prompt passed 28 of 28, so P2's prompt now carries S's pieces.
- 2026-10-23 K (DeepSeek in the browser for the slow step) assessed but not measured: the browser extension was not connected (Chrome was running). The prompts are ready in `%TEMP%\instant-measure\`; costs and risks listed; Q7 added.
- 2026-10-23 F (a small trained model) assessed again: 4,734 English–Hao-shuo-de pairs from the book (counted; half are 4 words or fewer), about 250 checked by hand, and the 1,000 everyday pairs have no Hao-shuo-de yet. No GPU here, so training needs a rented one. It would take one to two weeks to build and need a retrain whenever the dictionary changes. Recommendation: only later; meanwhile a one-hour fine-tune of opus-mt-en-zh on a rented GPU would settle it.
