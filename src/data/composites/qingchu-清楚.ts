import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 319,
  phase: 1,
  zh: "清楚",
  py: "qīngchu",
  en: "clear",
  ru: "ясный",
  pos: "adjective",
  hsd: ["{{word:hen3}}-{{word:bu4}}-{{word:nan2}} {{word:ming2}}-{{word:bai2}}"],
  tts: ["很不难明白"],
  literal: "very easy to understand",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:hen3}}-{{word:bu4}}-{{word:nan2}} {{word:ming2}}-{{word:bai2}}.",
      hanzi: "你说得很不难明白。",
      en: "You explain clearly.",
      ru: "Ты объясняешь понятно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shu1}} {{word:hen3}}-{{word:bu4}}-{{word:nan2}} {{word:ming2}}-{{word:bai2}}.",
      hanzi: "这个书很不难明白。",
      en: "This book is clear.",
      ru: "Эта книга понятная.",
    },
  ],
});
