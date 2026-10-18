# Knowledge base: how to browse it

The knowledge base (KB) reads the book's data in `src/data` and answers questions about it. What is a word for? What would dropping it cost? Which words are atoms? What would a new root bring? Does a sentence parse? It never edits the data. The plan, the decisions (K1 to K21) and what is built are in [KB_PLAN.md](../KB_PLAN.md); the research behind the choice of tools is in [KB_PROPOSAL.md](../KB_PROPOSAL.md).

There are three ways to ask it: the explorer page in the browser, the command line, and the Claude tools. All three call the same code, so the answers match.

## How it works

- The data is exported as **facts** (`src/lib/kb/facts.js`) and questions about sets are answered by **clingo** with the rules in `kb/rules/`: what breaks if words go, which words are atoms, the smallest set the others can be said from. A native clingo is used when one is found (no size limit, a real timeout); otherwise the one built into `clingo-wasm`. `node scripts/kb.js engine` says which.
- Sentences are checked by our own **chart parser** (`src/lib/grammar/`), over one file per grammar pattern in `src/data/grammar/`. It runs in Node and in the browser. Its parses become facts too, so grammar shows up in the consequence reports.
- Every answer comes with its why: the facts behind it, or the parse tree.
- The KB is rebuilt whenever a data, content or rule file changes.

## The explorer page

1. Start the dev server from the project folder:

   ```
   npm run dev
   ```

2. Open `/__kb/` on the address Vite prints. The server is set to 127.0.0.1 and Vite's default port is 5173, so it is usually `http://127.0.0.1:5173/__kb/`.

3. Pick a tab, type in the box, press Ask. The tabs:

| Tab | What it shows |
|---|---|
| Word | One word's card: meaning, paraphrase or atom mark (and whether it is *potentially removable*), word classes, forms, relations, the connections the author stated. |
| Drop a word | What removing the word would cost: composites, sentences and pages to rewrite, Mandarin that can't be written, coverage lost, grammar patterns that name it. |
| Parse a sentence | Whether a sentence parses with the grammar patterns, and how. |
| Atoms | Which words are atoms (core words that others can't describe honestly), which have a paraphrase, and the smallest set the others can be said from. |
| Candidates | The cheapest words to drop and the best roots to add, ranked, and the best trades. |
| Add a root | What one hanzi would bring as a root: the Mandarin words it completes, the composites it lets be spelled, its sound. |
| Relations | Synonyms, opposites, connections, words a paraphrase names, pairs that name each other, and the other relations the data states or implies. |
| Meaning | What the words say of the NSM primes, Aristotle's categories and grammar items. |
| Scoreboard | The language's numbers now, next to the stored history. |

Words in the results are links. Click one to ask about it.

## The command line

Run these from the project folder (`npm run kb -- <command>` works too). Add `--json` to any command to get the data instead of the text. Quote a sentence or a word with a space in it: `node scripts/kb.js word "chī fàn"`. With no arguments the script lists the commands.

<!-- generated:kb-commands -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

```
node scripts/kb.js word dēng                                            # one word's card: meaning, paraphrase or atom mark, forms, relations
node scripts/kb.js remove dēng [fàn …]                                  # what dropping the words would cost
node scripts/kb.js check-form "chī fàn" [--tts 吃饭] [--zh 吃饭 --py chīfàn]  # is a proposed form valid
node scripts/kb.js query "<rules>"                                      # your own clingo rules, run against the facts
node scripts/kb.js parse "Wǒ chī fàn." [--lesson 5]                     # does a sentence parse; with --lesson, only the patterns taught up to it
node scripts/kb.js atoms [word]                                         # the atoms report, or one word's line
node scripts/kb.js relations [kind] [--status proposed|accepted] [--limit N]  # synonyms, opposites, connections and the rest
node scripts/kb.js relations tree [word] [--limit N]                    # what hangs under what: the kind-of tree of every word, or of one
node scripts/kb.js english <word> [--json]                              # which entries say an English word: by gloss, by WordNet sense, as a kind of
node scripts/kb.js cross-check [kindOf|opposites|parts|missing|headless] [--limit N]  # the dictionary's kind-of, opposite and part-of relations against WordNet's
node scripts/kb.js frontier [words|mandarin|sentences] [--limit N]      # what the dictionary cannot say yet and the word that would fix each
node scripts/kb.js yardsticks [--limit N]                               # how much of the Mandarin and English word lists and Basic English the dictionary can say
node scripts/kb.js meaning [says|atoms|grounding|<word>] [--limit N]    # what the words say of the NSM primes, Aristotle's categories and grammar
node scripts/kb.js candidates [remove|add] [--limit N]                  # the cheapest words to drop and the best roots to add
node scripts/kb.js add <hanzi>                                          # what one root would bring
node scripts/kb.js swaps [--k N]                                        # the best trades of K roots in for K words out
node scripts/kb.js audit [--stdout]                                     # writes kb/reports/candidates-audit.md
node scripts/kb.js parse-report [--lessons 4] [--stdout]                # parses every sentence; writes kb/reports/lessons-1-N-parse.md
node scripts/kb.js parse-diff [--ref HEAD] [--all] [--limit 12]         # sentences that parse differently now than at a git ref
node scripts/kb.js classes [--limit 20]                                 # word classes that would make failing sentences parse
node scripts/kb.js patterns [--limit 12] [--seconds 300]                # the minimal-patterns report
node scripts/kb.js forms [--pos noun] [--limit 20]                      # how the composites' descriptions parse
node scripts/kb.js scoreboard [--append] [--label "what changed"] [--no-atoms]  # the language's numbers now, against the stored history
node scripts/kb.js move <lesson | lesson/module | pattern:id> <where>   # what a change in the lesson order would do
node scripts/kb.js engine                                               # which clingo is in use
```
<!-- /generated:kb-commands -->

## The Claude tools

`scripts/kb-mcp.js` is a small MCP server over stdio, registered in `.mcp.json`, so Claude can ask the same questions. Tool calls run one at a time, and a `kb_query` stops at its `timeout_ms` (20 seconds by default, 60 at most).

<!-- generated:kb-tools -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| Tool | What it answers |
| --- | --- |
| `kb_word` | The card for one dictionary word: its meaning, why the core needs it, its category, the lesson that teaches it, its opposites and synonyms, the atoms its paraphrase and its description come down to… |
| `kb_remove` | What happens if we drop one or more words from the core dictionary. |
| `kb_parse` | Does a sentence fit the grammar patterns (src/data/grammar/), and by which? |
| `kb_check_form` | Check a proposed Hao-shuo-de form before it goes into the data: plain pinyin becomes word references, every syllable must be a dictionary word (names and sounds in quotes), the hanzi must spell the words… |
| `kb_atoms` | Which dictionary words are atoms: the words the others cannot be said from. |
| `kb_relations` | The relations between words and between composites: opposites, close words, the same description, kind-of (a composite and its head), agents, categories, and phrases that stand in for a missing opposite. |
| `kb_english` | Which dictionary entries say an English word, in three tiers: the entries whose gloss has the word, the entries that share a WordNet sense with it (its synonyms), and, when neither says it… |
| `kb_cross_check` | The dictionary's kind-of, opposite and part-of relations checked against WordNet's, for the entries that have a WordNet link: which relations WordNet agrees with, which it reads the other way round or not at all… |
| `kb_yardsticks` | How much of the word lists the dictionary can say: the common Mandarin words, the 3000 most common English words and Basic English, with the first 500, 1000 and 3000 apart and the most common words still missing. |
| `kb_frontier` | What the dictionary cannot say yet, with the fix for each: the common English words with no entry (is there an entry WordNet gives for it that is not linked, a common Mandarin word that would carry it… |
| `kb_meaning` | What the dictionary says of the NSM primes, Aristotle's categories and the grammar items, and what the words are made of. |
| `kb_candidates` | Which words could go, or which roots could be added. kind "remove" (the default): every word that is not marked as an atom, the cheapest to drop first, each with what dropping it costs (composites to redo… |
| `kb_add` | What adding one hanzi as a root would bring: the Mandarin words it completes (the other hanzi of the word are already here), the ones that still need more roots, the composites it would let be spelled in hanzi… |
| `kb_swaps` | The best trade of K roots in for K words out, so the core keeps its size: the value is the Mandarin words that become writable less everything dropping the words costs (see kb_candidates). |
| `kb_scoreboard` | The numbers about the language as it is now (words, composites, average description length, words reviewed, the smallest defining set, true atoms, hidden vocabulary, coverage, parse rate, grammar patterns)… |
| `kb_query` | Raw clingo rules on top of the facts, for questions the other tools do not answer. |
<!-- /generated:kb-tools -->

## The code

<!-- generated:kb-modules -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| File | What it does |
| --- | --- |
| `src/lib/kb/atoms.js` | Which words are atoms (KB_PLAN.md K3, K8, phase 2). |
| `src/lib/kb/candidates.js` | What a change would cost and what it would buy (KB_PLAN.md phase 3): which words to drop, which roots to add, which trades to make. |
| `src/lib/kb/card.js` | Looking a word up: find it by any name, and gather everything the KB knows about it (KB_PLAN.md phase 1, "a word card: facts and relations"). |
| `src/lib/kb/check-form.js` | Checking a Hao-shuo-de form before it goes anywhere (KB_PLAN.md phase 1, `kb_check_form`): the same rules the book gates apply to composites… |
| `src/lib/kb/class-proposals.js` | Word classes the parser can propose (KB_PLAN.md K6). A word lists the classes it fills: its part of speech, and the classes it lists besides (`classes` in its data, each with a why and an example). |
| `src/lib/kb/clingo.js` | The reasoner (KB_PLAN.md K1): clingo, answer set programming. Two ways to run it, the same answers either way. |
| `src/lib/kb/cross-check.js` | WordNet cross-checks (KB_PLAN.md phase 6, K28): the dictionary's own kind-of, opposite and part-of relations against what the English WordNet says about the same senses… |
| `src/lib/kb/english.js` | English to Hao-shuo-de (KB_PLAN.md phase 6, K4, K15): given an English word, which entries say it, in three tiers. |
| `src/lib/kb/facts.js` | The facts the reasoner works on (KB_PLAN.md K2): everything in src/data and the book, written as clingo facts. |
| `src/lib/kb/fixture.js` | A tiny made-up language for the KB tests: twelve words, a few composites, one coverage group, two lessons. |
| `src/lib/kb/form-report.js` | The composite dictionary against the grammar (KB_PLAN.md phase 4, K7): every description of a composite (src/data/composites) is a piece of Hao-shuo-de, so the patterns should read it. |
| `src/lib/kb/frontier.js` | The frontier (KB_PLAN.md phase 6, K28): what the dictionary cannot say yet, and the word that would fix each. |
| `src/lib/kb/grammar-uses.js` | "Which grammar patterns does a word carry?" (KB_PLAN.md K20). A pattern names a word in three places: the words in its rules (=bie2), the words in its template, and the words in its examples. |
| `src/lib/kb/kb.js` | The one entry point the CLI, the explorer page and the Claude tools share (KB_PLAN.md phase 1, "thin scripts/kb.js"). |
| `src/lib/kb/mcp.js` | The Model Context Protocol, the small part the KB needs: JSON-RPC 2.0, one message per line over stdio. |
| `src/lib/kb/meaning.js` | Meaning links (KB_PLAN.md K19, phase 5): what the words say of the NSM primes, Aristotle's categories and the grammar items, and which primes each description reaches. |
| `src/lib/kb/parse-diff.js` | "What did my edit do to the parses?" (KB_PLAN.md K20). |
| `src/lib/kb/parse-report.js` | "How much of the book's own text do the grammar patterns cover?" (KB_PLAN.md phase 1: the parse report on lessons 1-4.) Every Hao-shuo-de sentence in the chosen lessons is parsed… |
| `src/lib/kb/parse.js` | "Does this sentence parse?" for the CLI, the explorer and the Claude tools (KB_PLAN.md phase 1, kb_parse). |
| `src/lib/kb/pattern-report.js` | Minimal patterns (KB_PLAN.md phase 4): which grammar patterns the book and the dictionary really need, and in what order they are taught. |
| `src/lib/kb/relations.js` | Relation candidates (KB_PLAN.md K18, phase 5): every relation the data already states or implies, with its kind, where it came from and why. |
| `src/lib/kb/rests-on.js` | Which atoms a word rests on (KB_PLAN.md K24: "each word shows which atoms its paraphrase and its description come down to"). |
| `src/lib/kb/review.js` | The word and kinds review (KB_PLAN.md phase 2): what the review pages show for a batch, and what the author's decisions turn into. |
| `src/lib/kb/rules.js` | The rule files (kb/rules/*.lp), read from disk. Node and bun only: the learner pages never run the reasoner. |
| `src/lib/kb/scoreboard.js` | The scoreboard (KB_PLAN.md phase 3): a few numbers about the language, one row per change, kept in kb/scoreboard.csv. |
| `src/lib/kb/set-cover.js` | The smallest set of things that together carry every item (KB_PLAN.md phase 4, "cover the core"). |
| `src/lib/kb/tools.js` | The Claude tools of the KB (KB_PLAN.md phase 1): what each is called, what it asks for, and how it answers. |
| `src/lib/kb/whatif.js` | "What if we drop these words?" (KB_PLAN.md K10). |
| `src/lib/kb/yardsticks.js` | How much of the yardsticks the dictionary can say (KB_PLAN.md phase 6, K12): the word lists in kb/yardsticks/ against the dictionary. |
| `kb/rules/atoms.lp` | Which words are atoms (KB_PLAN.md K3, K8, phase 2: the smallest defining sets). |
| `kb/rules/base.lp` | Relations every question uses (KB_PLAN.md phase 1). Read together with the facts from src/lib/kb/facts.js. |
| `kb/rules/kernel.lp` | The kernel and the core of the paraphrase graph (KB_PLAN.md phase 2; after Harnad's work on dictionary graphs). |
| `kb/rules/text.lp` | Rules that count over every sentence. |
| `kb/rules/whatif.lp` | What happens if words leave the core (KB_PLAN.md K10, phase 1: remove). |
<!-- /generated:kb-modules -->

## Reports

<!-- generated:kb-reports -->
<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->

| File | What it is |
| --- | --- |
| `kb/reports/candidates-audit.md` | Candidates audit, 2026-10-13 |
| `kb/reports/lessons-1-24-all-parse.md` | Parse report: lessons 1-24 and the other texts |
| `kb/reports/lessons-1-4-parse.md` | Parse report: lessons 1-4 |
| `kb/reports/same-form-sort.md` | Same-form groups, sorted (rel-sameform) |
| `kb/scoreboard.csv` | The language's numbers after each change; the Scoreboard tab charts it. |
<!-- /generated:kb-reports -->

`parse-report` writes `kb/reports/lessons-1-N-parse.md` by default; `--stdout` prints it instead.

## Changing the data

Don't edit the data by hand for a removal or a rename.

1. Preview with `remove` or `add`.
2. Apply the change from a refactor list: `npm run word` or `npm run refactor`. Do a dry run first, and `--check` to try it on a copy.
3. Run the gates: `npm run check`.

See K20 and K21 in [KB_PLAN.md](../KB_PLAN.md).
