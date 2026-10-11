import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 844,
  phase: 2,
  zh: "怎样",
  py: "zěnyàng",
  en: "how",
  ru: "как",
  pos: "pronoun",
  hsd: ["{{word:zen3me}}"],
  tts: ["怎么"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zen3me}} {{word:zuo4}}?",
      hanzi: "你怎么做？",
      en: "How do you do it?",
      ru: "Как ты это делаешь?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zen3me}} {{word:zuo4}}?",
      hanzi: "这个怎么做？",
      en: "How is this done?",
      ru: "Как это делается?",
    },
  ],
});
