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
  story: "Autumn, orange accent. Miao-miao says a whole thought in two words, and the student tries one. The first small sentence works, and the student is delighted. Cast: Miao-miao and the student, at a table in the student's room.",
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
  // Autumn, orange (MASCOT_PLAN.md): the student points at Miao-miao; the bubble shows a plant crossed out.
  images: [
    {
      alt: {
        en: "The student points at Miao-miao, who sits beside them. In a speech bubble above the student, a small potted plant is crossed out with a bold orange X.",
        ru: "Студент показывает пальцем на Miao-miao, которая сидит рядом. В облачке над студентом маленькое растение в горшке перечёркнуто жирным оранжевым крестом.",
      },
      pinyin: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:zhi2wu4}}.",
      hanzi: "这不是植物。",
      en: "This is not a plant.",
      ru: "Это не растение.",
    },
  ],
  modules: [
    is,
    thisPoint,
    not,
  ],
});
