import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8591,
  phase: 4,
  zh: "层次",
  py: "céngcì",
  en: "level; layer; tier",
  ru: "уровень; слой; ярус",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:zai4}} {{word:yi1}}-{{light:ge4}} {{word:shang4}}-{{word:mian4}}, {{word:bu4}}-{{word:tong2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:shang4}}-{{word:mian4}} {{word:he2}} {{word:xia4}}-{{word:mian4}} {{word:bu4}}-{{word:tong2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["一个在一个上面，不同的地方", "上面和下面不同的地方"],
  literal: "places that are different, one above another / the different places above and below",
  fit: "plain",
  topics: ["up-down-in-out"],
  isA: ["place-relation"],
  proposed: true,
});
