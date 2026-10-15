// time-and-sums ("Numbers 2 — Time and sums"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Split off Numbers (section cap, 7 per lesson): o'clock (diǎn), days and years (tiān, nián), a little (yī-diǎn, D41), and sums: add with fàng zài yī-qǐ, take away with ná, multiply and divide with cì (D42).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- time-and-sums).
import { lesson } from "../../../lib/lesson.ts";
import clock from "./clock.ts";
import daysYears from "./days-years.ts";
import little from "./little.ts";
import addTake from "./add-take.ts";
import timesShare from "./times-share.ts";

export const meta = {
  id: "time-and-sums",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Numbers 2 — Time and sums", ru: "Числа 2 — Время и вычисления" },
  summary: {
    en: [
      "Numbers also tell the time, say how long, and do sums.",
      "In this lesson, you'll be able to say \"three o'clock\", \"a little water\", and \"three and four together is seven\".",
    ],
    ru: [
      "Числа ещё говорят о времени, о длительности и помогают считать.",
      "В этом уроке вы научитесь говорить «три часа», «немного воды» и «три и четыре вместе — семь».",
    ],
  },
  modules: [
    clock,
    daysYears,
    little,
    addTake,
    timesShare,
  ],
});
