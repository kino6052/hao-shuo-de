import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7760,
  phase: 4,
  zh: "生肖",
  py: "shēngxiào",
  en: "Chinese zodiac animal",
  ru: "животное китайского зодиака",
  pos: "noun",
  hsd: [
    "{{word:ni3}} {{word:chu1}}-{{word:sheng1}}-{{word:de}} {{word:nian2}}-{{word:de}} {{word:dong4}}-{{word:wu4}}",
    "{{word:shi2}}-{{word:er4}}-{{light:ge4}} {{word:dong4}}-{{word:wu4}} {{word:zhong1}}-{{word:jian1}} {{word:he2}} {{word:ni3}} {{word:chu1}}-{{word:sheng1}}-{{word:de}} {{word:nian2}} {{word:you3}} {{word:guan1xi}}-{{word:de}} {{word:yi1}}-{{light:ge4}}",
  ],
  tts: ["你出生的年的动物", "十二个动物中间和你出生的年有关系的一个"],
  literal: "the animal of the year you were born / the one of twelve animals that is connected to the year you were born",
  fit: "plain",
  topics: ["belief-and-customs"],
  isA: ["idea"],
  proposed: true,
});
