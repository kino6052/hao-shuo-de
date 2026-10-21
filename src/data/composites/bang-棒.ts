import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 945,
  phase: 2,
  zh: "棒",
  py: "bàng",
  en: "great; stick",
  ru: "отлично; палка",
  pos: "adjective",
  hsd: ["{{word:zhen1}} {{word:hao3}}", "{{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["真好", "长的东西"],
  literal: "really good / stick",
  fit: "natural",
  topics: ["good-bad-and-okay"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "这个真好。",
      en: "This is great.",
      ru: "Это здорово.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "你真好。",
      en: "You are great.",
      ru: "Ты молодец.",
    },
  ],
});
