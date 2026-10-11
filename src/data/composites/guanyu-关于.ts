import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 584,
  phase: 2,
  zh: "关于",
  py: "guānyú",
  en: "about",
  ru: "о, насчёт",
  pos: "preposition",
  hsd: ["{{word:shuo1}} X-{{word:de}}"],
  tts: ["说X的"],
  literal: "that talks about X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shuo1}} {{word:shui3}}-{{word:guo3}}-{{word:de}} {{word:hua4}}.",
      hanzi: "我们说水果的话。",
      en: "We're talking about fruit.",
      ru: "Мы говорим о фруктах.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:wo3}}-{{word:de}} {{word:jia1}}-{{word:de}} {{word:hua4}}.",
      hanzi: "他说我的家的话。",
      en: "He talks about my home.",
      ru: "Он говорит о моём доме.",
    },
  ],
});
