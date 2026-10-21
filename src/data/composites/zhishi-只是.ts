import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 815,
  phase: 2,
  zh: "只是",
  py: "zhǐshì",
  en: "only, just",
  ru: "только",
  pos: "adverb",
  hsd: ["{{word:zhi3}}-{{word:shi4}}", "{{word:jiu4}}"],
  tts: ["只是", "就"],
  literal: "just",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["only-even-and-more"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi3}}-{{word:shi4}} {{word:kan4}}-{{light:kan4}}.",
      hanzi: "我只是看看。",
      en: "I'm just looking.",
      ru: "Я просто смотрю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi3}}-{{word:shi4}} {{word:hai2}}-{{word:zi}}.",
      hanzi: "他只是孩子。",
      en: "He is only a child.",
      ru: "Он всего лишь ребёнок.",
    },
  ],
});
