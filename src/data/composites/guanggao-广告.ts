import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1083,
  phase: 3,
  zh: "广告",
  py: "guǎnggào",
  en: "advertisement",
  ru: "реклама",
  pos: "noun",
  hsd: ["{{word:rang4}}-{{word:ren2}}-{{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["让人买的东西"],
  literal: "a thing that makes people buy",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:rang4}}-{{word:ren2}}-{{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我看让人买的东西。",
      en: "I watch the ad.",
      ru: "Я смотрю рекламу.",
    },
    {
      pinyin: "{{Word:rang4}}-{{word:ren2}}-{{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "让人买的东西很多。",
      en: "There are many ads.",
      ru: "Рекламы много.",
    },
  ],
});
