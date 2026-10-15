// numbers ("Numbers"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): counting aloud (yī, èr, sān), number + gè + noun (liǎng for two things), above ten (shí-èr, èr-shí), and number labels (hào).
// Split (section cap, 7 per lesson): the clock, days and years, a little, and sums moved to time-and-sums.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- numbers).
import { lesson } from "../../../lib/lesson.ts";
import aloud from "./aloud.ts";
import count from "./count.ts";
import countAlone from "./count-alone.ts";
import countKinds from "./count-kinds.ts";
import teens from "./teens.ts";
import label from "./label.ts";
import beforeAfter from "./before-after.ts";

export const meta = {
  id: "numbers",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Numbers", ru: "Числа" },
  summary: {
    en: [
      "Every language needs a way to count.",
      "In this lesson, you'll be able to count, say \"two animals\", \"twelve\", and \"number two\".",
    ],
    ru: [
      "В любом языке нужно уметь считать.",
      "В этом уроке вы научитесь считать, говорить «два животных», «двенадцать» и «номер два».",
    ],
  },
  modules: [
    aloud,
    count,
    countAlone,
    countKinds,
    teens,
    label,
    beforeAfter,
  ],
});
