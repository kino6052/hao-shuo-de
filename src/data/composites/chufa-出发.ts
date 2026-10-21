import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1262,
  phase: 3,
  zh: "出发",
  py: "chūfā",
  en: "set out",
  ru: "отправляться",
  pos: "verb",
  hsd: ["{{word:chu1}}-{{word:fa1}}", "{{word:kai1shi3}} {{word:qu4}}"],
  tts: ["出发", "开始去"],
  literal: "go out-send out / start going",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["a-trip"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:jin1}}-{{word:tian1}} {{word:chu1}}-{{word:fa1}}.",
      hanzi: "我们今天出发。",
      en: "We set out today.",
      ru: "Мы отправляемся сегодня.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:chu1}}-{{word:fa1}}?",
      hanzi: "你什么时间出发？",
      en: "When do you set out?",
      ru: "Когда ты отправляешься?",
    },
  ],
});
