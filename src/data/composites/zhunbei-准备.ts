import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 294,
  phase: 1,
  zh: "准备",
  py: "zhǔnbèi",
  en: "prepare",
  ru: "готовить",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:hao3}}", "{{word:ke3}}-{{word:yi3}} {{word:kai1shi3}} {{word:le}}"],
  tts: ["做好", "可以开始了"],
  literal: "make it good / (ready:) can start now",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:fan4}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "饭做好了。",
      en: "The food is ready.",
      ru: "Еда готова.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:ke3}}-{{word:yi3}} {{word:kai1shi3}} {{word:le}}.",
      hanzi: "我们可以开始了。",
      en: "We're ready.",
      ru: "Мы готовы.",
    },
  ],
});
