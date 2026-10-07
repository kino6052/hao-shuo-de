import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 348,
  phase: 1,
  zh: "些",
  py: "xiē",
  en: "some",
  ru: "некоторые",
  pos: "classifier",
  hsd: ["{{word:xie1}}", "{{word:you3}}-{{word:de}}", "{{word:yi1}}-{{word:dian3}}"],
  tts: ["些", "有的", "一点"],
  fit: "word",
  note: "yī-diǎn for a little of something.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:shi4}} {{word:wo3}}-{{word:de}}.",
      hanzi: "这些是我的。",
      en: "These are mine.",
      ru: "Это мои.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:xie1}} {{word:ren2}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "那些人是谁？",
      en: "Who are those people?",
      ru: "Кто те люди?",
    },
  ],
});
