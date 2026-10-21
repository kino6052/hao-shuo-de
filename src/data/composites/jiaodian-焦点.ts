import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8640,
  phase: 4,
  zh: "焦点",
  py: "jiāodiǎn",
  en: "focus; focal point; centre of attention",
  ru: "фокус; центр внимания",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:jia1}} {{word:dou1}} {{word:kan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:da4}}-{{word:jia1}} {{word:zui4}} {{word:xiang3}} {{word:kan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["大家都看的地方", "大家最想看的地方"],
  literal: "the place everyone looks at / the place everyone most wants to look at",
  fit: "plain",
  topics: ["looking-and-checking"],
  isA: ["idea"],
  proposed: true,
});
