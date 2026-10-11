import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 415,
  phase: 1,
  zh: "旧",
  py: "jiù",
  en: "old (thing)",
  ru: "старый (о вещи)",
  pos: "adjective",
  hsd: ["{{word:lao3}}"],
  tts: ["老"],
  literal: "old",
  fit: "plain",
  note: "lǎo works for old things too.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bao1}} {{word:hen3}} {{word:lao3}} {{word:le}}.",
      hanzi: "这个包很老了。",
      en: "This bag is old.",
      ru: "Эта сумка старая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:lao3}}-{{word:de}} {{word:shu1}}.",
      hanzi: "我爱老的书。",
      en: "I love old books.",
      ru: "Я люблю старые книги.",
    },
  ],
});
