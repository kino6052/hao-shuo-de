import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1012,
  phase: 3,
  zh: "事件",
  py: "shìjiàn",
  en: "incident",
  ru: "происшествие",
  pos: "noun",
  hsd: ["{{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["发生的东西"],
  literal: "something that happened",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "发生的东西很大。",
      en: "The incident is big.",
      ru: "Происшествие большое.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我知道发生的东西。",
      en: "I know about the incident.",
      ru: "Я знаю о происшествии.",
    },
  ],
});
