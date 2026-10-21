import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 787,
  phase: 2,
  zh: "车站",
  py: "chēzhàn",
  en: "station",
  ru: "станция",
  pos: "noun",
  hsd: [
    "{{word:che1}}-{{word:zhan4}}",
    "{{word:deng3}}-{{word:che1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["车站", "等车的地方"],
  literal: "car stand / where you wait for the car",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["trains-and-stations"],
  isA: ["building"],
  examples: [
    {
      pinyin: "{{Word:che1}}-{{word:zhan4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "车站很大。",
      en: "The station is big.",
      ru: "Станция большая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:che1}}-{{word:zhan4}}.",
      hanzi: "我去车站。",
      en: "I'm going to the station.",
      ru: "Я иду на станцию.",
    },
  ],
});
