import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 399,
  phase: 1,
  zh: "快乐",
  py: "kuàilè",
  en: "happy",
  ru: "счастливый",
  pos: "adjective",
  hsd: ["{{word:kai1}}-{{word:xin1}}"],
  tts: ["开心"],
  literal: "open heart",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "我们在一起很开心。",
      en: "We're happy together.",
      ru: "Нам хорошо вместе.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:wan2r}}-{{word:de}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "孩子们玩儿得很开心。",
      en: "The children are having fun.",
      ru: "Дети весело играют.",
    },
  ],
});
