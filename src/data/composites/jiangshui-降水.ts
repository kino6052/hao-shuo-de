import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8718,
  phase: 4,
  zh: "降水",
  py: "jiàngshuǐ",
  en: "precipitation (rain or snow); to precipitate",
  ru: "осадки; выпадать (об осадках)",
  pos: "verb",
  hsd: [
    "{{word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}}",
    "{{word:cong2}}-{{word:tian1}}-{{word:shang4}}-{{word:xia4}}-{{word:lai2}}-{{word:de}} {{word:shui3}}",
  ],
  tts: ["天上下水", "从天上下来的水"],
  literal: "the sky lets water fall / water that comes down from the sky",
  fit: "plain",
  topics: ["weather"],
  isA: ["weather-happening"],
  proposed: true,
});
