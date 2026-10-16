// questions ("Questions and Answers"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): yes-or-no questions (ma, verb-not-verb), what (shénme), why (wèi-shénme), how (zěnme), and answering.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- questions).
import { lesson } from "../../../lib/lesson.ts";
import yesNo from "./yes-no.ts";
import what from "./what.ts";
import whyHow from "./why-how.ts";
import answer from "./answer.ts";
import sayAsk from "./say-ask.ts";
import thingFirst from "./thing-first.ts";
import sayNo from "./say-no.ts";

export const meta = {
  id: "questions",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Autumn, orange accent. A mouse asks a sharp question from a corner, and the owner's note on the door is a question too; the student answers both. Cast: the mouse, the girl, the student, Miao-miao.",
  title: { en: "Questions and Answers", ru: "Вопросы и ответы" },
  summary: {
    en: [
      "Every conversation needs questions.",
      "In this lesson, you'll be able to ask \"What is this?\", \"Are you a person?\", \"Why?\", and \"How?\", and answer yes or no.",
    ],
    ru: [
      "Без вопросов не обходится ни один разговор.",
      "В этом уроке вы научитесь спрашивать «Что это?», «Почему?» и «Как?», а также отвечать «да» или «нет».",
    ],
  },
  // Autumn, orange (MASCOT_PLAN.md): a strange fruit and a question; the mouse peeks from the corner.
  images: [
    {
      alt: {
        en: "The student holds a strange fruit and frowns. A thought bubble above shows the same fruit and a question mark. The neighbor girl tilts her head beside them, Miao-miao looks up from the floor, and a small mouse peeks out from the corner of the wall. The fruit and question mark are orange.",
        ru: "Студент держит странный фрукт и хмурится. В облачке над ним тот же фрукт и вопросительный знак. Соседская девочка наклонила голову, Miao-miao смотрит снизу вверх, а из угла стены выглядывает маленькая мышь. Фрукт и вопросительный знак оранжевые.",
      },
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "这是什么？",
      en: "What is this?",
      ru: "Что это?",
    },
  ],
  modules: [
    yesNo,
    what,
    whyHow,
    thingFirst,
    answer,
    sayNo,
    sayAsk,
  ],
});
