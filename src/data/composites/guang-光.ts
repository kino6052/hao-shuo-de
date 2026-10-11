import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 611,
  phase: 2,
  zh: "光",
  py: "guāng",
  en: "light; used up",
  ru: "свет; кончиться",
  pos: "noun",
  hsd: [
    "{{word:rang4}}-{{word:ren2}}-{{word:kan4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:wan2}} {{word:le}}",
  ],
  tts: ["让人看到的东西", "完了"],
  literal: "a thing that lets people see / used up",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:fang2}}-{{word:jian1}}-{{word:li3}} {{word:you3}} {{word:rang4}}-{{word:ren2}}-{{word:kan4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "房间里有让人看到的东西。",
      en: "There is light in the room.",
      ru: "В комнате есть свет.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shui3}} {{word:wan2}} {{word:le}}.",
      hanzi: "我的水完了。",
      en: "My water is used up.",
      ru: "Моя вода закончилась.",
    },
  ],
});
