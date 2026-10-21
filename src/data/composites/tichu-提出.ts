import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1107,
  phase: 3,
  zh: "提出",
  py: "tíchū",
  en: "propose, raise",
  ru: "выдвигать, предлагать",
  pos: "verb",
  hsd: ["{{word:shuo1}}-{{word:chu1}}-{{word:lai2}}"],
  tts: ["说出来"],
  literal: "say it out",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}-{{word:chu1}}-{{word:lai2}}.",
      hanzi: "我说出来。",
      en: "I put it forward.",
      ru: "Я выдвигаю это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:chu1}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他说出来了。",
      en: "He raised it.",
      ru: "Он поднял этот вопрос.",
    },
  ],
});
