import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7990,
  phase: 4,
  zh: "盘",
  py: "pán",
  en: "plate; dish; coil up",
  ru: "тарелка, блюдо; сворачивать кольцом",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:chi1}}-{{word:de}} {{word:fang4}} {{word:zai4}} {{word:shang4}}-{{word:mian4}}-{{word:de}} {{word:ping2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:ba3}} {{word:chang2}}-{{word:de}} X {{word:bian4}} {{word:yuan2}}",
  ],
  tts: ["让吃的放在上面的平的东西", "把长的X变圆"],
  literal: "a flat thing for putting food on / make a long X round",
  fit: "plain",
  topics: ["tableware"],
  isA: ["container"],
  proposed: true,
});
