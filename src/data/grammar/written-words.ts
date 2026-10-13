import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("written-words", {
  meaning: {
    eng: "How a word shows in writing: the syllables of one word stay together (dòng-wù), a hyphen glues a small word to another so they work as one word (zhè-ge, hěn-dà-de), and quotes mark a name or a sound (\"wāng-wāng\").",
    rus: "Как слово выглядит на письме: слоги одного слова стоят вместе (dòng-wù), дефис приклеивает маленькое слово к другому, и вместе они работают как одно слово (zhè-ge, hěn-dà-de), а кавычки отмечают имя или звук (\"wāng-wāng\").",
  },
  covers: [],
  template: {
    hsd: "word-word / \"name or sound\"",
    eng: "a hyphen joins words into one / quotes mark a name or a sound",
  },
  rules: [
    // Hyphen chains are read by the lexicon (lexicon.js), not by a rule; this one is the quotes half.
    { lhs: "NP", hsd: "@quoted", eng: "a name or a sound in quotes stands as a noun" },
  ],
  taught: "sounds-and-symbols/no-word-boundaries",
  examples: [
    ["Tā jiào \"wāng-wāng\".", "It barks \"woof-woof\"."],
    ["Zhè-ge shì \"Beijing\".", "This is \"Beijing\"."],
  ],
});
