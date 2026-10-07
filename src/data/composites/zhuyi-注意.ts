import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 186,
  phase: 1,
  zh: "注意",
  py: "zhùyì",
  en: "pay attention",
  ru: "обращать внимание",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:hao3}}", "{{word:ting1}}-{{word:hao3}}"],
  tts: ["看好", "听好"],
  literal: "look well / listen well",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:hao3}}!",
      hanzi: "你看好！",
      en: "Watch carefully!",
      ru: "Смотри внимательно!",
    },
    {
      pinyin: "{{Word:ting1}}-{{word:hao3}}, {{word:wo3}} {{word:zhi3}} {{word:shuo1}} {{word:yi1}}-{{word:ci4}}.",
      hanzi: "听好，我只说一次。",
      en: "Listen carefully, I'll only say it once.",
      ru: "Слушай внимательно, я скажу только один раз.",
    },
  ],
});
