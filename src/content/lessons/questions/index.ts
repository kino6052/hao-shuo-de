// questions ("Questions and Answers"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): yes-or-no questions (ma, verb-not-verb), what (shénme), why (wèishénme), how (zěnme), and answering.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- questions).
import { lesson } from "../../../lib/lesson.ts";
import yesNo from "./yes-no.ts";
import what from "./what.ts";
import whyHow from "./why-how.ts";
import answer from "./answer.ts";

export const meta = {
  id: "questions",
  type: "lesson",
};

export default lesson(meta.id, {
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
  modules: [
    yesNo,
    what,
    whyHow,
    answer,
  ],
});
