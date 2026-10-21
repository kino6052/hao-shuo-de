import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 924,
  phase: 2,
  zh: "厉害",
  py: "lìhai",
  en: "impressive; severe",
  ru: "крутой; сильный",
  pos: "adjective",
  hsd: ["{{word:hen3}} {{word:you3}} {{word:li4}}"],
  tts: ["很有力"],
  literal: "very powerful",
  fit: "plain",
  topics: ["speed-and-strength"],
  isA: ["speed-or-strength"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4}}.",
      hanzi: "他很有力。",
      en: "He is impressive.",
      ru: "Он впечатляет.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:ren2}} {{word:hen3}} {{word:you3}} {{word:li4}}.",
      hanzi: "那个人很有力。",
      en: "That person is impressive.",
      ru: "Тот человек впечатляет.",
    },
  ],
});
