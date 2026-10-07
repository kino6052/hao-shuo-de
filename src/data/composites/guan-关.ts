import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 144,
  phase: 1,
  zh: "关",
  py: "guān",
  en: "close, turn off",
  ru: "закрывать",
  pos: "verb",
  hsd: ["{{word:guan1}}"],
  tts: ["关"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:guan1}} {{word:men2}}!",
      hanzi: "关门！",
      en: "Close the door!",
      ru: "Закрой дверь!",
    },
    {
      pinyin: "{{Word:ba3}} {{word:deng1}} {{word:guan1}} {{word:le}}.",
      hanzi: "把灯关了。",
      en: "Turn off the light.",
      ru: "Выключи свет.",
    },
  ],
});
