import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 690,
  phase: 2,
  zh: "终于",
  py: "zhōngyú",
  en: "finally",
  ru: "наконец",
  pos: "adverb",
  hsd: ["{{word:zui4}}-{{word:hou4}}"],
  tts: ["最后"],
  literal: "last of all",
  fit: "natural",
  topics: ["before-and-after"],
  isA: ["time-order"],
  examples: [
    {
      pinyin: "{{Word:zui4}}-{{word:hou4}} {{word:ta1}} {{word:lai2}} {{word:le}}.",
      hanzi: "最后他来了。",
      en: "He finally came.",
      ru: "Он наконец пришёл.",
    },
    {
      pinyin: "{{Word:zui4}}-{{word:hou4}} {{word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:le}}.",
      hanzi: "最后我找到了。",
      en: "I finally found it.",
      ru: "Я наконец нашёл.",
    },
  ],
});
