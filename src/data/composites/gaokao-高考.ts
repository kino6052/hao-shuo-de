import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 725,
  phase: 2,
  zh: "高考",
  py: "gāokǎo",
  en: "college entrance exam",
  ru: "гаокао",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:de}} {{word:kan4}}-{{word:ni3}}-{{word:xue2}}-{{word:le}}-{{word:shen2me}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["大的看你学了什么的东西"],
  literal: "the big exam",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zuo4}} {{word:da4}}-{{word:de}} {{word:kan4}}-{{word:ni3}}-{{word:xue2}}-{{word:le}}-{{word:shen2me}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我要做大的看你学了什么的东西。",
      en: "I have to take the college entrance exam.",
      ru: "Мне надо сдавать вступительный экзамен.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:zuo4}} {{word:da4}}-{{word:de}} {{word:kan4}}-{{word:ni3}}-{{word:xue2}}-{{word:le}}-{{word:shen2me}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他在做大的看你学了什么的东西。",
      en: "He is taking the college entrance exam.",
      ru: "Он сдаёт вступительный экзамен.",
    },
  ],
});
