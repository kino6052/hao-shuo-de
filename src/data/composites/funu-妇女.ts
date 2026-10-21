import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1305,
  phase: 3,
  zh: "妇女",
  py: "fùnǚ",
  en: "woman",
  ru: "женщина",
  pos: "noun",
  hsd: ["{{word:nv3}}-{{word:ren2}}"],
  tts: ["女人"],
  fit: "word",
  topics: ["men-and-women"],
  isA: ["person-by-age-or-sex"],
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:nv3}}-{{word:ren2}} {{word:zai4}} {{word:wo3}} {{word:jia1}}.",
      hanzi: "那个女人在我家。",
      en: "That woman is at my home.",
      ru: "Та женщина у меня дома.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:nv3}}-{{word:ren2}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这些女人都很好。",
      en: "These women are all kind.",
      ru: "Эти женщины все добрые.",
    },
  ],
});
