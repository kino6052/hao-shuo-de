import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 131,
  phase: 1,
  zh: "一起",
  py: "yìqǐ",
  en: "together",
  ru: "вместе",
  pos: "adverb",
  hsd: ["{{word:yi1}}-{{word:qi3}}"],
  tts: ["一起"],
  fit: "natural",
  note: "A fixed pair, like qǐ-lái.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:qi3}} {{word:qu4}} {{word:ma}}?",
      hanzi: "你和我一起去吗？",
      en: "Will you go with me?",
      ru: "Пойдёшь со мной?",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他们一起工作。",
      en: "They work together.",
      ru: "Они работают вместе.",
    },
  ],
});
