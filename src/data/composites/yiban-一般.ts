import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 727,
  phase: 2,
  zh: "一般",
  py: "yìbān",
  en: "ordinary",
  ru: "обычный",
  pos: "adjective",
  hsd: ["{{word:he2}} {{word:bie2}}-{{word:de}} {{word:yi1}}-{{word:yang4}}"],
  tts: ["和别的一样"],
  literal: "like the others",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:he2}} {{word:bie2}}-{{word:de}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他和别的一样。",
      en: "He is like the others.",
      ru: "Он такой же, как другие.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:he2}} {{word:bie2}}-{{word:de}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这个和别的一样。",
      en: "This is ordinary, like the others.",
      ru: "Это обычное, как и другие.",
    },
  ],
});
