import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 912,
  phase: 2,
  zh: "面前",
  py: "miànqián",
  en: "in front of",
  ru: "перед",
  pos: "noun",
  hsd: ["{{word:mian4}}-{{word:qian2}}", "{{word:qian2}}-{{word:mian4}}"],
  tts: ["面前", "前面"],
  literal: "face-front",
  fit: "natural",
  kinds: ["built", "built"],
  note: "Lesson {{lesson:where-it-is}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zhan4}} {{word:zai4}} {{word:wo3}} {{word:mian4}}-{{word:qian2}}.",
      hanzi: "他站在我面前。",
      en: "He is standing in front of me.",
      ru: "Он стоит передо мной.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:wo3}} {{word:mian4}}-{{word:qian2}}.",
      hanzi: "你在我面前。",
      en: "You are in front of me.",
      ru: "Ты передо мной.",
    },
  ],
});
