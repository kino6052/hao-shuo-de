import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 995,
  phase: 2,
  zh: "组织",
  py: "zǔzhī",
  en: "organize; organization",
  ru: "организовать; организация",
  pos: "verb",
  hsd: [
    "{{word:yi1}}-{{word:qi3}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
    "{{word:ba3}} {{word:ren2}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["一起做的人", "把人放在一起"],
  literal: "the people who do it together / put people together",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:yi1}}-{{word:qi3}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是一起做的人。",
      en: "He is part of an organization.",
      ru: "Он член организации.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:ren2}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}.",
      hanzi: "我把人放在一起。",
      en: "I organize people.",
      ru: "Я организую людей.",
    },
  ],
});
