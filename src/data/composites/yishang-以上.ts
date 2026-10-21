import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1242,
  phase: 3,
  zh: "以上",
  py: "yǐshàng",
  en: "above, more than",
  ru: "выше, больше",
  pos: "noun",
  hsd: ["{{word:yi3}}-{{word:shang4}}", "{{word:bi3}} X {{word:duo1}}"],
  tts: ["以上", "比X多"],
  literal: "more than X",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["half-both-and-only-one"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:you3}} {{word:shi2}}-{{light:ge4}} {{word:yi3}}-{{word:shang4}}.",
      hanzi: "有十个以上。",
      en: "There are ten or more.",
      ru: "Их десять и больше.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jia1}} {{word:you3}} {{word:wu3}}-{{light:ge4}} {{word:ren2}} {{word:yi3}}-{{word:shang4}}.",
      hanzi: "他的家有五个人以上。",
      en: "His family has more than five people.",
      ru: "В его семье больше пяти человек.",
    },
  ],
});
