import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 936,
  phase: 2,
  zh: "弟弟",
  py: "dìdi",
  en: "younger brother",
  ru: "младший брат",
  pos: "noun",
  hsd: [
    "{{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:xiao3}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{light:zi}}",
  ],
  tts: ["我爸爸妈妈的比我小的男孩子"],
  literal: "my parents' boy, smaller than me",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:xiao3}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我爸爸妈妈的比我小的男孩子在家。",
      en: "My younger brother is at home.",
      ru: "Мой младший брат дома.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:xiao3}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我爸爸妈妈的比我小的男孩子很小。",
      en: "My younger brother is small.",
      ru: "Мой младший брат маленький.",
    },
  ],
});
