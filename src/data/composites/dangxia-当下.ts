import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8192,
  phase: 4,
  zh: "当下",
  py: "dāngxià",
  en: "the present moment; right now; at once",
  ru: "настоящий момент; сейчас; сразу",
  pos: "noun",
  hsd: [
    "{{word:xian4}}-{{word:zai4}}",
    "{{word:zhe4}}-{{light:ge4}} {{word:shi2}}-{{word:jian1}}",
    "{{word:xian4}}-{{word:zai4}} {{word:jiu4}} …",
  ],
  tts: ["现在", "这个时间", "现在就…"],
  fit: "natural",
  topics: ["now-and-recently"],
  isA: ["time-point"],
  proposed: true,
});
