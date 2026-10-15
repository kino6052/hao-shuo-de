# Hao-shuo-de App

**Hao-shuo-de** (好说的) is real Mandarin boiled down to the simplest version that still works. Every rule is ordinary Mandarin, every word is a real Mandarin word, and anything the small core cannot name is described with the words it has. It is not Toki Pona.

This repository holds three things that depend on each other:

1. **The textbook**: a static, multilingual (English / Russian / Chinese) single-page app with lessons, exercises, stories, dictionaries and tools, built with **Preact + Vite**. No backend; the build is plain static files.
2. **The language data** in `src/data`: the core words, the composite words built from them, the things the language must be able to say, and the grammar patterns. It is the one source of truth. The lessons, the dictionaries and the reports all read it.
3. **The knowledge base** (KB): a reasoner over that data, built on clingo and a chart parser. It answers what a word is for, what dropping it would cost, which words are atoms, and whether a sentence parses. It never edits the data. See [kb/README.md](kb/README.md).

## Quick start for agents

Do not read the whole repository. Ask it.

| You want | Run or open |
| --- | --- |
| What a folder is for | its `.about` file (one line), e.g. `src/data/.about` |
| What a file does | its first comment block (`head -15 path`) |
| Everything about one word | `node scripts/kb.js word <pinyin>` (MCP tool `kb_word`) |
| What dropping a word would cost | `node scripts/kb.js remove <pinyin>` (`kb_remove`) |
| Whether a sentence parses | `node scripts/kb.js parse "Wǒ chī fàn."` (`kb_parse`) |
| Whether a new composite form is valid | `node scripts/kb.js check-form "chī fàn"` (`kb_check_form`) |
| Anything else about the data | `node scripts/kb.js query "<clingo rules>"` (`kb_query`), or the full list in [kb/README.md](kb/README.md) |
| Which lesson teaches what | the "The book" table below, or `// @teaches` in `src/content/lessons/<id>/index.ts` |
| The numbers now | the "The language now" table below, or the last row of `kb/scoreboard.csv` |
| Move, rename or remove a word | `npm run word` and `npm run refactor` (dry run by default), never by hand |
| Whether your change is safe | `npm run check -- <lesson-id>` for one lesson, `npm run check` for all gates, `bun test` for the tests |

Rules that bite:

- `src/data` is the one source of truth. The KB reads it and never edits it.
- Lesson order lives in `src/content/book.js` (ids, not numbers).
- Lessons use only dictionary words and only words taught in earlier lessons; the gates enforce it.
- Plain language: no grammar jargon beyond the ten allowed terms (`npm run check-jargon`).
- Do not edit between `<!-- generated:… -->` markers; change the comment they come from (see "This README").
- Text with backslashes goes in with a file-writing tool, not a shell heredoc.

Plans and decisions: [BOOK_PLAN.md](BOOK_PLAN.md) (book, decision log D1…), [KB_PLAN.md](KB_PLAN.md) (knowledge base, K1…), [BOOK_STRUCTURE.md](BOOK_STRUCTURE.md) (the tree), [OPTIMIZATIONS.md](OPTIMIZATIONS.md) (why `npm run check` is quick, the caches, the switches). Search them by decision number (`grep -n "D63" BOOK_PLAN.md`).

## The language now

<!-- generated:facts -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| What | Now |
| --- | --- |
| Lessons | 24, in 3 sections (6 / 10 / 8), then 14 chapters to read, look things up in or build with |
| Core words | 230: 53 atoms (no honest description) and 177 with a paraphrase, so potentially removable |
| Composite words | 1555, with 1912 ways to say them (1680 built from their parts, 0 spelled whole, 232 waiting for the author to say which) |
| Grammar patterns | 138, one file each in `src/data/grammar/` |
| Things the language must say | 113: 65 atoms of meaning, 10 categories, 38 grammar points |
| Lesson sentences that parse | 99.3 % |
| Smallest set the others can be said from | 202 words; the other 28 have a fine paraphrase |
| Gates (`npm run check`) | 17 |
| Test files (`npm test`) | 43 |

The language numbers are the last row of `kb/scoreboard.csv` (2026-10-14, refactors/C1.ts: 17 op(s)); a refactor adds a new row.
<!-- /generated:facts -->

## The book

Lessons are named, not numbered: [src/content/book.js](src/content/book.js) is the one place that sets their order, and a lesson's number is its place there. The full tree is in [BOOK_STRUCTURE.md](BOOK_STRUCTURE.md); the plan, the tone guide and the decisions behind it are in [BOOK_PLAN.md](BOOK_PLAN.md).

<!-- generated:book -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

#### Section 1 — Sounds, Words, and Simple Sentences

| # | Lesson | What it teaches |
| --- | --- | --- |
| 1 | Sounds and Symbols | Syllables, pinyin, tones, the light tone, and how words are written. |
| 2 | Words and Sentences | NOUN + shì + NOUN, pointing with zhè, and NOUN + bù shì + NOUN. |
| 3 | Modifying Nouns | NOUN + hěn + adjective, adjective-de + NOUN, many (hěn-duō-de), and few (shǎo). |
| 4 | Pointing at People and Things | Pointers (pronouns), the measure word gè with zhè-ge / nà-ge, men for more than one person, and body words. |
| 5 | Verbs 1 — Who does what | Who + verb + what (and why the order matters), bù + verb, and yǒu / méi-yǒu. |
| 6 | Questions and Answers | Yes-or-no questions (ma, verb-not-verb), what (shénme), why (wèi-shénme), how (zěnme), and answering. |

#### Section 2 — Modifying Words and Meaning

| # | Lesson | What it teaches |
| --- | --- | --- |
| 7 | Pre-Verbs | Want, can, learn to (xué), know how, love to, and maybe (kě-néng). |
| 8 | Time 1 — When it happens | Done (le), right now (zài), will (huì), done before (guò), and saying the time first. |
| 9 | Time 2 — Around an action | When (X-de shí-jiān), finished (verb-wán), after (verb-wán hòu), start (kāishǐ), for a moment (yī-xià), again (yòu), and how many times (cì). |
| 10 | Space 1 — Where it is | Zài + place, asking where (nǎ-lǐ), in / on / under, and the side words (qián-miàn, hòu-miàn, pángbiān). |
| 11 | Space 2 — Moving | Coming and going (lái / qù), from (cóng), arriving (dào), direction (qǐ-lái, shàng-lái, xià-lái, wài-miàn), moving (dòng), and far / nearby (yuǎn, fùjìn). |
| 12 | Modifiers 1 — How much | Very (hěn), really (zhēn), not and not very (bù, bù hěn), hard and how something looks (nán, hǎo-kàn / nán-kàn), asking how something is, and value (jiàzhí). |
| 13 | Modifiers 2 — Comparing | A bǐ B + adjective (bigger than), yī-yàng (the same), bù yī-yàng (different), bié-de (other), and zhǒng (kind). |
| 14 | Modifiers 3 — Also and all | Also (yě) with verbs and with adjectives, all (dōu), everything (shénme-dōu), and part (bù-fen). |
| 15 | Modifiers 4 — Becoming and making | It changed (adjective + le), became (biàn), making it so (zuò), putting the thing first (bǎ), where you put it (fàng), and strong (yǒu lì). |
| 16 | Verbs 2 — Direction and result | What comes after a verb: which way it goes (ná-lái, ná-chū-lái), how it ends (zhǎo-dào, xué-huì), whether you can get there (kàn-bù-dào, kàn-de-dào), and qǐ-lái / xià-qù. |

#### Section 3 — Special Words and Concepts

| # | Lesson | What it teaches |
| --- | --- | --- |
| 17 | Numbers | Counting aloud (yī, èr, sān), number + gè + noun (liǎng for two things), above ten (shí-èr, èr-shí), number labels (hào), o'clock (diǎn), a little (yī-diǎn), and sums: add with fàng zài yī-qǐ, take away with ná, multiply and divide with cì. |
| 18 | Colors | Color-de + noun, thing + shì + color-de, and asking shénme yánsè. |
| 19 | Changing the Role of a Word | The jobs of -de: verb-de (the thing), verb-de rén (the one who), verb-de + adjective (how), and naming things with a description. |
| 20 | Relationships 1 — Inside a sentence | Give / for (gěi), with (yòng), and / or (hé, hái-shì), and toward / for (duì), with qún, mō, dǎ. |
| 21 | Relationships 2 — Linking sentences | Because (yīnwèi), but (dàn-shì), and if (rúguǒ), with yán, sǐ, and huó. |
| 22 | Greetings and Feelings | Hello (nǐ hǎo), thank you (xiè-xie), names (jiào), orders (a bare verb, bù yào), feelings (jué-de, pà, xiào), and hearing sounds (shēngyīn). |
| 23 | Doubling Words | Saying a word twice. A verb twice does it a little (kàn-kan), a describing word twice makes it stronger (yuán-yuán-de, hǎo-hǎo), and a few nouns and counting words twice mean every (rén-rén, gè-gè). |
| 24 | Everyday Patterns | "Let" and "help" without a word for "let": wǒ lái (let me), gěi wǒ + verb + yī-xià (let me see), bāng (help), jiào + person + verb (have or let someone), néng … ma? (may I), and …, hǎo ma? (let's, please). |

#### After the lessons

| Group | Chapter | Source |
| --- | --- | --- |
| Content | Phrase Book | `src/content/phrase-book.ts` |
| Content | Ten Short Stories | `src/content/appendix-stories.ts` |
| Reference | The Pinyin System | `src/content/appendix-pinyin.md` |
| Reference | Tone Sandhi Reference | `src/content/appendix-sandhi.yaml` |
| Reference | Grammar Patterns Reference | `src/content/appendix-grammar.ts` |
| Tools | The Official Hao-shuo-de Dictionary | `src/content/dictionary.md` |
| Tools | The Official Hao-shuo-de Categorical Dictionary | `src/content/dictionary-categorical.md` |
| Tools | The Composite Dictionary | `src/content/dictionary-composites.md` |
| Tools | Sentence Builder | `src/content/sentence-builder.yaml` |
| Tools | Word Builder | `src/content/word-builder.yaml` |
| Tools | Word Map | `src/content/word-map.yaml` |
| Misc | Why Minimality Works | `src/content/appendix-minimality.yaml` |
| Misc | The Frontier | `src/content/appendix-frontier.ts` |
| Misc | Hao-shuo-de is not toki pona | `src/content/appendix-toki-pona.yaml` |
<!-- /generated:book -->

## Requirements

- [Bun](https://bun.sh) for installing and for the tests
- Node 22 or newer for the scripts (the `node scripts/…` commands)
- Optional: a native clingo for the KB (see [kb/README.md](kb/README.md)); without it the KB falls back to the one built into `clingo-wasm`, with a smaller size limit

## Build & run

```
bun install            # install dependencies (also turns on the git hook, see below)
bun run dev            # start the dev server (hot reload)
bun run build          # run every gate, then build the static site into docs/
bun run preview        # serve the built site locally, to check it before it goes out
bun test               # run the tests
```

`npm run <script>` works the same as `bun run <script>`. The build uses relative asset paths (`base: './'` in `vite.config.js`), so `docs/` works unmodified from a domain root, a GitHub Pages project subpath, or a custom domain. Don't hand-edit `docs/`; it is regenerated by `build`.

While `dev` runs, two pages are served on the same address:

- `/__kb/`: the knowledge-base explorer (a word's card, what dropping it costs, atoms, relations, the scoreboard).
- `/__review/`: the review pages where the author decides composites (`?batch=N`), words (`?words=N`) and which compound forms are built or spelled (`?kinds=N`).

## Where things are

<!-- generated:layout -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| Folder | What is in it |
| --- | --- |
| `.githooks/` | Git hooks. The pre-commit one refreshes the generated parts of the READMEs; npm run hooks turns it on. |
| `kb/` | The knowledge base's own files: rules, reports, the explorer page and the scoreboard. See kb/README.md. |
| `kb/reports/` | Reports the KB writes for the author to read. |
| `kb/rules/` | The clingo rules the questions are asked with. |
| `public/` | Static files copied as they are into the site; pronunciation clips go in audio/. |
| `refactors/` | Refactor lists: each change to the words as a list of ops, kept as the record of the decision. |
| `review/` | Material for the review pages: Claude's proposals, the author's decisions and the example sentences. |
| `review/decisions/` | The author's decisions, written by the review page as they are made. |
| `review/examples/` | Example sentences for the composite review batches. |
| `review/proposals/` | Claude's proposals for each review batch. |
| `scripts/` | Command-line tools: the gates (check-*), the generators, the word and refactor tools, and the KB command line. |
| `src/` | The app: Preact components, the book's content, the language data and the shared libraries. |
| `src/components/` | Preact components, each with its own .module.css. |
| `src/content/` | The book: one folder per lesson, the intro and appendix chapters, and the dictionary pages. book.js sets the order. |
| `src/content/lessons/` | One folder per lesson: index.ts lists its modules in reading order, and each module is one teaching point in every language. |
| `src/data/` | The language itself and the source of truth: words, composites, coverage, grammar patterns and the maps between them. |
| `src/data/composites/` | One file per composite word: its forms (best first), head, how close it is to Mandarin, and examples. |
| `src/data/coverage/` | What the language must be able to say: the atoms of meaning, Aristotle's categories and the core grammar points. |
| `src/data/grammar/` | One file per grammar pattern: meaning, template, parse rules, examples and the lesson that teaches it. |
| `src/data/maps/` | Links between words: categories, opposites, synonyms and the connections the author states. |
| `src/data/words/` | One file per core word: meaning, hanzi, necessity, and its paraphrase or atom mark. |
| `src/lib/` | Code shared by the app and the scripts: data shapes, routing, i18n, and the word, chapter and composite logic. |
| `src/lib/grammar/` | The chart parser and the lexicon behind it; runs in Node and in the browser. |
| `src/lib/kb/` | The knowledge base: facts, the clingo calls, the reports and the Claude tools. See kb/README.md. |
| `tools/` | Local tools that are not part of the repo, such as the native clingo (git-ignored). |
<!-- /generated:layout -->

The shapes of the data are defined in TypeScript, so a mistake is a type error:

<!-- generated:shapes -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| File | What it defines |
| --- | --- |
| `src/lib/chapter-entry-types.ts` | Shared TS types for the *.ts chapter entry schema (see chapter-content.js for the runtime transform these describe). |
| `src/lib/composite.ts` | A composite-dictionary entry: a common Mandarin word and how Hao-shuo-de says it with dictionary words. |
| `src/lib/coverage-kb.ts` | The coverage knowledge base (src/data/coverage/): what Hao-shuo-de must always be able to say, one file per group (atoms of meaning, Aristotle's categories… |
| `src/lib/data-maps.ts` | The associative maps in src/data/maps/: how words relate, kept out of the word files so a relation change is one line here and a word change never has to sweep through them. |
| `src/lib/grammar-pattern.ts` | A grammar pattern: one way of putting words together, written once as data (KB_PLAN.md §3). |
| `src/lib/lesson.ts` | Lessons are assembled from small modules, one file each, so a point can be added, moved to another lesson, or dropped by touching one file and one line of its lesson's index.ts. |
| `src/lib/word.ts` | A dictionary word: one file each, src/data/words/<id>.ts, holding only what the word itself is (its sound, hanzi, part of speech, definition, and why the core needs it). |
<!-- /generated:shapes -->

## Commands

<!-- generated:commands -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload; it also serves the review pages (/__review/) and the KB explorer (/__kb/). |
| `npm run build` | Checks every gate, regenerates the grammar overview, word usage and dictionary pages, then builds the static site into docs/ with one page per route. |
| `npm run preview` | Serves the built site locally, to check it before it goes out. |
| `npm run test` | Runs the fast test files with bun, several at a time (under half a minute); the slow ones, which use the real data or copy the repo, wait for test:all. |
| `npm run test:push` | Runs the test files in three tiers: the quick ones on every commit, the rest before a push or when asked. |
| `npm run test:all` | Runs every test file with bun, several at a time, the slow ones first. |
| `npm run typecheck` | Type-checks the whole project with tsc (the check-types gate runs the same). |
| `npm run data` | Writes the index files of the data folders, so a word, a composite entry or a coverage group is added or removed by adding or deleting its file. |
| `npm run word` | One word at a time: look a word up, or change it everywhere it's used. |
| `npm run refactor` | Applies a refactor list: a file in refactors/ whose default export is a list of word ops (see scripts/refactor-lib.js for each op's fields), in order. |
| `npm run graph-report` | What the vocabulary graph says (src/lib/graph.js), as text that can be compared before and after a refactor. |
| `npm run report-roots` | Which roots would bring Hao-shuo-de closest to real Chinese: for every character the dictionary doesn't have yet, how many words of the frequency list it would complete… |
| `npm run plan-4b` | Rewrites the §4b table of BOOK_PLAN.md (which words each lesson introduces) from the lessons themselves, so a word refactor never needs the table edited by hand. |
| `npm run word-usage` | Cross-references every dictionary word against every lesson/appendix content file, so the dictionary UI can show "used in: Lesson 3, Lesson 5" next to each word -- and, just as importantly… |
| `npm run composite-examples` | Writes example sentences into the composite dictionary. The sentences are written by hand in plain pinyin, one file per review batch. |
| `npm run grammar-overview` | Builds the grammar overview chapter (src/content/appendix-grammar.ts) from the lessons' patterns: every module's info block (src/lib/lesson.ts) that isn't a note (BOOK_PLAN.md §6… |
| `npm run check` | Runs every book gate (BOOK_PLAN.md §6) -- the first step of `npm run build`. |
| `npm run report-heads` | Rebalancing the vocabulary by heads and naturalness: where the composites hang (src/lib/heads.js), how close they are to Mandarin (src/lib/ naturalness.js), and which roots would bring them closer. |
| `npm run kb` | The KB for the command line, the explorer page and the Claude tools (KB_PLAN.md phase 1). |
| `npm run readme` | Rewrites the generated parts of the READMEs from the code itself, so they never go stale: the comment at the top of each file (its summary and its usage lines), package.json, the gate list… |
| `npm run hooks` | Points git at .githooks/, so every commit refreshes the generated parts of the READMEs (scripts/generate-readme.js). |
<!-- /generated:commands -->

The summaries come from the comment at the top of each script, which also shows how to call it.

## Gates

`npm run check` runs every gate below; `npm run build` starts with it. Each shows its own report, and the run fails if any gate failed. Some gates are strict only for the finished lessons (`scripts/finished-lessons.js`) and report the rest. See [BOOK_PLAN.md](BOOK_PLAN.md) §6.

<!-- generated:gates -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| Gate | What it checks |
| --- | --- |
| `npm run check-data` | Checks the data folders (src/data/) hold together, so a word or composite is added, changed or removed by touching its own file and nothing silently goes stale. |
| `node scripts/check-types.js` | Type-checks the project with `tsc --noEmit` (see tsconfig.json). Vite strips types without checking them, so this gate is the build's only type check. |
| `npm run check-book` | Checks that the lessons match the book's plan (see BOOK_PLAN.md §3-§4). |
| `npm run check-sounds` | Checks the dictionary's sounds, so a word is never two words and a use is never ambiguous (BOOK_PLAN.md D60, catch-all words). |
| `npm run check-coverage` | Checks that Hao-shuo-de can still say what it must (src/data/coverage/): the atoms of meaning (the NSM semantic primes), Aristotle's ten categories, and the core grammar and relationships. |
| `npm run check-summaries` | Summary gate: every chapter summary is at most SUMMARY_MAX_WORDS (50) words (BOOK_PLAN.md §1, rule 7). |
| `npm run check-jargon` | Jargon gate: the book uses no grammar jargon at all (BOOK_PLAN.md §1, rule 4). |
| `npm run check-early-words` | Early-words gate: a lesson may only use words introduced in that lesson or an earlier one (BOOK_PLAN.md §4a, rule 2). |
| `npm run check-word-use` | Word-use gate: every dictionary word is actually used -- in at least one example sentence or answer in the lesson that introduces it, not just on its vocab card (BOOK_PLAN.md §4a, rule 7… |
| `npm run check-grammar-blocks` | Info-block gate: a lesson is assembled from modules (src/lib/lesson.ts), and every module has exactly one info block -- the point's pattern in a line or a short box -- right after its explanation… |
| `npm run check-grammar` | Grammar gate (KB_PLAN.md phase 4, K7): every Hao-shuo-de sentence of the book parses. |
| `node scripts/check-classes.js` | Word-class gate (KB_PLAN.md phase 4, K6): the classes a word lists besides its part of speech are true. |
| `node scripts/check-forms.js` | Composite-description gate (KB_PLAN.md phase 4, K7): the patterns read every description of the composite dictionary that is more than one word. |
| `npm run check-practice` | Practice gate: in every lesson, each word the lesson introduces appears in at least one of its example sentences AND in at least one exercise (its answer -- exercise prompts are English). |
| `npm run check-example-runs` | Example-run gate: a lesson never shows more than MAX_EXAMPLES_IN_A_ROW example sentences in a row (scripts/limits.js), so a reader isn't buried in examples. |
| `npm run check-word-builder` | Word Builder gate for the composite dictionary (src/data/composites/): every description the Word Builder can read is written the way it writes it, with matching hanzi… |
| `npm run check-passive` | Passive gate: Hao-shuo-de says the passive the spoken way, with ràng (X ràng Y + verb: wǒ-de bāo ràng tā ná-zǒu le), never with 被 / bèi (the author's rule, review batch 10). |
<!-- /generated:gates -->

## Changing the language

Words move, split, rename and go all the time, so every change has three steps:

1. **See** what it would cost: `npm run kb -- remove <word>`, `npm run kb -- add <hanzi>`, `npm run kb -- swaps`.
2. **Apply** it from a refactor list: a file in `refactors/` that stays in the repo as the record of the decision. `npm run refactor -- refactors/X.ts` is a dry run; add `--write` to apply it and `--check` to try it on a copy and see which gates would fail and which numbers move. `npm run word -- <op>` does one change at a time.
3. **Catch** what it broke: `npm run check`.

The review pages turn the author's decisions into a refactor list (`node scripts/review-batch.js words 1`). A word review only adds notes and links: an atom is never removed because a review said its paraphrase was fine; it is marked *potentially removable* and the KB answers what would happen if it went.

## Contributing content

- **Lessons** are folders under `src/content/lessons/<id>/`. `index.ts` lists the lesson's modules in reading order, and each module is one teaching point in a file of its own: word cards, explanation, a one-line grammar box, examples, exercises and an optional FAQ, with every language side by side. A missing `ru` or `zh` means "not translated yet". The types are in `src/lib/lesson.ts`, and [BOOK_STRUCTURE.md](BOOK_STRUCTURE.md) explains the layout. To move a point to another lesson, move its file and its line in the two `index.ts` files.
- **Intro, appendix and tool chapters** are `.ts`, `.yaml` or `.md` files in `src/content/`. The dictionary pages are generated from the word data on every build; never edit them.
- **Reference a word by id, not by spelling.** Every word has a stable id (`hao3`, `bu4`, `zou3`: the sound and the tone). Write `{{word:ID}}` in chapter content and it shows the word's current spelling, so renaming a word updates every chapter that uses it. Point at a lesson with `{{lesson:<id>}}`, which shows its current number. An id that does not exist fails the build.
- **Add, rename or remove a word** with `npm run word` or a refactor list, never by hand: the word's files, the indexes, the composites that use it and the rules that name it all follow. `npm run data` rebuilds the index files after a file is added or deleted by hand.
- **Write plainly.** Lessons use only dictionary words and ten grammar terms, with the plain name first; `npm run check-jargon` enforces it.
- **Audio clips** go in `public/audio/`, named to match what the `<audio-example zh="汉字">pinyin</audio-example>` tags in the content expect.
- **UI components** go in `src/components/`, each with its own `.module.css`, following the existing components.

## This README

The tables above and the ones in [kb/README.md](kb/README.md) and [BOOK_STRUCTURE.md](BOOK_STRUCTURE.md) are written by `npm run readme` from the code itself: the comment at the top of each file, `package.json`, the gate list, the Claude tools, the lessons' own comments and the one-line `.about` file in each folder. Everything between a `generated:` marker and its closing marker is rewritten; the rest is hand-written. Every commit refreshes them through the git hook in `.githooks/` (turned on by `npm run hooks`, and by `bun install`). To change a line in a table, change the comment it comes from. The notes it reads are listed at the top of [scripts/generate-readme.js](scripts/generate-readme.js).
