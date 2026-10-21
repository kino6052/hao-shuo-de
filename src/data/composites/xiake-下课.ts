import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 798,
  phase: 2,
  zh: "下课",
  py: "xiàkè",
  en: "class is over",
  ru: "урок закончился",
  pos: "verb",
  hsd: ["{{word:xue2}}-{{word:wan2}} {{word:le}}"],
  tts: ["学完了"],
  literal: "finished learning",
  fit: "natural",
  topics: ["classroom"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:xue2}}-{{word:wan2}} {{word:le}}.",
      hanzi: "学完了。",
      en: "Class is over.",
      ru: "Урок окончен.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xue2}}-{{word:wan2}} {{word:le}}.",
      hanzi: "我学完了。",
      en: "I'm done studying.",
      ru: "Я закончил учиться.",
    },
  ],
});
