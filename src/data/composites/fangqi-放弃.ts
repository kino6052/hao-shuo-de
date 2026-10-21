import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1346,
  phase: 3,
  zh: "放弃",
  py: "fàngqì",
  en: "give up",
  ru: "отказаться, бросить",
  pos: "verb",
  hsd: ["{{word:bu4}} {{word:yao4}} {{word:le}}"],
  tts: ["不要了"],
  literal: "not wanting it anymore",
  fit: "plain",
  topics: ["beginning-and-finishing"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:le}}.",
      hanzi: "我不要了。",
      en: "I give up.",
      ru: "Я сдаюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:ta1}} {{word:bu4}} {{word:yao4}} {{word:le}}.",
      hanzi: "他说他不要了。",
      en: "He says he gives up.",
      ru: "Он говорит, что сдаётся.",
    },
  ],
});
