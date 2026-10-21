import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("dian-clock", {
  meaning: {
    eng: "A number and diǎn says the hour, and goes before the verb: wǒ sān diǎn huí jiā. An evening or a morning can come first: wǎn-shàng qī diǎn.",
    rus: "Число и diǎn называют час и стоят перед глаголом: wǒ sān diǎn huí jiā. Вечер или утро могут идти раньше: wǎn-shàng qī diǎn.",
  },
  covers: [],
  tags: ["when", "count", "cat:time"],
  template: { hsd: "number + {{word:dian3}}", eng: "The time of day" },
  rules: [
    { lhs: "Time", hsd: "Num =dian3", eng: "a number and diǎn: the hour" },
    { lhs: "Time", hsd: "=wan3 =shang4", eng: "wǎn-shàng, the evening" },
    { lhs: "Time", hsd: "=zao3 =shang4", eng: "zǎo-shàng, the morning" },
    { lhs: "Time", hsd: "Time Time", eng: "a part of the day, then the hour" },
  ],
  taught: "time-and-sums/clock",
  examples: [
    ["Wǒ sān diǎn huí jiā.", "I go home at three."],
    ["Wǒ shí-èr diǎn chī fàn.", "I eat at twelve o'clock."],
    ["Wǒ wǎn-shàng qī diǎn chī fàn.", "I eat at seven in the evening."],
  ],
});
