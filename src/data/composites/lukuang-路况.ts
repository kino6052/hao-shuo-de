import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8938,
  phase: 4,
  zh: "路况",
  py: "lùkuàng",
  en: "road conditions; state of the road",
  ru: "состояние дороги",
  pos: "noun",
  hsd: [
    "{{word:lu4}} {{word:hao3}} {{word:bu4}} {{word:hao3}} {{word:zou3}}",
    "{{word:lu4}}-{{word:shang4}} {{word:zen3me}}-{{word:yang4}}",
  ],
  tts: ["路好不好走", "路上怎么样"],
  literal: "is the road good to walk or not / how it is on the road",
  fit: "plain",
  topics: ["the-road"],
  isA: ["state-name"],
  proposed: true,
});
