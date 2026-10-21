import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8450,
  phase: 4,
  zh: "拖延",
  py: "tuōyán",
  en: "delay; procrastinate; put off",
  ru: "откладывать; тянуть время",
  pos: "verb",
  hsd: [
    "{{word:wan3}} {{word:yi1}}-{{word:dian3}} {{word:zuo4}}",
    "{{word:bu4}} {{word:kuai4}} {{word:zuo4}}",
    "{{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:zuo4}}, {{word:hou4}}-{{word:lai2}} {{word:zuo4}}",
  ],
  tts: ["晚一点做", "不快做", "现在不做，后来做"],
  literal: "do it a bit later / do it not fast / not do it now, do it later",
  fit: "plain",
  topics: ["deciding"],
  isA: ["starting-and-stopping"],
  proposed: true,
});
