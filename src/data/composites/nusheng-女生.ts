import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 831,
  phase: 2,
  zh: "女生",
  py: "nǚshēng",
  en: "girl (student)",
  ru: "девочка, студентка",
  pos: "noun",
  hsd: ["{{word:nv3}}-{{word:sheng1}}", "{{word:xue2}}-{{word:de}} {{word:nv3}}-{{word:ren2}}"],
  tts: ["女生", "学的女人"],
  literal: "a woman who learns",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["classroom"],
  isA: ["person-by-age-or-sex"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:nv3}}-{{word:sheng1}}.",
      hanzi: "她是女生。",
      en: "She is a girl student.",
      ru: "Она школьница.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:nv3}}-{{word:sheng1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那个女生很好。",
      en: "That girl is nice.",
      ru: "Та девочка хорошая.",
    },
  ],
});
