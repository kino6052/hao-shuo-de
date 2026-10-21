import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8010,
  phase: 4,
  zh: "闪电",
  py: "shǎndiàn",
  en: "lightning",
  ru: "молния",
  pos: "noun",
  hsd: [
    "{{word:tian1}}-{{word:shang4}} {{word:kuai4}} {{word:ming2}} {{word:yi1}}-{{word:xia4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:tian1}}-{{word:shang4}} {{word:ming2}} {{word:yi1}}-{{word:xia4}}-{{word:de}} {{word:huo3}}",
  ],
  tts: ["天上快明一下的东西", "天上明一下的火"],
  literal: "the thing in the sky that is quickly bright for a moment / the fire in the sky that is bright for a moment",
  fit: "plain",
  topics: ["air-wind-and-storms"],
  isA: ["weather-thing"],
  proposed: true,
});
