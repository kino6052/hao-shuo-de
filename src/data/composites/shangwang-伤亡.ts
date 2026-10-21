import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8803,
  phase: 4,
  zh: "伤亡",
  py: "shāngwáng",
  en: "casualties; killed and wounded; injury and death",
  ru: "потери убитыми и ранеными; жертвы",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}} {{word:huai4}}-{{word:le}}-{{word:de}} {{word:ren2}} {{word:he2}} {{word:si3}}-{{word:le}}-{{word:de}} {{word:ren2}}",
    "{{word:shen1ti3}} {{word:huai4}} {{word:le}}, {{word:si3}} {{word:le}}",
  ],
  tts: ["身体坏了的人和死了的人", "身体坏了，死了"],
  literal: "the people whose body broke and the people who died / the body broke, died",
  fit: "plain",
  topics: ["injuries"],
  isA: ["state-name"],
  proposed: true,
});
