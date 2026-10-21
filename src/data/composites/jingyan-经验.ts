import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1173,
  phase: 3,
  zh: "经验",
  py: "jīngyàn",
  en: "experience",
  ru: "опыт",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["做过的东西"],
  literal: "things you've done before",
  fit: "plain",
  topics: ["ideas-and-opinions"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:zuo4}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有做过的东西。",
      en: "I have experience.",
      ru: "У меня есть опыт.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:zuo4}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他有很多做过的东西。",
      en: "He has a lot of experience.",
      ru: "У него большой опыт.",
    },
  ],
});
