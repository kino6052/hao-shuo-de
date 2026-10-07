import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 243,
  phase: 1,
  zh: "脚",
  py: "jiǎo",
  en: "foot",
  ru: "нога",
  pos: "noun",
  hsd: ["{{word:jiao3}}"],
  tts: ["脚"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我的脚很冷。",
      en: "My feet are cold.",
      ru: "У меня мёрзнут ноги.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他的脚很大。",
      en: "His feet are big.",
      ru: "У него большие ступни.",
    },
  ],
});
