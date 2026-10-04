// moving ("Space 2 — Moving"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): coming and going (lái / qù), from (cóng), arriving (dào), direction (qǐ-lái, shàng-lái, xià-lái, wài-miàn), moving (dòng), and far / nearby (yuǎn, fùjìn, D44).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- moving).
import { lesson } from "../../../lib/lesson.ts";
import comeGo from "./come-go.ts";
import from from "./from.ts";
import arrive from "./arrive.ts";
import direction from "./direction.ts";
import move from "./move.ts";
import far from "./far.ts";
import road from "./road.ts";

export const meta = {
  id: "moving",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Space 2 — Moving", ru: "Пространство 2 — Движение" },
  summary: {
    en: [
      "We often talk about coming and going.",
      "In this lesson, you'll be able to say \"Where do you come from?\", \"Go!\", \"Get up!\", \"I've arrived home.\", and \"I'm going outside.\"",
    ],
    ru: [
      "Нам часто нужно уметь сказать, куда мы идём, откуда пришли и куда движется что-то.",
      "В этом уроке вы научитесь говорить «Откуда ты?», «Иди!», «Вставай!», «Я пришёл домой.» и «Я иду на улицу.»",
    ],
  },
  modules: [
    comeGo,
    from,
    arrive,
    direction,
    move,
    far,
    road,
  ],
});
