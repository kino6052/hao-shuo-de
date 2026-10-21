import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 871,
  phase: 2,
  zh: "男生",
  py: "nánshēng",
  en: "boy (student)",
  ru: "мальчик, студент",
  pos: "noun",
  hsd: ["{{word:nan2}}-{{word:sheng1}}", "{{word:xue2}}-{{word:de}} {{word:nan2}}-{{word:ren2}}"],
  tts: ["男生", "学的男人"],
  literal: "a man who learns",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["classroom"],
  isA: ["person-by-age-or-sex"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:nan2}}-{{word:sheng1}}.",
      hanzi: "他是男生。",
      en: "He is a boy student.",
      ru: "Он школьник.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:nan2}}-{{word:sheng1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那个男生很好。",
      en: "That boy is nice.",
      ru: "Тот мальчик хороший.",
    },
  ],
});
