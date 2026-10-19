// becoming-and-making ("Modifiers 4 — Becoming and making"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): it changed (adjective + le), became (biàn), making it so (zuò), putting the thing first (bǎ), where you put it (fàng), and strong (yǒu lì).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- becoming-and-making).
import { lesson } from "../../../lib/lesson.ts";
import changed from "./changed.ts";
import became from "./became.ts";
import make from "./make.ts";
import ba from "./ba.ts";
import baClean from "./ba-clean.ts";
import fang from "./fang.ts";
import strong from "./strong.ts";
import reading from "./reading.ts";

export const meta = {
  id: "becoming-and-making",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Spring, pale green accent. Snow melts, a plant grows and the student's room gets tidy: things become different and people make them so. Cast: the student, the girl, Miao-miao.",
  title: { en: "Modifiers 4 — Becoming and making", ru: "Уточнения 4 — Становиться и делать" },
  summary: {
    en: [
      "Things change, and we often make them change.",
      "In this lesson, you'll be able to say \"It got better.\", \"The water went bad.\", \"I fixed it.\", and \"He's very strong.\"",
    ],
    ru: [
      "Вещи меняются, и мы часто сами их меняем.",
      "В этом уроке вы научитесь говорить «Стало лучше.», «Вода испортилась.», «Я починил.» и «Он очень сильный.»",
    ],
  },
  // Spring, pale green (MASCOT_PLAN.md): the room is made clean; a plant sprouts on the sill.
  images: [
    {
      alt: {
        en: "A spring room, freshly swept. The student stands with a broom and hands on hips, pleased with the clean floor. On the windowsill a small plant with pale green leaves has just sprouted, and Miao-miao is curled up asleep on the tidy bed.",
        ru: "Весенняя комната, только что подметённая. Студент стоит с веником и руками на поясе, довольный чистым полом. На подоконнике проклюнулось маленькое растение с бледно-зелёными листьями, а Miao-miao спит, свернувшись клубком, на заправленной кровати.",
      },
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}.",
      hanzi: "我把房间干净。",
      en: "I make the room clean.",
      ru: "Я делаю комнату чистой.",
    },
  ],
  modules: [
    changed,
    became,
    make,
    ba,
    baClean,
    fang,
    strong,
    reading,
  ],
});
