import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 910,
  phase: 2,
  zh: "除了",
  py: "chúle",
  en: "except",
  ru: "кроме",
  pos: "preposition",
  hsd: ["X {{word:bu4}} {{word:suan4}}"],
  tts: ["X不算"],
  literal: "X doesn't count",
  fit: "natural",
  examples: [
    {
      pinyin: "X {{word:bu4}} {{word:suan4}}, {{word:wo3}}-{{word:men}} {{word:dou1}} {{word:qu4}}.",
      hanzi: "X不算，我们都去。",
      en: "Except X, we are all going.",
      ru: "Кроме X, мы все идём.",
    },
    {
      pinyin: "X {{word:bu4}} {{word:suan4}}, {{word:wo3}} {{word:dou1}} {{word:you3}}.",
      hanzi: "X不算，我都有。",
      en: "Except X, I have them all.",
      ru: "Кроме X, у меня всё есть.",
    },
  ],
});
