import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 427,
  phase: 1,
  zh: "欢迎",
  py: "huānyíng",
  en: "welcome",
  ru: "добро пожаловать",
  pos: "verb",
  hsd: ["{{word:hen3}} {{word:kai1}}-{{word:xin1}} {{word:ni3}} {{word:lai2}} {{word:le}}"],
  tts: ["很开心你来了"],
  literal: "very happy you've come",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:hen3}} {{word:kai1}}-{{word:xin1}} {{word:ni3}} {{word:lai2}} {{word:le}}!",
      hanzi: "很开心你来了！",
      en: "Welcome!",
      ru: "Добро пожаловать!",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:hen3}} {{word:kai1}}-{{word:xin1}} {{word:ni3}} {{word:lai2}} {{word:le}}.",
      hanzi: "我们很开心你来了。",
      en: "We're glad you've come.",
      ru: "Мы рады, что ты пришёл.",
    },
  ],
});
