import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6946,
  phase: 4,
  zh: "牌子",
  py: "páizi",
  en: "brand; sign; plate",
  ru: "марка, бренд; табличка",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:de}}, {{word:shang4}}-{{word:mian4}} {{word:you3}} {{word:zi4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ming2}}-{{word:zi4}}",
  ],
  tts: ["小的，上面有字的东西", "东西的名字"],
  literal: "a small thing with writing on it / the name of a thing",
  fit: "plain",
  topics: ["shops"],
  isA: ["paper-thing"],
  proposed: true,
});
