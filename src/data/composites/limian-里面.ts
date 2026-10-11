import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 483,
  phase: 1,
  zh: "里面",
  py: "lǐmiàn",
  en: "inside",
  ru: "внутри",
  pos: "noun",
  hsd: ["{{word:li3}}-{{word:mian4}}"],
  tts: ["里面"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:li3}}-{{word:mian4}} {{word:you3}} {{word:ren2}} {{word:ma}}?",
      hanzi: "里面有人吗？",
      en: "Is anyone inside?",
      ru: "Внутри кто-нибудь есть?",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:li3}}-{{word:mian4}}.",
      hanzi: "我们去里面。",
      en: "We're going inside.",
      ru: "Мы идём внутрь.",
    },
  ],
});
