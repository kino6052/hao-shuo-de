import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 241,
  phase: 1,
  zh: "站",
  py: "zhàn",
  en: "stand",
  ru: "стоять",
  pos: "verb",
  hsd: ["{{word:zhan4}}"],
  tts: ["站"],
  fit: "word",
  note: "Lesson {{lesson:direction-and-result}}: zhàn-qǐ-lái.",
  examples: [
    {
      pinyin: "{{Word:zhan4}} {{word:qi3}}-{{word:lai2}}!",
      hanzi: "站起来！",
      en: "Stand up!",
      ru: "Встань!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhan4}} {{word:zai4}} {{word:men2}}-{{word:kou3}}.",
      hanzi: "他站在门口。",
      en: "He's standing in the doorway.",
      ru: "Он стоит в дверях.",
    },
  ],
});
