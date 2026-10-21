import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8860,
  phase: 4,
  zh: "学位",
  py: "xuéwèi",
  en: "academic degree",
  ru: "учёная степень; академическая степень",
  pos: "noun",
  hsd: [
    "{{word:xue2}}-{{word:xiao4}} {{word:gei3}} {{word:ni3}}-{{word:de}}, {{word:shuo1}} {{word:ni3}} {{word:xue2}}-{{word:dao4}} {{word:duo1}} {{word:gao1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:xue2}}-{{word:xiao4}} {{word:gei3}} {{word:xue2}}-{{word:wan2}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["学校给你的，说你学到多高的东西", "学校给学完的人的东西"],
  literal: "what the school gives you, saying how high you have studied / what the school gives people who finished studying",
  fit: "plain",
  topics: ["exams-and-marks"],
  isA: ["idea"],
  proposed: true,
});
