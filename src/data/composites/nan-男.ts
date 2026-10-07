import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 192,
  phase: 1,
  zh: "男",
  py: "nán",
  en: "male",
  ru: "мужской",
  pos: "adjective",
  hsd: ["{{word:nan2}}-{{word:ren2}}"],
  tts: ["男人"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:nan2}}-{{word:ren2}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "那个男人是谁？",
      en: "Who is that man?",
      ru: "Кто тот мужчина?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:san1}}-{{light:ge4}} {{word:nan2}}-{{word:ren2}}.",
      hanzi: "这里有三个男人。",
      en: "There are three men here.",
      ru: "Здесь трое мужчин.",
    },
  ],
});
