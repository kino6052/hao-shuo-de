import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("next-last-time", {
  meaning: {
    eng: "Xià-gè and shàng-gè before a time word say next and last: xià-gè yuè, next month. Xià yī gè rè-de shí-jiān is next summer.",
    rus: "Xià-gè и shàng-gè перед словом времени значат «следующий» и «прошлый»: xià-gè yuè — в следующем месяце. Xià yī gè rè-de shí-jiān — следующим летом.",
  },
  covers: ["grammar:when"],
  template: { hsd: "{{word:xia4}}-{{word:ge4}} / {{word:shang4}}-{{word:ge4}} + time word", eng: "Next / last time" },
  rules: [
    { lhs: "Next", hsd: "=xia4 =ge4", eng: "xià-gè, next" },
    { lhs: "Next", hsd: "=xia4 =yi1 =ge4", eng: "xià yī gè, the next one" },
    { lhs: "Next", hsd: "=shang4 =ge4", eng: "shàng-gè, last" },
    { lhs: "Next", hsd: "=shang4 =yi1 =ge4", eng: "shàng yī gè, the last one" },
    { lhs: "Next", hsd: "=qian2 =yi1 =ge4", eng: "qián yī gè, the one before" },
    { lhs: "Time", hsd: "Next @noun", eng: "next and a time word: next month" },
    { lhs: "Time", hsd: "Next Time", eng: "next and a time: next summer" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Wǒ xià-gè yuè lái.", "I'm coming next month."],
    ["Xià yī gè rè de shí-jiān, nǐ yě yào zuò.", "Next summer, you have to work too."],
  ],
});
