import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 568,
  phase: 2,
  zh: "爷爷",
  py: "yéye",
  en: "grandfather",
  ru: "дедушка",
  pos: "noun",
  hsd: ["{{word:ba4ba}}-{{word:de}} {{word:ba4ba}}"],
  tts: ["爸爸的爸爸"],
  literal: "dad's dad",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ba4ba}}-{{word:de}} {{word:ba4ba}} {{word:hen3}} {{word:lao3}}.",
      hanzi: "爸爸的爸爸很老。",
      en: "My grandpa is old.",
      ru: "Мой дедушка старый.",
    },
    {
      pinyin: "{{Word:ba4ba}}-{{word:de}} {{word:ba4ba}} {{word:zai4}} {{word:jia1}}-{{word:li3}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "爸爸的爸爸在家里看书。",
      en: "My grandpa is reading at home.",
      ru: "Мой дедушка читает дома.",
    },
  ],
});
