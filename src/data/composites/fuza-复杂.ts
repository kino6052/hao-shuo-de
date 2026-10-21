import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1070,
  phase: 3,
  zh: "复杂",
  py: "fùzá",
  en: "complicated",
  ru: "сложный",
  pos: "adjective",
  hsd: ["{{word:bu4}}-{{light:fen1}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}"],
  tts: ["部分很多的"],
  literal: "with many parts",
  fit: "plain",
  topics: ["easy-hard-right-wrong"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:bu4}}-{{light:fen1}}-{{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是部分很多的东西。",
      en: "This is complicated.",
      ru: "Это сложно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:xiang3}} {{word:yao4}} {{word:bu4}}-{{light:fen1}}-{{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我不想要部分很多的东西。",
      en: "I don't want anything complicated.",
      ru: "Я не хочу ничего сложного.",
    },
  ],
});
