import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1454,
  phase: 3,
  zh: "亲戚",
  py: "qīnqi",
  en: "relative",
  ru: "родственник",
  pos: "noun",
  hsd: ["{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}"],
  tts: ["家里的人"],
  literal: "a person of the family",
  fit: "natural",
  topics: ["relatives"],
  isA: ["relative"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是我家里的人。",
      en: "He is my relative.",
      ru: "Он мой родственник.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我有很多家里的人。",
      en: "I have many relatives.",
      ru: "У меня много родственников.",
    },
  ],
});
