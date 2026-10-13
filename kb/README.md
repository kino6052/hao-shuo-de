# Knowledge base: how to browse it

The knowledge base (KB) reads the book's data in `src/data` and answers questions about it. What is a word for? What would dropping it cost? What would a new root bring? Does a sentence parse? It never edits the data. The plan is in [KB_PLAN.md](../KB_PLAN.md).

There are two ways to look at it: the explorer page in the browser, and the command line. Both ask the same code, so the answers match.

## The explorer page

1. Start the dev server from the project folder:

   ```
   npm run dev
   ```

2. Open `/__kb/` on the address Vite prints. The server is set to 127.0.0.1 and Vite's default port is 5173, so it is usually `http://127.0.0.1:5173/__kb/`.

3. Pick a tab, type in the box, press Ask. The tabs:

| Tab | What it shows |
|---|---|
| Word | One word's card: meaning, paraphrase or atom mark, word classes, forms, relations. |
| Drop a word | What removing the word would cost: composites, sentences and pages to rewrite, Mandarin that can't be written, coverage lost. |
| Parse a sentence | Whether a sentence parses with the grammar patterns, and how. |
| Atoms | Which words are atoms (core words that others can't describe honestly), and which are not reviewed yet. |
| Candidates | The cheapest words to drop and the best roots to add, ranked. |
| Add a root | What one hanzi would bring as a root: the Mandarin words it completes, the composites it lets be spelled, its sound. |
| Relations | Synonyms, opposites and other relations the data states or implies. |
| Meaning | What the words say of the NSM primes, Aristotle's categories and grammar items. |
| Scoreboard | The language's numbers now, next to the stored history. |

Words in the results are links. Click one to ask about it.

## The command line

Run these from the project folder. Add `--json` to any command to get the data instead of the text.

```
node scripts/kb.js word <word>                      one word's card
node scripts/kb.js remove <word> [word ...]         what dropping the words would cost
node scripts/kb.js add <hanzi>                      what one root would bring
node scripts/kb.js parse <sentence> [--lesson N]    does it parse; with --lesson, only the patterns taught up to lesson N
node scripts/kb.js atoms [word]                     the atoms report, or one word's line
node scripts/kb.js candidates [remove|add] [--limit N]
node scripts/kb.js relations [kind] [--status proposed|accepted] [--limit N]
node scripts/kb.js meaning [says|atoms|grounding|<word>] [--limit N]
node scripts/kb.js scoreboard [--append] [--label "text"] [--no-atoms]
```

Quote a sentence or a word with a space in it. Example: `node scripts/kb.js word "chī fàn"`.

Other commands, less often needed:

```
node scripts/kb.js swaps [--k N]                    swaps of one word for another
node scripts/kb.js audit [--stdout]                 writes kb/reports/candidates-audit.md
node scripts/kb.js forms [--pos noun] [--limit N]   form report
node scripts/kb.js classes [--limit N]              word classes
node scripts/kb.js patterns [--limit N] [--seconds N]
node scripts/kb.js check-form "chī fàn" [--tts 吃饭] [--zh 吃饭 --py chīfàn]
node scripts/kb.js parse-report [--lessons N] [--all] [--stdout]
node scripts/kb.js parse-diff [--ref HEAD] [--all] [--limit N]
node scripts/kb.js move <lesson | lesson/module | pattern:id> <where>
node scripts/kb.js query "<rules>"                  your own rules, run against the facts
node scripts/kb.js engine                           which clingo is in use
```

Run `node scripts/kb.js` with no arguments to see the list.

## Reports

Reports are kept in `kb/reports/`:

- `candidates-audit.md` comes from `audit`.
- `lessons-1-4-parse.md` and `lessons-1-24-all-parse.md` come from `parse-report`. By default the command writes the file. `--stdout` prints it instead.

`kb/scoreboard.csv` holds the history that the Scoreboard tab shows.

## Changing the data

Don't edit the data by hand for a removal or a rename.

1. Preview with `remove` or `add`.
2. Apply the change from a refactor list: `npm run word` or `npm run refactor`. Do a dry run first.
3. Run the gates: `npm run check`.

See K20 in [KB_PLAN.md](../KB_PLAN.md).
