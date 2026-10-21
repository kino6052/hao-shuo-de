import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6553,
  phase: 4,
  zh: "语气",
  py: "yǔqì",
  en: "tone (of voice); manner of speaking",
  ru: "тон; интонация",
  pos: "noun",
  hsd: [
    "{{word:shuo1}} {{word:hua4}}-{{word:de}} {{word:sheng1yin1}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
    "{{word:shuo1}} {{word:hua4}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
  ],
  tts: ["说话的声音的样子", "说话的样子"],
  literal: "the way the voice sounds when speaking",
  fit: "plain",
  topics: ["talking"],
  isA: ["language-thing"],
  proposed: true,
});
