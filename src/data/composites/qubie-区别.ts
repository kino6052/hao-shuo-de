import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1271,
  phase: 3,
  zh: "区别",
  py: "qūbié",
  en: "difference",
  ru: "различие",
  pos: "verb",
  hsd: ["{{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["不一样的地方"],
  literal: "where they're different",
  fit: "plain",
  topics: ["same-and-different"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:ma}}?",
      hanzi: "你知道不一样的地方吗？",
      en: "Do you see the difference?",
      ru: "Ты видишь разницу?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:he2}} {{word:na4}}-{{light:ge4}} {{word:you3}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这个和那个有不一样的地方。",
      en: "There is a difference between this and that.",
      ru: "Между этим и тем есть разница.",
    },
  ],
});
