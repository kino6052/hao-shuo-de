import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 489,
  phase: 1,
  zh: "餐厅",
  py: "cāntīng",
  en: "restaurant",
  ru: "ресторан",
  pos: "noun",
  hsd: ["{{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["吃饭的地方"],
  literal: "the place to eat",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我们去吃饭的地方。",
      en: "We're going to a restaurant.",
      ru: "Мы идём в ресторан.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个吃饭的地方很好。",
      en: "This restaurant is good.",
      ru: "Этот ресторан хороший.",
    },
  ],
});
