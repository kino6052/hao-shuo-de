import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1134,
  phase: 3,
  zh: "消费",
  py: "xiāofèi",
  en: "consume, spend",
  ru: "потреблять, тратить",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  literal: "use (money)",
  fit: "plain",
  topics: ["spending-trading-and-returning"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "我用很多。",
      en: "I spend a lot.",
      ru: "Я трачу много.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "他用很少。",
      en: "He spends little.",
      ru: "Он тратит мало.",
    },
  ],
});
