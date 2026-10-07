import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 44,
  phase: 1,
  zh: "前",
  py: "qián",
  en: "front",
  ru: "перед",
  pos: "noun",
  hsd: ["{{word:qian2}}"],
  tts: ["前"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wo3}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "他在我前面。",
      en: "He's in front of me.",
      ru: "Он передо мной.",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:fan4}} {{word:qian2}}, {{word:wo3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "吃饭前，我喝水。",
      en: "Before eating, I drink water.",
      ru: "Перед едой я пью воду.",
    },
  ],
});
