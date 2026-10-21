import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1152,
  phase: 3,
  zh: "登录",
  py: "dēnglù",
  en: "log in",
  ru: "войти (в систему)",
  pos: "verb",
  hsd: ["{{word:jin4}}-{{word:qu4}}"],
  tts: ["进去"],
  literal: "go in",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["body-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jin4}}-{{word:qu4}} {{word:le}}.",
      hanzi: "我进去了。",
      en: "I logged in.",
      ru: "Я вошёл.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jin4}}-{{word:qu4}} {{word:ma}}?",
      hanzi: "你进去吗？",
      en: "Are you logging in?",
      ru: "Ты входишь?",
    },
  ],
});
