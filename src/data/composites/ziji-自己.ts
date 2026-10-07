import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 70,
  phase: 1,
  zh: "自己",
  py: "zìjǐ",
  en: "oneself",
  ru: "сам, себя",
  pos: "pronoun",
  hsd: ["{{word:wo3}}", "{{word:ni3}}", "{{word:ta1}}"],
  tts: ["我", "你", "他"],
  fit: "word",
  note: "Just the pointer, depending on who: wǒ kàn wǒ.",
  examples: [
    {
      pinyin: "{{Word:bu4}} {{word:yong4}} {{word:bang1}} {{word:wo3}}, {{word:wo3}} {{word:hui4}} {{word:zuo4}}.",
      hanzi: "不用帮我，我会做。",
      en: "Don't help me, I can do it myself.",
      ru: "Не помогай, я сам справлюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:qu4}} {{word:le}}.",
      hanzi: "他一个人去了。",
      en: "He went by himself.",
      ru: "Он пошёл один.",
    },
  ],
});
