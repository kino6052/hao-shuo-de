import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 704,
  phase: 2,
  zh: "认为",
  py: "rènwéi",
  en: "think, believe",
  ru: "считать",
  pos: "verb",
  hsd: ["{{word:jue2}}-{{light:de2}}", "{{word:xiang3}}"],
  tts: ["觉得", "想"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:ta1}} {{word:shi4}} {{word:hao3}} {{word:ren2}}.",
      hanzi: "我想他是好人。",
      en: "I think he is a good person.",
      ru: "Я думаю, он хороший человек.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:ta1}} {{word:lai2}} {{word:ma}}?",
      hanzi: "你想他来吗？",
      en: "Do you think he will come?",
      ru: "Ты думаешь, он придёт?",
    },
  ],
});
