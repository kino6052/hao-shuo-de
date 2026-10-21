import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1015,
  phase: 3,
  zh: "产",
  py: "chǎn",
  en: "produce",
  ru: "производить",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:chu1}}"],
  tts: ["做出"],
  literal: "make come out",
  fit: "plain",
  topics: ["farms-and-factories"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:zuo4}}-{{word:chu1}} {{word:hen3}} {{word:duo1}} {{word:fan4}}.",
      hanzi: "这里做出很多饭。",
      en: "A lot of food is produced here.",
      ru: "Здесь производят много еды.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:chu1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他做出很多。",
      en: "He produces a lot.",
      ru: "Он производит много.",
    },
  ],
});
