import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 365,
  phase: 1,
  zh: "发",
  py: "fā",
  en: "send",
  ru: "отправлять",
  pos: "verb",
  hsd: ["{{word:fa1}}"],
  tts: ["发"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:fa1}} {{word:gei3}} {{word:ni3}}.",
      hanzi: "我发给你。",
      en: "I'll send it to you.",
      ru: "Я тебе отправлю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:fa1}} {{word:le}} {{word:ma}}?",
      hanzi: "你发了吗？",
      en: "Did you send it?",
      ru: "Ты отправил?",
    },
  ],
});
