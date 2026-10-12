import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1018,
  phase: 3,
  zh: "人物",
  py: "rénwù",
  en: "person, character",
  ru: "личность, персонаж",
  pos: "noun",
  hsd: ["{{word:ren2}}-{{word:wu4}}", "{{word:ren2}}"],
  tts: ["人物", "人"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:hen3}} {{word:da4}}-{{word:de}} {{word:ren2}}-{{word:wu4}}.",
      hanzi: "他是很大的人物。",
      en: "He is an important figure.",
      ru: "Он важная фигура.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ren2}}-{{word:wu4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个人物很好。",
      en: "This character is good.",
      ru: "Этот персонаж хороший.",
    },
  ],
});
