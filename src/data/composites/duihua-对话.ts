import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1315,
  phase: 3,
  zh: "对话",
  py: "duìhuà",
  en: "dialogue",
  ru: "диалог",
  pos: "verb",
  hsd: [
    "{{word:dui4}}-{{word:hua4}}",
    "{{word:liang3}}-ge {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}",
  ],
  tts: ["对话", "两个人一起说"],
  literal: "two people talking",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dui4}}-{{word:hua4}}.",
      hanzi: "我们对话。",
      en: "We have a dialogue.",
      ru: "У нас диалог.",
    },
    {
      pinyin: "{{Word:liang3}}-{{light:ge4}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}.",
      hanzi: "两个人一起说。",
      en: "Two people talk together.",
      ru: "Два человека говорят вместе.",
    },
  ],
});
