import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1139,
  phase: 3,
  zh: "特点",
  py: "tèdiǎn",
  en: "feature",
  ru: "особенность",
  pos: "noun",
  hsd: [
    "{{word:zhen1}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "X {{word:bi3}} Y {{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}",
  ],
  tts: ["真好的地方", "X比Y很不一样"],
  literal: "a really good place / X is very different from Y",
  fit: "plain",
  topics: ["describing-people"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ren2}} {{word:you3}} {{word:zhen1}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这个人有真好的地方。",
      en: "This person has a feature worth liking.",
      ru: "У этого человека есть своя черта.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他比我很不一样。",
      en: "He is very different from me.",
      ru: "Он очень не похож на меня.",
    },
  ],
});
