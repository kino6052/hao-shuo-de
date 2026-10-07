import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 126,
  phase: 1,
  zh: "电视",
  py: "diànshì",
  en: "television",
  ru: "телевизор",
  pos: "noun",
  hsd: ["{{word:kan4}}-{{word:de}} {{word:ji1}}"],
  tts: ["看的机"],
  literal: "the watching machine",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:kan4}}-{{word:de}} {{word:ji1}} {{word:guan1}} {{word:le}}.",
      hanzi: "把看的机关了。",
      en: "Turn off the TV.",
      ru: "Выключи телевизор.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:jia1}} {{word:mei2}}-{{word:you3}} {{word:kan4}}-{{word:de}} {{word:ji1}}.",
      hanzi: "我们家没有看的机。",
      en: "We don't have a TV at home.",
      ru: "У нас дома нет телевизора.",
    },
  ],
});
