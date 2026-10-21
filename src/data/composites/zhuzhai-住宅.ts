import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7926,
  phase: 4,
  zh: "住宅",
  py: "zhùzhái",
  en: "residence; dwelling; housing",
  ru: "жильё; жилой дом",
  pos: "noun",
  hsd: [
    "{{word:fang2}}-{{word:zi}}",
    "{{word:ren2}} {{word:zai4}} {{word:li3}}-{{word:mian4}} {{word:shui4jiao4}}-{{word:de}} {{word:fang2}}-{{word:zi}}",
  ],
  tts: ["房子", "人在里面睡觉的房子"],
  fit: "natural",
  topics: ["housing"],
  isA: ["building"],
  proposed: true,
});
