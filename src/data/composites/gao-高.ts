import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 223,
  phase: 1,
  zh: "高",
  py: "gāo",
  en: "tall, high",
  ru: "высокий",
  pos: "adjective",
  hsd: ["{{word:gao1}}"],
  tts: ["高"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "你很高。",
      en: "You're tall.",
      ru: "Ты высокий.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang2}}-{{word:zi}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "这个房子很高。",
      en: "This building is tall.",
      ru: "Это здание высокое.",
    },
  ],
});
