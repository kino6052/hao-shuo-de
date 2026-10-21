import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8383,
  phase: 4,
  zh: "摄氏度",
  py: "shèshìdù",
  en: "degree Celsius",
  ru: "градус Цельсия",
  pos: "classifier",
  hsd: [
    "\"shèshìdù\"",
    "{{word:duo1}} {{word:re4}}, {{word:duo1}} {{word:leng3}}-{{word:de}} {{word:shu4}}",
  ],
  tts: ["摄氏度", "多热，多冷的数"],
  literal: "\"shesidu\" / the number of how hot, how cold",
  fit: "plain",
  topics: ["measures"],
  isA: ["measure-unit"],
  proposed: true,
});
