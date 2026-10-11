import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 731,
  phase: 2,
  zh: "乘客",
  py: "chéngkè",
  en: "passenger",
  ru: "пассажир",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:che1}}-{{word:de}} {{word:ren2}}"],
  tts: ["坐车的人"],
  literal: "a person riding in the car",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zuo4}}-{{word:che1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是坐车的人。",
      en: "He is a passenger.",
      ru: "Он пассажир.",
    },
    {
      pinyin: "{{Word:zuo4}}-{{word:che1}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "坐车的人很多。",
      en: "There are many passengers.",
      ru: "Пассажиров много.",
    },
  ],
});
