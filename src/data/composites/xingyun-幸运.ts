import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1490,
  phase: 3,
  zh: "幸运",
  py: "xìngyùn",
  en: "lucky",
  ru: "удачливый",
  pos: "noun",
  hsd: [
    "{{word:dui4}} X {{word:duo1}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:fa1}}-{{word:sheng1}} {{word:le}}",
  ],
  tts: ["对X多好的东西发生了"],
  literal: "many good things happen to X",
  fit: "plain",
  topics: ["news-and-events"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:dui4}} {{word:wo3}} {{word:duo1}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:fa1}}-{{word:sheng1}} {{word:le}}.",
      hanzi: "对我多好的东西发生了。",
      en: "I was lucky.",
      ru: "Мне повезло.",
    },
    {
      pinyin: "{{Word:dui4}} {{word:ta1}} {{word:duo1}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:fa1}}-{{word:sheng1}} {{word:le}}.",
      hanzi: "对他多好的东西发生了。",
      en: "He was lucky.",
      ru: "Ему повезло.",
    },
  ],
});
