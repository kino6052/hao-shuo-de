import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1310,
  phase: 3,
  zh: "安全",
  py: "ānquán",
  en: "safe",
  ru: "безопасный",
  pos: "adjective",
  hsd: [
    "{{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}}",
  ],
  tts: ["坏的东西不会发生"],
  literal: "nothing bad will happen",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:jia1}} {{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}}.",
      hanzi: "他家坏的东西不会发生。",
      en: "His home is safe.",
      ru: "В его доме безопасно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}}.",
      hanzi: "这里坏的东西不会发生。",
      en: "It is safe here.",
      ru: "Здесь безопасно.",
    },
  ],
});
