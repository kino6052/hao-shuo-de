import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 277,
  phase: 1,
  zh: "影响",
  py: "yǐngxiǎng",
  en: "affect",
  ru: "влиять",
  pos: "verb",
  hsd: [
    "X {{word:ba3}} Y {{word:bian4}}",
    "X {{word:dui4}} Y {{word:hao3}}",
    "X {{word:dui4}} Y {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["X把Y变", "X对Y好", "X对Y不好"],
  literal: "X changes Y / X is good for Y / X is bad for Y",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:dui4}} {{word:shen1ti3}} {{word:hao3}}.",
      hanzi: "水对身体好。",
      en: "Water is good for the body.",
      ru: "Вода полезна для тела.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:ba3}} {{word:ta1}} {{word:bian4}} {{word:le}}.",
      hanzi: "这个东西把他变了。",
      en: "This changed him.",
      ru: "Это изменило его.",
    },
  ],
});
