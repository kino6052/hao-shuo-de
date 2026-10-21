import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1421,
  phase: 3,
  zh: "运动员",
  py: "yùndòngyuán",
  en: "athlete",
  ru: "спортсмен",
  pos: "noun",
  hsd: ["{{word:dong4}}-{{word:shen1ti3}}-{{word:de}} {{word:ren2}}"],
  tts: ["动身体的人"],
  literal: "a person who exercises",
  fit: "plain",
  topics: ["sports"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:dong4}}-{{word:shen1ti3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是动身体的人。",
      en: "He is an athlete.",
      ru: "Он спортсмен.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shi4}} {{word:dong4}}-{{word:shen1ti3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爸爸是动身体的人。",
      en: "My father is an athlete.",
      ru: "Мой папа спортсмен.",
    },
  ],
});
