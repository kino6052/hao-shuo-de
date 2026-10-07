import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 215,
  phase: 1,
  zh: "进",
  py: "jìn",
  en: "enter",
  ru: "входить",
  pos: "verb",
  hsd: ["{{word:jin4}}"],
  tts: ["进"],
  fit: "word",
  note: "Lesson {{lesson:direction-and-result}}: jìn-lái!",
  examples: [
    { pinyin: "{{Word:jin4}}-{{word:lai2}}!", hanzi: "进来！", en: "Come in!", ru: "Входи!" },
    {
      pinyin: "{{Word:ta1}} {{word:jin4}} {{word:le}} {{word:fang2}}-{{word:jian1}}.",
      hanzi: "他进了房间。",
      en: "He went into the room.",
      ru: "Он вошёл в комнату.",
    },
  ],
});
