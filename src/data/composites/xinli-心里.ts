import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 234,
  phase: 1,
  zh: "心里",
  py: "xīnli",
  en: "in one's heart",
  ru: "в душе",
  pos: "noun",
  hsd: ["{{word:xin1}}-{{word:li3}}", "{{word:jue2}}-{{light:de2}}"],
  tts: ["心里", "觉得"],
  literal: "in the heart",
  fit: "natural",
  note: "wǒ jué-de …: in my heart, I feel …",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xin1}}-{{word:li3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "我心里很开心。",
      en: "I'm happy inside.",
      ru: "На душе у меня радостно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xin1}}-{{word:li3}} {{word:you3}} {{word:ni3}}.",
      hanzi: "他心里有你。",
      en: "He has you in his heart.",
      ru: "Ты в его сердце.",
    },
  ],
});
