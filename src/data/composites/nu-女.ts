import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 167,
  phase: 1,
  zh: "女",
  py: "nǚ",
  en: "female",
  ru: "женский",
  pos: "adjective",
  hsd: ["{{word:nv3}}", "{{word:nv3}}-{{word:ren2}}"],
  tts: ["女", "女人"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:nv3}} {{word:hai2}}-{{word:zi}}.",
      hanzi: "她有一个女孩子。",
      en: "She has a daughter.",
      ru: "У неё есть дочь.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:nv3}}-{{word:ren2}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "那个女人是谁？",
      en: "Who is that woman?",
      ru: "Кто та женщина?",
    },
  ],
});
