import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 130,
  phase: 1,
  zh: "一样",
  py: "yíyàng",
  en: "same",
  ru: "одинаковый",
  pos: "adjective",
  hsd: ["{{word:yi1}}-{{word:yang4}}"],
  tts: ["一样"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:yang4}} {{word:gao1}}.",
      hanzi: "我们一样高。",
      en: "We're the same height.",
      ru: "Мы одного роста.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:he2}} {{word:na4}}-{{light:ge4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这个和那个一样。",
      en: "This one is the same as that one.",
      ru: "Этот такой же, как тот.",
    },
  ],
});
