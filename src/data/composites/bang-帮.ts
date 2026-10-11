import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 935,
  phase: 2,
  zh: "帮",
  py: "bāng",
  en: "help",
  ru: "помогать",
  pos: "verb",
  hsd: ["{{word:bang1}}"],
  tts: ["帮"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}}.",
      hanzi: "我帮你。",
      en: "I help you.",
      ru: "Я помогаю тебе.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你帮我吗？",
      en: "Will you help me?",
      ru: "Ты поможешь мне?",
    },
  ],
});
