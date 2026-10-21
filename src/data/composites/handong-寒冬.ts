import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9212,
  phase: 4,
  zh: "寒冬",
  py: "hándōng",
  en: "bitter winter; the dead of winter",
  ru: "лютая зима; стужа",
  pos: "noun",
  hsd: [
    "{{word:hen3}} {{word:leng3}}-{{word:de}} {{word:dong1}}-{{word:tian1}}",
    "{{word:dong1}}-{{word:tian1}} {{word:zui4}} {{word:leng3}}-{{word:de}} {{word:shi2}}-{{light:hou4}}",
  ],
  tts: ["很冷的冬天", "冬天最冷的时候"],
  literal: "a very cold winter / the time when winter is coldest",
  fit: "plain",
  topics: ["seasons"],
  isA: ["time-span"],
  proposed: true,
});
