import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1024,
  phase: 3,
  zh: "优惠",
  py: "yōuhuì",
  en: "discounted, favorable",
  ru: "льготный, со скидкой",
  pos: "adjective",
  hsd: ["{{word:yao4}}-{{word:de}} {{word:jin1}} {{word:shao3}} {{word:yi1}}-{{word:dian3}}"],
  tts: ["要的金少一点"],
  literal: "it costs a little less",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}}-{{word:de}} {{word:jin1}} {{word:shao3}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "这个要的金少一点。",
      en: "This one is discounted.",
      ru: "Это со скидкой.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}}-{{word:de}} {{word:jin1}} {{word:shao3}} {{word:yi1}}-{{word:dian3}} {{word:ma}}?",
      hanzi: "你要的金少一点吗？",
      en: "Is yours cheaper?",
      ru: "У тебя дешевле?",
    },
  ],
});
