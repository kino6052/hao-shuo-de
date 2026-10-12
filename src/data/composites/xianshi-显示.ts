import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1124,
  phase: 3,
  zh: "显示",
  py: "xiǎnshì",
  en: "show, display",
  ru: "показывать",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:ren2}} {{word:kan4}}"],
  tts: ["给人看"],
  literal: "give people a look",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:ren2}} {{word:kan4}}.",
      hanzi: "他给人看。",
      en: "He shows it.",
      ru: "Он показывает это.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ren2}} {{word:kan4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我给人看这个。",
      en: "I display this.",
      ru: "Я показываю это.",
    },
  ],
});
