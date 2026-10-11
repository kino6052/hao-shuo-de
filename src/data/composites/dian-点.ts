import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 438,
  phase: 1,
  zh: "点",
  py: "diǎn",
  en: "point; o'clock",
  ru: "точка; час",
  pos: "classifier",
  hsd: ["{{word:dian3}}"],
  tts: ["点"],
  fit: "word",
  note: "Also \"a little\": yī-diǎn.",
  examples: [
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:san1}} {{word:dian3}}.",
      hanzi: "现在三点。",
      en: "It's three o'clock.",
      ru: "Сейчас три часа.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "给我一点。",
      en: "Give me a little.",
      ru: "Дай мне немного.",
    },
  ],
});
