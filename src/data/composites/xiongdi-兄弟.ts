import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1461,
  phase: 3,
  zh: "兄弟",
  py: "xiōngdì",
  en: "brothers",
  ru: "братья",
  pos: "noun",
  hsd: [
    "{{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{light:zi}}",
  ],
  tts: ["我爸爸妈妈的男孩子"],
  literal: "my parents' boys",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}}.",
      hanzi: "他是我爸爸妈妈的男孩子。",
      en: "He is my brother.",
      ru: "Он мой брат.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "我爸爸妈妈的男孩子很高。",
      en: "My brother is tall.",
      ru: "Мой брат высокий.",
    },
  ],
});
