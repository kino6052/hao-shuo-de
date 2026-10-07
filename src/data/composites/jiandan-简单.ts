import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 198,
  phase: 1,
  zh: "简单",
  py: "jiǎndān",
  en: "simple, easy",
  ru: "простой",
  pos: "adjective",
  hsd: [
    "{{word:bu4}} {{word:nan2}}",
    "{{word:bu4}}-{{light:fen1}}-{{word:hen3}}-{{word:shao3}}-{{word:de}}",
  ],
  tts: ["不难", "部分很少的"],
  literal: "not hard / with few parts",
  fit: "natural",
  note: "bù nán for easy; the parts description for not complicated.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}} {{word:nan2}}.",
      hanzi: "这个不难。",
      en: "This isn't hard.",
      ru: "Это несложно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ji1}}-{{word:qi4}} {{word:shi4}} {{word:bu4}}-{{light:fen1}}-{{word:hen3}}-{{word:shao3}}-{{word:de}}.",
      hanzi: "这个机器是部分很少的。",
      en: "This machine is simple.",
      ru: "Эта машина простая.",
    },
  ],
});
