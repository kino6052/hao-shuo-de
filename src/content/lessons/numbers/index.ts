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
  story: "Spring, pale green accent. Counting what the student owns, what the girl has, and Miao-miao's one nap spot. All numbers are shown as dots and fingers: the pictures never carry digits. Cast: the student, the girl, Miao-miao, the bird.",
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
  // Spring, pale green (MASCOT_PLAN.md): counting three pebbles on the wall.
  images: [
    {
      alt: {
        en: "Spring. Three small pale green pebbles sit in a row on a low yard wall. The student touches them one by one with a finger, counting, while the neighbor girl holds up three fingers and smiles. Miao-miao sits at the foot of the wall.",
        ru: "Весна. На низкой стене двора в ряд лежат три маленьких бледно-зелёных камешка. Студент трогает их по очереди пальцем и считает, а соседская девочка показывает три пальца и улыбается. У подножия стены сидит Miao-miao.",
      },
      pinyin: "{{Word:yi1}}, {{word:er4}}, {{word:san1}}!",
      hanzi: "一，二，三！",
      en: "One, two, three!",
      ru: "Раз, два, три!",
    },
  ],
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
