import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1112,
  phase: 3,
  zh: "数学",
  py: "shùxué",
  en: "mathematics",
  ru: "математика",
  pos: "noun",
  hsd: [
    "{{word:shu4}}-{{word:xue2}}",
    "{{word:fang4}}-{{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:he2}}-{{word:na2}}-{{word:de}} {{word:xue2}}",
  ],
  tts: ["数学", "放在一起和拿的学"],
  literal: "the learning of putting together and taking away",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["school-subjects-and-courses"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:shu4}}-{{word:xue2}}.",
      hanzi: "我爱数学。",
      en: "I love maths.",
      ru: "Я люблю математику.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xue2}} {{word:shu4}}-{{word:xue2}}.",
      hanzi: "他学数学。",
      en: "He studies maths.",
      ru: "Он учит математику.",
    },
  ],
});
