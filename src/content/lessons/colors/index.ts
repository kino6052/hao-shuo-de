// colors ("Colors"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): color-de + noun, thing + shì + color-de, and asking shénme yánsè.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- colors).
import { lesson } from "../../../lib/lesson.ts";
import colorThing from "./color-thing.ts";
import isColor from "./is-color.ts";
import whatColor from "./what-color.ts";

export const meta = {
  id: "colors",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Spring, pale green accent, and the one chapter where the picture talks about its own color: the page is black line art, yet there are color words. Miao-miao points at the single colored thing. This is a planned exception to the one-accent rule: the scenes may use a red and a blue as well as green. Cast: the student, Miao-miao, the girl.",
  title: { en: "Colors", ru: "Цвета" },
  summary: {
    en: [
      "Colors help us tell things apart.",
      "In this lesson, you'll be able to say \"a red bag\", \"The water is blue.\", and \"What color is it?\"",
    ],
    ru: [
      "Цвета помогают отличать вещи друг от друга.",
      "В этом уроке вы научитесь говорить «красная сумка», «Вода синяя.» и «Какого это цвета?»",
    ],
  },
  // Spring, pale green; the planned exception (MASCOT_PLAN.md): the page is black line art, and the one colored thing is a red bag.
  images: [
    {
      alt: {
        en: "The neighbor girl holds a red bag, the only colored thing in the black-and-white picture. The student looks at it with curiosity, and Miao-miao sits between them and points at the bag with a raised paw.",
        ru: "Соседская девочка держит красную сумку: это единственная цветная вещь на чёрно-белой картинке. Студент с любопытством смотрит на неё, а Miao-miao сидит между ними и показывает на сумку поднятой лапой.",
      },
      pinyin: "{{Word:hong2}}-{{word:se4}}-{{word:de}} {{word:bao1}}.",
      hanzi: "红色的包。",
      en: "A red bag.",
      ru: "Красная сумка.",
    },
  ],
  modules: [
    colorThing,
    isColor,
    whatColor,
  ],
});
