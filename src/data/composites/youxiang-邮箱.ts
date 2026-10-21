import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1433,
  phase: 3,
  zh: "邮箱",
  py: "yóuxiāng",
  en: "mailbox",
  ru: "почтовый ящик",
  pos: "noun",
  hsd: [
    "{{word:fang4}}-{{word:xie3}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["放写的东西的地方"],
  literal: "where written things are put",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["container"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:you3}} {{word:fang4}}-{{word:xie3}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我家有放写的东西的地方。",
      en: "My home has a mailbox.",
      ru: "У моего дома есть почтовый ящик.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:fang4}}-{{word:xie3}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你的放写的东西的地方在哪里？",
      en: "Where is your mailbox?",
      ru: "Где твой почтовый ящик?",
    },
  ],
});
