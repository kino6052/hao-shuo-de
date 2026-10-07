import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 160,
  phase: 1,
  zh: "声音",
  py: "shēngyīn",
  en: "sound",
  ru: "звук",
  pos: "noun",
  hsd: ["{{word:sheng1yin1}}"],
  tts: ["声音"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:yi1}}-{{light:ge4}} {{word:sheng1yin1}}.",
      hanzi: "我听到一个声音。",
      en: "I hear a sound.",
      ru: "Я слышу звук.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:hao3}}-{{word:ting1}}.",
      hanzi: "她的声音很好听。",
      en: "Her voice is lovely.",
      ru: "У неё красивый голос.",
    },
  ],
});
