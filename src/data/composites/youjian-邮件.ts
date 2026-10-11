import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 719,
  phase: 2,
  zh: "邮件",
  py: "yóujiàn",
  en: "mail, email",
  ru: "почта",
  pos: "noun",
  hsd: [
    "{{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["给远的人写的东西"],
  literal: "something written to someone far away",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是给远的人写的东西。",
      en: "This is an email.",
      ru: "Это письмо.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有给远的人写的东西。",
      en: "I have an email.",
      ru: "У меня есть письмо.",
    },
  ],
});
