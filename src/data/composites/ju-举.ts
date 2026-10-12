import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1234,
  phase: 3,
  zh: "举",
  py: "jǔ",
  en: "raise, lift",
  ru: "поднимать",
  pos: "verb",
  hsd: ["{{word:na2}}-{{word:qi3}}-{{word:lai2}}", "{{word:ba3}} X {{word:qi3}} {{word:lai2}}"],
  tts: ["拿起来", "把X起来"],
  literal: "pick up / make X come up",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:na2}}-{{word:qi3}}-{{word:lai2}} {{word:shou3}}.",
      hanzi: "他拿起来手。",
      en: "He raises his hand.",
      ru: "Он поднимает руку.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:na2}}-{{word:qi3}}-{{word:lai2}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我能拿起来这个。",
      en: "I can lift this.",
      ru: "Я могу это поднять.",
    },
  ],
});
