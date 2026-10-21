import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8571,
  phase: 4,
  zh: "阵雨",
  py: "zhènyǔ",
  en: "shower; brief rain",
  ru: "кратковременный дождь; ливень",
  pos: "noun",
  hsd: [
    "{{word:xia4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:bu4}} {{word:chang2}}-{{word:de}}, {{word:cong2}} {{word:tian1}}-{{word:shang4}} {{word:xia4}}-{{word:lai2}}-{{word:de}} {{word:shui3}}",
    "{{word:hen3}} {{word:kuai4}} {{word:jiu4}} {{word:mei2}}-{{word:you3}}-{{word:de}}, {{word:cong2}} {{word:tian1}}-{{word:shang4}} {{word:xia4}}-{{word:lai2}}-{{word:de}} {{word:shui3}}",
  ],
  tts: ["下的时间不长的，从天上下来的水", "很快就没有的，从天上下来的水"],
  literal: "the water that comes down from the sky, not falling for long / the water that comes down from the sky and is soon gone",
  fit: "plain",
  topics: ["weather"],
  isA: ["weather-thing"],
  proposed: true,
});
