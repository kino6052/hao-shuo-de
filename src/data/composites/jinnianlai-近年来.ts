import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7602,
  phase: 4,
  zh: "近年来",
  py: "jìnniánlái",
  en: "in recent years",
  ru: "в последние годы",
  pos: "phrase",
  hsd: [
    "{{word:zhe4}} {{word:yi1}}-{{word:xie1}} {{word:nian2}}",
    "{{word:cong2}} {{word:yi1}}-{{word:xie1}} {{word:nian2}} {{word:yi3}}-{{word:qian2}} {{word:dao4}} {{word:xian4}}-{{word:zai4}}",
  ],
  tts: ["这一些年", "从一些年以前到现在"],
  literal: "these some years / from some years ago until now",
  fit: "plain",
  topics: ["now-and-recently"],
  isA: ["time-span"],
  proposed: true,
});
