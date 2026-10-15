import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 841,
  phase: 2,
  zh: "平时",
  py: "píngshí",
  en: "usually",
  ru: "обычно",
  pos: "noun",
  hsd: [
    "{{word:ping2}}-{{word:shi2}}",
    "{{word:da4}} {{word:bu4}}-{{light:fen1}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["平时", "大部分时间"],
  literal: "most of the time",
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ping2}}-{{word:shi2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我平时在家。",
      en: "Usually I'm at home.",
      ru: "Обычно я дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ping2}}-{{word:shi2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他平时不来。",
      en: "He doesn't usually come.",
      ru: "Обычно он не приходит.",
    },
  ],
});
