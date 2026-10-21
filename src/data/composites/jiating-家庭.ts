import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 639,
  phase: 2,
  zh: "家庭",
  py: "jiātíng",
  en: "family",
  ru: "семья",
  pos: "noun",
  hsd: ["{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}"],
  tts: ["家里的人"],
  literal: "the people at home",
  fit: "word",
  topics: ["parents-and-children"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:wo3}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爱我家里的人。",
      en: "I love my family.",
      ru: "Я люблю свою семью.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他家里的人很多。",
      en: "His family is large.",
      ru: "У него большая семья.",
    },
  ],
});
