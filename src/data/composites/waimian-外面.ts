import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 378,
  phase: 1,
  zh: "外面",
  py: "wàimiàn",
  en: "outside",
  ru: "снаружи",
  pos: "noun",
  hsd: ["{{word:wai4}}-{{word:mian4}}"],
  tts: ["外面"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wai4}}-{{word:mian4}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "外面很冷。",
      en: "It's cold outside.",
      ru: "На улице холодно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:wai4}}-{{word:mian4}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "我在外面等你。",
      en: "I'll wait for you outside.",
      ru: "Я жду тебя на улице.",
    },
  ],
});
