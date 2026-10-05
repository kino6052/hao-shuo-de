// how-much ("Modifiers 1 — How much"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): very (hěn), really (zhēn), not and not very (bù, bù hěn), hard and how something looks (nán, hǎo-kàn / nán-kàn, D53), asking how something is, and value (jiàzhí).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- how-much).
import { lesson } from "../../../lib/lesson.ts";
import very from "./very.ts";
import really from "./really.ts";
import not from "./not.ts";
import hardAndLooks from "./hard-and-looks.ts";
import ask from "./ask.ts";

export const meta = {
  id: "how-much",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Modifiers 1 — How much", ru: "Уточнения 1 — Насколько" },
  summary: {
    en: [
      "We often want to say how much: a little, or a lot.",
      "In this lesson, you'll be able to say \"really hot\", \"very cold\", \"not very strange\", \"She's beautiful.\", and \"Are you cold?\"",
    ],
    ru: [
      "Нам часто хочется сказать, насколько: чуть-чуть или очень.",
      "В этом уроке вы научитесь говорить «правда жарко», «очень холодно», «не очень странно», «Она красивая.» и «Тебе холодно?»",
    ],
  },
  modules: [
    very,
    really,
    not,
    hardAndLooks,
    ask,
  ],
});
