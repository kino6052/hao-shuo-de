import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("time-first", {
  meaning: {
    eng: "Says when: the time comes first, then a comma, then the rest. A time can also stand right after the doer.",
    rus: "Говорит, когда: сначала время, потом запятая, потом остальное. Время может стоять и сразу после того, кто делает.",
  },
  covers: ["grammar:when"],
  tags: ["when", "cat:time"],
  template: { hsd: "Time, who + verb", eng: "When, who does the verb" },
  rules: [
    { lhs: "Time", hsd: "=xian4 =zai4", eng: "xiànzài, now" },
    { lhs: "Time", hsd: "Mod =shi2 =jian1", eng: "the time of something: yuè-de shíjiān, at night" },
    { lhs: "Time", hsd: "=shen2me =shi2 =jian1", eng: "shénme shíjiān, when" },
    { lhs: "S", hsd: "Time @comma S", eng: "a time, a comma, then the sentence" },
    { lhs: "S", hsd: "Time S", eng: "a short time right before the sentence, no comma needed" },
    { lhs: "VP", hsd: "Time VP", eng: "a time right after the doer" },
  ],
  taught: "when-it-happens/time",
  examples: [
    ["Yuè-de shí-jiān, wǒ shuìjiào.", "At night, I sleep."],
    ["Xiàn-zài, wǒ yào shuìjiào.", "Now I want to sleep."],
    ["Shénme shí-jiān nǐ chī?", "When do you eat?"],
    ["Tā xiàn-zài zài shuìjiào.", "He's sleeping now."],
  ],
});
