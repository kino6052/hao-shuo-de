import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 143,
  phase: 1,
  zh: "先",
  py: "xiān",
  en: "first",
  ru: "сначала",
  pos: "adverb",
  hsd: ["X-{{word:wan2}} {{word:hou4}}, Y", "Y {{word:qian2}}, X"],
  tts: ["X完后，Y", "Y前，X"],
  literal: "after finishing X, Y / before Y, X",
  fit: "skip",
  note: "Say the first action first.",
  examples: [
    {
      pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}}-{{word:men}} {{word:qu4}}.",
      hanzi: "吃完后，我们去。",
      en: "We'll eat first, then go.",
      ru: "Сначала поедим, потом пойдём.",
    },
    {
      pinyin: "{{Word:qu4}} {{word:qian2}}, {{word:ni3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "去前，你喝水。",
      en: "Drink some water first, before you go.",
      ru: "Перед уходом попей воды.",
    },
  ],
});
