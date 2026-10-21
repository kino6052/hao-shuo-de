import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8042,
  phase: 4,
  zh: "招待",
  py: "zhāodài",
  en: "host; entertain (guests)",
  ru: "принимать (гостей); угощать",
  pos: "verb",
  hsd: [
    "{{word:gei3}} {{word:lai2}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:chi1}}-{{word:de}} {{word:he2}} {{word:he1}}-{{word:de}}",
    "{{word:dui4}} {{word:lai2}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}, {{word:gei3}} {{word:ta1}} {{word:chi1}}-{{word:de}}",
  ],
  tts: ["给来家里的人吃的和喝的", "对来的人很好，给他吃的"],
  literal: "give the people who come to the home food and drink / be very good to the one who came, give him food",
  fit: "plain",
  topics: ["parties-and-gifts"],
  isA: ["social-action"],
  proposed: true,
});
