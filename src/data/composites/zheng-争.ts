import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1237,
  phase: 3,
  zh: "争",
  py: "zhēng",
  en: "contend, fight for",
  ru: "бороться, спорить",
  pos: "verb",
  hsd: ["{{word:liang3}}-ge {{word:ren2}} {{word:dou1}} {{word:yao4}}"],
  tts: ["两个人都要"],
  literal: "both want it",
  fit: "plain",
  topics: ["sports"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:liang3}}-{{light:ge4}} {{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "两个人都要这个。",
      en: "The two of them are fighting for this.",
      ru: "Двое борются за это.",
    },
    {
      pinyin: "{{Word:liang3}}-{{light:ge4}} {{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:na4}}-{{light:ge4}} {{word:che1}}.",
      hanzi: "两个人都要那个车。",
      en: "Both want that car.",
      ru: "Обоим нужна та машина.",
    },
  ],
});
