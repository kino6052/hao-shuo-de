import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8041,
  phase: 4,
  zh: "长辈",
  py: "zhǎngbèi",
  en: "elder; older relative",
  ru: "старший родственник",
  pos: "noun",
  hsd: [
    "{{word:jia1}}-{{word:li3}} {{word:bi3}} {{word:wo3}} {{word:lao3}}-{{word:de}} {{word:ren2}}",
    "{{word:bi3}} {{word:wo3}} {{word:da4}}-{{word:de}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["家里比我老的人", "比我大的家里的人"],
  literal: "a person at home who is older than me / a person of the home who is bigger than me",
  fit: "plain",
  topics: ["relatives"],
  isA: ["relative"],
  proposed: true,
});
