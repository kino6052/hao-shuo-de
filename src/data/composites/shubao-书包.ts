import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 498,
  phase: 1,
  zh: "书包",
  py: "shūbāo",
  en: "schoolbag",
  ru: "рюкзак",
  pos: "noun",
  hsd: ["{{word:shu1}}-{{word:bao1}}"],
  tts: ["书包"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shu1}}-{{word:bao1}} {{word:hen3}} {{word:zhong4}}.",
      hanzi: "我的书包很重。",
      en: "My schoolbag is heavy.",
      ru: "Мой рюкзак тяжёлый.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:shu1}} {{word:fang4}} {{word:zai4}} {{word:shu1}}-{{word:bao1}}-{{word:li3}}.",
      hanzi: "把书放在书包里。",
      en: "Put the books in your schoolbag.",
      ru: "Положи книги в рюкзак.",
    },
  ],
});
