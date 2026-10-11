import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 505,
  phase: 2,
  zh: "卫生间",
  py: "wèishēngjiān",
  en: "bathroom",
  ru: "ванная",
  pos: "noun",
  hsd: ["{{word:wei4}}-{{word:sheng1}}-{{word:jian1}}"],
  tts: ["卫生间"],
  fit: "natural",
  transparent: true,
  note: "A polite way to say toilet.",
  examples: [
    {
      pinyin: "{{Word:wei4}}-{{word:sheng1}}-{{word:jian1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "卫生间在哪里？",
      en: "Where is the bathroom?",
      ru: "Где ванная?",
    },
    {
      pinyin: "{{Word:wei4}}-{{word:sheng1}}-{{word:jian1}} {{word:hen3}} {{word:gan1jing4}}.",
      hanzi: "卫生间很干净。",
      en: "The bathroom is very clean.",
      ru: "Ванная очень чистая.",
    },
  ],
});
