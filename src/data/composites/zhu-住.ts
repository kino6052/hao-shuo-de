import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 142,
  phase: 1,
  zh: "住",
  py: "zhù",
  en: "live (somewhere)",
  ru: "жить (где-то)",
  pos: "verb",
  hsd: ["X-{{word:de}} {{word:jia1}} {{word:zai4}} …"],
  tts: ["…的家在…"],
  literal: "X's home is at",
  fit: "plain",
  note: "wǒ-de jiā zài nà-lǐ.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "我的家在那里。",
      en: "I live there.",
      ru: "Я живу там.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你的家在哪里？",
      en: "Where do you live?",
      ru: "Где ты живёшь?",
    },
  ],
});
