import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7207,
  phase: 4,
  zh: "夜市",
  py: "yèshì",
  en: "night market",
  ru: "ночной рынок",
  pos: "noun",
  hsd: [
    "{{word:wan3}}-{{light:shang4}} {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:wan3}}-{{light:shang4}} {{word:chi1}} {{word:dong1}}-{{light:xi1}}, {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["晚上买东西的地方", "晚上吃东西，买东西的地方"],
  literal: "a place to buy things in the evening / a place to eat things and buy things in the evening",
  fit: "plain",
  topics: ["shops"],
  isA: ["outdoor-place"],
  proposed: true,
});
