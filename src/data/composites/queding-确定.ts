import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1160,
  phase: 3,
  zh: "确定",
  py: "quèdìng",
  en: "certain; confirm",
  ru: "уверенный; установить",
  pos: "adjective",
  hsd: ["{{word:wo3}} {{word:zhi1dao4}} {{word:shi4}} {{word:dui4}}-{{word:de}}"],
  tts: ["我知道是对的"],
  literal: "I know it is right",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:shi4}} {{word:dui4}}-{{word:de}}.",
      hanzi: "我知道是对的。",
      en: "I am certain.",
      ru: "Я уверен.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:shi4}} {{word:dui4}}-{{word:de}}, {{word:bu4}} {{word:yao4}} {{word:wen4}}.",
      hanzi: "我知道是对的，不要问。",
      en: "I'm sure of it, don't ask.",
      ru: "Я уверен, не спрашивай.",
    },
  ],
});
