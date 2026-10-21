import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1257,
  phase: 3,
  zh: "关注",
  py: "guānzhù",
  en: "pay attention to, follow",
  ru: "следить, уделять внимание",
  pos: "verb",
  hsd: ["{{word:kan4}} X {{word:zen3me}}-{{word:yang4}}"],
  tts: ["看X怎么样"],
  literal: "see how X is doing",
  fit: "plain",
  topics: ["looking-and-checking"],
  isA: ["perceiving"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}} {{word:zen3me}} {{word:yang4}}.",
      hanzi: "我看他怎么样。",
      en: "I follow how he is doing.",
      ru: "Я слежу, как у него дела.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kan4}} {{word:wo3}}-{{word:de}} {{word:gong1}}-{{word:zuo4}} {{word:zen3me}} {{word:yang4}}.",
      hanzi: "他看我的工作怎么样。",
      en: "He keeps an eye on how my work is going.",
      ru: "Он следит, как идёт моя работа.",
    },
  ],
});
