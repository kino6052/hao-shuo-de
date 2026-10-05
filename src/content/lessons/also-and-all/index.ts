// also-and-all ("Modifiers 3 — Also and all"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): also (yě) with verbs and with adjectives, all (dōu), everything (shénme-dōu), and part (bù-fen). kāi and guān (open, close, D41) are theme words in the examples; light (dēng, míng, D53) turns them on and off.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- also-and-all).
import { lesson } from "../../../lib/lesson.ts";
import alsoDo from "./also-do.ts";
import light from "./light.ts";
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
      "In this lesson, you'll be able to say \"I also eat.\", \"We all eat.\", \"I eat everything.\", \"Most people love animals.\", and \"Turn on the light!\"",
    ],
    ru: [
      "Нам иногда хочется добавить что-то к тому, о чем мы говорим, или сказать обо всем сразу.",
      "В этом уроке вы научитесь говорить «Я тоже ем.», «Мы все едим.», «Я ем всё.», «Большинство людей любят животных.» и «Включи свет!»",
    ],
  },
  modules: [
    alsoDo,
    light,
    alsoIs,
    all,
    everything,
    part,
  ],
});
