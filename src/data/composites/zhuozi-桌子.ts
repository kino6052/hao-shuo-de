import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 237,
  phase: 1,
  zh: "桌子",
  py: "zhuōzi",
  en: "table",
  ru: "стол",
  pos: "noun",
  hsd: ["{{word:fang4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:mian4}}r"],
  tts: ["放东西的面儿"],
  literal: "the surface you put things on",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:shu1}} {{word:zai4}} {{word:fang4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:mian4}}r-{{word:shang4}}.",
      hanzi: "书在放东西的面儿上。",
      en: "The book is on the table.",
      ru: "Книга на столе.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:mian4}}r {{word:hen3}} {{word:da4}}.",
      hanzi: "这个放东西的面儿很大。",
      en: "This table is big.",
      ru: "Этот стол большой.",
    },
  ],
});
