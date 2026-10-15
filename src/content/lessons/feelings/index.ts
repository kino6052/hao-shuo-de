// feelings ("Feelings"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Split off Greetings and Feelings (section cap, 7 per lesson): feelings (jué-de, pà, xiào, D41), remembering (jì-de), the heart (xīn), and hearing sounds (shēngyīn).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- feelings).
import { lesson } from "../../../lib/lesson.ts";
import feel from "./feel.ts";
import remember from "./remember.ts";
import laugh from "./laugh.ts";
import heart from "./heart.ts";
import hear from "./hear.ts";

export const meta = {
  id: "feelings",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Feelings", ru: "Чувства" },
  summary: {
    en: [
      "We also say how we feel, and what we hear and remember.",
      "In this lesson, you'll be able to say \"I feel cold.\" and \"I'm scared of fire.\"",
    ],
    ru: [
      "Мы ещё говорим, что чувствуем, слышим и помним.",
      "В этом уроке вы научитесь говорить «Мне холодно.» и «Я боюсь огня.»",
    ],
  },
  modules: [
    feel,
    remember,
    laugh,
    heart,
    hear,
  ],
});
