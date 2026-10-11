import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 444,
  phase: 1,
  zh: "病",
  py: "bìng",
  en: "illness",
  ru: "болезнь",
  pos: "noun",
  hsd: ["{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}"],
  tts: ["身体不好"],
  literal: "body not good",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ma1ma}} {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "我妈妈身体不好。",
      en: "My mom is ill.",
      ru: "Моя мама болеет.",
    },
    {
      pinyin: "{{Word:shen1ti3}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:ren2}} {{word:yao4}} {{word:shui4jiao4}}.",
      hanzi: "身体不好的人要睡觉。",
      en: "Sick people need to sleep.",
      ru: "Больным нужно спать.",
    },
  ],
});
