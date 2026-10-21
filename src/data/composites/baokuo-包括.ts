import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1047,
  phase: 3,
  zh: "包括",
  py: "bāokuò",
  en: "include",
  ru: "включать",
  pos: "verb",
  hsd: ["X {{word:li3}}-{{word:mian4}} {{word:you3}} Y", "X {{word:ye3}} {{word:you3}} Y"],
  tts: ["X里面有Y", "X也有Y"],
  literal: "X has Y inside / X also has Y",
  fit: "plain",
  topics: ["totals-and-parts"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:li3}}-{{word:mian4}} {{word:you3}} {{word:ta1}}.",
      hanzi: "我们里面有他。",
      en: "We include him.",
      ru: "Мы включаем его.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:ye3}} {{word:you3}} {{word:shu1}}.",
      hanzi: "家也有书。",
      en: "The home also includes books.",
      ru: "В доме есть и книги.",
    },
  ],
});
