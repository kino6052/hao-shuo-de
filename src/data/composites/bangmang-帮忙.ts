import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 520,
  phase: 2,
  zh: "帮忙",
  py: "bāngmáng",
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
      en: "I'll help you.",
      ru: "Я тебе помогу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:bang1}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你能帮我吗？",
      en: "Can you help me?",
      ru: "Ты можешь мне помочь?",
    },
  ],
});
