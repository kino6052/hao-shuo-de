import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1340,
  phase: 3,
  zh: "拒绝",
  py: "jùjué",
  en: "refuse",
  ru: "отказываться",
  pos: "verb",
  hsd: ["{{word:shuo1}} {{word:bu4}} {{word:yao4}}"],
  tts: ["说不要"],
  literal: "say \"don't want\"",
  fit: "plain",
  topics: ["refusing-and-criticising"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:bu4}} {{word:yao4}}.",
      hanzi: "我说不要。",
      en: "I refuse.",
      ru: "Я отказываюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:shuo1}} {{word:bu4}} {{word:yao4}}.",
      hanzi: "他对我说不要。",
      en: "He refuses me.",
      ru: "Он мне отказывает.",
    },
  ],
});
