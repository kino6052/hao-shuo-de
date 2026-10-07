import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 231,
  phase: 1,
  zh: "好吃",
  py: "hǎochī",
  en: "tasty",
  ru: "вкусный",
  pos: "adjective",
  hsd: ["{{word:hao3}} {{word:chi1}}"],
  tts: ["好吃"],
  literal: "good to eat",
  fit: "natural",
  note: "Or: wèi-dào hěn hǎo, \"it tastes very good\".",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:hao3}} {{word:chi1}}.",
      hanzi: "这个很好吃。",
      en: "This is tasty.",
      ru: "Это вкусно.",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:zuo4}}-{{word:de}} {{word:fan4}} {{word:zui4}} {{word:hao3}} {{word:chi1}}.",
      hanzi: "妈妈做的饭最好吃。",
      en: "Mom's cooking is the tastiest.",
      ru: "Мамина еда самая вкусная.",
    },
  ],
});
