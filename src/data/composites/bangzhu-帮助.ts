import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 172,
  phase: 1,
  zh: "帮助",
  py: "bāngzhù",
  en: "help",
  ru: "помогать",
  pos: "verb",
  hsd: ["{{word:bang1}}"],
  tts: ["帮"],
  fit: "word",
  note: "Lesson {{lesson:everyday-patterns}}: nǐ bāng wǒ ná yī-xià.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:bang1}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你能帮我吗？",
      en: "Can you help me?",
      ru: "Ты можешь мне помочь?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bang1}} {{word:ma1ma}} {{word:zuo4}} {{word:fan4}}.",
      hanzi: "他帮妈妈做饭。",
      en: "He helps mom cook.",
      ru: "Он помогает маме готовить.",
    },
  ],
});
