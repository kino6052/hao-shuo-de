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
import age from "./age.ts";
import price from "./price.ts";
import reading from "./reading.ts";

export const meta = {
  id: "time-and-sums",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Spring, pale green accent. The clock, the date, the bill, and the mouse does the sum faster than everyone. The pictures use pebbles and clock hands, never written numerals. Cast: the mouse, the student, the girl, the bird.",
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
  // Spring, pale green (MASCOT_PLAN.md): the mouse does the sum with pebbles; the others look on.
  images: [
    {
      alt: {
        en: "Two small piles of pale green pebbles, three and four, sit on a little table. A mouse pushes them together and proudly raises a paw. The student and the neighbor girl lean over the table behind it, surprised. There is no cat.",
        ru: "На маленьком столе две кучки бледно-зелёных камешков: три и четыре. Мышь сдвигает их вместе и гордо поднимает лапку. Студент и соседская девочка за столом наклонились и удивлённо смотрят. Кошки нет.",
      },
      pinyin: "{{Word:wo3}} {{word:suan4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我算一下。",
      en: "I work it out.",
      ru: "Я посчитаю.",
    },
  ],
  modules: [
    clock,
    daysYears,
    age,
    little,
    price,
    addTake,
    timesShare,
    reading,
  ],
});
