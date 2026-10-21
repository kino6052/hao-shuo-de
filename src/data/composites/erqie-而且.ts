import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 695,
  phase: 2,
  zh: "而且",
  py: "érqiě",
  en: "moreover",
  ru: "к тому же",
  pos: "conjunction",
  hsd: ["{{word:ye3}}"],
  tts: ["也"],
  literal: "also",
  fit: "natural",
  topics: ["adverbs"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:hao3}}, {{word:ye3}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "他很好，也很高。",
      en: "He's nice, and tall too.",
      ru: "Он хороший, и к тому же высокий.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:hen3}} {{word:da4}}, {{word:ye3}} {{word:hen3}} {{word:gan1jing4}}.",
      hanzi: "这里很大，也很干净。",
      en: "It's big here, and clean too.",
      ru: "Здесь просторно, и к тому же чисто.",
    },
  ],
});
