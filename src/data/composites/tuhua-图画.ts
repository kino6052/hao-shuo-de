import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1298,
  phase: 3,
  zh: "图画",
  py: "túhuà",
  en: "drawing",
  ru: "рисунок",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["写的看的东西"],
  literal: "a drawn thing to look at",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "他写的看的东西很好看。",
      en: "His drawing is beautiful.",
      ru: "Его рисунок красив.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jia1}} {{word:you3}} {{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这个家有写的看的东西。",
      en: "This home has drawings.",
      ru: "В этом доме есть рисунки.",
    },
  ],
});
