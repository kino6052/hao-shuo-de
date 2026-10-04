// also-and-all ("Modifiers 3 — Also and all"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): also (yě) with verbs and with adjectives, all (dōu), everything (shénme-dōu), and part (bùfen). kāi and guān (open, close, D41) are theme words in the examples.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- also-and-all).
import { lesson } from "../../../lib/lesson.ts";
import alsoDo from "./also-do.ts";
import alsoIs from "./also-is.ts";
import all from "./all.ts";
import everything from "./everything.ts";
import part from "./part.ts";

export const meta = {
  id: "also-and-all",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Modifiers 3 — Also and all", ru: "Уточнения 3 — Тоже и все" },
  summary: {
    en: [
      "We often want to add one more thing, or talk about all of them.",
      "In this lesson, you'll be able to say \"I also eat.\", \"We all eat.\", \"I eat everything.\", and \"Most people eat rice.\"",
    ],
    ru: [
      "Нам иногда хочется добавить что-то к тому, о чем мы говорим, или сказать обо всем сразу.",
      "В этом уроке вы научитесь говорить «Я тоже ем.», «Мы все едим.», «Я ем всё.» и «Большинство людей едят рис.»",
    ],
  },
  modules: [
    alsoDo,
    alsoIs,
    all,
    everything,
    part,
  ],
});
