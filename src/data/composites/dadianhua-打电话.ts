import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 256,
  phase: 1,
  zh: "打电话",
  py: "dǎ diànhuà",
  en: "make a phone call",
  ru: "звонить",
  pos: "verb",
  hsd: ["{{word:da3}} {{word:hua4}}-{{word:ji1}}"],
  tts: ["打话机"],
  literal: "hit the talk machine",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wan3}}-{{light:shang4}} {{word:wo3}} {{word:da3}} {{word:hua4}}-{{word:ji1}} {{word:gei3}} {{word:ma1ma}}.",
      hanzi: "晚上我打话机给妈妈。",
      en: "In the evening I call mom.",
      ru: "Вечером я звоню маме.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:da3}} {{word:hua4}}-{{word:ji1}}.",
      hanzi: "他在打话机。",
      en: "He's on the phone.",
      ru: "Он разговаривает по телефону.",
    },
  ],
});
