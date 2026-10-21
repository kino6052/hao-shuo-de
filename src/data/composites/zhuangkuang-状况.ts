import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1141,
  phase: 3,
  zh: "状况",
  py: "zhuàngkuàng",
  en: "condition, situation",
  ru: "состояние, положение",
  pos: "noun",
  hsd: [
    "{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{light:zi}}",
    "{{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["现在的样子", "发生的东西"],
  literal: "what's happening",
  fit: "plain",
  topics: ["state-of-things"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他现在的样子很好。",
      en: "His condition is good.",
      ru: "Его состояние хорошее.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:wo3}} {{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:ma}}?",
      hanzi: "你知道我现在的样子吗？",
      en: "Do you know my condition?",
      ru: "Ты знаешь моё состояние?",
    },
  ],
});
