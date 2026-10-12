import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("tian-nian-spans", {
  meaning: {
    eng: "A number goes right before tiān (day) or nián (year), with no gè: sān tiān, three days. How long an action lasts goes after the verb. Míng-tiān (tomorrow), hòu-tiān, qù-nián (last year), míng-nián are times that go first.",
    rus: "Число стоит прямо перед tiān («день») или nián («год»), без gè: sān tiān — три дня. Сколько длится действие — после глагола. Míng-tiān («завтра»), hòu-tiān, qù-nián («прошлый год»), míng-nián — это время, оно идёт первым.",
  },
  covers: [],
  template: { hsd: "number + {{word:tian1}} / {{word:nian2}}", eng: "A number of days or years" },
  rules: [
    { lhs: "Span", hsd: "Num =tian1", eng: "a number and tiān: days" },
    { lhs: "Span", hsd: "Num =nian2", eng: "a number and nián: years" },
    { lhs: "NP", hsd: "Span", eng: "days or years as a thing: a year has twelve months" },
    { lhs: "VerbP", hsd: "@verb Span", eng: "a verb and how long" },
    { lhs: "VerbP", hsd: "@verb le Span", eng: "a verb, le, and how long: waited three days" },
    { lhs: "Time", hsd: "=jin1 =tian1", eng: "jīn-tiān, today" },
    { lhs: "Time", hsd: "=ming2 =tian1", eng: "míng-tiān, tomorrow" },
    { lhs: "Time", hsd: "=hou4 =tian1", eng: "hòu-tiān, the day after tomorrow" },
    { lhs: "Time", hsd: "=qian2 =yi1 =tian1", eng: "qián-yī-tiān, the day before" },
    { lhs: "Time", hsd: "=qu4 =nian2", eng: "qù-nián, last year" },
    { lhs: "Time", hsd: "=jin1 =nian2", eng: "jīn-nián, this year" },
    { lhs: "Time", hsd: "=ming2 =nian2", eng: "míng-nián, next year" },
  ],
  taught: "numbers/days-years",
  examples: [
    ["Wǒ děng le sān tiān.", "I waited three days."],
    ["Yī nián yǒu shí-èr ge yuè.", "A year has twelve months."],
    ["Míng-tiān wǒ huí jiā.", "I'll go home tomorrow."],
    ["Wǒ qián-yī-tiān qù le.", "I went yesterday."],
  ],
});
