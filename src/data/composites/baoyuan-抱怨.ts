import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6590,
  phase: 4,
  zh: "抱怨",
  py: "bàoyuàn",
  en: "complain; grumble",
  ru: "жаловаться; ворчать",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:kai1}}-{{word:xin1}}, {{word:shuo1}} X {{word:bu4}} {{word:hao3}}",
    "{{word:yin1wei4}} {{word:bu4}} {{word:kai1}}-{{word:xin1}}, {{word:shuo1}} X {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["不开心，说X不好", "因为不开心，说X不好"],
  literal: "not happy, say X is not good / because not happy, say X is not good",
  fit: "plain",
  topics: ["sad-and-angry"],
  isA: ["speaking-action"],
  proposed: true,
});
