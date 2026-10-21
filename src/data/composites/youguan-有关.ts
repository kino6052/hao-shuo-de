import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 664,
  phase: 2,
  zh: "有关",
  py: "yǒuguān",
  en: "related",
  ru: "связанный",
  pos: "verb",
  hsd: ["{{word:you3}}-{{word:guan1}}", "{{word:you3}} {{word:guan1xi}}"],
  tts: ["有关", "有关系"],
  literal: "has to do with / has a connection",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["same-and-different"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:he2}} {{word:wo3}} {{word:you3}}-{{word:guan1}}.",
      hanzi: "这和我有关。",
      en: "This is related to me.",
      ru: "Это связано со мной.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:he2}} {{word:ni3}} {{word:you3}}-{{word:guan1}} {{word:ma}}?",
      hanzi: "这个和你有关吗？",
      en: "Is this related to you?",
      ru: "Это связано с тобой?",
    },
  ],
});
