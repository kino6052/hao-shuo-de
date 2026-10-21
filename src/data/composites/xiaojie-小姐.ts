import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7200,
  phase: 4,
  zh: "小姐",
  py: "xiǎojiě",
  en: "Miss; young lady",
  ru: "мисс, барышня",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:lao3}}-{{word:de}} {{word:nv3}}-{{word:ren2}}",
    "{{word:jiao4}} {{word:bu4}} {{word:lao3}}-{{word:de}} {{word:nv3}}-{{word:ren2}}-{{word:de}} {{word:hao3}}-{{word:ting1}}-{{word:de}} {{word:ci2}}",
  ],
  tts: ["不老的女人", "叫不老的女人的好听的词"],
  literal: "a woman who is not old / the nice word for calling a young woman",
  fit: "plain",
  topics: ["men-and-women"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
