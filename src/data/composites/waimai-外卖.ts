import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 930,
  phase: 2,
  zh: "外卖",
  py: "wàimài",
  en: "takeout",
  ru: "доставка еды",
  pos: "verb",
  hsd: [
    "{{word:na2}} {{word:dao4}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["拿到家里的吃的东西"],
  literal: "food brought home",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:na2}} {{word:dao4}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我要拿到家里的吃的东西。",
      en: "I want takeout.",
      ru: "Я хочу еду на вынос.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:na2}} {{word:dao4}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是拿到家里的吃的东西。",
      en: "This is takeout.",
      ru: "Это еда на вынос.",
    },
  ],
});
