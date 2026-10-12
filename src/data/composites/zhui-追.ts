import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1423,
  phase: 3,
  zh: "追",
  py: "zhuī",
  en: "chase",
  ru: "догонять",
  pos: "verb",
  hsd: ["{{word:zai4}} X {{word:hou4}}-{{word:mian4}} {{word:kuai4}} {{word:qu4}}"],
  tts: ["在X后面快去"],
  literal: "go fast behind X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:ta1}} {{word:hou4}}-{{word:mian4}} {{word:kuai4}} {{word:qu4}}.",
      hanzi: "我在他后面快去。",
      en: "I chase after him.",
      ru: "Я гонюсь за ним.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:che1}} {{word:hou4}}-{{word:mian4}} {{word:kuai4}} {{word:qu4}}.",
      hanzi: "他在车后面快去。",
      en: "He chases after the car.",
      ru: "Он гонится за машиной.",
    },
  ],
});
