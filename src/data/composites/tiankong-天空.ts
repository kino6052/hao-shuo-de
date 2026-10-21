import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 748,
  phase: 2,
  zh: "天空",
  py: "tiānkōng",
  en: "sky",
  ru: "небо",
  pos: "noun",
  hsd: ["{{word:tian1}}-{{word:kong1}}", "{{word:tian1}}-{{word:shang4}}"],
  tts: ["天空", "天上"],
  literal: "up in the sky",
  fit: "natural",
  transparent: true,
  topics: ["sky-and-space"],
  isA: ["sky-body"],
  examples: [
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:you3}} {{word:ri4}} {{word:he2}} {{word:yue4}}.",
      hanzi: "天上有日和月。",
      en: "There is a sun and a moon in the sky.",
      ru: "В небе солнце и луна.",
    },
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:mei2}} {{word:you3}} {{word:shui3}}.",
      hanzi: "天上没有水。",
      en: "There is no water in the sky.",
      ru: "В небе нет воды.",
    },
  ],
});
