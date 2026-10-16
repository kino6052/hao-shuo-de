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
import knowThat from "./know-that.ts";

export const meta = {
  id: "pre-verbs",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Autumn, orange accent. The student wants noodles, cannot pay, and has to go. Miao-miao, lazily, teaches want, can and must by example, and when it is its turn it chooses no. Cast: the student, Miao-miao.",
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
  // Autumn, orange (MASCOT_PLAN.md): the student wants the noodles; Miao-miao sleeps at their feet.
  images: [
    {
      alt: {
        en: "The student stands at a noodle-shop window with one hand in an empty pocket, pointing at a steaming orange bowl of noodles. Miao-miao is curled up asleep on the floor by the student's feet.",
        ru: "Студент стоит у окна лапшичной, одна рука в пустом кармане, другой показывает на дымящуюся оранжевую миску лапши. Miao-miao спит, свернувшись клубком, на полу у ног студента.",
      },
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "我要吃。",
      en: "I want to eat.",
      ru: "Я хочу есть.",
    },
  ],
  modules: [
    want,
    can,
    learn,
    knowHow,
    knowThat,
    love,
    maybe,
  ],
});
