import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 890,
  phase: 2,
  zh: "行李",
  py: "xíngli",
  en: "luggage",
  ru: "багаж",
  pos: "noun",
  hsd: [
    "{{word:qu4}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:na2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["去远的地方拿的东西"],
  literal: "what you take when you go far",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:na2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我去远的地方拿的东西很大。",
      en: "My luggage is big.",
      ru: "Мой багаж большой.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:qu4}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:na2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "我的去远的地方拿的东西在这里。",
      en: "My luggage is here.",
      ru: "Мой багаж здесь.",
    },
  ],
});
