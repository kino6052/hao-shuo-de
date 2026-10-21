import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 680,
  phase: 2,
  zh: "生",
  py: "shēng",
  en: "give birth",
  ru: "родить",
  pos: "verb",
  hsd: ["{{word:sheng1}}"],
  tts: ["生"],
  fit: "word",
  topics: ["birth-and-death"],
  isA: ["life-change"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:ma1ma}} {{word:sheng1}} {{word:le}} {{word:ta1}}.",
      hanzi: "他的妈妈生了他。",
      en: "His mother gave birth to him.",
      ru: "Его мать родила его.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:sheng1}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:xiao3}}-{{word:hai2}}-{{word:zi}}.",
      hanzi: "她生了一个小孩子。",
      en: "She gave birth to a child.",
      ru: "Она родила ребёнка.",
    },
  ],
});
