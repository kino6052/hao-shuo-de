import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6872,
  phase: 4,
  zh: "车祸",
  py: "chēhuò",
  en: "car accident",
  ru: "автомобильная авария",
  pos: "noun",
  hsd: [
    "{{word:che1}} {{word:zai4}} {{word:lu4}}-{{word:shang4}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:huai4}} {{word:dong1}}-{{light:xi1}}",
    "{{word:che1}} {{word:he2}} {{word:che1}} {{word:da3}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["车在路上发生的坏东西", "车和车打在一起"],
  literal: "the bad thing that happens to cars on the road / cars hitting each other",
  fit: "plain",
  topics: ["the-road"],
  isA: ["event"],
  proposed: true,
});
