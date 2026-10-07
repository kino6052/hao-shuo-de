import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 310,
  phase: 1,
  zh: "成功",
  py: "chénggōng",
  en: "succeed",
  ru: "добиться успеха",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:hao3}} {{word:le}}"],
  tts: ["做好了"],
  literal: "got it done",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zuo4}} {{word:hao3}} {{word:le}}!",
      hanzi: "我们做好了！",
      en: "We did it!",
      ru: "У нас получилось!",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:ci4}} {{word:ta1}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "这次他做好了。",
      en: "This time he succeeded.",
      ru: "На этот раз у него получилось.",
    },
  ],
});
