import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 517,
  phase: 2,
  zh: "姐姐",
  py: "jiějie",
  en: "older sister",
  ru: "старшая сестра",
  pos: "noun",
  hsd: [
    "{{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:da4}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{light:zi}}",
  ],
  tts: ["我爸爸妈妈的比我大的女孩子"],
  literal: "my parents' girl, bigger than me",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:da4}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:ai4}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "我爸爸妈妈的比我大的女孩子爱看书。",
      en: "My older sister loves reading.",
      ru: "Моя старшая сестра любит читать.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:da4}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:bang1}} {{word:wo3}}.",
      hanzi: "我爸爸妈妈的比我大的女孩子帮我。",
      en: "My older sister helps me.",
      ru: "Моя старшая сестра мне помогает.",
    },
  ],
});
