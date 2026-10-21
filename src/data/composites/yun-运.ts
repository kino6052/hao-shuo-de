import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1213,
  phase: 3,
  zh: "运",
  py: "yùn",
  en: "transport",
  ru: "перевозить",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:che1}} {{word:na2}}-{{word:qu4}}"],
  tts: ["用车拿去"],
  literal: "take it away by car",
  fit: "plain",
  topics: ["walking-and-running"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:che1}} {{word:na2}}-{{word:qu4}} {{word:shu1}}.",
      hanzi: "我用车拿去书。",
      en: "I carry the books by car.",
      ru: "Я везу книги на машине.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:che1}} {{word:na2}}-{{word:qu4}} {{word:fan4}}.",
      hanzi: "他用车拿去饭。",
      en: "He takes the food by car.",
      ru: "Он везёт еду на машине.",
    },
  ],
});
