import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 531,
  phase: 2,
  zh: "生气",
  py: "shēngqì",
  en: "get angry",
  ru: "сердиться",
  pos: "verb",
  hsd: ["{{word:sheng1}}-{{word:qi4}}", "{{word:xin1}}-{{word:li3}} {{word:you3}} {{word:huo3}}"],
  tts: ["生气", "心里有火"],
  literal: "birth air / there's fire in the heart",
  fit: "natural",
  note: "Real Mandarin: 生气.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:sheng1}}-{{word:qi4}}.",
      hanzi: "他很生气。",
      en: "He's very angry.",
      ru: "Он очень сердится.",
    },
    {
      pinyin: "{{Word:bie2}} {{word:sheng1}}-{{word:qi4}}!",
      hanzi: "别生气！",
      en: "Don't be angry!",
      ru: "Не сердись!",
    },
  ],
});
