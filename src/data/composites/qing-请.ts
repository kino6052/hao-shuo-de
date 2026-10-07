import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 206,
  phase: 1,
  zh: "请",
  py: "qǐng",
  en: "please",
  ru: "пожалуйста",
  pos: "verb",
  hsd: ["…, {{word:hao3}} {{word:ma}}?"],
  tts: ["…，好吗？"],
  literal: "…, okay?",
  fit: "plain",
  note: "Lesson {{lesson:everyday-patterns}}.",
  examples: [
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:shui3}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "给我水，好吗？",
      en: "Please give me some water.",
      ru: "Дай мне воды, пожалуйста.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:lai2}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "你来，好吗？",
      en: "Please come.",
      ru: "Приходи, пожалуйста.",
    },
  ],
});
