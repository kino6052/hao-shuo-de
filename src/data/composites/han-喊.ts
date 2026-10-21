import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6172,
  phase: 4,
  zh: "喊",
  py: "hǎn",
  en: "shout",
  ru: "кричать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:hen3}} {{word:da4}}-{{word:de}} {{word:sheng1yin1}} {{word:shuo1}}",
    "{{word:yong4}} {{word:hen3}} {{word:da4}}-{{word:de}} {{word:sheng1yin1}} {{word:jiao4}}",
  ],
  tts: ["用很大的声音说", "用很大的声音叫"],
  literal: "say with a very big voice / call with a very big voice",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  proposed: true,
});
