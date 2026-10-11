import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 741,
  phase: 2,
  zh: "农民",
  py: "nóngmín",
  en: "farmer",
  ru: "крестьянин",
  pos: "noun",
  hsd: ["{{word:yong4}} {{word:di4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}"],
  tts: ["用地工作的人"],
  literal: "a person who works with the ground",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:yong4}} {{word:di4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是用地工作的人。",
      en: "He is a farmer.",
      ru: "Он фермер.",
    },
    {
      pinyin: "{{Word:yong4}} {{word:di4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "用地工作的人很好。",
      en: "The farmer is kind.",
      ru: "Фермер добрый.",
    },
  ],
});
