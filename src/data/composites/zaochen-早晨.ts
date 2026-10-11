import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 854,
  phase: 2,
  zh: "早晨",
  py: "zǎochen",
  en: "morning",
  ru: "утро",
  pos: "noun",
  hsd: ["{{word:zao3}}-{{light:shang4}}"],
  tts: ["早上"],
  fit: "natural",
  transparent: true,
  note: "Same as 早上.",
  examples: [
    {
      pinyin: "{{Word:zao3}}-{{word:shang4}} {{word:wo3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "早上我喝水。",
      en: "In the morning I drink water.",
      ru: "Утром я пью воду.",
    },
    {
      pinyin: "{{Word:zao3}}-{{word:shang4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "早上很好。",
      en: "The morning is nice.",
      ru: "Утро хорошее.",
    },
  ],
});
