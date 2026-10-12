import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1498,
  phase: 3,
  zh: "快递",
  py: "kuàidì",
  en: "express delivery",
  ru: "курьерская доставка",
  pos: "noun",
  hsd: ["{{word:kuai4}} {{word:na2}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["快拿来的东西"],
  literal: "things brought fast",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:kuai4}} {{word:na2}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有快拿来的东西。",
      en: "I have an express package.",
      ru: "У меня есть посылка с экспресс-доставкой.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:kuai4}} {{word:na2}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:dao4}} {{word:le}}.",
      hanzi: "你的快拿来的东西到了。",
      en: "Your express package has arrived.",
      ru: "Твоя посылка пришла.",
    },
  ],
});
