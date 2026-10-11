import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 515,
  phase: 2,
  zh: "好多",
  py: "hǎoduō",
  en: "many, a lot",
  ru: "много",
  pos: "number",
  hsd: ["{{word:hao3}}-{{word:duo1}}"],
  tts: ["好多"],
  literal: "good-many",
  fit: "natural",
  transparent: true,
  note: "Real Mandarin: 好多.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:hao3}}-{{word:duo1}} {{word:ren2}}.",
      hanzi: "这里有好多人。",
      en: "There are lots of people here.",
      ru: "Здесь много людей.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hao3}}-{{word:duo1}} {{word:shu1}}.",
      hanzi: "我有好多书。",
      en: "I have lots of books.",
      ru: "У меня много книг.",
    },
  ],
});
