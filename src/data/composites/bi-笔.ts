import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 450,
  phase: 1,
  zh: "笔",
  py: "bǐ",
  en: "pen",
  ru: "ручка",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}"],
  tts: ["写的工具"],
  literal: "writing tool",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:xie3}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:ma}}?",
      hanzi: "你有写的工具吗？",
      en: "Do you have a pen?",
      ru: "У тебя есть ручка?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:xie3}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:xie3}} {{word:zi4}}.",
      hanzi: "我用写的工具写字。",
      en: "I write with a pen.",
      ru: "Я пишу ручкой.",
    },
  ],
});
