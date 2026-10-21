import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8700,
  phase: 4,
  zh: "古典",
  py: "gǔdiǎn",
  en: "classical; classic",
  ru: "классический; античный",
  pos: "adjective",
  hsd: [
    "{{word:hen3}} {{word:chang2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:yi3}}-{{word:qian2}} {{word:liu2}}-{{word:xia4}}-{{word:lai2}}-{{word:de}}",
    "{{word:hen3}} {{word:chang2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:yi3}}-{{word:qian2}}-{{word:de}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["很长的时间以前留下来的", "很长的时间以前的好的东西"],
  literal: "left over from a very long time ago / the good things from a very long time ago",
  fit: "plain",
  topics: ["history-and-culture"],
  isA: ["age-or-newness"],
  proposed: true,
});
