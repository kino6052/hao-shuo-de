import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 155,
  phase: 1,
  zh: "哪个",
  py: "nǎge",
  en: "which one",
  ru: "который",
  pos: "pronoun",
  hsd: ["{{word:na3}}-{{light:ge4}}", "{{word:shen2me}}"],
  tts: ["哪个", "什么"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:ai4}} {{word:na3}}-{{light:ge4}} {{word:yan2se4}}?",
      hanzi: "你爱哪个颜色？",
      en: "Which color do you love?",
      ru: "Какой цвет ты любишь?",
    },
    {
      pinyin: "{{Word:na3}}-{{light:ge4}} {{word:ren2}} {{word:shi4}} {{word:ni3}} {{word:ba4ba}}?",
      hanzi: "哪个人是你爸爸？",
      en: "Which one is your dad?",
      ru: "Который из них твой папа?",
    },
  ],
});
