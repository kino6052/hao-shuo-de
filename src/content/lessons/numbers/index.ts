// numbers ("Numbers"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): counting aloud (yī, èr, sān), number + gè + noun (liǎng for two things), above ten (shí-èr, èr-shí), number labels (hào), o'clock (diǎn), a little (yī-diǎn, D41), and sums: add with fàng zài yī-qǐ, take away with ná, multiply and divide with cì (D42).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- numbers).
import { lesson } from "../../../lib/lesson.ts";
import aloud from "./aloud.ts";
import count from "./count.ts";
import countAlone from "./count-alone.ts";
import countKinds from "./count-kinds.ts";
import teens from "./teens.ts";
import label from "./label.ts";
import clock from "./clock.ts";
import daysYears from "./days-years.ts";
import little from "./little.ts";
import addTake from "./add-take.ts";
import timesShare from "./times-share.ts";

export const meta = {
  id: "numbers",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Numbers", ru: "Числа" },
  summary: {
    en: [
      "Every language needs a way to count.",
      "In this lesson, you'll be able to count, say \"two animals\", \"number two\", \"three o'clock\", and \"a little water\", and do sums: \"three and four together is seven\".",
    ],
    ru: [
      "В любом языке нужно уметь считать.",
      "В этом уроке вы научитесь считать, говорить «два животных», «номер два», «три часа» и «немного воды», а ещё складывать: «три и четыре вместе — семь».",
    ],
  },
  modules: [
    aloud,
    count,
    countAlone,
    countKinds,
    teens,
    label,
    clock,
    daysYears,
    little,
    addTake,
    timesShare,
  ],
});
