// becoming-and-making ("Modifiers 4 — Becoming and making"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): it changed (adjective + le), became (biàn), making it so (nòng), putting the thing first (bǎ), where you put it (fàng), and strong (yǒu lìliàng).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- becoming-and-making).
import { lesson } from "../../../lib/lesson.ts";
import changed from "./changed.ts";
import became from "./became.ts";
import make from "./make.ts";
import ba from "./ba.ts";
import fang from "./fang.ts";
import strong from "./strong.ts";

export const meta = {
  id: "becoming-and-making",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Modifiers 4 — Becoming and making", ru: "Уточнения 4 — Становиться и делать" },
  summary: {
    en: [
      "Things change, and we often make them change.",
      "In this lesson, you'll be able to say \"It got better.\", \"The fruit went bad.\", \"I fixed it.\", and \"He's very strong.\"",
    ],
    ru: [
      "Вещи меняются, и мы часто сами их меняем.",
      "В этом уроке вы научитесь говорить «Стало лучше.», «Фрукт испортился.», «Я починил.» и «Он очень сильный.»",
    ],
  },
  modules: [
    changed,
    became,
    make,
    ba,
    fang,
    strong,
  ],
});
