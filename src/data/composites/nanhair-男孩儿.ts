import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 569,
  phase: 2,
  zh: "男孩儿",
  py: "nánháir",
  en: "boy",
  ru: "мальчик",
  pos: "noun",
  hsd: ["{{word:nan2}}-{{word:hai2}}-{{light:zi}}"],
  tts: ["男孩子"],
  literal: "boy child",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "那个男孩子很高。",
      en: "That boy is tall.",
      ru: "Тот мальчик высокий.",
    },
    {
      pinyin: "{{Word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:wan2r}}.",
      hanzi: "男孩子在玩儿。",
      en: "The boy is playing.",
      ru: "Мальчик играет.",
    },
  ],
});
