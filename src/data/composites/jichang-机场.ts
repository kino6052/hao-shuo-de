import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 766,
  phase: 2,
  zh: "机场",
  py: "jīchǎng",
  en: "airport",
  ru: "аэропорт",
  pos: "noun",
  hsd: ["{{word:fei1}}-{{word:ji1}} {{word:zhan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["飞机站的地方"],
  literal: "the place where planes stand",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:fei1}}-{{word:ji1}} {{word:zhan4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "飞机站的地方很大。",
      en: "The airport is big.",
      ru: "Аэропорт большой.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:fei1}}-{{word:ji1}} {{word:zhan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去飞机站的地方。",
      en: "I'm going to the airport.",
      ru: "Я еду в аэропорт.",
    },
  ],
});
