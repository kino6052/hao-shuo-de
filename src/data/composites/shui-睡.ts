import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 196,
  phase: 1,
  zh: "睡",
  py: "shuì",
  en: "sleep",
  ru: "спать",
  pos: "verb",
  hsd: ["{{word:shui4jiao4}}"],
  tts: ["睡觉"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "孩子在睡觉。",
      en: "The child is sleeping.",
      ru: "Ребёнок спит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "我要睡觉了。",
      en: "I'm going to sleep.",
      ru: "Я иду спать.",
    },
  ],
});
