import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8606,
  phase: 4,
  zh: "处罚",
  py: "chǔfá",
  en: "punish; penalize",
  ru: "наказывать; штрафовать",
  pos: "verb",
  hsd: [
    "{{word:yin1wei4}} X {{word:zuo4}} {{word:bu4}} {{word:dui4}}, {{word:rang4}} X {{word:jue2}}-{{word:de}} {{word:bu4}} {{word:hao3}}",
    "{{word:yin1wei4}} X {{word:zuo4}} {{word:bu4}} {{word:dui4}}, {{word:gei3}} X {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["因为X做不对，让X觉得不好", "因为X做不对，给X不好的东西"],
  literal: "because X did it wrong, make X feel bad / because X did it wrong, give X something bad",
  fit: "plain",
  topics: ["punishing-and-forbidding"],
  isA: ["social-action"],
  proposed: true,
});
