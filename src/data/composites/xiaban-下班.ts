import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 797,
  phase: 2,
  zh: "下班",
  py: "xiàbān",
  en: "get off work",
  ru: "закончить работу",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:wan2}} {{word:le}}, {{word:hui2}} {{word:jia1}}"],
  tts: ["做完了，回家"],
  literal: "finished working, going home",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zuo4}}-{{word:wan2}} {{word:le}}, {{word:hui2}} {{word:jia1}}.",
      hanzi: "做完了，回家。",
      en: "Work is done, going home.",
      ru: "Работа кончена, иду домой.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:wan2}} {{word:le}}, {{word:hui2}} {{word:jia1}}.",
      hanzi: "我做完了，回家。",
      en: "I'm done working, going home.",
      ru: "Я закончил работу, иду домой.",
    },
  ],
});
