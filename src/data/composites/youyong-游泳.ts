import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 526,
  phase: 2,
  zh: "游泳",
  py: "yóuyǒng",
  en: "swim",
  ru: "плавать",
  pos: "verb",
  hsd: [
    "{{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:wan2r}}",
    "{{word:guo4}} {{word:shui3}} {{word:qu4}} X {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["在水里玩儿", "过水去X地方"],
  literal: "play in the water / cross the water to a place",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:wan2r}}.",
      hanzi: "他在水里玩儿。",
      en: "He's swimming.",
      ru: "Он плавает.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:wan2r}}.",
      hanzi: "我想在水里玩儿。",
      en: "I want to swim.",
      ru: "Я хочу плавать.",
    },
  ],
});
