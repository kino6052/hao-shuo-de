import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 396,
  phase: 1,
  zh: "忘",
  py: "wàng",
  en: "forget",
  ru: "забыть",
  pos: "verb",
  hsd: ["{{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:zhi1dao4}} {{word:le}}"],
  tts: ["现在不知道了"],
  literal: "now don't know anymore",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:ming2}}-{{light:zi4}}? {{Word:wo3}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:zhi1dao4}} {{word:le}}.",
      hanzi: "他的名字？我现在不知道了。",
      en: "His name? I've forgotten.",
      ru: "Его имя? Я забыл.",
    },
    {
      pinyin: "{{Word:dui4}}-{{word:bu4}}-{{word:qi3}}, {{word:wo3}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:zhi1dao4}} {{word:le}}.",
      hanzi: "对不起，我现在不知道了。",
      en: "Sorry, I've forgotten.",
      ru: "Извини, я забыл.",
    },
  ],
});
