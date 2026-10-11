import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 709,
  phase: 2,
  zh: "负责",
  py: "fùzé",
  en: "be responsible",
  ru: "отвечать за",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}"],
  tts: ["把X做好的人"],
  literal: "the one who makes X good",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我是把这个做好的人。",
      en: "I'm the one responsible for this.",
      ru: "Я отвечаю за это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:ba3}} {{word:jia1}} {{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是把家做好的人。",
      en: "He is responsible for the home.",
      ru: "Он отвечает за дом.",
    },
  ],
});
