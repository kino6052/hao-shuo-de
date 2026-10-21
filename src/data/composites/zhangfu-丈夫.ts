import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1448,
  phase: 3,
  zh: "丈夫",
  py: "zhàngfu",
  en: "husband",
  ru: "муж",
  pos: "noun",
  hsd: ["{{word:nan2}}-{{word:ren2}}"],
  tts: ["男人"],
  fit: "word",
  topics: ["love-and-marriage"],
  isA: ["relative"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:nan2}}-{{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的男人很好。",
      en: "My husband is kind.",
      ru: "Мой муж добрый.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:nan2}}-{{word:ren2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "她的男人在家。",
      en: "Her husband is at home.",
      ru: "Её муж дома.",
    },
  ],
});
