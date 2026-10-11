import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 516,
  phase: 2,
  zh: "妹妹",
  py: "mèimei",
  en: "younger sister",
  ru: "младшая сестра",
  pos: "noun",
  hsd: [
    "{{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:xiao3}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{light:zi}}",
  ],
  tts: ["我爸爸妈妈的比我小的女孩子"],
  literal: "my parents' girl, smaller than me",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:xiao3}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "我爸爸妈妈的比我小的女孩子在睡觉。",
      en: "My younger sister is sleeping.",
      ru: "Моя младшая сестра спит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:xiao3}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:ai4}} {{word:chi1}} {{word:tian2}}-{{word:de}}.",
      hanzi: "我爸爸妈妈的比我小的女孩子爱吃甜的。",
      en: "My younger sister loves sweet things.",
      ru: "Моя младшая сестра любит сладкое.",
    },
  ],
});
