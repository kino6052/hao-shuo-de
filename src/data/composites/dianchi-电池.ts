import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 869,
  phase: 2,
  zh: "电池",
  py: "diànchí",
  en: "battery",
  ru: "батарейка",
  pos: "noun",
  hsd: ["\"diàn\"-{{word:li4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["电力的小的东西"],
  literal: "the small thing with electric power",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} \"diàn\"-{{word:li4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有电力的小的东西。",
      en: "I have a battery.",
      ru: "У меня есть батарейка.",
    },
    {
      pinyin: "\"Diàn\"-{{word:li4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:mei2}} {{word:you3}} {{word:le}}.",
      hanzi: "电力的小的东西没有了。",
      en: "The battery has run out.",
      ru: "Батарейка села.",
    },
  ],
});
