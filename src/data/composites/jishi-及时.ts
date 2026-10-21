import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1472,
  phase: 3,
  zh: "及时",
  py: "jíshí",
  en: "in time",
  ru: "вовремя",
  pos: "adjective",
  hsd: ["{{word:zai4}} {{word:yao4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["在要的时间"],
  literal: "at the time it's needed",
  fit: "plain",
  topics: ["suddenly-and-on-time"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:yao4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:lai2}} {{word:le}}.",
      hanzi: "他在要的时间来了。",
      en: "He came in time.",
      ru: "Он пришёл вовремя.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:yao4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:dao4}} {{word:le}}.",
      hanzi: "我在要的时间到了。",
      en: "I arrived in time.",
      ru: "Я пришёл вовремя.",
    },
  ],
});
