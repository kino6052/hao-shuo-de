import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1181,
  phase: 3,
  zh: "自动",
  py: "zìdòng",
  en: "automatic",
  ru: "автоматический",
  pos: "adverb",
  hsd: [
    "{{word:ta1}} {{word:bu4}} {{word:yao4}} {{word:bie2}} {{word:ren2}}-{{word:de}} {{word:bang1}} {{word:jiu4}} {{word:dong4}}",
  ],
  tts: ["他不要别人的帮就动"],
  literal: "it moves without anyone's help",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:che1}}, {{word:ta1}} {{word:bu4}} {{word:yao4}} {{word:bie2}} {{word:ren2}}-{{word:de}} {{word:bang1}} {{word:jiu4}} {{word:dong4}}.",
      hanzi: "这个车，他不要别人的帮就动。",
      en: "This car runs automatically.",
      ru: "Эта машина едет автоматически.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:che1}}, {{word:ta1}} {{word:bu4}} {{word:yao4}} {{word:bie2}} {{word:ren2}}-{{word:de}} {{word:bang1}} {{word:jiu4}} {{word:dong4}}.",
      hanzi: "我的车，他不要别人的帮就动。",
      en: "My car runs on its own.",
      ru: "Моя машина едет сама.",
    },
  ],
});
