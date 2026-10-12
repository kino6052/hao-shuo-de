import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1137,
  phase: 3,
  zh: "物品",
  py: "wùpǐn",
  en: "article, item",
  ru: "вещь, предмет",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{light:xi1}}"],
  tts: ["东西"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是我的东西。",
      en: "These are my belongings.",
      ru: "Это мои вещи.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那个东西很好。",
      en: "That item is good.",
      ru: "Та вещь хорошая.",
    },
  ],
});
