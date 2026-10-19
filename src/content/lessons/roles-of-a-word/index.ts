// roles-of-a-word ("Changing the Role of a Word"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): the jobs of -de: verb-de (the thing), verb-de rén (the one who), verb-de + adjective (how), and naming things with a description.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- roles-of-a-word).
import { lesson } from "../../../lib/lesson.ts";
import thing from "./thing.ts";
import person from "./person.ts";
import how from "./how.ts";
import name from "./name.ts";
import parts from "./parts.ts";
import thisWay from "./this-way.ts";
import reading from "./reading.ts";

export const meta = {
  id: "roles-of-a-word",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Spring, pale green accent. The same word does two jobs, and the bird mixes them up in a silly way. Cast: the student, the bird, Miao-miao.",
  title: { en: "Changing the Role of a Word", ru: "Слово в новой роли" },
  summary: {
    en: [
      "One word can do more than one job.",
      "In this lesson, you'll be able to say \"food\" ({{word:chi1}}-{{word:de}}), \"the one who writes\", and \"speak well\".",
    ],
    ru: [
      "Одно слово может делать больше одной работы.",
      "В этом уроке вы научитесь говорить «еда» ({{word:chi1}}-{{word:de}}), «тот, кто пишет» и «хорошо говорить».",
    ],
  },
  // Spring, pale green (MASCOT_PLAN.md): a small bird has eaten an astonishing amount.
  images: [
    {
      alt: {
        en: "A small bird stands on a table beside an empty pale green bowl, looking very full. The student looks at it, astonished, while the neighbor girl leans over to look too and Miao-miao watches from beside the table leg.",
        ru: "Маленькая птица стоит на столе рядом с пустой бледно-зелёной миской и выглядит очень сытой. Студент смотрит на неё в изумлении, соседская девочка тоже наклоняется посмотреть, а Miao-miao наблюдает у ножки стола.",
      },
      pinyin: "{{Word:ta1}} {{word:chi1}}-{{word:de}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他吃得很多。",
      en: "He eats a lot.",
      ru: "Он много ест.",
    },
  ],
  modules: [
    thing,
    person,
    how,
    thisWay,
    name,
    parts,
    reading,
  ],
});
