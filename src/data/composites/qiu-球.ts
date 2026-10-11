import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 440,
  phase: 1,
  zh: "球",
  py: "qiú",
  en: "ball",
  ru: "мяч",
  pos: "noun",
  hsd: ["{{word:yuan2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["圆的东西"],
  literal: "round thing",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:zai4}} {{word:wan2r}} {{word:yuan2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "孩子们在玩儿圆的东西。",
      en: "The kids are playing ball.",
      ru: "Дети играют в мяч.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:yuan2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:gei3}} {{word:wo3}}.",
      hanzi: "把圆的东西给我。",
      en: "Give me the ball.",
      ru: "Дай мне мяч.",
    },
  ],
});
