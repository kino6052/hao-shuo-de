import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1457,
  phase: 3,
  zh: "住宿",
  py: "zhùsù",
  en: "stay overnight",
  ru: "ночлег",
  pos: "verb",
  hsd: ["{{word:zai4}} {{word:wai4}}-{{word:mian4}} {{word:shui4jiao4}}"],
  tts: ["在外面睡觉"],
  literal: "sleep away from home",
  fit: "plain",
  topics: ["housing"],
  isA: ["body-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:wai4}}-{{word:mian4}} {{word:shui4jiao4}}.",
      hanzi: "我在外面睡觉。",
      en: "I stay overnight away from home.",
      ru: "Я ночую не дома.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:zai4}} {{word:wai4}}-{{word:mian4}} {{word:shui4jiao4}}.",
      hanzi: "他们在外面睡觉。",
      en: "They stay overnight outside.",
      ru: "Они ночуют вне дома.",
    },
  ],
});
