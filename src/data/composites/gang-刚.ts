import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 226,
  phase: 1,
  zh: "刚",
  py: "gāng",
  en: "just now",
  ru: "только что",
  pos: "adverb",
  hsd: [
    "{{word:xian4}}-{{word:zai4}} … {{word:le}}",
    "{{word:xian4}}-{{word:zai4}} {{word:jiu4}} … {{word:le}}",
  ],
  tts: ["现在…了", "现在就…了"],
  literal: "now … has happened / right now … has happened",
  fit: "plain",
  note: "tā xiàn-zài lái le: he just came.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:xian4}}-{{word:zai4}} {{word:lai2}} {{word:le}}.",
      hanzi: "他现在来了。",
      en: "He just came.",
      ru: "Он только что пришёл.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xian4}}-{{word:zai4}} {{word:jiu4}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
      hanzi: "我现在就吃完了。",
      en: "I've just finished eating.",
      ru: "Я только что доел.",
    },
  ],
});
