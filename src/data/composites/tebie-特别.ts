import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 322,
  phase: 1,
  zh: "特别",
  py: "tèbié",
  en: "special",
  ru: "особенный",
  pos: "adjective",
  hsd: [
    "{{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}, {{word:ye3}} {{word:hen3}} {{word:hao3}}",
  ],
  tts: ["很不一样，也很好"],
  literal: "very different, and good too",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}, {{word:ye3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个地方很不一样，也很好。",
      en: "This place is special.",
      ru: "Это место особенное.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}, {{word:ye3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "她的声音很不一样，也很好。",
      en: "Her voice is special.",
      ru: "У неё особенный голос.",
    },
  ],
});
