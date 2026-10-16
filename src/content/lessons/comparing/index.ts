// comparing ("Modifiers 2 — Comparing"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): A bǐ B + adjective (bigger than), yī-yàng (the same), bù yī-yàng (different), bié-de (other), and zhǒng (kind).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- comparing).
import { lesson } from "../../../lib/lesson.ts";
import than from "./than.ts";
import most from "./most.ts";
import same from "./same.ts";
import different from "./different.ts";
import kind from "./kind.ts";
import shapeFeel from "./shape-feel.ts";
import size from "./size.ts";

export const meta = {
  id: "comparing",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Winter, blue accent. Cold, colder. The heater against the blanket. Miao-miao compares two tea cups and picks the lazier one. Cast: the student, the girl, Miao-miao.",
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
  // Winter, blue (MASCOT_PLAN.md): a big cup and a small cup; the student chooses the bigger.
  images: [
    {
      alt: {
        en: "On a table stand a big blue pitcher and a small plain cup. The student behind the table points at the big pitcher and smiles, and Miao-miao sits on the table between the two, looking at the big one.",
        ru: "На столе стоят большой синий кувшин и маленькая простая чашка. Студент за столом показывает на большой кувшин и улыбается, а Miao-miao сидит на столе между ними и смотрит на большой.",
      },
      pinyin: "{{Word:zhe4}}-ge {{word:bi3}} {{word:na4}}-ge {{word:da4}}.",
      hanzi: "这个比那个大。",
      en: "This one is bigger than that one.",
      ru: "Этот больше, чем тот.",
    },
  ],
  modules: [
    than,
    most,
    same,
    different,
    kind,
    shapeFeel,
    size,
  ],
});
