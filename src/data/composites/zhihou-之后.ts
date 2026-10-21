import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 602,
  phase: 2,
  zh: "之后",
  py: "zhīhòu",
  en: "after",
  ru: "после",
  pos: "noun",
  hsd: ["X {{word:hou4}}"],
  tts: ["X后"],
  fit: "natural",
  topics: ["before-and-after"],
  isA: ["time-order"],
  note: "Lesson {{lesson:around-an-action}}: chī-wán hòu.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:fan4}} {{word:hou4}} {{word:shui4jiao4}}.",
      hanzi: "我吃饭后睡觉。",
      en: "I sleep after eating.",
      ru: "Я сплю после еды.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hui2}}-{{word:jia1}} {{word:hou4}} {{word:he1}} {{word:shui3}}.",
      hanzi: "他回家后喝水。",
      en: "He drinks water after getting home.",
      ru: "Он пьёт воду после возвращения домой.",
    },
  ],
});
