// around-an-action ("Time 2 — Around an action"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): when (X-de shíjiān), finished (verb-wán), after (verb-wán hòu), start (kāishǐ), for a moment (yīxià), again (yòu), and how many times (cì, D41). liú (stay, keep) is only used in their examples.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- around-an-action).
import { lesson } from "../../../lib/lesson.ts";
import when from "./when.ts";
import finished from "./finished.ts";
import after from "./after.ts";
import start from "./start.ts";
import moment from "./moment.ts";
import again from "./again.ts";
import times from "./times.ts";

export const meta = {
  id: "around-an-action",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Time 2 — Around an action", ru: "Время 2 — Вокруг действия" },
  summary: {
    en: [
      "We often talk about what happens around an action: before it, after it, or while it goes on.",
      "In this lesson, you'll be able to say \"When I eat, …\", \"I finished eating.\", \"after eating\", \"I started to play.\", and \"He ate again.\"",
    ],
    ru: [
      "Мы часто говорим о том, что происходит вокруг действия: до него, после него или пока оно идёт.",
      "В этом уроке вы научитесь говорить «Когда я ем, …», «Я доел.», «после еды», «Я начал играть.» и «Он опять поел.»",
    ],
  },
  modules: [
    when,
    finished,
    after,
    start,
    moment,
    again,
    times,
  ],
});
