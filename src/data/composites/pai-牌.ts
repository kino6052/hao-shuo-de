import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6944,
  phase: 4,
  zh: "牌",
  py: "pái",
  en: "card; plate; sign; brand",
  ru: "карта, табличка; марка",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:de}}, {{word:shang4}}-{{word:mian4}} {{word:you3}} {{word:zi4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ming2}}-{{word:zi4}}",
  ],
  tts: ["小的，上面有字的东西", "东西的名字"],
  literal: "a small thing with writing on it / the name of a thing",
  fit: "plain",
  topics: ["books-and-paper"],
  isA: ["paper-thing"],
  proposed: true,
});
