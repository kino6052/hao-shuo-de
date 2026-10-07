import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 316,
  phase: 1,
  zh: "最近",
  py: "zuìjìn",
  en: "recently",
  ru: "недавно",
  pos: "noun",
  hsd: [
    "{{word:he2}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:yuan3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["和现在不远的时间"],
  literal: "a time not far from now",
  fit: "plain",
  note: "jìn now means \"go in\", so \"near\" here is bù yuǎn.",
  examples: [
    {
      pinyin: "{{Word:he2}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:yuan3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:ta1}} {{word:chang2}}-{{word:chang2}} {{word:lai2}}.",
      hanzi: "和现在不远的时间，他常常来。",
      en: "Lately he comes often.",
      ru: "В последнее время он часто приходит.",
    },
    {
      pinyin: "{{Word:he2}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:yuan3}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:wo3}} {{word:mei2}} {{word:kan4}}-{{word:dao4}} {{word:ta1}}.",
      hanzi: "和现在不远的时间我没看到他。",
      en: "I haven't seen him lately.",
      ru: "В последнее время я его не видел.",
    },
  ],
});
