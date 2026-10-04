// where-it-is ("Space 1 — Where it is"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): zài + place, asking where (nǎlǐ), in / on / under, and the side words (qián-miàn, hòu-miàn, pángbiān).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- where-it-is).
import { lesson } from "../../../lib/lesson.ts";
import where from "./where.ts";
import whereQuestion from "./where-question.ts";
import inOnUnder from "./in-on-under.ts";
import sides from "./sides.ts";
import leftRight from "./left-right.ts";

export const meta = {
  id: "where-it-is",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Space 1 — Where it is", ru: "Пространство 1 — Где это" },
  summary: {
    en: [
      "We often need to say where things are.",
      "In this lesson, you'll be able to say \"The box is on the floor.\", \"inside the house\", \"in front of me\", and \"Where is it?\"",
    ],
    ru: [
      "Нам часто нужно сказать, где что находится.",
      "В этом уроке вы научитесь говорить «Коробка на полу.», «в доме», «передо мной» и «Где это?»",
    ],
  },
  modules: [
    where,
    whereQuestion,
    inOnUnder,
    sides,
    leftRight,
  ],
});
