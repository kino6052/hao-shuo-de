import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1044,
  phase: 3,
  zh: "制作",
  py: "zhìzuò",
  en: "make, produce",
  ru: "изготовлять",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:zhe4}}-{{light:ge4}} {{word:shu1}}.",
      hanzi: "我做这个书。",
      en: "I'm making this book.",
      ru: "Я делаю эту книгу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他做很多。",
      en: "He makes a lot.",
      ru: "Он делает много.",
    },
  ],
});
