import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 816,
  phase: 2,
  zh: "只能",
  py: "zhǐ néng",
  en: "can only",
  ru: "можно только",
  pos: "verb",
  hsd: [
    "{{word:zhi3}}-{{word:neng2}}",
    "X, {{word:mei2}}-{{word:you3}} {{word:bie2}}-{{word:de}} {{word:fang1}}-{{word:fa3}}",
  ],
  tts: ["只能", "X，没有别的方法"],
  literal: "X, there's no other way",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["helping-words"],
  isA: ["auxiliary"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi3}}-{{word:neng2}} {{word:zuo4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我只能做这个。",
      en: "I can only do this.",
      ru: "Я могу сделать только это.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi3}}-{{word:neng2}} {{word:qu4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "你只能去那里。",
      en: "You can only go there.",
      ru: "Ты можешь пойти только туда.",
    },
  ],
});
