import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1045,
  phase: 3,
  zh: "制造",
  py: "zhìzào",
  en: "manufacture",
  ru: "производить",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  topics: ["making-and-doing"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:che1}}.",
      hanzi: "他做车。",
      en: "He manufactures cars.",
      ru: "Он производит машины.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:guo2}}-{{word:jia1}} {{word:zuo4}} {{word:hen3}} {{word:duo1}} {{word:che1}}.",
      hanzi: "这个国家做很多车。",
      en: "This country manufactures many cars.",
      ru: "Эта страна производит много машин.",
    },
  ],
});
