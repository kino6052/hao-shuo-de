import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 654,
  phase: 2,
  zh: "或者",
  py: "huòzhě",
  en: "or",
  ru: "или",
  pos: "conjunction",
  hsd: ["{{word:hai2}}-{{word:shi4}}"],
  tts: ["还是"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:he1}} {{word:shui3}} {{word:hai2}}-{{word:shi4}} {{word:chi1}} {{word:fan4}}?",
      hanzi: "你喝水还是吃饭？",
      en: "Will you drink water or eat?",
      ru: "Ты будешь пить воду или есть?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:qu4}} {{word:hai2}}-{{word:shi4}} {{word:wo3}} {{word:qu4}}?",
      hanzi: "你去还是我去？",
      en: "Will you go, or shall I?",
      ru: "Ты пойдёшь или я?",
    },
  ],
});
