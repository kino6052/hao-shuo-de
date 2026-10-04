// when-it-happens ("Time 1 — When it happens"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): done (le), right now (zài), will (huì), done before (guò), and saying the time first.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- when-it-happens).
import { lesson } from "../../../lib/lesson.ts";
import done from "./done.ts";
import now from "./now.ts";
import will from "./will.ts";
import before from "./before.ts";
import time from "./time.ts";

export const meta = {
  id: "when-it-happens",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Time 1 — When it happens", ru: "Время 1 — Когда это происходит" },
  summary: {
    en: [
      "We often need to say when something happens.",
      "In this lesson, you'll be able to say \"I ate.\", \"I'm eating right now.\", \"I will eat.\", \"I've seen this animal before.\", and \"At night, I sleep.\"",
    ],
    ru: [
      "Нам часто нужно уметь выразить время, когда что-то происходит.",
      "В этом уроке вы научитесь говорить «Я поел.», «Я как раз ем.», «Я буду есть.», «Я уже видел это животное.» и «Ночью я сплю.»",
    ],
  },
  modules: [
    done,
    now,
    will,
    before,
    time,
  ],
});
