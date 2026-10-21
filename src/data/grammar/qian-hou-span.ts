import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("qian-hou-span", {
  meaning: {
    eng: "Qián and hòu before a counted span of time name the one before or after: qián yī-ge rì is the day before, hòu shí-èr-ge yuè the twelve months after.",
    rus: "Qián и hòu перед посчитанным промежутком времени называют предыдущий или следующий: qián yī-ge rì — день до, hòu shí-èr-ge yuè — двенадцать месяцев после.",
  },
  covers: [],
  tags: ["when", "count", "cat:time"],
  template: {
    hsd: "{{word:qian2}} / {{word:hou4}} + number + measure word + span",
    eng: "The span before / after",
  },
  rules: [
    { lhs: "NP", hsd: "=qian2 Count @measure_word @noun", eng: "qián and a counted span: the one before" },
    { lhs: "NP", hsd: "=hou4 Count @measure_word @noun", eng: "hòu and a counted span: the one after" },
  ],
  taught: "numbers/before-after",
  examples: [
    ["Wǒ qián yī-ge rì zài jiā.", "The day before, I was at home."],
    ["Hòu shí-èr-ge yuè wǒ huí jiā.", "In the twelve months after, I go home."],
  ],
});
