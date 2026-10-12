import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1444,
  phase: 3,
  zh: "面对",
  py: "miànduì",
  en: "face",
  ru: "сталкиваться, смотреть в лицо",
  pos: "verb",
  hsd: ["{{word:mian4}}-{{word:dui4}}", "{{word:dui4}}"],
  tts: ["面对", "对"],
  literal: "face toward",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mian4}}-{{word:dui4}} {{word:ta1}}.",
      hanzi: "我面对他。",
      en: "I face him.",
      ru: "Я стою лицом к нему.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mian4}}-{{word:dui4}} {{word:wo3}}.",
      hanzi: "他面对我。",
      en: "He faces me.",
      ru: "Он стоит лицом ко мне.",
    },
  ],
});
