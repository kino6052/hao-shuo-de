import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7263,
  phase: 4,
  zh: "暖气",
  py: "nuǎnqì",
  en: "heating; radiator",
  ru: "отопление, батарея",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:fang2}}-{{word:jian1}} {{word:bu4}} {{word:leng3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:dong1}}-{{word:tian1}} {{word:rang4}} {{word:fang2}}-{{word:jian1}} {{word:re4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让房间不冷的东西", "冬天让房间热的东西"],
  literal: "the thing that makes the room not cold / the thing that makes the room hot in winter",
  fit: "plain",
  topics: ["household-things"],
  isA: ["machine"],
  proposed: true,
});
