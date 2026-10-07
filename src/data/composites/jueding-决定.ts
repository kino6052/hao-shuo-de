import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 266,
  phase: 1,
  zh: "决定",
  py: "juédìng",
  en: "decide",
  ru: "решать",
  pos: "verb",
  hsd: [
    "{{word:jue2}}-{{word:ding4}}",
    "{{word:lai2}} {{word:zhi1dao4}} {{word:yao4}} {{word:zuo4}} {{word:shen2me}} {{word:le}}",
  ],
  tts: ["决定", "来知道要做什么了"],
  literal: "come to know what to do",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:ding4}} {{word:qu4}} \"Zhōngguó\".",
      hanzi: "我决定去中国。",
      en: "I've decided to go to China.",
      ru: "Я решил поехать в Китай.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jue2}}-{{word:ding4}} {{word:le}} {{word:ma}}?",
      hanzi: "你决定了吗？",
      en: "Have you decided?",
      ru: "Ты решил?",
    },
  ],
});
