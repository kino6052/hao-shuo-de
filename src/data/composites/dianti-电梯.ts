import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7051,
  phase: 4,
  zh: "电梯",
  py: "diàntī",
  en: "elevator",
  ru: "лифт",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:ren2}} {{word:zai4}} {{word:gao1}}-{{word:de}} {{word:fang2}}-{{word:zi}} {{word:li3}} {{word:shang4}}-{{word:xia4}}-{{word:de}} {{word:ji1}}",
    "{{word:yong4}} \"diàn\" {{word:rang4}} {{word:ren2}} {{word:shang4}}-{{word:xia4}}-{{word:de}} {{word:ji1}}",
  ],
  tts: ["让人在高的房子里上下的机", "用\"电\"让人上下的机"],
  literal: "a machine that lets people go up and down in a tall building / a machine that lets people go up and down with electricity",
  fit: "plain",
  topics: ["buildings"],
  isA: ["machine"],
  proposed: true,
});
