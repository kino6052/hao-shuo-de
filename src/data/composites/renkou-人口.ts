import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1016,
  phase: 3,
  zh: "人口",
  py: "rénkǒu",
  en: "population",
  ru: "население",
  pos: "noun",
  hsd: ["{{word:ren2}}-{{word:kou3}}"],
  tts: ["人口"],
  literal: "people's mouths",
  fit: "natural",
  kinds: ["built"],
  topics: ["groups-and-organisations"],
  isA: ["amount-word"],
  note: "Real Mandarin: 人口.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:guo2}}-{{word:jia1}} {{word:ren2}}-{{word:kou3}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "这个国家人口很多。",
      en: "This country has a large population.",
      ru: "В этой стране большое население.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zhe4}}-{{word:li3}} {{word:ren2}}-{{word:kou3}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "我们这里人口很少。",
      en: "Our place has a small population.",
      ru: "У нас здесь небольшое население.",
    },
  ],
});
