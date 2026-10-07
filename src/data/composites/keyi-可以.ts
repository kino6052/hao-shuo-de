import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 45,
  phase: 1,
  zh: "可以",
  py: "kěyǐ",
  en: "can, may",
  ru: "можно",
  pos: "verb",
  hsd: ["{{word:ke3}}-{{word:yi3}}", "{{word:neng2}}"],
  tts: ["可以", "能"],
  fit: "natural",
  note: "\"Can\" and \"may\" are both néng (D19).",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ke3}}-{{word:yi3}} {{word:jin4}}-{{word:lai2}} {{word:ma}}?",
      hanzi: "我可以进来吗？",
      en: "May I come in?",
      ru: "Можно войти?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ke3}}-{{word:yi3}} {{word:yong4}} {{word:wo3}}-{{word:de}} {{word:shou3}}-{{word:ji1}}.",
      hanzi: "你可以用我的手机。",
      en: "You can use my phone.",
      ru: "Можешь взять мой телефон.",
    },
  ],
});
