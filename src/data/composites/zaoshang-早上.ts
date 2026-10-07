import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 236,
  phase: 1,
  zh: "早上",
  py: "zǎoshang",
  en: "morning",
  ru: "утро",
  pos: "noun",
  hsd: ["{{word:ri4}} {{word:qi3}}-{{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["日起来的时间"],
  literal: "the time the sun gets up",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ri4}} {{word:qi3}}-{{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:wo3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "日起来的时间我喝水。",
      en: "In the morning I drink water.",
      ru: "Утром я пью воду.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ri4}} {{word:qi3}}-{{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:zou3}} {{word:le}}.",
      hanzi: "他日起来的时间走了。",
      en: "He left in the morning.",
      ru: "Он ушёл утром.",
    },
  ],
});
