import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 932,
  phase: 2,
  zh: "姐妹",
  py: "jiěmèi",
  en: "sisters",
  ru: "сёстры",
  pos: "noun",
  hsd: [
    "{{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{light:zi}}",
  ],
  tts: ["我爸爸妈妈的女孩子"],
  literal: "my parents' girls",
  fit: "plain",
  topics: ["parents-and-children"],
  isA: ["relative"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我爸爸妈妈的女孩子很好。",
      en: "My sister is nice.",
      ru: "Моя сестра хорошая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我爸爸妈妈的女孩子在家。",
      en: "My sister is at home.",
      ru: "Моя сестра дома.",
    },
  ],
});
