import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1004,
  phase: 3,
  zh: "专业",
  py: "zhuānyè",
  en: "major; professional",
  ru: "специальность",
  pos: "noun",
  hsd: [
    "{{word:xue2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zhi1dao4}} {{word:hen3}} {{word:duo1}}-{{word:de}}",
  ],
  tts: ["学的东西", "知道很多的"],
  literal: "what you study / knowing a lot",
  fit: "plain",
  topics: ["school-subjects-and-courses"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xue2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我学的东西很好。",
      en: "My major is good.",
      ru: "Моя специальность хорошая.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xue2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你学的东西是什么？",
      en: "What is your major?",
      ru: "Какая у тебя специальность?",
    },
  ],
});
