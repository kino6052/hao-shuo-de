import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 382,
  phase: 1,
  zh: "好像",
  py: "hǎoxiàng",
  en: "seem",
  ru: "кажется",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:qi3}}-{{word:lai2}}", "{{word:ke3}}-{{word:neng2}}"],
  tts: ["看起来", "可能"],
  literal: "looks like / maybe",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "他看起来很冷。",
      en: "He seems cold.",
      ru: "Похоже, ему холодно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:bu4}} {{word:nan2}}.",
      hanzi: "这个看起来不难。",
      en: "This seems easy.",
      ru: "Это, кажется, несложно.",
    },
  ],
});
