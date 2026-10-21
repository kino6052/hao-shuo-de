import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1248,
  phase: 3,
  zh: "体力",
  py: "tǐlì",
  en: "physical strength",
  ru: "физическая сила",
  pos: "noun",
  hsd: ["{{word:shen1ti3}}-{{word:de}} {{word:li4}}"],
  tts: ["身体的力"],
  literal: "the body's strength",
  fit: "plain",
  topics: ["speed-and-strength"],
  isA: ["speed-or-strength"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen1ti3}}-{{word:de}} {{word:li4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我身体的力很好。",
      en: "My physical strength is good.",
      ru: "У меня хорошая выносливость.",
    },
    {
      pinyin: "{{Word:lao3}} {{word:ren2}} {{word:shen1ti3}}-{{word:de}} {{word:li4}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "老人身体的力很少。",
      en: "Old people have little strength.",
      ru: "У стариков мало сил.",
    },
  ],
});
