import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1014,
  phase: 3,
  zh: "交通",
  py: "jiāotōng",
  en: "traffic",
  ru: "движение, транспорт",
  pos: "noun",
  hsd: ["{{word:lu4}}-{{word:shang4}}-{{word:de}} {{word:che1}} {{word:he2}} {{word:ren2}}"],
  tts: ["路上的车和人"],
  literal: "the cars and people on the road",
  fit: "plain",
  topics: ["the-road"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:lu4}}-{{word:shang4}}-{{word:de}} {{word:che1}} {{word:he2}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "路上的车和人很多。",
      en: "The traffic is heavy.",
      ru: "Движение плотное.",
    },
    {
      pinyin: "{{Word:lu4}}-{{word:shang4}}-{{word:de}} {{word:che1}} {{word:he2}} {{word:ren2}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "路上的车和人很快。",
      en: "The traffic is fast.",
      ru: "Движение быстрое.",
    },
  ],
});
