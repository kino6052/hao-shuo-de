import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 145,
  phase: 1,
  zh: "其他",
  py: "qítā",
  en: "other",
  ru: "другой",
  pos: "pronoun",
  hsd: ["{{word:bie2}}-{{word:de}}"],
  tts: ["别的"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hai2}} {{word:yao4}} {{word:bie2}}-{{word:de}} {{word:ma}}?",
      hanzi: "你还要别的吗？",
      en: "Do you want anything else?",
      ru: "Тебе нужно что-нибудь ещё?",
    },
    {
      pinyin: "{{Word:bie2}}-{{word:de}} {{word:ren2}} {{word:dou1}} {{word:zou3}} {{word:le}}.",
      hanzi: "别的人都走了。",
      en: "Everyone else has left.",
      ru: "Все остальные ушли.",
    },
  ],
});
