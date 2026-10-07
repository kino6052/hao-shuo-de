import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 133,
  phase: 1,
  zh: "下午",
  py: "xiàwǔ",
  en: "afternoon",
  ru: "после обеда",
  pos: "noun",
  hsd: [
    "{{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:hou4}}-{{word:de}} {{word:ri4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["十二点后的日的时间"],
  literal: "the daytime after twelve",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:hou4}}-{{word:de}} {{word:ri4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:wo3}} {{word:shui4jiao4}}.",
      hanzi: "十二点后的日的时间我睡觉。",
      en: "In the afternoon I sleep.",
      ru: "После обеда я сплю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:hou4}}-{{word:de}} {{word:ri4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:lai2}}.",
      hanzi: "他十二点后的日的时间来。",
      en: "He's coming in the afternoon.",
      ru: "Он придёт после обеда.",
    },
  ],
});
