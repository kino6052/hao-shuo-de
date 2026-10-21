import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("last-of-span", {
  meaning: {
    eng: "A span of days, de, and zuì-hòu name its last days: qī tiān de zuì-hòu liǎng tiān, the last two of the seven days.",
    rus: "Промежуток дней, de и zuì-hòu называют его последние дни: qī tiān de zuì-hòu liǎng tiān — последние два из семи дней.",
  },
  covers: ["grammar:when"],
  tags: ["when", "count", "cat:time"],
  template: { hsd: "span {{word:de}} {{word:zui4}}-{{word:hou4}} + span", eng: "The last days of that span" },
  rules: [
    { lhs: "Time", hsd: "NP de =zui4 =hou4 NP", eng: "a span, de, zuì-hòu, and the last part" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Qī tiān de zuì-hòu liǎng tiān, wǒ zài jiā.", "At the weekend I am at home."],
  ],
});
