import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 507,
  phase: 2,
  zh: "司机",
  py: "sījī",
  en: "driver",
  ru: "водитель",
  pos: "noun",
  hsd: ["{{word:kai1}}-{{word:che1}}-{{word:de}} {{word:ren2}}"],
  tts: ["开车的人"],
  literal: "a person who drives",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:kai1}}-{{word:che1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是开车的人。",
      en: "He is a driver.",
      ru: "Он водитель.",
    },
    {
      pinyin: "{{Word:kai1}}-{{word:che1}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:che1}}-{{word:li3}}.",
      hanzi: "开车的人在车里。",
      en: "The driver is in the car.",
      ru: "Водитель в машине.",
    },
  ],
});
