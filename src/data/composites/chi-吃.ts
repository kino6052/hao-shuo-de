import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 21,
  phase: 1,
  zh: "吃",
  py: "chī",
  en: "eat",
  ru: "есть",
  pos: "verb",
  hsd: ["{{word:chi1}}"],
  tts: ["吃"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:chi1}}-{{word:fan4}} {{word:le}} {{word:ma}}?",
      hanzi: "你吃饭了吗？",
      en: "Have you eaten?",
      ru: "Ты поел?",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:ai4}} {{word:chi1}} {{word:tian2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "孩子们爱吃甜的东西。",
      en: "Children love eating sweet things.",
      ru: "Дети любят есть сладкое.",
    },
  ],
});
