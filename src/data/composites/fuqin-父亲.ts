import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1376,
  phase: 3,
  zh: "父亲",
  py: "fùqīn",
  en: "father",
  ru: "отец",
  pos: "noun",
  hsd: [
    "{{word:ba4ba}}",
    "{{word:ba4ba}}-{{word:ma1ma}}-{{word:li3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}",
  ],
  tts: ["爸爸", "爸爸妈妈里的男人"],
  literal: "the man of the parents",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ba4ba}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的爸爸很好。",
      en: "My father is kind.",
      ru: "Мой отец добрый.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:li3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}.",
      hanzi: "他是我爸爸妈妈里的男人。",
      en: "He is my father.",
      ru: "Он мой отец.",
    },
  ],
});
