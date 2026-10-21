import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 697,
  phase: 2,
  zh: "自然",
  py: "zìrán",
  en: "nature; naturally",
  ru: "природа; естественно",
  pos: "noun",
  hsd: [
    "{{word:wai4}}-{{word:mian4}}",
    "{{word:you3}} {{word:duo1}} {{word:zhi2wu4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:cong2}} {{word:yi3}}-{{word:qian2}} {{word:jiu4}} X",
  ],
  tts: ["外面", "有多植物的地方", "从以前就X"],
  literal: "outside / a place with many plants / since before, already X",
  fit: "plain",
  topics: ["land-and-water"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "我爱外面。",
      en: "I love nature.",
      ru: "Я люблю природу.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:you3}} {{word:duo1}} {{word:zhi2wu4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我们去有多植物的地方。",
      en: "We're going out into nature.",
      ru: "Мы идём на природу.",
    },
  ],
});
