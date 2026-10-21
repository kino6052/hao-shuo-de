import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8081,
  phase: 4,
  zh: "一口气",
  py: "yìkǒuqì",
  en: "in one breath; without stopping",
  ru: "на одном дыхании; не останавливаясь",
  pos: "adverb",
  hsd: [
    "{{word:yi1}}-{{word:kou3}}-{{word:qi4}}",
    "{{word:zhong1}}-{{word:jian1}} {{word:bu4}} {{word:deng3}}",
    "{{word:yi1}}-{{word:xia4}} {{word:jiu4}} {{word:zuo4}}-{{word:wan2}}",
  ],
  tts: ["一口气", "中间不等", "一下就做完"],
  fit: "natural",
  topics: ["adverbs"],
  isA: ["adverb-word"],
  proposed: true,
});
