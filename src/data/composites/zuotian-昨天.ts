import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 89,
  phase: 1,
  zh: "昨天",
  py: "zuótiān",
  en: "yesterday",
  ru: "вчера",
  pos: "noun",
  hsd: ["{{word:qian2}}-{{word:yi1}}-{{word:tian1}}", "{{word:qian2}} {{word:yi1}}-ge {{word:ri4}}"],
  tts: ["前一天", "前一个日"],
  literal: "the day before / the sun before",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:qian2}}-{{word:yi1}}-{{word:tian1}} {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "前一天我在家。",
      en: "Yesterday I was at home.",
      ru: "Вчера я был дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:qian2}}-{{word:yi1}}-{{word:tian1}} {{word:lai2}} {{word:le}}.",
      hanzi: "他前一天来了。",
      en: "He came yesterday.",
      ru: "Он пришёл вчера.",
    },
  ],
});
