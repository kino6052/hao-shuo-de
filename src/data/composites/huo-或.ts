import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 404,
  phase: 1,
  zh: "或",
  py: "huò",
  en: "or",
  ru: "или",
  pos: "conjunction",
  hsd: ["{{word:hai2}}-{{word:shi4}}"],
  tts: ["还是"],
  literal: "or",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:jin1}}-{{word:tian1}} {{word:hai2}}-{{word:shi4}} {{word:ming2}}-{{word:tian1}} {{word:lai2}}?",
      hanzi: "你今天还是明天来？",
      en: "Are you coming today or tomorrow?",
      ru: "Ты придёшь сегодня или завтра?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:he1}} {{word:shui3}} {{word:hai2}}-{{word:shi4}} {{word:chi1}} {{word:shui3}}-{{word:guo3}}?",
      hanzi: "你喝水还是吃水果？",
      en: "Will you drink water or eat fruit?",
      ru: "Ты будешь пить воду или есть фрукты?",
    },
  ],
});
