import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1221,
  phase: 3,
  zh: "销售",
  py: "xiāoshòu",
  en: "sell",
  ru: "продавать",
  pos: "verb",
  hsd: ["{{word:gei3}}-{{word:dong1}}-{{light:xi1}}-{{word:de2}}-{{word:jin1}}"],
  tts: ["给东西得金"],
  literal: "give things, get money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:gei3}}-{{word:dong1}}-{{light:xi1}}-{{word:de2}}-{{word:jin1}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他做给东西得金的工作。",
      en: "He works in sales.",
      ru: "Он работает в продажах.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:gei3}}-{{word:dong1}}-{{light:xi1}}-{{word:de2}}-{{word:jin1}}.",
      hanzi: "他在网上给东西得金。",
      en: "He sells online.",
      ru: "Он продаёт онлайн.",
    },
  ],
});
