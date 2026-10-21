import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 671,
  phase: 2,
  zh: "检查",
  py: "jiǎnchá",
  en: "inspect",
  ru: "проверять",
  pos: "verb",
  hsd: ["{{word:hao3}}-{{word:hao3}} {{word:kan4}}"],
  tts: ["好好看"],
  literal: "look carefully",
  fit: "natural",
  topics: ["looking-and-checking"],
  isA: ["perceiving"],
  examples: [
    {
      pinyin: "{{Word:hao3}}-{{word:hao3}} {{word:kan4}}!",
      hanzi: "好好看！",
      en: "Check it carefully!",
      ru: "Проверь как следует!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}-{{word:hao3}} {{word:kan4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "你好好看这个。",
      en: "Check this carefully.",
      ru: "Проверь это как следует.",
    },
  ],
});
