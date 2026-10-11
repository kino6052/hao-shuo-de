import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 432,
  phase: 1,
  zh: "活",
  py: "huó",
  en: "live",
  ru: "жить",
  pos: "verb",
  hsd: ["{{word:huo2}}"],
  tts: ["活"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:huo2}} {{word:le}} {{word:jiu3}}-{{word:shi2}} {{word:nian2}}.",
      hanzi: "他活了九十年。",
      en: "He lived ninety years.",
      ru: "Он прожил девяносто лет.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:mei2}}-{{word:you3}} {{word:shui3}} {{word:bu4}} {{word:neng2}} {{word:huo2}}.",
      hanzi: "植物没有水不能活。",
      en: "Plants can't live without water.",
      ru: "Растения не могут жить без воды.",
    },
  ],
});
