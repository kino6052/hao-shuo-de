import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 244,
  phase: 1,
  zh: "脸",
  py: "liǎn",
  en: "face",
  ru: "лицо",
  pos: "noun",
  hsd: ["{{word:tou2}}-{{word:de}} {{word:qian2}}-{{word:mian4}}"],
  tts: ["头的前面"],
  literal: "the front of the head",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}}-{{word:de}} {{word:qian2}}-{{word:mian4}} {{word:hen3}} {{word:hong2}}.",
      hanzi: "他的头的前面很红。",
      en: "His face is red.",
      ru: "У него красное лицо.",
    },
    {
      pinyin: "{{Word:yong4}} {{word:shui3}} {{word:rang4}} {{word:tou2}}-{{word:de}} {{word:qian2}}-{{word:mian4}} {{word:gan1jing4}}.",
      hanzi: "用水让头的前面干净。",
      en: "Wash your face.",
      ru: "Умой лицо.",
    },
  ],
});
