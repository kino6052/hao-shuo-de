# Hao-shuo-de knowledge base: plan

Status: planned 2026-10-12, nothing built yet. The research and the options are in [KB_PROPOSAL.md](KB_PROPOSAL.md). This file is the checklist: tick boxes as work lands.

## 0. Decisions (with the author, 2026-10-12)

| # | Decision |
|---|---|
| K1 | **clingo is the reasoner**, run in Node through `clingo-wasm`, over facts exported from the data. OWL/OntoLex is an export only, for Protégé and sharing. |
| K2 | **`src/data` stays the source of truth** (words, composites, coverage, maps, and now grammar). The KB reads it fresh on every run and never edits it. |
| K3 | **Every core word gets a paraphrase** (how to say it without the word) **or an atom mark**, reviewed in batches like the composites. |
| K4 | **Python runs once** (WordNet ids, English word frequencies). The results are stored as data, so daily tooling stays in Node. |
| K5 | **Grammar is part of the KB, in layers**: meaning (what it's for) → template (what the learner sees) → structure rules (what the parser uses). One file per pattern in `src/data/grammar/`. Lesson grammar boxes point to patterns by id. The Grammar Patterns Reference and coverage's 38 grammar items are built from the patterns. |
| K6 | **A word lists every word class it can fill**, each with a why and an example. The main class is the dictionary's part of speech. Stand-alone senses (xīn 新) have their own. |
| K7 | **The grammar check parses every text**: lesson sentences, composite examples, composite forms, and stories, proverbs and the phrase book. It starts as a report and becomes a gate once clean. Lesson sentences may use only patterns taught by that lesson. |
| K8 | **An atom is a core word that the other core words can't describe honestly, or only clumsily.** Clumsy means hard to understand, or so funny it isn't taken seriously (the author's call in review), or too long for how often the word is needed (computed). How much a root builds and whether it carries grammar are not atom criteria; they are costs of removing it. |
| K9 | **Each composite form is built or spelled.** Built: the meaning comes from the parts (fēi-jī = fly + machine). Spelled: Mandarin's own word written with our atoms and learned whole (dōng-xi). Spelled forms count as uses of their atoms but never as definitions, and they are reported as **hidden vocabulary**. |
| K10 | **Removing or adding a word produces a consequence report; the author decides.** Removal counts forms to redo, book to rewrite, Mandarin lost and expressiveness lost. Addition shows the gains. Swaps (add X, remove Y) are searched. A scoreboard tracks the language over time. |
| K11 | **Relations**: synonyms and opposites (opposites have a kind) for words *and* composites, kind-of, part-of, and relations read from the descriptions. All are shown to learners. |
| K12 | **Expressiveness is measured against**: the coverage list, the Mandarin frequency list, English word lists (Basic English + an English frequency list), and a set of everyday sentences. |
| K13 | **Grammar is compared** within Hao-shuo-de, with real Mandarin (HSK 3.0 grammar list), with universal lists (UD relations, WALS, NSM), with English grammar, and with other minimal languages (Toki Pona, Basic English). |
| K14 | **Generation produces drafts for review**: composite examples, lesson practice, descriptions for new words, and stress tests. |
| K15 | **English → Hao-shuo-de sentences**: rule-based on the site (runs in the browser); AI drafts that the grammar checks and explains, for the author and Claude. Used as the author's tool, for coverage measurement, as a learner page, and as Claude's tool. |
| K16 | **Interfaces: ask Claude** (MCP tools) **and an explorer page** (`/__kb` on the dev server). A thin CLI exists only for tests and the tools. |
| K17 | **Order: a foundation for both words and grammar first** (engine, facts, explorer, Claude tools, and a thin slice of each), then grow both side by side. |
| K18 | **Relations are captured wherever they show up, not only in one review** (the author, 2026-10-12: "make sure we capture such relationships and more"). One typed store: a kind, two ends (words or composites), a status (accepted, proposed, rejected), where it came from, and a why. Anything that implies a relation proposes it: a paraphrase, a composite description, a category, the same-form groups, WordNet later, and Claude's proposals in any review. Proposals wait as candidates; the author accepts or rejects them; a rejected one is remembered. Reports use accepted relations and show proposed ones apart. The kinds are listed in phase 5. |

## 1. Ground rules

- **The KB never edits data.** Every suggestion goes through a review page and a refactor list, as composites do today.
- **Every answer comes with its why**: the facts and rules behind it, or the parse tree.
- **Rules pre-fill, the author reviews only what's uncertain.** Batches are 100 items or fewer.
- **Every rule file and parser feature has a test** on a small fixture (`bun test`).
- **Report first, gate when clean.** `npm run check` must stay green at every step.

## 2. Shape

```
src/data/{words,composites,coverage,grammar,maps}  +  lessons, stories, phrase book
        │
        ├─▶ src/lib/kb/facts.js ──▶ clingo-wasm + kb/rules/*.lp
        │        set questions: what-if, atoms, minimal sets, swaps, relations
        │
        ├─▶ src/lib/grammar/ (chart parser + generator, runs in Node and the browser)
        │        sentences: check, generate, translate ── its parses become facts too
        │
        └─▶ kb/yardsticks/  (frequency lists, Basic English, everyday sentences,
                             HSK grammar, UD/WALS/NSM, Toki Pona rules)

interfaces:  MCP server (Claude)  ·  /__kb explorer (dev)  ·  site: relations in the
             dictionaries and Word Map, "How do I say…?" page
records:     kb/scoreboard.csv
```

**Why two engines:**
- **clingo** answers questions about sets: what breaks, smallest sets, best swaps.
- **The chart parser** checks sentences. It is fast on thousands of them, and it runs in the browser, which the learner translator needs.

They connect through facts: "sentence S uses pattern P" becomes a fact, so grammar shows up in the word consequence reports.

The parser is our own small Earley parser over rules read at runtime. Libraries like `nearley` need a compile step, and our rules change with the data.

## 3. Data changes

### Words (`src/lib/word.ts`)
- `paraphrase?: { forms: string[]; verdict: "fine" | "clumsy"; note?: string }`: how to say it without the word, best form first, plus the author's verdict (K3, K8).
- `atom?: { eng: string; rus: string }`: why there is no honest description. A word has exactly one of `paraphrase` and `atom`.
- `classes?: { [cls]: "main" | { why: { eng, rus }, example: string } }`: K6. Until a word has this, its `pos` is its only class.
- `ili?: string[]`: WordNet interlingual ids (phase 6).
- A sense marked `alone` gets its own `paraphrase` and `classes`.

### Composites (`src/lib/composite.ts`)
- `kinds?: ("built" | "spelled")[]`: one per form, in `hsd` order (K9). A rule fills the obvious ones. 272 entries have a Mandarin compound as their first form: 52 are already `transparent` (built), and **220 need a yes/no review**.
- `ili?: string[]` (phase 6).

### Maps (`src/data/maps/`)
- `antonyms.ts`: each pair gets a kind: `scale` (dà/xiǎo), `either-or` (sǐ/huó), `roles` (ná/gěi, lái/qù) or `direction` (shàng/xià).
- **New `composite-opposites.ts`**: `[zhA, zhB, kind]`. Synonyms among composites stay as "same main form" (R12-syn).
- **New `part-of.ts`**: `[part, whole]` for words and composites. Kind-of comes from the heads already computed.

### Grammar (new `src/data/grammar/<id>.ts`, helper `src/lib/grammar-pattern.ts`)

```ts
export default pattern("compare-bi", {
  meaning: { eng: "A has more of a quality than B", rus: "…" },
  covers: ["grammar:compare"],                     // coverage items it carries (like a word's covers)
  template: { hsd: "A {{word:bi3}} B + adjective", eng: "A is more <adjective> than B" },
  rules: [                                          // structure rules; the eng side is optional (translation)
    { lhs: "Pred", hsd: "bi3 NP AdjP", eng: "be AdjP-er than NP" },
  ],
  without: { forms: ["A {{word:hen3}} adjective, B {{word:bu4}} adjective"], verdict: "clumsy" },
  taught: "comparing/than",
  examples: [["Tā bǐ wǒ gāo.", "He is taller than me."]],
  compare: { hsk: ["…"], ud: ["obl"], english: "comparative", tokiPona: "…" },   // phase 7
});
```

A lesson's grammar box becomes `{ type: "grammar", pattern: "compare-bi" }`. There are about 130 modules, each with a box.

## 4. Phases

### Phase 1: Foundation (engine, facts, explorer, Claude tools, a thin slice of words and grammar)
- [x] `npm i -D clingo-wasm@0.6.0` (clingo 5.8.1), then `bun install` so bun.lock follows.
- [x] `src/lib/kb/clingo.js`: `solve(program, { models, options })` → models, costs, status, plus a parser that turns answer atoms into rows. Tests.
- [x] `src/lib/kb/facts.js`: words, senses, pos, necessity, categories, first lesson, composites (each form split into slots: word or sense, quoted sound, X/Y; head, fit, rank), coverage items and their forms, maps, and every sentence (lessons, examples, stories, phrase book) with the words it uses. Constants are word ids, and composites are their hanzi; all are valid clingo terms. Tests on a fixture.
  - **Built, with one limit, now lifted:** clingo-wasm copies the program onto a 1 MB stack, so a program over about 1,000,000 bytes (hanzi count 3) fails. The facts are 1.8 MB, mostly the sentences, so they come in two tiers: the language (words, composites, coverage, about 650 KB, always loaded) and the text (sentences and mentions, written compactly and loaded only for the words a question names). `solve` refuses an oversize program with a clear message.
  - **Native clingo (the fix for that limit):** `solve` runs the real clingo as a child process when it finds one (program on stdin, no size limit, a timeout really kills it) and falls back to the built-in wasm when it does not, so a fresh checkout still works with the 1 MB cap. Install: `python -m venv tools/clingo/venv`, then `tools/clingo/venv/Scripts/pip install clingo` (the pip package has no `clingo` program; it runs as `python -m clingo`, which `findClingo` knows). `tools/clingo/` is git-ignored. `KB_CLINGO=wasm` forces the built-in one, `KB_CLINGO=<path>` names a clingo. `node scripts/kb.js engine` says which is in use. GitHub's clingo releases carry no binaries (source only). Tests run on both engines; a real-data test checks they give the same what-if.
- [x] `kb/rules/base.lp` and `whatif.lp`: the **remove** what-if for one or more words. Consequences in this slice: forms to redo, book to rewrite, and coverage items without a carrier.
  - **Built, and a bit further than planned:** also definitions that name the word, catch-all senses left with no compound, and opposite/synonym pairs and phrases that break. `kb/rules/text.lp` holds the rules that need the text tier. A test checks the clingo answer against plain JavaScript loops on the real data.
- [x] Grammar slice: `src/lib/grammar/earley.js` (parse, all trees, partial parse for errors) and `src/lib/grammar-pattern.ts`. Then 8 patterns in `src/data/grammar/`: the Sentence Builder's rules (subject–verb–object, shì, hěn + adjective, -de modifier, stacked modifiers, adverb before verb), plus bù and ma. Word classes come from `pos` for now. Report: the parse rate on Lessons 1–4. Tests.
  - **Built:** 9 patterns (subject–predicate added as the frame). Lessons 1–4: 70 of 81 sentences parse (86%), report in `kb/reports/lessons-1-4-parse.md` (`npm run kb -- parse-report`). The 11 that don't are Lesson 4's measure word after a pointer (`zhè-ge rén`, 10) and plural `nà-xiē rén` (1): the next two patterns. Lesson 1 has no Hao-shuo-de sentences. `check-data` fails if a pattern's example stops parsing.
- [x] `/__kb` explorer (`vite-plugin-kb.js`, dev only, like the review page) with a search box and these panels:
  - a word card (facts and relations);
  - remove what-if;
  - parse a sentence (tree, or where it fails).
- [x] MCP server `scripts/kb-mcp.js` (stdio), registered in `.mcp.json`. Tools:
  - `kb_word`, `kb_remove`, `kb_parse`;
  - `kb_check_form` (plain pinyin → refs, dictionary words only, the compound rule, hanzi);
  - `kb_query` (raw rules, for Claude).
  - **Built:** hand-written JSON-RPC over stdio (no SDK). Tool calls run one at a time, and a `kb_query` stops at its `timeout_ms` (default 20 s, at most 60 s). Data is re-read whenever a file changed.
- [x] Thin `scripts/kb.js` that the tests and the MCP server share.
- **Done when (done 2026-10-12):** asking Claude "what happens if we drop dēng?" gets an answer from `kb_remove` and the explorer shows the same; Lessons 1–4 parse report exists; `bun test` and `npm run check` green.
- **Author:** try the explorer and the Claude tools; say what's missing.

### Phase 2: Words (paraphrases, built/spelled, atoms)
- [x] Schema for `paraphrase` and `atom` (§3). check-data checks:
  - forms use dictionary words only, never the word itself or its senses;
  - no quoted sounds (X and Y are allowed);
  - it warns with a count of words still missing both, until the review is done, then fails.
  - **Built:** `src/lib/paraphrase.js`. The gate fails on a missing mark once `PARAPHRASES_REQUIRED` is true; flip it after the review is applied.
- [x] Composite `kinds`, filled by rule; only the Mandarin compounds the rule cannot decide are reviewed (`src/lib/form-kinds.js`).
  - **Built:** 232 entries, not 220, in 3 batches of 100.
- [x] Review page modes:
  - `?words=N`: approve, edit, mark clumsy, or mark as atom;
  - `?kinds=N`: built or spelled.
  
  Word batches follow the category order, so related words are reviewed together.
  - **Built:** `review/words.html`, served by `vite-plugin-review.js`: `/__review/?words=1` (80 words per batch, 3 batches) and `/__review/?kinds=1` (3 batches). A live check in the editor, a bulk "approve the proposals that pass", and the word's own entry, antonyms and synonyms beside it. Decisions go to `review/decisions/words-N.json` and `kinds-N.json`.
- [x] Claude's proposals: 3 word batches, seeded from the 22 existing self-free forms (zǒu = yòng jiǎo qù), the close-word phrases and the opposite phrases. Plus the kinds batch.
  - **Built:** `review/proposals/words-1..3.mjs` (230 words: 192 paraphrases, 11 clumsy, 27 atoms) and `kinds-1..3.mjs` (232 compounds: 137 built, 95 spelled). Every form passes the gate; every proposal applies cleanly in memory. These are proposals, not decisions: the author's review is the next step.
- [x] Refactor ops `paraphrase`, `atom` and `kinds`; refactor lists `refactors/W1–W3.ts` and `refactors/K1–K3.ts`. The `setWord` key order gains the new fields.
  - **Built:** `node scripts/review-batch.js words|kinds N` turns the decisions into the list; apply it with `npm run refactor -- refactors/WN.ts --write`.
- [x] `kb/rules/atoms.lp` sorts words three ways:
  - **true atoms:** marked atom, verdict clumsy, or in every smallest defining set;
  - **swappable:** in some smallest sets;
  - **secondary:** in none.
  
  It also computes:
  - the kernel and core (Harnad);
  - each secondary word's definition tree down to atoms;
  - the too-long-for-use cost: paraphrase length × uses;
  - the hidden vocabulary count.
  
  Only fine paraphrases of built forms count as definitions.
  - **Built, and the way it asks changed once the words were reviewed:** with nothing reviewed every word is forced in and the question is trivial; with all 230 reviewed, clingo's default search and the listing of every smallest set (`optN`, brave, cautious) ran for minutes, and `-n 1` stopped at a first answer that was not proven smallest (83 against the true 60). Now the smallest size comes from core-guided search (`--opt-strategy=usc`, about 1 s), and "in some" and "in all" are asked one word at a time (is there a set as small without it? with it?), four at once on native clingo. The whole report takes about 45 s on the real data, has a deadline, and a word whose question does not finish is reported as `unchecked`, never guessed. Tests on both engines.
- [x] Explorer "Atoms" panel; `kb_atoms` tool.
- **Done when:** every word has a paraphrase or an atom mark, check-data requires it, and the atoms panel answers. (Not yet: the proposals wait for the author's review, then `PARAPHRASES_REQUIRED = true`.)
- **Author:** 3 word batches + 3 kinds batches. With all the proposals taken as they are, the smallest set has 60 words, with 44 true atoms, 34 swappable and 152 secondary.
- **Atoms admitted (2026-10-12):** the author accepted the atom marks for now: the 27 first marked and 18 more (12 body parts, zhè/nà, rè/lěng, qián/hòu), 45 in all, applied from `refactors/W1–W3.ts` (45 word files). The other 185 words are not decided yet (176 proposed paraphrases and 9 proposed clumsy ones), so the atoms report shows `marked 45, unreviewed 185`. Whether each atom should stay is a Phase 3 question for the knowledge base to answer (what happens if it goes, what replaces it), once the composite vocabulary and its data points are more complete.

### Phase 3: Consequences, additions, swaps, scoreboard
- [ ] Removal, all four kinds (K10). The solver's report (`kb remove`) is complete for two of them. For ranking every word at once the same counts are worked out directly in JS, `src/lib/kb/candidates.js` (0.04 s for all 185 words), and `candidates.test.js` checks them against the solver's report for every word of the fixture and for sets of several. The cost is a sum of parts with set weights (`COSTS`), shown next to the sum; the weights are Claude's first guesses:
  - **forms to redo:** composites left with no form, with a draft that puts the paraphrase in its place, and the change in length and clumsiness, weighted by rank;
  - **book to rewrite:** sentences, cards, practice, FAQ, stories, examples, and the patterns the word carries;
  - **Mandarin lost:** spelled compounds that can't be written any more, and the drop in naturalness; built as a number in the candidates (the top 6000 words of the frequency list that lose a hanzi only this word gave, weighted by rank), not yet a section of `kb remove`; the drop in naturalness is not done;
  - **expressiveness lost:** coverage carriers, and yardstick sayability once phase 6 lands.
- [ ] Addition what-if, the mirror image (`kb add <hanzi>`, tool `kb_add`, explorer tab "Add a root"; built 2026-10-13: the Mandarin words the root completes, the ones that still need more roots, the composites it lets be spelled, its sound as a new word or a sense of the word with that sound; still to do: shorter descriptions, coverage carriers, English words, sound clashes against check-sounds, the lesson it would go in):
  - descriptions that get shorter (forms that contain the word's paraphrase or a phrase it replaces);
  - spelled compounds that become possible (the report-roots logic);
  - coverage carriers, and English words and sentences that become sayable;
  - sound clashes (check-sounds);
  - the lesson it would go in.
- [ ] Candidates (`kb candidates [remove|add]`, tool `kb_candidates`, explorer tab "Candidates"; the audit as a document is `kb audit` → `kb/reports/candidates-audit.md`; built 2026-10-13: both ranked lists; still to do: the phrases repeated across descriptions and the English gaps for addition, and "secondary words by default" once the 185 words are reviewed, today the pool is the words not marked as atoms):
  - **removal:** ranked by least consequences, secondary words by default;
  - **addition:** Mandarin roots, phrases repeated across descriptions (graph-report), and concepts behind English gaps.
- [x] Swaps: add X + remove Y within the candidate pools for the best net effect. Built 2026-10-13 in `src/lib/kb/candidates.js` (`kb swaps --k N`, tool `kb_swaps`): K roots in and K words out, so the core keeps its size (removing alone never pays, nothing is gained by it in the value, which is why the benchmark below always chose to drop nothing); value = Mandarin words made writable − Mandarin words lost − what dropping costs. K = 1 looks at every pair of the best 300 roots and 80 cheapest words (24000 pairs, 0.15 s); more takes the best pair, adds the best pair as long as the value rises, then improves one change at a time (K = 3: 1 s). On the data now: K = 1 brings in 儿 for 油 (value 30), K = 3 儿 行 期 for 油 替 八 (value 54.5); `kb audit` lists up to K = 8.
  - **Tool chosen by a benchmark (2026-10-13):** real data, 5329 frequency words, 300 candidate roots to add, 166 words to remove, 1308 composites that could need redoing, value = weighted frequency words written minus weighted composites to redo. One swap (K=1): clingo proves the optimum (36) in 2.5 s, a JS greedy takes 0.5 s and finds the same 36. Up to 2, 3, 5, 8 swaps: JS greedy plus local search gives 62, 83, 124, 174 in 1 to 3.4 s; clingo's default search is still going after 40 s and has 62, 43, 92, 115; its core-guided mode (usc) does not finish in 40 s at any K. So swaps are built in JS (per-candidate effect sets, greedy then one-swap local search, exact enumeration only for K=1) and clingo stays for the set questions (atoms, definitions, what-if on rules). Script: kept in the session scratchpad, to be rebuilt as a test when the swap search lands.
- [x] Scoreboard: core size, hidden vocabulary, coverage, yardstick sayability, average description length, grammar parse rate, number of patterns. `refactor --write` appends a row to `kb/scoreboard.csv`. The explorer charts it.
  - **Built (2026-10-12):** `src/lib/kb/scoreboard.js`, `node scripts/kb.js scoreboard [--append] [--label …] [--no-atoms]` (prints the numbers against the last stored row), the hook in `scripts/word.js` (after `--write`, never fails a refactor), the explorer's Scoreboard tab, and the `kb_scoreboard` tool. 22 columns: words, composites, descriptions and their average length, atoms (marked, paraphrased, unreviewed, smallest set, true atoms, swappable, secondary, unchecked, core), hidden vocabulary (spelled, built, undecided), coverage items and how many can be said, lessons 1-4 parse rate, patterns. A number that can't be measured yet is left empty; yardstick sayability joins in phase 6 (the CSV is rewritten with new columns, old rows keep their blanks). The first row is the baseline taken after the 45 atoms were admitted: 230 words, 185 unreviewed, smallest set 230 (nothing reviewed, so every word is in it), 232 compounds undecided, parse rate 0.864.
  - **Why now:** the author will not review for the time being and will run the solvers later on more data. A row per change makes what more data does visible.
- [x] Explorer panels and tools `kb_add`, `kb_candidates`, `kb_swaps`, `kb_scoreboard`, built (tabs Candidates, Add a root, Relations and Scoreboard; the Candidates tab also holds the trades).
- **Done when:** the first audit (like D63) goes to the author, listing the words whose removal costs least, the best additions, and the best swaps.
- **Author:** decide on the audit; changes go through refactor lists as always.

### Phase 4: Grammar in full
- [ ] Word classes (K6): the parser proposes them. A word used outside its listed class gets either a proposed class (with why and example) or a flagged sentence. Review mode `?classes=N`.
- [ ] Migrate the grammar boxes module by module: each becomes a pattern file, and the lesson points to it. Along with that:
  - generate-grammar-overview reads the pattern files;
  - coverage grammar items list their patterns, and check-coverage checks both directions;
  - check-grammar-blocks requires a pattern per module.
- [ ] Rules for every pattern. Then the report over all texts (K7):
  - lesson sentences, including the early-patterns rule;
  - composite examples;
  - composite forms, matched against the Word Builder's reading of forms (`word-builder-parse.js`);
  - stories, proverbs and the phrase book.
  
  Each failure ends one of two ways: Claude fixes the rule, or the author reviews the flagged sentence.
- [ ] **Gate `check-grammar`** once the report is clean.
- [ ] Minimal patterns, measured four ways:
  - **cover the core:** clingo set cover of patterns over the 38 items, plus the NSM and Aristotle items that need grammar;
  - **combos:** a pattern whose examples still parse without it is built from the patterns that parse them;
  - **say it without:** each pattern's `without` forms, and the sentences that need the pattern;
  - **learner load:** new patterns per lesson, and whether every pattern is taught after the ones it builds on.
- [ ] Grammar consequences join the phase 3 reports: patterns a word carries, and sentences that would stop parsing.
- [ ] Later, not in this plan: the Sentence Builder and Word Builder read their rules from `src/data/grammar`.
- **Done when:** the gate is on and the minimal-patterns report exists.
- **Author:** classes review, flagged sentences, and a check of each migrated lesson's boxes.

### Phase 5: Relations
- [ ] **The kinds (K18).** Today the data has only "opposite" (19 word pairs and 17 phrases) and "close in meaning" (5 pairs and 4 phrases), for words, with no kind and nothing for composites. The store takes these kinds:
  - **same:** true synonyms (one form, K9 and the same-form groups); close in meaning, with how they differ (degree, tone, formal or casual);
  - **opposite**, with its kind: either-or (alive, dead), more-or-less (hot, cold), the other side of one act (buy, sell; give, take), undoing (open, close), and said by "not" (shǎo = bù duō);
  - **one of a set:** a group that excludes each other (the four directions, the days, the numbers), and a **scale** with an order (small, big; the sizes; first, second, third);
  - **kind-of** and **part-of** (made-of and member-of with it);
  - **from the description:** who does it (X-de rén), where (X-de dì-fang), with what (yòng X), what makes it (ràng X), what it is made of;
  - **built from:** a composite and its head, its parts, its sense (this already exists as `head_word` and `head_comp`);
  - **defined by:** the paraphrase edges (phase 2);
  - **goes with:** words that keep company in the book and in composites (from the usage data);
  - **same meaning in English:** the WordNet link (phase 6).
- [x] **Candidates report, no review needed to start.** `kb_relations` lists every relation the data already implies, each with its kind, its source and its why, marked proposed: the existing pairs and phrases, the 59 composite opposite hits, the same-form groups, the "bù X" paraphrases (opposites by "not"), the "X-de rén / dì-fang" descriptions, the categories (kind-of), and the head and parts of composites. Nothing is lost between now and the relations review, and the removal and addition reports (phase 3) can name the pairs that break.
- [ ] Opposite kinds on word pairs. Composite opposites go in the new map, from candidates: the 59 rule hits plus the `antonyms` proposed in review batches 13–16, which were never stored. Review mode `?relations`. Rejected pairs are remembered so they aren't proposed again.
- [ ] The 242 same-form composite groups are sorted into true synonyms and different meanings. Different meanings get distinct forms through a normal composite batch.
- [ ] The `part-of` map (body, house, plant, machine…) and kind-of trees from the heads.
- [ ] Relations read from descriptions (agent X-de rén, place X-de dì-fang, tool yòng X, cause ràng X…) through the Word Builder's reading of each form, stored as facts.
- [ ] Shown to learners: the dictionaries get "Opposite of / Same as / Kind of / Part of / Who · where · with what" blocks, and the Word Map gets relation edges.
- **Author:** the relations review and the same-form sort.

### Phase 6: English and yardsticks
- [ ] Python, once: a gitignored venv with `wn` (OEWN 2025, `omw-cmn`, CILI) and `wordfreq`. Scripts live in `scripts/python/`.
- [ ] ILI links on composites and words. They are applied automatically when the Chinese and English WordNets agree on exactly one synset; the rest go to review (`?wordnet`).
- [ ] English index (a gitignored file built by the Python script) and `src/lib/kb/english.js`. Word lookup works in tiers:
  1. the glosses;
  2. the same WordNet id (synonyms);
  3. a walk up "is a kind of", which offers "…-de X" as a starting description.
- [ ] `kb/yardsticks/`, small files that are committed:
  - the Mandarin frequency list from misc;
  - Basic English 850;
  - the English top 3000 from wordfreq;
  - about 1000 everyday sentences from Tatoeba (short, common words; CC-BY, credited);
  - the HSK 3.0 grammar list;
  - UD relations, a WALS subset, NSM grammar;
  - the Toki Pona and Basic English rules.
- [ ] Sentence translator (K15). Pattern rules get their English side, and `compromise` normalizes English (lemmas; tense to le / guo / zài). It is rule-based and runs in the browser. It answers either with a form and its explanation, or with "can't say yet" plus the missing word or pattern.
- [ ] AI drafts for the author and Claude (`kb_translate`): Claude drafts, and the parser and dictionary check and explain.
- [ ] Coverage measurement: sayability per yardstick feeds the scoreboard and the Frontier chapter, listing what's still hard to say and what would fix it.
- [ ] Learner page "How do I say…?" on the site, in the Sentence Builder's look.
- **Author:** the WordNet link review, and a look at the learner page.

### Phase 7: Comparisons, generation, export
- [ ] Each pattern links to HSK points, UD relations, WALS features, NSM, its English construction, and Toki Pona and Basic English rules. Reports:
  - which of HSK 1–3 grammar HSD covers, simplifies or leaves out;
  - how HSD compares on size and reach with Toki Pona and Basic English;
  - patterns that overlap within HSD (the same sentences parse two ways).
- [ ] Generation, always as drafts for review:
  - composite examples, two per entry, grammatical by construction;
  - lesson practice from the words and patterns taught so far;
  - descriptions for new words, from Word Builder patterns plus WordNet hints (and HowNet sememes, as an experiment);
  - stress tests: random sentences, flagged when they parse more than one way or read wrong (the yòu "again"/"right" kind).
- [ ] OntoLex/OWL export (`kb_export`) for Protégé and sharing.

## 5. Risks

| Risk | What we do |
|---|---|
| Review load (words, kinds, classes, relations, WordNet links, flagged sentences) | Rules pre-fill; only uncertain items reach the page; batches of 100 or fewer; phases spread it out. |
| Paraphrase quality decides the atoms | Every paraphrase is reviewed; the atoms panel shows the definition trees, so a bad one is visible. |
| Mandarin is flexible, so strict rules reject good sentences | Word classes with a why; report before gate; flagged sentences go to the author, not straight to a failure. |
| Grammar lives in lessons *and* pattern files during the migration | Migrate module by module; check-grammar-blocks guards each migrated module. |
| clingo in wasm gets slow on big searches | Search within candidate pools; native `clingo` (pip) is a fallback. |
| Licenses of outside data on the published site | OEWN CC-BY 4.0, Tatoeba CC-BY 2.0 FR: credit both. Check the Chinese WordNet, HowNet and the HSK list before anything from them is shown on the site. |

## Sources added for this plan

- [ivankra/hsk30](https://github.com/ivankra/hsk30): HSK 3.0 lists including `hsk30-grammar.csv` (MIT; check the grammar list's source before use).
- [compromise](https://www.sourceforge.net/mirror/compromise): English normalization in the browser. The [nearley](https://tessl.io/registry/tessl/npm-nearley) and [scfg](https://github.com/vaskonov/scfg) parser libraries were considered.
- [clingo-wasm 0.6.0](https://www.npmjs.com/package/clingo-wasm) (clingo 5.8.1, Node and browser).
