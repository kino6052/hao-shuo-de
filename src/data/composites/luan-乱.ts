import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1452,
  phase: 3,
  zh: "乱",
  py: "luàn",
  en: "messy",
  ru: "беспорядочный",
  pos: "adjective",
  hsd: ["{{word:luan4}}"],
  tts: ["乱"],
  fit: "word",
  topics: ["empty-messy-clear"],
  isA: ["condition-quality"],
  note: "Lesson {{lesson:becoming-and-making}}.",
  examples: [
    {
      pinyin: "{{Word:fang2}}-{{word:jian1}} {{word:hen3}} {{word:luan4}}.",
      hanzi: "房间很乱。",
      en: "The room is messy.",
      ru: "В комнате беспорядок.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shu1}} {{word:hen3}} {{word:luan4}}.",
      hanzi: "我的书很乱。",
      en: "My books are in a mess.",
      ru: "Мои книги в беспорядке.",
    },
  ],
});
