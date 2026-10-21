import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 776,
  phase: 2,
  zh: "管",
  py: "guǎn",
  en: "manage",
  ru: "управлять",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:zuo4}} {{word:hao3}}", "{{word:ba3}} X {{word:zuo4}}-{{word:hao3}}"],
  tts: ["把X做好", "把X做好"],
  literal: "keep X good",
  fit: "plain",
  topics: ["working-life"],
  isA: ["working"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:jia1}} {{word:zuo4}}-{{word:hao3}}.",
      hanzi: "我把家做好。",
      en: "I take care of the house.",
      ru: "Я слежу за домом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:shu1}} {{word:zuo4}}-{{word:hao3}}.",
      hanzi: "他把书做好。",
      en: "He takes care of the books.",
      ru: "Он следит за книгами.",
    },
  ],
});
