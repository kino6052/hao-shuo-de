import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1104,
  phase: 3,
  zh: "掌握",
  py: "zhǎngwò",
  en: "master, grasp",
  ru: "овладеть",
  pos: "verb",
  hsd: ["{{word:zhi1dao4}} {{word:hen3}} {{word:hao3}}"],
  tts: ["知道很好"],
  literal: "know it well",
  fit: "plain",
  topics: ["knowing-and-understanding"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:zhi1dao4}} {{word:hen3}} {{word:hao3}}, {{word:ye3}} {{word:neng2}} {{word:zuo4}}.",
      hanzi: "这个我知道很好，也能做。",
      en: "I have mastered this.",
      ru: "Я освоил это.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:ta1}} {{word:zhi1dao4}} {{word:hen3}} {{word:hao3}}, {{word:ye3}} {{word:neng2}} {{word:zuo4}}.",
      hanzi: "那个他知道很好，也能做。",
      en: "He has mastered that.",
      ru: "Он освоил то.",
    },
  ],
});
