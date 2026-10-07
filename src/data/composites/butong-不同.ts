import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 113,
  phase: 1,
  zh: "不同",
  py: "bù tóng",
  en: "different",
  ru: "другой",
  pos: "adjective",
  hsd: ["{{word:bu4}}-{{word:tong2}}", "{{word:bu4}} {{word:yi1}}-{{word:yang4}}"],
  tts: ["不同", "不一样"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:liang3}}-{{light:ge4}} {{word:bu4}}-{{word:tong2}}.",
      hanzi: "这两个不同。",
      en: "These two are different.",
      ru: "Эти два разные.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}}-{{word:de}} {{word:jia1}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "我们的家不一样。",
      en: "Our homes are different.",
      ru: "Наши дома разные.",
    },
  ],
});
