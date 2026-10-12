import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1197,
  phase: 3,
  zh: "训练",
  py: "xùnliàn",
  en: "train",
  ru: "тренировать(ся)",
  pos: "verb",
  hsd: ["{{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}}"],
  tts: ["很多次做"],
  literal: "do it many times",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}}.",
      hanzi: "我很多次做。",
      en: "I train a lot.",
      ru: "Я много тренируюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}}.",
      hanzi: "他很多次做。",
      en: "He trains a lot.",
      ru: "Он много тренируется.",
    },
  ],
});
