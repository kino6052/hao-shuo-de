import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 581,
  phase: 2,
  zh: "专家",
  py: "zhuānjiā",
  en: "expert",
  ru: "эксперт",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} X {{word:hen3}} {{word:chang2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}-{{word:de}} {{word:ren2}}",
    "{{word:zhi1dao4}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["做X很长的时间的人", "知道很多的人"],
  literal: "a person who has done X for a long time / a person who knows a lot",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zhi1dao4}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是知道很多的人。",
      en: "He is an expert.",
      ru: "Он эксперт.",
    },
    {
      pinyin: "{{Word:zhi1dao4}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} {{word:bang1}} {{word:wo3}}.",
      hanzi: "知道很多的人帮我。",
      en: "An expert helps me.",
      ru: "Эксперт мне помогает.",
    },
  ],
});
