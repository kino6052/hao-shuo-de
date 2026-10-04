// linking-sentences ("Relationships 2 — Linking sentences"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): because (yīnwèi), but (dànshì), and if (rúguǒ, D46), with yán, sǐ, and huó.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- linking-sentences).
import { lesson } from "../../../lib/lesson.ts";
import because from "./because.ts";
import but from "./but.ts";
import ifPoint from "./if.ts";
import then from "./then.ts";

export const meta = {
  id: "linking-sentences",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Relationships 2 — Linking sentences", ru: "Связи 2 — Как связать предложения" },
  summary: {
    en: [
      "We often join two ideas: one thing happens because of another, or only if something else is true.",
      "In this lesson, you'll be able to say \"Because I'm cold, I'm not going.\", \"It looks good, but it doesn't taste good.\", and \"If you come, I'll wait for you.\"",
    ],
    ru: [
      "Мы часто соединяем две мысли: одно происходит из-за другого или только если верно что-то ещё.",
      "В этом уроке вы научитесь говорить «Так как мне холодно, я не пойду.», «Выглядит хорошо, но невкусно.» и «Если ты придёшь, я тебя подожду.»",
    ],
  },
  modules: [
    because,
    but,
    ifPoint,
    then,
  ],
});
