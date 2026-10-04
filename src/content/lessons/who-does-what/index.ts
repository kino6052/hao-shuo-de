// who-does-what ("Verbs 1 — Who does what"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): who + verb + what (and why the order matters), bù + verb, and yǒu / méi-yǒu.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- who-does-what).
import { lesson } from "../../../lib/lesson.ts";
import doPoint from "./do.ts";
import not from "./not.ts";
import have from "./have.ts";

export const meta = {
  id: "who-does-what",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Verbs 1 — Who does what", ru: "Глаголы 1 — Кто что делает" },
  summary: {
    en: [
      "Like in every other language, we want to say that someone or something does something.",
      "In this lesson, you'll be able to say \"I eat rice.\", \"She doesn't write.\", and \"I don't have money.\"",
    ],
    ru: [
      "Как и в любом языке, нам нужно уметь выразить действие.",
      "В этом уроке вы научитесь говорить «Я ем рис.», «Она не пишет.» и «У меня нет денег.»",
    ],
  },
  modules: [
    doPoint,
    not,
    have,
  ],
});
