import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 482,
  phase: 1,
  zh: "那里",
  py: "nàlǐ",
  en: "there",
  ru: "там",
  pos: "pronoun",
  hsd: ["{{word:na4}}-{{word:li3}}"],
  tts: ["那里"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "他在那里。",
      en: "He's over there.",
      ru: "Он там.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:li3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "那里很冷。",
      en: "It's cold there.",
      ru: "Там холодно.",
    },
  ],
});
