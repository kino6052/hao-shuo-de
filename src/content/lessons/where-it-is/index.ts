// where-it-is ("Space 1 — Where it is"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): zài + place, asking where (nǎ-lǐ), in / on / under, and the side words (qián-miàn, hòu-miàn, pángbiān).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- where-it-is).
import { lesson } from "../../../lib/lesson.ts";
import where from "./where.ts";
import whereQuestion from "./where-question.ts";
import inOnUnder from "./in-on-under.ts";
import sides from "./sides.ts";
import middle from "./middle.ts";
import leftRight from "./left-right.ts";
import reading from "./reading.ts";

export const meta = {
  id: "where-it-is",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Winter, blue accent. Where is Miao-miao? On the heater, under the table, in the bag. The student finds it only by asking and answering where. Cast: the student, Miao-miao, the mouse.",
  title: { en: "Space 1 — Where it is", ru: "Пространство 1 — Где это" },
  summary: {
    en: [
      "We often need to say where things are.",
      "In this lesson, you'll be able to say \"The bag is on the floor.\", \"inside the house\", \"in front of me\", and \"Where is it?\"",
    ],
    ru: [
      "Нам часто нужно сказать, где что находится.",
      "В этом уроке вы научитесь говорить «Сумка на полу.», «в доме», «передо мной» и «Где это?»",
    ],
  },
  // Winter, blue (MASCOT_PLAN.md): where is Miao-miao? In the bag; the mouse knows.
  images: [
    {
      alt: {
        en: "The student bends down and looks under a table, worried, searching. On the floor beside the table stands a big open blue backpack, and Miao-miao's head peeks out of it, looking pleased. A small mouse watches from the corner of the wall.",
        ru: "Студент наклонился и встревоженно ищет что-то под столом. На полу рядом со столом стоит большой открытый синий рюкзак, из которого довольно выглядывает голова Miao-miao. Из угла стены наблюдает маленькая мышь.",
      },
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:bao1}}-{{word:li3}}.",
      hanzi: "她在包里。",
      en: "She is in the bag.",
      ru: "Она в сумке.",
    },
  ],
  modules: [
    where,
    whereQuestion,
    inOnUnder,
    sides,
    middle,
    leftRight,
    reading,
  ],
});
