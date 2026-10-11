import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 792,
  phase: 2,
  zh: "一共",
  py: "yígòng",
  en: "altogether, in total",
  ru: "всего, итого",
  pos: "adverb",
  hsd: ["{{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} …"],
  tts: ["放在一起，是…"],
  literal: "put together, it is …",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:fang4}}-{{word:zai4}}-{{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:wu3}}-{{light:ge4}}.",
      hanzi: "放在一起，是五个。",
      en: "In total, five.",
      ru: "Всего пять.",
    },
    {
      pinyin: "{{Word:fang4}}-{{word:zai4}}-{{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:shi2}} {{word:jin1}}.",
      hanzi: "放在一起，是十金。",
      en: "In total, ten.",
      ru: "Всего десять.",
    },
  ],
});
