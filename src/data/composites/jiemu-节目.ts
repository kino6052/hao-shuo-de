import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 699,
  phase: 2,
  zh: "节目",
  py: "jiémù",
  en: "program, show",
  ru: "передача",
  pos: "noun",
  hsd: [
    "{{word:zai4}}-{{word:kan4}}-{{word:de}}-{{word:ji1}}-{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["在看的机看的东西"],
  literal: "the thing watched on the watching machine",
  fit: "plain",
  note: "TV is kàn-de bāo.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zai4}}-{{word:kan4}}-{{word:de}}-{{word:ji1}}-{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我爱在看的机看的东西。",
      en: "I love this show.",
      ru: "Я люблю эту передачу.",
    },
    {
      pinyin: "{{Word:zai4}}-{{word:kan4}}-{{word:de}}-{{word:ji1}}-{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}-{{word:wan2r}}.",
      hanzi: "在看的机看的东西很好玩儿。",
      en: "The show is fun.",
      ru: "Передача весёлая.",
    },
  ],
});
