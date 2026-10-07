import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 345,
  phase: 1,
  zh: "下面",
  py: "xiàmiàn",
  en: "down",
  ru: "вниз",
  pos: "noun",
  hsd: ["{{word:xia4}}-{{word:mian4}}"],
  tts: ["下面"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:xia4}}-{{word:mian4}} {{word:you3}} {{word:ren2}}.",
      hanzi: "下面有人。",
      en: "There's someone down there.",
      ru: "Там внизу кто-то есть.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "水在下面。",
      en: "The water is below.",
      ru: "Вода внизу.",
    },
  ],
});
