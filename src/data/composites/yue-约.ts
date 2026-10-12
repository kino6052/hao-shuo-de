import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1392,
  phase: 3,
  zh: "约",
  py: "yuē",
  en: "arrange; about",
  ru: "договориться; примерно",
  pos: "verb",
  hsd: ["{{word:shuo1}} {{word:hao3}}", "{{word:ke3}}-{{word:neng2}}"],
  tts: ["说好", "可能"],
  literal: "agree on it / maybe",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shuo1}} {{word:hao3}} {{word:le}}.",
      hanzi: "我们说好了。",
      en: "We have arranged it.",
      ru: "Мы договорились.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shuo1}} {{word:hao3}} {{word:ming2}}-{{word:tian1}}.",
      hanzi: "我们说好明天。",
      en: "We arranged for tomorrow.",
      ru: "Мы договорились на завтра.",
    },
  ],
});
