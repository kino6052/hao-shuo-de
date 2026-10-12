import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1395,
  phase: 3,
  zh: "经历",
  py: "jīnglì",
  en: "experience",
  ru: "опыт, пережитое",
  pos: "verb",
  hsd: [
    "{{word:zuo4}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:fa1}}-{{word:sheng1}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["做过的东西", "发生过的东西"],
  literal: "things that have happened to you",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:zuo4}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是我做过的东西。",
      en: "This is my experience.",
      ru: "Это мой опыт.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:fa1}}-{{word:sheng1}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有很多发生过的东西。",
      en: "I have a lot of experience.",
      ru: "У меня богатый опыт.",
    },
  ],
});
