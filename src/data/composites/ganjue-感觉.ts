import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 309,
  phase: 1,
  zh: "感觉",
  py: "gǎnjué",
  en: "feel; feeling",
  ru: "чувствовать; чувство",
  pos: "noun",
  hsd: ["{{word:jue2}}-{{light:de2}}"],
  tts: ["觉得"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我觉得很好。",
      en: "I feel fine.",
      ru: "Я чувствую себя хорошо.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:re4}}.",
      hanzi: "他觉得很热。",
      en: "He feels hot.",
      ru: "Ему жарко.",
    },
  ],
});
