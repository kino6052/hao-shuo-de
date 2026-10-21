import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7210,
  phase: 4,
  zh: "邮票",
  py: "yóupiào",
  en: "postage stamp",
  ru: "почтовая марка",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:neng2}} {{word:qu4}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:xiao3}} {{word:dong1}}-{{light:xi1}}",
    "{{word:mai3}} {{word:le}} {{word:fang4}} {{word:zai4}} {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shang4}}-{{word:mian4}}-{{word:de}} {{word:xiao3}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让写的东西能去远的地方的小东西", "买了放在给远的人写的东西上面的小东西"],
  literal: "a small thing that lets a written thing go to a far place / a small thing you buy and put on top of what is written for a far person",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["paper-thing"],
  proposed: true,
});
