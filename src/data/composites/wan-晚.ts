import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 419,
  phase: 1,
  zh: "晚",
  py: "wǎn",
  en: "late",
  ru: "поздно",
  pos: "adjective",
  hsd: ["{{word:wan3}}", "{{word:bi3}} … {{word:hou4}}"],
  tts: ["晚", "比…后"],
  literal: "after …",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:lai2}} {{word:wan3}} {{word:le}}.",
      hanzi: "我来晚了。",
      en: "I'm late.",
      ru: "Я опоздал.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:hen3}} {{word:wan3}} {{word:le}}.",
      hanzi: "现在很晚了。",
      en: "It's late now.",
      ru: "Сейчас уже поздно.",
    },
  ],
});
