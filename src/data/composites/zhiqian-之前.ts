import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 601,
  phase: 2,
  zh: "之前",
  py: "zhīqián",
  en: "before",
  ru: "до",
  pos: "noun",
  hsd: ["X {{word:qian2}}"],
  tts: ["X前"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:fan4}} {{word:qian2}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我吃饭前喝水。",
      en: "I drink water before eating.",
      ru: "Я пью воду перед едой.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shui4jiao4}} {{word:qian2}} {{word:kan4}} {{word:shu1}} {{word:ma}}?",
      hanzi: "你睡觉前看书吗？",
      en: "Do you read before sleep?",
      ru: "Ты читаешь перед сном?",
    },
  ],
});
