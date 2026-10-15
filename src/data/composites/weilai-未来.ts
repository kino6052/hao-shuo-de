import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 667,
  phase: 2,
  zh: "未来",
  py: "wèilái",
  en: "future",
  ru: "будущее",
  pos: "adjective",
  hsd: [
    "{{word:hui4}} {{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:wei4}}-{{word:lai2}}",
    "{{word:hou4}}-{{word:mian4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["会来的时间", "未来", "后面的时间"],
  literal: "the time behind",
  fit: "natural",
  kinds: ["built", "spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:hou4}}-{{word:mian4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:you3}} {{word:shen2me}}?",
      hanzi: "后面的时间有什么？",
      en: "What is there in the future?",
      ru: "Что будет в будущем?",
    },
    {
      pinyin: "{{Word:hou4}}-{{word:mian4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "后面的时间很好。",
      en: "The future is good.",
      ru: "Будущее хорошее.",
    },
  ],
});
