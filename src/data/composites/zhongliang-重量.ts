import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1220,
  phase: 3,
  zh: "重量",
  py: "zhòngliàng",
  en: "weight",
  ru: "вес",
  pos: "noun",
  hsd: ["{{word:duo1}} {{word:zhong4}}"],
  tts: ["多重"],
  literal: "how heavy",
  fit: "plain",
  topics: ["measures"],
  isA: ["measure-unit"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:ta1}} {{word:duo1}} {{word:zhong4}}.",
      hanzi: "我不知道它多重。",
      en: "I don't know its weight.",
      ru: "Я не знаю, сколько это весит.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zhe4}}-{{light:ge4}} {{word:duo1}} {{word:zhong4}} {{word:ma}}?",
      hanzi: "你知道这个多重吗？",
      en: "Do you know how much this weighs?",
      ru: "Ты знаешь, сколько это весит?",
    },
  ],
});
