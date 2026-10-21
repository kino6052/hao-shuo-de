# Where the yardsticks come from

- `sentences.json`: sentences from [Tatoeba](https://tatoeba.org), licensed CC-BY 2.0 (France), taken from the Mandarin–English pair list at manythings.org/anki (`cmn-eng.zip`, 2026-02-13). Each line carries the Tatoeba id of its Mandarin sentence (`id`, tatoeba.org/sentences/show/<id>) and the author (`by`), which is the credit the license asks for. The English side is by other Tatoeba contributors.
- `hsk30-grammar.json`: the grammar table of the HSK 3.0 syllabus as copied by [ivankra/hsk30](https://github.com/ivankra/hsk30) (MIT). A community copy, not the official document. The code in that repository is MIT; its README says the CSV data is derived from two other MIT-licensed copies (elkmovie/hsk30 and shawkynasr/HSK-official-Query-System) of a publication of China's Ministry of Education (site notice: all rights reserved by the Ministry), and itself calls the copyright status of that upstream data unclear. Checked on 2026-10-21 (README read on GitHub): the file is for the dictionary's own checks and is not shown on the site; show nothing from it publicly until the status is clearer.
- `mandarin-frequency.json`: the Mandarin frequency list kept in the author's `misc/` folder (first 5,329 words).
- `basic-english.json`: the Basic English word base the author trimmed in `misc/`, with the author's Mandarin for each word.
- `english-top3000.json`: the 3000 most common English words from [wordfreq](https://github.com/rspeer/wordfreq) (`scripts/python/english_top.py`).

Five lists were **typed in by Claude on 2026-10-21 from memory**, not copied from any source, and are **not checked** (`typedIn: true`, `checked: false` in each file; `src/lib/kb/typed-lists.js` checks that they load and are whole). They name the works they follow, but the wording, examples and Mandarin values are Claude's, so they are not quotations and may be wrong in details. Treat each as a draft for the author to check.

- `ud-relations.json`: the 37 relations of [Universal Dependencies](https://universaldependencies.org/u/dep/) v2, with a plain meaning and a short Mandarin example for each.
- `wals-features.json`: 25 features of the [World Atlas of Language Structures](https://wals.info) (word order, articles, classifiers, negation, aspect) with the value Claude believes the atlas gives for Mandarin and a confidence for each.
- `nsm-sentences.json`: one short sentence for each of the 65 primes of Natural Semantic Metalanguage (Wierzbicka; Goddard), grouped in the families of `src/data/maps/primes.ts`. Not the NSM books' own canonical sentences.
- `toki-pona-rules.json`: 19 rules of Toki Pona (Sonja Lang, 2014) with an example each.
- `basic-english-rules.json`: 15 rules of Basic English (C. K. Ogden, 1930) with an example each.

Licenses: facts and short rules about a language are not copyrightable; the files quote nothing from the UD, WALS, NSM, Toki Pona or Ogden texts. Names of the works are given for attribution.
