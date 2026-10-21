import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1417,
  phase: 3,
  zh: "负责人",
  py: "fùzérén",
  en: "person in charge",
  ru: "ответственный",
  pos: "noun",
  hsd: ["{{word:yao4}} {{word:ba3}} X {{word:zuo4}} {{word:hao3}}-{{word:de}} {{word:ren2}}"],
  tts: ["要把X做好的人"],
  literal: "the person who has to make X good",
  fit: "plain",
  topics: ["office"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:yao4}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:zuo4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是要把这个做好的人。",
      en: "He is the person in charge of this.",
      ru: "Он отвечает за это.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:yao4}} {{word:ba3}} {{word:gong1}}-{{word:zuo4}} {{word:zuo4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我是要把工作做好的人。",
      en: "I am the person in charge of the work.",
      ru: "Я отвечаю за эту работу.",
    },
  ],
});
