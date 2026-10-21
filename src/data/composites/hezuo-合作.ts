import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1055,
  phase: 3,
  zh: "合作",
  py: "hézuò",
  en: "cooperate",
  ru: "сотрудничать",
  pos: "verb",
  hsd: ["{{word:yi1}}-{{word:qi3}} {{word:zuo4}}"],
  tts: ["一起做"],
  literal: "do it together",
  fit: "plain",
  topics: ["together-and-cooperating"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}.",
      hanzi: "我们一起做。",
      en: "We work together.",
      ru: "Мы работаем вместе.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}.",
      hanzi: "我和他一起做。",
      en: "I work together with him.",
      ru: "Я работаю вместе с ним.",
    },
  ],
});
