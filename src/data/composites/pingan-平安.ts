import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1488,
  phase: 3,
  zh: "平安",
  py: "píng’ān",
  en: "safe and sound",
  ru: "благополучный",
  pos: "adjective",
  hsd: [
    "{{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}}",
  ],
  tts: ["坏的东西不会发生"],
  literal: "nothing bad will happen",
  fit: "plain",
  topics: ["police-and-safety"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}}.",
      hanzi: "这里坏的东西不会发生。",
      en: "We are safe and sound here.",
      ru: "Здесь мы в целости и сохранности.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jia1}} {{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}}.",
      hanzi: "你家坏的东西不会发生。",
      en: "Your home is safe and sound.",
      ru: "Твой дом в безопасности.",
    },
  ],
});
