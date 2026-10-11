import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 553,
  phase: 2,
  zh: "鼻子",
  py: "bízi",
  en: "nose",
  ru: "нос",
  pos: "noun",
  hsd: ["{{word:bi2zi}}"],
  tts: ["鼻子"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的鼻子很小。",
      en: "My nose is small.",
      ru: "У меня маленький нос.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:bi2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "他的鼻子是红色的。",
      en: "His nose is red.",
      ru: "У него красный нос.",
    },
  ],
});
