import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 417,
  phase: 1,
  zh: "明年",
  py: "míngnián",
  en: "next year",
  ru: "в следующем году",
  pos: "noun",
  hsd: ["{{word:ming2}}-{{word:nian2}}", "{{word:hou4}} {{word:shi2}}-{{word:er4}}-ge {{word:yue4}}"],
  tts: ["明年", "后十二个月"],
  literal: "bright-year / the twelve months after",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ming2}}-{{word:nian2}} {{word:wo3}} {{word:er4}}-{{word:shi2}}.",
      hanzi: "明年我二十。",
      en: "Next year I'll be twenty.",
      ru: "В следующем году мне будет двадцать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ming2}}-{{word:nian2}} {{word:kai1shi3}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他明年开始工作。",
      en: "He starts work next year.",
      ru: "Он начнёт работать в следующем году.",
    },
  ],
});
