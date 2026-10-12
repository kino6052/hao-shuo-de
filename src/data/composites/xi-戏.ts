import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1502,
  phase: 3,
  zh: "戏",
  py: "xì",
  en: "play, show",
  ru: "спектакль, представление",
  pos: "noun",
  hsd: [
    "{{word:gei3}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zuo4}}-{{word:gei3}}-{{word:ren2}}-{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["给人看的东西", "做给人看的东西"],
  literal: "a thing for people to look at / a thing made for people to look at",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:gei3}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我爱看给人看的东西。",
      en: "I love watching plays.",
      ru: "Я люблю смотреть спектакли.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:you3}} {{word:gei3}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "今天有给人看的东西。",
      en: "There is a show today.",
      ru: "Сегодня есть представление.",
    },
  ],
});
