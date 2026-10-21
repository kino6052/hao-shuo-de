import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 923,
  phase: 2,
  zh: "刀",
  py: "dāo",
  en: "knife",
  ru: "нож",
  pos: "noun",
  hsd: [
    "{{word:ba3}} {{word:dong1}}-{{light:xi1}} {{word:zuo4}}-{{word:xiao3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}",
  ],
  tts: ["把东西做小的工具"],
  literal: "the tool that makes things small",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["cutting-tool"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:ba3}} {{word:dong1}}-{{light:xi1}} {{word:zuo4}}-{{word:xiao3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有把东西做小的工具。",
      en: "I have a knife.",
      ru: "У меня есть нож.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:dong1}}-{{light:xi1}} {{word:zuo4}}-{{word:xiao3}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "把东西做小的工具很快。",
      en: "The knife is sharp.",
      ru: "Нож острый.",
    },
  ],
});
