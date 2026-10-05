// comparing ("Modifiers 2 — Comparing"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): A bǐ B + adjective (bigger than), yīyàng (the same), bù yīyàng (different), biéde (other), and zhǒng (kind).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- comparing).
import { lesson } from "../../../lib/lesson.ts";
import than from "./than.ts";
import most from "./most.ts";
import same from "./same.ts";
import different from "./different.ts";
import kind from "./kind.ts";
import shapeFeel from "./shape-feel.ts";

export const meta = {
  id: "comparing",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Modifiers 2 — Comparing", ru: "Уточнения 2 — Сравнение" },
  summary: {
    en: [
      "We often compare one thing with another.",
      "In this lesson, you'll be able to say \"I'm bigger than you.\", \"They're the same.\", and \"I want different clothes.\"",
    ],
    ru: [
      "Мы часто сравниваем одно с другим.",
      "В этом уроке вы научитесь говорить «Я больше тебя.», «Они одинаковые.» и «Мне нужна другая одежда.»",
    ],
  },
  modules: [
    than,
    most,
    same,
    different,
    kind,
    shapeFeel,
  ],
});
