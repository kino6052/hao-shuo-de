import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 397,
  phase: 1,
  zh: "忘记",
  py: "wàngjì",
  en: "forget",
  ru: "забыть",
  pos: "verb",
  hsd: ["{{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:ji4}}-{{light:de2}} {{word:le}}"],
  tts: ["现在不记得了"],
  literal: "now don't remember anymore",
  fit: "plain",
  topics: ["remembering-and-forgetting"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:ji4}}-{{light:de2}} {{word:lu4}} {{word:le}}.",
      hanzi: "我现在不记得路了。",
      en: "I've forgotten the way.",
      ru: "Я забыл дорогу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:ji4}}-{{light:de2}} {{word:wo3}} {{word:le}}.",
      hanzi: "他现在不记得我了。",
      en: "He's forgotten me.",
      ru: "Он меня забыл.",
    },
  ],
});
