import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 985,
  phase: 2,
  zh: "政治",
  py: "zhèngzhì",
  en: "politics",
  ru: "политика",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:jia1}} {{word:li3}}-{{word:mian4}}-{{word:de}} {{word:guan1xi}}"],
  tts: ["国家里面的关系"],
  literal: "the relations inside a country",
  fit: "plain",
  topics: ["government"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:zhi1dao4}} {{word:guo2}}-{{word:jia1}} {{word:li3}}-{{word:mian4}}-{{word:de}} {{word:guan1xi}}.",
      hanzi: "我想知道国家里面的关系。",
      en: "I want to know about politics.",
      ru: "Я хочу знать о политике.",
    },
    {
      pinyin: "{{Word:guo2}}-{{word:jia1}} {{word:li3}}-{{word:mian4}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "国家里面的关系很大。",
      en: "Politics matters a lot.",
      ru: "Политика очень важна.",
    },
  ],
});
