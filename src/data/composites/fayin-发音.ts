import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1474,
  phase: 3,
  zh: "发音",
  py: "fāyīn",
  en: "pronunciation",
  ru: "произношение",
  pos: "verb",
  hsd: ["{{word:shuo1}}-{{word:de}} {{word:sheng1yin1}}"],
  tts: ["说的声音"],
  literal: "the sound of speaking",
  fit: "plain",
  topics: ["saying-and-calling"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你说的声音很好。",
      en: "Your pronunciation is good.",
      ru: "У тебя хорошее произношение.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:dui4}}.",
      hanzi: "他说的声音很对。",
      en: "His pronunciation is correct.",
      ru: "У него правильное произношение.",
    },
  ],
});
