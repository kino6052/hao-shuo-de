import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1215,
  phase: 3,
  zh: "通知",
  py: "tōngzhī",
  en: "notify",
  ru: "уведомлять",
  pos: "verb",
  hsd: ["{{word:jiao4}} {{word:ren2}} {{word:zhi1dao4}}"],
  tts: ["叫人知道"],
  literal: "let people know",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiao4}} {{word:ren2}} {{word:zhi1dao4}}.",
      hanzi: "我叫人知道。",
      en: "I notify people.",
      ru: "Я сообщаю людям.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:jiao4}} {{word:ren2}} {{word:zhi1dao4}}.",
      hanzi: "你要叫人知道。",
      en: "You must notify people.",
      ru: "Ты должен сообщить людям.",
    },
  ],
});
