import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 653,
  phase: 2,
  zh: "成为",
  py: "chéngwéi",
  en: "become",
  ru: "стать",
  pos: "verb",
  hsd: ["{{word:bian4}}"],
  tts: ["变"],
  fit: "word",
  topics: ["becoming-and-turning-into"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bian4}} {{word:da4}} {{word:le}}.",
      hanzi: "他变大了。",
      en: "He has grown up.",
      ru: "Он вырос.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bian4}} {{word:hao3}} {{word:le}}.",
      hanzi: "你变好了。",
      en: "You've become better.",
      ru: "Ты стал лучше.",
    },
  ],
});
