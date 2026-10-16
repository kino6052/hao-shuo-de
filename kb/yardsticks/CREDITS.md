# Where the yardsticks come from

- `sentences.json`: sentences from [Tatoeba](https://tatoeba.org), licensed CC-BY 2.0 (France), taken from the Mandarin–English pair list at manythings.org/anki (`cmn-eng.zip`, 2026-02-13). Each line carries the Tatoeba id of its Mandarin sentence (`id`, tatoeba.org/sentences/show/<id>) and the author (`by`), which is the credit the license asks for. The English side is by other Tatoeba contributors.
- `hsk30-grammar.json`: the grammar table of the HSK 3.0 syllabus as copied by [ivankra/hsk30](https://github.com/ivankra/hsk30) (MIT). A community copy, not the official document.
- `mandarin-frequency.json`: the Mandarin frequency list kept in the author's `misc/` folder (first 5,329 words).
- `basic-english.json`: the Basic English word base the author trimmed in `misc/`, with the author's Mandarin for each word.
- `english-top3000.json`: the 3000 most common English words from [wordfreq](https://github.com/rspeer/wordfreq) (`scripts/python/english_top.py`).
