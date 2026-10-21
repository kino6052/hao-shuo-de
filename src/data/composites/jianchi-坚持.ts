import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1065,
  phase: 3,
  zh: "坚持",
  py: "jiānchí",
  en: "persist",
  ru: "упорствовать, держаться",
  pos: "verb",
  hsd: [
    "{{word:zui4}} {{word:hou4}} {{word:ba3}} X {{word:zuo4}} {{word:xia4}}-{{word:qu4}}",
    "{{word:zuo4}} {{word:dao4}} {{word:zui4}} {{word:hou4}}",
  ],
  tts: ["最后把X做下去", "做到最后"],
  literal: "carry X on to the end",
  fit: "plain",
  topics: ["deciding"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zui4}} {{word:hou4}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:zuo4}} {{word:xia4}}-{{word:qu4}}.",
      hanzi: "我最后把这个做下去。",
      en: "I carry this on to the end.",
      ru: "Я довожу это до конца.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:dao4}} {{word:zui4}} {{word:hou4}}.",
      hanzi: "他做到最后。",
      en: "He keeps going to the end.",
      ru: "Он делает до конца.",
    },
  ],
});
