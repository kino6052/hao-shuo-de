import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 540,
  phase: 2,
  zh: "裤子",
  py: "kùzi",
  en: "pants",
  ru: "брюки",
  pos: "noun",
  hsd: ["{{word:jiao3}}-{{word:de}} {{word:yi1fu}}"],
  tts: ["脚的衣服"],
  literal: "leg clothes",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "我的脚的衣服是黑色的。",
      en: "My pants are black.",
      ru: "Мои брюки чёрные.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jiao3}}-{{word:de}} {{word:yi1fu}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "这个脚的衣服很长。",
      en: "These pants are long.",
      ru: "Эти брюки длинные.",
    },
  ],
});
