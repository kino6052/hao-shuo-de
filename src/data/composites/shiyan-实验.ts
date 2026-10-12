import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1073,
  phase: 3,
  zh: "实验",
  py: "shíyàn",
  en: "experiment",
  ru: "эксперимент",
  pos: "verb",
  hsd: [
    "{{word:zuo4}} {{word:yi1}}-{{word:xia4}}, {{word:kan4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}} {{word:shen2me}}",
  ],
  tts: ["做一下，看会发生什么"],
  literal: "do it and see what happens",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:yi1}}-{{word:xia4}}, {{word:kan4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}} {{word:shen2me}}.",
      hanzi: "我做一下，看会发生什么。",
      en: "I try it to see what happens.",
      ru: "Я пробую, чтобы посмотреть, что будет.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:yi1}}-{{word:xia4}}, {{word:kan4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}} {{word:shen2me}}.",
      hanzi: "他做一下，看会发生什么。",
      en: "He runs an experiment.",
      ru: "Он ставит опыт.",
    },
  ],
});
