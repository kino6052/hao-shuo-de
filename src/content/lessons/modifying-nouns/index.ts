// modifying-nouns ("Modifying Nouns"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): NOUN + hěn + adjective, adjective-de + NOUN, many (hěn-duō-de), and few (shǎo).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- modifying-nouns).
import { lesson } from "../../../lib/lesson.ts";
import like from "./like.ts";
import before from "./before.ts";
import many from "./many.ts";

export const meta = {
  id: "modifying-nouns",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Modifying Nouns", ru: "Описание существительных" },
  summary: {
    en: [
      "We often want to say what something is like.",
      "In this lesson, you'll be able to say \"The water is good.\", \"a big place\", \"good parents\", and \"many people\".",
    ],
    ru: [
      "В языке нужно уметь описать вещь.",
      "В этом уроке вы научитесь говорить «Вода хорошая.», «большое место», «хорошие родители» и «много людей».",
    ],
  },
  modules: [
    like,
    before,
    many,
  ],
});
