import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 966,
  phase: 2,
  zh: "放学",
  py: "fàngxué",
  en: "school's out",
  ru: "конец уроков",
  pos: "verb",
  hsd: [
    "{{word:fang4}}-{{word:xue2}}",
    "{{word:xue2}}-{{word:wan2}} {{word:le}}, {{word:hui2}} {{word:jia1}}",
  ],
  tts: ["放学", "学完了，回家"],
  literal: "let learning go / finished learning, going home",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["studying"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:fang4}}-{{word:xue2}} {{word:le}}.",
      hanzi: "我放学了。",
      en: "School is out for me.",
      ru: "У меня закончились уроки.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:wan2}} {{word:le}}, {{word:hui2}} {{word:jia1}}.",
      hanzi: "学完了，回家。",
      en: "School is over, go home.",
      ru: "Уроки закончились, домой.",
    },
  ],
});
