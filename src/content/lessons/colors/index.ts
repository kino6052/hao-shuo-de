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
  modules: [
    colorThing,
    isColor,
    whatColor,
  ],
});
