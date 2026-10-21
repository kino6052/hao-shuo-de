import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7878,
  phase: 4,
  zh: "日夜",
  py: "rìyè",
  en: "day and night; round the clock",
  ru: "день и ночь; круглосуточно",
  pos: "noun",
  hsd: [
    "{{word:bai2}}-{{word:tian1}} {{word:he2}} {{word:wan3}}-{{light:shang4}}",
    "{{word:ri4}} {{word:he2}} {{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["白天和晚上", "日和月的时间"],
  literal: "the daytime and the evening / the time of the sun and of the moon",
  fit: "plain",
  topics: ["times-of-day"],
  isA: ["time-of-day-word"],
  proposed: true,
});
