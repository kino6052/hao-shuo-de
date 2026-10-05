// The composite dictionary's about text, phases and fits (entries are the other files here).
export default {
  about: "What to say in Hao-shuo-de for a word it does not have: the source word (Chinese, with English and Russian glosses) and the Hao-shuo-de way to say it. Built in phases by word frequency (a few later-phase words are already in, like the arithmetic words of D42); see BOOK_PLAN.md D40.",
  phases: [
    {
      phase: 1,
      words: 500,
      source: "misc/translation/src/dictionaries/dictionary.raw.csv",
      ranking: "speaking commonality index, then writing commonality index",
    },
    {
      phase: 2,
      words: 500,
      source: "misc/translation/src/dictionaries/dictionary.raw.csv",
      ranking: "speaking commonality index, then writing commonality index",
    },
    {
      phase: 3,
      words: 500,
      source: "misc/translation/src/dictionaries/dictionary.raw.csv",
      ranking: "speaking commonality index, then writing commonality index",
    },
  ],
  fits: {
    word: "A Hao-shuo-de word (sometimes written with other hanzi).",
    natural: "A combination that Mandarin also uses.",
    plain: "Correct and understood, but not the usual way to say it.",
    gap: "No workable way to say it yet: a candidate to add to the dictionary.",
    skip: "Not needed: Hao-shuo-de says it another way, or leaves it out.",
    name: "A name, written in quotes.",
  },
};
