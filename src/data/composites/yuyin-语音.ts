import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1203,
  phase: 3,
  zh: "语音",
  py: "yǔyīn",
  en: "speech sound, voice",
  ru: "звук речи, голос",
  pos: "noun",
  hsd: ["{{word:shuo1}}-{{word:de}} {{word:sheng1yin1}}"],
  tts: ["说的声音"],
  literal: "the sound of speaking",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ting1}} {{word:ni3}} {{word:shuo1}}-{{word:de}} {{word:sheng1yin1}}.",
      hanzi: "我爱听你说的声音。",
      en: "I love hearing your voice.",
      ru: "Я люблю слушать твой голос.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他说的声音很好。",
      en: "His pronunciation is good.",
      ru: "У него хорошее произношение.",
    },
  ],
});
