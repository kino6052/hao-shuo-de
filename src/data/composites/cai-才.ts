import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 406,
  phase: 1,
  zh: "才",
  py: "cái",
  en: "only then",
  ru: "только тогда",
  pos: "adverb",
  hsd: ["X-{{word:wan2}} {{word:hou4}}, Y"],
  tts: ["X完后，Y"],
  literal: "after finishing X, Y",
  fit: "skip",
  examples: [
    {
      pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:ni3}} {{word:qu4}} {{word:wan2r}}.",
      hanzi: "吃完后，你去玩儿。",
      en: "Only after eating can you go and play.",
      ru: "Сначала поешь, потом иди гулять.",
    },
    {
      pinyin: "{{Word:xie3}}-{{word:wan2}} {{word:hou4}}, {{word:ta1}} {{word:shui4jiao4}}.",
      hanzi: "写完后，他睡觉。",
      en: "Only after he finished writing did he sleep.",
      ru: "Только дописав, он лёг спать.",
    },
  ],
});
