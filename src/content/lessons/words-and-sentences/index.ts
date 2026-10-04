// words-and-sentences ("Words and Sentences"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): NOUN + shì + NOUN, pointing with zhè, and NOUN + bù shì + NOUN.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- words-and-sentences).
import { lesson } from "../../../lib/lesson.ts";
import is from "./is.ts";
import thisPoint from "./this.ts";
import not from "./not.ts";

export const meta = {
  id: "words-and-sentences",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Words and Sentences", ru: "Слова и предложения" },
  summary: {
    en: [
      "Every language needs a way to say what something is.",
      "In this lesson, you'll be able to say \"This is a person.\" and \"An animal is not a plant.\"",
    ],
    ru: [
      "В любом языке нужно уметь выразить простые факты о людях, вещах и животных.",
      "В этом уроке вы научитесь говорить «Это человек.» и «Животное — не растение.»",
    ],
  },
  modules: [
    is,
    thisPoint,
    not,
  ],
});
