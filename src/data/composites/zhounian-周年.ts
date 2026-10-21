import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7512,
  phase: 4,
  zh: "周年",
  py: "zhōunián",
  en: "anniversary",
  ru: "годовщина",
  pos: "noun",
  hsd: [
    "{{word:dao4}}-{{word:le}} {{word:yi1}}-{{word:nian2}}",
    "{{word:you3}} {{word:yi1}}-{{word:nian2}} {{word:le}}",
  ],
  tts: ["到了一年", "有一年了"],
  literal: "one year has been reached / it has been one year",
  fit: "plain",
  topics: ["calendar"],
  isA: ["event"],
  proposed: true,
});
