import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9230,
  phase: 4,
  zh: "水稻",
  py: "shuǐdào",
  en: "rice (the plant); paddy rice",
  ru: "рис (растение); рис-сырец",
  pos: "noun",
  hsd: [
    "{{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:huo2}}-{{word:de}} {{word:chi1}}-{{word:de}} {{word:zhi2wu4}}",
    "{{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:huo2}}-{{word:de}}, {{word:rang4}} {{word:ren2}} {{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:zhi2wu4}}",
  ],
  tts: ["在水里活的吃的植物", "在水里活的，让人吃饭的植物"],
  literal: "the plant to eat that lives in water / the plant living in water that lets people eat rice",
  fit: "plain",
  topics: ["crops-and-farming"],
  isA: ["crop"],
  proposed: true,
});
