import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 809,
  phase: 2,
  zh: "出租车",
  py: "chūzūchē",
  en: "taxi",
  ru: "такси",
  pos: "noun",
  hsd: ["{{word:da3}} {{word:che1}}", "{{word:che1}}"],
  tts: ["打车", "车"],
  literal: "take a car / the car",
  fit: "natural",
  note: "Same as 打车.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:da3}} {{word:che1}}.",
      hanzi: "我去打车。",
      en: "I'm taking a taxi.",
      ru: "Я еду на такси.",
    },
    {
      pinyin: "{{Word:che1}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "车在这里。",
      en: "The taxi is here.",
      ru: "Такси здесь.",
    },
  ],
});
