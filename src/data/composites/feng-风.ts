import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 486,
  phase: 1,
  zh: "风",
  py: "fēng",
  en: "wind",
  ru: "ветер",
  pos: "noun",
  hsd: ["{{word:kuai4}}-{{word:fei1}}-{{word:de}} {{word:kong1}}-{{word:qi4}}"],
  tts: ["快飞的空气"],
  literal: "air that flies fast",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wai4}}-{{word:mian4}} {{word:kuai4}}-{{word:fei1}}-{{word:de}} {{word:kong1}}-{{word:qi4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "外面快飞的空气很大。",
      en: "It's very windy outside.",
      ru: "На улице сильный ветер.",
    },
    {
      pinyin: "{{Word:kuai4}}-{{word:fei1}}-{{word:de}} {{word:kong1}}-{{word:qi4}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "快飞的空气很冷。",
      en: "The wind is cold.",
      ru: "Ветер холодный.",
    },
  ],
});
