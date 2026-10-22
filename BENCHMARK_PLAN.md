# Benchmark plan

A benchmark for Hao-shuo-de: a small, fixed set of measurements, run the same way every time, that says whether the language and the translator got better or worse, and how the language compares with Mandarin and with plain English for a learner. [TRANSLATOR_PLAN.md](TRANSLATOR_PLAN.md) F1 is a quality bar for one test set; [STRESS_PLAN.md](STRESS_PLAN.md) hunts for failures. This plan is the yardstick that sits over both: the numbers that go on the scoreboard, how they are made trustworthy, and the tests with people that no model can stand in for.

It does not repeat STRESS_PLAN.md §9 (ConlangBench, Camlang, open MT for Esperanto, the ARAL proposal, Nichols complexity). It builds on them and adds methods from machine-translation evaluation, LLM judging and language-learning research (§3), each checked by web search on 2026-10-22.

**Now:** the plan is written; nothing is built. Phase 1 (§6) needs no Claude login and no money: it can start at once, from the ten stories already translated by hand (`review/translations/hand/`) and the 1,000 sentence pairs in `kb/yardsticks/sentences.json`. Then the author's answers to Q1 and Q2.

**Live view:** `npm run dev`, then http://127.0.0.1:5173/__plan/?file=BENCHMARK_PLAN.md

**Marks:** `[ ]` to do · `[~]` doing now · `[x]` done · `[?]` waits for the author · `[-]` dropped. A line under an item without a mark is a note.

## 0. This plan

- [x] **0.1 The plan:** this file, with ids to point at in a session (BM1 and on for decisions)
- [ ] **0.2 Links:** TRANSLATOR_PLAN.md F and STRESS_PLAN.md §9 point here once the author agrees to the plan

## 1. What a benchmark has to answer

Three different questions, each with its own measurements. Mixing them is how a number ends up meaning nothing.

- **The language.** Can the 230 words and 145 patterns say what people need, at what cost in words, and with how much ambiguity? This needs no AI and no people: the data, the parser and real texts.
- **The translator.** Given the language, does the pipeline produce sentences that are Hao-shuo-de only, have the meant reading, and carry the meaning? Did today's change to the skill, a prompt or a tool make it better or worse? This needs Claude sessions and a judge that has itself been checked.
- **The learner.** Is Hao-shuo-de quicker to learn than the Mandarin it comes from, can a learner understand and produce new sentences, and does it make the later step to Mandarin easier? Only people can answer this; a model reading the lessons is a cheap proxy, not an answer.

## 2. What the repo already measures

- **Language:** `kb/scoreboard.csv` (coverage of the Mandarin and English frequency lists, Basic English, the everyday sentences, the NSM primes, parse rate, the smallest set); `kb_check_text` and `kb_check_reading` (readings per sentence, words, depth, the longest description, B4)
- **Translator:** `npm run translator -- test` and `score` (Hao-shuo-de only, meant reading, needed ideas kept by the blind reader, length; Q8's bar of 90%); `--round-trip` (F3, words shared); `gaps` (E2)
- **What is missing**
  - A frozen split: the first 100 sentences are both the ones the translator was tuned on and the ones it is scored on
  - Any number that does not come from a Claude judge: no string metric, no repeat runs, no confidence interval
  - Any check that the judge agrees with the author
  - A baseline: nothing says what the skill and the tools add over a plain prompt with the dictionary
  - Any measurement with people

## 3. Methods, what each measures, and why

Each says what it is, what it measures here, and whether it is **core** (in the regular runs), **once** (run once or rarely, as a reference) or **optional**. Sources were checked by web search; where only an abstract was readable it says so.

### 3.1 The language, with no AI (core)

- **Sayability of real text.** For the Mandarin side of `sentences.json` and a word list of a real text (a story, a news paragraph), the share of words that have a Hao-shuo-de form, and the share whose form is at most 1, 3 and 6 words. Plain, cheap, and the most direct number for "can it say ordinary things"
- **The cost against Mandarin.** For each sentence pair, our words per Mandarin character, after translation (the Mandarin is already in the file). STRESS_PLAN idea 11 measures this per probe; here it is one number per run over a fixed set, so it can be watched over time
- **Ambiguity.** Readings per sentence (median and 90th percentile), and the share of sentences whose meant reading is among the first 20, over the book's own sentences and the translator's output. The parser already counts them; the benchmark freezes the set and records the numbers
- **Lexical coverage for a learner.** For a text at lesson L, the share of its running words that a learner who finished lesson L knows. Reading research gives the targets: Hu and Nation (2000) found most readers need about 98% of the words known for adequate comprehension; Laufer and Ravenhorst-Kalovski (2010, *Reading in a Foreign Language* 22(1)) proposed 95% as a minimal and 98% as an optimal threshold. A replication of Hu and Nation questioned how far the 98% figure generalizes, so it is a target, not a law. It turns "graded readers at a lesson's level" (WRITING_PLAN W1, W8) into a pass mark per text: 95% at least, 98% aimed for

### 3.2 The translator: string metrics as a second opinion (core)

- **chrF++** (Popović, "chrF++: words helping character n-grams", WMT 2017, ACL W17-4770): an F-score over character n-grams plus word unigrams and bigrams. ConlangBench (STRESS_PLAN 9.1) and MTOB (§3.4) both use chrF-family scores for languages no embedding model reads. Used here on English only, where it is meaningful:
  - the blind reader's English against the source English (does the meaning come back in the same words?)
  - Hao-shuo-de against Hao-shuo-de: the round trip (F3) and two fresh sessions on one text (the Twice set), instead of today's words-shared share
- **How to compute it:** sacreBLEU (Post, "A Call for Clarity in Reporting BLEU Scores", WMT 2018, W18-6319) is the reference implementation, and its point is to report the exact settings with every score; it can go into the existing Python venv (`.venv-kb`). A small JS chrF++ in `src/lib/translator/` keeps the tests in bun, checked once against sacreBLEU to two decimals
- **Why only a second opinion.** A low chrF++ on the back-translation can mean a paraphrase as well as a loss. Round trips alone are a poor measure of quality: Somers ("Round-trip translation: what is it good for?", ALTA 2005) showed a round trip can come back right while the middle text is wrong, and the reverse; Moon, Cho and Park (EAMT 2020, "Revisiting Round-Trip Translation for Quality Estimation") found BLEU over round trips a weak predictor and did better with embedding similarity. So chrF++ never decides a pass. It flags items where it disagrees strongly with the judge, and those go to the author first
- **BLEU:** not used. It needs several references to be fair on short sentences, and chrF++ does the same job better on these

### 3.3 The translator: the judge, and checking the judge (core)

The judge (`prompts/translator-judge.md`) decides the headline number, so it gets the same treatment the code gets: tested against a known answer.

- **Error categories, not only kept or lost.** MQM, the error-span framework that Freitag et al. ("Experts, Errors, and Context", TACL 2021) showed ranks MT systems more reliably than crowd scores, labels each error with a category and a severity. GEMBA-MQM (Kocmi and Federmann, WMT 2023) has an LLM mark those spans with a fixed few-shot prompt; its authors warn it rests on one closed model. Borrowed: the judge marks each idea kept, weaker, lost or added (as now) and gives a lost or weaker one a category (omission, wrong meaning, wrong who-did-what, wrong number or time, made-up grammar) and a severity (minor, major). The categories line up with STRESS_PLAN §7's outcomes and Camlang's error split
- **Calibration against the author.** The author labels about 100 ideas (§5, C2); the judge labels the same; agreement is reported as raw agreement and Cohen's kappa. Under 0.6 kappa, the judge prompt is fixed before any translator number is trusted
- **Known biases, and what is done about each**
  - Position: Zheng et al. ("Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", NeurIPS 2023) and Wang et al. ("Large Language Models are not Fair Evaluators", ACL 2024) show a judge's choice between two answers can flip with their order. Any comparison of two translations (an A/B of two skill versions, §3.4) is judged twice, in both orders; only a win in both counts, as Wang et al.'s balanced position calibration does
  - Self-preference: Panickssery, Bowman and Feng (NeurIPS 2024) found LLM judges score their own outputs higher, and the more so the better they recognize them. The translator and the judge are both Claude, so the judge runs on a different model from the translator (a Sonnet judge for an Opus translator), and the Mandarin arm (STRESS_PLAN §7) is judged by the same judge as a control
  - Leaning on Mandarin: the gloss-only reader (STRESS_PLAN D4) stays the check
- **Planted faults.** STRESS_PLAN D6 breaks passing translations on purpose. ACES (Amrhein, Moghe and Guillou, WMT 2022; extended in *Computational Linguistics* 2025) is a published set of 68 accuracy-error types built the same way to test MT metrics; its list (negation, numbers, named entities, word order, antonyms, hallucinated additions) is the checklist for D6's faults. The catch rate is a benchmark number of its own

### 3.4 The translator: regression runs (core)

- **A frozen split.** From the 1,000 Tatoeba pairs: the first 100 stay the **dev** set (already used); a fixed random 200 of the other 900 (seeded, ids stored) become the **test** set, never shown to the glossary or `kb_memory` (as STRESS_PLAN G1 hides the held-out probes). The ten stories stay as the **home-ground control**: they should pass, and a drop there means something broke
- **Three slices**
  - **Guards** (no AI, every commit): golden outputs of the tools on fixed inputs (`kb_lookup`, `kb_parse`, `kb_check_reading`, `kb_gloss` on about 50 words and sentences), as snapshot tests in bun. Most translator regressions so far were tool bugs (the de / dé reading, shí-jiān as "ten-between"); these catch them for free
  - **Smoke** (about 20 dev sentences and 5 stress guard probes): on every change to the skill, a prompt or the glossary
  - **Full** (dev, test, stories, and the stress battery when it exists): before a push of translator work and after any change to words or patterns
- **Behavioural tests.** CheckList (Ribeiro, Wu, Guestrin and Singh, ACL 2020, best paper) sorts tests into minimum-functionality (one feature, many simple cases), invariance (a change that must not change the output) and directional (a change that must change it). STRESS_PLAN §4 already has all three (the sibling sets, the "same meaning" and "one change" metamorphic sets); the benchmark reports a pass rate per CheckList type and per pattern, so a regression points at one capability
- **Noise.** A Claude session is not deterministic. Each smoke item runs twice; the full run once, with 30 dev items run three times to measure how much the score moves between identical runs. A change counts as better or worse only when a paired bootstrap over the items (Koehn, "Statistical Significance Tests for Machine Translation Evaluation", EMNLP 2004; sacreBLEU implements it) puts the difference outside the noise, at 95%
- **Baselines (once per big change).** MTOB (Tanzer et al., "A Benchmark for Learning to Translate a New Language from One Grammar Book", ICLR 2024) scored models that saw only a grammar book and a word list for Kalamang, beside a person who learned from the same book (LLMs 44.7 and 45.8 chrF; the person 51.6 and 57.0). The same three arms here, on the dev set:
  - **plain:** a single prompt with the dictionary and the grammar patterns pasted in, no tools
  - **pipeline:** the full skill with the kb tools
  - **by hand:** the author (or Claude by hand with unlimited time, the STRESS_PLAN oracle) on 20 sentences
  - The gap between plain and pipeline is what the tools are worth; the gap between pipeline and by hand is what is left to gain

### 3.5 The learner, with a model as a stand-in (once per section of lessons)

- **The learning curve.** A fresh model gets only lessons 1 to L (the text the learner sees, no hanzi-to-Mandarin hint) and answers comprehension questions about short new Hao-shuo-de texts at level L, then translates 10 English sentences into Hao-shuo-de at that level. Its production is scored by the tools themselves (only taught words, parses, the meant reading), which is this language's big advantage over most conlangs: production can be marked automatically. Run at the end of each section (lessons 6, 16, 26)
- **Why a stand-in only.** Camlang (STRESS_PLAN 9.2) found models do worse than people on a language learned from a book, and lean on word matching; a model also knows Mandarin. A falling curve finds lessons that teach badly; it says nothing about how long a person takes
- **Training a small model on the language** (as Kallini et al., "Mission: Impossible Language Models", ACL 2024, did for impossible languages): dropped (§7)

### 3.6 The learner, with people (once, when the author decides)

The methods of artificial-language learning: people learn a small made-up language in one sitting and are tested on new items. Culbertson, Smolensky and Legendre ("Learning biases predict a word order universal", *Cognition* 122, 2012) is the classic design; Tily, Frank and Jaeger ("The learnability of constructed languages reflects typological patterns", CogSci 2011) ran such tasks over the internet at scale; Kirby, Cornish and Smith ("Cumulative cultural evolution in the laboratory", PNAS 2008) passed a language from learner to learner. Borrowed: the format (learn, then test on new items, all online), not their research questions.

- **What a session holds** (45 minutes, lessons 2 to 5 only: about 30 words and 6 patterns)
  - Learn: the lesson pages as they are in the book, with audio
  - Vocabulary: recall (English to Hao-shuo-de) and recognition (four choices)
  - Comprehension: new sentences built from the taught words, answered by picking the English or a picture
  - Production: 10 English sentences to translate; scored by `kb_check_text` at that lesson (taught words only, parses) and a meant-reading check, with the author marking a sample
  - Grammar judgments: is this sentence right? Pairs that differ in one pattern
  - A delayed test after 7 days (the same items, a new order) for what stayed
- **Two arms, randomly assigned:** the Hao-shuo-de lessons, and the same points taught in standard Mandarin (the same time, the same tests). This is the only way to support "quicker to learn than Mandarin". The Esperanto literature is a warning: the claims for Esperanto as a first step (the Paderborn experiments and others) come mostly from Esperanto advocates, and the search found no independent controlled evaluation; a claim for Hao-shuo-de needs its own control arm from the start
- **Mandarin readers of the hanzi line** (STRESS_PLAN Q8 with people). Intelligibility research between related languages (Gooskens' overview in the *Oxford Handbook of Sociolinguistics*, 2013; Gooskens and Schneider 2016) uses functional tests: the reader translates or answers questions, and the score is the share understood. Native Mandarin readers read 20 of our hanzi lines and 20 natural Mandarin lines of the same sentences, and write what they mean; the gap is how far our written form is from Mandarin
- **Pilot first:** 5 to 10 people the author knows, to fix the materials; then, if the author wants numbers that hold up, a paid study (§4)
- **The step to Mandarin** (does Hao-shuo-de help later Mandarin?): needs months and a large group; parked (§7)

## 4. Cost and time

API prices are Anthropic's list prices per million tokens (input / output), from the claude-api skill's table cached 2026-10-06: Opus 5.5 $4 / $20, Sonnet 5.5 $2 / $10, Haiku 5.5 $0.10 / $0.50; the Batch API is half price (third-party pricing pages, not confirmed on Anthropic's page). The translator runs on the author's Claude login, so most of this is plan usage, not a bill; the dollar figures say how heavy each run is. The tokens per session are a guess until STRESS_PLAN I3 times a real one: about 100k input (the tools' answers sent back each turn) and 8k output per sentence for the translating session, 5k each for the blind reader and the judge.

- **Static metrics (3.1):** no cost; minutes of CPU per run; about 1 day to build
- **Guards (3.4):** no cost; seconds per commit; about half a day to build
- **chrF++ (3.2):** no cost; about half a day, with the check against sacreBLEU
- **Judge calibration (3.3):** about 3 hours of the author's time for 100 labelled ideas; under $1 of judge calls; about 1 day to build
- **Smoke run:** about 25 items × 2 runs: roughly $0.60 per item at Opus rates, so about $30 of plan usage and 20 to 30 minutes with 4 at a time
- **Full run:** about 310 texts (dev, test, stories) plus 30 × 2 repeats: about 370 sessions, roughly $220 of plan usage and 3 to 4 hours with 4 at a time; with the stress battery, more (STRESS_PLAN I3). Readers and judge on Sonnet add about 5%
- **Baselines (3.4):** the plain arm is one call per sentence, about $5 for the dev set; the by-hand arm is about 2 hours of the author's or Claude's time
- **Model learning curve (3.5):** 3 levels × (5 texts of questions + 10 sentences), with the lessons in the prompt (about 50k to 150k tokens, cached): about $10 per round
- **Human pilot (3.6):** 5 to 10 people × 1 hour, unpaid or a small thank-you; about 3 days to build the test pages (they can reuse the book's exercise components) and 1 day to score
- **Paid study (3.6):** Prolific asks at least £6 an hour and recommends £9 (about $12), plus a platform fee of 33.3% for academic and non-profit researchers or 42.8% otherwise (Prolific's help pages, 2026). Two arms × 40 people × (45 minutes plus a 15-minute delayed test), at £9 an hour: 80 hours, about £720 for the participants, about £1,030 with the 42.8% fee (£960 at the academic rate). 30 people an arm brings it to about £770. Mandarin readers for the hanzi test (20 people × 20 minutes) add about £85. People who read Mandarin natively may be few on the platform; the author's own contacts are the fallback

## 5. How to run it on this repo

- **The command:** `npm run translator -- bench` with `--slice guards|smoke|full`, `--baseline plain|hand`, `--repeat N`; results in `review/bench/<date>-<slice>/`, one JSON per item, and a summary
- **The static metrics:** `node scripts/kb.js bench` (or a part of `npm run graph-report`), writing columns to `kb/scoreboard.csv` like the others
- **The files**
  - `kb/bench/split.json`: the dev and test ids from `sentences.json`, the seed, and the date frozen
  - `kb/bench/calibration.json`: the author's labels for the judge check
  - `kb/bench/guards/`: the golden tool outputs
- **The scoreboard columns:** `bench_sayable`, `bench_cost_ratio`, `bench_readings_p90`, `bench_hsd_only`, `bench_meant`, `bench_kept`, `bench_chrf_back`, `bench_chrf_twice`, `bench_judge_kappa`, `bench_faults_caught`, `bench_noise` (the spread between identical runs)
- **The report:** `review/bench/<date>.md`, with each number beside the last run's, the bootstrap verdict (better, worse, within the noise), and the items where chrF++ and the judge disagree most, for the author

## 6. Phases

- **Phase 1: numbers with no login and no money** (about 3 days)
  - The frozen split (A1), the static metrics (B1 to B4), the guards (D1), chrF++ (C1)
  - chrF++ on the ten stories already in `review/translations/hand/` (the blind reader's English against the source), as the first point on the chart
  - The author labels 100 ideas from those stories; the judge's agreement is computed from the labels already in the files (C2, C3)
  - Outcome: a scoreboard with the language's numbers, a judge whose agreement with the author is known, and a split that keeps the test honest
- **Phase 2: the translator benchmark** (waits for the Claude login, as F1 does; about 2 days to build, then a run)
  - Error categories in the judge (C4), the fault catch rate with ACES' checklist (C5), the smoke and full slices (D2, D3), repeats and the bootstrap (D4), the plain baseline (D5)
- **Phase 3: the model's learning curve** (about 2 days; needs the login)
  - E1 and E2 at lessons 6, 16 and 26
- **Phase 4: people** (when the author says yes to Q1)
  - The pilot (F1 to F3), then the paid study if wanted (F4), and the Mandarin readers (F5)
- STRESS_PLAN's battery runs beside phases 2 and 3; its probes join the full slice as they are written

## 7. Considered and dropped

- [-] **BLEU:** chrF++ does the same job better here (3.2)
- [-] **COMET and other learned metrics** on Hao-shuo-de: no model has seen it, the reason ConlangBench uses chrF++. On the English back-translation they would work, but add a heavy Python model for little over the judge; reconsider if the judge's agreement stays low
- [-] **Training a small language model on Hao-shuo-de** (Kallini et al. 2024): the only corpus would be our own generated text, so it would measure the generator, not the language
- [-] **Iterated learning** (Kirby et al. 2008): it studies how a language changes as it is passed on; the author designs this one, so it is not the question
- [-] **The step to Mandarin as a measured effect:** months, a large group and a control; parked until the book is in use. Until then, the "step to Mandarin" lines of STRESS_PLAN idea 2 (HSK levels of what we lack) stand in for it

## Q. Questions for the author (one at a time; answers become BM1 and on)

- [?] **Q1. People.** Is a study with people wanted at all, and paid?
  - (a) No; the model stand-in (3.5) only
  - (b) A pilot with 5 to 10 people the author knows
  - (c) The pilot, then a paid study with a Mandarin control arm (about £850 to £1,100 in all, §4)
  - **Claude's pick:** (b) now; (c) only if the book is to claim it is quicker to learn than Mandarin
- [?] **Q2. Who labels the judge's calibration set.** 100 ideas, about 3 hours
  - **Claude's pick:** the author for 50, a second Claude model for the other 50, and the author checks where the two disagree
- [?] **Q3. The held-out test set.** 200 of the sentences never shown to the glossary or the memory (the same rule as STRESS_PLAN Q3)
  - **Claude's pick:** yes, and the 55 proposed glossary rows from the stories are checked against it before they go in
- [?] **Q4. Which claims the book makes,** since each needs its own measurement: says ordinary things (3.1), translates well (3.2 to 3.4), is quicker to learn (3.6 with the control), reads as Mandarin (3.6, the hanzi line), leads to Mandarin (parked)
  - **Claude's pick:** the first two are measured now; the rest are not claimed until measured

## A. The split

- [ ] **A1.** `kb/bench/split.json`: dev = the first 100 of `sentences.json`, test = a seeded random 200 of the rest, the stories as control; a check in check-data that no test id is in the glossary's sources
- [ ] **A2.** `kb_memory` skips the test ids while a bench run goes (as `HAOSHUODE_MEMORY_SKIP` does for the stories)

## B. The language's numbers

- [ ] **B1. Sayability** of the Mandarin side of the split and of five reference texts, with the shares at 1, 3 and 6 words
- [ ] **B2. The cost ratio,** our words per Mandarin character, from saved translations
- [ ] **B3. Ambiguity:** readings per sentence (median, 90th percentile) and the meant-reading share, over the book and over the saved translations
- [ ] **B4. Lexical coverage at a lesson:** per text and lesson, the share of running words known; the 95% and 98% marks
- [ ] **B5.** Scoreboard columns and tests on the fixture

## C. Scores and the judge

- [ ] **C1. chrF++** in JS, checked against sacreBLEU on 50 pairs; the settings written beside every score
- [ ] **C2. The calibration set:** 100 ideas from the hand-translated stories, labelled by the author (Q2)
- [ ] **C3. Agreement:** raw and Cohen's kappa, judge against the author; under 0.6, fix the judge first
- [ ] **C4. Error categories and severity** in the judge's answer (MQM-style), with tests
- [ ] **C5. The fault catch rate,** with ACES' error types as the checklist for STRESS_PLAN D6
- [ ] **C6. Two orders** for any judgment between two translations; a win counts only in both

## D. Runs

- [ ] **D1. Guards:** golden tool outputs, in the fast test pass
- [ ] **D2. Smoke slice**
- [ ] **D3. Full slice**
- [ ] **D4. Repeats and the paired bootstrap;** the noise number on the scoreboard
- [ ] **D5. Baselines:** plain prompt, pipeline, by hand (20 sentences)
- [ ] **D6. The report** (§5) and run against run

## E. The model learner

- [ ] **E1. Questions and texts** at lessons 6, 16 and 26 (5 texts with 4 questions each, 10 sentences to translate per level), written once and frozen
- [ ] **E2. The run:** a fresh session with only the lessons up to L; comprehension scored against the key, production scored by the tools

## F. People

- [ ] **F1. The test pages** (learn, vocabulary, comprehension, production, judgments), from the book's exercise components, saving answers locally or to Firestore
- [ ] **F2. The Mandarin arm's lessons:** the same points in standard Mandarin
- [ ] **F3. The pilot** (Q1); its results fix the materials
- [ ] **F4. The paid study** (Q1 (c)): pre-registered scoring, the delayed test after 7 days
- [ ] **F5. The Mandarin readers** of the hanzi line

## Log

- 2026-10-22 Plan written. Built on STRESS_PLAN §9 without repeating it. Added from checked sources: chrF++ with sacreBLEU's reporting rules and Koehn's paired bootstrap; round-trip scores kept as a second opinion only (Somers 2005; Moon et al. 2020); an MQM-style judge (Freitag et al. 2021; GEMBA-MQM) checked against the author's labels, with the position and self-preference biases handled (Zheng et al. 2023; Wang et al. 2024; Panickssery et al. 2024); ACES' error types for planted faults; CheckList's three test types as the report's columns; MTOB's three arms (plain model, pipeline, a person from the book) as baselines; the 95% and 98% lexical-coverage marks for graded texts (Hu and Nation 2000; Laufer and Ravenhorst-Kalovski 2010); artificial-language-learning designs for a study with people (Culbertson et al. 2012; Tily et al. 2011) with a Mandarin control arm, since the Esperanto claims of a head start come mostly from advocates; intelligibility tests for Mandarin readers (Gooskens 2013). Costs from Prolific's help pages and Anthropic's price table; tokens per session are a guess until a real run.
