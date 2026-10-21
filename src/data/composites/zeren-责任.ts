import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1206,
  phase: 3,
  zh: "责任",
  py: "zérèn",
  en: "responsibility",
  ru: "ответственность",
  pos: "noun",
  hsd: ["{{word:ba3}} X {{word:zuo4}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["把X做好的东西"],
  literal: "the thing of making X well done",
  fit: "plain",
  topics: ["law-and-crime"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:ba3}} {{word:jia1}} {{word:zuo4}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有把家做好的东西。",
      en: "I am responsible for the home.",
      ru: "Я отвечаю за дом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:ba3}} {{word:gong1}}-{{word:zuo4}} {{word:zuo4}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他有把工作做好的东西。",
      en: "He is responsible for the work.",
      ru: "Он отвечает за работу.",
    },
  ],
});
