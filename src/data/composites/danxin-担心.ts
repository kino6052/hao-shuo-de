import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 409,
  phase: 1,
  zh: "担心",
  py: "dānxīn",
  en: "worry",
  ru: "волноваться",
  pos: "verb",
  hsd: ["{{word:pa4}}"],
  tts: ["怕"],
  fit: "natural",
  note: "wǒ pà tā bù lái: I'm worried he won't come.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:pa4}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "我怕他不来。",
      en: "I'm worried he won't come.",
      ru: "Я боюсь, что он не придёт.",
    },
    {
      pinyin: "{{Word:bie2}} {{word:pa4}}, {{word:mei2}}-{{word:you3}} {{word:wen4}}-{{word:ti2}}.",
      hanzi: "别怕，没有问题。",
      en: "Don't worry, it's fine.",
      ru: "Не волнуйся, всё в порядке.",
    },
  ],
});
