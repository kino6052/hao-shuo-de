import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 574,
  phase: 2,
  zh: "一块儿",
  py: "yíkuàir",
  en: "together",
  ru: "вместе",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:qi3}}"],
  tts: ["一起"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:qu4}}.",
      hanzi: "我们一起去。",
      en: "Let's go together.",
      ru: "Пойдём вместе.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "你和我一起吃饭。",
      en: "You eat with me.",
      ru: "Ты ешь со мной.",
    },
  ],
});
