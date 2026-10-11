import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 713,
  phase: 2,
  zh: "进入",
  py: "jìnrù",
  en: "enter",
  ru: "входить",
  pos: "verb",
  hsd: ["{{word:jin4}}"],
  tts: ["进"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:jin4}} {{word:jia1}}.",
      hanzi: "他进家。",
      en: "He goes into the house.",
      ru: "Он входит в дом.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jin4}} {{word:na4}}-{{light:ge4}} {{word:jia1}}.",
      hanzi: "我进那个家。",
      en: "I go into that house.",
      ru: "Я вхожу в тот дом.",
    },
  ],
});
