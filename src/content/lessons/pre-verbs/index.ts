// pre-verbs ("Pre-Verbs"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): want, can, learn to (xué, D40), know
// how, love to, and maybe (kě-néng, D36). Only words from lessons 2-7; passes every gate.
// Word cards sit next to the points that use them.
import { lesson } from "../../../lib/lesson.ts";
import want from "./want.ts";
import can from "./can.ts";
import learn from "./learn.ts";
import knowHow from "./know-how.ts";
import love from "./love.ts";
import maybe from "./maybe.ts";

export const meta = {
  id: "pre-verbs",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Pre-Verbs", ru: "Слова перед глаголом" },
  summary: {
    en: [
      "We often want to say what we want, can, learn, or know how to do.",
      "In this lesson, you'll be able to say \"I want to eat.\", \"I can hear.\", \"I'm learning to write.\", \"I know how to write.\", and \"I love to eat.\"",
    ],
    ru: [
      "Нам часто нужно сказать, что мы хотим, можем, учимся или умеем делать.",
      "В этом уроке вы научитесь говорить «Я хочу есть.», «Я могу слышать.», «Я учусь писать.», «Я умею писать.» и «Я люблю поесть.»",
    ],
  },
  modules: [
    want,
    can,
    learn,
    knowHow,
    love,
    maybe,
  ],
});
