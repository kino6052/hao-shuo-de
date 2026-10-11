import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 666,
  phase: 2,
  zh: "服务",
  py: "fúwù",
  en: "serve",
  ru: "обслуживать",
  pos: "verb",
  hsd: ["{{word:bang1}}"],
  tts: ["帮"],
  literal: "help",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:bang1}} {{word:ni3}} {{word:ma}}?",
      hanzi: "我能帮你吗？",
      en: "May I serve you?",
      ru: "Могу я вам помочь?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bang1}} {{word:wo3}}-{{word:men}}.",
      hanzi: "他帮我们。",
      en: "He serves us.",
      ru: "Он нам помогает.",
    },
  ],
});
