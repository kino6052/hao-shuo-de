import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("span-after", {
  meaning: {
    eng: "A length of time and hòu or qián says how long after or before: sān tiān hòu, in three days.",
    rus: "Промежуток времени и hòu или qián говорят, через сколько или сколько назад: sān tiān hòu — через три дня.",
  },
  covers: ["grammar:when"],
  template: { hsd: "span + {{word:hou4}} / {{word:qian2}}", eng: "After / before that long" },
  rules: [
    { lhs: "Time", hsd: "Span =hou4", eng: "a span and hòu: after three days" },
    { lhs: "Time", hsd: "Span =qian2", eng: "a span and qián: three days ago" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Sān tiān hòu wǒ lái.", "I'll come in three days."],
    ["Liǎng tiān qián tā huí jiā le.", "He went home two days ago."],
  ],
});
