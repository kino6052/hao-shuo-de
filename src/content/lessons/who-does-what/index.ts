// who-does-what ("Verbs 1 — Who does what"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): who + verb + what (and why the order matters), bù + verb, and yǒu / méi-yǒu.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- who-does-what).
import { lesson } from "../../../lib/lesson.ts";
import doPoint from "./do.ts";
import not from "./not.ts";
import have from "./have.ts";
import hearSee from "./hear-see.ts";
import reading from "./reading.ts";

export const meta = {
  id: "who-does-what",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Autumn, orange accent. The student and the girl have their first real exchange: who eats, who goes, who looks. It is the first time the student uses Hao-shuo-de on her, and she understands. Cast: the girl, the student, Miao-miao.",
  title: { en: "Verbs 1 — Who does what", ru: "Глаголы 1 — Кто что делает" },
  summary: {
    en: [
      "Like in every other language, we want to say that someone or something does something.",
      "In this lesson, you'll be able to say \"I drink water.\", \"She doesn't write.\", and \"I don't have money.\"",
    ],
    ru: [
      "Как и в любом языке, нам нужно уметь выразить действие.",
      "В этом уроке вы научитесь говорить «Я пью воду.», «Она не пишет.» и «У меня нет денег.»",
    ],
  },
  // Autumn, orange (MASCOT_PLAN.md): the student turns out two empty pockets; the girl drinks, Miao-miao looks.
  images: [
    {
      alt: {
        en: "The student turns out two empty pockets, with an embarrassed face; the orange pockets hang out. Beside them the neighbor girl drinks from a cup, and Miao-miao sits on the floor looking at the empty pockets.",
        ru: "Студент выворачивает два пустых кармана с неловким лицом; оранжевые карманы торчат наружу. Рядом соседская девочка пьёт из чашки, а Miao-miao сидит на полу и смотрит на пустые карманы.",
      },
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我没有金。",
      en: "I don't have money.",
      ru: "У меня нет денег.",
    },
  ],
  modules: [
    doPoint,
    hearSee,
    not,
    have,
    reading,
  ],
});
