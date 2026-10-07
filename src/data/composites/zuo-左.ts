import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 387,
  phase: 1,
  zh: "左",
  py: "zuǒ",
  en: "left (side)",
  ru: "левый",
  pos: "noun",
  hsd: ["{{word:zuo3}}", "{{word:zuo3}}-{{word:bian1}}"],
  tts: ["左", "左边"],
  fit: "word",
  note: "Lesson {{lesson:where-it-is}}.",
  examples: [
    {
      pinyin: "{{Word:men2}} {{word:zai4}} {{word:zuo3}}-{{word:bian1}}.",
      hanzi: "门在左边。",
      en: "The door is on the left.",
      ru: "Дверь слева.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:zuo3}} {{word:shou3}} {{word:xie3}} {{word:zi4}}.",
      hanzi: "他用左手写字。",
      en: "He writes with his left hand.",
      ru: "Он пишет левой рукой.",
    },
  ],
});
